import type { Metadata } from 'next'
import BannerType2 from '@/components/common/HeroBannerSection/HeroBannerType2/BannerType2'
import LegalContent from '@/components/legal/LegalContent'
import { termsAndConditionsData } from '@/data/termsAndConditions'

export const metadata: Metadata = {
    title: termsAndConditionsData.meta.title,
    description: termsAndConditionsData.meta.description,
}

export default function Page() {
    return (
        <main>
            <BannerType2
                label={termsAndConditionsData.banner.label}
                title={termsAndConditionsData.banner.title}
                description={termsAndConditionsData.banner.description}
            />

            <LegalContent sections={termsAndConditionsData.sections} />
        </main>
    );
}
