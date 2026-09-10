import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import type { LinkData } from "@/types/home";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    link?: LinkData;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
    return (
        <Link href={link?.href || "#"} className="group block h-full">
            <article
                className="
                    relative
                    flex
                    h-full
                    flex-col
                    justify-between
                    overflow-visible
                    rounded-[16px]
                    bg-[#F3F5FC]
                    p-6
                    pt-[104px]
                    transition-colors
                    duration-300
                    ease-in-out
                    group-hover:bg-(--color-primary)
                "
            >
                <div className="absolute -top-10 left-1/2 w-[60%] max-w-[240px] -translate-x-1/2">
                    <Image
                        src={image}
                        alt={title}
                        width={240}
                        height={140}
                        className="h-auto w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                </div>


                <div className="absolute left-0 top-[30px] w-full overflow-hidden max-w-[100%] ">
                    <svg
                        width="828"
                        height="161"
                        viewBox="0 0 828 161"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.12">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 41.7511L0 86.7555L95.7418 86.7555C121.29 86.7555 116.086 87.2976 136.903 63.9821C154.881 43.3777 160.559 46.0889 194.623 46.0889L828 46.0889V0L199.827 0C155.354 0.542222 180.429 41.7511 87.699 41.7511L0 41.7511Z"
                                fill="#C0CAFD"
                            />

                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 115.995L0 161H95.7734C121.322 161 116.117 161.542 136.934 138.226C154.913 117.622 160.59 120.333 194.654 120.333L827.844 120.333V74.2441L199.859 74.2441C155.386 74.7864 180.461 115.995 87.7306 115.995L0 115.995Z"
                                fill="#C0CAFD"
                            />
                        </g>
                    </svg>
                </div>

                <div>
                    <h3
                        className="
                        mt-4
                        text-[28px]
                        font-medium
                        leading-[32px]
                        text-(--color-primary)
                        transition-colors
                        duration-300
                        tracking-[-0.8px]
                        ease-in-out
                        group-hover:text-(--color-iceblue)
                    "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                        mt-2
                        text-[16px]
                        leading-[24px]
                        text-(--color-primary)/70
                        transition-colors
                        duration-300
                        ease-in-out
                        group-hover:text-white/75
                    "
                    >
                        {description}
                    </p>
                </div>



                {link?.label && (
                    <div
                        className="
                            mt-4
                            inline-flex
                            items-center
                            gap-1
                            text-[18px]
                            leading-[16px]
                            text-(--color-primary)
                            underline-offset-2
                            transition-colors
                            duration-300
                            ease-in-out
                            group-hover:text-(--color-white)
                            group-hover:underline
                        "
                    >
                        {link.label}

                        <span className="ms-1" aria-hidden="true">
                            <FaArrowRightLong size={13} />
                        </span>
                    </div>
                )}
            </article>
        </Link>
    );
};

export default ServiceCard;
