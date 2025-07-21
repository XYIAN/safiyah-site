'use client';

import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  ...props
}) => {
  const baseClasses = 'card';
  const variantClasses = {
    default: '',
    glossy: 'card--glossy',
    elevated: 'shadow-xl',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
