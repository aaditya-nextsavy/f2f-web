export interface ContactBannerData {
    label?: string;
    title: string;
    description?: string;
}

export interface ContactInfoContent {
    heading: string;
    description: string;
}

export interface PageMetaData {
    title: string;
    description: string;
}

export interface ContactPageData {
    meta: PageMetaData;
    banner: ContactBannerData;
    info: ContactInfoContent;
    mapEmbedSrc: string;
}

export interface ContactFormValues {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    service: string;
    cargoQuantity: string;
    message: string;
}
