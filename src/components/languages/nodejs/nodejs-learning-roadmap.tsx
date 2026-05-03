'use client';

import { useState } from 'react';
import { Language } from '@/data/languages';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Play, BookOpen, Code, Zap, Trophy } from 'lucide-react';

interface NodejsLearningRoadmapProps {
  language: Language;
}

interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
}

export function NodejsLearningRoadmap({ language }: NodejsLearningRoadmapProps) {
  const [completedPhases, setCompletedPhases] = useState<Set<string>>(new Set());
  const [currentPhase, setCurrentPhase] = useState('basics');

  const roadmapPhases: RoadmapPhase[] = [
    {
      id: 'basics',
      title: 'Node.js Fundamentals',
      description: 'Understand the core concepts of Node.js, its architecture, and runtime environment.',
      topics: [
        'What is Node.js',
        'Node.js Architecture',
        'Installation & Setup',
        'Package Managers (npm & yarn)',
        'package.json'
      ],
      duration: '1-2 weeks',
      difficulty: 'Beginner',
      completed: completedPhases.has('basics')
    },
    {
      id: 'modules',
      title: 'Modules & Dependencies',
      description: 'Master the module system and how to manage dependencies in Node.js applications.',
      topics: [
        'CommonJS Modules',
        'ES Modules',
        'Core Modules',
        'Third-party Modules',
        'Module Patterns'
      ],
      duration: '1-2 weeks',
      difficulty: 'Beginner',
      completed: completedPhases.has('modules')
    },
    {
      id: 'async',
      title: 'Asynchronous Programming',
      description: 'Learn the event-driven nature of Node.js and master async programming patterns.',
      topics: [
        'Event Loop',
        'Callbacks',
        'Promises',
        'Async/Await',
        'Error Handling'
      ],
      duration: '2-3 weeks',
      difficulty: 'Intermediate',
      completed: completedPhases.has('async')
    },
    {
      id: 'core',
      title: 'Core Node.js APIs',
      description: 'Deep dive into essential Node.js built-in modules and their practical applications.',
      topics: [
        'File System (fs)',
        'Path Module',
        'HTTP Module',
        'Events Module',
        'Streams & Buffers'
      ],
      duration: '2-3 weeks',
      difficulty: 'Intermediate',
      completed: completedPhases.has('core')
    },
    {
      id: 'web',
      title: 'Web Development with Express',
      description: 'Build web applications and APIs using Express.js framework.',
      topics: [
        'Express.js Basics',
        'Routing',
        'Middleware',
        'Template Engines',
        'Building REST APIs'
      ],
      duration: '2-3 weeks',
      difficulty: 'Intermediate',
      completed: completedPhases.has('web')
    },
    {
      id: 'database',
      title: 'Database Integration',
      description: 'Connect Node.js applications with various databases and perform data operations.',
      topics: [
        'MongoDB with Node.js',
        'SQL Databases',
        'ORM/ODM',
        'Database Patterns',
        'Data Validation'
      ],
      duration: '2-3 weeks',
      difficulty: 'Intermediate',
      completed: completedPhases.has('database')
    },
    {
      id: 'security',
      title: 'Security & Authentication',
      description: 'Implement security best practices and user authentication in Node.js applications.',
      topics: [
        'Authentication',
        'Authorization',
        'Security Best Practices',
        'JWT Tokens',
        'OWASP Security'
      ],
      duration: '2-3 weeks',
      difficulty: 'Advanced',
      completed: completedPhases.has('security')
    },
    {
      id: 'testing',
      title: 'Testing & Debugging',
      description: 'Learn testing strategies and debugging techniques for Node.js applications.',
      topics: [
        'Unit Testing',
        'Integration Testing',
        'Debugging Techniques',
        'Test Frameworks',
        'Code Coverage'
      ],
      duration: '1-2 weeks',
      difficulty: 'Intermediate',
      completed: completedPhases.has('testing')
    },
    {
      id: 'advanced',
      title: 'Advanced Node.js',
      description: 'Master advanced concepts like clustering, worker threads, and performance optimization.',
      topics: [
        'Clustering',
        'Child Processes',
        'Worker Threads',
        'Performance Optimization',
        'Memory Management'
      ],
      duration: '3-4 weeks',
      difficulty: 'Advanced',
      completed: completedPhases.has('advanced')
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      description: 'Deploy Node.js applications to production and understand DevOps practices.',
      topics: [
        'Docker with Node.js',
        'Deployment Strategies',
        'Environment Management',
        'Monitoring & Logging',
        'CI/CD Pipelines'
      ],
      duration: '2-3 weeks',
      difficulty: 'Advanced',
      completed: completedPhases.has('deployment')
    }
  ];

  const togglePhaseComplete = (phaseId: string) => {
    setCompletedPhases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(phaseId)) {
        newSet.delete(phaseId);
      } else {
        newSet.add(phaseId);
      }
      return newSet;
    });
  };

  const progressPercentage = (completedPhases.size / roadmapPhases.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'default';
      case 'Intermediate': return 'secondary';
      case 'Advanced': return 'destructive';
      default: return 'default';
    }
  };

  const getIconForPhase = (phaseId: string) => {
    switch (phaseId) {
      case 'basics': return <BookOpen className="w-5 h-5" />;
      case 'modules': return <Code className="w-5 h-5" />;
      case 'async': return <Zap className="w-5 h-5" />;
      case 'deployment': return <Trophy className="w-5 h-5" />;
      default: return <Play className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Node.js Learning Roadmap</h1>
            <p className="text-muted-foreground">Your path to becoming a Node.js expert</p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Progress</span>
            <span className="text-sm font-normal text-muted-foreground">
              {completedPhases.size} of {roadmapPhases.length} phases completed
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{Math.round(progressPercentage)}% Complete</span>
            <span>Estimated time: {roadmapPhases.reduce((acc, phase) => {
              const weeks = parseInt(phase.duration.split('-')[1]) || parseInt(phase.duration);
              return acc + weeks;
            }, 0)} weeks</span>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Phases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Learning Phases</h2>
        
        <div className="grid gap-6">
          {roadmapPhases.map((phase, index) => (
            <Card 
              key={phase.id} 
              className={`transition-all duration-200 ${
                currentPhase === phase.id ? 'ring-2 ring-primary' : ''
              } ${phase.completed ? 'bg-muted/50' : ''}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mt-1">
                      {getIconForPhase(phase.id)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">
                          Phase {index + 1}: {phase.title}
                        </CardTitle>
                        <Badge variant={getDifficultyColor(phase.difficulty)}>
                          {phase.difficulty}
                        </Badge>
                        {phase.completed && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Completed
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base">
                        {phase.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>📅 {phase.duration}</span>
                        <span>📚 {phase.topics.length} topics</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePhaseComplete(phase.id)}
                      className="ml-2"
                    >
                      {phase.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-600 fill-green-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                    </Button>
                    <Button
                      variant={currentPhase === phase.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPhase(phase.id)}
                    >
                      {currentPhase === phase.id ? 'Current' : 'Start'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {currentPhase === phase.id && (
                <CardContent className="border-t">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Topics in this phase:</h4>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {phase.topics.map((topic, topicIndex) => (
                        <div 
                          key={topicIndex}
                          className="flex items-center gap-2 p-3 rounded-lg border bg-card"
                        >
                          <CheckCircle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Button className="w-full md:w-auto">
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Learning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Study Strategy</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complete each phase before moving to the next</li>
                <li>• Build small projects for each concept</li>
                <li>• Join Node.js communities for support</li>
                <li>• Read official documentation regularly</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Practice Recommendations</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Code along with tutorials</li>
                <li>• Contribute to open source projects</li>
                <li>• Solve coding challenges daily</li>
                <li>• Build a portfolio of Node.js projects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
