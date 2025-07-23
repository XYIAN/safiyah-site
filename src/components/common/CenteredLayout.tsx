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
      className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4 md:p-8 ${className}`}
      style={{ textAlign: 'center' }}
    >
      {children}
    </div>
  );
}
