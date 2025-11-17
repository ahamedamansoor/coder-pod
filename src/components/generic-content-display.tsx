
'use client';

import type { Language, Topic } from '@/app/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Wand2, HelpCircle, Sparkles, CheckSquare, Lightbulb, GitCommitHorizontal, List, Code, Copy, Check } from 'lucide-react';
import React, { lazy, Suspense, useRef } from 'react';
import { simplifyTopicExplanation, type SimplifyTopicExplanationOutput } from '@/ai/flows/simplify-topic-explanations';
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
import { MermaidDiagram } from './mermaid-diagram';

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
  const [isSimplifying, setIsSimplifying] = React.useState(false);
  const [simplifiedContent, setSimplifiedContent] = React.useState<SimplifyTopicExplanationOutput | null>(null);
  const [question, setQuestion] = React.useState('');
  const [isAsking, setIsAsking] = React.useState(false);
  const [qaResult, setQaResult] = React.useState<AnswerQuestionOutput | null>(null);
  const [hasCopied, setHasCopied] = React.useState(false);
  
  const { completedTopics, handleToggleComplete } = useLanguageContext(language);
  const { user } = useUser();
  const isUserAuthenticated = user && !user.isAnonymous;
  
  const { toast } = useToast();

  React.useEffect(() => {
    setSimplifiedContent(null);
    setQaResult(null);
    setQuestion('');
  }, [topic]);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const handleCopyCode = () => {
    if (simplifiedContent?.examples) {
      navigator.clipboard.writeText(simplifiedContent.examples);
      setHasCopied(true);
      toast({ title: 'Copied to clipboard!' });
    }
  };

  const handleSimplify = async () => {
    setIsSimplifying(true);
    setSimplifiedContent(null);
    try {
      const result = await simplifyTopicExplanation({
        topic: topic.title,
        language: language.name,
        explanation: topic.explanation,
      });
      setSimplifiedContent(result);
    } catch (error) {
      console.error('Failed to simplify explanation:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate simplified explanation. Please try again.',
      });
    } finally {
      setIsSimplifying(false);
    }
  };

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
  
  const renderExample = (exampleText: string) => {
    const isMermaid = exampleText.trim().startsWith('```mermaid');
    if (isMermaid) {
        const mermaidCode = exampleText.replace(/```mermaid\n|```/g, '').trim();
        return <MermaidDiagram diagram={mermaidCode} />;
    }
    return (
        <div className="bg-card p-4 rounded-md overflow-x-auto">
            <pre className="whitespace-pre-wrap"><code className="font-code text-sm text-foreground">{exampleText}</code></pre>
        </div>
    )
  }

  return (
    <div className="space-y-8">
       <header className="space-y-2 flex justify-between items-start">
         <div>
            <h1 className="font-headline text-4xl font-bold tracking-tight">{topic.title}</h1>
            <p className="text-lg text-muted-foreground">A deep dive into {topic.title} in {language.name}.</p>
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
        <Card>
          <CardHeader><CardTitle>Explanation</CardTitle></CardHeader>
          <CardContent><p className="text-base leading-relaxed">{topic.explanation}</p></CardContent>
        </Card>
      )}
      
      {!isLearningPlanTopic && (
        <>
          <div className="flex flex-col items-center gap-4">
            <Button onClick={handleSimplify} disabled={isSimplifying} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Wand2 className="mr-2 h-5 w-5" />
              {isSimplifying ? 'Generating...' : 'Simplify with AI'}
            </Button>
            <p className="text-sm text-muted-foreground">Let AI help you understand this topic better.</p>
          </div>

          {isSimplifying && (
            <div className="space-y-6">
              <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent className="space-y-2"><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></CardContent></Card>
              <Card><CardHeader><Skeleton className="h-6 w-1/3" /></CardHeader><CardContent><Skeleton className="h-32 w-full" /></CardContent></Card>
            </div>
          )}

          {simplifiedContent && (
            <div className="space-y-8 animate-in fade-in-50 duration-500">
               <Card className="border-primary/50 bg-primary/5"><CardHeader><CardTitle className="flex items-center gap-3"><Lightbulb className="text-primary"/>Analogy</CardTitle><CardDescription>{simplifiedContent.summary}</CardDescription></CardHeader><CardContent><p className="text-lg italic text-foreground/90">"{simplifiedContent.analogy}"</p></CardContent></Card>
               <div className="grid md:grid-cols-2 gap-8">
                   <Card className="border-primary/50 bg-primary/5"><CardHeader><CardTitle className="flex items-center gap-3"><List className="text-primary"/>Key Ideas</CardTitle></CardHeader><CardContent><ul className="space-y-3">{simplifiedContent.bulletPoints.map((point, i) => (<li key={i} className="flex items-start gap-3"><GitCommitHorizontal className="w-5 h-5 text-primary mt-1 shrink-0" /><span className="text-base text-foreground/90">{point}</span></li>))}</ul></CardContent></Card>
                   {simplifiedContent.examples && (
                    <Card className="border-primary/50 bg-primary/5">
                        <CardHeader className='flex-row items-center justify-between'>
                            <CardTitle className="flex items-center gap-3"><Code className="text-primary"/>Code Examples</CardTitle>
                            <Button variant="ghost" size="icon" onClick={handleCopyCode}>
                                {hasCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                <span className="sr-only">Copy code</span>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            {renderExample(simplifiedContent.examples)}
                        </CardContent>
                    </Card>
                   )}
               </div>
            </div>
          )}
        
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
        </>
      )}
      
      {isAsking && (<Card><CardContent className="p-6 space-y-2"><Skeleton className="h-4 w-1/3" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></CardContent></Card>)}

      {qaResult && (
        <Card className="border-primary/50 bg-primary/5 animate-in fade-in-50 duration-500">
          <CardHeader className="flex-row items-start gap-4"><div className="bg-primary text-primary-foreground p-2 rounded-full"><Sparkles className="w-5 h-5"/></div><div><CardTitle>AI Answer</CardTitle><CardDescription>Here's what our AI assistant came up with.</CardDescription></div></CardHeader>
          <CardContent><div className="prose prose-sm max-w-none prose-p:text-foreground/90 prose-headings:text-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-table:border prose-th:p-2 prose-td:p-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic" dangerouslySetInnerHTML={{ __html: qaResult.answer }} /></CardContent>
        </Card>
      )}
    </div>
  );
}
