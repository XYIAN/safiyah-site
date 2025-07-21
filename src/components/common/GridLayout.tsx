'use client';

import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  children,
  cols = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'gap-6',
  className = ''
}) => {
  const gridCols = [
    cols.sm ? `grid-cols-${cols.sm}` : 'grid-cols-1',
    cols.md ? `md:grid-cols-${cols.md}` : '',
    cols.lg ? `lg:grid-cols-${cols.lg}` : '',
    cols.xl ? `xl:grid-cols-${cols.xl}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`grid ${gridCols} ${gap} ${className}`}>
      {children}
    </div>
  );
};

export default GridLayout; 