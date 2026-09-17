import { client } from "@/sanity/lib/client";
import { BLOG_LIST_QUERY } from "@/sanity/lib/queries";
import { toBlogPostData, type SanityPostListItem } from "@/sanity/lib/mappers";
import { siteConfig, SITE_URL } from "@/lib/siteConfig";

export const revalidate = 3600;

const PAGES = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FCL Sea Freight", path: "/fcl-sea-freight" },
    { name: "LCL Sea Freight", path: "/lcl-sea-freight" },
    { name: "Other Services", path: "/other-services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
];

export async function GET() {
    const posts = await client.fetch<SanityPostListItem[]>(BLOG_LIST_QUERY);
    const latestPosts = posts.slice(0, 20).map(toBlogPostData);

    const pageLines = PAGES.map((page) => `- [${page.name}](${SITE_URL}${page.path})`).join("\n");
    const blogLines = latestPosts.length
        ? latestPosts
              .map((post) => `- [${post.title}](${SITE_URL}${post.href}): ${post.description}`)
              .join("\n")
        : "- No posts published yet.";

    const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Pages

${pageLines}

## Blog Posts

${blogLines}
`;

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
