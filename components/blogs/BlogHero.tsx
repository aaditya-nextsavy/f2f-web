import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaRegCalendar, FaRegUser } from "react-icons/fa6";
import DiagonalLines from "@/components/common/DiagonalLines";

interface BlogHeroProps {
    label?: string;
    title: ReactNode;
    author?: string;
    date: string;
    image: string;
    imageAlt: string;
    sidebar: ReactNode;
    children: ReactNode;
}

const BlogHero = ({ label, title, author, date, image, imageAlt, sidebar, children }: BlogHeroProps) => (
    <>
        <section className="relative overflow-hidden bg-(--color-primary) pt-[130px] pb-[70px] lg:pt-[160px] lg:pb-[170px]">
            <DiagonalLines />

            <div className="container relative mx-auto">
                {label && (
                    <Link
                        href="/blog"
                        className="inline-block text-[13px] font-medium uppercase tracking-[1.5px] text-white/50 transition-colors duration-300 hover:text-white/80"
                    >
                        {label}
                    </Link>
                )}

                <h1 className="mt-4 max-w-[820px] text-[30px] font-medium leading-[1.2] tracking-[-0.5px] text-white lg:text-[52px] lg:leading-[1.12] lg:tracking-[-1px]">
                    {title}
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-white/60">
                    {author && (
                        <span className="flex items-center gap-2">
                            <FaRegUser size={13} /> By {author}
                        </span>
                    )}
                    <span className="flex items-center gap-2">
                        <FaRegCalendar size={13} /> {date}
                    </span>
                </div>
            </div>
        </section>

        <div className="container relative z-1 mx-auto mt-[-50px] lg:-mt-[110px]">
            <div className="relative aspect-[1160/480] w-full overflow-hidden rounded-[24px]">
                <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[1fr_360px] lg:gap-14">
                <article>{children}</article>

                <aside className="lg:sticky lg:top-28 lg:self-start">{sidebar}</aside>
            </div>
        </div>
    </>
);

export default BlogHero;
