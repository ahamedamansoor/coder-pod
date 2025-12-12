'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Hash, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function PseudoVariants() {

  const pseudoHTML = `<div class="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-950 dark:to-rose-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Pseudo Variants Demo</h3>
    
    <div>
      <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">List Styling:</h4>
      <ul class="space-y-2">
        <li class="first:text-pink-600 first:font-bold text-gray-700 dark:text-gray-300">First item (pink & bold)</li>
        <li class="last:text-rose-600 last:font-bold text-gray-700 dark:text-gray-300">Middle item</li>
        <li class="last:text-rose-600 last:font-bold text-gray-700 dark:text-gray-300">Last item (rose & bold)</li>
      </ul>
    </div>
    
    <div>
      <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">Odd/Even Rows:</h4>
      <div class="space-y-1">
        <div class="odd:bg-pink-100 even:bg-rose-100 dark:odd:bg-pink-900/20 dark:even:bg-rose-900/20 p-2 rounded">Row 1 (odd)</div>
        <div class="odd:bg-pink-100 even:bg-rose-100 dark:odd:bg-pink-900/20 dark:even:bg-rose-900/20 p-2 rounded">Row 2 (even)</div>
        <div class="odd:bg-pink-100 even:bg-rose-100 dark:odd:bg-pink-900/20 dark:even:bg-rose-900/20 p-2 rounded">Row 3 (odd)</div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Hash}
        category="Tailwind CSS · Advanced Patterns"
        title="Pseudo Variants"
        description="First, last, odd, even, and more pseudo-class utilities"
        colorTheme="pink"
      />

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Hash className="w-8 h-8 text-white" />
            </div>
            Pseudo-class Styling
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
            <Lightbulb className="w-5 h-5 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Pseudo Variants</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Style elements based on their position or state with CSS pseudo-classes
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={pseudoHTML}
            title="Pseudo Examples"
            description="first:, last:, odd:, even: variants in action"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-rose-500 rounded-lg">
              <Hash className="w-6 h-6 text-white" />
            </div>
            Available Pseudo Variants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { variant: 'first:', desc: 'First child element' },
              { variant: 'last:', desc: 'Last child element' },
              { variant: 'odd:', desc: 'Odd numbered children' },
              { variant: 'even:', desc: 'Even numbered children' },
              { variant: 'first-of-type:', desc: 'First of its type' },
              { variant: 'last-of-type:', desc: 'Last of its type' },
              { variant: 'only:', desc: 'Only child' },
              { variant: 'empty:', desc: 'No children' },
              { variant: 'before:', desc: '::before pseudo-element' },
              { variant: 'after:', desc: '::after pseudo-element' }
            ].map((item, i) => (
              <div key={i} className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-3 border border-rose-200 dark:border-rose-800">
                <code className="font-mono text-sm text-rose-900 dark:text-rose-100 font-bold">{item.variant}</code>
                <p className="text-xs text-rose-700 dark:text-rose-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
        <Hash className="w-5 h-5 text-pink-600" />
        <AlertTitle className="text-2xl text-pink-900 dark:text-pink-100">Pseudo Tips</AlertTitle>
        <AlertDescription className="text-pink-800 dark:text-pink-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">odd:</code> and <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">even:</code> for alternating table rows</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with other modifiers: <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">first:hover:bg-blue-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">before:</code> and <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">after:</code> need <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">content-['']</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
