'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Droplet, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function OpacityBlending() {

  const opacityHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid md:grid-cols-5 gap-4">
    <div class="bg-blue-500 text-white p-4 rounded text-center opacity-100">
      100%
    </div>
    <div class="bg-blue-500 text-white p-4 rounded text-center opacity-75">
      75%
    </div>
    <div class="bg-blue-500 text-white p-4 rounded text-center opacity-50">
      50%
    </div>
    <div class="bg-blue-500 text-white p-4 rounded text-center opacity-25">
      25%
    </div>
    <div class="bg-blue-500 text-white p-4 rounded text-center opacity-0">
      0%
    </div>
  </div>
</div>`;

  const overlayHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="grid md:grid-cols-3 gap-4">
    <div class="relative h-48 rounded-xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-full object-cover" alt="bg">
      <div class="absolute inset-0 bg-black/25 flex items-center justify-center">
        <p class="text-white font-bold">25% Overlay</p>
      </div>
    </div>
    
    <div class="relative h-48 rounded-xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-full object-cover" alt="bg">
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <p class="text-white font-bold">50% Overlay</p>
      </div>
    </div>
    
    <div class="relative h-48 rounded-xl overflow-hidden">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="w-full h-full object-cover" alt="bg">
      <div class="absolute inset-0 bg-black/75 flex items-center justify-center">
        <p class="text-white font-bold">75% Overlay</p>
      </div>
    </div>
  </div>
</div>`;

  const hoverHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid md:grid-cols-3 gap-6">
    <div class="relative group rounded-xl overflow-hidden cursor-pointer">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" class="w-full h-48 object-cover" alt="card">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <div>
          <h3 class="text-white font-bold text-lg">Card Title</h3>
          <p class="text-white/90 text-sm">Hover to reveal</p>
        </div>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Fade In</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Hover to see full opacity</p>
    </div>
    
    <div class="relative group rounded-xl overflow-hidden cursor-pointer">
      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" class="w-full h-48 object-cover group-hover:opacity-50 transition-opacity" alt="card">
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button class="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>`;

  const colorOpacityHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8 space-y-4">
  <div class="bg-blue-500/25 text-gray-800 dark:text-white p-6 rounded-lg font-semibold">
    bg-blue-500/25
  </div>
  <div class="bg-blue-500/50 text-white p-6 rounded-lg font-semibold">
    bg-blue-500/50
  </div>
  <div class="bg-blue-500/75 text-white p-6 rounded-lg font-semibold">
    bg-blue-500/75
  </div>
  <div class="bg-blue-500 text-white p-6 rounded-lg font-semibold">
    bg-blue-500 (100%)
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Droplet}
        category="Tailwind CSS · Effects & Interactivity"
        title="Opacity & Blending"
        description="Control transparency and visual effects"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            Opacity Values
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Opacity Scale</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">opacity-0</code> = invisible, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">opacity-50</code> = 50%, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">opacity-100</code> = fully visible
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={opacityHTML}
            title="Opacity Levels"
            description="From transparent to opaque"
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
            Image Overlays
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={overlayHTML}
            title="Dark Overlays"
            description="bg-black with opacity"
            colorTheme="purple"
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
            Hover Effects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hoverHTML}
            title="Interactive Opacity"
            description="Reveal content on hover"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            Color Opacity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorOpacityHTML}
            title="Color with Opacity"
            description="bg-{color}/opacity syntax"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Droplet className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Opacity Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">bg-black/50</code> for quick overlays</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition-opacity</code> for smooth fades</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">hover:opacity-100 transition-opacity</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
