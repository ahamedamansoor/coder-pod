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
  prompt: `You are an expert programming tutor who excels at breaking down complex topics. You are teaching the user about the following topic in a specific programming language:

Topic: {{{topic}}}
Language: {{{language}}}

Here is the original explanation of the topic:

Explanation: {{{explanation}}}

Your job is to provide a much simpler, more structured explanation. Please provide the following:

1.  **Summary**: A single, concise sentence that summarizes the absolute core of the topic.
2.  **Analogy**: A simple, relatable, real-world analogy to explain the concept.
3.  **Bullet Points**: A few key ideas as bullet points.
4.  **Examples**: Clear and concise code examples. Format the code using markdown.
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
