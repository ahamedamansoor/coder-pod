'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Focus, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FocusStates() {

  const focusHTML = `<div class="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-950 dark:to-blue-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Focus State Examples (Try Tab Key)</h3>
    
    <button class="px-6 py-3 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 transition">
      Focus Ring Button
    </button>
    
    <input 
      type="text" 
      placeholder="Focus this input"
      class="block w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition dark:bg-slate-900 dark:text-white"
    />
    
    <button class="px-6 py-3 bg-green-600 text-white rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 dark:focus-visible:ring-green-500 transition">
      Focus-Visible Button
    </button>
    
    <a href="#" class="inline-block text-blue-600 dark:text-blue-400 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">
      Accessible Link
    </a>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Focus}
        category="Tailwind CSS · Accessibility"
        title="Focus States"
        description="Keyboard navigation and focus styling"
        colorTheme="blue"
      />

      <Card className="border-2 border-sky-200 dark:border-sky-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
              <Focus className="w-8 h-8 text-white" />
            </div>
            Focus Ring Utilities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/20">
            <Lightbulb className="w-5 h-5 text-sky-600" />
            <AlertTitle className="text-sky-900 dark:text-sky-100">Keyboard Navigation</AlertTitle>
            <AlertDescription className="text-sky-800 dark:text-sky-200">
              Always provide visible focus states for keyboard users
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={focusHTML}
            title="Focus States"
            description="Use Tab key to navigate and see focus styles"
            colorTheme="teal"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Focus className="w-6 h-6 text-white" />
            </div>
            Focus Variants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                variant: 'focus:', 
                desc: 'Styles apply when element has focus',
                example: 'focus:ring-4'
              },
              { 
                variant: 'focus-within:', 
                desc: 'When element or child has focus',
                example: 'focus-within:border-blue-500'
              },
              { 
                variant: 'focus-visible:', 
                desc: 'Only for keyboard focus (not mouse)',
                example: 'focus-visible:ring-4'
              },
              { 
                variant: 'outline-none', 
                desc: 'Remove default browser outline',
                example: 'focus:outline-none'
              }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <code className="font-mono text-sm text-blue-900 dark:text-blue-100 font-bold block mb-2">{item.variant}</code>
                <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">
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
            Ring Utilities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Create beautiful focus rings with ring utilities:</p>
          <div className="space-y-3">
            {[
              { class: 'ring-2', desc: 'Ring width (1-8)' },
              { class: 'ring-blue-500', desc: 'Ring color' },
              { class: 'ring-offset-2', desc: 'Space between element and ring' },
              { class: 'ring-offset-white', desc: 'Ring offset color' },
              { class: 'ring-inset', desc: 'Ring inside border' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800 flex items-center justify-between">
                <code className="text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-900 dark:text-green-100 font-mono">
                  {item.class}
                </code>
                <span className="text-xs text-green-700 dark:text-green-300">{item.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Recommended Pattern
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Standard Focus Pattern:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<button class="
  px-4 py-2 
  bg-blue-600 text-white 
  rounded-lg
  focus:outline-none 
  focus:ring-4 
  focus:ring-blue-300
  transition
">
  Button
</button>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-sky-200 dark:border-sky-800 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20">
        <Focus className="w-5 h-5 text-sky-600" />
        <AlertTitle className="text-2xl text-sky-900 dark:text-sky-100">Focus State Best Practices</AlertTitle>
        <AlertDescription className="text-sky-800 dark:text-sky-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Never remove focus styles without providing alternatives</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-sky-200 dark:bg-sky-900 px-2 py-1 rounded">focus:outline-none focus:ring-4</code> pattern</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test with keyboard: Tab, Shift+Tab, Enter, Space</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-sky-200 dark:bg-sky-900 px-2 py-1 rounded">focus-visible:</code> to only show ring for keyboard users</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
