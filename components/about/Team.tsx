"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import {
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaChevronUp,
} from "react-icons/fa6";

import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import type { SectionTitleData, TeamMemberData } from "@/types/about";

interface TeamProps {
    title: SectionTitleData;
    data: TeamMemberData[];
}

const TeamCard = ({
    member,
    expandedId,
    toggleBio,
}: {
    member: TeamMemberData;
    expandedId: string | number | null;
    toggleBio: (id: string | number) => void;
}) => {
    const isExpanded = expandedId === member.id;

    return (
        <article className="flex h-full flex-col text-(--color-primary)">
            {/* Image */}
            <div className="relative aspect-[372/384] w-full overflow-hidden rounded-[12px]">
                <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 90vw"
                    className="object-cover"
                />
            </div>

            {/* Name */}
            <h3 className="mt-6 text-[24px] leading-6 font-semibold">
                {member.name}
            </h3>

            {/* Role */}
            <span className="mt-3 text-[16px] leading-3.5 font-semibold">
                {member.role}
            </span>

            {/* Divider */}
            <div
                className="my-4 h-px w-full"
                style={{
                    borderTop:
                        "0.8px dashed rgba(17, 34, 122, 0.3)",
                    borderImage:
                        "repeating-linear-gradient(to right, #11227A4D 0 4px, transparent 4px 8px) 1",
                }}
            />

            {/* Bio */}
            <div className="relative">
                <p
                    className={`text-[16px] leading-[24px] text-(--color-primary) lg:text-[18px] lg:leading-[24px] ${isExpanded ? "" : "lg:line-clamp-3"
                        }`}
                >
                    {member.bio}
                </p>
            </div>

            {/* Read More (desktop only; full bio is shown below 1024px) */}
            {member.link?.label && (
                <button
                    type="button"
                    onClick={() => toggleBio(member.id)}
                    aria-expanded={isExpanded}
                    className="mt-1 hidden w-fit cursor-pointer lg:flex items-center gap-2 text-[14px] leading-[32px] font-semibold uppercase tracking-[0.5px] text-(--color-primary) transition-opacity duration-300 hover:opacity-70 hover:underline"
                >
                    <span>
                        {isExpanded
                            ? "Read Less"
                            : member.link.label}
                    </span>

                    {isExpanded ? (
                        <FaChevronUp size={11} />
                    ) : (
                        <FaChevronDown size={11} />
                    )}
                </button>
            )}
        </article>
    );
};

const Team = ({ title, data }: TeamProps) => {
    const splideRef = useRef<Splide>(null);

    const [expandedId, setExpandedId] = useState<
        string | number | null
    >(null);

    const toggleBio = (id: string | number) => {
        setExpandedId((current) =>
            current === id ? null : id
        );
    };

    return (
        <section className="relative overflow-hidden bg-(--color-iceblue) py-[42px] xl:py-[92px]">
            {/* Background SVG */}
            <div className="pointer-events-none absolute inset-0 h-full w-full">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 1920 945"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.03">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-4 87.1053V180.998H841.312C904.523 180.998 891.647 182.129 943.152 133.486C987.633 90.4988 1001.68 96.1551 1085.96 96.1551L1920 96.1551V4.57764e-05L1098.84 0C988.803 1.13124 1050.84 87.1053 821.413 87.1053H-4Z"
                            fill="#11227A"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-4 278.105V371.998H841.312C904.523 371.998 891.647 373.129 943.152 324.486C987.633 281.499 1001.68 287.155 1085.96 287.155H1920V191L1098.84 191C988.803 192.131 1050.84 278.105 821.413 278.105H-4Z"
                            fill="#11227A"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-4 469.105V562.998H841.312C904.523 562.998 891.647 564.129 943.152 515.486C987.633 472.499 1001.68 478.1551 1085.96 478.1551L1920 478.1551V382L1098.84 382C988.803 383.131 1050.84 469.105 821.413 469.105H-4Z"
                            fill="#11227A"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-4 660.105V753.998H841.312C904.523 753.998 891.647 755.129 943.152 706.486C987.633 663.499 1001.68 669.1551 1085.96 669.1551L1920 669.1551V573L1098.84 573C988.803 574.131 1050.84 660.105 821.413 660.105H-4Z"
                            fill="#11227A"
                        />

                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-4 851.105V944.998H841.312C904.523 944.998 891.647 946.129 943.152 897.486C987.633 854.499 1001.68 860.1551 1085.96 860.1551L1920 860.1551V764L1098.84 764C988.803 765.131 1050.84 851.105 821.413 851.105H-4Z"
                            fill="#11227A"
                        />
                    </g>
                </svg>
            </div>

            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    className="mx-auto text-start lg:text-center"
                    titleClassName="text-[32px] lg:text-[42px] text-balance"
                />

                <div className="mt-10 lg:mt-[70px]">
                    {/* ========================================= */}
                    {/* MOBILE: NORMAL VERTICAL STACK < 640px */}
                    {/* ========================================= */}
                    <div className="flex flex-col gap-10 sm:hidden">
                        {data.map((member) => (
                            <TeamCard
                                key={member.id}
                                member={member}
                                expandedId={expandedId}
                                toggleBio={toggleBio}
                            />
                        ))}
                    </div>

                    {/* ========================================= */}
                    {/* TABLET + DESKTOP: SPLIDE >= 640px */}
                    {/* ========================================= */}
                    <div className="hidden sm:block">
                        <Splide
                            ref={splideRef}
                            options={{
                                perPage: 4,
                                gap: "32px",
                                pagination: false,
                                arrows: false,
                                drag: false,
                                autoHeight: true,

                                breakpoints: {
                                    1280: {
                                        perPage: 3,
                                        gap: "20px",
                                        drag: true,
                                    },

                                    768: {
                                        perPage: 2,
                                        gap: "20px",
                                        drag: true,
                                    },

                                    640: {
                                        perPage: 1,
                                        gap: "16px",
                                        padding: {
                                            right: "10%",
                                        },
                                        pagination: true,
                                        drag: true,
                                    },
                                },
                            }}
                            aria-label="Founding members"
                        >
                            {data.map((member) => (
                                <SplideSlide key={member.id}>
                                    <TeamCard
                                        member={member}
                                        expandedId={expandedId}
                                        toggleBio={toggleBio}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>

                        {/* Slider controls */}
                        <div className="mt-8 flex items-center justify-center gap-4 xl:hidden">
                            <button
                                type="button"
                                aria-label="Previous slide"
                                onClick={() =>
                                    splideRef.current?.splide?.go(
                                        "<"
                                    )
                                }
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-primary) text-(--color-primary) transition-colors duration-300 ease-in-out hover:bg-(--color-primary) hover:text-(--color-white)"
                            >
                                <FaChevronLeft size={16} />
                            </button>

                            <button
                                type="button"
                                aria-label="Next slide"
                                onClick={() =>
                                    splideRef.current?.splide?.go(
                                        ">"
                                    )
                                }
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-primary) text-(--color-primary) transition-colors duration-300 ease-in-out hover:bg-(--color-primary) hover:text-(--color-white)"
                            >
                                <FaChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;