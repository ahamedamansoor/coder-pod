'use client';

import type { Language, Topic } from '@/data/languages';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, BookmarkIcon, CheckCircle } from 'lucide-react';
import React from 'react';
import { VideoNotesDrawer } from '@/components/video-notes/video-notes-drawer';
import { Skeleton } from '@/components/ui/skeleton';
import { EnhancedLoadingSkeleton } from './enhanced-loading-skeleton';
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
import { useTailwind } from '@/app/languages/tailwind/tailwind-context';
import { useSelenium } from '@/app/languages/selenium/selenium-context';
import { useUser } from '@/hooks/use-auth-compat';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { AiSimplification } from './ai-simplification';
import AIProviderModal from '../dashboard/GeminiKeyModal';
import { AIProvider } from '@/types/ai-providers';
import { conductInterview } from '@/ai/flows/interview-flow';
import { AIAnswerDisplay } from './ai-answer-display';
import { useWebPlayground } from './playground/web-playground-context';
import { ModuleCompletionCelebration } from './modals/module-completion-celebration';
import { TopicNavigation } from './topic-navigation';

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
        case 'tailwind': return useTailwind();
        case 'selenium': return useSelenium();
        default: return { completedTopics: new Set<string>(), handleToggleComplete: () => {}, isProgressLoading: true };
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
  const [completedModule, setCompletedModule] = React.useState<string | null>(null);

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
  const { openWithContent } = useWebPlayground();

  const isLearningPlanTopic = topic.slug === 'learning-plan' || topic.slug === 'interview-questions' || topic.slug === 'react-version-updates';
  const isTrackableTopic = !isLearningPlanTopic;
  const isTopicComplete = completedTopics.has(topic.slug);
  const statusLabel = isTopicComplete ? 'Completed' : 'Mark as completed';
  const checkboxId = `mark-complete-${topic.slug}`;

  const handleMarkCompleteChange = React.useCallback(() => {
    if (!isUserAuthenticated) {
      toast({
        variant: 'destructive',
        title: 'Login required',
        description: 'Sign in to track progress and mark topics as completed.',
      });
      return;
    }

    handleToggleComplete(topic.slug);

    // Check if this completion completes a module (category)
    if (topic.category && !isTopicComplete) {
      // Get all topics in the same category
      const categoryTopics = language.topics.filter(t => t.category === topic.category);
      
      // Check if all topics in this category will be completed after this one
      const allTopicsCompleted = categoryTopics.every(t => 
        completedTopics.has(t.slug) || t.slug === topic.slug
      );

      if (allTopicsCompleted) {
        setCompletedModule(topic.category);
      }
    }
  }, [handleToggleComplete, isUserAuthenticated, toast, topic.slug, topic.category, isTopicComplete, language.topics, completedTopics]);

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
      
      // Create language-specific structured prompts
      const isHTMLLanguage = language.slug === 'html';
      const isCSSLanguage = language.slug === 'css' || language.slug === 'scss';
      const isJSLanguage = language.slug === 'javascript' || language.slug === 'react';
      
      const structuredPrompt = isHTMLLanguage 
        ? `You are an expert HTML tutor. Answer this question with clear, structured examples that follow HTML best practices.

**Question:** ${question}

**Topic Context:** ${topic.title} - ${topic.explanation}

**CRITICAL: You MUST separate HTML, CSS, and JavaScript into THREE distinct code blocks for live preview.**

**Format your answer EXACTLY like this:**

## 🎯 Quick Answer
[Direct 1-2 sentence answer to the question]

## 📖 Detailed Explanation
[Explain the concept clearly in 2-3 short paragraphs. Use simple language suitable for beginners.]

## 💻 Live Preview Code

### HTML:
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${topic.title} Example</title>
</head>
<body>
  <!-- Add complete, working HTML example here -->
  <!-- Include comments explaining each important part -->
  <div class="container">
    <!-- Your HTML structure here -->
  </div>
</body>
</html>
\`\`\`

### CSS:
\`\`\`css
/* Base styles that support both light and dark modes */
body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f5f5f5;
  color: #1e293b;
  margin: 0;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background: #1e293b;
    color: #f1f5f9;
  }
}

/* Your component styles here with comments */
.container {
  /* Styles */
}
\`\`\`

### JavaScript (if needed):
\`\`\`javascript
// Add JavaScript functionality if required
// Include comments explaining the logic
document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
});
\`\`\`

### Key Points:
- Explain each important element
- Describe the structure and hierarchy
- Mention semantic meaning if applicable

## ✅ Best Practices
- **Practice 1:** [Describe good practice with example]
- **Practice 2:** [Describe good practice with example]
- **Practice 3:** [Describe good practice with example]

## ❌ Common Mistakes to Avoid
- **Mistake 1:** [What not to do and why]
- **Mistake 2:** [What not to do and why]

## 🎨 Practical Use Cases
- **Use Case 1:** [When and where to use this]
- **Use Case 2:** [Real-world application]

## 📚 Summary
[2-3 sentence recap emphasizing the key takeaway]

**CRITICAL REQUIREMENTS:**
- SEPARATE HTML, CSS, and JavaScript into THREE distinct code blocks
- HTML block: Complete document structure with DOCTYPE
- CSS block: Styles with BOTH light and dark mode support
- JavaScript block: Only if functionality is needed (can be empty)
- Use semantic HTML elements when appropriate
- Include helpful comments in ALL code blocks
- Keep explanations simple and beginner-friendly
- Use emojis for section headers as shown above`
        : isCSSLanguage || isJSLanguage
        ? `You are an expert ${isCSSLanguage ? 'CSS' : 'JavaScript'} tutor. Answer this question with clear, structured examples.

**Question:** ${question}

**Topic Context:** ${topic.title} - ${topic.explanation}

**CRITICAL: Provide a complete working example with HTML, CSS${isJSLanguage ? ', and JavaScript' : ''} separated into distinct code blocks.**

**Format your answer EXACTLY like this:**

## 🎯 Quick Answer
[Direct 1-2 sentence answer]

## 📖 Detailed Explanation
[Explain clearly in 2-3 short paragraphs. Use simple language.]

## 💻 Live Preview Code

### HTML:
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${topic.title} Demo</title>
</head>
<body>
  <div class="demo-container">
    <!-- HTML structure for the demo -->
  </div>
</body>
</html>
\`\`\`

### CSS:
\`\`\`css
/* Base styles with dark mode support */
body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f5f5;
  color: #1e293b;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1e293b;
    color: #f1f5f9;
  }
}

/* Your ${isCSSLanguage ? 'CSS' : 'styling'} example here with comments */
.demo-container {
  /* Styles */
}
\`\`\`

${isJSLanguage ? `### JavaScript:
\`\`\`javascript
// JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Your code here with explanatory comments
});
\`\`\`` : ''}

