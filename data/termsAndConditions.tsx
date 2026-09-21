import Link from "next/link";
import type { LegalPageData } from "@/types/legal";

export const termsAndConditionsData: LegalPageData = {
    meta: {
        title: "Terms & Conditions | Fairwinds Shipping",
        description:
            "Read the terms that govern your use of the Fairwinds Shipping website, including enquiries, acceptable use, intellectual property, and governing law.",
    },
    banner: {
        title: "Terms & Conditions",
        description:
            "Welcome to the official website of Fairwinds Shipping (the “Website”). This Website is operated by Fairwinds Shipping Private Limited (“Fairwinds Shipping”, “we”, “us”, or “our”). Please read these Terms and Conditions (“Terms”) carefully before using the Website. By accessing or using any part of this Website, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.",
    },
    sections: [
        {
            title: "Purpose of the Website",
            description: (
                <>
                    <p>
                        This Website is provided for informational and corporate enquiry purposes
                        only. It outlines our logistics and freight capabilities (including Ocean
                        Freight, Air Freight, Customs Clearance, and Multimodal Transport).
                    </p>
                    <p>
                        These Terms govern your use of the Website only. Any actual shipping,
                        carriage, freight forwarding, or warehousing services provided by
                        Fairwinds Shipping are strictly subject to separate quotations, standard
                        trading conditions, and relevant transport documents (such as Bills of
                        Lading or Service Agreements).
                    </p>
                </>
            ),
        },
        {
            title: "Website Enquiries & Communications",
            description: (
                <>
                    <p>
                        Our Website allows visitors to submit rate inquiries and contact requests.
                        When you submit a form, we collect:
                    </p>
                    <ul>
                        <li>First Name and Last Name</li>
                        <li>Contact Number and Email Address</li>
                        <li>Service Interested In</li>
                        <li>Cargo Quantity (in Tons)</li>
                        <li>Message Details</li>
                    </ul>
                    <p>
                        Submitting an enquiry does not constitute a confirmed booking, rate lock,
                        or contract for carriage. Rates and schedules remain indicative until
                        formally agreed upon in writing. By submitting your contact details, you
                        consent to Fairwinds Shipping contacting you via phone, email, or message
                        regarding your inquiry.
                    </p>
                </>
            ),
        },
        {
            title: "Intellectual Property",
            description: (
                <p>
                    All content on this Website&mdash;including text, graphics, logos, layouts, and
                    design materials&mdash;is the property of Fairwinds Shipping or its licensors.
                    You may view and download material for personal or legitimate business
                    reference only. Any unauthorized reproduction, distribution, or commercial use
                    without prior written consent is strictly prohibited.
                </p>
            ),
        },
        {
            title: "Acceptable Use & Compliance",
            description: (
                <>
                    <p>
                        You agree to use this Website only for lawful business purposes. You must
                        not:
                    </p>
                    <ul>
                        <li>
                            Attempt to disrupt, compromise, or gain unauthorized access to our
                            servers or networks.
                        </li>
                        <li>Submit false, misleading, or fraudulent freight inquiries.</li>
                        <li>
                            Submit inquiries involving sanctioned entities, restricted goods, or
                            hazardous cargo without prior written authorization.
                        </li>
                        <li>Use automated scrapers, bots, or data-extraction tools on the Website.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Third-Party Links & Services",
            description: (
                <p>
                    The Website may include links to external websites, social media channels, or
                    embedded services such as Google Maps to display our office locations.
                    Fairwinds Shipping does not control and is not responsible for the content,
                    security, or privacy practices of these third-party services. Your use of
                    external tools is governed by their respective terms and policies.
                </p>
            ),
        },
        {
            title: "Disclaimer of Warranties",
            description: (
                <p>
                    The Website and all displayed information are provided on an &ldquo;AS
                    IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind.
                    While we aim to keep operational details current, Fairwinds Shipping does not
                    warrant that shipping schedules, routes, transit times, or service availability
                    shown on the site will be error-free or uninterrupted.
                </p>
            ),
        },
        {
            title: "Limitation of Liability",
            description: (
                <>
                    <p>
                        To the fullest extent permitted by applicable law, Fairwinds Shipping, its
                        directors, employees, and partners will not be liable for any indirect,
                        incidental, or consequential damages resulting from your access to or
                        reliance on this Website.
                    </p>
                    <p>
                        <strong>Note:</strong> All liability concerning cargo loss, transit delays,
                        or physical freight is governed exclusively by our separate shipping
                        contracts and applicable maritime law.
                    </p>
                </>
            ),
        },
        {
            title: "Privacy",
            description: (
                <p>
                    Your privacy is important to us. Any personal details submitted via our contact
                    forms or email channels are handled in accordance with our{" "}
                    <Link href="/privacy-policy" className="underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            ),
        },
        {
            title: "Governing Law & Jurisdiction",
            description: (
                <p>
                    These Terms are governed by and construed in accordance with the laws of India.
                    Any dispute arising under or relating to these Website Terms shall be subject
                    to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.
                </p>
            ),
        },
        {
            title: "Contact Us",
            description: (
                <>
                    <p>If you have any questions regarding these Terms, please reach out to us:</p>
                    <ul>
                        <li>
                            <strong>Company Name:</strong> Fairwinds Shipping Private Limited
                        </li>
                        <li>
                            <strong>Registered Address:</strong> 504, D &amp; C Phonix, Opp. Aanal
                            Flat, Vijay Cross Rd, Ahmadabad City, Ahmedabad, Gujarat, 380009, India
                        </li>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:info@fairwindsshipping.com" className="underline">
                                info@fairwindsshipping.com
                            </a>
                        </li>
                        <li>
                            <strong>Phone:</strong>{" "}
                            <a href="tel:+917940097107" className="underline">
                                +91-7940097107
                            </a>
                        </li>
                    </ul>
                </>
            ),
        },
    ],
};
