import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import type { Cta2Data } from "@/types/services";

type CTA2Props = Cta2Data;

const CTA2 = ({ title, description, actions, image }: CTA2Props) => {
    return (
        <section className="bg-(--color-primary) relative overflow-hidden">

            <div className=" absolute inset-x-0 ms-auto pointer-events-none h-full w-full">
                <svg className="h-full w-full" viewBox="0 0 1497 658" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <g opacity="0.05">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1464.96 -0.999999L1497 -1L1497 302.165C1497 324.73 1497.39 320.133 1480.79 338.519C1466.12 354.398 1468.05 359.412 1468.05 389.498L1468.05 658H1435.24L1435.24 394.094C1435.63 354.816 1464.96 376.962 1464.96 295.062V-0.999999Z" fill="url(#paint0_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1385.23 -0.999999L1417.26 -1L1417.26 302.165C1417.26 324.73 1417.65 320.133 1401.05 338.519C1386.39 354.398 1388.32 359.412 1388.32 389.498L1388.32 658H1355.51L1355.51 394.094C1355.89 354.816 1385.23 376.962 1385.23 295.062L1385.23 -0.999999Z" fill="url(#paint1_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1305.49 -0.999999L1337.53 -1V302.165C1337.53 324.73 1337.91 320.133 1321.32 338.519C1306.65 354.398 1308.58 359.412 1308.58 389.498V658H1275.77L1275.77 394.094C1276.16 354.816 1305.49 376.962 1305.49 295.062L1305.49 -0.999999Z" fill="url(#paint2_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1225.76 -0.999999L1257.79 -1V302.165C1257.79 324.73 1258.18 320.133 1241.58 338.519C1226.91 354.398 1228.84 359.412 1228.84 389.498L1228.84 658H1196.04L1196.04 394.094C1196.42 354.816 1225.76 376.962 1225.76 295.062V-0.999999Z" fill="url(#paint3_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1146.02 -0.999999L1178.06 -1V302.165C1178.06 324.73 1178.44 320.133 1161.85 338.519C1147.18 354.398 1149.11 359.412 1149.11 389.498V658H1116.3L1116.3 394.094C1116.69 354.816 1146.02 376.962 1146.02 295.062L1146.02 -0.999999Z" fill="url(#paint4_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1066.28 -0.999999L1098.32 -1V302.165C1098.32 324.73 1098.71 320.133 1082.11 338.519C1067.44 354.398 1069.37 359.412 1069.37 389.498V658H1036.57L1036.56 394.094C1036.95 354.816 1066.28 376.962 1066.28 295.062V-0.999999Z" fill="url(#paint5_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M986.549 -0.999999L1018.58 -1V302.165C1018.58 324.73 1018.97 320.133 1002.37 338.519C987.707 354.398 989.637 359.412 989.637 389.498V658H956.829V394.094C957.215 354.816 986.549 376.962 986.549 295.062L986.549 -0.999999Z" fill="url(#paint6_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M906.813 -0.999999L938.849 -1V302.165C938.849 324.73 939.235 320.133 922.638 338.519C907.971 354.398 909.901 359.412 909.901 389.498V658H877.093V394.094C877.479 354.816 906.813 376.962 906.813 295.062V-0.999999Z" fill="url(#paint7_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M827.077 -0.999997L859.113 -0.999999V302.165C859.113 324.73 859.499 320.133 842.902 338.519C828.235 354.398 830.165 359.412 830.165 389.498V658H797.358L797.357 394.094C797.743 354.816 827.077 376.962 827.077 295.062L827.077 -0.999997Z" fill="url(#paint8_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M747.342 -0.999997L779.377 -0.999999V302.165C779.377 324.73 779.763 320.133 763.166 338.519C748.499 354.398 750.429 359.412 750.429 389.498V658H717.622V394.094C718.008 354.816 747.342 376.962 747.342 295.062V-0.999997Z" fill="url(#paint9_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M667.606 -0.999997L699.641 -0.999999V302.165C699.641 324.73 700.027 320.133 683.431 338.519C668.764 354.398 670.694 359.412 670.694 389.498V658H637.886V394.094C638.272 354.816 667.606 376.962 667.606 295.062V-0.999997Z" fill="url(#paint10_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M587.87 -0.999997L619.906 -0.999999V302.165C619.906 324.73 620.292 320.133 603.695 338.519C589.028 354.398 590.958 359.412 590.958 389.498V658H558.15V394.094C558.536 354.816 587.87 376.962 587.87 295.062V-0.999997Z" fill="url(#paint11_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M508.134 -0.999997L540.17 -0.999999V302.165C540.17 324.73 540.556 320.133 523.959 338.519C509.292 354.398 511.222 359.412 511.222 389.498V658H478.415V394.094C478.801 354.816 508.134 376.962 508.134 295.062V-0.999997Z" fill="url(#paint12_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M428.399 -0.999997L460.434 -0.999999V302.165C460.434 324.73 460.82 320.133 444.223 338.519C429.557 354.398 431.486 359.412 431.486 389.498V658H398.679V394.094C399.065 354.816 428.399 376.962 428.399 295.062V-0.999997Z" fill="url(#paint13_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M348.663 -0.999997L380.698 -0.999999V302.165C380.698 324.73 381.084 320.133 364.487 338.519C349.821 354.398 351.751 359.412 351.751 389.498V658H318.943V394.094C319.329 354.816 348.663 376.962 348.663 295.062V-0.999997Z" fill="url(#paint14_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M268.927 -0.999997L300.963 -0.999999V302.165C300.963 324.73 301.349 320.133 284.752 338.519C270.085 354.398 272.015 359.412 272.015 389.498V658H239.207V394.094C239.593 354.816 268.927 376.962 268.927 295.062V-0.999997Z" fill="url(#paint15_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M189.191 -0.999997L221.227 -0.999999V302.165C221.227 324.73 221.613 320.133 205.016 338.519C190.349 354.398 192.279 359.412 192.279 389.498V658H159.471V394.094C159.857 354.816 189.191 376.962 189.191 295.062V-0.999997Z" fill="url(#paint16_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M109.456 -0.999997L141.491 -0.999999V302.165C141.491 324.73 141.877 320.133 125.28 338.519C110.613 354.398 112.543 359.412 112.543 389.498V658H79.7358V394.094C80.1218 354.816 109.456 376.962 109.456 295.062V-0.999997Z" fill="url(#paint17_linear_168_3731)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.72 -0.999997L61.7555 -0.999999V302.165C61.7555 324.73 62.1412 320.133 45.5446 338.519C30.8777 354.398 32.8077 359.412 32.8077 389.498V658H0V394.094C0.385986 354.816 29.72 376.962 29.72 295.062V-0.999997Z" fill="url(#paint18_linear_168_3731)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint12_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint13_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint14_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint15_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint16_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint17_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint18_linear_168_3731" x1="0.110265" y1="264.155" x2="1496.82" y2="264.155" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#11227A" />
                            <stop offset="0.339918" stopColor="#465398" />
                            <stop offset="0.58778" stopColor="#707AAF" />
                            <stop offset="0.816306" stopColor="#959CC4" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>

            <div className="container mx-auto relative z-[1]">
                <div className="flex flex-col items-center gap-10 py-[41px] 2xl:py-[60px] lg:flex-row lg:justify-between lg:gap-16 lg:pt-15 lg:pb-0">
                    <div className="lg:max-w-[50%] text-center lg:py-[92px] lg:text-left">
                        <h3 className="text-[30px] md:text-[48px] md:leading-[54px] font-bold leading-[1.15] text-white 2xl:text-[72px] 2xl:leading-[78px]">
                            {title}
                        </h3>
                        <p className="mt-5 text-[16px] leading-[26px] text-white/70 2xl:text-[18px] 2xl:leading-[28px] lg:max-w-[80%]">
                            {description}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                            {actions.map((action) => (
                                <Button key={action.label} href={action.href} variant={action.variant} className="w-full lg:w-fit">
                                    {action.label}
                                    {action.variant === "yellow" && <FaArrowRight size={15} />}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex w-full max-w-[60%] items-end justify-center lg:h-[400px] mt-[-20px] scale-[1.3]">
                        <div className="container-swing relative h-full w-full">
                            <Image
                                src="/images/common/container-orange.png"
                                alt="container"
                                fill
                                className="container-orange z-[1] mt-[-65px] object-contain"
                            />

                            <Image
                                src="/images/common/container-blue.png"
                                alt="container"
                                fill
                                className="container-blue ms-[100px] mt-[-65px] object-contain "
                            />
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA2;
