'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { CircleDot, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function RingUtilities() {

  const ringHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ring Examples (Try Focusing)</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <button class="px-6 py-3 bg-blue-600 text-white rounded-lg ring-4 ring-blue-300 dark:ring-blue-500">
        ring-4
      </button>
      
      <button class="px-6 py-3 bg-green-600 text-white rounded-lg ring-4 ring-green-300 ring-offset-2 dark:ring-green-500">
        ring-4 ring-offset-2
      </button>
      
      <button class="px-6 py-3 bg-purple-600 text-white rounded-lg ring-4 ring-purple-300 ring-offset-4 ring-offset-gray-100 dark:ring-purple-500 dark:ring-offset-slate-900">
        ring-offset-4
      </button>
      
      <button class="px-6 py-3 bg-pink-600 text-white rounded-lg ring-8 ring-pink-300 dark:ring-pink-500">
        ring-8 (thicker)
      </button>
      
      <button class="px-6 py-3 bg-indigo-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-500 transition">
        Focus Ring (Tab to focus)
      </button>
      
      <button class="px-6 py-3 bg-amber-600 text-white rounded-lg ring-inset ring-4 ring-amber-200 dark:ring-amber-800">
        ring-inset
      </button>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={CircleDot}
        category="Tailwind CSS · Utilities"
        title="Ring Utilities"
        description="Focus rings and outline effects"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <CircleDot className="w-8 h-8 text-white" />
            </div>
            Ring Utilities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Box Shadow Rings</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Create focus rings and outlines using box-shadow
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={ringHTML}
            title="Ring Examples"
            description="Various ring configurations"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CircleDot className="w-6 h-6 text-white" />
            </div>
            Ring Width
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {['0', '1', '2', '4', '8'].map((width) => (
              <div key={width} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                <code className="text-sm text-blue-900 dark:text-blue-100 font-mono font-bold block mb-2">
                  ring-{width}
                </code>
                <div className={`mx-auto w-12 h-12 bg-blue-500 rounded ring-${width} ring-blue-300`}></div>
              </div>
            ))}
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
              <code className="text-sm text-blue-900 dark:text-blue-100 font-mono font-bold block mb-2">
                ring
              </code>
              <div className="mx-auto w-12 h-12 bg-blue-500 rounded ring ring-blue-300"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Ring Utilities Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'ring-{width}', desc: 'Ring width (0, 1, 2, 4, 8)', example: 'ring-4' },
              { util: 'ring-{color}', desc: 'Ring color', example: 'ring-blue-500' },
              { util: 'ring-offset-{width}', desc: 'Space between element and ring', example: 'ring-offset-2' },
              { util: 'ring-offset-{color}', desc: 'Ring offset color', example: 'ring-offset-white' },
              { util: 'ring-inset', desc: 'Ring inside element border', example: 'ring-inset' },
              { util: 'focus:ring-{width}', desc: 'Ring on focus', example: 'focus:ring-4' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
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
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Focus Ring Pattern
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Recommended pattern for accessible focus states:
          </p>
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
        </CardContent>
      </Card>

      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <CircleDot className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Ring Utility Tips</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for focus states: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">focus:ring-4</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">ring-offset-*</code> to add space around ring</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Rings use box-shadow, so they don't affect layout</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Better than border for focus states (doesn't shift layout)</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
