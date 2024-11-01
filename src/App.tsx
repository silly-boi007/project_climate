import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Journal } from './pages/Journal';
import { Podcast } from './pages/Podcast';
import { News } from './pages/News';
import { Stories } from './pages/Stories';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeToggle />
        <Navigation />
        <Header />
        <main className="max-w-screen-xl mx-auto px-4 py-8 mb-16 md:mt-16">
          <Routes>
            <Route path="/" element={<Journal />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/news" element={<News />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;