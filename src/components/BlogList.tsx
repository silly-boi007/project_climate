// BlogList.tsx
import React from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts'; // Adjust the path as necessary
import { BlogPost } from './BlogPost';

export const BlogList: React.FC = () => {
  const { posts } = useBlogPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};
