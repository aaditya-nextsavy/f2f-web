import type { ReactNode } from "react";

export interface LegalSectionData {
    title: string;
    description: ReactNode;
}

export interface LegalPageData {
    banner: {
        label?: string;
        title: string;
        description?: string;
    };
    sections: LegalSectionData[];
}
