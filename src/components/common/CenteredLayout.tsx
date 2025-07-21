import React from 'react';

export default function CenteredLayout({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-8 md:p-12 ${className}`}
      style={{ textAlign: 'center' }}
    >
      {children}
    </div>
  );
}
