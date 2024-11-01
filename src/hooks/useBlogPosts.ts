import { useState, useEffect } from 'react';
import { BlogPost } from '../types';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'The Rising Tide: Understanding Sea Level Changes',
      content: 'Climate change continues to accelerate sea level rise at an unprecedented rate. This week, we explore the latest research on coastal impacts and community adaptations...',
      date: '2024-03-15',
      imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7',
      author: 'Dr. Sarah Chen'
    },
    {
      id: '2',
      title: 'Forest Conservation in the Digital Age',
      content: 'How technology is revolutionizing our approach to protecting and monitoring forest ecosystems...',
      date: '2024-03-14',
      imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d',
      author: 'Dr. Michael Rivera'
    }
  ]);

  return { posts };
}