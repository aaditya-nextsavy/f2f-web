import Image from "next/image";
import type { ServicesListData } from "@/types/services";
import SectionTitle from "../common/SectionTitle/SectionTitle";

type ServicesListProps = {
    data: ServicesListData;
};

export default function ServicesList({ data }: ServicesListProps) {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row  gap-6 lg:items-stretch lg:gap-[80px] xl:gap-[120px]">
                    <div className="flex flex-col justify-between lg:w-1/2 lg:max-w-[612px] relative">

                        <div className="sticky top-[120px]">
                            <SectionTitle
                                label={data.sectiontitle.label}
                                title={data.sectiontitle.title}

                            />

                            <div className="hidden lg:block relative mt-8 aspect-[608/550] sm:aspect-[758/350] 2xl:aspect-[608/550] h-[45   vh] 2xl:h-[55vh] w-auto overflow-hidden rounded-[12px] xl:rounded-[24px] bg-(--light-indigo-bg) lg:mt-10   ">
                                <Image
                                    src={data.image}
                                    alt="Services"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1023px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col justify-start flex-1 lg:mt-[52px]">
                        {data.services.map((service) => (
                            <div
                                key={service.id}
                                className="flex flex-col items-start gap-4 border-b border-dashed border-(--form-placeholder) py-6 first:pt-0 last:border-b-0 last:pb-0 lg:gap-5 lg:py-7"
                            >
                                <div className="flex flex-row justify-start gap-3 items-center">
                                    <div className="relative  mt-1 h-[32px] lg:w-[49px] lg:h-12 lg:w-12 shrink-0 lg:h-12 lg:w-12">
                                        <svg className="w-[32px] h-[32px] lg:w-[49px] lg:h-[49px] " viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="25" cy="24" r="18" fill="#8C9BF0" />
                                            <path d="M22.2885 27.775L30.7635 19.3C30.9635 19.1 31.1968 19 31.4635 19C31.7301 19 31.9635 19.1 32.1635 19.3C32.3635 19.5 32.4635 19.7377 32.4635 20.013C32.4635 20.2883 32.3635 20.5257 32.1635 20.725L22.9885 29.925C22.7885 30.125 22.5551 30.225 22.2885 30.225C22.0218 30.225 21.7885 30.125 21.5885 29.925L17.2885 25.625C17.0885 25.425 16.9925 25.1877 17.0005 24.913C17.0085 24.6383 17.1128 24.4007 17.3135 24.2C17.5141 23.9993 17.7518 23.8993 18.0265 23.9C18.3011 23.9007 18.5385 24.0007 18.7385 24.2L22.2885 27.775Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[18px] leading-[24px] 2xl:leading-[30px] text-(--color-primary)/65 lg:text-[20px]">
                                            {service.descp}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
