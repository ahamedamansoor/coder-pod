'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Square, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AspectRatio() {

  const aspectHTML = `<div class="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-950 dark:to-pink-950 p-8">
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Aspect Ratio Examples</h3>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">16:9 (Video)</h4>
        <div class="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          16:9
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">1:1 (Square)</h4>
        <div class="aspect-square bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          1:1
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">4:3 (Classic)</h4>
        <div class="aspect-4/3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          4:3
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white mb-2">3:2 (Photography)</h4>
        <div class="aspect-3/2 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
          3:2
        </div>
      </div>
    </div>
    
    <div class="mt-8">
      <h4 class="font-bold text-gray-900 dark:text-white mb-4">Responsive Images</h4>
      <div class="aspect-video overflow-hidden rounded-xl">
        <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=675&fit=crop" class="w-full h-full object-cover" alt="Gradient"/>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Square}
        category="Tailwind CSS · Modern CSS"
        title="Aspect Ratio"
        description="Maintaining aspect ratios for responsive elements"
        colorTheme="rose"
      />

      <Card className="border-2 border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl">
              <Square className="w-8 h-8 text-white" />
            </div>
            Aspect Ratio Utilities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/20">
            <Lightbulb className="w-5 h-5 text-rose-600" />
            <AlertTitle className="text-rose-900 dark:text-rose-100">Responsive Sizing</AlertTitle>
            <AlertDescription className="text-rose-800 dark:text-rose-200">
              Lock elements to specific aspect ratios while remaining responsive
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={aspectHTML}
            title="Aspect Ratio Examples"
            description="Common aspect ratios for media"
            colorTheme="rose"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Square className="w-6 h-6 text-white" />
            </div>
            Available Ratios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'aspect-auto', desc: 'Natural aspect ratio', ratio: 'auto' },
              { util: 'aspect-square', desc: 'Perfect square', ratio: '1:1' },
              { util: 'aspect-video', desc: 'Widescreen video', ratio: '16:9' },
              { util: 'aspect-[4/3]', desc: 'Classic display', ratio: '4:3' },
              { util: 'aspect-[3/2]', desc: 'Photography', ratio: '3:2' },
              { util: 'aspect-[21/9]', desc: 'Ultrawide', ratio: '21:9' }
            ].map((item, i) => (
              <div key={i} className="bg-pink-50 dark:bg-pink-950/20 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                <code className="font-mono text-sm text-pink-900 dark:text-pink-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-pink-700 dark:text-pink-300 mb-1">{item.desc}</p>
                <span className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded text-pink-800 dark:text-pink-200">
                  {item.ratio}
                </span>
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
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Video Embed:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="aspect-video">
  <iframe 
    src="https://www.youtube.com/embed/..."
    class="w-full h-full"
  ></iframe>
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Image Card:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="aspect-square overflow-hidden rounded-lg">
  <img 
    src="image.jpg" 
    class="w-full h-full object-cover"
    alt="Description"
  />
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
            Custom Ratios
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Use arbitrary values for custom aspect ratios:
          </p>
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- 21:9 ultrawide -->
<div class="aspect-[21/9]">...</div>

<!-- 2.35:1 cinematic -->
<div class="aspect-[2.35/1]">...</div>

<!-- Custom ratio -->
<div class="aspect-[5/7]">...</div>`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
        <Square className="w-5 h-5 text-rose-600" />
        <AlertTitle className="text-2xl text-rose-900 dark:text-rose-100">Aspect Ratio Tips</AlertTitle>
        <AlertDescription className="text-rose-800 dark:text-rose-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-rose-200 dark:bg-rose-900 px-2 py-1 rounded">aspect-video</code> for YouTube/video embeds</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <code className="bg-rose-200 dark:bg-rose-900 px-2 py-1 rounded">object-cover</code> for images</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for responsive image grids and cards</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use arbitrary values: <code className="bg-rose-200 dark:bg-rose-900 px-2 py-1 rounded">aspect-[width/height]</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
