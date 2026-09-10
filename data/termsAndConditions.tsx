import type { LegalPageData } from "@/types/legal";

export const termsAndConditionsData: LegalPageData = {
    meta: {
        title: "Terms & Conditions | Fairwinds Shipping",
        description:
            "Read the terms that govern Fairwinds Shipping's freight forwarding and logistics services, and your rights and responsibilities as a customer.",
    },
    banner: {
        title: "Terms That Govern Our Services",
        description:
            "These terms outline how our shipping and logistics services work, along with your rights and responsibilities as a customer.",
    },
    sections: [
        {
            title: "Acceptance of Terms",
            description: (
                <p>
                    By requesting a quote, booking a shipment, or otherwise using Fairwinds
                    Shipping&apos;s services, you agree to be bound by these Terms &amp;
                    Conditions. If you do not agree with any part of these terms, please do not
                    use our services.
                </p>
            ),
        },
        {
            title: "Our Services",
            description: (
                <p>
                    We provide freight forwarding and logistics services including sea freight
                    (FCL &amp; LCL), air freight, customs clearance, project cargo, break bulk,
                    transportation, warehousing, and multimodal transport. Service availability
                    may vary by route, cargo type, and destination.
                </p>
            ),
        },
        {
            title: "Booking & Cargo Information",
            description: (
                <>
                    <p>
                        Accurate and complete information about your cargo helps us plan, quote,
                        and move your shipment correctly. When booking, you agree to:
                    </p>
                    <ol>
                        <li>Provide accurate cargo descriptions, weight, and dimensions.</li>
                        <li>Declare any hazardous, restricted, or high-value goods in advance.</li>
                        <li>
                            Supply valid documentation required for customs and carrier
                            compliance.
                        </li>
                        <li>Ensure cargo is packed appropriately for the mode of transport.</li>
                    </ol>
                </>
            ),
        },
        {
            title: "Payments & Charges",
            description: (
                <p>
                    Quotes are based on the information provided at the time of booking.
                    Additional charges may apply for demurrage, detention, storage, customs
                    duties, or changes made after booking is confirmed. Payment terms will be
                    communicated as part of your quotation or service agreement.
                </p>
            ),
        },
        {
            title: "Liability & Insurance",
            description: (
                <p>
                    Our liability for loss or damage to cargo is limited as set out in the
                    applicable carriage terms and international conventions governing sea, air,
                    and land transport. We recommend arranging appropriate cargo insurance for
                    your shipment, as this is not automatically included unless agreed in writing.
                </p>
            ),
        },
        {
            title: "Cancellations & Delays",
            description: (
                <p>
                    Shipping schedules depend on carriers, ports, customs authorities, and other
                    third parties outside our control. We will keep you informed of significant
                    delays, but we are not liable for delays or cancellations arising from
                    circumstances beyond our reasonable control.
                </p>
            ),
        },
        {
            title: "Changes to These Terms",
            description: (
                <p>
                    We may update these Terms &amp; Conditions from time to time to reflect
                    changes in our services or applicable regulations. The updated version will
                    be posted on this page with a revised effective date.
                </p>
            ),
        },
    ],
};
