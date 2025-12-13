'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, ArrowUpDown, Box, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssStackingContextProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Z-index basics
const zIndexBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Z-Index Basics</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%);
      }
    }
    
    .container {
      background: white;
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      width: 100%;
      max-width: 700px;
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
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 50px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .stack-demo {
      position: relative;
      height: 400px;
      background: #f8fafc;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .stack-demo {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .layer {
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: transform 0.3s;
    }
    
    .layer:hover {
      transform: scale(1.05);
    }
    
    .layer-number {
      font-size: 48px;
      margin-bottom: 10px;
    }
    
    .layer-label {
      font-size: 14px;
      opacity: 0.9;
    }
    
    .layer-1 {
      top: 50px;
      left: 50px;
      background: #ef4444;
      z-index: 1;
    }
    
    .layer-2 {
      top: 100px;
      left: 150px;
      background: #f59e0b;
      z-index: 2;
    }
    
    .layer-3 {
      top: 150px;
      left: 250px;
      background: #10b981;
      z-index: 3;
    }
    
    .legend {
      margin-top: 30px;
      padding: 20px;
      background: #fef3c7;
      border-radius: 8px;
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .legend {
        background: #451a03;
        border-color: #d97706;
      }
    }
    
    .legend h3 {
      color: #92400e;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .legend h3 {
        color: #fbbf24;
      }
    }
    
    .legend p {
      color: #78350f;
      font-size: 14px;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .legend p {
        color: #fde68a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📚 Z-Index & Stacking</h1>
    <p class="subtitle">Control which elements appear on top</p>
    
    <div class="stack-demo">
      <div class="layer layer-1">
        <div class="layer-number">1</div>
        <div class="layer-label">z-index: 1</div>
      </div>
      
      <div class="layer layer-2">
        <div class="layer-number">2</div>
        <div class="layer-label">z-index: 2</div>
      </div>
      
      <div class="layer layer-3">
        <div class="layer-number">3</div>
        <div class="layer-label">z-index: 3</div>
      </div>
    </div>
    
    <div class="legend">
      <h3>💡 How Z-Index Works</h3>
      <p>
        Higher z-index values appear on top. The green box (z-index: 3) is on top, 
        orange (z-index: 2) in the middle, and red (z-index: 1) at the bottom.
      </p>
    </div>
  </div>
</body>
</html>`;

// Stacking context example
const stackingContextExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stacking Contexts</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }
    
    h1 {
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
    }
    
    .demo-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-card {
        background: #1e293b;
      }
    }
    
    .demo-card h3 {
      color: #1e293b;
      margin-bottom: 20px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-card h3 {
        color: #e2e8f0;
      }
    }
    
    .demo-area {
      position: relative;
      height: 300px;
      background: #f8fafc;
      border-radius: 8px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-area {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .parent {
      position: absolute;
      width: 200px;
      height: 150px;
      padding: 15px;
      border-radius: 8px;
      font-weight: 600;
      color: white;
    }
    
    .parent-1 {
      top: 30px;
      left: 30px;
      background: #3b82f6;
      z-index: 1;
    }
    
    .parent-2 {
      top: 30px;
      left: 30px;
      background: #3b82f6;
      z-index: 1;
      /* Creates stacking context */
      opacity: 0.99;
    }
    
    .child {
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: white;
    }
    
    .child-a {
      top: 70px;
      left: 80px;
      background: #ef4444;
      z-index: 999;
    }
    
    .sibling {
      position: absolute;
      top: 120px;
      left: 150px;
      width: 150px;
      height: 120px;
      background: #10b981;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: white;
      z-index: 2;
    }
    
    .explanation {
      margin-top: 20px;
      padding: 15px;
      background: #fef3c7;
      border-radius: 8px;
      border: 2px solid #fbbf24;
      font-size: 14px;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .explanation {
        background: #451a03;
        border-color: #d97706;
        color: #fde68a;
      }
    }
    
    .code {
      margin-top: 10px;
      padding: 10px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #020617;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎭 Stacking Contexts</h1>
    
    <div class="comparison">
      <div class="demo-card">
        <h3>Without Stacking Context</h3>
        <div class="demo-area">
          <div class="parent parent-1">
            Parent (z: 1)
            <div class="child child-a">
              Child<br>(z: 999)
            </div>
          </div>
          <div class="sibling">
            Sibling<br>(z: 2)
          </div>
        </div>
        <div class="explanation">
          🎯 Child with z-index: 999 appears on top of sibling with z-index: 2 because they're in the same stacking context!
        </div>
        <div class="code">/* Parent doesn't create context */</div>
      </div>
      
      <div class="demo-card">
        <h3>With Stacking Context</h3>
        <div class="demo-area">
          <div class="parent parent-2">
            Parent (z: 1)
            <div class="child child-a">
              Child<br>(z: 999)
            </div>
          </div>
          <div class="sibling">
            Sibling<br>(z: 2)
          </div>
        </div>
        <div class="explanation">
          🔒 Parent creates stacking context (opacity). Now child is TRAPPED - even with z: 999, it can't escape! Sibling wins.
        </div>
        <div class="code">parent { opacity: 0.99; } /* Creates context */</div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Interactive stacking example
const interactiveStackingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Z-Index</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%);
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
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
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
    
    .cards-container {
      position: relative;
      height: 400px;
      background: #f8fafc;
      border-radius: 12px;
      padding: 20px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .cards-container {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .card {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 12px;
      padding: 20px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, z-index 0s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    
    .card:hover {
      transform: scale(1.05);
    }
    
    .card-number {
      font-size: 72px;
      margin-bottom: 10px;
    }
    
    .card-label {
      font-size: 14px;
      opacity: 0.9;
    }
    
    .card-red {
      top: 50px;
      left: 50px;
      background: #ef4444;
      z-index: 1;
    }
    
    .card-yellow {
      top: 100px;
      left: 180px;
      background: #f59e0b;
      z-index: 2;
    }
    
    .card-green {
      top: 150px;
      left: 310px;
      background: #10b981;
      z-index: 3;
    }
    
    .controls {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    
    .control-btn {
      padding: 15px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      color: white;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .control-btn:hover {
      transform: translateY(-2px);
    }
    
    .btn-red { background: #ef4444; }
    .btn-yellow { background: #f59e0b; }
    .btn-green { background: #10b981; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎮 Interactive Z-Index</h1>
    <p class="subtitle">Click buttons to bring cards to front</p>
    
    <div class="cards-container">
      <div class="card card-red" id="cardRed">
        <div class="card-number">1</div>
        <div class="card-label">Red Card</div>
      </div>
      
      <div class="card card-yellow" id="cardYellow">
        <div class="card-number">2</div>
        <div class="card-label">Yellow Card</div>
      </div>
      
      <div class="card card-green" id="cardGreen">
        <div class="card-number">3</div>
        <div class="card-label">Green Card</div>
      </div>
    </div>
    
    <div class="controls">
      <button class="control-btn btn-red" onclick="bringToFront('cardRed')">
        Bring Red to Front
      </button>
      <button class="control-btn btn-yellow" onclick="bringToFront('cardYellow')">
        Bring Yellow to Front
      </button>
      <button class="control-btn btn-green" onclick="bringToFront('cardGreen')">
        Bring Green to Front
      </button>
    </div>
  </div>
  
  <script>
    let maxZ = 3;
    
    function bringToFront(cardId) {
      maxZ++;
      const card = document.getElementById(cardId);
      card.style.zIndex = maxZ;
    }
  </script>
</body>
</html>`;

export default function CssStackingContext({ onOpenWebPlayground }: CssStackingContextProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Box Model & Layout"
        title="Stacking Context"
        description="Control the layering and depth of elements with z-index"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            What is Stacking Context?
          </CardTitle>
          <CardDescription>
            Understanding how elements layer on top of each other
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Stacking context determines <strong className="text-foreground">which elements appear on top</strong> when they overlap. 
            The <code className="px-2 py-1 bg-muted rounded">z-index</code> property controls the stacking order, but it only works 
            within the same stacking context!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-lg border border-violet-200 dark:border-violet-800">
              <ArrowUpDown className="h-6 w-6 text-violet-600 dark:text-violet-400 mb-2" />
              <h4 className="font-semibold mb-2">Z-Index</h4>
              <p className="text-sm text-muted-foreground">
                Higher values appear on top
              </p>
            </div>
            
            <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-lg border border-violet-200 dark:border-violet-800">
              <Layers className="h-6 w-6 text-violet-600 dark:text-violet-400 mb-2" />
              <h4 className="font-semibold mb-2">Context</h4>
              <p className="text-sm text-muted-foreground">
                Elements stack within their context
              </p>
            </div>
            
            <div className="p-4 bg-violet-50 dark:bg-violet-950/20 rounded-lg border border-violet-200 dark:border-violet-800">
              <Box className="h-6 w-6 text-violet-600 dark:text-violet-400 mb-2" />
              <h4 className="font-semibold mb-2">Position</h4>
              <p className="text-sm text-muted-foreground">
                Only positioned elements use z-index
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Z-Index Basics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <ArrowUpDown className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            1. Z-Index Basics
          </CardTitle>
          <CardDescription>
            Control stacking order with z-index
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={zIndexBasicsExample}
            title="Z-Index Demo"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800">
            <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-3">💡 Z-Index Rules:</h4>
            <ul className="space-y-2 text-sm text-violet-800 dark:text-violet-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Requires positioning:</strong> Element must have position (relative, absolute, fixed, sticky)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Higher wins:</strong> Larger z-index values appear on top</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Can be negative:</strong> Use negative values to go behind</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Auto is default:</strong> Elements stack in source order</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Stacking Context */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Stacking Context Problem
          </CardTitle>
          <CardDescription>
            Understanding when new stacking contexts are created
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={stackingContextExample}
            title="Stacking Context Demo"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Concept!</AlertTitle>
            <AlertDescription>
              When an element creates a new stacking context, its children are "trapped" inside. 
              They can only compete with siblings of their parent, not with elements outside the context!
              <div className="mt-3 p-3 bg-muted rounded-lg">
                <strong>Properties that create stacking context:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>position + z-index (not auto)</li>
                  <li>opacity less than 1</li>
                  <li>transform, filter, perspective</li>
                  <li>position: fixed or sticky</li>
                  <li>flex/grid child with z-index</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-violet-500/10 rounded-lg">
              <Box className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            3. Interactive Z-Index
          </CardTitle>
          <CardDescription>
            Try changing the stacking order
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interactiveStackingExample}
            title="Interactive Demo"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Z-index and stacking context
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-violet-600 dark:text-violet-400">z-index: 10;</code>
              <p className="text-sm text-muted-foreground mt-1">Set stacking order (requires position)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-violet-600 dark:text-violet-400">z-index: -1;</code>
              <p className="text-sm text-muted-foreground mt-1">Place behind normal elements</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-violet-600 dark:text-violet-400">z-index: auto;</code>
              <p className="text-sm text-muted-foreground mt-1">Default - source order determines stacking</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-violet-600 dark:text-violet-400">position: relative; z-index: 1;</code>
              <p className="text-sm text-muted-foreground mt-1">Creates new stacking context</p>
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
            <li><strong>Use sparingly:</strong> Don't z-index everything, rely on source order when possible</li>
            <li><strong>Use a scale:</strong> Use values like 10, 20, 30 to leave room for additions</li>
            <li><strong>Document your layers:</strong> Keep track of what z-index values mean in your app</li>
            <li><strong>Avoid z-index wars:</strong> Don't keep increasing values to "win"</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Z-index and stacking contexts work perfectly in all browsers! Universal support since the early days of CSS.
        </AlertDescription>
      </Alert>
    </div>
  );
}
