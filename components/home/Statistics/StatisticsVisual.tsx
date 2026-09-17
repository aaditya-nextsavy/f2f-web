"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * Raw markup lifted from /public/images/about/stats/stats-earth-lines.svg.
 * Injected directly (instead of <Image>) so GSAP can animate each <path>
 * individually. Width/height attrs are stripped so the [&>svg] CSS below
 * can stretch it to fill its wrapper; the viewBox keeps proportions intact.
 *
 * The original stats-earth-lines-base.svg (glow-dot markers) used its own,
 * unrelated viewBox/coordinate space, so its dots never actually lined up
 * with these route endpoints. Instead of that file, endpoint markers are
 * generated at runtime from each path's real start/end points (via
 * getPointAtLength) and appended into the `.statistics-endpoints` group
 * below, guaranteeing they sit exactly on the line ends.
 */
const EARTH_ROUTES_SVG = `
<svg viewBox="0 0 1037 1069" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs></defs>
<g opacity="0.95">
<path d="M137.375 362.756C137.375 362.756 149.812 -0.172659 366.087 149.715" stroke="white" strokeWidth="1.00123" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M391.609 118.416C391.609 118.416 455.121 -12.2127 569.752 1.56256C684.383 15.3378 832.041 178.927 854.924 311.221" stroke="white" strokeWidth="1.08958" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M437.744 191.999C437.744 191.999 567.921 -18.7495 711.61 392.203" stroke="white" strokeWidth="1.08958" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M371.976 233.996C371.976 233.996 306.688 79.4007 234.552 377.479" stroke="white" strokeWidth="0.981601" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M372.958 235.298C372.958 235.298 462.066 134.678 500.567 356.866" stroke="white" strokeWidth="1.08958" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M620.322 137.587C620.322 137.587 881.023 -58.0968 926.581 387.296" stroke="white" strokeWidth="1.08958" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M931.981 406.437L927.564 336.743L925.045 302.601C924.868 301.71 924.738 300.82 924.55 299.941L923.926 297.304L923.313 294.679L922.995 293.367L922.606 292.066C920.798 285.089 917.947 278.422 914.149 272.287C910.354 266.15 904.828 261.26 898.259 258.226C894.955 256.811 891.443 255.937 887.859 255.636C886.067 255.449 884.264 255.39 882.464 255.46C881.566 255.47 880.669 255.533 879.778 255.648C878.883 255.742 877.976 255.8 877.093 255.929C869.964 257.106 863.024 259.222 856.456 262.222C849.865 265.184 843.492 268.606 837.386 272.463C825.192 280.229 813.583 288.868 802.65 298.312C791.649 307.686 781.083 317.564 770.847 327.77C760.612 337.976 750.706 348.487 741.059 359.244C731.412 370.001 722.036 380.957 713.001 392.206" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M445.597 470.096C445.597 470.096 592.556 263.908 639.954 554.167" stroke="white" strokeWidth="1.08958" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M420.075 640.314C405.308 647.552 390.97 655.635 377.131 664.523C363.258 673.362 349.762 682.816 336.823 692.991C323.907 703.197 311.548 714.091 299.799 725.624C296.892 728.535 294.092 731.54 291.244 734.522L286.978 738.995L282.948 743.656C280.266 746.78 277.524 749.857 274.901 753.028C272.277 756.199 269.748 759.452 267.231 762.718C257.162 775.778 248.051 789.551 239.969 803.929C235.936 811.109 232.314 818.512 229.121 826.103C225.886 833.676 223.393 841.546 221.676 849.602C220.853 853.635 220.383 857.733 220.27 861.848C220.142 865.958 220.62 870.064 221.688 874.035C222.77 878.008 224.742 881.682 227.455 884.779C230.215 887.843 233.611 890.266 237.405 891.878C245.003 895.096 253.405 895.806 261.606 895.605C269.839 895.265 266.848 897.351 274.901 895.605" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M345.689 455.388C321.223 445.273 296.375 436.122 271.146 427.935C245.948 419.771 220.42 412.492 194.467 407.348C181.492 404.704 168.357 402.915 155.148 401.992C148.545 401.568 141.921 401.568 135.318 401.992C128.716 402.381 122.189 403.594 115.888 405.602C112.766 406.669 109.774 408.086 106.97 409.826C104.162 411.555 101.666 413.744 99.5853 416.303L98.1225 418.296C97.689 418.985 97.2951 419.698 96.9428 420.432C96.1538 421.879 95.4984 423.396 94.9846 424.962C94.7316 425.737 94.519 426.525 94.3475 427.322C94.1237 428.095 93.9542 428.884 93.8403 429.681L93.5454 432.147C93.5454 432.56 93.4274 432.961 93.4038 433.326V434.565C93.358 441.195 91.5844 453.425 92.2214 460.915" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M380.811 476.621C380.811 476.621 57.8353 510.585 131.655 678.831" stroke="white" strokeWidth="1.08958" strokeMiterlimit="10" stroke-dasharray="2.18 2.18"/>
<path d="M221.792 295.213C210.655 298.028 199.589 301.388 188.723 305.126C177.857 308.864 167.049 312.909 156.43 317.369C135.138 326.148 114.609 336.693 95.0536 348.893C75.6141 361.231 57.2801 375.556 41.7215 392.661C33.9104 401.159 26.9501 410.411 20.9414 420.282C17.9319 425.208 15.226 430.316 12.8386 435.577C10.4213 440.845 8.34718 446.266 6.62931 451.806L5.97075 453.864L5.40627 455.958C5.02995 457.354 4.6301 458.738 4.23026 460.145C3.60697 462.961 2.92489 465.776 2.46624 468.627C2.0076 471.478 1.596 474.34 1.21967 477.203C0.843349 480.066 0.666931 482.964 0.59637 485.862C0.136737 497.432 1.16445 509.014 3.65401 520.32C8.59325 542.972 18.8598 564.158 31.6548 583.357C38.1083 592.953 45.1465 602.138 52.7289 610.859C60.2907 619.601 68.3346 627.905 76.7196 635.854C85.1045 643.803 93.8423 651.35 102.874 658.542C111.906 665.734 121.208 672.595 130.922 678.829" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M112.797 533.361C105.637 541.911 98.97 550.862 92.8298 560.171C86.6587 569.477 80.9564 579.063 75.7231 588.929C65.3433 608.664 56.9732 629.556 52.0788 651.335C49.6511 662.203 48.2499 673.274 47.8937 684.404C47.5649 695.553 48.5409 706.703 50.802 717.626C55.4101 739.552 65.4777 759.964 80.0737 776.973C87.4281 785.378 95.8221 792.815 105.054 799.106C114.292 805.388 124.129 810.745 134.42 815.097C154.991 823.884 176.885 829.21 198.981 832.482C221.133 835.627 243.5 837.013 265.871 836.627C277.055 836.493 288.227 835.993 299.387 835.127C310.535 834.265 321.672 833.108 332.714 831.36" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M421.058 640.549C392.592 747.216 369.72 935.52 505.967 835.397" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M385.72 591.467C501.156 460.718 557.173 598.175 570.752 683.247C621.01 714.265 668.585 765.865 686.09 787.788C794.459 944.844 699.704 963.495 642.444 954.169" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M540.322 902.146C581.385 944.355 680.2 1021.31 746.949 991.471C813.698 961.631 831.366 876.951 831.857 838.342" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M539.34 903.126C523.962 966.439 461.608 1107.92 403.879 1056.75C360.689 1018.46 324.697 898.709 329.769 837.85" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M881.919 648.401C924.128 627.46 1013.55 567.026 1033.58 492.817C1058.61 400.056 891.245 312.694 854.925 310.73" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M638.482 554.168C779.342 600.14 1020.03 716.721 855.906 815.274" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M637.992 554.169C788.34 542.717 1096.4 513.431 927.564 680.795" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
<path d="M637.009 553.677C776.233 458.134 1033.58 316.129 949.158 512.449" stroke="white" strokeWidth="0.981601" stroke-dasharray="1.96 1.96"/>
</g>
<g class="statistics-endpoints"></g>
</svg>
`;

