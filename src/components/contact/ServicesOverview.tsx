'use client';

import React from 'react';
import { MessageCircle, Calendar, FileText, Users } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import IconCard from '@/components/common/IconCard';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'ADHD Assessment',
      description: 'Comprehensive evaluation and diagnosis for children and adults'
    },
    {
      icon: Users,
      title: 'Therapeutic Support',
      description: 'Individual and family therapy sessions for various mental health needs'
    },
    {
      icon: Calendar,
      title: 'Consultation',
      description: 'Professional consultation for organizations and healthcare providers'
    },
    {
      icon: FileText,
      title: 'Research Collaboration',
      description: 'Academic and clinical research partnerships in mental health'
    }
  ];

  return (
    <Section background="primary">
      <SectionHeader
        title="How I Can Help"
        subtitle="My services are designed to provide comprehensive mental health support tailored to your individual needs and goals."
      />

      <GridLayout cols={{ sm: 1, md: 2, lg: 4 }}>
        {services.map((service, index) => (
          <IconCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </GridLayout>
    </Section>
  );
};

export default ServicesOverview; 