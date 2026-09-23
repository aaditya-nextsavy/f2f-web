interface HeroAboutProps {
    title: string;
    description: string;
}

const HeroAbout = ({ title, description }: HeroAboutProps) => {
    return (
        <section className="relative overflow-hidden ">
            {/* Background SVG */}
            <div className="hidden lg:block absolute inset-0 -z-10">
                <svg className="h-full w-full object-cover" width="1920" height="210" viewBox="0 0 1920 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M-67 208.211L976.644 208.211C1076 208.211 1113.83 99.5043 1172.35 43.8737C1222.88 -5.28814 1238.84 1.18068 1334.6 1.18068L2031 1.18072" stroke="#11227A" strokeWidth="1.8" />
                </svg>

            </div>

            <div className="container mx-auto">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col lg:pb-4 gap-6 sm:gap-3 2xl:gap-0" >
                        <h2 className="max-w-[100%] lg:max-w-[60%] text-[24px] leading-[30px] tracking-[-1px] md:text-[34px] text-balance  lg:text-[46px] lg:leading-[52px] font-bold text-(--color-primary) 2xl:leading-[78px] lg:tracking-[-1.8px]  2xl:text-[64px]">
                            {title}
                        </h2>

                        <p className="mt-5 lg:mt-0 lg:ms-auto lg:pb-6 sm:max-w-[450px] 2xl:max-w-[583px]  text-[16px] leading-[24px] text-(--color-primary) 2xl:text-[18px] 2xl:leading-[28px]">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAbout;
