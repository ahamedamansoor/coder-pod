'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Wind, Palette, Layers, Zap, Code2, Smartphone, Box, CheckCircle, Rocket, Sparkles, AlertCircle, Info, Layout, MousePointerClick, Settings, Target, Paintbrush, Play } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function IntroductionToTailwind() {

  // Utility Classes Example - Enhanced with animations
  const utilityClassesHtml = `<div class="bg-gradient-to-br from-cyan-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-screen p-8">
  <div class="max-w-5xl mx-auto space-y-8">
    <!-- Hero Section -->
    <div class="text-center mb-12 space-y-4">
      <div class="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 px-4 py-2 rounded-full text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        Utility-First CSS Framework
      </div>
      <h1 class="text-5xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent mb-4">Build Anything, Fast</h1>
      <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Compose beautiful designs directly in your HTML with pre-built utility classes</p>
    </div>

    <!-- Color Utilities - Enhanced with hover effects -->
    <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-3 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white">Color Palette</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Vibrant colors with semantic meaning</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="group cursor-pointer">
          <div class="bg-gradient-to-br from-rose-400 to-rose-600 text-white px-6 py-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">Rose</div>
              <div class="text-xs opacity-90">bg-rose-500</div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div class="bg-gradient-to-br from-amber-400 to-amber-600 text-white px-6 py-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">Amber</div>
              <div class="text-xs opacity-90">bg-amber-500</div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div class="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white px-6 py-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">Emerald</div>
              <div class="text-xs opacity-90">bg-emerald-500</div>
            </div>
          </div>
        </div>
        <div class="group cursor-pointer">
          <div class="bg-gradient-to-br from-sky-400 to-sky-600 text-white px-6 py-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">Sky</div>
              <div class="text-xs opacity-90">bg-sky-500</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacing System with Visual Scale -->
    <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white">Spacing Scale</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Consistent spacing system for layout harmony</p>
        </div>
      </div>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <div class="w-16 text-sm font-mono text-slate-600 dark:text-slate-400">p-2</div>
          <div class="flex-1 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 p-2 rounded-lg border-2 border-violet-300 dark:border-violet-700">
            <div class="bg-violet-500/20 dark:bg-violet-500/40 rounded h-8 flex items-center justify-center text-xs font-medium text-violet-700 dark:text-violet-300">
              0.5rem (8px)
            </div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-16 text-sm font-mono text-slate-600 dark:text-slate-400">p-4</div>
          <div class="flex-1 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 p-4 rounded-lg border-2 border-violet-300 dark:border-violet-700">
            <div class="bg-violet-500/20 dark:bg-violet-500/40 rounded h-8 flex items-center justify-center text-xs font-medium text-violet-700 dark:text-violet-300">
              1rem (16px)
            </div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-16 text-sm font-mono text-slate-600 dark:text-slate-400">p-8</div>
          <div class="flex-1 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 p-8 rounded-lg border-2 border-violet-300 dark:border-violet-700">
            <div class="bg-violet-500/20 dark:bg-violet-500/40 rounded h-8 flex items-center justify-center text-xs font-medium text-violet-700 dark:text-violet-300">
              2rem (32px)
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Typography System -->
    <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white">Typography</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Responsive text sizes and weights</p>
        </div>
      </div>
      <div class="space-y-6">
        <div class="group hover:bg-slate-50 dark:hover:bg-slate-700/50 p-4 rounded-xl transition-colors">
          <div class="flex items-baseline justify-between mb-2">
            <p class="text-sm font-mono text-cyan-600 dark:text-cyan-400">text-sm</p>
            <span class="text-xs text-slate-400">0.875rem</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300">Small text for captions and labels</p>
        </div>
        <div class="group hover:bg-slate-50 dark:hover:bg-slate-700/50 p-4 rounded-xl transition-colors">
          <div class="flex items-baseline justify-between mb-2">
            <p class="text-base font-mono text-cyan-600 dark:text-cyan-400">text-base</p>
            <span class="text-xs text-slate-400">1rem</span>
          </div>
          <p class="text-base text-slate-600 dark:text-slate-300">Base body text, perfect for paragraphs</p>
        </div>
        <div class="group hover:bg-slate-50 dark:hover:bg-slate-700/50 p-4 rounded-xl transition-colors">
          <div class="flex items-baseline justify-between mb-2">
            <p class="text-lg font-mono text-cyan-600 dark:text-cyan-400">text-lg</p>
            <span class="text-xs text-slate-400">1.125rem</span>
          </div>
          <p class="text-lg text-slate-700 dark:text-slate-200">Larger text for emphasis and subheadings</p>
        </div>
        <div class="group hover:bg-slate-50 dark:hover:bg-slate-700/50 p-4 rounded-xl transition-colors">
          <div class="flex items-baseline justify-between mb-2">
            <p class="text-2xl font-mono text-cyan-600 dark:text-cyan-400">text-2xl font-bold</p>
            <span class="text-xs text-slate-400">1.5rem</span>
          </div>
          <p class="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">Bold headings that command attention</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const utilityClassesCss = `/* Tailwind provides thousands of utility classes */
