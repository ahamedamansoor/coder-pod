'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Bug, Lightbulb, ArrowRight, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Debugging() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Bug}
        category="Tailwind CSS · Best Practices"
        title="Debugging Tailwind"
        description="Troubleshooting common issues"
        colorTheme="red"
      />

      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl">
              <Bug className="w-8 h-8 text-white" />
            </div>
            Debugging Tailwind
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
            <Lightbulb className="w-5 h-5 text-red-600" />
            <AlertTitle className="text-red-900 dark:text-red-100">Browser DevTools Are Your Friend</AlertTitle>
            <AlertDescription className="text-red-800 dark:text-red-200">
              Most issues can be solved by inspecting elements
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Bug className="w-6 h-6 text-white" />
            </div>
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                problem: 'Classes Not Working',
                causes: ['Typo in class name', 'PurgeCSS removing classes', 'Conflicting CSS'],
                solutions: ['Check spelling', 'Add to safelist', 'Check CSS specificity']
              },
              {
                problem: 'Styles Not Updating',
                causes: ['Build not running', 'Browser cache', 'Wrong file imported'],
                solutions: ['Restart dev server', 'Hard refresh (Ctrl+Shift+R)', 'Check imports']
              },
              {
                problem: 'Huge Bundle Size',
                causes: ['PurgeCSS not configured', 'Not using JIT mode', 'Including all variants'],
                solutions: ['Configure purge paths', 'Enable JIT', 'Use variants sparingly']
              },
              {
                problem: 'Responsive Not Working',
                causes: ['Missing breakpoint prefix', 'Wrong order', 'Viewport meta tag missing'],
                solutions: ['Add md:, lg: etc.', 'Mobile-first order', 'Add meta viewport tag']
              }
            ].map((issue, i) => (
              <div key={i} className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">{issue.problem}</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-bold mb-1">Possible Causes:</p>
                    {issue.causes.map((cause, j) => (
                      <p key={j} className="text-xs text-orange-700 dark:text-orange-300">• {cause}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-green-600 dark:text-green-400 font-bold mb-1">Solutions:</p>
                    {issue.solutions.map((solution, j) => (
                      <p key={j} className="text-xs text-green-700 dark:text-green-300">✓ {solution}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Search className="w-6 h-6 text-white" />
            </div>
            Debugging with DevTools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { step: 'Inspect Element', action: 'Right-click element → Inspect', what: 'See applied Tailwind classes' },
              { step: 'Check Computed Styles', action: 'Look at Computed tab', what: 'See final CSS values' },
              { step: 'Find Overrides', action: 'Crossed-out styles = overridden', what: 'Identify conflicts' },
              { step: 'Test Classes', action: 'Add/remove classes in DevTools', what: 'Test fixes live' },
              { step: 'Check Responsive', action: 'Toggle device toolbar', what: 'Test breakpoints' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 text-sm">{item.step}</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300">{item.action}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">→ {item.what}</p>
                  </div>
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
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Quick Checks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">When Something Doesn't Work:</h4>
            <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li>1. ✓ Check for typos in class names</li>
              <li>2. ✓ Verify dev server is running</li>
              <li>3. ✓ Hard refresh browser (Ctrl+Shift+R)</li>
              <li>4. ✓ Check if class exists in Tailwind docs</li>
              <li>5. ✓ Inspect element in DevTools</li>
              <li>6. ✓ Look for conflicting CSS</li>
              <li>7. ✓ Check tailwind.config.js settings</li>
              <li>8. ✓ Verify file is in purge content paths</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Useful Console Commands
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
{`// Check if element has Tailwind class
$0.classList.contains('bg-blue-500')

// Get all classes on element
$0.className

// Check computed styles
getComputedStyle($0).backgroundColor`}
            </pre>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              💡 Tip: $0 refers to currently selected element in DevTools
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
        <Bug className="w-5 h-5 text-red-600" />
        <AlertTitle className="text-2xl text-red-900 dark:text-red-100">Debugging Tips</AlertTitle>
        <AlertDescription className="text-red-800 dark:text-red-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always inspect element first - DevTools show applied classes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Check Tailwind docs to verify class exists</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use Tailwind CSS IntelliSense extension for autocomplete</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Hard refresh browser to see CSS changes</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
