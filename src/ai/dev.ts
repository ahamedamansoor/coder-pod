
'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/answer-question.ts';
import '@/ai/flows/execute-java-code.ts';
import '@/ai/flows/execute-javascript-code.ts';
import '@/ai/flows/compile-scss-code.ts';
import '@/ai/flows/interview-flow.ts';
import '@/ai/flows/text-to-speech-flow.ts';
import '@/ai/flows/transpile-react-code.ts';
import '@/ai/flows/simplify-topic-explanations.ts';
