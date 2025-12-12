'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Users, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TeamWorkflows() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Users}
        category="Tailwind CSS · Best Practices"
        title="Team Workflows"
        description="Working with Tailwind in teams"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            Team Workflows
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Consistency is Key</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Establish conventions and workflows for team success
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Establishing Conventions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                convention: 'Design Tokens',
                desc: 'Define standard colors, spacing, fonts in config',
                benefit: 'Everyone uses same values'
              },
              {
                convention: 'Component Library',
                desc: 'Create reusable components for common patterns',
                benefit: 'Consistent UI across team'
              },
              {
                convention: 'Class Ordering',
                desc: 'Use Prettier plugin to auto-sort classes',
                benefit: 'Readable, consistent code'
              },
              {
                convention: 'Naming Patterns',
                desc: 'Agree on component and file naming',
                benefit: 'Easy to find and maintain'
              }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.convention}</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">{item.desc}</p>
                <div className="flex items-start gap-2 text-xs text-blue-600 dark:text-blue-400">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Benefit: {item.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            Code Review Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { check: 'Proper utility usage', look: 'No unnecessary classes, correct responsive prefixes' },
              { check: 'Component extraction', look: 'Repeated patterns moved to components' },
              { check: 'Design token usage', look: 'Using configured colors/spacing, not arbitrary values' },
              { check: 'Accessibility', look: 'Proper contrast, focus states, semantic HTML' },
              { check: 'Performance', look: 'No excessive classes, proper purging configured' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 text-sm mb-1">{item.check}</h4>
                <p className="text-xs text-purple-700 dark:text-purple-300">Look for: {item.look}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">What to Document:</h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>✓ Design token decisions (why these colors/sizes)</li>
                <li>✓ Component usage examples</li>
                <li>✓ Custom utility classes and when to use</li>
                <li>✓ Responsive breakpoint strategy</li>
                <li>✓ Common patterns and anti-patterns</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Tools for Documentation:</h4>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>• Storybook for component showcase</li>
                <li>• README files for setup and guidelines</li>
                <li>• Code comments for complex patterns</li>
                <li>• Figma/design tools for design system</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Onboarding New Team Members
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { step: '1. Share Resources', action: 'Official docs + team conventions' },
              { step: '2. Pair Programming', action: 'Code with experienced team member' },
              { step: '3. Start Small', action: 'Begin with simple components' },
              { step: '4. Code Reviews', action: 'Frequent feedback on utility usage' },
              { step: '5. Build Muscle Memory', action: 'Practice common patterns' }
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800 flex items-start gap-3">
                <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">
                  {item.step}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Tools & Automation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { tool: 'Prettier Plugin', use: 'Auto-sort Tailwind classes', setup: 'npm install -D prettier-plugin-tailwindcss' },
              { tool: 'ESLint Rules', use: 'Enforce conventions', setup: 'Custom rules for your team' },
              { tool: 'VS Code Extensions', use: 'IntelliSense, autocomplete', setup: 'Tailwind CSS IntelliSense' },
              { tool: 'Git Hooks', use: 'Format on commit', setup: 'Husky + lint-staged' }
            ].map((item, i) => (
              <div key={i} className="bg-indigo-50 dark:bg-indigo-950/20 rounded-lg p-3 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-100 text-sm">{item.tool}</h4>
                  <span className="text-xs bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded text-indigo-800 dark:text-indigo-200">
                    {item.use}
                  </span>
                </div>
                <p className="text-xs text-indigo-700 dark:text-indigo-300">{item.setup}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Users className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Team Success Tips</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Establish and document conventions early</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use tools to automate consistency (Prettier, ESLint)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Regular code reviews focused on Tailwind best practices</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Invest in onboarding and documentation</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
