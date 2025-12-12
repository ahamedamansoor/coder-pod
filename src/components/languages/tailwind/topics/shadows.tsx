'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Box, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Shadows() {

  const boxShadowHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid md:grid-cols-3 gap-8">
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-white">shadow-sm</p>
    </div>
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow">
      <p class="font-semibold text-gray-800 dark:text-white">shadow</p>
    </div>
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
      <p class="font-semibold text-gray-800 dark:text-white">shadow-md</p>
    </div>
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
      <p class="font-semibold text-gray-800 dark:text-white">shadow-lg</p>
    </div>
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl">
      <p class="font-semibold text-gray-800 dark:text-white">shadow-xl</p>
    </div>
    <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl">
      <p class="font-semibold text-gray-800 dark:text-white">shadow-2xl</p>
    </div>
  </div>
</div>`;

  const hoverHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer">
      <p class="font-semibold text-gray-800 dark:text-white mb-2">shadow → shadow-lg</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover me</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-2xl transition-shadow cursor-pointer">
      <p class="font-semibold text-gray-800 dark:text-white mb-2">shadow → shadow-2xl</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover me</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-none transition-shadow cursor-pointer">
      <p class="font-semibold text-gray-800 dark:text-white mb-2">shadow-md → none</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Hover me</p>
    </div>
  </div>
</div>`;

  const coloredHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg shadow-blue-500/50">
      <p class="font-semibold text-blue-600 dark:text-blue-400">Blue Shadow</p>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">shadow-blue-500/50</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg shadow-purple-500/50">
      <p class="font-semibold text-purple-600 dark:text-purple-400">Purple Shadow</p>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">shadow-purple-500/50</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg shadow-pink-500/50">
      <p class="font-semibold text-pink-600 dark:text-pink-400">Pink Shadow</p>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">shadow-pink-500/50</p>
    </div>
  </div>
</div>`;

  const cardsHTML = `<div class="grid md:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
  <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
    <div class="h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
    <div class="p-6">
      <h3 class="font-bold text-gray-800 dark:text-white mb-2">Deep Shadow Card</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">shadow-xl with hover effect</p>
    </div>
  </div>
  
  <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 shadow-2xl text-white">
    <h3 class="font-bold mb-2">Colored Card</h3>
    <p class="text-sm opacity-90">Gradient with shadow-2xl</p>
  </div>
  
  <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow cursor-pointer">
    <h3 class="font-bold text-cyan-600 dark:text-cyan-400 mb-2">Colored Shadow</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">Cyan shadow effect</p>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="Tailwind CSS · Effects & Interactivity"
        title="Shadows"
        description="Add depth with box shadows"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
            Shadow Sizes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Shadow Scale</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              From <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">shadow-sm</code> (subtle) 
              to <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">shadow-2xl</code> (dramatic)
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={boxShadowHTML}
            title="All Shadow Sizes"
            description="From small to extra large"
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
            Hover Shadows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hoverHTML}
            title="Interactive Shadows"
            description="Shadow changes on hover"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Box className="w-6 h-6 text-white" />
            </div>
            Colored Shadows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={coloredHTML}
            title="Custom Shadow Colors"
            description="Add color to shadows"
            colorTheme="green"
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
            Card Examples
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardsHTML}
            title="Shadow Cards"
            description="Real-world shadow usage"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Box className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Shadow Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">transition-shadow</code> for smooth hover effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">shadow-lg</code> for cards and modals</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Colored shadows: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">shadow-blue-500/50</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
