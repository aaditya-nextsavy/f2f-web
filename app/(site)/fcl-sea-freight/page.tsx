import type { Metadata } from "next";
import BannerType2 from "@/components/common/HeroBannerSection/HeroBannerType2/BannerType2";
import AboutService from "@/components/services/AboutService";
import ServicesList from "@/components/services/ServicesList";
import WhyItWorks from "@/components/services/WhyItWorks";
import OtherServices from "@/components/home/OtherServices/OtherServices";
import CTA2 from "@/components/common/ctaType2/CTA2";
import Faqs from "@/components/common/Faqs/Faqs";
import OurPartners from "@/components/home/OurPartners/OurPartners";
import Industries from "@/components/home/industries/Industries";
import { servicesPageData } from "@/data/services";
import { homePageData } from "@/data/home";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/schemas";

export const metadata: Metadata = {
    title: servicesPageData.fcl.meta.title,
    description: servicesPageData.fcl.meta.description,
    alternates: { canonical: "/fcl-sea-freight" },
};

export default function Page() {
    const { bannerData, aboutService, servicesList, whyItWorks, otherServicesSection, cta2, faqs } =
        servicesPageData.fcl;

    return (
        <main className="space-y-[42px] xl:space-y-[92px]">
            <BreadcrumbJsonLd
                items={[{ name: "Home", path: "/" }, { name: "FCL Sea Freight", path: "/fcl-sea-freight" }]}
            />
            <ServiceJsonLd
                name="FCL Sea Freight"
                description={servicesPageData.fcl.meta.description}
                path="/fcl-sea-freight"
            />

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

            {whyItWorks && <WhyItWorks data={whyItWorks} />}

            {otherServicesSection && (
                <OtherServices
                    title={otherServicesSection.sectiontitle}
                    data={otherServicesSection.cards}
                />
            )}

            {cta2 && <CTA2 {...cta2} />}

            <OurPartners
                title={homePageData.ourPartners.title}
                data={homePageData.ourPartners.partners}
            />

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

            <FaqJsonLd faqs={faqs?.faqs} />
        </main>
    );
}
