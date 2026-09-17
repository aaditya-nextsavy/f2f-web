import type { Metadata } from 'next'
import BannerType2 from '@/components/common/HeroBannerSection/HeroBannerType2/BannerType2'
import LegalContent from '@/components/legal/LegalContent'
import { termsAndConditionsData } from '@/data/termsAndConditions'
import { BreadcrumbJsonLd } from '@/components/seo/schemas'

export const metadata: Metadata = {
    title: termsAndConditionsData.meta.title,
    description: termsAndConditionsData.meta.description,
    alternates: { canonical: '/terms-and-conditions' },
}

export default function Page() {
    return (
        <main>
            <BreadcrumbJsonLd
                items={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms-and-conditions' }]}
            />
            <BannerType2
                label={termsAndConditionsData.banner.label}
                title={termsAndConditionsData.banner.title}
                description={termsAndConditionsData.banner.description}
            />

            <LegalContent sections={termsAndConditionsData.sections} />
        </main>
    );
}
