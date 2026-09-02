import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { PopupProvider } from "@/components/providers/PopupProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SmoothScrollProvider>
      <PopupProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </PopupProvider>
    </SmoothScrollProvider>
  );
}
