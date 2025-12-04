'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Language, Topic } from '@/data/languages';
import Link from 'next/link';

interface LearningPathChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  completedTopics?: Set<string>;
  showProgress?: boolean;
}

export const LearningPathChartModal = ({
  isOpen,
  onClose,
  language,
  completedTopics = new Set<string>(),
  showProgress = true,
}: LearningPathChartModalProps) => {
  // Check if this is a role-based roadmap (reference only, not learnable)
  const roleBasedRoadmaps = ['frontend-developer', 'backend-developer'];
  const isRoleBasedRoadmap = roleBasedRoadmaps.includes(language.slug);
  
  // Disable progress tracking for role-based roadmaps
  const effectiveShowProgress = isRoleBasedRoadmap ? false : showProgress;
  
  // Group topics by category - filter out special sidebar items that aren't learning content
  const excludedSlugs = ['learning-plan', 'interview-questions', 'react-version-updates'];
  const allTopics = language.topics.filter(t => !excludedSlugs.includes(t.slug));
  const topicsByCategory = allTopics.reduce((acc, topic) => {
    const category = topic.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

  const categories = Object.entries(topicsByCategory);
  
  // Helper to determine if a topic goes left or right (alternating pattern)
  const getTopicSide = (categoryIndex: number, topicIndex: number): 'left' | 'right' => {
    // Alternate based on topic index within category
    return topicIndex % 2 === 0 ? 'left' : 'right';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="max-w-full w-screen h-screen p-0 gap-0 overflow-hidden rounded-none animate-in fade-in duration-300">
        {/* Animated Background with Particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/10 to-teal-400/10 dark:from-emerald-600/10 dark:to-teal-600/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <VisuallyHidden>
          <DialogTitle>{language.name} Learning Path Chart</DialogTitle>
        </VisuallyHidden>
        
        {/* Floating Language Badge and Learning Path Button */}
        <div className="absolute top-6 left-6 z-50 flex flex-col gap-3 animate-in slide-in-from-left-5 duration-500">
          <div className="group relative px-5 py-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-2 border-primary/20 dark:border-primary/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            <div className="relative flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary animate-pulse" />
              <span className="font-black text-sm bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {language.name} Roadmap
              </span>
            </div>
          </div>
          
          {/* View Learning Path Button - Only for skill-based roadmaps */}
          {!isRoleBasedRoadmap && (
            <Link 
              href={`/languages/${language.slug}/learning-plan`}
              className="group relative px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white" />
                <span className="font-bold text-sm text-white">
                  View Learning Path
                </span>
              </div>
            </Link>
          )}
        </div>
        
        {/* Enhanced Close Button */}
        <div className="absolute top-6 right-6 z-50 animate-in slide-in-from-right-5 duration-500">
          <button
            onClick={onClose}
            className="group relative p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-2 border-slate-200/50 dark:border-slate-700/50 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 dark:hover:from-red-950/20 dark:hover:to-pink-950/20 hover:border-red-300/50 dark:hover:border-red-700/50 hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/20"
          >
            <X className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/20 group-hover:to-pink-500/20 blur-md transition-all duration-300" />
          </button>
        </div>

        {/* Content - Scrollable Flowchart */}
        <div className="relative overflow-y-auto overflow-x-auto p-6 scroll-smooth">
          <div className="min-w-[900px] max-w-[1200px] mx-auto">
            {/* Flowchart Container */}
            <div className="relative px-4">
              {/* Central Spine - Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/60" 
                   style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.25)' }} />

              {/* Categories as Central Nodes */}
              <div className="space-y-20">
                {categories.map(([category, topics], categoryIndex) => {
                  const categoryCompleted = effectiveShowProgress && topics.every(t => completedTopics.has(t.slug));
                  const categoryProgress = effectiveShowProgress ? topics.filter(t => completedTopics.has(t.slug)).length : 0;
                  const percentage = effectiveShowProgress ? Math.round((categoryProgress / topics.length) * 100) : 0;

                  return (
                    <div key={category} className="relative animate-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                      {/* Category Box - Central Node */}
                      <div className="relative flex justify-center mb-8 group">
                        <div className={cn(
                          "relative z-20 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white dark:border-slate-950 transition-all duration-500 hover:scale-105 cursor-default",
                          categoryCompleted
                            ? "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"
                            : "bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400"
                        )}>
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:animate-shimmer-slide" style={{ backgroundSize: '200% 100%' }} />
                          
                          <div className="relative flex items-center gap-2.5">
                            <div>
                              <h3 className={cn(
                                "text-base font-black tracking-tight leading-tight",
                                categoryCompleted ? "text-white" : "text-slate-900"
                              )}>
                                {category}
                              </h3>
                              {effectiveShowProgress && (
                                <div className="flex items-center gap-1.5 mt-1">
                                  <div className={cn(
                                    "h-1 rounded-full transition-all duration-500",
                                    categoryCompleted ? "bg-white/40" : "bg-white/30"
                                  )} style={{ width: `${percentage}%` }} />
                                  <p className={cn(
                                    "text-[10px] font-bold leading-none",
                                    categoryCompleted ? "text-white/90" : "text-slate-800"
                                  )}>
                                    {percentage}%
                                  </p>
                                </div>
                              )}
                            </div>
                            {effectiveShowProgress && categoryCompleted && (
                              <CheckCircle2 className="w-5 h-5 text-white ml-2 animate-in zoom-in-50 duration-300" />
                            )}
                          </div>
                        </div>
                        
                        {/* Enhanced Glow effect */}
                        <div className={cn(
                          "absolute inset-0 rounded-2xl blur-2xl opacity-40 animate-pulse-slow",
                          categoryCompleted
                            ? "bg-green-400"
                            : "bg-yellow-400"
                        )} />
                        
                        {/* Particle effect on hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={cn(
                            "absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping",
                            categoryCompleted ? "bg-green-300" : "bg-yellow-300"
                          )} />
                          <div className={cn(
                            "absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-ping",
                            categoryCompleted ? "bg-emerald-300" : "bg-orange-300"
                          )} style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>

                      {/* Topics Branching Left and Right */}
                      <div className="grid grid-cols-2 gap-x-20 gap-y-4 items-start">
                        {topics.map((topic, topicIndex) => {
                          const isCompleted = effectiveShowProgress && completedTopics.has(topic.slug);
                          const side = getTopicSide(categoryIndex, topicIndex);
                          const isLeft = side === 'left';

                          return (
                            <div
                              key={topic.slug}
                              className={cn(
                                "relative w-full flex",
                                isLeft ? "col-start-1 justify-end" : "col-start-2 justify-start"
                              )}
                            >
                              {/* Connecting Line to Center */}
                              <svg
                                className="absolute top-1/2 -translate-y-1/2 z-0 pointer-events-none"
                                style={{
                                  [isLeft ? 'left' : 'right']: '100%',
                                  [isLeft ? 'right' : 'left']: 'auto',
                                  width: '40px',
                                  height: '2px'
                                }}
                              >
                                <line
                                  x1={isLeft ? '40' : '0'}
                                  y1="1"
                                  x2={isLeft ? '0' : '40'}
                                  y2="1"
                                  stroke={isCompleted ? '#10b981' : '#cbd5e1'}
                                  strokeWidth="2"
                                  strokeDasharray={isCompleted ? '0' : '6 3'}
                                  className="transition-all duration-500"
                                />
                              </svg>

                              {/* Topic Card */}
                              <div
                                className={cn(
                                  "relative z-10 group/card p-3.5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl w-full max-w-[280px] cursor-default animate-in fade-in-50 slide-in-from-bottom-3 duration-500",
                                  isCompleted
                                    ? "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/40 dark:via-emerald-950/30 dark:to-teal-950/20 border-green-400 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                                    : "bg-gradient-to-br from-white via-slate-50 to-blue-50/50 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-800/70 backdrop-blur-xl border-slate-300/60 dark:border-slate-700/60 hover:border-primary hover:shadow-primary/20"
                                )}
                                style={{ animationDelay: `${(categoryIndex * 100) + (topicIndex * 50)}ms` }}
                              >
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                
                                {/* Shimmer on hover */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover/card:animate-shimmer-fast" />
                                </div>

                                {/* Completion Check */}
                                {isCompleted && (
                                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-950 animate-in zoom-in-50 duration-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white animate-pulse" />
                                    <div className="absolute inset-0 rounded-full bg-green-400 blur-md opacity-50 animate-pulse" />
                                  </div>
                                )}

                                <h4 className={cn(
                                  "relative font-bold text-xs mb-2 leading-snug line-clamp-2 group-hover/card:text-primary transition-colors",
                                  isCompleted ? "text-green-700 dark:text-green-400" : "text-slate-900 dark:text-slate-100"
                                )}>
                                  {topic.title}
                                </h4>
                                
                                <p className="relative text-[10px] text-muted-foreground/80 line-clamp-2 leading-relaxed">
                                  {topic.explanation}
                                </p>
                                
                                {/* Progress indicator dots */}
                                <div className={cn(
                                  "absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full transition-all duration-300",
                                  isCompleted 
                                    ? "bg-green-400 animate-pulse" 
                                    : "bg-slate-300 dark:bg-slate-600 group-hover/card:bg-primary"
                                )} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Connector to Next Category */}
                      {categoryIndex < categories.length - 1 && (
                        <div className="flex justify-center mt-12">
                          <div className="relative w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/30"
                               style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.2)' }}>
                            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Completion Celebration */}
              {effectiveShowProgress && allTopics.every(t => completedTopics.has(t.slug)) && (
                <div className="mt-16 flex justify-center pb-12 animate-in zoom-in-50 duration-700">
                  <div className="relative group">
                    {/* Animated rings */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-400 blur-2xl opacity-40 animate-pulse" />
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                    
                    {/* Main card */}
                    <div className="relative inline-flex flex-col items-center gap-3 px-12 py-8 rounded-3xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 shadow-2xl border-4 border-white dark:border-slate-950">
                      {/* Confetti particles */}
                      <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-yellow-300 animate-bounce" />
                      <div className="absolute -top-3 -right-3 w-2 h-2 rounded-full bg-pink-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="absolute -bottom-2 -left-3 w-2 h-2 rounded-full bg-blue-300 animate-bounce" style={{ animationDelay: '0.4s' }} />
                      <div className="absolute -bottom-3 -right-2 w-3 h-3 rounded-full bg-purple-300 animate-bounce" style={{ animationDelay: '0.1s' }} />
                      
                      {/* Trophy icon with glow */}
                      <div className="relative">
                        <div className="absolute inset-0 blur-lg bg-yellow-300 rounded-full opacity-60 animate-pulse" />
                        <div className="relative text-6xl animate-bounce" style={{ animationDuration: '1.5s' }}>🏆</div>
                      </div>
                      
                      <h3 className="relative text-2xl font-black text-white tracking-tight">
                        Congratulations!
                      </h3>
                      
                      <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <p className="text-white/95 font-bold text-sm">
                          {allTopics.length} Topics Mastered
                        </p>
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      </div>
                      
                      <p className="relative text-white/90 font-semibold text-center text-sm max-w-xs">
                        You've completed the entire {language.name} learning path! 
                      </p>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-slow" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
