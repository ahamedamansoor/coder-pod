
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const geminiApiKeyAtom = atom<string | null>(null);
const isGeminiModalOpenAtom = atom<boolean>(false);

export const useGemini = () => {
  const [apiKey, setApiKey] = useAtom(geminiApiKeyAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isGeminiModalOpenAtom);

  useEffect(() => {
    // Attempt to load the key from localStorage on initial render
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, [setApiKey]);

  const saveApiKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    apiKey,
    saveApiKey,
    isModalOpen,
    openModal,
    closeModal,
    isAiEnabled: !!apiKey,
  };
};
