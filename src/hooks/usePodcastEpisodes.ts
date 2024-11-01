import { useState } from 'react';
import { PodcastEpisode } from '../types';

export function usePodcastEpisodes() {
  const [episodes] = useState<PodcastEpisode[]>([
    {
      id: '1',
      title: 'Climate Solutions: Beyond Carbon Neutrality',
      description: 'Exploring innovative approaches to achieve negative emissions',
      audioUrl: '#',
      date: '2024-03-14',
      duration: '45:00',
      showNotes: '00:00 - Introduction\n05:30 - Carbon capture technologies\n15:45 - Policy implications'
    },
    {
      id: '2',
      title: 'Ocean Conservation: A Deep Dive',
      description: 'Understanding marine ecosystems and their role in climate regulation',
      audioUrl: '#',
      date: '2024-03-07',
      duration: '38:00',
      showNotes: '00:00 - Introduction\n04:15 - Marine biodiversity\n12:30 - Ocean acidification'
    }
  ]);

  return { episodes };
}