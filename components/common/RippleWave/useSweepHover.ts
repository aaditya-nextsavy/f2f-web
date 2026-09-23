"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hover state for the ripple sweep. Once the sweep starts it always plays
 * through in full: leaving before `sweepMs` has elapsed defers the reverse
 * until the entrance has finished, so a quick pass over the section never
 * cuts the animation off halfway.
 */
export function useSweepHover(sweepMs: number) {
    const [isHovered, setIsHovered] = useState(false);
    const hoveredRef = useRef(false);
    const enteredAt = useRef(0);
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const onEnter = useCallback(() => {
        clearTimeout(leaveTimer.current);
        if (hoveredRef.current) return;
        hoveredRef.current = true;
        enteredAt.current = Date.now();
        setIsHovered(true);
    }, []);

    const onLeave = useCallback(() => {
        clearTimeout(leaveTimer.current);
        const remaining = sweepMs - (Date.now() - enteredAt.current);
        const release = () => {
            hoveredRef.current = false;
            setIsHovered(false);
        };
        if (remaining > 0) {
            leaveTimer.current = setTimeout(release, remaining);
        } else {
            release();
        }
    }, [sweepMs]);

    useEffect(() => () => clearTimeout(leaveTimer.current), []);

    return { isHovered, onEnter, onLeave };
}
