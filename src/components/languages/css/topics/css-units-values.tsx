'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Ruler, Sparkles, Lightbulb, Monitor, 
  CheckCircle, Info, ArrowRight, Maximize2,
  Type, Smartphone, Star
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssUnitsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssUnits({ onOpenWebPlayground }: CssUnitsProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Ruler}
        category="CSS · Fundamentals"
        title="CSS Units & Values"
        description="Master absolute, relative, and viewport units for sizing elements and creating responsive designs"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Ruler className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Units & Values</CardTitle>
              <CardDescription className="text-base">How to measure and size elements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Units = Measurement System</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS offers multiple units for sizing elements. Some are <strong>absolute</strong> (fixed size), 
              while others are <strong>relative</strong> (adapt based on context). Choosing the right unit is key to responsive design.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
              <Ruler className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Absolute</h3>
              <p className="text-xs text-blue-800 dark:text-blue-200">Fixed size (px, pt)</p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 text-center">
              <Type className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Relative</h3>
              <p className="text-xs text-green-800 dark:text-green-200">Based on context (em, rem, %)</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800 text-center">
              <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Viewport</h3>
              <p className="text-xs text-purple-800 dark:text-purple-200">Screen-based (vw, vh)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Absolute Units */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Ruler className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Absolute Units
          </CardTitle>
          <CardDescription>Fixed measurements - same size everywhere</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* Pixels */}
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-600 text-white text-lg font-mono">px</Badge>
                  <h3 className="font-bold text-lg">Pixels</h3>
                </div>
                <Badge variant="outline" className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300">
                  ⭐ Most Common
                </Badge>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                1px = 1 dot on the screen. Fixed size that doesn't change with browser settings.
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-blue-100">
                  width: 200px;<br />
                  border: 2px solid black;
                </code>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                ✅ Best for: Borders, small fixed elements, precise layouts
              </p>
            </div>

            {/* Points */}
            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-gray-600 text-white text-lg font-mono">pt</Badge>
                <h3 className="font-bold text-lg">Points</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                1pt = 1/72 of an inch. Primarily for print, not screens.
              </p>
              <div className="bg-gray-900 dark:bg-black p-3 rounded-lg mb-3">
                <code className="text-sm text-gray-100">
                  font-size: 12pt;
                </code>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                📄 Best for: Print stylesheets, PDFs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Relative Units */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-green-600 dark:text-green-400" />
            Relative Units
          </CardTitle>
          <CardDescription>Adapt based on parent or root element</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* REM */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-300 dark:border-green-700 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600 text-white text-lg font-mono">rem</Badge>
                  <h3 className="font-bold text-lg">Root EM</h3>
                </div>
                <Badge className="bg-green-700 text-white">
                  ⭐ Recommended
                </Badge>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Relative to root font-size (usually 16px). <strong>Does NOT compound</strong> through nesting.
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  font-size: 1.5rem; /* 24px if root is 16px */<br />
                  padding: 2rem; /* 32px */
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                ✅ Best for: Typography, spacing, consistent sizing
              </p>
            </div>

            {/* EM */}
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-green-600 text-white text-lg font-mono">em</Badge>
                <h3 className="font-bold text-lg">EM</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Relative to parent font-size. <strong>Compounds</strong> through nested elements.
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  font-size: 1.5em; /* 1.5 × parent size */<br />
                  margin: 2em; /* 2 × current element size */
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                ✅ Best for: Component-based spacing, media queries
              </p>
            </div>

            {/* Percentage */}
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-green-600 text-white text-lg font-mono">%</Badge>
                <h3 className="font-bold text-lg">Percentage</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Relative to parent element's corresponding property.
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  width: 50%; /* Half of parent width */<br />
                  font-size: 150%; /* 1.5 × parent font */
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                ✅ Best for: Fluid layouts, responsive widths
              </p>
            </div>
          </div>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Best Practice</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <strong>rem</strong> for most sizing and spacing. It's predictable, doesn't compound, and makes your design system consistent.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Viewport Units */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Viewport Units
          </CardTitle>
          <CardDescription>Based on browser window size</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* VW */}
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg font-mono mb-3">vw</Badge>
              <h3 className="font-bold mb-2">Viewport Width</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                1vw = 1% of viewport width
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg">
                <code className="text-sm text-purple-100">
                  width: 50vw; /* Half screen */
                </code>
              </div>
            </div>

            {/* VH */}
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg font-mono mb-3">vh</Badge>
              <h3 className="font-bold mb-2">Viewport Height</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                1vh = 1% of viewport height
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg">
                <code className="text-sm text-purple-100">
                  height: 100vh; /* Full screen */
                </code>
              </div>
            </div>

            {/* VMIN */}
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg font-mono mb-3">vmin</Badge>
              <h3 className="font-bold mb-2">Viewport Minimum</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                1% of smaller viewport dimension
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg">
                <code className="text-sm text-purple-100">
                  font-size: 5vmin;
                </code>
              </div>
            </div>

            {/* VMAX */}
            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg font-mono mb-3">vmax</Badge>
              <h3 className="font-bold mb-2">Viewport Maximum</h3>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                1% of larger viewport dimension
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg">
                <code className="text-sm text-purple-100">
                  width: 80vmax;
                </code>
              </div>
            </div>
          </div>

          <p className="text-xs text-purple-700 dark:text-purple-300">
            ✅ Best for: Full-screen sections, hero banners, responsive typography
          </p>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Units Comparison Demo
          </CardTitle>
          <CardDescription>See how different units behave</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
      font-size: 16px; /* Root font size */
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
    
    .box {
      background: white;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    /* Absolute Unit - Pixels */
    .px-box {
      width: 200px;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    
    /* Relative Unit - REM */
    .rem-box {
      width: 12.5rem; /* 200px if root is 16px */
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    
    /* Relative Unit - Percentage */
    .percent-box {
      width: 50%;
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      color: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    
    /* Viewport Unit */
    .vw-box {
      width: 30vw;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
      padding: 15px;
      border-radius: 8px;
    }
    
    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📏 CSS Units Demo</h1>
    
    <div class="box">
      <div class="label">ABSOLUTE: Pixels (px)</div>
      <div class="px-box">
        width: 200px
        <br><code>Always 200 pixels wide</code>
      </div>
    </div>
    
    <div class="box">
      <div class="label">RELATIVE: REM</div>
      <div class="rem-box">
        width: 12.5rem
        <br><code>200px (12.5 × 16px root)</code>
      </div>
    </div>
    
    <div class="box">
      <div class="label">RELATIVE: Percentage (%)</div>
      <div class="percent-box">
        width: 50%
        <br><code>Half of parent container</code>
      </div>
    </div>
    
    <div class="box">
      <div class="label">VIEWPORT: vw (Viewport Width)</div>
      <div class="vw-box">
        width: 30vw
        <br><code>30% of browser width - try resizing!</code>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="CSS Units Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/30 to-amber-50/30 dark:from-orange-950/10 dark:to-amber-950/10">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { unit: 'px', desc: 'Fixed pixels', use: 'Borders, small elements' },
              { unit: 'rem', desc: 'Root-relative', use: 'Spacing, typography ⭐' },
              { unit: 'em', desc: 'Parent-relative', use: 'Component scaling' },
              { unit: '%', desc: 'Parent percentage', use: 'Fluid widths' },
              { unit: 'vw', desc: 'Viewport width', use: 'Full-width sections' },
              { unit: 'vh', desc: 'Viewport height', use: 'Full-height sections' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <code className="font-mono font-bold text-lg text-indigo-600 dark:text-indigo-400">{item.unit}</code>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{item.desc}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Use: {item.use}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>px</strong> for borders and fixed small elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>rem</strong> for spacing and typography (recommended!)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>%</strong> for fluid layouts and responsive widths</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>vw/vh</strong> for full-screen sections and hero banners</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
