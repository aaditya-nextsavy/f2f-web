"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import SectionTitle from "../SectionTitle/SectionTitle";
import type { SectionTitleData, FaqData } from "@/types/home";

interface FaqsProps {
    title: SectionTitleData;
    data?: FaqData[];
}

export default function Faqs({ title, data = [] }: FaqsProps) {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index: number) => {
        setOpenIndex((current) => (current === index ? -1 : index));
    };

    return (
        <section className="w-full">
            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    description={title.description}
                    descriptionPosition="right"
                    className="pb-[42px] xl:pb-[62px]"
                    titleClassName="lg:text-[40px] lg:leading-[1.15]"
                    descriptionClassName=""
                />

                <div className="w-full">
                    {data.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.id ?? index}
                                className="border-t border-dashed border-(--form-placeholder)"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-8 text-left"
                                >
                                    <span className="text-[20px] font-medium leading-[30px] capitalize text-(--color-primary) md:text-[24px] md:leading-[34px]">
                                        {faq.title}
                                    </span>

                                    <span
                                        className={`flex size-5 shrink-0 items-center justify-center text-(--color-primary) transition-transform duration-500 ease-in-out ${isOpen
                                                ? "rotate-45"
                                                : "rotate-0"
                                            }`}
                                    >
                                        <FiPlus className="size-5" />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-8">
                                            <p className="max-w-[1200px] text-[18px] font-normal leading-[28px] tracking-[-0.3px] text-(--color-primary)">
                                                {faq.descp}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
