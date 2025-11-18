'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { useReact } from '@/app/react/react-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const ReactLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useReact();
  const [expandedModule, setExpandedModule] = useState<string | null>("Core Concepts");
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
      id: "Core Concepts",
      title: "Core Concepts",
      level: "Foundation",
      icon: "⚛️",
      topics: [
        { id: "what-is-react", name: "What is React?", desc: "An overview of the React library and its philosophy.", difficulty: "Easy" },
        { id: "jsx", name: "JSX", desc: "Writing HTML-like syntax in JavaScript.", difficulty: "Easy" },
        { id: "react-components", name: "Components & Props", desc: "Building reusable UI elements.", difficulty: "Easy" },
        { id: "react-state", name: "State", desc: "Managing dynamic data within components.", difficulty: "Medium" },
      ]
    },
    {
      id: "Rendering & Lifecycle",
      title: "Rendering & Lifecycle",
      level: "Core Concepts",
      icon: "🎨",
      topics: [
        { id: "react-lifecycle", name: "Component Lifecycle", desc: "Understanding how components are created, updated, and destroyed.", difficulty: "Medium" },
        { id: "conditional-rendering", name: "Conditional Rendering", desc: "Showing or hiding components based on state.", difficulty: "Easy" },
        { id: "lists-and-keys", name: "Lists and Keys", desc: "Rendering dynamic lists of data.", difficulty: "Medium" },
        { id: "react-forms", name: "Handling Forms", desc: "Managing user input in forms.", difficulty: "Medium" },
      ]
    },
    {
      id: "Hooks",
      title: "Hooks",
      level: "Advanced",
      icon: "🎣",
      topics: [
        { id: "use-state-hook", name: "useState Hook", desc: "Managing state in functional components.", difficulty: "Easy" },
        { id: "use-effect-hook", name: "useEffect Hook", desc: "Handling side effects like data fetching.", difficulty: "Medium" },
        { id: "use-context-hook", name: "useContext Hook", desc: "Managing global state without prop drilling.", difficulty: "Hard" },
        { id: "custom-hooks", name: "Custom Hooks", desc: "Creating your own reusable stateful logic.", difficulty: "Hard" },
      ]
    },
    {
      id: "Advanced React",
      title: "Advanced React",
      level: "Expert",
      icon: "🚀",
      topics: [
        { id: "react-router", name: "Routing", desc: "Navigating between pages in a React application.", difficulty: "Medium" },
        { id: "react-state-management", name: "State Management", desc: "Introduction to libraries like Redux and Zustand.", difficulty: "Hard" },
        { id: "react-performance", name: "Performance Optimization", desc: "Techniques like memoization with useMemo and useCallback.", difficulty: "Hard" },
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

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-primary/80 bg-primary/10';
      case 'Medium': return 'text-primary/90 bg-primary/20';
      case 'Hard': return 'text-primary bg-primary/30';
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
            {[1, 2, 3].map((i) => (<Skeleton key={i} className="h-24 w-full rounded-xl" />))}
          </div>
        </div>
    );
  }
  
  const completedCount = isUserAuthenticated ? completedTopics.size : 0;
  const totalTopicCount = allTopics.length;
  
  const TopicItem = ({ topic }: { topic: { id: string; name: string; desc: string; difficulty: string } }) => {
    const isCompleted = isUserAuthenticated && completedTopics.has(topic.id);
    const itemContent = (
      <div onClick={() => toggleTopic(topic.id)} className={cn("bg-background border rounded-lg p-4 transition-all duration-200", isUserAuthenticated && "cursor-pointer hover:shadow-sm hover:border-primary/50", !isUserAuthenticated && "cursor-not-allowed opacity-70", isCompleted ? 'border-primary bg-primary/5' : 'border-border')}>
        <div className="flex items-start gap-3">
          <div className="mt-1">{isCompleted ? <CheckCircle className="w-6 h-6 text-primary" /> : <Circle className="w-6 h-6 text-muted-foreground/50" />}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <Link href={`/react/${topic.id}`} className="hover:underline"><h3 className="text-lg font-semibold text-foreground">{topic.name}</h3></Link>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(topic.difficulty)}`}>{topic.difficulty}</span>
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
          <div className="flex items-center justify-center gap-3 mb-4"><BookOpen className="w-12 h-12 text-primary" /><h1 className="text-5xl font-bold text-foreground">React Learning Path</h1></div>
          <p className="text-muted-foreground text-lg mb-6">A structured roadmap for beginners to master the React library.</p>
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

        <div className="mt-12 bg-primary/10 border border-primary/20 text-primary-foreground rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6"><Zap className="w-8 h-8 text-primary" /><h2 className="text-3xl font-bold text-foreground">Learning Tips</h2></div>
          <div className="grid md:grid-cols-2 gap-4 text-foreground">
            <div className="bg-background rounded-lg p-4 border"><h3 className="font-bold text-lg mb-2 text-primary">✅ Understand Components</h3><p className="text-sm text-muted-foreground">React is all about components. Master how to build and compose them.</p></div>
            <div className="bg-background rounded-lg p-4 border"><h3 className="font-bold text-lg mb-2 text-primary">🎣 Learn Hooks Well</h3><p className="text-sm text-muted-foreground">Hooks are the foundation of modern React. Focus on `useState` and `useEffect` first.</p></div>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground"><Award className="w-12 h-12 mx-auto mb-3 text-primary" /><p className="text-lg font-semibold">Happy Coding!</p><p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p></div>
      </div>
    </div>
  );
};
