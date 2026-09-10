import type { ReactNode } from "react";
import type { Variant as ButtonVariant } from "@/components/ui/Button";

export interface SectionTitleData {
    label?: string;
    title?: ReactNode;
    description?: string;
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

export interface PageMetaData {
    title: string;
    description: string;
}

export interface HeroBannerData {
    title: string;
    description: string;
    actions: ActionButtonData[];
    video: VideoData;
    placeholder: PlaceholderData;
}

export interface HeroAboutData {
    title: string;
    description: string;
}

export interface ServiceCardData {
    id: number;
    title: string;
    description: string;
    image: string;
    variant?: string;
    link?: LinkData;
}

export interface IndustryCardData {
    id: number;
    title: string;
    descp: string;
    image: string;
}

export interface HowItWorksStepData {
    id: number;
    title: string;
    description: string;
}

export interface CtaData {
    title: ReactNode;
    description: string;
    actions: ActionButtonData[];
}

export interface PartnerData {
    id: number;
    image: string;
    alt: string;
    link?: string;
}

export interface BlogPostData {
    id: string;
    slug?: string;
    author?: string;
    date: string;
    title: string;
    description: string;
    image: string;
    href: string;
    featured?: boolean;
}

export interface FaqData {
    id: number;
    title: string;
    descp: string;
}

export interface StatData {
    id: number;
    value: string;
    label: string;
}

export interface HomePageData {
    meta: PageMetaData;
    heroBanner: HeroBannerData;
    heroAbout: HeroAboutData;
    seaFreight: {
        sectionTitle: SectionTitleData;
        cards: ServiceCardData[];
    };
    otherServices: {
        sectionTitle: SectionTitleData;
        cards: ServiceCardData[];
    };
    industries: {
        sectionTitle: SectionTitleData;
        cards: IndustryCardData[];
    };
    howItWorks: {
        sectionTitle: SectionTitleData;
        paragraphs: string[];
        steps: HowItWorksStepData[];
    };
    ctaType1: CtaData;
    ourPartners: {
        title: string;
        partners: PartnerData[];
    };
    blogListing: {
        sectionTitle: SectionTitleData;
        exploreLink: LinkData;
    };
    faqs: {
        sectionTitle: SectionTitleData;
        faqs: FaqData[];
    };
    statistics: {
        sectionTitle: SectionTitleData;
        stats: StatData[];
    };
}
