import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { BlogPostData } from "@/types/home";

const truncateWords = (text: string, count = 20) => {
    const words = text.trim().split(/\s+/);

    if (words.length <= count) return text;

    return `${words.slice(0, count).join(" ")}...`;
};

interface BlogCardProps {
    post: BlogPostData;
    featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
    if (featured) {
        return (
            <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-[62px]">
                <div className="relative w-full overflow-hidden rounded-[24px] xl:aspect-[880/495]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1200px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div>
                    <span className="text-[18px] leading-[28px] tracking-[-0.3px] text-(--color-primary)">
                        {post.date}
                    </span>

                    <h3 className="mt-2 text-[26px] font-medium leading-[28px] tracking-[-0.3px] text-(--color-primary) lg:text-[42px] lg:leading-[49px]">
                        {post.title}
                    </h3>

                    <p className="mt-2 flex-1 text-[15px] leading-[24px] text-(--color-primary)/70">
                        {truncateWords(post.description, 25)}
                    </p>

                    <Button
                        href={post.href}
                        variant="yellow"
                        className="mt-5 px-[34px] py-[10px] text-[16px] font-normal! leading-[24px]"
                    >
                        Read Full Blog
                    </Button>
                </div>
            </article>
        );
    }

    return (
        <article className="flex h-full flex-col">
            <div className="relative aspect-[545/300] w-full overflow-hidden rounded-[16px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                />
            </div>

            <span className="mt-6 text-[18px] leading-[28px] text-(--color-primary)">
                {post.date}
            </span>

            <h3 className="mt-2 text-[24px] font-medium leading-[34px] tracking-[-0.4px] text-(--color-primary)">
                {post.title}
            </h3>

            <p className="mt-2 flex-1 text-[15px] leading-[24px] text-(--color-primary)">
                {post.description}
            </p>

            <Button
                href={post.href}
                variant="yellow"
                className="mt-4 self-start px-[34px] py-[10px] text-[16px] font-normal! leading-[24px] w-[100%]! sm:w-max!"
            >
                Read Full Blog
            </Button>
        </article>
    );
};

export default BlogCard;
