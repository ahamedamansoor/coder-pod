'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Waves, Grid, Layout, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssFloatClearProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Float basics example
const floatBasicsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Float Basics</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
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
      color: #06b6d4;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
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
    
    .example-section {
      margin-bottom: 40px;
      padding: 30px;
      background: #f8fafc;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-section {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #06b6d4;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #22d3ee;
      }
    }
    
    .demo-content {
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #94a3b8;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-content {
        background: #1e293b;
        border-color: #475569;
      }
    }
    
    .float-left {
      float: left;
      width: 150px;
      height: 150px;
      background: #06b6d4;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin: 0 20px 20px 0;
      border-radius: 8px;
    }
    
    .float-right {
      float: right;
      width: 150px;
      height: 150px;
      background: #f59e0b;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin: 0 0 20px 20px;
      border-radius: 8px;
    }
    
    .text-content {
      color: #1e293b;
      line-height: 1.8;
    }
    
    @media (prefers-color-scheme: dark) {
      .text-content {
        color: #e2e8f0;
      }
    }
    
    .code-label {
      margin-top: 15px;
      padding: 10px;
      background: #fef3c7;
      border-radius: 6px;
      font-size: 13px;
      font-family: monospace;
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-label {
        background: #451a03;
        color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌊 Float Property</h1>
    <p class="subtitle">Make elements float to the left or right</p>
    
    <div class="example-section">
      <div class="section-title">Float Left</div>
      <div class="demo-content">
        <div class="float-left">Float Left</div>
        <p class="text-content">
          This box is floated to the left! The text wraps around it naturally. 
          Float was originally designed for this exact purpose - wrapping text around 
          images in articles, just like in magazines and newspapers. The floated element 
          is removed from the normal document flow and pushed to the left side of its 
          container. All the text and inline elements flow around it on the right side.
        </p>
      </div>
      <div class="code-label">float: left;</div>
    </div>
    
    <div class="example-section">
      <div class="section-title">Float Right</div>
      <div class="demo-content">
        <div class="float-right">Float Right</div>
        <p class="text-content">
          This box is floated to the right! The text wraps around it on the left side. 
          When you float an element right, it moves to the right edge of its container 
          and content flows around it on the left. This is commonly used for pull quotes, 
          sidebar images, or any content you want positioned on the right with text flowing 
          around it. Float right works the same as float left, just in the opposite direction.
        </p>
      </div>
      <div class="code-label">float: right;</div>
    </div>
  </div>
</body>
</html>`;

// Clear property example
const clearPropertyExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clear Property</title>
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
      color: #06b6d4;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
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
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
    }
    
    .example-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: #1e293b;
      }
    }
    
    .example-card h3 {
      color: #1e293b;
      margin-bottom: 20px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card h3 {
        color: #e2e8f0;
      }
    }
    
    .demo-box {
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
      border: 2px solid #e2e8f0;
      min-height: 300px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .float-item {
      float: left;
      width: 100px;
      height: 100px;
      background: #06b6d4;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin: 0 15px 15px 0;
      border-radius: 8px;
    }
    
    .next-element {
      padding: 20px;
      background: #fef3c7;
      border-radius: 8px;
      color: #92400e;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .next-element {
        background: #451a03;
        color: #fbbf24;
      }
    }
    
    .cleared {
      clear: both;
    }
    
    .code {
      margin-top: 15px;
      padding: 10px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
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
    <h1>🚫 Clear Property</h1>
    <p class="subtitle">Control what happens after floated elements</p>
    
    <div class="comparison">
      <div class="example-card">
        <h3>Without Clear</h3>
        <div class="demo-box">
          <div class="float-item">Float 1</div>
          <div class="float-item">Float 2</div>
          <div class="next-element">
            This element wraps around the floats!
          </div>
        </div>
        <div class="code">/* No clear property */</div>
      </div>
      
      <div class="example-card">
        <h3>With Clear: Both</h3>
        <div class="demo-box">
          <div class="float-item">Float 1</div>
          <div class="float-item">Float 2</div>
          <div class="next-element cleared">
            This element clears the floats and starts below them!
          </div>
        </div>
        <div class="code">clear: both;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Clearfix solution
const clearfixExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clearfix Solution</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
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
      color: #06b6d4;
      text-align: center;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    .comparison {
      display: grid;
      gap: 30px;
    }
    
    .example-box {
      background: #f8fafc;
      padding: 30px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .example-title {
      font-size: 18px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-title {
        color: #e2e8f0;
      }
    }
    
    .parent-box {
      background: #dbeafe;
      padding: 20px;
      border: 3px solid #3b82f6;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .parent-box {
        background: #1e3a8a;
        border-color: #60a5fa;
      }
    }
    
    .parent-label {
      font-size: 14px;
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .parent-label {
        color: #93c5fd;
      }
    }
    
    .float-child {
      float: left;
      width: 150px;
      height: 100px;
      background: #10b981;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin: 0 15px 15px 0;
      border-radius: 8px;
    }
    
    /* Clearfix solution */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
    
    .warning {
      margin-top: 20px;
      padding: 15px;
      background: #fef3c7;
      border-radius: 8px;
      border: 2px solid #fbbf24;
      color: #92400e;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning {
        background: #451a03;
        border-color: #d97706;
        color: #fbbf24;
      }
    }
    
    .code {
      margin-top: 15px;
      padding: 12px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
      line-height: 1.6;
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
    <h1>🔧 Clearfix Solution</h1>
    
    <div class="comparison">
      <div class="example-box">
        <div class="example-title">❌ Problem: Parent Collapses</div>
        <div class="parent-box">
          <div class="parent-label">Parent Container (collapsed height!)</div>
          <div class="float-child">Float 1</div>
          <div class="float-child">Float 2</div>
        </div>
        <div class="warning">
          ⚠️ The parent doesn't wrap around floated children! Its height collapses.
        </div>
        <div class="code">/* Floated children don't affect parent height */</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">✅ Solution: Clearfix</div>
        <div class="parent-box clearfix">
          <div class="parent-label">Parent Container (proper height!)</div>
          <div class="float-child">Float 1</div>
          <div class="float-child">Float 2</div>
        </div>
        <div class="warning" style="background: #d1fae5; border-color: #10b981; color: #065f46;">
          ✅ Clearfix makes the parent wrap around floated children properly!
        </div>
        <div class="code">.clearfix::after {
  content: "";
  display: table;
  clear: both;
}</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssFloatClear({ onOpenWebPlayground }: CssFloatClearProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Waves}
        category="CSS · Box Model & Layout"
        title="Float & Clear"
        description="Legacy layout technique for wrapping content around elements"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            What are Float & Clear?
          </CardTitle>
          <CardDescription>
            Make elements float and control flow around them
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <code className="px-2 py-1 bg-muted rounded">float</code> was originally designed to <strong className="text-foreground">wrap text around images</strong>, 
            like in magazines. While modern layouts use Flexbox and Grid, float is still useful for wrapping content around elements!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <Waves className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">Float</h4>
              <p className="text-sm text-muted-foreground">
                Push element left or right, let content flow around it
              </p>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <Grid className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">Clear</h4>
              <p className="text-sm text-muted-foreground">
                Force element to move below floated elements
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Float Basics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Waves className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            1. Float Property
          </CardTitle>
          <CardDescription>
            Float elements left or right
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={floatBasicsExample}
            title="Float Basics"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800">
            <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">💡 How Float Works:</h4>
            <ul className="space-y-2 text-sm text-cyan-800 dark:text-cyan-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Removes from flow:</strong> Element is taken out of normal document flow</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Pushed to side:</strong> Moves as far left or right as possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Content wraps:</strong> Text and inline elements flow around it</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Original use:</strong> Perfect for magazine-style image layouts</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Clear Property */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Grid className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            </div>
            2. Clear Property
          </CardTitle>
          <CardDescription>
            Move elements below floats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={clearPropertyExample}
            title="Clear Property"
            colorTheme="sky"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>When to Use Clear</AlertTitle>
            <AlertDescription>
              Use <code className="px-2 py-1 bg-muted rounded">clear: both</code> when you want an element to start 
              below all floated elements, not wrap around them. Common values:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>clear: left</strong> - Clear left floats only</li>
                <li><strong>clear: right</strong> - Clear right floats only</li>
                <li><strong>clear: both</strong> - Clear all floats (most common)</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Clearfix Solution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Layout className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            3. The Clearfix Problem & Solution
          </CardTitle>
          <CardDescription>
            Fix parent height collapse with floated children
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={clearfixExample}
            title="Clearfix Solution"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Float and clear properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">float: left;</code>
              <p className="text-sm text-muted-foreground mt-1">Float element to the left</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">float: right;</code>
              <p className="text-sm text-muted-foreground mt-1">Float element to the right</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">float: none;</code>
              <p className="text-sm text-muted-foreground mt-1">Remove float (default)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">clear: both;</code>
              <p className="text-sm text-muted-foreground mt-1">Move element below all floats</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">.clearfix::after {`{ content: ""; display: table; clear: both; }`}</code>
              <p className="text-sm text-muted-foreground mt-1">Clearfix hack for parent height</p>
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
            <li><strong>Use for content wrapping:</strong> Perfect for text wrapping around images</li>
            <li><strong>Not for page layout:</strong> Use Flexbox or Grid for modern layouts</li>
            <li><strong>Always clearfix parents:</strong> Prevent height collapse issues</li>
            <li><strong>Clear strategically:</strong> Use clear: both to control flow</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Modern Alternative */}
      <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-900 dark:text-amber-100">Modern Alternative</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          For page layouts, use <strong>Flexbox</strong> or <strong>Grid</strong> instead of floats! 
          Float is best reserved for its original purpose: wrapping text around images in articles.
        </AlertDescription>
      </Alert>
    </div>
  );
}
