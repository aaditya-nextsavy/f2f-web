import Image from "next/image";
import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import type { ActionButtonData } from "@/types/home";

interface BannerType2Props {
    label?: string;
    title: ReactNode;
    description?: string;
    bannerImage?: string;
    bannerImageAlt?: string;
    action?: ActionButtonData;
}

const BannerType2 = ({
    label,
    title,
    description,
    bannerImage,
    bannerImageAlt,
    action,
}: BannerType2Props) => {
    const hasImage = Boolean(bannerImage);
    const hasDescription = Boolean(description);

    return (
        <section className={`${hasImage ? "pt-[110px] xl:pt-[170px] 2xl:min-h-[500px]" : `pt-[110px] xl:pt-[170px] ${!hasDescription ? "h-max" : "min-h-[100px]"} `} relative overflow-hidden bg-(--color-primary) `}>
            <div className="pointer-events-none absolute inset-0 h-full w-full">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 1914 762"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <g opacity="0.05">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1873.04 1.58569e-06L1914 0L1914 350.549C1914 376.641 1914.49 371.326 1893.27 392.585C1874.52 410.946 1876.99 416.744 1876.99 451.532L1876.99 762H1835.04L1835.04 456.846C1835.53 411.429 1873.04 437.037 1873.04 342.336V1.58569e-06Z" fill="url(#paint0_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1771.09 1.58569e-06L1812.05 0L1812.05 350.549C1812.05 376.641 1812.55 371.326 1791.33 392.585C1772.57 410.946 1775.04 416.744 1775.04 451.532L1775.04 762H1733.09L1733.09 456.846C1733.59 411.429 1771.09 437.037 1771.09 342.336L1771.09 1.58569e-06Z" fill="url(#paint1_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1669.15 1.58569e-06L1710.11 0V350.549C1710.11 376.641 1710.6 371.326 1689.38 392.585C1670.63 410.946 1673.09 416.744 1673.09 451.532V762H1631.15L1631.15 456.846C1631.64 411.429 1669.15 437.037 1669.15 342.336L1669.15 1.58569e-06Z" fill="url(#paint2_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1567.2 1.58569e-06L1608.16 0V350.549C1608.16 376.641 1608.65 371.326 1587.43 392.585C1568.68 410.946 1571.15 416.744 1571.15 451.532L1571.15 762H1529.2L1529.2 456.846C1529.69 411.429 1567.2 437.037 1567.2 342.336V1.58569e-06Z" fill="url(#paint3_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1465.25 1.58569e-06L1506.21 0V350.549C1506.21 376.641 1506.71 371.326 1485.49 392.585C1466.73 410.946 1469.2 416.744 1469.2 451.532V762H1427.25L1427.25 456.846C1427.75 411.429 1465.25 437.037 1465.25 342.336L1465.25 1.58569e-06Z" fill="url(#paint4_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1363.31 1.58569e-06L1404.27 0V350.549C1404.27 376.641 1404.76 371.326 1383.54 392.585C1364.79 410.946 1367.25 416.744 1367.25 451.532V762H1325.31L1325.31 456.846C1325.8 411.429 1363.31 437.037 1363.31 342.336V1.58569e-06Z" fill="url(#paint5_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1261.36 1.58569e-06L1302.32 0V350.549C1302.32 376.641 1302.81 371.326 1281.59 392.585C1262.84 410.946 1265.31 416.744 1265.31 451.532V762H1223.36L1223.36 456.846C1223.85 411.429 1261.36 437.037 1261.36 342.336L1261.36 1.58569e-06Z" fill="url(#paint6_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1159.41 1.58569e-06L1200.37 0V350.549C1200.37 376.641 1200.87 371.326 1179.65 392.585C1160.89 410.946 1163.36 416.744 1163.36 451.532V762H1121.41V456.846C1121.91 411.429 1159.41 437.037 1159.41 342.336V1.58569e-06Z" fill="url(#paint7_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1057.47 3.28465e-06L1098.42 1.58569e-06V350.549C1098.42 376.641 1098.92 371.326 1077.7 392.585C1058.95 410.946 1061.41 416.744 1061.41 451.532V762H1019.47L1019.47 456.846C1019.96 411.429 1057.47 437.037 1057.47 342.336L1057.47 3.28465e-06Z" fill="url(#paint8_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M955.519 3.28465e-06L996.478 1.58569e-06V350.549C996.478 376.641 996.972 371.326 975.752 392.585C956.999 410.946 959.467 416.744 959.467 451.532V762H917.521V456.846C918.014 411.429 955.519 437.037 955.519 342.336V3.28465e-06Z" fill="url(#paint9_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M853.572 3.28465e-06L894.532 1.58569e-06V350.549C894.532 376.641 895.025 371.326 873.805 392.585C855.053 410.946 857.52 416.744 857.52 451.532V762H815.574V456.846C816.067 411.429 853.572 437.037 853.572 342.336V3.28465e-06Z" fill="url(#paint10_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M751.625 3.28465e-06L792.585 1.58569e-06V350.549C792.585 376.641 793.078 371.326 771.858 392.585C753.106 410.946 755.573 416.744 755.573 451.532V762H713.627V456.846C714.121 411.429 751.625 437.037 751.625 342.336V3.28465e-06Z" fill="url(#paint11_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M649.679 3.28465e-06L690.638 1.58569e-06V350.549C690.638 376.641 691.131 371.326 669.912 392.585C651.159 410.946 653.627 416.744 653.627 451.532V762H611.68V456.846C612.174 411.429 649.679 437.037 649.679 342.336V3.28465e-06Z" fill="url(#paint12_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M547.732 3.28465e-06L588.691 1.58569e-06V350.549C588.691 376.641 589.185 371.326 567.965 392.585C549.213 410.946 551.68 416.744 551.68 451.532V762H509.734V456.846C510.227 411.429 547.732 437.037 547.732 342.336V3.28465e-06Z" fill="url(#paint13_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M445.785 3.28465e-06L486.745 1.58569e-06V350.549C486.745 376.641 487.238 371.326 466.018 392.585C447.266 410.946 449.733 416.744 449.733 451.532V762H407.787V456.846C408.281 411.429 445.785 437.037 445.785 342.336V3.28465e-06Z" fill="url(#paint14_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M343.839 3.28465e-06L384.798 1.58569e-06V350.549C384.798 376.641 385.291 371.326 364.071 392.585C345.319 410.946 347.786 416.744 347.786 451.532V762H305.84V456.846C306.334 411.429 343.839 437.037 343.839 342.336V3.28465e-06Z" fill="url(#paint15_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M241.892 3.28465e-06L282.851 1.58569e-06V350.549C282.851 376.641 283.345 371.326 262.125 392.585C243.372 410.946 245.84 416.744 245.84 451.532V762H203.893V456.846C204.387 411.429 241.892 437.037 241.892 342.336V3.28465e-06Z" fill="url(#paint16_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M139.945 3.28465e-06L180.905 1.58569e-06V350.549C180.905 376.641 181.398 371.326 160.178 392.585C141.426 410.946 143.893 416.744 143.893 451.532V762H101.947V456.846C102.44 411.429 139.945 437.037 139.945 342.336V3.28465e-06Z" fill="url(#paint17_linear_199_4632)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.9987 3.28465e-06L78.9579 1.58569e-06V350.549C78.9579 376.641 79.4512 371.326 58.2313 392.585C39.4789 410.946 41.9465 416.744 41.9465 451.532V762H0V456.846C0.49353 411.429 37.9987 437.037 37.9987 342.336V3.28465e-06Z" fill="url(#paint18_linear_199_4632)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint12_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint13_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint14_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint15_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint16_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint17_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint18_linear_199_4632" x1="0.14098" y1="306.598" x2="1913.77" y2="306.598" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            <div
                className={`container relative flex pb-[50px] lg:pb-0 flex-col  ${hasImage ? "lg:flex-row lg:items-stretch lg:gap-[40px] 2xl:gap-[90px] " : ""
                    }`}
            >
                {hasImage && (
                    <div className="relative flex-1">
                        <div className="relative h-full overflow-hidden rounded-t-[25px]
                        
                        ">
                            <Image
                                src={bannerImage as string}
                                alt={bannerImageAlt || ""}
                                fill
                                className="object-cover"
                                priority
                            //  aspect-[665/580]
                            />
                        </div>
                    </div>
                )}

                <div
                    className={`flex flex-col justify-between   ${hasImage ? "lg:w-[60%] lg:pb-16 min-h-[220px] lg:min-h-[280px]" : "w-full"
                        } ${!hasDescription ? " h-max pb-[87px]" : "justify-end lg:pb-16 min-h-[220px] lg:min-h-[280px]"}`}
                >
                    <div>
                        {label && (
                            <span className="text-[14px] leading-[32px] tracking-[-0.8px] font-medium uppercase tracking-[1.5px] text-white/60">
                                {label}
                            </span>
                        )}

                        <h1
                            className={`text-[42px] leading-[46px] tracking-[-1px] text-white lg:text-[54px] md:text-[58px] md:leading-[64px]   ${label ? "mt-1" : ""
                                } ${hasImage ? "max-w-[900px]" : "max-w-[100%] "}`}
                        >
                            {title}
                        </h1>
                    </div>

                    {hasDescription && (
                        <div
                            className={`
            ${hasImage
                                    ? action
                                        ? "mt-[28px] lg:mt-[42px] 2xl:mt-[92px]"
                                        : "mt-[28px] lg:mt-[42px] 2xl:mt-[92px]"
                                    : action
                                        ? "mt-[28px] lg:mt-[42px] 2xl:mt-[92px]"
                                        : "mt-[28px] lg:mt-[42px] mb-[8px] lg:mb-[0px]"
                                }
            pt-6
            text-[18px]
            leading-[28px]
            tracking-[-0.3px]
            text-white
            border-t
            border-white/20
        `}
                        >
                            <p className="max-w-[100%] 2xl:max-w-[70%]">
                                {description}
                            </p>
                        </div>
                    )}

                    {action && (
                        <div className={` ${hasDescription ? "mt-8" : "mt-10"}`}>
                            <Button className="w-full lg:w-max" href={action.href} variant={action.variant}>
                                {action.label}
                                {action.variant === "yellow" && <FaArrowRight size={15} />}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BannerType2;
