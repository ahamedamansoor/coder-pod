import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import * as fs from 'fs';
import * as path from 'path';

// Load Gemini instructions
let systemInstructions = '';
try {
  const instructionsPath = path.join(process.cwd(), '.ai', 'gemini-instructions.md');
  if (fs.existsSync(instructionsPath)) {
    systemInstructions = fs.readFileSync(instructionsPath, 'utf-8');
  }
} catch (error) {
  console.warn('Could not load Gemini instructions:', error);
}

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
  promptDir: path.join(process.cwd(), '.ai', 'prompts')
});

/**
 * Generate educational content for programming topics
 *
 * This function uses Gemini AI with comprehensive instructions
 * to create high-quality, interactive learning content
 */
export async function generateTopicContent(params: {
  language: string;
  topic: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'all';
}) {
  const { language, topic, level = 'all' } = params;

  const prompt = `${systemInstructions}

---

## GENERATION REQUEST

Create a comprehensive learning page for:
- **Language**: ${language}
- **Topic**: ${topic}
- **Level**: ${level}

Follow ALL instructions above to create an engaging, interactive, and visually appealing learning page.

Generate the complete TSX component with:
1. Proper imports
2. PageHeader with appropriate theme
3. Click-to-open navigation
4. Visual diagrams for concepts
5. Code examples with light/dark theme support
6. Live playground integration
7. Best practices section
8. Common pitfalls section
9. Real-world examples

File name should be: ${language.toLowerCase()}-${topic.toLowerCase().replace(/\s+/g, '-')}.tsx
`;

  return prompt;
}

/**
 * System instructions for content generation
 */
export function getSystemInstructions(): string {
  return systemInstructions;
}

