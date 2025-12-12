'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Move, CheckCircle, Lightbulb, ArrowRight, Navigation } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function Positioning() {

  const relativeAbsoluteHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <!-- Relative positioning creates context -->
  <div class="relative bg-white dark:bg-slate-800 rounded-lg p-8 h-64 border-2 border-blue-300 dark:border-blue-700">
    <p class="text-gray-800 dark:text-gray-200 font-semibold mb-2">relative container</p>
    
    <!-- Absolute positioned children -->
    <div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-xs font-semibold">
      top-4 left-4
    </div>
    
    <div class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold">
      top-4 right-4
    </div>
    
    <div class="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold">
      bottom-4 left-4
    </div>
    
    <div class="absolute bottom-4 right-4 bg-purple-500 text-white px-3 py-1 rounded text-xs font-semibold">
      bottom-4 right-4
    </div>
    
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-gray-800 px-4 py-2 rounded font-semibold">
      Centered!
    </div>
  </div>
</div>`;

  const fixedHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 rounded-lg">
  <div class="relative h-96 bg-white dark:bg-slate-800 rounded-lg overflow-auto">
    <div class="p-6 space-y-4">
      <p class="text-gray-800 dark:text-gray-200">Scroll down to see the fixed button stay in place...</p>
      <div class="h-[600px] bg-gradient-to-b from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-4">
        <p class="text-gray-600 dark:text-gray-400">Scrollable content area</p>
      </div>
    </div>
    
    <!-- Fixed button (stays in view) -->
    <button class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold">
      ↑ Fixed Button
    </button>
  </div>
</div>`;

  const stickyHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="h-96 overflow-auto bg-white dark:bg-slate-800 rounded-lg">
    <!-- Sticky header -->
    <div class="sticky top-0 bg-blue-500 text-white px-6 py-4 font-bold z-10">
      Sticky Header (scroll to see it stick!)
    </div>
    
    <div class="p-6 space-y-4">
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 1</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 2</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 3</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 4</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 5</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 6</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 7</div>
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded">Section 8</div>
    </div>
  </div>
</div>`;

  const insetHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="relative bg-white dark:bg-slate-800 rounded-lg h-64 border-2 border-orange-300 dark:border-orange-700">
    <!-- inset-0 = top-0 right-0 bottom-0 left-0 -->
    <div class="absolute inset-0 flex items-center justify-center bg-blue-500/20 m-4 rounded border-2 border-dashed border-blue-500">
      <p class="text-blue-700 dark:text-blue-300 font-semibold">inset-0 with m-4</p>
    </div>
  </div>
</div>`;

  const badgeCardHTML = `<div class="max-w-sm mx-auto">
  <div class="relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
    <!-- Image -->
    <img src="https://via.placeholder.com/400x200" alt="Product" class="w-full h-48 object-cover">
    
    <!-- Sale Badge (absolute positioning) -->
    <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
      -50% OFF
    </div>
    
    <!-- New Badge -->
    <div class="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
      NEW
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Product Name
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Amazing product with positioned badges!
      </p>
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-gray-900 dark:text-white">$49.99</span>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="Tailwind CSS · Layout"
        title="Position"
        description="Control element positioning - static, relative, absolute, fixed, sticky"
        colorTheme="purple"
      />

      {/* POSITION TYPES */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Navigation className="w-8 h-8 text-white" />
            </div>
            Position Types
          </CardTitle>
          <CardDescription className="text-base">
            Understanding different positioning modes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Position Values</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-1">
              <p><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">static</code> - Default, normal flow</p>
              <p><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">relative</code> - Positioned relative to itself</p>
              <p><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">absolute</code> - Positioned relative to nearest positioned ancestor</p>
              <p><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">fixed</code> - Positioned relative to viewport</p>
              <p><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">sticky</code> - Toggles between relative and fixed</p>
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Position Classes:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { class: 'static', desc: 'Normal document flow' },
                { class: 'relative', desc: 'Create positioning context' },
                { class: 'absolute', desc: 'Remove from flow' },
                { class: 'fixed', desc: 'Fixed to viewport' },
                { class: 'sticky', desc: 'Stick when scrolling' }
              ].map(item => (
                <div key={item.class} className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                  <div className="font-mono font-bold text-lg text-purple-900 dark:text-purple-100">
                    {item.class}
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* RELATIVE & ABSOLUTE */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Move className="w-6 h-6 text-white" />
            </div>
            Relative & Absolute
          </CardTitle>
          <CardDescription>
            The most common positioning combo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
              How It Works
            </h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                <span><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">relative</code> on parent creates positioning context</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                <span><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">absolute</code> on children positions them relative to parent</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">top-0</code>, <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">right-0</code>, etc. to position</span>
              </li>
            </ul>
          </div>

          <FrontendCodePreview
            html={relativeAbsoluteHTML}
            title="Relative + Absolute"
            description="Position elements in all four corners and center"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* STICKY */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Sticky Positioning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={stickyHTML}
            title="Sticky Header"
            description="Scroll to see it stick to the top!"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* INSET */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Move className="w-6 h-6 text-white" />
            </div>
            Inset Utilities
          </CardTitle>
          <CardDescription>
            Shorthand for all four sides
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={insetHTML}
            title="Inset Positioning"
            description="inset-0 = top-0 right-0 bottom-0 left-0"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* PRACTICAL EXAMPLE */}
      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Product Card with Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={badgeCardHTML}
            title="Positioned Badges"
            description="Real-world positioning example"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Position</h4>
              <ul className="space-y-2 text-sm text-cyan-800 dark:text-cyan-200 font-mono">
                <li>static / relative</li>
                <li>absolute / fixed</li>
                <li>sticky</li>
              </ul>
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-950/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Placement</h4>
              <ul className="space-y-2 text-sm text-cyan-800 dark:text-cyan-200 font-mono">
                <li>top-0 / bottom-0</li>
                <li>left-0 / right-0</li>
                <li>inset-0</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Move className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Position Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Always use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">relative</code> on parent for <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">absolute</code> children</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">z-index</code> to control stacking order</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">sticky</code> needs <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">top-0</code> or similar to work</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
