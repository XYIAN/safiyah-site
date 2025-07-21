import Hero from '@/components/home/Hero'
import Section from '@/components/common/Section'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import { Brain, Heart, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Preview Section */}
      <Section id="about" background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am a dedicated mental health professional with expertise in ADHD assessment, 
            emotional support, and therapeutic interventions. My passion lies in helping 
            individuals navigate their mental health journey with compassion and evidence-based care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <Brain className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ADHD Assessment</h3>
            <p className="text-gray-600">
              Comprehensive evaluation and diagnosis of ADHD in children and adults
            </p>
          </Card>

          <Card className="text-center">
            <Heart className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
            <p className="text-gray-600">
              Compassionate therapeutic support for emotional well-being and mental health
            </p>
          </Card>

          <Card className="text-center">
            <Users className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Therapeutic Interventions</h3>
            <p className="text-gray-600">
              Evidence-based therapeutic approaches tailored to individual needs
            </p>
          </Card>

          <Card className="text-center">
            <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clinical Research</h3>
            <p className="text-gray-600">
              Contributing to mental health research and advancing clinical practices
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" href="/about">
            Learn More About Me
          </Button>
        </div>
      </Section>

      {/* Quick Stats Section */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Professional Highlights</h2>
          <p className="text-xl text-gray-600">
            My commitment to mental health care and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-purple mb-2">5+</div>
            <div className="text-lg font-semibold mb-2">Years of Experience</div>
            <p className="text-gray-600">
              Providing mental health support and clinical assessment
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-primary-purple mb-2">200+</div>
            <div className="text-lg font-semibold mb-2">Clients Helped</div>
            <p className="text-gray-600">
              Supporting individuals on their mental health journey
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-primary-purple mb-2">15+</div>
            <div className="text-lg font-semibold mb-2">Research Publications</div>
            <p className="text-gray-600">
              Contributing to mental health research and clinical practice
            </p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for ADHD assessment, emotional support, or therapeutic interventions, 
            I&apos;m here to help you on your mental health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Schedule a Consultation
            </Button>
            <Button variant="secondary" size="lg" href="/experience">
              View My Experience
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
