'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  FileText,
  Users,
  Code,
  CheckCircle,
  ArrowRight,
  Brain,
  MessageSquare,
  GitBranch,
  Target,
  Zap,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function BDDIntroductionComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'bdd-introduction',
    title: 'BDD Introduction',
    explanation: 'Understanding Behavior-Driven Development fundamentals',
    category: '22. BDD with Cucumber'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20">
      <PageHeader
        title="BDD Introduction"
        description="Master the fundamentals of Behavior-Driven Development and learn how it bridges the gap between technical and non-technical team members"
        icon={FileText}
        colorTheme="emerald"
        badges={[
          { label: 'BDD', variant: 'secondary' },
          { label: 'Collaboration', variant: 'secondary' },
          { label: 'Documentation', variant: 'secondary' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Section 1: What is BDD? */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-emerald-600 dark:text-emerald-400">
              <Brain className="w-7 h-7" />
              What is Behavior-Driven Development?
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the BDD methodology and its principles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">Definition</h4>
                <p className="text-emerald-800 dark:text-emerald-200">
                  Behavior-Driven Development (BDD) is an agile software development methodology that enhances collaboration between developers, QA, and non-technical participants by writing tests in a natural language that everyone can understand.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4">Core Philosophy</h4>
                <p className="text-teal-800 dark:text-teal-200">
                  BDD encourages collaboration between developers, QA, and non-technical participants by writing tests in a natural language that everyone can understand, focusing on system behavior rather than implementation details.
                </p>
              </div>
            </div>

            {/* BDD Principles */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">BDD Core Principles</h5>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100">Collaboration</h6>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Cross-team communication</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-900 dark:text-green-100">Communication</h6>
                    <p className="text-sm text-green-800 dark:text-green-200">Shared understanding</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100">Business Value</h6>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Focus on outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: BDD vs Traditional Testing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
              <GitBranch className="w-7 h-7" />
              BDD vs Traditional Testing
            </CardTitle>
            <CardDescription className="text-base">
              Comparing BDD with traditional testing approaches
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Traditional Testing */}
              <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/20 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">Traditional Testing</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-800 dark:text-red-200">Technical focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-800 dark:text-red-200">Developer-centric</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-800 dark:text-red-200">Code-first approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-800 dark:text-red-200">Limited stakeholder involvement</span>
                  </div>
                </div>
              </div>

              {/* BDD Approach */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">BDD Approach</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 dark:text-green-200">Business focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 dark:text-green-200">Collaborative approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 dark:text-green-200">Behavior-first approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 dark:text-green-200">Full stakeholder involvement</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: BDD Workflow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-purple-600 dark:text-purple-400">
              <Zap className="w-7 h-7" />
              BDD Workflow
            </CardTitle>
            <CardDescription className="text-base">
              Understanding the BDD development cycle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">BDD Development Cycle</h5>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Discovery Phase</h6>
                    <p className="text-blue-800 dark:text-blue-200">
                      Business analysts, developers, and QA collaborate to define user stories and acceptance criteria in natural language.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-green-900 dark:text-green-100 mb-2">Feature Writing</h6>
                    <p className="text-green-800 dark:text-green-200">
                      Write features, scenarios, and steps using Gherkin syntax that everyone on the team can understand.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Step Implementation</h6>
                    <p className="text-purple-800 dark:text-purple-200">
                      Developers implement the step definitions that connect Gherkin steps to actual test automation code.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h6 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Execution & Reporting</h6>
                    <p className="text-orange-800 dark:text-orange-200">
                      Run the BDD tests and generate reports that provide feedback to all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Benefits of BDD */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
              <CheckCircle className="w-7 h-7" />
              Benefits of BDD
            </CardTitle>
            <CardDescription className="text-base">
              Key advantages of adopting BDD in your projects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Benefits */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">Technical Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800 dark:text-green-200">Living documentation that stays up-to-date</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800 dark:text-green-200">Reduced rework due to better requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800 dark:text-green-200">Improved test coverage and quality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800 dark:text-green-200">Better maintainability of test code</span>
                  </div>
                </div>
              </div>

              {/* Business Benefits */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4">Business Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 dark:text-blue-200">Improved stakeholder collaboration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 dark:text-blue-200">Clear understanding of requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 dark:text-blue-200">Faster feedback on business value</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 dark:text-blue-200">Reduced miscommunication risks</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: BDD Tools & Frameworks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-600 dark:text-orange-400">
              <Code className="w-7 h-7" />
              BDD Tools & Frameworks
            </CardTitle>
            <CardDescription className="text-base">
              Popular tools for implementing BDD in your projects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-6">Popular BDD Frameworks</h5>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h6 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Cucumber</h6>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Most popular BDD framework supporting multiple programming languages including Java, JavaScript, Ruby, and Python.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h6 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">SpecFlow</h6>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    BDD framework for .NET that integrates seamlessly with Visual Studio and supports Gherkin syntax.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h6 className="font-semibold text-green-900 dark:text-green-100 mb-2">Behave</h6>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Python BDD framework that provides a simple and intuitive way to write behavior-driven tests.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                  <h6 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">JBehave</h6>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Java-based BDD framework that enables developers to write behavior-driven tests in Java.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30">
          <FileText className="h-4 w-4 text-emerald-600" />
          <AlertTitle className="text-emerald-900 dark:text-emerald-100">Key Takeaways</AlertTitle>
          <AlertDescription className="text-emerald-800 dark:text-emerald-200">
            <ul className="space-y-2 mt-2">
              <li>• BDD focuses on behavior and collaboration rather than technical implementation</li>
              <li>• Gherkin syntax provides a common language for all stakeholders</li>
              <li>• BDD tests serve as both documentation and automated tests</li>
              <li>• Cucumber is the most popular BDD framework for web automation</li>
              <li>• BDD improves communication and reduces misunderstandings in development teams</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Topic Navigation */}
        <TopicNavigation 
          currentTopic={currentTopic}
          language={language}
        />
      </div>
    </div>
  );
}
