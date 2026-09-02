import type { BlogsPageData } from "@/types/blogs";

export const blogsPageData: BlogsPageData = {
    banner: {
        label: "Blogs",
        title: <>
            Perspectives On Shipping,<br /> Logistics, And Global Trade
        </>,
    },

    sidebarCta: {
        title: "Need A Smarter Way To Move Your Cargo?",
        description:
            "Our team can help you find the right shipping solution for your business.",
        action: {
            label: "Contact Us",
            href: "/contact-us",
            variant: "yellow",
        },
    },
};
