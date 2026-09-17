import FeatureCards from "./FeatureCard";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import type { WhyItWorksData } from "@/types/services";

type WhyItWorksProps = {
    data: WhyItWorksData;
};

const WhyItWorks = ({ data }: WhyItWorksProps) => {
    return (
        <section className="py-[42px] 2xl:py-[90px] bg-(--color-iceblue)">
            <div className="container mx-auto">
                <SectionTitle
                    label={data.sectiontitle.label}
                    title={data.sectiontitle.title}
                    titleClassName="lg:max-w-[50%] capitalize"
                />
            </div>

            <div className="mt-10 lg:mt-[60px]">
                <FeatureCards data={data.featureCards} />
            </div>
        </section>
    );
};

export default WhyItWorks;
