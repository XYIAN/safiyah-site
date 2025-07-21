'use client';

import React from 'react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const ProfessionalDevelopment: React.FC = () => {
  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Development</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My commitment to continuous learning and staying current with the latest research 
          and therapeutic techniques in mental health care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-purple mb-2">50+</div>
          <h3 className="text-lg font-semibold mb-2">Continuing Education Hours</h3>
          <p className="text-gray-600 text-sm">
            Annual professional development through workshops, conferences, and training programs
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-purple mb-2">10+</div>
          <h3 className="text-lg font-semibold mb-2">Professional Certifications</h3>
          <p className="text-gray-600 text-sm">
            Specialized certifications in ADHD assessment, CBT, and family therapy
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-purple mb-2">5+</div>
          <h3 className="text-lg font-semibold mb-2">Conference Presentations</h3>
          <p className="text-gray-600 text-sm">
            Sharing expertise and research findings at national and international conferences
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default ProfessionalDevelopment; 