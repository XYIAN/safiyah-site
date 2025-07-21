'use client';

import React from 'react';
import { Brain, Heart, Users, Award } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import IconCard from '@/components/common/IconCard';
import Button from '@/components/common/Button';

const AboutPreview: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'ADHD Assessment',
      description: 'Comprehensive evaluation and diagnosis of ADHD in children and adults',
    },
    {
      icon: Heart,
      title: 'Emotional Support',
      description: 'Compassionate therapeutic support for emotional well-being and mental health',
    },
    {
      icon: Users,
      title: 'Therapeutic Interventions',
      description: 'Evidence-based therapeutic approaches tailored to individual needs',
    },
    {
      icon: Award,
      title: 'Clinical Research',
      description: 'Contributing to mental health research and advancing clinical practices',
    },
  ];

  return (
    <Section id="about" background="secondary">
      <SectionHeader
        title="About Me"
        subtitle="I am a dedicated mental health professional with expertise in ADHD assessment, emotional support, and therapeutic interventions. My passion lies in helping individuals navigate their mental health journey with compassion and evidence-based care."
        titleClassName="text-4xl font-bold mb-4"
      />

      <GridLayout cols={{ sm: 1, md: 2, lg: 4 }} gap="gap-8">
        {services.map((service, index) => (
          <IconCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            titleClassName="text-xl font-semibold mb-2"
            descriptionClassName="text-gray-600"
            className="mb-8"
          />
        ))}
      </GridLayout>

      <div className="text-center mt-12">
        <Button variant="primary" size="lg" href="/about">
          Learn More About Me
        </Button>
      </div>
    </Section>
  );
};

export default AboutPreview;
