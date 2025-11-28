
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Mic, MicOff, Volume2, Loader2, Sparkles, Wand2, Send, CornerDownLeft, MessageSquare, Phone, PhoneOff, StopCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { conductInterview } from '@/ai/flows/interview-flow';
import { validateApiKey } from '@/ai/flows/validate-api-key';
import { useUser } from '@/firebase';
import { languages } from '@/app/data';
import { ScrollArea } from '@/components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';
import AIProviderModal from '../dashboard/GeminiKeyModal'; // Import the modal
import { AIProvider } from '@/types/ai-providers';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface InterviewSimulatorProps {
  language: string; // Language name (e.g., "JavaScript")
  children?: React.ReactNode; // Optional trigger button
}

const InterviewSimulator: React.FC<InterviewSimulatorProps> = ({ language: languageName, children }) => {
  const { user } = useUser();
  const { toast } = useToast();
  
  // AI Feature availability
  const [isAiEnabled, setIsAiEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiProvider, setAiProvider] = useState<AIProvider>('gemini');

  // State for the interview flow
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [idealAnswer, setIdealAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isReading, setIsReading] = useState<string | null>(null);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  
  // Interview mode: 'typing' or 'voice'
  const [interviewMode, setInterviewMode] = useState<'typing' | 'voice'>('typing');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showNextButton, setShowNextButton] = useState(false);
  
  // Interview configuration
  const [selectedLanguage, setSelectedLanguage] = useState(languageName);
  const [questionType, setQuestionType] = useState<'theory' | 'coding' | 'mcq'>('theory');
  const [isConfigured, setIsConfigured] = useState(false);
  
  // MCQ state
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  
  // Question bank for batch fetching (MCQ optimization)
  const [questionBank, setQuestionBank] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const recognitionRef = useRef<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Auto-switch to typing mode when coding or MCQ questions are selected
  useEffect(() => {
    if ((questionType === 'coding' || questionType === 'mcq') && interviewMode === 'voice') {
      setInterviewMode('typing');
    }
  }, [questionType, interviewMode]);

  useEffect(() => {
    // Check for API key on mount (silently, no errors)
    const key = localStorage.getItem('ai_api_key');
    const provider = localStorage.getItem('ai_provider') as AIProvider;
    if (key && provider) {
      setIsAiEnabled(true);
      setAiProvider(provider);
    }

    // Ensure voices are loaded for text-to-speech
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      // Load voices (sometimes they load asynchronously)
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const handleSaveKey = async (provider: AIProvider, key: string) => {
    if (!key || key.trim().length === 0) {
      return false;
    }

    try {
      // Validate the API key with the selected provider
      const validation = await validateApiKey(provider, key.trim());
      
      if (validation.valid) {
        // Key is valid, save it and enable AI
        localStorage.setItem('ai_api_key', key.trim());
        localStorage.setItem('ai_provider', provider);
        setAiProvider(provider);
        setIsAiEnabled(true);
        toast({
          title: 'AI Features Unlocked!',
          description: 'Your API key has been validated and AI features are now enabled.',
        });
        return true;
      } else {
        // Key is invalid, show error
        toast({
          variant: 'destructive',
          title: 'Invalid API Key',
          description: validation.error || 'Please check your API key and try again.',
        });
        return false;
      }
    } catch (error) {
      console.error('Error validating API key:', error);
      toast({
        variant: 'destructive',
        title: 'Validation Failed',
        description: 'Could not validate your API key. Please try again.',
      });
      return false;
    }
  };

  // Reset interview state
  const resetInterview = useCallback(() => {
    setQuestion('');
    setUserAnswer('');
    setFeedback('');
    setIdealAnswer('');
    setPreviousQuestions([]);
    setIsConfigured(false);
    setShowNextButton(false);
    setIsRecording(false);
    setTranscript('');
    setInterviewMode('typing');
    setSelectedOption('');
    setIsAnswerCorrect(null);
    setQuestionBank([]);
    setCurrentQuestionIndex(0);
    window.speechSynthesis.cancel();
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
    }
  }, [isRecording]);

  // Handle dialog close
  const handleDialogClose = useCallback((open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetInterview();
    }
  }, [resetInterview]);

  const startInitialQuestion = useCallback(async () => {
    if (!user || !isAiEnabled) {
      toast({
        variant: 'destructive',
        title: 'AI Provider Not Connected',
        description: 'Please set up your AI provider API key before starting the interview.',
      });
      setIsModalOpen(true);
      return;
    }
    setIsLoading(true);
    try {
      const apiKey = localStorage.getItem('ai_api_key');
      const provider = localStorage.getItem('ai_provider') as AIProvider;
      if (!apiKey || !provider) {
        toast({
          variant: 'destructive',
          title: 'AI Provider Not Connected',
          description: 'Please set up your AI provider API key before starting the interview.',
        });
        setIsModalOpen(true);
        throw new Error('API configuration not found');
      }
      
      // For MCQ mode, fetch multiple questions at once (10 at a time for efficiency)
      if (questionType === 'mcq') {
        const batchSize = 10;
        const questions: string[] = [];
        let previousQs: string[] = [];
        
        for (let i = 0; i < batchSize; i++) {
          const result = await conductInterview({
            provider,
            apiKey,
            language: selectedLanguage,
            question: '',
            previousQuestions: previousQs,
            questionType
          });
          questions.push(result.nextQuestion);
          previousQs.push(result.nextQuestion);
        }
        
        setQuestionBank(questions);
        setQuestion(questions[0]);
        setPreviousQuestions([questions[0]]);
        setCurrentQuestionIndex(0);
        setIsConfigured(true);
      } else {
        // For other modes, fetch one question at a time
        const result = await conductInterview({
          provider,
          apiKey,
          language: selectedLanguage,
          question: '',
          previousQuestions: [],
          questionType
        });
        setQuestion(result.nextQuestion);
        setPreviousQuestions([result.nextQuestion]);
        setIsConfigured(true);
      }
    } catch (error) {
      console.error('Failed to start interview:', error);
      toast({
        variant: 'destructive',
        title: 'Failed to Start Interview',
        description: error instanceof Error ? error.message : 'Could not fetch the first question. Please ensure your API key is valid.',
      });
      // If it fails, maybe the key is bad
      setIsAiEnabled(false); 
    } finally {
      setIsLoading(false);
    }
  }, [user, selectedLanguage, questionType, toast, isAiEnabled]);

  // Don't auto-start interview - user should manually start it
  // Removed auto-start to prevent errors on dashboard
  
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

  // Read feedback aloud in voice mode (faster speed)
  const readFeedbackAloud = useCallback((feedbackText: string) => {
    if (!feedbackText || interviewMode !== 'voice') return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Create utterance with feedback and prompt to check ideal answer
    const fullText = `${feedbackText}. Please check the ideal answer on the right panel for reference.`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    
    // Faster reading for feedback
    utterance.rate = 1.2; // Fast but understandable
    utterance.pitch = 0.9;
    utterance.volume = 1.0;
    
    // Use same male voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = 
      voices.find(voice => voice.name.includes('Google US English Male')) ||
      voices.find(voice => voice.name.includes('Google UK English Male')) ||
      voices.find(voice => voice.name.includes('Daniel')) ||
      voices.find(voice => voice.name.includes('Alex')) ||
      voices.find(voice => voice.name.includes('Male') && voice.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  }, [interviewMode]);

  // --- Voice Mode Conversation Logic ---
  const startVoiceConversation = useCallback(() => {
    if (!question) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Add natural conversational intro for first question
    const isFirstQuestion = previousQuestions.length <= 1;
    let questionText = question;
    
    if (isFirstQuestion) {
      const intros = [
        'Alright, let\'s begin the interview. ',
        'Great! Let\'s get started. ',
        'Okay, let\'s start with your first question. ',
        'Welcome! Let\'s begin. ',
        'Perfect! Let\'s dive in. ',
        'Wonderful! Let\'s kick things off. ',
        'Excellent! Let\'s start. ',
        'Okay then, here we go. ',
      ];
      const randomIntro = intros[Math.floor(Math.random() * intros.length)];
      questionText = `${randomIntro}${question}`;
    } else {
      // Add natural transitions between questions
      const transitions = [
        'Good. Now, here\'s the next question. ',
        'Okay. Moving on. ',
        'Alright. Next question. ',
        'Great. Let me ask you this. ',
        'Nice. Here\'s another one. ',
        'Interesting. Now, ',
        'I see. Let\'s continue. ',
        'Fair enough. Next question. ',
        'Hmm, okay. Here\'s the next one. ',
        'Got it. Moving forward. ',
        'Right. So, ',
        'Well, let\'s see. ',
        'Excellent. Now, ',
        'Perfect. Here\'s what I want to know. ',
        'Understood. Let me ask you. ',
        'Makes sense. Let\'s move on. ',
        'Okay then. Next up. ',
        'Cool. Here\'s another. ',
        'Alright then. Moving forward. ',
        'Sure. Let me ask you about this. ',
        'Yeah. So here\'s my next question. ',
        'Sounds good. Now, ',
        'Fantastic. Let\'s continue. ',
        'Very well. Next question. ',
        'Indeed. Let me ask you. ',
        'Absolutely. Now, ',
        'Right then. Here\'s what I\'d like to know. ',
        'Fair point. Let\'s proceed. ',
        'Okay cool. Next one. ',
        'Noted. Moving on to the next. ',
        'Wonderful. Let\'s explore this. ',
        'Interesting perspective. Now, ',
        'I hear you. Let\'s continue with. ',
        'That\'s fine. Next question. ',
        'Mmm hmm. Let me ask you. ',
        'Okay great. Here\'s the next one. ',
      ];
      const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
      questionText = `${randomTransition}${question}`;
    }
    
    // Auto-play the question in voice mode with human-like settings
    const utterance = new SpeechSynthesisUtterance(questionText);
    
    // Make voice more human-like - conversational interview style
    utterance.rate = 1.1; // Fast but natural and understandable
    utterance.pitch = 0.9; // Lower pitch for professional male voice
    utterance.volume = 1.0; // Full volume
    
    // Try to use the most natural male voice available
    const voices = window.speechSynthesis.getVoices();
    
    // Priority order for professional interview voice
    const preferredVoice = 
      voices.find(voice => voice.name.includes('Google US English Male')) ||
      voices.find(voice => voice.name.includes('Google UK English Male')) ||
      voices.find(voice => voice.name.includes('Daniel')) ||
      voices.find(voice => voice.name.includes('Alex')) ||
      voices.find(voice => voice.name.includes('Male') && voice.lang.startsWith('en')) ||
      voices.find(voice => voice.name.includes('Google') && voice.lang.startsWith('en')) ||
      voices.find(voice => voice.name.includes('Natural') && voice.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      console.log('Using voice:', preferredVoice.name);
    }
    
    utterance.onend = () => {
      // After question is read, start recording user's answer
      setTimeout(() => {
        startVoiceRecording();
      }, 500);
    };
    
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [question, previousQuestions]);

  const startVoiceRecording = () => {
    if (!recognitionRef.current) return;
    
    setIsRecording(true);
    setTranscript('');
    setUserAnswer('');
    
    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcriptPiece = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptPiece + ' ';
        } else {
          interimTranscript += transcriptPiece;
        }
      }
      
      setTranscript(finalTranscript || interimTranscript);
      if (finalTranscript) {
        setUserAnswer(prev => prev + finalTranscript);
      }
    };
    
    recognitionRef.current.start();
  };

  const stopVoiceRecording = async () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      
      // Auto-submit the answer after a short delay
      if (userAnswer.trim()) {
        setTimeout(() => {
          handleSubmitAnswer(new Event('submit') as any);
        }, 500);
      }
    }
  };

  // Handle next question button click
  const handleNextQuestion = () => {
    const nextQ = (window as any).__nextInterviewQuestion;
    if (nextQ) {
      setQuestion(nextQ);
      setPreviousQuestions(prev => [...prev, nextQ]);
      setFeedback('');
      setIdealAnswer('');
      setShowNextButton(false);
      delete (window as any).__nextInterviewQuestion;
    }
  };

  // Auto-play question when it changes in voice mode
  useEffect(() => {
    if (interviewMode === 'voice' && question && !isLoading && !showNextButton) {
      startVoiceConversation();
    }
  }, [question, interviewMode, isLoading, showNextButton, startVoiceConversation]);

  // Cleanup speech on mode change or unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (recognitionRef.current && isRecording) {
        recognitionRef.current.stop();
      }
    };
  }, [interviewMode, isRecording]);

  // --- Form Submission Logic ---
  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim() || !isAiEnabled) return;

    setIsLoading(true);
    setFeedback('');
    setIdealAnswer('');
    
    try {
      const apiKey = localStorage.getItem('ai_api_key');
      const provider = localStorage.getItem('ai_provider') as AIProvider;
      if (!apiKey || !provider) {
        throw new Error('API configuration not found');
      }
      
      const result = await conductInterview({
        provider,
        apiKey,
        language: selectedLanguage,
        question: question,
        userAnswer: userAnswer,
        previousQuestions: previousQuestions,
        questionType
      });
      
      setFeedback(result.feedback);
      setIdealAnswer(result.idealAnswer);
      
      // Store next question temporarily for both modes
      setShowNextButton(true);
      (window as any).__nextInterviewQuestion = result.nextQuestion;
      
      // Read feedback aloud in voice mode
      if (interviewMode === 'voice' && result.feedback) {
        setTimeout(() => {
          readFeedbackAloud(result.feedback);
        }, 500); // Small delay after receiving feedback
      }
      
      setUserAnswer('');
    } catch (error) {
      console.error('Interview AI error:', error);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: error instanceof Error ? error.message : 'Could not get feedback from the AI. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Render the main content
  const renderContent = () => {
    if (!isAiEnabled) {
      return (
        <>
          <Card className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center">
            <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm z-10" />
            <div className="relative z-20">
              <Sparkles className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">AI Feature Locked</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Choose from 7 AI providers and enter your API key to unlock AI-powered interviews and content
              </p>
              <Button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Choose AI Provider
              </Button>
            </div>
          </Card>
          <AIProviderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveKey}
          />
        </>
      );
    }

    // If AI is enabled but interview hasn't started, show configuration screen
    if (isAiEnabled && !question && !isConfigured) {
      return (
        <Card className="h-full w-full flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-2xl space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Configure Your Interview</h3>
              <p className="text-muted-foreground">
                Customize your interview experience by selecting language and question type
              </p>
            </div>

            {/* Language Selection */}
            <div className="space-y-3">
              <Label htmlFor="language-select" className="text-lg font-semibold">
                Select Programming Language / Topic
              </Label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger id="language-select" className="w-full text-lg h-12 border-2">
                  <SelectValue placeholder="Choose a language or topic" />
                </SelectTrigger>
                <SelectContent className="max-h-[400px]">
                  {/* Frontend */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10">
                    🎨 Frontend
                  </div>
                  <SelectItem value="JavaScript">JavaScript</SelectItem>
                  <SelectItem value="TypeScript">TypeScript</SelectItem>
                  <SelectItem value="React">React</SelectItem>
                  <SelectItem value="Vue">Vue.js</SelectItem>
                  <SelectItem value="Angular">Angular</SelectItem>
                  <SelectItem value="HTML">HTML</SelectItem>
                  <SelectItem value="CSS">CSS</SelectItem>
                  <SelectItem value="Tailwind CSS">Tailwind CSS</SelectItem>
                  
                  {/* Backend */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10 mt-2">
                    ⚙️ Backend
                  </div>
                  <SelectItem value="Node.js">Node.js</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="Java">Java</SelectItem>
                  <SelectItem value="C#">C#</SelectItem>
                  <SelectItem value="Go">Go</SelectItem>
                  <SelectItem value="Rust">Rust</SelectItem>
                  <SelectItem value="PHP">PHP</SelectItem>
                  <SelectItem value="Ruby">Ruby</SelectItem>
                  <SelectItem value="C++">C++</SelectItem>
                  <SelectItem value="Spring Boot">Spring Boot</SelectItem>
                  <SelectItem value="Django">Django</SelectItem>
                  <SelectItem value="Express.js">Express.js</SelectItem>
                  
                  {/* Database */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10 mt-2">
                    🗄️ Database
                  </div>
                  <SelectItem value="SQL">SQL</SelectItem>
                  <SelectItem value="MySQL">MySQL</SelectItem>
                  <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                  <SelectItem value="MongoDB">MongoDB</SelectItem>
                  <SelectItem value="Redis">Redis</SelectItem>
                  <SelectItem value="Cassandra">Cassandra</SelectItem>
                  <SelectItem value="DynamoDB">DynamoDB</SelectItem>
                  
                  {/* DSA */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10 mt-2">
                    📊 Data Structures & Algorithms
                  </div>
                  <SelectItem value="DSA">General DSA</SelectItem>
                  <SelectItem value="Arrays & Strings">Arrays & Strings</SelectItem>
                  <SelectItem value="Linked Lists">Linked Lists</SelectItem>
                  <SelectItem value="Trees & Graphs">Trees & Graphs</SelectItem>
                  <SelectItem value="Dynamic Programming">Dynamic Programming</SelectItem>
                  <SelectItem value="Sorting & Searching">Sorting & Searching</SelectItem>
                  
                  {/* Mobile */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10 mt-2">
                    📱 Mobile Development
                  </div>
                  <SelectItem value="Swift">Swift (iOS)</SelectItem>
                  <SelectItem value="Kotlin">Kotlin (Android)</SelectItem>
                  <SelectItem value="React Native">React Native</SelectItem>
                  <SelectItem value="Flutter">Flutter</SelectItem>
                  
                  {/* DevOps & Cloud */}
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10 mt-2">
                    ☁️ DevOps & Cloud
                  </div>
                  <SelectItem value="Docker">Docker</SelectItem>
                  <SelectItem value="Kubernetes">Kubernetes</SelectItem>
                  <SelectItem value="AWS">AWS</SelectItem>
                  <SelectItem value="Azure">Azure</SelectItem>
                  <SelectItem value="CI/CD">CI/CD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question Type Selection */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Question Type</Label>
              <RadioGroup value={questionType} onValueChange={(value: any) => setQuestionType(value)} className="space-y-3">
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                  <RadioGroupItem value="theory" id="theory" />
                  <Label htmlFor="theory" className="flex-1 cursor-pointer">
                    <div className="font-semibold text-base">Theory Questions</div>
                    <div className="text-sm text-muted-foreground">Conceptual questions about programming fundamentals</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                  <RadioGroupItem value="coding" id="coding" />
                  <Label htmlFor="coding" className="flex-1 cursor-pointer">
                    <div className="font-semibold text-base">Coding Questions</div>
                    <div className="text-sm text-muted-foreground">Code snippets, debugging, and implementation problems</div>
                    <div className="text-xs text-amber-600 dark:text-amber-400 mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-medium">Typing mode only - Voice mode not available</span>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                  <RadioGroupItem value="mcq" id="mcq" />
                  <Label htmlFor="mcq" className="flex-1 cursor-pointer">
                    <div className="font-semibold text-base">Multiple Choice Questions (MCQ)</div>
                    <div className="text-sm text-muted-foreground">Quick knowledge checks with multiple choice options</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-medium">Select answers - No typing required</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Start Button */}
            <Button 
              onClick={startInitialQuestion}
              disabled={isLoading}
              className="w-full h-12 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Preparing Interview...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Interview
                </>
              )}
            </Button>
          </div>
        </Card>
      );
    }

    return (
    <div className="h-full w-full flex flex-col gap-4 p-4 overflow-hidden">
      {/* Mode Toggle */}
      <Card className="flex-shrink-0">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Interview Mode</h3>
              <p className="text-sm text-muted-foreground">Choose how you want to conduct the interview</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={interviewMode === 'typing' ? 'default' : 'outline'}
                onClick={() => setInterviewMode('typing')}
                className={cn(
                  "transition-all",
                  interviewMode === 'typing' && "bg-blue-600 hover:bg-blue-700"
                )}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Typing Mode
              </Button>
              <Button
                variant={interviewMode === 'voice' ? 'default' : 'outline'}
                onClick={() => setInterviewMode('voice')}
                disabled={questionType === 'coding' || questionType === 'mcq'}
                className={cn(
                  "transition-all",
                  interviewMode === 'voice' && "bg-purple-600 hover:bg-purple-700",
                  (questionType === 'coding' || questionType === 'mcq') && "opacity-50 cursor-not-allowed"
                )}
                title={questionType === 'coding' || questionType === 'mcq' ? 'Voice mode is not available for coding/MCQ questions' : ''}
              >
                <div className="mr-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                Voice Mode
                {(questionType === 'coding' || questionType === 'mcq') && <span className="ml-2 text-xs">(Disabled)</span>}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interview Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden min-h-0">
        {/* Left Panel: Questions & Answers */}
        <div className="flex-1 h-full min-h-0 overflow-auto">
          {interviewMode === 'typing' ? (
            questionType === 'mcq' ? (
              // MCQ MODE UI - Full Width
              <div className="h-full flex items-center justify-center p-8">
                {question && (
                  <Card className="w-full max-w-3xl border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-b-2 border-purple-100 dark:border-purple-900">
                      <div className="flex items-center gap-4">
                        {/* Animated Gradient Orb */}
                        <div className="relative w-14 h-14 flex-shrink-0">
                          {/* Outer glow effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 opacity-40 blur-xl animate-pulse"></div>
                          {/* Main orb with multiple gradient layers */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 animate-pulse"></div>
                          {/* Inner highlight */}
                          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-300 to-transparent opacity-50"></div>
                          {/* Center shine */}
                          <div className="absolute inset-4 rounded-full bg-white opacity-20"></div>
                        </div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          Multiple Choice Question
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                      {/* Question Text */}
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                          {question.split('\n\n')[0].replace(/^Question:?\s*/i, '')}
                        </div>
                      </div>

                      {/* Options */}
                      <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-4">
                        {['A', 'B', 'C', 'D'].map((option) => {
                          const optionMatch = question.match(new RegExp(`${option}\\)\\s*(.+?)(?=\\n[A-D]\\)|\\n\\nCorrect|$)`, 's'));
                          const optionText = optionMatch ? optionMatch[1].trim() : '';
                          
                          if (!optionText) return null;
                          
                          const isSelected = selectedOption === option;
                          const correctAnswer = question.match(/Correct Answer:\s*([A-D])/i)?.[1];
                          const isCorrectOption = correctAnswer === option;
                          const showResult = isAnswerCorrect !== null;
                          
                          return (
                            <div
                              key={option}
                              className={cn(
                                "flex items-start space-x-4 p-5 border-2 rounded-xl transition-all cursor-pointer",
                                isSelected && !showResult && "border-purple-500 bg-purple-50 dark:bg-purple-950/20",
                                !isSelected && !showResult && "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50/50 dark:hover:bg-purple-950/10",
                                showResult && isCorrectOption && "border-green-500 bg-green-50 dark:bg-green-950/20",
                                showResult && isSelected && !isCorrectOption && "border-red-500 bg-red-50 dark:bg-red-950/20",
                                showResult && !isSelected && !isCorrectOption && "opacity-50"
                              )}
                            >
                              <RadioGroupItem value={option} id={option} disabled={showResult} className="mt-1" />
                              <Label htmlFor={option} className="flex-1 cursor-pointer text-base leading-relaxed">
                                <span className="text-foreground">{optionText}</span>
                                {showResult && isCorrectOption && (
                                  <span className="ml-3 inline-flex items-center text-green-600 dark:text-green-400 font-semibold">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    Correct Answer
                                  </span>
                                )}
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>

                      {/* Check Answer Button */}
                      {!showNextButton && (
                        <Button
                          onClick={() => {
                            const correctAnswer = question.match(/Correct Answer:\s*([A-D])/i)?.[1];
                            const isCorrect = selectedOption === correctAnswer;
                            setIsAnswerCorrect(isCorrect);
                            setShowNextButton(true);
                          }}
                          disabled={!selectedOption}
                          className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                        >
                          Check Answer
                        </Button>
                      )}

                      {/* Result Display */}
                      {isAnswerCorrect !== null && (
                        <div className={cn(
                          "p-6 rounded-xl border-2",
                          isAnswerCorrect 
                            ? "bg-green-50 dark:bg-green-950/20 border-green-500" 
                            : "bg-red-50 dark:bg-red-950/20 border-red-500"
                        )}>
                          <div className="flex items-center gap-3 mb-3">
                            {isAnswerCorrect ? (
                              <>
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-2xl font-bold text-green-700 dark:text-green-400">Correct! 🎉</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-2xl font-bold text-red-700 dark:text-red-400">Incorrect</span>
                              </>
                            )}
                          </div>
                          <p className="text-base text-muted-foreground">
                            {isAnswerCorrect 
                              ? "Great job! You selected the right answer." 
                              : `The correct answer was ${question.match(/Correct Answer:\s*([A-D])/i)?.[1]}.`
                            }
                          </p>
                        </div>
                      )}

                      {/* Next Question Button */}
                      {showNextButton && (
                        <Button
                          onClick={async () => {
                            const nextIndex = currentQuestionIndex + 1;
                            
                            // If we have questions in the bank, use them
                            if (nextIndex < questionBank.length) {
                              setQuestion(questionBank[nextIndex]);
                              setPreviousQuestions(prev => [...prev, questionBank[nextIndex]]);
                              setCurrentQuestionIndex(nextIndex);
                              setShowNextButton(false);
                              setSelectedOption('');
                              setIsAnswerCorrect(null);
                            } else {
                              // Fetch more questions when we run out
                              setIsLoading(true);
                              try {
                                const apiKey = localStorage.getItem('ai_api_key');
                                const provider = localStorage.getItem('ai_provider') as AIProvider;
                                if (!apiKey || !provider) throw new Error('API not configured');
                                
                                const batchSize = 10;
                                const newQuestions: string[] = [];
                                let previousQs = [...previousQuestions];
                                
                                for (let i = 0; i < batchSize; i++) {
                                  const result = await conductInterview({
                                    provider,
                                    apiKey,
                                    language: selectedLanguage,
                                    question: '',
                                    previousQuestions: previousQs,
                                    questionType
                                  });
                                  newQuestions.push(result.nextQuestion);
                                  previousQs.push(result.nextQuestion);
                                }
                                
                                setQuestionBank(newQuestions);
                                setQuestion(newQuestions[0]);
                                setPreviousQuestions(prev => [...prev, newQuestions[0]]);
                                setCurrentQuestionIndex(0);
                                setShowNextButton(false);
                                setSelectedOption('');
                                setIsAnswerCorrect(null);
                              } catch (error) {
                                console.error('Failed to fetch next questions:', error);
                                toast({
                                  variant: 'destructive',
                                  title: 'Error',
                                  description: 'Could not fetch more questions. Please try again.',
                                });
                              } finally {
                                setIsLoading(false);
                              }
                            }
                          }}
                          disabled={isLoading}
                          className="w-full h-14 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg"
                        >
                          {isLoading ? (
                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Loading...</>
                          ) : (
                            <><ArrowRight className="mr-2 h-5 w-5" /> Next Question</>
                          )}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
            // TYPING MODE UI - Horizontal Split
            <form onSubmit={handleSubmitAnswer} className="h-full flex flex-row gap-4">
              {/* Left Side - Question */}
              {question && (
                <Card className='flex-1 h-full flex flex-col border-2 border-blue-200 dark:border-blue-800 shadow-md overflow-hidden'>
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 flex flex-row items-center justify-between border-b-2 border-blue-100 dark:border-blue-900 flex-shrink-0">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <CardTitle className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Question
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-auto p-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <style>{`
                        /* Hide === separator lines */
                        .prose hr {
                          display: none;
                        }
                        .prose p:has(> strong:only-child) {
                          display: none;
                        }
                        .prose pre {
                          position: relative;
                          padding: 1rem 1rem 1rem 3rem;
                          margin: 1.5rem 0;
                          border-radius: 0.75rem;
                          border: 2px solid;
                        }
                        @media (prefers-color-scheme: light) {
                          .prose pre {
                            background: linear-gradient(135deg, rgb(241 245 249) 0%, rgb(226 232 240) 100%);
                            border-color: rgb(203 213 225);
                          }
                          .prose pre code {
                            color: rgb(51 65 85);
                          }
                        }
                        @media (prefers-color-scheme: dark) {
                          .prose pre {
                            background: linear-gradient(135deg, rgb(15 23 42) 0%, rgb(30 41 59) 100%);
                            border-color: rgb(51 65 85);
                          }
                          .prose pre code {
                            color: #e2e8f0;
                          }
                        }
                        .dark .prose pre {
                          background: linear-gradient(135deg, rgb(15 23 42) 0%, rgb(30 41 59) 100%);
                          border-color: rgb(51 65 85);
                        }
                        .dark .prose pre code {
                          color: #e2e8f0;
                        }
                        .prose pre code {
                          font-size: 0.875rem;
                          line-height: 1.7;
                          font-family: 'Fira Code', 'JetBrains Mono', 'SF Mono', 'Cascadia Code', Menlo, Monaco, Consolas, monospace;
                        }
                        .prose code {
                          background: rgb(59 130 246 / 0.1);
                          padding: 0.2rem 0.4rem;
                          border-radius: 0.25rem;
                          font-size: 0.85em;
                          color: rgb(37 99 235);
                          font-weight: 600;
                        }
                        .dark .prose code {
                          color: rgb(96 165 250);
                        }
                        .prose pre code {
                          background: transparent;
                          padding: 0;
                          font-weight: normal;
                        }
                        .prose pre::before {
                          content: '▶';
                          position: absolute;
                          left: 1rem;
                          top: 1rem;
                          font-size: 1rem;
                          color: rgb(59 130 246);
                        }
                        .dark .prose pre::before {
                          color: rgb(96 165 250);
                        }
                        .prose pre::after {
                          content: 'WHAT IS THE OUTPUT?';
                          position: absolute;
                          top: 0.75rem;
                          right: 0.75rem;
                          font-size: 0.65rem;
                          font-weight: 700;
                          letter-spacing: 0.05em;
                          color: rgb(239 68 68);
                          background: rgb(254 226 226);
                          padding: 0.25rem 0.5rem;
                          border-radius: 0.25rem;
                          border: 1px solid rgb(252 165 165);
                        }
                        .dark .prose pre::after {
                          color: rgb(248 113 113);
                          background: rgb(127 29 29);
                          border-color: rgb(185 28 28);
                        }
                        .prose strong {
                          color: rgb(37 99 235);
                          font-weight: 700;
                        }
                        .dark .prose strong {
                          color: rgb(96 165 250);
                        }
                        .prose p {
                          margin-bottom: 1rem;
                          line-height: 1.7;
                        }
                        .prose h3, .prose h4 {
                          color: rgb(37 99 235);
                          margin-top: 1.5rem;
                          margin-bottom: 0.75rem;
                          font-weight: 700;
                        }
                        .dark .prose h3, .dark .prose h4 {
                          color: rgb(96 165 250);
                        }
                      `}</style>
                      <ReactMarkdown>{question}</ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>
              )}
            
              {/* Right Side - Answer */}
            <Card className="flex-1 h-full flex flex-col border-2 border-emerald-200 dark:border-emerald-800 shadow-md overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-b-2 border-emerald-100 dark:border-emerald-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Your Answer
                      </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 p-4">
                    <Textarea
                        value={userAnswer}
                        onChange={e => setUserAnswer(e.target.value)}
                        placeholder="Type your answer here..."
                        className="flex-1 text-base resize-none border-2 focus:border-emerald-400 dark:focus:border-emerald-600 rounded-lg"
                        disabled={isLoading || showNextButton}
                    />
                    <div className="flex items-center justify-end gap-3">
                        <Button 
                          type="submit" 
                          disabled={isLoading || !userAnswer.trim()}
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md"
                        >
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
                            ) : (
                                <><Send className="mr-2 h-4 w-4"/> Submit Answer</>
                            )}
                        </Button>
                    </div>
                    
                    {/* Next Question Button for Typing Mode */}
                    {showNextButton && feedback && (
                      <div className="mt-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="h-6 w-6 text-emerald-600" />
                          <span className="font-bold text-lg text-emerald-700 dark:text-emerald-400">Feedback Received!</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Your feedback is ready. Review it in the panel on the right, then click below to continue.
                        </p>
                        <Button
                          onClick={handleNextQuestion}
                          size="lg"
                          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
                        >
                          <ArrowRight className="mr-2 h-5 w-5" />
                          Next Question
                        </Button>
                      </div>
                    )}
                </CardContent>
            </Card>
        </form>
            )
          ) : (
            // VOICE MODE UI
            <div className="h-full flex flex-col gap-4">
              {question && (
                <Card className='flex-shrink-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800'>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mr-2 shadow-md">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      Interview Question
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-sm dark:prose-invert max-w-none prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border-2 prose-pre:border-purple-400 dark:prose-pre:border-purple-600 prose-pre:rounded-lg prose-pre:shadow-lg prose-code:text-sm prose-code:font-mono">
                      <style>{`
                        /* Hide === separator lines */
                        .prose hr {
                          display: none;
                        }
                        .prose p:has(> strong:only-child) {
                          display: none;
                        }
                        .prose pre {
                          position: relative;
                          padding: 1rem;
                          margin: 1rem 0;
                          background: linear-gradient(135deg, rgb(15 23 42) 0%, rgb(30 41 59) 100%);
                        }
                        .prose pre code {
                          color: #e2e8f0;
                          font-size: 0.875rem;
                          line-height: 1.6;
                          font-family: 'Fira Code', 'JetBrains Mono', 'SF Mono', 'Cascadia Code', Menlo, Monaco, Consolas, monospace;
                        }
                        .prose code {
                          background: rgb(147 51 234 / 0.1);
                          padding: 0.2rem 0.4rem;
                          border-radius: 0.25rem;
                          font-size: 0.85em;
                          color: rgb(168 85 247);
                          font-weight: 600;
                        }
                        .prose pre code {
                          background: transparent;
                          padding: 0;
                          color: #e2e8f0;
                          font-weight: normal;
                        }
                        .prose pre::after {
                          content: 'CODE';
                          position: absolute;
                          top: 0.5rem;
                          right: 0.5rem;
                          font-size: 0.65rem;
                          font-weight: 700;
                          letter-spacing: 0.05em;
                          color: rgb(168 85 247);
                          background: rgb(30 27 75);
                          padding: 0.25rem 0.5rem;
                          border-radius: 0.25rem;
                        }
                        .prose strong {
                          color: rgb(168 85 247);
                        }
                      `}</style>
                      <ReactMarkdown>{question}</ReactMarkdown>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                      <Volume2 className="h-4 w-4 animate-pulse text-purple-600" />
                      <span className="font-medium">Question will be read aloud automatically</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            
              {/* Voice Recording Panel */}
              <Card className="flex-1 flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Mic className={cn("mr-2 h-5 w-5", isRecording && "text-red-500 animate-pulse")} />
                    {isRecording ? 'Recording Your Answer...' : 'Your Answer'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center gap-6">
                  {!isRecording && !isLoading && !userAnswer && (
                    <div className="text-center space-y-6">
                      {/* Siri-like Voice Orb */}
                      <div className="relative w-48 h-48 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 opacity-60 blur-xl animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-300 via-blue-400 to-indigo-500 animate-pulse" style={{animationDuration: '3s'}}></div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 blur-md animate-pulse" style={{animationDuration: '2s'}}></div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Voice Interview Mode</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          The question will be read to you, then you can speak your answer
                        </p>
                      </div>
                    </div>
                  )}

                  {isRecording && (
                    <div className="text-center space-y-6 w-full max-w-2xl">
                      {/* Active Recording Orb - Solid Blue/Cyan Glow */}
                      <div className="relative w-64 h-64 mx-auto">
                        {/* Outer glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 opacity-30 blur-3xl animate-pulse" style={{animationDuration: '2s'}}></div>
                        {/* Main solid orb */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-cyan-500 animate-pulse" style={{animationDuration: '1.5s'}}></div>
                        {/* Inner bright layer */}
                        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-200 via-blue-300 to-cyan-400 blur-sm"></div>
                        {/* Center highlight */}
                        <div className="absolute inset-24 rounded-full bg-gradient-to-br from-white to-cyan-100 opacity-60"></div>
                      </div>
                      
                      {transcript && (
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-purple-200 dark:border-purple-800">
                          <p className="text-sm text-muted-foreground mb-2">Live Transcript:</p>
                          <p className="text-lg">{transcript}</p>
                        </div>
                      )}
                      
                      <Button
                        onClick={stopVoiceRecording}
                        size="lg"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <StopCircle className="mr-2 h-5 w-5" />
                        Stop & Submit Answer
                      </Button>
                    </div>
                  )}

                  {!isRecording && userAnswer && !isLoading && !showNextButton && (
                    <div className="w-full max-w-2xl space-y-4">
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-3 text-green-600">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-semibold">Your Recorded Answer:</span>
                        </div>
                        <p className="text-lg">{userAnswer}</p>
                      </div>
                      <div className="text-center text-sm text-muted-foreground">
                        <Loader2 className="inline-block h-4 w-4 animate-spin mr-2" />
                        Getting feedback from AI...
                      </div>
                    </div>
                  )}

                  {showNextButton && feedback && (
                    <div className="w-full max-w-2xl space-y-6">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="h-6 w-6 text-emerald-600" />
                          <span className="font-bold text-lg text-emerald-700 dark:text-emerald-400">Feedback Received!</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Your feedback is ready. Review it in the panel on the right, then click below to continue.
                        </p>
                        <Button
                          onClick={handleNextQuestion}
                          size="lg"
                          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
                        >
                          <ArrowRight className="mr-2 h-5 w-5" />
                          Next Question
                        </Button>
                      </div>
                    </div>
                  )}

                  {isLoading && (
                    <div className="text-center space-y-4">
                      <Loader2 className="h-12 w-12 text-purple-600 animate-spin mx-auto" />
                      <p className="text-muted-foreground">AI is analyzing your answer...</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Right Panel: Feedback & Ideal Answer (Hidden for MCQ) */}
      {questionType !== 'mcq' && (
      <div className="flex-1 h-full min-w-0">
        <Card className="h-full w-full flex flex-col overflow-hidden border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-b-2 border-primary/10 flex-shrink-0">
                <CardTitle className="text-xl font-bold flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-3 shadow-md">
                      <Wand2 className="text-white w-5 h-5"/>
                    </div>
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      AI Assistant Feedback
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full w-full">
                  <div className="p-6">
                    {isLoading && !feedback && (
                      <div className="flex items-center justify-center h-full min-h-[300px]">
                        <div className="text-center space-y-4">
                          <div className="relative">
                            <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mx-auto" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full border-4 border-indigo-200 animate-ping opacity-20"></div>
                            </div>
                          </div>
                          <p className='text-muted-foreground font-medium'>Analyzing your answer...</p>
                        </div>
                      </div>
                    )}
                    {!isLoading && !feedback && (
                      <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center min-h-[300px]">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mb-4">
                          <Wand2 className='w-10 h-10 text-indigo-500'/>
                        </div>
                        <p className="text-lg font-medium">Waiting for your answer...</p>
                        <p className="text-sm mt-2 max-w-sm">Your personalized feedback and ideal answer will appear here after you submit.</p>
                      </div>
                    )}
                    {feedback && (
                        <div className="space-y-6">
                          {/* Feedback Section */}
                          <div className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500"></div>
                            <div className="pl-6">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm">
                                  <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <h3 className='font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                                  Feedback on Your Answer
                                </h3>
                              </div>
                              <div className="prose prose-sm dark:prose-invert max-w-none overflow-auto">
                                <ReactMarkdown>{feedback}</ReactMarkdown>
                              </div>
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t-2 border-dashed border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center">
                              <span className="px-4 bg-background text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Model Answer
                              </span>
                            </div>
                          </div>

                          {/* Ideal Answer Section */}
                          <div className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                            <div className="pl-6">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-sm">
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                                  </svg>
                                </div>
                                <h3 className='font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                                  Ideal Answer
                                </h3>
                              </div>
                              <div className="prose prose-sm dark:prose-invert max-w-none overflow-auto">
                                <ReactMarkdown>{idealAnswer}</ReactMarkdown>
                              </div>
                            </div>
                          </div>
                        </div>
                    )}
                  </div>
                </ScrollArea>
            </CardContent>
        </Card>
      </div>
      )}
      </div>
    </div>
    );
  };

  // If children provided, wrap in Dialog (for dashboard usage)
  if (children) {
    return (
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent 
          className="max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] p-0 m-0" 
          onPointerDownOutside={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <VisuallyHidden>
            <DialogTitle>AI Interview Simulator for {languageName}</DialogTitle>
          </VisuallyHidden>
          
          {/* Custom Close Button */}
          <button
            onClick={() => handleDialogClose(false)}
            className="absolute right-6 top-6 z-50 rounded-full w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-4 focus:ring-red-500/50 group"
            aria-label="Close interview"
          >
            <svg 
              className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          {renderContent()}
        </DialogContent>
      </Dialog>
    );
  }

  // Otherwise render directly (for page usage)
  return renderContent();
};

export default InterviewSimulator;
