import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticlesOverlay from '@/components/common/ParticlesOverlay';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Safiyah Sohail - Mental Health Professional & ADHD Specialist',
  description:
    'Safiyah Sohail is a mental health professional specializing in ADHD assessment, emotional support, and therapeutic interventions. Based in London, UK.',
  keywords: [
    'Safiyah Sohail',
    'Psychologist',
    'Mental Health Professional',
    'ADHD Specialist UK',
    'Clinical Psychologist',
    'ADHD Assessment',
    'Therapeutic Interventions',
    'Mental Health Care',
    'London Psychologist',
  ],
  authors: [{ name: 'Safiyah Sohail' }],
  creator: 'Safiyah Sohail',
  publisher: 'Safiyah Sohail',
  icons: {
    icon: '/main-icon.png',
    shortcut: '/main-icon.png',
    apple: '/main-icon.png',
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
    description:
      'Specializing in ADHD assessment, emotional support, and therapeutic interventions. Dedicated to providing compassionate mental health care and clinical research.',
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
    description:
      'Specializing in ADHD assessment, emotional support, and therapeutic interventions.',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          <Header />
          <ParticlesOverlay />
          <div className="parallax-background"></div>
          <main
            className="pt-20 relative z-10 flex flex-col items-center min-h-screen px-8 md:px-12"
            style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}
          >
            {children}
          </main>
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
