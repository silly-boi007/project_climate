import { useState } from 'react';
import { UserStory } from '../types';

export function useUserStories() {
  const [stories] = useState<UserStory[]>([
    {
      id: '1',
      title: 'Living Through Australia\'s Black Summer',
      content: 'As a resident of New South Wales, I witnessed firsthand the devastating impact of the 2019-2020 bushfire season...',
      author: 'Emma Thompson',
      date: '2024-03-13',
      location: 'Sydney, Australia'
    },
    {
      id: '2',
      title: 'Sustainable Living in Urban Spaces',
      content: 'My journey towards reducing my carbon footprint while living in a metropolitan area...',
      author: 'James Chen',
      date: '2024-03-12',
      location: 'Singapore'
    }
  ]);

  return { stories };
}