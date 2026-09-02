import type { LegalSectionData } from "@/types/legal";

interface LegalContentProps {
    sections: LegalSectionData[];
}

export default function LegalContent({ sections }: LegalContentProps) {
    return (
        <section className="py-12 lg:py-[64px]">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="border-b border-dashed border-(--form-placeholder) py-12 first:pt-0 last:border-b-0 last:pb-0 lg:py-[64px]"
                        >
                            <h2 className="text-[28px] font-medium capitalize leading-[1.15] tracking-[-1px] text-(--color-primary) lg:text-[56px] lg:leading-[60px]">
                                {section.title}
                            </h2>

                            <div className="mt-[42px] text-[16px] leading-[26px] tracking-[-0.3px] text-(--color-primary)/80 lg:text-[18px] lg:leading-[28px] [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5">
                                {section.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
