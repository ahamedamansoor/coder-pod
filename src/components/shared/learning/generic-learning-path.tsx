'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap, Code, Rocket, Trophy, LucideIcon } from 'lucide-react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Language, Topic } from '@/app/data';
import { ModuleCompletionCelebration } from '@/components/shared/modals/module-completion-celebration';

// Shared brand color (Coder Pod blue) using theme-friendly classes
const LOGO_COLOR_CLASS = 'text-primary';
const LOGO_BG_CLASS = 'bg-primary';
const LOGO_BG_SOFT_CLASS = 'bg-primary/10 dark:bg-primary/20';
const LOGO_BORDER_SOFT = 'border-primary/40 dark:border-primary/50';

// Utility function to decode HTML entities (works in SSR and client)
const decodeHtmlEntities = (text: string | undefined | null): string => {
  // Safety check for undefined or null
  if (!text) return '';
  
  // Common HTML entities mapping for SSR compatibility
  const entityMap: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&#x27;': "'",
    '&nbsp;': ' ',
  };

  // First, replace common entities
  let decoded = text;
  for (const [entity, char] of Object.entries(entityMap)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char);
  }

  // If in browser, use DOM parser for any remaining entities
  if (typeof window !== 'undefined') {
    try {
      const textarea = document.createElement('textarea');
      textarea.innerHTML = decoded;
      return textarea.value;
    } catch (error) {
      console.error('Error decoding HTML entities:', error);
      return decoded;
    }
  }

  return decoded;
};

interface CategoryIcon {
  icon: LucideIcon;
  color: string;
  level: string;
}

interface LanguageContextHooks {
  completedTopics: Set<string>;
  handleToggleComplete: (topicId: string) => void;
  isProgressLoading: boolean;
}

interface GenericLearningPathProps {
  language: Language;
  contextHooks: LanguageContextHooks;
  categoryIcons?: Record<string, CategoryIcon>;
  totalTopicCount?: number;
}

const defaultCategoryIcons: Record<string, CategoryIcon> = {
  // Common patterns for all languages
  'Fundamentals': { icon: Zap, color: 'text-blue-600', level: 'Beginner' },
  'Getting Started': { icon: Rocket, color: 'text-blue-600', level: 'Beginner' },
  'Basics': { icon: BookOpen, color: 'text-blue-600', level: 'Beginner' },
  'Core Concepts': { icon: Code, color: 'text-green-600', level: 'Intermediate' },
  'Advanced': { icon: Trophy, color: 'text-red-600', level: 'Advanced' },
  'Expert': { icon: Award, color: 'text-purple-600', level: 'Expert' },
};

