'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { 
  Code2,
  CheckCircle,
  Target,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  FileCheck,
  Lightbulb,
  ArrowRight,
  Play,
  Star,
  Globe,
  Palette,
  Zap,
  Shield
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import { AiSimplification } from '@/components/shared/ai-simplification';
import type { Language, Topic } from '@/data/languages';

export function LearningPlanComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'learning-plan',
    title: 'Learning Plan',
    explanation: 'A comprehensive roadmap for mastering HTML from fundamentals to advanced features',
    category: 'Overview'
  };

  const language: Language = {
    slug: 'html',
    name: 'HTML',
    description: 'The foundation of web development - structure and content for the web',
    topics: []
  };

  const learningPath = [
    {
      phase: "1. Foundation",
      title: "HTML Fundamentals",
      duration: "1-2 weeks",
      topics: 5,
      description: "Master HTML basics, syntax, document structure, and core elements",
      icon: Code2,
      color: "blue"
    },
    {
      phase: "2. Content Structure",
      title: "Text, Links & Media",
      duration: "2-3 weeks", 
      topics: 15,
      description: "Work with text formatting, links, images, audio, video, and multimedia",
      icon: Globe,
      color: "green"
    },
    {
      phase: "3. Data Organization",
      title: "Lists, Tables & Forms",
      duration: "2-3 weeks",
      topics: 18,
      description: "Create structured data with lists, tables, and interactive forms",
      icon: FileCheck,
      color: "purple"
    },
    {
      phase: "4. Modern HTML",
      title: "Semantic & Interactive",
      duration: "2-4 weeks",
      topics: 25,
      description: "Build accessible, semantic, and interactive web applications",
      icon: Zap,
      color: "orange"
    },
    {
      phase: "5. Advanced Topics",
      title: "Performance & Integration",
      duration: "2-3 weeks",
      topics: 15,
      description: "Optimize performance, integrate APIs, and follow best practices",
      icon: TrendingUp,
      color: "red"
    }
  ];

  const skills = [
    "Semantic HTML5",
    "Responsive Design", 
    "Form Validation",
    "Media Integration",
    "Accessibility (A11y)",
    "SEO Optimization",
    "Web Components",
    "Performance Optimization"
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Code2}
        category="HTML · Learning Path"
        title="HTML Learning Path"
        description="Complete roadmap to master HTML from fundamentals to advanced features"
        colorTheme="blue"
        badges={[
          { label: '128 Topics', variant: 'secondary' },
          { label: '10-15 Weeks', variant: 'info' },
          { label: 'Industry Ready', variant: 'secondary' },
        ]}
      />

      {/* Learning Overview */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Your Learning Journey
          </CardTitle>
          <CardDescription>Structured path to become a proficient HTML developer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">128</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Comprehensive Topics</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">10-15</div>
              <div className="text-sm text-green-700 dark:text-green-300">Weeks Duration</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5</div>
              <div className="text-sm text-purple-700 dark:text-purple-300">Learning Phases</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Phases */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          Learning Phases
        </h3>
        
        {learningPath.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <Card key={index} className="border-l-4 border-l-blue-500 dark:border-l-blue-400">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-${phase.color}-100 dark:bg-${phase.color}-900/40`}>
                      <Icon className={`w-6 h-6 text-${phase.color}-600 dark:text-${phase.color}-400`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                      <CardDescription className="mt-1">{phase.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">
                    {phase.phase}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{phase.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{phase.topics} topics</span>
                    </div>
                  </div>
                  <Link href="/languages/html/introduction-to-html">
                    <Button size="sm" className="gap-2">
                      <Play className="w-3 h-3" />
                      Start Phase
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Skills You'll Gain */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Star className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Skills You'll Master
          </CardTitle>
          <CardDescription>Essential skills for modern HTML development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-sm text-green-800 dark:text-green-200">{skill}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Opportunities */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Career Opportunities
          </CardTitle>
          <CardDescription>Job roles you can pursue after completing this path</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Frontend Developer</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Build user interfaces and web applications with modern HTML</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Web Designer</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Create visually appealing and accessible web layouts</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Full Stack Developer</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Master frontend fundamentals for full-stack development</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certification Prep */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
        <Award className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Industry Ready</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          This learning path prepares you for real-world web development and provides the foundation for advanced frontend frameworks like React, Vue, and Angular.
        </AlertDescription>
      </Alert>

      {/* Get Started */}
      <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Ready to Start Your Journey?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                Begin with HTML fundamentals and build your expertise step by step.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No prior programming experience required - we'll guide you from basics to advanced concepts.
              </p>
            </div>
            <Link href="/languages/html/introduction-to-html">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-500">
                <Play className="w-4 h-4" />
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Topic Navigation */}
      <TopicNavigation 
        currentTopic={currentTopic}
        language={language}
      />

      {/* AI Assistant */}
      <AiSimplification 
        topic={currentTopic}
        language={language}
        codeSnippet="// HTML Learning Roadmap Overview\nconst learningPath = {\n  phases: ['Foundation', 'Content Structure', 'Data Organization', 'Modern HTML', 'Advanced Topics'],\n  duration: '10-15 weeks',\n  topics: 128,\n  skills: ['Semantic HTML5', 'Responsive Design', 'Form Validation', 'Accessibility', 'SEO']\n};"
      />
    </div>
  );
}

export default LearningPlanComponent;
