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
  answer: z.string().describe('The answer to the user\'s question in a structured markdown format.'),
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
  prompt: `You are an expert programming tutor who excels at making complex topics simple. The user is learning about a topic and has a question.

Topic: {{{topic}}}
Language: {{{language}}}
Context: The original explanation for this topic is: {{{explanation}}}

Your goal is to answer the user's question in a clear, structured, and easy-to-digest format.

**Answer Guidelines:**
1.  **Start with a direct, concise answer.**
2.  **Use bullet points or numbered lists** to break down complex ideas.
3.  **Provide a simple analogy or metaphor** if it helps explain the concept.
4.  **Use markdown for formatting**, especially for code snippets (use \`\`\`java for multi-line blocks), bold text, and lists.
5.  If a comparison is being made, consider using a **markdown table** for a clear, side-by-side view.
6.  If a process or flow is being explained, you can use **simple ASCII art** (like ->, ==>, etc.) to create a diagrammatic representation.

**User Question:** {{{question}}}

Please provide your answer below.
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
