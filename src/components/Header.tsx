import React from 'react';
import { Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="py-8 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Globe className="w-12 h-12 mr-4" />
          <h1 className="py-16 text-4xl font-bold">Climate Insights</h1>
        </div>
        <p className="text-center text-lg max-w-2xl mx-auto text-emerald-50">
          Exploring climate change through journalism, storytelling, and community engagement
        </p>
      </div>
    </header>
  );
}