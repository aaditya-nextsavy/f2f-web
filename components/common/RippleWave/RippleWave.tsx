"use client";

import { useEffect, useId, useRef } from "react";
import { useSweepHover } from "./useSweepHover";

const DEFAULT_PATHS = [
    "M38.4853 -401L0.000934776 -401L0.000915702 235.965C0.000914574 261.766 -0.462696 256.51 19.475 277.533C37.0943 295.689 34.7759 301.422 34.7759 335.823L34.7759 920H74.1876L74.1877 341.079C73.724 296.167 38.4852 321.489 38.4852 227.843L38.4853 -401Z",
    "M134.272 -401L95.7876 -401L95.7876 235.965C95.7876 261.766 95.324 256.51 115.262 277.533C132.881 295.689 130.563 301.422 130.563 335.823L130.563 920H169.974L169.974 341.079C169.511 296.167 134.272 321.489 134.272 227.843V-401Z",
    "M230.059 -401L191.574 -401L191.574 235.965C191.574 261.766 191.111 256.51 211.048 277.533C228.668 295.689 226.349 301.422 226.349 335.823L226.349 920H265.761L265.761 341.079C265.297 296.167 230.059 321.489 230.059 227.843L230.059 -401Z",
    "M325.845 -401L287.361 -401L287.361 235.965C287.361 261.766 286.897 256.51 306.835 277.533C324.454 295.689 322.136 301.422 322.136 335.823L322.136 920H361.548L361.548 341.079C361.084 296.167 325.845 321.489 325.845 227.843L325.845 -401Z",
    "M421.632 -401L383.148 -401L383.148 235.965C383.148 261.766 382.684 256.51 402.622 277.533C420.241 295.689 417.923 301.422 417.923 335.823L417.923 920H457.334L457.334 341.079C456.871 296.167 421.632 321.489 421.632 227.843L421.632 -401Z",
    "M517.419 -401L478.934 -401V235.965C478.934 261.766 478.471 256.51 498.408 277.533C516.028 295.689 513.709 301.422 513.709 335.823V920H553.121L553.121 341.079C552.657 296.167 517.418 321.489 517.418 227.843L517.419 -401Z",
    "M613.205 -401L574.721 -401V235.965C574.721 261.766 574.257 256.51 594.195 277.533C611.814 295.689 609.496 301.422 609.496 335.823V920H648.908L648.908 341.079C648.444 296.167 613.205 321.489 613.205 227.843V-401Z",
    "M708.992 -401L670.508 -401V235.965C670.508 261.766 670.044 256.51 689.982 277.533C707.601 295.689 705.283 301.422 705.283 335.823V920H744.694L744.694 341.079C744.231 296.167 708.992 321.489 708.992 227.843L708.992 -401Z",
    "M804.779 -401L766.294 -401V235.965C766.294 261.766 765.831 256.51 785.768 277.533C803.388 295.689 801.069 301.422 801.069 335.823V920H840.481V341.079C840.017 296.167 804.778 321.489 804.779 227.843V-401Z",
    "M900.565 -401L862.081 -401V235.965C862.081 261.766 861.617 256.51 881.555 277.533C899.174 295.689 896.856 301.422 896.856 335.823V920H936.268L936.268 341.079C935.804 296.167 900.565 321.489 900.565 227.843L900.565 -401Z",
    "M996.352 -401L957.867 -401V235.965C957.867 261.766 957.404 256.51 977.342 277.533C994.961 295.689 992.643 301.422 992.643 335.823V920H1032.05V341.079C1031.59 296.167 996.352 321.489 996.352 227.843V-401Z",
    "M1092.14 -401L1053.65 -401V235.965C1053.65 261.766 1053.19 256.51 1073.13 277.533C1090.75 295.689 1088.43 301.422 1088.43 335.823V920H1127.84V341.079C1127.38 296.167 1092.14 321.489 1092.14 227.843V-401Z",
    "M1187.93 -401L1149.44 -401V235.965C1149.44 261.766 1148.98 256.51 1168.91 277.533C1186.53 295.689 1184.22 301.422 1184.22 335.823V920H1223.63V341.079C1223.16 296.167 1187.93 321.489 1187.93 227.843V-401Z",
    "M1283.71 -401L1245.23 -401V235.965C1245.23 261.766 1244.76 256.51 1264.7 277.533C1282.32 295.689 1280 301.422 1280 335.823V920H1319.41V341.079C1318.95 296.167 1283.71 321.489 1283.71 227.843V-401Z",
    "M1379.5 -401L1341.01 -401V235.965C1341.01 261.766 1340.55 256.51 1360.49 277.533C1378.11 295.689 1375.79 301.422 1375.79 335.823V920H1415.2V341.079C1414.74 296.167 1379.5 321.489 1379.5 227.843V-401Z",
    "M1475.28 -401L1436.8 -401V235.965C1436.8 261.766 1436.34 256.51 1456.27 277.533C1473.89 295.689 1471.58 301.422 1471.58 335.823V920H1510.99V341.079C1510.52 296.167 1475.28 321.489 1475.28 227.843V-401Z",
    "M1571.07 -401L1532.59 -401V235.965C1532.59 261.766 1532.12 256.51 1552.06 277.533C1569.68 295.689 1567.36 301.422 1567.36 335.823V920H1606.77V341.079C1606.31 296.167 1571.07 321.489 1571.07 227.843V-401Z",
    "M1666.86 -401L1628.37 -401V235.965C1628.37 261.766 1627.91 256.51 1647.85 277.533C1665.47 295.689 1663.15 301.422 1663.15 335.823V920H1702.56V341.079C1702.1 296.167 1666.86 321.489 1666.86 227.843V-401Z",
    "M1762.64 -401L1724.16 -401V235.965C1724.16 261.766 1723.7 256.51 1743.63 277.533C1761.25 295.689 1758.94 301.422 1758.94 335.823V920H1798.35V341.079C1797.88 296.167 1762.64 321.489 1762.64 227.843V-401Z",
    "M1858.43 -401L1819.95 -401V235.965C1819.95 261.766 1819.48 256.51 1839.42 277.533C1857.04 295.689 1854.72 301.422 1854.72 335.823V920H1894.13V341.079C1893.67 296.167 1858.43 321.489 1858.43 227.843V-401Z",
    "M1954.22 -401L1915.73 -401V235.965C1915.73 261.766 1915.27 256.51 1935.21 277.533C1952.83 295.689 1950.51 301.422 1950.51 335.823V920H1989.92V341.079C1989.46 296.167 1954.22 321.489 1954.22 227.843V-401Z",
    "M2050 -401L2011.52 -401V235.965C2011.52 261.766 2011.06 256.51 2030.99 277.533C2048.61 295.689 2046.3 301.422 2046.3 335.823V920H2085.71V341.079C2085.24 296.167 2050 321.489 2050 227.843V-401Z",
    "M2145.79 -401L2107.31 -401V235.965C2107.31 261.766 2106.84 256.51 2126.78 277.533C2144.4 295.689 2142.08 301.422 2142.08 335.823V920H2181.49V341.079C2181.03 296.167 2145.79 321.489 2145.79 227.843V-401Z",
    "M2241.58 -401L2203.09 -401V235.965C2203.09 261.766 2202.63 256.51 2222.57 277.533C2240.19 295.689 2237.87 301.422 2237.87 335.823V920H2277.28V341.079C2276.82 296.167 2241.58 321.489 2241.58 227.843V-401Z",
    "M2337.36 -401L2298.88 -401V235.965C2298.88 261.766 2298.42 256.51 2318.35 277.533C2335.97 295.689 2333.66 301.422 2333.66 335.823V920H2373.07V341.079C2372.6 296.167 2337.36 321.489 2337.36 227.843V-401Z",
    "M2433.15 -401L2394.67 -401V235.965C2394.67 261.766 2394.2 256.51 2414.14 277.533C2431.76 295.689 2429.44 301.422 2429.44 335.823V920H2468.85V341.079C2468.39 296.167 2433.15 321.489 2433.15 227.843V-401Z",
    "M2528.94 -401L2490.45 -401V235.965C2490.45 261.766 2489.99 256.51 2509.93 277.533C2527.55 295.689 2525.23 301.422 2525.23 335.823V920H2564.64V341.079C2564.18 296.167 2528.94 321.489 2528.94 227.843V-401Z",
    "M2624.72 -401L2586.24 -401V235.965C2586.24 261.766 2585.78 256.51 2605.71 277.533C2623.33 295.689 2621.01 301.422 2621.01 335.823V920H2660.43V341.079C2659.96 296.167 2624.72 321.489 2624.72 227.843V-401Z",
    "M2720.51 -401L2682.03 -401V235.965C2682.03 261.766 2681.56 256.51 2701.5 277.533C2719.12 295.689 2716.8 301.422 2716.8 335.823V920H2756.21V341.079C2755.75 296.167 2720.51 321.489 2720.51 227.843V-401Z",
    "M2816.3 -401L2777.81 -401V235.965C2777.81 261.766 2777.35 256.51 2797.29 277.533C2814.91 295.689 2812.59 301.422 2812.59 335.823V920H2852V341.079C2851.54 296.167 2816.3 321.489 2816.3 227.843V-401Z",
];

