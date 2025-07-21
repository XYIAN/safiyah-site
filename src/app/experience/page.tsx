import Section from '@/components/common/Section'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline'
import { Award, Users, TrendingUp, Target } from 'lucide-react'

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="section--hero">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Professional <span className="text-primary-purple">Experience</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            My journey in mental health care, from early clinical practice to senior leadership roles, 
            has been driven by a commitment to evidence-based care and continuous professional development.
          </p>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Career Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional growth and contributions to mental health care
          </p>
        </div>
        <ExperienceTimeline />
      </Section>

      {/* Key Achievements */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlights of my contributions to mental health care and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">15+</div>
            <h3 className="text-lg font-semibold mb-2">Research Papers</h3>
            <p className="text-gray-600 text-sm">
              Published peer-reviewed research on ADHD interventions and mental health care
            </p>
          </Card>

          <Card className="text-center">
            <Users className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">500+</div>
            <h3 className="text-lg font-semibold mb-2">Clients Helped</h3>
            <p className="text-gray-600 text-sm">
              Successfully supported individuals and families through mental health challenges
            </p>
          </Card>

          <Card className="text-center">
            <TrendingUp className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">40%</div>
            <h3 className="text-lg font-semibold mb-2">Efficiency Improvement</h3>
            <p className="text-gray-600 text-sm">
              Reduced assessment wait times through process optimization and innovation
            </p>
          </Card>

          <Card className="text-center">
            <Target className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary-purple mb-2">5+</div>
            <h3 className="text-lg font-semibold mb-2">Mentees Supervised</h3>
            <p className="text-gray-600 text-sm">
              Guided junior psychologists in their professional development and clinical practice
            </p>
          </Card>
        </div>
      </Section>

      {/* Specializations */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Areas of Specialization</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My expertise spans various aspects of mental health care, with particular focus on 
            ADHD assessment and therapeutic interventions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              ADHD Assessment & Intervention
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive evaluation and evidence-based interventions for individuals with ADHD, 
              including children, adolescents, and adults. Specialized in both diagnostic assessment 
              and ongoing therapeutic support.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Comprehensive diagnostic assessments</li>
              <li>• Behavioral and cognitive interventions</li>
              <li>• Family support and education programs</li>
              <li>• School collaboration and IEP support</li>
              <li>• Medication management consultation</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Child & Adolescent Psychology
            </h3>
            <p className="text-gray-600 mb-4">
              Specialized mental health support for children and adolescents, addressing developmental 
              challenges, emotional regulation, and family dynamics. Age-appropriate therapeutic approaches.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Developmental assessment and intervention</li>
              <li>• Play therapy and creative interventions</li>
              <li>• Family systems therapy</li>
              <li>• School-based mental health support</li>
              <li>• Trauma-informed care</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Clinical Research
            </h3>
            <p className="text-gray-600 mb-4">
              Active involvement in mental health research, contributing to evidence-based practice 
              and advancing understanding of effective interventions for various mental health conditions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• ADHD intervention effectiveness studies</li>
              <li>• Mental health screening tool development</li>
              <li>• Clinical outcome research</li>
              <li>• Peer-reviewed publication</li>
              <li>• Conference presentations</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">
              Therapeutic Interventions
            </h3>
            <p className="text-gray-600 mb-4">
              Evidence-based therapeutic approaches including CBT, mindfulness-based interventions, 
              and family therapy. Tailored treatment plans for individual needs and goals.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cognitive Behavioral Therapy (CBT)</li>
              <li>• Mindfulness-based stress reduction</li>
              <li>• Family systems therapy</li>
              <li>• Group therapy facilitation</li>
              <li>• Crisis intervention and support</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Professional Development */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My commitment to continuous learning and staying current with the latest research 
            and therapeutic techniques in mental health care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="text-2xl font-bold text-primary-purple mb-2">50+</div>
            <h3 className="text-lg font-semibold mb-2">Continuing Education Hours</h3>
            <p className="text-gray-600 text-sm">
              Annual professional development through workshops, conferences, and training programs
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-2xl font-bold text-primary-purple mb-2">10+</div>
            <h3 className="text-lg font-semibold mb-2">Professional Certifications</h3>
            <p className="text-gray-600 text-sm">
              Specialized certifications in ADHD assessment, CBT, and family therapy
            </p>
          </Card>

          <Card className="text-center">
            <div className="text-2xl font-bold text-primary-purple mb-2">5+</div>
            <h3 className="text-lg font-semibold mb-2">Conference Presentations</h3>
            <p className="text-gray-600 text-sm">
              Sharing expertise and research findings at national and international conferences
            </p>
          </Card>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            My experience and expertise are available to support your mental health needs. 
            Let&apos;s discuss how I can help you or your organization.
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
  )
} 