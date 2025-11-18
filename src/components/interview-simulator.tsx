
'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mic, Sparkles, User, BrainCircuit, Volume2 } from 'lucide-react';
import { conductInterview } from '@/ai/flows/interview-flow';
import { textToSpeech } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';
import { marked } from 'marked';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

interface InterviewSimulatorProps {
  language: string;
  children?: React.ReactNode;
}

const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

export function InterviewSimulator({ language, children }: InterviewSimulatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [idealAnswer, setIdealAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const { toast } = useToast();

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any | null>(null);
  
  const [isReading, setIsReading] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!SpeechRecognition) {
        // We don't want to toast every time the component loads.
        // It's better to inform the user only when they try to use the feature.
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' ';
        }
      }
      if (finalTranscript) {
         setUserAnswer(prevAnswer => prevAnswer + finalTranscript);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);
  
  const handleMicClick = () => {
    if (!SpeechRecognition) {
      toast({
        variant: 'destructive',
        title: 'Browser Not Supported',
        description: 'Speech recognition is not supported by your browser. Please use Chrome or Edge.',
      });
      return;
    }
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
    setIsListening(!isListening);
  };
  
  const handleReadAloud = async (text: string, id: string) => {
    if (isReading === id) {
      audioRef.current?.pause();
      setIsReading(null);
      return;
    }

    setIsReading(id);
    try {
      const response = await textToSpeech(text);
      if (response.media) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        const audio = new Audio(response.media);
        audioRef.current = audio;
        audio.play();
        audio.onended = () => setIsReading(null);
      } else {
        throw new Error('No audio data received.');
      }
    } catch (error) {
      console.error('Text-to-speech error:', error);
      toast({
        variant: 'destructive',
        title: 'Audio Failed',
        description: 'Could not generate audio for the text.',
      });
      setIsReading(null);
    }
  };

  const startNewSession = async () => {
    setIsLoading(true);
    setIsSessionStarted(true);
    setFeedback(null);
    setIdealAnswer(null);
    setUserAnswer('');
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsReading(null);

    try {
      const result = await conductInterview({
        language,
        question: 'Initial question', // This is just to kick off the flow
        userAnswer: '',
        previousQuestions: [],
      });
      setQuestion(result.nextQuestion);
      setPreviousQuestions([result.nextQuestion]);
    } catch (error) {
      console.error('Interview start error:', error);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Could not start the interview session. Please try again.',
      });
      setIsSessionStarted(false); // Reset on error
    } finally {
      setIsLoading(false);
    }
  };

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
      const result = await conductInterview({
        language,
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
      setUserAnswer('');
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || <Button>Start Interview</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI Interview Simulator: {language}</DialogTitle>
          <DialogDescription>
            Practice for your next technical interview. Answer the question and get instant feedback.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto space-y-6 pr-4">
          {!isSessionStarted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <BrainCircuit className="w-20 h-20 text-primary mb-4"/>
                <h2 className="text-2xl font-semibold mb-2">Ready to practice for your {language} interview?</h2>
                <p className="text-muted-foreground mb-6">Click the button below to get your first question.</p>
                <Button onClick={startNewSession} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Start Session"}
                </Button>
            </div>
          ) : isLoading && !feedback ? (
             <div className="space-y-6">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-40 w-full" />
             </div>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="w-6 h-6 text-primary" />
                      Interviewer's Question
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleReadAloud(question, 'question')} disabled={isReading !== null && isReading !== 'question'}>
                      <Volume2 className={cn("w-5 h-5", isReading === 'question' && 'text-primary animate-pulse')} />
                      <span className="sr-only">Read question</span>
                    </Button>
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
                  <CardContent className="relative">
                    <Textarea
                      placeholder="Type your answer here, or use the microphone to speak."
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      rows={6}
                      disabled={isLoading}
                    />
                    {SpeechRecognition && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={handleMicClick}
                        className={cn(
                          "absolute bottom-6 right-6",
                          isListening && "bg-destructive text-destructive-foreground animate-pulse"
                        )}
                      >
                        <Mic className="w-5 h-5" />
                        <span className="sr-only">Record answer</span>
                      </Button>
                    )}
                  </CardContent>
                   <DialogFooter className="p-6 pt-0">
                      <Button type="submit" disabled={isLoading || !userAnswer.trim()}>
                        {isLoading ? ( <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Evaluating... </> ) : ( 'Submit Answer' )}
                      </Button>
                  </DialogFooter>
                </Card>
              </form>

              {isLoading && (
                <Card><CardContent className="p-6 space-y-2"><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-5/6" /></CardContent></Card>
              )}

              {feedback && idealAnswer && (
                <div className="space-y-6">
                  <Card className="border-primary bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-primary">
                        <div className="flex items-center gap-2"><Sparkles className="w-5 h-5" /> AI Feedback</div>
                         <Button variant="ghost" size="icon" onClick={() => handleReadAloud(feedback, 'feedback')} disabled={isReading !== null && isReading !== 'feedback'}>
                            <Volume2 className={cn("w-5 h-5", isReading === 'feedback' && 'text-primary animate-pulse')} />
                            <span className="sr-only">Read feedback</span>
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent><div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: feedback }} /></CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle>Ideal Answer</CardTitle></CardHeader>
                    <CardContent><div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: idealAnswer }} /></CardContent>
                  </Card>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
