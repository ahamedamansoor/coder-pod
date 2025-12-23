'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  TestTube2,
  CheckCircle,
  Target,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Bug,
  FileCheck,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Play,
  Star,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Diamond
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import { AiSimplification } from '@/components/shared/ai-simplification';
import type { Language, Topic } from '@/data/languages';

export function TestDesignPrinciplesComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'test-design-principles',
    title: 'Test Design Principles',
    explanation: 'Understanding fundamental principles and techniques for designing effective test cases',
    category: '3. Test Design Techniques'
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
        icon={FileCheck}
        category="Manual Testing · Test Design Techniques"
        title="Test Design Principles"
        description="Master the fundamental principles and techniques for designing effective, comprehensive test cases"
        colorTheme="green"
        badges={[
          { label: 'Design Techniques', variant: 'secondary' },
          { label: 'Best Practices', variant: 'info' },
          { label: 'Essential Skills', variant: 'success' },
        ]}
      />

      {/* Section 1: What are Test Design Principles? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <FileCheck className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                What are Test Design Principles?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Systematic guidelines for creating effective, efficient, and comprehensive test cases
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Test design principles are <span className="font-bold text-green-600 dark:text-green-400">foundational guidelines</span> that help testers create test cases that are:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Effective at finding defects</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Comprehensive and thorough</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Maintainable and reusable</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Efficient to execute and maintain</span>
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
                  Think of test design principles like <span className="font-semibold">architectural blueprints</span>. 
                  Just as architects follow principles to design buildings that are safe, functional, and efficient, 
                  testers follow design principles to create test cases that thoroughly validate software quality.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Core Test Design Principles - Visual Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Lightbulb className="w-7 h-7" />
            Core Test Design Principles
          </CardTitle>
          <CardDescription className="text-base">
            Essential principles every tester should master
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Visual Principles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Principle 1: Completeness */}
              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Circle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100">Completeness</h4>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                  Test cases should cover all requirements and scenarios
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Functional requirements</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Non-functional requirements</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Edge cases and boundaries</span>
                  </div>
                </div>
              </div>

              {/* Principle 2: Traceability */}
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100">Traceability</h4>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                  Each test case should be traceable to requirements
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Requirement mapping</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Coverage tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Impact analysis</span>
                  </div>
                </div>
              </div>

              {/* Principle 3: Independence */}
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                    <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-100">Independence</h4>
                </div>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                  Test cases should be independent of each other
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>No dependencies</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Isolated execution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Clear results</span>
                  </div>
                </div>
              </div>

              {/* Principle 4: Repeatability */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">Repeatability</h4>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Tests should produce same results under same conditions
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Consistent execution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Same data, same result</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Environment stability</span>
                  </div>
                </div>
              </div>

              {/* Principle 5: Maintainability */}
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-bold text-amber-900 dark:text-amber-100">Maintainability</h4>
                </div>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  Test cases should be easy to understand and modify
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Clear documentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Easy updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Standardized format</span>
                  </div>
                </div>
              </div>

              {/* Principle 6: Efficiency */}
              <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
                    <Star className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h4 className="font-bold text-rose-900 dark:text-rose-100">Efficiency</h4>
                </div>
                <p className="text-sm text-rose-800 dark:text-rose-200 mb-3">
                  Tests should provide maximum coverage with minimum effort
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Risk-based approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Optimal coverage</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Time management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Flow Diagram */}
            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="text-center font-bold text-slate-900 dark:text-slate-100 mb-6">Test Design Process Flow</h5>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Circle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-orange-700 dark:text-orange-300">Requirements</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Square className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-purple-700 dark:text-purple-300">Design</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Triangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Execute</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Diamond className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Evaluate</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Test Design Techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Hexagon className="w-7 h-7" />
            Essential Test Design Techniques
          </CardTitle>
          <CardDescription className="text-base">
            Practical techniques for applying test design principles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Techniques Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Equivalence Partitioning */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Circle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Equivalence Partitioning</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Divide input data into classes where all members behave similarly
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Example: Age Validation</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Invalid: Age &lt; 0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Invalid: Age &gt; 120</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Valid: 0 ≤ Age ≤ 120</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Boundary Value Analysis */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Boundary Value Analysis</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Test at the edges of equivalence partitions where errors are most likely
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Test Points</h5>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <div className="px-2 py-1 bg-red-100 text-red-700 rounded">-1</div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded">0</div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded">1</div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded">119</div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded">120</div>
                  <div className="px-2 py-1 bg-red-100 text-red-700 rounded">121</div>
                </div>
              </div>
            </div>

            {/* Decision Table Testing */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Square className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Decision Table Testing</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Test different combinations of input conditions and actions
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Login Scenarios</h5>
                <div className="text-xs space-y-1">
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div className="font-semibold">Username</div>
                    <div className="font-semibold">Password</div>
                    <div className="font-semibold">Result</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div>Valid</div>
                    <div>Valid</div>
                    <div className="text-green-600">Success</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div>Invalid</div>
                    <div>Valid</div>
                    <div className="text-red-600">Error</div>
                  </div>
                </div>
              </div>
            </div>

            {/* State Transition Testing */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h4 className="font-bold text-amber-900 dark:text-amber-100">State Transition Testing</h4>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-200 mb-4">
                Test transitions between different system states
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-amber-300 dark:border-amber-600">
                <h5 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Order States</h5>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <div className="px-2 py-1 bg-gray-100 rounded">Pending</div>
                  <ArrowRight className="w-3 h-3" />
                  <div className="px-2 py-1 bg-blue-100 rounded">Processing</div>
                  <ArrowRight className="w-3 h-3" />
                  <div className="px-2 py-1 bg-green-100 rounded">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Test Design Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Best Practices ✅
            </h4>
            <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Write clear, unambiguous test steps</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Include expected results for each step</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use meaningful test case names</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Prioritize tests based on risk and importance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Review and peer-test test cases</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
              <Bug className="w-5 h-5" />
              Common Pitfalls ❌
            </h4>
            <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Writing vague or ambiguous test steps</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Creating dependent test cases</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Testing the same functionality repeatedly</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ignoring edge cases and boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Not updating test cases when requirements change</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Key Takeaways */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Lightbulb className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="mt-2 space-y-1">
            <li>• Test design principles provide systematic guidelines for creating effective test cases</li>
            <li>• Core principles include completeness, traceability, independence, repeatability, maintainability, and efficiency</li>
            <li>• Essential techniques: equivalence partitioning, boundary value analysis, decision tables, state transition</li>
            <li>• Good test design leads to better defect detection and improved software quality</li>
            <li>• Always consider risk, coverage, and maintainability when designing tests</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Topic Navigation */}
      <TopicNavigation 
        currentTopic={currentTopic}
        language={language}
      />

      {/* AI Assistant */}
      <AiSimplification 
        topic={currentTopic}
        language={language}
        codeSnippet="// Example of boundary value analysis\nconst testCases = [\n  { input: -1, expected: 'invalid' },  // Below boundary\n  { input: 0, expected: 'valid' },    // At boundary\n  { input: 1, expected: 'valid' },    // Above boundary\n  { input: 120, expected: 'valid' },  // At boundary\n  { input: 121, expected: 'invalid' } // Above boundary\n];"
      />
    </div>
  );
}
