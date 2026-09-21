"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { mainNav, coreServices, additionalServices, type NavLink } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon, ChevronRightIcon } from "@/components/icons";

type View = "root" | "services" | "core" | "other";

const parentOf: Record<View, View | null> = {
  root: null,
  services: "root",
  core: "services",
  other: "services",
};

const rowClass =
  "flex w-full items-center justify-between border-b border-white/20 py-4 text-left text-(length:--text-small) text-white";

function Panel({
  active,
  covered,
  title,
  children,
}: {
  active: boolean;
  covered: boolean;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div
      inert={!active}
      data-lenis-prevent
      className={`absolute inset-0 overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-in-out ${active ? "translate-x-0" : covered ? "-translate-x-full" : "translate-x-full"
        }`}
    >
      <div className="container pt-4">
        {title && (
          <p className="pt-3 text-[12px] font-semibold uppercase tracking-[0.4px] text-white">
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export function MobileMenu({
  open,
  onNavigate,
  onClosed,
}: {
  open: boolean;
  onNavigate: () => void;
  onClosed?: () => void;
}) {
  const [view, setView] = useState<View>("root");
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const visualOpen = open && entered;

  const isCovered = (panel: View) => {
    for (let node = parentOf[view]; node; node = parentOf[node]) {
      if (node === panel) return true;
    }
    return false;
  };

  const panelProps = (panel: View) => ({
    active: view === panel,
    covered: isCovered(panel),
  });

  const renderLinks = (links: NavLink[]) =>
    links.map((link) => (
      <Link key={link.label} href={link.href} onClick={onNavigate} className={rowClass}>
        {link.label}
        <ChevronRightIcon className="h-4 w-4 shrink-0" />
      </Link>
    ));

  return (
    <div
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && !open) onClosed?.();
      }}
      className={`border-t border-(--indigo-border) bg-(--color-primary) lg:hidden transition-transform duration-300 ease-in-out ${visualOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex h-[calc(100vh-70px)] flex-col overflow-hidden">
        {/* Shared back bar: stays put while the screens slide beneath it */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${parentOf[view] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden bg-black/20">
            <div className="container">
              <button
                type="button"
                tabIndex={parentOf[view] ? 0 : -1}
                onClick={() => {
                  const parent = parentOf[view];
                  if (parent) setView(parent);
                }}
                className="flex items-center gap-1 py-3 text-[13px] text-white"
              >
                <ChevronRightIcon className="h-3.5 w-3.5 rotate-180" />
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <Panel {...panelProps("root")}>
            <button type="button" onClick={() => setView("services")} className={`${rowClass} font-semibold`}>
              Services
              <ChevronRightIcon className="h-4 w-4 shrink-0" />
            </button>
            {mainNav.map((link) => (
              <Link key={link.href} href={link.href} onClick={onNavigate} className={rowClass}>
                {link.label}
                <ChevronRightIcon className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </Panel>

          <Panel {...panelProps("services")} title="Services">
            <button type="button" onClick={() => setView("core")} className={rowClass}>
              Core Service
              <ChevronDownIcon className="h-4 w-4 shrink-0" />
            </button>
            <button type="button" onClick={() => setView("other")} className={rowClass}>
              Other Service
              <ChevronDownIcon className="h-4 w-4 shrink-0" />
            </button>
          </Panel>

          <Panel {...panelProps("core")} title="Core Services">
            {renderLinks(coreServices)}
          </Panel>

          <Panel {...panelProps("other")} title="Other Services">
            {renderLinks(additionalServices)}
          </Panel>
        </div>

        <div className="container pb-11 pt-4">
          <Button variant="yellow" href="/contact" onClick={onNavigate} className="w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
