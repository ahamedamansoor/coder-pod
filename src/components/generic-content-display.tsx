
'use client';

import type { Language, Topic } from '@/app/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { HelpCircle } from 'lucide-react';
import React from 'react';
import { answerQuestion, type AnswerQuestionOutput } from '@/ai/flows/answer-question';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useUser } from '@/firebase';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from './ui/tooltip';
import { cn } from '@/lib/utils';
import { marked } from 'marked';
import { useJava } from '@/app/java/java-context';
import { useSpring } from '@/app/spring/spring-context';
import { useJavascript } from '@/app/javascript/javascript-context';
import { useReact } from '@/app/react/react-context';
import { useHtml } from '@/app/html/html-context';
import { useCss } from '@/app/css/css-context';
import { useScss } from '@/app/scss/scss-context';
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
        default: return { completedTopics: new Set(), handleToggleComplete: () => {}, isProgressLoading: true };
    }
}

export function GenericContentDisplay({ 
  topic, 
  language, 
  onOpenEditor,
  children
}: { 
  topic: Topic, 
  language: Language, 
  onOpenEditor: (code: string) => void,
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

  const handleAskQuestion = async () => {
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
  
  const isLearningPlanTopic = topic.slug === 'learning-plan';

  const markAsCompleteButton = (
    <div className="flex items-center space-x-2 shrink-0 ml-4 bg-muted p-3 rounded-lg border">
      <Checkbox id={`complete-${topic.slug}`} checked={completedTopics.has(topic.slug)} onCheckedChange={() => handleToggleComplete(topic.slug)} disabled={!isUserAuthenticated} />
      <Label htmlFor={`complete-${topic.slug}`} className={cn("font-semibold text-muted-foreground", !isUserAuthenticated && "cursor-not-allowed opacity-50")}>Mark as completed</Label>
    </div>
  );

  return (
    <div className="space-y-8">
       <header className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-foreground">{topic.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{topic.explanation}</p>
          </div>
         {!isLearningPlanTopic && (
            <TooltipProvider>
              {isUserAuthenticated ? (markAsCompleteButton) : (<Tooltip><TooltipTrigger asChild>{markAsCompleteButton}</TooltipTrigger><TooltipContent><p>You must be logged in to save your progress.</p></TooltipContent></Tooltip>)}
            </TooltipProvider>
         )}
        </header>
      
      {children ? (
        children
      ) : (
        <AiSimplification topic={topic} language={language} />
      )}
      
      {!isLearningPlanTopic && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><HelpCircle className="w-6 h-6 text-primary" />Ask a Question</CardTitle>
              <CardDescription>Have a question about {topic.title}? Ask our AI assistant.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder={`e.g., "Explain this like I'm 5."`} value={question} onChange={(e) => setQuestion(e.target.value)} disabled={isAsking} />
              <Button onClick={handleAskQuestion} disabled={isAsking || !question.trim()}>{isAsking ? 'Thinking...' : 'Get Answer'}</Button>
            </CardContent>
          </Card>
      )}
      
      {isAsking && (<Card><CardContent className="p-6 space-y-2"><Skeleton className="h-4 w-1/3" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></CardContent></Card>)}

      {qaResult && (
        <Card className="border-primary/50 bg-primary/5 animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle>AI Answer</CardTitle>
          </CardHeader>
          <CardContent><div className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-table:border prose-th:p-2 prose-td:p-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic" dangerouslySetInnerHTML={{ __html: qaResult.answer }} /></CardContent>
        </Card>
      )}
    </div>
  );
}
