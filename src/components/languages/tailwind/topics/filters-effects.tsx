'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Sparkles, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FiltersEffects() {

  const blurHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid md:grid-cols-3 gap-6">
    <div class="relative">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-48 object-cover rounded-lg blur-none" alt="Original">
      <p class="text-center mt-2 font-semibold text-gray-800 dark:text-gray-200">blur-none</p>
    </div>
    <div class="relative">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-48 object-cover rounded-lg blur-sm" alt="Blur">
      <p class="text-center mt-2 font-semibold text-gray-800 dark:text-gray-200">blur-sm</p>
    </div>
    <div class="relative">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-48 object-cover rounded-lg blur-lg" alt="Blur Large">
      <p class="text-center mt-2 font-semibold text-gray-800 dark:text-gray-200">blur-lg</p>
    </div>
  </div>
</div>`;

  const brightnessHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="grid md:grid-cols-3 gap-6">
    <div>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-48 object-cover rounded-lg brightness-50" alt="Dark">
      <p class="text-center mt-2 font-semibold text-gray-800 dark:text-gray-200">brightness-50</p>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-48 object-cover rounded-lg brightness-100" alt="Normal">
      <p class="text-center mt-2 font-semibold text-gray-800 dark:text-gray-200">brightness-100</p>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-48 object-cover rounded-lg brightness-150" alt="Bright">
      <p class="text-center mt-2 font-semibold text-gray-800 dark:text-gray-200">brightness-150</p>
    </div>
  </div>
</div>`;

  const combinedHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid md:grid-cols-2 gap-6">
    <div class="relative group cursor-pointer">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-64 object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300" alt="Grayscale">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
        <p class="text-white font-semibold">Hover to remove grayscale</p>
      </div>
    </div>
    
    <div class="relative group cursor-pointer">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-64 object-cover rounded-lg blur-sm hover:blur-none transition duration-300" alt="Blur">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
        <p class="text-white font-semibold">Hover to remove blur</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="Tailwind CSS · Effects & Interactivity"
        title="Filters & Effects"
        description="Apply visual effects like blur, brightness, and grayscale"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            Blur Effects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Blur Scale</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              From <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">blur-none</code> to 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">blur-3xl</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={blurHTML}
            title="Blur Filters"
            description="Different blur intensities"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            Brightness
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={brightnessHTML}
            title="Brightness Control"
            description="Make images darker or brighter"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Interactive Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={combinedHTML}
            title="Hover Effects"
            description="Remove filters on hover"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            Available Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { filter: 'blur-*', desc: 'Blur effect (sm, md, lg, xl, 2xl, 3xl)' },
              { filter: 'brightness-*', desc: 'Brightness (0, 50, 75, 100, 125, 150, 200)' },
              { filter: 'contrast-*', desc: 'Contrast adjustment' },
              { filter: 'grayscale', desc: 'Black and white effect' },
              { filter: 'invert', desc: 'Invert colors' },
              { filter: 'sepia', desc: 'Sepia tone effect' },
              { filter: 'saturate-*', desc: 'Color saturation' },
              { filter: 'hue-rotate-*', desc: 'Rotate hue' }
            ].map(item => (
              <div key={item.filter} className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-3 border border-orange-200 dark:border-orange-800">
                <code className="font-mono text-sm text-orange-900 dark:text-orange-100">{item.filter}</code>
                <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Filter Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">transition</code> for smooth effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">hover:</code> to toggle filters</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Stack multiple filters: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">blur-sm grayscale</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
