import Section from '@/components/common/Section'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import ContactForm from '@/components/contact/ContactForm'
import { MessageCircle, Calendar, FileText, Users } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="section--hero">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-primary-purple">Touch</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Ready to start your mental health journey? I&apos;m here to help with ADHD assessment, 
            therapeutic support, and mental health consultations.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you have questions about my services, want to schedule a consultation, 
            or are interested in working together, I&apos;d love to hear from you.
          </p>
        </div>
        <ContactForm />
      </Section>

      {/* Services Overview */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How I Can Help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My services are designed to provide comprehensive mental health support 
            tailored to your individual needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <MessageCircle className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ADHD Assessment</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive evaluation and diagnosis for children and adults
            </p>
          </Card>

          <Card className="text-center">
            <Users className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Therapeutic Support</h3>
            <p className="text-gray-600 text-sm">
              Individual and family therapy sessions for various mental health needs
            </p>
          </Card>

          <Card className="text-center">
            <Calendar className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Consultation</h3>
            <p className="text-gray-600 text-sm">
              Professional consultation for organizations and healthcare providers
            </p>
          </Card>

          <Card className="text-center">
            <FileText className="w-12 h-12 text-primary-purple mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Research Collaboration</h3>
            <p className="text-gray-600 text-sm">
              Academic and clinical research partnerships in mental health
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about my services and what to expect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              What is the assessment process like?
            </h3>
            <p className="text-gray-600">
              The ADHD assessment typically involves an initial consultation, comprehensive 
              evaluation using standardized tools, and a detailed report with recommendations. 
              The process usually takes 2-3 sessions.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              Do you offer online consultations?
            </h3>
            <p className="text-gray-600">
              Yes, I offer both in-person and online consultations. Online sessions are 
              conducted via secure video platforms and are equally effective for most services.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              How long does therapy typically last?
            </h3>
            <p className="text-gray-600">
              Therapy duration varies based on individual needs and goals. Some clients 
              benefit from short-term interventions (8-12 sessions), while others prefer 
              longer-term support.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              What insurance do you accept?
            </h3>
            <p className="text-gray-600">
              I work with various insurance providers and can provide detailed invoices 
              for reimbursement. Please contact me to discuss your specific insurance coverage.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              Can you work with children and adolescents?
            </h3>
            <p className="text-gray-600">
              Yes, I specialize in working with children and adolescents, including ADHD 
              assessment and therapeutic interventions designed specifically for young people.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-3 text-primary-purple">
              How do I schedule an appointment?
            </h3>
            <p className="text-gray-600">
              You can schedule an appointment by filling out the contact form above, 
              calling me directly, or sending an email. I&apos;ll respond within 24 hours 
              to arrange a consultation.
            </p>
          </Card>
        </div>
      </Section>

      {/* Location & Hours */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Location & Hours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in London with flexible scheduling options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">Office Location</h3>
            <p className="text-gray-600 mb-4">
              My practice is located in central London, easily accessible by public transport. 
              The office provides a comfortable, private environment for consultations.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600"><strong>Address:</strong> Central London, UK</p>
              <p className="text-gray-600"><strong>Transport:</strong> Near major tube stations</p>
              <p className="text-gray-600"><strong>Parking:</strong> Available nearby</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-4 text-primary-purple">Office Hours</h3>
            <p className="text-gray-600 mb-4">
              I offer flexible scheduling to accommodate your needs, including early morning 
              and evening appointments.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600"><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600"><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
              <p className="text-gray-600"><strong>Sunday:</strong> Closed</p>
              <p className="text-gray-600"><strong>Emergency:</strong> Available on request</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Contact me today to schedule 
            a consultation or learn more about how I can support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="mailto:safiyah.sohail@example.com">
              Send Email
            </Button>
            <Button variant="secondary" size="lg" href="tel:+44123456789">
              Call Now
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
} 