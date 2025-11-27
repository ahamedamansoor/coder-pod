
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Mic, MicOff, Volume2, Loader2, Sparkles, Wand2, Send, CornerDownLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { interviewAi } from '@/ai/flows/interview-flow';
import { useUser } from '@/firebase';
import { languages } from '@/app/data';
import { ScrollArea } from '@/components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';
import GeminiKeyModal from '../dashboard/GeminiKeyModal'; // Import the modal

interface InterviewSimulatorProps {
  languageSlug: string;
}

const InterviewSimulator: React.FC<InterviewSimulatorProps> = ({ languageSlug }) => {
  const { user } = useUser();
  const { toast } = useToast();
  
  // AI Feature availability
  const [isAiEnabled, setIsAiEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for the interview flow
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [idealAnswer, setIdealAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isReading, setIsReading] = useState<string | null>(null);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);

  const recognitionRef = useRef<any>(null);

  // Get language name from slug
  const language = languages.find(lang => lang.slug === languageSlug);
  const languageName = language?.name || 'the selected language';

  useEffect(() => {
    // Check for API key on mount
    const key = localStorage.getItem('gemini_api_key');
    if (key) {
      setIsAiEnabled(true);
    } else {
      setIsAiEnabled(false);
    }
  }, []);

  const handleSaveKey = async (key: string) => {
    // A real app would have a backend to validate the key.
    // For this demo, we'll assume any non-empty key is valid.
    if (key.trim()) {
      localStorage.setItem('gemini_api_key', key);
      setIsAiEnabled(true);
      toast({
        title: 'AI Features Unlocked!',
        description: 'You can now use the AI Interview Simulator.',
        className: 'bg-green-500 text-white',
      });
      return true;
    }
    return false;
  };

  const startInitialQuestion = useCallback(async () => {
    if (!user || !isAiEnabled) return;
    setIsLoading(true);
    try {
      const apiKey = localStorage.getItem('gemini_api_key');
      if (!apiKey) throw new Error('API key not found');
      
      const result = await interviewAi(apiKey, languageName, user.displayName || 'the user', 'start', '', []);
      setQuestion(result.nextQuestion);
      setPreviousQuestions([result.nextQuestion]);
    } catch (error) {
      console.error('Failed to start interview:', error);
      toast({
        variant: 'destructive',
        title: 'Failed to Start Interview',
        description: 'Could not fetch the first question. Please ensure your API key is valid.',
      });
      // If it fails, maybe the key is bad
      setIsAiEnabled(false); 
    } finally {
      setIsLoading(false);
    }
  }, [user, languageName, toast, isAiEnabled]);

  // Start the interview once AI is enabled
  useEffect(() => {
    if (isAiEnabled && !question && !isLoading) {
      startInitialQuestion();
    }
  }, [isAiEnabled, question, isLoading, startInitialQuestion]);

  
  // --- Voice Recognition Logic ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.interimResults = true;
    
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
        } else {
            console.warn("Speech Recognition not supported in this browser.");
        }
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // --- Text-to-Speech Logic ---
  const handleReadAloud = (text: string, type: string) => {
    if (isReading === type) {
      window.speechSynthesis.cancel();
      setIsReading(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsReading(null);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsReading(type);
  };

  // --- Form Submission Logic ---
  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim() || !isAiEnabled) return;

    setIsLoading(true);
    setFeedback('');
    setIdealAnswer('');
    
    try {
      const apiKey = localStorage.getItem('gemini_api_key');
      if (!apiKey) throw new Error('API key not found');
      
      const result = await interviewAi(apiKey, languageName, user?.displayName || 'the user', 'answer', userAnswer, previousQuestions);
      
      const feedbackRegex = /Feedback:(.*?)Ideal Answer:/s;
      const idealAnswerRegex = /Ideal Answer:(.*)/s;
      
      const parsedFeedback = result.feedback.match(feedbackRegex)?.[1] || result.feedback;
      const parsedIdealAnswer = result.feedback.match(idealAnswerRegex)?.[1] || '';
      
      setFeedback(parsedFeedback.trim());
      setIdealAnswer(parsedIdealAnswer.trim());
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
  
  // --- Main Render Logic ---
  if (!isAiEnabled) {
    return (
      <>
        <Card className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center">
          <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm z-10" />
          <div className="relative z-20">
            <Sparkles className="mx-auto h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">AI Feature Locked</h3>
            <p className="text-muted-foreground mb-6">
              Please provide your Gemini API key to use the AI Interview Simulator.
            </p>
            <Button onClick={() => setIsModalOpen(true)}>
              Enter API Key
            </Button>
          </div>
        </Card>
        <GeminiKeyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveKey}
        />
      </>
    );
  }

  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Panel: Interview Questions & Answers */}
      <div className="flex-1 h-full">
        <form onSubmit={handleSubmitAnswer} className="h-full flex flex-col gap-4">
            {question && (
              <Card className='flex-shrink-0'>
                <CardHeader className="flex flex-row items-start justify-between">
                  <CardTitle className="text-xl font-bold flex-1">
                    Current Question
                  </CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => handleReadAloud(question, 'question')} disabled={isReading !== null && isReading !== 'question'}>
                      <Volume2 className={cn("w-5 h-5", isReading === 'question' && 'text-primary animate-pulse')} />
                      <span className="sr-only">Read question</span>
                    </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">{question}</p>
                </CardContent>
              </Card>
            )}
            
            <Card className="flex-1 h-full flex flex-col">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Your Answer</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                    <Textarea
                        value={userAnswer}
                        onChange={e => setUserAnswer(e.target.value)}
                        placeholder="Type your answer here or use the microphone..."
                        className="flex-1 text-base resize-none"
                        disabled={isLoading}
                    />
                    <div className="flex items-center justify-between">
                        <Button type="button" variant="outline" onClick={toggleListening} disabled={!recognitionRef.current || isLoading} size="icon">
                            {isListening ? <MicOff className="w-5 h-5 text-red-500" /> : <Mic className="w-5 h-5" />}
                            <span className="sr-only">{isListening ? 'Stop listening' : 'Start listening'}</span>
                        </Button>
                        <Button type="submit" disabled={isLoading || !userAnswer.trim()}>
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                            ) : (
                                <><Send className="mr-2 h-4 w-4"/> Submit Answer</>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
      </div>

      {/* Right Panel: Feedback & Ideal Answer */}
      <div className="flex-1 h-full">
        <Card className="h-full w-full flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                    <Wand2 className="mr-2 text-primary"/> AI Assistant Feedback
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 h-full">
                <ScrollArea className="h-full w-full">
                  {isLoading && !feedback && (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-8 w-8 text-primary animate-spin" />
                      <p className='text-muted-foreground ml-4'>Analyzing your answer...</p>
                    </div>
                  )}
                  {!isLoading && !feedback && (
                    <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
                      <Wand2 className='w-10 h-10 mb-4'/>
                      <p>Your feedback will appear here after you submit an answer.</p>
                    </div>
                  )}
                  {feedback && (
                      <div className="space-y-6">
                        <div>
                          <h3 className='font-bold text-lg mb-2 flex items-center'>Feedback on Your Answer</h3>
                          <ReactMarkdown className="prose dark:prose-invert max-w-none">{feedback}</ReactMarkdown>
                        </div>
                        <div>
                          <h3 className='font-bold text-lg mb-2 flex items-center'>Ideal Answer</h3>
                          <ReactMarkdown className="prose dark:prose-invert max-w-none">{idealAnswer}</ReactMarkdown>
                        </div>
                      </div>
                  )}
                </ScrollArea>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterviewSimulator;
