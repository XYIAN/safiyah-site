'use client';

import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import CustomButton from '@/components/common/CustomButton';
import CustomCard from '@/components/common/CustomCard';
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

        {/* Contact Options - Always flex-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <CustomCard
              key={index}
              variant="outlined"
              className="text-center bg-white/10 backdrop-blur-sm border-white/20"
            >
              <div className="mb-4 flex justify-center">{option.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-white/80 mb-4 text-sm">{option.description}</p>
              <CustomButton
                variant={option.variant}
                href="/contact"
                buttonSize="sm"
                className="w-full"
              >
                {option.buttonText}
              </CustomButton>
            </CustomCard>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-white/80 mb-6 text-sm">
            All consultations are confidential and conducted in a safe, supportive environment.
          </p>
          <CustomButton variant="primary" href="/about" buttonSize="lg">
            Learn More About My Approach
          </CustomButton>
        </div>
      </div>
    </Section>
  );
}
