'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Navigation, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function GradientDirections() {

  const directionHTML = `<div class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-950 dark:to-slate-950 p-8">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gradient Directions</h3>
    
    <div class="grid md:grid-cols-3 gap-4">
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-right →</p>
        <div class="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-r
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-left ←</p>
        <div class="h-32 bg-gradient-to-l from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-l
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-top ↑</p>
        <div class="h-32 bg-gradient-to-t from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-t
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-bottom ↓</p>
        <div class="h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-b
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-top-right ↗</p>
        <div class="h-32 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-tr
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-top-left ↖</p>
        <div class="h-32 bg-gradient-to-tl from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-tl
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-bottom-right ↘</p>
        <div class="h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-br
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">to-bottom-left ↙</p>
        <div class="h-32 bg-gradient-to-bl from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
          to-bl
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Navigation}
        category="Tailwind CSS · Gradients & Images"
        title="Gradient Directions"
        description="Control gradient direction and angle"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Navigation className="w-8 h-8 text-white" />
            </div>
            Gradient Directions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">8 Directions Available</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Control gradient flow in any direction: horizontal, vertical, or diagonal
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={directionHTML}
            title="All Gradient Directions"
            description="8 available gradient directions"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            Direction Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { dir: 'bg-gradient-to-r', desc: 'Left to right', arrow: '→' },
              { dir: 'bg-gradient-to-l', desc: 'Right to left', arrow: '←' },
              { dir: 'bg-gradient-to-t', desc: 'Bottom to top', arrow: '↑' },
              { dir: 'bg-gradient-to-b', desc: 'Top to bottom', arrow: '↓' },
              { dir: 'bg-gradient-to-tr', desc: 'Bottom-left to top-right', arrow: '↗' },
              { dir: 'bg-gradient-to-tl', desc: 'Bottom-right to top-left', arrow: '↖' },
              { dir: 'bg-gradient-to-br', desc: 'Top-left to bottom-right', arrow: '↘' },
              { dir: 'bg-gradient-to-bl', desc: 'Top-right to bottom-left', arrow: '↙' }
            ].map((item, i) => (
              <div key={i} className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                <div className="flex items-center justify-between mb-2">
                  <code className="font-mono text-sm text-cyan-900 dark:text-cyan-100 font-bold">{item.dir}</code>
                  <span className="text-2xl">{item.arrow}</span>
                </div>
                <p className="text-xs text-cyan-700 dark:text-cyan-300">{item.desc}</p>
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
            Usage Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Horizontal Hero Section:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="
  bg-gradient-to-r 
  from-blue-600 
  to-purple-600
  text-white
  p-12
">
  Hero Content
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Diagonal Card Background:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="
  bg-gradient-to-br 
  from-pink-500 
  to-orange-500
  rounded-xl
  p-6
">
  Card Content
</div>`}
            </pre>
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
        <CardContent>
          <div className="space-y-3">
            {[
              { use: 'Headers', direction: 'to-r', reason: 'Natural left-to-right reading flow' },
              { use: 'Hero Sections', direction: 'to-br', reason: 'Dynamic diagonal for impact' },
              { use: 'Cards', direction: 'to-tr or to-br', reason: 'Subtle depth and dimension' },
              { use: 'Overlays', direction: 'to-b', reason: 'Fade to dark at bottom' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 text-sm">{item.use}</h4>
                  <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                    {item.direction}
                  </code>
                </div>
                <p className="text-xs text-purple-700 dark:text-purple-300">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Navigation className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Gradient Direction Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with color stops: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">bg-gradient-to-r from-* to-*</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use diagonals (to-br, to-tr) for dynamic hero sections</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Vertical (to-b) works great for image overlays</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>8 directions cover all common use cases</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
