"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


import { Button } from "@/components/ui/Button";

import type { ServiceFileCard, ServicesFilesData } from "@/types/services";

import SectionTitle from "../common/SectionTitle/SectionTitle";

type ServicesFilesProps = {
    data: ServicesFilesData;
};

function ServiceFileCardView({
    card,
    isDark,
}: {
    card: ServiceFileCard;
    isDark: boolean;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`h-max rounded-[42px] p-8 lg:p-14 ${isDark
                ? "bg-(--color-primary)"
                : "bg-(--color-iceblue)"
                }`}
        >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                {/* Content */}
                <div className="flex flex-col lg:w-1/2">
                    {/* Main content */}
                    <div>
                        <SectionTitle
                            title={card.title}
                            theme={isDark ? "inverted" : "default"}
                            titleClassName="xl:text-[44px]! leading-[1.3]!"
                        />

                        <p
                            className={`mt-5 text-[15px] leading-[24px] lg:text-[16px] lg:leading-[26px] ${isDark
                                ? "text-white"
                                : "text-(--color-primary)/70"
                                }`}
                        >
                            {card.description}
                        </p>
                    </div>

                    {/* Mobile Read More */}
                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        className={`mt-1 flex w-fit items-center gap-2 border-b pb-1 text-[14px] font-semibold underline-offset-4 min-[991px]:hidden ${isDark
                            ? "border-white text-white"
                            : "border-(--color-primary) text-(--color-primary)"
                            }`}
                        aria-expanded={isExpanded}
                    >
                        <span>
                            {isExpanded ? "Read Less" : "Read More"}
                        </span>

                        {isExpanded ? (
                            <FaChevronUp size={12} />
                        ) : (
                            <FaChevronDown size={12} />
                        )}
                    </button>

                    {/* Expandable details */}
                    <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out min-[991px]:grid-rows-[1fr] ${isExpanded
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className="pt-7">
                                <h4
                                    className={`text-[24px] font-medium lg:text-[26px] ${isDark
                                        ? "text-white"
                                        : "text-(--color-primary)"
                                        }`}
                                >
                                    {card.listTitle}
                                </h4>

                                <ul className="mt-1 flex flex-col gap-2 xl:gap-0">
                                    {card.listItems.map((item) => (
                                        <li
                                            key={item}
                                            className={`flex items-start gap-3 border-b border-dashed py-[20px] ${isDark
                                                ? "border-white/50"
                                                : "border-(--color-primary)/50"
                                                }`}
                                        >
                                            <span className="relative mt-0.5 h-[21px] w-[21px] shrink-0">
                                                <svg
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="11.2857"
                                                        cy="11.2857"
                                                        r="10.2857"
                                                        fill="#C0CAFD"
                                                    />

                                                    <path
                                                        d="M10.022 13.0143L14.8648 8.17143C14.9791 8.05714 15.1125 8 15.2648 8C15.4172 8 15.5505 8.05714 15.6648 8.17143C15.7791 8.28571 15.8363 8.42152 15.8363 8.57886C15.8363 8.73619 15.7791 8.87181 15.6648 8.98571L10.422 14.2429C10.3077 14.3571 10.1744 14.4143 10.022 14.4143C9.8696 14.4143 9.73626 14.3571 9.62198 14.2429L7.16484 11.7857C7.05055 11.6714 6.99569 11.5358 7.00026 11.3789C7.00484 11.2219 7.06445 11.0861 7.17912 10.9714C7.29379 10.8568 7.4296 10.7996 7.58655 10.8C7.7435 10.8004 7.87912 10.8575 7.99341 10.9714L10.022 13.0143Z"
                                                        fill="#11227A"
                                                    />
                                                </svg>
                                            </span>

                                            <span
                                                className={`text-[14px] leading-[22px] lg:text-[18px] lg:leading-[28px] ${isDark
                                                    ? "text-white"
                                                    : "text-(--color-primary)/85"
                                                    }`}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </div>
                    </div>

                    {/* Desktop action */}

                    <div className="mt-6">
                        <Button
                            href={card.action.href}
                            variant={card.action.variant}
                            className="w-full lg:w-max"
                        >
                            {card.action.label}

                            {card.action.variant === "yellow" && (
                                <FaArrowRight size={15} />
                            )}
                        </Button>
                    </div>

                </div>

                {/* Images */}
                <div
                    className={`lg:w-1/2 rounded-[12px]! xl:rounded-[28px]! overflow-hidden ${isDark
                        ? "services-files-dark "
                        : "services-files-light"
                        }`}
                >
                    <Splide
                        aria-label={card.title}
                        options={{
                            perPage: 1,
                            arrows: false,
                            pagination: true,
                            drag: true,
                            autoplay: true,
                            interval: 3000,
                            speed: 600,
                            gap: "0",
                        }}
                    >
                        {card.images.map((image, index) => (
                            <SplideSlide
                                key={index}
                                className="w-full"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] xl:rounded-[24px]">
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

export default function ServicesFiles({
    data,
}: ServicesFilesProps) {
    const [activeId, setActiveId] = useState(
        data.cards[0]?.id
    );

    useEffect(() => {
        const applyHash = () => {
            const hash = window.location.hash.replace("#", "");

            if (
                hash &&
                data.cards.some((card) => card.id === hash)
            ) {
                setActiveId(hash);
            }
        };

        applyHash();

        // Next's <Link> navigates via history.pushState, which never fires
        // a native "hashchange" - so switching between two hash links while
        // already on this page (e.g. Air Freight -> Break Bulk from the
        // header dropdown) wouldn't otherwise update the active tab.
        // SmoothScrollProvider broadcasts this custom event for that case.
        window.addEventListener("hashchange", applyHash);
        window.addEventListener("app:locationchange", applyHash);

        return () => {
            window.removeEventListener("hashchange", applyHash);
            window.removeEventListener("app:locationchange", applyHash);
        };
    }, [data.cards]);

    const handleSelect = (id: string) => {
        setActiveId(id);

        window.history.replaceState(
            null,
            "",
            `#${id}`
        );
    };

    return (
        <section className="container mx-auto">
            {/* Desktop tabs */}
            <div className="ms-10 hidden relative z-0 flex-wrap min-[991px]:flex">
                {data.cards.map((card, index) => {
                    const isDark = index % 2 === 1;
                    const isActive = card.id === activeId;

                    return (
                        <button
                            key={card.id}
                            type="button"
                            onClick={() =>
                                handleSelect(card.id)
                            }
                            aria-pressed={isActive}
                            // Each tab sits behind the one before it and in
                            // front of the one after it; the active tab wins.
                            style={{
                                zIndex: isActive
                                    ? data.cards.length + 1
                                    : data.cards.length - index,
                            }}
                            className={`relative -ml-10 xl:-ml-7  cursor-pointer px-10 py-3 text-[12px]  lg:text-[14px] font-semibold capitalize tracking-wide first:ml-0 xl:text-[16px] ${isActive
                                ? "font-bold!"
                                : "font-medium!"
                                }`}
                        >
                            <svg
                                className={`absolute inset-0 -z-10 mt-[1px] h-full w-full transition-[filter] duration-300 ${isDark
                                    ? "text-(--color-primary)"
                                    : "text-(--color-iceblue)"
                                    } ${isActive
                                        ? "drop-shadow-[4px_0_8px_rgba(0,0,0,0.25)]"
                                        : "drop-shadow-[3px_0_5px_rgba(0,0,0,0.15)]"
                                    }`}
                                preserveAspectRatio="none"
                                viewBox="0 0 212 50"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M187.854 10.0933C183.973 3.68788 178.303 6.8459e-05 172.334 0H39.5704C33.6012 6.8459e-05 27.931 3.68788 24.0504 10.0933L5.90801 40.0406L0 50H5.90801H205.972H211.809L205.972 40.0004L187.854 10.0933Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <span
                                className={`flex items-center translate-y-[3px]  ${isDark
                                    ? "text-white"
                                    : "text-(--color-primary)"
                                    }`}
                            >
                                {card.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Cards */}
            <div className="relative flex flex-col gap-10 min-[991px]:block min-[991px]:gap-0 z-[2]">
                {data.cards.map((card, index) => {
                    const isDark = index % 2 === 1;
                    const isActive =
                        card.id === activeId;

                    return (
                        <div
                            key={card.id}
                            id={card.id}
                            className={`scroll-mt-[110px] 2xl:scroll-mt-[200px] ${isActive
                                ? "relative opacity-100 transition-opacity duration-500 ease-in-out "
                                : "relative opacity-100 transition-opacity duration-500 ease-in-out min-[991px]:pointer-events-none min-[991px]:absolute min-[991px]:inset-0 min-[991px]:opacity-0"
                                }`}
                        >
                            <ServiceFileCardView
                                card={card}
                                isDark={isDark}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}