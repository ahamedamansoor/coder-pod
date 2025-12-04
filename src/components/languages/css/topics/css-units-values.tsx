'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Ruler, Percent, Eye, CheckCircle, AlertTriangle, Info, Sparkles, Maximize2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssUnitsValuesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssUnitsValues({ onOpenWebPlayground }: CssUnitsValuesProps) {
  
  const absoluteUnitsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Absolute Units</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
    }
    
    .container {
      max-width: 800px;
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
      color: #3b82f6;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    /* Pixels (px) - Most common absolute unit */
    .box-16px {
      width: 160px;
      height: 80px;
      background: #dbeafe;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px 0;
      font-weight: 600;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-16px {
        background: #1e3a8a;
        color: #93c5fd;
        border-color: #60a5fa;
      }
    }
    
    .box-24px {
      width: 240px;
      height: 120px;
      background: #dbeafe;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px 0;
      font-weight: 600;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-24px {
        background: #1e3a8a;
        color: #93c5fd;
        border-color: #60a5fa;
      }
    }
    
    .info-card {
      background: #f0f9ff;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card {
        background: #0c4a6e;
        border-left-color: #60a5fa;
      }
    }
    
    .info-card h3 {
      color: #1e40af;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card h3 {
        color: #93c5fd;
      }
    }
    
    .info-card p {
      color: #475569;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card p {
        color: #cbd5e1;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📏 Absolute Units (px)</h1>
    <p class="subtitle">Fixed sizes that don't change</p>
    
    <div class="box-16px">
      160px × 80px
    </div>
    
    <div class="box-24px">
      240px × 120px
    </div>
    
    <div class="info-card">
      <h3>What are Pixels (px)?</h3>
      <p>
        Pixels are the most common CSS unit. They're <strong>absolute</strong>, 
        meaning 100px will always be 100px regardless of screen size or parent element.
      </p>
      <p style="margin-top: 10px;">
        <strong>Use pixels for:</strong> Borders, small fixed elements, precise layouts
      </p>
    </div>
    
    <div class="info-card">
      <h3>⚠️ Limitation</h3>
      <p>
        Pixels don't scale with user preferences or screen size. 
        Not ideal for responsive design or accessibility.
      </p>
    </div>
  </div>
</body>
</html>`;

  const relativeUnitsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relative Units (em & rem)</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
      font-size: 16px; /* Base font size */
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 800px;
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
      color: #10b981;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    /* rem units - relative to root (html) font-size */
    .rem-example {
      background: #d1fae5;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .rem-example {
        background: #064e3b;
        border-left-color: #34d399;
      }
    }
    
    .rem-example h2 {
      font-size: 2rem; /* 2 × 16px = 32px */
      color: #065f46;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .rem-example h2 {
        color: #6ee7b7;
      }
    }
    
    .rem-example p {
      font-size: 1rem; /* 1 × 16px = 16px */
      color: #047857;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .rem-example p {
        color: #a7f3d0;
      }
    }
    
    /* em units - relative to parent font-size */
    .em-parent {
      font-size: 20px;
      background: #fef3c7;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .em-parent {
        background: #78350f;
        border-left-color: #fcd34d;
      }
    }
    
    .em-child {
      font-size: 1.5em; /* 1.5 × 20px = 30px */
      color: #78350f;
      font-weight: 600;
      margin-top: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .em-child {
        color: #fef3c7;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin: 20px 0;
    }
    
    @media (max-width: 640px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
    
    .card {
      background: #ecfdf5;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: #14532d;
        border-color: #34d399;
      }
    }
    
    .card h3 {
      color: #065f46;
      margin-bottom: 10px;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card h3 {
        color: #6ee7b7;
      }
    }
    
    .card p {
      color: #047857;
      font-size: 14px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .card p {
        color: #a7f3d0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Relative Units (em & rem)</h1>
    <p class="subtitle">Units that scale based on context</p>
    
    <div class="rem-example">
      <h2>2rem heading</h2>
      <p>1rem paragraph - both relative to root (16px)</p>
      <p style="font-size: 0.875rem; margin-top: 10px;">0.875rem = 14px (smaller text)</p>
    </div>
    
    <div class="em-parent">
      <p style="color: #78350f; margin-bottom: 5px;"><strong>Parent: 20px font-size</strong></p>
      <div class="em-child">
        1.5em = 30px (1.5 × parent's 20px)
      </div>
    </div>
    
    <div class="comparison">
      <div class="card">
        <h3>rem (Root EM)</h3>
        <p>
          ✅ Always relative to &lt;html&gt; root<br>
          ✅ Consistent sizing<br>
          ✅ Best for spacing & typography<br>
          ✅ Respects user font preferences
        </p>
      </div>
      
      <div class="card">
        <h3>em (Relative EM)</h3>
        <p>
          ✅ Relative to parent element<br>
          ⚠️ Can compound (nest carefully)<br>
          ✅ Good for component-based sizing<br>
          ✅ Scales with component
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  const percentViewportExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Percentage & Viewport Units</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
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
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    /* Percentage units */
    .parent {
      width: 100%;
      background: #f5f3ff;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .parent {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    .child-50 {
      width: 50%;
      background: #ddd6fe;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      color: #5b21b6;
      font-weight: 600;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .child-50 {
        background: #5b21b6;
        color: #e9d5ff;
      }
    }
    
    .child-75 {
      width: 75%;
      background: #ddd6fe;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      color: #5b21b6;
      font-weight: 600;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .child-75 {
        background: #5b21b6;
        color: #e9d5ff;
      }
    }
    
    /* Viewport units */
    .vw-demo {
      width: 50vw;
      height: 100px;
      background: linear-gradient(135deg, #c084fc, #a855f7);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      margin: 20px 0;
      font-size: 18px;
    }
    
    .vh-demo {
      width: 100%;
      height: 30vh;
      background: linear-gradient(135deg, #a855f7, #9333ea);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 20px;
      margin: 20px 0;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 25px 0;
    }
    
    .info-card {
      background: #f5f3ff;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card {
        background: #4c1d95;
        border-color: #a78bfa;
      }
    }
    
    .info-card h3 {
      color: #7c3aed;
      margin-bottom: 10px;
      font-size: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card h3 {
        color: #c4b5fd;
      }
    }
    
    .info-card p {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card p {
        color: #cbd5e1;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Percentage & Viewport Units</h1>
    <p class="subtitle">Units relative to parent or viewport</p>
    
    <h2 style="color: #8b5cf6; margin: 25px 0 15px;">Percentage (%)</h2>
    <div class="parent">
      <p style="color: #6b7280; margin-bottom: 15px;">Parent container (100% width)</p>
      <div class="child-50">50% of parent</div>
      <div class="child-75">75% of parent</div>
    </div>
    
    <h2 style="color: #8b5cf6; margin: 25px 0 15px;">Viewport Units (vw, vh)</h2>
    <div class="vw-demo">50vw (50% of viewport width)</div>
    <div class="vh-demo">30vh (30% of viewport height)</div>
    
    <div class="info-grid">
      <div class="info-card">
        <h3>% (Percentage)</h3>
        <p>Relative to parent element size. Great for responsive layouts.</p>
      </div>
      
      <div class="info-card">
        <h3>vw (Viewport Width)</h3>
        <p>1vw = 1% of viewport width. Perfect for full-width designs.</p>
      </div>
      
      <div class="info-card">
        <h3>vh (Viewport Height)</h3>
        <p>1vh = 1% of viewport height. Great for hero sections.</p>
      </div>
      
      <div class="info-card">
        <h3>vmin / vmax</h3>
        <p>Smallest or largest of vw/vh. Responsive to any orientation.</p>
      </div>
    </div>
    
    <p style="color: #6b7280; margin-top: 20px; text-align: center;">
      💡 <strong>Try resizing your browser</strong> to see viewport units in action!
    </p>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Ruler}
        category="CSS · Fundamentals"
        title="CSS Units & Values"
        description="Master absolute and relative units for sizing, spacing, and responsive design"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Understanding CSS Units
          </CardTitle>
          <CardDescription>
            Different ways to specify sizes in CSS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            CSS units define how to measure sizes - whether it's text, spacing, or element dimensions. 
            Choosing the right unit is crucial for creating <strong className="text-foreground">responsive</strong> and 
            <strong className="text-foreground"> accessible</strong> websites.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Ruler className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Absolute Units</h4>
              <p className="text-sm text-muted-foreground">
                Fixed sizes: px, pt, cm - always the same size
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <Percent className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Relative Units</h4>
              <p className="text-sm text-muted-foreground">
                Scale with context: em, rem, %, vw, vh
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Absolute Units */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Ruler className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Absolute Units (px)
          </CardTitle>
          <CardDescription>
            Fixed sizes that never change
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={absoluteUnitsExample}
            title="Pixels (px) - Absolute Unit"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">When to Use Pixels:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Borders (1px, 2px solid)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Small icons and images</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Avoid for text - doesn't respect user font preferences</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Relative Units (em & rem) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Relative Units (em & rem)
          </CardTitle>
          <CardDescription>
            Units that scale based on font size
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={relativeUnitsExample}
            title="em vs rem - Relative Units"
            colorTheme="green"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Pro Tip: Use rem for Most Things</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">rem</code> is generally better than 
              <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded mx-1">em</code> because it's consistent 
              across your entire site. Use <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">em</code> only 
              when you want sizing to scale with the parent element.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Percentage & Viewport Units */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Percentage & Viewport Units
          </CardTitle>
          <CardDescription>
            Responsive units for layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={percentViewportExample}
            title="%, vw, vh - Responsive Units"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>CSS Units Quick Reference</CardTitle>
          <CardDescription>
            All common CSS units at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">px (pixels)</code>
              <p className="text-sm text-muted-foreground mt-1">
                Absolute unit. 1px = 1 pixel on screen. Use for borders and precise layouts.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">rem (root em)</code>
              <p className="text-sm text-muted-foreground mt-1">
                Relative to root font-size (usually 16px). Best for typography and spacing.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">em</code>
              <p className="text-sm text-muted-foreground mt-1">
                Relative to parent font-size. Use for component-specific scaling.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">% (percentage)</code>
              <p className="text-sm text-muted-foreground mt-1">
                Relative to parent element. Great for responsive widths and heights.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">vw / vh (viewport width/height)</code>
              <p className="text-sm text-muted-foreground mt-1">
                1vw = 1% of viewport width. 1vh = 1% of viewport height. Perfect for full-screen designs.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">vmin / vmax</code>
              <p className="text-sm text-muted-foreground mt-1">
                Smaller/larger of vw or vh. Ensures elements fit in any orientation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>CSS Units Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use rem for font-sizes</strong> - Respects user preferences</li>
            <li><strong>Use rem for spacing</strong> - Consistent across components</li>
            <li><strong>Use % for widths</strong> - Responsive layouts</li>
            <li><strong>Use px for borders</strong> - Precise thin lines</li>
            <li><strong>Use vw/vh for full-screen sections</strong> - Hero areas, modals</li>
            <li><strong>Avoid px for text</strong> - Prevents user font size adjustments</li>
            <li><strong>Set base font-size on html</strong> - Makes rem calculations easier</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Excellent Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All CSS units (px, em, rem, %, vw, vh, vmin, vmax) are supported in all modern browsers. 
          rem was added in IE9+, and viewport units work in all browsers from IE11+. Safe to use in production!
        </AlertDescription>
      </Alert>
    </div>
  );
}
