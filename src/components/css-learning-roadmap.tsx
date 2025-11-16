
'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { useCss } from '@/app/css/css-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const CssLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useCss();
  const [expandedModule, setExpandedModule] = useState<string | null>("CSS Fundamentals");
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  
  const isUserAuthenticated = user && !user.isAnonymous;

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const modules = [
    {
      id: "CSS Fundamentals",
      title: "CSS Fundamentals",
      level: "Foundation",
      icon: "🎨",
      topics: [
        { id: "introduction-to-css", name: "CSS Introduction", desc: "What is CSS and how it styles HTML." },
        { id: "css-syntax-and-selectors", name: "Syntax & Selectors", desc: "How to write CSS rules and target HTML elements." },
        { id: "css-colors", name: "Colors", desc: "Applying colors to text, backgrounds, and borders." },
        { id: "css-box-model", name: "The Box Model", desc: "Understanding margin, border, padding, and content." },
        { id: "css-typography", name: "Typography", desc: "Styling text, fonts, and more." },
      ]
    },
    {
      id: "Layout",
      title: "Layout",
      level: "Core Concepts",
      icon: "🖼️",
      topics: [
        { id: "css-positioning", name: "Positioning", desc: "Controlling element layout with static, relative, absolute, etc." },
        { id: "css-flexbox", name: "Flexbox", desc: "A modern layout model for one-dimensional layouts." },
        { id: "css-grid", name: "Grid", desc: "A powerful layout model for two-dimensional layouts." },
      ]
    },
    {
      id: "Advanced Styling",
      title: "Advanced Styling",
      level: "Advanced",
      icon: "✨",
      topics: [
        { id: "css-pseudo-classes", name: "Pseudo-classes", desc: "Styling elements based on their state, like :hover." },
        { id: "css-pseudo-elements", name: "Pseudo-elements", desc: "Styling specific parts of an element, like ::before." },
        { id: "css-variables", name: "Variables", desc: "Creating reusable values in your stylesheets." },
      ]
    },
    {
      id: "Animation & Interactivity",
      title: "Animation & Interactivity",
      level: "Advanced",
      icon: "🚀",
      topics: [
        { id: "css-transitions", name: "Transitions", desc: "Creating smooth animations between states." },
        { id: "css-animations", name: "Animations", desc: "Creating complex, multi-step animations with keyframes." },
      ]
    },
    {
      id: "Responsive Design",
      title: "Responsive Design",
      level: "Expert",
      icon: "📱",
      topics: [
        { id: "css-responsive-design", name: "Responsive Design", desc: "Making websites look good on all devices using media queries." },
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
              <Link href={`/css/${topic.id}`} className="hover:underline"><h3 className="text-lg font-semibold text-foreground">{topic.name}</h3></Link>
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
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4"><BookOpen className="w-12 h-12 text-primary" /><h1 className="text-5xl font-bold text-foreground">CSS Learning Path</h1></div>
          <p className="text-muted-foreground text-lg mb-6">A structured roadmap for beginners to master CSS.</p>
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
                  <div className="text-3xl bg-muted p-3 rounded-full">{module.icon}</div>
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

        <div className="mt-8 text-center text-muted-foreground"><Award className="w-12 h-12 mx-auto mb-3 text-yellow-500" /><p className="text-lg font-semibold">Happy Styling!</p><p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p></div>
      </div>
    </div>
  );
};
