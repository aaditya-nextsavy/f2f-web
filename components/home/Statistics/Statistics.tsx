import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import type { SectionTitleData, StatData } from "@/types/home";
import StatisticsVisual from "./StatisticsVisual";

interface StatisticsProps {
    title: SectionTitleData;
    data: StatData[];
}

const Statistics = ({ title, data }: StatisticsProps) => {
    return (
        <section className="relative overflow-hidden bg-(--color-primary)">
            <StatisticsVisual />

            <div className="container relative z-10 mx-auto pb-[190px] pt-[60px] text-center sm:pb-[280px] lg:pb-[500px] lg:pt-[92px]">
                <SectionTitle
                    label={title.label}
                    title={title.title}
                    theme="inverted"
                    className="mx-auto max-w-[950px] text-center"
                    titleClassName="text-[32px] md:text-[40px] lg:text-[48px] text-balance"
                />

                <div className="mt-10 flex flex-col items-center gap-[10px] sm:flex-row sm:items-start sm:justify-center sm:gap-[16px] lg:mt-16 lg:gap-[42px] divide-y  divide-white/8 sm:divide-white/0">
                    {data.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="relative sm:pl-[16px] lg:pl-[42px] w-full lg:w-fit"
                        >
                            {index > 0 && (
                                <div className="absolute left-0 top-1/2 hidden h-16 w-[3px] -translate-y-1/2 bg-white/[0.08] sm:block lg:h-20" />
                            )}

                            <div className="text-[40px] leading-none tracking-[-1px] text-(--color-white) sm:text-[48px] lg:text-[72px] lg:leading-[82px]">
                                {stat.value}
                            </div>

                            <div className="mt-3 text-[14px] text-(--color-white)/60 lg:text-[24px] leading-[28px] mb-[10px] lg:mb-0">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Statistics;

