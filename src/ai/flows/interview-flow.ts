
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
  provider: z.enum(['gemini', 'openai', 'anthropic', 'perplexity', 'groq', 'mistral', 'cohere', 'huggingface', 'together', 'deepseek', 'meta']).describe('The AI provider to use.'),
  apiKey: z.string().describe('The API key for authentication.'),
  language: z.string().describe('The topic for the interview (e.g., JavaScript, HR Round, Logical Reasoning).'),
  question: z.string().describe('The interview question that was asked. If empty, generate the first question.'),
  userAnswer: z.string().optional().describe("The user's answer to the question."),
  previousQuestions: z.array(z.string()).describe('A list of questions already asked in this session to avoid repetition.'),
  questionType: z.enum(['theory', 'coding', 'mcq']).optional().describe('The type of questions to ask: theory (conceptual), coding (with code snippets), or mcq (multiple choice).'),
  category: z.enum(['technical', 'behavioral', 'aptitude']).optional().describe('The category of interview: technical (programming), behavioral (HR/soft skills), or aptitude (reasoning/logic).'),
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
  answerHint: z
    .string()
    .describe(
      'A helpful hint suggesting how to approach answering the nextQuestion in a simple and easy way. Give 2-3 key points on what to focus on. Keep it brief and encouraging.'
    ),
  simpleAnswer: z
    .string()
    .describe(
      'A brief, clear, spoken-friendly example answer to the ORIGINAL question (not nextQuestion). This will be read aloud in voice mode. Keep it concise (2-3 sentences), conversational, and easy to understand. If this is the first question, this field should be empty.'
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
    
    case 'huggingface':
      return await conductHuggingFaceInterview(apiKey, interviewInput);

    case 'together':
      return await conductTogetherInterview(apiKey, interviewInput);

    case 'deepseek':
      return await conductDeepSeekInterview(apiKey, interviewInput);

    case 'meta':
      return await conductMetaInterview(apiKey, interviewInput);

    default:
      throw new Error(`Unsupported AI provider: ${provider}. Please choose from: Gemini, OpenAI, Anthropic, Perplexity, Groq, Mistral, Cohere, HuggingFace, Together, DeepSeek, or Meta.`);
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

[Question Title]

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
    ? `Focus on MCQ (Multiple Choice Questions) only. STRICTLY follow this EXACT format:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

CRITICAL REQUIREMENTS:
1. MUST include exactly 4 options labeled A), B), C), D)
2. MUST include "Correct Answer: [Letter]" at the end (e.g., "Correct Answer: B")
3. Use proper spacing and line breaks as shown above
4. Make options clear, distinct, and realistic
5. Questions should test ${input.language} knowledge comprehensively
6. Ensure one and only one correct answer
7. Make distractors plausible but clearly wrong`
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
      category: z.string(),
    })
  },
  output: { schema: ConductInterviewOutputSchema },
  prompt: `{{#if (eq category "behavioral")}}You are a friendly and experienced HR interviewer conducting a behavioral interview focused on {{{language}}}.

**Interview Style:** Focus on behavioral questions, soft skills, situational scenarios, past experiences, and HR topics. DO NOT ask programming or technical questions.
{{else if (eq category "aptitude")}}You are a friendly and experienced interviewer conducting an aptitude assessment focused on {{{language}}}.

**Interview Style:** Focus on logical reasoning, problem-solving, quantitative aptitude, puzzles, and analytical thinking. DO NOT ask programming questions unless specifically about algorithmic thinking.
{{else}}You are a friendly and experienced senior engineering interviewer conducting a mock technical interview for a role focused on {{{language}}}.

**Interview Style:** Focus on technical knowledge, programming concepts, and software engineering practices.
{{/if}}

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
    *   **Progress from simple to complex**: Start with fundamentals, gradually increase difficulty
    *   **Cover diverse topics**: Ensure comprehensive coverage of all {{{language}}} topics (basics, intermediate, advanced)
    *   **Topic variety**: If previous questions focused on one area, explore a different topic
    *   **Question progression**: Consider how many questions have been asked and adjust complexity accordingly
    *   **Follow the question style specified above**
    *   If coding question: include code snippet using markdown \`\`\`{{{language}}}\` blocks with output as comments
    *   Example formats: "What does this code output?", "What's wrong with this code?", "Explain this concept"
5.  **Provide a helpful answer hint**:
    *   Give 2-3 simple suggestions on how to approach answering the question
    *   Focus on what key points to cover
    *   Keep it brief and encouraging (2-3 short sentences)
    *   Example: "Think about the definition first, then explain with a simple example. Focus on when and why you'd use it."
6.  **Provide a simple, spoken-friendly answer** to the ORIGINAL question:
    *   This will be READ ALOUD in voice mode after feedback
    *   Keep it very brief (2-3 sentences maximum)
    *   Make it conversational and easy to understand when spoken
    *   Focus on the core concept without code examples
    *   Example: "A closure is a function that has access to variables from its outer scope, even after that outer scope has finished executing. It's useful for data privacy and creating function factories."

**Context:**
*   **Original Question:** {{{question}}}
*   **User's Answer:** {{{userAnswer}}}
*   **Questions Already Asked:** {{{previousQuestions}}}
{{else}}
**Your Task:**
1.  **Generate the first interview question** for a {{{language}}} {{#if (eq category "behavioral")}}behavioral interview{{else if (eq category "aptitude")}}aptitude test{{else}}mock interview{{/if}} following the question style specified above.
    {{#if (eq category "behavioral")}}
    *   IMPORTANT: Ask about past experiences, teamwork, conflict resolution, leadership, communication, or other soft skills
    *   Focus on "Tell me about a time when..." or "How would you handle..." questions
    *   Questions should assess behavioral competencies, not technical knowledge
    {{else if (eq category "aptitude")}}
    *   IMPORTANT: Focus on logical puzzles, numerical reasoning, pattern recognition, or analytical problems
    *   Questions should test problem-solving ability and reasoning skills
    *   Vary between quantitative, logical, and verbal reasoning
    {{else}}
    *   **CRITICAL: RANDOMIZE starting topics** - Pick from: variables, data types, operators, functions, loops, conditionals, scope, closures, arrays, objects, strings, etc.
    *   **DO NOT always ask the same first question** - Each interview should start differently
    *   **Start SIMPLE**: First question should be fundamental but accessible
    *   **Topic diversity**: Choose a topic that will allow for good progression in subsequent questions
    *   **Coverage strategy**: Consider all major areas of {{{language}}} for comprehensive assessment
    {{/if}}
2.  The \`feedback\`, \`idealAnswer\`, and \`simpleAnswer\` fields should be empty strings.
3.  **Provide a helpful answer hint** with 2-3 brief suggestions on how to approach answering the question simply.

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
        category: z.string(),
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
    questionType: questionTypeInstruction,
    category: input.category || 'technical'
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
      ? `Focus on MCQ (Multiple Choice Questions) only. STRICTLY follow this EXACT format:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

