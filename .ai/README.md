# AI Configuration for CoderPod

This directory contains configuration and instructions for AI-powered content generation using Gemini AI.

## Files

### `gemini-instructions.md`
Comprehensive instructions for Gemini AI to generate high-quality educational content.

**Key Features:**
- 20+ detailed content creation rules
- Component templates and patterns
- Visual design guidelines
- Code example standards
- Interactive element requirements
- Theme consistency rules

### `genkit-enhanced.ts`
Enhanced Genkit configuration that loads and uses the Gemini instructions.

## Usage

### Basic Content Generation

```typescript
import { generateTopicContent } from '@/ai/genkit-enhanced';

// Generate instructions for a new topic
const prompt = await generateTopicContent({
  language: 'javascript',
  topic: 'What is JavaScript',
  level: 'all'
});

// Use with Gemini AI to generate content
```

### Using in Flows

```typescript
import { ai, getSystemInstructions } from '@/ai/genkit-enhanced';
import { generate } from 'genkit';

const flow = ai.defineFlow({
  name: 'generateLearningContent',
  inputSchema: z.object({
    language: z.string(),
    topic: z.string(),
  }),
  outputSchema: z.string(),
}, async (input) => {
  const systemInstructions = getSystemInstructions();
  
  const { text } = await generate({
    model: 'googleai/gemini-2.5-flash',
    system: systemInstructions,
    prompt: `Create educational content for ${input.language}: ${input.topic}`,
  });
  
  return text;
});
```

## Instructions Overview

The `gemini-instructions.md` file contains:

### 1. Core Requirements (20 Rules)
- File naming conventions
- Content structure requirements
- Visual element mandates
- Interactive element requirements
- Theme consistency rules

### 2. Content Sections
Every generated page must include:
- Overview/Introduction
- Core Concepts
- Syntax & Rules
- Practical Examples
- Best Practices
- Common Pitfalls
- Comparisons
- Real-World Applications
- Learning Path

### 3. Visual Standards
- Mandatory diagrams for every concept
- ASCII art, styled divs, SVG illustrations
- Interactive visual components
- Light/dark theme support

### 4. Code Quality
- Syntax highlighting
- Theme-aware snippets
- Beginner to expert examples
- Live playground integration

### 5. UI Components
Required shadcn/ui components:
- Card, Tabs, Accordion
- Button, Badge, Alert
- Separator, ScrollArea

## Language-Specific Themes

| Language   | Color Theme    |
|------------|---------------|
| JavaScript | amber/yellow  |
| React      | blue/cyan     |
| Java       | orange/red    |
| Spring     | green/emerald |
| HTML       | blue          |
| CSS        | purple/indigo |
| SCSS       | pink/purple   |

## Reference Links Policy

✅ **Allowed:**
- Official language documentation
- Official framework documentation
- MDN Web Docs
- W3C specifications

❌ **Forbidden:**
- Third-party tutorials
- Blog posts
- YouTube videos
- Commercial courses

## Quality Checklist

Before generating content, ensure:
- [ ] File name starts with language prefix
- [ ] PageHeader component included
- [ ] Content stretches to viewport (not centered)
- [ ] Visual diagrams for all concepts
- [ ] Light/dark theme support
- [ ] Live playground examples
- [ ] Click-to-open navigation
- [ ] Beginner AND expert content
- [ ] Only official documentation links
- [ ] TSX format (no .md files)

## Example Generation

```typescript
// 1. Import the helper
import { generateTopicContent } from '@/ai/genkit-enhanced';

// 2. Generate prompt
const prompt = await generateTopicContent({
  language: 'JavaScript',
  topic: 'Closures',
  level: 'all'
});

// 3. Send to Gemini AI
// The prompt includes all instructions from gemini-instructions.md
// Gemini will generate a complete, ready-to-use TSX component

// 4. Expected output structure:
// - javascript-closures.tsx
// - Includes PageHeader with amber theme
// - Multiple sections with navigation
// - Visual diagrams explaining closures
// - Code examples (basic → advanced)
// - Live playground examples
// - Best practices and pitfalls
```

## Maintenance

When updating instructions:

1. Edit `gemini-instructions.md`
2. Follow the existing structure
3. Test with sample generation
4. Update this README if needed

## Integration with GitHub Copilot

These instructions complement the GitHub Copilot instructions in `.github/copilot-instructions.md`:

- **Copilot**: Real-time code suggestions and autocomplete
- **Gemini**: Full page/component generation with comprehensive content

Both follow the same core principles and standards.

## Support

For questions about AI content generation:
1. Review `gemini-instructions.md` for detailed guidelines
2. Check example patterns in existing components
3. Refer to `.github/copilot-instructions.md` for overall project standards

---

**Last Updated**: November 23, 2025  
**Model**: Gemini 2.5 Flash  
**Platform**: CoderPod Learning Platform

