'use client';

import CustomButton from '@/components/common/CustomButton';
import Image from 'next/image';
import PageContainer from '@/components/common/PageContainer';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <PageContainer>
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6">
              <Image
                src="/saf.jpeg"
                alt="Safiyah Sohail"
                fill
                className="rounded-full object-cover border-4 border-purple-200 shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">
            Safiyah Sohail
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-600 mb-6 font-medium">
            Mental Health Professional & ADHD Specialist
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing compassionate, evidence-based mental health care. Specializing in
            ADHD assessment, emotional support, and therapeutic interventions.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CustomButton
              variant="primary"
              href="/about"
              buttonSize="lg"
              className="w-full sm:w-auto"
            >
              Learn More About Me
            </CustomButton>
            <CustomButton
              variant="secondary"
              href="/contact"
              buttonSize="lg"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </CustomButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
