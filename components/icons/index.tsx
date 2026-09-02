import type { SVGProps } from "react";

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 4H9.5L11 8L8.75 9.5C9.65 11.5 11 12.85 13 13.75L14.5 11.5L18.5 13V16C18.5 17.1 17.6 18 16.5 18C10.7 17.6 6.4 13.3 6 7.5C6 6.4 6.5 4 6.5 4Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M4.5 7L12 13L19.5 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21C12 21 18 15.5 18 10.5C18 7 15.3 4 12 4C8.7 4 6 7 6 10.5C6 15.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export function ContainerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <rect
        x="6"
        y="10"
        width="28"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth={1.75}
      />
      <path
        d="M6 16H34M6 24H34M14 10V30M22 10V30M30 10V30"
        stroke="currentColor"
        strokeWidth={1.25}
        opacity={0.6}
      />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5H16.5V5H14C11.8 5 10 6.8 10 9V11H8V14.5H10V21H13.5V14.5H16L16.5 11H13.5V9C13.5 8.7 13.7 8.5 14 8.5Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.6 10.6L19.4 4H17.9L12.95 9.7L9 4H4l6.1 8.8L4 20h1.5l5.25-6L15 20h5L13.6 10.6ZM11.7 13.1l-0.6-0.85L6.3 5.1h2.3l4 5.65 0.6 0.85 5.15 7.3h-2.3l-4.35-6.15Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H4.56V19H6.94V8.5ZM5.75 7.25C6.53 7.25 7.06 6.72 7.06 6.03C7.06 5.34 6.53 4.8 5.77 4.8C5.01 4.8 4.47 5.34 4.47 6.03C4.47 6.72 5 7.25 5.75 7.25ZM11.19 19V13.3C11.19 12.5 11.72 11.9 12.5 11.9C13.28 11.9 13.69 12.5 13.69 13.3V19H16.06V12.9C16.06 10.7 14.86 9.5 13.19 9.5C11.86 9.5 11.19 10.3 11.19 10.3V8.5H8.81C8.81 8.5 8.84 9.2 8.81 19H11.19Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}
