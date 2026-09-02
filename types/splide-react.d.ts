declare module "@splidejs/react-splide" {
    import type { Component, ComponentType, ReactNode } from "react";
    import type { Options, Splide as SplideCore } from "@splidejs/splide";

    export interface SplideProps {
        options?: Options;
        extensions?: Record<string, unknown>;
        hasTrack?: boolean;
        tag?: string;
        className?: string;
        children?: ReactNode;
        [key: string]: unknown;
    }

    export class Splide extends Component<SplideProps> {
        splide: SplideCore | undefined;
        go(control: number | string): void;
    }

    export interface SplideSlideProps {
        className?: string;
        children?: ReactNode;
        [key: string]: unknown;
    }

    export const SplideSlide: ComponentType<SplideSlideProps>;
    export const SplideTrack: ComponentType<{ className?: string; children?: ReactNode }>;
}
