import { useState, useEffect } from 'react';
import { BlogPost } from '../types';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'A B C of climate change',
      content: 'Centuries of scientific progress have revolutionized our understanding of the world, yet this growth has strained the planet. With climate change accelerating, record-breaking extreme weather highlights the urgent need to address its impacts on Earth and its inhabitants.',
      date: '13-09-2024',
      imageUrl: 'https://img.freepik.com/premium-photo/mountain-flowers-tree-lined-path-sunset-ukraine-professional-adapted-drier-climate-wyoming-sunlight_938522-17267.jpg?w=740',
      author: 'Sumanth'
    },
    {
      id: '2',
      title: 'What is Carbon-Footprint?',
      content: 'A carbon footprint is the total greenhouse gas emissions caused by activities or products, measured in CO₂. Reducing it involves using cleaner energy, minimizing waste, and making sustainable choices to lessen environmental impact.',
      date: '18-09-2024',
      imageUrl: 'https://www.cleanplanetchemical.com/wp-content/uploads/elementor/thumbs/AdobeStock_461022701-scaled-qee6kyl95n579iz20jbaxp96g5yl9skbiaxoal1n5k.jpeg',
      author: 'Rutwik'
    },
    {
      id: '3',
      title: 'Hydrogen Revolution: The Promise and Perils of a Clean Energy Future',
      content: 'With climate change escalating, hydrogen stands out as a promising, zero-emission energy source with wide applications. This article examines its potential benefits and challenges in supporting a sustainable future.',
      date: '23-09-2024',
      imageUrl: 'https://etimg.etb2bimg.com/photo/105017568.cms',
      author: 'Daniel'
    }
  ]);

  return { posts };
}