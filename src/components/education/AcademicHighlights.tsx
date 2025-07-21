'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Target } from 'lucide-react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const AcademicHighlights: React.FC = () => {
  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Academic Highlights</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Key achievements and milestones throughout my educational journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <GraduationCap className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">3</div>
          <h3 className="text-lg font-semibold mb-2">Degrees Earned</h3>
          <p className="text-gray-600 text-sm">
            From Bachelor&apos;s to Doctorate in Clinical Psychology
          </p>
        </Card>

        <Card className="text-center">
          <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">4</div>
          <h3 className="text-lg font-semibold mb-2">Professional Certifications</h3>
          <p className="text-gray-600 text-sm">
            Specialized training in ADHD, CBT, and family therapy
          </p>
        </Card>

        <Card className="text-center">
          <BookOpen className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">15+</div>
          <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
          <p className="text-gray-600 text-sm">
            Published academic research and clinical studies
          </p>
        </Card>

        <Card className="text-center">
          <Target className="w-12 h-12 text-primary-purple mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary-purple mb-2">8+</div>
          <h3 className="text-lg font-semibold mb-2">Years of Study</h3>
          <p className="text-gray-600 text-sm">
            Dedicated academic pursuit in psychology and mental health
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default AcademicHighlights; 