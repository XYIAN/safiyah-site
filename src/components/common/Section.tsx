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
    primary: 'bg-purple-50/80 backdrop-blur-sm',
    secondary: 'bg-pink-50/80 backdrop-blur-sm',
    accent: 'bg-gradient-to-br from-purple-100/80 to-pink-100/80 backdrop-blur-sm',
    white: 'bg-white/80 backdrop-blur-sm',
  };

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
