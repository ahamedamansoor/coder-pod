
'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight } from 'lucide-react';
import { useSpring } from '@/app/spring/spring-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModuleCompletionCelebration } from './module-completion-celebration';

export const SpringLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useSpring();
  const [expandedModule, setExpandedModule] = useState<string | null>("Spring Core Concepts");
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [completedModule, setCompletedModule] = useState<string | null>(null);
  
  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const modules = [
    {
      id: "Spring Core Concepts",
      title: "Spring Core Concepts",
      level: "Foundation",
      topics: [
        { id: "spring-modules-overview", name: "Spring Modules Overview", desc: "An introduction to the various modules that make up the Spring ecosystem." },
        { id: "ioc-container-and-beans", name: "IoC Container and Beans", desc: "Understanding the core of Spring: Inversion of Control and how objects (Beans) are managed." },
      ]
    },
    {
      id: "Advanced Dependency Injection",
      title: "Advanced Dependency Injection",
      level: "Core Concepts",
      topics: [
        { id: "dependency-injection-overview", name: "Dependency Injection Overview", desc: "Learn how Spring automatically provides dependencies to your objects." },
        { id: "constructor-injection", name: "Constructor Injection", desc: "The recommended way to inject dependencies for mandatory components." },
        { id: "setter-injection", name: "Setter Injection", desc: "Injecting dependencies through setter methods, ideal for optional components." },
        { id: "injecting-collections", name: "Injecting Collections", desc: "How to inject lists, sets, and maps of beans." },
      ]
    },
    {
      id: "Bean Configuration",
      title: "Bean Configuration",
      level: "Advanced",
      topics: [
        { id: "bean-scopes", name: "Bean Scopes", desc: "Understanding bean lifecycles, such as singleton (default) and prototype." },
        { id: "bean-lifecycle-and-inheritance", name: "Bean Lifecycle & Inheritance", desc: "Exploring how beans are created, initialized, and destroyed, and how configurations can be inherited." },
      ]
    }
  ];

  const allTopics = modules.flatMap(m => m.topics);

  const toggleTopic = (topicId: string) => {
    if (!isUserAuthenticated) return;
    handleToggleComplete(topicId);

    const topicModule = modules.find(m => m.topics.some(t => t.id === topicId));
    if (!topicModule) return;
    
    const isCompleting = !completedTopics.has(topicId);
    if (isCompleting) {
        const allTopicsInModuleCompleted = topicModule.topics.every(t => completedTopics.has(t.id) || t.id === topicId);
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

  if (isUserLoading || isProgressLoading) {
    return (
        <div className="p-2 md:p-6">
          <Skeleton className="h-48 w-full mb-8" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (<Skeleton key={i} className="h-24 w-full rounded-xl" />))}
          </div>
        </div>
    );
  }
  
  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = allTopics.length;
  
  const TopicItem = ({ topic }: { topic: { id: string; name: string; desc: string; } }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.id);
    const itemContent = (
      <div onClick={() => toggleTopic(topic.id)} className={cn("bg-background border rounded-lg p-4 transition-all duration-200", isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50", !isUserAuthenticated && "cursor-not-allowed opacity-70", isCompleted ? 'border-primary bg-primary/5' : 'border-border')}>
        <div className="flex items-start gap-3">
          <div className="mt-1">{isCompleted ? <CheckCircle className="w-6 h-6 text-primary" /> : <Circle className="w-6 h-6 text-muted-foreground/50" />}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <Link href={`/spring/${topic.id}`} className="hover:underline"><h3 className="text-lg font-semibold text-foreground">{topic.name}</h3></Link>
            </div>
            <p className="text-muted-foreground text-sm">{topic.desc}</p>
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
        languageSlug="spring"
        onClose={() => setCompletedModule(null)}
      />
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4"><BookOpen className="w-12 h-12 text-primary" /><h1 className="text-5xl font-bold text-foreground">Spring Framework Learning Path</h1></div>
          <p className="text-muted-foreground text-lg mb-6">A structured roadmap for beginners to master the Spring Framework.</p>
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
                  <div className="text-3xl bg-muted p-3 rounded-full">☕</div>
                  <div>
                    <div className="flex items-center gap-3 mb-1"><h2 className="text-xl font-bold text-foreground">{module.title}</h2><span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{module.level}</span></div>
                  </div>
                </div>
                {expandedModule === module.id ? <ChevronDown className="w-6 h-6 text-muted-foreground" /> : <ChevronRight className="w-6 h-6 text-muted-foreground" />}
              </div>
              {expandedModule === module.id && (<div className="p-6 space-y-3 bg-muted/50">{module.topics.map((topic) => (<TopicItem key={topic.id} topic={topic} />))}</div>)}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground"><Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" /><p className="text-lg font-semibold">Happy Coding!</p><p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p></div>
      </div>
    </div>
  );
};
