'use client';

import React from 'react';
import { Brain, Heart, Users, Award } from 'lucide-react';
import CustomButton from '@/components/common/CustomButton';
import CustomCard from '@/components/common/CustomCard';
import Section from '@/components/common/Section';

export default function AboutSection() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'ADHD Assessment',
      description: 'Comprehensive evaluation and diagnosis',
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: 'Emotional Support',
      description: 'Compassionate care for emotional well-being',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Family Therapy',
      description: 'Supporting families through challenging times',
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Research',
      description: 'Contributing to mental health research',
    },
  ];

  return (
    <Section background="secondary">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6">About Me</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Dedicated mental health professional specializing in ADHD assessment and therapeutic
          interventions.
        </p>

        {/* Services Grid - Always flex-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <CustomCard key={index} variant="default" className="text-center">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CustomCard>
          ))}
        </div>

        {/* Call to Action */}
        <CustomButton variant="primary" href="/about" buttonSize="lg">
          Learn More About My Work
        </CustomButton>
      </div>
    </Section>
  );
}
