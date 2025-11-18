
'use client';
import React, { useState, useEffect } from 'react';
import { Mic, Pause, Play, BrainCircuit, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

export const AiInterviewDemo = ({ autoPlay = false }: { autoPlay?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepState, setStepState] = useState({
    showQuestion: false,
    showAnswer: false,
    showFeedback: false,
    showIdealAnswer: false,
  });

  const steps = [
    { action: 'start', duration: 500 },
    { action: 'showQuestion', duration: 2000 },
    { action: 'showAnswer', duration: 3000 },
    { action: 'showFeedback', duration: 4000 },
    { action: 'showIdealAnswer', duration: 4000 },
    { action: 'reset', duration: 3000 },
  ];

  useEffect(() => {
    if (autoPlay && !isPlaying) {
      handlePlayPause();
    }
  }, [autoPlay]);

  useEffect(() => {
    if (isPlaying && currentStep < steps.length) {
      const step = steps[currentStep];
      const timer = setTimeout(() => {
        executeStep(step.action);
        setCurrentStep(currentStep + 1);
      }, step.duration);

      return () => clearTimeout(timer);
    } else if (currentStep >= steps.length && isPlaying) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep]);

  const executeStep = (action: string) => {
    if (action === 'showQuestion') {
        setStepState({ showQuestion: true, showAnswer: false, showFeedback: false, showIdealAnswer: false });
    } else if (action === 'showAnswer') {
        setStepState(s => ({...s, showAnswer: true}));
    } else if (action === 'showFeedback') {
        setStepState(s => ({...s, showFeedback: true}));
    } else if (action === 'showIdealAnswer') {
        setStepState(s => ({...s, showIdealAnswer: true}));
    } else if (action === 'reset') {
        resetDemo(false); // Set keepPlaying to false to pause after reset
    }
  };

  const resetDemo = (keepPlaying = false) => {
    setCurrentStep(0);
    setStepState({ showQuestion: true, showAnswer: false, showFeedback: false, showIdealAnswer: false });
    setIsPlaying(keepPlaying);
  };
  
  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      // If the demo is at the end, reset it before playing again
      if (currentStep >= steps.length - 1) {
        resetDemo(true);
      } else {
        setIsPlaying(true);
      }
    }
  };

  const renderContent = (isVisible: boolean, content: React.ReactNode, skeleton: React.ReactNode) => {
      return (
          <div className={cn('transition-opacity duration-700', isVisible ? 'opacity-100' : 'opacity-0')}>
              {isVisible ? content : skeleton}
          </div>
      );
  }

  return (
    <div className="w-full bg-card p-4 sm:p-6 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-background rounded-xl shadow-inner p-4 border overflow-hidden aspect-video">
          <div className="space-y-4">
              {renderContent(
                  stepState.showQuestion,
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-primary">
                              <BrainCircuit className="w-5 h-5"/> Interviewer's Question
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="font-semibold">"What is the difference between `==` and `.equals()` when comparing objects in Java?"</p>
                      </CardContent>
                  </Card>,
                  <Skeleton className="h-28 w-full" />
              )}
              
               {renderContent(
                  stepState.showAnswer,
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                              <User className="w-5 h-5"/> Your Answer
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground italic">"`==` checks if two references point to the same object in memory, while `.equals()` is meant to check if two objects are logically equal based on their content."</p>
                      </CardContent>
                  </Card>,
                   <Skeleton className="h-28 w-full" />
              )}

              {renderContent(
                  stepState.showFeedback,
                  <Card className="border-primary/50 bg-primary/5">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-primary">
                              <Sparkles className="w-5 h-5"/> AI Feedback
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-sm">"Excellent start! You've correctly identified the core difference. A great follow-up would be to mention that you must override the `.equals()` method in your own classes to define what 'logically equal' means for them."</p>
                      </CardContent>
                  </Card>,
                   <Skeleton className="h-28 w-full" />
              )}
          </div>
        </div>
         <div className="mt-4 flex items-center justify-center gap-4">
            <Button
              onClick={handlePlayPause}
              className="px-6 py-3 rounded-full font-bold text-base flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" /> {currentStep > 0 && currentStep < steps.length -1 ? 'Resume' : 'Play'}
                </>
              )}
            </Button>
          </div>
      </div>
    </div>
  );
};
