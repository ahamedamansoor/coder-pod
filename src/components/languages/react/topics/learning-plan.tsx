'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { BookOpen, Code, PlayCircle, CheckCircle, Lock, Unlock, Zap, Target, Trophy, Star } from 'lucide-react';
import { useUnifiedCompletion } from '@/hooks/use-unified-completion';
import { useUser } from '@/hooks/use-auth-compat';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  completed: boolean;
  locked: boolean;
  progress: number;
}

export default function ReactLearningPlan() {
  const { user } = useUser();
  const { completedTopics, handleToggleComplete, getCompletedTopics } = useUnifiedCompletion();
  const [modules, setModules] = useState<LearningModule[]>([
    {
      id: 'getting-started',
      title: 'Getting Started with React',
      description: 'Learn the fundamentals of React, including components, JSX, and basic concepts.',
      difficulty: 'Beginner',
      duration: '2 weeks',
      topics: ['What is React?', 'React Components', 'JSX Syntax', 'Props and State'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'components-and-props',
      title: 'Components and Props',
      description: 'Deep dive into React components, props, and how to build reusable UI elements.',
      difficulty: 'Beginner',
      duration: '1 week',
      topics: ['Functional Components', 'Class Components', 'Props', 'Default Props'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'state-and-lifecycle',
      title: 'State and Lifecycle',
      description: 'Master React state management and component lifecycle methods.',
      difficulty: 'Intermediate',
      duration: '2 weeks',
      topics: ['useState Hook', 'useEffect Hook', 'Lifecycle Methods', 'State Management'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'handling-events',
      title: 'Handling Events',
      description: 'Learn how to handle user interactions and events in React applications.',
      difficulty: 'Intermediate',
      duration: '1 week',
      topics: ['Event Handlers', 'Synthetic Events', 'Event Propagation', 'Form Handling'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'conditional-rendering',
      title: 'Conditional Rendering',
      description: 'Master conditional rendering techniques to create dynamic user interfaces.',
      difficulty: 'Intermediate',
      duration: '1 week',
      topics: ['If Statements', 'Ternary Operator', 'Logical &&', 'Switch Cases'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'lists-and-keys',
      title: 'Lists and Keys',
      description: 'Learn how to render lists of data and work with keys in React.',
      difficulty: 'Intermediate',
      duration: '1 week',
      topics: ['map() Method', 'Keys', 'Filtering Lists', 'Transforming Data'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'forms-and-input',
      title: 'Forms and Input',
      description: 'Build interactive forms and handle user input in React applications.',
      difficulty: 'Intermediate',
      duration: '2 weeks',
      topics: ['Controlled Components', 'Uncontrolled Components', 'Form Validation', 'Input Handling'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'lifting-state-up',
      title: 'Lifting State Up',
      description: 'Learn advanced state management patterns and how to share state between components.',
      difficulty: 'Advanced',
      duration: '2 weeks',
      topics: ['State Lifting', 'Callback Functions', 'Context API', 'State Management Patterns'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'composition-vs-inheritance',
      title: 'Composition vs Inheritance',
      description: 'Understand React\'s composition model and why it\'s preferred over inheritance.',
      difficulty: 'Advanced',
      duration: '1 week',
      topics: ['Composition', 'Containment', 'Specialization', 'Inheritance Alternatives'],
      completed: false,
      locked: false,
      progress: 0
    },
    {
      id: 'thinking-in-react',
      title: 'Thinking in React',
      description: 'Learn how to think like a React developer and build complex applications.',
      difficulty: 'Advanced',
      duration: '3 weeks',
      topics: ['Component Design', 'State Architecture', 'Data Flow', 'Best Practices'],
      completed: false,
      locked: false,
      progress: 0
    }
  ]);

  useEffect(() => {
    if (user) {
      // Load completion status using unified completion
      const reactCompletedTopics = getCompletedTopics('react');
      const savedModules = modules.map(module => ({
        ...module,
        completed: reactCompletedTopics.has(module.id),
        progress: reactCompletedTopics.has(module.id) ? 100 : 0
      }));
      setModules(savedModules);
    }
  }, [user, getCompletedTopics]);

  const handleModuleComplete = (moduleId: string) => {
    handleToggleComplete('react', moduleId);
    setModules(prevModules => 
      prevModules.map(module => {
        if (module.id === moduleId) {
          const completed = !module.completed;
          return {
            ...module,
            completed,
            progress: completed ? 100 : 0
          };
        }
        return module;
      })
    );
  };

  const handleProgressUpdate = (moduleId: string, newProgress: number) => {
    setModules(prevModules =>
      prevModules.map(module => {
        if (module.id !== moduleId) return module;

        const clampedProgress = Math.max(0, Math.min(100, newProgress));
        const isCompleted = clampedProgress >= 100;

        if (isCompleted && !module.completed) {
          handleToggleComplete('react', moduleId);
        }

        return {
          ...module,
          progress: clampedProgress,
          completed: module.completed || isCompleted,
        };
      }),
    );
  };

  const completedModules = modules.filter(m => m.completed).length;
  const totalProgress = Math.round((completedModules / modules.length) * 100);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getModuleIcon = (module: LearningModule) => {
    if (module.completed) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (module.locked) return <Lock className="w-5 h-5 text-gray-400" />;
    if (module.progress > 0) return <PlayCircle className="w-5 h-5 text-blue-500" />;
    return <BookOpen className="w-5 h-5 text-blue-500" />;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code className="w-8 h-8 text-blue-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            React Learning Roadmap
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master React from basics to advanced concepts. Build modern, interactive web applications with confidence.
        </p>
        
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">Your Progress</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {completedModules} of {modules.length} modules completed
            </span>
          </div>
          <Progress value={totalProgress} className="h-3 mb-2" />
          <p className="text-sm text-muted-foreground">{totalProgress}% Complete</p>
        </div>
      </div>

      {/* Learning Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <Card 
            key={module.id} 
            className={`transition-all duration-300 hover:shadow-lg ${
              module.completed ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : 
              module.locked ? 'opacity-60' : 
              'hover:border-blue-300 dark:hover:border-blue-600'
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    {getModuleIcon(module)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {module.title}
                      {module.completed && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className={getDifficultyColor(module.difficulty)}>
                        {module.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{module.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={module.completed}
                    onCheckedChange={() => !module.locked && handleModuleComplete(module.id)}
                    disabled={module.locked}
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">
                {module.description}
              </CardDescription>
              
              {/* Topics */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Topics Covered:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {module.topics.map((topic, topicIndex) => (
                    <Badge 
                      key={topicIndex} 
                      variant="outline" 
                      className="text-xs px-2 py-0.5"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              {module.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              )}

              {/* Action Button */}
              <div className="flex gap-2 pt-2">
                <Button 
                  className="flex-1" 
                  variant={module.completed ? "secondary" : "default"}
                  disabled={module.locked}
                >
                  {module.completed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : module.locked ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Locked
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Start Learning
                    </>
                  )}
                </Button>
                {module.progress > 0 && !module.completed && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleProgressUpdate(module.id, Math.min(100, module.progress + 25))}
                  >
                    <Zap className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold">Learning Tips</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Complete modules in order as they build upon each other</li>
          <li>• Practice each concept with hands-on coding exercises</li>
          <li>• Build small projects to reinforce your learning</li>
          <li>• Join the React community for support and discussions</li>
          <li>• Keep up with the latest React updates and best practices</li>
        </ul>
      </div>
    </div>
  );
}
