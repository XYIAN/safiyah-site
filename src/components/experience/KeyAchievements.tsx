'use client';

import React from 'react';
import { Award, Users, TrendingUp, Target } from 'lucide-react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const KeyAchievements: React.FC = () => {
  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Highlights of my contributions to mental health care and professional development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">15+</div>
          <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
          <p className="text-gray-600 text-sm">
            Published peer-reviewed research on ADHD interventions and mental health care
          </p>
        </Card>

        <Card className="text-center">
          <Users className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">500+</div>
          <h3 className="text-lg font-semibold mb-2">Clients Helped</h3>
          <p className="text-gray-600 text-sm">
            Successfully supported individuals and families through mental health challenges
          </p>
        </Card>

        <Card className="text-center">
          <TrendingUp className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">40%</div>
          <h3 className="text-lg font-semibold mb-2">Efficiency Improvement</h3>
          <p className="text-gray-600 text-sm">
            Reduced assessment wait times through process optimization and innovation
          </p>
        </Card>

        <Card className="text-center">
          <Target className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">5+</div>
          <h3 className="text-lg font-semibold mb-2">Mentees Supervised</h3>
          <p className="text-gray-600 text-sm">
            Guided junior psychologists in their professional development and clinical practice
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default KeyAchievements; 