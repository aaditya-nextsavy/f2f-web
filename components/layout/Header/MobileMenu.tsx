"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav, coreServices, additionalServices } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/icons";

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const allServices = [...coreServices, ...additionalServices];

  return (
    <div className="border-t border-(--indigo-border) bg-(--color-primary) lg:hidden ">
      <div
        data-lenis-prevent
        className="container flex flex-col gap-1 py-4 pb-[44px] h-[calc(100vh-70px)] overflow-scroll "
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
