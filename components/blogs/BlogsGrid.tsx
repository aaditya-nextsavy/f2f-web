"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BlogCard from "@/components/home/BlogListing/BlogCard";
import NoBlogsMessage from "./NoBlogsMessage";
import type { BlogPostData } from "@/types/home";

const INITIAL_COUNT = 9;
const BATCH_SIZE = 3;
const LOAD_DELAY = 500;

interface BlogsGridProps {
    posts: BlogPostData[];
}

const BlogsGrid = ({ posts }: BlogsGridProps) => {
    const [visibleCount, setVisibleCount] = useState(Math.min(INITIAL_COUNT, posts.length));
    const [isLoading, setIsLoading] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const hasMore = visibleCount < posts.length;

    const loadMore = useCallback(() => {
        setIsLoading(true);
        window.setTimeout(() => {
            setVisibleCount((count) => Math.min(count + BATCH_SIZE, posts.length));
            setIsLoading(false);
        }, LOAD_DELAY);
    }, [posts.length]);

    useEffect(() => {
        if (!hasMore || isLoading) return;

        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) loadMore();
            },
            { rootMargin: "300px" }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [hasMore, isLoading, loadMore]);

    if (posts.length === 0) {
        return (
            <section className="blogs-grid pb-[42px] xl:pb-[92px]">
                <div className="container mx-auto">
                    <NoBlogsMessage />
                </div>
            </section>
        );
    }

    return (
        <section className="blogs-grid pb-[42px] xl:pb-[92px]">
            <div className="container mx-auto">
                {/* All posts are rendered up front (hidden ones via CSS) so the full
                    listing stays crawlable even without JS; only the visual reveal
                    is progressive. */}
                <div className="grid grid-cols-1 gap-y-14 gap-x-6 xl:gap-y-22 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <div key={post.id} className={index < visibleCount ? "" : "hidden"}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div ref={sentinelRef} className="mt-12">
                        {isLoading && (
                            <div
                                className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
                                aria-hidden
                            >
                                {Array.from({
                                    length: Math.min(BATCH_SIZE, posts.length - visibleCount),
                                }).map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="aspect-[545/300] w-full rounded-[16px] bg-(--color-primary)/10" />
                                        <div className="mt-6 h-[18px] w-24 rounded bg-(--color-primary)/10" />
                                        <div className="mt-3 h-6 w-3/4 rounded bg-(--color-primary)/10" />
                                        <div className="mt-3 h-4 w-full rounded bg-(--color-primary)/10" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogsGrid;
