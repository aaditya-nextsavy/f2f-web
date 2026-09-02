import BannerType2 from '@/components/common/HeroBannerSection/HeroBannerType2/BannerType2'
import ContactSection from '@/components/contact/ContactSection'
import MapEmbed from '@/components/contact/MapEmbed'
import { contactPageData } from '@/data/contact'

export default function Page() {
    return (
        <main className='space-y-[40px] xl:space-y-[90px]'>
            <BannerType2
                label={contactPageData.banner.label}
                title={contactPageData.banner.title}
                description={contactPageData.banner.description}
            />

            <ContactSection
                heading={contactPageData.info.heading}
                description={contactPageData.info.description}
            />

            <MapEmbed src={contactPageData.mapEmbedSrc} />
        </main>
    );
}
