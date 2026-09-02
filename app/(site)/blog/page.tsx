import BannerType2 from "@/components/common/HeroBannerSection/HeroBannerType2/BannerType2";
import BlogsGrid from "@/components/blogs/BlogsGrid";
import { blogsPageData } from "@/data/blogs";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_LIST_QUERY } from "@/sanity/lib/queries";
import { toBlogPostData, type SanityPostListItem } from "@/sanity/lib/mappers";

export default async function Page() {
    const { data } = await sanityFetch({ query: BLOG_LIST_QUERY });
    const posts = (data as SanityPostListItem[]).map(toBlogPostData);

    return (
        <main className="space-y-[42px] xl:space-y-[62px]">
            <BannerType2
                label={blogsPageData.banner.label}
                title={blogsPageData.banner.title}
            />

            <BlogsGrid posts={posts} />
        </main>
    );
}
