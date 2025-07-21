'use client';

import React from 'react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const ResearchFocus: React.FC = () => {
  return (
    <Section background="secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Research Focus</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My research interests and contributions to the field of mental health
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            ADHD Assessment & Intervention
          </h3>
          <p className="text-gray-600 mb-4">
            Research focused on improving diagnostic accuracy and developing 
            more effective intervention strategies for individuals with ADHD.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Development of screening tools for early detection</li>
            <li>• Effectiveness of behavioral interventions</li>
            <li>• Family-based treatment approaches</li>
            <li>• Long-term outcomes of ADHD treatment</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            Child & Adolescent Mental Health
          </h3>
          <p className="text-gray-600 mb-4">
            Investigating mental health challenges in young people and developing 
            age-appropriate therapeutic interventions.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Developmental psychology research</li>
            <li>• School-based mental health programs</li>
            <li>• Family therapy effectiveness</li>
            <li>• Prevention and early intervention</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            Evidence-Based Practice
          </h3>
          <p className="text-gray-600 mb-4">
            Contributing to the development and evaluation of evidence-based 
            therapeutic approaches in clinical psychology.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Clinical outcome research</li>
            <li>• Treatment effectiveness studies</li>
            <li>• Implementation science</li>
            <li>• Quality improvement in mental health care</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            Mental Health Technology
          </h3>
          <p className="text-gray-600 mb-4">
            Exploring the integration of technology in mental health care, 
            including digital interventions and telehealth applications.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Digital mental health interventions</li>
            <li>• Telehealth effectiveness research</li>
            <li>• Mobile app-based therapies</li>
            <li>• Technology-assisted assessment tools</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default ResearchFocus; 