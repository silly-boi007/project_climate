import { useState, useEffect } from 'react';

interface NewsArticle {
  id: string; // This will store the article URL for linking
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
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=34f44cdd2cab4af3a6da73aa04f807b0'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();

        const fetchedArticles: NewsArticle[] = data.articles.map((article: any) => ({
          id: article.url, // URL as the unique ID for linking
          title: article.title,
          summary: article.description,
          source: article.source.name,
          date: article.publishedAt,
        }));

        setArticles(fetchedArticles);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
}
