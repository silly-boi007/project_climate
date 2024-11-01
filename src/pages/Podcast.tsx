import React from 'react';
import { PodcastPlayer } from '../components/PodcastPlayer';
import { usePodcastEpisodes } from '../hooks/usePodcastEpisodes';

export function Podcast() {
  const { episodes } = usePodcastEpisodes();

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Podcast Episodes</h2>
      <div className="space-y-6">
        {episodes.map(episode => (
          <div key={episode.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{episode.description}</p>
            <PodcastPlayer episode={episode} />
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Show Notes</h4>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm whitespace-pre-wrap">
                {episode.showNotes}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}