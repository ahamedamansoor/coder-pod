'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Image, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function BackgroundImages() {

  const bgHTML = `<div class="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-950 dark:to-gray-950 p-8">
  <div class="max-w-4xl mx-auto space-y-6">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Background Image Utilities</h3>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="h-64 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop')] bg-cover bg-center rounded-xl shadow-lg">
        <div class="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <p class="text-white font-bold">bg-cover bg-center</p>
        </div>
      </div>
      
      <div class="h-64 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop')] bg-contain bg-center bg-no-repeat rounded-xl shadow-lg border-2 border-gray-300 dark:border-gray-700">
        <div class="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <p class="text-white font-bold">bg-contain bg-no-repeat</p>
        </div>
      </div>
      
      <div class="h-64 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop')] bg-cover bg-top rounded-xl shadow-lg">
        <div class="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <p class="text-white font-bold">bg-top</p>
        </div>
      </div>
      
      <div class="h-64 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop')] bg-cover bg-bottom rounded-xl shadow-lg">
        <div class="h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <p class="text-white font-bold">bg-bottom</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Image}
        category="Tailwind CSS · Gradients & Images"
        title="Background Images"
        description="Background image utilities, positioning, and sizing"
        colorTheme="slate"
      />

      <Card className="border-2 border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl">
              <Image className="w-8 h-8 text-white" />
            </div>
            Background Images
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/20">
            <Lightbulb className="w-5 h-5 text-slate-600" />
            <AlertTitle className="text-slate-900 dark:text-slate-100">Complete Control</AlertTitle>
            <AlertDescription className="text-slate-800 dark:text-slate-200">
              Control background image size, position, and repeat behavior
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={bgHTML}
            title="Background Image Examples"
            description="Different sizing and positioning options"
            colorTheme="slate"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gray-500 rounded-lg">
              <Image className="w-6 h-6 text-white" />
            </div>
            Background Size
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'bg-auto', desc: 'Original size', when: 'Patterns, textures' },
              { util: 'bg-cover', desc: 'Cover entire container', when: 'Hero images, full backgrounds' },
              { util: 'bg-contain', desc: 'Fit entire image', when: 'Logos, icons' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-950/20 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                <code className="font-mono text-sm text-gray-900 dark:text-gray-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">{item.desc}</p>
                <span className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                  {item.when}
                </span>
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
            Background Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {[
              'bg-center', 'bg-top', 'bg-bottom',
              'bg-left', 'bg-right', 'bg-left-top',
              'bg-left-bottom', 'bg-right-top', 'bg-right-bottom'
            ].map((pos) => (
              <div key={pos} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                <code className="text-xs text-blue-900 dark:text-blue-100 font-mono">{pos}</code>
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
            Background Repeat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { util: 'bg-repeat', desc: 'Repeat in both directions' },
              { util: 'bg-no-repeat', desc: 'Do not repeat' },
              { util: 'bg-repeat-x', desc: 'Repeat horizontally' },
              { util: 'bg-repeat-y', desc: 'Repeat vertically' },
              { util: 'bg-repeat-round', desc: 'Repeat and scale to fit' },
              { util: 'bg-repeat-space', desc: 'Repeat with space between' }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <code className="text-sm text-purple-900 dark:text-purple-100 font-mono font-bold block mb-1">{item.util}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Image className="w-6 h-6 text-white" />
            </div>
            Complete Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Hero Section with Background Image -->
<div class="
  h-96
  bg-[url('/hero.jpg')]
  bg-cover
  bg-center
  bg-no-repeat
">
  <div class="
    h-full 
    bg-gradient-to-t 
    from-black/70 
    to-transparent
    flex items-end
    p-12
  ">
    <h1 class="text-4xl text-white font-bold">
      Hero Title
    </h1>
  </div>
</div>`}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20">
        <Image className="w-5 h-5 text-slate-600" />
        <AlertTitle className="text-2xl text-slate-900 dark:text-slate-100">Background Image Tips</AlertTitle>
        <AlertDescription className="text-slate-800 dark:text-slate-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use arbitrary values: <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">bg-[url('/path/to/image.jpg')]</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with gradients for overlays: <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">bg-gradient-to-t from-black/70</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">bg-cover</code> for full-width hero sections</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always specify <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded">bg-no-repeat</code> for single images</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
