import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Header } from "@/components/layout/Header/Header";
import { PopupProvider } from "@/components/providers/PopupProvider";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer/Footer";
export default function NotFound() {
    return (
        <PopupProvider>
            <Header />

            <section className="relative isolate h-[100vh] xl:h-[120vh] w-full overflow-hidden bg-[#3f7fb3]">
                <Image
                    src="/images/common/404.png"
                    alt="A shipping container adrift at sea, marked 404"
                    fill
                    priority
                    className="object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-transparent" />

                <div className="relative z-10 mx-auto w-[calc(100%-48px)]  top-[20%] xl:top-[23%] text-center text-white">
                    <h1 className="text-balance text-[clamp(42px,4vw,84px)] font-extrabold tracking-[-3.5px] leading-[1.1]">
                        This Page Is Off Course
                    </h1>
                    <p className="mx-auto mt-[42px] max-w-[560px] text-[20px] leading-[20px] tracking-[-0.8px] text-white lg:text-[17px]">
                        We may not have found the page you&apos;re looking for, but your cargo is
                        always guided with care, visibility, and attention every step of the way.
                    </p>
                    <div className="mt-[28px] flex items-center justify-center">
                        <Button href="/" variant="yellow">
                            Go To Homepage
                            <FaArrowRight size={15} />
                        </Button>
                    </div>
                </div>
            </section>
            <div className="mt-[-42px] xl:mt-[-92px]">

            </div>
            <Footer />
        </PopupProvider>
    );
}
