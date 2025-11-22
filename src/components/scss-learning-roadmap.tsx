'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap, Code, Layout, Repeat, GitBranch, Database, Rocket, Trophy } from 'lucide-react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Language, Topic } from '@/app/data';
import { useScss } from '@/app/scss/scss-context';
import { ModuleCompletionCelebration } from './module-completion-celebration';

const categoryIcons: Record<string, { icon: any; color: string; level: string }> = {
  '1. Fundamentals': { icon: Zap, color: 'text-blue-600', level: 'Beginner' },
  '2. Nesting & Selectors': { icon: Layout, color: 'text-green-600', level: 'Beginner' },
  '3. File Organization': { icon: Code, color: 'text-purple-600', level: 'Beginner' },
  '4. Reusability': { icon: Repeat, color: 'text-orange-600', level: 'Intermediate' },
  '5. Control & Logic': { icon: GitBranch, color: 'text-pink-600', level: 'Intermediate' },
  '6. Data Types & Functions': { icon: Database, color: 'text-indigo-600', level: 'Advanced' },
  '7. Advanced Topics': { icon: Rocket, color: 'text-red-600', level: 'Advanced' },
  '8. Professional Development': { icon: Trophy, color: 'text-yellow-600', level: 'Expert' },
};

export const ScssLearningRoadmap = ({ language }: { language: Language }) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useScss();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [completedModule, setCompletedModule] = useState<string | null>(null);

  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // Group topics by category
  const allTopics = language.topics.filter(t => t.slug !== 'learning-plan');
  const topicsByCategory = allTopics.reduce((acc, topic) => {
    const category = topic.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

  const modules = Object.entries(topicsByCategory).map(([category, topics]) => ({
    id: category,
    title: category,
    level: categoryIcons[category]?.level || 'Other',
    icon: categoryIcons[category]?.icon || BookOpen,
    color: categoryIcons[category]?.color || 'text-gray-600',
    topics,
  }));

  useEffect(() => {
    if (modules.length > 0) {
      setExpandedModule(modules[0].id);
    }
  }, []);

  const toggleTopic = (topicId: string) => {
    if (!isUserAuthenticated) return;
    handleToggleComplete(topicId);

    const topicModule = modules.find(m => m.topics.some(t => t.slug === topicId));
    if (!topicModule) return;

    const isCompleting = !completedTopics.has(topicId);
    if (isCompleting) {
        const allTopicsInModuleCompleted = topicModule.topics.every(t => completedTopics.has(t.slug) || t.slug === topicId);
        if (allTopicsInModuleCompleted) {
          setCompletedModule(topicModule.title);
          const currentModuleIndex = modules.findIndex(m => m.id === topicModule.id);
          if (currentModuleIndex !== -1 && currentModuleIndex < modules.length - 1) {
            setExpandedModule(modules[currentModuleIndex + 1].id);
          }
        }
    }
  };

  const calculateProgress = () => {
    if (!isUserAuthenticated) return 0;
    const totalTopics = allTopics.length;
    if (totalTopics === 0) return 0;
    return Math.round((completedTopics.size / totalTopics) * 100);
  };

  const calculateModuleProgress = (moduleTopics: Topic[]) => {
    if (!isUserAuthenticated) return 0;
    const completed = moduleTopics.filter(t => completedTopics.has(t.slug)).length;
    return Math.round((completed / moduleTopics.length) * 100);
  };

  if (isUserLoading || isProgressLoading) {
    return (
        <div className="p-2 md:p-6">
          <Skeleton className="h-48 w-full mb-8" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (<Skeleton key={i} className="h-32 w-full rounded-xl" />))}
          </div>
        </div>
    );
  }

  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = allTopics.length;

  const TopicItem = ({ topic }: { topic: Topic }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.slug);
    const LinkWrapper = isUserAuthenticated ? Link : 'div';

    const itemContent = (
      <div
        onClick={() => isUserAuthenticated && toggleTopic(topic.slug)}
        className={cn(
          "bg-background border rounded-lg p-4 transition-all duration-200",
          isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50",
          !isUserAuthenticated && "cursor-not-allowed opacity-70",
          isCompleted ? 'border-primary bg-primary/5' : 'border-border'
        )}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {isCompleted ? (
              <CheckCircle className="w-6 h-6 text-primary" />
            ) : (
              <Circle className="w-6 h-6 text-muted-foreground/50" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <LinkWrapper
                href={isUserAuthenticated ? `/${language.slug}/${topic.slug}` : '#'}
                className={cn(isUserAuthenticated && "hover:underline")}
              >
                <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
              </LinkWrapper>
            </div>
            <p className="text-muted-foreground text-sm">{topic.explanation}</p>
          </div>
        </div>
      </div>
    );

    if (!isUserAuthenticated) {
      return (
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
            <TooltipContent><p>Sign in to track your progress.</p></TooltipContent>
          </UITooltip>
        </TooltipProvider>
      );
    }
    return itemContent;
  };

  return (
    <div className="p-2 md:p-6 max-w-none">
      <ModuleCompletionCelebration
        isOpen={!!completedModule}
        moduleName={completedModule || ""}
        languageSlug={language.slug}
        onClose={() => setCompletedModule(null)}
      />

      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-6xl">💅</div>
            <h1 className="text-5xl font-bold text-foreground">Sass/SCSS Mastery</h1>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            From beginner to expert: Master CSS with superpowers through structured learning.
          </p>

          {/* Overall Progress Card */}
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">Overall Progress</span>
              <span className="text-2xl font-bold text-primary">{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {completedCount} of {totalTopicCount} topics completed
            </p>
          </div>
        </div>

        {/* Learning Path Description */}
        <div className="max-w-4xl mx-auto mb-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-100">🎯 Your Learning Journey</h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1-3.</span>
              <div>
                <strong className="text-blue-700 dark:text-blue-300">Beginner</strong>
                <p className="text-muted-foreground">Core syntax & organization</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">4-5.</span>
              <div>
                <strong className="text-orange-700 dark:text-orange-300">Intermediate</strong>
                <p className="text-muted-foreground">Reusability & logic</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">6-7.</span>
              <div>
                <strong className="text-indigo-700 dark:text-indigo-300">Advanced</strong>
                <p className="text-muted-foreground">Functions & patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">8.</span>
              <div>
                <strong className="text-yellow-700 dark:text-yellow-300">Expert</strong>
                <p className="text-muted-foreground">Architecture & mastery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module Cards */}
        <div className="space-y-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const progress = calculateModuleProgress(module.topics);
            const completedInModule = module.topics.filter(t => completedTopics.has(t.slug)).length;

            return (
              <div
                key={module.id}
                className="bg-card border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="bg-card p-6 cursor-pointer flex items-center justify-between border-b hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={cn("p-3 rounded-full bg-muted", module.color)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {module.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 max-w-xs">
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {completedInModule}/{module.topics.length} completed
                        </span>
                      </div>
                    </div>
                  </div>
                  {expandedModule === module.id ? (
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>

                {expandedModule === module.id && (
                  <div className="p-6 space-y-3 bg-muted/50">
                    {module.topics.map((topic) => (
                      <TopicItem key={topic.slug} topic={topic} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground">
          <Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
          <p className="text-lg font-semibold">Master Sass/SCSS!</p>
          <p className="text-sm mt-2">
            Click on topics to mark them as complete and track your progress through the learning path!
          </p>
        </div>
      </div>
    </div>
  );
};

