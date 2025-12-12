'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Smartphone, Monitor, Tablet, Zap, CheckCircle, Lightbulb, ArrowRight, Layout } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function ResponsiveDesignBasics() {

  // Mobile First Example
  const mobileFirstHTML = `<div class="bg-blue-500 p-4 md:p-8 lg:p-12">
  <h1 class="text-xl md:text-2xl lg:text-4xl font-bold text-white">
    Responsive Text
  </h1>
  <p class="text-sm md:text-base lg:text-lg text-white/90 mt-2">
    The padding and text size grow on larger screens!
  </p>
</div>`;

  // Grid Example
  const responsiveGridHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  <div class="bg-red-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Box 1</p>
    <p class="text-xs mt-1">1 col mobile, 2 col tablet, 4 col desktop</p>
  </div>
  <div class="bg-blue-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Box 2</p>
  </div>
  <div class="bg-green-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Box 3</p>
  </div>
  <div class="bg-purple-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Box 4</p>
  </div>
</div>`;

  // Hidden/Show Example
  const hideShowHTML = `<div class="p-8 bg-gradient-to-r from-purple-500 to-pink-500">
  <!-- Hidden on mobile, visible on tablet+ -->
  <p class="hidden md:block text-white text-lg mb-4">
    📱 → 💻 This text only appears on tablet and larger screens!
  </p>
  
  <!-- Visible on mobile, hidden on desktop -->
  <p class="block lg:hidden text-white text-lg mb-4">
    📱 This text only shows on mobile and tablet!
  </p>
  
  <!-- Always visible -->
  <p class="text-white text-lg">
    ✅ This text is always visible!
  </p>
</div>`;

  // Flex Direction Example
  const flexResponsiveHTML = `<div class="flex flex-col md:flex-row gap-4 p-4 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950">
  <div class="flex-1 bg-cyan-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Item 1</p>
    <p class="text-xs mt-1">Stacked on mobile</p>
  </div>
  <div class="flex-1 bg-blue-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Item 2</p>
    <p class="text-xs mt-1">Row on desktop</p>
  </div>
  <div class="flex-1 bg-violet-500 text-white p-6 rounded-lg text-center">
    <p class="font-semibold">Item 3</p>
  </div>
