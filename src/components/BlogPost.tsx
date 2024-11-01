// BlogPost.tsx
import React from 'react';
import { BlogPost as BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="relative group overflow-hidden border rounded-lg shadow-lg transition-all duration-300">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{post.content.slice(0, 100)}...</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p>{post.content}</p>
          <p className="mt-2 text-sm">{`By ${post.author} on ${post.date}`}</p>
        </div>
      </div>
    </div>
  );
};
