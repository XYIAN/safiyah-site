'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    elevated: 'shadow-xl'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={{ 
        y: onClick ? -8 : -4,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card; 