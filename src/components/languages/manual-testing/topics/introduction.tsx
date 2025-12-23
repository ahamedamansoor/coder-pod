'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  TestTube2,
  CheckCircle,
  AlertCircle,
  Target,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Bug,
  FileCheck,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import { AiSimplification } from '@/components/shared/ai-simplification';
import type { Language, Topic } from '@/data/languages';

export function IntroductionComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'introduction',
    title: 'Introduction to Software Testing',
    explanation: 'Understanding software testing fundamentals, importance, and objectives in modern software development',
    category: '1. Introduction to Testing'
  };

  const language: Language = {
    slug: 'manual-testing',
    name: 'Manual Testing',
    description: 'Master manual testing fundamentals, methodologies, and best practices for quality assurance',
    topics: []
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={TestTube2}
        category="Manual Testing · Introduction"
        title="Introduction to Software Testing"
        description="Understanding software testing fundamentals, importance, and objectives in modern software development"
        colorTheme="green"
        badges={[
          { label: 'Fundamentals', variant: 'secondary' },
          { label: 'Quality Assurance', variant: 'info' },
          { label: 'Beginner Friendly', variant: 'success' },
        ]}
      />

      {/* Section 1: What is Software Testing? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <TestTube2 className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                What is Software Testing?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                The systematic process of evaluating software quality and functionality
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Software testing is the <span className="font-bold text-green-600 dark:text-green-400">systematic investigation</span> of software to:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Verify that software meets specified requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Identify defects, errors, and gaps in requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Ensure software quality, reliability, and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Build confidence in the software before deployment</span>
                </li>
              </ul>
            </div>

            {/* Real-World Analogy */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Real-World Analogy</h4>
                  <p className="text-blue-800 dark:text-blue-200">
                    Think of software testing like a <span className="font-semibold">building inspection</span>. 
                    Before people move into a new building, inspectors check everything: 
                    electrical systems, plumbing, structural integrity, and safety features. 
                    Software testing does the same for digital products!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testing Objectives */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
              <FileCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            Primary Testing Objectives
          </CardTitle>
          <CardDescription>Core goals that guide effective software testing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h6 className="font-semibold text-purple-900 dark:text-purple-100">Find Defects</h6>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Identify bugs, errors, and defects in the software before it reaches end users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h6 className="font-semibold text-purple-900 dark:text-purple-100">Verify Requirements</h6>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Ensure the software meets all specified functional and non-functional requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h6 className="font-semibold text-purple-900 dark:text-purple-100">Build Confidence</h6>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Provide stakeholders with confidence in the quality and reliability of the software.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h6 className="font-semibold text-purple-900 dark:text-purple-100">Prevent Defects</h6>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Identify potential issues early in the development process to prevent future defects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              <div>
                <h6 className="font-semibold text-purple-900 dark:text-purple-100">Provide Information</h6>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Supply stakeholders with information to make informed decisions about release readiness.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Misconceptions */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            Common Testing Misconceptions
          </CardTitle>
          <CardDescription>Debunking myths about software testing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert className="border-orange-200 dark:border-orange-800">
            <Bug className="h-4 w-4 text-orange-600" />
            <AlertTitle>Myth: Testing can find all bugs</AlertTitle>
            <AlertDescription>
              <strong>Reality:</strong> Testing reduces the risk of defects but cannot guarantee a bug-free product. Exhaustive testing is impossible.
            </AlertDescription>
          </Alert>

          <Alert className="border-orange-200 dark:border-orange-800">
            <Bug className="h-4 w-4 text-orange-600" />
            <AlertTitle>Myth: Testing is only done after development</AlertTitle>
            <AlertDescription>
              <strong>Reality:</strong> Testing should start early in the SDLC, from requirements gathering through deployment and maintenance.
            </AlertDescription>
          </Alert>

          <Alert className="border-orange-200 dark:border-orange-800">
            <Bug className="h-4 w-4 text-orange-600" />
            <AlertTitle>Myth: Anyone can test software</AlertTitle>
            <AlertDescription>
              <strong>Reality:</strong> Effective testing requires skills, knowledge, experience, and a systematic approach to find defects.
            </AlertDescription>
          </Alert>

          <Alert className="border-orange-200 dark:border-orange-800">
            <Bug className="h-4 w-4 text-orange-600" />
            <AlertTitle>Myth: Automated testing replaces manual testing</AlertTitle>
            <AlertDescription>
              <strong>Reality:</strong> Both manual and automated testing are complementary. Manual testing is essential for exploratory, usability, and ad-hoc testing.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/40">
              <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Testing is a critical process that ensures software quality, reliability, and customer satisfaction</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Early testing reduces costs and prevents defects from reaching production</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Testing involves both verification (building it right) and validation (building the right thing)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Effective testing requires skills, systematic approaches, and understanding of testing principles</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">Testing should be integrated throughout the entire software development lifecycle</span>
            </li>
          </ul>
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
        codeSnippet="// Example of a basic test case\ngiven('user is on login page', () => {\n  when('user enters valid credentials', () => {\n    then('user should be redirected to dashboard', () => {\n      // Test implementation\n    });\n  });\n});"
      />
    </div>
  );
}
