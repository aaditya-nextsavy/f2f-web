import type { ReactNode } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import type { ActionButtonData } from "@/types/home";

interface CTAProps {
    title: ReactNode;
    description: string;
    actions: ActionButtonData[];
}

const CTA = ({ title, description, actions }: CTAProps) => {
    return (
        <section className="mb-5 xl:mt-[-92px] bg-(--color-primary) lg:px-6 py-[44px] lg:py-[110px] relative lg:mb-20">

            <Image
                src="/images/common/cta-1-bg.png"
                fill
                alt="cta-bg"
                className="absolute w-full h-full l-0 t-0 opacity-50"
            />

            <div className="container mx-auto" >

                <div className="text-center lg:max-w-[80%] xl:max-w-[70%] mx-auto relative z-[1]">
                    <h3 className="text-[32px] leading-[34px] lg:text-[62px] lg:leading-[70px]  tracking-[-0.4px] 2xl:text-[72px] text-white font-semibold 2xl:tracking-[-1.6px] 2xl:leading-[76px]">
                        {title}
                    </h3>
                    <p className="mx-auto mt-[18px] lg:max-w-[80%] xl:max-w-[70%] text-[16px] 2xl:text-[18px] leading-[28px] tracking-[-0.3px] text-white">
                        {description}
                    </p>
                    <div className="mt-[24px] lg:mt-[42px] flex flex-col lg:flex-row items-center justify-center gap-3">
                        {actions.map((action) => (
                            <Button
                                key={action.label}
                                href={action.href}
                                variant={action.variant}
                                className="w-full lg:w-max"
                            >
                                {action.label}
                                {action?.variant === "yellow" && (

                                    <FaArrowRight size={15} />

                                )}

                            </Button>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default CTA;
