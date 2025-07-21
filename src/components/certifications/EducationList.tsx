import { Card } from 'primereact/card';

interface Education {
  degree: string;
  institution: string;
  year: number;
}

export default function EducationList({ items }: { items: Education[] }) {
  return (
    <div className="flex flex-column gap-4 w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-2">Education</h2>
      {items.map((edu, idx) => (
        <Card key={idx} className="w-full glossy-edu-card" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1.25rem', boxShadow: '0 2px 8px 0 rgba(177,156,217,0.10)', padding: '1.5rem', backdropFilter: 'blur(6px)' }}>
          <div className="flex flex-column md:flex-row align-items-center justify-content-between gap-2">
            <div>
              <div className="font-bold text-lg mb-1">{edu.degree}</div>
              <div className="text-gray-700 text-sm">{edu.institution}</div>
            </div>
            <div className="text-primary-purple font-semibold text-md">{edu.year}</div>
          </div>
        </Card>
      ))}
    </div>
  );
} 