const DEFAULT_GRADIENT: RippleWaveGradient = {
    x1: 1876,
    y1: 183.5,
    x2: -43.5,
    y2: 187.5,
    stops: [
        { offset: 0, color: "white" },
        { offset: 0.5, color: "#11227A" },
        { offset: 1, color: "white" },
    ],
};

const STAGGER_MS = 32;
const PUSH_PER_LINE = 4;
// Every line moves at least this far, so the rightmost ones visibly shift too.
const BASE_PUSH = 16;
const TRANSITION_MS = 1600;
const TRANSITION = `${TRANSITION_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`;

export interface RippleWaveGradient {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    stops: { offset: number; color: string }[];
}

interface RippleWaveProps {
    /** Line shapes, ordered left to right. */
    paths?: string[];
    viewBox?: string;
    preserveAspectRatio?: string;
    gradient?: RippleWaveGradient;
    /** Resting opacity ramps from the right edge (strongest) to the left edge. */
    baseOpacityRight?: number;
    baseOpacityLeft?: number;
    /** Opacity the furthest-travelled line fades to while hovered. */
    minOpacity?: number;
}

export default function RippleWave({
    paths = DEFAULT_PATHS,
    viewBox = "0 0 1908 539",
    preserveAspectRatio = "none",
    gradient = DEFAULT_GRADIENT,
    baseOpacityRight = 0.13,
    baseOpacityLeft = 0.07,
    minOpacity = 0.03,
}: RippleWaveProps) {
    const total = paths.length;
    const { isHovered, onEnter, onLeave } = useSweepHover(
        (total - 1) * STAGGER_MS + TRANSITION_MS,
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const gradientId = `wave-gradient-${useId().replace(/:/g, "")}`;

    // The sweep follows hover over the whole enclosing <section>, not just
    // the lines, since content usually sits on top of the waves.
    useEffect(() => {
        const target = containerRef.current?.closest("section") ?? containerRef.current;
        if (!target) return;

        target.addEventListener("mouseenter", onEnter);
        target.addEventListener("mouseleave", onLeave);
        return () => {
            target.removeEventListener("mouseenter", onEnter);
            target.removeEventListener("mouseleave", onLeave);
        };
    }, [onEnter, onLeave]);

    return (
        <div
            ref={containerRef}
            className="h-full w-full overflow-hidden"
        >
            <svg
                viewBox={viewBox}
                preserveAspectRatio={preserveAspectRatio}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
            >
                <g>
                    {paths.map((d, index) => {
                        const distanceFromRight = total - 1 - index;

                        /*
                         * Right-to-left sweep: the rightmost line moves
                         * first (smallest delay) and by the smallest
                         * amount; each line further left is delayed and
                         * pushed further, fanning the shape out like a
                         * gust travelling across it. Opacity fades along
                         * the same curve, so lines dim the further they
                         * travel — as if the sweep dissipates as it goes.
                         *
                         * On the way out, the delay is mirrored so the
                         * line that moved last (furthest left) is the
                         * first to fall back, and the one that moved
                         * first (rightmost) is the last to settle — a
                         * true reverse playback of the entrance, not
                         * just the same sweep replayed forwards.
                         */
                        const travelRatio = distanceFromRight / (total - 1);
                        const displacement = isHovered
                            ? -(BASE_PUSH + distanceFromRight * PUSH_PER_LINE)
                            : 0;
                        const restOpacity =
                            baseOpacityRight -
                            travelRatio * (baseOpacityRight - baseOpacityLeft);
                        const opacity = isHovered
                            ? restOpacity - travelRatio * (restOpacity - minOpacity)
                            : restOpacity;
                        const delay = isHovered
                            ? distanceFromRight * STAGGER_MS
                            : index * STAGGER_MS;

                        return (
                            <path
                                key={index}
                                d={d}
                                fill={`url(#${gradientId})`}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                style={{
                                    transform: `translateX(${displacement}px)`,
                                    opacity,
                                    transition: `transform ${TRANSITION}, opacity ${TRANSITION}`,
                                    transitionDelay: `${delay}ms`,
                                    willChange: "transform, opacity",
                                }}
                            />
                        );
                    })}
                </g>

                <defs>
                    <linearGradient
                        id={gradientId}
                        x1={gradient.x1}
                        y1={gradient.y1}
                        x2={gradient.x2}
                        y2={gradient.y2}
                        gradientUnits="userSpaceOnUse"
                    >
                        {gradient.stops.map((stop) => (
                            <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
                        ))}
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
