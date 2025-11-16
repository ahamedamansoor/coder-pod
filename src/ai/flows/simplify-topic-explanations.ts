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
  examples: z.string().describe('Clear and concise code examples using markdown.'),
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
  prompt: `You are an expert programming tutor who excels at breaking down complex topics into simple, structured explanations.

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

Your job is to provide a much simpler, more structured explanation. Please provide the following four things, adhering to the guidelines for each:

1.  **Summary**:
    - A single, concise sentence that summarizes the absolute core of the topic.
    - Avoid jargon.

2.  **Analogy**:
    - A simple, relatable, real-world analogy to explain the concept.
    - Keep it short and to the point.

3.  **Bullet Points**:
    - A few key ideas presented as a list.
    - Each bullet point should be a short, easy-to-digest sentence.

4.  **Examples**:
    - Provide clear and concise code examples.
    - Use markdown for all code formatting (e.g., \`\`\`java).
    - If the concept involves a process, add comments to the code to explain each step.
    - Keep the examples focused on demonstrating only the topic at hand.
    - If an existing code snippet was provided, make your example a commented, simplified, or related version of it.
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
