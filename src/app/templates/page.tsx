'use client';

import Link from 'next/link';

const templates = [
  {
    id: 'nda',
    title: 'Non-Disclosure Agreement',
    description: 'Protect your confidential information when sharing with others.',
    icon: '🤐',
  },
  {
    id: 'loan',
    title: 'Personal Loan Agreement',
    description: 'Document a personal loan between individuals.',
    icon: '💰',
  },
  {
    id: 'services',
    title: 'Service Agreement',
    description: 'Define the terms of service between provider and client.',
    icon: '🤝',
  },
  {
    id: 'rental',
    title: 'Equipment Rental',
    description: 'Outline terms for renting equipment or property.',
    icon: '🔧',
  },
  {
    id: 'partnership',
    title: 'Partnership Agreement',
    description: 'Establish terms between business partners.',
    icon: '👥',
  },
  {
    id: 'sale',
    title: 'Bill of Sale',
    description: 'Document the sale of goods or property.',
    icon: '🏷️',
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Contract Templates</h1>
          <p className="mt-2 text-gray-600">
            Choose a template to get started quickly, or create a custom agreement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link
              key={template.id}
              href={`/create?template=${template.id}`}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {template.title}
              </h3>
              <p className="text-gray-600">{template.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/create"
            className="inline-flex items-center text-blue-600 hover:text-blue-500"
          >
            Create Custom Agreement <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 