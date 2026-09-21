import type { ServicesPageData } from "@/types/services";

export const servicesPageData: ServicesPageData = {

    fcl: {
        meta: {
            title: "FCL Sea Freight | Fairwinds Shipping",
            description:
                "Dedicated full container load shipping with clear updates and structured execution — direct container space for cargo that requires consistency and control.",
        },
        bannerData: {
            label: "Sea Freight",
            title: "Dedicated Shipping with Full Control",
            description:
                "Direct container shipping for cargo that requires consistency, space, and streamlined movement. Clear updates and structured execution keep every shipment moving forward.",
            bannerImage: {
                src: "/images/services/fcl.png",
                alt: "Full container load shipping",
            },
            action: {
                label: "Contact Us",
                href: "/contact",
                variant: "yellow",
            },
        },

        aboutService: {
            sectiontitle: {
                label: "About FCL",
                title: "We plan around your shipping priorities and cargo needs",
            },
            description:
                "With FCL shipping, you secure dedicated container space for your cargo, providing flexibility in planning and transportation. At Fairwinds, we understand your shipment requirements, timelines, and business priorities to recommend the most suitable solution. Through strong logistics partnerships and proactive management, we keep cargo moving efficiently with clear communication and careful execution from booking to final delivery.",
            image: {
                src: "/images/services/about-fcl.png",
                alt: "Containers loaded on a freight train",
            },
        },

        servicesList: {
            sectiontitle: {
                label: "Our Services",
                title: "What You Get With FCL Shipping",
            },
            image: "/images/services/fcl-services.png",
            services: [
                {
                    id: 1,
                    icon: "/images/about/integrity.png",
                    descp:
                        "Door-to-door shipment management across international trade routes.",
                },
                {
                    id: 2,
                    icon: "/images/about/flexibility.png",
                    descp:
                        "Temperature-controlled container options for sensitive and perishable cargo.",
                },
                {
                    id: 3,
                    icon: "/images/about/diversity.png",
                    descp:
                        "Guidance for dangerous goods transportation and compliance requirements.",
                },
                {
                    id: 4,
                    icon: "/images/about/innovation.png",
                    descp:
                        "Tailored FCL solutions aligned with your cargo requirements and timelines.",
                },
                {
                    id: 5,
                    icon: "/images/about/innovation.png",
                    descp:
                        "Centralized visibility into shipment progress, documentation, and key milestones.",
                },
                {
                    id: 6,
                    icon: "/images/about/innovation.png",
                    descp:
                        "Cargo insurance options to help protect against loss, damage, and unforeseen risks.",
                },
                {
                    id: 7,
                    icon: "/images/about/innovation.png",
                    descp:
                        "Professional packing and cargo preparation for safer transportation.",
                },
                {
                    id: 8,
                    icon: "/images/about/innovation.png",
                    descp:
                        "Shipment tracking and status updates for greater transparency throughout transit.",
                },
                {
                    id: 9,
                    icon: "/images/about/innovation.png",
                    descp:
                        "Fumigation services for cargo, pallets, and wooden packaging when required.",
                },

            ],
        },

        whyItWorks: {
            sectiontitle: {
                label: "Why It Works",
                title: "A better fit for growing shipment volumes",
            },
            featureCards: [
                {
                    id: 1,
                    image: "/images/services/fcl-f1.png",
                    title: "Dedicated Container Space",
                    description:
                        "Your cargo occupies the entire container, reducing handling and keeping shipments together from origin to destination.",
                },
                {
                    id: 2,
                    image: "/images/services/fcl-f2.png",
                    title: "Faster Transit Flow",
                    description:
                        "Without the need for cargo consolidation, shipments move through the supply chain with fewer delays and handoffs.",
                },
                {
                    id: 3,
                    image: "/images/services/fcl-f3.png",
                    title: "Reduced Cargo Handling",
                    description:
                        "Loading once and unloading at destination helps minimize unnecessary movement during transit.",
                },
                {
                    id: 4,
                    image: "/images/services/fcl-f4.png",
                    title: "Flexible Container Options",
                    description:
                        "Temperature-controlled and specialized container options support sensitive, high-value, and project cargo requirements.",
                },
            ],
        },

        otherServicesSection: {
            sectiontitle: {
                label: "Our Services",
                title: "More ways we support your cargo movement",
            },
            cards: [
                {
                    id: 1,
                    title: "Less than Container Load (LCL)",
                    description:
                        "Shared container shipping coordinated with accuracy, visibility, and dependable handling across international routes. ",
                    image: "/images/common/lcl-service.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
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
                        href: "/other-services",
                    },
                },
                {
                    id: 3,
                    title: "Warehousing & Distribution",
                    description:
                        "Secure storage and organized distribution ensure your cargo stays protected, visible, and ready for delivery.",
                    image: "/images/common/warehousing.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
                {
                    id: 4,
                    title: "Multimodal Transport Operator (MTO)",
                    description:
                        "End to end multimodal transport handled with control, ensuring smooth transitions and consistent timelines.",
                    image: "/images/common/multimodal.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
            ],
        },

        cta2: {
            title: "Let’s simplify your container shipping requirements",
            description:
                "Our team helps you manage international container shipments with structured planning and consistent operational support.",
            actions: [
                {
                    label: "Contact Us",
                    href: "/contact",
                    variant: "yellow",
                },
                {
                    label: "View our LCL services",
                    href: "/lcl-sea-freight",
                    variant: "white-secondary",
                },
            ],
            image: {
                src: "/images/services/fcl.png",
                alt: "Crane lifting shipping containers",
            },
        },

        faqs: {
            sectiontitle: {
                label: "FAQs",
                title: <>Frequently<br /> Asked Questions</>,
                description: "Have questions about FCL shipping, container options, or the process? Our FAQ section covers common questions about dedicated container shipping, booking, documentation, customs clearance, tracking, and delivery. Find clear answers to help you understand the FCL process and plan your shipment with confidence."
            },
            faqs: [
                {
                    id: 1,
                    title: "What Is FCL Sea Freight?",
                    descp:
                        "FCL (Full Container Load) means a complete shipping container is dedicated to a single shipment or consignee. It is suitable for customers who have sufficient cargo to utilize a full container and offers better control over the movement of cargo.",
                },
                {
                    id: 2,
                    title: "Do You Handle Both FCL Import And Export Shipments?",
                    descp:
                        "Yes. We handle both FCL import and export shipments, including freight coordination, documentation, customs clearance, port formalities, and delivery coordination.",
                },
                {
                    id: 3,
                    title: "What Types Of Cargo Do You Handle?",
                    descp:
                        "We handle a wide range of commercial and industrial cargo, including FCL (Full Container Load), LCL (Less than Container Load), Oversize / OOG (Out-of-Gauge) Cargo, DG (Dangerous Goods) Cargo, Project Cargo, and Breakbulk Cargo. Our logistics solutions can be tailored to the cargo type, dimensions, weight, origin, destination, and specific handling requirements.",
                },
                {
                    id: 4,
                    title: "What Information Is Required To Get An FCL Freight Quotation?",
                    descp:
                        "To provide an accurate quotation, we generally require the port of loading, port of discharge, container size/type, number of containers, commodity, approximate weight, and preferred shipment date.",
                },
                {
                    id: 5,
                    title: "Which Origins And Destinations Do You Cover?",
                    descp:
                        "We provide logistics solutions across major international trade lanes and ports. Please contact our team with your origin, destination, cargo details, and preferred shipping schedule so we can provide the most suitable routing and freight option.",
                },
                {
                    id: 6,
                    title: "Do You Provide Competitive Ocean Freight Rates?",
                    descp:
                        "Yes, we provide competitive export and import freight rates. We coordinate with shipping lines and other freight partners to provide suitable routing and competitive freight options based on the shipment requirements, destination, transit time, and available vessel schedules.",
                },
                {
                    id: 7,
                    title: "How Do You Track An FCL Shipment?",
                    descp:
                        "Once the shipment is booked, we monitor the vessel schedule and shipment milestones and coordinate updates regarding container movement, vessel departure, transshipment, arrival, and delivery.",
                },
                {
                    id: 8,
                    title: "Do You Assist With Shipping Line And Port Formalities?",
                    descp:
                        "Yes. We coordinate the required formalities with shipping lines, ports, terminals, CFSs, transporters, and other relevant stakeholders to facilitate smooth movement of the container.",
                },
            ],
        },
    },

    lcl: {
        meta: {
            title: "LCL Sea Freight | Fairwinds Shipping",
            description:
                "Flexible less-than-container-load shipping for smaller volumes, with structured planning and careful handling from origin to destination.",
        },
        bannerData: {
            label: "Less than Container Load (LCL)",
            title: "Flexible Shipping for Smaller Volumes",
            description:
                "Share container space efficiently while maintaining reliable movement and clear communication. Structured planning and careful handling help keep smaller shipments moving smoothly from origin to destination.",
            bannerImage: {
                src: "/images/services/lcl.png",
                alt: "Less than container load shipping",
            },
            action: {
                label: "Contact Us",
                href: "/contact",
                variant: "yellow",
            },
        },

        aboutService: {
            sectiontitle: {
                label: "About LCL",
                title: "Supporting smaller shipments with the same level of care",
            },
            description:
                "Fairwinds Shipping Pvt. Ltd. provides reliable and cost-effective LCL (Less than Container Load) shipping solutions for exporters and impoters who do not require a full container. We coordinate the complete LCL logistics process — from cargo pickup and CFS consolidation to ocean freight, customs clearance, destination deconsolidation, and final delivery — providing customers with a single point of coordination for their shipments.",
            image: {
                src: "/images/services/about-lcl.png",
                alt: "Consolidated cargo ready for shipping",
            },
        },

        servicesList: {
            sectiontitle: {
                label: "LCL Services",
                title: "Services that support your LCL shipment",
            },
            image: "/images/services/lcl-services.png",
            services: [
                {
                    id: 1,
                    icon: "/images/about/integrity.png",
                    descp:
                        "We manage LCL shipments for export and import across global trade lanes.",
                },
                {
                    id: 2,
                    icon: "/images/about/flexibility.png",
                    descp:
                        "We coordinate cargo consolidation and deconsolidation for efficient cargo handling.",
                },
                {
                    id: 3,
                    icon: "/images/about/diversity.png",
                    descp:
                        "We manage CFS coordination for timely cargo receiving and consolidation.",
                },
                {
                    id: 4,
                    icon: "/images/about/innovation.png",
                    descp:
                        "We arrange pickup from your factory or warehouse and coordinate transportation.",
                },

                {
                    id: 5,
                    icon: "/images/about/integrity.png",
                    descp:
                        "We coordinate ocean freight based on your cargo requirements and timeline.",
                },
                {
                    id: 6,
                    icon: "/images/about/flexibility.png",
                    descp:
                        "We support customs clearance for smooth export and import processes.",
                },
                {
                    id: 7,
                    icon: "/images/about/diversity.png",
                    descp:
                        "Customs clearance support backed by knowledge of country-specific regulations.",
                },
                {
                    id: 8,
                    icon: "/images/about/innovation.png",
                    descp:
                        "We provide shipment tracking and coordination throughout transit.",
                },
                {
                    id: 9,
                    icon: "/images/about/diversity.png",
                    descp:
                        "We coordinate shipping documentation for accurate, compliant cargo movement.",
                },
                {
                    id: 10,
                    icon: "/images/about/innovation.png",
                    descp:
                        "We provide shipment tracking and coordination throughout transit.",
                },
            ],
        },

        globalHub: {
            sectiontitle: {
                label: "Global Hub",
                title: <>
                    More Ways We Support
                    <br />
                    Your Cargo Movement
                </>,
            },
            description:
                "With FCL shipping, you secure dedicated container space for your cargo, providing flexibility in planning and transportation. At Fairwinds, we understand your shipment requirements, timelines, and business priorities to recommend the most suitable solution.",
            stats: [
                {
                    id: 1,
                    value: "50+",
                    label: "Global trade routes managed",
                },
                {
                    id: 2,
                    value: "15+",
                    label: "Years of operational expertise",
                },
            ],
            countries: [
                { id: 1, name: "Finland", code: "fi" },
                { id: 2, name: "Austria", code: "at" },
                { id: 3, name: "France", code: "fr" },
                { id: 4, name: "Brazil", code: "br" },
                { id: 5, name: "Germany", code: "de" },
                { id: 6, name: "Denmark", code: "dk" },
                { id: 7, name: "Italy", code: "it" },
                { id: 8, name: "Australia", code: "au" },
                { id: 9, name: "India", code: "in" },
                { id: 10, name: "United States", code: "us" },
            ],
        },

        whyItWorks: {
            sectiontitle: {
                label: "Why It Works",
                title: <>A practical choice for <br /> smaller volumes</>,
            },
            featureCards: [
                {
                    id: 1,
                    image: "/images/services/lcl-1.png",
                    title: "Pay for What You Use",
                    description:
                        "Share container capacity with other shipments and only pay for the space your cargo actually needs.",
                },
                {
                    id: 2,
                    image: "/images/services/lcl-2.png",
                    title: "Ideal For Smaller Shipments",
                    description:
                        "Move smaller cargo volumes efficiently without the cost of booking an entire container.",
                },
                {
                    id: 3,
                    image: "/images/services/lcl-3.png",
                    title: "Flexible Routing Options",
                    description:
                        "Keep shipments moving without delays associated with filling an entire container, helping support more responsive operations.",
                },
                {
                    id: 4,
                    image: "/images/services/lcl-4.png",
                    title: "Smarter Inventory Flow",
                    description:
                        "Support efficient inventory management by shipping cargo as needed rather than storing goods for extended periods.",
                },
            ],
        },

        otherServicesSection: {
            sectiontitle: {
                label: "Our Services",
                title: "More ways we support your cargo movement",
            },
            cards: [
                {
                    id: 1,
                    title: "Full Container Load (FCL)",
                    description:
                        "Shared container shipping coordinated with accuracy, visibility, and dependable handling across international routes. ",
                    image: "/images/common/fcl-service.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
                {
                    id: 2,
                    title: "Break Bulk",
                    description:
                        "Non-containerized cargo managed with structured handling, secure movement, and reliable execution across every stage.",
                    image: "/images/common/break-bulk.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
                {
                    id: 3,
                    title: "Air Freight",
                    description:
                        "Planned, tracked, and delivered through reliable air transport with full visibility throughout.",
                    image: "/images/common/air-freight.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
                {
                    id: 4,
                    title: "Warehousing & Distribution",
                    description:
                        "Secure storage and organized distribution ensure your cargo stays protected, visible, and ready for delivery.",
                    image: "/images/common/warehousing.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
            ],
        },

        cta2: {
            title: "Flexible Shipping Solutions for Every Cargo Requirement",
            description:
                "Cost-effective consolidation and reliable coordination help keep your cargo moving without unnecessary complexity.",
            actions: [
                {
                    label: "Contact Us",
                    href: "/contact",
                    variant: "yellow",
                },
                {
                    label: "View our FCL services",
                    href: "/fcl-sea-freight",
                    variant: "white-secondary",
                },
            ],
            image: {
                src: "/images/common/lcl-service.png",
                alt: "Consolidated cargo containers",
            },
        },

        faqs: {
            sectiontitle: {
                label: "FAQs",
                title: <>Frequently <br /> Asked Questions</>,
                description: "Have questions about LCL shipping, cargo consolidation, or delivery? Our FAQ section covers common questions about consolidation, CFS handling, customs clearance, documentation, tracking, and final delivery. Find clear answers to understand how your LCL shipment moves from pickup to destination."
            },

            faqs: [
                {
                    id: 1,
                    title: "What Is LCL Sea Freight?",
                    descp:
                        "LCL (Less than Container Load) is a shipping method where cargo from multiple customers is consolidated into a single container. It is ideal for shipments that do not require a full container.",
                },
                {
                    id: 2,
                    title: "When Should I Choose LCL Instead Of FCL?",
                    descp:
                        "LCL is generally suitable when your cargo volume is not sufficient to fill a complete container. It allows you to pay for the space your cargo occupies rather than booking an entire container.",
                },
                {
                    id: 3,
                    title: "What Information Is Required For An LCL Freight Quotation?",
                    descp:
                        "We generally require the origin, destination, commodity, number of packages, dimensions, gross weight, and cargo readiness date. These details help us calculate the applicable freight and handling charges.",
                },
                {
                    id: 4,
                    title: "Do You Provide LCL Consolidation Services?",
                    descp:
                        "Yes. We coordinate with consolidation partners and freight networks to arrange suitable LCL services based on the origin, destination, cargo volume, and required transit time.",
                },
                {
                    id: 5,
                    title: "Can You Arrange Pickup Of LCL Cargo From The Supplier?",
                    descp:
                        "Yes. Depending on the shipment requirements, we can coordinate factory pickup, transportation to the CFS/consolidation warehouse, and subsequent movement for export or import.",
                },
                {
                    id: 6,
                    title: "How Is LCL Freight Calculated?",
                    descp:
                        "LCL freight is generally calculated based on the chargeable volume (CBM) or weight, depending on the shipment and applicable freight terms. Other charges such as origin handling, CFS charges, documentation, customs clearance, and destination charges may also apply.",
                },
                {
                    id: 7,
                    title: "Can You Handle LCL Shipments To Different International Destinations?",
                    descp:
                        "Yes. We can arrange LCL services to and from various international destinations through available consolidation networks and shipping partners.",
                },
                {
                    id: 8,
                    title: "Why Choose LCL Forwarding Through Us?",
                    descp:
                        "Our LCL service combines freight coordination, customs expertise, documentation support, CFS coordination, and delivery arrangements, giving customers a single point of contact for their shipment.",
                },
            ],
        },
    },

    otherServices: {
        meta: {
            title: "Other Services | Fairwinds Shipping",
            description:
                "A broad portfolio of shipping and logistics services supporting cargo movement, regulatory compliance, transportation, storage, and distribution.",
        },
        bannerData: {
            label: "Additional Services",
            title: "Supporting Every Stage of Shipping",
            description:
                "A broad portfolio of shipping and logistics services designed to support cargo movement, regulatory compliance, transportation, storage, and distribution requirements across domestic and international supply chains.",
            bannerImage: {
                src: "/images/services/other-services.png",
                alt: "Warehousing and Distribution operations",
            },
            action: {
                label: "Contact Us",
                href: "/contact",
                variant: "yellow",
            },
        },

        servicesFiles: {
            cards: [
                {
                    id: "customs-clearance",
                    label: "Customs Clearance",
                    title: "Customs Clearance",
                    description:
                        "Navigating customs requirements is essential in international trade. Our team manages documentation, compliance, and clearance protocols to help keep cargo moving smoothly across borders. With experienced customs specialists and proactive support, we help reduce delays, avoid unnecessary costs, and keep shipments moving efficiently.",
                    listTitle: "Services That Support Customs Clearance",
                    listItems: [
                        "Customs documentation managed accurately and efficiently.",
                        "Expert support for country-specific regulations and requirements.",
                        "Clear updates throughout every stage of customs handling.",
                    ],
                    images: [
                        { src: "/images/services/oo-s1-1.png", alt: "Customs clearance operations" },
                        { src: "/images/services/oo-s1-2.png", alt: "Customs clearance operations" },
                        { src: "/images/services/oo-s1-3.png", alt: "Customs clearance operations" },
                        { src: "/images/services/oo-s1-4.png", alt: "Customs clearance operations" },
                        { src: "/images/services/oo-s1-5.png", alt: "Customs clearance operations" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
                {
                    id: "project-cargo",
                    label: "Project Cargo",
                    title: "Project Cargo",
                    description:
                        "Project cargo requires careful planning, specialized handling, and precise coordination. From oversized equipment to complex industrial shipments, our team delivers tailored logistics solutions designed to move cargo safely, efficiently, and with full control from origin to destination.",
                    listTitle: "Services That Support Project Cargo",
                    listItems: [
                        "Specialized planning for oversized, heavy, and complex cargo requirements.",
                        "Risk-aware transportation supported by detailed route and handling assessments.",
                        "Flexible transport and chartering solutions tailored to project needs.",
                    ],
                    images: [
                        { src: "/images/services/oo-s2-1.png", alt: "Project cargo transport" },
                        { src: "/images/services/oo-s2-2.png", alt: "Project cargo transport" },
                        { src: "/images/services/oo-s2-3.png", alt: "Project cargo transport" },
                        { src: "/images/services/oo-s2-4.png", alt: "Project cargo transport" },
                        { src: "/images/services/oo-s2-5.png", alt: "Project cargo transport" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
                {
                    id: "break-bulk",
                    label: "Break Bulk",
                    title: "Break Bulk",
                    description:
                        "Break bulk cargo requires structured handling, careful planning, and close coordination throughout the transportation process. From large machinery and industrial components to non-containerized goods, shipments are managed with the attention and expertise needed to support safe, efficient, and reliable movement from origin to destination.",
                    listTitle: "Services That Support Break Bulk",
                    listItems: [
                        "Specialized handling and supervision for non-containerized cargo movements.",
                        "Coordinated vessel loading, transport planning, and cargo execution support.",
                        "Cost-efficient break bulk solutions backed by careful oversight and cargo care.",
                    ],
                    images: [
                        { src: "/images/services/oo-s3-3.png", alt: "Break bulk cargo handling" },
                        { src: "/images/services/oo-s3-2.png", alt: "Break bulk cargo handling" },
                        { src: "/images/services/oo-s3-11.png", alt: "Break bulk cargo handling" },
                        { src: "/images/services/oo-s3-4.png", alt: "Break bulk cargo handling" },
                        { src: "/images/services/oo-s3-5.png", alt: "Break bulk cargo handling" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
                {
                    id: "air-freight",
                    label: "Air Freight",
                    title: "Air Freight",
                    description:
                        "Air freight provides a fast and reliable solution for time-sensitive and high-value shipments. Through carefully coordinated transportation, strong carrier networks, and proactive shipment management, cargo moves efficiently while maintaining visibility, compliance, and attention to delivery timelines from origin to destination.",
                    listTitle: "Services That Support Air Freight",
                    listItems: [
                        "Reliable air freight solutions with strong carrier networks and flexible capacity.",
                        "Real-time shipment visibility and structured coordination throughout transportation.",
                        "Specialized handling for time-sensitive, high-value, and complex cargo.",
                    ],
                    images: [
                        { src: "/images/services/oo-s4-1.png", alt: "Air freight cargo loading" },
                        { src: "/images/services/oo-s4-2.png", alt: "Air freight cargo loading" },
                        { src: "/images/services/oo-s4-3.png", alt: "Air freight cargo loading" },
                        { src: "/images/services/oo-s4-4.png", alt: "Air freight cargo loading" },
                        { src: "/images/services/oo-s4-5.png", alt: "Air freight cargo loading" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
                {
                    id: "transportation",
                    label: "Transportation",
                    title: "Transportation (Road/Rail)",
                    description:
                        "Our road and rail transportation services provide reliable, efficient freight movement across regional and global supply chains. Through strategic planning, trusted carrier partnerships, and seamless coordination, we ensure your cargo moves smoothly from origin to destination. With complete visibility and dedicated oversight throughout the journey, we deliver transportation solutions that keep your supply chain moving with confidence.",
                    listTitle: "Services That Support Transportation (Road/Rail)",
                    listItems: [
                        "Road and rail transport solutions designed around cargo needs and timelines.",
                        "Flexible freight options supported by carrier networks and transport partnerships.",
                        "Clear shipment visibility and coordination from pickup through delivery.",
                    ],
                    images: [
                        { src: "/images/services/oo-s5-1.png", alt: "Road and rail transportation" },
                        { src: "/images/services/oo-s5-2.png", alt: "Road and rail transportation" },
                        { src: "/images/services/oo-s5-3.png", alt: "Road and rail transportation" },
                        { src: "/images/services/oo-s5-4.png", alt: "Road and rail transportation" },
                        { src: "/images/services/oo-s5-5.png", alt: "Road and rail transportation" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
                {
                    id: "warehousing-distribution",
                    label: "Warehousing & Distribution",
                    title: "Warehousing & Distribution",
                    description:
                        "Secure warehousing and organized distribution keep your cargo protected and ready to move at every stage. Our team manages storage, inventory visibility, and distribution planning with the same attention to detail as every shipment we handle. With flexible facilities and coordinated logistics, your goods stay safe and on schedule between shipments.",
                    listTitle: "Services That Support Warehousing & Distribution",
                    listItems: [
                        "Secure storage facilities with organized inventory management and handling.",
                        "Flexible distribution planning aligned with demand and delivery timelines.",
                        "Clear visibility into stock levels, movement, and shipment readiness.",
                    ],
                    images: [
                        { src: "/images/services/oo-s6-1.png", alt: "Warehousing and distribution" },
                        { src: "/images/services/oo-s6-2.png", alt: "Warehousing and distribution" },
                        { src: "/images/services/oo-s6-3.png", alt: "Warehousing and distribution" },
                        { src: "/images/services/oo-s6-4.png", alt: "Warehousing and distribution" },
                        { src: "/images/services/oo-s6-5.png", alt: "Warehousing and distribution" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
                {
                    id: "multimodal-transport-operator",
                    label: "MTO",
                    title: "Multimodal Transport Operator (MTO)",
                    description:
                        "Multimodal transport brings sea, air, road, and rail together under one coordinated plan. Our team manages every transition between modes, ensuring smooth handoffs, consistent timelines, and full visibility from origin to destination. With a single point of coordination, your cargo moves efficiently across every leg of the journey.",
                    listTitle: "Services That Support Multimodal Transport",
                    listItems: [
                        "Single point of coordination across every transport mode.",
                        "Smooth transitions between sea, air, road, and rail with minimal delay.",
                        "Consistent timelines and full visibility managed from origin to destination.",
                    ],
                    images: [
                        { src: "/images/services/oo-s7-1.png", alt: "Multimodal transport coordination" },
                        { src: "/images/services/oo-s7-2.png", alt: "Multimodal transport coordination" },
                        { src: "/images/services/oo-s7-3.png", alt: "Multimodal transport coordination" },
                        { src: "/images/services/oo-s7-4.png", alt: "Multimodal transport coordination" },
                        { src: "/images/services/oo-s7-5.png", alt: "Multimodal transport coordination" },
                    ],
                    action: {
                        label: "Contact Us",
                        href: "/contact",
                        variant: "yellow",
                    },
                },
            ],
        },


        whyItWorks: {
            sectiontitle: {
                label: "Why It Works",
                title: <>
                    A practical choice for <br />smaller volumes
                </>,
            },
            featureCards: [
                {
                    id: 1,
                    image: "/images/services/oww-1.png",
                    title: "Single Point of Coordination",
                    description:
                        "Manage multiple logistics requirements through one experienced partner, reducing complexity and improving communication.",
                },
                {
                    id: 2,
                    image: "/images/services/oww-2.png",
                    title: "Greater Shipment Visibility",
                    description:
                        "Maintain clear oversight across transportation, customs, storage, and delivery through every stage of the journey.",
                },
                {
                    id: 3,
                    image: "/images/services/oww-3.png",
                    title: "Streamlined Cargo Flow",
                    description:
                        "Connected logistics services help reduce handoffs, improve coordination, and keep shipments moving efficiently.",
                },
                {
                    id: 4,
                    image: "/images/services/oww-4.png",
                    title: "Flexible Logistics Solutions",
                    description:
                        "Access a range of shipping and logistics services tailored to different cargo types, routes, and operational needs.",
                },
            ],
        },

        otherServicesSection: {
            sectiontitle: {
                label: "Our Services",
                title: "More ways we support your cargo movement",
            },
            cards: [
                {
                    id: 1,
                    title: "Less Than Container Load (LCL)",
                    description:
                        "Shared container shipping coordinated with accuracy, visibility, and dependable handling across international routes.",
                    image: "/images/common/lcl-service.png",
                    link: {
                        label: "Learn more",
                        href: "/lcl-sea-freight",
                    },
                },
                {
                    id: 2,
                    title: "Transportation (Road/Rail)",
                    description:
                        "Structured customs processes ensure accurate handling, faster approvals, and reliable shipment progress.",
                    image: "/images/common/road-rail.png",
                    link: {
                        label: "Learn more",
                        href: "/lcl-sea-freight",
                    },
                },
                {
                    id: 3,
                    title: "Warehousing & distribution",
                    description:
                        "Secure storage and organized distribution ensure your cargo stays protected, visible, and ready for delivery.",
                    image: "/images/common/warehousing.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
                {
                    id: 4,
                    title: "Full Container Load (FCL)",
                    description:
                        "Shared container shipping coordinated with accuracy, visibility, and dependable handling across international routes. ",
                    image: "/images/common/fcl-service.png",
                    link: {
                        label: "Learn more",
                        href: "/other-services",
                    },
                },
            ],
        },

        cta2: {
            title: "Let’s simplify your container shipping requirements",
            description:
                "Our team helps you manage international container shipments with structured planning and consistent operational support.  ",
            actions: [
                {
                    label: "Contact Us",
                    href: "/contact",
                    variant: "yellow",
                },
                {
                    label: "View our FCL services",
                    href: "/fcl-sea-freight",
                    variant: "white-secondary",
                },
            ],
            image: {
                src: "/images/common/multimodal.png",
                alt: "Multimodal cargo transport operations",
            },
        },

        faqs: {
            sectiontitle: {
                label: "FAQs",
                title: <>
                    Frequently <br />
                    Asked Questions</>,
                description: 'Have questions about our additional logistics services? Our FAQ section covers common questions about transportation, customs support, cargo handling, documentation, tracking, and other solutions we provide. Find clear answers to understand how Fairwinds can support your shipment beyond standard freight services.'
            },
            faqs: [
                {
                    id: 1,
                    title: "What Customs Clearance Services Do You Provide?",
                    descp:
                        "We provide comprehensive import and export customs clearance services, including documentation, customs formalities, examination coordination, assessment, and liaison with relevant authorities to facilitate smooth and timely cargo clearance.",
                },
                {
                    id: 2,
                    title: "Do You Provide Air Freight Services?",
                    descp:
                        "Yes. We offer air freight solutions for both imports and exports, with options based on cargo requirements, destination, urgency, and transit-time expectations. We coordinate booking, documentation, customs clearance, and delivery.",
                },
                {
                    id: 3,
                    title: "What Is Project Cargo And Can You Handle It?",
                    descp:
                        "Project Cargo involves the transportation of oversized, heavy, high-value, or complex cargo requiring specialized planning and handling. We coordinate the logistics process, including route planning, transportation, port handling, documentation, and other project-specific requirements.",
                },
                {
                    id: 4,
                    title: "Do You Provide Warehousing Services?",
                    descp:
                        "Yes. We can coordinate warehousing and cargo storage solutions based on the customer's requirements, including cargo handling, storage, inventory coordination, and movement of goods.",
                },
                {
                    id: 5,
                    title: "Do You Provide Transportation Services?",
                    descp:
                        "Yes. We have our own fleet for inland transportation solutions for containers and cargo, coordinating movement between factories, warehouses, ports, CFSs, and final delivery locations.",
                },
                {
                    id: 6,
                    title: "Can You Provide An End-To-End Logistics Solution?",
                    descp:
                        "Yes. We can integrate customs clearance, sea and air freight, warehousing, transportation, and cargo handling to provide a coordinated end-to-end logistics solution through a single point of contact.",
                },
                {
                    id: 7,
                    title: "Can You Handle Urgent, Specialized, Or Time-Sensitive Cargo?",
                    descp:
                        "Yes. We evaluate the nature of the cargo, required delivery timeline, origin and destination, and handling requirements to develop a suitable logistics plan and coordinate the necessary resources.",
                },
                {
                    id: 8,
                    title: "How Can I Get A Quotation For My Logistics Requirement?",
                    descp:
                        "Simply share your cargo details, origin, destination, commodity, dimensions/weight, preferred mode of transport, and required timeline with our team. We will assess your requirement and provide a suitable logistics solution and quotation.",
                },
            ],
        },
    },

};
