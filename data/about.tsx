import type { AboutPageData } from "@/types/about";

export const aboutPageData: AboutPageData = {

    meta: {
        title: "About Us | Fairwinds Shipping",
        description:
            "We combine experience, coordination, and care to help cargo move with confidence — meet the team and story behind Fairwinds Shipping.",
    },

    bannerData: {
        label: "About us",
        title: "Every Reliable Delivery Starts with Careful Planning",
        description:
            "We combine experience, coordination, and care to help cargo move with confidence.",
        bannerImage: {
            src: "/images/about/about-hero.png",
            alt: "Cargo transportation across sea, air, and land",
        },
    },
    ourStory: {
        sectionTitle: {
            label: "Our Story ",
            title: "Fairwinds was built on a simple belief that shipping works better when cargo is managed with clarity, accountability, and care. We help businesses move goods across global supply chains with confidence and consistency.",
            description: "",
        },
        image: {
            src: "/images/about/about-story.png",
            alt: "containers",
        }
    },
    team: {
        sectionTitle: {
            label: "Directors",
            title: "Meet Our Founding Members",
        },
        members: [
            {
                id: "puja-bhatt",
                name: "Ms. Puja Bhatt",
                role: "Director",
                bio: "Puja Bhatt is a Director and licensed customs broker with a Bachelor's degree in Law and strong experience in international trade and logistics compliance.",
                image: {
                    src: "/images/about/team1.png",
                    alt: "Ms. Puja Bhatt, Director",
                },
                link: { label: "Read More", href: "#" },
            },
            {
                id: "umang-desai",
                name: "Mr. Umang Desai",
                role: "Director",
                bio: "Umang Desai is a Director with a Master's degree in International Business from Australia and strong expertise in international marketing and business development.",
                image: {
                    src: "/images/about/team-2.png",
                    alt: "Mr. Umang Desai, Director",
                },
                link: { label: "Read More", href: "#" },
            },
            {
                id: "purivn-jariwala",
                name: "Mr. Purivn Jariwala",
                role: "Director",
                bio: "Purivn Jariwala holds a Bachelor's degree in Commerce and brings extensive experience in customs clearance and related procedures, ensuring smooth documentation.",
                image: {
                    src: "/images/about/team3.png",
                    alt: "Mr. Purivn Jariwala, Director",
                },
                link: { label: "Read More", href: "#" },
            },
            {
                id: "jeni-desai",
                name: "Ms. Jeni Desai",
                role: "Director",
                bio: "Jeni Desai holds a Bachelor's degree in Computer Science and oversees the organization's customer service and human resources functions.",
                image: {
                    src: "/images/about/team4.png",
                    alt: "Ms. Jeni Desai, Director",
                },
                link: { label: "Read More", href: "#" },
            },
        ],
    },


    coreValues: {
        sectiontitle: {
            label: "Core Values",
            title: "What We Stand For",
        },

        image: "/images/about/corevalues.png",

        values: [
            {
                id: 1,
                icon: "/images/about/integrity.png",
                title: "Integrity",
                descp:
                    "Doing the right thing is the foundation of every relationship we build, every decision we make, and every shipment we manage.",
            },
            {
                id: 2,
                icon: "/images/about/flexibility.png",
                title: "Flexibility",
                descp:
                    "We stay responsive to changing conditions, adapting quickly to support our customers and their cargo requirements.",
            },
            {
                id: 3,
                icon: "/images/about/diversity.png",
                title: "Diversity",
                descp:
                    "Different perspectives make us stronger, helping us build meaningful partnerships and deliver better solutions across industries and markets.",
            },
            {
                id: 4,
                icon: "/images/about/innovation.png",
                title: "Innovation  ",
                descp:
                    "We embrace smarter ways of working, continuously improving processes and solutions to keep cargo moving efficiently.",
            },
        ],
    },

    missionVision: {
        sectionTitle: {
            label: "Mission & Vision",
            title: "Why We Do What We Do",
        },
        missionTitle: "Our Mission",
        body: (
            <>
                To deliver shipping solutions with{" "}
                <strong>precision, transparency, and reliability</strong>. We
                ensure every shipment is managed with{" "}
                <strong>
                    clear communication, predictable timelines, and full
                    visibility
                </strong>{" "}
                from origin to destination.
            </>
        ),
        visionTitle: "Our Vision",
        visionBody: (
            <>
                To be a trusted <strong>
                    <i>
                        global shipping partner known for consistent execution, operational clarity,
                    </i>
                </strong>{" "} and <strong>
                    <i> dependable delivery
                    </i> </strong> {" "} across every route and every customer interaction.
            </>
        ),
        image: {
            src: "/images/about/missionvision.png",
            alt: "Fairwinds team member managing warehouse operations",
        },
    },

    howWeWork: {
        sectionTitle: {
            label: "How We Work",
            title: (
                <>
                    Your Cargo.
                    <br />
                    Our Responsibility.
                </>
            ),
        },
        points: [
            {
                id: 1,
                title: "You Deal.",
                highlight: true,
                description: [
                    "Share what needs to move, where it needs to go, and when it needs to arrive.",
                    "We take the time to understand your priorities and build a clear plan around your shipment requirements.",
                ],
                mobileImage: {
                    src: "/images/about/about-how-1.svg",
                    alt: "Illustration of Fairwinds' shipping process from booking to delivery, including understanding shipment requirements and building a clear plan",
                }
            },
            {
                id: 2,
                title: "We Plan The Journey.",
                highlight: false,
                description: [
                    "Every shipment begins with a clear and structured plan.",
                    "We coordinate the moving parts behind the journey to help keep cargo moving efficiently from origin to destination.",
                ],
                mobileImage: {
                    src: "/images/about/about-how-2.svg",
                    alt: "Illustration of Fairwinds' shipping process from booking to delivery, including coordination of moving parts and shipment visibility",
                }
            },
            {
                id: 3,
                title: "We Keep You Informed.",
                highlight: false,
                description: [
                    "Clear communication keeps you connected throughout the shipping journey.",
                    "With timely updates and shipment visibility, you always know what comes next and what to expect.",
                ],
                mobileImage: {
                    src: "/images/about/about-how-3.svg",
                    alt: "Keeping customers informed with timely updates and shipment visibility",
                }
            },
            {
                id: 4,
                title: "We Deliver.",
                highlight: true,
                description: [
                    "Every commitment is upheld right through to the final destination.",
                    "With careful coordination and final checks, we ensure cargo arrives planned and ready for the next step.",
                ],
                mobileImage: {
                    src: "/images/about/about-how-4.svg",
                    alt: "Delivery check after quality inspection of cargo at destination",
                }
            },
        ],
        image: {
            src: "/images/about/howwework2.svg",
            alt: "Illustration of Fairwinds' shipping process from booking to delivery",
        },
    },

};
