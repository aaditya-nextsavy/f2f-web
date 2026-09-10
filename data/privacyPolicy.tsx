import type { LegalPageData } from "@/types/legal";

export const privacyPolicyData: LegalPageData = {
    meta: {
        title: "Privacy Policy | Fairwinds Shipping",
        description:
            "Learn what information Fairwinds Shipping collects, how we use it, and the choices you have when you work with us.",
    },
    banner: {
        title: "Your Privacy, Our Priority",
        description:
            "We explain what information we collect, how we use it, and the choices you have when you work with us.",
    },
    sections: [
        {
            title: "Information We Collect",
            description: (
                <>
                    <p>
                        When you request a quote, book a shipment, or contact us, we may collect:
                    </p>
                    <ol>
                        <li>Contact details such as your name, email, and phone number.</li>
                        <li>Company and shipment information related to your cargo.</li>
                        <li>
                            Communication records, including messages sent through our contact
                            forms.
                        </li>
                    </ol>
                </>
            ),
        },
        {
            title: "How We Use Your Information",
            description: (
                <p>
                    We use the information you provide to prepare quotations, coordinate
                    shipments, respond to enquiries, and communicate updates about your cargo. We
                    do not use your information for purposes unrelated to providing our services
                    without your consent.
                </p>
            ),
        },
        {
            title: "Sharing Your Information",
            description: (
                <p>
                    We may share necessary shipment details with carriers, customs authorities,
                    and other partners involved in moving your cargo. We do not sell your personal
                    information to third parties.
                </p>
            ),
        },
        {
            title: "Data Security",
            description: (
                <p>
                    We take reasonable measures to protect the information you share with us
                    against unauthorized access, alteration, or disclosure. However, no method of
                    transmission or storage is completely secure.
                </p>
            ),
        },
        {
            title: "Your Rights",
            description: (
                <>
                    <p>Depending on your location, you may have the right to:</p>
                    <ol>
                        <li>Request access to the personal information we hold about you.</li>
                        <li>Ask us to correct or update inaccurate information.</li>
                        <li>Request that we delete your information where applicable.</li>
                    </ol>
                </>
            ),
        },
        {
            title: "Changes to This Policy",
            description: (
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be
                    posted on this page with a revised effective date.
                </p>
            ),
        },
    ],
};
