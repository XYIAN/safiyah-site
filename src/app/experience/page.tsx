import Section from '@/components/common/Section'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline'
import KeyAchievements from '@/components/experience/KeyAchievements'
import Specializations from '@/components/experience/Specializations'
import ProfessionalDevelopment from '@/components/experience/ProfessionalDevelopment'
import PageHero from '@/components/common/PageHero'
import PageCallToAction from '@/components/common/PageCallToAction'

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Professional Experience"
        subtitle="My journey in mental health care, from early clinical practice to senior leadership roles, has been driven by a commitment to evidence-based care and continuous professional development."
        highlightedWord="Experience"
      />

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

      <KeyAchievements />
      <Specializations />
      <ProfessionalDevelopment />

      <PageCallToAction
        title="Interested in Working Together?"
        subtitle="My experience and expertise are available to support your mental health needs. Let's discuss how I can help you or your organization."
        primaryButton={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View My Qualifications",
          href: "/education"
        }}
      />
    </>
  )
} 