export const GenericLearningPath = ({ 
  language, 
  contextHooks,
  categoryIcons = {},
  totalTopicCount
}: GenericLearningPathProps) => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = contextHooks;
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

  // Safety check for language prop
  if (!language || !language.topics) {
    return (
      <div className="p-6 text-center">
        <p className="text-destructive">Error: Language data not available. Please refresh the page.</p>
      </div>
    );
  }

  // Merge default icons with custom icons
  const mergedIcons = { ...defaultCategoryIcons, ...categoryIcons };

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
    level: mergedIcons[category]?.level || 'Other',
    icon: mergedIcons[category]?.icon || BookOpen,
    // Use unified logo/brand color for module icons
    color: LOGO_COLOR_CLASS,
    topics,
  }));

  useEffect(() => {
    if (modules.length > 0 && !expandedModule) {
      setExpandedModule(modules[0].id);
    }
  }, [modules.length]);

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
    const total = totalTopicCount || allTopics.length;
    if (total === 0) return 0;
    return Math.round((completedTopics.size / total) * 100);
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
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 w-full rounded-xl" />)}
        </div>
      </div>
    );
  }

  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalCount = totalTopicCount || allTopics.length;

  const TopicItem = ({ topic }: { topic: Topic }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.slug);
    const itemContent = (
      <div 
        onClick={() => toggleTopic(topic.slug)} 
        className={cn(
          "border rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5",
          isUserAuthenticated && "cursor-pointer hover:shadow-md hover:border-primary/50 dark:hover:border-primary/60",
          !isUserAuthenticated && "cursor-not-allowed opacity-70",
          isCompleted ? cn(
            "bg-card dark:bg-slate-900/80",
            "border-primary",
            "shadow-sm"
          ) : cn(
            "bg-card dark:bg-slate-900/60",
            "border-primary/30 dark:border-primary/40"
          )
        )}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {isCompleted ? (
              <CheckCircle className={cn(
                "w-6 h-6 transition-all duration-200",
                LOGO_COLOR_CLASS,
                "animate-in zoom-in-95"
              )} />
            ) : (
              <Circle className="w-6 h-6 text-muted-foreground/50 transition-colors" />
            )}
          </div>
          <div className="flex-1">
            <Link href={`/${language.slug}/${topic.slug}`} className={cn(
              "hover:underline transition-colors hover:text-primary"
            )}>
              <h3 className={cn(
                "text-lg font-semibold transition-colors",
                isCompleted ? "" : "text-foreground dark:text-slate-100"
              )}>
                {decodeHtmlEntities(topic.title)}
              </h3>
            </Link>
            <p className={cn(
              "text-sm mt-1 transition-colors",
              "text-muted-foreground"
            )}>
              {decodeHtmlEntities(topic.explanation)}
            </p>
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
    <div className="min-h-screen w-full p-2 md:p-6 pb-16">
      <ModuleCompletionCelebration 
        isOpen={!!completedModule}
        moduleName={completedModule || ""}
        languageSlug={language.slug}
        onClose={() => setCompletedModule(null)}
      />
      
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={cn("text-center mb-8", "animate-in fade-in-50")}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className={cn("w-12 h-12", LOGO_COLOR_CLASS, "animate-bounce")} />
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold",
              ""
            )}>
              <span className={LOGO_COLOR_CLASS}>
                {decodeHtmlEntities(language.name)}
              </span>{' '}
              Learning Path
            </h1>
          </div>
          <p className={cn(
            "text-lg mb-6 transition-colors",
            "text-muted-foreground"
          )}>
            A comprehensive roadmap from beginner to expert - master {decodeHtmlEntities(language.name)} with {totalCount} topics across {modules.length} categories.
          </p>
          
          {/* Progress Card */}
          <div className={cn(
            "max-w-2xl mx-auto rounded-lg p-6 border transition-all duration-300",
            "",
            "animate-in slide-in-from-bottom-4",
            "border-[#5B7FFF]/30"
          )}>
            <div className="flex items-center justify-between mb-3">
              <span className={cn(
                "text-sm font-semibold",
                ""
              )}>
                Overall Progress
              </span>
              <span className={cn(
                "text-2xl font-bold",
                LOGO_COLOR_CLASS
              )}>
                {calculateProgress()}%
              </span>
            </div>
            <div className={cn(
              "w-full rounded-full h-3 overflow-hidden",
              "bg-gray-200 dark:bg-gray-700"
            )}>
              <div 
                className={cn(
                  "h-3 rounded-full transition-all duration-500",
                  LOGO_BG_CLASS
                )} 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <p className={cn(
              "text-sm mt-2",
              "text-muted-foreground"
            )}>
              {completedCount} of {totalCount} topics completed
            </p>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((module) => {
            const ModuleIcon = module.icon;
            const moduleProgress = calculateModuleProgress(module.topics);
            
            return (
              <div 
                key={module.id} 
                className={cn(
                  "border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  "",
                  "bg-card dark:bg-slate-900/80",
                  "animate-in fade-in-50",
                  "border-primary/30 dark:border-primary/50"
                )}
              >
                {/* Module Header */}
                <div 
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)} 
                  className={cn(
                    "p-6 cursor-pointer flex items-center justify-between border-b transition-all duration-200",
                    "",
                    "border-primary/30 dark:border-primary/50",
                    expandedModule === module.id && "bg-primary/10 dark:bg-primary/20",
                    expandedModule === module.id && "border-primary",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "text-3xl p-3 rounded-full transition-all duration-200 hover:scale-110",
                      "",
                      "border-primary/30 dark:border-primary/50",
                      module.color
                    )}>
                      <ModuleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className={cn(
                          "text-xl font-bold transition-colors",
                          "",
                          "dark:text-slate-100"
                        )}>
                          {decodeHtmlEntities(module.title)}
                        </h2>
                          <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105",
                            LOGO_BG_SOFT_CLASS,
                            LOGO_COLOR_CLASS,
                            "border",
                            LOGO_BORDER_SOFT
                          )}>
                            {module.level}
                          </span>
                        <span className={cn(
                          "text-sm transition-colors",
                          "text-muted-foreground"
                        )}>
                          {module.topics.length} topics
                        </span>
                      </div>
                      {/* Module Progress Bar */}
                      <div className="flex items-center gap-2 mt-2">
                      <div className={cn(
                        "w-32 rounded-full h-2 overflow-hidden",
                        "bg-gray-200 dark:bg-gray-700"
                      )}>
                        <div 
                          className={cn(
                            "h-2 rounded-full transition-all duration-500",
                            "bg-primary"
                          )} 
                          style={{ width: `${moduleProgress}%` }}
                        ></div>
                      </div>
                        <span className={cn(
                          "text-xs transition-colors",
                          "text-muted-foreground"
                        )}>
                          {moduleProgress}%
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

                {/* Module Topics */}
                {expandedModule === module.id && (
                  <div className={cn(
                    "p-6 space-y-3 transition-colors",
                    ""
                  )}>
                    {module.topics.map((topic) => (
                      <TopicItem key={topic.slug} topic={topic} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Learning Tips */}
        <div className={cn(
          "mt-12 rounded-lg p-6 border transition-all duration-300",
          "",
          "animate-in fade-in-50",
          "border-primary/30 dark:border-primary/50"
        )}>
          <div className="flex items-center gap-3 mb-6">
            <Zap className={cn(
              "w-6 h-6",
              LOGO_COLOR_CLASS
            )} />
            <h2 className={cn(
              "text-2xl font-bold",
              ""
            )}>
              Learning Tips
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={cn(
              "rounded-lg p-4 border transition-all duration-200",
              "",
              "border-primary/30 dark:border-primary/50"
            )}>
              <h3 className={cn(
                "font-semibold text-base mb-2",
                ""
              )}>
                Practice Daily
              </h3>
              <p className={cn(
                "text-sm",
                "text-muted-foreground"
              )}>
                Consistency is key. Practice a little bit every day to build strong foundations.
              </p>
            </div>
            <div className={cn(
              "rounded-lg p-4 border transition-all duration-200",
              "",
              "border-primary/30 dark:border-primary/50"
            )}>
              <h3 className={cn(
                "font-semibold text-base mb-2",
                ""
              )}>
                Build Projects
              </h3>
              <p className={cn(
                "text-sm",
                "text-muted-foreground"
              )}>
                Apply what you learn by building real projects to solidify your understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={cn(
          "mt-12 mb-8 text-center transition-colors",
          "animate-in fade-in-50"
        )}>
          <Award className={cn(
            "w-12 h-12 mx-auto mb-3 transition-all duration-200 hover:scale-110",
            LOGO_COLOR_CLASS
          )} />
          <p className={cn(
            "text-lg font-semibold",
            ""
          )}>
            Happy Learning!
          </p>
          <p className={cn(
            "text-sm mt-2 mb-4",
            "text-muted-foreground"
          )}>
            Click on topics to mark them as complete and track your progress!
          </p>
        </div>
      </div>
    </div>
  );
};
