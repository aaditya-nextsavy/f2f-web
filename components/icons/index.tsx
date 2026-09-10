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

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
      <path
        d="M8 12.5L10.5 15L16 9"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AlertCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
      <path d="M12 7.5V13" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" />
      <circle cx="12" cy="16.25" r="1" fill="currentColor" />
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
      <path d="M13.0013 2.16602C7.01822 2.16602 2.16797 7.01626 2.16797 12.9993C2.16797 18.4066 6.12956 22.8883 11.3086 23.7011V16.1308H8.55793V12.9993H11.3086V10.6126C11.3086 7.89753 12.9259 6.39779 15.4005 6.39779C16.5857 6.39779 17.8255 6.60937 17.8255 6.60937V9.27539H16.4594C15.1137 9.27539 14.694 10.1105 14.694 10.9672V12.9993H17.6985L17.2183 16.1308H14.694V23.7011C19.873 22.8883 23.8347 18.4066 23.8347 12.9993C23.8347 7.01626 18.9844 2.16602 13.0013 2.16602Z" fill="currentColor" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9808 3.90234H22.1703L15.2022 11.6117L23.3996 22.1023H16.9811L11.9539 15.7398L6.20175 22.1023H3.01035L10.4634 13.8563L2.59961 3.90234H9.18103L13.7251 9.71794L18.9808 3.90234ZM17.8614 20.2543H19.6287L8.22072 5.65328H6.3242L17.8614 20.2543Z" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.33339 2.16765C4.33299 3.04982 3.79779 3.84366 2.98015 4.17485C2.16252 4.50604 1.22573 4.30844 0.611509 3.67524C-0.0027084 3.04202 -0.171687 2.09964 0.184243 1.29247C0.540183 0.485297 1.34995 -0.0254844 2.23172 0.000981448C3.40288 0.0361356 4.33392 0.995958 4.33339 2.16765ZM4.39839 5.93765H0.065054V19.5009H4.39839V5.93765ZM11.2451 5.93765H6.93339V19.5009H11.2017V12.3834C11.2017 8.41845 16.3692 8.05011 16.3692 12.3834V19.5009H20.6484V10.9101C20.6484 4.22598 13.0001 4.47515 11.2017 7.75762L11.2451 5.93765Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M14.114 2.16602C15.3332 2.16803 15.951 2.17449 16.4849 2.19038L16.6952 2.19725C16.938 2.20588 17.1777 2.21672 17.4666 2.23026C18.6194 2.28352 19.4058 2.46588 20.0964 2.73401C20.8104 3.00936 21.4135 3.3813 22.0156 3.98346C22.6169 4.58561 22.9889 5.19047 23.2651 5.90276C23.5323 6.59248 23.7147 7.37971 23.7689 8.53255C23.7818 8.82144 23.7922 9.06107 23.8007 9.304L23.8076 9.51426C23.8234 10.0481 23.8306 10.666 23.8329 11.8852L23.8338 12.693C23.8339 12.7916 23.8339 12.8935 23.8339 12.9986L23.8338 13.3042L23.8331 14.112C23.8311 15.3312 23.8247 15.9491 23.8088 16.4829L23.8018 16.6932C23.7933 16.9361 23.7824 17.1758 23.7689 17.4646C23.7156 18.6175 23.5323 19.4038 23.2651 20.0944C22.9898 20.8085 22.6169 21.4116 22.0156 22.0137C21.4135 22.615 20.8077 22.9869 20.0964 23.2631C19.4058 23.5304 18.6194 23.7127 17.4666 23.7669C17.1777 23.7798 16.938 23.7903 16.6952 23.7987L16.4849 23.8056C15.951 23.8215 15.3332 23.8286 14.114 23.831L13.3062 23.8319C13.2075 23.8319 13.1056 23.8319 13.0006 23.8319H12.695L11.8871 23.8311C10.6679 23.8292 10.05 23.8227 9.51621 23.8068L9.30595 23.7999C9.06302 23.7913 8.82338 23.7804 8.5345 23.7669C7.38165 23.7137 6.59624 23.5304 5.90471 23.2631C5.19151 22.9879 4.58755 22.615 3.9854 22.0137C3.38325 21.4116 3.01221 20.8058 2.73596 20.0944C2.46784 19.4038 2.28638 18.6175 2.23221 17.4646C2.21934 17.1758 2.20884 16.9361 2.20034 16.6932L2.19352 16.4829C2.17768 15.9491 2.17045 15.3312 2.16811 14.112L2.16797 11.8852C2.16998 10.666 2.17643 10.0481 2.19232 9.51426L2.1992 9.304C2.20784 9.06107 2.21867 8.82144 2.23221 8.53255C2.28547 7.3788 2.46784 6.59338 2.73596 5.90276C3.0113 5.18957 3.38325 4.58561 3.9854 3.98346C4.58755 3.3813 5.19242 3.01026 5.90471 2.73401C6.59534 2.46588 7.38075 2.28442 8.5345 2.23026C8.82338 2.2174 9.06302 2.2069 9.30595 2.1984L9.51621 2.19158C10.05 2.17572 10.6679 2.1685 11.8871 2.16616L14.114 2.16602ZM13.0006 7.58192C10.0074 7.58192 7.58388 10.0081 7.58388 12.9986C7.58388 15.9917 10.01 18.4152 13.0006 18.4152C15.9937 18.4152 18.4172 15.9891 18.4172 12.9986C18.4172 10.0054 15.991 7.58192 13.0006 7.58192ZM13.0006 9.74859C14.7955 9.74859 16.2506 11.2031 16.2506 12.9986C16.2506 14.7935 14.796 16.2486 13.0006 16.2486C11.2056 16.2486 9.75054 14.7941 9.75054 12.9986C9.75054 11.2036 11.2051 9.74859 13.0006 9.74859ZM18.6881 5.95692C17.9413 5.95692 17.3339 6.56349 17.3339 7.31017C17.3339 8.05686 17.9405 8.66436 18.6881 8.66436C19.4347 8.66436 20.0422 8.0578 20.0422 7.31017C20.0422 6.56349 19.4337 5.95599 18.6881 5.95692Z" fill="currentColor" />
    </svg>
  );
}
