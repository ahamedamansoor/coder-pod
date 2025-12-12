'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layout, CheckCircle, Lightbulb, ArrowRight, Eye } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function DisplayUtilities() {

  const blockInlineHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <!-- Block -->
  <div class="bg-blue-500 text-white p-4 rounded block">
    block: Takes full width
  </div>
  <div class="bg-blue-500 text-white p-4 rounded block">
    block: New line
  </div>
  
  <!-- Inline-Block -->
  <div class="mt-4">
    <div class="inline-block bg-green-500 text-white p-4 rounded mr-2">
      inline-block
    </div>
    <div class="inline-block bg-green-500 text-white p-4 rounded">
      inline-block
    </div>
  </div>
</div>`;

  const flexHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="flex gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
    <div class="bg-purple-500 text-white p-4 rounded flex-1 text-center">
      flex item 1
    </div>
    <div class="bg-purple-500 text-white p-4 rounded flex-1 text-center">
      flex item 2
    </div>
    <div class="bg-purple-500 text-white p-4 rounded flex-1 text-center">
      flex item 3
    </div>
  </div>
</div>`;

  const gridHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-green-500 text-white p-6 rounded text-center">1</div>
    <div class="bg-green-500 text-white p-6 rounded text-center">2</div>
    <div class="bg-green-500 text-white p-6 rounded text-center">3</div>
    <div class="bg-green-500 text-white p-6 rounded text-center">4</div>
    <div class="bg-green-500 text-white p-6 rounded text-center">5</div>
    <div class="bg-green-500 text-white p-6 rounded text-center">6</div>
  </div>
</div>`;

  const hiddenHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8 space-y-4">
  <div class="bg-white dark:bg-slate-800 p-4 rounded">
    <p class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Always Visible</p>
    <p class="text-gray-600 dark:text-gray-400 text-sm">This element is always shown</p>
  </div>
  
  <div class="hidden md:block bg-white dark:bg-slate-800 p-4 rounded">
    <p class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Hidden on Mobile</p>
    <p class="text-gray-600 dark:text-gray-400 text-sm">Only visible on tablet and above (md:block)</p>
  </div>
  
  <div class="block lg:hidden bg-white dark:bg-slate-800 p-4 rounded">
    <p class="text-gray-800 dark:text-gray-200 font-semibold mb-2">Mobile & Tablet Only</p>
    <p class="text-gray-600 dark:text-gray-400 text-sm">Hidden on desktop (block lg:hidden)</p>
  </div>
</div>`;

  const responsiveHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8">
  <!-- Changes from block to flex on medium screens -->
  <div class="block md:flex gap-4">
    <div class="bg-cyan-500 text-white p-6 rounded mb-4 md:mb-0 md:flex-1 text-center">
      <p class="font-semibold">Item 1</p>
      <p class="text-xs mt-1">Stacked on mobile, flex on tablet+</p>
    </div>
    <div class="bg-blue-500 text-white p-6 rounded md:flex-1 text-center">
      <p class="font-semibold">Item 2</p>
      <p class="text-xs mt-1">block → md:flex</p>
    </div>
  </div>
</div>`;

  const navbarHTML = `<div class="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
  <!-- Desktop Navigation -->
  <nav class="p-4">
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold text-gray-800 dark:text-white">
        Logo
      </div>
      
      <!-- Desktop Menu (hidden on mobile) -->
      <div class="hidden md:flex gap-6">
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
        <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
      </div>
      
      <!-- Mobile Menu Button (hidden on desktop) -->
      <button class="md:hidden bg-blue-500 text-white px-4 py-2 rounded">
        Menu
      </button>
    </div>
  </nav>
</div>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layout}
        category="Tailwind CSS · Layout"
        title="Display Utilities"
        description="Control how elements are displayed and positioned"
        colorTheme="blue"
      />

      {/* DISPLAY TYPES */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Layout className="w-8 h-8 text-white" />
            </div>
            Display Types
          </CardTitle>
          <CardDescription className="text-base">
            Block, inline, flex, and grid
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Common Display Values</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">block</code> = full width, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">inline-block</code> = flows inline, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">flex</code> = flexbox, 
              <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded ml-1">grid</code> = grid layout
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Display Classes:</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { class: 'block', desc: 'Block level' },
                { class: 'inline-block', desc: 'Inline with width' },
                { class: 'inline', desc: 'Inline flow' },
                { class: 'flex', desc: 'Flexbox' },
                { class: 'inline-flex', desc: 'Inline flexbox' },
                { class: 'grid', desc: 'Grid layout' },
                { class: 'inline-grid', desc: 'Inline grid' },
                { class: 'hidden', desc: 'Not displayed' },
                { class: 'table', desc: 'Table display' }
              ].map(item => (
                <div key={item.class} className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-300 dark:border-blue-700">
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

          <FrontendCodePreview
            html={blockInlineHTML}
            title="Block vs Inline-Block"
            description="See the difference in layout behavior"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* FLEX */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Layout className="w-6 h-6 text-white" />
            </div>
            Flex Display
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexHTML}
            title="Flex Layout"
            description="Items arranged horizontally with flexbox"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* GRID */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Layout className="w-6 h-6 text-white" />
            </div>
            Grid Display
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={gridHTML}
            title="Grid Layout"
            description="Items arranged in a grid"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* HIDDEN */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            Show/Hide Elements
          </CardTitle>
          <CardDescription>
            Responsive visibility control
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hiddenHTML}
            title="Responsive Visibility"
            description="Show/hide based on screen size"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* RESPONSIVE DISPLAY */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Responsive Display
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={responsiveHTML}
            title="Changing Display Types"
            description="Switch display modes at breakpoints"
            colorTheme="cyan"
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
            Responsive Navigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={navbarHTML}
            title="Responsive Navbar"
            description="Desktop menu, mobile button"
            colorTheme="pink"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-violet-500 rounded-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-violet-50 dark:bg-violet-950/20 rounded-lg p-4 border border-violet-200 dark:border-violet-800">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-3">Display</h4>
              <ul className="space-y-2 text-sm text-violet-800 dark:text-violet-200 font-mono">
                <li>block</li>
                <li>inline-block</li>
                <li>flex / grid</li>
                <li>hidden</li>
              </ul>
            </div>

            <div className="bg-violet-50 dark:bg-violet-950/20 rounded-lg p-4 border border-violet-200 dark:border-violet-800">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-3">Responsive</h4>
              <ul className="space-y-2 text-sm text-violet-800 dark:text-violet-200 font-mono">
                <li>hidden md:block</li>
                <li>block lg:flex</li>
                <li>md:hidden</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Layout className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Display Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">flex</code> for single-row layouts</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">grid</code> for multi-dimensional layouts</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Hide elements responsively: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">hidden lg:block</code></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
