'use server';

/**
 * @fileOverview A flow to simplify topic explanations using AI.
 *
 * - simplifyTopicExplanation - A function that simplifies a given topic explanation.
 * - SimplifyTopicExplanationInput - The input type for the simplifyTopicExplanation function.
 * - SimplifyTopicExplanationOutput - The return type for the simplifyTopicExplanation function.
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
  simplifiedExplanation: z.string().describe('The simplified explanation of the topic.'),
  examples: z.string().describe('Examples of the topic.'),
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
  prompt: `You are an expert programming tutor. You are teaching the user about the following topic in the following programming language:

Topic: {{{topic}}}
Language: {{{language}}}

Here is the original explanation of the topic:

Explanation: {{{explanation}}}

Your job is to provide a simplified explanation of the topic, and provide clear and concise examples. Format this using markdown.

Simplified Explanation:
Examples:`,
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
