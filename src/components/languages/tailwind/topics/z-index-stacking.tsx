'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ZIndexStacking() {

  const basicHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="relative h-64">
    <!-- z-0 (bottom) -->
    <div class="absolute top-8 left-8 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold z-0">
      z-0
    </div>
    
    <!-- z-10 (middle) -->
    <div class="absolute top-16 left-16 w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold z-10">
      z-10
    </div>
    
    <!-- z-20 (top) -->
    <div class="absolute top-24 left-24 w-32 h-32 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold z-20">
      z-20
    </div>
  </div>
</div>`;

  const modalHTML = `<div class="relative bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 rounded-lg min-h-[400px]">
  <!-- Main content (z-0) -->
  <div class="bg-white dark:bg-slate-800 p-6 rounded-lg">
    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Page Content</h3>
    <p class="text-gray-600 dark:text-gray-300">This is behind the modal</p>
  </div>
  
  <!-- Modal overlay (z-40) -->
  <div class="absolute inset-0 bg-black/50 z-40 flex items-center justify-center">
    <!-- Modal (z-50) -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-8 max-w-md z-50 shadow-2xl">
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Modal (z-50)</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-6">I'm on top of everything!</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold">
        Close
      </button>
    </div>
  </div>
</div>`;

  const navbarHTML = `<div class="relative bg-gray-100 dark:bg-gray-900 min-h-[300px]">
  <!-- Navbar (z-50 - stays on top) -->
  <nav class="sticky top-0 bg-white dark:bg-slate-800 shadow-lg z-50 p-4">
    <div class="flex items-center justify-between">
      <span class="font-bold text-gray-800 dark:text-white">Logo (z-50)</span>
      <div class="flex gap-4">
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
      </div>
    </div>
  </nav>
  
  <!-- Content -->
  <div class="p-6 space-y-4">
    <div class="bg-white dark:bg-slate-800 p-4 rounded">Content section 1</div>
    <div class="bg-white dark:bg-slate-800 p-4 rounded">Content section 2</div>
    <div class="bg-white dark:bg-slate-800 p-4 rounded">Content section 3</div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="Tailwind CSS · Layout"
        title="Z-Index & Stacking"
        description="Control element layering and stacking order"
        colorTheme="purple"
      />

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            Z-Index Values
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Stacking Order</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Higher z-index = on top. Use: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">z-0</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">z-10</code>, 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">z-20</code>, up to 
              <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded ml-1">z-50</code>
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Common Z-Index Values:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { value: 'z-0', use: 'Base level' },
                { value: 'z-10', use: 'Dropdowns' },
                { value: 'z-20', use: 'Sticky elements' },
                { value: 'z-30', use: 'Fixed elements' },
                { value: 'z-40', use: 'Overlays' },
                { value: 'z-50', use: 'Modals, tooltips' }
              ].map(item => (
                <div key={item.value} className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3 border border-purple-300 dark:border-purple-700">
                  <div className="font-mono font-bold text-purple-900 dark:text-purple-100">
                    {item.value}
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                    {item.use}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={basicHTML}
            title="Stacking Order"
            description="Higher numbers appear on top"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Modal Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={modalHTML}
            title="Modal Layering"
            description="Overlay + modal on top"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Sticky Navbar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={navbarHTML}
            title="Fixed Navigation"
            description="Navbar stays on top while scrolling"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Layers className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Z-Index Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">z-50</code> for modals and tooltips</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Sticky/fixed elements need z-index to stay visible</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
