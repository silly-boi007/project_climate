import { useState, useEffect } from 'react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
}

export function useNewsArticles() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulated API call
    const mockArticles: NewsArticle[] = [
      {
        id: '1',
        title: 'Global CO2 Levels Hit New Record',
        summary: 'Scientists report unprecedented levels of atmospheric carbon dioxide...',
        source: 'Climate Science Journal',
        date: '2024-03-15'
      },
      {
        id: '2',
        title: 'New Green Energy Initiative Launched',
        summary: 'Major countries announce collaborative effort to accelerate renewable energy adoption...',
        source: 'Environmental News Network',
        date: '2024-03-14'
      }
    ];

    setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
    }, 1000);
  }, []);

  return { articles, loading, error };
}