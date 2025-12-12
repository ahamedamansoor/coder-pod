'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Type, CheckCircle, Lightbulb, ArrowRight, Palette } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function TypographyUtilities() {

  // Font Size Examples
  const fontSizeHTML = `<div class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-8 space-y-4">
  <p class="text-xs text-gray-800 dark:text-gray-200">text-xs: Extra small text (0.75rem)</p>
  <p class="text-sm text-gray-800 dark:text-gray-200">text-sm: Small text (0.875rem)</p>
  <p class="text-base text-gray-800 dark:text-gray-200">text-base: Base text (1rem)</p>
  <p class="text-lg text-gray-800 dark:text-gray-200">text-lg: Large text (1.125rem)</p>
  <p class="text-xl text-gray-800 dark:text-gray-200">text-xl: Extra large (1.25rem)</p>
  <p class="text-2xl text-gray-800 dark:text-gray-200">text-2xl: 2X large (1.5rem)</p>
  <p class="text-3xl text-gray-800 dark:text-gray-200">text-3xl: 3X large (1.875rem)</p>
</div>`;

  // Font Weight Examples
  const fontWeightHTML = `<div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-8 space-y-3">
  <p class="font-thin text-gray-800 dark:text-gray-200">font-thin: Thin weight (100)</p>
  <p class="font-light text-gray-800 dark:text-gray-200">font-light: Light weight (300)</p>
  <p class="font-normal text-gray-800 dark:text-gray-200">font-normal: Normal weight (400)</p>
  <p class="font-medium text-gray-800 dark:text-gray-200">font-medium: Medium weight (500)</p>
  <p class="font-semibold text-gray-800 dark:text-gray-200">font-semibold: Semibold (600)</p>
  <p class="font-bold text-gray-800 dark:text-gray-200">font-bold: Bold weight (700)</p>
  <p class="font-extrabold text-gray-800 dark:text-gray-200">font-extrabold: Extra bold (800)</p>
</div>`;

  // Text Alignment
  const textAlignHTML = `<div class="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-8 space-y-4">
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-left text-gray-800 dark:text-gray-200">text-left: Left aligned text</p>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-center text-gray-800 dark:text-gray-200">text-center: Center aligned text</p>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-right text-gray-800 dark:text-gray-200">text-right: Right aligned text</p>
  </div>
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-justify text-gray-800 dark:text-gray-200">text-justify: Justified text spreads evenly across the line. This is useful for longer paragraphs where you want consistent spacing.</p>
  </div>
</div>`;

  // Text Colors
  const textColorHTML = `<div class="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950 dark:to-amber-950 p-8 space-y-3">
  <p class="text-red-500 dark:text-red-400 font-semibold">text-red-500: Red text</p>
  <p class="text-orange-500 dark:text-orange-400 font-semibold">text-orange-500: Orange text</p>
  <p class="text-yellow-600 dark:text-yellow-400 font-semibold">text-yellow-600: Yellow text</p>
  <p class="text-green-500 dark:text-green-400 font-semibold">text-green-500: Green text</p>
  <p class="text-blue-500 dark:text-blue-400 font-semibold">text-blue-500: Blue text</p>
  <p class="text-purple-500 dark:text-purple-400 font-semibold">text-purple-500: Purple text</p>
  <p class="text-pink-500 dark:text-pink-400 font-semibold">text-pink-500: Pink text</p>
  <p class="text-gray-600 dark:text-gray-400">text-gray-600: Muted text</p>
</div>`;

  // Line Height & Spacing
  const lineHeightHTML = `<div class="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-8 space-y-6">
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">leading-tight (1.25)</p>
    <p class="leading-tight text-gray-800 dark:text-gray-200">
      This paragraph has tight line height. Lines are close together. 
      Good for headlines or compact text displays.
    </p>
  </div>
  
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">leading-normal (1.5)</p>
    <p class="leading-normal text-gray-800 dark:text-gray-200">
      This paragraph has normal line height. This is the default and 
      works well for most body text.
    </p>
  </div>
  
  <div class="bg-white dark:bg-slate-800 rounded-lg p-4">
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">leading-loose (2)</p>
    <p class="leading-loose text-gray-800 dark:text-gray-200">
      This paragraph has loose line height. Lines have more space. 
      Good for readability in longer content.
    </p>
  </div>
</div>`;

  // Text Decoration
  const decorationHTML = `<div class="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 p-8 space-y-4">
  <p class="underline text-gray-800 dark:text-gray-200">underline: Underlined text</p>
  <p class="line-through text-gray-800 dark:text-gray-200">line-through: Strikethrough text</p>
  <p class="no-underline text-blue-600 dark:text-blue-400 underline">
    <span class="no-underline">no-underline:</span> Remove decoration
  </p>
  <p class="underline decoration-wavy decoration-red-500 text-gray-800 dark:text-gray-200">
    decoration-wavy: Wavy underline
  </p>
  <p class="underline decoration-2 decoration-blue-500 text-gray-800 dark:text-gray-200">
    decoration-2: Thicker underline
  </p>
</div>`;

  // Complete Typography Card
  const typographyCardHTML = `<div class="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
  <!-- Heading -->
  <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
    Beautiful Typography
  </h1>
  
  <!-- Subtitle -->
  <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
    Making text look great with Tailwind utilities
  </p>
  
  <!-- Body Text -->
  <p class="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
    This is body text with <span class="font-semibold text-blue-600 dark:text-blue-400">semantic highlighting</span> 
    and perfect <span class="italic">readability</span>. Notice how the line height and font size 
    work together for comfortable reading.
  </p>
  
  <!-- Quote -->
  <blockquote class="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-gray-600 dark:text-gray-400 mb-4">
    "Typography is the craft of endowing human language with a durable visual form."
  </blockquote>
  
  <!-- Small Text -->
  <p class="text-sm text-gray-500 dark:text-gray-500">
    Small text for captions, footnotes, or secondary information.
  </p>
</div>`;

  // Responsive Typography
  const responsiveHTML = `<div class="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-950 dark:to-rose-950 p-8">
  <div class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center">
    <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
      Responsive Heading
    </h1>
    <p class="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">
      Text grows with screen size: small on mobile, medium on tablet, large on desktop
    </p>
    <p class="text-xs mt-4 text-gray-500 dark:text-gray-500">
      Resize your browser to see it change!
    </p>
  </div>
</div>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Type}
        category="Tailwind CSS · Core Concepts"
        title="Typography Utilities"
        description="Control font size, weight, color, and text styling"
        colorTheme="purple"
      />

      {/* FONT SIZE */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Type className="w-8 h-8 text-white" />
            </div>
            Font Size
          </CardTitle>
          <CardDescription className="text-base">
            Control text size from tiny to huge
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Font Size Scale</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Tailwind provides sizes from <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-xs</code> (12px) 
              to <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-9xl</code> (128px). Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-base</code> for body text.
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-bold mb-3">Common Sizes:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { class: 'text-xs', size: '0.75rem' },
                { class: 'text-sm', size: '0.875rem' },
                { class: 'text-base', size: '1rem' },
                { class: 'text-lg', size: '1.125rem' },
                { class: 'text-xl', size: '1.25rem' },
                { class: 'text-2xl', size: '1.5rem' },
                { class: 'text-3xl', size: '1.875rem' },
                { class: 'text-4xl', size: '2.25rem' }
              ].map(item => (
                <div key={item.class} className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 text-center border border-blue-300 dark:border-blue-700">
                  <div className="font-mono font-bold text-sm text-blue-900 dark:text-blue-100">
                    {item.class}
                  </div>
                  <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    {item.size}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FrontendCodePreview
            html={fontSizeHTML}
            title="Font Size Examples"
            description="See all the different text sizes"
            colorTheme="blue"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* FONT WEIGHT */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-purple-500 rounded-lg">
              <Type className="w-6 h-6 text-white" />
            </div>
            Font Weight
          </CardTitle>
          <CardDescription>
            Make text lighter or bolder
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">
              When to Use Each Weight
            </h3>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                <span><strong>font-normal:</strong> Body text, paragraphs</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                <span><strong>font-semibold:</strong> Subheadings, emphasis</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-purple-600" />
                <span><strong>font-bold:</strong> Headlines, important text</span>
              </li>
            </ul>
          </div>

          <FrontendCodePreview
            html={fontWeightHTML}
            title="Font Weight Examples"
            description="From thin to extra bold"
            colorTheme="purple"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* TEXT ALIGNMENT */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Text Alignment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={textAlignHTML}
            title="Text Alignment"
            description="Align text left, center, right, or justify"
            colorTheme="green"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* TEXT COLORS */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            Text Colors
          </CardTitle>
          <CardDescription>
            Colorful text with semantic meaning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Dark Mode Colors</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Use lighter shades for dark mode: <code className="bg-orange-200 dark:bg-orange-900 px-2 py-1 rounded">text-blue-500 dark:text-blue-400</code>
            </AlertDescription>
          </Alert>

          <FrontendCodePreview
            html={textColorHTML}
            title="Text Colors"
            description="Full color palette for text"
            colorTheme="orange"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* LINE HEIGHT */}
      <Card className="border-2 border-cyan-200 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-cyan-500 rounded-lg">
              <Type className="w-6 h-6 text-white" />
            </div>
            Line Height & Spacing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={lineHeightHTML}
            title="Line Height"
            description="Control spacing between lines"
            colorTheme="cyan"
            styleLanguage="tailwind"
          />
        </CardContent>
      </Card>

      {/* TEXT DECORATION */}
      <Card className="border-2 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-violet-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            Text Decoration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={decorationHTML}
            title="Text Decoration"
            description="Underlines, strikethrough, and more"
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
              <Palette className="w-6 h-6 text-white" />
            </div>
            Complete Typography Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-pink-500">Example 1</Badge>
              Beautiful Content Card
            </h3>
            <FrontendCodePreview
              html={typographyCardHTML}
              title="Typography Card"
              description="Professional text styling"
              colorTheme="pink"
              styleLanguage="tailwind"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Badge className="bg-rose-500">Example 2</Badge>
              Responsive Typography
            </h3>
            <FrontendCodePreview
              html={responsiveHTML}
              title="Responsive Text"
              description="Text that adapts to screen size"
              colorTheme="pink"
              styleLanguage="tailwind"
            />
          </div>
        </CardContent>
      </Card>

      {/* TIPS */}
      <Alert className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <Type className="w-5 h-5 text-blue-600" />
        <AlertTitle className="text-2xl text-blue-900 dark:text-blue-100">Typography Tips</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-gray-700 dark:text-gray-300</code> for body text</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine size + weight: <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">text-2xl font-bold</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <code className="bg-blue-200 dark:bg-blue-900 px-2 py-1 rounded">leading-relaxed</code> for better readability</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
