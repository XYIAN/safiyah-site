'use client';

import React from 'react';
import Section from './Section';
import Button from './Button';

interface PageCallToActionProps {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  className?: string;
}

const PageCallToAction: React.FC<PageCallToActionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className = ''
}) => {
  return (
    <Section background="accent" className={className}>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href={primaryButton.href}>
            {primaryButton.text}
          </Button>
          <Button variant="secondary" size="lg" href={secondaryButton.href}>
            {secondaryButton.text}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PageCallToAction; 