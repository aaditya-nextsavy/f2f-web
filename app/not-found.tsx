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
                    src="/images/common/404-main.png"
                    alt="A shipping container adrift at sea, marked 404"
                    fill
                    priority
                    className="object-cover hidden lg:block object-top"
                />

                <Image
                    src="/images/common/404-mobile.png"
                    alt="A shipping container adrift at sea, marked 404"
                    fill
                    priority
                    className="object-cover object-top block! lg:hidden!"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-transparent" />

                <div className="relative z-10 mx-auto w-[calc(100%-48px)]  top-[150px] lg:top-[20%] xl:top-[23%] text-center text-white">
                    <h1 className=" text-[clamp(34px,4vw,84px)] font-extrabold px-3 lg:px-0  lg:font-extrabold tracking-[-0.3px] leading-[1.1] lg:leading-[1.1]">
                        This Page Is Off Course
                    </h1>
                    <p className="mx-auto mt-6 lg:mt-[25px] max-w-[760px] text-[16px] leading-[24px] font-semibold tracking-[-0.3px] text-white lg:text-[20px] lg:leading-[24px] lg:tracking-[-0.8px]">
                        We may not have found the page you&apos;re looking for, but your cargo is
                        always guided with care, visibility, and attention every step of the way.
                    </p>
                    <div className="mt-[28px] flex items-center justify-center">
                        <Button href="/" variant="yellow" className="w-full sm:w-max">
                            Go To Homepage
                            <FaArrowRight size={15} />
                        </Button>
                    </div>
                </div>
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        z-30
                        h-[170px]
                        bg-[linear-gradient(177.18deg,rgba(0,0,0,0)_-8.18%,rgba(17,34,122,0.13)_48.86%,rgba(17,34,122,0.69)_72.06%,#11227A_92.36%)]
                        sm:h-[190px]
                        lg:h-[220px]
                    "
                />

            </section>
            <div className="mt-[-42px] xl:mt-[-92px]">

            </div>
            <Footer />
        </PopupProvider>
    );
}
