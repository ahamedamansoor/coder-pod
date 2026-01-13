import { ConductInterviewOutput } from '@/ai/flows/interview-flow';
import { AIProvider } from '@/types/ai-providers';

export interface InterviewRequest {
  provider: AIProvider;
  apiKey: string;
  language: string;
  question?: string;
  userAnswer?: string;
  previousQuestions?: string[];
  questionType?: 'theory' | 'coding' | 'mcq';
  category?: 'technical' | 'behavioral' | 'aptitude';
}

export async function conductInterviewClient(request: InterviewRequest): Promise<ConductInterviewOutput> {
  const response = await fetch('/api/interview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
