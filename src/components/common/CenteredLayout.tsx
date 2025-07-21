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
      className={`flex flex-col align-items-center justify-content-center w-full max-w-4xl mx-auto px-4 py-8 ${className}`}
      style={{ textAlign: 'center' }}
    >
      {children}
    </div>
  );
}
