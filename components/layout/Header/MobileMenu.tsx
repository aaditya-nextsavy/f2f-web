"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav, coreServices, additionalServices } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/icons";

export function MobileMenu({
  open,
  onNavigate,
  onClosed,
}: {
  open: boolean;
  onNavigate: () => void;
  onClosed?: () => void;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const allServices = [...coreServices, ...additionalServices];

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const visualOpen = open && entered;

  return (
    <div
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && !open) onClosed?.();
      }}
      className={`border-t border-(--indigo-border) bg-(--color-primary) lg:hidden transition-transform duration-300 ease-in-out ${visualOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div
        data-lenis-prevent
        className="container flex flex-col gap-1 py-4 pb-[44px] h-[calc(100vh-70px)] overflow-x-hidden overflow-y-scroll "
      >
        <button
          type="button"
          onClick={() => setServicesOpen((open) => !open)}
          aria-expanded={servicesOpen}
          className="flex items-center justify-between py-3 text-(length:--text-body) font-medium text-white border-b border-white/10"
        >
          Services
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
          />
        </button>
        {servicesOpen && (
          <div className="mb-2 flex flex-col gap-1 pl-4 ">
            {allServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                onClick={onNavigate}
                className="py-2 text-(length:--text-small) text-white "
              >
                {service.label}
              </Link>
            ))}
          </div>
        )}

        {mainNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className="py-3 text-(length:--text-body) font-medium text-white  border-b border-white/10"
          >
            {link.label}
          </Link>
        ))}

        <Button variant="yellow" href="/contact" onClick={onNavigate} className="mt-11 mt-3 w-full">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