/**
 * Raw markup lifted from /public/images/about/stats/stats-glowing-stars.svg.
 * Must stay inlined (not <Image>): each star relies on `mix-blend-mode:
 * color-dodge` against the navy section background, which only works when
 * the SVG is part of the page's own DOM/stacking context - an <img>-loaded
 * SVG rasterizes in isolation and the blend mode has no backdrop to react
 * to. For the same reason this layer must never sit inside an ancestor
 * that gets opacity/transform/filter animated, or the blend breaks again.
 */
const GLOW_STARS_SVG = `
<svg viewBox="0 0 1563 831" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1527.72 20.862C1526.48 11.8231 1532.8 3.48929 1541.84 2.2479C1550.87 1.00651 1559.21 7.32764 1560.45 16.3665C1561.69 25.4054 1555.37 33.7393 1546.33 34.9806C1537.29 36.222 1528.96 29.9009 1527.72 20.862Z" fill="url(#stats-glow-0)" style="mix-blend-mode:color-dodge"/>
<path d="M1501.25 234.862C1500.01 225.823 1506.33 217.489 1515.37 216.248C1524.41 215.007 1532.74 221.328 1533.98 230.367C1535.22 239.405 1528.9 247.739 1519.86 248.981C1510.82 250.222 1502.49 243.901 1501.25 234.862Z" fill="url(#stats-glow-1)" style="mix-blend-mode:color-dodge"/>
<path d="M146.248 45.862C145.007 36.8231 151.328 28.4893 160.367 27.2479C169.406 26.0065 177.739 32.3276 178.981 41.3665C180.222 50.4054 173.901 58.7393 164.862 59.9806C155.823 61.222 147.489 54.9009 146.248 45.862Z" fill="url(#stats-glow-2)" style="mix-blend-mode:color-dodge"/>
<path opacity="0.6" d="M2.87216 350.658C1.28591 339.108 9.36307 328.459 20.913 326.873C32.4629 325.287 43.1119 333.364 44.6982 344.914C46.2844 356.464 38.2073 367.113 26.6573 368.699C15.1074 370.285 4.45841 362.208 2.87216 350.658Z" fill="url(#stats-glow-3)" style="mix-blend-mode:color-dodge"/>
<path d="M1140.25 813.862C1139.01 804.824 1145.33 796.49 1154.37 795.248C1163.41 794.007 1171.74 800.328 1172.98 809.367C1174.22 818.406 1167.9 826.74 1158.86 827.981C1149.82 829.223 1141.49 822.901 1140.25 813.862Z" fill="url(#stats-glow-4)" style="mix-blend-mode:color-dodge"/>
<path d="M1434.08 485.767C1432.38 478.916 1436.55 471.982 1443.41 470.28C1450.26 468.578 1457.19 472.753 1458.89 479.604C1460.59 486.455 1456.42 493.388 1449.57 495.09C1442.72 496.792 1435.78 492.618 1434.08 485.767Z" fill="url(#stats-glow-5)" style="mix-blend-mode:color-dodge"/>
<defs>
<radialGradient id="stats-glow-0" cx="0" cy="0" r="1" gradientTransform="matrix(-14.8077 -0.0591995 -0.0390489 14.9544 1543.85 18.4744)" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="white"/><stop offset="0.1" stopColor="#EBEBEB"/><stop offset="0.13" stopColor="#BBBBBB"/><stop offset="0.17" stopColor="#8E8E8E"/><stop offset="0.2" stopColor="#686868"/><stop offset="0.23" stopColor="#484848"/><stop offset="0.27" stopColor="#2E2E2E"/><stop offset="0.31" stopColor="#1A1A1A"/><stop offset="0.36" stopColor="#0C0C0C"/><stop offset="0.42" stopColor="#030303"/><stop offset="0.52" stopColor="#010101"/><stop offset="1"/>
</radialGradient>
<radialGradient id="stats-glow-1" cx="0" cy="0" r="1" gradientTransform="matrix(-14.8077 -0.0591995 -0.0390489 14.9544 1517.38 232.474)" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="white"/><stop offset="0.1" stopColor="#EBEBEB"/><stop offset="0.13" stopColor="#BBBBBB"/><stop offset="0.17" stopColor="#8E8E8E"/><stop offset="0.2" stopColor="#686868"/><stop offset="0.23" stopColor="#484848"/><stop offset="0.27" stopColor="#2E2E2E"/><stop offset="0.31" stopColor="#1A1A1A"/><stop offset="0.36" stopColor="#0C0C0C"/><stop offset="0.42" stopColor="#030303"/><stop offset="0.52" stopColor="#010101"/><stop offset="1"/>
</radialGradient>
<radialGradient id="stats-glow-2" cx="0" cy="0" r="1" gradientTransform="matrix(-14.8077 -0.0591995 -0.0390489 14.9544 162.378 43.4744)" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="white"/><stop offset="0.1" stopColor="#EBEBEB"/><stop offset="0.13" stopColor="#BBBBBB"/><stop offset="0.17" stopColor="#8E8E8E"/><stop offset="0.2" stopColor="#686868"/><stop offset="0.23" stopColor="#484848"/><stop offset="0.27" stopColor="#2E2E2E"/><stop offset="0.31" stopColor="#1A1A1A"/><stop offset="0.36" stopColor="#0C0C0C"/><stop offset="0.42" stopColor="#030303"/><stop offset="0.52" stopColor="#010101"/><stop offset="1"/>
</radialGradient>
<radialGradient id="stats-glow-3" cx="0" cy="0" r="1" gradientTransform="matrix(-18.9213 -0.0756454 -0.0498968 19.1088 23.4825 347.607)" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="white"/><stop offset="0.1" stopColor="#EBEBEB"/><stop offset="0.13" stopColor="#BBBBBB"/><stop offset="0.17" stopColor="#8E8E8E"/><stop offset="0.2" stopColor="#686868"/><stop offset="0.23" stopColor="#484848"/><stop offset="0.27" stopColor="#2E2E2E"/><stop offset="0.31" stopColor="#1A1A1A"/><stop offset="0.36" stopColor="#0C0C0C"/><stop offset="0.42" stopColor="#030303"/><stop offset="0.52" stopColor="#010101"/><stop offset="1"/>
</radialGradient>
<radialGradient id="stats-glow-4" cx="0" cy="0" r="1" gradientTransform="matrix(-14.8077 -0.0591995 -0.0390489 14.9544 1156.38 811.475)" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="white"/><stop offset="0.1" stopColor="#EBEBEB"/><stop offset="0.13" stopColor="#BBBBBB"/><stop offset="0.17" stopColor="#8E8E8E"/><stop offset="0.2" stopColor="#686868"/><stop offset="0.23" stopColor="#484848"/><stop offset="0.27" stopColor="#2E2E2E"/><stop offset="0.31" stopColor="#1A1A1A"/><stop offset="0.36" stopColor="#0C0C0C"/><stop offset="0.42" stopColor="#030303"/><stop offset="0.52" stopColor="#010101"/><stop offset="1"/>
</radialGradient>
<radialGradient id="stats-glow-5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1446.34 482.632) rotate(-180) scale(11.4555 11.5701)">
<stop offset="0.09" stopColor="white" stopOpacity="0.4"/><stop offset="0.1" stopColor="#EBEBEB" stopOpacity="0.6"/><stop offset="0.13" stopColor="#BBBBBB" stopOpacity="0.7"/><stop offset="0.17" stopColor="#8E8E8E"/><stop offset="0.2" stopColor="#686868"/><stop offset="0.23" stopColor="#484848"/><stop offset="0.27" stopColor="#2E2E2E"/><stop offset="0.31" stopColor="#1A1A1A"/><stop offset="0.36" stopColor="#0C0C0C"/><stop offset="0.42" stopColor="#030303"/><stop offset="0.52" stopColor="#010101"/><stop offset="1"/>
</radialGradient>
</defs>
</svg>
`;

