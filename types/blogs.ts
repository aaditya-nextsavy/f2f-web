import type { ReactNode } from "react";
import type { ActionButtonData } from "./home";

export interface BlogSidebarCtaData {
    title: string;
    description?: string;
    action: ActionButtonData;
}

export interface PageMetaData {
    title: string;
    description: string;
}

export interface BlogsPageData {
    meta: PageMetaData;
    banner: {
        label?: string;
        title: ReactNode;
    };
    sidebarCta: BlogSidebarCtaData;
}
