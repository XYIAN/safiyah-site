import AboutSection from '@/components/about/AboutSection'
import PageHero from '@/components/common/PageHero'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Safiyah Sohail | Mental Health Professional',
  description: 'Learn about Safiyah Sohail, a dedicated mental health professional specializing in ADHD assessment, therapeutic interventions, and compassionate care.',
  openGraph: {
    title: 'About Safiyah Sohail | Mental Health Professional',
    description: 'Learn about Safiyah Sohail, a dedicated mental health professional specializing in ADHD assessment, therapeutic interventions, and compassionate care.',
    url: 'https://safiyah-sohail.com/about',
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
    title: 'About Safiyah Sohail | Mental Health Professional',
    description: 'Learn about Safiyah Sohail, a dedicated mental health professional specializing in ADHD assessment, therapeutic interventions, and compassionate care.',
    images: ['/og-image.jpg'],
    creator: '@safiyah_sohail',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Safiyah"
        subtitle="A dedicated mental health professional committed to providing compassionate, evidence-based care for individuals navigating their mental health journey."
        highlightedWord="Safiyah"
      />
      <AboutSection />
    </>
  )
} 