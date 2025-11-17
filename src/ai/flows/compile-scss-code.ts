'use server';

/**
 * @fileOverview A flow to compile SCSS code into CSS.
 *
 * - compileScssCode - A function that takes SCSS code and returns compiled CSS.
 * - CompileScssCodeInput - The input type for the compileScssCode function.
 * - CompileScssCodeOutput - The return type for the compileScssCode function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CompileScssCodeInputSchema = z.object({
  scss: z.string().describe('The SCSS code to compile.'),
});
export type CompileScssCodeInput = z.infer<typeof CompileScssCodeInputSchema>;

const CompileScssCodeOutputSchema = z.object({
  css: z
    .string()
    .describe(
      'The compiled CSS output. If the SCSS is invalid, return an error message as a string.'
    ),
});
export type CompileScssCodeOutput = z.infer<
  typeof CompileScssCodeOutputSchema
>;

export async function compileScssCode(
  input: CompileScssCodeInput
): Promise<CompileScssCodeOutput> {
  return compileScssCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'compileScssCodePrompt',
  input: { schema: CompileScssCodeInputSchema },
  output: { schema: CompileScssCodeOutputSchema },
  prompt: `You are a SASS/SCSS compiler. Take the following SCSS code and compile it into standard CSS.

SCSS Code:
{{{scss}}}

Return only the raw CSS output. If there is a compilation error in the SCSS, return a CSS comment containing the error message. For example: /* Error: Invalid CSS after "...": expected "{", was "" */`,
});

const compileScssCodeFlow = ai.defineFlow(
  {
    name: 'compileScssCodeFlow',
    inputSchema: CompileScssCodeInputSchema,
    outputSchema: CompileScssCodeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
