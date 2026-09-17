import type { SanityImageSource } from "@sanity/image-url";
import type { BlogPostData } from "@/types/home";
import { urlFor } from "./image";

export interface SanityImageWithAlt {
    asset?: { _ref: string; _type: "reference" };
    alt?: string;
}

export interface PortableTextIntroBlock {
    _type: string;
    style?: string;
    children?: { text?: string }[];
}

export interface SanityPostListItem {
    _id: string;
    title: string;
    listingTitle: string;
    listingDescription: string;
    introBlocks: PortableTextIntroBlock[] | null;
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

// Matches the schema's own listingDescription cap (sanity/schemaTypes/post.ts)
// so an auto-generated excerpt reads the same length as an authored one.
const INTRO_EXCERPT_MAX_CHARS = 220;

const HEADING_STYLES = new Set(["h2", "h3", "h4", "h5", "h6"]);

function isHeadingBlock(block: PortableTextIntroBlock): boolean {
    return block._type === "block" && !!block.style && HEADING_STYLES.has(block.style);
}

function blockPlainText(block: PortableTextIntroBlock): string {
    return (block.children ?? []).map((child) => child.text ?? "").join("").trim();
}

function truncateToExcerpt(text: string, maxChars: number): string {
    if (text.length <= maxChars) return text;
    const truncated = text.slice(0, maxChars);
    const lastSpace = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxChars)}...`;
}

/**
 * Fallback listing description: the intro paragraph's first ~two lines'
 * worth of text, skipping a leading heading block if the content starts
 * with one (e.g. an "Introduction" heading).
 */
export function getIntroExcerpt(blocks: PortableTextIntroBlock[] | null | undefined): string {
    if (!Array.isArray(blocks)) return "";

    const paragraph = blocks.find((block) => block._type === "block" && !isHeadingBlock(block));
    if (!paragraph) return "";

    return truncateToExcerpt(blockPlainText(paragraph), INTRO_EXCERPT_MAX_CHARS);
}

export function toBlogPostData(post: SanityPostListItem): BlogPostData {
    return {
        id: post._id,
        slug: post.slug,
        author: post.author,
        date: formatBlogDate(post.publishedAt),
        title: post.listingTitle,
        description: post.listingDescription?.trim() || getIntroExcerpt(post.introBlocks),
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
