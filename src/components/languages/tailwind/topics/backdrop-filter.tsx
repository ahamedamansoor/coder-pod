'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function BackdropFilter() {

  const backdropHTML = `<div class="relative min-h-[500px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 rounded-xl overflow-hidden">
  <div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=800&fit=crop'); background-size: cover; background-position: center;"></div>
  
  <div class="relative z-10 max-w-4xl mx-auto space-y-6">
    <div class="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 rounded-xl p-6 border border-white/20">
      <h3 class="text-xl font-bold text-white mb-2">Glassmorphism Card</h3>
      <p class="text-white/90">backdrop-blur-md bg-white/30</p>
    </div>
    
    <div class="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-white/20">
      <h3 class="text-xl font-bold text-white mb-2">Subtle Blur</h3>
      <p class="text-white/90">backdrop-blur-sm bg-black/20</p>
    </div>
    
    <div class="backdrop-blur-xl backdrop-brightness-110 bg-white/20 rounded-xl p-6 border border-white/30">
      <h3 class="text-xl font-bold text-white mb-2">Enhanced Backdrop</h3>
      <p class="text-white/90">backdrop-blur-xl + backdrop-brightness-110</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Filters & Effects"
        title="Backdrop Filter"
        description="Glassmorphism and backdrop effects"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            Backdrop Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Glassmorphism Effect</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Apply blur and effects to the area behind an element
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={backdropHTML}
            title="Backdrop Filter Examples"
            description="Creating glassmorphism UI"
            colorTheme="blue"
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
            Backdrop Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'backdrop-blur-{size}', values: 'none, sm, md, lg, xl, 2xl, 3xl', example: 'backdrop-blur-md' },
              { util: 'backdrop-brightness-{amount}', values: '0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200', example: 'backdrop-brightness-110' },
              { util: 'backdrop-contrast-{amount}', values: '0, 50, 75, 100, 125, 150, 200', example: 'backdrop-contrast-125' },
              { util: 'backdrop-grayscale', values: 'backdrop-grayscale, backdrop-grayscale-0', example: 'backdrop-grayscale' },
              { util: 'backdrop-hue-rotate-{deg}', values: '0, 15, 30, 60, 90, 180', example: 'backdrop-hue-rotate-90' },
              { util: 'backdrop-invert', values: 'backdrop-invert, backdrop-invert-0', example: 'backdrop-invert' },
              { util: 'backdrop-saturate-{amount}', values: '0, 50, 100, 150, 200', example: 'backdrop-saturate-150' },
              { util: 'backdrop-sepia', values: 'backdrop-sepia, backdrop-sepia-0', example: 'backdrop-sepia' }
            ].map((item, i) => (
              <div key={i} className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                <code className="font-mono text-xs text-cyan-900 dark:text-cyan-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-cyan-700 dark:text-cyan-300 mb-2">{item.values}</p>
                <code className="text-xs bg-cyan-100 dark:bg-cyan-900 px-2 py-1 rounded text-cyan-800 dark:text-cyan-200">
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
            Glassmorphism Recipe
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">The perfect glassmorphism card:</p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="
  backdrop-blur-md 
  bg-white/30 
  dark:bg-slate-900/30
  rounded-xl 
  border border-white/20
  p-6
  shadow-lg
">
  Content
</div>`}
          </pre>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
              <code className="text-purple-900 dark:text-purple-100 font-bold block mb-1">backdrop-blur-md</code>
              <span className="text-xs text-purple-700 dark:text-purple-300">Blur background</span>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
              <code className="text-purple-900 dark:text-purple-100 font-bold block mb-1">bg-white/30</code>
              <span className="text-xs text-purple-700 dark:text-purple-300">Semi-transparent</span>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
              <code className="text-purple-900 dark:text-purple-100 font-bold block mb-1">border-white/20</code>
              <span className="text-xs text-purple-700 dark:text-purple-300">Subtle border</span>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
              <code className="text-purple-900 dark:text-purple-100 font-bold block mb-1">shadow-lg</code>
              <span className="text-xs text-purple-700 dark:text-purple-300">Depth</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Layers className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Backdrop Filter Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with opacity: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">bg-white/30</code> for transparency</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add borders: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">border border-white/20</code> for definition</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works best over images or gradients</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>May impact performance - use sparingly</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
