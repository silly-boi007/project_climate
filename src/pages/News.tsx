import React from 'react';
import { useNewsArticles } from '../hooks/useNewsArticles';

export function News() {
  const { articles, loading, error } = useNewsArticles();

  if (loading) {
    return <div className="text-center">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Failed to load news articles</div>;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Climate News</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {articles.map(article => (
          <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{article.summary}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{article.source}</span>
              <time>{article.date}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}