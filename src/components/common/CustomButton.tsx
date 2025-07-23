import React from 'react';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button';
import Link from 'next/link';

interface CustomButtonProps extends Omit<PrimeButtonProps, 'className' | 'size'> {
  href?: string;
  variant?: 'primary' | 'secondary';
  buttonSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CustomButton({
  children,
  href,
  variant = 'primary',
  buttonSize = 'md',
  className = '',
  ...props
}: CustomButtonProps) {
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white hover:from-purple-700 hover:to-pink-700',
    secondary: 'bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${variantClasses[variant]} ${sizeClasses[buttonSize]} ${className} whitespace-nowrap`;

  if (href) {
    return (
      <Link href={href} className="no-underline">
        <PrimeButton className={classes} {...props}>
          {children}
        </PrimeButton>
      </Link>
    );
  }

  return (
    <PrimeButton className={classes} {...props}>
      {children}
    </PrimeButton>
  );
}