CRITICAL REQUIREMENTS:
1. MUST include exactly 4 options labeled A), B), C), D)
2. MUST include "Correct Answer: [Letter]" at the end (e.g., "Correct Answer: B")
3. Use proper spacing and line breaks as shown above
4. Make options clear, distinct, and realistic
5. Questions should test ${input.language} knowledge comprehensively
6. Ensure one and only one correct answer
7. Make distractors plausible but clearly wrong`
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
   - **Progress from simple to complex**: Start with fundamentals, gradually increase difficulty
   - **Cover diverse topics**: Ensure comprehensive coverage of all ${input.language} topics (basics, intermediate, advanced)
   - **Topic variety**: If previous questions focused on one area, explore a different topic
   - **Question progression**: Consider how many questions have been asked and adjust complexity accordingly
   - If the question involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, include the expected output as a comment in the code or ask about it
   - Examples: "What does this code output?", "What's wrong with this code?", "Predict the output"
   - Format code with output like:
     \`\`\`${input.language}
     const x = 5;
     console.log(x * 2);
     // Output: ?
     \`\`\`
5. Provide a brief, spoken-friendly simple answer to the ORIGINAL question:
   - This will be read aloud in voice mode (2-3 sentences max)
   - Make it conversational and easy to understand when spoken
   - Focus on core concept without code examples

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Already Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview.
   - **CRITICAL: RANDOMIZE starting topics** - Pick from: variables, data types, operators, functions, loops, conditionals, scope, closures, arrays, objects, strings, etc.
   - **DO NOT always ask the same first question** - Each interview should start differently
   - **Start SIMPLE**: First question should be fundamental but accessible
   - **Topic diversity**: Choose a topic that will allow for good progression in subsequent questions
   - **Coverage strategy**: Consider all major areas of ${input.language} for comprehensive assessment
2. The feedback, idealAnswer, and simpleAnswer fields should be empty strings.
`}

