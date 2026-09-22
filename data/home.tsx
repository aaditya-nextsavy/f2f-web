import type { HomePageData } from "@/types/home";

export const homePageData: HomePageData = {

    meta: {
        title: "Fairwinds Shipping Pvt Ltd | Global Freight Forwarding & Logistics",
        description:
            "Global freight forwarding and logistics solutions — FCL, LCL, customs clearance, project cargo, and more, managed with clarity and personal oversight.",
    },

    heroBanner: {
        title: "Global reach managed with personal oversight.",
        description:
            "We value clarity and speed equally. We provide predictable shipping across sea, air, and land because we care about your cargo and keep it in sight at every step.",

        actions: [
            {
                label: "Contact Us",
                href: "/contact",
                variant: "yellow",
            },
            {
                label: "View our FCL service",
                href: "/fcl-sea-freight",
                variant: "white-secondary",
            },
        ],
        video: {
            src: "/images/herobanner/f2f-video.mp4",
            type: "video/mp4",
            alt: "Global cargo transportation by sea, air, and land",
        },

        placeholder: {
            src: "/images/herobanner/f2f.png",
            alt: "Cargo transportation across sea, air, and land",
        },

    },

    heroAbout: {
        title: `Your cargo. Our commitment.
                We care about every step.`,
        description: `We deliver end to end shipping solutions with a focus on clarity and control. We manage every shipment with precision and full visibility and ensure it moves under favourable conditions from origin to destination.`,

    },

    seaFreight: {
        sectionTitle: {
            label: "Sea Freight",
            title: "Sea Freight Solutions Built Around Your Cargo.",
            description: "",
        },

        cards: [
            {
                id: 1,
                title: "Full Container Load (FCL)",
                description:
                    "Dedicated container shipping managed with precision, visibility, and reliable coordination across global routes. We ensure your cargo moves with defined timelines, careful handling, and consistent execution from origin to destination.",
                image: "/images/common/fcl-service.png",
                variant: "dark",
                link: {
                    label: "Learn more",
                    href: "/fcl-sea-freight",
                },
            },
            {
                id: 2,
                title: "Less Than Container Load (LCL)",
                description:
                    "Shared container shipping coordinated with accuracy, visibility, and dependable handling across international routes. We manage your cargo efficiently from consolidation to delivery, with clear timelines and careful execution at every stage.",
                image: "/images/common/lcl-service.png",
                variant: "light",
                link: {
                    label: "Learn more",
                    href: "/lcl-sea-freight",
                },
            },
        ],
    },

    otherServices: {
        sectionTitle: {
            label: "Other Service",
            title: "We Care For Your Cargo From Initial Transit To Final Warehousing.",
            description: "",
        },

        cards: [
            {
                id: 1,
                title: "Customs Clearance",
                description:
                    "Structured customs processes ensure accurate handling, faster approvals, and reliable shipment progress.",
                image: "/images/common/fcl-service1.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#customs-clearance",
                },
            },
            {
                id: 2,
                title: "Project Cargo",
                description:
                    "Specialized cargo handling planned with precision, control, and careful coordination for oversized and complex shipments.",
                image: "/images/common/project-cargo.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#project-cargo",
                },
            },
            {
                id: 3,
                title: "Break Bulk",
                description:
                    "Non-containerized cargo managed with structured handling, secure movement, and reliable execution across every stage.",
                image: "/images/common/break-bulk.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#break-bulk",
                },
            },
            {
                id: 4,
                title: "Air Freight",
                description:
                    "Planned, tracked, and delivered through reliable air transport with full visibility throughout.",
                image: "/images/common/air-freight.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#air-freight",
                },
            },
            {
                id: 5,
                title: <>Transportation <br /> (Road/Rail)</>,
                alt: "Transportation (Road/Rail)",
                description:
                    "Planned and coordinated road and rail transportation ensuring secure movement, reliable transit, and timely delivery.",
                image: "/images/common/road-rail.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#transportation",
                },
            },
            {
                id: 6,
                title: "Warehousing & Distribution",
                description:
                    "Secure storage and organized distribution ensure your cargo stays protected, visible, and ready for delivery.",
                image: "/images/common/warehousing.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#warehousing-distribution",
                },
            },
            {
                id: 7,
                title: "Multimodal Transport Operator (MTO)",
                description:
                    "End to end multimodal transport handled with control, ensuring smooth transitions and consistent timelines.",
                image: "/images/common/multimodal.png",
                link: {
                    label: "Learn more",
                    href: "/other-services#multimodal-transport-operator",
                },
            },
        ],
    },


    industries: {

        sectionTitle: {
            label: "Industries",
            title: `Trusted across industries
                    & supply chains `,
            description: "",
        },

        cards: [
            {
                id: 1,
                title: "Manufacturing ",
                descp: "Reliable cargo coordination supporting production schedules and supply chain continuity.",
                image: "/images/common/industries-01.png",

            },
            {
                id: 2,
                title: "FMCG & Retail",
                descp: "Efficient shipping solutions designed for fast-moving inventory and consistent retail supply chains.",
                image: "/images/common/industries-02.png",

            },
            {
                id: 3,
                title: "Engineering & Machinery",
                descp: "Specialized cargo handling for precision equipment and large scale engineering shipments.",
                image: "/images/common/industries-03.png",

            },
            {
                id: 4,
                title: "Pharmaceuticals",
                descp: "Temperature-controlled logistics ensuring the integrity of sensitive medical products.",
                image: "/images/common/industries-04.png",

            },
            {
                id: 5,
                title: "Chemicals",
                descp: "Reliable movement of chemical cargo with careful planning and operational control.",
                image: "/images/common/industries-05.png",

            },
            {
                id: 6,
                title: "Automotive ",
                descp: "Smooth logistics support for automotive parts, components, and supply chain movement.",
                image: "/images/common/industries-06.png",

            },
            {
                id: 7,
                title: "Renewable Energy & Projects",
                descp: "Specialized handling for large-scale energy shipments and complex project movements.",
                image: "/images/common/industries-07.png",

            },
            {
                id: 8,
                title: "agriculture commodities",
                descp: "Reliable logistics solutions for agricultural commodities with efficient handling and timely delivery.",
                image: "/images/common/industries-08.png",

            },
        ],
    },

    howItWorks: {
        sectionTitle: {
            label: "How It Works",
            title: "The Process Behind Every Shipment",
            description: "",
        },

        paragraphs: [
            "Every shipment begins with a clear understanding of requirements. We assess cargo details, routes, and timelines to build a structured plan that ensures efficient movement from the start. The right transport modes are selected, and every step is defined to maintain control and consistency. This early planning reduces uncertainty and sets a clear direction for execution.",
            "Execution is managed through coordinated operations across sea, air, rail, and road. Our team oversees each stage with disciplined processes, ensuring smooth transitions between modes and maintaining steady progress without delays. Each movement is aligned with defined timelines and operational checkpoints to ensure consistency across the journey.",
            "Throughout the journey, your cargo remains visible. We provide consistent updates and maintain clear communication, so you always know where your shipment is and what to expect next. This level of transparency supports better planning and keeps every stakeholder informed without confusion.",
            "With a strong global network and operational expertise, Fairwinds Shipping manages cargo movement across international routes with reliability. We coordinate across regions, ports, and partners to maintain continuity and efficiency worldwide. From origin to destination, every shipment is handled with accountability and care, ensuring timely delivery and consistent performance across global trade routes.",
        ],

        steps: [
            {
                id: 1,
                title: "Defined Before It Moves",
                description:
                    "Before any movement begins, we establish clear processes, timelines, and routes to ensure your cargo progresses without uncertainty.",
            },
            {
                id: 2,
                title: "Executed With Control",
                description:
                    "Each movement is managed through structured systems and accurate coordination.",
            },
            {
                id: 3,
                title: "Kept In Clear View",
                description:
                    "We provide consistent updates so you always know where your cargo is and what comes next.",
            },
            {
                id: 4,
                title: "Completed With Confidence",
                description:
                    "Your shipment is delivered on schedule with full accountability and care.",
            },
        ],
    },

    ctaType1: {

        title: `Fast shipping with the most
        modern technology`,
        description: `Modern systems support how we plan and execute every shipment. With full visibility and
        structured coordination, your cargo moves forward with clarity, precision, and care.`,

        actions: [
            {
                label: "Contact Us",
                href: "/contact",
                variant: "yellow",
            },
            {
                label: "View our FCL service",
                href: "/fcl-sea-freight",
                variant: "white-secondary",
            },
        ],
    },


    ourPartners: {
        title: "Our Partners",
        partners: [
            {
                id: 1,
                image: "/images/home/partners/partner-1.png",
                alt: "Partner 1",
                link: "",
            },
            {
                id: 2,
                image: "/images/home/partners/partner-2.png",
                alt: "Partner 2",
                link: "",
            },
            {
                id: 3,
                image: "/images/home/partners/partner-3.png",
                alt: "Partner 3",
                link: "",
            },
            {
                id: 4,
                image: "/images/home/partners/partner-4.png",
                alt: "Partner 4",
                link: "",
            },
            {
                id: 5,
                image: "/images/home/partners/partner-5.png",
                alt: "Partner 5",
                link: "",
            },
        ],
    },

    blogListing: {
        sectionTitle: {
            label: "Blogs",
            title: "Value-Added Services For Your Freight Shipments",
            description:
                "Discover insights that reflect real-world shipping operations. From strategy to execution, our content helps you move cargo with clarity, efficiency, and confidence.",
        },

        exploreLink: {
            label: "Explore More Blogs",
            href: "/blog",
        },
    },

    faqs: {

        sectionTitle: {
            label: "FAQs",
            title: <>
                Frequently <br />
                Asked Questions</>,
            description:
                "Have questions about shipping, logistics, or how Fairwinds can support your business? Our FAQ section covers common questions about our services, shipping modes, documentation, customs, and coordination. Find clear, practical answers to help you choose the right freight solution and plan your shipment with confidence.",
        },

        faqs: [
            {
                id: 1,
                title: "What Services Does Your Company Provide?",
                descp: "We provide end-to-end logistics and customs clearance solutions, including import and export customs clearance, freight forwarding, documentation, shipment coordination, port handling, delivery order coordination, and related logistics services.",
            },
            {
                id: 2,
                title: "Do You Provide Door-to-Door Logistics Services?",
                descp: "Yes. Depending on the shipment requirements, we can arrange transportation from the supplier's premises to the final destination, including inland transportation, port handling, ocean freight, customs clearance, and delivery.",
            },
            {
                id: 3,
                title: "Which Origins and Destinations Do You Cover?",
                descp: "We provide logistics solutions across major international trade lanes and ports. Please contact our team with your origin, destination, cargo details, and preferred shipping schedule so we can provide the most suitable routing and freight option.",
            },
            {
                id: 4,
                title: "Do You Handle Both Import and Export Customs Shipments?",
                descp: "Yes. We handle freight forwarding and customs clearance for both import and export shipments and coordinate the required documentation and processes with customs, shipping lines, ports, and other relevant authorities.",
            },
            {
                id: 5,
                title: "Can You Handle Urgent or Time-Sensitive Shipments?",
                descp: "Yes. We handle urgent and time-sensitive shipments with careful coordination to help meet critical delivery requirements.",
            },
            {
                id: 6,
                title: "Can You Handle Special or Regulatory Cargo Requirements?",
                descp: "Yes. Depending on the nature of the cargo, we can assist with the documentation and coordination required for shipments involving specific regulatory, licensing, certification, or handling requirements.",
            },
            {
                id: 7,
                title: "Why Should I Choose Your CHA and Freight Forwarding Services?",
                descp: "We combine customs expertise with freight forwarding and shipment coordination, allowing customers to manage multiple logistics requirements through one experienced team. Our focus is on timely documentation, proactive coordination, transparency, and reliable customer service.",
            },
            {
                id: 8,
                title: "Do You Handle Shipping Documentation and Coordination With Shipping Lines?",
                descp: "Yes. Our team assists with shipment documentation and coordinates with shipping lines and other stakeholders to help ensure smooth shipment processing and execution.",
            },
        ],
    },

    statistics: {
        sectionTitle: {
            label: "Statistics",
            title: "We Bring Control And Care Across Every Shipment",
            description: "",
        },

        stats: [
            {
                id: 1,
                value: "10000+",
                label: "Cargo Movements Coordinated",
            },
            {
                id: 2,
                value: "8",
                label: "Global Agent Network",
            },
            {
                id: 3,
                value: "50+",
                label: "Global Trade Routes Managed",
            },
        ],
    },

};
