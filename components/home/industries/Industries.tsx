"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import type { IndustryCardData, SectionTitleData } from "@/types/home";

const AUTOPLAY_PX_PER_SEC = 30;
const EASE_TAU_MS = 350;

interface IndustriesProps {
    title: SectionTitleData;
    data: IndustryCardData[];
    tightBottom?: boolean;
}

const Industries = ({ title, data, tightBottom = true }: IndustriesProps) => {
    const splideRef = useRef<Splide>(null);
    const targetSpeedRef = useRef(AUTOPLAY_PX_PER_SEC);
    const currentSpeedRef = useRef(AUTOPLAY_PX_PER_SEC);
    const draggingRef = useRef(false);

    useEffect(() => {
        const splide = splideRef.current?.splide;
        if (!splide) return;

        const { Move } = splide.Components;
        let rafId: number;
        let lastTime = performance.now();

        const onDrag = () => {
            draggingRef.current = true;
        };
        const onDragged = () => {
            draggingRef.current = false;
        };
        splide.on("drag", onDrag);
        splide.on("dragged", onDragged);

        const tick = (now: number) => {
            const dt = Math.min(now - lastTime, 100);
            lastTime = now;

            const ease = 1 - Math.exp(-dt / EASE_TAU_MS);
            currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * ease;

            if (!draggingRef.current && currentSpeedRef.current > 0.01) {
                Move.translate(Move.getPosition() - (currentSpeedRef.current * dt) / 1000);
            }

            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            splide.off("drag");
            splide.off("dragged");
        };
    }, []);

    const handleMouseEnter = () => {
        targetSpeedRef.current = 0;
    };

    const handleMouseLeave = () => {
        targetSpeedRef.current = AUTOPLAY_PX_PER_SEC;
    };

    return (
        <section className={`industries mt-[42px] ${tightBottom ? "mb-[62px] lg:mb-[90px]" : ""}`}>
            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    description={title.description}
                    className="xl:max-w-[60%] text-balance"
                />
            </div>

            <div
                className="mt-7 overflow-hidden lg:mt-[40px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Splide
                    ref={splideRef}
                    aria-label="Industries"
                    options={{
                        type: "loop",
                        drag: true,
                        arrows: false,
                        pagination: false,
                        fixedWidth: "20%",
                        gap: "0",

                        breakpoints: {
                            1439: {
                                fixedWidth: "25%",
                            },
                            1023: {
                                fixedWidth: "33.3333%",
                            },
                            // ~640-767px: 3-up at 33.3333% made each square card too
                            // small at this width for the icon + title + description
                            // to fit inside the fixed 42%-height content area without
                            // overflowing. Showing 2 per view instead gives each card
                            // enough room, matching how the 33.3333%/25%/20% tiers
                            // above already scale comfortably at their own widths.
                            767: {
                                fixedWidth: "50%",
                            },
                            639: {
                                fixedWidth: "83.3333%",
                            },
                        },
                    }}
                >
                    {data.map((card) => (
                        <SplideSlide key={card.id} className="flex flex-col">
                            {/* The ratio is the *minimum* size, not a fixed box. The slide
                                is a flex *column*: width comes from the slide (so the card
                                can never be wider than it), height starts at the ratio,
                                grows to fit longer copy (no overflow-hidden), and `grow`
                                fills the slide - Splide stretches every slide to the
                                tallest one, so the row stays even. (A flex *row* here let
                                the ratio turn the stretched height into extra width, which
                                pushed text into the next card.) 1440-1799px shows 5 narrow
                                cards per view (each 20vw wide), so they get a taller
                                minimum there: 1.25x the card width minus 50px. */}
                            <article className="group relative flex min-w-0 grow aspect-square min-[1440px]:max-[1799px]:aspect-auto min-[1440px]:max-[1799px]:min-h-[calc(25vw-50px)] flex-col border-r border-t border-b border-(--color-primary) bg-(--cards-bg) transition-colors duration-300 ease-in-out hover:bg-(--color-iceblue)">
                                {/* Number */}
                                <span className="absolute left-3 top-5 z-20 text-[14px] font-bold leading-[32px] text-(--color-primary)">
                                    {String(card.id).padStart(2, "0")}
                                </span>

                                {/* Icon area - in flow, and sized from the card's width
                                    (100:58) so it's the same 58% of a square card as
                                    before, and identical across all cards in the row. */}
                                <div className="relative flex aspect-[100/58] w-full shrink-0 items-center justify-center overflow-hidden">
                                    <div className="relative size-18 md:size-14 xl:size-[65px] 2xl:size-22 mt-[40px] md:mt-0 sm:opacity-20 md:opacity-100">
                                        <Image
                                            src={card.image}
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <Image
                                            src="/images/common/industries-card-line-bg.svg"
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content area: top-anchored at every size, directly under
                                    the fixed-ratio icon area, so every card's title starts at
                                    the same height whether it wraps to one or two lines. Extra
                                    height (from a taller neighbour) collects below the text,
                                    and longer copy grows the card instead of being clipped. */}
                                <div className="relative z-10 flex flex-1 flex-col justify-start px-3 pb-5 pt-4 md:px-2 md:pt-2 xl:px-3 min-[1550px]:pb-8">
                                    <h3 className="text-[18px] xl:text-xl font-semibold leading-[20px] text-(--color-primary) md:text-[20px]">
                                        {typeof card.title === "string"
                                            ? card.title.charAt(0).toUpperCase() + card.title.slice(1)
                                            : card.title}
                                    </h3>

                                    <p className="mt-2 max-w-[340px] text-[14px] xl:text-[16px] leading-relaxed text-(--color-primary)">
                                        {card.descp}
                                    </p>
                                </div>
                            </article>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default Industries;
