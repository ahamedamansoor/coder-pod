
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Sparkles, ExternalLink, Check } from 'lucide-react';
import { AIProvider, AI_PROVIDERS } from '@/types/ai-providers';
import { cn } from '@/lib/utils';

interface AIProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (provider: AIProvider, key: string) => Promise<boolean>;
}

const AIProviderModal: React.FC<AIProviderModalProps> = ({ isOpen, onClose, onSave }) => {
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('gemini');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const provider = AI_PROVIDERS[selectedProvider];

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);
    const isValid = await onSave(selectedProvider, apiKey);
    if (isValid) {
      setApiKey('');
      onClose();
    } else {
      setError('Invalid API Key. Please check your key and try again.');
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Sparkles className="text-blue-500 mr-2" />
            Choose Your AI Provider
          </DialogTitle>
          <DialogDescription>
            Select an AI provider and enter your API key to unlock AI-powered features.
          </DialogDescription>
        </DialogHeader>
        
        {/* AI Provider Selection */}
        <div className="space-y-4 py-4">
          <Label>Select AI Provider</Label>
          <div className="max-h-[200px] overflow-y-auto pr-2">
            <div className="grid grid-cols-3 gap-3">
              {Object.values(AI_PROVIDERS).map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedProvider(p.id)}
                  className={cn(
                    "relative p-3 rounded-lg border-2 transition-all hover:border-blue-400 hover:shadow-md",
                    selectedProvider === p.id
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20 shadow-md"
                      : "border-gray-200 dark:border-gray-700"
                  )}
                >
                  {selectedProvider === p.id && (
                    <Check className="absolute top-1 right-1 w-3 h-3 text-blue-500" />
                  )}
                  <div className="text-2xl mb-1">{p.icon}</div>
                  <div className="text-xs font-semibold text-center leading-tight">{p.name}</div>
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{provider.description}</p>
        </div>

        {/* API Key Input */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">{provider.keyLabel}</Label>
            <Input
              id="api-key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={provider.keyPlaceholder}
              disabled={isLoading}
              type="password"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
          <a
            href={provider.getApiKeyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1"
          >
            Get {provider.name} API key
            <ExternalLink className="w-4 h-4" />
          </a>
          <Button onClick={handleSave} disabled={isLoading || !apiKey.trim()}>
            {isLoading ? 'Validating...' : 'Save & Enable AI'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIProviderModal;
