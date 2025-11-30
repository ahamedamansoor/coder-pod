'use server';

/**
 * @fileOverview A flow to execute Java code and return its output.
 *
 * - executeJavaCode - A function that takes Java code and returns the console output.
 * - ExecuteJavaCodeInput - The input type for the executeJavaCode function.
 * - ExecuteJavaCodeOutput - The return type for the executeJavaCode function.
 */

import { ai } from '@/ai';
import { z } from 'genkit';

const ExecuteJavaCodeInputSchema = z.object({
  code: z.string().describe('The Java code to execute.'),
});
export type ExecuteJavaCodeInput = z.infer<typeof ExecuteJavaCodeInputSchema>;

const ExecuteJavaCodeOutputSchema = z.object({
  output: z
    .string()
    .describe(
      'The simulated standard console output of the executed Java code. Do not include any explanations, only the raw output that would appear in a terminal.'
    ),
});
export type ExecuteJavaCodeOutput = z.infer<typeof ExecuteJavaCodeOutputSchema>;

export async function executeJavaCode(
  input: ExecuteJavaCodeInput
): Promise<ExecuteJavaCodeOutput> {
  return executeJavaCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'executeJavaCodePrompt',
  input: { schema: ExecuteJavaCodeInputSchema },
  output: { schema: ExecuteJavaCodeOutputSchema },
  prompt: `You are a Java runtime environment. Compile and run the following Java code.

Code:
{{{code}}}

Return only the standard console output. Do not include any of your own explanations, commentary, or error messages unless the code itself would print an error to the console. If the code runs successfully but produces no output (e.g., no System.out.println statements), return an empty string.`,
});

const executeJavaCodeFlow = ai.defineFlow(
  {
    name: 'executeJavaCodeFlow',
    inputSchema: ExecuteJavaCodeInputSchema,
    outputSchema: ExecuteJavaCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
