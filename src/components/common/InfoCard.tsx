import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function InfoCard({ icon, title, description, className = '' }: InfoCardProps) {
  return (
    <div
      className={`flex flex-col align-items-center justify-content-center border-round-xl shadow-md p-6 mb-4 ${className}`}
      style={{
        maxWidth: 340,
        margin: '0 auto',
        background: 'rgba(177,156,217,0.13)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        className="mb-3"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ textAlign: 'center' }}>
        {title}
      </h3>
      <p className="text-gray-600 text-sm" style={{ textAlign: 'center' }}>
        {description}
      </p>
    </div>
  );
}
