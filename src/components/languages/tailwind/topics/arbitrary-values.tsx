'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Brackets, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ArbitraryValues() {

  const basicHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <div class="bg-blue-500 text-white p-4 rounded w-[137px]">
    w-[137px] - Custom width
  </div>
  
  <div class="bg-purple-500 text-white p-4 rounded h-[73px]">
    h-[73px] - Custom height
  </div>
  
  <div class="bg-[#ff6b6b] text-white p-4 rounded">
    bg-[#ff6b6b] - Hex color
  </div>
</div>`;

  const colorsHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-4">
  <div class="bg-[#1da1f2] text-white p-4 rounded">
    bg-[#1da1f2] - Twitter blue
  </div>
  
  <div class="bg-[rgb(255,107,107)] text-white p-4 rounded">
    bg-[rgb(255,107,107)] - RGB
  </div>
  
  <div class="text-[#ff6b6b] bg-white dark:bg-slate-800 p-4 rounded font-bold">
    text-[#ff6b6b] - Custom text color
  </div>
</div>`;

  const sizingHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8 space-y-6">
  <div class="bg-white dark:bg-slate-800 p-4 rounded">
    <div class="w-[calc(100%-2rem)] bg-green-500 text-white p-3 rounded">
      w-[calc(100%-2rem)]
    </div>
  </div>
  
  <div class="bg-white dark:bg-slate-800 p-4 rounded">
    <div class="max-w-[42rem] bg-green-500 text-white p-3 rounded mx-auto">
      max-w-[42rem]
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Brackets}
        category="Tailwind CSS · Advanced Features"
        title="Arbitrary Values"
        description="Use custom values with bracket notation"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Brackets className="w-8 h-8 text-white" />
            </div>
            Bracket Notation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Arbitrary Syntax</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use square brackets for one-off custom values: 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">w-[137px]</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">bg-[#1da1f2]</code>
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Common Use Cases:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { example: 'w-[137px]', use: 'Custom pixel width' },
                { example: 'bg-[#ff6b6b]', use: 'Hex color' },
                { example: 'text-[17px]', use: 'Custom font size' },
                { example: 'top-[117px]', use: 'Custom position' },
                { example: 'grid-cols-[200px_1fr]', use: 'Custom grid' },
                { example: 'w-[calc(100%-2rem)]', use: 'CSS calc' }
              ].map(item => (
                <div key={item.example} className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 border border-purple-300 dark:border-purple-700">
                  <code className="font-mono text-sm text-purple-900 dark:text-purple-100">{item.example}</code>
                  <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={basicHTML}
            title="Basic Arbitrary Values"
            description="Custom widths, heights, and colors"
            colorTheme="purple"
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
            Custom Colors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorsHTML}
            title="Arbitrary Color Values"
            description="Use any color format"
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
            Advanced Sizing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={sizingHTML}
            title="Calc and Custom Sizes"
            description="CSS calc() works too"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Brackets className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Arbitrary Value Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use for one-off values that don't need configuration</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Prefer config file for repeated values</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works with any utility: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">hover:bg-[#1da1f2]</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
