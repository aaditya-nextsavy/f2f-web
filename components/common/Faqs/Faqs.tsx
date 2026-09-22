"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import SectionTitle from "../SectionTitle/SectionTitle";
import type { SectionTitleData, FaqData } from "@/types/home";

interface FaqsProps {
    title: SectionTitleData;
    data?: FaqData[];
}

// Words that must keep their own casing wherever they appear in a question
// (pronouns, acronyms, proper nouns) — everything else is forced to sentence
// case. Add to this list as new terms show up in FAQ copy.
const ALWAYS_CAPITALIZED = ["I", "FCL", "LCL", "CHA", "MTO", "FMCG", "CFS", "CBM", "Fairwinds"];

const alwaysCapitalizedByUpperCase = new Map(
    ALWAYS_CAPITALIZED.map((word) => [word.toUpperCase(), word]),
);

// Renders any input casing as sentence case: first word capitalized, every
// other word lowercased, except for the terms above, which are always
// rendered with their own fixed casing regardless of position or how the
// source data typed them.
function toFaqSentenceCase(text: string): string {
    let isFirstWord = true;

    return text.replace(/[A-Za-z]+(?:['-][A-Za-z]+)*/g, (word) => {
        const fixed = alwaysCapitalizedByUpperCase.get(word.toUpperCase());
        const cased = fixed ?? word.toLowerCase();
        const result = isFirstWord ? cased.charAt(0).toUpperCase() + cased.slice(1) : cased;

        isFirstWord = false;
        return result;
    });
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
                                    <span className="text-[20px] md:text-[22px] font-medium leading-[30px] text-(--color-primary) 2xl:text-[24px] 2xl:leading-[34px]">
                                        {toFaqSentenceCase(faq.title)}
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
                                            <p className="max-w-[1200px] text-[16px] 2xl:text-[18px] font-normal leading-[24px] 2xl:leading-[28px] tracking-[-0.3px] text-(--color-primary)">
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
