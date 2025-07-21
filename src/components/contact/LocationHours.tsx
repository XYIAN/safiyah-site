'use client';

import React from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import GridLayout from '@/components/common/GridLayout';
import Card from '@/components/common/Card';

const LocationHours: React.FC = () => {
  return (
    <Section background="primary">
      <SectionHeader
        title="Location & Hours"
        subtitle="Conveniently located in London with flexible scheduling options"
      />

      <GridLayout cols={{ sm: 1, lg: 2 }} gap="gap-8">
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
      </GridLayout>
    </Section>
  );
};

export default LocationHours; 