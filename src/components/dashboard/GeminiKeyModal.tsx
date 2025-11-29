
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
import { Sparkles, ExternalLink, Check, Shield, Info, AlertCircle } from 'lucide-react';
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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Sparkles className="text-blue-500 mr-2" />
            Choose Your AI Provider
          </DialogTitle>
          <DialogDescription>
            Select an AI provider and enter your API key to unlock AI-powered features.
          </DialogDescription>
        </DialogHeader>

        {/* Important Information Section */}
        <div className="space-y-3 py-4 border-y border-gray-200 dark:border-gray-700">
          {/* Security Notice */}
          <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                Your API Key is Safe
              </p>
              <p className="text-xs text-green-700 dark:text-green-300">
                Your API key is stored locally in your browser only. We never send it to our servers or store it anywhere else.
              </p>
            </div>
          </div>

          {/* Usage Notice */}
          <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                You're Using Your Own API Provider
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                You're connecting directly to {provider.name}. All AI requests go through your personal API key.
              </p>
            </div>
          </div>

          {/* Free Tier Warning */}
          <div className="flex gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                Use Resources Wisely
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300">
                Free tiers have usage limits. Please use AI features responsibly to stay within your provider's free quota.
              </p>
            </div>
          </div>
        </div>
        
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
