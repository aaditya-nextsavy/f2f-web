import type { SanityImageSource } from "@sanity/image-url";
import type { BlogPostData } from "@/types/home";
import { urlFor } from "./image";

export interface SanityImageWithAlt {
    asset?: { _ref: string; _type: "reference" };
    alt?: string;
}

export interface SanityPostListItem {
    _id: string;
    title: string;
    listingTitle: string;
    listingDescription: string;
    slug: string;
    listingImage: SanityImageWithAlt | null;
    publishedAt: string;
    author: string;
    featured?: boolean;
}

export interface SanityPostDetail extends SanityPostListItem {
    mainImage: SanityImageWithAlt | null;
    body: unknown[];
}

export function resolveImageUrl(image: SanityImageWithAlt | null | undefined): string {
    if (!image?.asset) return "";
    return urlFor(image as SanityImageSource).width(1200).auto("format").url();
}

export function formatBlogDate(iso: string): string {
    const date = new Date(iso);
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
    const year = date.getUTCFullYear();
    return `${day} ${month}, ${year}`;
}

export function toBlogPostData(post: SanityPostListItem): BlogPostData {
    return {
        id: post._id,
        slug: post.slug,
        author: post.author,
        date: formatBlogDate(post.publishedAt),
        title: post.listingTitle,
        description: post.listingDescription,
        image: resolveImageUrl(post.listingImage),
        href: `/blog/${post.slug}`,
        featured: post.featured,
    };
}

interface PortableTextHeadingBlock {
    _type: string;
    _key: string;
    style?: string;
    children?: { text?: string }[];
}

export interface TocItem {
    id: string;
    label: string;
}

const SECTION_STYLES = new Set(["h2"]);

function isSectionHeading(block: unknown): block is PortableTextHeadingBlock {
    const node = block as PortableTextHeadingBlock;
    return node?._type === "block" && !!node.style && SECTION_STYLES.has(node.style);
}

export const INTRODUCTION_ANCHOR_ID = "introduction";

export function getTableOfContents(body: unknown[] | undefined): TocItem[] {
    if (!Array.isArray(body) || body.length === 0) return [];

    const headings = body.filter(isSectionHeading).map((block) => ({
        id: block._key,
        label: (block.children ?? []).map((child) => child.text ?? "").join(""),
    }));

    const hasLeadingIntro = headings.length > 0 && !isSectionHeading(body[0]);

    return hasLeadingIntro
        ? [{ id: INTRODUCTION_ANCHOR_ID, label: "Introduction" }, ...headings]
        : headings;
}
