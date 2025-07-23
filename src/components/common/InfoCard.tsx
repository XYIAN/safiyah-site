import React from 'react';

export default function InfoCard({
  icon,
  title,
  description,
  className = '',
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center border-round-lg shadow-sm p-3 md:p-4 mb-3 ${className}`}
      style={{
        maxWidth: 200,
        margin: '0 auto',
        background: 'rgba(177,156,217,0.13)',
        backdropFilter: 'blur(4px)',
        minHeight: 120,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-2">{icon}</div>
        <h3 className="text-sm font-semibold text-purple-800 mb-1">{title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
