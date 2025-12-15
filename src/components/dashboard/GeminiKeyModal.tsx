
import React, { useState, useEffect } from 'react';
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
import { Sparkles, ExternalLink, Check, Shield, Info, AlertCircle, Loader2, XCircle } from 'lucide-react';
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
  const [errorType, setErrorType] = useState<'invalid' | 'network' | 'rate-limit' | 'server' | 'generic'>('generic');

  const provider = AI_PROVIDERS[selectedProvider];

  // Clear error when provider changes
  useEffect(() => {
    setError(null);
    setApiKey('');
  }, [selectedProvider]);

  // Clear error when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setApiKey('');
    }
  }, [isOpen]);

  const getErrorMessage = (errorType: string, providerName: string): { title: string; description: string } => {
    switch (errorType) {
      case 'invalid':
        return {
          title: 'Invalid API Key',
          description: `The API key you entered is not valid for ${providerName}. Please double-check your key and try again.`
        };
      case 'network':
        return {
          title: 'Connection Failed',
          description: `Could not connect to ${providerName}. Please check your internet connection and try again.`
        };
      case 'rate-limit':
        return {
          title: 'Rate Limit Exceeded',
          description: `${providerName} is temporarily limiting requests. Please wait a moment and try again.`
        };
      case 'server':
        return {
          title: 'Server Error',
          description: `${providerName} is experiencing issues. Please try again later or choose a different provider.`
        };
      default:
        return {
          title: 'Validation Failed',
          description: 'Could not validate your API key. Please check your key and try again.'
        };
    }
  };

  const handleSave = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your API key.');
      setErrorType('generic');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const isValid = await onSave(selectedProvider, apiKey);
      if (isValid) {
        setApiKey('');
        setError(null);
        onClose();
      } else {
        // Default to invalid key if onSave returns false without throwing
        setErrorType('invalid');
        setError(getErrorMessage('invalid', provider.name).description);
      }
    } catch (err: any) {
      const errorMessage = err?.message || '';

      // Determine error type from message
      if (errorMessage.includes('401') || errorMessage.includes('403') ||
          errorMessage.toLowerCase().includes('invalid') ||
          errorMessage.toLowerCase().includes('unauthorized')) {
        setErrorType('invalid');
      } else if (errorMessage.includes('429') || errorMessage.toLowerCase().includes('rate')) {
        setErrorType('rate-limit');
      } else if (errorMessage.toLowerCase().includes('network') ||
                 errorMessage.toLowerCase().includes('connection') ||
                 errorMessage.toLowerCase().includes('fetch')) {
        setErrorType('network');
      } else if (errorMessage.includes('500') || errorMessage.includes('502') ||
                 errorMessage.includes('503')) {
        setErrorType('server');
      } else {
        setErrorType('generic');
      }

      setError(errorMessage || getErrorMessage(errorType, provider.name).description);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && apiKey.trim() && !isLoading) {
      handleSave();
    }
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
            Select from 3 reliable AI providers and enter your API key to unlock AI-powered features.
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
              onChange={(e) => {
                setApiKey(e.target.value);
                if (error) setError(null); // Clear error when user starts typing
              }}
              onKeyDown={handleKeyDown}
              placeholder={provider.keyPlaceholder}
              disabled={isLoading}
              type="password"
              className={cn(error && "border-red-500 focus:ring-red-500")}
            />
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 animate-in fade-in slide-in-from-top-1 duration-200">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-red-900 dark:text-red-100">
                  {getErrorMessage(errorType, provider.name).title}
                </p>
                <p className="text-xs text-red-700 dark:text-red-300">
                  {error}
                </p>
              </div>
            </div>
          )}
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
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Validating...
              </>
            ) : (
              'Save & Enable AI'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIProviderModal;
