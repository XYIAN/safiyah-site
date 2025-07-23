'use client';

import React from 'react';
import { Brain, Heart, Users, Award } from 'lucide-react';
import Button from '@/components/common/Button';
import CenteredLayout from '@/components/common/CenteredLayout';
import InfoCard from '@/components/common/InfoCard';

export default function AboutSection() {
  return (
    <section className="py-16 px-8 md:px-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <CenteredLayout>
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          I am a dedicated mental health professional with expertise in ADHD assessment, emotional
          support, and therapeutic interventions. My passion lies in helping individuals navigate
          their mental health journey with compassion and evidence-based care.
        </p>

        {/* Quick Service Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-4xl">
          <InfoCard
            icon={<Brain className="w-8 h-8 text-purple-600" />}
            title="ADHD Assessment"
            description="Comprehensive evaluation and diagnosis"
          />
          <InfoCard
            icon={<Heart className="w-8 h-8 text-purple-600" />}
            title="Emotional Support"
            description="Compassionate care for emotional well-being"
          />
          <InfoCard
            icon={<Users className="w-8 h-8 text-purple-600" />}
            title="Family Therapy"
            description="Supporting families through challenging times"
          />
          <InfoCard
            icon={<Award className="w-8 h-8 text-purple-600" />}
            title="Research"
            description="Contributing to mental health research"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="primary" href="/about" className="text-lg px-8 py-4">
            Learn More About My Work
          </Button>
        </div>
      </CenteredLayout>
    </section>
  );
}
