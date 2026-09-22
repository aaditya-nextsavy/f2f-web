import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import ImageCard from "@/components/common/ImageCard";
import type { SectionTitleData, ServiceCardData } from "@/types/home";

interface SeaFreightProps {
    title: SectionTitleData;
    data: ServiceCardData[];
}

const SeaFreight = ({ title, data }: SeaFreightProps) => {
    return (
        <section className="lg:py-4">
            <div className="container mx-auto">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    description={title.description}
                    className=" xl:max-w-[60%] text-balance"
                />

                <div className="mt-8 grid grid-cols-1 gap-4 2xl:mt-[120px] lg:grid-cols-2">
                    {data.map((card) => (
                        <ImageCard
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            variant={card.variant}
                            link={card.link}
                            alt={card.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeaFreight;
