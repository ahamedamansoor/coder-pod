'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Palette, Zap, Star, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssModernColorFormatsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// HSL Colors Example
const hslColorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HSL Colors</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .section {
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #e2e8f0;
      }
    }
    
    .color-strip {
      display: flex;
      height: 80px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .color-block {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 14px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    
    /* Hue variations (same saturation & lightness) */
    .hue-0 { background: hsl(0, 70%, 50%); }
    .hue-60 { background: hsl(60, 70%, 50%); }
    .hue-120 { background: hsl(120, 70%, 50%); }
    .hue-180 { background: hsl(180, 70%, 50%); }
    .hue-240 { background: hsl(240, 70%, 50%); }
    .hue-300 { background: hsl(300, 70%, 50%); }
    
    /* Saturation variations (same hue & lightness) */
    .sat-0 { background: hsl(210, 0%, 50%); color: #333; }
    .sat-25 { background: hsl(210, 25%, 50%); }
    .sat-50 { background: hsl(210, 50%, 50%); }
    .sat-75 { background: hsl(210, 75%, 50%); }
    .sat-100 { background: hsl(210, 100%, 50%); }
    
    /* Lightness variations (same hue & saturation) */
    .light-10 { background: hsl(210, 70%, 10%); }
    .light-30 { background: hsl(210, 70%, 30%); }
    .light-50 { background: hsl(210, 70%, 50%); }
    .light-70 { background: hsl(210, 70%, 70%); }
    .light-90 { background: hsl(210, 70%, 90%); color: #333; }
    
    .code-label {
      display: block;
      margin-top: 10px;
      font-family: monospace;
      font-size: 13px;
      color: #64748b;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-label {
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 HSL Colors</h1>
    <p class="subtitle">Hue, Saturation, Lightness - The intuitive color format</p>
    
    <div class="section">
      <div class="section-title">Hue (Color Type): 0-360 degrees</div>
      <div class="color-strip">
        <div class="color-block hue-0">0°</div>
        <div class="color-block hue-60">60°</div>
        <div class="color-block hue-120">120°</div>
        <div class="color-block hue-180">180°</div>
        <div class="color-block hue-240">240°</div>
        <div class="color-block hue-300">300°</div>
      </div>
      <div class="code-label">hsl(HUE, 70%, 50%)</div>
    </div>
    
    <div class="section">
      <div class="section-title">Saturation (Color Intensity): 0-100%</div>
      <div class="color-strip">
        <div class="color-block sat-0">0%</div>
        <div class="color-block sat-25">25%</div>
        <div class="color-block sat-50">50%</div>
        <div class="color-block sat-75">75%</div>
        <div class="color-block sat-100">100%</div>
      </div>
      <div class="code-label">hsl(210, SATURATION, 50%)</div>
    </div>
    
    <div class="section">
      <div class="section-title">Lightness (Brightness): 0-100%</div>
      <div class="color-strip">
        <div class="color-block light-10">10%</div>
        <div class="color-block light-30">30%</div>
        <div class="color-block light-50">50%</div>
        <div class="color-block light-70">70%</div>
        <div class="color-block light-90">90%</div>
      </div>
      <div class="code-label">hsl(210, 70%, LIGHTNESS)</div>
    </div>
  </div>
</body>
</html>`;

// LCH Colors Example
const lchColorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LCH Colors - The Future</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    
    .color-card {
      padding: 40px 20px;
      border-radius: 12px;
      text-align: center;
      color: white;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .color-card .label {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    .color-card .code {
      font-size: 12px;
      opacity: 0.9;
      font-family: monospace;
    }
    
    /* Traditional RGB */
    .rgb-1 { background: rgb(59, 130, 246); }
    .rgb-2 { background: rgb(59, 246, 130); }
    .rgb-3 { background: rgb(246, 130, 59); }
    
    /* Modern LCH - More vibrant & consistent */
    .lch-1 { background: lch(60% 80 270); }
    .lch-2 { background: lch(80% 80 150); }
    .lch-3 { background: lch(70% 80 50); }
    
    .info-box {
      background: #f0f9ff;
      border: 2px solid #3b82f6;
      border-radius: 12px;
      padding: 20px;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #1e3a8a;
        border-color: #60a5fa;
      }
    }
    
    .info-box h3 {
      color: #1e40af;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box h3 {
        color: #93c5fd;
      }
    }
    
    .info-box ul {
      color: #1e40af;
      padding-left: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box ul {
        color: #bfdbfe;
      }
    }
    
    .info-box li {
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 LCH Colors - The Future</h1>
    <p class="subtitle">Perceptually uniform colors with wider gamut</p>
    
    <h2 style="margin-bottom: 20px; font-size: 20px;">Traditional RGB/HSL</h2>
    <div class="comparison">
      <div class="color-card rgb-1">
        <div class="label">Blue</div>
        <div class="code">rgb(59, 130, 246)</div>
      </div>
      <div class="color-card rgb-2">
        <div class="label">Green</div>
        <div class="code">rgb(59, 246, 130)</div>
      </div>
      <div class="color-card rgb-3">
        <div class="label">Orange</div>
        <div class="code">rgb(246, 130, 59)</div>
      </div>
    </div>
    
    <h2 style="margin-bottom: 20px; font-size: 20px;">Modern LCH</h2>
    <div class="comparison">
      <div class="color-card lch-1">
        <div class="label">Blue</div>
        <div class="code">lch(60% 80 270)</div>
      </div>
      <div class="color-card lch-2">
        <div class="label">Green</div>
        <div class="code">lch(80% 80 150)</div>
      </div>
      <div class="color-card lch-3">
        <div class="label">Orange</div>
        <div class="code">lch(70% 80 50)</div>
      </div>
    </div>
    
    <div class="info-box">
      <h3>✨ Why LCH is Better:</h3>
      <ul>
        <li><strong>Perceptually uniform</strong> - Equal changes look equal to humans</li>
        <li><strong>Wider color range</strong> - Access to more vibrant colors</li>
        <li><strong>Easier manipulation</strong> - Adjust brightness without affecting hue</li>
        <li><strong>Future-proof</strong> - Works with modern displays (P3, rec2020)</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

// Color manipulation example
const colorManipulationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Manipulation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .demo-section {
      margin-bottom: 40px;
    }
    
    .demo-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-title {
        color: #e2e8f0;
      }
    }
    
    .palette {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
    
    .swatch {
      flex: 1;
      min-width: 80px;
      height: 100px;
      border-radius: 10px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 10px;
      color: white;
      font-weight: 600;
      font-size: 13px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    /* Transparency levels with HSLA */
    .alpha-100 { background: hsla(210, 100%, 50%, 1); }
    .alpha-75 { background: hsla(210, 100%, 50%, 0.75); }
    .alpha-50 { background: hsla(210, 100%, 50%, 0.5); }
    .alpha-25 { background: hsla(210, 100%, 50%, 0.25); }
    
    /* Color mixing with modern color-mix() */
    .mix-1 {
      background: #1c91ce; /* Fallback for browsers without color-mix */
      background: color-mix(in srgb, #3b82f6, #10b981);
    }
    .mix-2 {
      background: #2f7fd8;
      background: color-mix(in srgb, #3b82f6 80%, #10b981 20%);
    }
    .mix-3 {
      background: #269ebc;
      background: color-mix(in srgb, #3b82f6 50%, #10b981 50%);
    }
    .mix-4 {
      background: #059669;
      background: color-mix(in srgb, #3b82f6 20%, #10b981 80%);
    }
    
    .checkerboard {
      background-image: 
        linear-gradient(45deg, #e2e8f0 25%, transparent 25%),
        linear-gradient(-45deg, #e2e8f0 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #e2e8f0 75%),
        linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
    
    @media (prefers-color-scheme: dark) {
      .checkerboard {
        background-image: 
          linear-gradient(45deg, #334155 25%, transparent 25%),
          linear-gradient(-45deg, #334155 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #334155 75%),
          linear-gradient(-45deg, transparent 75%, #334155 75%);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Color Manipulation</h1>
    <p class="subtitle">Control transparency and mix colors</p>
    
    <div class="demo-section">
      <div class="demo-title">Transparency with HSLA/RGBA</div>
      <div class="palette checkerboard">
        <div class="swatch alpha-100">100%</div>
        <div class="swatch alpha-75">75%</div>
        <div class="swatch alpha-50">50%</div>
        <div class="swatch alpha-25">25%</div>
      </div>
    </div>
    
    <div class="demo-section">
      <div class="demo-title">Color Mixing (Modern CSS)</div>
      <div class="palette">
        <div class="swatch" style="background: #3b82f6;">Blue 100%</div>
        <div class="swatch mix-2">Blue 80%</div>
        <div class="swatch mix-3">50/50 Mix</div>
        <div class="swatch mix-4">Green 80%</div>
        <div class="swatch" style="background: #10b981;">Green 100%</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssModernColorFormats({ onOpenWebPlayground }: CssModernColorFormatsProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="CSS · Modern Features"
        title="Modern Color Formats"
        description="Learn about HSL, LCH, and the latest color features in CSS"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            What are Modern Color Formats?
          </CardTitle>
          <CardDescription>
            Better ways to work with colors in CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            While hex codes and RGB have been around forever, CSS now supports <strong className="text-foreground">more intuitive and powerful</strong> color formats. 
            These modern formats make it easier to create, adjust, and manipulate colors for your designs!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Palette className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">HSL Colors</h4>
              <p className="text-sm text-muted-foreground">
                More intuitive than RGB - control Hue, Saturation, and Lightness separately
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Star className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">LCH Colors</h4>
              <p className="text-sm text-muted-foreground">
                The future! More vibrant colors and perceptually uniform
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HSL Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            1. HSL Colors (Hue, Saturation, Lightness)
          </CardTitle>
          <CardDescription>
            The most intuitive way to work with colors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hslColorsExample}
            title="HSL Color Format"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">💡 Understanding HSL:</h4>
            <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Hue (0-360°):</strong> The color type - red, blue, green, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Saturation (0-100%):</strong> How vibrant the color is</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Lightness (0-100%):</strong> How bright or dark the color is</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Why it's better:</strong> Easy to create color variations!</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* LCH Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Star className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            2. LCH Colors (The Future)
          </CardTitle>
          <CardDescription>
            Next-generation color format for modern displays
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={lchColorsExample}
            title="LCH vs Traditional Colors"
            colorTheme="amber"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Why LCH Matters</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                LCH provides access to <strong>50% more colors</strong> than RGB, making colors appear more vibrant 
                on modern displays. It's perceptually uniform, meaning equal changes look equal to the human eye.
              </p>
              <p className="text-sm">
                Format: <code className="px-2 py-1 bg-muted rounded">lch(lightness chroma hue)</code>
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Color Manipulation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            3. Color Manipulation
          </CardTitle>
          <CardDescription>
            Transparency and color mixing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorManipulationExample}
            title="Transparency & Mixing"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Modern color format syntax
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">hsl(210, 100%, 50%)</code>
              <p className="text-sm text-muted-foreground mt-1">HSL: hue (0-360), saturation (%), lightness (%)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">hsla(210, 100%, 50%, 0.5)</code>
              <p className="text-sm text-muted-foreground mt-1">HSL with alpha transparency (0-1)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">lch(60% 80 270)</code>
              <p className="text-sm text-muted-foreground mt-1">LCH: lightness (%), chroma, hue (0-360)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">color-mix(in srgb, blue, green)</code>
              <p className="text-sm text-muted-foreground mt-1">Mix two colors together</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use HSL</strong> when you need to create color variations easily</li>
            <li><strong>Use LCH</strong> for the most vibrant and accurate colors</li>
            <li><strong>Use HSLA/RGBA</strong> when you need transparency</li>
            <li><strong>Test carefully</strong> - LCH support is still growing</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-900 dark:text-amber-100">Browser Support</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>HSL/HSLA:</strong> Supported everywhere! ✅<br />
          <strong>LCH:</strong> Modern browsers only (Safari 15+, Chrome 111+, Firefox 113+). Provide RGB/HSL fallbacks for older browsers.
        </AlertDescription>
      </Alert>
    </div>
  );
}
