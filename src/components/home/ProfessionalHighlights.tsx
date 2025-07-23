'use client';

import React from 'react';
import { Clock, Users, FileText, Star } from 'lucide-react';
import Button from '@/components/common/Button';
import CenteredLayout from '@/components/common/CenteredLayout';

export default function ProfessionalHighlights() {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <CenteredLayout>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">
          Professional Highlights
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-md mx-auto">
          My commitment to mental health care and professional development.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-800 mb-1">5+</div>
            <div className="text-sm font-medium text-purple-700">Years Experience</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-800 mb-1">200+</div>
            <div className="text-sm font-medium text-purple-700">Clients Helped</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
            <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-800 mb-1">15+</div>
            <div className="text-sm font-medium text-purple-700">Research Papers</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
            <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-800 mb-1">100%</div>
            <div className="text-sm font-medium text-purple-700">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="secondary" href="/experience" className="px-6 py-3">
            View My Experience
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
}
