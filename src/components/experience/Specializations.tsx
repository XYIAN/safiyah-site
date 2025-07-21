'use client';

import React from 'react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';

const Specializations: React.FC = () => {
  return (
    <Section background="secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Areas of Specialization</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My expertise spans various aspects of mental health care, with particular focus on 
          ADHD assessment and therapeutic interventions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            ADHD Assessment & Intervention
          </h3>
          <p className="text-gray-600 mb-4">
            Comprehensive evaluation and evidence-based interventions for individuals 
            with ADHD, including children, adolescents, and adults. Specialized in both diagnostic assessment 
            and ongoing therapeutic support.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Comprehensive diagnostic assessments</li>
            <li>• Behavioral and cognitive interventions</li>
            <li>• Family support and education programs</li>
            <li>• School collaboration and IEP support</li>
            <li>• Medication management consultation</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            Child & Adolescent Psychology
          </h3>
          <p className="text-gray-600 mb-4">
            Specialized mental health support for children and adolescents, addressing developmental 
            challenges, emotional regulation, and family dynamics. Age-appropriate therapeutic approaches.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Developmental assessment and intervention</li>
            <li>• Play therapy and creative interventions</li>
            <li>• Family systems therapy</li>
            <li>• School-based mental health support</li>
            <li>• Trauma-informed care</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            Clinical Research
          </h3>
          <p className="text-gray-600 mb-4">
            Active involvement in mental health research, contributing to evidence-based practice 
            and advancing understanding of effective interventions for various mental health conditions.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• ADHD intervention effectiveness studies</li>
            <li>• Mental health screening tool development</li>
            <li>• Clinical outcome research</li>
            <li>• Peer-reviewed publication</li>
            <li>• Conference presentations</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4 text-primary-purple">
            Therapeutic Interventions
          </h3>
          <p className="text-gray-600 mb-4">
            Evidence-based therapeutic approaches including CBT, mindfulness-based interventions, 
            and family therapy. Tailored treatment plans for individual needs and goals.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Cognitive Behavioral Therapy (CBT)</li>
            <li>• Mindfulness-based stress reduction</li>
            <li>• Family systems therapy</li>
            <li>• Group therapy facilitation</li>
            <li>• Crisis intervention and support</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default Specializations; 