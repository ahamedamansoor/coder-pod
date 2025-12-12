'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Accessibility, Lightbulb, ArrowRight, Eye } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AccessibilityUtilities() {

  const srOnlyHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
    <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      <span class="sr-only">Close navigation menu</span>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    <p class="mt-4 text-gray-600 dark:text-gray-400">The button above has hidden text for screen readers but shows an icon visually.</p>
  </div>
</div>`;

  const focusHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-4">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Focus Visible Examples</h3>
    <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition">
      Focus Ring Button
    </button>
    <input type="text" placeholder="Try focusing me" class="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-900 dark:text-white"/>
    <a href="#" class="inline-block text-green-600 dark:text-green-400 underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded">Accessible Link</a>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Accessibility}
        category="Tailwind CSS · Best Practices"
        title="Accessibility Utilities"
        description="Making your website accessible to everyone"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Accessibility className="w-8 h-8 text-white" />
            </div>
            Screen Reader Only
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">sr-only Class</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Hide content visually but keep it accessible for screen readers
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={srOnlyHTML}
            title="Screen Reader Text"
            description="Hidden text for assistive technologies"
            colorTheme="blue"
            styleLanguage="tailwind"
          />

          <div>
            <h3 className="text-lg font-bold mb-3">Usage:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<button>
  <span class="sr-only">Close menu</span>
  <svg><!-- Icon --></svg>
</button>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            Focus States
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={focusHTML}
            title="Visible Focus Indicators"
            description="Clear focus states for keyboard navigation"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Accessibility className="w-6 h-6 text-white" />
            </div>
            Accessibility Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: 'Use semantic HTML', code: '<button> instead of <div onclick>', color: 'blue' },
              { title: 'Add focus indicators', code: 'focus:ring-4 focus:ring-blue-300', color: 'green' },
              { title: 'Screen reader text', code: 'sr-only for icon buttons', color: 'purple' },
              { title: 'Color contrast', code: 'Ensure 4.5:1 ratio for text', color: 'pink' },
              { title: 'Keyboard navigation', code: 'Test with Tab key', color: 'indigo' },
              { title: 'ARIA labels', code: 'aria-label="Description"', color: 'cyan' }
            ].map((item, i) => (
              <div key={i} className={`bg-${item.color}-50 dark:bg-${item.color}-950/20 rounded-lg p-4 border border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 bg-${item.color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-${item.color}-900 dark:text-${item.color}-100 mb-1`}>{item.title}</div>
                    <code className={`text-xs bg-${item.color}-100 dark:bg-${item.color}-900 px-2 py-1 rounded text-${item.color}-800 dark:text-${item.color}-200`}>
                      {item.code}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Accessibility className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Accessibility Best Practices</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always provide focus states: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">focus:ring-4</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">sr-only</code> for icon-only buttons</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test with keyboard navigation (Tab, Enter, Space)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use semantic HTML elements when possible</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