Please provide your response in JSON format with the following structure:
{
  "feedback": "string (constructive feedback on the answer, empty if first question)",
  "idealAnswer": "string (ideal comprehensive answer with code examples, empty if first question)",
  "nextQuestion": "string (new interview question)",
  "answerHint": "string (2-3 brief suggestions on how to approach answering the nextQuestion simply)",
  "simpleAnswer": "string (brief 2-3 sentence spoken answer to ORIGINAL question, empty if first question)"
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
      nextQuestion: result.nextQuestion,
      answerHint: result.answerHint || 'Focus on key concepts and explain with a simple example.',
      simpleAnswer: result.simpleAnswer || ''
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
      ? `Focus on MCQ (Multiple Choice Questions) only. STRICTLY follow this EXACT format:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

CRITICAL REQUIREMENTS:
1. MUST include exactly 4 options labeled A), B), C), D)
2. MUST include "Correct Answer: [Letter]" at the end (e.g., "Correct Answer: B")
3. Use proper spacing and line breaks as shown above
4. Make options clear, distinct, and realistic
5. Questions should test ${input.language} knowledge comprehensively
6. Ensure one and only one correct answer
7. Make distractors plausible but clearly wrong`
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
   - **Progress from simple to complex**: Start with fundamentals, gradually increase difficulty
   - **Cover diverse topics**: Ensure comprehensive coverage of all ${input.language} topics (basics, intermediate, advanced)
   - **Topic variety**: If previous questions focused on one area, explore a different topic
   - **Question progression**: Consider how many questions have been asked and adjust complexity accordingly
   - If the question involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, include the expected output as a comment in the code or ask about it
   - Examples: "What does this code output?", "What's wrong with this code?", "Predict the output"
   - Format code with output like:
     \`\`\`${input.language}
     const x = 5;
     console.log(x * 2);
     // Output: ?
     \`\`\`
5. Provide a brief, spoken-friendly simple answer to the ORIGINAL question:
   - This will be read aloud in voice mode (2-3 sentences max)
   - Make it conversational and easy to understand when spoken
   - Focus on core concept without code examples

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Already Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview.
   - **CRITICAL: RANDOMIZE starting topics** - Pick from: variables, data types, operators, functions, loops, conditionals, scope, closures, arrays, objects, strings, etc.
   - **DO NOT always ask the same first question** - Each interview should start differently
   - **Start SIMPLE**: First question should be fundamental but accessible
   - **Topic diversity**: Choose a topic that will allow for good progression in subsequent questions
   - **Coverage strategy**: Consider all major areas of ${input.language} for comprehensive assessment
2. The feedback, idealAnswer, and simpleAnswer fields should be empty strings.
`}

Respond with a JSON object containing: feedback (string), idealAnswer (string with code examples), nextQuestion (string), answerHint (string - 2-3 brief tips on how to answer simply), and simpleAnswer (string - brief spoken answer to ORIGINAL question).`;

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
      nextQuestion: result.nextQuestion,
      answerHint: result.answerHint || 'Focus on key concepts and explain with a simple example.',
      simpleAnswer: result.simpleAnswer || ''
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
    'Perplexity',
    true // Perplexity supports JSON mode
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
    'Groq',
    true // Groq supports JSON mode
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
    'mistral-small-latest', // Using mistral-small-latest for better availability
    'Mistral',
    true // Mistral supports JSON mode
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
      ? `Focus on MCQ (Multiple Choice Questions) only. STRICTLY follow this EXACT format:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

