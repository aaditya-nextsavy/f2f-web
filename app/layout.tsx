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