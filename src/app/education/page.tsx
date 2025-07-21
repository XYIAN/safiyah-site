import type { Metadata } from 'next';
import Section from '@/components/common/Section'
import EducationGrid from '@/components/education/EducationGrid'
import AcademicHighlights from '@/components/education/AcademicHighlights'
import ResearchFocus from '@/components/education/ResearchFocus'
import OngoingDevelopment from '@/components/education/OngoingDevelopment'
import PageHero from '@/components/common/PageHero'
import PageCallToAction from '@/components/common/PageCallToAction'

export const metadata: Metadata = {
  title: 'Education & Qualifications | Safiyah Sohail',
  description: 'Discover the education and qualifications of Safiyah Sohail, including academic achievements and professional certifications in mental health care.',
  openGraph: {
    title: 'Education & Qualifications | Safiyah Sohail',
    description: 'Discover the education and qualifications of Safiyah Sohail, including academic achievements and professional certifications in mental health care.',
    url: 'https://safiyah-sohail.com/education',
    siteName: 'Safiyah Sohail Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Safiyah Sohail - Mental Health Professional',
      },
    ],
    locale: 'en_GB',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education & Qualifications | Safiyah Sohail',
    description: 'Discover the education and qualifications of Safiyah Sohail, including academic achievements and professional certifications in mental health care.',
    images: ['/og-image.jpg'],
    creator: '@safiyah_sohail',
  },
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        title="Education & Qualifications"
        subtitle="My academic journey and professional certifications reflect my commitment to excellence in mental health care and continuous learning."
        highlightedWord="Qualifications"
      />

      {/* Education Grid */}
      <Section background="secondary">
        <EducationGrid />
      </Section>

      <AcademicHighlights />
      <ResearchFocus />
      <OngoingDevelopment />

      <PageCallToAction
        title="Ready to Work Together?"
        subtitle="My qualifications and expertise are available to support your mental health needs. Let's discuss how I can help you or your organization."
        primaryButton={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View My Experience",
          href: "/experience"
        }}
      />
    </>
  )
} 