/* Combine them to build any design */`;

  // Flexbox Layout Example
  const flexboxLayoutHtml = `<div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-950 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Flexbox with Tailwind</h2>
    
    <!-- Horizontal Layout -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 shadow-sm">
      <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">flex justify-between items-center</h3>
      <div class="flex justify-between items-center bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
        <div class="bg-indigo-500 text-white px-4 py-2 rounded">Left</div>
        <div class="bg-violet-500 text-white px-4 py-2 rounded">Center</div>
        <div class="bg-purple-500 text-white px-4 py-2 rounded">Right</div>
      </div>
    </div>

    <!-- Vertical Layout -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 shadow-sm">
      <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">flex flex-col gap-4</h3>
      <div class="flex flex-col gap-4 bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
        <div class="bg-rose-500 text-white px-4 py-2 rounded text-center">Item 1</div>
        <div class="bg-pink-500 text-white px-4 py-2 rounded text-center">Item 2</div>
        <div class="bg-fuchsia-500 text-white px-4 py-2 rounded text-center">Item 3</div>
      </div>
    </div>

    <!-- Grid Layout -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
      <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">grid grid-cols-3 gap-4</h3>
      <div class="grid grid-cols-3 gap-4 bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
        <div class="bg-cyan-500 text-white px-4 py-2 rounded text-center">1</div>
        <div class="bg-sky-500 text-white px-4 py-2 rounded text-center">2</div>
        <div class="bg-blue-500 text-white px-4 py-2 rounded text-center">3</div>
        <div class="bg-indigo-500 text-white px-4 py-2 rounded text-center">4</div>
        <div class="bg-violet-500 text-white px-4 py-2 rounded text-center">5</div>
        <div class="bg-purple-500 text-white px-4 py-2 rounded text-center">6</div>
      </div>
    </div>
  </div>
</div>`;

  const flexboxLayoutCss = `/* Flexbox: flex, justify-*, items-* */
/* Grid: grid, grid-cols-*, gap-* */
/* All responsive with breakpoint prefixes */`;

  // Responsive Design Example
  const responsiveDesignHtml = `<div class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-950 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Responsive Design</h2>
    <p class="text-center text-slate-600 dark:text-slate-300 mb-8 text-sm">Resize your browser to see the changes!</p>
    
    <!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
        <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-3">
          <span class="text-2xl">📱</span>
        </div>
        <h3 class="font-semibold text-slate-800 dark:text-white mb-1">Mobile First</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400">Start with mobile layout</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
        <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-3">
          <span class="text-2xl">💻</span>
        </div>
        <h3 class="font-semibold text-slate-800 dark:text-white mb-1">Breakpoints</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400">sm, md, lg, xl, 2xl</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
        <div class="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-3">
          <span class="text-2xl">🎯</span>
        </div>
        <h3 class="font-semibold text-slate-800 dark:text-white mb-1">Flexible</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400">Adapts to any screen</p>
      </div>
      
      <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
        <div class="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mb-3">
          <span class="text-2xl">⚡</span>
        </div>
        <h3 class="font-semibold text-slate-800 dark:text-white mb-1">Fast</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400">No media queries needed</p>
      </div>
    </div>

    <!-- Breakpoint Example -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
      <h3 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Class Example</h3>
      <div class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-lg text-center font-mono text-sm">
        <div class="block md:hidden">Mobile View (default)</div>
        <div class="hidden md:block lg:hidden">Tablet View (md:)</div>
        <div class="hidden lg:block">Desktop View (lg:)</div>
      </div>
    </div>
  </div>
