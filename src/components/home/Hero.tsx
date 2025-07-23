'use client';

import Button from '@/components/common/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-8 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
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
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6">Safiyah Sohail</h1>

        <h2 className="text-xl md:text-2xl text-purple-600 mb-8 font-medium">
          Mental Health Professional & ADHD Specialist
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dedicated to providing compassionate, evidence-based mental health care. Specializing in
          ADHD assessment, emotional support, and therapeutic interventions.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" href="/about" className="text-lg px-8 py-4">
            Learn More About Me
          </Button>
          <Button variant="secondary" href="/contact" className="text-lg px-8 py-4">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
