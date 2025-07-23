'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary' | 'accent' | 'white';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const backgroundClasses = {
    primary: 'bg-purple-50',
    secondary: 'bg-pink-50',
    accent: 'bg-gradient-to-br from-purple-100 to-pink-100',
    white: 'bg-white',
  };

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
