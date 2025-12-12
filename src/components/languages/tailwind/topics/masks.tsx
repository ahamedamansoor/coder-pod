'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FrontendCodePreview } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Eye, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const gradientMaskHTML = `
<div class="rounded-3xl overflow-hidden shadow-2xl w-full">
  <div class="relative h-64 bg-gradient-to-br from-slate-900 via-indigo-500 to-purple-500 border border-white/20 mask-[linear-gradient(180deg,rgba(0,0,0,1),rgba(0,0,0,0.35),rgba(0,0,0,0))]">
    <div class="absolute inset-0 flex items-end p-6">
      <div>
        <p class="text-xs uppercase tracking-[0.4em] text-white/70">Fade Mask</p>
        <h2 class="text-3xl font-bold text-white">Soft transparency</h2>
        <p class="text-sm text-white/70 mt-1">Gradually hides the bottom edge</p>
      </div>
    </div>
  </div>
</div>
`;

const radialMaskHTML = `
<div class="grid gap-4 sm:grid-cols-2">
  <div class="rounded-3xl bg-slate-900 p-5 text-white shadow-lg">
    <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Radial Spotlight</p>
    <div class="mt-4 rounded-2xl h-40 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-400 mask-[radial-gradient(circle at 50% 40%,rgba(0,0,0,1)60%,rgba(0,0,0,0)72%)] shadow-inner flex items-center justify-center">
      <span class="text-lg font-semibold">Spotlight</span>
    </div>
  </div>
  <div class="rounded-3xl bg-slate-900 p-5 text-white shadow-lg">
    <p class="text-xs uppercase tracking-[0.5em] text-slate-400">Text Reveal</p>
    <div class="mt-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl font-black text-transparent bg-clip-text mask-[linear-gradient(90deg,rgba(0,0,0,1),rgba(0,0,0,0.2))]">
      TEXT
    </div>
    <p class="mt-3 text-xs text-slate-400">Mask clip text for a brushing reveal</p>
  </div>
</div>
`;

export default function Masks() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Eye}
        category="Tailwind CSS · Filters & Effects"
        title="Masks"
        description="CSS mask utilities for complex visual effects"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            CSS Masking
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Advanced Feature</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Masks allow you to hide portions of elements using images or gradients
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Using CSS Mask with Tailwind:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maskImage: {
        'gradient-to-b': 'linear-gradient(to bottom, black 50%, transparent)',
        'gradient-radial': 'radial-gradient(circle, black 60%, transparent)',
      }
    }
  }
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            Common Mask Patterns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                pattern: 'Fade to Transparent',
                desc: 'Gradually fade out content',
                css: 'mask-image: linear-gradient(to bottom, black, transparent);'
              },
              {
                pattern: 'Circular Reveal',
                desc: 'Show content in a circle',
                css: 'mask-image: radial-gradient(circle, black 60%, transparent);'
              },
              {
                pattern: 'Text Mask',
                desc: 'Use text as a mask for images',
                css: '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'
              },
              {
                pattern: 'Custom Shape',
                desc: 'Use SVG as mask',
                css: 'mask-image: url("mask.svg");'
              }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">{item.pattern}</h4>
                <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded text-teal-800 dark:text-teal-200 block">
                  {item.css}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Text Gradient Effect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Create gradient text using background-clip (a type of masking):
          </p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<h1 class="
  text-6xl font-bold
  bg-gradient-to-r from-purple-500 to-pink-500
  bg-clip-text text-transparent
">
  Gradient Text
</h1>`}
          </pre>
          <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-2">Key classes:</p>
            <ul className="space-y-1 text-xs text-cyan-600 dark:text-cyan-400">
              <li>• <code className="bg-cyan-100 dark:bg-cyan-900 px-1.5 py-0.5 rounded">bg-gradient-to-r</code> - gradient background</li>
              <li>• <code className="bg-cyan-100 dark:bg-cyan-900 px-1.5 py-0.5 rounded">bg-clip-text</code> - clip background to text</li>
              <li>• <code className="bg-cyan-100 dark:bg-cyan-900 px-1.5 py-0.5 rounded">text-transparent</code> - transparent text</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: 'Gradient Text', icon: '✨', desc: 'Colorful text effects' },
              { title: 'Image Fading', icon: '🌅', desc: 'Fade images to background' },
              { title: 'Complex Shapes', icon: '🔷', desc: 'Non-rectangular containers' },
              { title: 'Text Reveals', icon: '👁️', desc: 'Progressive text disclosure' },
              { title: 'Custom Borders', icon: '🔲', desc: 'Unique border effects' },
              { title: 'Loading States', icon: '⏳', desc: 'Skeleton screens' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-1">{item.icon}</div>
                <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            Mask Examples
          </CardTitle>
          <CardDescription>
            Tailwind mask utilities and gradients in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            html={gradientMaskHTML}
            title="Gradient Fade Mask"
            description="mask-[linear-gradient(...)] softly fades the edge of a colorful card."
            colorTheme="emerald"
            styleLanguage="tailwind"
            previewHeight="320"
          />
          <FrontendCodePreview
            html={radialMaskHTML}
            title="Radial Spotlight & Text Reveal"
            description="Radial gradients and mask-clip text highlight different masking tricks."
            colorTheme="cyan"
            styleLanguage="tailwind"
            previewHeight="320"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <Eye className="w-5 h-5 text-emerald-600" />
        <AlertTitle className="text-2xl text-emerald-900 dark:text-emerald-100">Masking Tips</AlertTitle>
        <AlertDescription className="text-emerald-800 dark:text-emerald-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-emerald-200 dark:bg-emerald-900 px-2 py-1 rounded">bg-clip-text</code> for gradient text</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Custom masks require extending Tailwind config</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support varies - test thoroughly</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with transitions for reveal effects</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
