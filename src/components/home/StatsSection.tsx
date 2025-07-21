'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import StatsCard from '@/components/common/StatsCard';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '5+',
      title: 'Years Experience',
      description: 'Providing mental health support and clinical assessment'
    },
    {
      number: '200+',
      title: 'Clients Helped',
      description: 'Supporting individuals on their mental health journey'
    },
    {
      number: '15+',
      title: 'Research Papers',
      description: 'Contributing to mental health research and clinical practice'
    }
  ];

  return (
    <Section background="primary">
      <SectionHeader
        title="Professional Highlights"
        subtitle="My commitment to mental health care and professional development"
        titleClassName="text-4xl font-bold mb-4"
      />

      <GridLayout cols={{ sm: 1, md: 3 }} gap="gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <StatsCard
              number={stat.number}
              title={stat.title}
              description={stat.description}
              numberClassName="text-5xl font-bold text-primary-purple mb-2"
              titleClassName="text-lg font-semibold mb-2"
              descriptionClassName="text-gray-600"
            />
          </div>
        ))}
      </GridLayout>
    </Section>
  );
};

export default StatsSection; 