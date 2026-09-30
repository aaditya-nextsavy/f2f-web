import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/schemas";
import { SITE_URL } from "@/lib/siteConfig";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Fairwinds Shipping Pvt Ltd",
  description:
    "Global freight forwarding and logistics solutions — FCL, LCL, customs clearance, project cargo, and more.",
  icons: {
    icon: [
      { url: "/images/favicons/favicon.ico", sizes: "any" },
      { url: "/images/favicons/favicon-192x192.svg", type: "image/svg+xml" },
      { url: "/images/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/favicons/android-chrome-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        rel: "icon",
        url: "/images/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        {/* Must run before first paint. SmoothScrollProvider always forces
            the page to the top on load, but it can only switch off the
            browser's own scroll restoration once React has hydrated - by
            then the browser has already jumped a refreshed page back to the
            old (mid-page, mostly white) position, and the provider then
            snaps it to the top: a visible white blink on every refresh.
            Turning restoration off here, synchronously in <head>, means the
            browser never makes that jump. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if("scrollRestoration" in history)history.scrollRestoration="manual";`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}