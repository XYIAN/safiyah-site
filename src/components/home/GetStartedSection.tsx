'use client';

import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';

export default function GetStartedSection() {
  const contactOptions = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Schedule Consultation',
      description: 'Book a free initial consultation',
      buttonText: 'Book Now',
      variant: 'primary' as const,
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Send Message',
      description: 'Reach out with any questions',
      buttonText: 'Message Me',
      variant: 'secondary' as const,
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Directly',
      description: 'Speak with me directly',
      buttonText: 'Call Now',
      variant: 'secondary' as const,
    },
  ];

  return (
    <Section background="accent" className="text-white">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-base sm:text-lg mb-12 max-w-2xl mx-auto opacity-90">
          Whether you&apos;re looking for ADHD assessment, emotional support, or therapeutic
          interventions, I&apos;m here to help you on your mental health journey.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"
            >
              <div className="mb-4 flex justify-center">{option.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-white/80 mb-4 text-sm">{option.description}</p>
              <Button variant={option.variant} href="/contact" className="w-full text-sm px-4 py-2">
                {option.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-white/80 mb-6 text-sm">
            All consultations are confidential and conducted in a safe, supportive environment.
          </p>
          <Button variant="primary" href="/about" className="px-8 py-3">
            Learn More About My Approach
          </Button>
        </div>
      </div>
    </Section>
  );
}
