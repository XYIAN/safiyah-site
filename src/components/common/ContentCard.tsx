'use client';

import React from 'react';
import Card from './Card';

interface ContentCardProps {
  title: string;
  description: string;
  bulletPoints?: string[];
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  bulletListClassName?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  bulletPoints = [],
  className = '',
  titleClassName = 'text-xl font-semibold mb-4 text-primary-purple',
  descriptionClassName = 'text-gray-600 mb-4',
  bulletListClassName = 'text-gray-600 space-y-2'
}) => {
  return (
    <Card className={className}>
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
      {bulletPoints.length > 0 && (
        <ul className={bulletListClassName}>
          {bulletPoints.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default ContentCard; 