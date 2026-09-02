import Image from "next/image";
import type { CountryFlagItem, GlobalHubData } from "@/types/services";
import SectionTitle from "../common/SectionTitle/SectionTitle";

type GlobalHubProps = {
    data: GlobalHubData;
};

function FlagBadge({ country }: { country: CountryFlagItem }) {
    return (
        <div className="relative mt-6 shrink-0 first:mt-0 rotate-[-90deg] lg:rotate-0">
            <span className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white text-(--color-primary) px-2.5 py-1 text-[12px] font-extrabold uppercase tracking-wide italic shadow-[0_2px_6px_rgba(0,0,0,0.35)] leading-4 ring-1 ring-white">
                {country.name}
            </span>
            <div className="h-[80px] w-[80px] overflow-hidden rounded-full ring-4 ring-white shadow-lg lg:h-[90px] lg:w-[90px] aspect-square">
                <Image
                    src={`https://flagcdn.com/w160/${country.code}.png`}
                    alt={`${country.name} flag`}
                    width={106}
                    height={106}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

function FlagColumn({
    countries,
    direction,
    className = "",
}: {
    countries: CountryFlagItem[];
    direction: "up" | "down";
    className?: string;
}) {
    const looped = [...countries, ...countries];

    return (
        <div className={`h-full w-[80px] shrink-0  lg:w-[110px] ${className}`}>
            <div
                className={`flex flex-col  gap-6 pt-6 ${direction === "down" ? "marquee-track-down" : "marquee-track-up"
                    }`}
            >
                {looped.map((country, index) => (
                    <FlagBadge key={`${country.id}-${index}`} country={country} />
                ))}
            </div>
        </div>
    );
}

export default function GlobalHub({ data }: GlobalHubProps) {
    const reversedCountries = [...data.countries].reverse();

    return (
        <section className="relative overflow-hidden bg-(--color-primary) py-[42px] lg:py-0">


            <div className="absolute inset-x-0">
                <svg width="1914" height="748" viewBox="0 0 1914 748" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.05">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1873.04 -121L1914 -121L1914 333.978C1914 367.842 1914.49 360.944 1893.27 388.536C1874.52 412.366 1876.99 419.892 1876.99 465.043L1876.99 868H1835.04L1835.04 471.941C1835.53 412.993 1873.04 446.23 1873.04 323.318V-121Z" fill="url(#paint0_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1771.09 -121L1812.05 -121L1812.05 333.978C1812.05 367.842 1812.55 360.944 1791.33 388.536C1772.57 412.366 1775.04 419.892 1775.04 465.043L1775.04 868H1733.09L1733.09 471.941C1733.59 412.993 1771.09 446.23 1771.09 323.318L1771.09 -121Z" fill="url(#paint1_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1669.15 -121L1710.11 -121V333.978C1710.11 367.842 1710.6 360.944 1689.38 388.536C1670.63 412.366 1673.09 419.892 1673.09 465.043V868H1631.15L1631.15 471.941C1631.64 412.993 1669.15 446.23 1669.15 323.318L1669.15 -121Z" fill="url(#paint2_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1567.2 -121L1608.16 -121V333.978C1608.16 367.842 1608.65 360.944 1587.43 388.536C1568.68 412.366 1571.15 419.892 1571.15 465.043L1571.15 868H1529.2L1529.2 471.941C1529.69 412.993 1567.2 446.23 1567.2 323.318V-121Z" fill="url(#paint3_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1465.25 -121L1506.21 -121V333.978C1506.21 367.842 1506.71 360.944 1485.49 388.536C1466.73 412.366 1469.2 419.892 1469.2 465.043V868H1427.25L1427.25 471.941C1427.75 412.993 1465.25 446.23 1465.25 323.318L1465.25 -121Z" fill="url(#paint4_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1363.31 -121L1404.27 -121V333.978C1404.27 367.842 1404.76 360.944 1383.54 388.536C1364.79 412.366 1367.25 419.892 1367.25 465.043V868H1325.31L1325.31 471.941C1325.8 412.993 1363.31 446.23 1363.31 323.318V-121Z" fill="url(#paint5_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1261.36 -121L1302.32 -121V333.978C1302.32 367.842 1302.81 360.944 1281.59 388.536C1262.84 412.366 1265.31 419.892 1265.31 465.043V868H1223.36L1223.36 471.941C1223.85 412.993 1261.36 446.23 1261.36 323.318L1261.36 -121Z" fill="url(#paint6_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1159.41 -121L1200.37 -121V333.978C1200.37 367.842 1200.87 360.944 1179.65 388.536C1160.89 412.366 1163.36 419.892 1163.36 465.043V868H1121.41V471.941C1121.91 412.993 1159.41 446.23 1159.41 323.318V-121Z" fill="url(#paint7_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1057.47 -121L1098.42 -121V333.978C1098.42 367.842 1098.92 360.944 1077.7 388.536C1058.95 412.366 1061.41 419.892 1061.41 465.043V868H1019.47L1019.47 471.941C1019.96 412.993 1057.47 446.23 1057.47 323.318L1057.47 -121Z" fill="url(#paint8_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M955.519 -121L996.478 -121V333.978C996.478 367.842 996.972 360.944 975.752 388.536C956.999 412.366 959.467 419.892 959.467 465.043V868H917.521V471.941C918.014 412.993 955.519 446.23 955.519 323.318V-121Z" fill="url(#paint9_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M853.572 -121L894.532 -121V333.978C894.532 367.842 895.025 360.944 873.805 388.536C855.053 412.366 857.52 419.892 857.52 465.043V868H815.574V471.941C816.067 412.993 853.572 446.23 853.572 323.318V-121Z" fill="url(#paint10_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M751.625 -121L792.585 -121V333.978C792.585 367.842 793.078 360.944 771.858 388.536C753.106 412.366 755.573 419.892 755.573 465.043V868H713.627V471.941C714.121 412.993 751.625 446.23 751.625 323.318V-121Z" fill="url(#paint11_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M649.679 -121L690.638 -121V333.978C690.638 367.842 691.131 360.944 669.912 388.536C651.159 412.366 653.627 419.892 653.627 465.043V868H611.68V471.941C612.174 412.993 649.679 446.23 649.679 323.318V-121Z" fill="url(#paint12_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M547.732 -121L588.691 -121V333.978C588.691 367.842 589.185 360.944 567.965 388.536C549.213 412.366 551.68 419.892 551.68 465.043V868H509.734V471.941C510.227 412.993 547.732 446.23 547.732 323.318V-121Z" fill="url(#paint13_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M445.785 -121L486.745 -121V333.978C486.745 367.842 487.238 360.944 466.018 388.536C447.266 412.366 449.733 419.892 449.733 465.043V868H407.787V471.941C408.281 412.993 445.785 446.23 445.785 323.318V-121Z" fill="url(#paint14_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M343.839 -121L384.798 -121V333.978C384.798 367.842 385.291 360.944 364.071 388.536C345.319 412.366 347.786 419.892 347.786 465.043V868H305.84V471.941C306.334 412.993 343.839 446.23 343.839 323.318V-121Z" fill="url(#paint15_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M241.892 -121L282.851 -121V333.978C282.851 367.842 283.345 360.944 262.125 388.536C243.372 412.366 245.84 419.892 245.84 465.043V868H203.893V471.941C204.387 412.993 241.892 446.23 241.892 323.318V-121Z" fill="url(#paint16_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M139.945 -121L180.905 -121V333.978C180.905 367.842 181.398 360.944 160.178 388.536C141.426 412.366 143.893 419.892 143.893 465.043V868H101.947V471.941C102.44 412.993 139.945 446.23 139.945 323.318V-121Z" fill="url(#paint17_linear_260_7250)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.9987 -121L78.9579 -121V333.978C78.9579 367.842 79.4512 360.944 58.2313 388.536C39.4789 412.366 41.9465 419.892 41.9465 465.043V868H0V471.941C0.49353 412.993 37.9987 446.23 37.9987 323.318V-121Z" fill="url(#paint18_linear_260_7250)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint12_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint13_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint14_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint15_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint16_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint17_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint18_linear_260_7250" x1="0.14098" y1="276.933" x2="1913.77" y2="276.933" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>



            <div className="container relative z-[2] mx-auto">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 ">
                    <div className="lg:w-[55%]">
                        <SectionTitle
                            label={data.sectiontitle.label}
                            title={data.sectiontitle.title}
                            theme="inverted"
                            titleClassName="lg:text-[48px] "
                            className="text-(--color-iceblue)!"
                        />

                        <p className="mt-6 max-w-[650px] text-[16px] leading-[26px] text-(--color-iceblue) lg:text-[18px] lg:leading-[28px]">
                            {data.description}
                        </p>

                        <div className="mt-10 flex flex-col lg:flex-row lg:ms-[50px] items-center gap-8 lg:gap-12  max-w-[650px]">
                            {data.stats.map((stat, index) => (
                                <div key={stat.id} className={`relative w-full lg:w-fit ${index > 0 ? "pl-0 pt-5 lg:pt-0 lg:pl-12 border-t border-white/8 lg:border-none" : ""}`}>
                                    {index > 0 && (
                                        <div className="hidden lg:block absolute left-0 top-1/2 h-[100%] w-px -translate-y-1/2 bg-white/8" />
                                    )}
                                    <div className=" lg:text-center text-[60px] lg:text-[72px] font-extrabold leading-none text-(--color-iceblue) lg:text-[72px] lg:leading-[72px]">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 lg:text-center lg:max-w-[170px] text-[14px] text-(--color-iceblue) lg:text-[16px]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[320px] w-full lg:h-[700px] lg:w-[42%]">
                        <div className="flex h-full justify-center gap-[50px] lg:gap-[62px] lg:justify-start lg:ps-[8%] transform rotate-90 lg:rotate-0">
                            <FlagColumn countries={data.countries} direction="down" />
                            <FlagColumn countries={reversedCountries} direction="up" className="mt-[-56px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block pointer-events-none absolute top-1/2 right-0 z-[1] aspect-square w-[300px] -translate-y-1/2 translate-x-[50%] sm:w-[420px] lg:w-[760px]">
                <Image
                    src="/images/home/statastics/earth.svg"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-contain"
                />
            </div>
        </section>
    );
}
