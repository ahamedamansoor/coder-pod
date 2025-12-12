'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TextBalance() {

  const balanceHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4">Without text-balance</h3>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white max-w-lg">
        This is a long headline that might break awkwardly
      </h2>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-green-600 dark:text-green-400 mb-4">With text-balance</h3>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-balance max-w-lg">
        This is a long headline that might break awkwardly
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">Notice better line distribution</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 class="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4">text-pretty for paragraphs</h3>
      <p class="text-gray-700 dark:text-gray-300 text-pretty max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Type}
        category="Tailwind CSS · Modern CSS"
        title="Text Balance"
        description="Improved typography with text-balance and text-pretty"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <Type className="w-8 h-8 text-white" />
            </div>
            Text Balance & Pretty
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Better Typography (Tailwind 3.4+)</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Prevent awkward line breaks and orphaned words
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={balanceHTML}
            title="Text Balance Examples"
            description="Better line distribution in headlines"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Type className="w-6 h-6 text-white" />
            </div>
            Available Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                util: 'text-balance', 
                desc: 'Balance text across multiple lines',
                best: 'Headlines and short text blocks',
                css: 'text-wrap: balance'
              },
              { 
                util: 'text-pretty', 
                desc: 'Prevent orphans (single words on last line)',
                best: 'Paragraphs and body text',
                css: 'text-wrap: pretty'
              },
              { 
                util: 'text-wrap', 
                desc: 'Normal text wrapping (default)',
                best: 'Most content',
                css: 'text-wrap: wrap'
              },
              { 
                util: 'text-nowrap', 
                desc: 'Prevent text from wrapping',
                best: 'Single-line content',
                css: 'text-wrap: nowrap'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100 font-bold block mb-2">{item.util}</code>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">{item.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                    {item.best}
                  </span>
                  <code className="text-purple-600 dark:text-purple-400">{item.css}</code>
                </div>
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
            When to Use
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                scenario: 'Headlines', 
                use: 'text-balance',
                reason: 'Better visual balance',
                example: '<h1 class="text-balance">'
              },
              { 
                scenario: 'Card Titles', 
                use: 'text-balance',
                reason: 'Prevent awkward breaks',
                example: '<h3 class="text-balance">'
              },
              { 
                scenario: 'Paragraphs', 
                use: 'text-pretty',
                reason: 'No orphaned words',
                example: '<p class="text-pretty">'
              },
              { 
                scenario: 'Body Text', 
                use: 'text-pretty',
                reason: 'Improved readability',
                example: '<article class="text-pretty">'
              }
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">{item.scenario}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-pink-700 dark:text-pink-300">Use:</span>
                    <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded text-pink-800 dark:text-pink-200">
                      {item.use}
                    </code>
                  </div>
                  <p className="text-xs text-pink-700 dark:text-pink-300">{item.reason}</p>
                  <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded text-pink-800 dark:text-pink-200 block">
                    {item.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-violet-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Browser Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/20">
            <Lightbulb className="w-5 h-5 text-violet-600" />
            <AlertTitle className="text-violet-900 dark:text-violet-100">Modern Feature</AlertTitle>
            <AlertDescription className="text-violet-800 dark:text-violet-200">
              <div className="space-y-2 mt-2">
                <p>✅ Chrome 114+</p>
                <p>✅ Edge 114+</p>
                <p>⚠️ Firefox (in development)</p>
                <p>⚠️ Safari (in development)</p>
                <p className="text-sm mt-3">Degrades gracefully in unsupported browsers</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <Type className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Text Balance Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">text-balance</code> for headlines and titles</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">text-pretty</code> for paragraphs and body text</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works best with short to medium text blocks (not long articles)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Progressive enhancement - degrades gracefully in older browsers</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
