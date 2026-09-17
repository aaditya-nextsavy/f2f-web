import Script from "next/script";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { PopupProvider } from "@/components/providers/PopupProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SmoothScrollProvider>
      <PopupProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </PopupProvider>

      {/* Contact forms live both on /contact and in the Footer on every
          page, so the widget is loaded here rather than per-form. */}
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
    </SmoothScrollProvider>
  );
}
