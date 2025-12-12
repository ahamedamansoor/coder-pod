'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Maximize2, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ObjectFit() {

  const objectHTML = `<div class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 p-8">
  <div class="max-w-4xl mx-auto space-y-6">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Object Fit Examples</h3>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">object-cover</p>
        <div class="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop" class="w-full h-full object-cover" alt="Cover"/>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Fills container, may crop</p>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">object-contain</p>
        <div class="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop" class="w-full h-full object-contain" alt="Contain"/>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Fits entire image, may have gaps</p>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">object-fill</p>
        <div class="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop" class="w-full h-full object-fill" alt="Fill"/>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Stretches to fill</p>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6 mt-6">
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">object-top</p>
        <div class="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=600&fit=crop" class="w-full h-full object-cover object-top" alt="Top"/>
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">object-center</p>
        <div class="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=600&fit=crop" class="w-full h-full object-cover object-center" alt="Center"/>
        </div>
      </div>
      
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">object-bottom</p>
        <div class="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=600&fit=crop" class="w-full h-full object-cover object-bottom" alt="Bottom"/>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Maximize2}
        category="Tailwind CSS · Gradients & Images"
        title="Object Fit & Position"
        description="Control how images and videos fit their containers"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <Maximize2 className="w-8 h-8 text-white" />
            </div>
            Object Fit & Position
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Image & Video Control</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Control how images and videos resize within their containers
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={objectHTML}
            title="Object Fit Examples"
            description="Different fit and position behaviors"
            colorTheme="indigo"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Maximize2 className="w-6 h-6 text-white" />
            </div>
            Object Fit Values
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { 
                util: 'object-contain', 
                desc: 'Fit entire image, maintain aspect ratio',
                best: 'Logos, product images'
              },
              { 
                util: 'object-cover', 
                desc: 'Fill container, may crop edges',
                best: 'Hero images, thumbnails'
              },
              { 
                util: 'object-fill', 
                desc: 'Stretch to fill container',
                best: 'Rare - distorts image'
              },
              { 
                util: 'object-none', 
                desc: 'Original size, may overflow',
                best: 'Pixel-perfect designs'
              },
              { 
                util: 'object-scale-down', 
                desc: 'Smallest of contain or none',
                best: 'Small images'
              }
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <code className="font-mono text-sm text-purple-900 dark:text-purple-100 font-bold block mb-2">{item.util}</code>
                <p className="text-xs text-purple-700 dark:text-purple-300 mb-2">{item.desc}</p>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                  Best for: {item.best}
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
            Object Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {[
              'object-center', 'object-top', 'object-bottom',
              'object-left', 'object-right', 'object-left-top',
              'object-left-bottom', 'object-right-top', 'object-right-bottom'
            ].map((pos) => (
              <div key={pos} className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 text-center">
                <code className="text-xs text-blue-900 dark:text-blue-100 font-mono">{pos}</code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Card Thumbnail:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="w-full h-48 overflow-hidden rounded-lg">
  <img 
    src="image.jpg"
    class="w-full h-full object-cover"
    alt="Thumbnail"
  />
</div>`}
            </pre>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Logo Container:</h4>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<div class="w-32 h-32">
  <img 
    src="logo.svg"
    class="w-full h-full object-contain"
    alt="Logo"
  />
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <Maximize2 className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-2xl text-indigo-900 dark:text-indigo-100">Object Fit Tips</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">object-cover</code> for card thumbnails and hero images</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">object-contain</code> for logos and product images</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with position: <code className="bg-indigo-200 dark:bg-indigo-900 px-2 py-1 rounded">object-cover object-top</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Works on images, videos, and iframes</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
