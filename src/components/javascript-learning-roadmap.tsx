
'use client';
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Circle, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { useJavascript } from '@/app/javascript/javascript-context';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModuleCompletionCelebration } from './module-completion-celebration';

export const JavascriptLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useJavascript();
  const [expandedModule, setExpandedModule] = useState<string | null>("Fundamentals");
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
      id: "Fundamentals",
      title: "Fundamentals",
      level: "Foundation",
      icon: "🚀",
      topics: [
        { id: "introduction-to-js", name: "JS Introduction", desc: "What is JavaScript and its role in web development.", difficulty: "Easy" },
        { id: "js-variables", name: "Variables (var, let, const)", desc: "Storing data in JavaScript.", difficulty: "Easy" },
        { id: "js-data-types", name: "Data Types", desc: "Understanding numbers, strings, booleans, objects, etc.", difficulty: "Easy" },
        { id: "js-operators", name: "Operators", desc: "Performing arithmetic and logical operations.", difficulty: "Easy" },
      ]
    },
    {
      id: "Functions & Scope",
      title: "Functions & Scope",
      level: "Foundation",
      icon: "📦",
      topics: [
        { id: "js-functions", name: "Functions", desc: "Creating reusable blocks of code.", difficulty: "Easy" },
        { id: "js-scope", name: "Scope", desc: "Understanding variable visibility and lifecycle.", difficulty: "Medium" },
      ]
    },
    {
      id: "Data Structures",
      title: "Data Structures",
      level: "Core Concepts",
      icon: "📊",
      topics: [
        { id: "js-objects", name: "Objects", desc: "Working with key-value pairs.", difficulty: "Medium" },
        { id: "js-arrays", name: "Arrays", desc: "Managing lists of data.", difficulty: "Medium" },
        { id: "js-array-methods", name: "Array Methods", desc: "Powerful methods like map, filter, and reduce.", difficulty: "Medium" },
      ]
    },
    {
      id: "Control Flow",
      title: "Control Flow",
      level: "Core Concepts",
      icon: "🔀",
      topics: [
        { id: "js-loops", name: "Loops", desc: "Repeating actions with for and while loops.", difficulty: "Easy" },
        { id: "js-conditionals", name: "Conditionals", desc: "Making decisions with if/else and switch.", difficulty: "Easy" },
      ]
    },
    {
      id: "Browser APIs",
      title: "Browser APIs",
      level: "Advanced",
      icon: "🌐",
      topics: [
        { id: "js-dom-manipulation", name: "DOM Manipulation", desc: "Interacting with HTML and CSS.", difficulty: "Medium" },
        { id: "js-events", name: "Events", desc: "Responding to user actions like clicks and keyboard input.", difficulty: "Medium" },
      ]
    },
    {
      id: "Asynchronous JS",
      title: "Asynchronous JS",
      level: "Advanced",
      icon: "⚙️",
      topics: [
        { id: "js-async", name: "Asynchronous JS", desc: "Understanding callbacks, Promises, and async/await.", difficulty: "Hard" },
      ]
    },
    {
        id: "Modern JS",
        title: "Modern JS",
        level: "Expert",
        icon: "✨",
        topics: [
          { id: "js-es6", name: "ES6+ Features", desc: "Arrow functions, template literals, destructuring, and more.", difficulty: "Medium" },
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

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-primary/80 bg-primary/10';
      case 'Medium': return 'text-yellow-600 bg-yellow-400/10';
      case 'Hard': return 'text-destructive bg-destructive/10';
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
              <Link href={`/javascript/${topic.id}`} className="hover:underline"><h3 className="text-lg font-semibold text-foreground">{topic.name}</h3></Link>
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
       <ModuleCompletionCelebration 
        isOpen={!!completedModule}
        moduleName={completedModule || ""}
        languageSlug="javascript"
        onClose={() => setCompletedModule(null)}
      />
      <div className="mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4"><BookOpen className="w-12 h-12 text-primary" /><h1 className="text-5xl font-bold text-foreground">JavaScript Learning Path</h1></div>
          <p className="text-muted-foreground text-lg mb-6">A structured roadmap for beginners to master JavaScript.</p>
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
            <div className="bg-background rounded-lg p-4 border"><h3 className="font-bold text-lg mb-2 text-primary">✅ Practice Daily</h3><p className="text-sm text-muted-foreground">Consistency is key. Write a little bit of JavaScript every day.</p></div>
            <div className="bg-background rounded-lg p-4 border"><h3 className="font-bold text-lg mb-2 text-primary">🔨 Build Small Projects</h3><p className="text-sm text-muted-foreground">Apply what you learn by building simple projects like a to-do list or a calculator.</p></div>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground"><Award className="w-12 h-12 mx-auto mb-3 text-primary" /><p className="text-lg font-semibold">Happy Coding!</p><p className="text-sm mt-2">Click on topics to mark them as complete and track your progress!</p></div>
      </div>
    </div>
  );
};
