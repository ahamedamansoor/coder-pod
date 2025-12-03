/**
 * Validates API keys for different AI providers
 * This now uses the server-side API route to avoid CORS issues
 */

import { AIProvider } from '@/types/ai-providers';

export async function validateApiKey(
  provider: AIProvider,
  apiKey: string
): Promise<{ 
  valid: boolean; 
  error?: string 
}> {
  if (!apiKey || apiKey.trim().length === 0) {
    return { valid: false, error: 'API key is required' };
  }

  try {
    console.log(`[Client] Sending validation request for ${provider} to server...`);

    // Use server-side API route to validate (avoids CORS issues)
    const response = await fetch('/api/validate-ai-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        provider,
        apiKey: apiKey.trim()
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('[Client] Server validation failed:', errorData);
      return {
        valid: false,
        error: errorData?.error || `Validation failed (${response.status})`
      };
    }

    const result = await response.json();
    console.log('[Client] Server validation result:', result);
    return result;
  } catch (error: any) {
    console.error('[Client] API key validation error:', error);
    return { 
      valid: false, 
      error: error.message || 'Failed to validate API key. Please try again.' 
    };
  }
}

// All validation logic has been moved to /api/validate-ai-key/route.ts
// to avoid CORS issues when making API calls from the browser
