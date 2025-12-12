'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ScrollSnap() {

  const scrollSnapHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="max-w-4xl mx-auto space-y-8">
    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Horizontal Snap Scroll</h3>
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4">
        <div class="snap-center shrink-0 w-80 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Slide 1
        </div>
        <div class="snap-center shrink-0 w-80 h-64 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Slide 2
        </div>
        <div class="snap-center shrink-0 w-80 h-64 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Slide 3
        </div>
        <div class="snap-center shrink-0 w-80 h-64 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Slide 4
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Scroll horizontally - snaps to center</p>
    </div>
    
    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Vertical Snap Scroll</h3>
      <div class="h-96 overflow-y-auto snap-y snap-mandatory space-y-4">
        <div class="snap-start h-80 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Section 1
        </div>
        <div class="snap-start h-80 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Section 2
        </div>
        <div class="snap-start h-80 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          Section 3
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Scroll vertically - snaps to start</p>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="Tailwind CSS · Modern CSS"
        title="Scroll Snap"
        description="Smooth scrolling experiences with snap points"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Move className="w-8 h-8 text-white" />
            </div>
            Scroll Snap
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Smooth Scrolling</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Create carousel-like scrolling with CSS scroll snap
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={scrollSnapHTML}
            title="Scroll Snap Examples"
            description="Horizontal and vertical snap scrolling"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Move className="w-6 h-6 text-white" />
            </div>
            Snap Container Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'snap-none', desc: 'Disable snap scrolling', when: 'Default' },
              { util: 'snap-x', desc: 'Horizontal snap scrolling', when: 'Carousels' },
              { util: 'snap-y', desc: 'Vertical snap scrolling', when: 'Full-page sections' },
              { util: 'snap-both', desc: 'Both directions', when: 'Image galleries' },
              { util: 'snap-mandatory', desc: 'Always snap to point', when: 'Strict alignment' },
              { util: 'snap-proximity', desc: 'Snap when close', when: 'More flexible' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <code className="font-mono text-sm text-blue-900 dark:text-blue-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-blue-700 dark:text-blue-300 mb-1">{item.desc}</p>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">
                  {item.when}
                </span>
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
            Snap Child Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { util: 'snap-start', desc: 'Snap to start edge' },
              { util: 'snap-end', desc: 'Snap to end edge' },
              { util: 'snap-center', desc: 'Snap to center' },
              { util: 'snap-align-none', desc: 'No snap for this item' }
            ].map((item, i) => (
              <div key={i} className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                <code className="font-mono text-sm text-teal-900 dark:text-teal-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-teal-700 dark:text-teal-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Complete Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Container -->
<div class="
  flex 
  overflow-x-auto 
  snap-x 
  snap-mandatory 
  gap-4
">
  <!-- Items -->
  <div class="snap-center shrink-0 w-80">
    Slide 1
  </div>
  <div class="snap-center shrink-0 w-80">
    Slide 2
  </div>
  <div class="snap-center shrink-0 w-80">
    Slide 3
  </div>
</div>`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
        <Move className="w-5 h-5 text-cyan-600" />
        <AlertTitle className="text-2xl text-cyan-900 dark:text-cyan-100">Scroll Snap Tips</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Container: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">snap-x snap-mandatory</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Items: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">snap-center</code> or <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">snap-start</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">shrink-0</code> on items to prevent shrinking</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for image carousels, testimonials, and full-page sections</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
