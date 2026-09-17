import path from "node:path";
import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import { validateContactForm } from "@/lib/validateContactForm";
import { verifyRecaptchaToken } from "@/lib/verifyRecaptcha";
import { socialLinks } from "@/lib/navigation";
import type { ContactFormValues } from "@/types/contact";

export const runtime = "nodejs";

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

const BRAND = {
    primary: "#11227A",
    white: "#FFFFFF",
    black: "#1B1918",
    border: "#E2E6F5",
    muted: "#6B7094",
};

const SOCIAL_ICON_FILES = ["facebook", "x", "linkedin", "instagram"];
const EMAIL_ASSETS_DIR = path.join(process.cwd(), "public", "images", "email");

// Embedded as inline attachments (cid:) rather than linked by URL — email
// clients fetch <img src> over the public internet, so a localhost or
// not-yet-live domain would just show broken images. Inline attachments
// work everywhere with no hosting dependency.
function emailImageAttachments() {
    return [
        { filename: "logo.png", path: path.join(EMAIL_ASSETS_DIR, "logo.png"), cid: "email-logo" },
        ...SOCIAL_ICON_FILES.map((name) => ({
            filename: `social-${name}.png`,
            path: path.join(EMAIL_ASSETS_DIR, `social-${name}.png`),
            cid: `email-social-${name}`,
        })),
    ];
}

function emailShell(preheader: string, bodyHtml: string) {
    const socialRow = socialLinks
        .map((social, index) => {
            const iconFile = SOCIAL_ICON_FILES[index];
            if (!iconFile) return "";
            return `<a href="${escapeHtml(social.href)}" style="display:inline-block;margin-right:10px;" aria-label="${escapeHtml(social.label)}"><img src="cid:email-social-${iconFile}" width="40" height="40" alt="${escapeHtml(social.label)}" style="display:block;border-radius:10px;" /></a>`;
        })
        .join("");

    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background:${BRAND.white};font-family:Arial,Helvetica,sans-serif;color:${BRAND.black};">
    <span style="display:none;font-size:1px;color:${BRAND.white};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
      ${escapeHtml(preheader)}
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.white};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 8px;">
                <img src="cid:email-logo" width="170" height="31" alt="Fairwinds Shipping Pvt Ltd" style="display:block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;border-top:1px solid ${BRAND.border};">
                <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:${BRAND.primary};">Follow us on</p>
                <div>${socialRow}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

function adminEmailHtml(rows: [string, string][], message: string | undefined) {
    const body = `
    <h2 style="margin:0 0 20px;font-size:20px;font-weight:700;color:${BRAND.primary};">
      New quote request
    </h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${rows
          .map(
              ([label, value], index) => `
        <tr style="background:${index % 2 === 0 ? BRAND.white : "#F7F8FC"};">
          <td style="padding:10px 12px;border:1px solid ${BRAND.border};font-size:13px;font-weight:700;color:${BRAND.primary};width:160px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:10px 12px;border:1px solid ${BRAND.border};font-size:13px;color:${BRAND.black};">
            ${escapeHtml(value)}
          </td>
        </tr>`,
          )
          .join("")}
    </table>
    <p style="margin:20px 0 6px;font-size:13px;font-weight:700;color:${BRAND.primary};">Message</p>
    <p style="margin:0;font-size:14px;line-height:22px;color:${BRAND.black};white-space:pre-wrap;">
      ${message?.trim() ? escapeHtml(message) : "No message provided."}
    </p>
  `;
    return emailShell("New quote request received", body);
}

function userEmailHtml(firstName: string) {
    const body = `
    <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:${BRAND.primary};">
      Thank you for reaching out
    </h2>
    <p style="margin:0 0 14px;font-size:14px;line-height:24px;color:${BRAND.black};">
      Dear ${escapeHtml(firstName)},
    </p>
    <p style="margin:0 0 14px;font-size:14px;line-height:24px;color:${BRAND.black};">
      Thank you for contacting Fairwinds Shipping. We've received your request and our team is
      reviewing the details. We'll get back to you shortly with a response.
    </p>
    <p style="margin:0;font-size:14px;line-height:24px;color:${BRAND.black};">
      Best regards,<br />
      Fairwinds Shipping Pvt Ltd
    </p>
  `;
    return emailShell("Thank you for contacting Fairwinds Shipping", body);
}