</div>`;

  const responsiveDesignCss = `/* Responsive prefixes:
   - sm: @media (min-width: 640px)
   - md: @media (min-width: 768px)
   - lg: @media (min-width: 1024px)
   - xl: @media (min-width: 1280px)
*/`;

  // Interactive States Example
  const interactiveStatesHtml = `<div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-950 dark:to-slate-900 min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Interactive States</h2>
    
    <!-- Hover States -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 shadow-sm">
      <h3 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Hover Effects</h3>
      <div class="flex flex-wrap gap-3">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
          Hover Me
        </button>
        <button class="bg-emerald-500 hover:scale-105 text-white px-6 py-3 rounded-lg transition-transform">
          Scale on Hover
        </button>
        <button class="bg-violet-500 hover:shadow-lg text-white px-6 py-3 rounded-lg transition-shadow">
          Shadow on Hover
        </button>
      </div>
    </div>

    <!-- Focus States -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 shadow-sm">
      <h3 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Focus States (Click inputs)</h3>
      <div class="space-y-3">
        <input 
          type="text" 
          placeholder="Focus with ring-2"
          class="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
        <input 
          type="text" 
          placeholder="Focus with border color"
          class="w-full px-4 py-2 border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
        >
      </div>
    </div>

    <!-- Active States -->
    <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
      <h3 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Active States (Click & Hold)</h3>
      <div class="flex flex-wrap gap-3">
        <button class="bg-rose-500 active:bg-rose-700 text-white px-6 py-3 rounded-lg transition-colors">
          Active State
        </button>
        <button class="bg-amber-500 active:scale-95 text-white px-6 py-3 rounded-lg transition-transform">
          Active Scale
        </button>
      </div>
    </div>
  </div>
