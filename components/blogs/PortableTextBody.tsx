import Image from "next/image";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import { INTRODUCTION_ANCHOR_ID, type SanityImageWithAlt } from "@/sanity/lib/mappers";

const paragraphClass =
    "text-[16px] leading-[26px] text-(--color-primary)/80 lg:text-[18px] lg:leading-[28px] lg:tracking-[-0.3px]";

function isSectionHeading(block: unknown): block is PortableTextBlock {
    const node = block as PortableTextBlock;
    return node?._type === "block" && node.style === "h2";
}

interface PortableTextBodyProps {
    value: unknown[];
}

const PortableTextBody = ({ value }: PortableTextBodyProps) => {
    const headingKeys = value.filter(isSectionHeading).map((block) => block._key);
    const firstBlock = value[0];
    const introKey =
        firstBlock !== undefined && !isSectionHeading(firstBlock)
            ? (firstBlock as PortableTextBlock)._key
            : undefined;

    const components: PortableTextComponents = {
        block: {
            h2: ({ children, value: block }) => {
                const isFirst = headingKeys[0] === block._key;
                const showDivider = !isFirst || introKey !== undefined;

                return (
                    <>
                        {showDivider && (
                            <div
                                className="mt-[32px] mb-[32px] lg:mt-[48px] lg:mb-[48px] h-px w-full opacity-30"
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(to right, #11227A 0 5px, transparent 5px 10px)",
                                }}
                            />
                        )}
                        <h2
                            id={block._key}
                            className="scroll-mt-28 text-[26px] font-medium capitalize leading-[1.15] tracking-[-0.5px] text-(--color-primary) lg:text-[50px] lg:leading-[42px] lg:tracking-[-1px]"
                        >
                            {children}
                        </h2>
                    </>
                );
            },
            h3: ({ children, value: block }) => (
                <h3
                    id={block._key}
                    className="scroll-mt-32 text-[20px] font-medium leading-[1.3] text-(--color-primary) lg:text-[26px]"
                >
                    {children}
                </h3>
            ),
            h4: ({ children, value: block }) => (
                <h4
                    id={block._key}
                    className="scroll-mt-32 mt-6 flex items-start gap-3 text-[17px] font-medium leading-[1.35] text-(--color-primary) lg:text-[20px]"
                >
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-(--color-indigo)" />
                    {children}
                </h4>
            ),
            h5: ({ children, value: block }) => (
                <h5
                    id={block._key}
                    className="scroll-mt-32 mt-5 text-[16px] font-medium leading-[1.4] text-(--color-primary) lg:text-[18px]"
                >
                    {children}
                </h5>
            ),
            h6: ({ children, value: block }) => (
                <h6
                    id={block._key}
                    className="scroll-mt-32 mt-4 text-[14px] font-semibold uppercase tracking-[0.4px] leading-[1.4] text-(--color-primary)/80 lg:text-[15px]"
                >
                    {children}
                </h6>
            ),
            normal: ({ children, value: block }) => (
                <p
                    id={block._key === introKey ? INTRODUCTION_ANCHOR_ID : undefined}
                    className={`scroll-mt-28 mt-5 mb-4 sm:mb-0 ${paragraphClass}`}
                >
                    {children}
                </p>
            ),
        },
        list: {
            bullet: ({ children }) => <ul className="mt-5 space-y-3">{children}</ul>,
            number: ({ children }) => <ol className="mt-5 space-y-3">{children}</ol>,
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="flex items-start gap-3">
                    <Image
                        src="/images/common/blue-tick.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="shrink-0 my-auto"
                    />
                    <span className={paragraphClass}>{children}</span>
                </li>
            ),
            number: ({ children, index }) => (
                <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-(--color-indigo) text-[12px] font-semibold text-white">
                        {index + 1}
                    </span>
                    <span className={paragraphClass}>{children}</span>
                </li>
            ),
        },
        marks: {
            link: ({ children, value: link }) => {
                const href = (link as { href?: string })?.href ?? "#";
                return (
                    <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="underline underline-offset-2"
                    >
                        {children}
                    </a>
                );
            },
        },
        types: {
            image: ({ value: image }) => {
                const img = image as SanityImageWithAlt;
                if (!img?.asset) return null;

                return (
                    <div className="relative my-8 aspect-[16/9] w-full overflow-hidden rounded-[16px]">
                        <Image
                            src={urlFor(img as SanityImageSource).width(1200).url()}
                            alt={img.alt ?? ""}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 66vw, 100vw"
                        />
                    </div>
                );
            },
        },
    };

    return <PortableText value={value} components={components} />;
};

export default PortableTextBody;
