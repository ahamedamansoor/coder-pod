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
import { AIAnswerDisplay } from './ai-answer-display';
import { useWebPlayground } from './playground/web-playground-context';

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
            <Skeleton className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800" />
            <Skeleton className="h-4 w-full bg-slate-200 dark:bg-slate-800" />
            <Skeleton className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800" />
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
    </div>
  );
}
