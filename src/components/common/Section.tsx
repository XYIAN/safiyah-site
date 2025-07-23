'use client';

import React from 'react';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'primary',
  ...props
}) => {
  const baseClasses = 'py-12 px-4 md:px-8 flex flex-col items-center justify-center';
  const backgroundClasses = {
    primary: '',
    secondary: '',
    accent: '',
  };

  const classes = `${baseClasses} ${backgroundClasses[background]} ${className}`;

  let sectionStyle = {};
  if (background === 'primary') {
    sectionStyle = {
      background: 'rgba(177,156,217,0.10)',
      backdropFilter: 'blur(6px)',
    };
  } else if (background === 'secondary') {
    sectionStyle = {
      background: 'rgba(177,156,217,0.16)',
      backdropFilter: 'blur(8px)',
    };
  } else if (background === 'accent') {
    sectionStyle = {
      background: 'linear-gradient(135deg, rgba(177,156,217,0.12) 0%, rgba(255,179,217,0.10) 100%)',
      backdropFilter: 'blur(10px)',
    };
  }

  return (
    <section id={id} className={classes} style={sectionStyle} {...props}>
      <div className="w-full max-w-2xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
