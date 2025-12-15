export type AIProvider = 'gemini' | 'openai' | 'anthropic';

export interface AIProviderConfig {
  id: AIProvider;
  name: string;
  icon: string;
  keyLabel: string;
  keyPlaceholder: string;
  getApiKeyUrl: string;
  description: string;
  reliability: 'high' | 'medium' | 'low';
}

export const AI_PROVIDERS: Record<AIProvider, AIProviderConfig> = {
  gemini: {
    id: 'gemini',
    name: 'Google Gemini',
    icon: '🤖',
    keyLabel: 'Gemini API Key',
    keyPlaceholder: 'AIza...',
    getApiKeyUrl: 'https://aistudio.google.com/app/apikey',
    description: 'Google\'s powerful AI with excellent coding knowledge and high reliability',
    reliability: 'high'
  },
  openai: {
    id: 'openai',
    name: 'OpenAI (ChatGPT)',
    icon: '🧠',
    keyLabel: 'OpenAI API Key',
    keyPlaceholder: 'sk-...',
    getApiKeyUrl: 'https://platform.openai.com/api-keys',
    description: 'Industry-leading AI from OpenAI with consistent, reliable responses',
    reliability: 'high'
  },
  anthropic: {
    id: 'anthropic',
    name: 'Anthropic (Claude)',
    icon: '🎯',
    keyLabel: 'Anthropic API Key',
    keyPlaceholder: 'sk-ant-...',
    getApiKeyUrl: 'https://console.anthropic.com/settings/keys',
    description: 'Claude AI with excellent reasoning capabilities and high reliability',
    reliability: 'high'
  }
};
