import React from 'react';
import { Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme'; // Adjust the path if necessary

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="py-10 px-4 bg-gradient-to-r from-emerald-700 to-teal-600 text-white relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <Globe className="w-8 h-8" />
          <span className="text-xl font-serif font-bold uppercase">VIVARTA</span>
        </div>
        <div className="flex items-center justify-center mb-6">
          <h1
            className={`py-16 text-6xl font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-white'} font-playfair`}
          >
            PROJECT CLIMATE IITM
          </h1>
        </div>
        <p className="text-center text-lg max-w-2xl mx-auto text-emerald-50 font-light">
          "Empowering a Sustainable Future, One step at a time"
        </p>
      </div>
    </header>
  );
}
