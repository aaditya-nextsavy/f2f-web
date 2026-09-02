"use client";

import { FaArrowRight } from "react-icons/fa6";

import HeroVideo from "./HeroVideo";
import { Button } from "@/components/ui/Button";
import type { ActionButtonData, PlaceholderData, VideoData } from "@/types/home";

interface HeroBannerProps {
    title: string;
    description: string;
    actions: ActionButtonData[];
    video: VideoData;
    placeholder: PlaceholderData;
}

export default function HeroBanner({ title, description, actions, video, placeholder }: HeroBannerProps) {
    return (
        <section style={{ background: "var(--mobile-hero-gradient)" }} className="relative isolate min-h-[680px] h-screen w-full overflow-hidden bg-(--mobile-hero-gradient)">

            <div className="hidden lg:block">
                <HeroVideo video={video} placeholder={placeholder} />
            </div>

            {/* Content */}
            <div className=" flex flex-col h-[stretch] justify-center lg:justify-start  relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] top:[25%] xl:top-[18%] text-start lg:text-center text-white">
                <h1 className="text-balance text-[36px] lg:text-[clamp(52px,5vw,84px)] font-extrabold tracking-[-1.5px] lg:tracking-[-3.5px] leading-[44px] xl:leading-[97px] ">
                    {title}
                </h1>
                <p className="mx-auto mt-[18px] max-w-[860px] text-[16px] lg:text-[20px] leading-6 lg:leading-[30px] tracking-[-0.3px] text-white ">
                    {description}
                </p>
                <div className="mt-[24px] lg:mt-[42px] flex flex-col lg:flex-row items-center justify-center gap-3">
                    {actions.map((action) => (
                        <Button
                            key={action.label}
                            href={action.href}
                            variant={action.variant}
                            className="w-[100%] lg:w-fit"
                        >
                            {action.label}
                            {action?.variant === "yellow" && (

                                <FaArrowRight size={15} />

                            )}

                        </Button>
                    ))}
                </div>
            </div>

        </section>
    );
}
