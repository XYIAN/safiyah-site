import PageHero from '@/components/common/PageHero'
import ContactFormSection from '@/components/contact/ContactFormSection'
import ServicesOverview from '@/components/contact/ServicesOverview'
import FAQSection from '@/components/contact/FAQSection'
import LocationHours from '@/components/contact/LocationHours'
import PageCallToAction from '@/components/common/PageCallToAction'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Ready to start your mental health journey? I'm here to help with ADHD assessment, therapeutic support, and mental health consultations."
        highlightedWord="Touch"
      />

      <ContactFormSection />
      <ServicesOverview />
      <FAQSection />
      <LocationHours />

      <PageCallToAction
        title="Ready to Begin?"
        subtitle="Take the first step towards better mental health. Contact me today to schedule a consultation or learn more about how I can support you."
        primaryButton={{
          text: "Send Email",
          href: "mailto:safiyah.sohail@example.com"
        }}
        secondaryButton={{
          text: "Call Now",
          href: "tel:+44123456789"
        }}
      />
    </>
  )
} 