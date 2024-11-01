import React from 'react';
import { useNewsArticles } from '../hooks/useNewsArticles';

export function News() {
  const { articles, loading, error } = useNewsArticles();

  // Adding the two new articles directly
  const additionalArticles = [
    {
      id: '1', // Assign a unique ID
      title: "Climate Diplomacy: Can Smog Bring India and Pakistan Together?",
      summary: "As air pollution engulfs parts of South Asia, can the shared struggle against climate change mend relations between India and Pakistan?",
      date: "2024-11-01",
      source: "Al Jazeera",
    },
    {
      id: '2', // Assign a unique ID
      title: "Climate change: Earth at a crossroads, warns top scientist",
      summary: "The world must act now to avert a climate catastrophe, according to a leading climate scientist.",
      date: "2024-11-02",
      source: "BBC News",
    },
  ];

  // Combine fetched articles with additional articles
  const allArticles = [...articles, ...additionalArticles];

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
        {allArticles.map(article => (
          <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{article.summary}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{article.source}</span>
              <time dateTime={article.date} className="text-gray-500 dark:text-gray-400">
                {new Date(article.date).toLocaleDateString()}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
