'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { ChevronDown, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function OpenVariant() {

  const openHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="max-w-3xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Details Element (Click to Expand)</h3>
      
      <details class="group border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 open:border-orange-500 open:bg-orange-50 dark:open:bg-orange-950/20">
        <summary class="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
          <span>Click to expand details</span>
          <svg class="w-5 h-5 transform open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </summary>
        <div class="mt-4 text-gray-700 dark:text-gray-300">
          This content is revealed when the details element is open!
        </div>
      </details>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Multiple Details</h3>
      
      <div class="space-y-3">
        <details class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 open:border-blue-500 open:bg-blue-50 dark:open:bg-blue-950/20">
          <summary class="font-bold cursor-pointer">Section 1</summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300">Content for section 1</p>
        </details>
        
        <details class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 open:border-green-500 open:bg-green-50 dark:open:bg-green-950/20">
          <summary class="font-bold cursor-pointer">Section 2</summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300">Content for section 2</p>
        </details>
        
        <details class="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 open:border-purple-500 open:bg-purple-50 dark:open:bg-purple-950/20">
          <summary class="font-bold cursor-pointer">Section 3</summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300">Content for section 3</p>
        </details>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={ChevronDown}
        category="Tailwind CSS · Variants & Modifiers"
        title="Open Variant"
        description="Styling <details> and <dialog> with open: modifier"
        colorTheme="orange"
      />

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
              <ChevronDown className="w-8 h-8 text-white" />
            </div>
            Open Variant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Native HTML Elements</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Style {'<details>'} and {'<dialog>'} elements based on their open state
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={openHTML}
            title="Open Variant Examples"
            description="Interactive details elements"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-amber-500 rounded-lg">
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
            Open Variant Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                util: 'open:bg-blue-50', 
                desc: 'Change background when open',
                element: '<details> or <dialog>'
              },
              { 
                util: 'open:border-blue-500', 
                desc: 'Change border when open',
                element: '<details> or <dialog>'
              },
              { 
                util: 'open:rotate-180', 
                desc: 'Rotate icon when open',
                element: 'Child element (e.g., chevron)'
              },
              { 
                util: 'open:scale-105', 
                desc: 'Scale up when open',
                element: '<details> or <dialog>'
              }
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <div className="flex items-center justify-between mb-2">
                  <code className="font-mono text-sm text-amber-900 dark:text-amber-100 font-bold">{item.util}</code>
                  <span className="text-xs bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded text-amber-800 dark:text-amber-200">
                    {item.element}
                  </span>
                </div>
                <p className="text-xs text-amber-700 dark:text-amber-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Accordion with Details:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<details class="
  border-2 border-gray-300 rounded-lg p-4
  open:border-blue-500
  open:bg-blue-50
">
  <summary class="cursor-pointer font-bold">
    Section Title
  </summary>
  <div class="mt-4">
    Content goes here
  </div>
</details>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Animated Chevron:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<details class="group">
  <summary class="flex items-center justify-between">
    <span>Click me</span>
    <svg class="open:rotate-180 transition">
      ▼
    </svg>
  </summary>
  <div>Content</div>
</details>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-red-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Dialog Element
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The open: variant also works with {'<dialog>'} elements:
          </p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<dialog class="
  backdrop:bg-black/50
  open:animate-in
  open:fade-in
  open:slide-in-from-bottom-4
">
  <div class="p-6">
    <h2>Dialog Title</h2>
    <p>Dialog content</p>
  </div>
</dialog>`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
        <ChevronDown className="w-5 h-5 text-orange-600" />
        <AlertTitle className="text-2xl text-orange-900 dark:text-orange-100">Open Variant Tips</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works with native {'<details>'} and {'<dialog>'} elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for accordions without JavaScript</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with transitions: <code className="bg-orange-200 dark:bg-orange-900 px-2 py-1 rounded">open:rotate-180 transition</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>No JavaScript needed for basic show/hide functionality</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
