'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import StatsCard from '@/components/common/StatsCard';

const ProfessionalDevelopment: React.FC = () => {
  const development = [
    {
      number: '50+',
      title: 'Continuing Education Hours',
      description: 'Annual professional development through workshops, conferences, and training programs'
    },
    {
      number: '10+',
      title: 'Professional Certifications',
      description: 'Specialized certifications in ADHD assessment, CBT, and family therapy'
    },
    {
      number: '5+',
      title: 'Conference Presentations',
      description: 'Sharing expertise and research findings at national and international conferences'
    }
  ];

  return (
    <Section background="primary">
      <SectionHeader
        title="Professional Development"
        subtitle="My commitment to continuous learning and staying current with the latest research and therapeutic techniques in mental health care"
      />

      <GridLayout cols={{ sm: 1, md: 3 }}>
        {development.map((item, index) => (
          <StatsCard
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            numberClassName="text-2xl font-bold text-primary-purple mb-2"
          />
        ))}
      </GridLayout>
    </Section>
  );
};

export default ProfessionalDevelopment; 