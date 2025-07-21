'use client';

import React from 'react';
import { Award, Users, TrendingUp, Target } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import StatsCard from '@/components/common/StatsCard';

const KeyAchievements: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      number: '15+',
      title: 'Research Papers',
      description: 'Published peer-reviewed research on ADHD interventions and mental health care'
    },
    {
      icon: Users,
      number: '500+',
      title: 'Clients Helped',
      description: 'Successfully supported individuals and families through mental health challenges'
    },
    {
      icon: TrendingUp,
      number: '40%',
      title: 'Efficiency Improvement',
      description: 'Reduced assessment wait times through process optimization and innovation'
    },
    {
      icon: Target,
      number: '5+',
      title: 'Mentees Supervised',
      description: 'Guided junior psychologists in their professional development and clinical practice'
    }
  ];

  return (
    <Section background="primary">
      <SectionHeader
        title="Key Achievements"
        subtitle="Highlights of my contributions to mental health care and professional development"
      />

      <GridLayout cols={{ sm: 1, md: 2, lg: 4 }}>
        {achievements.map((achievement, index) => (
          <StatsCard
            key={index}
            icon={achievement.icon}
            number={achievement.number}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </GridLayout>
    </Section>
  );
};

export default KeyAchievements; 