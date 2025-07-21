'use client';

import React from 'react';
import { Brain, Heart, Users, Award, BookOpen, Target, Shield } from 'lucide-react';
import Section from '@/components/common/Section';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

const AboutSection: React.FC = () => {
  return (
    <>
      {/* Professional Summary */}
      <Section background="secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
            <p className="text-lg text-gray-600 mb-6">
              Passionate about understanding and supporting individuals through psychological challenges, I am dedicated to delivering evidence-based interventions to improve mental well-being. With a strong academic foundation—BSc in Psychology and MSc in Neuroscience of Mental Health—I have developed expertise in psychological assessments, therapeutic approaches (CBT, mindfulness), and clinical research.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My experience spans diverse mental health settings, from working as an Assistant Psychologist conducting ADHD assessments and risk evaluations to providing direct emotional and behavioral support to children and adolescents in care. I thrive in multidisciplinary environments, collaborating with healthcare professionals to develop personalized treatment strategies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Committed to lifelong learning, I actively engage in professional development, staying updated on the latest advancements in clinical psychology. I am eager to contribute to innovative, client-centered mental health care and advocate for accessible psychological support for all.
            </p>
            <Button variant="primary" href="/experience" className="mt-8">
              View My Experience
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <Brain className="w-12 h-12 text-primary-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">ADHD Specialist</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive assessment and intervention for ADHD
              </p>
            </Card>
            <Card className="text-center">
              <Heart className="w-12 h-12 text-primary-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Emotional Support</h3>
              <p className="text-gray-600 text-sm">
                Compassionate care for emotional well-being
              </p>
            </Card>
            <Card className="text-center">
              <Users className="w-12 h-12 text-primary-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Family Therapy</h3>
              <p className="text-gray-600 text-sm">
                Supporting families through challenging times
              </p>
            </Card>
            <Card className="text-center">
              <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Research</h3>
              <p className="text-gray-600 text-sm">
                Contributing to mental health research
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values and Mission */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Values & Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My commitment to mental health care is guided by core values that shape 
            every aspect of my professional practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <Shield className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compassion</h3>
            <p className="text-gray-600">
              Every individual deserves to be treated with kindness, understanding, 
              and respect. I believe in creating a safe, non-judgmental space where 
              clients feel heard and supported.
            </p>
          </Card>

          <Card className="text-center">
            <Target className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Evidence-Based Practice</h3>
            <p className="text-gray-600">
              My therapeutic approaches are grounded in scientific research and 
              proven methodologies, ensuring the most effective interventions 
              for positive outcomes.
            </p>
          </Card>

          <Card className="text-center">
            <BookOpen className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
            <p className="text-gray-600">
              I am committed to ongoing professional development and staying 
              current with the latest research and therapeutic techniques 
              in mental health care.
            </p>
          </Card>
        </div>
      </Section>

      {/* Therapeutic Approach */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Therapeutic Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My therapeutic approach is integrative, drawing from multiple evidence-based 
            modalities to provide comprehensive care tailored to each individual&apos;s needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Cognitive Behavioral Therapy (CBT)
            </h3>
            <p className="text-gray-600 mb-4">
              Helping clients identify and change negative thought patterns and behaviors 
              that contribute to emotional distress and mental health challenges.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Thought pattern identification and restructuring</li>
              <li>• Behavioral activation and goal setting</li>
              <li>• Coping skill development</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              ADHD Assessment & Intervention
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive evaluation and evidence-based interventions for individuals 
              with ADHD, including children, adolescents, and adults.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Comprehensive diagnostic assessment</li>
              <li>• Behavioral and cognitive interventions</li>
              <li>• Family support and education</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Mindfulness-Based Approaches
            </h3>
            <p className="text-gray-600 mb-4">
              Incorporating mindfulness techniques to help clients develop greater 
              self-awareness and emotional regulation skills.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Stress reduction and relaxation techniques</li>
              <li>• Emotional regulation strategies</li>
              <li>• Present-moment awareness training</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Family Systems Therapy
            </h3>
            <p className="text-gray-600 mb-4">
              Working with families to improve communication, resolve conflicts, 
              and strengthen relationships for better mental health outcomes.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Family communication improvement</li>
              <li>• Conflict resolution strategies</li>
              <li>• Parenting support and guidance</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I&apos;m here to support you on your path to better mental health. 
            Let&apos;s work together to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Schedule a Consultation
            </Button>
            <Button variant="secondary" size="lg" href="/education">
              View My Qualifications
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutSection; 