"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) return;

        // The browser's own scroll restoration (on refresh, and on
        // back/forward navigation) races with Lenis: it silently moves the
        // native scrollTop behind Lenis's back, at whatever moment the
        // browser feels the page is "tall enough" to restore to - which,
        // on a page with async/lazy content, can happen well after Lenis
        // has already initialized (or forced its own scroll position via
        // the effect below). Lenis's virtual scroll position never learns
        // about that native jump, so the next wheel tick computes its
        // target from the stale internal position and snaps the page back
        // - which reads as scrolling being "blocked" past whatever height
        // the browser had restored to. Taking restoration over ourselves
        // (we already force scroll-to-top/hash on every navigation below)
        // removes the race entirely.
        const previousScrollRestoration = window.history.scrollRestoration;
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const lenis = new Lenis({
            autoRaf: false,
            anchors: true,
        });
        lenisRef.current = lenis;

        // Keep GSAP's ScrollTrigger (used by Statistics/HowWeWork) in sync
        // with Lenis's virtual scroll position instead of the native one.
        lenis.on("scroll", ScrollTrigger.update);

        const update = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            lenisRef.current = null;
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = previousScrollRestoration;
            }
        };
    }, []);

    useEffect(() => {
        // Next.js resets the real scroll position on every client-side
        // route change via the native scrollIntoView() (see the "Scrolling"
        // section of next/link docs), completely bypassing Lenis. Lenis
        // keeps its own separate scroll-position state, so on the next raf
        // tick it overwrites that reset with wherever it thought the *old*
        // page was scrolled to - the page briefly snaps back or ignores
        // input until Lenis resyncs on its own. Force that resync here
        // instead of waiting for it, and refresh ScrollTrigger so every
        // trigger on the new page is measured from the correct scroll.
        // If the URL carries a hash (e.g. footer/header links into
        // /other-services#air-freight), resync to that target instead of
        // the top so the linked section is actually where we land. This is
        // keyed on `pathname` (rather than firing from the history patch
        // below) because it must run after React has committed the new
        // page's DOM - only then does the hash target actually exist.
        const hash = window.location.hash;
        const hasHashTarget = hash && document.getElementById(hash.slice(1));

        lenisRef.current?.scrollTo(hasHashTarget ? hash : 0, { immediate: true });
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event("app:locationchange"));
    }, [pathname]);

    useEffect(() => {
        // Next's <Link> always navigates through history.pushState/
        // replaceState, even for a hash-only link to a section on the page
        // you're already on (e.g. clicking another "Other Services" link
        // while already on /other-services). That never changes the
        // pathname, so the effect above wouldn't otherwise re-run, and it
        // never fires a native "hashchange" either, so anything else on the
        // page (like the tab state in ServicesFiles) that listens for
        // "hashchange" misses it too. Patch the two history methods to
        // resync scroll and broadcast a custom event other components can
        // listen for instead.
        //
        // The router also calls pushState/replaceState on its own, for
        // plenty of things that have nothing to do with a hash link (cache
        // bookkeeping, scroll-restoration state, etc.) - those fire
        // constantly while just browsing. Only resync when the hash itself
        // actually changed (and the pathname didn't, since a real page
        // navigation's target elements don't exist yet at this point and
        // the effect above handles that once the new page has committed).
        // Without that guard, one of those unrelated internal calls would
        // periodically force Lenis's scroll back to the top mid-browse -
        // which is exactly what looked like a random "scroll block".
        let lastHash = window.location.hash;

        const syncScroll = () => {
            const hash = window.location.hash;
            const hasHashTarget = hash && document.getElementById(hash.slice(1));

            lenisRef.current?.scrollTo(hasHashTarget ? hash : 0, { immediate: true });
            ScrollTrigger.refresh();
        };

        const notify = () => {
            syncScroll();
            window.dispatchEvent(new Event("app:locationchange"));
        };

        const maybeNotify = () => {
            const hash = window.location.hash;
            if (hash === lastHash) return;
            lastHash = hash;
            queueMicrotask(notify);
        };

        const { pushState, replaceState } = window.history;

        function patched(this: History, ...args: Parameters<typeof pushState>) {
            const before = window.location.pathname;
            const result = pushState.apply(this, args);
            if (window.location.pathname === before) maybeNotify();
            return result;
        }

        function patchedReplace(this: History, ...args: Parameters<typeof replaceState>) {
            const before = window.location.pathname;
            const result = replaceState.apply(this, args);
            if (window.location.pathname === before) maybeNotify();
            return result;
        }

        window.history.pushState = patched;
        window.history.replaceState = patchedReplace;
        window.addEventListener("popstate", maybeNotify);

        return () => {
            window.history.pushState = pushState;
            window.history.replaceState = replaceState;
            window.removeEventListener("popstate", maybeNotify);
        };
    }, []);

    return children;
}
