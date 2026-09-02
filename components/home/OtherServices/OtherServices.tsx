"use client";

import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import ServiceCard from "@/components/common/ServiceCard";
import type { SectionTitleData, ServiceCardData } from "@/types/home";

interface OtherServicesProps {
    title: SectionTitleData;
    data: ServiceCardData[];
}

const OtherServices = ({ title, data }: OtherServicesProps) => {
    const splideRef = useRef<Splide>(null);

    return (
        <section className="other-services">
            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    description={title.description}
                    className="xl:max-w-[60%] text-balance"
                />

                {/* Grid layout - tablet and up */}
                <div className="mt-10 hidden flex-wrap justify-center gap-4 sm:flex lg:mt-[100px] lg:gap-x-6 lg:gap-y-14">
                    {data.map((card) => (
                        <div
                            key={card.id}
                            className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-1.125rem)]"
                        >
                            <ServiceCard
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                link={card.link}
                            />
                        </div>
                    ))}
                </div>

                {/* Slider - mobile only */}
                <div className="mt-14 sm:hidden">
                    <Splide
                        ref={splideRef}
                        options={{
                            perPage: 1,
                            gap: "1rem",
                            padding: { right: "2.5rem" },
                            pagination: true,
                            arrows: false,
                            drag: true,
                            autoHeight: true,
                        }}
                        aria-label="Other services"
                    >
                        {data.map((card) => (
                            <SplideSlide key={card.id}>
                                <ServiceCard
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    link={card.link}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            aria-label="Previous slide"
                            onClick={() => splideRef.current?.splide?.go("<")}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-(--color-primary)
                                text-(--color-primary)
                                transition-colors
                                duration-300
                                ease-in-out
                                hover:bg-(--color-primary)
                                hover:text-(--color-white)
                            "
                        >
                            <FaChevronLeft size={16} />
                        </button>

                        <button
                            type="button"
                            aria-label="Next slide"
                            onClick={() => splideRef.current?.splide?.go(">")}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-(--color-primary)
                                text-(--color-primary)
                                transition-colors
                                duration-300
                                ease-in-out
                                hover:bg-(--color-primary)
                                hover:text-(--color-white)
                            "
                        >
                            <FaChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherServices;
