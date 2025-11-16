'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/simplify-topic-explanations.ts';
import '@/ai/flows/answer-question.ts';
import '@/ai/flows/execute-java-code.ts';
