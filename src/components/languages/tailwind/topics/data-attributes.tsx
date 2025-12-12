'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Database, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DataAttributes() {

  const dataHTML = `<div class="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-950 dark:to-blue-950 p-8">
  <div class="max-w-3xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Attribute Styling</h3>
      
      <div class="space-y-3">
        <div data-state="active" class="p-4 rounded-lg border-2 data-[state=active]:bg-green-50 data-[state=active]:border-green-500 data-[state=inactive]:bg-gray-50 data-[state=inactive]:opacity-50 dark:data-[state=active]:bg-green-950/20 dark:data-[state=active]:border-green-400">
          <p class="font-bold text-gray-900 dark:text-white">Active State</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">data-state="active"</p>
        </div>
        
        <div data-state="inactive" class="p-4 rounded-lg border-2 data-[state=active]:bg-green-50 data-[state=active]:border-green-500 data-[state=inactive]:bg-gray-50 data-[state=inactive]:opacity-50 dark:data-[state=inactive]:bg-gray-900">
          <p class="font-bold text-gray-900 dark:text-white">Inactive State</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">data-state="inactive"</p>
        </div>
        
        <div data-size="large" class="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 data-[size=small]:p-2 data-[size=large]:p-6 data-[size=large]:text-lg">
          <p class="font-bold text-blue-900 dark:text-blue-100">Large Size</p>
          <p class="text-sm text-blue-700 dark:text-blue-300">data-size="large"</p>
        </div>
        
        <button data-loading="true" class="px-6 py-3 bg-purple-600 text-white rounded-lg data-[loading=true]:opacity-50 data-[loading=true]:cursor-not-allowed">
          <span class="data-[loading=true]:hidden">Submit</span>
          <span class="hidden data-[loading=true]:inline">Loading...</span>
        </button>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Database}
        category="Tailwind CSS · Variants & Modifiers"
        title="Data Attribute Variants"
        description="Styling based on data attributes (Tailwind 3.3+)"
        colorTheme="sky"
      />

      <Card className="border-2 border-sky-200 dark:border-sky-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
              <Database className="w-8 h-8 text-white" />
            </div>
            Data Attribute Variants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/20">
            <Lightbulb className="w-5 h-5 text-sky-600" />
            <AlertTitle className="text-sky-900 dark:text-sky-100">Dynamic Styling (Tailwind 3.3+)</AlertTitle>
            <AlertDescription className="text-sky-800 dark:text-sky-200">
              Style elements based on custom data attributes
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={dataHTML}
            title="Data Attribute Examples"
            description="Conditional styling with data attributes"
            colorTheme="sky"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
            Syntax
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Basic Syntax:</h4>
            <code className="text-sm bg-blue-100 dark:bg-blue-900 px-3 py-2 rounded text-blue-900 dark:text-blue-100 block">
              data-[attribute=value]:utility-class
            </code>
          </div>

          <div className="space-y-3">
            {[
              { pattern: 'data-[state=active]:bg-green-500', desc: 'When data-state="active"' },
              { pattern: 'data-[size=large]:p-8', desc: 'When data-size="large"' },
              { pattern: 'data-[loading=true]:opacity-50', desc: 'When data-loading="true"' },
              { pattern: 'data-[open]:block', desc: 'When data-open attribute exists' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <code className="text-sm text-blue-900 dark:text-blue-100 font-mono block mb-2">{item.pattern}</code>
                <p className="text-xs text-blue-700 dark:text-blue-300">{item.desc}</p>
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
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                use: 'Component State',
                example: 'data-[state=open]:rotate-180',
                desc: 'Accordion, dropdown states'
              },
              {
                use: 'Loading States',
                example: 'data-[loading=true]:animate-pulse',
                desc: 'Show loading indicators'
              },
              {
                use: 'Selected Items',
                example: 'data-[selected=true]:bg-blue-500',
                desc: 'Highlight selections'
              },
              {
                use: 'Size Variants',
                example: 'data-[size=sm]:text-sm',
                desc: 'Component sizing'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.use}</h4>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200 block mb-2">
                  {item.example}
                </code>
                <p className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</p>
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
            Example with JavaScript
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- HTML -->
<button 
  data-state="idle"
  class="
    px-4 py-2 rounded 
    data-[state=idle]:bg-blue-500
    data-[state=loading]:bg-gray-400
    data-[state=success]:bg-green-500
  "
>
  Click me
</button>

// JavaScript
const button = document.querySelector('button');
button.dataset.state = 'loading'; // Changes styling
setTimeout(() => {
  button.dataset.state = 'success';
}, 1000);`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-sky-200 dark:border-sky-800 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20">
        <Database className="w-5 h-5 text-sky-600" />
        <AlertTitle className="text-2xl text-sky-900 dark:text-sky-100">Data Attribute Tips</AlertTitle>
        <AlertDescription className="text-sky-800 dark:text-sky-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Syntax: <code className="bg-sky-200 dark:bg-sky-900 px-2 py-1 rounded">data-[attr=value]:class</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Check for presence: <code className="bg-sky-200 dark:bg-sky-900 px-2 py-1 rounded">data-[open]:block</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for component libraries and state management</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works great with frameworks like Radix UI, Headless UI</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