function createEndpointMarker(x: number, y: number, radius: number) {
    const group = document.createElementNS(SVG_NS, "g");
    group.classList.add("statistics-endpoint");

    const glow = document.createElementNS(SVG_NS, "circle");
    glow.setAttribute("cx", String(x));
    glow.setAttribute("cy", String(y));
    glow.setAttribute("r", String(radius));
    // Plain, opaque-color + fill-opacity instead of a url(#gradient)
    // reference: the referenced <radialGradient> lives in a separately
    // dangerouslySetInnerHTML-injected SVG string, and cross-referencing it
    // from these imperatively created circles was resolving to the SVG
    // fallback for an unresolvable paint server - i.e. solid black - rather
    // than the intended light glow.
    glow.setAttribute("fill", "#F0F2FF");
    glow.setAttribute("fill-opacity", "0.35");

    const core = document.createElementNS(SVG_NS, "circle");
    core.setAttribute("cx", String(x));
    core.setAttribute("cy", String(y));
    core.setAttribute("r", String(radius * 0.35));
    core.setAttribute("fill", "#F0F2FF");

    group.appendChild(glow);
    group.appendChild(core);
    return group;
}

const StatisticsVisual = () => {
    const starsRef = useRef<HTMLDivElement>(null);
    const earthImgRef = useRef<HTMLDivElement>(null);
    const routesRef = useRef<HTMLDivElement>(null);
    const earthLoadedRef = useRef(false);
    const onEarthReadyRef = useRef<(() => void) | null>(null);

    const handleEarthLoad = () => {
        earthLoadedRef.current = true;
        onEarthReadyRef.current?.();
    };

    useLayoutEffect(() => {
        const earthImg = earthImgRef.current;
        const routesRoot = routesRef.current;
        const stars = starsRef.current;

        if (!earthImg || !routesRoot || !stars) return;

        const svgRoot = routesRoot.querySelector<SVGSVGElement>(":scope > svg");
        const defs = svgRoot?.querySelector<SVGDefsElement>(":scope > defs") ?? null;
        const endpointsGroup = routesRoot.querySelector<SVGGElement>(
            ":scope > svg > g.statistics-endpoints",
        );
        const routes = routesRoot.querySelectorAll<SVGPathElement>(
            ":scope > svg > g:not(.statistics-endpoints) > path",
        );

        if (!svgRoot || !defs || !endpointsGroup) return;

        // Guard against leftover markers/masks from a prior run of this
        // effect (React StrictMode double-invokes effects in dev, and this
        // effect mutates the DOM directly rather than through gsap, so
        // nothing else clears them).
        endpointsGroup.replaceChildren();
        defs.querySelectorAll("mask[id^='statistics-route-mask-']").forEach((mask) => mask.remove());
        routes.forEach((path) => path.removeAttribute("mask"));

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const routeLengths = Array.from(routes).map((path) => path.getTotalLength());

        // Build endpoint markers from each path's real start/end coordinates
        // (same coordinate space as the lines themselves), so the glow dots
        // always land exactly where a route begins or ends.
        //
        // Each route keeps its authored dash pattern at all times (so it
        // always reads as a dashed line, never a solid stroke) and is
        // revealed through a per-path <mask>. The mask's own path is what
        // gets the classic dashoffset "draw" treatment - animating the mask
        // instead of the visible stroke sweeps the reveal boundary along the
        // route while the dashes underneath stay put.
        const startMarkers: SVGGElement[] = [];
        const endMarkers: SVGGElement[] = [];
        const maskPaths: SVGPathElement[] = [];
        routes.forEach((path, i) => {
            const length = routeLengths[i];
            const strokeWidth = parseFloat(path.getAttribute("strokeWidth") ?? "1");
            const radius = Math.max(4, strokeWidth * 6);
            const start = path.getPointAtLength(0);
            const end = path.getPointAtLength(length);

            const startMarker = createEndpointMarker(start.x, start.y, radius);
            const endMarker = createEndpointMarker(end.x, end.y, radius * 1.2);
            endpointsGroup.appendChild(startMarker);
            endpointsGroup.appendChild(endMarker);
            startMarkers.push(startMarker);
            endMarkers.push(endMarker);

            const maskId = `statistics-route-mask-${i}`;
            const mask = document.createElementNS(SVG_NS, "mask");
            mask.setAttribute("id", maskId);
            mask.setAttribute("maskUnits", "userSpaceOnUse");

            const maskPath = document.createElementNS(SVG_NS, "path");
            maskPath.setAttribute("d", path.getAttribute("d") ?? "");
            maskPath.setAttribute("stroke", "#fff");
            maskPath.setAttribute("strokeWidth", String(strokeWidth * 4));
            maskPath.setAttribute("strokeLinecap", "round");
            maskPath.setAttribute("fill", "none");
            maskPath.setAttribute("stroke-dasharray", `${length} ${length}`);
            maskPath.setAttribute("stroke-dashoffset", String(length));

            mask.appendChild(maskPath);
            defs.appendChild(mask);
            path.setAttribute("mask", `url(#${maskId})`);
            maskPaths.push(maskPath);
        });

        const allMarkers = [...startMarkers, ...endMarkers];

        let cancelled = false;
        let hasStarted = false;
        let enterTimer: ReturnType<typeof setTimeout> | null = null;
        const section = routesRoot.closest("section");

        // Guard against a refresh landing mid-page (scroll restoration):
        // ScrollTrigger's initial refresh would otherwise see the section
        // already past "top 70%" and fire onEnter immediately, animating
        // before the user ever settles there. Only commit to the reveal
        // once the section has stayed in view for 500ms; if the browser
        // then jumps back to the top before that, onLeaveBack cancels the
        // pending start so it fires normally once the user actually
        // scrolls down to it.
        const ENTER_DWELL_MS = 500;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(routes, { opacity: 1 });
                gsap.set(maskPaths, { strokeDashoffset: 0 });
                gsap.set(allMarkers, { scale: 1, opacity: 1 });
                return;
            }

            gsap.set(routes, { opacity: 0 });
            gsap.set(allMarkers, { scale: 0, opacity: 0, transformOrigin: "center" });

            // Lines + markers only ever start once the earth graphic has
            // actually finished loading (so routes never draw over a
            // blank/half-loaded earth); the earth and starfield themselves
            // stay visible throughout and are never part of this reveal.
            const startLinesTimeline = () => {
                if (cancelled) return;

                gsap.set(routes, { opacity: 1 });

                // Per route: the start dot pops in, then (after a short
                // lead) the line draws away from it, and the end dot only
                // pops in once the line actually reaches it - each route
                // staggered slightly behind the previous one.
                const LINE_STAGGER = 0.08;
                const LINE_LEAD = 0.12;
                const LINE_DURATION = 1.8;
                const MARKER_DURATION = 0.4;

                const tl = gsap.timeline();

                routes.forEach((_, i) => {
                    const t = i * LINE_STAGGER;

                    tl.to(
                        startMarkers[i],
                        { scale: 1, opacity: 1, duration: MARKER_DURATION, ease: "back.out(1.8)" },
                        t,
                    )
                        .to(
                            maskPaths[i],
                            { strokeDashoffset: 0, duration: LINE_DURATION, ease: "power2.inOut" },
                            t + LINE_LEAD,
                        )
                        .to(
                            endMarkers[i],
                            { scale: 1, opacity: 1, duration: MARKER_DURATION, ease: "back.out(1.8)" },
                            t + LINE_LEAD + LINE_DURATION,
                        );
                });

                // Once every route has fully drawn in, settle all markers
                // into a slow ambient pulse.
                tl.to(
                    allMarkers,
                    {
                        opacity: 0.55,
                        duration: 1.6,
                        ease: "sine.inOut",
                        stagger: {
                            each: 0.06,
                            repeat: -1,
                            yoyo: true,
                        },
                    },
                    ">-0.2",
                );
            };

            ScrollTrigger.create({
                trigger: section ?? routesRoot,
                start: "top 70%",
                onEnter: () => {
                    if (hasStarted) return;

                    enterTimer = setTimeout(() => {
                        enterTimer = null;
                        hasStarted = true;

                        if (earthLoadedRef.current) {
                            startLinesTimeline();
                        } else {
                            onEarthReadyRef.current = startLinesTimeline;
                        }
                    }, ENTER_DWELL_MS);
                },
                onLeaveBack: () => {
                    if (enterTimer) {
                        clearTimeout(enterTimer);
                        enterTimer = null;
                    }
                },
            });
        });

        return () => {
            cancelled = true;
            if (enterTimer) clearTimeout(enterTimer);
            ctx.revert();
        };
    }, []);

    return (
        <>
            {/* Starfield background */}
            <div
                ref={starsRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                <Image
                    src="/images/about/stats/stats-big-stars2.svg"
                    alt=""
                    fill
                    className="stats-twinkle-aa object-cover opacity-70 [animation:stats-twinkle-a_5s_ease-in-out_infinite]"
                />
                {/* <Image
                    src="/images/about/stats/stats-mini-stars.svg"
                    alt=""
                    fill
                    className="object-cover translate-y-1/2 opacity-20
        [animation:stars-twinkle-a_4s_ease-in-out_infinite]"
                />

                <Image
                    src="/images/about/stats/stats-mini-stars.svg"
                    alt=""
                    fill
                    className="object-cover translate-y-1/2 translate-x-[100px] scale-[0.8] opacity-20
        [animation:stars-twinkle-b_5.5s_ease-in-out_infinite]
        [animation-delay:-2s]"
                /> */}

                <Image
                    src="/images/about/stats/stats-mini-stars.svg"
                    alt=""
                    fill
                    className="object-cover translate-y-1/2 translate-x-[-100px] scale-[0.8] opacity-20
        [animation:stars-twinkle-c_6.5s_ease-in-out_infinite]
        [animation-delay:-4s]"
                />

            </div>

            {/* Glowing accent stars - inlined so mix-blend-mode reacts to the
                real navy background; kept outside any opacity/transform
                ancestor so the blend never gets isolated away (see comment
                on GLOW_STARS_SVG above). */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 [&>svg]:h-full [&>svg]:w-full"
                dangerouslySetInnerHTML={{ __html: GLOW_STARS_SVG }}
            />

            {/* Earth graphic - top half visible, resting on the bottom edge */}
            <div className="pointer-events-none absolute bottom-[-40px] left-1/2 z-[2] aspect-square w-[420px] -translate-x-1/2 translate-y-1/2 sm:w-[460px] lg:w-[640px] 2xl:w-[940px]">
                <div ref={earthImgRef} className="absolute inset-0 z-[1]">
                    <Image
                        src="/images/about/stats/stats-just-earth.svg"
                        alt=""
                        fill
                        aria-hidden="true"
                        className="object-contain opacity-20 scale-[0.822]"
                        onLoad={handleEarthLoad}
                    />
                </div>

                <div
                    ref={routesRef}
                    aria-hidden="true"
                    className="absolute inset-0 z-[2] [&>svg]:h-full [&>svg]:w-full"
                    dangerouslySetInnerHTML={{ __html: EARTH_ROUTES_SVG }}
                />
            </div>
        </>
    );
};

export default StatisticsVisual;
