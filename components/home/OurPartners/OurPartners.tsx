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
                <div className=" h-[55px] lg:h-[120px] flex justify-center">
                    <Image
                        src={partner.image}
                        alt={partner.alt}
                        width={200}
                        height={60}
                        className="h-auto my-auto opacity-50  lg:max-h-[52px] w-auto lg:max-w-[180px] object-cover"
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
        <section className=" w-full overflow-hidden">
            <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-5">
                <h3 className="mb-8 text-center text-[24px] leading-[34px] font-medium text-(--color-primary)">
                    {title}
                </h3>

                {/* Desktop */}
                <div className="hidden w-full items-center justify-between lg:flex">
                    {data.map((partner) => (
                        <div key={partner.id} className="flex flex-1 items-center justify-center ">
                            {renderPartner(partner)}
                        </div>
                    ))}
                </div>

                {/* Mobile */}
                <div className="block w-full lg:hidden">
                    <Splide
                        aria-label="Our Partners"
                        options={{
                            type: "loop",
                            perPage: 2,
                            perMove: 1,
                            gap: "24px",
                            arrows: false,
                            pagination: false,
                            drag: true,
                            autoplay: true,
                            interval: 2200,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            speed: 700,
                        }}
                    >
                        {data.map((partner) => (
                            <SplideSlide key={partner.id}>
                                <div className="aspect-[146/34] flex h-[34px] lg:h-[55px] object-contain items-center justify-center">
                                    {renderPartner(partner)}
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
}
