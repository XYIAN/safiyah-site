'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import Card from '@/components/common/Card';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is the assessment process like?',
      answer: 'The ADHD assessment typically involves an initial consultation, comprehensive evaluation using standardized tools, and a detailed report with recommendations. The process usually takes 2-3 sessions.'
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Yes, I offer both in-person and online consultations. Online sessions are conducted via secure video platforms and are equally effective for most services.'
    },
    {
      question: 'How long does therapy typically last?',
      answer: 'Therapy duration varies based on individual needs and goals. Some clients benefit from short-term interventions (8-12 sessions), while others prefer longer-term support.'
    },
    {
      question: 'What insurance do you accept?',
      answer: 'I work with various insurance providers and can provide detailed invoices for reimbursement. Please contact me to discuss your specific insurance coverage.'
    },
    {
      question: 'Can you work with children and adolescents?',
      answer: 'Yes, I specialize in working with children and adolescents, including ADHD assessment and therapeutic interventions designed specifically for young people.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment by filling out the contact form above, calling me directly, or sending an email. I\'ll respond within 24 hours to arrange a consultation.'
    }
  ];

  return (
    <Section background="secondary">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about my services and what to expect"
      />

      <GridLayout cols={{ sm: 1, md: 2 }} gap="gap-8">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              {faq.question}
            </h3>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </Card>
        ))}
      </GridLayout>
    </Section>
  );
};

export default FAQSection; 