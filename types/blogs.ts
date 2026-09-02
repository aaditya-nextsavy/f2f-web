import type { ReactNode } from "react";
import type { ActionButtonData } from "./home";

export interface BlogSidebarCtaData {
    title: string;
    description?: string;
    action: ActionButtonData;
}

export interface BlogsPageData {
    banner: {
        label?: string;
        title: ReactNode;
    };
    sidebarCta: BlogSidebarCtaData;
}
