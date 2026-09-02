import type { ReactNode } from "react";
import type {
    ActionButtonData,
    FaqData,
    PlaceholderData,
    SectionTitleData,
    ServiceCardData,
} from "@/types/home";

export interface ServiceBannerData {
    label?: string;
    title: string;
    description?: string;
    bannerImage?: PlaceholderData;
    action?: ActionButtonData;
}

export interface AboutServiceData {
    sectiontitle: SectionTitleData;
    description: string;
    image: PlaceholderData;
}

export type ServiceListItem = {
    id: number;
    icon: string;
    descp: string;
};

export type ServicesListData = {
    sectiontitle: SectionTitleData;
    image: string;
    services: ServiceListItem[];
};

export interface FeatureCardItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

export interface WhyItWorksData {
    sectiontitle: SectionTitleData;
    featureCards: FeatureCardItem[];
}

export interface OtherServicesSectionData {
    sectiontitle: SectionTitleData;
    cards: ServiceCardData[];
}

export interface ServiceFaqsData {
    sectiontitle: SectionTitleData;
    faqs: FaqData[];
}

export interface Cta2Data {
    title: ReactNode;
    description: string;
    actions: ActionButtonData[];
    image: PlaceholderData;
}

export interface GlobalHubStat {
    id: number;
    value: string;
    label: string;
}

export interface CountryFlagItem {
    id: number;
    name: string;
    code: string;
}

export interface GlobalHubData {
    sectiontitle: SectionTitleData;
    description: string;
    stats: GlobalHubStat[];
    countries: CountryFlagItem[];
}

export interface ServiceFileCard {
    id: string;
    label: string;
    title: string;
    description: string;
    listTitle: string;
    listItems: string[];
    images: PlaceholderData[];
    action: ActionButtonData;
}

export interface ServicesFilesData {
    cards: ServiceFileCard[];
}

export interface ServicePageData {
    bannerData: ServiceBannerData;
    aboutService?: AboutServiceData;
    servicesList?: ServicesListData;
    whyItWorks?: WhyItWorksData;
    otherServicesSection?: OtherServicesSectionData;
    cta2?: Cta2Data;
    globalHub?: GlobalHubData;
    servicesFiles?: ServicesFilesData;
    faqs?: ServiceFaqsData;
}

export interface ServicesPageData {
    fcl: ServicePageData;
    lcl: ServicePageData;
    otherServices: ServicePageData;
}
