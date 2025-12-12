'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function HasVariant() {

  const hasHTML = `<div class="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950 p-8">
  <div class="max-w-3xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">:has() Selector Examples</h3>
      
      <div class="space-y-4">
        <div class="p-4 rounded-lg border-2 border-gray-300 has-[:checked]:border-green-500 has-[:checked]:bg-green-50 dark:has-[:checked]:bg-green-950/20 dark:border-gray-700">
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" class="w-5 h-5" />
            <span class="text-gray-900 dark:text-white">Click to see parent style change</span>
          </label>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Parent div: has-[:checked]:border-green-500</p>
        </div>
        
        <form class="space-y-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 has-[:invalid]:bg-red-50 dark:has-[:invalid]:bg-red-950/20">
          <label class="block">
            <span class="text-sm font-bold text-gray-700 dark:text-gray-300">Email (required)</span>
            <input 
              type="email" 
              required 
              class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-slate-900 dark:text-white"
              placeholder="Enter email"
            />
          </label>
          <p class="text-xs text-gray-600 dark:text-gray-400">Form: has-[:invalid]:bg-red-50</p>
        </form>
        
        <div class="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 has-[img]:grid has-[img]:grid-cols-2 has-[img]:gap-4">
          <div>
            <h4 class="font-bold text-gray-900 dark:text-white">With Image</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Parent becomes grid when img exists</p>
          </div>
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=200&h=150&fit=crop" class="rounded-lg" alt="Example" />
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Target}
        category="Tailwind CSS · Variants & Modifiers"
        title="Has Variant"
        description=":has() pseudo-class for parent-based styling (Tailwind 3.4+)"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            :has() Selector
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Parent Selector (Tailwind 3.4+)</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Style parent elements based on their children's state
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={hasHTML}
            title=":has() Examples"
            description="Parent styling based on children"
            colorTheme="emerald"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            Syntax & Examples
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                pattern: 'has-[:checked]',
                desc: 'Parent when child is checked',
                example: 'has-[:checked]:bg-blue-500'
              },
              {
                pattern: 'has-[:focus]',
                desc: 'Parent when child has focus',
                example: 'has-[:focus]:ring-2'
              },
              {
                pattern: 'has-[:invalid]',
                desc: 'Parent when child is invalid',
                example: 'has-[:invalid]:border-red-500'
              },
              {
                pattern: 'has-[img]',
                desc: 'Parent when contains image',
                example: 'has-[img]:grid'
              },
              {
                pattern: 'has-[>_button]',
                desc: 'Parent with direct button child',
                example: 'has-[>_button]:flex'
              }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                <code className="font-mono text-sm text-teal-900 dark:text-teal-100 font-bold block mb-2">{item.pattern}</code>
                <p className="text-xs text-teal-700 dark:text-teal-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded text-teal-800 dark:text-teal-200">
                  {item.example}
                </code>
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
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                use: 'Form Validation',
                code: 'has-[:invalid]:border-red-500',
                desc: 'Style form when input is invalid'
              },
              {
                use: 'Checkbox Cards',
                code: 'has-[:checked]:bg-blue-50',
                desc: 'Highlight card when checkbox checked'
              },
              {
                use: 'Focus Within',
                code: 'has-[:focus]:ring-2',
                desc: 'Show ring when child focused'
              },
              {
                use: 'Conditional Layout',
                code: 'has-[img]:grid',
                desc: 'Change layout when image exists'
              }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.use}</h4>
                <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-800 dark:text-green-200 block mb-2">
                  {item.code}
                </code>
                <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Real Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Checkbox Card -->
<label class="
  block p-6 rounded-lg border-2
  cursor-pointer
  has-[:checked]:border-blue-500
  has-[:checked]:bg-blue-50
  has-[:checked]:ring-2
  has-[:checked]:ring-blue-200
">
  <input type="checkbox" class="hidden" />
  <h3 class="font-bold">Premium Plan</h3>
  <p class="text-sm">$29/month</p>
</label>`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <Target className="w-5 h-5 text-emerald-600" />
        <AlertTitle className="text-2xl text-emerald-900 dark:text-emerald-100">:has() Variant Tips</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Style parent based on child state: <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">has-[:checked]</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for checkbox/radio card selections</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great for form validation feedback</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Good browser support in modern browsers</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
