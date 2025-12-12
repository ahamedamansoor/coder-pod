'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Grid3x3, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function CssGridAdvanced() {

  const gridHTML = `<div class="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 p-8">
  <div class="max-w-5xl mx-auto space-y-8">
    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Complex Grid Layout</h3>
      <div class="grid grid-cols-4 grid-rows-3 gap-4 h-96">
        <div class="col-span-2 row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          col-span-2<br/>row-span-2
        </div>
        <div class="bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold">1</div>
        <div class="bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold">2</div>
        <div class="bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold">3</div>
        <div class="bg-violet-500 rounded-xl flex items-center justify-center text-white font-bold">4</div>
        <div class="col-span-2 bg-pink-500 rounded-xl flex items-center justify-center text-white font-bold">col-span-2</div>
        <div class="col-span-2 bg-fuchsia-500 rounded-xl flex items-center justify-center text-white font-bold">col-span-2</div>
      </div>
    </div>
    
    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Auto-fit Grid (Resize Window)</h3>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        <div class="bg-cyan-500 text-white p-6 rounded-xl text-center font-bold">Box 1</div>
        <div class="bg-teal-500 text-white p-6 rounded-xl text-center font-bold">Box 2</div>
        <div class="bg-emerald-500 text-white p-6 rounded-xl text-center font-bold">Box 3</div>
        <div class="bg-green-500 text-white p-6 rounded-xl text-center font-bold">Box 4</div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Grid3x3}
        category="Tailwind CSS · Modern CSS"
        title="Advanced Grid"
        description="Complex grid layouts and modern techniques"
        colorTheme="violet"
      />

      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Grid3x3 className="w-8 h-8 text-white" />
            </div>
            Advanced Grid Layouts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20">
            <Lightbulb className="w-5 h-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Powerful Layouts</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              Create complex, responsive grid layouts with Tailwind utilities
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={gridHTML}
            title="Advanced Grid Examples"
            description="Complex spanning and auto-fit grids"
            colorTheme="violet"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Grid Spanning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'col-span-{n}', desc: 'Span n columns', example: 'col-span-2' },
              { util: 'col-start-{n}', desc: 'Start at column n', example: 'col-start-2' },
              { util: 'col-end-{n}', desc: 'End at column n', example: 'col-end-4' },
              { util: 'row-span-{n}', desc: 'Span n rows', example: 'row-span-3' },
              { util: 'row-start-{n}', desc: 'Start at row n', example: 'row-start-1' },
              { util: 'row-end-{n}', desc: 'End at row n', example: 'row-end-3' }
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

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Auto-Fit & Auto-Fill
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Responsive Grid (Auto-fit):</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
            </pre>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Automatically fits as many columns as possible
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Custom Grid Template:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="grid grid-cols-[200px_1fr_200px] gap-4">
  <aside>Sidebar</aside>
  <main>Content</main>
  <aside>Sidebar</aside>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                pattern: 'Dashboard Layout',
                code: 'grid grid-cols-[250px_1fr] grid-rows-[auto_1fr]',
                desc: 'Sidebar + header + content'
              },
              {
                pattern: 'Card Grid',
                code: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                desc: 'Responsive card layout'
              },
              {
                pattern: 'Masonry-like',
                code: 'grid grid-cols-3 auto-rows-[150px]',
                desc: 'Variable height items'
              },
              {
                pattern: 'Full-height Sidebar',
                code: 'grid grid-cols-[300px_1fr] h-screen',
                desc: 'Fixed sidebar, scrollable content'
              }
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">{item.pattern}</h4>
                <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded text-pink-800 dark:text-pink-200 block mb-2">
                  {item.code}
                </code>
                <p className="text-xs text-pink-700 dark:text-pink-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
        <Grid3x3 className="w-5 h-5 text-violet-600" />
        <AlertTitle className="text-2xl text-violet-900 dark:text-violet-100">Advanced Grid Tips</AlertTitle>
        <AlertDescription className="text-violet-800 dark:text-violet-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">col-span-*</code> and <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">row-span-*</code> for complex layouts</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Auto-fit: <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">grid-cols-[repeat(auto-fit,minmax(200px,1fr))]</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Named grid lines with arbitrary values for complex layouts</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with gap utilities: <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">gap-4</code>, <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">gap-x-6</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
