'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import ContactForm from './ContactForm';

const ContactFormSection: React.FC = () => {
  return (
    <Section background="secondary">
      <SectionHeader
        title="Contact Me"
        subtitle="Whether you have questions about my services, want to schedule a consultation, or are interested in working together, I'd love to hear from you."
      />
      <ContactForm />
    </Section>
  );
};

export default ContactFormSection; 