</div>`;

  const interactiveStatesCss = `/* State prefixes:
   - hover: Mouse hover
   - focus: Keyboard/click focus  
   - active: Pressed state
   - disabled: Disabled elements
*/`;

  const layoutSystemPlayground = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind Layout System Playground</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-500 text-slate-900 dark:text-white">
  <div class="min-h-screen flex items-start justify-center px-4 py-10">
    <div class="w-full max-w-5xl space-y-6 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl">
      <header class="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Layout System</p>
          <h1 class="text-3xl font-bold">Spacing · Display · Position · Flexbox</h1>
        </div>
        <button id="theme-toggle" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600 text-white font-semibold shadow-lg transition hover:bg-cyan-500">
          Toggle Dark Mode
        </button>
      </header>

      <section class="space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Spacing Scales</h2>
          <span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-[0.4em]">gap</span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center space-y-1">
            <span class="text-2xl font-semibold">p-2</span>
            <p class="text-xs text-slate-500 dark:text-slate-400">0.5rem</p>
          </div>
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center space-y-1">
            <span class="text-2xl font-semibold">p-4</span>
            <p class="text-xs text-slate-500 dark:text-slate-400">1rem</p>
          </div>
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center space-y-1">
            <span class="text-2xl font-semibold">p-6</span>
            <p class="text-xs text-slate-500 dark:text-slate-400">1.5rem</p>
          </div>
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center space-y-1">
            <span class="text-2xl font-semibold">p-10</span>
            <p class="text-xs text-slate-500 dark:text-slate-400">2.5rem</p>
          </div>
        </div>
      </section>

      <section class="space-y-3">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Display Utilities</h2>
        <div class="flex flex-wrap gap-3">
          <div class="flex-1 min-w-[120px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">block</p>
            <div class="block text-base font-semibold">I span full width</div>
          </div>
          <div class="flex-1 min-w-[120px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">inline</p>
            <div class="inline">Inline</div>
          </div>
          <div class="flex-1 min-w-[120px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">inline-block</p>
            <div class="inline-block px-3 py-1 rounded-xl bg-slate-200 dark:bg-slate-800">Inline-block</div>
          </div>
          <div class="flex-1 min-w-[120px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-4 text-center">
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">grid</p>
            <div class="grid grid-cols-2 gap-1">
              <span class="bg-slate-200 dark:bg-slate-800 rounded h-7"></span>
              <span class="bg-slate-200 dark:bg-slate-800 rounded h-7"></span>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-3">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Positioning Playground</h2>
        <div class="relative h-56 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 overflow-hidden">
          <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-slate-200 dark:bg-slate-900/80 dark:border-slate-700 text-xs font-semibold">top-4 left-4</div>
          <div class="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-slate-200 dark:bg-slate-900/80 dark:border-slate-700 text-xs font-semibold">bottom-4 right-4</div>
          <div class="absolute top-1/2 left-1/2 px-4 py-2 rounded-2xl bg-slate-900 text-white font-semibold -translate-x-1/2 -translate-y-1/2 shadow-lg">centered</div>
        </div>
      </section>

      <section class="space-y-3">
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Flexbox Layouts</h2>
        <div class="flex flex-wrap gap-4 justify-center p-4 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900/30">
          <span class="flex-1 min-w-[110px] rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white text-center py-3 font-bold">item 1</span>
          <span class="flex-1 min-w-[110px] rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-center py-3 font-bold">item 2</span>
          <span class="flex-1 min-w-[110px] rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white text-center py-3 font-bold">item 3</span>
          <span class="flex-1 min-w-[110px] rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white text-center py-3 font-bold">item 4</span>
        </div>
      </section>
    </div>
  </div>
</body>
</html>`,
    css: `:root {
  --bg: #f8fafc;
  --text: #0f172a;
}
.dark {
  --bg: #0f172a;
  --text: #f8fafc;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
}`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    root.classList.add('dark');
  }

  const updateLabel = () => {
    if (!toggle) return;
    const isDark = root.classList.contains('dark');
    toggle.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  };

  toggle?.addEventListener('click', () => {
    root.classList.toggle('dark');
    updateLabel();
  });

  updateLabel();
});`,
  };

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Wind}
        category="Tailwind CSS · Fundamentals"
        title="Introduction to Tailwind CSS"
        description="A utility-first CSS framework for rapidly building modern websites without leaving your HTML"
        colorTheme="cyan"
      />

      {/* INNOVATIVE HERO BANNER */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 p-1">
        <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 md:p-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Most Popular CSS Framework 2024</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  Build{' '}
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Faster
                  </span>
                  {' '}with Less Code
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Stop context-switching between HTML and CSS. Design beautiful interfaces using pre-built utility classes.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200/50 dark:border-cyan-800/50">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">10x</div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Faster Dev</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">50%</div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Less CSS</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl border border-violet-200/50 dark:border-violet-800/50">
                    <div className="text-3xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">100%</div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Customizable</div>
                  </div>
                </div>
              </div>

              {/* Right Visual Demo */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  {/* Code Window Mockup */}
                  <div className="bg-slate-50 dark:bg-slate-950 rounded-xl shadow-2xl border border-slate-300 dark:border-slate-700 overflow-hidden">
                    {/* Window Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-black border-b border-slate-300 dark:border-slate-700">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">button.html</span>
                      </div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-4 font-mono text-sm">
                      <div className="space-y-1">
                        <div className="text-slate-600 dark:text-slate-500">{'<'}button</div>
                        <div className="pl-4">
                          <span className="text-cyan-600 dark:text-cyan-400">class</span>
                          <span className="text-slate-500 dark:text-slate-400">=</span>
                          <span className="text-green-600 dark:text-green-400">"</span>
                        </div>
                        <div className="pl-8 text-green-600 dark:text-green-400">
                          bg-gradient-to-r
                        </div>
                        <div className="pl-8 text-green-600 dark:text-green-400">
                          from-cyan-500 to-blue-600
                        </div>
                        <div className="pl-8 text-green-600 dark:text-green-400">
                          text-white font-semibold
                        </div>
                        <div className="pl-8 text-green-600 dark:text-green-400">
                          px-6 py-3 rounded-xl
                        </div>
                        <div className="pl-8 text-green-600 dark:text-green-400">
                          hover:shadow-2xl
                        </div>
                        <div className="pl-8 text-green-600 dark:text-green-400">
                          transform hover:scale-105
                        </div>
                        <div className="pl-4">
                          <span className="text-green-600 dark:text-green-400">"</span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-500">{'>'}</div>
                        <div className="pl-4 text-slate-700 dark:text-slate-300">Click Me!</div>
                        <div className="text-slate-600 dark:text-slate-500">{'</'}button{'>'}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live Preview Arrow */}
                  <div className="flex items-center justify-center my-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg animate-pulse">
                      ↓ Live Result
                    </div>
                  </div>
                  
                  {/* Live Button Preview */}
                  <div className="flex justify-center p-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-300 dark:border-slate-700">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer">
                      Click Me! ✨
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTRODUCTION CARD - Enhanced with Animation Style */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Wind className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is Tailwind CSS?
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            🚀 A revolutionary utility-first CSS framework that changes how you build user interfaces!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Interactive Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 The Tailwind Approach
                </h4>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  Instead of writing custom CSS, you compose utility classes directly in your HTML. This means faster development, 
                  smaller CSS files, and easier maintenance!
                </p>

                {/* Visual comparison */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-slate-700 dark:text-gray-400 mb-2">Traditional CSS</div>
                    <div className="relative h-24 bg-red-50 dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-red-300 dark:border-gray-600 p-2">
                      <div className="text-[10px] font-mono text-left text-red-700 dark:text-red-400 leading-relaxed">
                        <div>.button {'{'}</div>
                        <div>&nbsp;&nbsp;background: blue;</div>
                        <div>&nbsp;&nbsp;padding: 12px;</div>
                        <div>&nbsp;&nbsp;border-radius: 8px;</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <div className="text-xs text-orange-600 dark:text-orange-400 mt-2 font-medium">⚠️ Separate CSS file</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs font-semibold text-slate-700 dark:text-gray-400 mb-2">Tailwind CSS</div>
                    <div className="relative h-24 bg-green-50 dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-green-400 dark:border-green-600 p-2 flex items-center justify-center">
                      <div className="text-[10px] font-mono text-green-700 dark:text-green-400 leading-relaxed">
                        class="bg-blue-500<br/>px-3 py-2<br/>rounded-lg"
                      </div>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">✅ Right in HTML!</div>
                  </div>
                </div>

                {/* Interactive hint */}
                <div className="bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-green-200/50">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                    <MousePointerClick className="w-4 h-4" />
                    💡 Key Insight
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    No more switching between HTML and CSS files. Write styles directly where you need them!
                  </div>
                </div>
              </div>

              {/* Feature Capabilities Grid */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  🎨 Core Features
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200/50">
                    <Paintbrush className="w-6 h-6 text-cyan-500" />
                    <div>
                      <div className="font-semibold text-cyan-700 dark:text-cyan-300 text-sm">Utility-First</div>
                      <div className="text-xs text-cyan-600 dark:text-cyan-400">Compose from classes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Smartphone className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Responsive</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Mobile-first design</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <Zap className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Fast Dev</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Build rapidly</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Layout className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Customizable</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Full control</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Comparison Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">🎯</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">Why Tailwind?</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      No CSS Files Needed
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Smaller Bundle Size
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent Design
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Easier Maintenance
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro Tip Card */}
              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Start with CDN for quick prototyping, then move to a build setup for production!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Code Example */}
          <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl p-4 border border-slate-200 dark:border-gray-700 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-600 dark:text-gray-400 text-sm ml-2 font-semibold">Tailwind Example</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-slate-500 dark:text-gray-500">/* 🎨 Utility classes compose to create styles */</div>
              <div className="text-slate-800 dark:text-white">&lt;<span className="text-purple-600 dark:text-purple-400">button</span></div>
              <div className="text-slate-800 dark:text-white">  <span className="text-blue-600 dark:text-blue-400">class</span>=<span className="text-green-600 dark:text-yellow-400">"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"</span></div>
              <div className="text-slate-800 dark:text-white">&gt;</div>
              <div className="text-slate-800 dark:text-white">  Click me</div>
              <div className="text-slate-800 dark:text-white">&lt;/<span className="text-purple-600 dark:text-purple-400">button</span>&gt;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* UTILITY CLASSES EXAMPLE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            1. Utility Classes
          </CardTitle>
          <CardDescription>
            Learn the building blocks: colors, spacing, and typography
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={utilityClassesHtml}
            css={utilityClassesCss}
            title="Utility Classes"
            description="Colors, spacing, typography - the foundation of Tailwind"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* FLEXBOX LAYOUT EXAMPLE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            2. Flexbox & Grid Layouts
          </CardTitle>
          <CardDescription>
            Build complex layouts with simple utility classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexboxLayoutHtml}
            css={flexboxLayoutCss}
            title="Flexbox & Grid"
            description="Horizontal, vertical, and grid layouts made easy"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* RESPONSIVE DESIGN EXAMPLE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Smartphone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Responsive Design
          </CardTitle>
          <CardDescription>
            Mobile-first approach with breakpoint prefixes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={responsiveDesignHtml}
            css={responsiveDesignCss}
            title="Responsive Design"
            description="Adapts automatically to any screen size"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* INTERACTIVE STATES EXAMPLE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            4. Interactive States
          </CardTitle>
          <CardDescription>
            Hover, focus, and active states for user interaction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interactiveStatesHtml}
            css={interactiveStatesCss}
            title="Interactive States"
            description="Add interactivity with state prefixes"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Common Tailwind utility patterns at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">bg-{'{'}color{'}'}-{'{'}shade{'}'}</code>
              <p className="text-sm text-muted-foreground mt-1">Background colors (e.g., bg-blue-500)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">text-{'{'}size{'}'}</code>
              <p className="text-sm text-muted-foreground mt-1">Font sizes (e.g., text-xl, text-2xl)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">p-{'{'}size{'}'}, m-{'{'}size{'}'}</code>
              <p className="text-sm text-muted-foreground mt-1">Padding and margin (e.g., p-4, m-2)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">rounded-{'{'}size{'}'}</code>
              <p className="text-sm text-muted-foreground mt-1">Border radius (e.g., rounded, rounded-lg)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">hover:{'{'}utility{'}'}</code>
              <p className="text-sm text-muted-foreground mt-1">Hover states (e.g., hover:bg-blue-600)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">md:{'{'}utility{'}'}</code>
              <p className="text-sm text-muted-foreground mt-1">Responsive breakpoints (e.g., md:flex)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BENEFITS SECTION */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Why Choose Tailwind?
          </CardTitle>
          <CardDescription>
            Understand the advantages of utility-first CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Faster Development</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                No need to name classes or switch files. Style directly in your markup for rapid prototyping.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Smaller CSS</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Tailwind purges unused styles in production, resulting in tiny CSS files (usually under 10KB).
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Consistent Design</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Use a predefined design system with spacing, colors, and typography scales for consistency.
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Easy Maintenance</h4>
              </div>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                All styles are co-located with markup. Delete HTML, and styles automatically disappear.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Tailwind Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Start with the CDN</strong> - Quick prototyping and learning</li>
            <li><strong>Use responsive prefixes</strong> - Mobile-first design (sm:, md:, lg:)</li>
            <li><strong>Leverage hover states</strong> - Add interactivity with hover: prefix</li>
            <li><strong>Extract components</strong> - Use @apply or React components for repeated patterns</li>
            <li><strong>Customize your theme</strong> - Extend Tailwind with your brand colors</li>
            <li><strong>Enable JIT mode</strong> - Just-In-Time mode for faster builds and arbitrary values</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* GETTING STARTED */}
      <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <Sparkles className="h-4 w-4 text-cyan-600" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100">Ready to Get Started?</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200">
          <p className="mb-2">You can start using Tailwind in seconds with the CDN:</p>
          <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-gray-100 mt-2">
            &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
          </div>
          <p className="mt-2 text-sm">
            For production apps, use the CLI or PostCSS setup for optimal performance and customization.
          </p>
        </AlertDescription>
      </Alert>

      {/* INTERACTIVE SYSTEM PLAYGROUND */}
      <Card className="border-sky-200 bg-sky-50/40 dark:bg-sky-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
            <Play className="w-5 h-5" />
            Tailwind Layout System Playground
          </CardTitle>
          <CardDescription>
            Explore spacing scales, display utilities, positioning, and flexbox while toggling between light and dark mode in one live sandbox.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={layoutSystemPlayground.html}
            css={layoutSystemPlayground.css}
            js={layoutSystemPlayground.js}
            title="Spacing · Display · Position · Flexbox"
            description="Play with Tailwind utilities for spacing, display, positioning, and flexbox—perfect for experimentation."
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Spacing</Badge>
            <Badge variant="secondary">Display</Badge>
            <Badge variant="secondary">Position</Badge>
            <Badge variant="secondary">Flexbox</Badge>
            <Badge variant="secondary">Dark Mode Ready</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
