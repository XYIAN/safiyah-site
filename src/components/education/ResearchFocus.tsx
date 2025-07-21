'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import ContentCard from '@/components/common/ContentCard';

const ResearchFocus: React.FC = () => {
  const researchAreas = [
    {
      title: 'ADHD Assessment & Intervention',
      description: 'Research focused on improving diagnostic accuracy and developing more effective intervention strategies for individuals with ADHD.',
      bulletPoints: [
        'Development of screening tools for early detection',
        'Effectiveness of behavioral interventions',
        'Family-based treatment approaches',
        'Long-term outcomes of ADHD treatment'
      ]
    },
    {
      title: 'Child & Adolescent Mental Health',
      description: 'Investigating mental health challenges in young people and developing age-appropriate therapeutic interventions.',
      bulletPoints: [
        'Developmental psychology research',
        'School-based mental health programs',
        'Family therapy effectiveness',
        'Prevention and early intervention'
      ]
    },
    {
      title: 'Evidence-Based Practice',
      description: 'Contributing to the development and evaluation of evidence-based therapeutic approaches in clinical psychology.',
      bulletPoints: [
        'Clinical outcome research',
        'Treatment effectiveness studies',
        'Implementation science',
        'Quality improvement in mental health care'
      ]
    },
    {
      title: 'Mental Health Technology',
      description: 'Exploring the integration of technology in mental health care, including digital interventions and telehealth applications.',
      bulletPoints: [
        'Digital mental health interventions',
        'Telehealth effectiveness research',
        'Mobile app-based therapies',
        'Technology-assisted assessment tools'
      ]
    }
  ];

  return (
    <Section background="secondary">
      <SectionHeader
        title="Research Focus"
        subtitle="My research interests and contributions to the field of mental health"
      />

      <GridLayout cols={{ sm: 1, md: 2 }} gap="gap-8">
        {researchAreas.map((area, index) => (
          <ContentCard
            key={index}
            title={area.title}
            description={area.description}
            bulletPoints={area.bulletPoints}
          />
        ))}
      </GridLayout>
    </Section>
  );
};

export default ResearchFocus; 