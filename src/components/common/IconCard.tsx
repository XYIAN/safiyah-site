'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
  iconClassName = 'w-12 h-12 text-primary-purple mx-auto mb-4',
  titleClassName = 'text-lg font-semibold mb-2',
  descriptionClassName = 'text-gray-600 text-sm'
}) => {
  return (
    <Card className={`text-center ${className}`}>
      <Icon className={iconClassName} />
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </Card>
  );
};

export default IconCard; 