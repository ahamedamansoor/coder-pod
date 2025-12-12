'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Maximize2, CheckCircle, Lightbulb, ArrowRight, Move } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function SpacingUtilities() {

  // Padding Example
  const paddingHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8">
  <div class="bg-blue-500 text-white p-2 mb-4">p-2 = padding: 0.5rem (8px)</div>
  <div class="bg-blue-500 text-white p-4 mb-4">p-4 = padding: 1rem (16px)</div>
  <div class="bg-blue-500 text-white p-8">p-8 = padding: 2rem (32px)</div>
</div>`;

  // Margin Example
  const marginHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8">
  <div class="bg-purple-500 text-white p-4 m-2">m-2</div>
  <div class="bg-purple-500 text-white p-4 m-4">m-4</div>
  <div class="bg-purple-500 text-white p-4 m-8">m-8</div>
</div>`;

  // Directional Spacing
  const directionalHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8">
  <!-- Padding Top & Bottom -->
  <div class="bg-green-500 text-white py-4 px-2 mb-4">
    py-4 px-2 (vertical 4, horizontal 2)
  </div>
  
  <!-- Margin Left & Right -->
  <div class="bg-green-500 text-white p-4 mx-8">
    mx-8 (horizontal margins)
  </div>
  
  <!-- Specific Sides -->
  <div class="bg-green-500 text-white pt-8 pr-4 pb-2 pl-6 mt-4">
    pt-8 pr-4 pb-2 pl-6 (individual sides)
  </div>
</div>`;

  // Spacing Scale
  const scaleHTML = `<div class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 p-8">
  <div class="space-y-2">
    <div class="bg-cyan-500 text-white p-1 text-center text-xs">p-1 (4px)</div>
    <div class="bg-cyan-500 text-white p-2 text-center text-xs">p-2 (8px)</div>
    <div class="bg-cyan-500 text-white p-3 text-center text-xs">p-3 (12px)</div>
    <div class="bg-cyan-500 text-white p-4 text-center text-xs">p-4 (16px)</div>
    <div class="bg-cyan-500 text-white p-6 text-center text-xs">p-6 (24px)</div>
    <div class="bg-cyan-500 text-white p-8 text-center text-xs">p-8 (32px)</div>
  </div>
