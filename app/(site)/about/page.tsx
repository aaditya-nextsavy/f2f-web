import type { Metadata } from 'next'
import Industries from '@/components/home/industries/Industries'
import CTA from '@/components/common/ctaType1/CTA'
import OurPartners from '@/components/home/OurPartners/OurPartners'
import BannerType2 from '@/components/common/HeroBannerSection/HeroBannerType2/BannerType2'
import OurStory from '@/components/about/OurStory'
import Team from '@/components/about/Team'
import { homePageData } from '@/data/home'
import { aboutPageData } from '@/data/about'
import CoreValues from '@/components/about/CoreValues'
import MissionVision from '@/components/about/MissionVision'
import HowWeWork from '@/components/about/HowWeWork'

export const metadata: Metadata = {
    title: aboutPageData.meta.title,
    description: aboutPageData.meta.description,
}

export default function Page() {
    return (
        <>
            <main className='space-y-[40px] xl:space-y-[90px]'>

                {/* heroBannertypetwo */}
                <BannerType2
                    label={aboutPageData.bannerData.label}
                    title={aboutPageData.bannerData.title}
                    description={aboutPageData.bannerData.description}
                    bannerImage={aboutPageData.bannerData.bannerImage?.src}
                    bannerImageAlt={aboutPageData.bannerData.bannerImage?.alt}
                />

                <OurStory
                    title={aboutPageData.ourStory.sectionTitle}
                    image={aboutPageData.ourStory.image}
                />

                <OurPartners
                    title={homePageData.ourPartners.title}
                    data={homePageData.ourPartners.partners}
                />

                <Team
                    title={aboutPageData.team.sectionTitle}
                    data={aboutPageData.team.members}
                />

                <CoreValues data={aboutPageData.coreValues} />

                <MissionVision data={aboutPageData.missionVision} />



                <CTA
                    title={homePageData.ctaType1.title}
                    description={homePageData.ctaType1.description}
                    actions={homePageData.ctaType1.actions}
                />
                <Industries
                    title={homePageData.industries.sectionTitle}
                    data={homePageData.industries.cards}
                />

                <HowWeWork data={aboutPageData.howWeWork} />


            </main>
        </>
    );
}
