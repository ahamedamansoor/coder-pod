'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Palette, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Zap, Sparkle
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssModernColorFormatsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssModernColorFormats({ onOpenWebPlayground }: CssModernColorFormatsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="CSS · Styling Basics"
        title="Modern Color Formats"
        description="oklch(), oklab(), color-mix(), and wide-gamut colors"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg animate-pulse">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Modern CSS Colors</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2023</Badge>
                Perceptual colors & color manipulation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Modern Colors = Better Color Science! 🌈</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              New color functions like <strong>oklch()</strong> and <strong>oklab()</strong> are perceptually uniform - 
              meaning they match how humans actually see color. Plus <strong>color-mix()</strong> for Sass-like color manipulation!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Why New Color Formats?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Old (RGB/HSL)</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  • Not perceptually uniform<br />
                  • Brightness inconsistent<br />
                  • Limited color gamut<br />
                  • Hard to create palettes
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ New (oklch/oklab)</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  • Perceptually uniform<br />
                  • Consistent lightness<br />
                  • Wide color gamut<br />
                  • Easy color manipulation
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            oklch() - The Best Color Format
          </CardTitle>
          <CardDescription>Perceptually uniform colors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>oklch</strong> = Lightness, Chroma (saturation), Hue. Like HSL but better!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              oklch() Syntax
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`/* oklch(lightness chroma hue) */
color: oklch(70% 0.15 180);

/* With alpha */
color: oklch(70% 0.15 180 / 0.8);

/* Lightness: 0-100% */
/* Chroma: 0-0.4 (roughly) */
/* Hue: 0-360 degrees */`}
              </code>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong className="text-purple-900 dark:text-purple-100">Lightness</strong>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">0% = black<br/>100% = white</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong className="text-purple-900 dark:text-purple-100">Chroma</strong>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">0 = gray<br/>0.4 = vivid</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong className="text-purple-900 dark:text-purple-100">Hue</strong>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">0 = red<br/>360 = red</p>
              </div>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Why oklch?</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              All colors at 70% lightness <strong>look equally bright</strong> - unlike HSL where yellows are brighter than blues!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            color-mix() Function
          </CardTitle>
          <CardDescription>Mix colors without preprocessors!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Mix two colors together - like Sass mixins but native CSS!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              color-mix() Examples
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`/* 50/50 mix */
color: color-mix(in oklch, blue, red);

/* Weighted mix - 30% blue, 70% red */
color: color-mix(in oklch, blue 30%, red);

/* Mix with transparency */
background: color-mix(in oklch, blue 80%, transparent);

/* Create tints/shades */
--primary: oklch(60% 0.2 280);
--tint: color-mix(in oklch, var(--primary), white 20%);
--shade: color-mix(in oklch, var(--primary), black 20%);`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { use: 'Create Tints', code: 'color-mix(in oklch, blue, white 20%)' },
              { use: 'Create Shades', code: 'color-mix(in oklch, blue, black 20%)' },
              { use: 'Blend Colors', code: 'color-mix(in oklch, blue 70%, red)' },
              { use: 'Add Transparency', code: 'color-mix(in oklch, blue, transparent 30%)' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <p className="font-bold text-blue-900 dark:text-blue-100 mb-2">{item.use}</p>
                <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Palette className="w-6 h-6 text-green-600 dark:text-green-400" />
            Wide-Gamut Colors
          </CardTitle>
          <CardDescription>Display-P3 and beyond</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Modern displays support more colors than sRGB. oklch() can express these vivid colors!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Color Gamuts
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <strong className="text-green-900 dark:text-green-100">sRGB</strong>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Standard web (old)</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <strong className="text-green-900 dark:text-green-100">Display-P3</strong>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Modern phones/monitors (~25% more colors)</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <strong className="text-green-900 dark:text-green-100">Rec2020</strong>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Future displays (~50% more colors)</p>
              </div>
            </div>
            <div className="mt-4 bg-green-900 dark:bg-green-950 p-4 rounded-lg">
              <code className="text-sm text-green-100 block">
{`/* These vivid colors only work in oklch! */
background: oklch(70% 0.35 150); /* Vivid green */
background: oklch(60% 0.30 280); /* Vibrant purple */`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Practical Use Cases
          </CardTitle>
          <CardDescription>When to use modern colors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                use: 'Design Systems',
                code: '--primary: oklch(60% 0.2 280);\n--primary-hover: oklch(70% 0.2 280);',
                desc: 'Consistent lightness across palette'
              },
              {
                use: 'Color Variations',
                code: '--blue: oklch(60% 0.2 250);\n--blue-light: color-mix(in oklch, var(--blue), white 30%);',
                desc: 'Generate tints/shades easily'
              },
              {
                use: 'Accessibility',
                code: 'background: oklch(95% 0.05 280);\ncolor: oklch(20% 0.1 280);',
                desc: 'Predictable contrast ratios'
              },
              {
                use: 'Gradients',
                code: 'background: linear-gradient(\n  in oklch,\n  oklch(70% 0.2 0),\n  oklch(70% 0.2 360)\n);',
                desc: 'Smooth, perceptually uniform'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">{item.use}</h4>
                <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">{item.desc}</p>
                <pre className="text-xs bg-orange-900 dark:bg-orange-950 text-orange-100 px-3 py-2 rounded overflow-x-auto">
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>oklch()</strong> is recommended for new projects</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>color-mix()</strong> replaces Sass color functions</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>fallbacks</strong> for older browsers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 111+, Safari 16.4+, Firefox 113+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
