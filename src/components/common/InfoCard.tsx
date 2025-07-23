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
      className={`flex flex-col items-center justify-center border-round-xl shadow-md p-4 md:p-6 mb-4 ${className}`}
      style={{
        maxWidth: 280,
        margin: '0 auto',
        background: 'rgba(177,156,217,0.13)',
        backdropFilter: 'blur(4px)',
        minHeight: 160,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-3">{icon}</div>
        <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
