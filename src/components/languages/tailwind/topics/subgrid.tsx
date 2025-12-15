'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FrontendCodePreview } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Grid3x3, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const subgridExampleHTML = `
<div class="min-h-[360px] grid grid-cols-3 gap-4 rounded-3xl bg-slate-950 p-6 text-white shadow-2xl">
  <div class="rounded-2xl border border-white/10 bg-slate-900 p-4">
    <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Parent grid</p>
    <div class="mt-4 grid grid-cols-3 gap-3 text-center text-white text-sm">
      <div class="h-12 rounded-2xl bg-fuchsia-500/90 flex items-center justify-center">1</div>
      <div class="h-12 rounded-2xl bg-pink-500/90 flex items-center justify-center">2</div>
      <div class="h-12 rounded-2xl bg-teal-500/90 flex items-center justify-center">3</div>
    </div>
  </div>
  <div class="col-span-3 grid gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/40 to-purple-600/40 p-4">
    <p class="text-xs uppercase tracking-[0.3em] text-white/70">Child subgrid</p>
    <div class="grid grid-cols-subgrid gap-3">
      <div class="h-16 rounded-2xl bg-white/50 flex items-center justify-center">Aligned col 1</div>
      <div class="h-16 rounded-2xl bg-white/60 flex items-center justify-center">Aligned col 2</div>
      <div class="h-16 rounded-2xl bg-white/70 flex items-center justify-center">Aligned col 3</div>
    </div>
    <div class="grid grid-rows-subgrid gap-3">
      <div class="h-12 rounded-2xl bg-slate-900/60 border border-white/30 flex items-center justify-center">Row span 1</div>
      <div class="h-12 rounded-2xl bg-slate-900/80 border border-white/30 flex items-center justify-center">Row span 2</div>
      <div class="h-12 rounded-2xl bg-slate-900/60 border border-white/30 flex items-center justify-center">Row span 3</div>
    </div>
  </div>
</div>
`;

export default function Subgrid() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Grid3x3}
        category="Tailwind CSS · Modern CSS"
        title="Subgrid"
        description="CSS Subgrid with Tailwind utilities"
        colorTheme="orange"
      />

      <Card className="border-2 border-fuchsia-200 dark:border-fuchsia-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl">
              <Grid3x3 className="w-8 h-8 text-white" />
            </div>
            CSS Subgrid
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-fuchsia-200 dark:border-fuchsia-800 bg-fuchsia-50 dark:bg-fuchsia-950/20">
            <Lightbulb className="w-5 h-5 text-fuchsia-600" />
            <AlertTitle className="text-fuchsia-900 dark:text-fuchsia-100">Advanced Grid Feature (Tailwind 3.4+)</AlertTitle>
            <AlertDescription className="text-fuchsia-800 dark:text-fuchsia-200">
              Allow nested grids to inherit parent grid tracks
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">What is Subgrid?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Subgrid allows a grid item to adopt the row or column tracks from its parent grid, 
              enabling perfect alignment across nested grid levels.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Subgrid Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                util: 'grid-cols-subgrid', 
                desc: 'Inherit parent column tracks',
                css: 'grid-template-columns: subgrid'
              },
              { 
                util: 'grid-rows-subgrid', 
                desc: 'Inherit parent row tracks',
                css: 'grid-template-rows: subgrid'
              }
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                <code className="font-mono text-sm text-pink-900 dark:text-pink-100 font-bold block mb-2">{item.util}</code>
                <p className="text-sm text-pink-700 dark:text-pink-300 mb-2">{item.desc}</p>
                <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded text-pink-800 dark:text-pink-200">
                  {item.css}
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
            Example Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Parent Grid -->
<div class="grid grid-cols-3 gap-4">
  
  <!-- Child inherits parent columns -->
  <div class="col-span-3 grid grid-cols-subgrid gap-4">
    <div>Aligned to parent column 1</div>
    <div>Aligned to parent column 2</div>
    <div>Aligned to parent column 3</div>
  </div>
  
</div>`}
          </pre>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Subgrid Live Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={subgridExampleHTML}
            title="Subgrid alignment demo"
            description="Nested grids inheriting both columns and rows from the parent."
            colorTheme="cyan"
            styleLanguage="tailwind"
            previewHeight="420px"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-violet-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { use: 'Card Layouts', desc: 'Align content across cards', icon: '🎴' },
              { use: 'Forms', desc: 'Align labels and inputs in nested sections', icon: '📝' },
              { use: 'Tables', desc: 'Complex table structures', icon: '📊' },
              { use: 'Dashboards', desc: 'Align widgets across rows', icon: '📈' }
            ].map((item, i) => (
              <div key={i} className="bg-violet-50 dark:bg-violet-950/20 rounded-lg p-3 border border-violet-200 dark:border-violet-800">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-violet-900 dark:text-violet-100 text-sm">{item.use}</h4>
                    <p className="text-xs text-violet-700 dark:text-violet-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Browser Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Good Support</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <div className="space-y-2 mt-2">
                <p>✅ Chrome 117+</p>
                <p>✅ Edge 117+</p>
                <p>✅ Firefox 71+</p>
                <p>✅ Safari 16+</p>
                <p className="text-sm mt-3">Widely supported in modern browsers</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="border-2 border-fuchsia-200 dark:border-fuchsia-800 bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20">
        <Grid3x3 className="w-5 h-5 text-fuchsia-600" />
        <AlertTitle className="text-2xl text-fuchsia-900 dark:text-fuchsia-100">Subgrid Tips</AlertTitle>
        <AlertDescription className="text-fuchsia-800 dark:text-fuchsia-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-fuchsia-200 dark:bg-fuchsia-900 px-2 py-1 rounded">grid-cols-subgrid</code> to inherit parent columns</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for aligning content across nested card layouts</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Child must span the columns it wants to inherit</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Check browser support - fallback to regular grid if needed</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
