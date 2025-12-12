'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Sparkles, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Filters() {

  const filtersHTML = `<div class="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 p-8">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Filter Effects</h3>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" class="w-full h-48 object-cover rounded-lg blur-sm" alt="Blur"/>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">blur-sm</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" class="w-full h-48 object-cover rounded-lg grayscale" alt="Grayscale"/>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">grayscale</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" class="w-full h-48 object-cover rounded-lg brightness-150" alt="Brightness"/>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">brightness-150</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" class="w-full h-48 object-cover rounded-lg contrast-200" alt="Contrast"/>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">contrast-200</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" class="w-full h-48 object-cover rounded-lg sepia" alt="Sepia"/>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">sepia</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" class="w-full h-48 object-cover rounded-lg hue-rotate-90" alt="Hue Rotate"/>
        <p class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">hue-rotate-90</p>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Sparkles}
        category="Tailwind CSS · Filters & Effects"
        title="Filters"
        description="Blur, brightness, contrast, and more filter effects"
        colorTheme="violet"
      />

      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            CSS Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20">
            <Lightbulb className="w-5 h-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Visual Effects</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              Apply CSS filter effects to any element with simple utility classes
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={filtersHTML}
            title="Filter Examples"
            description="Various filter effects on images"
            colorTheme="violet"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            Available Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { filter: 'blur-{amount}', values: 'none, sm, md, lg, xl, 2xl, 3xl', example: 'blur-md' },
              { filter: 'brightness-{amount}', values: '0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200', example: 'brightness-150' },
              { filter: 'contrast-{amount}', values: '0, 50, 75, 100, 125, 150, 200', example: 'contrast-125' },
              { filter: 'grayscale', values: 'grayscale, grayscale-0', example: 'grayscale' },
              { filter: 'hue-rotate-{deg}', values: '0, 15, 30, 60, 90, 180', example: 'hue-rotate-90' },
              { filter: 'invert', values: 'invert, invert-0', example: 'invert' },
              { filter: 'saturate-{amount}', values: '0, 50, 100, 150, 200', example: 'saturate-150' },
              { filter: 'sepia', values: 'sepia, sepia-0', example: 'sepia' },
              { filter: 'drop-shadow-{size}', values: 'sm, md, lg, xl, 2xl, none', example: 'drop-shadow-lg' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100 font-bold block mb-2">{item.filter}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300 mb-2">{item.values}</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Combining Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Stack multiple filters for complex effects:</p>
          <div className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
            <pre className="text-sm overflow-x-auto">
              <code className="text-pink-900 dark:text-pink-100">{`<img class="blur-sm brightness-110 contrast-125" />`}</code>
            </pre>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
            <pre className="text-sm overflow-x-auto">
              <code className="text-pink-900 dark:text-pink-100">{`<div class="grayscale hover:grayscale-0 transition" />`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
        <Sparkles className="w-5 h-5 text-violet-600" />
        <AlertTitle className="text-2xl text-violet-900 dark:text-violet-100">Filter Tips</AlertTitle>
        <AlertDescription className="text-violet-800 dark:text-violet-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">transition</code> for smooth hover effects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">hover:</code> prefix: <code className="bg-violet-200 dark:bg-violet-900 px-2 py-1 rounded">hover:grayscale-0</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Filters can impact performance on older devices</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Stack multiple filters by adding more classes</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
