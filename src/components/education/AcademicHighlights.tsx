'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Target } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import StatsCard from '@/components/common/StatsCard';

const AcademicHighlights: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      number: '3',
      title: 'Degrees Earned',
      description: 'From Bachelor\'s to Doctorate in Clinical Psychology'
    },
    {
      icon: Award,
      number: '4',
      title: 'Professional Certifications',
      description: 'Specialized training in ADHD, CBT, and family therapy'
    },
    {
      icon: BookOpen,
      number: '15+',
      title: 'Research Papers',
      description: 'Published academic research and clinical studies'
    },
    {
      icon: Target,
      number: '8+',
      title: 'Years of Study',
      description: 'Dedicated academic pursuit in psychology and mental health'
    }
  ];

  return (
    <Section background="primary">
      <SectionHeader
        title="Academic Highlights"
        subtitle="Key achievements and milestones throughout my educational journey"
      />

      <GridLayout cols={{ sm: 1, md: 2, lg: 4 }}>
        {highlights.map((highlight, index) => (
          <StatsCard
            key={index}
            icon={highlight.icon}
            number={highlight.number}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </GridLayout>
    </Section>
  );
};

export default AcademicHighlights; 