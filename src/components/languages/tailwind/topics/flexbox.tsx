'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Rows, CheckCircle, Lightbulb, ArrowRight, Grid3x3 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function Flexbox() {

  const basicFlexHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="flex gap-4 bg-white dark:bg-slate-800 p-6 rounded-lg">
    <div class="bg-blue-500 text-white p-4 rounded flex-1 text-center">Item 1</div>
    <div class="bg-blue-500 text-white p-4 rounded flex-1 text-center">Item 2</div>
    <div class="bg-blue-500 text-white p-4 rounded flex-1 text-center">Item 3</div>
  </div>
</div>`;

  const directionHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-6">
  <!-- Row (default) -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">flex-row</p>
    <div class="flex flex-row gap-2">
      <div class="bg-purple-500 text-white p-3 rounded text-center flex-1">1</div>
      <div class="bg-purple-500 text-white p-3 rounded text-center flex-1">2</div>
      <div class="bg-purple-500 text-white p-3 rounded text-center flex-1">3</div>
    </div>
  </div>
  
  <!-- Column -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">flex-col</p>
    <div class="flex flex-col gap-2">
      <div class="bg-pink-500 text-white p-3 rounded text-center">1</div>
      <div class="bg-pink-500 text-white p-3 rounded text-center">2</div>
      <div class="bg-pink-500 text-white p-3 rounded text-center">3</div>
    </div>
  </div>
</div>`;

  const justifyHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8 space-y-4">
  <!-- justify-start -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">justify-start</p>
    <div class="flex justify-start gap-2">
      <div class="bg-green-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">2</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
  
  <!-- justify-center -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">justify-center</p>
    <div class="flex justify-center gap-2">
      <div class="bg-green-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">2</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
  
  <!-- justify-end -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">justify-end</p>
    <div class="flex justify-end gap-2">
      <div class="bg-green-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">2</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
  
  <!-- justify-between -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">justify-between</p>
    <div class="flex justify-between gap-2">
      <div class="bg-green-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">2</div>
      <div class="bg-green-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
</div>`;

  const alignHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8 space-y-4">
  <!-- items-start -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">items-start</p>
    <div class="flex items-start gap-2 h-32">
      <div class="bg-orange-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-orange-500 text-white px-4 py-6 rounded">2</div>
      <div class="bg-orange-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
  
  <!-- items-center -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">items-center</p>
    <div class="flex items-center gap-2 h-32">
      <div class="bg-orange-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-orange-500 text-white px-4 py-6 rounded">2</div>
      <div class="bg-orange-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
  
  <!-- items-end -->
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">items-end</p>
    <div class="flex items-end gap-2 h-32">
      <div class="bg-orange-500 text-white px-4 py-2 rounded">1</div>
      <div class="bg-orange-500 text-white px-4 py-6 rounded">2</div>
      <div class="bg-orange-500 text-white px-4 py-2 rounded">3</div>
    </div>
  </div>
</div>`;

  const gapHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8 space-y-4">
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">gap-2</p>
    <div class="flex gap-2">
      <div class="bg-cyan-500 text-white p-4 rounded flex-1 text-center">Item</div>
      <div class="bg-cyan-500 text-white p-4 rounded flex-1 text-center">Item</div>
      <div class="bg-cyan-500 text-white p-4 rounded flex-1 text-center">Item</div>
    </div>
  </div>
  
  <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
    <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">gap-8</p>
    <div class="flex gap-8">
      <div class="bg-blue-500 text-white p-4 rounded flex-1 text-center">Item</div>
      <div class="bg-blue-500 text-white p-4 rounded flex-1 text-center">Item</div>
      <div class="bg-blue-500 text-white p-4 rounded flex-1 text-center">Item</div>
    </div>
  </div>
</div>`;

  const navbarHTML = `<div class="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4">
  <div class="flex items-center justify-between">
    <div class="text-xl font-bold text-gray-800 dark:text-white">
      Logo
    </div>
    
    <div class="flex items-center gap-6">
      <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
      <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
      <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
    </div>
    
    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold">
      Sign In
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Rows}
        category="Tailwind CSS · Layout"
        title="Flexbox"
        description="Master flexible box layouts with Tailwind utilities"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Rows className="w-8 h-8 text-white" />
            </div>
            Flexbox Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Flexbox Quick Start</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Add <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">flex</code> to container, items arrange horizontally with equal spacing
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={basicFlexHTML}
            title="Basic Flex Container"
            description="Items share space equally"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Rows className="w-6 h-6 text-white" />
            </div>
            Flex Direction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={directionHTML}
            title="Row vs Column"
            description="Control main axis direction"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Grid3x3 className="w-6 h-6 text-white" />
            </div>
            Justify Content
          </CardTitle>
          <CardDescription>Control spacing along main axis</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={justifyHTML}
            title="Justify Content"
            description="Horizontal alignment options"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Rows className="w-6 h-6 text-white" />
            </div>
            Align Items
          </CardTitle>
          <CardDescription>Control alignment along cross axis</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={alignHTML}
            title="Align Items"
            description="Vertical alignment options"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Gap Utilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={gapHTML}
            title="Flex Gap"
            description="Space between items"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Navbar Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={navbarHTML}
            title="Flex Navbar"
            description="Real-world flexbox usage"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Rows className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Flexbox Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">flex items-center justify-between</code> for navbars</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">flex-1</code> makes item grow to fill space</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
