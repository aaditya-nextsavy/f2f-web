"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import type { FeatureCardItem } from "@/types/services";

interface FeatureCardsProps {
    data: FeatureCardItem[];
}

function FeatureCard({ card }: { card: FeatureCardItem }) {
    return (
        <article className="group h-full">
            {/* Image */}
            <div className="aspect-[402/484] overflow-hidden rounded-[24px]">
                <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="pt-[34px]">
                <h3 className="text-[22px] tracking-[-1px] font-medium leading-[1.3] text-(--color-primary) sm:text-sm md:text-[28px] md:leading-[32px] tracking-[-0.8px]">
                    {card.title}
                </h3>

                <p className="mt-3 text-[16px] leading-[24px] text-(--color-primary) md:text-[18px] md:leading-[28px] tracking-[-0.3px]">
                    {card.description}
                </p>
            </div>
        </article>
    );
}

export default function FeatureCards({ data }: FeatureCardsProps) {
    return (

        <div className="container">
            {/* Mobile: every card stacked one after another, no carousel/dimming */}
            <div className="flex flex-col gap-10 sm:hidden">
                {data.map((card) => (
                    <FeatureCard key={card.id} card={card} />
                ))}
            </div>

            {/* Tablet and up: carousel */}
            <div className="hidden sm:block">
                <Splide
                    aria-label="Features"
                    options={{
                        type: "slide",
                        perPage: 4,
                        perMove: 1,
                        gap: "24px",
                        arrows: false,
                        pagination: false,
                        drag: true,
                        speed: 700,
                        breakpoints: {
                            1023: {
                                perPage: 2,
                                gap: "18px",
                                pagination: true,
                            },
                        },
                    }}
                    className="feature-cards"
                >
                    {data.map((card) => (
                        <SplideSlide key={card.id}>
                            <FeatureCard card={card} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>

    );
}