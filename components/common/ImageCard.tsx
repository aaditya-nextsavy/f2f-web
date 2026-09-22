import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import type { LinkData } from "@/types/home";

interface ImageCardProps {
    title: ReactNode;
    description: string;
    image: string;
    variant?: string;
    link?: LinkData;
    /** Plain-text alternative for the image when `title` isn't a plain string. */
    alt?: string;
}

const ImageCard = ({
    title,
    description,
    image,
    link,
    alt,
}: ImageCardProps) => {
    const imageAlt = alt ?? (typeof title === "string" ? title : "Service");

    return (
        <Link
            href={link?.href || "#"}
            className="
                group
                block
                max-w-[828px]
            "
        >
            <article
                className="
                    relative
                    h-max-content
                    max-h-stretch
                    2xl:max-h-[400px]
                    overflow-visible
                    rounded-[10px]
                    mt-[90px]
                    bg-(--color-primary)
                    lg:bg-[#F3F5FC]
                    pt-[80px]
                    lg:pt-[120px]
                    2xl:pt-[180px]
                    transition-colors
                    duration-300
                    ease-in-out
                    group-hover:bg-(--color-primary)
                "
            >
                {/* Decorative SVG */}
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

                {/* Image */}
                <div
                    className="
                        absolute
                        left-1/2
                        -top-[71px]
                        z-10
                        w-[72%]
                        -translate-x-1/2
                        md:w-[65%]
                        lg:w-[60%]
                        max-w-[305px]
                        aspect-(455/228)
                        2xl:max-w-[455px]
                        2xl:max-h-[228px]
                    "
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={450}
                        height={300}
                        className="
                            h-auto
                            w-full
                            object-contain
                            scale-[0.9]
                            transition-transform
                            duration-300
                            ease-in-out
                            group-hover:scale-100
                        "
                    />
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-8 sm:px-6 sm:pb-6 lg:px-9.5 lg:pb-9.5">
                    <h3
                        className="
                            text-[28px]
                            font-medium
                            leading-[32px]
                            text-(--color-iceblue)
                            lg:text-(--color-primary)
                            transition-colors
                            duration-300
                            ease-in-out
                            group-hover:text-(--color-iceblue)
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                            mt-3
                            text-[16px]
                            leading-[1.55]
                            text-(--color-iceblue)
                            lg:text-(--color-primary)
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
                                mt-5
                                inline-flex
                                items-center
                                gap-1
                                text-[16px]
                                leading-[24px]
                               text-(--color-iceblue)
                            lg:text-(--color-primary)
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
                                <FaArrowRightLong size={15} />

                            </span>
                        </div>
                    )}
                </div>
            </article>
        </Link>
    );
};

export default ImageCard;
