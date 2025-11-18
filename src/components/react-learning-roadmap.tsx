
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
import { ModuleCompletionCelebration } from './module-completion-celebration';

export const ReactLearningRoadmap = () => {
  const { completedTopics, handleToggleComplete, isProgressLoading } = useReact();
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
      icon: "⚛️",
      topics: [
        { id: "what-is-react", name: "What is React?", desc: "An overview of the React library and its philosophy.", difficulty: "Easy" },
        { id: "setting-up-react", name: "Setting Up a React Environment", desc: "Creating a new React project using modern tools like Vite or Next.js.", difficulty: "Easy" },
        { id: "jsx", name: "JSX Deep Dive", desc: "Understanding JavaScript XML for writing UI components and how it differs from HTML.", difficulty: "Easy" },
        { id: "react-components", name: "Components & Props", desc: "Building reusable UI elements and passing data between them.", difficulty: "Easy" },
        { id: "react-state", name: "State & Lifecycle", desc: "Managing dynamic data and understanding component lifecycle.", difficulty: "Medium" },
        { id: "handling-events", name: "Handling Events", desc: "Making your components interactive by responding to user input.", difficulty: "Easy" },
      ]
    },
    {
      id: "Rendering",
      title: "Rendering UI",
      level: "Core Concepts",
      icon: "🎨",
      topics: [
        { id: "conditional-rendering", name: "Conditional Rendering", desc: "Showing or hiding components and elements based on application state.", difficulty: "Easy" },
        { id: "lists-and-keys", name: "Lists and Keys", desc: "Rendering dynamic lists of data and the importance of using keys.", difficulty: "Medium" },
        { id: "react-forms", name: "Handling Forms", desc: "Managing user input with controlled and uncontrolled components.", difficulty: "Medium" },
      ]
    },
    {
      id: "Hooks",
      title: "Hooks Deep Dive",
      level: "Intermediate",
      icon: "🎣",
      topics: [
        { id: "rules-of-hooks", name: "The Rules of Hooks", desc: "Understanding the two critical rules for using hooks effectively.", difficulty: "Easy" },
        { id: "use-state-hook", name: "useState Hook", desc: "Managing simple state in functional components.", difficulty: "Easy" },
        { id: "use-effect-hook", name: "useEffect Hook", desc: "Handling side effects like data fetching and subscriptions.", difficulty: "Medium" },
        { id: "use-context-hook", name: "useContext Hook", desc: "Managing global state to avoid 'prop drilling'.", difficulty: "Medium" },
        { id: "use-reducer-hook", name: "useReducer Hook", desc: "An alternative to useState for managing more complex component state.", difficulty: "Hard" },
        { id: "use-ref-hook", name: "useRef Hook", desc: "Accessing DOM nodes and persisting values without causing re-renders.", difficulty: "Medium" },
        { id: "memoization-hooks", name: "useCallback & useMemo", desc: "Optimizing performance by memoizing functions and values.", difficulty: "Hard" },
        { id: "custom-hooks", name: "Custom Hooks", desc: "Creating your own reusable stateful logic to share across components.", difficulty: "Hard" },
      ]
    },
    {
      id: "Advanced Topics",
      title: "Advanced React",
      level: "Advanced",
      icon: "🚀",
      topics: [
        { id: "react-router", name: "Routing with React Router", desc: "Implementing client-side navigation in a React application.", difficulty: "Medium" },
        { id: "state-management-libraries", name: "State Management Libraries", desc: "Overview of libraries like Redux and Zustand for large-scale state management.", difficulty: "Hard" },
        { id: "composition-patterns", name: "Advanced Component Patterns", desc: "Exploring patterns like Higher-Order Components (HOCs) and Render Props.", difficulty: "Hard" },
        { id: "error-boundaries", name: "Error Boundaries", desc: "Catching JavaScript errors in your component tree and displaying a fallback UI.", difficulty: "Medium" },
        { id: "code-splitting", name: "Code Splitting", desc: "Improving performance by lazy-loading components with React.lazy() and Suspense.", difficulty: "Medium" },
      ]
    },
    {
        id: "Ecosystem & Modern React",
        title: "Ecosystem & Modern React",
        level: "Expert",
        icon: "✨",
        topics: [
          { id: "react-and-typescript", name: "React with TypeScript", desc: "Adding static types to your React application for better scalability.", difficulty: "Medium" },
          { id: "react-performance", name: "Performance Optimization", desc: "Using tools like the React Profiler to fix performance bottlenecks.", difficulty: "Hard" },
          { id: "server-vs-client-components", name: "Server & Client Components", desc: "Understanding the difference in modern React frameworks like Next.js.", difficulty: "Hard" },
          { id: "testing-react-apps", name: "Testing React Applications", desc: "Introduction to testing libraries like Jest and React Testing Library.", difficulty: "Medium" },
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
       <ModuleCompletionCelebration 
        isOpen={!!completedModule}
        moduleName={completedModule || ""}
        languageSlug="react"
        onClose={() => setCompletedModule(null)}
      />
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
