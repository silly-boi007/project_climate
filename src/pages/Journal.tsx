import React from 'react';
import { BlogPost } from '../types';
import { useBlogPosts } from '../hooks/useBlogPosts';

export function Journal() {
  const { posts } = useBlogPosts();

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Articles</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map(post => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                <time>{post.date}</time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}