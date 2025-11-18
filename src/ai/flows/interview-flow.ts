
'use server';

/**
 * @fileOverview An AI flow to conduct a mock technical interview for any given programming language.
 *
 * - conductInterview - A function that evaluates a user's answer and provides feedback.
 * - ConductInterviewInput - The input type for the function.
 * - ConductInterviewOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ConductInterviewInputSchema = z.object({
  language: z.string().describe('The programming language for the interview.'),
  question: z.string().describe('The interview question that was asked. If empty, generate the first question.'),
  userAnswer: z.string().optional().describe("The user's answer to the question."),
  previousQuestions: z.array(z.string()).describe('A list of questions already asked in this session to avoid repetition.'),
});
export type ConductInterviewInput = z.infer<typeof ConductInterviewInputSchema>;

const ConductInterviewOutputSchema = z.object({
  feedback: z
    .string()
    .describe(
      'Constructive, friendly feedback on the user\'s answer. Point out what was right, what was wrong or missing, and how to improve. Use markdown for formatting. If this is the first question, this field should be empty.'
    ),
  idealAnswer: z
    .string()
    .describe(
      'An ideal, comprehensive answer to the original question. Use markdown for formatting, including code snippets where appropriate. If this is the first question, this field should be empty.'
    ),
  nextQuestion: z
    .string()
    .describe(
      'A new interview question relevant to the specified programming language that is different from the previous questions.'
    ),
});
export type ConductInterviewOutput = z.infer<typeof ConductInterviewOutputSchema>;

export async function conductInterview(
  input: ConductInterviewInput
): Promise<ConductInterviewOutput> {
  return interviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interviewPrompt',
  input: { schema: ConductInterviewInputSchema },
  output: { schema: ConductInterviewOutputSchema },
  prompt: `You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on {{{language}}}.

{{#if userAnswer}}
**Your Task:**
1.  **Evaluate the user's answer** to the provided question.
2.  **Provide constructive feedback:**
    *   Acknowledge what they got right.
    *   Gently correct any inaccuracies.
    *   Mention important concepts they might have missed.
    *   Keep the tone encouraging and helpful. Use markdown for formatting.
3.  **Provide an ideal, textbook answer** to the original question. This answer should be clear, correct, and comprehensive. Use markdown for code examples where relevant.
4.  **Generate a new, relevant {{{language}}} interview question** that is different from any of the previous questions. The question should be a reasonable follow-up or a related topic, progressing in difficulty if appropriate.

**Context:**
*   **Original Question:** {{{question}}}
*   **User's Answer:** {{{userAnswer}}}
*   **Questions Already Asked:** {{{previousQuestions}}}
{{else}}
**Your Task:**
1.  **Generate the first interview question** for a {{{language}}} mock interview. The question should be a common, fundamental topic.
2.  The \`feedback\` and \`idealAnswer\` fields should be empty strings.

**Context:**
*   **Questions Already Asked:** None. This is the start of the interview.
{{/if}}

Please provide your response in the requested JSON format.`,
});

const interviewFlow = ai.defineFlow(
  {
    name: 'interviewFlow',
    inputSchema: ConductInterviewInputSchema,
    outputSchema: ConductInterviewOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
