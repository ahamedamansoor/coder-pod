'use server';

/**
 * @fileOverview A flow to summarize a YouTube video URL.
 * This is a simplified version and does not actually fetch the transcript.
 *
 * - summarizeYoutubeUrl - A function that takes a youtube URL and returns a summary.
 * - SummarizeYoutubeUrlInput - The input type for the function.
 * - SummarizeYoutubeUrlOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SummarizeYoutubeUrlInputSchema = z.object({
  youtubeUrl: z.string().url().describe('The URL of the YouTube video to summarize.'),
});
export type SummarizeYoutubeUrlInput = z.infer<typeof SummarizeYoutubeUrlInputSchema>;

const SummarizeYoutubeUrlOutputSchema = z.object({
  title: z.string().describe('A concise, engaging title for the summarized note.'),
  summary: z.string().describe('A detailed summary of the video content in 3-5 bullet points.'),
});
export type SummarizeYoutubeUrlOutput = z.infer<typeof SummarizeYoutubeUrlOutputSchema>;

export async function summarizeYoutubeUrl(
  input: SummarizeYoutubeUrlInput
): Promise<SummarizeYoutubeUrlOutput> {
  return summarizeYoutubeUrlFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeYoutubeUrlPrompt',
  input: { schema: SummarizeYoutubeUrlInputSchema },
  output: { schema: SummarizeYoutubeUrlOutputSchema },
  prompt: `You are an expert at summarizing educational video content.
A user has provided a YouTube URL. You do not have access to the internet, so you cannot watch the video.
Instead, I want you to act as if you have extracted the transcript and generate a plausible-sounding summary.

**Your Task:**
1.  **Invent a realistic title** for a tech or programming-related educational video based on the provided URL: {{{youtubeUrl}}}.
2.  **Generate a summary** of this hypothetical video. The summary should be structured as 3-5 concise bullet points, each explaining a key concept that would likely be in such a video.
3.  Ensure the summary is well-written, informative, and sounds like a real summary of a technical tutorial.

**Example Input URL:** https://www.youtube.com/watch?v=some_id_for_react_hooks

**Example Output:**
{
  "title": "Mastering React Hooks: A Beginner's Guide",
  "summary": "- Introduction to what React Hooks are and why they were introduced to replace class components.\n- Deep dive into the \`useState\` hook for managing state in functional components.\n- Explaining the \`useEffect\` hook for handling side effects like data fetching and subscriptions.\n- How to create your own custom hooks to encapsulate and reuse stateful logic."
}

Please generate a title and summary for the following YouTube URL: {{{youtubeUrl}}}
`,
});

const summarizeYoutubeUrlFlow = ai.defineFlow(
  {
    name: 'summarizeYoutubeUrlFlow',
    inputSchema: SummarizeYoutubeUrlInputSchema,
    outputSchema: SummarizeYoutubeUrlOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
