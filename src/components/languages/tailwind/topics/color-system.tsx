'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, CheckCircle, Lightbulb, ArrowRight, Droplet } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ColorSystem() {

  // Color Palette
  const colorPaletteHTML = `<div class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-900 dark:to-slate-900 p-8">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Red -->
    <div>
      <div class="bg-red-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Red</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-red-500</p>
    </div>
    
    <!-- Orange -->
    <div>
      <div class="bg-orange-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Orange</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-orange-500</p>
    </div>
    
    <!-- Yellow -->
    <div>
      <div class="bg-yellow-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Yellow</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-yellow-500</p>
    </div>
    
    <!-- Green -->
    <div>
      <div class="bg-green-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Green</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-green-500</p>
    </div>
    
    <!-- Blue -->
    <div>
      <div class="bg-blue-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Blue</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-blue-500</p>
    </div>
    
    <!-- Purple -->
    <div>
      <div class="bg-purple-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Purple</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-purple-500</p>
    </div>
    
    <!-- Pink -->
    <div>
      <div class="bg-pink-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pink</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-pink-500</p>
    </div>
    
    <!-- Gray -->
    <div>
      <div class="bg-gray-500 h-20 rounded-lg mb-2"></div>
      <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Gray</p>
      <p class="text-xs text-gray-600 dark:text-gray-400">bg-gray-500</p>
    </div>
  </div>
</div>`;

  // Color Shades
  const shadesHTML = `<div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="space-y-2">
    <div class="flex items-center gap-2">
      <div class="bg-blue-50 dark:bg-blue-950 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200">50</div>
      <span class="text-xs text-gray-600 dark:text-gray-400">Lightest</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-100 dark:bg-blue-900 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200">100</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-200 dark:bg-blue-800 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200">200</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-300 dark:bg-blue-700 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-white">300</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-400 dark:bg-blue-600 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-white">400</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-500 dark:bg-blue-500 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-white">500</div>
      <span class="text-xs text-gray-600 dark:text-gray-400">Default</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-600 dark:bg-blue-400 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-white">600</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-700 dark:bg-blue-300 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-white dark:text-gray-800">700</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-800 dark:bg-blue-200 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-white dark:text-gray-800">800</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="bg-blue-900 dark:bg-blue-100 h-12 flex-1 rounded flex items-center justify-center text-xs font-semibold text-white dark:text-gray-800">900</div>
      <span class="text-xs text-gray-600 dark:text-gray-400">Darkest</span>
    </div>
  </div>
</div>`;

  // Background Colors
  const backgroundHTML = `<div class="p-8 space-y-4 bg-white dark:bg-slate-900">
  <div class="bg-red-500 text-white p-6 rounded-lg text-center font-semibold">
    bg-red-500
  </div>
  <div class="bg-green-500 text-white p-6 rounded-lg text-center font-semibold">
    bg-green-500
  </div>
  <div class="bg-blue-500 text-white p-6 rounded-lg text-center font-semibold">
    bg-blue-500
  </div>
  <div class="bg-purple-500 text-white p-6 rounded-lg text-center font-semibold">
    bg-purple-500
  </div>
</div>`;

  // Text Colors
  const textColorHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-3">
  <p class="text-red-600 dark:text-red-400 text-xl font-bold">Red Text</p>
  <p class="text-orange-600 dark:text-orange-400 text-xl font-bold">Orange Text</p>
  <p class="text-yellow-600 dark:text-yellow-400 text-xl font-bold">Yellow Text</p>
  <p class="text-green-600 dark:text-green-400 text-xl font-bold">Green Text</p>
  <p class="text-blue-600 dark:text-blue-400 text-xl font-bold">Blue Text</p>
  <p class="text-purple-600 dark:text-purple-400 text-xl font-bold">Purple Text</p>
  <p class="text-pink-600 dark:text-pink-400 text-xl font-bold">Pink Text</p>
