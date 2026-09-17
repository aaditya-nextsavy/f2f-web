import type { Metadata } from 'next'
import BannerType2 from '@/components/common/HeroBannerSection/HeroBannerType2/BannerType2'
import LegalContent from '@/components/legal/LegalContent'
import { privacyPolicyData } from '@/data/privacyPolicy'
import { BreadcrumbJsonLd } from '@/components/seo/schemas'

export const metadata: Metadata = {
    title: privacyPolicyData.meta.title,
    description: privacyPolicyData.meta.description,
    alternates: { canonical: '/privacy-policy' },
}

export default function Page() {
    return (
        <main>
            <BreadcrumbJsonLd
                items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]}
            />
            <BannerType2
                label={privacyPolicyData.banner.label}
                title={privacyPolicyData.banner.title}
                description={privacyPolicyData.banner.description}
            />

            <LegalContent sections={privacyPolicyData.sections} />
        </main>
    );
}
