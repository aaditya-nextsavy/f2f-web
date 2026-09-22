import type { LegalSectionData } from "@/types/legal";

interface LegalContentProps {
    sections: LegalSectionData[];
}

export default function LegalContent({ sections }: LegalContentProps) {
    return (
        <section className="space-y-12 lg:spacy-y-[64px]">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="border-b border-dashed border-(--form-placeholder) py-8 first:pt-0 last:border-b-0 last:pb-0 lg:py-[48px]"
                        >
                            <h2 className="text-[28px] font-medium capitalize leading-[1.15] tracking-[-1px] text-(--color-primary) lg:text-[42px] lg:leading-[50px]">
                                {section.title}
                            </h2>

                            <div className="mt-[32px] text-[16px] leading-[26px] tracking-[-0.3px] text-(--color-primary)/80 lg:text-[18px] lg:leading-[28px] [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_p+p]:mt-4 [&_ul+p]:mt-4 [&_strong]:font-medium">
                                {section.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