</div>`;

  // Responsive Spacing
  const responsiveHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-4 md:p-8 lg:p-12">
  <div class="bg-orange-500 text-white p-4 text-center">
    <p class="font-bold mb-2">Responsive Padding</p>
    <p class="text-sm">Container: p-4 on mobile, p-8 on tablet, p-12 on desktop</p>
    <p class="text-xs mt-2">Resize to see the padding grow!</p>
  </div>
</div>`;

  // Space Between
  const spaceBetweenHTML = `<div class="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 p-8">
  <!-- space-y-4: adds margin-top to all children except first -->
  <div class="space-y-4">
    <div class="bg-violet-500 text-white p-4">Item 1</div>
    <div class="bg-violet-500 text-white p-4">Item 2</div>
    <div class="bg-violet-500 text-white p-4">Item 3</div>
  </div>
  
  <p class="text-sm text-violet-700 dark:text-violet-300 mt-6">
    ↑ space-y-4 adds vertical spacing between items
  </p>
</div>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Maximize2}
        category="Tailwind CSS · Core Concepts"
        title="Spacing System"
        description="Master padding, margin, and the spacing scale for perfect layouts"
        colorTheme="blue"
      />

      {/* UNDERSTANDING SPACING */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Move className="w-8 h-8 text-white" />
            </div>
            Padding vs Margin
          </CardTitle>
          <CardDescription className="text-base">
            Two ways to add space - inside and outside
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Padding */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                📦 Padding (p-)
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Space <strong>inside</strong> an element, between content and border
              </p>
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="bg-white dark:bg-slate-900 p-4 rounded text-center text-sm">
                  Content
                </div>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-3">
                ↑ Blue area is padding (p-6)
              </p>
            </div>

            {/* Margin */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                🌊 Margin (m-)
              </h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Space <strong>outside</strong> an element, pushes away from neighbors
              </p>
              <div className="bg-purple-200 dark:bg-purple-900 p-4 rounded-lg">
                <div className="bg-purple-500 p-4 rounded text-white text-center text-sm">
                  Content
                </div>
              </div>
              <p className="text-xs text-purple-700 dark:text-purple-300 mt-3">
                ↑ Light purple area is margin space
              </p>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
              📝 Quick Reference
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Padding:</p>
                <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">p-4</code> = all sides</li>
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">px-4</code> = left & right</li>
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">py-4</code> = top & bottom</li>
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">pt-4</code> = top only</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Margin:</p>
                <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">m-4</code> = all sides</li>
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">mx-4</code> = left & right</li>
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">my-4</code> = top & bottom</li>
                  <li><code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">mb-4</code> = bottom only</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SPACING SCALE */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <Maximize2 className="w-6 h-6 text-white" />
            </div>
            The Spacing Scale
          </CardTitle>
          <CardDescription>
            Consistent sizes from tiny to huge
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">How the Scale Works</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Numbers increase by 4px (0.25rem) increments. <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">p-1</code> = 4px, <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">p-2</code> = 8px, <code className="bg-green-200 dark:bg-green-900 px-2 py-1 rounded">p-4</code> = 16px, etc.
            </AlertDescription>
          </Alert>

          {/* Common Values */}
          <div>
            <h3 className="text-lg font-bold mb-3">Most Common Values:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: '0', px: '0px' },
                { value: '1', px: '4px' },
                { value: '2', px: '8px' },
                { value: '3', px: '12px' },
                { value: '4', px: '16px' },
                { value: '6', px: '24px' },
                { value: '8', px: '32px' },
                { value: '12', px: '48px' },
              ].map(item => (
                <div key={item.value} className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-center border border-green-300 dark:border-green-700">
                  <div className="font-mono font-bold text-lg text-green-900 dark:text-green-100">
                    {item.value}
                  </div>
                  <div className="text-xs text-green-700 dark:text-green-300">
                    {item.px}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Scale */}
          <div>
            <h3 className="text-lg font-bold mb-3">Visual Scale Example:</h3>
            <FrontendCodePreview
              html={scaleHTML}
              title="Spacing Scale"
              description="See the progression from small to large"
              colorTheme="cyan"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* LIVE EXAMPLES */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Live Examples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Padding */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-blue-500">Example 1</Badge>
              Padding Examples
            </h3>
            <FrontendCodePreview
              html={paddingHTML}
              title="Padding Sizes"
              description="Space inside elements"
              colorTheme="blue"
              styleLanguage="tailwind"
            />
          </div>

          {/* Margin */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-purple-500">Example 2</Badge>
              Margin Examples
            </h3>
            <FrontendCodePreview
              html={marginHTML}
              title="Margin Sizes"
              description="Space outside elements"
              colorTheme="purple"
              styleLanguage="tailwind"
            />
          </div>

          {/* Directional */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-green-500">Example 3</Badge>
              Directional Spacing
            </h3>
            <FrontendCodePreview
              html={directionalHTML}
              title="Specific Sides"
              description="Control individual sides"
              colorTheme="green"
              styleLanguage="tailwind"
            />
          </div>

          {/* Responsive */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-orange-500">Example 4</Badge>
              Responsive Spacing
            </h3>
            <FrontendCodePreview
              html={responsiveHTML}
              title="Adaptive Spacing"
              description="Spacing that grows with screen size"
              colorTheme="orange"
              styleLanguage="tailwind"
            />
          </div>

          {/* Space Between */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-violet-500">Example 5</Badge>
              Space Between
            </h3>
            <FrontendCodePreview
              html={spaceBetweenHTML}
              title="Space Between Children"
              description="Add spacing between items automatically"
              colorTheme="violet"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* TIPS */}
      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Lightbulb className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Pro Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">p-4</code> for balanced padding in most cards and containers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">space-y-4</code> for consistent vertical spacing in lists</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Stick to the scale - avoid arbitrary values for consistency!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
