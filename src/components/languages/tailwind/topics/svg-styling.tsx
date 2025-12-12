'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SvgStyling() {

  const svgHTML = `<div class="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-950 dark:to-cyan-950 p-8">
  <div class="max-w-4xl mx-auto space-y-8">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">SVG Styling Examples</h3>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">fill-current</p>
        <svg class="w-16 h-16 mx-auto fill-current text-blue-500" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">stroke-current + stroke-2</p>
        <svg class="w-16 h-16 mx-auto stroke-current text-green-500 stroke-2 fill-none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Animated</p>
        <svg class="w-16 h-16 mx-auto fill-current text-purple-500 hover:text-pink-500 transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6">
      <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Stroke Width Examples</h4>
      <div class="flex items-center justify-around">
        <svg class="w-16 h-16 stroke-current text-blue-500 stroke-1 fill-none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
        </svg>
        <svg class="w-16 h-16 stroke-current text-blue-500 stroke-2 fill-none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
        </svg>
        <svg class="w-16 h-16 stroke-current text-blue-500 stroke-4 fill-none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      </div>
      <div class="flex justify-around mt-2">
        <p class="text-xs text-gray-600 dark:text-gray-400">stroke-1</p>
        <p class="text-xs text-gray-600 dark:text-gray-400">stroke-2</p>
        <p class="text-xs text-gray-600 dark:text-gray-400">stroke-4</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · SVG & Icons"
        title="SVG Styling"
        description="Style SVG elements with Tailwind utilities"
        colorTheme="teal"
      />

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            SVG Styling
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/20">
            <Lightbulb className="w-5 h-5 text-teal-600" />
            <AlertTitle className="text-teal-900 dark:text-teal-100">Inline SVG Power</AlertTitle>
            <AlertDescription className="text-teal-800 dark:text-teal-200">
              Style inline SVG elements using Tailwind's fill, stroke, and color utilities
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={svgHTML}
            title="SVG Examples"
            description="Fill, stroke, and width utilities"
            colorTheme="teal"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            Fill Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { util: 'fill-current', desc: 'Use current text color for fill', example: 'text-blue-500 fill-current' },
              { util: 'fill-{color}', desc: 'Specific fill color', example: 'fill-blue-500' },
              { util: 'fill-none', desc: 'No fill (transparent)', example: 'fill-none' }
            ].map((item, i) => (
              <div key={i} className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                <code className="font-mono text-sm text-cyan-900 dark:text-cyan-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-cyan-700 dark:text-cyan-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded text-cyan-800 dark:text-cyan-200">
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
            Stroke Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { util: 'stroke-current', desc: 'Use current text color', example: 'text-green-500 stroke-current' },
              { util: 'stroke-{color}', desc: 'Specific stroke color', example: 'stroke-green-500' },
              { util: 'stroke-0', desc: 'No stroke', example: 'stroke-0' },
              { util: 'stroke-1', desc: '1px stroke width', example: 'stroke-1' },
              { util: 'stroke-2', desc: '2px stroke width', example: 'stroke-2' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <code className="font-mono text-sm text-blue-900 dark:text-blue-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">
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
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Icon with Current Color:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<svg class="w-6 h-6 fill-current text-blue-500">
  <!-- SVG path -->
</svg>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Outline Icon:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<svg class="w-6 h-6 stroke-current text-green-500 stroke-2 fill-none">
  <!-- SVG path -->
</svg>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Interactive Icon:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<svg class="
  w-6 h-6 
  fill-current 
  text-gray-600 
  hover:text-blue-500 
  transition-colors
">
  <!-- SVG path -->
</svg>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
        <Layers className="w-5 h-5 text-teal-600" />
        <AlertTitle className="text-2xl text-teal-900 dark:text-teal-100">SVG Styling Tips</AlertTitle>
        <AlertDescription className="text-teal-800 dark:text-teal-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded">fill-current</code> to inherit text color</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with hover states: <code className="bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded">hover:fill-blue-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>For outline icons: <code className="bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded">stroke-current fill-none</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Only works with inline SVG, not <code className="bg-teal-200 dark:bg-teal-900 px-2 py-1 rounded">&lt;img&gt;</code> tags</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