</div>`;

  // Border Colors
  const borderColorHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-white dark:bg-slate-800 border-4 border-red-500 dark:border-red-400 p-6 rounded-lg text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Red Border</p>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">border-red-500</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 border-4 border-blue-500 dark:border-blue-400 p-6 rounded-lg text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Blue Border</p>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">border-blue-500</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 border-4 border-green-500 dark:border-green-400 p-6 rounded-lg text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Green Border</p>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">border-green-500</p>
    </div>
    
    <div class="bg-white dark:bg-slate-800 border-4 border-purple-500 dark:border-purple-400 p-6 rounded-lg text-center">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Purple Border</p>
      <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">border-purple-500</p>
    </div>
  </div>
</div>`;

  // Opacity
  const opacityHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="relative bg-white dark:bg-slate-800 rounded-xl p-8">
    <img src="https://via.placeholder.com/800x300" alt="Background" class="absolute inset-0 w-full h-full object-cover rounded-xl">
    
    <!-- Overlays with different opacity -->
    <div class="relative space-y-4">
      <div class="bg-blue-500/25 text-white p-4 rounded text-center font-semibold">
        25% Opacity (bg-blue-500/25)
      </div>
      <div class="bg-blue-500/50 text-white p-4 rounded text-center font-semibold">
        50% Opacity (bg-blue-500/50)
      </div>
      <div class="bg-blue-500/75 text-white p-4 rounded text-center font-semibold">
        75% Opacity (bg-blue-500/75)
      </div>
      <div class="bg-blue-500 text-white p-4 rounded text-center font-semibold">
        100% Opacity (bg-blue-500)
      </div>
    </div>
  </div>
