'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Lightbulb, ArrowRight, Download } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function FontManagement() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileText}
        category="Tailwind CSS · Typography"
        title="Font Management"
        description="Custom fonts, Google Fonts, and font optimization"
        colorTheme="orange"
      />

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            Custom Font Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Font Configuration</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Add custom fonts to your Tailwind configuration
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Step 1: Configure tailwind.config.js</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Playfair Display', 'serif'],
      }
    }
  }
}`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Step 2: Import Font in CSS</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

/* Or use @font-face for local fonts */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Step 3: Use in HTML</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<h1 class="font-display text-4xl">Display Font</h1>
<p class="font-sans">Body text in Sans</p>
<code class="font-mono">Code in Monospace</code>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-amber-500 rounded-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            Google Fonts Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Option 1: Link in HTML</h4>
            <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">`}
            </pre>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Option 2: @import in CSS</h4>
            <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Font Loading Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: 'Use font-display: swap',
                desc: 'Shows fallback font immediately, swaps when custom font loads',
                code: 'font-display: swap'
              },
              {
                title: 'Preconnect to Google Fonts',
                desc: 'Speeds up font loading with early DNS lookup',
                code: '<link rel="preconnect" href="https://fonts.googleapis.com">'
              },
              {
                title: 'Subset fonts',
                desc: 'Only load character sets you need',
                code: '&subset=latin'
              },
              {
                title: 'Limit font weights',
                desc: 'Only include weights you actually use',
                code: 'wght@400;700 (not 100-900)'
              },
              {
                title: 'Self-host when possible',
                desc: 'Better performance and privacy',
                code: 'Use WOFF2 format'
              }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">{item.title}</h4>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2 ml-8">{item.desc}</p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200 ml-8 block">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
        <FileText className="w-5 h-5 text-orange-600" />
        <AlertTitle className="text-2xl text-orange-900 dark:text-orange-100">Font Management Tips</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always provide fallback fonts: <code className="bg-orange-200 dark:bg-orange-900 px-2 py-1 rounded">font-sans: ['Inter', 'system-ui']</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-orange-200 dark:bg-orange-900 px-2 py-1 rounded">font-display: swap</code> to prevent invisible text</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>WOFF2 format is recommended for best compression</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Test font loading performance with Lighthouse</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
