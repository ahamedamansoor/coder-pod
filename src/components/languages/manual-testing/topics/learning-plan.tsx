'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { 
  TestTube2,
  CheckCircle,
  Target,
  Clock,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  FileCheck,
  Bug,
  Lightbulb,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import { AiSimplification } from '@/components/shared/ai-simplification';
import type { Language, Topic } from '@/data/languages';

export function LearningPlanComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'learning-plan',
    title: 'Learning Path',
    explanation: 'Complete learning path and roadmap for Manual Testing certification and mastery',
    category: 'Overview'
  };

  const language: Language = {
    slug: 'manual-testing',
    name: 'Manual Testing',
    description: 'Master manual testing fundamentals, methodologies, and best practices for quality assurance',
    topics: []
  };

  const learningPath = [
    {
      phase: "1. Foundation",
      title: "Introduction to Software Testing",
      duration: "1-2 weeks",
      topics: 4,
      description: "Understand testing fundamentals, principles, and methodologies",
      icon: TestTube2,
      color: "blue"
    },
    {
      phase: "2. Core Concepts",
      title: "Types & Design Techniques",
      duration: "2-3 weeks", 
      topics: 9,
      description: "Master different testing types and test design methodologies",
      icon: Target,
      color: "green"
    },
    {
      phase: "3. Practical Skills",
      title: "Test Management & Documentation",
      duration: "2-3 weeks",
      topics: 7,
      description: "Learn test case management, defect tracking, and documentation",
      icon: FileCheck,
      color: "purple"
    },
    {
      phase: "4. Advanced Topics",
      title: "Specialized & Modern Testing",
      duration: "2-4 weeks",
      topics: 13,
      description: "Explore specialized testing, web/mobile, API, and agile testing",
      icon: TrendingUp,
      color: "orange"
    },
    {
      phase: "5. Mastery",
      title: "Real-World Application",
      duration: "1-2 weeks",
      topics: 7,
      description: "Apply knowledge in real scenarios and prepare for certification",
      icon: Award,
      color: "red"
    }
  ];

  const skills = [
    "Test Planning & Design",
    "Test Execution & Reporting", 
    "Defect Management",
    "API Testing",
    "Web & Mobile Testing",
    "Agile Testing",
    "Test Documentation",
    "Quality Assurance"
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={TestTube2}
        category="Manual Testing · Learning Path"
        title="Manual Testing Learning Path"
        description="Complete roadmap to master manual testing from fundamentals to advanced concepts"
        colorTheme="green"
        badges={[
          { label: '40 Topics', variant: 'secondary' },
          { label: '10-14 Weeks', variant: 'info' },
          { label: 'Certification Ready', variant: 'secondary' },
        ]}
      />

      {/* Learning Overview */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Your Learning Journey
          </CardTitle>
          <CardDescription>Structured path to become a proficient manual testing professional</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">40</div>
              <div className="text-sm text-green-700 dark:text-green-300">Comprehensive Topics</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10-14</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Weeks Duration</div>
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
          <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
          Learning Phases
        </h3>
        
        {learningPath.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <Card key={index} className="border-l-4 border-l-green-500 dark:border-l-green-400">
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
                  <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
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
                  <Link href="/languages/manual-testing/introduction">
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
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            Skills You'll Master
          </CardTitle>
          <CardDescription>Essential skills for manual testing professionals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-sm text-blue-800 dark:text-blue-200">{skill}</span>
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
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">QA Engineer</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Design and execute test plans, ensure software quality</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Test Analyst</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Analyze requirements and create comprehensive test cases</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">QA Lead</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">Lead testing teams and manage quality processes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certification Prep */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Award className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Certification Ready</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          This learning path prepares you for industry-recognized certifications like ISTQB Foundation Level and other QA certifications.
        </AlertDescription>
      </Alert>

      {/* Get Started */}
      <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Ready to Start Your Journey?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                Begin with the fundamentals and build your expertise step by step.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No prior testing experience required - we'll guide you from basics to advanced concepts.
              </p>
            </div>
            <Link href="/languages/manual-testing/introduction">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-500">
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
        codeSnippet="// Manual Testing Roadmap Overview\nconst learningPath = {\n  phases: ['Foundation', 'Core Concepts', 'Practical Skills', 'Advanced Topics', 'Mastery'],\n  duration: '10-14 weeks',\n  topics: 40,\n  skills: ['Test Planning', 'Defect Management', 'API Testing', 'Agile Testing']\n};"
      />
    </div>
  );
}
