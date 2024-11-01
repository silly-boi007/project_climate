import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Mic, Users, Newspaper } from 'lucide-react';

const navItems = [
  { name: 'Journal', icon: Leaf, path: '/' },
  { name: 'Podcast', icon: Mic, path: '/podcast' },
  { name: 'News', icon: Newspaper, path: '/news' },
  { name: 'Stories', icon: Users, path: '/stories' },
];

export function Navigation() {
  return (
    <nav className="fixed z-50 bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center text-sm ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                  } transition-colors`
                }
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
