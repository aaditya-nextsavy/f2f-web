import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import { client } from "@/sanity/lib/client";
import { BLOG_SITEMAP_QUERY } from "@/sanity/lib/queries";

const STATIC_ROUTES: {
    path: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
}[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/fcl-sea-freight", changeFrequency: "monthly", priority: 0.9 },
    { path: "/lcl-sea-freight", changeFrequency: "monthly", priority: 0.9 },
    { path: "/other-services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await client.fetch<{ slug: string; publishedAt: string }[]>(BLOG_SITEMAP_QUERY);

    const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
        url: `${SITE_URL}${route.path}`,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.publishedAt,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticEntries, ...blogEntries];
}
