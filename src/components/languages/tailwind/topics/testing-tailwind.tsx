'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TestTube, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TestingTailwind() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={TestTube}
        category="Tailwind CSS · Tooling"
        title="Testing Tailwind"
        description="Testing components with Tailwind classes"
        colorTheme="green"
      />

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <TestTube className="w-8 h-8 text-white" />
            </div>
            Testing Tailwind
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Test Behavior, Not Classes</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Focus on functionality and appearance, not specific class names
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <TestTube className="w-6 h-6 text-white" />
            </div>
            Testing Approaches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                type: 'Visual Regression Testing',
                desc: 'Take screenshots and compare',
                tools: ['Percy', 'Chromatic', 'BackstopJS'],
                best: 'Catch visual changes'
              },
              {
                type: 'Snapshot Testing',
                desc: 'Save HTML snapshots',
                tools: ['Jest snapshots', 'Vitest'],
                best: 'Track structural changes'
              },
              {
                type: 'Accessibility Testing',
                desc: 'Test a11y with classes',
                tools: ['jest-axe', 'Testing Library'],
                best: 'Ensure accessibility'
              },
              {
                type: 'Functional Testing',
                desc: 'Test behavior and interactions',
                tools: ['Cypress', 'Playwright', 'Testing Library'],
                best: 'Verify functionality'
              }
            ].map((approach, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{approach.type}</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">{approach.desc}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {approach.tools.map((tool, j) => (
                    <span key={j} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">Best for: {approach.best}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Example Tests
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">React Testing Library:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { render, screen } from '@testing-library/react'
import Button from './Button'

test('button is visible and clickable', () => {
  render(<Button>Click me</Button>)
  
  const button = screen.getByRole('button')
  expect(button).toBeVisible()
  expect(button).toBeEnabled()
})`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Snapshot Test:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`test('button matches snapshot', () => {
  const { container } = render(<Button>Click me</Button>)
  expect(container.firstChild).toMatchSnapshot()
})`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { practice: 'Test Behavior, Not Classes', reason: 'Classes may change, behavior shouldn\'t' },
              { practice: 'Use Visual Regression', reason: 'Catch unintended style changes' },
              { practice: 'Test Accessibility', reason: 'Ensure components are accessible' },
              { practice: 'Avoid Testing Specific Classes', reason: 'Implementation detail, not behavior' },
              { practice: 'Test Responsive Behavior', reason: 'Verify breakpoint changes work' }
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 text-sm mb-1">{item.practice}</h4>
                <p className="text-xs text-yellow-700 dark:text-yellow-300">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-red-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            What NOT to Test
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">Avoid Testing:</h4>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>✗ Specific class names (implementation detail)</li>
              <li>✗ Exact CSS values generated by Tailwind</li>
              <li>✗ Class ordering (use Prettier plugin instead)</li>
              <li>✗ Whether element has "bg-blue-500" specifically</li>
            </ul>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded">
              <h5 className="font-bold text-green-900 dark:text-green-100 text-sm mb-2">Instead Test:</h5>
              <ul className="space-y-1 text-xs text-green-800 dark:text-green-200">
                <li>✓ Component renders correctly</li>
                <li>✓ Interactions work as expected</li>
                <li>✓ Accessibility is maintained</li>
                <li>✓ Visual appearance hasn't changed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <TestTube className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">Testing Tips</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Focus on behavior and appearance, not class names</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use visual regression testing for style changes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always test accessibility alongside functionality</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Snapshot tests can help track unintended changes</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
