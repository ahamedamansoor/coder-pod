'use server';

/**
 * @fileOverview A flow to simplify topic explanations using AI.
 *
 * - simplifyTopicExplanation - A function that simplifies a given topic explanation.
 * - SimplifyTopicExplanationInput - The input type for the simplifyTopicexplanation function.
 * - SimplifyTopicExplanationOutput - The return type for the simplifyTopicexplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimplifyTopicExplanationInputSchema = z.object({
  topic: z.string().describe('The topic to simplify.'),
  language: z.string().describe('The programming language of the topic.'),
  explanation: z.string().describe('The explanation of the topic.'),
  codeSnippet: z.string().optional().describe('An existing code snippet from the page to use as context.'),
});
export type SimplifyTopicExplanationInput = z.infer<typeof SimplifyTopicExplanationInputSchema>;

const SimplifyTopicExplanationOutputSchema = z.object({
  summary: z.string().describe('A single, concise sentence summarizing the topic.'),
  analogy: z
    .string()
    .describe('A simple, relatable analogy to explain the concept.'),
  bulletPoints: z
    .array(z.string())
    .describe('An array of key ideas as bullet points.'),
  examples: z.string().optional().describe('Clear and concise code examples using markdown, if applicable. If no code example is relevant, this can be omitted.'),
});

export type SimplifyTopicExplanationOutput = z.infer<typeof SimplifyTopicExplanationOutputSchema>;

export async function simplifyTopicExplanation(
  input: SimplifyTopicExplanationInput
): Promise<SimplifyTopicExplanationOutput> {
  return simplifyTopicExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simplifyTopicExplanationPrompt',
  input: {schema: SimplifyTopicExplanationInputSchema},
  output: {schema: SimplifyTopicExplanationOutputSchema},
  prompt: `You are an expert teacher who is brilliant at explaining complex programming topics to a child. Your goal is to make everything as simple and fun as possible.

You are teaching the user about the following topic:
Topic: {{{topic}}}
Language: {{{language}}}

Here is the original, more complex explanation:
Explanation: {{{explanation}}}

{{#if codeSnippet}}
Here is an existing code snippet from the page for context. Use this as a basis for your example. You can simplify it, add comments, or create a related example.
Existing Code:
{{{codeSnippet}}}
{{/if}}

Your job is to provide a much simpler, more structured explanation that a 10-year-old could understand. Please provide the following things, adhering to the guidelines for each:

1.  **Summary**:
    - A single, super-simple sentence that says what the topic is.
    - Example: "It's like a magic backpack for your code!"

2.  **Analogy**:
    - A fun, relatable, real-world analogy. Think about toys, games, food, or animals.
    - Example: "Imagine you have a box of LEGOs. A 'variable' is like an empty LEGO box that you can put one LEGO brick inside. You can take it out and put a different one in later."
    - Keep it short and to the point.

3.  **Bullet Points**:
    - A few key ideas presented as a list.
    - Each bullet point must be a very short, simple sentence.
    - Use simple words.

4.  **Examples**:
    - **If the topic is code-related**, provide a very simple and clear code example.
    - Use markdown for all code formatting (e.g., \`\`\`java).
    - Add comments to the code that explain each line like you're talking to a beginner.
    - Keep the examples focused on demonstrating only the topic at hand.
    - **If the topic is purely conceptual, you may omit the code examples.**
`,
});

const simplifyTopicExplanationFlow = ai.defineFlow(
  {
    name: 'simplifyTopicExplanationFlow',
    inputSchema: SimplifyTopicExplanationInputSchema,
    outputSchema: SimplifyTopicExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
