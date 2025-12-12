'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileCode, Lightbulb, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function NamingConventions() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileCode}
        category="Tailwind CSS · Best Practices"
        title="Naming Conventions"
        description="Code organization and naming strategies"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <FileCode className="w-8 h-8 text-white" />
            </div>
            Naming Conventions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Consistency is Key</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Follow consistent patterns for better maintainability
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <FileCode className="w-6 h-6 text-white" />
            </div>
            Component File Organization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-bold text-green-900 dark:text-green-100">Good Structure</h4>
              </div>
              <pre className="text-xs bg-green-100 dark:bg-green-900 p-3 rounded text-green-900 dark:text-green-100 overflow-x-auto">
{`src/
  components/
    ui/
      Button.tsx
      Card.tsx
      Input.tsx
    layouts/
      Header.tsx
      Footer.tsx
    features/
      UserProfile.tsx
      ProductCard.tsx`}
              </pre>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-bold text-red-900 dark:text-red-100">Avoid</h4>
              </div>
              <pre className="text-xs bg-red-100 dark:bg-red-900 p-3 rounded text-red-900 dark:text-red-100 overflow-x-auto">
{`src/
  button-component.tsx
  btn.tsx
  MyButton.tsx
  // Inconsistent naming!`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            CSS Class Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Order Classes Logically:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Layout → Spacing → Sizing → Typography → Colors → Effects
<div class="
  flex items-center justify-between
  p-4 gap-2
  w-full h-12
  text-sm font-bold
  bg-blue-500 text-white
  hover:bg-blue-600 transition
">
  Button
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Group Related Classes:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<button class="
  px-4 py-2 
  bg-blue-500 hover:bg-blue-600 
  text-white 
  rounded-lg 
  shadow-md hover:shadow-lg 
  transition-all duration-200
">
  Click me
</button>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Component Naming
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { pattern: 'PascalCase for Components', example: 'UserCard.tsx, NavigationMenu.tsx' },
              { pattern: 'kebab-case for CSS files', example: 'styles.css, custom-utilities.css' },
              { pattern: 'Descriptive names', example: 'SubmitButton not Btn, UserProfile not UP' },
              { pattern: 'Consistent prefixes', example: 'Modal*, Dialog*, Card*' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.pattern}</h4>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-800 dark:text-green-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <FileCode className="w-6 h-6 text-white" />
            </div>
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { tip: 'Use Prettier Plugin', desc: 'Auto-sort Tailwind classes' },
              { tip: 'Extract Components', desc: 'For repeated class patterns' },
              { tip: 'Group by Feature', desc: 'Not by component type' },
              { tip: 'Consistent Variants', desc: 'primary, secondary, danger, etc.' },
              { tip: 'Document Patterns', desc: 'Keep a style guide' }
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800 flex items-start gap-2">
                <span className="text-lg">✓</span>
                <div>
                  <h4 className="font-bold text-yellow-900 dark:text-yellow-100 text-sm mb-1">{item.tip}</h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <FileCode className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Naming Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Be consistent with component naming (PascalCase)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Order classes logically (layout → spacing → colors)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use Prettier plugin to auto-sort classes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Extract repeated patterns into components</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
