'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Space, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SpaceUtilities() {

  const spaceHTML = `<div class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 p-8">
  <div class="max-w-2xl mx-auto space-y-8">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Vertical Space (space-y-4)</h3>
      <div class="space-y-4">
        <div class="bg-blue-500 text-white p-4 rounded-lg">Box 1</div>
        <div class="bg-blue-500 text-white p-4 rounded-lg">Box 2</div>
        <div class="bg-blue-500 text-white p-4 rounded-lg">Box 3</div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Horizontal Space (space-x-6)</h3>
      <div class="flex space-x-6">
        <div class="bg-indigo-500 text-white p-4 rounded-lg">Box 1</div>
        <div class="bg-indigo-500 text-white p-4 rounded-lg">Box 2</div>
        <div class="bg-indigo-500 text-white p-4 rounded-lg">Box 3</div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Large Space (space-y-8)</h3>
      <div class="space-y-8">
        <div class="bg-purple-500 text-white p-4 rounded-lg">Section 1</div>
        <div class="bg-purple-500 text-white p-4 rounded-lg">Section 2</div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Space}
        category="Tailwind CSS · Utilities"
        title="Space Utilities"
        description="Spacing between child elements"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Space className="w-8 h-8 text-white" />
            </div>
            Space Between Elements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Automatic Spacing</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Add consistent spacing between children without individual margin classes
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={spaceHTML}
            title="Space Utilities"
            description="Automatic spacing between elements"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Space className="w-6 h-6 text-white" />
            </div>
            Space Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'space-y-{size}', desc: 'Vertical spacing between children', example: 'space-y-4' },
              { util: 'space-x-{size}', desc: 'Horizontal spacing between children', example: 'space-x-6' },
              { util: 'space-y-reverse', desc: 'Reverse vertical spacing direction', example: 'space-y-reverse' },
              { util: 'space-x-reverse', desc: 'Reverse horizontal spacing direction', example: 'space-x-reverse' }
            ].map((item, i) => (
              <div key={i} className="bg-indigo-50 dark:bg-indigo-950/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <code className="font-mono text-sm text-indigo-900 dark:text-indigo-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-indigo-700 dark:text-indigo-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded text-indigo-800 dark:text-indigo-200">
                  {item.example}
                </code>
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
            Available Sizes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {['0', '0.5', '1', '1.5', '2', '2.5', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'].map((size) => (
              <div key={size} className="bg-purple-50 dark:bg-purple-950/20 rounded p-2 border border-purple-200 dark:border-purple-800 text-center">
                <code className="text-xs text-purple-900 dark:text-purple-100 font-mono font-bold">
                  {size}
                </code>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Use as: <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">space-y-4</code> or <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">space-x-6</code>
          </p>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Usage Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Vertical Stack:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Horizontal Row:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="flex space-x-6">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <Space className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Space Utility Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Apply to parent container, automatically spaces all children</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">space-x-*</code> with flex containers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>No space before first or after last child - only between</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Cleaner than adding margin to each child element</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
