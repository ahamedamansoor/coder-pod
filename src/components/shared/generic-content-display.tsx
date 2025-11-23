'use client';

import type { Language, Topic } from '@/app/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import React from 'react';
import {
  answerQuestion,
  type AnswerQuestionOutput,
} from '@/ai/flows/answer-question';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useJava } from '@/app/java/java-context';
import { useSpring } from '@/app/spring/spring-context';
import { useJavascript } from '@/app/javascript/javascript-context';
import { useReact } from '@/app/react/react-context';
import { useHtml } from '@/app/html/html-context';
import { useCss } from '@/app/css/css-context';
import { useScss } from '@/app/scss/scss-context';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { AiSimplification } from './ai-simplification';
import { getThemeClasses, animationClasses } from '@/lib/language-themes';

function useLanguageContext(language: Language) {
    switch(language.slug) {
        case 'java': return useJava();
        case 'spring': return useSpring();
        case 'javascript': return useJavascript();
        case 'react': return useReact();
        case 'html': return useHtml();
        case 'css': return useCss();
        case 'scss': return useScss();
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
  const [qaResult, setQaResult] = React.useState<AnswerQuestionOutput | null>(null);
  
  const { completedTopics, handleToggleComplete } = useLanguageContext(language);
  const { user } = useUser();
  const isUserAuthenticated = user && !user.isAnonymous;
  
  const { toast } = useToast();
  
  // Get theme classes for the current language
  const themeClasses = getThemeClasses(language.slug);

  React.useEffect(() => {
    setQaResult(null);
    setQuestion('');
  }, [topic]);

  const handleAskQuestionAction = async () => {
    if (!question.trim()) return;
    setIsAsking(true);
    setQaResult(null);
    try {
      const result = await answerQuestion({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
        question: question,
      });
      const parsedAnswer = await marked(result.answer);
      setQaResult({ answer: parsedAnswer });
    } catch (error) {
      console.error('Failed to answer question:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get an answer. Please try again.',
      });
    } finally {
      setIsAsking(false);
    }
  };
  
  const isLearningPlanTopic = topic.slug === 'learning-plan' || topic.slug === 'interview-questions' || topic.slug === 'react-version-updates';

  const markAsCompleteButton = (
     <div className={cn(
       "flex items-center space-x-2 shrink-0 p-3 rounded-lg border transition-all duration-200",
       themeClasses.cardBackground,
       themeClasses.border,
       animationClasses.fadeIn
     )}>
      <Checkbox
        id={`complete-${topic.slug}`}
        checked={completedTopics.has(topic.slug)}
        onCheckedChange={() => handleToggleComplete(topic.slug)}
        disabled={!isUserAuthenticated}
        className={cn(
          "data-[state=checked]:bg-current",
          themeClasses.primary
        )}
      />
      <Label
        htmlFor={`complete-${topic.slug}`}
        className={cn(
          "font-semibold transition-colors",
          themeClasses.textSecondary,
          !isUserAuthenticated && "cursor-not-allowed opacity-50"
        )}
      >
        Mark as completed
      </Label>
    </div>
  );

  return (
    <div className="space-y-8 min-h-screen">
      {/* Unified Themed Topic Header */}
      <div className={cn(
        "rounded-lg p-6 border shadow-sm transition-colors",
        themeClasses.cardBackground,
        themeClasses.border,
        animationClasses.fadeIn
      )}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-2">
            <h1 className={cn(
              "text-3xl font-bold tracking-tight",
              themeClasses.textPrimary
            )}>
              <span className={themeClasses.primary}>{topic.title}</span>
            </h1>
            <p className={cn(
              "text-sm",
              themeClasses.textSecondary
            )}>{topic.explanation}</p>
          </div>
          {markAsCompleteButton}
        </div>
        {!isLearningPlanTopic && (
          <div className={cn(
            "mt-4 h-2 w-full rounded-full overflow-hidden",
            themeClasses.progressBackground
          )}>
            <div className={cn(
              "h-2 rounded-full",
              themeClasses.progressBar
            )} style={{ width: completedTopics.has(topic.slug) ? '100%' : '0%' }}></div>
          </div>
        )}
      </div>

      {children ? (
        children
      ) : (
        <AiSimplification topic={topic} language={language} />
      )}
      
      {!isLearningPlanTopic && (
          <Card className={cn(
            "mt-8 transition-all duration-200 hover:shadow-lg",
            themeClasses.cardElevated,
            animationClasses.fadeIn
          )}>
            <CardHeader>
              <CardTitle className={cn(
                "flex items-center gap-2",
                themeClasses.textPrimary
              )}>
                <HelpCircle className={cn("w-6 h-6", themeClasses.primary)} />
                Ask a Question
              </CardTitle>
              <CardDescription className={themeClasses.textSecondary}>
                Have a question about {topic.title}? Ask our AI assistant.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder={`e.g., "Explain this like I'm 5."`} 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
                disabled={isAsking}
                className={cn(
                  "transition-colors focus:ring-2",
                  themeClasses.border,
                  `focus:ring-${themeClasses.primary.split('-')[1]}-200`
                )}
              />
              <Button 
                onClick={handleAskQuestionAction}
                disabled={isAsking || !question.trim()}
                className={cn(
                  "transition-all duration-200",
                  themeClasses.buttonPrimary
                )}
              >
                {isAsking ? 'Thinking...' : 'Get Answer'}
              </Button>
            </CardContent>
          </Card>
      )}
      
      {isAsking && (
        <Card className={cn(
          "transition-all duration-200",
          themeClasses.cardDefault,
          animationClasses.fadeIn
        )}>
          <CardContent className="p-6 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}

      {qaResult && (
        <Card className={cn(
          "transition-all duration-500 hover:shadow-lg",
          themeClasses.cardBackground,
          themeClasses.border,
          animationClasses.fadeIn
        )}>
          <CardHeader>
            <CardTitle className={themeClasses.textPrimary}>
              AI Answer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={cn(
              "prose prose-sm max-w-none transition-colors",
              "prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground",
              "prose-code:text-current prose-pre:rounded-md prose-table:border prose-th:p-2 prose-td:p-2",
              "prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic",
              themeClasses.textPrimary,
              `prose-code:${themeClasses.primary}`,
              `prose-pre:${themeClasses.codeBackground}`,
              `prose-blockquote:${themeClasses.border}`
            )} 
            dangerouslySetInnerHTML={{ __html: qaResult.answer }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
