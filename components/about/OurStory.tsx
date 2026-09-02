import SectionTitle from "../common/SectionTitle/SectionTitle"
import type { SectionTitleData, ImageData } from "@/types/about";
import Image from "next/image";

interface OurStoryProps {
    title: SectionTitleData;
    image: ImageData;
}

const OurStory = ({ title, image }: OurStoryProps) => {

    return (
        <section className="mt-[-10px]">

            <div className="container relative mx-auto text-center">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    className="mx-auto  text-start lg:text-center"
                    titleClassName="text-[24px]! leading-[30px]! md:text-[32px] lg:text-[34px]! lg:leading-[42px]! text-balance capitalize mt-1!"
                />

                <div className="hidden lg:block w-full py-6 relative overflow-hidden lg:rounded-[48px] mt-[40px] lg:mt-[60px] h-auto aspect-53/36 lg:aspect-[168/59]">

                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                    // className="object-contain"
                    />

                </div>

            </div>
            <div className=" lg:hidden w-full py-6 relative overflow-hidden lg:rounded-[48px] mt-[40px] lg:mt-[60px] h-auto aspect-53/36 lg:aspect-[168/59]">

                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                // className="object-contain"
                />

            </div>

        </section>
    )
}

export default OurStory