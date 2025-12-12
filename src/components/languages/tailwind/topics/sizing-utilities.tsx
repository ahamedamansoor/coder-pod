'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Maximize, CheckCircle, Lightbulb, ArrowRight, Ruler } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function SizingUtilities() {

  // Width Examples
  const widthHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <div class="w-32 bg-blue-500 dark:bg-blue-600 text-white p-4 rounded text-center">
    w-32 (8rem)
  </div>
  <div class="w-48 bg-blue-500 dark:bg-blue-600 text-white p-4 rounded text-center">
    w-48 (12rem)
  </div>
  <div class="w-64 bg-blue-500 dark:bg-blue-600 text-white p-4 rounded text-center">
    w-64 (16rem)
  </div>
  <div class="w-full bg-blue-500 dark:bg-blue-600 text-white p-4 rounded text-center">
    w-full (100%)
  </div>
</div>`;

  // Height Examples
  const heightHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="flex gap-4 items-end">
    <div class="w-20 h-16 bg-purple-500 dark:bg-purple-600 text-white flex items-center justify-center rounded text-xs">
      h-16
    </div>
    <div class="w-20 h-24 bg-purple-500 dark:bg-purple-600 text-white flex items-center justify-center rounded text-xs">
      h-24
    </div>
    <div class="w-20 h-32 bg-purple-500 dark:bg-purple-600 text-white flex items-center justify-center rounded text-xs">
      h-32
    </div>
    <div class="w-20 h-40 bg-purple-500 dark:bg-purple-600 text-white flex items-center justify-center rounded text-xs">
      h-40
    </div>
  </div>
</div>`;

  // Percentage Widths
  const percentageHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8 space-y-4">
  <div class="w-1/2 bg-green-500 dark:bg-green-600 text-white p-4 rounded text-center">
    w-1/2 (50%)
  </div>
  <div class="w-1/3 bg-green-500 dark:bg-green-600 text-white p-4 rounded text-center">
    w-1/3 (33.33%)
  </div>
  <div class="w-2/3 bg-green-500 dark:bg-green-600 text-white p-4 rounded text-center">
    w-2/3 (66.66%)
  </div>
  <div class="w-1/4 bg-green-500 dark:bg-green-600 text-white p-4 rounded text-center">
    w-1/4 (25%)
  </div>
</div>`;

  // Min/Max Width
  const minMaxHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <!-- Min Width -->
  <div class="mb-6">
    <p class="text-sm text-orange-700 dark:text-orange-300 mb-2">min-w-full: Minimum width 100%</p>
    <div class="min-w-full bg-orange-500 dark:bg-orange-600 text-white p-4 rounded text-center">
      Always full width, even if content is small
    </div>
  </div>
  
  <!-- Max Width -->
  <div>
    <p class="text-sm text-orange-700 dark:text-orange-300 mb-2">max-w-md: Maximum width 28rem</p>
    <div class="max-w-md bg-orange-500 dark:bg-orange-600 text-white p-4 rounded">
      This text is constrained to a maximum width of 28rem, making it easier to read. Long text will wrap instead of stretching too wide.
    </div>
  </div>
</div>`;

  // Viewport Units
  const viewportHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <!-- 50% of viewport width -->
  <div class="w-screen max-w-full bg-cyan-500 dark:bg-cyan-600 text-white p-4 rounded mb-4 text-center">
    w-screen (100vw, but constrained by max-w-full)
  </div>
  
  <!-- Fixed viewport height -->
  <div class="h-32 bg-cyan-500 dark:bg-cyan-600 text-white flex items-center justify-center rounded">
    h-32 (8rem height)
  </div>
</div>`;

  // Responsive Sizing
  const responsiveHTML = `<div class="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 p-8">
  <div class="w-full md:w-2/3 lg:w-1/2 bg-violet-500 dark:bg-violet-600 text-white p-6 rounded text-center mx-auto">
    <p class="font-bold mb-2">Responsive Width</p>
    <p class="text-sm">Full width on mobile → 2/3 on tablet → 1/2 on desktop</p>
    <p class="text-xs mt-2 opacity-80">Resize your browser to see it change!</p>
  </div>
