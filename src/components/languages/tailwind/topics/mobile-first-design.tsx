'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Smartphone, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function MobileFirstDesign() {

  const approachHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-4 sm:p-6 md:p-8">
  <div class="max-w-4xl mx-auto">
    <!-- Mobile-first card -->
    <div class="bg-white dark:bg-slate-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
        Mobile-First Approach
      </h2>
      <p class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
        Start with mobile styles, then enhance for larger screens
      </p>
    </div>
  </div>
</div>`;

  const stackHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <!-- Stacked on mobile, side-by-side on desktop -->
  <div class="flex flex-col md:flex-row gap-4">
    <div class="flex-1 bg-purple-500 text-white p-6 rounded-lg">
      <h3 class="font-bold mb-2">Section 1</h3>
      <p class="text-sm">Stacks vertically on mobile</p>
    </div>
    <div class="flex-1 bg-pink-500 text-white p-6 rounded-lg">
      <h3 class="font-bold mb-2">Section 2</h3>
      <p class="text-sm">Side-by-side on md+</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Smartphone}
        category="Tailwind CSS · Responsive Design"
        title="Mobile-First Design"
        description="Build for mobile, enhance for desktop"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            Mobile-First Philosophy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Start Small</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Write base styles for mobile, then use breakpoints to add complexity for larger screens
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Mobile-First vs Desktop-First:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Mobile-First (Tailwind)</h4>
                <code className="text-xs bg-green-200 dark:bg-green-900 px-2 py-1 rounded block">
                  text-sm md:text-lg
                </code>
                <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                  Small by default, larger on md+
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Desktop-First (Old Way)</h4>
                <code className="text-xs bg-red-200 dark:bg-red-900 px-2 py-1 rounded block">
                  text-lg md:text-sm
                </code>
                <p className="text-xs text-red-700 dark:text-red-300 mt-2">
                  Large by default, smaller on md+ (backwards!)
                </p>
              </div>
            </div>
          </div>

          <FrontendCodePreview
            html={approachHTML}
            title="Progressive Enhancement"
            description="Padding and text size grow with screen"
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
            Layout Pattern
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={stackHTML}
            title="Stack to Row"
            description="Common mobile-first pattern"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Smartphone className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Mobile-First Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Base styles = mobile. Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">md:</code> for desktop</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Most users are on mobile - optimize there first!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Pattern: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">flex-col md:flex-row</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