CRITICAL REQUIREMENTS:
1. MUST include exactly 4 options labeled A), B), C), D)
2. MUST include "Correct Answer: [Letter]" at the end (e.g., "Correct Answer: B")
3. Use proper spacing and line breaks as shown above
4. Make options clear, distinct, and realistic
5. Questions should test ${input.language} knowledge comprehensively
6. Ensure one and only one correct answer
7. Make distractors plausible but clearly wrong`
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
   - **Progress from simple to complex**: Start with fundamentals, gradually increase difficulty
   - **Cover diverse topics**: Ensure comprehensive coverage of all ${input.language} topics (basics, intermediate, advanced)
   - **Topic variety**: If previous questions focused on one area, explore a different topic
   - **Question progression**: Consider how many questions have been asked and adjust complexity accordingly
   - If it involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, show expected output as comment or ask about it
   - Format with output: \`\`\`${input.language}\\nconst x = 5;\\nconsole.log(x);\\n// Output: ?\\n\`\`\`
5. Provide a brief, spoken-friendly simple answer to the ORIGINAL question:
   - This will be read aloud in voice mode (2-3 sentences max)
   - Make it conversational and easy to understand when spoken
   - Focus on core concept without code examples

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview.
   - **CRITICAL: RANDOMIZE starting topics** - Pick from: variables, data types, operators, functions, loops, conditionals, scope, closures, arrays, objects, strings, etc.
   - **DO NOT always ask the same first question** - Each interview should start differently
   - **Start SIMPLE**: First question should be fundamental but accessible
   - **Topic diversity**: Choose a topic that will allow for good progression in subsequent questions
   - **Coverage strategy**: Consider all major areas of ${input.language} for comprehensive assessment
2. Leave feedback, idealAnswer, and simpleAnswer as empty strings.
`}

Respond with JSON: {feedback: string, idealAnswer: string with code examples, nextQuestion: string, answerHint: string - brief approach tips, simpleAnswer: string - brief spoken answer to ORIGINAL question}`;

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
      nextQuestion: result.nextQuestion,
      answerHint: result.answerHint || 'Focus on key concepts and explain with a simple example.',
      simpleAnswer: result.simpleAnswer || ''
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
  providerName: string,
  useJsonMode: boolean = true
): Promise<ConductInterviewOutput> {
  try {
    console.log(`[${providerName}] Starting interview request`);
    console.log(`[${providerName}] API URL: ${apiUrl}`);
    console.log(`[${providerName}] Model: ${model}`);
    console.log(`[${providerName}] JSON Mode: ${useJsonMode}`);
    
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
      ? `Focus on MCQ (Multiple Choice Questions) only. STRICTLY follow this EXACT format:

[Clear question text]

A) [Option 1]
B) [Option 2]
C) [Option 3]
D) [Option 4]

Correct Answer: [Letter]

CRITICAL REQUIREMENTS:
1. MUST include exactly 4 options labeled A), B), C), D)
2. MUST include "Correct Answer: [Letter]" at the end (e.g., "Correct Answer: B")
3. Use proper spacing and line breaks as shown above
4. Make options clear, distinct, and realistic
5. Questions should test ${input.language} knowledge comprehensively
6. Ensure one and only one correct answer
7. Make distractors plausible but clearly wrong`
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
   - **Progress from simple to complex**: Start with fundamentals, gradually increase difficulty
   - **Cover diverse topics**: Ensure comprehensive coverage of all ${input.language} topics (basics, intermediate, advanced)
   - **Topic variety**: If previous questions focused on one area, explore a different topic
   - **Question progression**: Consider how many questions have been asked and adjust complexity accordingly
   - If it involves code, include a code snippet using markdown \`\`\`${input.language} blocks
   - If the code produces output, show expected output as comment or ask about it
   - Examples: "What does this code output?", "Fix this bug", "Predict the output"
   - Format with output: \`\`\`${input.language}\\nconst x = 5;\\nconsole.log(x);\\n// Output: ?\\n\`\`\`
5. Provide a brief, spoken-friendly simple answer to the ORIGINAL question:
   - This will be read aloud in voice mode (2-3 sentences max)
   - Make it conversational and easy to understand when spoken
   - Focus on core concept without code examples

Context:
- Original Question: ${input.question}
- User's Answer: ${input.userAnswer}
- Questions Asked: ${input.previousQuestions.join(', ')}
` : `
Your Task:
1. Generate the first interview question for a ${input.language} mock interview.
   - **CRITICAL: RANDOMIZE starting topics** - Pick from: variables, data types, operators, functions, loops, conditionals, scope, closures, arrays, objects, strings, etc.
   - **DO NOT always ask the same first question** - Each interview should start differently
   - **Start SIMPLE**: First question should be fundamental but accessible
   - **Topic diversity**: Choose a topic that will allow for good progression in subsequent questions
   - **Coverage strategy**: Consider all major areas of ${input.language} for comprehensive assessment
2. Leave feedback, idealAnswer, and simpleAnswer empty.
`}

