'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Wrench, CheckCircle, Lightbulb, ArrowRight, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function CustomUtilities() {

  const applyHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <button class="btn-primary">
    Custom Button
  </button>
  
  <style>
    .btn-primary {
      @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition;
    }
  </style>
</div>`;

  const cardHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="card">
    <h3>Custom Card</h3>
    <p>Using @apply directive</p>
  </div>
  
  <style>
    .card {
      @apply bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6;
    }
    .card h3 {
      @apply text-xl font-bold text-gray-900 dark:text-white mb-2;
    }
    .card p {
      @apply text-gray-600 dark:text-gray-400;
    }
  </style>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Wrench}
        category="Tailwind CSS · Advanced Features"
        title="Custom Utilities"
        description="Create your own utility classes with @apply"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            @apply Directive
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use @apply</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">@apply</code> sparingly for truly repeated patterns. Prefer component extraction!
            </AlertDescription>
          </Alert>

          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-cyan-400"><code>{`/* In your CSS file */
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition;
}

/* Then use in HTML */
<button class="btn-primary">Click Me</button>`}</code></pre>
          </div>

          <FrontendCodePreview
            html={applyHTML}
            title="Custom Button Class"
            description="Created with @apply"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            Custom Card Component
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardHTML}
            title="Reusable Card Class"
            description="Multiple utilities combined"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { do: '✅ Use @apply for truly repeated patterns', dont: '❌ Don\'t @apply everything' },
              { do: '✅ Prefer React/Vue components', dont: '❌ Don\'t create classes for one-off styles' },
              { do: '✅ Keep utility-first approach', dont: '❌ Don\'t go back to semantic CSS' }
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-300 dark:border-green-700">
                  <p className="text-sm text-green-800 dark:text-green-200">{item.do}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-300 dark:border-red-700">
                  <p className="text-sm text-red-800 dark:text-red-200">{item.dont}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Wrench className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Custom Utilities Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">@apply</code> only when you can't use components</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Keep the utility-first approach - don't create semantic classes for everything</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
