"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import type { ServiceFileCard, ServicesFilesData } from "@/types/services";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import { GoDotFill } from "react-icons/go";


type ServicesFilesProps = {
    data: ServicesFilesData;
};

function ServiceFileCardView({ card, isDark }: { card: ServiceFileCard; isDark: boolean }) {
    return (
        <div
            className={`rounded-[42px] p-8 lg:p-14 ${isDark ? "bg-(--color-primary)" : "bg-(--color-iceblue)"
                }`}
        >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                <div className="lg:w-1/2">
                    <SectionTitle
                        title={card.title}
                        theme={isDark ? "inverted" : "default"}
                        titleClassName="xl:text-[56px]! leading-[60px]!"
                    />

                    <p
                        className={`mt-5 text-[15px] leading-[24px] lg:text-[16px] lg:leading-[26px] ${isDark ? "text-white" : "text-(--color-primary)/70"
                            }`}
                    >
                        {card.description}
                    </p>

                    <h4
                        className={`mt-[100px] text-[24px] font-medium lg:text-[28px] ${isDark ? "text-white" : "text-(--color-primary)"}`}
                    >
                        {card.listTitle}
                    </h4>

                    <ul className="mt-4 flex flex-col gap-2 xl:gap-0">
                        {card.listItems.map((item) => (
                            <li key={item} className={`flex items-start gap-3 border-b border-dashed py-[20px] ${isDark ? "border-white/50" : "border-(--color-primary)/50"}`}>
                                <span className="h-[21px] w-[21px] aspect-square text-[black] relative mt-0.5 h-5 w-5 shrink-0">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.2857" cy="11.2857" r="10.2857" fill="#C0CAFD" />
                                        <path d="M10.022 13.0143L14.8648 8.17143C14.9791 8.05714 15.1125 8 15.2648 8C15.4172 8 15.5505 8.05714 15.6648 8.17143C15.7791 8.28571 15.8363 8.42152 15.8363 8.57886C15.8363 8.73619 15.7791 8.87181 15.6648 8.98571L10.422 14.2429C10.3077 14.3571 10.1744 14.4143 10.022 14.4143C9.8696 14.4143 9.73626 14.3571 9.62198 14.2429L7.16484 11.7857C7.05055 11.6714 6.99569 11.5358 7.00026 11.3789C7.00484 11.2219 7.06445 11.0861 7.17912 10.9714C7.29379 10.8568 7.4296 10.7996 7.58655 10.8C7.7435 10.8004 7.87912 10.8575 7.99341 10.9714L10.022 13.0143Z" fill="#11227A" />
                                    </svg>

                                </span>
                                <span
                                    className={`text-[14px] leading-[22px] lg:text-[18px] lg:leading-[28px] ${isDark ? "text-white" : "text-(--color-primary)/85"
                                        }`}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-[100px]">
                        <Button href={card.action.href} variant={card.action.variant}>
                            {card.action.label}
                            {card.action.variant === "yellow" && <FaArrowRight size={15} />}
                        </Button>
                    </div>
                </div>

                <div className={`lg:w-1/2 ${isDark ? "services-files-dark" : "services-files-light"}`}>
                    <Splide
                        aria-label={card.title}
                        options={{
                            perPage: 1,
                            arrows: false,
                            pagination: true,
                            drag: true,
                            gap: "0",
                        }}
                    >
                        {card.images.map((image, index) => (
                            <SplideSlide key={index} className="w-full">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1023px) 100vw, 50vw"
                                    />
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </div>
    );
}

export default function ServicesFiles({ data }: ServicesFilesProps) {
    const [activeId, setActiveId] = useState(data.cards[0]?.id);

    useEffect(() => {
        const applyHash = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash && data.cards.some((card) => card.id === hash)) {
                setActiveId(hash);
            }
        };

        applyHash();
        window.addEventListener("hashchange", applyHash);
        return () => window.removeEventListener("hashchange", applyHash);
    }, [data.cards]);

    const handleSelect = (id: string) => {
        setActiveId(id);
        window.history.replaceState(null, "", `#${id}`);
    };

    return (
        <section className="container mx-auto">
            <div className="hidden flex-wrap gap-2 ms-10 sm:flex">
                {data.cards.map((card, index) => {
                    const isDark = index % 2 === 1;
                    const isActive = card.id === activeId;

                    return (
                        <button
                            key={card.id}
                            type="button"
                            onClick={() => handleSelect(card.id)}
                            aria-pressed={isActive}
                            className={`relative cursor-pointer px-8 py-3 text-[12px] font-semibold uppercase tracking-wide transition-opacity lg:text-[12px] ${isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
                                }`}
                        >
                            <svg
                                className={`absolute inset-0 -z-10 h-full mt-[1px] w-full ${isDark ? "text-(--color-primary)" : "text-(--color-iceblue)"
                                    }`}
                                preserveAspectRatio="none"
                                viewBox="0 0 212 50"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path d="M187.854 10.0933C183.973 3.68788 178.303 6.8459e-05 172.334 0H39.5704C33.6012 6.8459e-05 27.931 3.68788 24.0504 10.0933L5.90801 40.0406L0 50H5.90801H205.972H211.809L205.972 40.0004L187.854 10.0933Z"
                                    fill="currentColor"
                                />


                            </svg>

                            <span className={`flex gap-1 items-center ${isDark ? "text-white" : "text-(--color-primary)"}`}>
                                <GoDotFill />
                                {card.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Mobile: every card stacked one after another, full opacity, no tabs.
                Tablet and up: only the active card shows, others overlay-hidden. */}
            <div className="relative flex flex-col gap-10 sm:block sm:gap-0">
                {data.cards.map((card, index) => {
                    const isDark = index % 2 === 1;
                    const isActive = card.id === activeId;

                    return (
                        <div
                            key={card.id}
                            id={card.id}
                            className={
                                isActive
                                    ? "relative opacity-100 transition-opacity duration-500 ease-in-out"
                                    : "relative opacity-100 transition-opacity duration-500 ease-in-out sm:pointer-events-none sm:absolute sm:inset-0 sm:opacity-0"
                            }
                        >
                            <ServiceFileCardView card={card} isDark={isDark} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
