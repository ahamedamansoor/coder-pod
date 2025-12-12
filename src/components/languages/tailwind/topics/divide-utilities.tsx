'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Divide, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DivideUtilities() {

  const divideHTML = `<div class="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-950 dark:to-gray-950 p-8">
  <div class="max-w-2xl mx-auto space-y-8">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white p-4">Vertical Dividers</h3>
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition">List Item 1</div>
        <div class="p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition">List Item 2</div>
        <div class="p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition">List Item 3</div>
        <div class="p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition">List Item 4</div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Horizontal Dividers</h3>
      <div class="flex divide-x divide-gray-300 dark:divide-gray-600">
        <div class="px-6 py-3">Column 1</div>
        <div class="px-6 py-3">Column 2</div>
        <div class="px-6 py-3">Column 3</div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white p-4">Thick Dividers</h3>
      <div class="divide-y-4 divide-blue-500 dark:divide-blue-400">
        <div class="p-4">Section 1</div>
        <div class="p-4">Section 2</div>
        <div class="p-4">Section 3</div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Divide}
        category="Tailwind CSS · Utilities"
        title="Divide Utilities"
        description="Adding borders between elements automatically"
        colorTheme="slate"
      />

      <Card className="border-2 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl">
              <Divide className="w-8 h-8 text-white" />
            </div>
            Divide Between Elements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/20">
            <Lightbulb className="w-5 h-5 text-slate-600" />
            <AlertTitle className="text-slate-900 dark:text-slate-100">Automatic Borders</AlertTitle>
            <AlertDescription className="text-slate-800 dark:text-slate-200">
              Add borders between child elements without adding classes to each child
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={divideHTML}
            title="Divide Utilities"
            description="Borders between elements"
            colorTheme="slate"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gray-500 rounded-lg">
              <Divide className="w-6 h-6 text-white" />
            </div>
            Divide Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'divide-y', desc: 'Horizontal borders between children', example: 'divide-y' },
              { util: 'divide-x', desc: 'Vertical borders between children', example: 'divide-x' },
              { util: 'divide-y-{width}', desc: 'Border width (0, 2, 4, 8)', example: 'divide-y-2' },
              { util: 'divide-{color}', desc: 'Border color', example: 'divide-gray-300' },
              { util: 'divide-solid', desc: 'Solid border style', example: 'divide-solid' },
              { util: 'divide-dashed', desc: 'Dashed border style', example: 'divide-dashed' },
              { util: 'divide-dotted', desc: 'Dotted border style', example: 'divide-dotted' },
              { util: 'divide-reverse', desc: 'Reverse border direction', example: 'divide-y-reverse' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950/20 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                <code className="font-mono text-sm text-gray-900 dark:text-gray-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                  {item.example}
                </code>
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
            Usage Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">List with Dividers:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="divide-y divide-gray-200">
  <div class="py-3">Item 1</div>
  <div class="py-3">Item 2</div>
  <div class="py-3">Item 3</div>
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Columns with Dividers:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="flex divide-x divide-gray-300">
  <div class="px-4">Column 1</div>
  <div class="px-4">Column 2</div>
  <div class="px-4">Column 3</div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20">
        <Divide className="w-5 h-5 text-slate-600" />
        <AlertTitle className="text-2xl text-slate-900 dark:text-slate-100">Divide Utility Tips</AlertTitle>
        <AlertDescription className="text-slate-800 dark:text-slate-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Apply to parent container, affects all direct children</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use with <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">dark:</code> for dark mode: <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">divide-gray-200 dark:divide-gray-700</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with spacing utilities for proper layout</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>No border on first or last child - only between elements</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
