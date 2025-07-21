import { Card } from 'primereact/card';

interface Certification {
  title: string;
  issuer: string;
  year: number;
}

export default function CertificationsList({ items }: { items: Certification[] }) {
  return (
    <div className="flex flex-column gap-4 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
      {items.map((cert, idx) => (
        <Card key={idx} className="w-full glossy-cert-card" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1.25rem', boxShadow: '0 2px 8px 0 rgba(177,156,217,0.10)', padding: '1.5rem', backdropFilter: 'blur(6px)' }}>
          <div className="flex flex-column md:flex-row align-items-center justify-content-between gap-2">
            <div>
              <div className="font-bold text-lg mb-1">{cert.title}</div>
              <div className="text-gray-700 text-sm">{cert.issuer}</div>
            </div>
            <div className="text-primary-purple font-semibold text-md">{cert.year}</div>
          </div>
        </Card>
      ))}
    </div>
  );
} 