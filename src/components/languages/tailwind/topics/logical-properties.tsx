'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LogicalProperties() {

  const logicalHTML = `<div class="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950 dark:to-orange-950 p-8">
  <div class="max-w-3xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6" dir="ltr">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">LTR (English) - start = left</h3>
      <div class="ps-8 border-s-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4 rounded">
        <p class="text-gray-900 dark:text-white">ps-8 (padding-inline-start)</p>
        <p class="text-gray-700 dark:text-gray-300">border-s-4 (border-inline-start)</p>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6" dir="rtl">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">RTL (Arabic, Hebrew) - start = right</h3>
      <div class="ps-8 border-s-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4 rounded">
        <p class="text-gray-900 dark:text-white">ps-8 (padding-inline-start)</p>
        <p class="text-gray-700 dark:text-gray-300">border-s-4 (border-inline-start)</p>
      </div>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Comparison</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-red-50 dark:bg-red-950/20 p-4 rounded border border-red-200 dark:border-red-800">
          <p class="font-bold text-red-900 dark:text-red-100 mb-2">Physical (ml-4)</p>
          <p class="text-sm text-red-700 dark:text-red-300">Always left, breaks in RTL</p>
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 p-4 rounded border border-green-200 dark:border-green-800">
          <p class="font-bold text-green-900 dark:text-green-100 mb-2">Logical (ms-4)</p>
          <p class="text-sm text-green-700 dark:text-green-300">Adapts to text direction</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Globe}
        category="Tailwind CSS · Utilities"
        title="Logical Properties"
        description="Start/end utilities for RTL support"
        colorTheme="amber"
      />

      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            Logical Properties
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Internationalization</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Use start/end instead of left/right for automatic RTL support
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={logicalHTML}
            title="Logical vs Physical"
            description="See how logical properties adapt to text direction"
            colorTheme="amber"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            Physical vs Logical
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-orange-900 dark:text-orange-100">❌ Physical (Fixed)</h4>
              {[
                { physical: 'ml-4', desc: 'margin-left' },
                { physical: 'mr-4', desc: 'margin-right' },
                { physical: 'pl-4', desc: 'padding-left' },
                { physical: 'pr-4', desc: 'padding-right' },
                { physical: 'border-l-4', desc: 'border-left' },
                { physical: 'border-r-4', desc: 'border-right' }
              ].map((item, i) => (
                <div key={i} className="bg-orange-50 dark:bg-orange-950/20 rounded p-2 border border-orange-200 dark:border-orange-800">
                  <code className="text-sm text-orange-900 dark:text-orange-100 font-mono">{item.physical}</code>
                  <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100">✅ Logical (Adaptive)</h4>
              {[
                { logical: 'ms-4', desc: 'margin-inline-start' },
                { logical: 'me-4', desc: 'margin-inline-end' },
                { logical: 'ps-4', desc: 'padding-inline-start' },
                { logical: 'pe-4', desc: 'padding-inline-end' },
                { logical: 'border-s-4', desc: 'border-inline-start' },
                { logical: 'border-e-4', desc: 'border-inline-end' }
              ].map((item, i) => (
                <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded p-2 border border-green-200 dark:border-green-800">
                  <code className="text-sm text-green-900 dark:text-green-100 font-mono">{item.logical}</code>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            When to Use Logical Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { scenario: 'Multilingual Apps', use: 'Always use logical', reason: 'Automatic RTL support' },
              { scenario: 'Text Alignment', use: 'text-start, text-end', reason: 'Instead of left/right' },
              { scenario: 'Margins & Padding', use: 'ms-*, me-*, ps-*, pe-*', reason: 'Direction-aware spacing' },
              { scenario: 'Borders', use: 'border-s-*, border-e-*', reason: 'Adaptive borders' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">{item.scenario}</h4>
                  <code className="text-xs bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">
                    {item.use}
                  </code>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <Globe className="w-5 h-5 text-amber-600" />
        <AlertTitle className="text-2xl text-amber-900 dark:text-amber-100">Logical Properties Tips</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-amber-200 dark:bg-amber-900 px-2 py-1 rounded">start/end</code> instead of <code className="bg-amber-200 dark:bg-amber-900 px-2 py-1 rounded">left/right</code> for internationalization</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add <code className="bg-amber-200 dark:bg-amber-900 px-2 py-1 rounded">dir="rtl"</code> to HTML for RTL languages</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test with both LTR and RTL to ensure proper layout</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Examples: <code className="bg-amber-200 dark:bg-amber-900 px-2 py-1 rounded">ms-4</code>, <code className="bg-amber-200 dark:bg-amber-900 px-2 py-1 rounded">ps-6</code>, <code className="bg-amber-200 dark:bg-amber-900 px-2 py-1 rounded">border-s-2</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
