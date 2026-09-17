"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import type { HowWeWorkData } from "@/types/about";

gsap.registerPlugin(ScrollTrigger);

const IMAGE_WIDTH = 2600;
const IMAGE_HEIGHT = 460;

interface HowWeWorkProps {
    data: HowWeWorkData;
}

const HowWeWork = ({ data }: HowWeWorkProps) => {
    const pinRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pin = pinRef.current;
        const track = trackRef.current;
        if (!pin || !track) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const getDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);

            const tween = gsap.to(track, {
                x: () => -getDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: pin,
                    start: "top 126px",
                    end: () => `+=${getDistance()}`,
                    // Lenis already smooths the raw scroll input, so a
                    // numeric scrub (which adds its own ~second of GSAP-side
                    // catch-up smoothing) stacks two layers of lag on top of
                    // each other. `true` ties the tween directly to Lenis's
                    // already-smoothed position instead.
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true,
                },
            });

            return () => {
                tween.scrollTrigger?.kill();
                tween.kill();
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="relative overflow-hidden bg-(--color-iceblue) py-[42px] xl:py-[92px] space-y-[42px]">
            <div className="container mx-auto">
                <SectionTitle label={data.sectionTitle.label} title={data.sectionTitle.title} />
            </div>

            {/* Desktop: GSAP-pinned horizontal scroll */}
            <div className="container mx-auto mt-[100px] 2xl:mt-[0]">
                <div ref={pinRef} className="relative mt-10 hidden h-screen w-full lg:block">
                    <div
                        ref={trackRef}
                        className="absolute top-[43%] left-0 flex -translate-y-1/2 flex-col will-change-transform"
                    >
                        <div className="flex gap-x-[128px] me-[120px] ">
                            {data.points.map((point, index) => (
                                <div key={point.id} className="relative w-[580px]  shrink-0">
                                    {index > 0 && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute -left-[28px] top-0 bottom-0 border-l border-dashed border-(--color-primary)/25"
                                        />
                                    )}

                                    <h3 className={`text-[28px] leading-[28px] font-semibold tracking-[-0.5px] text-(--color-primary) capitalize ${point.highlight ? "bg-(--color-yellow) p-3 w-max" : ""}`}>
                                        {point.title}
                                    </h3>

                                    <div className="mt-6 space-y-4">
                                        {point.description.map((paragraph, i) => (
                                            <p
                                                key={i}
                                                className="text-[18px] leading-[28px] tracking-[-0.3px] text-(--color-primary)/70"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            className="relative 2xl:mt-16 shrink-0 w-[stretch] h-[400px] 2xl:h-[400px]"

                        >
                            <Image
                                src={data.image.src}
                                alt={data.image.alt}
                                fill
                                className="object-cover object-left w-[100%] md:max-w-[95%]! h-auto!"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile / tablet: stacked cards */}
            <div className="container mx-auto mt-8 flex flex-col gap-6 lg:hidden">
                {data.points.map((point) => (
                    <div
                        key={point.id}
                        className="rounded-(--radius-lg)  p-6 border border-(--color-primary) bg-(--how-we-work-bg)"
                    >
                        <h3 className={`text-[20px] leading-[24px] font-semibold tracking-[-0.4px] text-(--color-primary) capitalize ${point.highlight ? "bg-(--color-yellow) p-3 w-max" : ""}`}>
                            {point.title}
                        </h3>

                        <div className="mt-4 space-y-3">
                            {point.description.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-[14px] leading-[22px] tracking-[-0.2px] text-(--color-primary)/70"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div>
                            {point.mobileImage && (
                                <div className="relative mt-4 w-full h-[auto] aspect-[293/162] ">
                                    <Image
                                        src={point.mobileImage.src}
                                        alt={point.mobileImage.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default HowWeWork;
