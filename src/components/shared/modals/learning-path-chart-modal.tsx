'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X, MapPin, BookOpen, Check } from 'lucide-react';
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
  const roleBasedRoadmaps = ['frontend-developer', 'backend-developer'];
  const isRoleBasedRoadmap = roleBasedRoadmaps.includes(language.slug);
  const effectiveShowProgress = isRoleBasedRoadmap ? false : showProgress;

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="max-w-full w-screen h-screen p-0 gap-0 overflow-hidden rounded-none">
        <VisuallyHidden>
          <DialogTitle>{language.name} Learning Path</DialogTitle>
        </VisuallyHidden>
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-purple-50/60 to-indigo-50/80 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95" />

        {/* Decorative gradient blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/20 dark:from-purple-600/20 dark:to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-cyan-300/20 dark:from-blue-600/20 dark:to-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-violet-200/30 to-purple-200/20 dark:from-violet-600/10 dark:to-purple-600/5 rounded-full blur-2xl" />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

        {/* Enhanced Animations */}
        <style jsx global>{`
          /* Slide in from sides */
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          /* Scale up reveal */
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          
          /* Line drawing effect */
          @keyframes drawLine {
            from { stroke-dashoffset: 150; }
            to { stroke-dashoffset: 0; }
          }
          
          /* Dot pop in */
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0); }
            70% { transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          /* Subtle float */
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          
          /* Soft glow pulse */
          @keyframes softGlow {
            0%, 100% { box-shadow: 0 0 8px rgba(168, 85, 247, 0.4); }
            50% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.6); }
          }
          
          /* Shimmer effect */
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .animate-slide-left {
            animation: slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-right {
            animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-scale-in {
            animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-draw-line {
            stroke-dasharray: 150;
            stroke-dashoffset: 150;
            animation: drawLine 0.8s ease-out forwards;
          }
          .animate-pop-in {
            animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-soft-glow {
            animation: softGlow 3s ease-in-out infinite;
          }
          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s linear infinite;
          }
        `}</style>

        <VisuallyHidden>
          <DialogTitle>{language.name} Learning Path Chart</DialogTitle>
        </VisuallyHidden>

        {/* Header */}
        <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg">
            <MapPin className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="font-bold text-sm text-slate-800 dark:text-white">{language.name}</span>
          </div>

          {!isRoleBasedRoadmap && (
            <Link
              href={`/languages/${language.slug}/learning-plan`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4 text-white" />
              <span className="font-bold text-sm text-white">Start Learning</span>
            </Link>
          )}
        </div>

        {/* Close Button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:scale-110 shadow-lg"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="relative w-full h-full overflow-auto pt-20 pb-12">
          <div className="relative max-w-5xl mx-auto px-8">

            {/* Central Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-blue-500 z-0 hidden md:block" />

            {/* Desktop View (Tree Layout) */}
            <div className="hidden md:block relative z-10 space-y-24">
              {categories.map(([category, topics], categoryIndex) => {
                const categoryCompleted = effectiveShowProgress && topics.every(t => completedTopics.has(t.slug));
                const leftTopics = topics.filter((_, i) => i % 2 === 0);
                const rightTopics = topics.filter((_, i) => i % 2 === 1);

                return (
                  <div
                    key={category}
                    className="relative animate-scale-in"
                    style={{ animationDelay: `${categoryIndex * 0.2}s`, opacity: 0 }}
                  >
                    {/* Category Milestone */}
                    <div className="flex justify-center mb-10 relative z-20">
                      <div className={cn(
                        "relative px-8 py-4 rounded-xl border-2 font-bold text-lg transition-all hover:scale-105 shadow-lg",
                        categoryCompleted
                          ? "bg-green-500 border-green-400 text-white"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-400 dark:border-indigo-500 text-white"
                      )}>
                        {categoryIndex + 1}. {category}
                      </div>
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-start">
                      {/* Left Column */}
                      <div className="flex flex-col gap-4 items-end">
                        {leftTopics.map((topic, i) => {
                          const isCompleted = effectiveShowProgress && completedTopics.has(topic.slug);
                          return (
                            <div
                              key={topic.slug}
                              className="flex items-center animate-slide-left"
                              style={{ animationDelay: `${0.3 + i * 0.1}s`, opacity: 0 }}
                            >
                              {/* Topic Box */}
                              <div className={cn(
                                "group relative w-64 p-0 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-md shadow-lg overflow-hidden",
                                isCompleted
                                  ? "bg-green-100/80 dark:bg-green-900/40 border-green-400/50"
                                  : "bg-white/80 dark:bg-slate-800/80 border-white/60 dark:border-slate-600/50 hover:border-purple-400/70 hover:shadow-xl hover:shadow-purple-500/10"
                              )}>
                                <div className="p-4">
                                  <div className={cn(
                                    "mb-1.5 text-sm font-bold line-clamp-1 border-b border-dashed border-slate-200 dark:border-slate-700 pb-2",
                                    isCompleted ? "text-green-800 dark:text-green-100" : "text-slate-800 dark:text-slate-100"
                                  )}>
                                    {topic.title}
                                  </div>
                                  <div className={cn(
                                    "text-xs leading-relaxed line-clamp-3",
                                    isCompleted ? "text-green-700/80 dark:text-green-200/70" : "text-slate-500 dark:text-slate-400"
                                  )}>
                                    {topic.explanation}
                                  </div>
                                </div>
                                <div className={cn(
                                  "absolute top-3 right-3 w-2 h-2 rounded-full",
                                  isCompleted ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600 group-hover:bg-purple-400 transition-colors"
                                )} />
                              </div>

                              {/* Connector */}
                              <svg width="100" height="40" className="flex-shrink-0" style={{ marginLeft: '-4px', marginRight: '-4px' }}>
                                <path
                                  d={`M 0 20 Q 50 20 100 ${i % 2 === 0 ? 5 : 35}`}
                                  fill="none"
                                  stroke="#6b7280"
                                  strokeWidth="2"
                                  strokeDasharray="6 4"
                                  className="animate-draw-line"
                                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                                />
                                <circle
                                  cx="100"
                                  cy={i % 2 === 0 ? 5 : 35}
                                  r="6"
                                  fill="#3b82f6"
                                  className="animate-pop-in"
                                  style={{ animationDelay: `${0.5 + i * 0.1}s`, opacity: 0 }}
                                />
                              </svg>
                            </div>
                          );
                        })}
                      </div>

                      {/* Spine Dots */}
                      <div className="flex flex-col items-center gap-4 py-2 relative">
                        {[...Array(Math.max(leftTopics.length, rightTopics.length))].map((_, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full bg-blue-500 border-2 border-blue-300 opacity-0"
                            style={{ height: '40px' }}
                          />
                        ))}
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col gap-4 items-start">
                        {rightTopics.map((topic, i) => {
                          const isCompleted = effectiveShowProgress && completedTopics.has(topic.slug);
                          return (
                            <div
                              key={topic.slug}
                              className="flex items-center animate-slide-right"
                              style={{ animationDelay: `${0.3 + i * 0.1}s`, opacity: 0 }}
                            >
                              {/* Connector */}
                              <svg width="100" height="40" className="flex-shrink-0" style={{ marginLeft: '-4px', marginRight: '-4px' }}>
                                <circle
                                  cx="0"
                                  cy={i % 2 === 0 ? 5 : 35}
                                  r="6"
                                  fill="#3b82f6"
                                  className="animate-pop-in"
                                  style={{ animationDelay: `${0.5 + i * 0.1}s`, opacity: 0 }}
                                />
                                <path
                                  d={`M 0 ${i % 2 === 0 ? 5 : 35} Q 50 20 100 20`}
                                  fill="none"
                                  stroke="#6b7280"
                                  strokeWidth="2"
                                  strokeDasharray="6 4"
                                  className="animate-draw-line"
                                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                                />
                              </svg>

                              {/* Topic Box */}
                              <div className={cn(
                                "group relative w-64 p-0 rounded-xl border text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-md shadow-lg overflow-hidden",
                                isCompleted
                                  ? "bg-green-100/80 dark:bg-green-900/40 border-green-400/50"
                                  : "bg-white/80 dark:bg-slate-800/80 border-white/60 dark:border-slate-600/50 hover:border-purple-400/70 hover:shadow-xl hover:shadow-purple-500/10"
                              )}>
                                <div className="p-4">
                                  <div className={cn(
                                    "mb-1.5 text-sm font-bold line-clamp-1 border-b border-dashed border-slate-200 dark:border-slate-700 pb-2",
                                    isCompleted ? "text-green-800 dark:text-green-100" : "text-slate-800 dark:text-slate-100"
                                  )}>
                                    {topic.title}
                                  </div>
                                  <div className={cn(
                                    "text-xs leading-relaxed line-clamp-3",
                                    isCompleted ? "text-green-700/80 dark:text-green-200/70" : "text-slate-500 dark:text-slate-400"
                                  )}>
                                    {topic.explanation}
                                  </div>
                                </div>
                                <div className={cn(
                                  "absolute top-3 right-3 w-2 h-2 rounded-full",
                                  isCompleted ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600 group-hover:bg-purple-400 transition-colors"
                                )} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View (Timeline Layout) */}
            <div className="md:hidden relative z-10 space-y-16">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/50 z-0 -translate-x-1/2" />

              {categories.map(([category, topics], categoryIndex) => {
                const categoryCompleted = effectiveShowProgress && topics.every(t => completedTopics.has(t.slug));

                return (
                  <div key={category} className="relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6 pl-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10 shrink-0 shadow-md ring-4 ring-white dark:ring-slate-900">
                        {categoryIndex + 1}
                      </div>
                      <h3 className={cn(
                        "text-lg font-bold px-4 py-2 rounded-lg border bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
                        categoryCompleted ? "border-green-400 text-green-700 dark:text-green-300" : "border-blue-200 dark:border-blue-800"
                      )}>
                        {category}
                      </h3>
                    </div>

                    {/* Topics List */}
                    <div className="space-y-6 pl-16">
                      {topics.map((topic, i) => {
                        const isCompleted = effectiveShowProgress && completedTopics.has(topic.slug);
                        return (
                          <div key={topic.slug} className="relative">
                            {/* Connector Line */}
                            <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-300/50" />
                            <div className="absolute top-1/2 -left-8 w-2 h-2 rounded-full bg-blue-500 -translate-y-1/2 -translate-x-1/2 shadow-sm ring-2 ring-white dark:ring-slate-900" />

                            <div className={cn(
                              "group relative w-full p-4 rounded-xl border text-sm font-medium transition-all backdrop-blur-md shadow-sm",
                              isCompleted
                                ? "bg-green-50/90 dark:bg-green-900/30 border-green-200"
                                : "bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700"
                            )}>
                              <div className={cn(
                                "mb-2 text-sm font-bold border-b border-dashed border-slate-200 dark:border-slate-700 pb-2",
                                isCompleted ? "text-green-800 dark:text-green-100" : "text-slate-800 dark:text-slate-100"
                              )}>
                                {topic.title}
                              </div>
                              <div className={cn(
                                "text-xs leading-relaxed",
                                isCompleted ? "text-green-700/80 dark:text-green-200/70" : "text-slate-500 dark:text-slate-400"
                              )}>
                                {topic.explanation}
                              </div>

                              <div className={cn(
                                "absolute top-4 right-4 w-2 h-2 rounded-full",
                                isCompleted ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"
                              )} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* End Marker */}
            <div className="flex justify-center mt-12 mb-8 relative z-20">
              <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-purple-300 animate-pulse-slow" />
            </div>

            {/* Completion */}
            {effectiveShowProgress && allTopics.every(t => completedTopics.has(t.slug)) && (
              <div className="flex justify-center mt-8 animate-fade-in-up">
                <div className="px-8 py-5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 border-2 border-green-400">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏆</span>
                    <div className="text-white">
                      <h3 className="text-lg font-bold">Roadmap Completed!</h3>
                      <p className="text-sm opacity-90">{allTopics.length} topics mastered</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
