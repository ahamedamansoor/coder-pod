
'use client';

import React, { useState, useEffect } from 'react';
import {
  simplifyTopicExplanation,
  type SimplifyTopicExplanationOutput,
} from '@/ai/flows/simplify-topic-explanations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { MermaidDiagram } from './mermaid-diagram';
import { Sparkles, Lightbulb, Book, Code } from 'lucide-react';
import type { Language, Topic } from '@/app/data';
import { useToast } from '@/hooks/use-toast';

interface AiSimplificationProps {
  topic: Topic;
  language: Language;
  codeSnippet?: string;
}

export function AiSimplification({ topic, language, codeSnippet }: AiSimplificationProps) {
  const [simplification, setSimplification] = useState<SimplifyTopicExplanationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const getSimplification = async () => {
      setIsLoading(true);
      setSimplification(null);
      try {
        const result = await simplifyTopicExplanation({
          topic: topic.title,
          language: language.name,
          explanation: topic.explanation,
          codeSnippet: codeSnippet,
        });
        setSimplification(result);
      } catch (error) {
        console.error('Failed to get AI simplification:', error);
        toast({
          variant: 'destructive',
          title: 'AI Simplification Failed',
          description: 'Could not generate a simplified explanation. Please try again later.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    getSimplification();
  }, [topic, language, codeSnippet, toast]);

  if (isLoading) {
    return (
      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <Skeleton className="h-7 w-1/3" />
          </div>
          <Skeleton className="h-5 w-2/3" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-32 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!simplification) {
    return null; // Don't render anything if fetching failed
  }

  return (
    <Card className="border-primary/50 bg-primary/5 animate-in fade-in-50 duration-500">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <CardTitle>AI-Powered Simplification</CardTitle>
        </div>
        <CardDescription>{simplification.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-background/50 p-4 rounded-lg border">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Lightbulb className="w-5 h-5 text-yellow-500" />Analogy</h3>
            <p className="text-sm text-muted-foreground">{simplification.analogy}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background/50 p-4 rounded-lg border">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Book className="w-5 h-5 text-blue-500" />Key Ideas</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
                {simplification.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
          </div>
          {simplification.examples && (
             <div className="bg-background/50 p-4 rounded-lg border">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Code className="w-5 h-5 text-green-500" />Code Example</h3>
                <MermaidDiagram diagram={simplification.examples} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