Respond in JSON format: {"feedback": "string", "idealAnswer": "string with code examples in markdown", "nextQuestion": "string", "answerHint": "string - 2-3 brief approach suggestions", "simpleAnswer": "string - brief spoken answer to ORIGINAL question"}`;

    const requestBody: any = {
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: 'Generate the interview response.' }
      ],
      temperature: 0.7,
    };
    
    // Only add response_format if provider supports it
    if (useJsonMode) {
      requestBody.response_format = { type: 'json_object' };
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error?.message || errorData.message || `HTTP ${response.status}: ${response.statusText}`;
      console.error(`${providerName} API Error:`, errorData);
      throw new Error(`${providerName} API Error: ${errorMessage}`);
    }

    const data = await response.json();
    console.log(`[${providerName}] Response received:`, data);
    
    // Validate response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error(`[${providerName}] Unexpected response structure:`, data);
      throw new Error(`${providerName} returned unexpected response format`);
    }

    let content = data.choices[0].message.content;
    console.log(`[${providerName}] Content received:`, content.substring(0, 200) + '...');
    
    // Try to extract JSON from the content (handles cases where AI wraps JSON in text/markdown)
    let result;
    try {
      // First, try parsing as-is
      result = JSON.parse(content);
      console.log(`[${providerName}] Successfully parsed JSON directly`);
    } catch (e) {
      console.log(`[${providerName}] Direct JSON parse failed, trying to extract...`);
      // If that fails, try to extract JSON from markdown code blocks or text
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          result = JSON.parse(jsonMatch[0]);
          console.log(`[${providerName}] Successfully extracted and parsed JSON`);
        } catch (parseError) {
          console.error(`[${providerName}] Failed to parse extracted JSON:`, parseError);
          console.error(`[${providerName}] Extracted content:`, jsonMatch[0]);
          throw new Error(`${providerName} returned invalid JSON: ${parseError}`);
        }
      } else {
        console.error(`[${providerName}] No JSON found in content:`, content);
        throw new Error(`${providerName} did not return valid JSON format. Response: ${content.substring(0, 100)}`);
      }
    }

    const normalizedResult = {
      feedback: result.feedback ?? result.suggestion ?? result.feedbackText ?? '',
      idealAnswer: result.idealAnswer ?? result.ideal_answer ?? result.ideal ?? '',
      nextQuestion:
        result.nextQuestion ??
        result.next_question ??
        result.nextquestion ??
        result.next ??
        result.question ??
        '',
      answerHint:
        result.answerHint ??
        result.answer_hint ??
        result.hint ??
        'Focus on key concepts and explain with a simple example.',
      simpleAnswer: result.simpleAnswer ?? result.simple_answer ?? result.simple ?? ''
    };

    // Validate required fields
    if (!normalizedResult.nextQuestion) {
      console.error(`[${providerName}] Missing nextQuestion in result:`, result);
      throw new Error(`${providerName} returned incomplete data - missing nextQuestion`);
    }

    console.log(`[${providerName}] Successfully returning interview data`);
    return normalizedResult;
  } catch (error: any) {
    console.error(`${providerName} interview error:`, error);
    // Provide more detailed error message
    if (error.message.includes('API Error')) {
      throw error; // Re-throw API errors with their detailed message
    }
    throw new Error(`${providerName} Error: ${error.message || 'Unknown error occurred'}`);
  }
}

// Hugging Face (FREE forever!)
async function conductHuggingFaceInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://api-inference.huggingface.co/v1/chat/completions',
    'meta-llama/Meta-Llama-3-8B-Instruct',
    'HuggingFace',
    false // HuggingFace doesn't support response_format json_object yet
  );
}

// Together AI ($25 FREE credit!)
async function conductTogetherInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://api.together.xyz/v1/chat/completions',
    'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
    'Together',
    true // Together supports JSON mode
  );
}

// DeepSeek (FREE tier!)
async function conductDeepSeekInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://api.deepseek.com/v1/chat/completions',
    'deepseek-chat',
    'DeepSeek',
    true // DeepSeek supports JSON mode
  );
}

// Meta AI (FREE - Llama models!)
async function conductMetaInterview(
  apiKey: string,
  input: Omit<ConductInterviewInput, 'apiKey' | 'provider'>
): Promise<ConductInterviewOutput> {
  return await conductOpenAICompatibleInterview(
    apiKey,
    input,
    'https://www.llama-api.com/chat/completions',
    'llama3.1-70b',
    'Meta',
    true // Meta/Llama API supports JSON mode
  );
}
