'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Lightbulb, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function WhenNotToUse() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={AlertTriangle}
        category="Tailwind CSS · Best Practices"
        title="When Not to Use Tailwind"
        description="Understanding limitations and alternatives"
        colorTheme="orange"
      />

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            When Not to Use Tailwind
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Right Tool for the Job</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Tailwind is powerful, but it's not always the best choice
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-red-500 rounded-lg">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            Not Ideal For
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                scenario: 'Email Templates',
                reason: 'Need inline styles, Tailwind generates classes',
                alternative: 'Use inline CSS or email-specific frameworks'
              },
              {
                scenario: 'Simple Static Sites',
                reason: 'Overhead may not be worth it for 1-2 pages',
                alternative: 'Plain CSS or minimal framework'
              },
              {
                scenario: 'Team Unfamiliar with Utility-First',
                reason: 'Steep learning curve, may slow development',
                alternative: 'Traditional CSS or train team first'
              },
              {
                scenario: 'Highly Custom Animations',
                reason: 'Complex @keyframes easier in CSS',
                alternative: 'Custom CSS or animation libraries'
              },
              {
                scenario: 'Print-Heavy Applications',
                reason: 'Print styles can be challenging',
                alternative: 'Custom CSS with @media print'
              }
            ].map((item, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">{item.scenario}</h4>
                <p className="text-sm text-red-700 dark:text-red-300 mb-2">Why: {item.reason}</p>
                <div className="flex items-start gap-2 text-xs text-red-600 dark:text-red-400">
                  <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>{item.alternative}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            Potential Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                challenge: 'HTML Bloat',
                desc: 'Long class strings can make HTML harder to read',
                solution: 'Extract components, use @apply sparingly'
              },
              {
                challenge: 'Learning Curve',
                desc: 'Team needs to learn utility-first approach',
                solution: 'Training, documentation, code reviews'
              },
              {
                challenge: 'Design Consistency',
                desc: 'Easy to create inconsistent spacing/colors',
                solution: 'Use design tokens, establish conventions'
              },
              {
                challenge: 'Bundle Size',
                desc: 'Can be large without proper purging',
                solution: 'Configure PurgeCSS, use JIT mode'
              }
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">{item.challenge}</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">{item.desc}</p>
                <div className="flex items-start gap-2 text-xs text-yellow-600 dark:text-yellow-400">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Solution: {item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Hybrid Approaches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">You don't have to use Tailwind for everything:</p>
            
            <div className="space-y-3">
              {[
                {
                  approach: 'Tailwind + Custom CSS',
                  use: 'Use Tailwind for layouts, custom CSS for complex animations'
                },
                {
                  approach: 'Component Libraries',
                  use: 'Use Tailwind with headless UI libraries (Radix, Headless UI)'
                },
                {
                  approach: 'Selective Pages',
                  use: 'Use Tailwind for app pages, custom CSS for marketing sites'
                },
                {
                  approach: '@apply for Patterns',
                  use: 'Extract repeated patterns to custom classes'
                }
              ].map((item, i) => (
                <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.approach}</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Decision Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Use Tailwind if:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li>✓ Building modern web applications</li>
              <li>✓ Need rapid prototyping</li>
              <li>✓ Want consistent design system</li>
              <li>✓ Team comfortable with utility-first</li>
              <li>✓ Using component-based frameworks</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800 mt-3">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Consider alternatives if:</h4>
            <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              <li>✗ Building email templates</li>
              <li>✗ Very simple static sites</li>
              <li>✗ Team strongly prefers traditional CSS</li>
              <li>✗ Need complex print layouts</li>
              <li>✗ Working with legacy codebase</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <AlertTriangle className="w-5 h-5 text-orange-600" />
        <AlertTitle className="text-2xl text-orange-900 dark:text-orange-100">Bottom Line</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Tailwind is excellent for most modern web applications</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consider your project needs and team preferences</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Hybrid approaches (Tailwind + custom CSS) are valid</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Choose based on project requirements, not hype</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
