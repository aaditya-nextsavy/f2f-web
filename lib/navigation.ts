export type NavLink = {
  label: string;
  href: string;
  iconSrc?: string;
  alt?: string;
  newPage?: boolean;
};

export const coreServices: NavLink[] = [
  { label: "Full Container Load (FCL)", href: "/fcl-sea-freight" },
  { label: "Less than Container Load (LCL)", href: "/lcl-sea-freight" },
];

export const additionalServices: NavLink[] = [
  { label: "Customs clearance", href: "/other-services#customs-clearance" },
  { label: "Project Cargo", href: "/other-services#project-cargo" },
  { label: "Break bulk", href: "/other-services#break-bulk" },
  { label: "Air freight", href: "/other-services#air-freight" },
  { label: "Transportation (Road/Rail)", href: "/other-services#transportation" },
  { label: "Warehousing & distribution", href: "/other-services#warehousing-distribution" },
  { label: "Multimodal transport operator", href: "/other-services#multimodal-transport-operator" },
];

export const mainNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Sea Freight Services",
    links: [
      { label: "FCL- Sea Freight", href: "/fcl-sea-freight", iconSrc: "/images/common/menu-fcl.png", alt: "FCL- Sea Freight" },
      { label: "LCL- Sea Freight", href: "/lcl-sea-freight", iconSrc: "/images/common/menu-lcl.png", alt: "LCL- Sea Freight" },
    ],
  },
  {
    title: "Other Services",
    links: additionalServices,
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blogs", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy policy", href: "/privacy-policy", newPage: true },
      { label: "Terms & Condition", href: "/terms-and-conditions", newPage: true },
    ],
  },
];

export const contactInfo = {
  phone: "+91 7940097107",
  phoneHref: "tel:+917940097107",
  email: "info@fairwindsshipping.com",
  emailHref: "mailto:info@fairwindsshipping.com",
  mapsHref: "#",
};

export const socialLinks: NavLink[] = [
  { label: "Facebook", href: "#", newPage: true },
  { label: "Twitter", href: "#", newPage: true },
  { label: "LinkedIn", href: "#", newPage: true },
  { label: "Instagram", href: "#", newPage: true },
];

export const serviceOptions: string[] = [...coreServices, ...additionalServices].map(
  (service) => service.label
);
