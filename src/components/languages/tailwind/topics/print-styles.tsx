'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Printer, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function PrintStyles() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Printer}
        category="Tailwind CSS · Printing"
        title="Print Styles"
        description="print: variant for print-specific styling"
        colorTheme="gray"
      />

      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl">
              <Printer className="w-8 h-8 text-white" />
            </div>
            Print Styles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/20">
            <Lightbulb className="w-5 h-5 text-gray-600" />
            <AlertTitle className="text-gray-900 dark:text-gray-100">Print Optimization</AlertTitle>
            <AlertDescription className="text-gray-800 dark:text-gray-200">
              Style elements differently for print output and PDFs
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is the Print Variant?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">print:</code> variant 
              lets you apply styles only when the page is printed or saved as PDF.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-slate-500 rounded-lg">
              <Printer className="w-6 h-6 text-white" />
            </div>
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { use: 'Hide Navigation', code: 'print:hidden', desc: 'Hide menus and navigation for print' },
              { use: 'Remove Colors', code: 'print:text-black', desc: 'Use black text to save ink' },
              { use: 'Show URLs', code: 'print:block', desc: 'Show hidden link URLs' },
              { use: 'Page Breaks', code: 'print:break-after-page', desc: 'Force page breaks' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-950/20 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{item.use}</h4>
                  <code className="text-xs bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded text-slate-800 dark:text-slate-200">
                    {item.code}
                  </code>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Example Implementation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Hide navigation when printing -->
<nav class="print:hidden">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<!-- Remove background colors for print -->
<div class="bg-blue-500 print:bg-white print:text-black">
  Content
</div>

<!-- Show full URLs when printing -->
<a href="/page" class="print:after:content-['_('+attr(href)+')']">
  Link
</a>

<!-- Add page breaks -->
<section class="print:break-after-page">
  Section 1
</section>
<section>
  Section 2
</section>`}
          </pre>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { tip: 'Hide Non-Essential UI', desc: 'Remove navigation, sidebars, ads' },
              { tip: 'Use Black Text', desc: 'Save ink by using print:text-black' },
              { tip: 'Remove Backgrounds', desc: 'Use print:bg-white to save ink' },
              { tip: 'Show Link URLs', desc: 'Make links useful in printed format' },
              { tip: 'Page Breaks', desc: 'Control where pages break' },
              { tip: 'Test Before Deploy', desc: 'Always preview print layout' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800 flex items-start gap-2">
                <span className="text-lg">💡</span>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">{item.tip}</h4>
                  <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Printer className="w-6 h-6 text-white" />
            </div>
            Testing Print Styles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">How to Test:</h4>
            <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li>1. Open your page in the browser</li>
              <li>2. Press <kbd className="px-2 py-1 bg-purple-200 dark:bg-purple-900 rounded">Ctrl/Cmd + P</kbd></li>
              <li>3. Check the print preview</li>
              <li>4. Verify hidden elements are gone</li>
              <li>5. Check colors and page breaks</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20">
        <Printer className="w-5 h-5 text-gray-600" />
        <AlertTitle className="text-2xl text-gray-900 dark:text-gray-100">Print Styles Tips</AlertTitle>
        <AlertDescription className="text-gray-800 dark:text-gray-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Hide UI: <code className="bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded">print:hidden</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Save ink: <code className="bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded">print:bg-white print:text-black</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Page breaks: <code className="bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded">print:break-after-page</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always test with Ctrl/Cmd + P before deployment</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
