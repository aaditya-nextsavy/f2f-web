"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PartnerData } from "@/types/home";

interface OurPartnersProps {
    title: string;
    data: PartnerData[];
}

export default function OurPartners({ title, data }: OurPartnersProps) {

    const renderPartner = (partner: PartnerData): ReactNode => {
        const content = (

            <>
                <div className=" h-[90px] xl:h-[110px] min-[1440px]:h-max flex justify-center">
                    <Image
                        src={partner.image}
                        alt={partner.alt}
                        width={187}
                        height={82}
                        className="h-full max-w-full min-[1440px]:h-auto my-auto min-[1440px]:max-h-[100px] w-auto object-contain"
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

                <div className="container mx-auto hidden min-[1440px]:block">
                    <div className="flex w-full items-center justify-between gap-2">
                        {data.map((partner) => (
                            <div key={partner.id} className="flex min-w-0 flex-1 items-center justify-center ">
                                {renderPartner(partner)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Below 1440px: full-width continuous marquee (outside the container), fewer logos in view as
                width shrinks. 1280-1439px shows 5 larger logos - a single row of all 8 is too small there.
                The list is rendered twice and the track slides by -50%, so the loop is seamless. */}
            <div className="block w-full overflow-hidden min-[1440px]:hidden" aria-label="Our Partners">
                <div className="marquee-track-left flex w-max">
                    {[0, 1].map((copy) =>
                        data.map((partner) => (
                            <div
                                key={`${copy}-${partner.id}`}
                                aria-hidden={copy === 1 || undefined}
                                className="flex h-[90px] w-[50vw] shrink-0 items-center justify-center px-1 min-[480px]:w-[33.333vw] sm:w-[25vw] md:w-[20vw] lg:w-[16.666vw] xl:h-[110px] xl:w-[20vw]"
                            >
                                {renderPartner(partner)}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
