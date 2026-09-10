import type { Metadata } from "next";
import BannerType2 from "@/components/common/HeroBannerSection/HeroBannerType2/BannerType2";
import AboutService from "@/components/services/AboutService";
import ServicesList from "@/components/services/ServicesList";
import GlobalHub from "@/components/services/GlobalHub";
import WhyItWorks from "@/components/services/WhyItWorks";
import OtherServices from "@/components/home/OtherServices/OtherServices";
import CTA2 from "@/components/common/ctaType2/CTA2";
import Faqs from "@/components/common/Faqs/Faqs";
import Industries from "@/components/home/industries/Industries";
import { servicesPageData } from "@/data/services";
import { homePageData } from "@/data/home";

export const metadata: Metadata = {
    title: servicesPageData.lcl.meta.title,
    description: servicesPageData.lcl.meta.description,
};

export default function Page() {
    const { bannerData, aboutService, servicesList, globalHub, whyItWorks, otherServicesSection, cta2, faqs } =
        servicesPageData.lcl;

    return (
        <main className="space-y-[42px] xl:space-y-[92px]">

            <BannerType2
                label={bannerData.label}
                title={bannerData.title}
                description={bannerData.description}
                bannerImage={bannerData.bannerImage?.src}
                bannerImageAlt={bannerData.bannerImage?.alt}
                action={bannerData.action}
            />

            {aboutService && <AboutService data={aboutService} />}

            {servicesList && <ServicesList data={servicesList} />}

            {globalHub && <GlobalHub data={globalHub} />}

            {whyItWorks && <WhyItWorks data={whyItWorks} />}

            {otherServicesSection && (
                <OtherServices
                    title={otherServicesSection.sectiontitle}
                    data={otherServicesSection.cards}
                />
            )}

            {cta2 && <CTA2 {...cta2} />}

            <Industries
                title={homePageData.industries.sectionTitle}
                data={homePageData.industries.cards}
                tightBottom={false}
            />

            {faqs && (
                <Faqs
                    title={faqs.sectiontitle}
                    data={faqs.faqs}
                />
            )}
        </main>
    );
}
