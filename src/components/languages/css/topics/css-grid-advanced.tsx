'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Grid3x3, Sparkles, Layers, Target, CheckCircle, Info, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssGridAdvancedProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const subgridExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subgrid Power</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f9a8d4 0%, #a78bfa 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #7c3aed 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #ec4899; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    .parent-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 15px;
      padding: 25px;
      background: #fce7f3;
      border-radius: 12px;
      border: 3px solid #ec4899;
    }
    @media (prefers-color-scheme: dark) {
      .parent-grid { background: #831843; border-color: #f9a8d4; }
    }
    .card {
      grid-column: span 2;
      display: grid;
      grid-template-rows: subgrid;
      grid-row: span 3;
      background: white;
      border-radius: 8px;
      border: 2px solid #ec4899;
      overflow: hidden;
    }
    @media (prefers-color-scheme: dark) {
      .card { background: #1e293b; border-color: #f9a8d4; }
    }
    .card-header {
      background: linear-gradient(135deg, #f472b6, #a78bfa);
      color: white;
      padding: 20px;
      font-weight: 700;
      text-align: center;
    }
    .card-body {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-footer {
      background: #f8fafc;
      padding: 15px;
      text-align: center;
      font-size: 14px;
      border-top: 2px solid #fce7f3;
    }
    @media (prefers-color-scheme: dark) {
      .card-footer { background: #0f172a; border-color: #831843; }
    }
    .note {
      margin-top: 25px;
      padding: 20px;
      background: #fef3c7;
      border-radius: 8px;
      border: 2px solid #fbbf24;
    }
    @media (prefers-color-scheme: dark) {
      .note { background: #451a03; border-color: #d97706; }
    }
    .note h3 { color: #92400e; margin-bottom: 10px; }
    @media (prefers-color-scheme: dark) {
      .note h3 { color: #fbbf24; }
    }
    .note p { color: #78350f; font-size: 14px; line-height: 1.6; }
    @media (prefers-color-scheme: dark) {
      .note p { color: #fde68a; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Subgrid Alignment</h1>
    
    <div class="parent-grid">
      <div class="card">
        <div class="card-header">Card 1</div>
        <div class="card-body">Content aligns perfectly across all cards!</div>
        <div class="card-footer">Footer</div>
      </div>
      
      <div class="card">
        <div class="card-header">Card 2 with Longer Title</div>
        <div class="card-body">More content here with different lengths</div>
        <div class="card-footer">Footer aligned</div>
      </div>
      
      <div class="card">
        <div class="card-header">Card 3</div>
        <div class="card-body">Notice how footers align!</div>
        <div class="card-footer">Perfect alignment</div>
      </div>
    </div>
    
    <div class="note">
      <h3>💡 What is Subgrid?</h3>
      <p>
        Subgrid allows nested grids to participate in their parent's grid tracks. 
        This ensures perfect alignment across nested elements - headers, content, 
        and footers all line up beautifully!
      </p>
    </div>
  </div>
</body>
</html>`;

const autoFillFitExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto-fill vs Auto-fit</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f9a8d4 0%, #a78bfa 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #7c3aed 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #ec4899; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    .demo-section {
      margin-bottom: 40px;
      padding: 25px;
      background: #f8fafc;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    @media (prefers-color-scheme: dark) {
      .demo-section { background: #0f172a; border-color: #334155; }
    }
    h2 { color: #831843; margin-bottom: 20px; text-align: center; }
    @media (prefers-color-scheme: dark) {
      h2 { color: #f9a8d4; }
    }
    .auto-fill-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #cbd5e1;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .auto-fill-grid { background: #1e293b; border-color: #475569; }
    }
    .auto-fit-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #cbd5e1;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .auto-fit-grid { background: #1e293b; border-color: #475569; }
    }
    .grid-item {
      padding: 30px;
      background: linear-gradient(135deg, #f472b6, #a78bfa);
      color: white;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .code {
      padding: 15px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
      line-height: 1.6;
    }
    @media (prefers-color-scheme: dark) {
      .code { background: #020617; }
    }
    .highlight {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      border: 2px solid #fbbf24;
      margin-top: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .highlight { background: #451a03; border-color: #d97706; }
    }
    .highlight p {
      color: #78350f;
      font-size: 14px;
      font-weight: 600;
    }
    @media (prefers-color-scheme: dark) {
      .highlight p { color: #fde68a; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Auto-fill vs Auto-fit</h1>
    
    <div class="demo-section">
      <h2>auto-fill (Creates empty tracks)</h2>
      <div class="auto-fill-grid">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
      </div>
      <div class="code">
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      </div>
      <div class="highlight">
        <p>✨ Creates as many tracks as will fit, even if empty. Items don't stretch to fill extra space.</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>auto-fit (Collapses empty tracks)</h2>
      <div class="auto-fit-grid">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
      </div>
      <div class="code">
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      </div>
      <div class="highlight">
        <p>⚡ Collapses empty tracks to 0. Items stretch to fill available space!</p>
      </div>
    </div>
  </div>
</body>
</html>`;

const minmaxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minmax() Function</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f9a8d4 0%, #a78bfa 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #be185d 0%, #7c3aed 100%); }
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { color: #ec4899; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    .demo-card {
      background: #f8fafc;
      padding: 25px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    @media (prefers-color-scheme: dark) {
      .demo-card { background: #0f172a; border-color: #334155; }
    }
    h3 { color: #831843; margin-bottom: 15px; }
    @media (prefers-color-scheme: dark) {
      h3 { color: #f9a8d4; }
    }
    .grid-demo {
      display: grid;
      gap: 10px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #cbd5e1;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .grid-demo { background: #1e293b; border-color: #475569; }
    }
    .demo1 { grid-template-columns: repeat(3, minmax(100px, 1fr)); }
    .demo2 { grid-template-columns: minmax(200px, 1fr) 1fr 1fr; }
    .demo3 { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
    .item {
      padding: 20px;
      background: linear-gradient(135deg, #f472b6, #a78bfa);
      color: white;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .code {
      padding: 12px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
    }
    @media (prefers-color-scheme: dark) {
      .code { background: #020617; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📏 Minmax() Mastery</h1>
    
    <div class="demo-grid">
      <div class="demo-card">
        <h3>Fixed min, flexible max</h3>
        <div class="grid-demo demo1">
          <div class="item">Item</div>
          <div class="item">Item</div>
          <div class="item">Item</div>
        </div>
        <div class="code">
minmax(100px, 1fr)
/* Min: 100px, Max: flexible */
        </div>
      </div>
      
      <div class="demo-card">
        <h3>First column larger</h3>
        <div class="grid-demo demo2">
          <div class="item">Wide</div>
          <div class="item">Item</div>
          <div class="item">Item</div>
        </div>
        <div class="code">
minmax(200px, 1fr) 1fr 1fr
/* First column at least 200px */
        </div>
      </div>
      
      <div class="demo-card">
        <h3>Responsive with auto-fit</h3>
        <div class="grid-demo demo3">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
        </div>
        <div class="code">
repeat(auto-fit, minmax(150px, 1fr))
/* Perfect responsive grid! */
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssGridAdvanced({ onOpenWebPlayground }: CssGridAdvancedProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Grid3x3}
        category="CSS · Modern Layout"
        title="Advanced Grid"
        description="Master subgrid, minmax(), auto-fill/auto-fit, and complex grid patterns"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Advanced Grid Features
          </CardTitle>
          <CardDescription>
            Take your grid skills to the next level
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Beyond basic grid layouts, CSS Grid offers <strong className="text-foreground">powerful advanced features</strong> like 
            subgrid for nested alignment, minmax() for flexible sizing, and auto-fill/auto-fit for responsive grids without media queries!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Layers className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Subgrid</h4>
              <p className="text-sm text-muted-foreground">
                Nested grids inherit parent tracks
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Target className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Minmax()</h4>
              <p className="text-sm text-muted-foreground">
                Flexible sizing with min/max bounds
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Zap className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Auto-fill/fit</h4>
              <p className="text-sm text-muted-foreground">
                Responsive without media queries
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Subgrid
          </CardTitle>
          <CardDescription>
            Perfect alignment across nested grids
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={subgridExample}
            title="Subgrid Demo"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>What Problem Does Subgrid Solve?</AlertTitle>
            <AlertDescription>
              Without subgrid, nested grid items can't align with their grandparent grid. 
              Subgrid allows child grids to use parent grid tracks, ensuring perfect alignment 
              across card headers, content, and footers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            2. Auto-fill vs Auto-fit
          </CardTitle>
          <CardDescription>
            Understanding the critical difference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={autoFillFitExample}
            title="Auto-fill vs Auto-fit"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🎯 Key Difference:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>auto-fill:</strong> Creates empty tracks, items stay their size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>auto-fit:</strong> Collapses empty tracks, items stretch to fill space</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            3. Minmax() Function
          </CardTitle>
          <CardDescription>
            Flexible sizing with constraints
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={minmaxExample}
            title="Minmax() Examples"
            colorTheme="emerald"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">grid-template-rows: subgrid;</code>
              <p className="text-sm text-muted-foreground mt-1">Inherit parent's row tracks</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">repeat(auto-fit, minmax(200px, 1fr));</code>
              <p className="text-sm text-muted-foreground mt-1">Perfect responsive grid</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">minmax(100px, 1fr);</code>
              <p className="text-sm text-muted-foreground mt-1">Min 100px, flexible max</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">grid-auto-flow: dense;</code>
              <p className="text-sm text-muted-foreground mt-1">Fill gaps automatically</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use auto-fit with minmax():</strong> Creates truly responsive grids without media queries</li>
            <li><strong>Prefer subgrid for nested layouts:</strong> Ensures perfect alignment across components</li>
            <li><strong>Set reasonable minimums:</strong> Prevents items from becoming too small</li>
            <li><strong>Use grid-auto-flow: dense for masonry-like layouts:</strong> Fills gaps efficiently</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Minmax() and auto-fill/fit have universal support. Subgrid is supported in modern browsers (check caniuse.com for details).
        </AlertDescription>
      </Alert>
    </div>
  );
}
