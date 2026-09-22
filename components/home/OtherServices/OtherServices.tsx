"use client";

import { useRef, useState } from "react";
import type { Splide as SplideInstance } from "@splidejs/splide";
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
    const [activeIndex, setActiveIndex] = useState(0);

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
                <div className="mt-10 sm:mt-20 hidden flex-wrap justify-between 2xl:justify-center gap-4 sm:flex lg:mt-[100px] lg:gap-x-6 sm:gap-y-20 lg:gap-y-20">
                    {data.map((card) => (
                        <div
                            key={card.id}
                            className="w-[calc(50%-0.5rem)] md:w-[calc(32%-0.667rem)] 2xl:w-[calc(25%-1.125rem)]"
                        >
                            <ServiceCard
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                link={card.link}
                                alt={card.alt}
                            />
                        </div>
                    ))}
                </div>

                <div className="other-services mt-14 sm:hidden">
                    <Splide
                        ref={splideRef}
                        options={{
                            perPage: 1,
                            gap: "1rem",
                            padding: { right: "2.5rem" },
                            pagination: false,
                            arrows: false,
                            center: true,
                            drag: true,
                            autoHeight: true,
                        }}
                        onMoved={(_splide: SplideInstance, newIndex: number) => setActiveIndex(newIndex)}
                        aria-label="Other services"
                    >
                        {data.map((card) => (
                            <SplideSlide key={card.id}>
                                <ServiceCard
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    link={card.link}
                                    alt={card.alt}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>

                    <div className="container mx-auto">
                        <div className="mt-6 flex items-center justify-between gap-5 ">
                            {/* Same active(rectangle)/inactive(circle) pagination
                                treatment as the services page's image-slider cards
                                (.services-files-light .splide__pagination__page in
                                globals.css): 18x6 dot, 36x6 pill when active, 6px gap. */}
                            <div className="flex items-center gap-1.5">
                                {data.map((card, index) => (
                                    <button
                                        key={card.id}
                                        type="button"
                                        aria-label={`Go to slide ${index + 1}`}
                                        onClick={() => splideRef.current?.splide?.go(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? "w-9 bg-(--color-primary)"
                                            : "w-4.5 bg-(--color-light-indigo)"
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    aria-label="Previous slide"
                                    onClick={() => splideRef.current?.splide?.go("<")}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--color-primary) text-(--color-primary) transition-colors duration-300 hover:bg-(--color-primary) hover:text-(--color-white)"
                                >
                                    <FaChevronLeft size={16} />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Next slide"
                                    onClick={() => splideRef.current?.splide?.go(">")}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--color-primary) text-(--color-primary) transition-colors duration-300 hover:bg-(--color-primary) hover:text-(--color-white)"
                                >
                                    <FaChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OtherServices;
