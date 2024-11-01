import React from 'react';
import { useUserStories } from '../hooks/useUserStories';

export function Stories() {
  const { stories } = useUserStories();

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Community Stories</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {stories.map(story => (
          <article key={story.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{story.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{story.author}</span>
              <span>{story.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}