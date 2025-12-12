'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Eye, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SrOnly() {

  const srOnlyHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="max-w-2xl mx-auto space-y-6">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Screen Reader Content</h3>
      
      <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        <span class="sr-only">Close modal</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
        The X icon has hidden text "Close modal" for screen readers
      </p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Skip to Content Link</h3>
      <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
        Skip to main content
      </a>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Try pressing Tab - the skip link appears on focus!
      </p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Form Label</h3>
      <div class="relative">
        <label for="search" class="sr-only">Search</label>
        <input 
          type="search" 
          id="search"
          placeholder="Search..."
          class="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-slate-900 dark:text-white"
        />
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Label is hidden but accessible to screen readers
      </p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Eye}
        category="Tailwind CSS · Utilities"
        title="Screen Reader Only"
        description="sr-only and not-sr-only for accessibility"
        colorTheme="green"
      />

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            Screen Reader Only
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Accessibility Text</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Hide content visually while keeping it accessible to screen readers
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={srOnlyHTML}
            title="SR-Only Examples"
            description="Content hidden from view but accessible"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-emerald-500 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            SR-Only Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                util: 'sr-only', 
                desc: 'Hide visually, keep for screen readers',
                css: 'position: absolute; width: 1px; height: 1px; clip: rect(0,0,0,0);'
              },
              { 
                util: 'not-sr-only', 
                desc: 'Undo sr-only (make visible)',
                css: 'position: static; width: auto; height: auto; clip: auto;'
              },
              { 
                util: 'focus:not-sr-only', 
                desc: 'Show on focus (skip links)',
                css: 'Visible when focused via keyboard'
              }
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                <code className="font-mono text-sm text-emerald-900 dark:text-emerald-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded text-emerald-800 dark:text-emerald-200 block">
                  {item.css}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-teal-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                use: 'Icon Button Labels',
                example: '<button><span class="sr-only">Close</span><X /></button>',
                why: 'Screen readers need text descriptions of icon buttons'
              },
              {
                use: 'Skip Links',
                example: '<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>',
                why: 'Let keyboard users skip repetitive navigation'
              },
              {
                use: 'Form Labels',
                example: '<label class="sr-only">Email</label>',
                why: 'When placeholder alone isn\'t sufficient'
              },
              {
                use: 'Status Messages',
                example: '<span class="sr-only">Loading...</span>',
                why: 'Announce dynamic content changes'
              }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">{item.use}</h4>
                <code className="text-xs bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded text-teal-800 dark:text-teal-200 block mb-2">
                  {item.example}
                </code>
                <p className="text-xs text-teal-700 dark:text-teal-300">{item.why}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <Eye className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">SR-Only Best Practices</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use for icon-only buttons: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">&lt;span class="sr-only"&gt;Close&lt;/span&gt;</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Skip links pattern: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">sr-only focus:not-sr-only</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Never use <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">display: none</code> - screen readers skip it</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test with actual screen readers (NVDA, VoiceOver, JAWS)</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
