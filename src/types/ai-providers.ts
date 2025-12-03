export type AIProvider = 'gemini' | 'openai' | 'anthropic' | 'perplexity' | 'groq' | 'mistral' | 'cohere' | 'huggingface' | 'together' | 'deepseek' | 'meta';

export interface AIProviderConfig {
  id: AIProvider;
  name: string;
  icon: string;
  keyLabel: string;
  keyPlaceholder: string;
  getApiKeyUrl: string;
  description: string;
}

export const AI_PROVIDERS: Record<AIProvider, AIProviderConfig> = {
  gemini: {
    id: 'gemini',
    name: 'Google Gemini',
    icon: '🤖',
    keyLabel: 'Gemini API Key',
    keyPlaceholder: 'AIza...',
    getApiKeyUrl: 'https://aistudio.google.com/app/apikey',
    description: 'Google\'s powerful AI with excellent coding knowledge'
  },
  openai: {
    id: 'openai',
    name: 'OpenAI (ChatGPT)',
    icon: '🧠',
    keyLabel: 'OpenAI API Key',
    keyPlaceholder: 'sk-...',
    getApiKeyUrl: 'https://platform.openai.com/api-keys',
    description: 'Industry-leading AI from OpenAI'
  },
  anthropic: {
    id: 'anthropic',
    name: 'Anthropic (Claude)',
    icon: '🎯',
    keyLabel: 'Anthropic API Key',
    keyPlaceholder: 'sk-ant-...',
    getApiKeyUrl: 'https://console.anthropic.com/settings/keys',
    description: 'Claude AI with excellent reasoning capabilities'
  },
  perplexity: {
    id: 'perplexity',
    name: 'Perplexity AI',
    icon: '🔍',
    keyLabel: 'Perplexity API Key',
    keyPlaceholder: 'pplx-...',
    getApiKeyUrl: 'https://www.perplexity.ai/settings/api',
    description: 'Search-augmented AI for accurate, up-to-date responses'
  },
  groq: {
    id: 'groq',
    name: 'Groq',
    icon: '⚡',
    keyLabel: 'Groq API Key',
    keyPlaceholder: 'gsk_...',
    getApiKeyUrl: 'https://console.groq.com/keys',
    description: 'Ultra-fast AI inference with open models'
  },
  mistral: {
    id: 'mistral',
    name: 'Mistral AI',
    icon: '🌪️',
    keyLabel: 'Mistral API Key',
    keyPlaceholder: 'sk-...',
    getApiKeyUrl: 'https://console.mistral.ai/api-keys',
    description: 'Open-source friendly AI with strong performance'
  },
  cohere: {
    id: 'cohere',
    name: 'Cohere',
    icon: '💎',
    keyLabel: 'Cohere API Key',
    keyPlaceholder: 'co-...',
    getApiKeyUrl: 'https://dashboard.cohere.com/api-keys',
    description: 'Enterprise-grade AI with excellent embeddings'
  },
  huggingface: {
    id: 'huggingface',
    name: 'Hugging Face (FREE)',
    icon: '🤗',
    keyLabel: 'Hugging Face API Key',
    keyPlaceholder: 'hf_...',
    getApiKeyUrl: 'https://huggingface.co/settings/tokens',
    description: '🎁 FREE forever! Access thousands of open-source models'
  },
  together: {
    id: 'together',
    name: 'Together AI (FREE)',
    icon: '🚀',
    keyLabel: 'Together AI API Key',
    keyPlaceholder: '',
    getApiKeyUrl: 'https://api.together.xyz/settings/api-keys',
    description: '🎁 $25 FREE credit! Fast inference with open models'
  },
  deepseek: {
    id: 'deepseek',
    name: 'DeepSeek (FREE)',
    icon: '🌊',
    keyLabel: 'DeepSeek API Key',
    keyPlaceholder: 'sk-...',
    getApiKeyUrl: 'https://platform.deepseek.com/api_keys',
    description: '🎁 FREE tier! Powerful Chinese AI with excellent coding capabilities'
  },
  meta: {
    id: 'meta',
    name: 'Meta AI (FREE)',
    icon: '🦙',
    keyLabel: 'Meta AI API Key',
    keyPlaceholder: 'meta_...',
    getApiKeyUrl: 'https://developers.facebook.com/docs/llama-api',
    description: '🎁 FREE access to Llama models! Powerful open-source AI from Meta'
  }
};
