'use client';

import type { Language, Topic } from '@/data/languages';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Sparkles, BookmarkIcon } from 'lucide-react';
import React from 'react';
import { VideoNotesDrawer } from '@/components/video-notes/video-notes-drawer';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useJava } from '@/app/languages/java/java-context';
import { useSpring } from '@/app/languages/spring/spring-context';
import { useSpringBoot } from '@/app/languages/spring-boot/spring-boot-context';
import { useJavascript } from '@/app/languages/javascript/javascript-context';
import { useReact } from '@/app/languages/react/react-context';
import { useHtml } from '@/app/languages/html/html-context';
import { useCss } from '@/app/languages/css/css-context';
import { useScss } from '@/app/languages/scss/scss-context';
import { useDsa } from '@/app/languages/dsa/dsa-context';
import { useRxjs } from '@/app/languages/rxjs/rxjs-context';
import { usePlaywright } from '@/app/languages/playwright/playwright-context';
import { useNextjsContext } from '@/app/languages/nextjs/nextjs-context';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { AiSimplification } from './ai-simplification';
import AIProviderModal from '../dashboard/GeminiKeyModal';
import { AIProvider } from '@/types/ai-providers';
import { conductInterview } from '@/ai/flows/interview-flow';

function useLanguageContext(language: Language) {
    switch(language.slug) {
        case 'java': return useJava();
        case 'spring': return useSpring();
        case 'spring-boot': return useSpringBoot();
        case 'javascript': return useJavascript();
        case 'react': return useReact();
        case 'html': return useHtml();
        case 'css': return useCss();
        case 'scss': return useScss();
        case 'dsa': return useDsa();
        case 'rxjs': return useRxjs();
        case 'playwright': return usePlaywright();
        case 'nextjs': return useNextjsContext();
        default: return { completedTopics: new Set(), handleToggleComplete: () => {}, isProgressLoading: true };
    }
}

