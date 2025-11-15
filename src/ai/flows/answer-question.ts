'use server';

/**
 * @fileOverview A flow to answer user questions about a programming topic.
 *
 * - answerQuestion - A function that answers a user's question.
 * - AnswerQuestionInput - The input type for the answerQuestion function.
 * - AnswerQuestionOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionInputSchema = z.object({
  topic: z.string().describe('The programming topic the user is asking about.'),
  language: z.string().describe('The programming language of the topic.'),
  question: z.string().describe("The user's question."),
  explanation: z.string().describe('The original explanation of the topic to provide context.'),
});
export type AnswerQuestionInput = z.infer<typeof AnswerQuestionInputSchema>;

const AnswerQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the user\'s question in markdown format.'),
});
export type AnswerQuestionOutput = z.infer<typeof AnswerQuestionOutputSchema>;

export async function answerQuestion(
  input: AnswerQuestionInput
): Promise<AnswerQuestionOutput> {
  return answerQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionPrompt',
  input: {schema: AnswerQuestionInputSchema},
  output: {schema: AnswerQuestionOutputSchema},
  prompt: `You are an expert programming tutor. The user is learning about the following topic in a specific programming language.

Topic: {{{topic}}}
Language: {{{language}}}
Original Explanation: {{{explanation}}}

Answer the user's question clearly and concisely. Format your answer using markdown.

User Question: {{{question}}}
`,
});

const answerQuestionFlow = ai.defineFlow(
  {
    name: 'answerQuestionFlow',
    inputSchema: AnswerQuestionInputSchema,
    outputSchema: AnswerQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
