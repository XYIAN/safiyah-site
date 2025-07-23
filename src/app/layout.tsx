import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'primereact/resources/themes/lara-light-purple/theme.css';
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
    'Dedicated mental health professional specializing in ADHD assessment, emotional support, and therapeutic interventions.',
  keywords: 'mental health, ADHD assessment, therapy, counseling, psychology',
  authors: [{ name: 'Safiyah Sohail' }],
  openGraph: {
    title: 'Safiyah Sohail - Mental Health Professional',
    description:
      'Dedicated mental health professional specializing in ADHD assessment and therapeutic interventions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safiyah Sohail - Mental Health Professional',
    description:
      'Dedicated mental health professional specializing in ADHD assessment and therapeutic interventions.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
            <Header />
            <ParticlesOverlay />
            <main className="pt-20 pb-8">{children}</main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
