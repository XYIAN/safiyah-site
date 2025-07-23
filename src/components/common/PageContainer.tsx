import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
