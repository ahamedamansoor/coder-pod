'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AriaVariants() {

  const ariaHTML = `<div class="bg-gradient-to-r from-purple-100 to-fuchsia-100 dark:from-purple-950 dark:to-fuchsia-950 p-8">
  <div class="max-w-3xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">ARIA Attribute Styling</h3>
      
      <div class="space-y-4">
        <button 
          aria-expanded="true"
          class="w-full px-4 py-3 bg-blue-500 text-white rounded-lg text-left flex items-center justify-between aria-expanded:bg-blue-600 aria-[expanded=false]:bg-gray-400"
        >
          <span>Expanded Button</span>
          <svg class="w-5 h-5 transform aria-expanded:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <button 
          aria-selected="true"
          class="px-6 py-3 rounded-lg border-2 aria-selected:border-green-500 aria-selected:bg-green-50 aria-[selected=false]:border-gray-300 aria-[selected=false]:bg-white dark:aria-selected:bg-green-950/20"
        >
          Selected Tab
        </button>
        
        <div 
          aria-disabled="true"
          class="px-6 py-3 bg-purple-500 text-white rounded-lg aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
        >
          Disabled Element
        </div>
        
        <div 
          aria-current="page"
          class="px-4 py-2 rounded-lg aria-[current=page]:bg-fuchsia-500 aria-[current=page]:text-white aria-[current=false]:bg-gray-100 dark:aria-[current=false]:bg-gray-800"
        >
          Current Page Link
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Users}
        category="Tailwind CSS · Variants & Modifiers"
        title="ARIA Variants"
        description="Styling based on ARIA attributes"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            ARIA Variants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Accessibility + Styling</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Style elements based on their ARIA attributes for accessible UIs
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={ariaHTML}
            title="ARIA Variant Examples"
            description="Styling with ARIA attributes"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-fuchsia-200 dark:border-fuchsia-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-fuchsia-500 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            Common ARIA Variants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                variant: 'aria-checked', 
                desc: 'When aria-checked is true',
                example: 'aria-checked:bg-blue-500'
              },
              { 
                variant: 'aria-disabled', 
                desc: 'When aria-disabled is true',
                example: 'aria-disabled:opacity-50'
              },
              { 
                variant: 'aria-expanded', 
                desc: 'When aria-expanded is true',
                example: 'aria-expanded:rotate-180'
              },
              { 
                variant: 'aria-hidden', 
                desc: 'When aria-hidden is true',
                example: 'aria-hidden:invisible'
              },
              { 
                variant: 'aria-pressed', 
                desc: 'When aria-pressed is true',
                example: 'aria-pressed:bg-blue-600'
              },
              { 
                variant: 'aria-readonly', 
                desc: 'When aria-readonly is true',
                example: 'aria-readonly:bg-gray-100'
              },
              { 
                variant: 'aria-required', 
                desc: 'When aria-required is true',
                example: 'aria-required:border-red-500'
              },
              { 
                variant: 'aria-selected', 
                desc: 'When aria-selected is true',
                example: 'aria-selected:bg-blue-50'
              }
            ].map((item, i) => (
              <div key={i} className="bg-fuchsia-50 dark:bg-fuchsia-950/20 rounded-lg p-4 border border-fuchsia-200 dark:border-fuchsia-800">
                <code className="font-mono text-sm text-fuchsia-900 dark:text-fuchsia-100 font-bold block mb-2">{item.variant}</code>
                <p className="text-xs text-fuchsia-700 dark:text-fuchsia-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-fuchsia-100 dark:bg-fuchsia-900 px-2 py-1 rounded text-fuchsia-800 dark:text-fuchsia-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Specific Value Matching
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Match specific ARIA attribute values:</p>
          <div className="space-y-3">
            {[
              { pattern: 'aria-[current=page]', desc: 'Current page indicator' },
              { pattern: 'aria-[expanded=false]', desc: 'Collapsed state' },
              { pattern: 'aria-[selected=true]', desc: 'Selected item' },
              { pattern: 'aria-[invalid=true]', desc: 'Invalid input' }
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-3 border border-pink-200 dark:border-pink-800">
                <code className="text-sm text-pink-900 dark:text-pink-100 font-mono font-bold block mb-1">{item.pattern}</code>
                <p className="text-xs text-pink-700 dark:text-pink-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-violet-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Real-World Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Accordion:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<button 
  aria-expanded="false"
  class="
    flex items-center justify-between
    aria-expanded:bg-blue-50
  "
>
  <span>Section Title</span>
  <svg class="aria-expanded:rotate-180 transition">
    ▼
  </svg>
</button>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Tabs:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<button 
  aria-selected="true"
  class="
    px-4 py-2 border-b-2
    aria-selected:border-blue-500
    aria-selected:text-blue-600
  "
>
  Tab 1
</button>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20">
        <Users className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">ARIA Variant Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use for accessible interactive components (tabs, accordions, etc.)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Boolean ARIA: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">aria-expanded</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Specific values: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">aria-[current=page]</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combines accessibility with visual feedback</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
