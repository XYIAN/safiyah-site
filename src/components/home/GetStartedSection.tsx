'use client';

import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import Button from '@/components/common/Button';
import CenteredLayout from '@/components/common/CenteredLayout';

export default function GetStartedSection() {
  return (
    <section className="py-16 px-8 md:px-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <CenteredLayout>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Whether you&apos;re looking for ADHD assessment, emotional support, or therapeutic
          interventions, I&apos;m here to help you on your mental health journey.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Schedule Consultation</h3>
            <p className="text-white/80 mb-4">
              Book a free initial consultation to discuss your needs
            </p>
            <Button variant="primary" href="/contact" className="w-full">
              Book Now
            </Button>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Send Message</h3>
            <p className="text-white/80 mb-4">Reach out with any questions about my services</p>
            <Button variant="secondary" href="/contact" className="w-full">
              Message Me
            </Button>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Directly</h3>
            <p className="text-white/80 mb-4">
              Speak with me directly about your mental health needs
            </p>
            <Button variant="secondary" href="/contact" className="w-full">
              Call Now
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-white/80 mb-6">
            All consultations are confidential and conducted in a safe, supportive environment.
          </p>
          <Button variant="primary" href="/about" className="text-lg px-8 py-4">
            Learn More About My Approach
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
}
