import { JsonLd } from "./JsonLd";
import { siteConfig, SITE_URL } from "@/lib/siteConfig";
import type { FaqData } from "@/types/home";

export function OrganizationJsonLd() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteConfig.name,
                url: SITE_URL,
                logo: siteConfig.logo,
                ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: siteConfig.phone,
                    email: siteConfig.email,
                    contactType: "customer service",
                },
            }}
        />
    );
}

export function WebsiteJsonLd() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteConfig.name,
                url: SITE_URL,
            }}
        />
    );
}

export function FaqJsonLd({ faqs }: { faqs: FaqData[] | undefined }) {
    if (!faqs || faqs.length === 0) return null;

    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.title,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.descp,
                    },
                })),
            }}
        />
    );
}

export interface BreadcrumbItem {
    name: string;
    path: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: items.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: item.name,
                    item: `${SITE_URL}${item.path}`,
                })),
            }}
        />
    );
}

export function ServiceJsonLd({
    name,
    description,
    path,
}: {
    name: string;
    description: string;
    path: string;
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: name,
                name,
                description,
                url: `${SITE_URL}${path}`,
                provider: { "@type": "Organization", name: siteConfig.name, url: SITE_URL },
                areaServed: "Worldwide",
            }}
        />
    );
}

export function BlogPostingJsonLd({
    title,
    description,
    image,
    author,
    datePublished,
    path,
}: {
    title: string;
    description: string;
    image?: string;
    author: string;
    datePublished: string;
    path: string;
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: title,
                description,
                ...(image ? { image } : {}),
                author: { "@type": "Person", name: author },
                publisher: {
                    "@type": "Organization",
                    name: siteConfig.name,
                    logo: { "@type": "ImageObject", url: siteConfig.logo },
                },
                datePublished,
                mainEntityOfPage: `${SITE_URL}${path}`,
            }}
        />
    );
}
