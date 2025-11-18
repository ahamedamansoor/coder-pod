
'use server';

/**
 * @fileOverview An AI flow to conduct a mock HTML interview.
 * @deprecated Use the more generic 'interview-flow.ts' instead.
 *
 * - conductHtmlInterview - A function that evaluates a user's answer and provides feedback.
 * - ConductHtmlInterviewInput - The input type for the function.
 * - ConductHtmlInterviewOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ConductHtmlInterviewInputSchema = z.object({
  question: z.string().describe('The interview question that was asked.'),
  userAnswer: z.string().describe("The user's answer to the question."),
  previousQuestions: z.array(z.string()).describe('A list of questions already asked in this session to avoid repetition.'),
});
export type ConductHtmlInterviewInput = z.infer<
  typeof ConductHtmlInterviewInputSchema
>;

const ConductHtmlInterviewOutputSchema = z.object({
  feedback: z
    .string()
    .describe(
      'Constructive, friendly feedback on the user\'s answer. Point out what was right, what was wrong or missing, and how to improve. Use markdown for formatting.'
    ),
  idealAnswer: z
    .string()
    .describe(
      'An ideal, comprehensive answer to the original question. Use markdown for formatting, including code snippets where appropriate.'
    ),
  nextQuestion: z
    .string()
    .describe(
      'A new, follow-up HTML interview question that is different from the previous questions.'
    ),
});
export type ConductHtmlInterviewOutput = z.infer<
  typeof ConductHtmlInterviewOutputSchema
>;

export async function conductHtmlInterview(
  input: ConductHtmlInterviewInput
): Promise<ConductHtmlInterviewOutput> {
  return htmlInterviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'htmlInterviewPrompt',
  input: { schema: ConductHtmlInterviewInputSchema },
  output: { schema: ConductHtmlInterviewOutputSchema },
  prompt: `You are a friendly and experienced senior front-end engineering interviewer conducting a mock interview for an HTML role.

**Your Task:**
1.  **Evaluate the user's answer** to the provided HTML question.
2.  **Provide constructive feedback:**
    *   Acknowledge what they got right.
    *   Gently correct any inaccuracies.
    *   Mention important concepts they might have missed.
    *   Keep the tone encouraging and helpful.
3.  **Provide an ideal, textbook answer** to the original question. This answer should be clear, correct, and comprehensive. Use markdown for code examples.
4.  **Generate a new, relevant HTML interview question** that has not been asked before in this session. The question should be a reasonable follow-up or a related topic.

**Context:**
*   **Original Question:** {{{question}}}
*   **User's Answer:** {{{userAnswer}}}
*   **Questions Already Asked:** {{{previousQuestions}}}

Please provide your evaluation below in the requested format.`,
});

const htmlInterviewFlow = ai.defineFlow(
  {
    name: 'htmlInterviewFlow',
    inputSchema: ConductHtmlInterviewInputSchema,
    outputSchema: ConductHtmlInterviewOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
