
'use client';
import React from 'react';
import { Mic } from 'lucide-react';
import { InterviewSimulator } from '../interview-simulator';

export default function HtmlInterviewSimulator() {
  return (
    <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Mic className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">AI Interview Simulator</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Practice for your next technical interview. Click the button below to start your mock HTML interview.</p>
        </div>

      <div className="text-center">
        <InterviewSimulator language="HTML">
          <p>Click the button to start the interview.</p>
        </InterviewSimulator>
      </div>
    </div>
  );
}
