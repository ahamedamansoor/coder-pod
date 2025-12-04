'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, Sparkles, Zap, Target, CheckCircle, Info, ArrowUpDown } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface FlexboxAdvancedProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const flexBasisExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flex-basis Deep Dive</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
}
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
    h1 { color: #8b5cf6; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #a78bfa; }
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
    h3 {
      color: #4c1d95;
      margin-bottom: 20px;
      text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      h3 { color: #c4b5fd; }
    }
    .flex-container {
      display: flex;
      gap: 10px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #cbd5e1;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .flex-container { background: #1e293b; border-color: #475569; }
    }
    .flex-item {
      padding: 20px;
      background: linear-gradient(135deg, #a78bfa, #8b5cf6);
      color: white;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60px;
    }
    .demo1 .item { flex-basis: auto; }
    .demo2 .item { flex-basis: 0; }
    .demo3 .item { flex-basis: 200px; }
    .demo4 .item { flex-basis: 33.333%; }
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
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Flex-Basis Mastery</h1>
    
    <div class="demo-section demo1">
      <h3>flex-basis: auto (default)</h3>
      <div class="flex-container">
        <div class="flex-item item">Short</div>
        <div class="flex-item item">Medium Text</div>
        <div class="flex-item item">Much Longer Content Here</div>
      </div>
      <div class="code">flex-basis: auto; /* Uses content width */</div>
    </div>
    
    <div class="demo-section demo2">
      <h3>flex-basis: 0</h3>
      <div class="flex-container">
        <div class="flex-item item">Short</div>
        <div class="flex-item item">Medium Text</div>
        <div class="flex-item item">Much Longer Content Here</div>
      </div>
      <div class="code">flex-basis: 0; /* Ignores content, equal distribution */</div>
    </div>
    
    <div class="demo-section demo3">
      <h3>flex-basis: 200px</h3>
      <div class="flex-container">
        <div class="flex-item item">Item 1</div>
        <div class="flex-item item">Item 2</div>
        <div class="flex-item item">Item 3</div>
      </div>
      <div class="code">flex-basis: 200px; /* Fixed initial size */</div>
    </div>
    
    <div class="demo-section demo4">
      <h3>flex-basis: 33.333%</h3>
      <div class="flex-container">
        <div class="flex-item item">1/3</div>
        <div class="flex-item item">1/3</div>
        <div class="flex-item item">1/3</div>
      </div>
      <div class="code">flex-basis: 33.333%; /* Percentage-based */</div>
    </div>
  </div>
</body>
</html>`;

const flexGrowShrinkExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flex Grow & Shrink</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
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
    h1 { color: #8b5cf6; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #a78bfa; }
    }
    .demo-section {
      margin-bottom: 40px;
      padding: 25px;
      background: #f8fafc;
      border-radius: 12px;
    }
    @media (prefers-color-scheme: dark) {
      .demo-section { background: #0f172a; }
    }
    h3 { color: #4c1d95; margin-bottom: 20px; text-align: center; }
    @media (prefers-color-scheme: dark) {
      h3 { color: #c4b5fd; }
    }
    .flex-container {
      display: flex;
      gap: 10px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #cbd5e1;
      margin-bottom: 15px;
    }
    @media (prefers-color-scheme: dark) {
      .flex-container { background: #1e293b; border-color: #475569; }
    }
    .flex-item {
      padding: 20px;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .item-1 { background: #ef4444; color: white; }
    .item-2 { background: #3b82f6; color: white; }
    .item-3 { background: #10b981; color: white; }
    
    .grow-demo .item-1 { flex-grow: 1; }
    .grow-demo .item-2 { flex-grow: 2; }
    .grow-demo .item-3 { flex-grow: 1; }
    
    .shrink-demo .item-1 { flex-shrink: 1; flex-basis: 300px; }
    .shrink-demo .item-2 { flex-shrink: 2; flex-basis: 300px; }
    .shrink-demo .item-3 { flex-shrink: 0; flex-basis: 300px; }
    
    .code {
      padding: 15px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
    }
    @media (prefers-color-scheme: dark) {
      .code { background: #020617; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📈 Flex Grow & Shrink</h1>
    
    <div class="demo-section grow-demo">
      <h3>Flex-Grow Distribution</h3>
      <div class="flex-container">
        <div class="flex-item item-1">Grow: 1</div>
        <div class="flex-item item-2">Grow: 2 (Double!)</div>
        <div class="flex-item item-3">Grow: 1</div>
      </div>
      <div class="code">
.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; } /* Takes 2x extra space */
.item-3 { flex-grow: 1; }
      </div>
    </div>
    
    <div class="demo-section shrink-demo">
      <h3>Flex-Shrink Behavior (Resize window!)</h3>
      <div class="flex-container">
        <div class="flex-item item-1">Shrink: 1</div>
        <div class="flex-item item-2">Shrink: 2</div>
        <div class="flex-item item-3">Shrink: 0 (No shrink!)</div>
      </div>
      <div class="code">
.item-1 { flex-shrink: 1; flex-basis: 300px; }
.item-2 { flex-shrink: 2; flex-basis: 300px; } /* Shrinks 2x faster */
.item-3 { flex-shrink: 0; flex-basis: 300px; } /* Never shrinks */
      </div>
    </div>
  </div>
</body>
</html>`;

const flexShorthandExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flex Shorthand Mastery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
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
    h1 { color: #8b5cf6; text-align: center; margin-bottom: 40px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #a78bfa; }
    }
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
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
    h3 { color: #4c1d95; margin-bottom: 20px; font-size: 18px; }
    @media (prefers-color-scheme: dark) {
      h3 { color: #c4b5fd; }
    }
    .flex-container {
      display: flex;
      gap: 10px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #cbd5e1;
      margin-bottom: 15px;
      min-height: 80px;
    }
    @media (prefers-color-scheme: dark) {
      .flex-container { background: #1e293b; border-color: #475569; }
    }
    .flex-item {
      padding: 15px;
      background: linear-gradient(135deg, #a78bfa, #8b5cf6);
      color: white;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .demo1 .item { flex: 1; }
    .demo2 .item { flex: auto; }
    .demo3 .item { flex: none; }
    .demo4 .item-1 { flex: 1 1 200px; }
    .demo4 .item-2 { flex: 2 1 200px; }
    .demo4 .item-3 { flex: 1 1 200px; }
    .code {
      padding: 12px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
      line-height: 1.5;
    }
    @media (prefers-color-scheme: dark) {
      .code { background: #020617; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Flex Shorthand Reference</h1>
    
    <div class="demo-grid">
      <div class="demo-card demo1">
        <h3>flex: 1</h3>
        <div class="flex-container">
          <div class="flex-item item">Equal</div>
          <div class="flex-item item">Equal</div>
          <div class="flex-item item">Equal</div>
        </div>
        <div class="code">
flex: 1;
/* = flex: 1 1 0% */
/* Equal distribution */
        </div>
      </div>
      
      <div class="demo-card demo2">
        <h3>flex: auto</h3>
        <div class="flex-container">
          <div class="flex-item item">Short</div>
          <div class="flex-item item">Medium Text</div>
          <div class="flex-item item">Very Long Content</div>
        </div>
        <div class="code">
flex: auto;
/* = flex: 1 1 auto */
/* Based on content */
        </div>
      </div>
      
      <div class="demo-card demo3">
        <h3>flex: none</h3>
        <div class="flex-container">
          <div class="flex-item item">Fixed</div>
          <div class="flex-item item">Fixed</div>
          <div class="flex-item item">Fixed</div>
        </div>
        <div class="code">
flex: none;
/* = flex: 0 0 auto */
/* No grow/shrink */
        </div>
      </div>
      
      <div class="demo-card demo4">
        <h3>flex: [grow] [shrink] [basis]</h3>
        <div class="flex-container">
          <div class="flex-item item-1">1x</div>
          <div class="flex-item item-2">2x</div>
          <div class="flex-item item-3">1x</div>
        </div>
        <div class="code">
.item-1 { flex: 1 1 200px; }
.item-2 { flex: 2 1 200px; }
.item-3 { flex: 1 1 200px; }
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function FlexboxAdvanced({ onOpenWebPlayground }: FlexboxAdvancedProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Modern Layout"
        title="Advanced Flexbox"
        description="Master flex algorithms, intrinsic sizing, and complex flex patterns"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Understanding Flex Properties
          </CardTitle>
          <CardDescription>
            Deep dive into flex-grow, flex-shrink, and flex-basis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            While basic flexbox is straightforward, <strong className="text-foreground">mastering the flex algorithm</strong> requires 
            understanding how flex-grow, flex-shrink, and flex-basis work together to distribute space.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Target className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">flex-grow</h4>
              <p className="text-sm text-muted-foreground">
                How much extra space an item should take
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <ArrowUpDown className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">flex-shrink</h4>
              <p className="text-sm text-muted-foreground">
                How much an item should shrink when space is tight
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">flex-basis</h4>
              <p className="text-sm text-muted-foreground">
                The initial size before growing/shrinking
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Flex-Basis Explained
          </CardTitle>
          <CardDescription>
            Understanding the starting point for flex items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexBasisExample}
            title="Flex-Basis Demo"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Flex-Basis Values:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>auto:</strong> Uses content width (default)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>0:</strong> Ignores content, distributes based on flex-grow only</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Fixed (px/%/rem):</strong> Sets exact starting size</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <ArrowUpDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            2. Flex-Grow & Flex-Shrink
          </CardTitle>
          <CardDescription>
            How items grow and shrink dynamically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexGrowShrinkExample}
            title="Grow & Shrink Demo"
            colorTheme="emerald"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Understanding the Math</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                <strong>Flex-grow:</strong> Extra space is divided by the sum of all flex-grow values. 
                An item with flex-grow: 2 gets 2x the space of an item with flex-grow: 1.
              </p>
              <p>
                <strong>Flex-shrink:</strong> When space is tight, items shrink proportionally. 
                flex-shrink: 0 means the item never shrinks.
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Flex Shorthand
          </CardTitle>
          <CardDescription>
            Master the flex shorthand property
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexShorthandExample}
            title="Flex Shorthand"
            colorTheme="purple"
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
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">flex: 1;</code>
              <p className="text-sm text-muted-foreground mt-1">Equal distribution (flex: 1 1 0%)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">flex: auto;</code>
              <p className="text-sm text-muted-foreground mt-1">Based on content (flex: 1 1 auto)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">flex: none;</code>
              <p className="text-sm text-muted-foreground mt-1">No grow/shrink (flex: 0 0 auto)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">flex: 1 0 200px;</code>
              <p className="text-sm text-muted-foreground mt-1">Custom: grow 1, no shrink, 200px basis</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use flex shorthand:</strong> More concise and prevents mistakes</li>
            <li><strong>Prefer flex: 1 for equal items:</strong> Cleaner than setting all three values</li>
            <li><strong>Use flex-basis: 0 for true equal distribution:</strong> Ignores content width</li>
            <li><strong>Set flex-shrink: 0 on items that shouldn't shrink:</strong> Prevents unwanted compression</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
