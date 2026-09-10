import type { Metadata } from 'next'
import BannerType2 from '@/components/common/HeroBannerSection/HeroBannerType2/BannerType2'
import LegalContent from '@/components/legal/LegalContent'
import { privacyPolicyData } from '@/data/privacyPolicy'

export const metadata: Metadata = {
    title: privacyPolicyData.meta.title,
    description: privacyPolicyData.meta.description,
}

export default function Page() {
    return (
        <main>
            <BannerType2
                label={privacyPolicyData.banner.label}
                title={privacyPolicyData.banner.title}
                description={privacyPolicyData.banner.description}
            />

            <LegalContent sections={privacyPolicyData.sections} />
        </main>
    );
}
