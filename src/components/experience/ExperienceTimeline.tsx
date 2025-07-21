'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Experience } from '@/types';

const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Clinical Psychologist',
      company: 'London Mental Health Clinic',
      location: 'London, UK',
      startDate: '2022',
      endDate: 'Present',
      current: true,
      description: [
        'Lead comprehensive ADHD assessments for children and adults',
        'Provide evidence-based therapeutic interventions for various mental health conditions',
        'Supervise junior psychologists and contribute to clinical research',
        'Develop and implement treatment plans for complex cases'
      ],
      skills: ['ADHD Assessment', 'CBT', 'Family Therapy', 'Clinical Supervision', 'Research'],
      achievements: [
        'Reduced assessment wait times by 40% through process optimization',
        'Published 3 peer-reviewed research papers on ADHD interventions',
        'Mentored 5 junior psychologists in clinical practice'
      ]
    },
    {
      id: '2',
      title: 'Clinical Psychologist',
      company: 'Manchester Psychology Services',
      location: 'Manchester, UK',
      startDate: '2020',
      endDate: '2022',
      current: false,
      description: [
        'Conducted psychological assessments and provided therapeutic interventions',
        'Specialized in working with children and adolescents with ADHD',
        'Collaborated with schools and families to support educational needs',
        'Delivered group therapy sessions for anxiety and depression'
      ],
      skills: ['Child Psychology', 'ADHD Assessment', 'Group Therapy', 'School Collaboration'],
      achievements: [
        'Successfully treated 150+ children with ADHD and related conditions',
        'Developed innovative group therapy program for adolescent anxiety',
        'Received Excellence in Clinical Practice Award'
      ]
    },
    {
      id: '3',
      title: 'Assistant Psychologist',
      company: 'Birmingham Mental Health Trust',
      location: 'Birmingham, UK',
      startDate: '2019',
      endDate: '2020',
      current: false,
      description: [
        'Supported senior psychologists in clinical assessments and interventions',
        'Conducted research on ADHD prevalence in primary school children',
        'Assisted in developing therapeutic materials and resources',
        'Provided administrative support for clinical programs'
      ],
      skills: ['Research Methods', 'Clinical Support', 'Data Analysis', 'Resource Development'],
      achievements: [
        'Co-authored research paper on ADHD screening tools',
        'Improved patient satisfaction scores by 25%',
        'Streamlined assessment procedures for better efficiency'
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          className={`relative flex items-start mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-purple rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

          {/* Content Card */}
          <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Current Badge */}
              {experience.current && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
                  Current Position
                </div>
              )}

              {/* Title and Company */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {experience.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Building size={16} className="mr-2" />
                <span className="font-medium">{experience.company}</span>
              </div>

              {/* Location and Dates */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {experience.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-primary-purple mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Skills & Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-purple/10 text-primary-purple text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {experience.achievements && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline; 