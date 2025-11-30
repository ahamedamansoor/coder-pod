
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import { deleteUserFlow } from './flows/delete-user';

// Check if API key is available in environment
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

// Helper to check if AI is available
export const isAIAvailable = () => !!apiKey;

// Create a mock AI instance for when API key is not available
const createMockAI = () => ({
  definePrompt: () => {
    return async () => {
      throw new Error('AI features are not available. Please configure your Gemini API key.');
    };
  },
  defineFlow: () => {
    return async () => {
      throw new Error('AI features are not available. Please configure your Gemini API key.');
    };
  },
} as any);

let aiInstance: ReturnType<typeof genkit>;

// Initialize genkit only if API key is available, otherwise use mock
try {
  if (apiKey) {
    aiInstance = genkit({
      plugins: [googleAI({ apiKey })],
      model: 'googleai/gemini-2.5-flash'
    });
  } else {
    aiInstance = createMockAI();
  }
} catch (error) {
  console.warn('Failed to initialize Genkit. AI features will be disabled:', error);
  aiInstance = createMockAI();
}

// Export ai instance
export const ai = {
  ...aiInstance,
  deleteUser: deleteUserFlow,
};
