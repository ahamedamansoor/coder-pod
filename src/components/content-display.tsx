'use client';

import type { Language, Topic } from '@/app/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Wand2 } from 'lucide-react';
import React from 'react';
import {
  simplifyTopicExplanation,
  type SimplifyTopicExplanationOutput,
} from '@/ai/flows/simplify-topic-explanations';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface ContentDisplayProps {
  topic: Topic;
  language: Language;
}

export function ContentDisplay({ topic, language }: ContentDisplayProps) {
  const [isSimplifying, setIsSimplifying] = React.useState(false);
  const [simplifiedContent, setSimplifiedContent] =
    React.useState<SimplifyTopicExplanationOutput | null>(null);
  const { toast } = useToast();

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
        description:
          'Failed to generate simplified explanation. Please try again.',
      });
    } finally {
      setIsSimplifying(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          {topic.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          A deep dive into {topic.title} in {language.name}.
        </p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle>Original Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed">{topic.explanation}</p>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4">
        <Button onClick={handleSimplify} disabled={isSimplifying} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Wand2 className="mr-2 h-5 w-5" />
          {isSimplifying ? 'Generating...' : 'Simplify with AI'}
        </Button>
        <p className="text-sm text-muted-foreground">Let AI help you understand this topic better.</p>
      </div>
      
      {isSimplifying && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/3" />
            </CardHeader>
             <CardContent>
                <Skeleton className="h-32 w-full" />
            </CardContent>
          </Card>
        </div>
      )}

      {simplifiedContent && (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle>Simplified Explanation</CardTitle>
                <CardDescription>A simpler take on {topic.title}.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="whitespace-pre-wrap font-body text-base leading-relaxed text-foreground/90">
                  {simplifiedContent.simplifiedExplanation}
                </div>
             </CardContent>
           </Card>
           <Card className="border-primary/50 bg-primary/5">
             <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>See {topic.title} in action.</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="bg-card p-4 rounded-md overflow-x-auto">
                  <pre><code className="font-code text-sm text-foreground">
                    {simplifiedContent.examples}
                  </code></pre>
                </div>
             </CardContent>
           </Card>
        </div>
      )}
    </div>
  );
}
