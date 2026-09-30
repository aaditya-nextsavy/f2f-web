"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { PartnerData } from "@/types/home";

interface OurPartnersProps {
    title: string;
    data: PartnerData[];
}

export default function OurPartners({ title, data }: OurPartnersProps) {

    const renderPartner = (partner: PartnerData): ReactNode => {
        const content = (

            <>
                <div className=" h-[90px] xl:h-max flex justify-center">
                    <Image
                        src={partner.image}
                        alt={partner.alt}
                        width={187}
                        height={82}
                        className="h-full max-w-full xl:h-auto my-auto xl:max-h-[100px] w-auto xl:max-w-full object-contain"
                    />
                </div>
            </>

        );

        if (partner.link) {
            return (
                <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                    {content}
                </Link>
            );
        }

        return <div>{content}</div>;
    };

    return (
        <section className=" w-full overflow-hidden mt-[50px] lg:mt-[0px]">
            <div className="mx-auto flex h-full  flex-col items-center justify-center px-5">
                <h3 className="mb-8 text-center text-[24px] leading-[34px] font-medium text-(--color-primary)">
                    {title}
                </h3>

                {/* Desktop */}

                <div className="container mx-auto hidden xl:block">
                    <div className="flex w-full items-center justify-between gap-2">
                        {data.map((partner) => (
                            <div key={partner.id} className="flex min-w-0 flex-1 items-center justify-center ">
                                {renderPartner(partner)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Below 1280px: full-width slider (outside the container), fewer logos per page as width shrinks */}
            <div className="block w-full xl:hidden">
                    <Splide
                        aria-label="Our Partners"
                        options={{
                            type: "loop",
                            perPage: 6,
                            perMove: 1,
                            gap: "8px",
                            arrows: false,
                            pagination: false,
                            drag: true,
                            autoplay: true,
                            interval: 2200,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            speed: 700,
                            breakpoints: {
                                1023: { perPage: 5 },
                                767: { perPage: 4 },
                                639: { perPage: 3 },
                                479: { perPage: 2 },
                            },
                        }}
                    >
                        {data.map((partner) => (
                            <SplideSlide key={partner.id}>
                                <div className="aspect-[146/34] flex h-[90px] object-contain items-center justify-center">
                                    {renderPartner(partner)}
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
        </section>
    );
}
