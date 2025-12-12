'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Contrast, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ForcedColors() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Contrast}
        category="Tailwind CSS · Utilities"
        title="Forced Colors"
        description="Windows High Contrast Mode support"
        colorTheme="stone"
      />

      <Card className="border-2 border-stone-200 dark:border-stone-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-stone-500 to-gray-600 rounded-xl">
              <Contrast className="w-8 h-8 text-white" />
            </div>
            High Contrast Mode
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/20">
            <Lightbulb className="w-5 h-5 text-stone-600" />
            <AlertTitle className="text-stone-900 dark:text-stone-100">Windows Accessibility</AlertTitle>
            <AlertDescription className="text-stone-800 dark:text-stone-200">
              Windows High Contrast Mode overrides colors for better visibility
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is Forced Colors Mode?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Windows High Contrast Mode forces specific system colors to improve readability. 
              Users can enable this for better visibility and reduced eye strain.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gray-500 rounded-lg">
              <Contrast className="w-6 h-6 text-white" />
            </div>
            Forced Color Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                util: 'forced-color-adjust-auto', 
                desc: 'Allow browser to adjust colors (default)',
                when: 'Most elements - let system override'
              },
              { 
                util: 'forced-color-adjust-none', 
                desc: 'Preserve original colors',
                when: 'Icons, logos, images that must maintain colors'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950/20 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                <code className="font-mono text-sm text-gray-900 dark:text-gray-100 font-bold block mb-2">{item.util}</code>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{item.desc}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-bold">When to use:</span> {item.when}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Usage Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Logo that should keep its colors -->
<img 
  src="logo.svg" 
  alt="Company Logo"
  class="forced-color-adjust-none"
/>

<!-- Button with system colors in high contrast -->
<button class="
  px-4 py-2 
  bg-blue-600 text-white
  forced-color-adjust-auto
">
  Submit
</button>`}
          </pre>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { 
                practice: 'Default Behavior', 
                desc: 'Leave most elements with auto adjustment',
                icon: '✅'
              },
              { 
                practice: 'Preserve Brand', 
                desc: 'Use forced-color-adjust-none for logos',
                icon: '🎨'
              },
              { 
                practice: 'Test Mode', 
                desc: 'Enable High Contrast Mode in Windows to test',
                icon: '🧪'
              },
              { 
                practice: 'Icons & Graphics', 
                desc: 'Functional icons can adjust, decorative should not',
                icon: '🔍'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-purple-900 dark:text-purple-100 text-sm mb-1">{item.practice}</h4>
                    <p className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-amber-500 rounded-lg">
              <Contrast className="w-6 h-6 text-white" />
            </div>
            Testing High Contrast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">How to Enable (Windows 11):</h4>
            <ol className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>1. Press <kbd className="px-2 py-1 bg-amber-200 dark:bg-amber-900 rounded">Win + U</kbd> to open Settings</li>
              <li>2. Go to <strong>Accessibility</strong></li>
              <li>3. Select <strong>Contrast themes</strong></li>
              <li>4. Choose a high contrast theme</li>
              <li>5. Test your application</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-stone-200 dark:border-stone-800 bg-gradient-to-r from-stone-50 to-gray-50 dark:from-stone-950/20 dark:to-gray-950/20">
        <Contrast className="w-5 h-5 text-stone-600" />
        <AlertTitle className="text-2xl text-stone-900 dark:text-stone-100">Forced Colors Tips</AlertTitle>
        <AlertDescription className="text-stone-800 dark:text-stone-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Most elements should use <code className="bg-stone-200 dark:bg-stone-900 px-2 py-1 rounded">forced-color-adjust-auto</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Only preserve colors for brand-critical elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test with actual Windows High Contrast Mode</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Ensure sufficient contrast in both normal and forced color modes</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
