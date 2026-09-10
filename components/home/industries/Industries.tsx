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
}

const Industries = ({ title, data }: IndustriesProps) => {
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
        <section className="industries mt-[42px] mb-[62px] lg:mb-0">
            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    description={title.description}
                    className="xl:max-w-[60%] text-balance"
                />
            </div>

            <div
                className="mt-7 overflow-hidden lg:mt-[88px]"
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
                            639: {
                                fixedWidth: "83.3333%",
                            },
                        },
                    }}
                >
                    {data.map((card) => (
                        <SplideSlide key={card.id}>
                            <article className="group relative aspect-square overflow-hidden border-r border-t border-b border-(--color-primary) bg-(--cards-bg) transition-colors duration-300 ease-in-out hover:bg-(--color-iceblue)">
                                {/* Number */}
                                <span className="absolute left-5 top-5 z-20 text-[14px] font-bold leading-[32px] text-(--color-primary)">
                                    {String(card.id).padStart(2, "0")}
                                </span>

                                {/* Icon area */}
                                <div className="absolute inset-x-0 top-0 flex h-[58%] items-center justify-center">
                                    <div className="relative size-14 md:size-18">
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

                                {/* Content area */}
                                <div className="absolute inset-x-0 bottom-0 z-10 flex h-[42%] flex-col justify-end p-[18px] pt-4 md:p-5 xl:p-8">
                                    <h3 className="text-xl font-semibold leading-[20px] text-(--color-primary) md:text-[20px]">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 max-w-[340px] text-[16px] leading-relaxed text-(--color-primary)">
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
