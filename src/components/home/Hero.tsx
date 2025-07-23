'use client';

import Button from '@/components/common/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-8 py-16">
      <div className="max-w-2xl mx-auto w-full">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-6">
            <Image
              src="/safiyah-profile.jpg"
              alt="Safiyah Sohail"
              fill
              className="rounded-full object-cover border-4 border-purple-200 shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-4">Safiyah Sohail</h1>

        <h2 className="text-lg md:text-xl text-purple-600 mb-6 font-medium">
          Mental Health Professional & ADHD Specialist
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg mx-auto leading-relaxed">
          Dedicated to providing compassionate, evidence-based mental health care. Specializing in
          ADHD assessment, emotional support, and therapeutic interventions.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" href="/about" className="w-full sm:w-auto px-6 py-3">
            Learn More About Me
          </Button>
          <Button variant="secondary" href="/contact" className="w-full sm:w-auto px-6 py-3">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
