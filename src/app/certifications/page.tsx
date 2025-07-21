import CertificationsList from '@/components/certifications/CertificationsList';
import EducationList from '@/components/certifications/EducationList';

const certifications = [
  { title: 'BPS Accredited CBT Practitioner', issuer: 'British Psychological Society', year: 2022 },
  { title: 'ADHD Clinical Specialist', issuer: 'ADHD Foundation', year: 2021 },
];

const education = [
  { degree: 'MSc Neuroscience of Mental Health', institution: 'King’s College London', year: 2020 },
  { degree: 'BSc Psychology', institution: 'University College London', year: 2018 },
];

export default function CertificationsPage() {
  return (
    <div className="flex flex-column align-items-center justify-content-center min-h-screen gap-6 p-4" style={{ background: 'rgba(255,255,255,0.5)' }}>
      <h1 className="text-3xl font-bold mb-4">Certifications & Education</h1>
      <CertificationsList items={certifications} />
      <EducationList items={education} />
    </div>
  );
} 