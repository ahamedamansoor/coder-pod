'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function GradientStops() {

  const gradientHTML = `<div class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-950 dark:to-slate-950 p-8">
  <div class="max-w-4xl mx-auto space-y-6">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gradient Examples</h3>
    
    <div class="space-y-4">
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Two Colors (from-to)</p>
        <div class="h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"></div>
        <code class="text-xs text-gray-600 dark:text-gray-400">from-blue-500 to-purple-500</code>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Three Colors (from-via-to)</p>
        <div class="h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl"></div>
        <code class="text-xs text-gray-600 dark:text-gray-400">from-pink-500 via-purple-500 to-blue-500</code>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Multiple Via Points</p>
        <div class="h-24 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-xl"></div>
        <code class="text-xs text-gray-600 dark:text-gray-400">from-red-500 via-yellow-500 via-green-500 to-blue-500</code>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With Opacity</p>
        <div class="h-24 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl border border-gray-300 dark:border-gray-700"></div>
        <code class="text-xs text-gray-600 dark:text-gray-400">from-cyan-500/50 to-blue-500/50</code>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Transparent to Color</p>
        <div class="h-24 bg-gradient-to-r from-transparent to-emerald-500 rounded-xl border border-gray-300 dark:border-gray-700"></div>
        <code class="text-xs text-gray-600 dark:text-gray-400">from-transparent to-emerald-500</code>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="Tailwind CSS · Gradients & Images"
        title="Gradient Color Stops"
        description="Linear gradients with from, via, to utilities"
        colorTheme="pink"
      />

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            Gradient Color Stops
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
            <Lightbulb className="w-5 h-5 text-pink-600" />
            <AlertTitle className="text-pink-900 dark:text-pink-100">Beautiful Backgrounds</AlertTitle>
            <AlertDescription className="text-pink-800 dark:text-pink-200">
              Create smooth color transitions with gradient utilities
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={gradientHTML}
            title="Gradient Examples"
            description="Various gradient color stop combinations"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-rose-500 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            Gradient Stop Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'from-{color}', desc: 'Starting color', example: 'from-blue-500' },
              { util: 'via-{color}', desc: 'Middle color(s)', example: 'via-purple-500' },
              { util: 'to-{color}', desc: 'Ending color', example: 'to-pink-500' },
              { util: 'from-{color}/{opacity}', desc: 'Start with opacity', example: 'from-blue-500/50' },
              { util: 'via-{color}/{opacity}', desc: 'Middle with opacity', example: 'via-purple-500/75' },
              { util: 'to-{color}/{opacity}', desc: 'End with opacity', example: 'to-pink-500/25' }
            ].map((item, i) => (
              <div key={i} className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-4 border border-rose-200 dark:border-rose-800">
                <code className="font-mono text-sm text-rose-900 dark:text-rose-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-rose-700 dark:text-rose-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-rose-100 dark:bg-rose-900 px-2 py-1 rounded text-rose-800 dark:text-rose-200">
                  {item.example}
                </code>
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
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Two-Color Gradient:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  Simple gradient
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Three-Color Gradient:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
  Three-color gradient
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Fade to Transparent:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="bg-gradient-to-b from-black/50 to-transparent">
  Overlay effect
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-fuchsia-200 dark:border-fuchsia-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-fuchsia-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Pro Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { tip: 'Multiple Via', desc: 'You can use via-* multiple times for complex gradients' },
              { tip: 'Opacity Control', desc: 'Add /50, /75 etc. for transparent gradients' },
              { tip: 'Text Gradients', desc: 'Combine with bg-clip-text for gradient text' },
              { tip: 'Overlays', desc: 'Use from-transparent for image overlays' }
            ].map((item, i) => (
              <div key={i} className="bg-fuchsia-50 dark:bg-fuchsia-950/20 rounded-lg p-3 border border-fuchsia-200 dark:border-fuchsia-800 flex items-start gap-2">
                <span className="text-lg">💡</span>
                <div>
                  <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 text-sm mb-1">{item.tip}</h4>
                  <p className="text-xs text-fuchsia-700 dark:text-fuchsia-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
        <Palette className="w-5 h-5 text-pink-600" />
        <AlertTitle className="text-2xl text-pink-900 dark:text-pink-100">Gradient Stop Tips</AlertTitle>
        <AlertDescription className="text-pink-800 dark:text-pink-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with direction: <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">bg-gradient-to-r from-* to-*</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use via for middle colors: <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">from-* via-* to-*</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Add opacity with /: <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">from-blue-500/50</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-pink-200 dark:bg-pink-900 px-2 py-1 rounded">from-transparent</code> for fade effects</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
