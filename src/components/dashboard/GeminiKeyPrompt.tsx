
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import GeminiKeyModal from './GeminiKeyModal';

const GeminiKeyPrompt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAiEnabled, setIsAiEnabled] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('gemini_api_key');
    if (key) {
      setIsAiEnabled(true);
    }
  }, []);

  const handleSaveKey = async (key: string) => {
    // For now, we'll assume any non-empty key is valid
    // In a real app, you would validate the key against the Gemini API
    if (key) {
      localStorage.setItem('gemini_api_key', key);
      setIsAiEnabled(true);
      return true;
    }
    return false;
  };

  if (isAiEnabled) {
    return null; // Don't show the prompt if AI is already enabled
  }

  return (
    <>
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 border-blue-200 dark:border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="text-blue-500 mr-2" />
            Unlock AI-Powered Learning
          </CardTitle>
          <CardDescription>
            To enable AI-driven features like content generation and interactive examples, please provide your Google Gemini API key.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setIsModalOpen(true)}>
            Enter API Key
          </Button>
        </CardContent>
      </Card>
      <GeminiKeyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveKey}
      />
    </>
  );
};

export default GeminiKeyPrompt;
