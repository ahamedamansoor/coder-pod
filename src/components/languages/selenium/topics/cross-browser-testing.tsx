'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Globe,
  CheckCircle,
  AlertCircle,
  Code,
  Zap,
  Monitor,
  Smartphone,
  Tablet,
  ArrowRight,
  Star,
  Chrome,
  Triangle,
  Square,
  Circle,
  Hexagon
} from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicNavigation } from '@/components/shared/topic-navigation';
import type { Language, Topic } from '@/data/languages';

export function CrossBrowserTestingComponent() {
  // Define the current topic and language for navigation and AI assistant
  const currentTopic: Topic = {
    slug: 'cross-browser-testing',
    title: 'Cross-Browser Testing',
    explanation: 'Strategies for effective cross-browser testing',
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
        icon={Globe}
        category="Selenium · Browser Compatibility"
        title="Cross-Browser Testing"
        description="Master the art of ensuring web applications work consistently across different browsers and platforms"
        colorTheme="green"
        badges={[
          { label: 'Browser Compatibility', variant: 'success' },
          { label: 'Multi-Browser', variant: 'info' },
          { label: 'Consistency', variant: 'secondary' },
        ]}
      />

      {/* Section 1: What is Cross-Browser Testing? */}
      <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl">
              <Globe className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-green-600 dark:text-green-400">
                Understanding Cross-Browser Testing
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Testing web applications across multiple browsers to ensure consistent user experience
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Cross-browser testing ensures your web application <span className="font-bold text-green-600 dark:text-green-400">functions consistently</span> across:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Different web browsers (Chrome, Firefox, Safari, Edge)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Various browser versions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Different operating systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Multiple devices (desktop, mobile, tablet)</span>
              </li>
            </ul>
          </div>

          {/* Cross-Browser Analogy */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Cross-Browser Analogy</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Think of cross-browser testing like <span className="font-semibold">universal remote controls</span>. 
                  A universal remote needs to work with different TV brands (Samsung, LG, Sony) and models. 
                  Similarly, your web application needs to work seamlessly across different browsers, 
                  each with its own rendering engine and quirks.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Why Cross-Browser Testing Matters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Why Cross-Browser Testing Matters
          </CardTitle>
          <CardDescription className="text-base">
            Critical importance for modern web applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* User Experience */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                  <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-100">User Experience</h4>
              </div>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-3">
                Consistent experience for all users
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Brand consistency</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>User satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Reduced complaints</span>
                </div>
              </div>
            </div>

            {/* Market Coverage */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Market Coverage</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Reach users on their preferred browser
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Wider audience</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Higher conversion</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Competitive advantage</span>
                </div>
              </div>
            </div>

            {/* Bug Prevention */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Bug Prevention</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Catch browser-specific issues early
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Early detection</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Cost reduction</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Quality assurance</span>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Compliance</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Meet accessibility and legal requirements
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>WCAG standards</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Legal compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Industry standards</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Browser Support Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Globe className="w-7 h-7" />
            Browser Support Matrix
          </CardTitle>
          <CardDescription className="text-base">
            Understanding browser market share and testing priorities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Browser Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Chrome */}
            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Chrome className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Chrome</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Most popular browser worldwide
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>~65% market share</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>Chromium engine</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>Excellent DevTools</span>
                </div>
              </div>
            </div>

            {/* Firefox */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Firefox</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Open-source privacy-focused browser
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>~10% market share</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Gecko engine</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-orange-600" />
                  <span>Strong standards support</span>
                </div>
              </div>
            </div>

            {/* Safari */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Safari</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Apple's default browser
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>~20% market share</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>WebKit engine</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span>Mobile dominant</span>
                </div>
              </div>
            </div>

            {/* Edge */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Edge</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Microsoft's modern browser
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>~5% market share</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Chromium engine</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-purple-600" />
                  <span>Windows default</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testing Priority Matrix */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Testing Priority Matrix</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <h6 className="font-semibold text-red-700 dark:text-red-300">Critical</h6>
                <p className="text-sm text-slate-600 dark:text-slate-400">Chrome, Safari</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">85% combined share</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <h6 className="font-semibold text-orange-700 dark:text-orange-300">Important</h6>
                <p className="text-sm text-slate-600 dark:text-slate-400">Firefox, Edge</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">15% combined share</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <h6 className="font-semibold text-blue-700 dark:text-blue-300">Optional</h6>
                <p className="text-sm text-slate-600 dark:text-slate-400">Opera, Brave</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Niche audiences</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Cross-Browser Testing Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Zap className="w-7 h-7" />
            Cross-Browser Testing Strategies
          </CardTitle>
          <CardDescription className="text-base">
            Effective approaches for comprehensive browser testing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Strategies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Progressive Enhancement */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <Triangle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Progressive Enhancement</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Start with basic functionality, enhance for modern browsers
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-green-300 dark:border-green-600">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Implementation</h5>
                <pre className="text-xs font-mono text-green-800 dark:text-green-200">
{`/* Base styles for all browsers */
.button {
  background: #ccc;
  padding: 10px;
}

/* Enhanced for modern browsers */
@supports (backdrop-filter: blur()) {
  .button {
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.1);
  }
}`}
                </pre>
              </div>
            </div>

            {/* Feature Detection */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <Square className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100">Feature Detection</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Test for browser capabilities before using features
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-300 dark:border-blue-600">
                <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">JavaScript Example</h5>
                <pre className="text-xs font-mono text-blue-800 dark:text-blue-200 overflow-x-auto whitespace-pre-wrap break-words">
{`if ('IntersectionObserver' in window) {
  // Modern browsers
  const observer = new IntersectionObserver(callback);
} else {
  // Fallback for older browsers
  window.addEventListener('scroll', callback);
}`}
                </pre>
              </div>
            </div>

            {/* Graceful Degradation */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Circle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">Graceful Degradation</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Build for modern browsers, provide fallbacks for older ones
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">CSS Fallbacks</h5>
                <pre className="text-xs font-mono text-purple-800 dark:text-purple-200 overflow-x-auto whitespace-pre-wrap break-words">
{`.element {
  /* Fallback */
  background: #333;
  
  /* Modern browsers */
  background: linear-gradient(45deg, #1a1a1a, #333);
  
  /* Latest browsers */
  background: conic-gradient(from 45deg, #1a1a1a, #333);
}`}
                </pre>
              </div>
            </div>

            {/* Responsive Testing */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <Hexagon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-orange-900 dark:text-orange-100">Responsive Testing</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-4">
                Test across different screen sizes and viewports
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-300 dark:border-orange-600">
                <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Viewport Testing</h5>
                <pre className="text-xs font-mono text-orange-800 dark:text-orange-200 overflow-x-auto whitespace-pre-wrap break-words">
{`// Test different screen sizes
const viewports = [
  { width: 375, height: 667 },  // Mobile
  { width: 768, height: 1024 }, // Tablet
  { width: 1920, height: 1080 } // Desktop
];`}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Selenium Cross-Browser Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Selenium Cross-Browser Implementation
          </CardTitle>
          <CardDescription className="text-base">
            Practical implementation of cross-browser testing with Selenium
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Browser Driver Setup */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Browser Driver Factory Pattern</h5>
            <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
              <code>{`public class WebDriverFactory {
    
    public static WebDriver createDriver(String browser) {
        switch (browser.toLowerCase()) {
            case "chrome":
                return new ChromeDriver(getChromeOptions());
            case "firefox":
                return new FirefoxDriver(getFirefoxOptions());
            case "safari":
                return new SafariDriver();
            case "edge":
                return new EdgeDriver(getEdgeOptions());
            default:
                throw new IllegalArgumentException(
                    "Unsupported browser: " + browser);
        }
    }
    
    private static ChromeOptions getChromeOptions() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-infobars");
        options.setExperimentalOption("excludeSwitches", 
            new String[]{"enable-automation"});
        return options;
    }
    
    private static FirefoxOptions getFirefoxOptions() {
        FirefoxOptions options = new FirefoxOptions();
        options.addArguments("--start-maximized");
        return options;
    }
}`}</code>
            </pre>
          </div>

          {/* Parallel Execution */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Parallel Test Execution</h5>
            <pre className="text-sm font-mono text-slate-800 dark:text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
              <code>{`@RunWith(Parameterized.class)
public class CrossBrowserTest {
    
    @Parameter(0)
    public String browser;
    
    @Parameter(1)
    public String version;
    
    @Parameters(name = "{0} v{1}")
    public static Collection<Object[]> browsers() {
        return Arrays.asList(new Object[][] {
            {"chrome", "latest"},
            {"firefox", "latest"},
            {"safari", "latest"},
            {"edge", "latest"}
        });
    }
    
    @Before
    public void setUp() {
        driver = WebDriverFactory.createDriver(browser);
        driver.manage().timeouts().implicitlyWait(10, 
            TimeUnit.SECONDS);
    }
    
    @Test
    public void testLoginFunctionality() {
        // Test implementation that works across all browsers
        driver.get("https://example.com/login");
        LoginPage loginPage = new LoginPage(driver);
        
        loginPage.login("test@example.com", "password123");
        
        assertTrue("Login should succeed on all browsers", 
                  dashboardPage.isDisplayed());
    }
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Star className="w-7 h-7" />
            Cross-Browser Testing Best Practices
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
                <span>Test on browsers with highest market share first</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use browser-agnostic locators (ID, CSS selectors)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Implement proper wait strategies for different browsers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Run tests in parallel across browsers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Test responsive design on mobile browsers</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-6 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Common Pitfalls ❌
            </h4>
            <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't use browser-specific CSS selectors</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid hard-coded browser-specific waits</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't ignore browser-specific rendering differences</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avoid testing on outdated browser versions</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Don't skip mobile browser testing</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Code Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-green-600 dark:text-green-400">
            <Code className="w-7 h-7" />
            Complete Cross-Browser Test Example
          </CardTitle>
          <CardDescription className="text-base">
            Full implementation of cross-browser testing strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="mb-4">
              <h5 className="text-green-400 font-semibold">Cross-Browser Test Suite</h5>
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap break-words">
              <code>{`@RunWith(Suite.class)
@Suite.SuiteClasses({
    ChromeLoginTest.class,
    FirefoxLoginTest.class,
    SafariLoginTest.class,
    EdgeLoginTest.class
})
public class CrossBrowserTestSuite {
    // Test suite runner
}

public abstract class BaseCrossBrowserTest {
    protected WebDriver driver;
    
    @Before
    public void setUp() {
        String browser = System.getProperty("browser", "chrome");
        driver = WebDriverFactory.createDriver(browser);
        driver.manage().window().maximize();
    }
    
    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
    
    protected void performLoginTest() {
        driver.get("https://example.com/login");
        
        // Use browser-agnostic locators
        WebElement emailField = driver.findElement(By.id("email"));
        WebElement passwordField = driver.findElement(By.id("password"));
        WebElement submitButton = driver.findElement(By.cssSelector("button[type='submit']"));
        
        emailField.sendKeys("test@example.com");
        passwordField.sendKeys("password123");
        submitButton.click();
        
        // Wait for navigation with explicit wait
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement welcomeMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("welcome")));
        
        assertTrue("Welcome message should be displayed", welcomeMessage.isDisplayed());
    }
}

public class ChromeLoginTest extends BaseCrossBrowserTest {
    @Test
    public void testLoginInChrome() {
        performLoginTest();
    }
}}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Section 8: Key Takeaways */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <Globe className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Key Takeaways</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="mt-2 space-y-1">
            <li>• Cross-browser testing ensures consistent user experience across different browsers</li>
            <li>• Prioritize testing based on browser market share and user demographics</li>
            <li>• Use browser-agnostic locators and proper wait strategies</li>
            <li>• Implement parallel execution to improve testing efficiency</li>
            <li>• Test responsive design and mobile browsers for comprehensive coverage</li>
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
