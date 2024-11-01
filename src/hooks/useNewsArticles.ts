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
    const fetchArticles = async () => {
      setLoading(true);
      setError(null); // Reset error state

      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2f125d1f13104036822b5b1e8a1f836d'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        
        // Assuming the API returns articles in a property called 'articles'
        const fetchedArticles: NewsArticle[] = data.articles.map((article: any) => ({
          id: article.url, // Using the URL as a unique ID
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
