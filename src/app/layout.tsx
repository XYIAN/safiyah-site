import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safiyah Sohail - Mental Health Professional & ADHD Specialist',
  description: 'Safiyah Sohail is a mental health professional specializing in ADHD assessment, emotional support, and therapeutic interventions. Based in London, UK.',
  keywords: [
    'Safiyah Sohail',
    'Psychologist',
    'Mental Health Professional',
    'ADHD Specialist UK',
    'Clinical Psychologist',
    'ADHD Assessment',
    'Therapeutic Interventions',
    'Mental Health Care',
    'London Psychologist'
  ],
  authors: [{ name: 'Safiyah Sohail' }],
  creator: 'Safiyah Sohail',
  publisher: 'Safiyah Sohail',
  icons: {
    icon: '/icons/main-icon.png',
    shortcut: '/icons/main-icon.png',
    apple: '/icons/main-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://safiyah-sohail.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Safiyah Sohail - Mental Health Professional & ADHD Specialist',
    description: 'Specializing in ADHD assessment, emotional support, and therapeutic interventions. Dedicated to providing compassionate mental health care and clinical research.',
    url: 'https://safiyah-sohail.com',
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safiyah Sohail - Mental Health Professional & ADHD Specialist',
    description: 'Specializing in ADHD assessment, emotional support, and therapeutic interventions.',
    images: ['/og-image.jpg'],
    creator: '@safiyah_sohail',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="parallax-background"></div>
        <Header />
        <main className="pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
