'use client';

import React from 'react';
import { Clock, Users, FileText, Star } from 'lucide-react';
import Button from '@/components/common/Button';
import CenteredLayout from '@/components/common/CenteredLayout';

export default function ProfessionalHighlights() {
  return (
    <section className="py-16 px-8 md:px-12 bg-white">
      <CenteredLayout>
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
          Professional Highlights
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          My commitment to mental health care and professional development has been recognized
          through various achievements and experiences.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 w-full max-w-4xl">
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-800 mb-2">5+</div>
            <div className="text-lg font-medium text-purple-700 mb-2">Years Experience</div>
            <div className="text-sm text-gray-600">
              Providing mental health support and clinical assessment
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-800 mb-2">200+</div>
            <div className="text-lg font-medium text-purple-700 mb-2">Clients Helped</div>
            <div className="text-sm text-gray-600">
              Supporting individuals on their mental health journey
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-800 mb-2">15+</div>
            <div className="text-lg font-medium text-purple-700 mb-2">Research Papers</div>
            <div className="text-sm text-gray-600">
              Contributing to mental health research and literature
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-800 mb-2">100%</div>
            <div className="text-lg font-medium text-purple-700 mb-2">Client Satisfaction</div>
            <div className="text-sm text-gray-600">
              Dedicated to providing exceptional care and support
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="secondary" href="/experience" className="text-lg px-8 py-4">
            View My Experience
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
}
