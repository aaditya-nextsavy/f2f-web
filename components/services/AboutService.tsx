import Image from "next/image";
import type { AboutServiceData } from "@/types/services";
import SectionTitle from "../common/SectionTitle/SectionTitle";

type AboutServiceProps = {
    data: AboutServiceData;
};

export default function AboutService({ data }: AboutServiceProps) {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 xl:gap-[100px]">
                    <div className="flex flex-col lg:flex-1">
                        <SectionTitle
                            label={data.sectiontitle.label}
                            title={data.sectiontitle.title}
                            titleClassName="text-[24px] leading-[30px]  lg:text-[64px]! lg:leading-[78px] lg:mt-3! max-w-[706px]"


                        />

                        <p className="mt-6  text-[16px] leading-[26px] text-(--color-primary) lg:text-[18px] lg:leading-[28px]">
                            {data.description}
                        </p>
                    </div>

                    <div className="relative w-full h-auto overflow-hidden rounded-[24px] aspect-[16/10] lg:aspect-[710/564] lg:h-auto lg:w-[50%] lg:max-w-[710px] lg:shrink-0">
                        <Image
                            src={data.image.src}
                            alt={data.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1023px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
