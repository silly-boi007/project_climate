import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { PodcastEpisode } from '../types';

interface PodcastPlayerProps {
  episode: PodcastEpisode;
}

export function PodcastPlayer({ episode }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (seconds: number) => {
    setProgress(Math.min(100, Math.max(0, progress + seconds)));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <div className="flex flex-col">
            <span className="font-medium">{episode.title}</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{episode.duration}</span>
          </div>
        </div>
        <Volume2 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </div>
      <div className="space-y-2">
        <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded-full">
          <div
            className="h-full bg-emerald-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <button
            onClick={() => handleSkip(-15)}
            className="flex items-center space-x-1 hover:scale-105 transition duration-300 ease-in-out hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <SkipBack className="w-4 h-4" />
            <span>15s</span>
          </button>
          <button
            onClick={() => handleSkip(15)}
            className="flex items-center space-x-1 hover:scale-105 transition duration-300 ease-in-out hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <span>15s</span>
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}