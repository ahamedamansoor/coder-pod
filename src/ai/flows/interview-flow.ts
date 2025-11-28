
'use server';

/**
 * @fileOverview An AI flow to conduct a mock technical interview for any given programming language.
 *
 * - conductInterview - A function that evaluates a user's answer and provides feedback.
 * - ConductInterviewInput - The input type for the function.
 * - ConductInterviewOutput - The return type for the function.
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { z } from 'genkit';
import { AIProvider } from '@/types/ai-providers';

const ConductInterviewInputSchema = z.object({
  provider: z.enum(['gemini', 'openai', 'anthropic', 'perplexity', 'groq', 'mistral', 'cohere']).describe('The AI provider to use.'),
  apiKey: z.string().describe('The API key for authentication.'),
  language: z.string().describe('The programming language for the interview.'),
  question: z.string().describe('The interview question that was asked. If empty, generate the first question.'),
  userAnswer: z.string().optional().describe("The user's answer to the question."),
  previousQuestions: z.array(z.string()).describe('A list of questions already asked in this session to avoid repetition.'),
  questionType: z.enum(['theory', 'coding', 'mcq']).optional().describe('The type of questions to ask: theory (conceptual), coding (with code snippets), or mcq (multiple choice).'),
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
  const { provider, apiKey, ...interviewInput } = input;
  
  if (!apiKey) {
    throw new Error('API key is required');
  }

  // Route to appropriate provider
  switch (provider) {
    case 'gemini':
      return await conductGeminiInterview(apiKey, interviewInput);
    
    case 'openai':
      return await conductOpenAIInterview(apiKey, interviewInput);
    
    case 'anthropic':
      return await conductAnthropicInterview(apiKey, interviewInput);
    
    case 'perplexity':
      return await conductPerplexityInterview(apiKey, interviewInput);
    
    case 'groq':
      return await conductGroqInterview(apiKey, interviewInput);
    
    case 'mistral':
      return await conductMistralInterview(apiKey, interviewInput);
    
    case 'cohere':
      return await conductCohereInterview(apiKey, interviewInput);
    
    default:
      throw new Error(`Unsupported AI provider: ${provider}`);
  }
}

async function conductGeminiInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  // Create a dynamic genkit instance with the provided API key
  const ai = genkit({
    plugins: [googleAI({ apiKey })],
    model: 'googleai/gemini-2.0-flash-exp'
  });

  const questionTypeInstruction = input.questionType === 'coding'
    ? `Focus on CODING questions only. Format questions using this EXACT structure:

==============================================================================
[Question Title]
==============================================================================

[Clear description of the problem]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- [Handle edge cases]

Example:
  Input:  [example input]
  Output: [expected output]

Use markdown code blocks with \`\`\`${input.language} for any code examples.`
    : input.questionType === 'mcq'
    ? `Focus on MCQ (Multiple Choice Questions) only. Format questions using this structure:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

IMPORTANT: Include the correct answer at the end. Make options clear and distinct. Questions should test ${input.language} knowledge.`
    : 'Focus on THEORY questions only - conceptual understanding, definitions, and explanations. Do NOT include code snippets in questions.';

  const prompt = ai.definePrompt({
  name: 'interviewPrompt',
  input: { 
    schema: z.object({
      language: z.string(),
      question: z.string(),
      userAnswer: z.string().optional(),
      previousQuestions: z.array(z.string()),
      questionType: z.string(),
    })
  },
  output: { schema: ConductInterviewOutputSchema },
  prompt: `You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on {{{language}}}.

**Question Style:** {{{questionType}}}

{{#if userAnswer}}
**Your Task:**
1.  **Evaluate their answer** to the provided question.
2.  **Provide constructive feedback:**
    *   IMPORTANT: Use "Your answer" or "You" when referring to the candidate, NOT "The user's answer"
    *   Acknowledge what they got right
    *   Gently correct any inaccuracies
    *   Mention important concepts they might have missed
    *   Keep the tone encouraging, direct, and helpful. Use markdown for formatting
3.  **Provide an ideal, comprehensive answer** to the original question:
    *   Give a clear, detailed explanation of the concept
    *   **IMPORTANT: Always include practical code examples using markdown code blocks**
    *   Show best practices and common patterns
    *   Include comments in code to explain key parts
    *   If the question involves syntax, show correct syntax with examples
    *   Provide multiple examples if it helps understanding
    *   Use proper markdown formatting: \`\`\`{{{language}}}\` for code blocks
4.  **Generate a new, relevant {{{language}}} interview question**:
    *   Make it different from any of the previous questions
    *   Progress in difficulty if appropriate
    *   **Follow the question style specified above**
    *   If coding question: include code snippet using markdown \`\`\`{{{language}}}\` blocks with output as comments
    *   Example formats: "What does this code output?", "What's wrong with this code?", "Explain this concept"

**Context:**
*   **Original Question:** {{{question}}}
*   **User's Answer:** {{{userAnswer}}}
*   **Questions Already Asked:** {{{previousQuestions}}}
{{else}}
**Your Task:**
1.  **Generate the first interview question** for a {{{language}}} mock interview following the question style specified above.
2.  The \`feedback\` and \`idealAnswer\` fields should be empty strings.

**Context:**
*   **Questions Already Asked:** None. This is the start of the interview.
{{/if}}

Please provide your response in the requested JSON format.`,
  });

  const interviewFlow = ai.defineFlow(
    {
      name: 'interviewFlow',
      inputSchema: z.object({
        language: z.string(),
        question: z.string(),
        userAnswer: z.string().optional(),
        previousQuestions: z.array(z.string()),
        questionType: z.string(),
      }),
      outputSchema: ConductInterviewOutputSchema,
    },
    async (flowInput) => {
      const { output } = await prompt(flowInput);
      return output!;
    }
  );

  return interviewFlow({
    ...input,
    questionType: questionTypeInstruction
  });
}

async function conductOpenAIInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  try {
    const questionTypeInstruction = input.questionType === 'coding'
      ? `Focus on CODING questions only. Format questions using this EXACT structure:

==============================================================================
[Question Title]
==============================================================================

[Clear description of the problem]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- [Handle edge cases]

Example:
  Input:  [example input]
  Output: [expected output]

Use markdown code blocks for any code examples.`
      : input.questionType === 'mcq'
      ? `Focus on MCQ (Multiple Choice Questions) only. Format questions using this structure:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

IMPORTANT: Include the correct answer at the end. Make options clear and distinct.`
      : 'Focus on THEORY questions only - conceptual understanding, definitions, explanations. Do NOT include code snippets in questions.';
    
    const systemPrompt = `You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on ${input.language}.

Question Style: ${questionTypeInstruction}

${input.userAnswer ? `
Your Task:
1. Evaluate their answer to the provided question.
2. Provide constructive feedback:
   - IMPORTANT: Use "Your answer" or "You" when referring to the candidate, NOT "The user's answer"
   - Acknowledge what they got right
   - Gently correct any inaccuracies
   - Mention important concepts they might have missed.
   - Keep the tone encouraging and helpful.
3. Provide an ideal, comprehensive answer to the original question:
   - Give a clear, detailed explanation of the concept
   - IMPORTANT: Always include practical code examples using markdown code blocks
   - Show best practices and common patterns
   - Include comments in code to explain key parts
   - If the question involves syntax, show correct syntax with examples
   - Provide multiple examples if it helps understanding
   - Use proper markdown formatting with \`\`\`${input.language} for code blocks
4. Generate a new, relevant ${input.language} interview question:
   - Make it different from any of the previous questions
   - Progress in difficulty if appropriate
   - If the question involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, include the expected output as a comment in the code or ask about it
   - Examples: "What does this code output?", "What's wrong with this code?", "Predict the output"
   - Format code with output like:
     \`\`\`${input.language}
     const x = 5;
     console.log(x * 2);
     // Output: ?
     \`\`\`

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Already Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview. The question should be a common, fundamental topic.
2. The feedback and idealAnswer fields should be empty strings.
`}

Please provide your response in JSON format with the following structure:
{
  "feedback": "string (constructive feedback on the answer, empty if first question)",
  "idealAnswer": "string (ideal comprehensive answer with code examples, empty if first question)",
  "nextQuestion": "string (new interview question)"
}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: 'Please generate the interview response.' }
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);

    return {
      feedback: result.feedback || '',
      idealAnswer: result.idealAnswer || '',
      nextQuestion: result.nextQuestion
    };
  } catch (error: any) {
    console.error('OpenAI interview error:', error);
    throw new Error(`OpenAI Error: ${error.message}`);
  }
}

async function conductAnthropicInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  try {
    const questionTypeInstruction = input.questionType === 'coding'
      ? `Focus on CODING questions only. Format questions using this EXACT structure:

==============================================================================
[Question Title]
==============================================================================

[Clear description of the problem]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- [Handle edge cases]

Example:
  Input:  [example input]
  Output: [expected output]

Use markdown code blocks for any code examples.`
      : input.questionType === 'mcq'
      ? `Focus on MCQ (Multiple Choice Questions) only. Format questions using this structure:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

IMPORTANT: Include the correct answer at the end. Make options clear and distinct.`
      : 'Focus on THEORY questions only - conceptual understanding, definitions, explanations. Do NOT include code snippets in questions.';
    
    const systemPrompt = `You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on ${input.language}.

Question Style: ${questionTypeInstruction}

${input.userAnswer ? `
Your Task:
1. Evaluate their answer to the provided question.
2. Provide constructive feedback:
   - IMPORTANT: Use "Your answer" or "You" when referring to the candidate, NOT "The user's answer"
   - Acknowledge what they got right
   - Gently correct any inaccuracies
   - Mention important concepts they might have missed.
   - Keep the tone encouraging and helpful.
3. Provide an ideal, comprehensive answer to the original question:
   - Give a clear, detailed explanation of the concept
   - IMPORTANT: Always include practical code examples using markdown code blocks
   - Show best practices and common patterns
   - Include comments in code to explain key parts
   - If the question involves syntax, show correct syntax with examples
   - Provide multiple examples if it helps understanding
   - Use proper markdown formatting with \`\`\`${input.language} for code blocks
4. Generate a new, relevant ${input.language} interview question:
   - Make it different from any of the previous questions
   - Progress in difficulty if appropriate
   - If the question involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, include the expected output as a comment in the code or ask about it
   - Examples: "What does this code output?", "What's wrong with this code?", "Predict the output"
   - Format code with output like:
     \`\`\`${input.language}
     const x = 5;
     console.log(x * 2);
     // Output: ?
     \`\`\`

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Already Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview. The question should be a common, fundamental topic.
2. The feedback and idealAnswer fields should be empty strings.
`}

Respond with a JSON object containing: feedback (string), idealAnswer (string with code examples), and nextQuestion (string).`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2048,
        messages: [
          { 
            role: 'user', 
            content: `${systemPrompt}\n\nPlease provide your response as a valid JSON object with these exact fields: feedback, idealAnswer, nextQuestion` 
          }
        ],
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Anthropic API request failed');
    }

    const data = await response.json();
    const content = data.content[0].text;
    
    // Try to extract JSON from the response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse Claude response');
    }
    
    const result = JSON.parse(jsonMatch[0]);

    return {
      feedback: result.feedback || '',
      idealAnswer: result.idealAnswer || '',
      nextQuestion: result.nextQuestion
    };
  } catch (error: any) {
    console.error('Anthropic interview error:', error);
    throw new Error(`Claude Error: ${error.message}`);
  }
}

async function conductPerplexityInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://api.perplexity.ai/chat/completions',
    'llama-3.1-sonar-large-128k-online',
    'Perplexity'
  );
}

async function conductGroqInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://api.groq.com/openai/v1/chat/completions',
    'llama-3.3-70b-versatile',
    'Groq'
  );
}

async function conductMistralInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://api.mistral.ai/v1/chat/completions',
    'mistral-large-latest',
    'Mistral'
  );
}

async function conductCohereInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  try {
    const questionTypeInstruction = input.questionType === 'coding'
      ? `Focus on CODING questions only. Format questions using this EXACT structure:

==============================================================================
[Question Title]
==============================================================================

[Clear description of the problem]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- [Handle edge cases]

Example:
  Input:  [example input]
  Output: [expected output]

Use markdown code blocks for any code examples.`
      : input.questionType === 'mcq'
      ? `Focus on MCQ (Multiple Choice Questions) only. Format questions using this structure:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

IMPORTANT: Include the correct answer at the end. Make options clear and distinct.`
      : 'Focus on THEORY questions only - conceptual understanding, definitions, explanations. Do NOT include code snippets in questions.';
    
    const systemPrompt = `You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on ${input.language}.

Question Style: ${questionTypeInstruction}

${input.userAnswer ? `
Your Task:
1. Evaluate their answer to the provided question.
2. Provide constructive feedback:
   - IMPORTANT: Use "Your answer" or "You" when referring to the candidate, NOT "The user's answer"
3. Provide an ideal, comprehensive answer to the original question:
   - Give a clear, detailed explanation
   - IMPORTANT: Always include practical code examples using markdown code blocks
   - Show best practices and common patterns
   - Include comments in code to explain key parts
   - Use proper markdown formatting with \`\`\`${input.language} for code blocks
4. Generate a new interview question:
   - Make it different from previous questions
   - If it involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, show expected output as comment or ask about it
   - Format with output: \`\`\`${input.language}\\nconst x = 5;\\nconsole.log(x);\\n// Output: ?\\n\`\`\`

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview.
2. Leave feedback and idealAnswer as empty strings.
`}

Respond with JSON: {feedback: string, idealAnswer: string with code examples, nextQuestion: string}`;

    const response = await fetch('https://api.cohere.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'command-r-plus',
        message: systemPrompt,
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      throw new Error('Cohere API request failed');
    }

    const data = await response.json();
    const content = data.text;
    
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse Cohere response');
    }
    
    const result = JSON.parse(jsonMatch[0]);

    return {
      feedback: result.feedback || '',
      idealAnswer: result.idealAnswer || '',
      nextQuestion: result.nextQuestion
    };
  } catch (error: any) {
    console.error('Cohere interview error:', error);
    throw new Error(`Cohere Error: ${error.message}`);
  }
}

// Helper function for OpenAI-compatible APIs
async function conductOpenAICompatibleInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>,
  apiUrl: string,
  model: string,
  providerName: string
): Promise<ConductInterviewOutput> {
  try {
    const questionTypeInstruction = input.questionType === 'coding'
      ? `Focus on CODING questions only. Format questions using this EXACT structure:

==============================================================================
[Question Title]
==============================================================================

[Clear description of the problem]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
- [Handle edge cases]

Example:
  Input:  [example input]
  Output: [expected output]

Use markdown code blocks for any code examples.`
      : input.questionType === 'mcq'
      ? `Focus on MCQ (Multiple Choice Questions) only. Format questions using this structure:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

IMPORTANT: Include the correct answer at the end. Make options clear and distinct.`
      : 'Focus on THEORY questions only - conceptual understanding, definitions, explanations. Do NOT include code snippets in questions.';
    
    const systemPrompt = `You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on ${input.language}.

Question Style: ${questionTypeInstruction}

${input.userAnswer ? `
Your Task:
1. Evaluate their answer to the provided question.
2. Provide constructive feedback:
   - IMPORTANT: Use "Your answer" or "You" when referring to the candidate, NOT "The user's answer"
3. Provide an ideal, comprehensive answer:
   - Give a clear, detailed explanation
   - IMPORTANT: Always include practical code examples using markdown code blocks
   - Show best practices and common patterns
   - Include comments in code to explain key parts
   - Use proper markdown formatting with \`\`\`${input.language} for code blocks
4. Generate a new interview question:
   - Make it different from previous questions
   - If it involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, show expected output as comment or ask about it
   - Examples: "What does this code output?", "Fix this bug", "Predict the output"
   - Format with output: \`\`\`${input.language}\\nconst x = 5;\\nconsole.log(x);\\n// Output: ?\\n\`\`\`

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview.
2. Leave feedback and idealAnswer empty.
`}

Respond in JSON format: {"feedback": "string", "idealAnswer": "string with code examples in markdown", "nextQuestion": "string"}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: 'Generate the interview response.' }
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      throw new Error(`${providerName} API request failed`);
    }

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);

    return {
      feedback: result.feedback || '',
      idealAnswer: result.idealAnswer || '',
      nextQuestion: result.nextQuestion
    };
  } catch (error: any) {
    console.error(`${providerName} interview error:`, error);
    throw new Error(`${providerName} Error: ${error.message}`);
  }
}
