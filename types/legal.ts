import type { ReactNode } from "react";

export interface LegalSectionData {
    title?: string;
    description: ReactNode;
}

export interface PageMetaData {
    title: string;
    description: string;
}

export interface LegalPageData {
    meta: PageMetaData;
    banner: {
        label?: string;
        title: string;
        description?: string;
    };
    sections: LegalSectionData[];
}
