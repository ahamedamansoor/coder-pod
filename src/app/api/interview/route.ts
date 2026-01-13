import { NextRequest, NextResponse } from 'next/server';
import { conductInterview } from '@/ai/flows/interview-flow';
import { ConductInterviewInput } from '@/ai/flows/interview-flow';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the input
    const interviewInput: ConductInterviewInput = {
      provider: body.provider,
      apiKey: body.apiKey,
      language: body.language,
      question: body.question || '',
      userAnswer: body.userAnswer || '',
      previousQuestions: body.previousQuestions || [],
      questionType: body.questionType || 'theory',
      category: body.category || 'technical',
    };

    // Call the interview function
    const result = await conductInterview(interviewInput);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Interview API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: errorMessage,
        message: 'Failed to conduct interview'
      },
      { status: 500 }
    );
  }
}
