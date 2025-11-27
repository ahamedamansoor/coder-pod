
import { useState, useEffect } from 'react';

const useGeminiKey = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedKey = localStorage.getItem('gemini_api_key');
    setApiKey(storedKey);
    setIsLoading(false);
  }, []);

  const saveApiKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
  };

  const removeApiKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey(null);
  };

  return { apiKey, isLoading, saveApiKey, removeApiKey };
};

export default useGeminiKey;
