import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Mail, Linkedin } from 'lucide-react';

export default function LinksPage() {
  return (
    <div className="flex flex-column align-items-center justify-content-center min-h-screen gap-4 p-4" style={{ background: 'rgba(255,255,255,0.5)' }}>
      <h1 className="text-3xl font-bold mb-4">Links</h1>
      <Card className="w-full max-w-20rem glossy-link-card mb-3" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1.5rem', boxShadow: '0 4px 16px 0 rgba(177,156,217,0.12)', padding: '2rem', backdropFilter: 'blur(8px)' }}>
        <Button icon={<Linkedin size={20} />} label="LinkedIn" className="w-full p-button-lg p-button-outlined mb-2" style={{ color: '#0a66c2', borderColor: '#0a66c2' }} onClick={() => window.open('https://www.linkedin.com/in/safiyah-sohail-5b64a7161/', '_blank')} />
      </Card>
      <Card className="w-full max-w-20rem glossy-link-card" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '1.5rem', boxShadow: '0 4px 16px 0 rgba(177,156,217,0.12)', padding: '2rem', backdropFilter: 'blur(8px)' }}>
        <Button icon={<Mail size={20} />} label="Email" className="w-full p-button-lg p-button-outlined" style={{ color: '#b19cd9', borderColor: '#b19cd9' }} onClick={() => window.open('mailto:safiyah.sohail@gmail.com')} />
      </Card>
    </div>
  );
} 