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
import { useDsa } from '@/app/dsa/dsa-context';
import { useRxjs } from '@/app/rxjs/rxjs-context';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { AiSimplification } from './ai-simplification';

function useLanguageContext(language: Language) {
    switch(language.slug) {
        case 'java': return useJava();
        case 'spring': return useSpring();
        case 'javascript': return useJavascript();
        case 'react': return useReact();
        case 'html': return useHtml();
        case 'css': return useCss();
        case 'scss': return useScss();
        case 'dsa': return useDsa();
        case 'rxjs': return useRxjs();
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

  return (
    <div className="space-y-8 min-h-screen">
      {/* Topic header intentionally removed per request */}

      {children ? (
        children
      ) : (
        <AiSimplification topic={topic} language={language} />
      )}
      
      {!isLearningPlanTopic && (
          <Card className="mt-8 transition-all duration-200 hover:shadow-lg animate-in fade-in-50">
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
                disabled={isAsking}
                className="transition-colors focus:ring-2"
              />
              <Button 
                onClick={handleAskQuestionAction}
                disabled={isAsking || !question.trim()}
                className="transition-all duration-200"
              >
                {isAsking ? 'Thinking...' : 'Get Answer'}
              </Button>
            </CardContent>
          </Card>
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
        <Card className="transition-all duration-500 hover:shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle>
              AI Answer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-code:text-current prose-pre:rounded-md prose-table:border prose-th:p-2 prose-td:p-2 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic" 
            dangerouslySetInnerHTML={{ __html: qaResult.answer }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
