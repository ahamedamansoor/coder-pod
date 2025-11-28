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

  // Allow guest users to view content - no redirect needed

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
          "rounded-xl p-4 transition-all duration-300 group",
          "border border-border/40 dark:border-border/30",
          isUserAuthenticated && "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5",
          !isUserAuthenticated && "cursor-not-allowed opacity-70",
          isCompleted ? cn(
            "bg-gradient-to-br from-primary/5 via-primary/3 to-transparent",
            "dark:from-primary/10 dark:via-primary/5 dark:to-transparent",
            "border-primary/30 dark:border-primary/40",
            "shadow-sm"
          ) : cn(
            "bg-card/50 dark:bg-slate-900/30",
            "hover:bg-card/80 dark:hover:bg-slate-900/50",
            "hover:border-primary/30"
          )
        )}
      >
        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 shrink-0">
            {isCompleted ? (
              <div className={cn(
                "relative p-1 rounded-full",
                "bg-primary/10 dark:bg-primary/15"
              )}>
                <CheckCircle className={cn(
                  "w-5 h-5 transition-all duration-300",
                  LOGO_COLOR_CLASS,
                  "animate-in zoom-in-95"
                )} />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse" />
              </div>
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground/40 transition-all duration-200 group-hover:text-muted-foreground/60" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <Link 
              href={`/${language.slug}/${topic.slug}`} 
              className="block"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={cn(
                "text-base font-semibold transition-all duration-200 leading-snug",
                "group-hover:text-primary",
                isCompleted ? "text-foreground/90" : "text-foreground"
              )}>
                {decodeHtmlEntities(topic.title)}
              </h3>
            </Link>
            <p className={cn(
              "text-sm mt-1.5 leading-relaxed transition-colors",
              "text-muted-foreground/80",
              "line-clamp-2"
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
        <div className={cn("text-center mb-12", "animate-in fade-in-50 slide-in-from-top-4 duration-700")}>
          {/* Title Section */}
          <div className="relative mb-8">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 dark:opacity-10 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6 animate-in zoom-in-95 duration-500">
              <div className="relative">
                <BookOpen className={cn(
                  "w-14 h-14", 
                  LOGO_COLOR_CLASS,
                  "transition-all duration-500 hover:scale-110 hover:rotate-12"
                )} />
                <div className={cn(
                  "absolute -inset-2 rounded-full blur-xl opacity-50 -z-10",
                  "bg-primary/30 animate-pulse"
                )} />
              </div>
              
              <h1 className={cn(
                "text-4xl md:text-6xl font-extrabold tracking-tight",
                "animate-in slide-in-from-left-5 duration-700"
              )}>
                <span className={cn(
                  LOGO_COLOR_CLASS,
                  "relative inline-block",
                  "transition-all duration-300 hover:scale-105"
                )}>
                  {decodeHtmlEntities(language.name)}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent rounded-lg blur-sm -z-10" />
                </span>
                {' '}
                <span className="text-foreground/90 font-semibold">
                  Learning Path
                </span>
              </h1>
            </div>
            
            <p className={cn(
              "text-base md:text-lg max-w-3xl mx-auto leading-relaxed",
              "text-muted-foreground",
              "animate-in fade-in-50 slide-in-from-bottom-3 duration-700 delay-150"
            )}>
              A comprehensive roadmap from beginner to expert — master{' '}
              <span className="font-semibold text-foreground/80">
                {decodeHtmlEntities(language.name)}
              </span>
              {' '}with{' '}
              <span className={cn("font-bold", LOGO_COLOR_CLASS)}>{totalCount}</span>
              {' '}topics across{' '}
              <span className={cn("font-bold", LOGO_COLOR_CLASS)}>{modules.length}</span>
              {' '}categories
            </p>
          </div>
          
          {/* Progress Card - Glass Morphism Style */}
          <div className={cn(
            "max-w-2xl mx-auto rounded-2xl p-8 backdrop-blur-sm",
            "bg-gradient-to-br from-card/80 via-card/60 to-card/80",
            "dark:from-slate-900/60 dark:via-slate-900/40 dark:to-slate-900/60",
            "border border-primary/20 dark:border-primary/30",
            "shadow-xl shadow-primary/5 dark:shadow-primary/10",
            "transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]",
            "animate-in slide-in-from-bottom-8 duration-700 delay-300"
          )}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "bg-primary/10 dark:bg-primary/20",
                  "border border-primary/30"
                )}>
                  <Trophy className={cn("w-5 h-5", LOGO_COLOR_CLASS)} />
                </div>
                <span className="text-sm font-bold tracking-wide uppercase text-foreground/80">
                  Overall Progress
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={cn(
                  "text-4xl font-black",
                  LOGO_COLOR_CLASS,
                  "transition-all duration-300"
                )}>
                  {calculateProgress()}
                </span>
                <span className={cn("text-xl font-semibold", LOGO_COLOR_CLASS)}>%</span>
              </div>
            </div>
            
            {/* Enhanced Progress Bar */}
            <div className={cn(
              "relative w-full rounded-full h-4 overflow-hidden",
              "bg-muted/50 dark:bg-slate-800/50",
              "border border-primary/10",
              "shadow-inner"
            )}>
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-700 ease-out",
                  "bg-gradient-to-r from-primary via-primary/90 to-primary",
                  "shadow-lg shadow-primary/30",
                  "relative overflow-hidden"
                )} 
                style={{ width: `${calculateProgress()}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground font-medium">
                {completedCount} of {totalCount} topics completed
              </p>
              {calculateProgress() === 100 && (
                <span className={cn(
                  "text-xs font-bold px-3 py-1 rounded-full",
                  "bg-primary/15 border border-primary/30",
                  LOGO_COLOR_CLASS,
                  "animate-in zoom-in-95"
                )}>
                  🎉 Complete!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-6">
          {modules.map((module) => {
            const ModuleIcon = module.icon;
            const moduleProgress = calculateModuleProgress(module.topics);
            
            return (
              <div 
                key={module.id} 
                className={cn(
                  "rounded-2xl shadow-sm overflow-hidden transition-all duration-500",
                  "bg-gradient-to-br from-card/95 via-card to-card/95",
                  "dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/70",
                  "border border-border/50 dark:border-border/30",
                  "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5",
                  "backdrop-blur-sm",
                  "animate-in fade-in-50 slide-in-from-bottom-4"
                )}
              >
                {/* Module Header */}
                <div 
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)} 
                  className={cn(
                    "p-5 md:p-6 cursor-pointer flex items-center justify-between",
                    "transition-all duration-300",
                    expandedModule === module.id && "bg-primary/5 dark:bg-primary/10"
                  )}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={cn(
                      "relative p-3.5 rounded-2xl transition-all duration-300",
                      "bg-primary/10 dark:bg-primary/15",
                      "border border-primary/20 dark:border-primary/25",
                      "shadow-sm shadow-primary/10",
                      "group-hover:scale-110 group-hover:rotate-6",
                      module.color
                    )}>
                      <ModuleIcon className="w-7 h-7 relative z-10" />
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2 className={cn(
                          "text-lg md:text-xl font-bold transition-colors",
                          "text-foreground/90 dark:text-foreground/95"
                        )}>
                          {decodeHtmlEntities(module.title)}
                        </h2>
                          <span className={cn(
                            "px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide",
                            "bg-primary/10 dark:bg-primary/15",
                            LOGO_COLOR_CLASS,
                            "border border-primary/20",
                            "transition-all duration-200 hover:scale-105"
                          )}>
                            {module.level}
                          </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          {module.topics.length} topics
                        </span>
                      </div>
                      {/* Module Progress Bar */}
                      <div className="flex items-center gap-3 mt-2">
                      <div className={cn(
                        "flex-1 max-w-[180px] rounded-full h-2 overflow-hidden",
                        "bg-muted/30 dark:bg-slate-800/40",
                        "shadow-inner"
                      )}>
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-700 ease-out",
                            "bg-gradient-to-r from-primary to-primary/80",
                            "shadow-sm shadow-primary/30"
                          )} 
                          style={{ width: `${moduleProgress}%` }}
                        ></div>
                      </div>
                        <span className={cn(
                          "text-xs font-bold tabular-nums",
                          LOGO_COLOR_CLASS
                        )}>
                          {moduleProgress}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={cn(
                    "ml-4 p-2 rounded-full transition-all duration-200",
                    "hover:bg-muted/50"
                  )}>
                    {expandedModule === module.id ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Module Topics */}
                {expandedModule === module.id && (
                  <div className={cn(
                    "px-5 md:px-6 pb-5 md:pb-6 space-y-3",
                    "border-t border-border/30 dark:border-border/20",
                    "bg-muted/5 dark:bg-slate-950/20",
                    "animate-in fade-in-50 slide-in-from-top-2 duration-300"
                  )}>
                    <div className="h-3" />
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
          "mt-12 rounded-2xl p-6 md:p-8 border backdrop-blur-sm",
          "bg-gradient-to-br from-card/80 via-card/60 to-card/80",
          "dark:from-slate-900/50 dark:via-slate-900/30 dark:to-slate-900/50",
          "border-border/50 dark:border-border/30",
          "shadow-sm",
          "animate-in fade-in-50 slide-in-from-bottom-4"
        )}>
          <div className="flex items-center gap-3 mb-6">
            <div className={cn(
              "p-2.5 rounded-xl",
              "bg-primary/10 dark:bg-primary/15",
              "border border-primary/20"
            )}>
              <Zap className={cn(
                "w-6 h-6",
                LOGO_COLOR_CLASS
              )} />
            </div>
            <h2 className="text-2xl font-bold text-foreground/90">
              Learning Tips
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={cn(
              "rounded-xl p-5 border transition-all duration-300",
              "bg-card/50 dark:bg-slate-900/30",
              "border-border/40 dark:border-border/30",
              "hover:shadow-md hover:-translate-y-0.5"
            )}>
              <h3 className="font-bold text-base mb-2 text-foreground/90">
                Practice Daily
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground/80">
                Consistency is key. Practice a little bit every day to build strong foundations.
              </p>
            </div>
            <div className={cn(
              "rounded-xl p-5 border transition-all duration-300",
              "bg-card/50 dark:bg-slate-900/30",
              "border-border/40 dark:border-border/30",
              "hover:shadow-md hover:-translate-y-0.5"
            )}>
              <h3 className="font-bold text-base mb-2 text-foreground/90">
                Build Projects
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground/80">
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
