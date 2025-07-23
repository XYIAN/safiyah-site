'use client';

import React from 'react';
import { Clock, Users, FileText, Star } from 'lucide-react';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';

export default function ProfessionalHighlights() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      number: '5+',
      title: 'Years Experience',
      description: 'Providing mental health support',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: '200+',
      title: 'Clients Helped',
      description: 'Supporting individuals on their journey',
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      number: '15+',
      title: 'Research Papers',
      description: 'Contributing to mental health research',
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      number: '100%',
      title: 'Client Satisfaction',
      description: 'Dedicated to exceptional care',
    },
  ];

  return (
    <Section background="white">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6">
          Professional Highlights
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          My commitment to mental health care and professional development.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100 text-center"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base font-medium text-purple-700 mb-1">
                {stat.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Button variant="secondary" href="/experience" className="px-8 py-3">
          View My Experience
        </Button>
      </div>
    </Section>
  );
}
