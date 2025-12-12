'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Square, CheckCircle, Lightbulb, ArrowRight, Circle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function BorderUtilities() {

  const borderWidthHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="grid md:grid-cols-4 gap-4">
    <div class="bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 p-4 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">1px</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 p-4 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-2</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">2px</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-4 border-gray-300 dark:border-gray-600 p-4 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-4</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">4px</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-8 border-gray-300 dark:border-gray-600 p-4 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-8</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">8px</p>
    </div>
  </div>
</div>`;

  const borderColorHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="grid md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-slate-800 border-4 border-red-500 dark:border-red-400 p-6 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Red Border</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-4 border-blue-500 dark:border-blue-400 p-6 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Blue Border</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-4 border-green-500 dark:border-green-400 p-6 rounded text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Green Border</p>
    </div>
  </div>
</div>`;

  const borderRadiusHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid md:grid-cols-4 gap-4">
    <div class="bg-blue-500 text-white p-6 text-center font-semibold">
      <p>rounded-none</p>
      <p class="text-xs opacity-80">0px</p>
    </div>
    <div class="bg-blue-500 text-white p-6 rounded text-center font-semibold">
      <p>rounded</p>
      <p class="text-xs opacity-80">4px</p>
    </div>
    <div class="bg-blue-500 text-white p-6 rounded-lg text-center font-semibold">
      <p>rounded-lg</p>
      <p class="text-xs opacity-80">8px</p>
    </div>
    <div class="bg-blue-500 text-white p-6 rounded-full text-center font-semibold">
      <p>rounded-full</p>
      <p class="text-xs opacity-80">9999px</p>
    </div>
  </div>
</div>`;

  const borderSidesHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8">
  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-slate-800 border-t-4 border-blue-500 dark:border-blue-400 p-6">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-t-4</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Top border only</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-b-4 border-red-500 dark:border-red-400 p-6">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-b-4</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Bottom border only</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-l-4 border-green-500 dark:border-green-400 p-6">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-l-4</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Left border only</p>
    </div>
    <div class="bg-white dark:bg-slate-800 border-r-4 border-purple-500 dark:border-purple-400 p-6">
      <p class="font-semibold text-gray-800 dark:text-gray-200">border-r-4</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Right border only</p>
    </div>
  </div>
</div>`;

  const roundedCornersHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-purple-500 text-white p-6 rounded-tl-3xl">
      <p class="font-semibold">rounded-tl-3xl</p>
      <p class="text-xs opacity-80">Top-left corner only</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded-tr-3xl">
      <p class="font-semibold">rounded-tr-3xl</p>
      <p class="text-xs opacity-80">Top-right corner only</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded-bl-3xl">
      <p class="font-semibold">rounded-bl-3xl</p>
      <p class="text-xs opacity-80">Bottom-left corner only</p>
    </div>
    <div class="bg-purple-500 text-white p-6 rounded-br-3xl">
      <p class="font-semibold">rounded-br-3xl</p>
      <p class="text-xs opacity-80">Bottom-right corner only</p>
    </div>
  </div>
</div>`;

  const divideHTML = `<div class="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 p-8">
  <div class="bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
      <div class="p-4">
        <p class="font-semibold text-gray-800 dark:text-gray-200">Item 1</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">divide-y adds borders between items</p>
      </div>
      <div class="p-4">
        <p class="font-semibold text-gray-800 dark:text-gray-200">Item 2</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">No manual borders needed!</p>
      </div>
      <div class="p-4">
        <p class="font-semibold text-gray-800 dark:text-gray-200">Item 3</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">Perfect for lists</p>
      </div>
    </div>
  </div>
</div>`;

  const cardExampleHTML = `<div class="max-w-sm mx-auto bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition">
  <!-- Image -->
  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80" loading="lazy" alt="Card" class="w-full h-48 object-cover">
  
  <!-- Content -->
  <div class="p-6">
    <div class="flex items-center gap-2 mb-3">
      <span class="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-700">
        New
      </span>
      <span class="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-200 dark:border-green-700">
        Featured
      </span>
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
      Beautiful Card Design
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      Using borders, rounded corners, and shadows to create depth
    </p>
    
    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border-2 border-blue-600 dark:border-blue-400 transition">
      Learn More
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Square}
        category="Tailwind CSS · Core Concepts"
        title="Border Utilities"
        description="Master borders, rounded corners, and dividers"
        colorTheme="blue"
      />

      {/* BORDER WIDTH */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Square className="w-8 h-8 text-white" />
            </div>
            Border Width
          </CardTitle>
          <CardDescription className="text-base">
            Control border thickness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Border Syntax</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">border</code> = 1px, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">border-2</code> = 2px, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">border-4</code> = 4px
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={borderWidthHTML}
            title="Border Widths"
            description="From thin to thick borders"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* BORDER COLORS */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Circle className="w-6 h-6 text-white" />
            </div>
            Border Colors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={borderColorHTML}
            title="Colored Borders"
            description="border-{color}-{shade}"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* BORDER RADIUS */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Circle className="w-6 h-6 text-white" />
            </div>
            Rounded Corners
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-green-500">Example 1</Badge>
              Border Radius Sizes
            </h3>
            <FrontendCodePreview
              html={borderRadiusHTML}
              title="Rounded Corners"
              description="From square to fully rounded"
              colorTheme="green"
              styleLanguage="tailwind"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-cyan-500">Example 2</Badge>
              Individual Corners
            </h3>
            <FrontendCodePreview
              html={roundedCornersHTML}
              title="Corner-Specific Rounding"
              description="Round specific corners only"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* BORDER SIDES */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Square className="w-6 h-6 text-white" />
            </div>
            Individual Sides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={borderSidesHTML}
            title="Border Sides"
            description="Add borders to specific sides"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* DIVIDE UTILITIES */}
      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-violet-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Divide Utilities
          </CardTitle>
          <CardDescription>
            Add borders between child elements automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={divideHTML}
            title="Divide Utilities"
            description="Perfect for lists and menus"
            colorTheme="violet"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* COMPLETE EXAMPLE */}
      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Complete Card Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cardExampleHTML}
            title="Professional Card"
            description="Borders, rounded corners, and hover effects"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Width</h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
                <li>border / border-0</li>
                <li>border-2 / border-4</li>
                <li>border-8</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Radius</h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
                <li>rounded / rounded-lg</li>
                <li>rounded-full</li>
                <li>rounded-t-lg</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Sides</h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
                <li>border-t-4</li>
                <li>border-b-4</li>
                <li>border-x-4</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <Square className="w-5 h-5 text-green-600" />
        <AlertTitle className="text-2xl text-green-900 dark:text-green-100">Border Tips</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">rounded-lg</code> for modern, friendly designs</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with hover: <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">hover:border-blue-500</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">divide-y</code> for clean lists</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