</div>`;

  // Complete Responsive Card
  const responsiveCardHTML = `<div class="max-w-4xl mx-auto p-4">
  <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
    <!-- Responsive layout: vertical on mobile, horizontal on desktop -->
    <div class="flex flex-col md:flex-row">
      <!-- Image -->
      <div class="md:w-1/3">
        <img 
          src="https://via.placeholder.com/400x300" 
          alt="Product" 
          class="w-full h-48 md:h-full object-cover"
        >
      </div>
      
      <!-- Content -->
      <div class="p-6 md:w-2/3">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Responsive Product Card
        </h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
          This card adapts to different screen sizes. Image is on top for mobile, 
          on the left for desktop. Text size also grows!
        </p>
        <div class="flex flex-col sm:flex-row gap-2">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Buy Now
          </button>
          <button class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Smartphone}
        category="Tailwind CSS · Fundamentals"
        title="Responsive Design Basics"
        description="Build mobile-first designs that look great on any screen size"
        colorTheme="blue"
      />

      {/* UNDERSTANDING BREAKPOINTS */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Layout className="w-8 h-8 text-white" />
            </div>
            Understanding Breakpoints
          </CardTitle>
          <CardDescription className="text-base">
            Tailwind's mobile-first approach to responsive design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Mobile-First Principle</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Start with mobile styles (no prefix), then add larger screen styles with prefixes like <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">md:</code> and <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">lg:</code>
            </AlertDescription>
          </Alert>

          {/* Breakpoint Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Default */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 border-2 border-gray-300 dark:border-gray-700">
              <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="font-mono text-lg font-bold text-gray-900 dark:text-white mb-1">
                (default)
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                No prefix needed
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                0px+
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                All devices
              </div>
            </div>

            {/* sm */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 rounded-xl p-4 border-2 border-cyan-300 dark:border-cyan-700">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="font-mono text-lg font-bold text-cyan-900 dark:text-cyan-100 mb-1">
                sm:
              </div>
              <div className="text-xs text-cyan-600 dark:text-cyan-400 mb-2">
                Small devices
              </div>
              <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                640px+
              </div>
              <div className="text-xs text-cyan-500 dark:text-cyan-400 mt-1">
                Large phones
              </div>
            </div>

            {/* md */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-4 border-2 border-blue-300 dark:border-blue-700">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                <Tablet className="w-5 h-5 text-white" />
              </div>
              <div className="font-mono text-lg font-bold text-blue-900 dark:text-blue-100 mb-1">
                md:
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                Medium devices
              </div>
              <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                768px+
              </div>
              <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">
                Tablets
              </div>
            </div>

            {/* lg */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-4 border-2 border-purple-300 dark:border-purple-700">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="font-mono text-lg font-bold text-purple-900 dark:text-purple-100 mb-1">
                lg:
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400 mb-2">
                Large devices
              </div>
              <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                1024px+
              </div>
              <div className="text-xs text-purple-500 dark:text-purple-400 mt-1">
                Laptops
              </div>
            </div>

            {/* xl & 2xl combined */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-xl p-4 border-2 border-pink-300 dark:border-pink-700">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mb-3">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="font-mono text-sm font-bold text-pink-900 dark:text-pink-100 mb-1">
                xl: / 2xl:
              </div>
              <div className="text-xs text-pink-600 dark:text-pink-400 mb-2">
                Extra large
              </div>
              <div className="text-sm font-semibold text-pink-700 dark:text-pink-300">
                1280px+ / 1536px+
              </div>
              <div className="text-xs text-pink-500 dark:text-pink-400 mt-1">
                Desktops
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
              📱 How It Works
            </h3>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <p>
                1. <strong>Start mobile:</strong> <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-sm</code> applies to all sizes
              </p>
              <p>
                2. <strong>Add tablet:</strong> <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">md:text-lg</code> overrides at 768px+
              </p>
              <p>
                3. <strong>Add desktop:</strong> <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">lg:text-2xl</code> overrides at 1024px+
              </p>
              <p className="mt-3 font-semibold">
                💡 Each breakpoint adds styles for that size and up!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LIVE EXAMPLES */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            Try Responsive Classes
          </CardTitle>
          <CardDescription>
            Resize your browser to see these examples adapt!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Example 1: Text & Spacing */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-blue-500">Example 1</Badge>
              Responsive Text & Spacing
            </h3>
            <FrontendCodePreview
              html={mobileFirstHTML}
              title="Growing Text & Padding"
              description="Text and padding increase on larger screens"
              colorTheme="blue"
              styleLanguage="tailwind"
            />
            <div className="mt-3 bg-blue-50 dark:bg-blue-950/20 rounded p-4 text-sm">
              <p className="font-semibold mb-2">What's happening:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <code className="bg-muted px-1 rounded">p-4</code> = small padding on mobile</li>
                <li>• <code className="bg-muted px-1 rounded">md:p-8</code> = medium padding on tablet+</li>
                <li>• <code className="bg-muted px-1 rounded">lg:p-12</code> = large padding on desktop+</li>
              </ul>
            </div>
          </div>

          {/* Example 2: Grid Layout */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-purple-500">Example 2</Badge>
              Responsive Grid
            </h3>
            <FrontendCodePreview
              html={responsiveGridHTML}
              title="Adaptive Grid Columns"
              description="1 column → 2 columns → 4 columns as screen grows"
              colorTheme="purple"
              styleLanguage="tailwind"
            />
          </div>

          {/* Example 3: Hide/Show */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-pink-500">Example 3</Badge>
              Hide & Show Elements
            </h3>
            <FrontendCodePreview
              html={hideShowHTML}
              title="Responsive Visibility"
              description="Show different content based on screen size"
              colorTheme="pink"
              styleLanguage="tailwind"
            />
          </div>

          {/* Example 4: Flex Direction */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-cyan-500">Example 4</Badge>
              Flex Direction
            </h3>
            <FrontendCodePreview
              html={flexResponsiveHTML}
              title="Vertical to Horizontal"
              description="Stack on mobile, row on desktop"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>

          {/* Example 5: Complete Card */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-violet-500">Example 5</Badge>
              Complete Responsive Component
            </h3>
            <FrontendCodePreview
              html={responsiveCardHTML}
              title="Responsive Product Card"
              description="Fully responsive card with image and content"
              colorTheme="violet"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* COMMON PATTERNS */}
      <Card className="border-2 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-amber-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Common Responsive Patterns
          </CardTitle>
          <CardDescription>
            Patterns you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                pattern: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
                desc: 'Responsive grid: 1 → 2 → 4 columns'
              },
              {
                pattern: 'flex-col md:flex-row',
                desc: 'Stack on mobile, row on desktop'
              },
              {
                pattern: 'text-sm md:text-base lg:text-lg',
                desc: 'Growing text sizes'
              },
              {
                pattern: 'hidden md:block',
                desc: 'Hide on mobile, show on tablet+'
              },
              {
                pattern: 'w-full md:w-1/2 lg:w-1/3',
                desc: 'Full width → half → third'
              },
              {
                pattern: 'p-4 md:p-6 lg:p-8',
                desc: 'Increasing padding'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <code className="text-sm font-mono text-amber-900 dark:text-amber-100 bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">
                  {item.pattern}
                </code>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* NEXT STEPS */}
      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Zap className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">You've Got This! 📱</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-3">
          <p className="text-base">
            Responsive design with Tailwind is incredibly easy once you understand the mobile-first approach!
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span><strong>Practice tip:</strong> Start with mobile styles, then add md: and lg: as needed</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span><strong>Debug tip:</strong> Use browser DevTools to test different screen sizes!</span>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
