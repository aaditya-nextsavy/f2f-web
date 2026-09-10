import type { ReactNode } from "react";
import type { Variant as ButtonVariant } from "@/components/ui/Button";

export interface SectionTitleData {
    label?: string;
    title?: ReactNode;
    description?: string;
}

export interface ImageData {
    src: string;
    alt: string;
}

export interface LinkData {
    label?: string;
    href: string;
}

export interface ActionButtonData {
    label: string;
    href: string;
    variant: ButtonVariant;
}

export interface VideoData {
    src: string;
    type: string;
    alt: string;
}

export interface PlaceholderData {
    src: string;
    alt: string;
}

export interface BannerDataType2 {
    label?: string;
    title: string;
    description?: string;
    bannerImage?: PlaceholderData;
}

export interface PageMetaData {
    title: string;
    description: string;
}


export interface TeamMemberData {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: PlaceholderData;
    link?: LinkData;
}

export interface TeamData {
    sectionTitle: SectionTitleData;
    members: TeamMemberData[];
}


export type CoreValue = {
    id: number;
    icon: string;
    title: string;
    descp: string;
};

export type CoreValuesData = {
    sectiontitle: SectionTitleData;
    image: string;
    values: CoreValue[];
};

export interface MissionVisionData {
    sectionTitle: SectionTitleData;
    body: ReactNode;
    missionTitle: string;
    visionTitle: string;
    visionBody: ReactNode;
    image: PlaceholderData;
}

export interface HowWeWorkPoint {
    id: number;
    title: string;
    highlight?: boolean;
    description: string[];
    mobileImage?: PlaceholderData;
}

export interface HowWeWorkData {
    sectionTitle: SectionTitleData;
    points: HowWeWorkPoint[];
    image: PlaceholderData;
}

export interface AboutPageData {
    meta: PageMetaData;
    bannerData: BannerDataType2;
    ourStory: {
        sectionTitle: SectionTitleData;
        image: PlaceholderData;
    };
    team: TeamData;
    coreValues: CoreValuesData;
    missionVision: MissionVisionData;
    howWeWork: HowWeWorkData;


}
