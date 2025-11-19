
'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight } from 'lucide-react';
import { useReact } from '@/app/react/react-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModuleCompletionCelebration } from './module-completion-celebration';
import { react } from '@/app/data/react';

export const ReactLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useReact();
  const [expandedModule, setExpandedModule] = useState<string | null>("1. Getting Started");
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [completedModule, setCompletedModule] = useState<string | null>(null);
  
  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const allTopics = react.topics.filter(t => !['learning-plan', 'interview-questions', 'react-version-updates'].includes(t.slug));

  const modules = [
    { id: "1. Getting Started", title: "1. Getting Started", level: "Beginner", topics: allTopics.slice(0, 5) },
    { id: "2. Describing the UI", title: "2. Describing the UI", level: "Beginner", topics: allTopics.slice(5, 10) },
    { id: "3. Adding Interactivity", title: "3. Adding Interactivity", level: "Beginner", topics: allTopics.slice(10, 17) },
    { id: "4. Managing State", title: "4. Managing State", level: "Intermediate", topics: allTopics.slice(17, 21) },
    { id: "5. Escape Hatches", title: "5. Escape Hatches", level: "Intermediate", topics: allTopics.slice(21, 30) },
    { id: "6. Hooks (Comprehensive)", title: "6. Hooks (Comprehensive)", level: "Intermediate", topics: allTopics.slice(30, 47) },
    { id: "7. Component APIs", title: "7. Component APIs", level: "Advanced", topics: allTopics.slice(47, 54) },
    { id: "8. ReactDOM APIs", title: "8. ReactDOM APIs", level: "Advanced", topics: allTopics.slice(54, 55) },
    { id: "9. Form Handling", title: "9. Form Handling", level: "Advanced", topics: allTopics.slice(55, 58) },
    { id: "10. Advanced Patterns", title: "10. Advanced Patterns", level: "Advanced", topics: allTopics.slice(58, 65) },
    { id: "11. Context API", title: "11. Context API", level: "Advanced", topics: allTopics.slice(65, 71) },
    { id: "12. Performance", title: "12. Performance", level: "Expert", topics: allTopics.slice(71, 75) },
    { id: "13. Testing", title: "13. Testing", level: "Expert", topics: allTopics.slice(75, 80) },
    { id: "14. Deployment", title: "14. Deployment", level: "Expert", topics: allTopics.slice(80, 83) },
    { id: "15. TypeScript Integration", title: "15. TypeScript Integration", level: "Expert", topics: allTopics.slice(83, 89) },
    { id: "16. Advanced Features", title: "16. Advanced Features", level: "Expert", topics: allTopics.slice(89, 94) },
    { id: "17. Developer Tools", title: "17. Developer Tools", level: "Reference", topics: allTopics.slice(94, 96) },
    { id: "18. API Reference", title: "18. API Reference", level: "Reference", topics: allTopics.slice(96, 99) },
    { id: "19. Rules & Best Practices", title: "19. Rules & Best Practices", level: "Reference", topics: allTopics.slice(99, 102) },
    { id: "20. Thinking in React", title: "20. Thinking in React", level: "Reference", topics: allTopics.slice(102, 105) },
  ];

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

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'text-primary/80 bg-primary/10';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-400/10';
      case 'Advanced': return 'text-orange-600 bg-orange-400/10';
      case 'Expert': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const calculateProgress = () => {
    if (!isUserAuthenticated) return 0;
    const totalTopics = allTopics.length;
    if (totalTopics === 0) return 0;
    return Math.round((completedTopics.size / totalTopics) * 100);
  };

  if (isUserLoading || isProgressLoading) {
    return (
        <div className="p-2 md:p-6">
          <Skeleton className="h-48 w-full mb-8" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (<Skeleton key={i} className="h-16 w-full rounded-xl" />))}
          </div>
        </div>
    );
  }
  
  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = allTopics.length;
  
  const TopicItem = ({ topic }: { topic: { slug: string; title: string; explanation: string; } }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.slug);
    const itemContent = (
      <div onClick={() => toggleTopic(topic.slug)} className={cn("bg-background border rounded-lg p-4 transition-all duration-200", isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50", !isUserAuthenticated && "cursor-not-allowed opacity-70", isCompleted ? 'border-primary bg-primary/5' : 'border-border')}>
        <div className="flex items-start gap-3">
          <div className="mt-1">{isCompleted ? <CheckCircle className="w-6 h-6 text-primary" /> : <Circle className="w-6 h-6 text-muted-foreground/50" />}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <Link href={`/react/${topic.slug}`} className="hover:underline"><h3 className="text-lg font-semibold text-foreground">{topic.title}</h3></Link>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">{topic.explanation}</p>
          </div>
        </div>
      </div>
    );

    if (!isUserAuthenticated) {
      return (<TooltipProvider><UITooltip><TooltipTrigger asChild>{itemContent}</TooltipTrigger><TooltipContent><p>Sign in to track your progress.</p></TooltipContent></UITooltip></TooltipProvider>);
    }
    return itemContent;
  };

  return (
    <div className="p-2 md:p-6 max-w-none">
       <ModuleCompletionCelebration 
        isOpen={!!completedModule}
        moduleName={completedModule || ""}
        languageSlug="react"
        onClose={() => setCompletedModule(null)}
      />
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4"><BookOpen className="w-12 h-12 text-primary" /><h1 className="text-5xl font-bold text-foreground">React Learning Path</h1></div>
          <p className="text-muted-foreground text-lg mb-6">A comprehensive roadmap for beginners to master the React library.</p>
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-6 border">
            <div className="flex items-center justify-between mb-3"><span className="text-sm font-semibold text-foreground">Overall Progress</span><span className="text-2xl font-bold text-primary">{calculateProgress()}%</span></div>
            <div className="w-full bg-muted rounded-full h-4"><div className="bg-primary h-4 rounded-full transition-all duration-500" style={{ width: `${calculateProgress()}%` }}></div></div>
            <p className="text-sm text-muted-foreground mt-2">{completedCount} of {totalTopicCount} topics completed</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="bg-card border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)} className={`bg-card p-6 cursor-pointer flex items-center justify-between border-b`}>
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-muted p-3 rounded-full">⚛️</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
                      <span className={cn('px-2 py-0.5 rounded-full text-xs font-semibold', getLevelColor(module.level))}>{module.level}</span>
                    </div>
                  </div>
                </div>
                {expandedModule === module.id ? <ChevronDown className="w-6 h-6 text-muted-foreground" /> : <ChevronRight className="w-6 h-6 text-muted-foreground" />}
              </div>
              {expandedModule === module.id && (<div className="p-6 space-y-3 bg-muted/50">{module.topics.map((topic) => (<TopicItem key={topic.slug} topic={topic} />))}</div>)}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground"><Award className="w-12 h-12 mx-auto mb-3 text-primary" /><p className="text-lg font-semibold">Happy Coding!</p><p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p></div>
      </div>
    </div>
  );
};
