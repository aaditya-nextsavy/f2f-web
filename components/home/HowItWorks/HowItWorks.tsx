"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import type { HowItWorksStepData, SectionTitleData } from "@/types/home";

interface HowItWorksProps {
    title: SectionTitleData;
    paragraphs: string[];
    steps: HowItWorksStepData[];
}

const HowItWorks = ({ title, paragraphs, steps }: HowItWorksProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="how-it-works xl:mt-[-92px]">

            <div className="relative overflow-hidden xl:py-[92px]">

                <div className="container mx-auto">
                    <Image
                        src="/images/home/howitworks/how-it-works-right.svg"
                        alt=""
                        width={645}
                        height={850}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-0 top-0 hidden! w-[40%] lg:block!"
                    />


                    <SectionTitle
                        label={title.label}
                        title={title.title}
                        className="relative z-10 max-w-xl"
                        titleClassName="text-balance"
                    />
                </div>


                {/* Desktop layout */}
                <div className="hidden lg:block relative z-10 mt-10  2xl:mt-[92px] pt-[40px] 2xl:pt-[92px]">

                    <Image
                        src="/images/home/howitworks/how-it-works-left.svg"
                        alt=""
                        width={1000}
                        height={1286}
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 w-[58.5%] 2xl:w-[55.8%] left-0 hidden lg:block object-cover h-fit"
                    />

                    <div className="container mx-auto">

                        <div className=" hidden lg:grid lg:grid-cols-2 lg:gap-[92px]">
                            <div className="space-y-6 max-w-[710px]">
                                {paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-justify text-[16px] 2xl:text-[18px] font-normal leading-[24px] 2xl:leading-[28px] tracking-[-0.3px] text-(--color-primary)"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {steps.map((step, index) => (
                                    <div key={step.id} className="relative flex gap-[24px] 2xl:gap-[64px] pb-12 2xl:pb-14 last:pb-0">
                                        <div className="flex flex-row items-start gap-4 mt-1.5">
                                            <span className="text-[24px]  text-(--color-primary)/40 min-w-[29px] max-w-[29px]">
                                                {String(step.id).padStart(2, "0")}
                                            </span>
                                            <span className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-yellow)">
                                                <FaCheck className="text-(--color-primary)" size={14} />
                                            </span>
                                        </div>
                                        <div className="max-w-[560px]">
                                            <h3 className="text-[26px] 2xl:text-[34px] font-medium capitalize leading-[42px] tracking-[-1px] text-(--color-primary)">
                                                {step.title}
                                            </h3>
                                            <p className="mt-5 text-[16px] 2xl:text-[18px] font-normal leading-[24px] 2xl:leading-[32px] tracking-[-0.3px] text-(--color-primary)">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="container mx-auto relative z-10 mt-8 lg:hidden">
                    <div className="space-y-6">
                        {steps.map((step) => (
                            <div key={step.id}>
                                <h3 className="text-[18px] font-medium text-(--color-primary)">
                                    {String(step.id).padStart(2, "0")}. {step.title}
                                </h3>

                                <p className="mt-1 text-[14px] leading-[22px] text-(--color-primary)/70">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 border-t border-(--color-primary)/10 pt-6  ">
                        <p
                            className={`text-justify text-[15px] leading-[24px] text-(--color-primary) ${expanded ? "" : "line-clamp-3"
                                }`}
                        >
                            {paragraphs.join(" ")}
                        </p>

                        <button
                            type="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-(--color-primary)"
                        >
                            {expanded ? "Read Less" : "Read More"}
                            <FaChevronDown
                                size={12}
                                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HowItWorks;
