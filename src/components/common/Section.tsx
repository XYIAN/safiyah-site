'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'primary',
  ...props
}) => {
  const baseClasses = 'section';
  const backgroundClasses = {
    primary: '',
    secondary: 'section--alternate',
    accent: 'bg-accent'
  };

  const classes = `${baseClasses} ${backgroundClasses[background]} ${className}`;

  return (
    <motion.section
      id={id}
      className={classes}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
};

export default Section; 