import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}