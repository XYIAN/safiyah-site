'use client';

import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import Button from '@/components/common/Button';
import CenteredLayout from '@/components/common/CenteredLayout';

export default function GetStartedSection() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <CenteredLayout>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-base md:text-lg mb-8 max-w-md mx-auto opacity-90">
          Whether you&apos;re looking for ADHD assessment, emotional support, or therapeutic
          interventions, I&apos;m here to help you on your mental health journey.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 w-full max-w-2xl">
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Calendar className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Schedule Consultation</h3>
            <p className="text-white/80 mb-3 text-sm">Book a free initial consultation</p>
            <Button variant="primary" href="/contact" className="w-full text-sm px-4 py-2">
              Book Now
            </Button>
          </div>

          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <MessageCircle className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Send Message</h3>
            <p className="text-white/80 mb-3 text-sm">Reach out with any questions</p>
            <Button variant="secondary" href="/contact" className="w-full text-sm px-4 py-2">
              Message Me
            </Button>
          </div>

          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Phone className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Call Directly</h3>
            <p className="text-white/80 mb-3 text-sm">Speak with me directly</p>
            <Button variant="secondary" href="/contact" className="w-full text-sm px-4 py-2">
              Call Now
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-white/80 mb-4 text-sm">
            All consultations are confidential and conducted in a safe, supportive environment.
          </p>
          <Button variant="primary" href="/about" className="px-6 py-3">
            Learn More About My Approach
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
}
