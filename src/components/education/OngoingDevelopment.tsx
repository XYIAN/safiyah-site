'use client';

import React from 'react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const OngoingDevelopment: React.FC = () => {
  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ongoing Professional Development</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My commitment to continuous learning and staying current with the latest 
          developments in mental health care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-purple mb-2">50+</div>
          <h3 className="text-lg font-semibold mb-2">Annual CPD Hours</h3>
          <p className="text-gray-600 text-sm">
            Continuing professional development through workshops, conferences, and training
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-purple mb-2">5+</div>
          <h3 className="text-lg font-semibold mb-2">Conference Presentations</h3>
          <p className="text-gray-600 text-sm">
            Sharing research findings and clinical expertise at professional conferences
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-purple mb-2">3+</div>
          <h3 className="text-lg font-semibold mb-2">Professional Memberships</h3>
          <p className="text-gray-600 text-sm">
            Active membership in leading psychological and mental health organizations
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default OngoingDevelopment; 