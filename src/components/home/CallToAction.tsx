'use client';

import React from 'react';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';

const CallToAction: React.FC = () => {
  return (
    <Section background="accent">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re looking for ADHD assessment, emotional support, or therapeutic interventions, 
          I&apos;m here to help you on your mental health journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="/contact">
            Schedule a Consultation
          </Button>
          <Button variant="secondary" size="lg" href="/experience">
            View My Experience
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction; 