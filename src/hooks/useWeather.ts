import { useState, useEffect } from 'react';

interface WeatherData {
  weather: string | null;
  loading: boolean;
  error: string | null;
}

export function useWeather(): WeatherData {
  const [weather, setWeather] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch weather data for Chennai
        const response = await fetch('https://wttr.in/Chennai?format=%C+%t');
        const data = await response.text();
        setWeather(data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error };
}
