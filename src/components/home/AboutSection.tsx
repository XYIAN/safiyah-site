'use client';

import React from 'react';
import { Brain, Heart, Users, Award } from 'lucide-react';
import Button from '@/components/common/Button';
import CenteredLayout from '@/components/common/CenteredLayout';
import InfoCard from '@/components/common/InfoCard';

export default function AboutSection() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <CenteredLayout>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">About Me</h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Dedicated mental health professional specializing in ADHD assessment and therapeutic
          interventions.
        </p>

        {/* Quick Service Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-2xl">
          <InfoCard
            icon={<Brain className="w-6 h-6 text-purple-600" />}
            title="ADHD Assessment"
            description="Comprehensive evaluation and diagnosis"
          />
          <InfoCard
            icon={<Heart className="w-6 h-6 text-purple-600" />}
            title="Emotional Support"
            description="Compassionate care for emotional well-being"
          />
          <InfoCard
            icon={<Users className="w-6 h-6 text-purple-600" />}
            title="Family Therapy"
            description="Supporting families through challenging times"
          />
          <InfoCard
            icon={<Award className="w-6 h-6 text-purple-600" />}
            title="Research"
            description="Contributing to mental health research"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="primary" href="/about" className="px-6 py-3">
            Learn More About My Work
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
}
