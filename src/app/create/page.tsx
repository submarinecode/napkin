'use client';

import { useState } from 'react';
import DigitalNapkin from '@/components/napkin/DigitalNapkin';

export default function CreatePage() {
  const handleSave = (content: string) => {
    // TODO: Implement contract saving and legal document generation
    console.log('Saving contract:', content);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Write Your Agreement</h1>
          <p className="mt-2 text-gray-600">
            Write your agreement terms below. We'll transform it into a proper legal document.
          </p>
        </div>

        <DigitalNapkin onSave={handleSave} />
      </div>
    </div>
  );
} 