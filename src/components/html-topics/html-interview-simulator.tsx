
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mic, Sparkles, User, BrainCircuit } from 'lucide-react';
import { conductHtmlInterview } from '@/ai/flows/html-interview-flow';
import { useToast } from '@/hooks/use-toast';
import { marked } from 'marked';
import { Skeleton } from '../ui/skeleton';

const initialQuestion = "What is the difference between `<div>` and `<span>`?";

export default function HtmlInterviewSimulator() {
  const [question, setQuestion] = useState(initialQuestion);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [idealAnswer, setIdealAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([initialQuestion]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) {
      toast({
        variant: 'destructive',
        title: 'Answer Required',
        description: 'Please provide an answer before submitting.',
      });
      return;
    }
    setIsLoading(true);
    setFeedback(null);
    setIdealAnswer(null);

    try {
      const result = await conductHtmlInterview({
        question,
        userAnswer,
        previousQuestions,
      });

      const parsedFeedback = await marked(result.feedback);
      const parsedIdealAnswer = await marked(result.idealAnswer);

      setFeedback(parsedFeedback);
      setIdealAnswer(parsedIdealAnswer);
      setQuestion(result.nextQuestion);
      setPreviousQuestions(prev => [...prev, result.nextQuestion]);
      setUserAnswer(''); // Clear input for next question
    } catch (error) {
      console.error('Interview AI error:', error);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Could not get feedback from the AI. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startNewSession = () => {
    setQuestion(initialQuestion);
    setUserAnswer('');
    setFeedback(null);
    setIdealAnswer(null);
    setPreviousQuestions([initialQuestion]);
    toast({
      title: 'New Session Started',
      description: 'The interview simulator has been reset.',
    });
  }

  return (
    <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Mic className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">AI Interview Simulator</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Practice for your next technical interview. Answer the question below and get instant feedback from our AI interviewer.</p>
        </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-primary" />
            Interviewer's Question
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold text-foreground">{question}</p>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-6 h-6 text-foreground" />
              Your Answer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Type your answer here..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              rows={8}
              disabled={isLoading}
            />
          </CardContent>
          <CardContent className="flex justify-between items-center">
            <Button type="submit" disabled={isLoading || !userAnswer.trim()}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Evaluating...
                </>
              ) : (
                'Submit Answer'
              )}
            </Button>
            <Button type="button" variant="outline" onClick={startNewSession} disabled={isLoading}>
              Start New Session
            </Button>
          </CardContent>
        </Card>
      </form>

      {isLoading && (
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
            </CardContent>
        </Card>
      )}

      {feedback && idealAnswer && (
        <div className="space-y-6">
          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                AI Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: feedback }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ideal Answer</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: idealAnswer }}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
