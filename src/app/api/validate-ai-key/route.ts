import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { provider, apiKey } = await request.json();

    if (!provider || !apiKey) {
      return NextResponse.json(
        { valid: false, error: 'Provider and API key are required' },
        { status: 400 }
      );
    }

    console.log(`[API Route] Validating ${provider} API key...`);

    let validationResult;

    switch (provider) {
      case 'openai':
        validationResult = await validateOpenAIKey(apiKey);
        break;
      case 'anthropic':
        validationResult = await validateAnthropicKey(apiKey);
        break;
      case 'gemini':
        validationResult = await validateGeminiKey(apiKey);
        break;
      case 'perplexity':
        validationResult = await validatePerplexityKey(apiKey);
        break;
      case 'groq':
        validationResult = await validateGroqKey(apiKey);
        break;
      case 'mistral':
        validationResult = await validateMistralKey(apiKey);
        break;
      case 'cohere':
        validationResult = await validateCohereKey(apiKey);
        break;
      case 'huggingface':
        validationResult = await validateHuggingFaceKey(apiKey);
        break;
      case 'together':
        validationResult = await validateTogetherKey(apiKey);
        break;
      case 'deepseek':
        validationResult = await validateDeepSeekKey(apiKey);
        break;
      case 'meta':
        validationResult = await validateMetaKey(apiKey);
        break;
      default:
        return NextResponse.json(
          { valid: false, error: 'Unsupported AI provider' },
          { status: 400 }
        );
    }

    console.log(`[API Route] Validation result:`, validationResult);
    return NextResponse.json(validationResult);
  } catch (error: any) {
    console.error('[API Route] Validation error:', error);
    return NextResponse.json(
      { valid: false, error: error.message || 'Validation failed' },
      { status: 500 }
    );
  }
}

// Validation functions
async function validateOpenAIKey(apiKey: string) {
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid OpenAI API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateAnthropicKey(apiKey: string) {
  try {
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

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Anthropic API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateGeminiKey(apiKey: string) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 400 || response.status === 403) {
      return { valid: false, error: 'Invalid Gemini API key.' };
    }
    
    return { valid: false, error: `Validation failed: ${errorData?.error?.message || response.statusText}` };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validatePerplexityKey(apiKey: string) {
  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Perplexity API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateGroqKey(apiKey: string) {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Groq API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateMistralKey(apiKey: string) {
  try {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Mistral API key. ${errorData?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateCohereKey(apiKey: string) {
  try {
    const response = await fetch('https://api.cohere.com/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'command',
        message: 'Hi',
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: 'Invalid Cohere API key.' };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateHuggingFaceKey(apiKey: string) {
  try {
    const response = await fetch('https://api-inference.huggingface.co/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta-llama/Meta-Llama-3-8B-Instruct',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid HuggingFace API key. ${errorData?.error || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateTogetherKey(apiKey: string) {
  try {
    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Together AI API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateDeepSeekKey(apiKey: string) {
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid DeepSeek API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}

async function validateMetaKey(apiKey: string) {
  try {
    const response = await fetch('https://www.llama-api.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3.1-70b',
        messages: [{ role: 'user', content: 'Hi' }],
        max_tokens: 5
      })
    });

    if (response.ok) {
      return { valid: true };
    }

    const errorData = await response.json().catch(() => null);
    
    if (response.status === 401 || response.status === 403) {
      return { valid: false, error: `Invalid Meta AI API key. ${errorData?.error?.message || ''}`.trim() };
    }
    
    return { 
      valid: false, 
      error: `Validation failed (${response.status}): ${errorData?.error?.message || response.statusText}` 
    };
  } catch (error: any) {
    return { valid: false, error: `Connection error: ${error.message}` };
  }
}
