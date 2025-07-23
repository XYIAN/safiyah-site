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
          <div className="min-h-screen relative overflow-x-hidden">
            {/* Parallax Background */}
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300/20 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-pink-300/20 rounded-full animate-pulse delay-1500"></div>
              </div>
            </div>

            <Header />
            <ParticlesOverlay />
            <main className="relative z-10 pt-20 pb-8">{children}</main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
