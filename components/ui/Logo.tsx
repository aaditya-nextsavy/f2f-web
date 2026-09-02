import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const colorClass = variant === "light" ? "text-(--color-white)" : "text-(--color-primary)";

  return (
    <Link
      href="/"
      aria-label="Fairwinds Shipping Pvt Ltd — Home"
      className={`inline-flex items-center gap-2.5 ${colorClass} ${className}`}
    >
      <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect x="0.5" y="0.5" width="35" height="35" rx="8" stroke="currentColor" strokeWidth={1.25} opacity={0.4} />
        <path
          d="M7 15C9 13 11 13 13 15C15 17 17 17 19 15C21 13 23 13 25 15C27 17 29 17 29 17"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M7 21C9 19 11 19 13 21C15 23 17 23 19 21C21 19 23 19 25 21C27 23 29 23 29 23"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-(length:--text-large) font-bold tracking-wide whitespace-nowrap">FAIRWINDS</span>
        <span className="text-(length:--text-xs) font-medium tracking-[0.18em] whitespace-nowrap opacity-80">
          SHIPPING PVT LTD
        </span>
      </span>
    </Link>
  );
}
