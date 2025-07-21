import Section from '@/components/common/Section'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import EducationGrid from '@/components/education/EducationGrid'
import { GraduationCap, Award, BookOpen, Target } from 'lucide-react'

export default function EducationPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="section--hero">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Education & <span className="text-primary-purple">Qualifications</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            My academic journey and professional certifications reflect my commitment to 
            excellence in mental health care and continuous learning.
          </p>
        </div>
      </Section>

      {/* Education Grid */}
      <Section background="secondary">
        <EducationGrid />
      </Section>

      {/* Academic Highlights */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Academic Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key achievements and milestones throughout my educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <GraduationCap className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">3</div>
            <h3 className="text-lg font-semibold mb-2">Degrees Earned</h3>
            <p className="text-gray-600 text-sm">
              From Bachelor&apos;s to Doctorate in Clinical Psychology
            </p>
          </Card>

          <Card className="text-center">
            <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">4</div>
            <h3 className="text-lg font-semibold mb-2">Professional Certifications</h3>
            <p className="text-gray-600 text-sm">
              Specialized training in ADHD, CBT, and family therapy
            </p>
          </Card>

          <Card className="text-center">
            <BookOpen className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">15+</div>
            <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
            <p className="text-gray-600 text-sm">
              Published academic research and clinical studies
            </p>
          </Card>

          <Card className="text-center">
            <Target className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">8+</div>
            <h3 className="text-lg font-semibold mb-2">Years of Study</h3>
            <p className="text-gray-600 text-sm">
              Dedicated academic pursuit in psychology and mental health
            </p>
          </Card>
        </div>
      </Section>

      {/* Research Focus */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research Focus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My research interests and contributions to the field of mental health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              ADHD Assessment & Intervention
            </h3>
            <p className="text-gray-600 mb-4">
              Research focused on improving diagnostic accuracy and developing 
              more effective intervention strategies for individuals with ADHD.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Development of screening tools for early detection</li>
              <li>• Effectiveness of behavioral interventions</li>
              <li>• Family-based treatment approaches</li>
              <li>• Long-term outcomes of ADHD treatment</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Child & Adolescent Mental Health
            </h3>
            <p className="text-gray-600 mb-4">
              Investigating mental health challenges in young people and developing 
              age-appropriate therapeutic interventions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Developmental psychology research</li>
              <li>• School-based mental health programs</li>
              <li>• Family therapy effectiveness</li>
              <li>• Prevention and early intervention</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Evidence-Based Practice
            </h3>
            <p className="text-gray-600 mb-4">
              Contributing to the development and evaluation of evidence-based 
              therapeutic approaches in clinical psychology.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Clinical outcome research</li>
              <li>• Treatment effectiveness studies</li>
              <li>• Implementation science</li>
              <li>• Quality improvement in mental health care</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Mental Health Technology
            </h3>
            <p className="text-gray-600 mb-4">
              Exploring the integration of technology in mental health care, 
              including digital interventions and telehealth applications.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Digital mental health interventions</li>
              <li>• Telehealth effectiveness research</li>
              <li>• Mobile app-based therapies</li>
              <li>• Technology-assisted assessment tools</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Professional Development */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ongoing Professional Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My commitment to continuous learning and staying current with the latest 
            developments in mental health care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="text-2xl font-bold text-primary-purple mb-2">50+</div>
            <h3 className="text-lg font-semibold mb-2">Annual CPD Hours</h3>
            <p className="text-gray-600 text-sm">
              Continuing professional development through workshops, conferences, and training
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-2xl font-bold text-primary-purple mb-2">5+</div>
            <h3 className="text-lg font-semibold mb-2">Conference Presentations</h3>
            <p className="text-gray-600 text-sm">
              Sharing research findings and clinical expertise at professional conferences
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-2xl font-bold text-primary-purple mb-2">3+</div>
            <h3 className="text-lg font-semibold mb-2">Professional Memberships</h3>
            <p className="text-gray-600 text-sm">
              Active membership in leading psychological and mental health organizations
            </p>
          </Card>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            My qualifications and expertise are available to support your mental health needs. 
            Let&apos;s discuss how I can help you or your organization.
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