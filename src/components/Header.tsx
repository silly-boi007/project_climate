import React from 'react';
import { Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useWeather } from '../hooks/useWeather';

export function Header() {
  const { theme } = useTheme();
  const { weather, loading, error } = useWeather();

  return (
    <header className="py-10 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <Globe className="w-8 h-8" />
          <span className="text-xl font-roboto font-bold uppercase">VIVARTA</span>
        </div>

        {/* Weather Info Tile with Link */}
        <a
          href="https://wttr.in/Chennai"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-28 bg-teal-800 p-3 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-700"
        >
          {loading ? (
            <p className="text-sm">Loading...</p>
          ) : error ? (
            <p className="text-sm text-red-400">Weather unavailable</p>
          ) : (
            <p className="text-sm">{weather}</p>
          )}
        </a>

        <div className="flex items-center justify-center mb-6">
          <h1
            className={`py-16 text-6xl font-bold  ${theme === 'dark' ? 'text-gray-200' : 'text-white'} font-playfair`}
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
