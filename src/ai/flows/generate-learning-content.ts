/**
 * Content Generation Flow for CoderPod
 *
 * This flow uses Gemini AI with comprehensive instructions to generate
 * high-quality educational content for programming topics.
 */

import { ai } from '../genkit';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';

// Load system instructions
function getSystemInstructions(): string {
  try {
    const instructionsPath = path.join(process.cwd(), '.ai', 'gemini-instructions.md');
    if (fs.existsSync(instructionsPath)) {
      return fs.readFileSync(instructionsPath, 'utf-8');
    }
  } catch (error) {
    console.warn('Could not load Gemini instructions:', error);
  }
  return '';
}

/**
 * Generate Learning Content Flow
 *
 * This flow generates complete, interactive learning pages for programming topics.
 * It follows all guidelines from .ai/gemini-instructions.md
 */
export const generateLearningContent = ai.defineFlow(
  {
    name: 'generateLearningContent',
    inputSchema: z.object({
      language: z.string().describe('Programming language (e.g., javascript, react, java)'),
      topic: z.string().describe('Topic name (e.g., What is JavaScript, React Hooks)'),
      level: z.enum(['beginner', 'intermediate', 'advanced', 'all']).optional().default('all'),
      includePlayground: z.boolean().optional().default(true),
      existingTopics: z.array(z.string()).optional().describe('List of existing topics to avoid duplication'),
    }),
    outputSchema: z.object({
      fileName: z.string().describe('Generated file name'),
      componentCode: z.string().describe('Complete TSX component code'),
      summary: z.string().describe('Brief summary of generated content'),
      sections: z.array(z.string()).describe('List of content sections included'),
    }),
  },
  async (input) => {
    const { language, topic, level, includePlayground, existingTopics } = input;

    // Load system instructions
    const systemInstructions = getSystemInstructions();

    // Build the prompt
    const prompt = `
${systemInstructions}

---

## GENERATION REQUEST

Create a comprehensive learning page for the following topic:

**Language**: ${language}
**Topic**: ${topic}
**Target Level**: ${level}
**Include Playground**: ${includePlayground ? 'Yes' : 'No'}
${existingTopics && existingTopics.length > 0 ? `**Existing Topics** (avoid duplication): ${existingTopics.join(', ')}` : ''}

---

## REQUIRED OUTPUT

Generate a complete, production-ready TSX component that includes:

### 1. File Structure
- File name: \`${language.toLowerCase()}-${topic.toLowerCase().replace(/\s+/g, '-')}.tsx\`
- Proper imports (shadcn/ui components, lucide-react icons, shared components)
- TypeScript interface for props
- Default exported function component

### 2. Page Header
- Use PageHeader component from '@/components/shared/generic-page-header'
- Appropriate icon from lucide-react
- Category, title, description
- Language-specific color theme

### 3. Navigation
- Click-to-open section navigation
- State management with useState
- Smooth transitions between sections
- Active state highlighting

### 4. Content Sections (All Required)
- Overview/Introduction with key benefits
- Core Concepts with visual diagrams
- Syntax & Rules with examples
- Practical Examples (basic → advanced)
- Best Practices with do's and don'ts
- Common Pitfalls with solutions
- Real-World Applications
- Learning Path with next steps

### 5. Visual Elements (Mandatory)
- Diagrams for EVERY major concept
- Use ASCII art, styled divs, or SVG
- Interactive visual components where applicable
- Comparison charts and flow diagrams

### 6. Code Examples
- Multiple examples per section
- Beginner-friendly with comments
- Intermediate patterns
- Advanced/expert examples
- Light/dark theme support for all code blocks

### 7. Interactive Features
${includePlayground ? '- Live playground integration with "Try it yourself" buttons' : ''}
- Hover effects on interactive elements
- Expandable/collapsible sections where appropriate
- Copy-to-clipboard for code examples

### 8. Styling
- Consistent spacing (space-y-8 for sections)
- Proper font sizes (text-4xl for main, text-xl for sections)
- Language-specific theme colors applied throughout
- Responsive design (mobile, tablet, desktop)
- Full viewport width (no centering)

### 9. Best Practices
- TypeScript types for all props
- Proper error handling
- Accessible components (ARIA labels where needed)
- Performance optimizations (React.memo if needed)

### 10. Reference Links
- ONLY official documentation links
- No third-party tutorials or blogs
- Link to official ${language} documentation

---

## OUTPUT FORMAT

Please provide the complete TSX component code, ready to be saved as a file.
Include all imports, types, and JSX.
Ensure the code is properly formatted and follows TypeScript best practices.

Start with:
\`\`\`tsx
'use client';
// ... rest of the component
\`\`\`
`;

    // Generate content using Gemini
    const { text } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt,
    });

    // Extract component code from response
    const componentCode = extractCodeFromResponse(text);

    // Generate file name
    const fileName = `${language.toLowerCase()}-${topic.toLowerCase().replace(/\s+/g, '-')}.tsx`;

    // Extract sections (analyze the generated code)
    const sections = extractSections(componentCode);

    // Generate summary
    const summary = `Generated ${language} learning content for "${topic}". Includes ${sections.length} sections with interactive examples, visual diagrams, and comprehensive explanations from beginner to expert level.`;

    return {
      fileName,
      componentCode,
      summary,
      sections,
    };
  }
);

/**
 * Helper: Extract code from markdown code blocks
 */
function extractCodeFromResponse(response: string): string {
  const codeBlockRegex = /```(?:tsx|typescript|jsx)?\n([\s\S]*?)```/g;
  const matches = response.match(codeBlockRegex);

  if (matches && matches.length > 0) {
    // Return the first code block, removing the markdown syntax
    return matches[0]
      .replace(/```(?:tsx|typescript|jsx)?\n/, '')
      .replace(/```$/, '')
      .trim();
  }

  // If no code blocks found, return the whole response
  return response;
}

/**
 * Helper: Extract section names from generated component
 */
function extractSections(code: string): string[] {
  const sections: string[] = [];

  // Look for section IDs in state or navigation
  const sectionIdRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = sectionIdRegex.exec(code)) !== null) {
    sections.push(match[1]);
  }

  // If no sections found, look for Card titles
  const titleRegex = /<CardTitle[^>]*>([^<]+)<\/CardTitle>/g;
  while ((match = titleRegex.exec(code)) !== null) {
    sections.push(match[1].trim());
  }

  // Remove duplicates
  return [...new Set(sections)];
}

/**
 * Export utility function for direct usage
 * Mirrors the flow input but provides convenient defaults in TypeScript.
 */
export async function generateTopicContent(params: {
  language: string;
  topic: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'all';
  includePlayground?: boolean;
  existingTopics?: string[];
}) {
  const {
    language,
    topic,
    level = 'all',
    includePlayground = true,
    existingTopics,
  } = params;

  return await generateLearningContent({
    language,
    topic,
    level,
    includePlayground,
    existingTopics,
  });
}
