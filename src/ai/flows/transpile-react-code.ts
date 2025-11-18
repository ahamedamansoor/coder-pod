
'use server';

/**
 * @fileOverview A flow to transpile React/JSX code into browser-runnable JavaScript.
 *
 * - transpileReactCode - A function that takes React code and returns transpiled JS.
 * - TranspileReactCodeInput - The input type for the function.
 * - TranspileReactCodeOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TranspileReactCodeInputSchema = z.object({
  code: z.string().describe('The React/JSX code to transpile.'),
});
export type TranspileReactCodeInput = z.infer<typeof TranspileReactCodeInputSchema>;

const TranspileReactCodeOutputSchema = z.object({
  success: z.boolean().describe('Whether the transpilation was successful.'),
  transpiledCode: z.string().optional().describe('The browser-runnable JavaScript code.'),
  error: z.string().optional().describe('Any error message that occurred during transpilation.'),
});
export type TranspileReactCodeOutput = z.infer<
  typeof TranspileReactCodeOutputSchema
>;

export async function transpileReactCode(
  input: TranspileReactCodeInput
): Promise<TranspileReactCodeOutput> {
  return transpileReactCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'transpileReactCodePrompt',
  input: { schema: TranspileReactCodeInputSchema },
  output: { schema: TranspileReactCodeOutputSchema },
  prompt: `You are an expert web development build tool. Your task is to take the provided React/JSX code and transpile it into a single, browser-runnable JavaScript module.

**Instructions:**
1.  **Transpile JSX:** Convert all JSX syntax into valid \`React.createElement()\` calls.
2.  **Handle Imports:** Resolve any imports (like 'react', 'react-dom/client') by replacing them with direct calls to a global \`React\` or \`ReactDOM\` object if necessary, or bundle the required logic. Assume that the browser environment does not support bare module specifiers. You must produce a single script that has no external dependencies beyond what's available in a standard browser with React and ReactDOM loaded.
3.  **Error Handling:** If the code has a syntax error or cannot be transpiled, set the \`success\` field to \`false\` and provide a clear, concise error message in the \`error\` field.
4.  **Output:** If successful, set \`success\` to \`true\` and return the final, browser-compatible JavaScript code in the \`transpiledCode\` field.

**React Code to Transpile:**
\`\`\`jsx
{{{code}}}
\`\`\`

**IMPORTANT:** Respond ONLY with the JSON object. Do not include any other text or explanation.`,
});

const transpileReactCodeFlow = ai.defineFlow(
  {
    name: 'transpileReactCodeFlow',
    inputSchema: TranspileReactCodeInputSchema,
    outputSchema: TranspileReactCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
