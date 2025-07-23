import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ProfessionalHighlights from '@/components/home/ProfessionalHighlights';
import GetStartedSection from '@/components/home/GetStartedSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProfessionalHighlights />
      <GetStartedSection />
    </>
  );
}
