export interface ContactBannerData {
    label?: string;
    title: string;
    description?: string;
}

export interface ContactInfoContent {
    heading: string;
    description: string;
}

export interface ContactPageData {
    banner: ContactBannerData;
    info: ContactInfoContent;
    mapEmbedSrc: string;
}
