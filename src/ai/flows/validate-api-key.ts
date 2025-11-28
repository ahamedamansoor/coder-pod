'use server';

/**
 * Validates API keys for different AI providers
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { z } from 'genkit';
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
    switch (provider) {
      case 'gemini':
        return await validateGeminiKey(apiKey);
      
      case 'openai':
        return await validateOpenAIKey(apiKey);
      
      case 'anthropic':
        return await validateAnthropicKey(apiKey);
      
      case 'perplexity':
        return await validatePerplexityKey(apiKey);
      
      case 'groq':
        return await validateGroqKey(apiKey);
      
      case 'mistral':
        return await validateMistralKey(apiKey);
      
      case 'cohere':
        return await validateCohereKey(apiKey);
      
      default:
        return { valid: false, error: 'Unsupported AI provider' };
    }
  } catch (error: any) {
    console.error('API key validation error:', error);
    return { 
      valid: false, 
      error: error.message || 'Failed to validate API key. Please try again.' 
    };
  }
}

async function validateGeminiKey(apiKey: string) {
  try {
    const ai = genkit({
      plugins: [googleAI({ apiKey })],
      model: 'googleai/gemini-2.0-flash-exp'
    });

    const testPrompt = ai.definePrompt({
      name: 'testGemini',
      input: { schema: z.object({ test: z.string() }) },
      output: { schema: z.object({ response: z.string() }) },
      prompt: 'Respond with "valid". Input: {{{test}}}'
    });

    const { output } = await testPrompt({ test: 'validate' });
    
    if (output) {
      return { valid: true };
    }
    
    return { valid: false, error: 'Invalid response from Gemini API' };
  } catch (error: any) {
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('invalid API key')) {
      return { valid: false, error: 'Invalid Gemini API key.' };
    }
    if (error.message?.includes('quota')) {
      return { valid: false, error: 'Gemini API quota exceeded.' };
    }
    throw error;
  }
}

async function validateOpenAIKey(apiKey: string) {
  try {
    // Test OpenAI API key with a simple request
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (response.ok) {
      return { valid: true };
    }
    
    if (response.status === 401) {
      return { valid: false, error: 'Invalid OpenAI API key.' };
    }
    
    if (response.status === 429) {
      return { valid: false, error: 'OpenAI API quota exceeded.' };
    }
    
    return { valid: false, error: 'Failed to validate OpenAI API key.' };
  } catch (error: any) {
    throw error;
  }
}

async function validateAnthropicKey(apiKey: string) {
  try {
    // Test Anthropic API key with a simple request
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Hi' }]
      })
    });

    // Log detailed response for debugging
    console.log('Anthropic validation response:', {
      status: response.status,
      statusText: response.statusText
    });

    if (response.ok) {
      return { valid: true };
    }
    
    // Try to get error details from response
    const errorData = await response.json().catch(() => null);
    console.log('Anthropic error data:', errorData);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Anthropic API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    if (response.status === 429) {
      return { valid: false, error: 'Anthropic API quota exceeded.' };
    }
    
    if (response.status === 400) {
      return { valid: false, error: `Bad request: ${errorData?.error?.message || 'Check your API key format'}` };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    console.error('Anthropic validation error:', error);
    return {
      valid: false,
      error: `Connection error: ${error.message || 'Failed to connect to Anthropic API'}`
    };
  }
}

async function validatePerplexityKey(apiKey: string) {
  try {
    // Perplexity uses OpenAI-compatible API
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 10
      })
    });

    if (response.ok) {
      return { valid: true };
    }
    
    if (response.status === 401) {
      return { valid: false, error: 'Invalid Perplexity API key.' };
    }
    
    if (response.status === 429) {
      return { valid: false, error: 'Perplexity API quota exceeded.' };
    }
    
    return { valid: false, error: 'Failed to validate Perplexity API key.' };
  } catch (error: any) {
    throw error;
  }
}

async function validateGroqKey(apiKey: string) {
  try {
    // Groq uses OpenAI-compatible API
    const response = await fetch('https://api.groq.com/openai/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (response.ok) {
      return { valid: true };
    }
    
    if (response.status === 401) {
      return { valid: false, error: 'Invalid Groq API key.' };
    }
    
    if (response.status === 429) {
      return { valid: false, error: 'Groq API quota exceeded.' };
    }
    
    return { valid: false, error: 'Failed to validate Groq API key.' };
  } catch (error: any) {
    throw error;
  }
}

async function validateMistralKey(apiKey: string) {
  try {
    // Mistral uses OpenAI-compatible API
    const response = await fetch('https://api.mistral.ai/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (response.ok) {
      return { valid: true };
    }
    
    if (response.status === 401) {
      return { valid: false, error: 'Invalid Mistral API key.' };
    }
    
    if (response.status === 429) {
      return { valid: false, error: 'Mistral API quota exceeded.' };
    }
    
    return { valid: false, error: 'Failed to validate Mistral API key.' };
  } catch (error: any) {
    throw error;
  }
}

async function validateCohereKey(apiKey: string) {
  try {
    // Cohere has its own API format
    const response = await fetch('https://api.cohere.ai/v1/check-api-key', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return { valid: true };
    }
    
    if (response.status === 401) {
      return { valid: false, error: 'Invalid Cohere API key.' };
    }
    
    if (response.status === 429) {
      return { valid: false, error: 'Cohere API quota exceeded.' };
    }
    
    return { valid: false, error: 'Failed to validate Cohere API key.' };
  } catch (error: any) {
    throw error;
  }
}
