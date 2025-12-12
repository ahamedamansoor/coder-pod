'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Zap, CheckCircle, Lightbulb, ArrowRight, Timer } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function Transitions() {

  const basicHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
    transition (all properties, 150ms)
  </button>
  
  <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
    transition-colors (colors only)
  </button>
  
  <button class="bg-purple-500 hover:scale-110 text-white px-6 py-3 rounded-lg font-semibold transition-transform">
    transition-transform (transforms only)
  </button>
</div>`;

  const durationHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-4">
  <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-75">
    duration-75 (75ms - fast)
  </button>
  
  <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
    duration-300 (300ms - normal)
  </button>
  
  <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-700">
    duration-700 (700ms - slow)
  </button>
</div>`;

  const easingHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8 space-y-4">
  <button class="bg-green-500 hover:translate-x-4 text-white px-6 py-3 rounded-lg font-semibold transition ease-linear">
    ease-linear (constant speed)
  </button>
  
  <button class="bg-green-500 hover:translate-x-4 text-white px-6 py-3 rounded-lg font-semibold transition ease-in">
    ease-in (slow start)
  </button>
  
  <button class="bg-green-500 hover:translate-x-4 text-white px-6 py-3 rounded-lg font-semibold transition ease-out">
    ease-out (slow end)
  </button>
  
  <button class="bg-green-500 hover:translate-x-4 text-white px-6 py-3 rounded-lg font-semibold transition ease-in-out">
    ease-in-out (slow both ends)
  </button>
</div>`;

  const cardHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <div class="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
      <div class="p-6">
        <h3 class="font-bold text-gray-800 dark:text-white mb-2">Shadow Transition</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Hover for shadow effect</p>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
      <div class="h-32 bg-gradient-to-br from-green-400 to-green-600"></div>
      <div class="p-6">
        <h3 class="font-bold text-gray-800 dark:text-white mb-2">Lift Transition</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Hover to lift up</p>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow hover:scale-105 transition-all duration-300 cursor-pointer">
      <div class="h-32 bg-gradient-to-br from-purple-400 to-purple-600"></div>
      <div class="p-6">
        <h3 class="font-bold text-gray-800 dark:text-white mb-2">Scale Transition</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Hover to scale</p>
      </div>
    </div>
  </div>
</div>`;

  const buttonHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="flex flex-wrap gap-4">
    <button class="bg-blue-500 hover:bg-blue-600 hover:shadow-lg text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
      Primary Button
    </button>
    
    <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
      Gradient Button
    </button>
    
    <button class="border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
      Outline Button
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="Tailwind CSS · Effects & Interactivity"
        title="Transitions"
        description="Create smooth animations between states"
        colorTheme="purple"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            Transition Types
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Transition Classes</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition</code> = all, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">transition-colors</code> = colors only, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">transition-transform</code> = transforms only
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={basicHTML}
            title="Transition Types"
            description="Hover to see different transitions"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Timer className="w-6 h-6 text-white" />
            </div>
            Duration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={durationHTML}
            title="Transition Duration"
            description="Control speed of transitions"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            Easing Functions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={easingHTML}
            title="Timing Functions"
            description="Control acceleration curves"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Card Transitions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardHTML}
            title="Interactive Cards"
            description="Different transition effects"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Button Examples
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={buttonHTML}
            title="Transitioning Buttons"
            description="Smooth button interactions"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Zap className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Transition Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">transition</code> for smooth hover effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">duration-300</code> for most interactions</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">transition-all duration-300 ease-in-out</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