## ✅ Best Practices
- **Practice 1:** [Good practice with explanation]
- **Practice 2:** [Good practice with explanation]
- **Practice 3:** [Good practice with explanation]

## ❌ Common Mistakes
- **Mistake 1:** [What to avoid and why]
- **Mistake 2:** [What to avoid and why]

## 🎨 Practical Use Cases
- **Use Case 1:** [When to use this]
- **Use Case 2:** [Real-world application]

## 📚 Summary
[2-3 sentence recap]

**REQUIREMENTS:**
- Provide COMPLETE working code with proper HTML structure
- Include dark mode CSS support
${isJSLanguage ? '- Add functional JavaScript with clear comments\n' : ''}- Keep code simple and beginner-friendly
- Use emojis for section headers`
        : `You are a helpful programming tutor. Answer this question clearly and simply.

**Question:** ${question}

**Context:** ${topic.explanation}

**Format your answer like this:**

## 🎯 Quick Answer
[Direct 1-2 sentence answer]

## 📖 Explanation
[Explain clearly in simple terms. Use short paragraphs.]

## 💻 Code Example
\`\`\`${language.name.toLowerCase()}
// Practical example with comments
// Show complete, working code
\`\`\`

## ✅ Best Practices
- **Practice 1:** [Good practice with explanation]
- **Practice 2:** [Good practice with explanation]
- **Practice 3:** [Good practice with explanation]

## ❌ Common Mistakes
- **Mistake 1:** [What to avoid and why]
- **Mistake 2:** [What to avoid and why]

## 📚 Key Takeaways
- Important point 1
- Important point 2
- Important point 3

## 🎯 Summary
[Brief recap in 2-3 sentences]

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
  
  return (
    <div className="space-y-2 min-h-screen">
      {/* Refined Mark as Completed Button with Enhanced Design */}
      {isTrackableTopic && isUserAuthenticated && (
        <div className="flex justify-center pt-2">
          <button
            onClick={handleMarkCompleteChange}
            className={cn(
              "group relative flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              "border shadow-sm hover:shadow-lg overflow-hidden",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
              "before:translate-x-[-100%] before:transition-transform before:duration-700",
              "hover:before:translate-x-[100%]",
              isTopicComplete 
                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 border-green-200 hover:border-green-300 hover:shadow-green-100/50 dark:from-green-950/50 dark:to-emerald-950/50 dark:text-green-400 dark:border-green-800/50 dark:hover:border-green-700/50 dark:hover:shadow-green-900/20" 
                : "bg-gradient-to-r from-slate-50 to-white text-slate-600 border-slate-200 hover:border-slate-300 hover:shadow-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 dark:text-slate-300 dark:border-slate-700/50 dark:hover:border-slate-600/50 dark:hover:shadow-slate-900/20"
            )}
          >
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-xl shadow-inner opacity-30"></div>
            
            {isTopicComplete ? (
              <>
                <div className="relative flex-shrink-0">
                  <svg className="w-4 h-4 transition-all duration-200 group-hover:scale-110 group-hover:text-green-700 dark:group-hover:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {/* Animated success ring */}
                  <div className="absolute -inset-1.5 border border-green-400 dark:border-green-600 rounded-full opacity-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  {/* Sparkle effect */}
                  <div className="absolute -top-1 -right-1 w-2 h-2">
                    <div className="w-full h-full bg-green-400 dark:bg-green-600 rounded-full animate-ping"></div>
                  </div>
                </div>
                <span className="relative font-semibold">Completed</span>
                {/* Checkmark trail */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex-shrink-0">
                  <svg className="w-4 h-4 transition-all duration-200 group-hover:rotate-90 group-hover:text-slate-700 dark:group-hover:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {/* Rotating ring */}
                  <div className="absolute -inset-1.5 border border-slate-300 dark:border-slate-600 rounded-full opacity-0 group-hover:opacity-30 group-hover:rotate-45 transition-all duration-300"></div>
                  {/* Pending dot */}
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="relative font-semibold">Mark as Complete</span>
                {/* Plus trail */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3 h-3 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </>
            )}
          </button>
        </div>
      )}

      {/* Simple Center Line */}
      <div className="relative flex justify-center py-2">
        <div className="w-full max-w-md">
          {/* Gradient line */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          
          {/* Subtle glow effect */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
        </div>
      </div>
      
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

      <div className="relative" data-testid="topic-content">
        {children ? (
          children
        ) : (
          <AiSimplification topic={topic} language={language} />
        )}
      </div>
      
      {/* Video Notes Drawer */}
      <VideoNotesDrawer
        open={showVideoNotes}
        onOpenChange={handleDrawerChange}
        languageSlug={language.slug}
      />

      {/* Topic Navigation - Next/Previous Topics */}
      <TopicNavigation currentTopic={topic} language={language} />
      
      {!isLearningPlanTopic && (
          <div className="relative mt-8">
            <Card className={cn(
              "transition-all duration-200 animate-in fade-in-50 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800",
              !isUserAuthenticated && "blur-sm pointer-events-none",
              isUserAuthenticated && "hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-950"
            )}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Ask a Question
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Have a question about {topic.title}? Ask our AI assistant.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder={`e.g., "Explain this like I'm 5."`} 
                  value={question} 
                  onChange={(e) => setQuestion(e.target.value)} 
                  disabled={isAsking || !isUserAuthenticated}
                  className="transition-colors focus:ring-2 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
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
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="text-center space-y-3 px-6">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
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
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="text-center space-y-3 px-6">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
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
        <Card className="transition-all duration-200 animate-in fade-in-50 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardContent className="p-6 space-y-2">
            <CompactLoadingSkeleton />
          </CardContent>
        </Card>
      )}

      {qaResult && (
        <AIAnswerDisplay 
          answer={qaResult.answer} 
          language={language.slug}
          onOpenWebPlayground={openWithContent}
        />
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

      <ModuleCompletionCelebration
        isOpen={!!completedModule}
        moduleName={completedModule || ''}
        languageSlug={language.slug}
        onClose={() => setCompletedModule(null)}
      />
      
      {/* Keyframe animation for badge pulse */}
      <style jsx>{`
        @keyframes badge-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(74, 123, 245, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(74, 123, 245, 0);
          }
        }
      `}</style>
    </div>
  );
}
