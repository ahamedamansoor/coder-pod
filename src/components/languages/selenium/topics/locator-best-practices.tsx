'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Target,
  CheckCircle,
  AlertCircle,
  Code,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Star,
  Search,
  Eye,
  MousePointer,
  Tag,
  Hash,
  FileText,
  Layers,
  Triangle,
  Square,
  Circle,
  Hexagon
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function LocatorBestPracticesComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'locator-best-practices',
    title: 'Locator Best Practices',
    explanation: 'Choosing reliable and maintainable locators',
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
        icon={Target}
        category="Selenium · Element Locators"
        title="Locator Best Practices"
        description="Master the art of finding elements reliably and efficiently with proven locator strategies and techniques"
        colorTheme="green"
        badges={[
          { label: 'Element Locators', variant: 'success' },
          { label: 'Best Practices', variant: 'info' },
          { label: 'Reliability', variant: 'secondary' },
        ]}
      />

      {/* Section 1: What are Locators? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <Target className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                Understanding Element Locators
              </CardTitle>
              <CardDescription className="text-base mt-1">
                The foundation of reliable Selenium automation - finding elements consistently
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Element locators are <span className="font-bold text-green-600 dark:text-green-400">addressing mechanisms</span> that help Selenium find and interact with web elements. Good locators are:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Unique and identify exactly one element</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Stable and resistant to UI changes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Fast and efficient in execution</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Readable and maintainable</span>
              </li>
            </ul>
          </div>

          {/* Locator Analogy */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Locator Analogy</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Think of locators like <span className="font-semibold">GPS coordinates for web elements</span>. 
                  Just as GPS helps you find specific locations on a map, locators help Selenium find 
                  specific elements on a web page. Good coordinates (locators) get you exactly where you need to go, 
                  every time.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Locator Priority Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Triangle className="w-7 h-7" />
            Locator Priority Hierarchy
          </CardTitle>
          <CardDescription className="text-base">
            Choose the right locator for maximum reliability and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Priority Pyramid */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <h5 className="text-center font-bold text-slate-900 dark:text-slate-100 mb-6">Locator Priority Pyramid</h5>
              <div className="flex flex-col items-center space-y-4">
                {/* Top Priority */}
                <div className="w-full max-w-md">
                  <div className="p-4 bg-emerald-500 text-white rounded-lg text-center font-bold">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Hash className="w-5 h-5" />
                      <span>ID Locator</span>
                    </div>
                    <div className="text-sm">Most Reliable - Unique by definition</div>
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />

                {/* Second Priority */}
                <div className="w-full max-w-md">
                  <div className="p-4 bg-blue-500 text-white rounded-lg text-center font-bold">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Tag className="w-5 h-5" />
                      <span>Name Locator</span>
                    </div>
                    <div className="text-sm">Very Reliable - Often unique</div>
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />

                {/* Third Priority */}
                <div className="w-full max-w-md grid grid-cols-2 gap-2">
                  <div className="p-3 bg-purple-500 text-white rounded-lg text-center font-bold text-sm">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Code className="w-4 h-4" />
                      <span>CSS</span>
                    </div>
                    <div className="text-xs">Fast & Flexible</div>
                  </div>
                  <div className="p-3 bg-orange-500 text-white rounded-lg text-center font-bold text-sm">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <FileText className="w-4 h-4" />
                      <span>XPath</span>
                    </div>
                    <div className="text-xs">Powerful & Complex</div>
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />

                {/* Last Priority */}
                <div className="w-full max-w-md grid grid-cols-3 gap-2">
                  <div className="p-2 bg-rose-500 text-white rounded-lg text-center font-bold text-xs">
                    <span>LinkText</span>
                  </div>
                  <div className="p-2 bg-amber-500 text-white rounded-lg text-center font-bold text-xs">
                    <span>PartialLink</span>
                  </div>
                  <div className="p-2 bg-slate-500 text-white rounded-lg text-center font-bold text-xs">
                    <span>TagName</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Locator Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* ID Locator */}
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                    <Hash className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-100">ID Locator</h4>
                </div>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                  Fastest and most reliable locator type
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 font-mono text-xs mb-3">
                  By.id("username")
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Always unique</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Fastest execution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Browser native</span>
                  </div>
                </div>
              </div>

              {/* Name Locator */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <Tag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">Name Locator</h4>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  Very reliable for form elements
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 font-mono text-xs mb-3">
                  By.name("email")
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Good for forms</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Often unique</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Fast execution</span>
                  </div>
                </div>
              </div>

              {/* CSS Selector */}
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                    <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100">CSS Selector</h4>
                </div>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                  Fast and flexible for complex selections
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 font-mono text-xs mb-3">
                  By.cssSelector(".btn.primary")
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Very flexible</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Good performance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span>Widely supported</span>
                  </div>
                </div>
              </div>

              {/* XPath */}
              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold text-orange-900 dark:text-orange-100">XPath</h4>
                </div>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                  Most powerful but slower than CSS
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 font-mono text-xs mb-3">
                  By.xpath("//button[@type='submit']")
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Most powerful</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-orange-600" />
                    <span>Bi-directional</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertCircle className="w-3 h-3 text-orange-600" />
                    <span>Slower performance</span>
                  </div>
                </div>
              </div>

              {/* Link Text */}
              <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg">
                    <Eye className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h4 className="font-bold text-rose-900 dark:text-rose-100">Link Text</h4>
                </div>
                <p className="text-sm text-rose-800 dark:text-rose-200 mb-3">
                  Only works with anchor (&lt;a&gt;) tags
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 font-mono text-xs mb-3">
                  By.linkText("Click here")
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-rose-600" />
                    <span>Simple to use</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertCircle className="w-3 h-3 text-rose-600" />
                    <span>Limited to links</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertCircle className="w-3 h-3 text-rose-600" />
                    <span>Can be brittle</span>
                  </div>
                </div>
              </div>

              {/* Tag Name */}
              <div className="p-5 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/20 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-900/40 rounded-lg">
                    <Layers className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Tag Name</h4>
                </div>
                <p className="text-sm text-slate-800 dark:text-slate-200 mb-3">
                  Finds elements by HTML tag name
                </p>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 font-mono text-xs mb-3">
                  By.tagName("input")
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-slate-600" />
                    <span>Simple syntax</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertCircle className="w-3 h-3 text-slate-600" />
                    <span>Not unique</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <AlertCircle className="w-3 h-3 text-slate-600" />
                    <span>Limited use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Advanced Locator Techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Zap className="w-7 h-7" />
            Advanced Locator Techniques
          </CardTitle>
          <CardDescription className="text-base">
            Powerful strategies for complex element identification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Advanced Techniques Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Relative Locators */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Relative Locators</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Find elements based on their relationship to other elements
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Examples</h5>
                <div className="space-y-2 font-mono text-xs">
                  <div>above(By.id("password"))</div>
                  <div>below(By.id("username"))</div>
                  <div>near(By.className("label"))</div>
                  <div>toLeftOf(By.className("submit"))</div>
                </div>
              </div>
            </div>

            {/* CSS Combinators */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">CSS Combinators</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Combine multiple selectors for precise targeting
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Examples</h5>
                <div className="space-y-2 font-mono text-xs">
                  <div>form {'>'} input[type="text"]</div>
                  <div>.nav ul li:nth-child(2)</div>
                  <div>[data-testid*="login"]</div>
                  <div>.btn:not([disabled])</div>
                </div>
              </div>
            </div>

            {/* XPath Functions */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">XPath Functions</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Use XPath functions for dynamic element finding
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Examples</h5>
                <div className="space-y-2 font-mono text-xs">
                  <div>contains(text(), "Submit")</div>
                  <div>starts-with(@id, "user_")</div>
                  <div>normalize-space(text())</div>
                  <div>position() = last()</div>
                </div>
              </div>
            </div>

            {/* Custom Attributes */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <Tag className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Custom Attributes</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Use test-specific attributes for reliable locators
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Examples</h5>
                <div className="space-y-2 font-mono text-xs">
                  <div>[data-testid="login-button"]</div>
                  <div>[data-cy="submit-form"]</div>
                  <div>[test-id="user-input"]</div>
                  <div>[automation-id="header"]</div>
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
            Locator Best Practices
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
                <span>Always prefer ID locators when available</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use relative locators over absolute XPath</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid auto-generated IDs with timestamps</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use custom test attributes (data-testid)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Wait for elements before interacting</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Avoid These ❌
            </h4>
            <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't use absolute XPath (/html/body/div...)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid locators with auto-generated numbers</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't rely on CSS class names for styling</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid complex XPath expressions</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't use Thread.sleep() for element waiting</span>
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
            Practical Locator Examples
          </CardTitle>
          <CardDescription className="text-base">
            Real-world examples of effective locator strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="mb-4">
              <h5 className="text-green-400 font-semibold">Best Practice Locator Examples</h5>
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto">
              <code>{`// Good: Using ID locator (most reliable)
WebElement username = driver.findElement(By.id("username"));

// Good: Using CSS selector with custom attribute
WebElement submitBtn = driver.findElement(By.cssSelector("[data-testid='submit-btn']"));

// Good: Using relative XPath
WebElement loginBtn = driver.findElement(By.xpath("//button[contains(text(), 'Login')]"));

// Good: Using CSS combinators
WebElement emailInput = driver.findElement(By.cssSelector("form.login input[type='email']"));

// Bad: Absolute XPath (brittle)
// WebElement bad = driver.findElement(By.xpath("/html/body/div[1]/form/input[1]"));

// Bad: Auto-generated ID (changes every time)
// WebElement bad = driver.findElement(By.id("user_123456789"));`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Key Takeaways */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Star className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="mt-2 space-y-1">
            <li>• Always prioritize ID locators for maximum reliability</li>
            <li>• Use CSS selectors for balance of performance and flexibility</li>
            <li>• Avoid absolute XPath and auto-generated locators</li>
            <li>• Implement custom test attributes for better test stability</li>
            <li>• Always use explicit waits with your locators</li>
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
