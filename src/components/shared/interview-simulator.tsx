
'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mic, MicOff, Volume2, Loader2, Sparkles, Wand2, Send, CornerDownLeft, MessageSquare, Phone, PhoneOff, StopCircle, ArrowRight, Search, X, Code } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { conductInterview } from '@/ai/flows/interview-flow';
import { validateApiKey } from '@/ai/flows/validate-api-key';
import { useUser } from '@/hooks/use-auth-compat';
import { languages } from '@/data/languages';
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
  category?: string; // Optional category to filter topics (e.g., "technical", "behavioral")
  children?: React.ReactNode; // Optional trigger button
}

const InterviewSimulator: React.FC<InterviewSimulatorProps> = ({ language: languageName, category, children }) => {
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
  const [answerHint, setAnswerHint] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isReading, setIsReading] = useState<string | null>(null);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  
  // Interview mode: 'typing' or 'voice'
  const [interviewMode, setInterviewMode] = useState<'typing' | 'voice'>('typing');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showNextButton, setShowNextButton] = useState(false);
  const [isQuestionSpeaking, setIsQuestionSpeaking] = useState(false);
  const [isFeedbackSpeaking, setIsFeedbackSpeaking] = useState(false);
  
  // Interview configuration
  const [selectedLanguage, setSelectedLanguage] = useState(languageName);
  const [questionType, setQuestionType] = useState<'theory' | 'coding' | 'mcq'>('theory');
  const [isConfigured, setIsConfigured] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(category || null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // MCQ state
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  
  // Question bank for batch fetching (MCQ optimization)
  const [questionBank, setQuestionBank] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Interview Performance Tracking
  const [interviewStats, setInterviewStats] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
    partialAnswers: 0,
    incorrectAnswers: 0,
    skippedQuestions: 0,
  });
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [interviewResult, setInterviewResult] = useState<'selected' | 'not-selected' | 'needs-improvement' | null>(null);

  const recognitionRef = useRef<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Category ID to display name mapping
  const categoryMap: Record<string, string> = {
    'technical': '💻 Technical / Programming',
    'behavioral': '👥 Behavioral / HR',
    'aptitude': '🧮 Aptitude / Reasoning',
  };

  // Complete topic list organized by categories
  const allTopics = useMemo(() => [
    // Technical / Programming - Frontend
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'JavaScript', label: 'JavaScript' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'TypeScript', label: 'TypeScript' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'React', label: 'React' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'Vue', label: 'Vue.js' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'Angular', label: 'Angular' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'Next.js', label: 'Next.js' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'HTML', label: 'HTML' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'CSS', label: 'CSS' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'Tailwind CSS', label: 'Tailwind CSS' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'SCSS', label: 'SCSS' },
    { category: '🎨 Frontend', categoryId: 'technical', subcategory: 'frontend', value: 'Bootstrap', label: 'Bootstrap' },
    
    // Technical / Programming - Backend
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Node.js', label: 'Node.js' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Express.js', label: 'Express.js' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Python', label: 'Python' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Django', label: 'Django' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Flask', label: 'Flask' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Java', label: 'Java' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Spring Boot', label: 'Spring Boot' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'C#', label: 'C#' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: '.NET', label: '.NET' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Go', label: 'Go' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Rust', label: 'Rust' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'PHP', label: 'PHP' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Laravel', label: 'Laravel' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Ruby', label: 'Ruby' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'Ruby on Rails', label: 'Ruby on Rails' },
    { category: '⚙️ Backend', categoryId: 'technical', subcategory: 'backend', value: 'C++', label: 'C++' },
    
    // Technical / Programming - Database
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'SQL', label: 'SQL' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'MySQL', label: 'MySQL' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'PostgreSQL', label: 'PostgreSQL' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'MongoDB', label: 'MongoDB' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'Redis', label: 'Redis' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'Cassandra', label: 'Cassandra' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'DynamoDB', label: 'DynamoDB' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'Oracle', label: 'Oracle' },
    { category: '🗄️ Database', categoryId: 'technical', subcategory: 'database', value: 'SQLite', label: 'SQLite' },
    
    // Technical / Programming - DSA
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'DSA', label: 'General DSA' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Arrays & Strings', label: 'Arrays & Strings' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Linked Lists', label: 'Linked Lists' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Trees & Graphs', label: 'Trees & Graphs' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Dynamic Programming', label: 'Dynamic Programming' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Sorting & Searching', label: 'Sorting & Searching' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Recursion', label: 'Recursion' },
    { category: '📊 Data Structures & Algorithms', categoryId: 'technical', subcategory: 'dsa', value: 'Backtracking', label: 'Backtracking' },
    
    // Technical / Programming - Mobile
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'Swift', label: 'Swift (iOS)' },
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'SwiftUI', label: 'SwiftUI' },
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'Kotlin', label: 'Kotlin (Android)' },
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'Java Android', label: 'Java (Android)' },
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'React Native', label: 'React Native' },
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'Flutter', label: 'Flutter' },
    { category: '📱 Mobile Development', categoryId: 'technical', subcategory: 'mobile', value: 'Ionic', label: 'Ionic' },
    
    // Technical / Programming - DevOps & Cloud
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'Docker', label: 'Docker' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'Kubernetes', label: 'Kubernetes' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'AWS', label: 'AWS' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'Azure', label: 'Azure' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'Google Cloud', label: 'Google Cloud Platform' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'CI/CD', label: 'CI/CD' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'Jenkins', label: 'Jenkins' },
    { category: '☁️ DevOps & Cloud', categoryId: 'technical', subcategory: 'devops', value: 'Terraform', label: 'Terraform' },
    
    // Technical / Programming - System Design
    { category: '🏗️ System Design', categoryId: 'technical', subcategory: 'system', value: 'System Design', label: 'System Design' },
    { category: '🏗️ System Design', categoryId: 'technical', subcategory: 'system', value: 'Microservices', label: 'Microservices Architecture' },
    { category: '🏗️ System Design', categoryId: 'technical', subcategory: 'system', value: 'API Design', label: 'API Design' },
    { category: '🏗️ System Design', categoryId: 'technical', subcategory: 'system', value: 'Scalability', label: 'Scalability' },
    { category: '🏗️ System Design', categoryId: 'technical', subcategory: 'system', value: 'Load Balancing', label: 'Load Balancing' },
    
    // Behavioral / HR
    { category: '👥 Behavioral / HR', categoryId: 'behavioral', value: 'HR Round', label: 'HR Round' },
    { category: '👥 Behavioral / HR', categoryId: 'behavioral', value: 'Behavioral Questions', label: 'Behavioral Questions' },
    { category: '👥 Behavioral / HR', categoryId: 'behavioral', value: 'Leadership & Management', label: 'Leadership & Management' },
    { category: '👥 Behavioral / HR', categoryId: 'behavioral', value: 'Conflict Resolution', label: 'Conflict Resolution' },
    
    // Aptitude / Reasoning
    { category: '🧮 Aptitude / Reasoning', categoryId: 'aptitude', value: 'Quantitative Aptitude', label: 'Quantitative Aptitude' },
    { category: '🧮 Aptitude / Reasoning', categoryId: 'aptitude', value: 'Logical Reasoning', label: 'Logical Reasoning' },
    { category: '🧮 Aptitude / Reasoning', categoryId: 'aptitude', value: 'Verbal Reasoning', label: 'Verbal Reasoning' },
  ], []);

  // Filter topics based on category filter and search query
  const filteredTopics = useMemo(() => {
    let topics = allTopics;
    
    // Filter by category if a category filter is selected
    if (selectedCategoryFilter) {
      topics = topics.filter(topic => topic.categoryId === selectedCategoryFilter);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      topics = topics.filter(topic => 
        topic.label.toLowerCase().includes(query) ||
        topic.category.toLowerCase().includes(query)
      );
    }
    
    return topics;
  }, [selectedCategoryFilter, searchQuery, allTopics]);

  // Group filtered topics by category
  const groupedTopics = useMemo(() => {
    const groups: Record<string, typeof allTopics> = {};
    filteredTopics.forEach(topic => {
      if (!groups[topic.category]) {
        groups[topic.category] = [];
      }
      groups[topic.category].push(topic);
    });
    return groups;
  }, [filteredTopics]);

  // Helper function to get category for selected language
  const getSelectedCategory = (): 'technical' | 'behavioral' | 'aptitude' => {
    const topic = allTopics.find(t => t.value === selectedLanguage);
    return (topic?.categoryId as 'technical' | 'behavioral' | 'aptitude') || 'technical';
  };

  // Initialize category filter from prop and set first topic as default
  useEffect(() => {
    if (category) {
      setSelectedCategoryFilter(category);
      // Find first topic in this category and set as default
      const categoryTopics = allTopics.filter(topic => topic.categoryId === category);
      if (categoryTopics.length > 0) {
        setSelectedLanguage(categoryTopics[0].value);
      }
    }
  }, [category, allTopics]);

  // Auto-reset question type if it's not available for the selected category
  useEffect(() => {
    // For aptitude, auto-select MCQ (especially for Quantitative Aptitude)
    if (selectedCategoryFilter === 'aptitude') {
      if (questionType === 'coding') {
        setQuestionType('mcq');
      } else if (questionType === 'theory' && selectedLanguage === 'Quantitative Aptitude') {
        setQuestionType('mcq');
      }
    } 
    // For non-technical categories (behavioral, etc.), disable coding
    else if (selectedCategoryFilter && selectedCategoryFilter !== 'technical' && questionType === 'coding') {
      setQuestionType('theory');
    } 
    // Reset MCQ to theory if category changes away from aptitude
    else if (selectedCategoryFilter !== 'aptitude' && questionType === 'mcq') {
      setQuestionType('theory');
    }
  }, [selectedCategoryFilter, questionType, selectedLanguage]);

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
      toast({
        variant: 'destructive',
        title: 'Empty API Key',
        description: 'Please enter your API key.',
      });
      return false;
    }

    console.log(`[Interview Simulator] Validating ${provider} API key...`);
    
    // Show loading toast
    toast({
      title: 'Validating API Key',
      description: `Please wait while we validate your ${provider} API key...`,
    });

    try {
      // Validate the API key with the selected provider
      const validation = await validateApiKey(provider, key.trim());
      
      console.log(`[Interview Simulator] Validation result:`, validation);
      
      if (validation.valid) {
        // Key is valid, save it and enable AI
        localStorage.setItem('ai_api_key', key.trim());
        localStorage.setItem('ai_provider', provider);
        setAiProvider(provider);
        setIsAiEnabled(true);
        
        console.log(`[Interview Simulator] API key saved successfully`);
        
        toast({
          title: '✅ AI Features Unlocked!',
          description: `Your ${provider} API key has been validated and AI features are now enabled.`,
        });
        return true;
      } else {
        // Key is invalid, show error
        console.error(`[Interview Simulator] Validation failed:`, validation.error);
        
        toast({
          variant: 'destructive',
          title: '❌ Invalid API Key',
          description: validation.error || 'Please check your API key and try again.',
        });
        return false;
      }
    } catch (error) {
      console.error('[Interview Simulator] Error validating API key:', error);
      toast({
        variant: 'destructive',
        title: '⚠️ Validation Failed',
        description: error instanceof Error ? error.message : 'Could not validate your API key. Please try again.',
      });
      return false;
    }
  };

  // Calculate interview result based on performance
  const calculateInterviewResult = useCallback(() => {
    const { totalQuestions, correctAnswers, partialAnswers, incorrectAnswers } = interviewStats;

    if (totalQuestions === 0) return null;

    // Calculate score: correct = 1 point, partial = 0.5 points
    const score = correctAnswers + (partialAnswers * 0.5);
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 70) {
      return 'selected';
    } else if (percentage >= 50) {
      return 'needs-improvement';
    } else {
      return 'not-selected';
    }
  }, [interviewStats]);

  // Reset interview state
  const resetInterview = useCallback(() => {
    // Stop all audio/voice immediately
    window.speechSynthesis.cancel();
    
    // Stop speech recognition if active
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Ignore errors if already stopped
      }
    }
    
    // Reset all speaking states
    setIsQuestionSpeaking(false);
    setIsFeedbackSpeaking(false);
    setIsRecording(false);
    
    // Reset interview data
    setQuestion('');
    setUserAnswer('');
    setFeedback('');
    setIdealAnswer('');
    setPreviousQuestions([]);
    setIsConfigured(false);
    setShowNextButton(false);
    setTranscript('');
    setInterviewMode('typing');
    setSelectedOption('');
    setIsAnswerCorrect(null);
    setQuestionBank([]);
    setCurrentQuestionIndex(0);

    // Reset interview stats
    setInterviewStats({
      totalQuestions: 0,
      correctAnswers: 0,
      partialAnswers: 0,
      incorrectAnswers: 0,
      skippedQuestions: 0,
    });
    setInterviewResult(null);
  }, []); // No dependencies needed - always use latest state

  // Handle dialog close - show results if interview was in progress
  const handleDialogClose = useCallback((open: boolean) => {
    if (!open && isConfigured && interviewStats.totalQuestions > 0) {
      // Calculate and show results before closing
      const result = calculateInterviewResult();
      setInterviewResult(result);
      setShowResultsModal(true);

      // Stop speech
      window.speechSynthesis.cancel();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
    } else if (!open) {
      setIsDialogOpen(false);
      // Immediately stop all speech when closing
      window.speechSynthesis.cancel();
      
      // Reset everything
      resetInterview();
      
      // Reset category filter and search when closing
      setSelectedCategoryFilter(category || null);
      setSearchQuery('');
    } else {
      setIsDialogOpen(open);
    }
  }, [resetInterview, category, isConfigured, interviewStats.totalQuestions, calculateInterviewResult]);

  // Close results modal and then close main dialog
  const handleResultsModalClose = useCallback(() => {
    setShowResultsModal(false);
    setIsDialogOpen(false);
    resetInterview();
    setSelectedCategoryFilter(category || null);
    setSearchQuery('');
  }, [resetInterview, category]);

  const startInitialQuestion = useCallback(async () => {
    if (!user) {
      toast({
        variant: 'default',
        title: '🔐 Login Required',
        description: 'Please login to access interview features.',
      });
      return;
    }
    
    if (!isAiEnabled) {
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
      
      // AI mode logic
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
      
      // For MCQ mode, fetch multiple questions at once (100 questions for full practice set)
      if (questionType === 'mcq') {
        const batchSize = 100; // Fetch 100 questions for comprehensive practice
        const questions: string[] = [];
        let previousQs: string[] = [];
        
        toast({
          title: 'Preparing MCQ Questions',
          description: 'Generating 100 multiple choice questions with answers. This may take a moment...',
        });
        
        for (let i = 0; i < batchSize; i++) {
          try {
            const result = await conductInterview({
              provider,
              apiKey,
              language: selectedLanguage,
              question: '',
              previousQuestions: previousQs,
              questionType,
              category: getSelectedCategory()
            });
            
            // Validate that the question has the correct MCQ format
            if (result.nextQuestion && result.nextQuestion.includes('A)') && result.nextQuestion.includes('Correct Answer:')) {
              questions.push(result.nextQuestion);
              previousQs.push(result.nextQuestion);
            } else {
              console.warn(`Question ${i + 1} has incorrect format, skipping...`);
              // Try again for this slot
              i--;
            }
            
            // Update progress every 10 questions
            if ((i + 1) % 10 === 0) {
              toast({
                title: 'Progress',
                description: `Generated ${i + 1} out of ${batchSize} questions...`,
              });
            }
          } catch (error) {
            console.error(`Error fetching question ${i + 1}:`, error);
            // Continue with next question
          }
        }
        
        if (questions.length === 0) {
          throw new Error('Failed to generate any valid MCQ questions. Please check your AI configuration.');
        }
        
        setQuestionBank(questions);
        setQuestion(questions[0]);
        setPreviousQuestions([questions[0]]);
        setCurrentQuestionIndex(0);
        setIsConfigured(true);
        
        toast({
          title: 'MCQ Ready!',
          description: `Successfully loaded ${questions.length} multiple choice questions!`,
        });
      } else {
        // For other modes, fetch one question at a time
        const result = await conductInterview({
          provider,
          apiKey,
          language: selectedLanguage,
          question: '',
          previousQuestions: [],
          questionType,
          category: getSelectedCategory()
        });
        setQuestion(result.nextQuestion);
        setAnswerHint(result.answerHint);
        setPreviousQuestions([result.nextQuestion]);
        setIsConfigured(true);
        
        // Voice recording will auto-start after question is read aloud
        // (handled in startVoiceConversation's utterance.onend)
      }
    } catch (error) {
      console.error('Failed to start interview:', error);
      
      // Get error details
      const errorMessage = error instanceof Error ? error.message : String(error);
      const provider = localStorage.getItem('ai_provider') || 'AI';

      // Determine error type and provide helpful message
      let errorTitle = 'Interview Failed to Start';
      let errorDescription = 'An unexpected error occurred. Please try again.';
      let shouldResetAI = false;
      let shouldOpenModal = false;

      // API key / authentication errors
      if (errorMessage.includes('401') || errorMessage.includes('403') ||
          errorMessage.toLowerCase().includes('invalid') && errorMessage.toLowerCase().includes('key') ||
          errorMessage.toLowerCase().includes('unauthorized') ||
          errorMessage.toLowerCase().includes('authentication')) {
        errorTitle = `${provider} API Key Invalid`;
        errorDescription = 'Your API key appears to be invalid or expired. Please enter a valid API key.';
        shouldResetAI = true;
        shouldOpenModal = true;
      }
      // Rate limit errors
      else if (errorMessage.includes('429') || errorMessage.toLowerCase().includes('rate limit') ||
               errorMessage.toLowerCase().includes('quota') || errorMessage.toLowerCase().includes('exceeded')) {
        errorTitle = `${provider} Rate Limit Reached`;
        errorDescription = 'You\'ve exceeded the API rate limit. Please wait a moment and try again, or switch to a different AI provider.';
        shouldOpenModal = true;
      }
      // Model not found errors
      else if (errorMessage.includes('404') || errorMessage.toLowerCase().includes('model not found') ||
               errorMessage.toLowerCase().includes('not supported')) {
        errorTitle = `${provider} Model Unavailable`;
        errorDescription = 'The AI model is temporarily unavailable. Please try again later or switch to a different provider.';
        shouldOpenModal = true;
      }
      // Network / connection errors
      else if (errorMessage.toLowerCase().includes('network') || errorMessage.toLowerCase().includes('connection') ||
               errorMessage.toLowerCase().includes('fetch') || errorMessage.toLowerCase().includes('timeout')) {
        errorTitle = 'Connection Failed';
        errorDescription = 'Could not connect to the AI service. Please check your internet connection and try again.';
      }
      // Server errors
      else if (errorMessage.includes('500') || errorMessage.includes('502') || errorMessage.includes('503')) {
        errorTitle = `${provider} Server Error`;
        errorDescription = 'The AI service is experiencing issues. Please try again later or switch to a different provider.';
        shouldOpenModal = true;
      }
      // Unsupported provider
      else if (errorMessage.toLowerCase().includes('unsupported')) {
        errorTitle = 'Unsupported AI Provider';
        errorDescription = errorMessage;
        shouldResetAI = true;
        shouldOpenModal = true;
      }
      // Generic API errors
      else if (errorMessage.includes('API') || errorMessage.includes('Error')) {
        errorTitle = `${provider} Error`;
        errorDescription = errorMessage;
        shouldOpenModal = true;
      }
      // Fallback
      else {
        errorDescription = errorMessage || 'Could not start the interview. Please try again.';
      }

      toast({
        variant: 'destructive',
        title: errorTitle,
        description: errorDescription,
      });

      if (shouldResetAI) {
        setIsAiEnabled(false);
      }
      if (shouldOpenModal) {
        setIsModalOpen(true);
      }
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

  // Read feedback aloud with natural, human-like voice
  const readFeedbackAloud = useCallback((feedbackText: string, simpleAnswerText?: string) => {
    if (!feedbackText || questionType === 'mcq') return; // Don't read aloud for MCQ
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    setIsFeedbackSpeaking(true);
    
    // Analyze feedback sentiment to add human reactions
    const feedbackLower = feedbackText.toLowerCase();
    const isPositive = feedbackLower.includes('good') || feedbackLower.includes('correct') || 
                       feedbackLower.includes('great') || feedbackLower.includes('excellent') ||
                       feedbackLower.includes('right') || feedbackLower.includes('well done') ||
                       feedbackLower.includes('perfect');
    const isNegative = feedbackLower.includes('incorrect') || feedbackLower.includes('wrong') ||
                       feedbackLower.includes('missing') || feedbackLower.includes('not quite') ||
                       feedbackLower.includes('however') || feedbackLower.includes('but');
    
    // Natural human reactions based on answer quality
    let reaction = '';
    if (isPositive) {
      const positiveReactions = ['Wow, ', 'Awesome! ', 'Great! ', 'Excellent! ', 'Nice! ', 'Perfect! ', 'Well done! ', 'Impressive! '];
      reaction = positiveReactions[Math.floor(Math.random() * positiveReactions.length)];
    } else if (isNegative) {
      const negativeReactions = ['Hmm, ', 'Oh, ', 'Uhh, ', 'I see, ', 'Well, ', 'Okay, ', 'Alright, '];
      reaction = negativeReactions[Math.floor(Math.random() * negativeReactions.length)];
    } else {
      const neutralReactions = ['Okay, ', 'Alright, ', 'I see, ', 'Right, ', 'Well, '];
      reaction = neutralReactions[Math.floor(Math.random() * neutralReactions.length)];
    }
    
    // Extract key points and make more conversational
    const sentences = feedbackText.split(/[.!?]/).filter(s => s.trim().length > 0);
    const mainPoint = sentences[0]?.replace(/[*_#]/g, '').trim() || '';
    
    // Make it more conversational - simplify and humanize
    let conversationalFeedback = mainPoint
      .replace(/Your answer /gi, 'you ')
      .replace(/The answer /gi, 'that ')
      .replace(/This demonstrates/gi, 'this shows')
      .replace(/However, /gi, 'but ')
      .replace(/Therefore, /gi, 'so ')
      .trim();
    
    // Add reaction at the beginning
    conversationalFeedback = reaction + conversationalFeedback;
    
    const voices = window.speechSynthesis.getVoices();
    
    // PART 1: Initial feedback (using same voice as question)
    const feedbackUtterance = new SpeechSynthesisUtterance(conversationalFeedback);
    feedbackUtterance.rate = 1.1; // Same as question voice
    feedbackUtterance.pitch = 0.9; // Same as question voice - professional tone
    feedbackUtterance.volume = 1.0;
    
    // Use the same voice preference as question reading
    const selectedVoice = 
      voices.find(voice => voice.name.includes('Google US English Male')) ||
      voices.find(voice => voice.name.includes('Google UK English Male')) ||
      voices.find(voice => voice.name.includes('Daniel')) ||
      voices.find(voice => voice.name.includes('Alex')) ||
      voices.find(voice => voice.name.includes('Male') && voice.lang.startsWith('en')) ||
      voices.find(voice => voice.name.includes('Google') && voice.lang.startsWith('en')) ||
      voices.find(voice => voice.name.includes('Natural') && voice.lang.startsWith('en'));
    
    if (selectedVoice) {
      feedbackUtterance.voice = selectedVoice;
    }
    
    // PART 2: How to answer (if provided)
    if (simpleAnswerText) {
      feedbackUtterance.onend = () => {
        // More casual, human-like transitions
        const transitions = ['Here\'s a better way to put it. ', 'Let me show you how to answer this. ', 'Here\'s what you could say. ', 'A good answer would be. '];
        const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
        
        const howToAnswerUtterance = new SpeechSynthesisUtterance(
          randomTransition + simpleAnswerText.replace(/[*_#]/g, '').trim()
        );
        howToAnswerUtterance.rate = 1.1; // Same as question voice
        howToAnswerUtterance.pitch = 0.9; // Same as question voice
        howToAnswerUtterance.volume = 1.0;
        
        if (selectedVoice) {
          howToAnswerUtterance.voice = selectedVoice;
        }
        
        // PART 3: Prompt to check ideal answer
        howToAnswerUtterance.onend = () => {
          const verifyPhrases = [
            'Take a look at the full answer below.',
            'Check out the detailed answer at the bottom.',
            'You can see the complete answer down there.',
            'There\'s more detail in the answer section below.'
          ];
          const randomVerify = verifyPhrases[Math.floor(Math.random() * verifyPhrases.length)];
          
          const verifyUtterance = new SpeechSynthesisUtterance(randomVerify);
          verifyUtterance.rate = 1.1; // Same as question voice
          verifyUtterance.pitch = 0.9; // Same as question voice
          verifyUtterance.volume = 1.0;
          
          if (selectedVoice) {
            verifyUtterance.voice = selectedVoice;
          }
          
          verifyUtterance.onend = () => {
            setIsFeedbackSpeaking(false);
          };
          
          window.speechSynthesis.speak(verifyUtterance);
        };
        
        window.speechSynthesis.speak(howToAnswerUtterance);
      };
    } else {
      // No simple answer provided, just prompt to check ideal answer
      feedbackUtterance.onend = () => {
        const verifyPhrases = [
          'Take a look at the full answer below.',
          'Check out the detailed answer at the bottom.',
          'You can see the complete answer down there.',
          'There\'s more detail in the answer section below.'
        ];
        const randomVerify = verifyPhrases[Math.floor(Math.random() * verifyPhrases.length)];
        
        const verifyUtterance = new SpeechSynthesisUtterance(randomVerify);
        verifyUtterance.rate = 1.1; // Same as question voice
        verifyUtterance.pitch = 0.9; // Same as question voice
        verifyUtterance.volume = 1.0;
        
        if (selectedVoice) {
          verifyUtterance.voice = selectedVoice;
        }
        
        verifyUtterance.onend = () => {
          setIsFeedbackSpeaking(false);
        };
        
        window.speechSynthesis.speak(verifyUtterance);
      };
    }
    
    // Start by reading the feedback
    window.speechSynthesis.speak(feedbackUtterance);
  }, [questionType]);

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
    
    utterance.onstart = () => {
      setIsQuestionSpeaking(true);
    };
    
    utterance.onend = () => {
      setIsQuestionSpeaking(false);
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
    
    // Don't start recording if question is still being read
    if (isQuestionSpeaking) {
      console.log('Question is still being read, not starting recording');
      return;
    }
    
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
    const nextHint = (window as any).__nextAnswerHint;
    if (nextQ) {
      setQuestion(nextQ);
      setAnswerHint(nextHint || '');
      setPreviousQuestions(prev => [...prev, nextQ]);
      setFeedback('');
      setIdealAnswer('');
      setShowNextButton(false);
      delete (window as any).__nextInterviewQuestion;
      delete (window as any).__nextAnswerHint;
      
      // Voice recording will auto-start after question is read aloud
      // (handled in startVoiceConversation's utterance.onend)
    }
  };

  // Auto-play question when it changes (unified mode)
  useEffect(() => {
    if (question && !isLoading && !showNextButton && questionType !== 'mcq') {
      startVoiceConversation();
    }
  }, [question, isLoading, showNextButton, questionType, startVoiceConversation]);

  // Cleanup speech and recognition on unmount
  useEffect(() => {
    return () => {
      // Cancel all speech synthesis
      window.speechSynthesis.cancel();
      
      // Stop speech recognition if active
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors if already stopped
        }
      }
      
      // Reset speaking states
      setIsQuestionSpeaking(false);
      setIsFeedbackSpeaking(false);
      setIsRecording(false);
    };
  }, []); // Empty dependency array - cleanup only on unmount

  // --- Form Submission Logic ---
  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Combine typed answer and voice transcript
    let combinedAnswer = [userAnswer.trim(), transcript.trim()]
      .filter(Boolean)
      .join('\n\n[Voice Input]: ');
    
    // If answer contains "don't know" but also has code snippets, add a note to evaluate the code
    if (combinedAnswer && (combinedAnswer.toLowerCase().includes("don't know") || combinedAnswer.toLowerCase().includes("dont know"))) {
      // Check if there's code in the answer (look for common code patterns)
      const hasCode = /[{};=]|let |const |var |function |class |=>/.test(combinedAnswer);
      if (hasCode) {
        combinedAnswer = `${combinedAnswer}\n\n[Note: Please evaluate any code snippets provided above, even if the answer includes "I don't know".]`;
      }
    }
    
    if (!combinedAnswer || !isAiEnabled) return;

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
        userAnswer: combinedAnswer,
        previousQuestions: previousQuestions,
        questionType,
        category: getSelectedCategory()
      });
      
      setFeedback(result.feedback);
      setIdealAnswer(result.idealAnswer);
      
      // Analyze feedback to determine answer quality
      const feedbackLower = result.feedback.toLowerCase();
      const isCorrect = feedbackLower.includes('correct') ||
                        feedbackLower.includes('excellent') ||
                        feedbackLower.includes('perfect') ||
                        feedbackLower.includes('great answer') ||
                        feedbackLower.includes('well done') ||
                        feedbackLower.includes('spot on') ||
                        feedbackLower.includes('you got it');
      const isPartial = feedbackLower.includes('partially') ||
                        feedbackLower.includes('close') ||
                        feedbackLower.includes('on the right track') ||
                        feedbackLower.includes('good start') ||
                        feedbackLower.includes('almost') ||
                        feedbackLower.includes('missing some') ||
                        feedbackLower.includes('could include');
      const isIncorrect = feedbackLower.includes('incorrect') ||
                          feedbackLower.includes('wrong') ||
                          feedbackLower.includes('not quite') ||
                          feedbackLower.includes('that\'s not');

      // Update interview stats
      setInterviewStats(prev => ({
        ...prev,
        totalQuestions: prev.totalQuestions + 1,
        correctAnswers: prev.correctAnswers + (isCorrect && !isPartial ? 1 : 0),
        partialAnswers: prev.partialAnswers + (isPartial ? 1 : 0),
        incorrectAnswers: prev.incorrectAnswers + (isIncorrect && !isPartial ? 1 : 0),
      }));

      // Store next question and hint temporarily
      setShowNextButton(true);
      (window as any).__nextInterviewQuestion = result.nextQuestion;
      (window as any).__nextAnswerHint = result.answerHint;
      
      // Read feedback aloud for non-MCQ questions
      if (questionType !== 'mcq' && result.feedback) {
        setTimeout(() => {
          readFeedbackAloud(result.feedback, result.simpleAnswer);
        }, 500); // Small delay after receiving feedback
      }
      
      // Clear both inputs
      setUserAnswer('');
      setTranscript('');
    } catch (error) {
      console.error('Interview AI error:', error);
      
      // Get error details
      const errorMessage = error instanceof Error ? error.message : String(error);
      const provider = localStorage.getItem('ai_provider') || 'AI';

      // Determine error type and provide helpful message
      let errorTitle = 'Failed to Get Feedback';
      let errorDescription = 'An unexpected error occurred. Please try again.';
      let shouldOpenModal = false;

      // API key / authentication errors
      if (errorMessage.includes('401') || errorMessage.includes('403') ||
          errorMessage.toLowerCase().includes('invalid') && errorMessage.toLowerCase().includes('key') ||
          errorMessage.toLowerCase().includes('unauthorized')) {
        errorTitle = `${provider} API Key Invalid`;
        errorDescription = 'Your API key appears to be invalid or expired. Please enter a valid API key.';
        shouldOpenModal = true;
      }
      // Rate limit errors
      else if (errorMessage.includes('429') || errorMessage.toLowerCase().includes('rate limit') ||
               errorMessage.toLowerCase().includes('quota')) {
        errorTitle = `${provider} Rate Limit Reached`;
        errorDescription = 'You\'ve exceeded the API rate limit. Please wait a moment and try again.';
      }
      // Network errors
      else if (errorMessage.toLowerCase().includes('network') || errorMessage.toLowerCase().includes('connection') ||
               errorMessage.toLowerCase().includes('fetch')) {
        errorTitle = 'Connection Failed';
        errorDescription = 'Could not connect to the AI service. Please check your internet connection.';
      }
      // Server errors
      else if (errorMessage.includes('500') || errorMessage.includes('502') || errorMessage.includes('503')) {
        errorTitle = `${provider} Server Error`;
        errorDescription = 'The AI service is experiencing issues. Please try again later.';
      }
      // Generic API errors
      else if (errorMessage.includes('API') || errorMessage.includes('Error')) {
        errorTitle = `${provider} Error`;
        errorDescription = errorMessage;
      }
      // Fallback
      else {
        errorDescription = errorMessage || 'Could not get feedback from the AI. Please try again.';
      }

      toast({
        variant: 'destructive',
        title: errorTitle,
        description: errorDescription,
      });

      if (shouldOpenModal) {
        setIsModalOpen(true);
      }
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
                Choose from 3 reliable AI providers and enter your API key to unlock AI-powered interviews and content
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
        <Card className="h-full w-full flex flex-col items-center justify-center p-8 overflow-visible relative z-0">
          <div className="w-full max-w-2xl space-y-8 relative">
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

              {/* Dropdown with filtered results */}
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger id="language-select" className="w-full text-lg h-12 border-2">
                  <SelectValue placeholder="Choose a language or topic" />
                </SelectTrigger>
                <SelectContent 
                  className="max-h-[400px] !z-[9999]" 
                  position="popper" 
                  sideOffset={5}
                  align="start"
                  avoidCollisions={true}
                >
                  {/* Search Filter inside dropdown */}
                  <div className="sticky top-0 z-20 bg-background border-b p-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                      <Input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 pr-7 h-8 text-sm"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        autoFocus
                      />
                      {searchQuery && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchQuery('');
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    {searchQuery && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {filteredTopics.length} result{filteredTopics.length !== 1 ? 's' : ''}
                      </div>
                    )}
                  </div>

                  {/* Topics List */}
                  <div className="max-h-[300px] overflow-y-auto">
                    {Object.keys(groupedTopics).length === 0 ? (
                      <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                        {searchQuery ? `No topics found for "${searchQuery}"` : 'No topics found'}
                      </div>
                    ) : (
                      Object.entries(groupedTopics).map(([category, topics], index) => (
                        <React.Fragment key={category}>
                          {index > 0 && <div className="my-1" />}
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0 z-10">
                            {category}
                          </div>
                          {topics.map((topic) => (
                            <SelectItem key={topic.value} value={topic.value}>
                              {topic.label}
                            </SelectItem>
                          ))}
                        </React.Fragment>
                      ))
                    )}
                  </div>
                </SelectContent>
              </Select>
            </div>

            {/* Question Type Selection */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Question Type</Label>
              <RadioGroup value={questionType} onValueChange={(value: any) => setQuestionType(value)} className="space-y-3">
                {/* Theory - Not shown for Aptitude */}
                {selectedCategoryFilter !== 'aptitude' && (
                  <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <RadioGroupItem value="theory" id="theory" />
                    <Label htmlFor="theory" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-base">Theory Questions</div>
                      <div className="text-sm text-muted-foreground">Conceptual questions about programming fundamentals</div>
                    </Label>
                  </div>
                )}

                
                {/* MCQ - Only for Aptitude */}
                {selectedCategoryFilter === 'aptitude' && (
                  <div className="flex items-center space-x-3 p-4 border-2 border-emerald-300 dark:border-emerald-700 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 cursor-pointer transition-colors">
                    <RadioGroupItem value="mcq" id="mcq" />
                    <Label htmlFor="mcq" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-base">Multiple Choice Questions (MCQ)</div>
                      <div className="text-sm text-muted-foreground">Standard format for aptitude tests - select from 4 options</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-medium">✓ Instant feedback on each answer</span>
                      </div>
                    </Label>
                  </div>
                )}

              </RadioGroup>
            </div>

            {/* Start Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                {!user && (
                  <TooltipContent side="bottom" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
                    <p className="font-medium">🔐 Please login to use AI features</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </Card>
      );
    }
    
    // Main interview UI after configuration
    return (
      <div className="h-full w-full flex flex-col gap-4 p-4 overflow-hidden">
      {/* Live Interview Stats Bar */}
      {interviewStats.totalQuestions > 0 && (
        <div className="flex-shrink-0 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 rounded-xl p-3 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Progress</div>
                <div className="font-semibold text-sm">{interviewStats.totalQuestions} Questions</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">{interviewStats.correctAnswers} Correct</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">{interviewStats.partialAnswers} Partial</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-xs font-semibold text-red-700 dark:text-red-400">{interviewStats.incorrectAnswers} Wrong</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Score</div>
                <div className="font-bold text-sm">
                  {interviewStats.totalQuestions > 0
                    ? Math.round(((interviewStats.correctAnswers + interviewStats.partialAnswers * 0.5) / interviewStats.totalQuestions) * 100)
                    : 0}%
                </div>
              </div>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs",
                interviewStats.totalQuestions > 0 && ((interviewStats.correctAnswers + interviewStats.partialAnswers * 0.5) / interviewStats.totalQuestions) >= 0.7
                  ? "bg-gradient-to-br from-emerald-500 to-green-600"
                  : interviewStats.totalQuestions > 0 && ((interviewStats.correctAnswers + interviewStats.partialAnswers * 0.5) / interviewStats.totalQuestions) >= 0.5
                  ? "bg-gradient-to-br from-amber-500 to-orange-600"
                  : "bg-gradient-to-br from-red-500 to-rose-600"
              )}>
                {interviewStats.totalQuestions > 0
                  ? Math.round(((interviewStats.correctAnswers + interviewStats.partialAnswers * 0.5) / interviewStats.totalQuestions) * 100)
                  : 0}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interview Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden min-h-0">
        {/* Left Panel: Questions & Answers */}
        <div className="flex-1 h-full min-h-0 overflow-auto">
          {questionType === 'mcq' ? (
              // MCQ MODE UI - Full Width Centered
              <div className="h-full flex items-center justify-center p-8">
                {question && (
                  <Card className="w-full max-w-3xl border-2 border-emerald-200 dark:border-emerald-800 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-b-2 border-emerald-100 dark:border-emerald-900">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
                      <RadioGroup value={selectedOption} onValueChange={(value) => {
                        setSelectedOption(value);
                        // Auto-check answer when option is selected
                        const correctAnswer = question.match(/Correct Answer:\s*([A-D])/i)?.[1];
                        const isCorrect = value === correctAnswer;
                        setIsAnswerCorrect(isCorrect);
                        setShowNextButton(true);

                        // Track MCQ answer in interview stats
                        setInterviewStats(prev => ({
                          ...prev,
                          totalQuestions: prev.totalQuestions + 1,
                          correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
                          incorrectAnswers: prev.incorrectAnswers + (isCorrect ? 0 : 1),
                        }));
                      }} className="space-y-4">
                        {(() => {
                          const parsedOptions = ['A', 'B', 'C', 'D'].map((option) => {
                            const optionMatch = question.match(new RegExp(`${option}[\\)\\.:]\s*(.+?)(?=\\n[A-D][\\)\\.:>]|\\nCorrect|$)`, 'si'));
                            return {
                              letter: option,
                              text: optionMatch ? optionMatch[1].trim() : ''
                            };
                          });
                          
                          const hasValidOptions = parsedOptions.some(opt => opt.text.length > 0);
                          
                          if (!hasValidOptions) {
                            return (
                              <div className="p-6 border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 rounded-xl">
                                <p className="text-amber-800 dark:text-amber-200 font-semibold mb-2">⚠️ Unable to parse options</p>
                                <p className="text-sm text-amber-600 dark:text-amber-400 mb-4">The question format may not be correct.</p>
                              </div>
                            );
                          }
                          
                          return parsedOptions.map(({ letter: option, text: optionText }) => {
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
                                isSelected && !showResult && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
                                !isSelected && !showResult && "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10",
                                showResult && isCorrectOption && "border-green-500 bg-green-50 dark:bg-green-950/20",
                                showResult && isSelected && !isCorrectOption && "border-red-500 bg-red-50 dark:bg-red-950/20",
                                showResult && !isSelected && !isCorrectOption && "opacity-50"
                              )}
                            >
                              <RadioGroupItem value={option} id={option} disabled={showResult} className="mt-1" />
                              <Label htmlFor={option} className="flex-1 cursor-pointer text-base leading-relaxed">
                                <span className="text-foreground font-medium">{optionText}</span>
                                {showResult && isCorrectOption && (
                                  <span className="ml-3 inline-flex items-center text-green-600 dark:text-green-400 font-semibold">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    Correct!
                                  </span>
                                )}
                                {showResult && isSelected && !isCorrectOption && (
                                  <span className="ml-3 inline-flex items-center text-red-600 dark:text-red-400 font-semibold">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                    </svg>
                                    Incorrect
                                  </span>
                                )}
                              </Label>
                            </div>
                          );
                          });
                        })()}
                      </RadioGroup>

                      {/* Result Display */}
                      {isAnswerCorrect !== null && (
                        <div className={cn(
                          "p-6 rounded-xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-500",
                          isAnswerCorrect 
                            ? "bg-green-50 dark:bg-green-950/20 border-green-500" 
                            : "bg-red-50 dark:bg-red-950/20 border-red-500"
                        )}>
                          <div className="flex items-center gap-3 mb-3">
                            {isAnswerCorrect ? (
                              <>
                                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-2xl font-bold text-green-700 dark:text-green-400">Correct! 🎉</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-2xl font-bold text-red-700 dark:text-red-400">Incorrect</span>
                              </>
                            )}
                          </div>
                          <p className="text-base text-muted-foreground">
                            {isAnswerCorrect 
                              ? "Great job! You selected the right answer." 
                              : `The correct answer is ${question.match(/Correct Answer:\s*([A-D])/i)?.[1]}.`
                            }
                          </p>
                        </div>
                      )}

                      {/* Next Question Button */}
                      {showNextButton && (
                        <Button
                          onClick={async () => {
                            const nextIndex = currentQuestionIndex + 1;
                            
                            if (nextIndex < questionBank.length) {
                              setQuestion(questionBank[nextIndex]);
                              setPreviousQuestions(prev => [...prev, questionBank[nextIndex]]);
                              setCurrentQuestionIndex(nextIndex);
                              setShowNextButton(false);
                              setSelectedOption('');
                              setIsAnswerCorrect(null);
                            } else {
                              // Need to fetch more questions
                              setIsLoading(true);
                              try {
                                const apiKey = localStorage.getItem('ai_api_key');
                                const provider = localStorage.getItem('ai_provider') as AIProvider;
                                if (!apiKey || !provider) throw new Error('API not configured');
                                
                                toast({
                                  title: 'Loading More Questions',
                                  description: 'Generating 50 more MCQ questions...',
                                });
                                
                                const batchSize = 50; // Fetch 50 more questions
                                const newQuestions: string[] = [];
                                let previousQs = [...previousQuestions];
                                
                                for (let i = 0; i < batchSize; i++) {
                                  try {
                                    const result = await conductInterview({
                                      provider,
                                      apiKey,
                                      language: selectedLanguage,
                                      question: '',
                                      previousQuestions: previousQs,
                                      questionType,
                                      category: getSelectedCategory()
                                    });
                                    
                                    // Validate MCQ format
                                    if (result.nextQuestion && result.nextQuestion.includes('A)') && result.nextQuestion.includes('Correct Answer:')) {
                                      newQuestions.push(result.nextQuestion);
                                      previousQs.push(result.nextQuestion);
                                    } else {
                                      console.warn(`Question ${i + 1} has incorrect format, retrying...`);
                                      i--; // Retry this slot
                                    }
                                    
                                    // Progress update every 10 questions
                                    if ((i + 1) % 10 === 0) {
                                      toast({
                                        title: 'Progress',
                                        description: `Generated ${i + 1} out of ${batchSize} questions...`,
                                      });
                                    }
                                  } catch (err) {
                                    console.error(`Error fetching question ${i + 1}:`, err);
                                  }
                                }
                                
                                if (newQuestions.length === 0) {
                                  throw new Error('Failed to generate valid MCQ questions');
                                }
                                
                                setQuestionBank(newQuestions);
                                setQuestion(newQuestions[0]);
                                setPreviousQuestions(prev => [...prev, newQuestions[0]]);
                                setCurrentQuestionIndex(0);
                                setShowNextButton(false);
                                setSelectedOption('');
                                setIsAnswerCorrect(null);
                                
                                toast({
                                  title: 'Success!',
                                  description: `Loaded ${newQuestions.length} more questions!`,
                                });
                              } catch (error) {
                                console.error('Failed to fetch next questions:', error);
                                const errorMessage = error instanceof Error ? error.message : '';
                                if (errorMessage.includes('API') || errorMessage.includes('key') || errorMessage.includes('auth') || errorMessage.includes('401') || errorMessage.includes('403')) {
                                  toast({
                                    variant: 'destructive',
                                    title: 'AI Connection Failed',
                                    description: 'Your AI key may be invalid or expired. Please update your API key.',
                                  });
                                  setIsModalOpen(true);
                                } else {
                                  toast({
                                    variant: 'destructive',
                                    title: 'Error',
                                    description: 'Could not fetch more questions. Please try again.',
                                  });
                                }
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
            <form onSubmit={handleSubmitAnswer} className="h-full flex flex-row gap-6">
              {/* Left Side - Question */}
              {question && (
                <Card className='flex-1 h-full flex flex-col border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-slate-900 dark:via-blue-950/20 dark:to-cyan-950/20 backdrop-blur-sm'>
                  <CardHeader className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 dark:from-blue-600/20 dark:via-cyan-600/20 dark:to-blue-600/20 flex flex-col border-b border-blue-200/50 dark:border-blue-700/50 flex-shrink-0 backdrop-blur-md">
                    <div className="flex items-center gap-4 flex-1 w-full">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0 relative",
                        isQuestionSpeaking && "animate-pulse"
                      )}>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm"></div>
                        <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                          {isQuestionSpeaking ? '🎙️ Reading Question Aloud' : 'Interview Question'}
                        </CardTitle>
                        <p className="text-xs text-blue-600/60 dark:text-blue-400/60 mt-0.5">Listen carefully and provide your best answer</p>
                      </div>
                    </div>
                    {isQuestionSpeaking && (
                      <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mt-3 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-lg border border-blue-200/50 dark:border-blue-700/50 animate-pulse">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <span className="font-medium">AI is reading the question aloud</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 overflow-auto p-6">
                    {/* Show question with innovative animation when being read */}
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
                          background: rgb(59 130 246 / 0.2);
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
                      <ReactMarkdown
                        components={{
                          code: ({ node, inline, className, children, ...props }: any) => {
                            if (inline) {
                              return <code className={className} {...props}>{children}</code>;
                            }
                            return (
                              <>
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-500/10 to-transparent flex items-start justify-center pt-3">
                                  <Code className="w-4 h-4 text-blue-500" />
                                </div>
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              </>
                            );
                          }
                        }}
                      >
                        {question}
                      </ReactMarkdown>
                    </div>
                    
                    {/* Answer Hint - Always show at top */}
                    {answerHint && (
                      <div className="flex gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg border-2 border-emerald-200 dark:border-emerald-800 mt-4">
                        <Wand2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
                            💡 How to Answer Simply
                          </p>
                          <p className="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                            {answerHint}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Smooth Gradient Orb Animation when reading */}
                    {isQuestionSpeaking && (
                      <div className="mt-8 flex flex-col items-center justify-center py-12">
                        {/* Add smooth breathing animation */}
                        <style>{`
                          @keyframes breathe {
                            0%, 100% { transform: scale(1); opacity: 0.9; }
                            50% { transform: scale(1.05); opacity: 1; }
                          }
                          @keyframes breathe-slow {
                            0%, 100% { transform: scale(1); opacity: 0.6; }
                            50% { transform: scale(1.1); opacity: 0.8; }
                          }
                          @keyframes float-gentle {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                          }
                        `}</style>
                        
                        {/* Smooth Gradient Orb */}
                        <div className="relative w-80 h-80 flex items-center justify-center" style={{animation: 'float-gentle 4s ease-in-out infinite'}}>
                          {/* Outermost glow - very soft */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-200/20 via-blue-300/30 to-blue-500/40 blur-3xl" style={{animation: 'breathe-slow 3s ease-in-out infinite'}}></div>
                          
                          {/* Second layer - medium glow */}
                          <div className="absolute inset-8 rounded-full bg-gradient-to-b from-cyan-100/40 via-blue-300/50 to-blue-500/60 blur-2xl" style={{animation: 'breathe 2.5s ease-in-out infinite', animationDelay: '0.3s'}}></div>
                          
                          {/* Main orb - solid gradient */}
                          <div className="absolute inset-16 rounded-full bg-gradient-to-b from-cyan-100 via-blue-400 to-blue-600 shadow-2xl" style={{animation: 'breathe 2s ease-in-out infinite'}}></div>
                          
                          {/* Inner bright core - pulsing */}
                          <div className="absolute inset-24 rounded-full bg-gradient-to-b from-white/70 via-cyan-100/50 to-blue-200/30 blur-lg" style={{animation: 'breathe 1.8s ease-in-out infinite', animationDelay: '0.2s'}}></div>
                          
                          {/* Top bright spot - focal point */}
                          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-white/50 blur-2xl" style={{animation: 'breathe-slow 2.2s ease-in-out infinite'}}></div>
                          
                          {/* Subtle ring accent - adds motion */}
                          <div className="absolute inset-28 rounded-full border-2 border-white/20 blur-sm" style={{animation: 'breathe 2.3s ease-in-out infinite', animationDelay: '0.5s'}}></div>
                          
                          {/* Inner glow spots for organic feel */}
                          <div className="absolute top-32 right-32 w-16 h-16 rounded-full bg-white/30 blur-xl" style={{animation: 'breathe 1.5s ease-in-out infinite', animationDelay: '0.8s'}}></div>
                          <div className="absolute bottom-36 left-36 w-12 h-12 rounded-full bg-cyan-200/40 blur-lg" style={{animation: 'breathe-slow 2.8s ease-in-out infinite', animationDelay: '1s'}}></div>
                        </div>
                        
                        <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mt-6 animate-pulse">
                          🎙️ AI is reading the question aloud
                        </p>
                        <p className="text-sm text-muted-foreground text-center max-w-md mt-2">
                          Recording will start automatically once complete
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            
              {/* Right Side - Answer (Type + Voice) */}
            <Card className="flex-1 h-full flex flex-col border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 dark:from-slate-900 dark:via-emerald-950/20 dark:to-teal-950/20 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 dark:from-emerald-600/20 dark:via-teal-600/20 dark:to-emerald-600/20 border-b border-emerald-200/50 dark:border-emerald-700/50 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 flex items-center justify-center shadow-lg relative",
                        isRecording && "animate-pulse"
                      )}>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm"></div>
                        <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                          {isQuestionSpeaking ? '👂 Listen to Question' : isRecording ? '🎤 Recording Your Answer' : 'Your Answer'}
                        </CardTitle>
                        <p className="text-xs text-emerald-600/60 dark:text-emerald-400/60 mt-0.5">
                          {isQuestionSpeaking ? 'Please wait while question is being read' : isRecording ? 'Speak clearly into your microphone' : 'Type or use voice input to respond'}
                        </p>
                      </div>
                    </div>
                    {isQuestionSpeaking ? (
                      <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mt-3 px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 rounded-lg border border-blue-200/50 dark:border-blue-700/50 animate-pulse">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <span className="font-medium">AI is reading the question</span>
                      </div>
                    ) : !isRecording ? (
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-3 px-4 py-2 bg-slate-100/50 dark:bg-slate-800/30 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-medium">Type</span>
                        </div>
                        <span className="text-slate-400">or</span>
                        <div className="flex items-center gap-2">
                          <Mic className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <span className="font-medium">Voice</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 mt-3 px-4 py-2 bg-red-100/50 dark:bg-red-900/30 rounded-lg border border-red-200/50 dark:border-red-700/50 animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400 animate-pulse"></div>
                        <span className="font-semibold">🔴 Recording in progress</span>
                      </div>
                    )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 p-4">
                    {/* Voice Recording Animation */}
                    {isRecording && (
                      <div className="flex-1 flex flex-col items-center justify-center py-8">
                        {/* Active Recording Orb - Solid Cyan/Blue Glow */}
                        <div className="relative w-48 h-48 mx-auto mb-6">
                          {/* Outer glow */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 opacity-30 blur-3xl animate-pulse" style={{animationDuration: '2s'}}></div>
                          {/* Main solid orb */}
                          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-cyan-500 animate-pulse" style={{animationDuration: '1.5s'}}></div>
                          {/* Inner bright layer */}
                          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-200 via-blue-300 to-cyan-400 blur-sm"></div>
                          {/* Center highlight */}
                          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-white to-cyan-100 opacity-60"></div>
                        </div>
                        
                        {/* Live Transcript */}
                        {transcript && (
                          <div className="w-full max-w-2xl p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                            <p className="text-sm text-muted-foreground mb-2">Live Transcript:</p>
                            <p className="text-lg">{transcript}</p>
                          </div>
                        )}
                        
                        <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-4 animate-pulse">Recording...</p>
                      </div>
                    )}
                    
                    {/* Show waiting message when question is being read */}
                    {isQuestionSpeaking ? (
                      <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
                        <div className="relative w-32 h-32 mb-4">
                          {/* Animated breathing orb without icon */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-200/30 via-blue-400/40 to-blue-600/50 blur-2xl animate-pulse" style={{animationDuration: '2s'}}></div>
                          <div className="absolute inset-2 rounded-full bg-gradient-to-b from-cyan-100 via-blue-400 to-blue-600 shadow-xl" style={{animation: 'breathe 2s ease-in-out infinite'}}></div>
                          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-white/50 via-cyan-50/30 to-transparent blur-md"></div>
                        </div>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Question Being Read...</p>
                        <p className="text-sm text-muted-foreground max-w-sm">Recording will start automatically after the question is read. Please listen carefully.</p>
                      </div>
                    ) : !isRecording && (
                      <>
                        <Textarea
                            value={userAnswer}
                            onChange={e => setUserAnswer(e.target.value)}
                            placeholder="Type your answer here..."
                            className="flex-1 text-base resize-none border-2 focus:border-emerald-400 dark:focus:border-emerald-600 rounded-lg"
                            disabled={isLoading || showNextButton || isQuestionSpeaking}
                        />
                        
                        {/* Hint to use voice if no input yet */}
                        {!userAnswer && !transcript && !isLoading && !showNextButton && (
                          <div className="text-center py-4 text-sm text-muted-foreground">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Mic className="h-4 w-4 text-purple-500" />
                              <span>Tip: Voice recording will start automatically after question is read</span>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    
                    {/* Voice Transcript Display - Show after recording stops and not reading question */}
                    {!isRecording && !isQuestionSpeaking && transcript && (
                      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Mic className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-semibold text-purple-600">Voice Transcript:</span>
                        </div>
                        <p className="text-sm text-foreground">{transcript}</p>
                      </div>
                    )}
                    
                    {/* Action Buttons - Hide when question is being read */}
                    {!isQuestionSpeaking && (
                    <div className="flex items-center justify-between gap-3">
                      {/* Voice Recording Button */}
                      {!isRecording ? (
                        <Button
                          type="button"
                          onClick={startVoiceRecording}
                          disabled={isLoading || showNextButton || isQuestionSpeaking}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <Mic className="mr-2 h-4 w-4" />
                          Start Voice
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={stopVoiceRecording}
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 animate-pulse shadow-lg"
                        >
                          <StopCircle className="mr-2 h-5 w-5" />
                          Stop Recording
                        </Button>
                      )}
                      
                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        disabled={isLoading || isQuestionSpeaking || (!userAnswer.trim() && !transcript.trim())}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md"
                      >
                          {isLoading ? (
                              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
                          ) : (
                              <><Send className="mr-2 h-4 w-4"/> Submit Answer</>
                          )}
                      </Button>
                    </div>
                    )}
                    
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
          )}
        </div>

        {/* Right Panel: Feedback & Ideal Answer */}
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
                            <div className={cn(
                              "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500",
                              isFeedbackSpeaking && "animate-pulse"
                            )}></div>
                            <div className="pl-6">
                              <div className="flex flex-col gap-2 mb-3">
                                <div className="flex items-center gap-2">
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm",
                                    isFeedbackSpeaking && "animate-pulse"
                                  )}>
                                    <Sparkles className="w-4 h-4 text-white" />
                                  </div>
                                  <h3 className='font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                                    {isFeedbackSpeaking ? 'Reading Feedback Aloud...' : 'Feedback on Your Answer'}
                                  </h3>
                                </div>
                                {isFeedbackSpeaking && (
                                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 animate-pulse">
                                    <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></div>
                                    <span className="font-semibold">AI is reading your feedback - Listen carefully</span>
                                  </div>
                                )}
                              </div>
                              {isFeedbackSpeaking && (
                                <div className="mb-4 flex items-center justify-center py-6">
                                  {/* Smooth Gradient Orb - Emerald/Teal Style */}
                                  <div className="relative w-32 h-32">
                                    {/* Outer glow layers */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-200 via-teal-300 to-emerald-400 opacity-30 blur-2xl animate-pulse" style={{animationDuration: '2s'}}></div>
                                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-300 via-teal-400 to-emerald-500 opacity-40 blur-xl animate-pulse" style={{animationDuration: '1.8s', animationDelay: '0.2s'}}></div>
                                    
                                    {/* Main orb with smooth gradient */}
                                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-teal-200 via-emerald-400 to-teal-600 opacity-90 animate-pulse shadow-xl" style={{animationDuration: '1.5s'}}></div>
                                    
                                    {/* Inner bright highlight */}
                                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white via-emerald-100 to-teal-200 opacity-60 blur-md"></div>
                                    
                                    {/* Center white glow */}
                                    <div className="absolute inset-12 rounded-full bg-white opacity-40 blur-sm animate-pulse" style={{animationDuration: '1.2s'}}></div>
                                    
                                    {/* Sparkles icon in center */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <Sparkles className="w-10 h-10 text-white drop-shadow-lg animate-pulse" style={{animationDuration: '1.5s'}} />
                                    </div>
                                  </div>
                                </div>
                              )}
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
      </div>
    </div>
    );
  };

  // Interview Results Modal Component
  const InterviewResultsModal = () => {
    const { totalQuestions, correctAnswers, partialAnswers, incorrectAnswers, skippedQuestions } = interviewStats;
    const score = correctAnswers + (partialAnswers * 0.5);
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    const getResultConfig = () => {
      switch (interviewResult) {
        case 'selected':
          return {
            title: '🎉 Congratulations! You\'re Selected!',
            subtitle: 'Outstanding performance! You demonstrated excellent knowledge.',
            bgGradient: 'from-emerald-500 to-green-600',
            borderColor: 'border-emerald-500',
            bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
            icon: (
              <svg className="w-20 h-20 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            ),
            message: 'You have successfully passed this interview round. Your answers showed strong understanding of the concepts.',
          };
        case 'needs-improvement':
          return {
            title: '📚 Keep Practicing!',
            subtitle: 'You\'re on the right track but need more preparation.',
            bgGradient: 'from-amber-500 to-orange-600',
            borderColor: 'border-amber-500',
            bgColor: 'bg-amber-50 dark:bg-amber-950/30',
            icon: (
              <svg className="w-20 h-20 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            ),
            message: 'Your performance shows potential, but you need to strengthen your fundamentals. Review the topics where you struggled.',
          };
        case 'not-selected':
        default:
          return {
            title: '💪 Not Selected This Time',
            subtitle: 'Don\'t give up! Every expert was once a beginner.',
            bgGradient: 'from-red-500 to-rose-600',
            borderColor: 'border-red-500',
            bgColor: 'bg-red-50 dark:bg-red-950/30',
            icon: (
              <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
            ),
            message: 'You need more preparation before your next interview. Focus on understanding core concepts and practice regularly.',
          };
      }
    };

    const config = getResultConfig();

    return (
      <Dialog open={showResultsModal} onOpenChange={(open) => !open && handleResultsModalClose()}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Interview Results</DialogTitle>
          </VisuallyHidden>

          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${config.bgGradient} p-6 text-white text-center`}>
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                {config.icon}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">{config.title}</h2>
            <p className="text-white/90 text-sm">{config.subtitle}</p>
          </div>

          {/* Stats Section */}
          <div className="p-6 space-y-6">
            {/* Score Circle */}
            <div className="flex justify-center">
              <div className={`relative w-32 h-32 rounded-full border-8 ${config.borderColor} ${config.bgColor} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-3xl font-bold">{percentage}%</div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                <div className="text-2xl font-bold text-emerald-600">{correctAnswers}</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400">Correct</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <div className="text-2xl font-bold text-amber-600">{partialAnswers}</div>
                <div className="text-xs text-amber-700 dark:text-amber-400">Partial</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <div className="text-2xl font-bold text-red-600">{incorrectAnswers}</div>
                <div className="text-xs text-red-700 dark:text-red-400">Incorrect</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">{totalQuestions}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Total</div>
              </div>
            </div>

            {/* Message */}
            <div className={`p-4 rounded-lg ${config.bgColor} border ${config.borderColor}`}>
              <p className="text-sm text-center">{config.message}</p>
            </div>

            {/* Topic & Category */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline">{selectedLanguage}</Badge>
              <span>•</span>
              <Badge variant="outline">{questionType === 'mcq' ? 'MCQ' : questionType === 'coding' ? 'Coding' : 'Theory'}</Badge>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleResultsModalClose}
              >
                Close
              </Button>
              <Button
                className={`flex-1 bg-gradient-to-r ${config.bgGradient} text-white hover:opacity-90`}
                onClick={() => {
                  setShowResultsModal(false);
                  resetInterview();
                  // Keep dialog open to start new interview
                }}
              >
                Try Again
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  // If children provided, wrap in Dialog (for dashboard usage)
  if (children) {
    return (
      <>
        <InterviewResultsModal />
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
      </>
    );
  }

  // Otherwise render directly (for page usage)
  return (
    <>
      <InterviewResultsModal />
      {renderContent()}
    </>
  );
};

export default InterviewSimulator;
