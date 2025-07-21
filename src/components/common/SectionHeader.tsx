'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = 'text-center mb-12',
  titleClassName = 'text-3xl font-bold mb-4',
  subtitleClassName = 'text-xl text-gray-600 max-w-3xl mx-auto'
}) => {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader; 