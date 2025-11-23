
'use client';

import React, { useState, useEffect } from 'react';
import {
  simplifyTopicExplanation,
  type SimplifyTopicExplanationOutput,
} from '@/ai/flows/simplify-topic-explanations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MermaidDiagram } from './mermaid-diagram';
import { Sparkles, Lightbulb, Book, Code } from 'lucide-react';
import type { Language, Topic } from '@/app/data';
import { useToast } from '@/hooks/use-toast';
import { getThemeClasses, animationClasses } from '@/lib/language-themes';
import { cn } from '@/lib/utils';

interface AiSimplificationProps {
  topic: Topic;
  language: Language;
  codeSnippet?: string;
}

export function AiSimplification({ topic, language, codeSnippet }: AiSimplificationProps) {
  const [simplification, setSimplification] = useState<SimplifyTopicExplanationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Get theme classes for the current language
  const themeClasses = getThemeClasses(language.slug);

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
      <Card className={cn(
        "transition-all duration-200",
        themeClasses.cardBackground,
        themeClasses.border,
        animationClasses.fadeIn
      )}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sparkles className={cn(
              "w-6 h-6 animate-pulse",
              themeClasses.primary
            )} />
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
    <Card className={cn(
      "transition-all duration-500 hover:shadow-lg",
      themeClasses.cardBackground,
      themeClasses.border,
      animationClasses.fadeIn
    )}>
      <CardHeader>
        <div className="flex items-center gap-3">
            <Sparkles className={cn(
              "w-6 h-6 transition-all duration-200 hover:scale-110",
              themeClasses.primary
            )} />
            <CardTitle className={themeClasses.textPrimary}>
              AI-Powered Simplification
            </CardTitle>
        </div>
        <CardDescription className={themeClasses.textSecondary}>
          {simplification.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className={cn(
          "p-4 rounded-lg border transition-all duration-200 hover:shadow-sm",
          themeClasses.cardElevated
        )}>
            <h3 className={cn(
              "font-semibold text-lg flex items-center gap-2 mb-2",
              themeClasses.textPrimary
            )}>
              <Lightbulb className={cn(
                "w-5 h-5",
                themeClasses.secondary
              )} />
              Analogy
            </h3>
            <p className={cn(
              "text-sm",
              themeClasses.textSecondary
            )}>
              {simplification.analogy}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={cn(
            "p-4 rounded-lg border transition-all duration-200 hover:shadow-sm",
            themeClasses.cardElevated
          )}>
            <h3 className={cn(
              "font-semibold text-lg flex items-center gap-2 mb-2",
              themeClasses.textPrimary
            )}>
              <Book className={cn(
                "w-5 h-5",
                themeClasses.primary
              )} />
              Key Ideas
            </h3>
            <ul className={cn(
              "list-disc list-inside space-y-2 text-sm",
              themeClasses.textSecondary
            )}>
                {simplification.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
          </div>
          {simplification.examples && (
             <div className={cn(
               "p-4 rounded-lg border transition-all duration-200 hover:shadow-sm",
               themeClasses.cardElevated
             )}>
                <h3 className={cn(
                  "font-semibold text-lg flex items-center gap-2 mb-2",
                  themeClasses.textPrimary
                )}>
                  <Code className={cn(
                    "w-5 h-5",
                    themeClasses.accent
                  )} />
                  Code Example
                </h3>
                <MermaidDiagram diagram={simplification.examples} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
