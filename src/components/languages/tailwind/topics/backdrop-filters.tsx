'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function BackdropFilters() {

  const blurHTML = `<div class="relative h-96 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800')">
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 p-8 rounded-xl border border-white/50">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">backdrop-blur-sm</h2>
      <p class="text-gray-800 dark:text-gray-200">Glass morphism effect</p>
    </div>
  </div>
</div>`;

  const intensityHTML = `<div class="relative h-96 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800')">
  <div class="absolute inset-0 grid grid-cols-3 gap-4 p-8">
    <div class="backdrop-blur-sm bg-white/20 dark:bg-slate-900/20 p-4 rounded-lg border border-white/30 text-center">
      <p class="font-bold text-gray-900 dark:text-white">blur-sm</p>
    </div>
    <div class="backdrop-blur-md bg-white/20 dark:bg-slate-900/20 p-4 rounded-lg border border-white/30 text-center">
      <p class="font-bold text-gray-900 dark:text-white">blur-md</p>
    </div>
    <div class="backdrop-blur-lg bg-white/20 dark:bg-slate-900/20 p-4 rounded-lg border border-white/30 text-center">
      <p class="font-bold text-gray-900 dark:text-white">blur-lg</p>
    </div>
  </div>
</div>`;

  const cardHTML = `<div class="relative h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center p-8">
  <div class="max-w-md backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
    <h2 class="text-3xl font-bold text-white mb-4">Glass Card</h2>
    <p class="text-white/90 mb-6">Beautiful frosted glass effect using backdrop-blur and transparency.</p>
    <button class="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm border border-white/30 transition">
      Learn More
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Effects & Interactivity"
        title="Backdrop Filters"
        description="Create frosted glass effects with backdrop blur"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            Backdrop Blur
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Glass Morphism</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">backdrop-blur</code> blurs content behind the element
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={blurHTML}
            title="Basic Backdrop Blur"
            description="Frosted glass effect"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Blur Intensity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={intensityHTML}
            title="Blur Levels"
            description="sm, md, lg blur intensities"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Glass Card Design
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardHTML}
            title="Modern Glass Effect"
            description="Professional glass morphism card"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            Other Backdrop Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { filter: 'backdrop-blur-*', desc: 'Blur background (sm, md, lg, xl)' },
              { filter: 'backdrop-brightness-*', desc: 'Background brightness' },
              { filter: 'backdrop-contrast-*', desc: 'Background contrast' },
              { filter: 'backdrop-grayscale', desc: 'Grayscale background' },
              { filter: 'backdrop-invert', desc: 'Invert background colors' },
              { filter: 'backdrop-saturate-*', desc: 'Background saturation' }
            ].map(item => (
              <div key={item.filter} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <code className="font-mono text-sm text-green-900 dark:text-green-100">{item.filter}</code>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Layers className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Backdrop Tips</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">bg-white/20</code> for glass effect</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">border border-white/30</code> for definition</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for modals, cards, and navigation bars</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
