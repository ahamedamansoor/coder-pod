'use server';

/**
 * @fileOverview A flow to execute JavaScript code and return its output.
 *
 * - executeJavascriptCode - A function that takes JS code and returns the console output.
 * - ExecuteJavascriptCodeInput - The input type for the executeJavascriptCode function.
 * - ExecuteJavascriptCodeOutput - The return type for the executeJavascriptCode function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ExecuteJavascriptCodeInputSchema = z.object({
  code: z.string().describe('The JavaScript code to execute.'),
});
export type ExecuteJavascriptCodeInput = z.infer<typeof ExecuteJavascriptCodeInputSchema>;

const ExecuteJavascriptCodeOutputSchema = z.object({
  output: z
    .string()
    .describe(
      'The simulated standard console output of the executed JavaScript code. Do not include any explanations, only the raw output that would appear in a terminal.'
    ),
});
export type ExecuteJavascriptCodeOutput = z.infer<typeof ExecuteJavascriptCodeOutputSchema>;

export async function executeJavascriptCode(
  input: ExecuteJavascriptCodeInput
): Promise<ExecuteJavascriptCodeOutput> {
  return executeJavascriptCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'executeJavascriptCodePrompt',
  input: { schema: ExecuteJavascriptCodeInputSchema },
  output: { schema: ExecuteJavascriptCodeOutputSchema },
  prompt: `You are a Node.js runtime environment. Execute the following JavaScript code.

Code:
{{{code}}}

Return only the standard console output. Do not include any of your own explanations, commentary, or error messages unless the code itself would print an error to the console. If the code runs successfully but produces no output (e.g., no console.log statements), return an empty string.`,
});

const executeJavascriptCodeFlow = ai.defineFlow(
  {
    name: 'executeJavascriptCodeFlow',
    inputSchema: ExecuteJavascriptCodeInputSchema,
    outputSchema: ExecuteJavascriptCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
