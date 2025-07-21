'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface StatsCardProps {
  icon?: LucideIcon;
  number: string;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  numberClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  number,
  title,
  description,
  className = '',
  iconClassName = 'w-12 h-12 text-primary-purple mx-auto mb-4',
  numberClassName = 'text-3xl font-bold text-primary-purple mb-2',
  titleClassName = 'text-lg font-semibold mb-2',
  descriptionClassName = 'text-gray-600 text-sm'
}) => {
  return (
    <Card className={`text-center ${className}`}>
      {Icon && <Icon className={iconClassName} />}
      <div className={numberClassName}>{number}</div>
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </Card>
  );
};

export default StatsCard; 