"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

interface TocItem {
    id: string;
    label: string;
}

interface TableOfContentsProps {
    items: TocItem[];
}

const truncateLabel = (text: string, maxLength = 45) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength).trimEnd()}...`;
};

const TableOfContents = ({ items }: TableOfContentsProps) => {
    const [activeId, setActiveId] = useState(items[0]?.id);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const headings = items
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: "-120px 0px -70% 0px" }
        );

        headings.forEach((heading) => observer.observe(heading));
        return () => observer.disconnect();
    }, [items]);

    if (items.length === 0) return null;

    return (
        <nav className="rounded-[24px] bg-(--color-iceblue) p-6">
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={isOpen}
            >
                <span className="text-[18px] font-medium text-(--color-primary)">Table Of Content</span>
                <FaChevronUp
                    size={14}
                    className={`text-(--color-primary) transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}
                />
            </button>

            <div
                className="my-4 h-px w-full opacity-40"
                style={{
                    backgroundImage: "repeating-linear-gradient(to right, #11227A 0 5px, transparent 5px 10px)",
                }}
            />

            {isOpen && (
                <ul className="space-y-4">
                    {items.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <li key={item.id}>
                                <a href={`#${item.id}`} title={item.label} className="group flex items-center gap-3">
                                    <span
                                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${isActive ? "border-(--color-indigo)" : "border-(--color-indigo)/30"
                                            }`}
                                    >
                                        <span
                                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${isActive ? "bg-(--color-indigo)" : "bg-transparent"
                                                }`}
                                        />
                                    </span>

                                    <span
                                        className={`text-[15px] leading-[22px] transition-colors duration-300 ${isActive
                                            ? "font-semibold text-(--color-primary)"
                                            : "text-(--color-primary)/50 group-hover:text-(--color-primary)"
                                            }`}
                                    >
                                        {truncateLabel(item.label)}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default TableOfContents;
