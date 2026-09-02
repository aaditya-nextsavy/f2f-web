"use client";

import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import BlogCard from "./BlogCard";
import type { BlogPostData, LinkData, SectionTitleData } from "@/types/home";

interface BlogListingProps {
    title: SectionTitleData;
    data: BlogPostData[];
    exploreLink: LinkData;
}

const BlogListing = ({ title, data, exploreLink }: BlogListingProps) => {
    const splideRef = useRef<Splide>(null);

    const featuredPost = data.find((post) => post.featured) || data[0];
    const otherPosts = data.filter((post) => post.id !== featuredPost.id);

    return (
        <section className="blog-listing">
            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    description={title.description}
                    descriptionPosition="right"
                    className="pb-[42px] xl:pb-[62px]"
                    titleClassName="lg:text-[40px] lg:leading-[1.15]"
                    descriptionClassName=""
                >
                    <Button href={exploreLink.href} variant="outline-dark" className="mt-6">
                        {exploreLink.label}
                    </Button>
                </SectionTitle>

                <div
                    className="h-px w-full opacity-30"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(to right, #11227A 0 5px, transparent 5px 10px)",
                    }}
                />

                {/* Desktop */}
                <div className="hidden lg:block">
                    <div className="mt-[42px] xl:mt-[62px]">
                        <BlogCard post={featuredPost} featured />
                    </div>

                    <div className="mt-14 grid grid-cols-3 gap-6">
                        {otherPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                {/* Mobile slider */}
                <div className="mt-10 lg:hidden">
                    <Splide
                        ref={splideRef}
                        options={{
                            perPage: 1,
                            gap: "1rem",
                            padding: { right: "2.5rem" },
                            pagination: true,
                            arrows: false,
                            drag: true,
                            autoHeight: true,
                        }}
                        aria-label="Blog posts"
                    >
                        {data.map((post) => (
                            <SplideSlide key={post.id}>
                                <BlogCard post={post} />
                            </SplideSlide>
                        ))}
                    </Splide>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            aria-label="Previous slide"
                            onClick={() => splideRef.current?.splide?.go("<")}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-primary) text-(--color-primary) transition-colors duration-300 ease-in-out hover:bg-(--color-primary) hover:text-(--color-white)"
                        >
                            <FaChevronLeft size={16} />
                        </button>

                        <button
                            type="button"
                            aria-label="Next slide"
                            onClick={() => splideRef.current?.splide?.go(">")}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-primary) text-(--color-primary) transition-colors duration-300 ease-in-out hover:bg-(--color-primary) hover:text-(--color-white)"
                        >
                            <FaChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogListing;
