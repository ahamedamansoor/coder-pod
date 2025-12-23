'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Zap, 
  Globe, 
  CheckCircle, 
  Users, 
  Clock, 
  Target,
  Monitor,
  MousePointer,
  Code,
  TrendingUp,
  AlertCircle,
  Play,
  ArrowRight,
  Sparkles,
  BookOpen,
  Rocket,
  TestTube,
  Database,
  Shield,
  Layers,
  FileCheck,
  Bug,
  Lightbulb,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Diamond,
  Star
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function TestDesignPrinciplesSeleniumComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'test-design-principles',
    title: 'Test Design Principles',
    explanation: 'SOLID principles and clean code for test automation',
    category: '20. Best Practices'
  };

  const language: Language = {
    slug: 'selenium',
    name: 'Selenium',
    description: 'Master the world\'s most powerful browser automation tool',
    topics: []
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        icon={Layers}
        category="Selenium · Test Design Techniques"
        title="Test Design Principles for Selenium"
        description="Master essential test design principles for creating robust, maintainable, and effective Selenium automated tests"
        colorTheme="green"
        badges={[
          { label: 'Automated Testing', variant: 'success' },
          { label: 'Best Practices', variant: 'info' },
          { label: 'Design Patterns', variant: 'secondary' },
        ]}
      />

      {/* Section 1: What are Selenium Test Design Principles? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <Layers className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                Selenium Test Design Principles
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Specialized guidelines for designing effective automated tests with Selenium WebDriver
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Selenium test design principles are <span className="font-bold text-green-600 dark:text-green-400">specialized guidelines</span> that help testers create automated tests that are:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Reliable and consistent across different browsers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Maintainable and easy to update</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Fast and efficient in execution</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Resilient to UI changes</span>
              </li>
            </ul>
          </div>

          {/* Selenium-Specific Analogy */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Selenium-Specific Analogy</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Think of Selenium test design like <span className="font-semibold">building a robot workforce</span>. 
                  Each test is a robot that performs specific tasks consistently. Good design principles ensure 
                  your robots are reliable, adaptable to changes, and work efficiently across different environments 
                  (browsers, operating systems, screen sizes).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Core Selenium Test Design Principles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Lightbulb className="w-7 h-7" />
            Core Selenium Test Design Principles
          </CardTitle>
          <CardDescription className="text-base">
            Essential principles specifically for automated testing with Selenium
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Visual Principles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Principle 1: Locator Strategy */}
              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100">Smart Locators</h4>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                  Use stable, reliable locators that resist UI changes
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>ID {'>'} CSS {'>'} XPath</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Avoid brittle locators</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Use relative XPath</span>
                  </div>
                </div>
              </div>

              {/* Principle 2: Wait Strategies */}
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100">Explicit Waits</h4>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                  Use explicit waits instead of Thread.sleep()
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>WebDriverWait</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Expected conditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Avoid hard-coded delays</span>
                  </div>
                </div>
              </div>

              {/* Principle 3: Page Object Model */}
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                    <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-100">Page Object Model</h4>
                </div>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                  Separate page logic from test logic
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Encapsulation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Reusability</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Maintainability</span>
                  </div>
                </div>
              </div>

              {/* Principle 4: Test Data Management */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">Test Data Strategy</h4>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Separate test data from test logic
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>External data files</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Data factories</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Environment-specific</span>
                  </div>
                </div>
              </div>

              {/* Principle 5: Error Handling */}
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
                    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-bold text-amber-900 dark:text-amber-100">Robust Error Handling</h4>
                </div>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  Handle failures gracefully with proper logging
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Try-catch blocks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Screenshot capture</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Test recovery</span>
                  </div>
                </div>
              </div>

              {/* Principle 6: Cross-Browser Compatibility */}
              <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
                    <Globe className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h4 className="font-bold text-rose-900 dark:text-rose-100">Cross-Browser Design</h4>
                </div>
                <p className="text-sm text-rose-800 dark:text-rose-200 mb-3">
                  Design tests to work across all browsers
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Browser-agnostic locators</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Responsive design testing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Browser-specific handling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Flow Diagram */}
            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="text-center font-bold text-slate-900 dark:text-slate-100 mb-6">Selenium Test Design Process</h5>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-orange-700 dark:text-orange-300">Locate</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-purple-700 dark:text-purple-300">Wait</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MousePointer className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Act</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Assert</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Selenium-Specific Design Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Essential Selenium Design Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Proven patterns for building maintainable Selenium tests
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Patterns Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Page Object Model */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Layers className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Page Object Model (POM)</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Object-oriented design pattern for web UI interactions
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Benefits</h5>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Code reusability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Easier maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Separation of concerns</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data-Driven Testing */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Data-Driven Testing</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Separate test logic from test data
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Data Sources</h5>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Excel/CSV files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>JSON/XML files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Databases</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Builder Pattern */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Builder Pattern</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Fluent interface for test configuration
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Use Cases</h5>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Test data creation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Configuration setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Fluent API design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Facade Pattern */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h4 className="font-bold text-amber-900 dark:text-amber-100">Facade Pattern</h4>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-200 mb-4">
                Simplified interface for complex operations
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-amber-300 dark:border-amber-600">
                <h5 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Applications</h5>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>API wrappers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Test utilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-amber-600" />
                    <span>Common operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Best Practices for Selenium Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Selenium Test Best Practices
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
                <span>Use explicit waits instead of Thread.sleep()</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Implement Page Object Model pattern</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use relative locators over absolute</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Capture screenshots on test failures</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Design tests for cross-browser execution</span>
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
                <span>Using implicit waits or Thread.sleep()</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hard-coding test data in tests</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Creating brittle XPath expressions</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Not handling exceptions properly</span>
              </li>
              <li className="flex items-start gap-2">
                <Bug className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Writing tests that depend on each other</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Code Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Practical Selenium Example
          </CardTitle>
          <CardDescription className="text-base">
            Well-designed Selenium test following best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="mb-4">
              <h5 className="text-green-400 font-semibold">Login Test Example</h5>
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto">
              <code>{`// Good: Using Page Object Model and explicit waits
public class LoginPage {
  private WebDriver driver;
  private WebDriverWait wait;
  
  @FindBy(id = "username")
  private WebElement usernameField;
  
  @FindBy(id = "password")
  private WebElement passwordField;
  
  @FindBy(css = "button[type='submit']")
  private WebElement loginButton;
  
  public LoginPage(WebDriver driver) {
    this.driver = driver;
    this.wait = new WebDriverWait(driver, 10);
    PageFactory.initElements(driver, this);
  }
  
  public void login(String username, String password) {
    wait.until(ExpectedConditions.visibilityOf(usernameField))
         .sendKeys(username);
    passwordField.sendKeys(password);
    loginButton.click();
  }
}

// Test class using the Page Object
@Test
public void testValidLogin() {
  LoginPage loginPage = new LoginPage(driver);
  loginPage.login("user@example.com", "password123");
  
  // Assert successful login
  assertTrue(driver.getCurrentUrl().contains("/dashboard"));
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Key Takeaways */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Lightbulb className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="mt-2 space-y-1">
            <li>• Selenium test design principles focus on reliability, maintainability, and efficiency</li>
            <li>• Use explicit waits, Page Object Model, and smart locators for robust tests</li>
            <li>• Implement proper error handling and cross-browser compatibility</li>
            <li>• Separate test data, logic, and page interactions for better maintainability</li>
            <li>• Always design tests with scalability and team collaboration in mind</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Topic Navigation */}
      <TopicNavigation 
        currentTopic={currentTopic}
        language={language}
      />
    </div>
  );
}
