'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, CheckCircle, Lightbulb, ArrowRight, RotateCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function Transforms() {

  const scaleHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="flex flex-wrap gap-8 justify-center">
    <div class="bg-blue-500 text-white p-6 rounded-lg font-semibold hover:scale-110 transition-transform cursor-pointer">
      scale-110
    </div>
    <div class="bg-blue-500 text-white p-6 rounded-lg font-semibold hover:scale-125 transition-transform cursor-pointer">
      scale-125
    </div>
    <div class="bg-blue-500 text-white p-6 rounded-lg font-semibold hover:scale-150 transition-transform cursor-pointer">
      scale-150
    </div>
  </div>
</div>`;

  const rotateHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="flex flex-wrap gap-8 justify-center">
    <div class="bg-purple-500 text-white p-6 rounded-lg font-semibold hover:rotate-6 transition-transform cursor-pointer">
      rotate-6
    </div>
    <div class="bg-purple-500 text-white p-6 rounded-lg font-semibold hover:rotate-12 transition-transform cursor-pointer">
      rotate-12
    </div>
    <div class="bg-purple-500 text-white p-6 rounded-lg font-semibold hover:rotate-45 transition-transform cursor-pointer">
      rotate-45
    </div>
    <div class="bg-purple-500 text-white p-6 rounded-lg font-semibold hover:-rotate-12 transition-transform cursor-pointer">
      -rotate-12
    </div>
  </div>
</div>`;

  const translateHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="space-y-8">
    <div class="flex justify-center">
      <div class="bg-green-500 text-white p-6 rounded-lg font-semibold hover:translate-x-4 transition-transform cursor-pointer">
        translate-x-4 →
      </div>
    </div>
    <div class="flex justify-center">
      <div class="bg-green-500 text-white p-6 rounded-lg font-semibold hover:translate-y-4 transition-transform cursor-pointer">
        translate-y-4 ↓
      </div>
    </div>
    <div class="flex justify-center">
      <div class="bg-green-500 text-white p-6 rounded-lg font-semibold hover:translate-x-4 hover:translate-y-4 transition-transform cursor-pointer">
        Both →↓
      </div>
    </div>
  </div>
</div>`;

  const skewHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="flex flex-wrap gap-8 justify-center">
    <div class="bg-orange-500 text-white p-6 rounded-lg font-semibold hover:skew-x-6 transition-transform cursor-pointer">
      skew-x-6
    </div>
    <div class="bg-orange-500 text-white p-6 rounded-lg font-semibold hover:skew-y-6 transition-transform cursor-pointer">
      skew-y-6
    </div>
    <div class="bg-orange-500 text-white p-6 rounded-lg font-semibold hover:skew-x-12 transition-transform cursor-pointer">
      skew-x-12
    </div>
  </div>
</div>`;

  const combinedHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="flex flex-wrap gap-8 justify-center">
    <div class="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 rounded-xl font-bold hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      Scale + Rotate + Shadow
    </div>
    
    <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-xl font-bold hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      Scale + Lift + Shadow
    </div>
  </div>
</div>`;

  const cardsHTML = `<div class="grid md:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
  <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:-rotate-1 transition-transform duration-300 cursor-pointer">
    <div class="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
    <div class="p-6">
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Tilt Card</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover for scale + rotate</p>
    </div>
  </div>
  
  <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
    <div class="h-32 bg-gradient-to-br from-green-400 to-green-600"></div>
    <div class="p-6">
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Scale Card</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover for scale effect</p>
    </div>
  </div>
  
  <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
    <div class="h-32 bg-gradient-to-br from-purple-400 to-purple-600"></div>
    <div class="p-6">
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Lift Card</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover for lift effect</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="Tailwind CSS · Effects & Interactivity"
        title="Transforms"
        description="Scale, rotate, translate, and skew elements"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Move className="w-8 h-8 text-white" />
            </div>
            Scale Transform
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Scale Values</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">scale-110</code> = 110%, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">scale-125</code> = 125%. 
              Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">transition-transform</code> for smooth effect
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={scaleHTML}
            title="Scale on Hover"
            description="Hover to see scaling"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <RotateCw className="w-6 h-6 text-white" />
            </div>
            Rotate Transform
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={rotateHTML}
            title="Rotation"
            description="Hover to rotate elements"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Move className="w-6 h-6 text-white" />
            </div>
            Translate Transform
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={translateHTML}
            title="Translation"
            description="Move elements on hover"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Move className="w-6 h-6 text-white" />
            </div>
            Skew Transform
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={skewHTML}
            title="Skew Effect"
            description="Slant elements"
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
            Combined Transforms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={combinedHTML}
            title="Multiple Transforms"
            description="Combine scale, rotate, and more"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Interactive Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardsHTML}
            title="Transform Cards"
            description="Real-world examples"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Move className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Transform Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition-transform</code> for smooth animations</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">hover:scale-110 hover:rotate-3</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transform</code> class to enable GPU acceleration</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
