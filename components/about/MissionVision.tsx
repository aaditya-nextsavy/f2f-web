import Image from "next/image";
import type { MissionVisionData } from "@/types/about";
import SectionTitle from "../common/SectionTitle/SectionTitle";

type MissionVisionProps = {
    data: MissionVisionData;
};

export default function MissionVision({ data }: MissionVisionProps) {
    return (
        <section className="py-16 sm:py-20 lg:pt-[80px] lg:pb-[104px] bg-(--light-indigo-bg) relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 ">
                <svg width="1920" height="719" viewBox="0 0 1920 719" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.05">
                        <path d="M2052 225V421.029H1155.05C989.706 421.029 962.147 409.498 874.881 497.134C773.836 596.302 799.097 593.995 675.087 593.995H-229V402.579H636.047C1086.16 402.579 964.444 227.306 1180.31 225H2052Z" fill="#11227A" />
                        <path d="M2012 0V196.029H1155.05C989.706 196.029 962.147 184.498 874.881 272.134C773.836 371.302 799.097 368.995 675.087 368.995H-229V177.579H636.047C1086.16 177.579 964.444 2.30622 1180.31 0H2012Z" fill="#11227A" />
                    </g>
                </svg>

            </div>
            <div className="container mx-auto">
                <div className="relative overflow-hidden  ">


                    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-[100px]">
                        <div className="flex flex-col lg:flex-1">
                            <SectionTitle
                                label={data.sectionTitle.label}
                                title={data.sectionTitle.title}
                                titleClassName="text-[28px] lg:text-[56px]! mt-0!"
                            />

                            <div className="px-6 lg:mb-[60px]">
                                <p className="mt-[30px] lg:mt-[60px] max-w-[455px] text-[16px] leading-[24px] text-(--color-primary)/75 [&_strong]:font-semibold [&_strong]:text-(--color-primary) lg:text-[16px]">
                                    {data.body}
                                </p>

                                <h3 className=" text-[18px] font-semibold text-(--color-primary) mt-[30px] lg:mt-[90px] lg:text-[28px] lg:leading-[32px]">
                                    {data.visionTitle}
                                </h3>

                                <p className="mt-3 max-w-[455px] text-[16px] leading-[24px] text-(--color-primary)/75 [&_strong]:font-semibold [&_strong]:text-(--color-primary) lg:text-[16px]">
                                    {data.visionBody}
                                </p>
                            </div>


                        </div>

                        <div className="relative w-full h-[300px] lg:h-auto overflow-hidden rounded-[24px] bg-(--color-white) sm:aspect-[16/10]  lg:aspect-[788/668] lg:h-auto lg:w-1/2 lg:shrink-0 ">
                            <Image
                                src={data.image.src}
                                alt={data.image.alt}
                                fill
                                className="object-cover   "
                                sizes="(max-width: 1023px) 100vw, 460px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
