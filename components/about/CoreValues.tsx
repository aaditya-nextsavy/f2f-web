import Image from "next/image";
import type { CoreValuesData } from "@/types/about";
import SectionTitle from "../common/SectionTitle/SectionTitle";

type CoreValuesProps = {
    data: CoreValuesData;
};

export default function CoreValues({ data }: CoreValuesProps) {
    return (
        <section >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row  gap-10 lg:items-stretch lg:gap-[80px] xl:gap-[120px]">
                    <div className="flex flex-col justify-between lg:w-1/2 lg:max-w-[612px]">
                        <SectionTitle
                            label={data.sectiontitle.label}
                            title={data.sectiontitle.title}

                        />

                        <div className="hidden lg:block relative mt-8 aspect-[612/514] w-full overflow-hidden rounded-[24px] bg-(--light-indigo-bg) lg:mt-10   ">
                            <Image
                                src={data.image}
                                alt="Core values"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1023px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center flex-1 lg:mt-[52px]">
                        {data.values.map((value) => (
                            <div
                                key={value.id}
                                className="flex flex-col items-start gap-4 border-b border-dashed border-(--form-placeholder) py-6 first:pt-0 last:border-b-0 last:pb-0 lg:gap-5 lg:py-7"
                            >
                                <div className="flex flex-col lg:flex-row justify-start gap-4 items-center">
                                    <div className="relative  mt-1 h-12 w-12 shrink-0 lg:h-12 lg:w-12 mr-auto lg:mr-[unset]">
                                        <Image
                                            src={value.icon}
                                            alt=""
                                            fill
                                            className="object-contain"
                                            sizes="48px"
                                        />

                                    </div>
                                    <h3 className=" font-semibold text-(--color-primary) text-[24px] leading-6">
                                        {value.title}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-[16px] leading-[28px] text-(--color-primary)/65 lg:text-[18px] lg:ps-[18px] lg:pe-[15%]">
                                        {value.descp}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
