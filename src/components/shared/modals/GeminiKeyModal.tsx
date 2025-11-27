
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

// This would be in a separate context or state management file
export const useGeminiKey = () => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini_api_key'));

  const saveApiKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
  };

  return { apiKey, saveApiKey };
};

const GeminiKeyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const { saveApiKey } = useGeminiKey();

  const validateAndSaveKey = async () => {
    setIsLoading(true);
    setError(null);
    setIsValid(false);

    try {
      // A simple validation: check if the key is not empty and has a reasonable length
      if (!key || key.length < 30) {
        throw new Error('Invalid API key format.');
      }

      // A more robust validation would be to make a test API call to Google AI
      // For now, we'll simulate a successful validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      saveApiKey(key);
      setIsValid(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Your Gemini API Key</DialogTitle>
          <DialogDescription>
            To unlock the AI-powered features, please provide your Google Gemini API key. 
            You can create a new key at{' '}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Google AI Studio
            </a>.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gemini-key">Gemini API Key</Label>
            <Input
              id="gemini-key"
              type="password"
              placeholder="Paste your key here"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              disabled={isLoading || isValid}
            />
          </div>
          {error && (
            <div className="flex items-center text-red-500">
              <AlertTriangle className="mr-2 h-4 w-4" />
              <p>{error}</p>
            </div>
          )}
          {isValid && (
            <div className="flex items-center text-green-500">
              <CheckCircle className="mr-2 h-4 w-4" />
              <p>Success! AI features are now enabled.</p>
            </div>
          )}
          <Button onClick={validateAndSaveKey} disabled={isLoading || isValid} className="w-full">
            {isLoading ? <Loader2 className="animate-spin" /> : 'Validate and Save Key'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GeminiKeyModal;