</div>`;

  // Complete Color Card
  const colorCardHTML = `<div class="max-w-md mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl overflow-hidden">
  <!-- Header with gradient -->
  <div class="bg-white/10 backdrop-blur-sm p-6 border-b border-white/20">
    <h2 class="text-2xl font-bold text-white mb-1">Colorful Card</h2>
    <p class="text-white/80 text-sm">Using Tailwind's color system</p>
  </div>
  
  <!-- Content -->
  <div class="p-6 text-white">
    <p class="mb-4 leading-relaxed">
      This card demonstrates multiple color utilities working together:
    </p>
    
    <!-- Color badges -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
        Gradient Background
      </span>
      <span class="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
        Backdrop Blur
      </span>
      <span class="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
        Opacity Layers
      </span>
    </div>
    
    <!-- Button -->
    <button class="w-full bg-white text-purple-600 dark:text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition">
      Get Started
    </button>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Palette}
        category="Tailwind CSS · Core Concepts"
        title="Color System"
        description="Master Tailwind's comprehensive color palette and utilities"
        colorTheme="purple"
      />

      {/* COLOR PALETTE */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            Tailwind Color Palette
          </CardTitle>
          <CardDescription className="text-base">
            22 colors, each with 10 shades
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Color Naming</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Colors range from 50 (lightest) to 900 (darkest). 
              The middle value (500) is the default: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">bg-blue-500</code>
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Available Colors:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Slate', class: 'bg-slate-500' },
                { name: 'Gray', class: 'bg-gray-500' },
                { name: 'Zinc', class: 'bg-zinc-500' },
                { name: 'Red', class: 'bg-red-500' },
                { name: 'Orange', class: 'bg-orange-500' },
                { name: 'Amber', class: 'bg-amber-500' },
                { name: 'Yellow', class: 'bg-yellow-500' },
                { name: 'Lime', class: 'bg-lime-500' },
                { name: 'Green', class: 'bg-green-500' },
                { name: 'Emerald', class: 'bg-emerald-500' },
                { name: 'Teal', class: 'bg-teal-500' },
                { name: 'Cyan', class: 'bg-cyan-500' },
                { name: 'Sky', class: 'bg-sky-500' },
                { name: 'Blue', class: 'bg-blue-500' },
                { name: 'Indigo', class: 'bg-indigo-500' },
                { name: 'Violet', class: 'bg-violet-500' },
                { name: 'Purple', class: 'bg-purple-500' },
                { name: 'Fuchsia', class: 'bg-fuchsia-500' },
                { name: 'Pink', class: 'bg-pink-500' },
                { name: 'Rose', class: 'bg-rose-500' }
              ].map(color => (
                <div key={color.name} className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-lg p-2 border border-gray-200 dark:border-gray-700">
                  <div className={`w-8 h-8 rounded ${color.class}`}></div>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={colorPaletteHTML}
            title="Color Palette"
            description="Main color families"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* COLOR SHADES */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            Color Shades (50-900)
          </CardTitle>
          <CardDescription>
            Each color has 10 shades from light to dark
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
              Understanding Shades
            </h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                <span><strong>50-400:</strong> Light shades, good for backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                <span><strong>500:</strong> Default shade, balanced and vibrant</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                <span><strong>600-900:</strong> Dark shades, good for text and borders</span>
              </li>
            </ul>
          </div>

          <FrontendCodePreview
            html={shadesHTML}
            title="Blue Color Shades"
            description="From lightest (50) to darkest (900)"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* COLOR UTILITIES */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Color Utilities
          </CardTitle>
          <CardDescription>
            Apply colors to backgrounds, text, and borders
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Background */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-red-500">Example 1</Badge>
              Background Colors
            </h3>
            <FrontendCodePreview
              html={backgroundHTML}
              title="Background Colors"
              description="bg-{color}-{shade}"
              colorTheme="red"
              styleLanguage="tailwind"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-purple-500">Example 2</Badge>
              Text Colors
            </h3>
            <FrontendCodePreview
              html={textColorHTML}
              title="Text Colors"
              description="text-{color}-{shade}"
              colorTheme="purple"
              styleLanguage="tailwind"
            />
          </div>

          {/* Border */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-green-500">Example 3</Badge>
              Border Colors
            </h3>
            <FrontendCodePreview
              html={borderColorHTML}
              title="Border Colors"
              description="border-{color}-{shade}"
              colorTheme="green"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* OPACITY */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            Color Opacity
          </CardTitle>
          <CardDescription>
            Control transparency with opacity modifiers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="w-5 h-5 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Opacity Syntax</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              Add opacity with a slash: <code className="bg-cyan-200 dark:bg-cyan-900 px-2 py-1 rounded">bg-blue-500/50</code> = 50% opacity. 
              Works with any color utility!
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={opacityHTML}
            title="Opacity Levels"
            description="Create overlays and transparent layers"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* COMPLETE EXAMPLE */}
      <Card className="border-2 border-pink-200 dark:border-pink-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-pink-500 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            Complete Color Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorCardHTML}
            title="Colorful Card Design"
            description="Combining gradients, opacity, and color utilities"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Utility Types</h4>
              <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200 font-mono">
                <li>bg-{'{'}color{'}'}-{'{'}shade{'}'}</li>
                <li>text-{'{'}color{'}'}-{'{'}shade{'}'}</li>
                <li>border-{'{'}color{'}'}-{'{'}shade{'}'}</li>
                <li>ring-{'{'}color{'}'}-{'{'}shade{'}'}</li>
                <li>shadow-{'{'}color{'}'}-{'{'}shade{'}'}</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Opacity</h4>
              <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200 font-mono">
                <li>bg-blue-500/25 → 25%</li>
                <li>bg-blue-500/50 → 50%</li>
                <li>bg-blue-500/75 → 75%</li>
                <li>text-red-600/80 → 80%</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* TIPS */}
      <Alert className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <Palette className="w-5 h-5 text-purple-600" />
        <AlertTitle className="text-2xl text-purple-900 dark:text-purple-100">Color Tips</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">gray-500 dark:gray-400</code> for adaptive colors</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Stick to 2-3 colors for consistency</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use opacity for overlays: <code className="bg-purple-200 dark:bg-purple-900 px-2 py-1 rounded">bg-black/50</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
