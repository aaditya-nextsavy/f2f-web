import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogHero from "@/components/blogs/BlogHero";
import PortableTextBody from "@/components/blogs/PortableTextBody";
import TableOfContents from "@/components/blogs/TableOfContents";
import BlogSidebarCta from "@/components/blogs/BlogSidebarCta";
import NoBlogsMessage from "@/components/blogs/NoBlogsMessage";
import BlogCard from "@/components/home/BlogListing/BlogCard";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import CTA from "@/components/common/ctaType1/CTA";
import { blogsPageData } from "@/data/blogs";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_BY_SLUG_QUERY, BLOG_LIST_QUERY, BLOG_SLUGS_QUERY } from "@/sanity/lib/queries";
import {
    getTableOfContents,
    resolveImageUrl,
    toBlogPostData,
    type SanityPostDetail,
    type SanityPostListItem,
} from "@/sanity/lib/mappers";

export async function generateStaticParams() {
    const slugs = await client.fetch<string[]>(BLOG_SLUGS_QUERY);
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
    const { slug } = await params;
    const { data: post } = await sanityFetch({ query: BLOG_BY_SLUG_QUERY, params: { slug } });

    if (!post) return {};

    const typedPost = post as SanityPostDetail;

    return {
        title: `${typedPost.listingTitle} | Fairwinds Shipping Blog`,
        description: typedPost.listingDescription,
    };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
    const { slug } = await params;

    const [{ data: post }, { data: allPosts }] = await Promise.all([
        sanityFetch({ query: BLOG_BY_SLUG_QUERY, params: { slug } }),
        sanityFetch({ query: BLOG_LIST_QUERY }),
    ]);

    if (!post) notFound();

    const typedPost = post as SanityPostDetail;
    const tocItems = getTableOfContents(typedPost.body);

    const relatedPosts = (allPosts as SanityPostListItem[])
        .filter((item) => item.slug !== slug)
        .slice(0, 3)
        .map(toBlogPostData);

    return (
        <main>
            <BlogHero
                label="Blog"
                title={typedPost.title}
                author={typedPost.author}
                date={toBlogPostData(typedPost).date}
                image={resolveImageUrl(typedPost.mainImage)}
                imageAlt={typedPost.mainImage?.alt ?? typedPost.title}
                sidebar={
                    <>
                        <TableOfContents items={tocItems} />
                        <BlogSidebarCta {...blogsPageData.sidebarCta} />
                    </>
                }
            >
                <PortableTextBody value={typedPost.body} />
            </BlogHero>

            <div className="py-[42px] lg:py-[92px] mt-[42px] space-y-[42px] xl:mt-[92px] xl:space-y-[92px] ">
                <CTA
                    title="Need Help Choosing The Right Shipping Solution?"
                    description="Our team can guide you through FCL, LCL, and every mode in between so your cargo moves with clarity and confidence."
                    actions={[
                        { label: "Contact Us", href: "/contact", variant: "yellow" },

                    ]}
                />

                <section className="container mx-auto  pt-8 sm:pt-6 ">
                    <SectionTitle
                        label="Blogs"
                        title="Keep Exploring The World Of Shipping And Logistics"
                        className="pb-[42px] xl:pb-[62px]"
                    />

                    {relatedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost.id} post={relatedPost} />
                            ))}
                        </div>
                    ) : (
                        <NoBlogsMessage />
                    )}
                </section>
            </div>
        </main>
    );
}
