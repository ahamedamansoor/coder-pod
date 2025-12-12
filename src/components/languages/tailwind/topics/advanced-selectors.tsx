'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AdvancedSelectors() {

  const arbitraryHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Arbitrary Value Examples</h3>
    
    <div class="bg-[#bada55] text-white p-4 rounded-lg">
      Custom hex color: bg-[#bada55]
    </div>
    
    <div class="w-[450px] h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
      Custom dimensions: w-[450px] h-[100px]
    </div>
    
    <div class="text-[22px] font-[600] text-cyan-600">
      Custom font: text-[22px] font-[600]
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Target}
        category="Tailwind CSS · Advanced Patterns"
        title="Advanced Selectors"
        description="Arbitrary values, custom variants, and complex selectors"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            Arbitrary Values
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Custom Values</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Use square brackets to apply any custom value: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">bg-[#bada55]</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={arbitraryHTML}
            title="Arbitrary Examples"
            description="Custom colors, sizes, and values"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />

          <div>
            <h3 className="text-lg font-bold mb-3">Syntax Examples:</h3>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="bg-[#1da1f2]">Custom color</div>
<div class="w-[789px]">Custom width</div>
<div class="top-[117px]">Custom position</div>
<div class="text-[14px]">Custom font size</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            Arbitrary Variants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Use arbitrary variants for custom selectors:</p>
          <div className="space-y-3">
            {[
              { code: '[&>*]:p-4', desc: 'All direct children' },
              { code: '[&_p]:text-blue-500', desc: 'All descendant paragraphs' },
              { code: '[&:nth-child(3)]:bg-red-500', desc: 'Third child' },
              { code: '[&[open]]:bg-white', desc: 'When open attribute present' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <code className="font-mono text-sm text-blue-900 dark:text-blue-100 font-bold block mb-1">{item.code}</code>
                <p className="text-xs text-blue-700 dark:text-blue-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: 'Brand Colors', example: 'bg-[#ff6b6b]' },
              { title: 'Exact Spacing', example: 'mt-[13px]' },
              { title: 'Custom Angles', example: 'rotate-[17deg]' },
              { title: 'CSS Variables', example: 'bg-[var(--primary)]' },
              { title: 'Complex Selectors', example: '[&>li]:mb-2' },
              { title: 'Media Queries', example: '[@media(min-width:800px)]:flex' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <div className="font-bold text-purple-900 dark:text-purple-100 mb-1">{item.title}</div>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Target className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Advanced Selector Tips</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">[value]</code> for any custom value not in config</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Arbitrary variants: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">[&>*]:</code> for complex selectors</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Prefer config values for consistency, use arbitrary for one-offs</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
