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

                {link?.label && (
                    <div
                        className="
                            mt-4
                            inline-flex
                            items-center
                            gap-1
                            text-[14px]
                            leading-[24px]
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
