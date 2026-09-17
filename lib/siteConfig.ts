import { contactInfo, socialLinks } from "@/lib/navigation";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://f2f-web.vercel.app").replace(/\/$/, "");

// Excludes placeholder links ("#") and bare domain roots (e.g. "https://facebook.com")
// that aren't an actual profile page — schema.org sameAs should only list real
// profile URLs. This fills in automatically once real profile links are added
// to `socialLinks` in lib/navigation.ts.
function isRealSocialUrl(href: string): boolean {
    if (!href || href === "#") return false;
    try {
        return new URL(href).pathname.length > 1;
    } catch {
        return false;
    }
}

export const siteConfig = {
    name: "Fairwinds Shipping Pvt Ltd",
    shortName: "Fairwinds Shipping",
    url: SITE_URL,
    description:
        "Global freight forwarding and logistics solutions — FCL, LCL, customs clearance, project cargo, and more.",
    logo: `${SITE_URL}/images/favicons/favicon-192x192.png`,
    phone: contactInfo.phone,
    email: contactInfo.email,
    sameAs: socialLinks.map((social) => social.href).filter(isRealSocialUrl),
};
