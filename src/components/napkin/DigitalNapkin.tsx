'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DigitalNapkinProps {
  onSave: (content: string) => void;
  initialContent?: string;
}

export default function DigitalNapkin({ onSave, initialContent = '' }: DigitalNapkinProps) {
  const [content, setContent] = useState(initialContent);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Napkin background */}
      <div className="bg-white rounded-lg shadow-xl p-8 transform rotate-1">
        <div className="relative min-h-[400px] p-4 bg-white border-2 border-gray-200">
          {/* Napkin texture overlay */}
          <div className="absolute inset-0 bg-[url('/napkin-texture.png')] opacity-10 pointer-events-none" />
          
          {/* Content area */}
          <textarea
            className="w-full h-full min-h-[360px] bg-transparent font-handwriting text-lg leading-relaxed resize-none focus:outline-none"
            placeholder="Write your agreement here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* Date stamp */}
          <div className="absolute top-4 right-4 text-gray-400 font-handwriting">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => setContent('')}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Clear
        </button>
        <button
          onClick={() => onSave(content)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
        >
          Save Agreement
        </button>
      </div>
    </div>
  );
} 