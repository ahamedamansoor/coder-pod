'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DesignSystem() {

  const colorHTML = `<div class="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-950 dark:to-gray-950 p-8">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Color Scale Example</h3>
    <div class="grid grid-cols-5 gap-2">
      <div class="bg-blue-100 dark:bg-blue-900 h-20 rounded flex items-center justify-center text-xs font-bold">100</div>
      <div class="bg-blue-300 dark:bg-blue-700 h-20 rounded flex items-center justify-center text-xs font-bold">300</div>
      <div class="bg-blue-500 h-20 rounded flex items-center justify-center text-xs font-bold text-white">500</div>
      <div class="bg-blue-700 dark:bg-blue-300 h-20 rounded flex items-center justify-center text-xs font-bold text-white">700</div>
      <div class="bg-blue-900 dark:bg-blue-100 h-20 rounded flex items-center justify-center text-xs font-bold text-white">900</div>
    </div>
  </div>
</div>`;

  const spacingHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Spacing Scale</h3>
    <div class="space-y-3">
      <div class="bg-purple-500 h-2 w-full rounded"></div>
      <div class="bg-purple-500 h-4 w-full rounded"></div>
      <div class="bg-purple-500 h-6 w-full rounded"></div>
      <div class="bg-purple-500 h-8 w-full rounded"></div>
      <div class="bg-purple-500 h-12 w-full rounded"></div>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400 mt-4">h-2, h-4, h-6, h-8, h-12 (8px increments)</p>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="Tailwind CSS · Core Concepts"
        title="Design System"
        description="Tailwind's built-in design constraints"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            Built-in Design System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Opinionated Defaults</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Tailwind provides a carefully crafted design system with consistent scales for colors, spacing, typography, and more
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={colorHTML}
            title="Color Scale"
            description="Consistent color shades from 50 to 950"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            Spacing Scale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={spacingHTML}
            title="Spacing System"
            description="Consistent spacing based on 0.25rem (4px) increments"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Design Tokens
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Colors', values: '50-950 shades for each color', example: 'text-blue-500' },
              { title: 'Spacing', values: '0-96 in 0.25rem increments', example: 'p-4, m-8' },
              { title: 'Typography', values: 'xs, sm, base, lg, xl-9xl', example: 'text-xl' },
              { title: 'Border Radius', values: 'none, sm, md, lg, xl, 2xl, 3xl, full', example: 'rounded-lg' },
              { title: 'Shadows', values: 'sm, md, lg, xl, 2xl, inner, none', example: 'shadow-lg' },
              { title: 'Breakpoints', values: 'sm, md, lg, xl, 2xl', example: 'md:flex' }
            ].map((item, i) => (
              <div key={i} className="bg-indigo-50 dark:bg-indigo-950/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">{item.title}</h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">{item.values}</p>
                <code className="text-xs bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded text-indigo-800 dark:text-indigo-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Palette className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Design System Benefits</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Consistent visual language across your entire project</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Faster decisions - no need to pick arbitrary values</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Easy to customize via tailwind.config.js</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Better collaboration - everyone uses same values</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
