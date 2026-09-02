"use client";

import Image from "next/image";
import type { PlaceholderData, VideoData } from "@/types/home";

interface HeroVideoProps {
    video: VideoData;
    placeholder: PlaceholderData;
}

export default function HeroVideo({ video, placeholder }: HeroVideoProps) {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Placeholder image */}
            <Image
                src={placeholder.src}
                alt={placeholder.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Hero video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={video.alt}
            >
                <source src={video.src} type={video.type} />
            </video>
        </div>
    );
}