export function GenericContentDisplay({ 
  topic, 
  language, 
  children
}: { 
  topic: Topic, 
  language: Language, 
  children?: React.ReactNode
}) {
  const [question, setQuestion] = React.useState('');
  const [isAsking, setIsAsking] = React.useState(false);
  const [qaResult, setQaResult] = React.useState<{ answer: string } | null>(null);
  const [isAiEnabled, setIsAiEnabled] = React.useState(false);
  const [showAiKeyModal, setShowAiKeyModal] = React.useState(false);
  const [showVideoNotes, setShowVideoNotes] = React.useState(false);
  const [videoNotesCount, setVideoNotesCount] = React.useState(0);

  // Load video notes count for this language
  const loadVideoNotesCount = React.useCallback(() => {
    const STORAGE_KEY = 'video_notes';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const allNotes = JSON.parse(stored);
        const filteredNotes = allNotes.filter((note: any) => note.language === language.slug);
        const count = filteredNotes.length;
        setVideoNotesCount(count);
      } catch (error) {
        setVideoNotesCount(0);
      }
    } else {
      setVideoNotesCount(0);
    }
  }, [language.slug]);

  React.useEffect(() => {
    loadVideoNotesCount();
  }, [loadVideoNotesCount]);

  // Refresh count when drawer closes
  const handleDrawerChange = (open: boolean) => {
    setShowVideoNotes(open);
    if (!open) {
      loadVideoNotesCount();
    }
  };
  
  const { completedTopics: rawCompletedTopics, handleToggleComplete } = useLanguageContext(language);
  
  // Ensure completedTopics is always a Set (defensive programming)
  const completedTopics = React.useMemo(() => {
    if (rawCompletedTopics instanceof Set) {
      return rawCompletedTopics;
    }
    if (Array.isArray(rawCompletedTopics)) {
      console.warn('completedTopics was an array in generic-content-display, converting to Set');
      return new Set(rawCompletedTopics);
    }
    return new Set<string>();
  }, [rawCompletedTopics]);
  
  const { user } = useUser();
  const isUserAuthenticated = user && !user.isAnonymous;
  
  const { toast } = useToast();

  // Check if AI key is available
  React.useEffect(() => {
    const apiKey = localStorage.getItem('ai_api_key');
    const provider = localStorage.getItem('ai_provider');
    setIsAiEnabled(!!(apiKey && provider));
  }, []);

  React.useEffect(() => {
    setQaResult(null);
    setQuestion('');
  }, [topic]);

  const handleAskQuestionAction = async () => {
    if (!question.trim()) return;
    
    // Check AI availability before making request
    if (!isAiEnabled) {
      toast({
        variant: 'destructive',
        title: 'AI Not Configured',
        description: 'Please set up your AI provider to use this feature.',
      });
      setShowAiKeyModal(true);
      return;
    }
    
    setIsAsking(true);
    setQaResult(null);
    try {
      // Get API configuration from localStorage
      const apiKey = localStorage.getItem('ai_api_key');
      const provider = localStorage.getItem('ai_provider') as AIProvider;
      
      if (!apiKey || !provider) {
        throw new Error('API configuration not found');
      }
      
      // Create a simple, focused prompt for clear answers
      const structuredPrompt = `You are a helpful programming tutor. Answer this question clearly and simply.

**Question:** ${question}

**Context:** ${topic.explanation}

**Format your answer like this:**

## Quick Answer
[Direct 1-2 sentence answer]

## Explanation
[Explain clearly in simple terms. Use short paragraphs.]

## Code Example
\`\`\`${language.name.toLowerCase()}
// Practical example with comments
\`\`\`

## Key Points
- Important point 1
- Important point 2
- Important point 3

## Summary
[Brief recap]

Keep it simple and easy to understand.`;

      // Call the AI provider with the structured prompt
      const result = await conductInterview({
        provider,
        apiKey,
        language: language.name,
        question: structuredPrompt,
        userAnswer: 'Please follow the structured format provided above exactly, with all sections, emojis, and formatting.',
        previousQuestions: [],
        questionType: 'theory'
      });
      
      // Use the idealAnswer field which contains the detailed response
      // Configure marked to handle special characters properly
      marked.setOptions({
        breaks: true,
        gfm: true,
      });
      
      // Parse markdown and decode HTML entities
      let parsedAnswer = await marked(result.idealAnswer);
      
      // Handle common HTML entities that might appear
      parsedAnswer = parsedAnswer
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ');
      
      setQaResult({ answer: parsedAnswer });
    } catch (error) {
      console.error('Failed to answer question:', error);
      
      // Check if error is due to AI configuration
      const errorMessage = error instanceof Error ? error.message : '';
      if (errorMessage.includes('API') || errorMessage.includes('key') || errorMessage.includes('auth') || errorMessage.includes('401') || errorMessage.includes('403')) {
        toast({
          variant: 'destructive',
          title: 'AI Connection Failed',
          description: 'Your AI key may be invalid. Please update your API key.',
        });
        setShowAiKeyModal(true);
      } else {
        toast({
          variant: 'destructive',
          title: 'An error occurred',
          description: 'Failed to get an answer. Please try again.',
        });
      }
    } finally {
      setIsAsking(false);
    }
  };
  
  const isLearningPlanTopic = topic.slug === 'learning-plan' || topic.slug === 'interview-questions' || topic.slug === 'react-version-updates';

  return (
    <div className="space-y-8 min-h-screen">
      {/* Floating Video Notes Button with Animation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">
          {/* Animated pulse ring */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" />
          
          <Button
            onClick={() => setShowVideoNotes(true)}
            size="lg"
            className="gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-full h-auto py-4 px-5 flex-col bg-primary text-primary-foreground hover:scale-110 active:scale-95 relative"
          >
            <div className="relative">
              <BookmarkIcon className="w-6 h-6" />
              {videoNotesCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-red-500 text-white border-2 border-white animate-bounce">
                  {videoNotesCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium whitespace-nowrap">
              Resources
            </span>
          </Button>
        </div>
      </div>

      {children ? (
        children
      ) : (
        <AiSimplification topic={topic} language={language} />
      )}
      
      {/* Video Notes Drawer */}
      <VideoNotesDrawer
        open={showVideoNotes}
        onOpenChange={handleDrawerChange}
        languageSlug={language.slug}
      />
      
      {!isLearningPlanTopic && (
          <div className="relative mt-8">
            <Card className={cn(
              "transition-all duration-200 animate-in fade-in-50",
              !isUserAuthenticated && "blur-sm pointer-events-none",
              isUserAuthenticated && "hover:shadow-lg"
            )}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Ask a Question
                </CardTitle>
                <CardDescription>
                  Have a question about {topic.title}? Ask our AI assistant.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder={`e.g., "Explain this like I'm 5."`} 
                  value={question} 
                  onChange={(e) => setQuestion(e.target.value)} 
                  disabled={isAsking || !isUserAuthenticated}
                  className="transition-colors focus:ring-2"
                />
                <Button 
                  onClick={handleAskQuestionAction}
                  disabled={isAsking || !question.trim() || !isUserAuthenticated}
                  className="transition-all duration-200"
                >
                  {isAsking ? 'Thinking...' : 'Get Answer'}
                </Button>
              </CardContent>
            </Card>
            
            {/* Guest User Overlay - Simple & Subtle */}
            {!isUserAuthenticated ? (
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-lg">
                <div className="text-center space-y-3 px-6">
                  <p className="text-sm font-medium text-foreground">
                    🔐 Login to use AI Assistant
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/login'}
                    size="sm"
                    className="shadow-sm"
                  >
                    Login
                  </Button>
                </div>
              </div>
            ) : !isAiEnabled && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-lg">
                <div className="text-center space-y-3 px-6">
                  <p className="text-sm font-medium text-foreground">
                    ⚙️ AI Provider Not Configured
                  </p>
                  <Button 
                    onClick={() => setShowAiKeyModal(true)}
                    size="sm"
                    className="shadow-sm"
                  >
                    Setup AI Key
                  </Button>
                </div>
              </div>
            )}
          </div>
      )}
      
      {isAsking && (
        <Card className="transition-all duration-200 animate-in fade-in-50">
          <CardContent className="p-6 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}

      {qaResult && (
        <div className="relative animate-in fade-in-50 slide-in-from-bottom-3 duration-500">
          <Card className="relative border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-slate-900 dark:to-slate-800/50">
            {/* Elegant Header */}
            <CardHeader className="relative bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5 border-b border-gray-200/50 dark:border-slate-700/50 backdrop-blur-sm">
              <CardTitle className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg blur opacity-40"></div>
                  <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    AI Answer
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-normal">Powered by artificial intelligence</div>
                </div>
              </CardTitle>
            </CardHeader>

            {/* Beautiful Content Area */}
            <CardContent className="p-8 sm:p-10 lg:p-12">
              <div 
                className="prose prose-base sm:prose-lg max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-h2:text-xl prose-h2:bg-gradient-to-r prose-h2:from-emerald-600 prose-h2:to-teal-600 dark:prose-h2:from-emerald-400 dark:prose-h2:to-teal-400 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:mt-8 prose-h2:first:mt-0 prose-h2:mb-4
                prose-h3:text-lg prose-h3:text-gray-800 dark:prose-h3:text-gray-200 prose-h3:mt-6 prose-h3:mb-3
                prose-h4:text-base prose-h4:text-gray-700 dark:prose-h4:text-gray-300 prose-h4:mt-4 prose-h4:mb-2
                prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed prose-p:my-3
                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                prose-code:text-emerald-700 dark:prose-code:text-emerald-400 prose-code:bg-emerald-50 dark:prose-code:bg-emerald-950/30 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-emerald-200 dark:prose-code:border-emerald-800 prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-gradient-to-br prose-pre:from-gray-50 prose-pre:to-gray-100 dark:prose-pre:from-slate-900 dark:prose-pre:to-slate-800 prose-pre:border-2 prose-pre:border-gray-200 dark:prose-pre:border-slate-700 prose-pre:rounded-xl prose-pre:text-gray-900 dark:prose-pre:text-gray-100 prose-pre:p-6 prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:shadow-inner prose-pre:font-mono
                prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-2
                prose-blockquote:border-l-4 prose-blockquote:border-emerald-400 dark:prose-blockquote:border-emerald-600 prose-blockquote:pl-4 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-blockquote:bg-gradient-to-r prose-blockquote:from-emerald-50 prose-blockquote:to-transparent dark:prose-blockquote:from-emerald-950/20 dark:prose-blockquote:to-transparent prose-blockquote:py-3 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-blockquote:my-4 prose-blockquote:italic
                prose-ul:my-4 prose-ul:text-gray-800 dark:prose-ul:text-gray-200 prose-ul:space-y-2
                prose-ol:my-4 prose-ol:text-gray-800 dark:prose-ol:text-gray-200 prose-ol:space-y-2
                prose-li:leading-relaxed prose-li:marker:text-emerald-500 dark:prose-li:marker:text-emerald-400
                prose-table:border-collapse prose-table:border-2 prose-table:border-gray-200 dark:prose-table:border-slate-700 prose-table:rounded-lg prose-table:overflow-hidden prose-table:my-6 prose-table:shadow-sm
                prose-thead:bg-gradient-to-r prose-thead:from-emerald-50 prose-thead:to-teal-50 dark:prose-thead:from-emerald-950/30 dark:prose-thead:to-teal-950/30
                prose-th:text-gray-900 dark:prose-th:text-gray-100 prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-gray-200 dark:prose-th:border-slate-700
                prose-td:p-3 prose-td:border prose-td:border-gray-200 dark:prose-td:border-slate-700 prose-td:text-gray-800 dark:prose-td:text-gray-200
                prose-hr:border-2 prose-hr:border-gray-200 dark:prose-hr:border-slate-700 prose-hr:my-8 prose-hr:rounded-full
                prose-img:rounded-xl prose-img:shadow-md prose-img:border prose-img:border-gray-200 dark:prose-img:border-slate-700" 
                dangerouslySetInnerHTML={{ __html: qaResult.answer }} 
              />
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* AI Provider Modal */}
      <AIProviderModal
        isOpen={showAiKeyModal}
        onClose={() => setShowAiKeyModal(false)}
        onSave={async (provider: AIProvider, apiKey: string) => {
          localStorage.setItem('ai_api_key', apiKey);
          localStorage.setItem('ai_provider', provider);
          setIsAiEnabled(true);
          setShowAiKeyModal(false);
          toast({
            title: 'AI Provider Connected',
            description: 'You can now use AI features!',
          });
          return true;
        }}
      />
    </div>
  );
}
