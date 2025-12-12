'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Blend, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function BlendModes() {

  const blendHTML = `<div class="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 p-8">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Blend Mode Examples</h3>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply"></div>
          </div>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">mix-blend-multiply</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 bg-yellow-400 rounded-full mix-blend-screen"></div>
          </div>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">mix-blend-screen</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay"></div>
          </div>
        </div>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">mix-blend-overlay</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Blend}
        category="Tailwind CSS · Filters & Effects"
        title="Blend Modes"
        description="Mix blend modes for creative layering effects"
        colorTheme="pink"
      />

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl">
              <Blend className="w-8 h-8 text-white" />
            </div>
            CSS Blend Modes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
            <Lightbulb className="w-5 h-5 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Layer Blending</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Control how elements blend with their backgrounds
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={blendHTML}
            title="Blend Mode Effects"
            description="Different blend modes in action"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Blend className="w-6 h-6 text-white" />
            </div>
            Mix Blend Modes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
              'color-dodge', 'color-burn', 'hard-light', 'soft-light',
              'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
            ].map((mode) => (
              <div key={mode} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <code className="text-sm text-purple-900 dark:text-purple-100 font-mono">
                  mix-blend-{mode}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-rose-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Background Blend Modes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Blend background images with background colors:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
              'color-dodge', 'color-burn', 'hard-light', 'soft-light',
              'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
            ].map((mode) => (
              <div key={mode} className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-3 border border-rose-200 dark:border-rose-800">
                <code className="text-xs text-rose-900 dark:text-rose-100 font-mono">
                  bg-blend-{mode}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-fuchsia-200 dark:border-fuchsia-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-fuchsia-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { use: 'Multiply', desc: 'Darkens images, good for text overlays', code: 'mix-blend-multiply' },
              { use: 'Screen', desc: 'Lightens images, creates glow effects', code: 'mix-blend-screen' },
              { use: 'Overlay', desc: 'Combines multiply and screen', code: 'mix-blend-overlay' },
              { use: 'Difference', desc: 'Creates high contrast effects', code: 'mix-blend-difference' }
            ].map((item, i) => (
              <div key={i} className="bg-fuchsia-50 dark:bg-fuchsia-950/20 rounded-lg p-4 border border-fuchsia-200 dark:border-fuchsia-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100">{item.use}</h4>
                  <code className="text-xs bg-fuchsia-100 dark:bg-fuchsia-900 px-2 py-1 rounded text-fuchsia-800 dark:text-fuchsia-200">
                    {item.code}
                  </code>
                </div>
                <p className="text-sm text-fuchsia-700 dark:text-fuchsia-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
        <Blend className="w-5 h-5 text-pink-600" />
        <AlertTitle className="text-2xl text-pink-900 dark:text-pink-100">Blend Mode Tips</AlertTitle>
        <AlertDescription className="text-pink-800 dark:text-pink-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">mix-blend-*</code> blends element with background</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">bg-blend-*</code> blends background layers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Great for creative text effects and overlays</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test across browsers - some modes have limited support</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
