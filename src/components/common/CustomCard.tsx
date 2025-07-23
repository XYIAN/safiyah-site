import React from 'react';
import { Card as PrimeCard, CardProps as PrimeCardProps } from 'primereact/card';

interface CustomCardProps extends Omit<PrimeCardProps, 'className'> {
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export default function CustomCard({
  children,
  variant = 'default',
  className = '',
  ...props
}: CustomCardProps) {
  const variantClasses = {
    default: 'bg-white shadow-sm border border-purple-100',
    elevated: 'bg-white shadow-lg border border-purple-200',
    outlined: 'bg-transparent border-2 border-purple-200',
  };

  const classes = `${variantClasses[variant]} ${className}`;

  return (
    <PrimeCard className={classes} {...props}>
      {children}
    </PrimeCard>
  );
}
