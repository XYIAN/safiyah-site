'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import ContentCard from '@/components/common/ContentCard';

const Specializations: React.FC = () => {
  const specializations = [
    {
      title: 'ADHD Assessment & Intervention',
      description: 'Comprehensive evaluation and evidence-based interventions for individuals with ADHD, including children, adolescents, and adults. Specialized in both diagnostic assessment and ongoing therapeutic support.',
      bulletPoints: [
        'Comprehensive diagnostic assessments',
        'Behavioral and cognitive interventions',
        'Family support and education programs',
        'School collaboration and IEP support',
        'Medication management consultation'
      ]
    },
    {
      title: 'Child & Adolescent Psychology',
      description: 'Specialized mental health support for children and adolescents, addressing developmental challenges, emotional regulation, and family dynamics. Age-appropriate therapeutic approaches.',
      bulletPoints: [
        'Developmental assessment and intervention',
        'Play therapy and creative interventions',
        'Family systems therapy',
        'School-based mental health support',
        'Trauma-informed care'
      ]
    },
    {
      title: 'Clinical Research',
      description: 'Active involvement in mental health research, contributing to evidence-based practice and advancing understanding of effective interventions for various mental health conditions.',
      bulletPoints: [
        'ADHD intervention effectiveness studies',
        'Mental health screening tool development',
        'Clinical outcome research',
        'Peer-reviewed publication',
        'Conference presentations'
      ]
    },
    {
      title: 'Therapeutic Interventions',
      description: 'Evidence-based therapeutic approaches including CBT, mindfulness-based interventions, and family therapy. Tailored treatment plans for individual needs and goals.',
      bulletPoints: [
        'Cognitive Behavioral Therapy (CBT)',
        'Mindfulness-based stress reduction',
        'Family systems therapy',
        'Group therapy facilitation',
        'Crisis intervention and support'
      ]
    }
  ];

  return (
    <Section background="secondary">
      <SectionHeader
        title="Areas of Specialization"
        subtitle="My expertise spans various aspects of mental health care, with particular focus on ADHD assessment and therapeutic interventions"
      />

      <GridLayout cols={{ sm: 1, md: 2 }} gap="gap-8">
        {specializations.map((specialization, index) => (
          <ContentCard
            key={index}
            title={specialization.title}
            description={specialization.description}
            bulletPoints={specialization.bulletPoints}
          />
        ))}
      </GridLayout>
    </Section>
  );
};

export default Specializations; 