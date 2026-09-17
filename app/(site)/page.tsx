import type { Metadata } from 'next'
import HeroBanner from '@/components/home/HeroSection/HeroBanner'
import HeroAbout from '@/components/home/HeroAbout/HeroAbout'
import SeaFrieght from '@/components/home/SeaFreight/SeaFreight'
import OtherServices from '@/components/home/OtherServices/OtherServices'
import Industries from '@/components/home/industries/Industries'
import HowItWorks from '@/components/home/HowItWorks/HowItWorks'
import CTA from '@/components/common/ctaType1/CTA'
import OurPartners from '@/components/home/OurPartners/OurPartners'
import BlogListing from '@/components/home/BlogListing/BlogListing'
import Faqs from '@/components/common/Faqs/Faqs'
import Statistics from '@/components/home/Statistics/Statistics'

import { homePageData } from '@/data/home'
import { sanityFetch } from '@/sanity/lib/live'
import { BLOG_LIST_QUERY } from '@/sanity/lib/queries'
import { toBlogPostData, type SanityPostListItem } from '@/sanity/lib/mappers'
import { FaqJsonLd } from '@/components/seo/schemas'

export const metadata: Metadata = {
  title: homePageData.meta.title,
  description: homePageData.meta.description,
  alternates: { canonical: '/' },
}

export default async function Home() {
  const { data } = await sanityFetch({ query: BLOG_LIST_QUERY })
  const blogPosts = (data as SanityPostListItem[]).slice(0, 4).map(toBlogPostData)

  return (
    <>
      {/* hero banner  */}
      <main className='space-y-[42px] 2xl:space-y-[90px]'>
        <HeroBanner
          title={homePageData.heroBanner.title}
          description={homePageData.heroBanner.description}
          actions={homePageData.heroBanner.actions}
          video={homePageData.heroBanner.video}
          placeholder={homePageData.heroBanner.placeholder}
        />
        <HeroAbout
          title={homePageData.heroAbout.title}
          description={homePageData.heroAbout.description}
        />

        <SeaFrieght
          title={homePageData.seaFreight.sectionTitle}
          data={homePageData.seaFreight.cards}
        />
        <OtherServices
          title={homePageData.otherServices.sectionTitle}
          data={homePageData.otherServices.cards}
        />
        <Industries
          title={homePageData.industries.sectionTitle}
          data={homePageData.industries.cards}
        />
        <Statistics
          title={homePageData.statistics.sectionTitle}
          data={homePageData.statistics.stats}
        />
        <HowItWorks
          title={homePageData.howItWorks.sectionTitle}
          paragraphs={homePageData.howItWorks.paragraphs}
          steps={homePageData.howItWorks.steps}
        />
        <CTA
          title={homePageData.ctaType1.title}
          description={homePageData.ctaType1.description}
          actions={homePageData.ctaType1.actions}
        />
        <OurPartners
          title={homePageData.ourPartners.title}
          data={homePageData.ourPartners.partners}
        />
        {blogPosts.length > 0 && (
          <BlogListing
            title={homePageData.blogListing.sectionTitle}
            data={blogPosts}
            exploreLink={homePageData.blogListing.exploreLink}
          />
        )}

        <Faqs
          title={homePageData.faqs.sectionTitle}
          data={homePageData.faqs.faqs}
        />
      </main>

      <FaqJsonLd faqs={homePageData.faqs.faqs} />
    </>
  );
}
