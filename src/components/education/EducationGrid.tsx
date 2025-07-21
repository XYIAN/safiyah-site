'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Education, Certification } from '@/types';
import Card from '@/components/common/Card';

const EducationGrid: React.FC = () => {
  const education: Education[] = [
    {
      id: '1',
      degree: 'Doctorate in Clinical Psychology (DClinPsy)',
      institution: 'University of Oxford',
      location: 'Oxford, UK',
      startDate: '2017',
      endDate: '2020',
      gpa: 'Distinction',
      relevantCoursework: [
        'Advanced Clinical Assessment',
        'Evidence-Based Interventions',
        'Research Methods in Psychology',
        'Child and Adolescent Psychology',
        'Neuropsychological Assessment'
      ],
      honors: [
        'Dean\'s List for Academic Excellence',
        'Outstanding Research Award',
        'Clinical Practice Excellence Award'
      ],
      logo: '/oxford-logo.png'
    },
    {
      id: '2',
      degree: 'Master of Science in Psychology',
      institution: 'University College London',
      location: 'London, UK',
      startDate: '2015',
      endDate: '2017',
      gpa: 'First Class Honours',
      relevantCoursework: [
        'Cognitive Psychology',
        'Developmental Psychology',
        'Research Design and Statistics',
        'Clinical Psychology Foundations',
        'Mental Health and Wellbeing'
      ],
      honors: [
        'Distinction in Research Project',
        'Academic Merit Scholarship',
        'Student Representative for Psychology Department'
      ],
      logo: '/ucl-logo.png'
    },
    {
      id: '3',
      degree: 'Bachelor of Science in Psychology',
      institution: 'King\'s College London',
      location: 'London, UK',
      startDate: '2012',
      endDate: '2015',
      gpa: 'First Class Honours',
      relevantCoursework: [
        'Introduction to Psychology',
        'Biological Psychology',
        'Social Psychology',
        'Research Methods',
        'Statistics for Psychology'
      ],
      honors: [
        'Dean\'s List for Academic Excellence',
        'Best Final Year Project Award',
        'Psychology Society President'
      ],
      logo: '/kcl-logo.png'
    }
  ];

  const certifications: Certification[] = [
    {
      id: '1',
      name: 'ADHD Assessment Specialist',
      issuingOrganization: 'British Psychological Society',
      issueDate: '2021',
      credentialId: 'BPS-ADHD-2021-001',
      credentialUrl: 'https://www.bps.org.uk',
      logo: '/bps-logo.png'
    },
    {
      id: '2',
      name: 'Cognitive Behavioral Therapy Practitioner',
      issuingOrganization: 'Beck Institute for Cognitive Behavior Therapy',
      issueDate: '2020',
      credentialId: 'BECK-CBT-2020-045',
      credentialUrl: 'https://beckinstitute.org',
      logo: '/beck-logo.png'
    },
    {
      id: '3',
      name: 'Family Therapy Specialist',
      issuingOrganization: 'Association for Family Therapy',
      issueDate: '2019',
      credentialId: 'AFT-FT-2019-023',
      credentialUrl: 'https://www.aft.org.uk',
      logo: '/aft-logo.png'
    },
    {
      id: '4',
      name: 'Mindfulness-Based Stress Reduction Instructor',
      issuingOrganization: 'Center for Mindfulness',
      issueDate: '2018',
      credentialId: 'CFM-MBSR-2018-012',
      credentialUrl: 'https://www.umassmed.edu/cfm',
      logo: '/cfm-logo.png'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Academic Qualifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  {/* Institution Logo Placeholder */}
                  <div className="w-16 h-16 bg-primary-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary-purple" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-primary-purple mb-2">
                      {edu.institution}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>

                    {edu.gpa && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-3">
                        {edu.gpa}
                      </div>
                    )}

                    {edu.relevantCoursework && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Key Coursework:</h4>
                        <ul className="space-y-1">
                          {edu.relevantCoursework.slice(0, 3).map((course, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="text-primary-purple mr-2">•</span>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.honors && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Honors & Awards:</h4>
                        <ul className="space-y-1">
                          {edu.honors.slice(0, 2).map((honor, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="text-yellow-500 mr-2">🏆</span>
                              {honor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                {/* Certification Logo Placeholder */}
                <div className="w-16 h-16 bg-primary-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-purple" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-primary-purple font-medium mb-2">
                  {cert.issuingOrganization}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Issued: {cert.issueDate}
                </p>
                
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-purple hover:text-primary-purple-dark transition-colors"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Verify Credential
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationGrid; 