'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import StatsCard from '@/components/common/StatsCard';

const OngoingDevelopment: React.FC = () => {
  const development = [
    {
      number: '50+',
      title: 'Annual CPD Hours',
      description: 'Continuing professional development through workshops, conferences, and training'
    },
    {
      number: '5+',
      title: 'Conference Presentations',
      description: 'Sharing research findings and clinical expertise at professional conferences'
    },
    {
      number: '3+',
      title: 'Professional Memberships',
      description: 'Active membership in leading psychological and mental health organizations'
    }
  ];

  return (
    <Section background="primary">
      <SectionHeader
        title="Ongoing Professional Development"
        subtitle="My commitment to continuous learning and staying current with the latest developments in mental health care"
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

export default OngoingDevelopment; 