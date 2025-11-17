'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/answer-question.ts';
import '@/ai/flows/execute-java-code.ts';
import '@/ai/flows/execute-javascript-code.ts';
import '@/ai/flows/compile-scss-code.ts';