</div>`;

  // Square & Aspect Ratio
  const squareHTML = `<div class="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-950 dark:to-rose-950 p-8">
  <div class="flex gap-4 flex-wrap">
    <!-- Square -->
    <div class="w-24 h-24 bg-pink-500 dark:bg-pink-600 text-white flex items-center justify-center rounded text-xs font-bold">
      24x24<br/>Square
    </div>
    
    <!-- Rectangle -->
    <div class="w-32 h-24 bg-pink-500 dark:bg-pink-600 text-white flex items-center justify-center rounded text-xs font-bold">
      32x24<br/>Rectangle
    </div>
    
    <!-- Aspect Ratio 16:9 -->
    <div class="w-48 aspect-video bg-pink-500 dark:bg-pink-600 text-white flex items-center justify-center rounded text-xs font-bold">
      aspect-video<br/>(16:9)
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Maximize}
        category="Tailwind CSS · Core Concepts"
        title="Sizing Utilities"
        description="Control width, height, and dimensions with ease"
        colorTheme="blue"
      />

      {/* WIDTH BASICS */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Ruler className="w-8 h-8 text-white" />
            </div>
            Width Utilities
          </CardTitle>
          <CardDescription className="text-base">
            Control the width of elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Width Scale</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Width utilities follow the same 4px scale as spacing. <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">w-4</code> = 1rem (16px), <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">w-8</code> = 2rem (32px), etc.
            </AlertDescription>
          </Alert>

          {/* Common Width Values */}
          <div>
            <h3 className="text-lg font-bold mb-3">Common Width Classes:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { class: 'w-auto', desc: 'Auto width' },
                { class: 'w-full', desc: '100%' },
                { class: 'w-screen', desc: '100vw' },
                { class: 'w-min', desc: 'Min content' },
                { class: 'w-max', desc: 'Max content' },
                { class: 'w-fit', desc: 'Fit content' },
                { class: 'w-32', desc: '8rem (128px)' },
                { class: 'w-64', desc: '16rem (256px)' }
              ].map(item => (
                <div key={item.class} className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 text-center border border-blue-300 dark:border-blue-700">
                  <div className="font-mono font-bold text-sm text-blue-900 dark:text-blue-100">
                    {item.class}
                  </div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Width Example */}
          <div>
            <h3 className="text-lg font-bold mb-3">Width Examples:</h3>
            <FrontendCodePreview
              html={widthHTML}
              title="Fixed Widths"
              description="Different width values in action"
              colorTheme="blue"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* HEIGHT UTILITIES */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Maximize className="w-6 h-6 text-white" />
            </div>
            Height Utilities
          </CardTitle>
          <CardDescription>
            Control the height of elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">
              💡 Height Works the Same
            </h3>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Height utilities (<code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">h-*</code>) use the same scale as width. 
              Just replace <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">w-</code> with <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">h-</code>!
            </p>
          </div>

          <FrontendCodePreview
            html={heightHTML}
            title="Height Examples"
            description="Different height values"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* PERCENTAGE WIDTHS */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Percentage Widths
          </CardTitle>
          <CardDescription>
            Flexible widths based on parent container
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <code className="text-sm font-mono text-green-700 dark:text-green-300">w-1/2</code>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">50% width</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <code className="text-sm font-mono text-green-700 dark:text-green-300">w-1/3</code>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">33.33% width</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <code className="text-sm font-mono text-green-700 dark:text-green-300">w-1/4</code>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">25% width</p>
            </div>
          </div>

          <FrontendCodePreview
            html={percentageHTML}
            title="Percentage Widths"
            description="Fractional width utilities"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* MIN/MAX WIDTH */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Ruler className="w-6 h-6 text-white" />
            </div>
            Min & Max Width
          </CardTitle>
          <CardDescription>
            Set minimum and maximum constraints
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-3">
              When to Use
            </h3>
            <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-orange-600" />
                <span><strong>max-w-*:</strong> Keep text readable (limit line length)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-orange-600" />
                <span><strong>min-w-*:</strong> Ensure buttons don't get too small</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-orange-600" />
                <span><strong>max-h-*:</strong> Limit scrollable areas</span>
              </li>
            </ul>
          </div>

          <FrontendCodePreview
            html={minMaxHTML}
            title="Min & Max Constraints"
            description="Control size boundaries"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* LIVE EXAMPLES */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            More Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Viewport Units */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-cyan-500">Example 1</Badge>
              Viewport Units
            </h3>
            <FrontendCodePreview
              html={viewportHTML}
              title="Viewport-Based Sizing"
              description="w-screen and viewport heights"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>

          {/* Responsive */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-violet-500">Example 2</Badge>
              Responsive Sizing
            </h3>
            <FrontendCodePreview
              html={responsiveHTML}
              title="Adaptive Width"
              description="Width changes based on screen size"
              colorTheme="violet"
              styleLanguage="tailwind"
            />
          </div>

          {/* Aspect Ratio */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-pink-500">Example 3</Badge>
              Squares & Aspect Ratios
            </h3>
            <FrontendCodePreview
              html={squareHTML}
              title="Fixed Dimensions"
              description="Creating squares and maintaining aspect ratios"
              colorTheme="pink"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Width */}
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Width</h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
                <li>w-{'{'}number{'}'} → Fixed width</li>
                <li>w-full → 100%</li>
                <li>w-1/2 → 50%</li>
                <li>w-screen → 100vw</li>
                <li>max-w-md → Max 28rem</li>
                <li>min-w-0 → Min 0</li>
              </ul>
            </div>

            {/* Height */}
            <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Height</h4>
              <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200 font-mono">
                <li>h-{'{'}number{'}'} → Fixed height</li>
                <li>h-full → 100%</li>
                <li>h-screen → 100vh</li>
                <li>max-h-96 → Max 24rem</li>
                <li>min-h-full → Min 100%</li>
                <li>aspect-video → 16:9 ratio</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* TIPS */}
      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">Pro Tips</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">max-w-prose</code> for readable text (65ch)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with responsive prefixes: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">w-full md:w-1/2</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">aspect-video</code> for 16:9 responsive containers</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
