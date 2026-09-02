import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type Variant = "primary" | "white-secondary" | "outline-dark" | "yellow";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-transparent border text-white border-[#FFFFFF] text-inherit rounded-[50px] gap-[10px]  hover:bg-(--color-primary) px-7 py-4.5",
  "white-secondary":
    "border border-(--color-iceblue) text-(--color-iceblue) hover:bg-(--color-light-indigo) px-7 py-4.5 hover:text-(--color-iceblue) text-[16px] leading-[20px]",
  "outline-dark":
    "border border-(--blue-border) text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-white)",
  yellow: "bg-(--color-yellow) text-[16px] leading-[20px]  text-(--color-primary)  gap-[10px] hover:bg-(--color-yellow-hover) px-7 py-4.5",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-full) px-6 py-3 text-(length:--text-body) font-semibold transition-all duration-300";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps &
  Omit<LinkProps, "className"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${baseClass} ${variantClass[variant]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