export async function POST(request: Request) {
    let payload: Partial<ContactFormValues>;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    const errors = validateContactForm(payload);
    if (Object.keys(errors).length > 0) {
        return NextResponse.json(
            { message: "Please fix the highlighted fields and try again.", errors },
            { status: 400 },
        );
    }

    const recaptchaValid = await verifyRecaptchaToken(payload.recaptchaToken, "contact_form_submit");
    if (!recaptchaValid) {
        return NextResponse.json(
            { message: "We couldn't verify your submission. Please refresh the page and try again." },
            { status: 400 },
        );
    }

    const { firstName, lastName, contactNumber, email, service, cargoQuantity, message } =
        payload as ContactFormValues;

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_RECIPIENT_EMAIL } =
        process.env;
    const hasSmtpConfig = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_RECIPIENT_EMAIL);

    let transporter: Transporter;
    let fromAddress: string;
    let recipientEmail: string;
    let usingEthereal = false;

    if (hasSmtpConfig) {
        transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: Number(SMTP_PORT) === 465,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });
        fromAddress = SMTP_FROM || (SMTP_USER as string);
        recipientEmail = CONTACT_RECIPIENT_EMAIL as string;
    } else if (process.env.NODE_ENV !== "production") {
        // No SMTP env vars set — spin up a throwaway Ethereal inbox so the
        // form can be tested locally without any real email account.
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: { user: testAccount.user, pass: testAccount.pass },
        });
        fromAddress = testAccount.user;
        recipientEmail = CONTACT_RECIPIENT_EMAIL || testAccount.user;
        usingEthereal = true;
        console.log(
            `[contact] No SMTP config found — using a temporary Ethereal inbox (${testAccount.user}) for this dev submission.`,
        );
    } else {
        console.error("Contact form submission failed: missing SMTP configuration in the environment.");
        return NextResponse.json(
            { message: "Email service isn't configured yet. Please try again later." },
            { status: 500 },
        );
    }

    const rows: [string, string][] = [
        ["Name", `${firstName} ${lastName}`],
        ["Email", email],
        ["Contact Number", contactNumber],
        ["Service", service],
    ];
    if (cargoQuantity?.trim()) rows.push(["Cargo Quantity", cargoQuantity]);

    try {
        const info = await transporter.sendMail({
            from: fromAddress,
            to: recipientEmail,
            replyTo: email,
            subject: `New quote request from ${firstName} ${lastName}`,
            text: [
                ...rows.map(([label, value]) => `${label}: ${value}`),
                "",
                message?.trim() ? `Message:\n${message}` : "No message provided.",
            ].join("\n"),
            html: adminEmailHtml(rows, message),
            attachments: emailImageAttachments(),
        });
        if (usingEthereal) {
            console.log(`[contact] Admin email preview: ${nodemailer.getTestMessageUrl(info)}`);
        }
    } catch (error) {
        console.error("Failed to send contact form email:", error);
        return NextResponse.json(
            { message: "We couldn't send your message. Please try again in a moment." },
            { status: 502 },
        );
    }

    try {
        const info = await transporter.sendMail({
            from: fromAddress,
            to: email,
            subject: "Thank you for contacting Fairwinds Shipping",
            text: `Dear ${firstName},\n\nThank you for contacting Fairwinds Shipping. We've received your request and our team is reviewing the details. We'll get back to you shortly with a response.\n\nBest regards,\nFairwinds Shipping Pvt Ltd`,
            html: userEmailHtml(firstName),
            attachments: emailImageAttachments(),
        });
        if (usingEthereal) {
            console.log(`[contact] Confirmation email preview: ${nodemailer.getTestMessageUrl(info)}`);
        }
    } catch (error) {
        console.error("Failed to send contact form confirmation email:", error);
    }

    return NextResponse.json({
        message: "Thanks! Your message has been sent — we'll be in touch shortly.",
    });
}
