'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Columns, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Maximize2, AlignCenter,
  AlignHorizontalSpaceAround, Grid3x3
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssFlexboxProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssFlexbox({ onOpenWebPlayground }: CssFlexboxProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Columns}
        category="CSS · Modern Layout"
        title="Flexbox"
        description="The modern way to create flexible one-dimensional layouts"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Columns className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Flexbox</CardTitle>
              <CardDescription className="text-base">Flexible Box Layout Module</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Flexbox = One-Dimensional Layout</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Flexbox is a powerful layout system for arranging items in <strong>one direction</strong> - 
              either horizontally (row) or vertically (column). Perfect for navigation bars, card layouts, 
              centering content, and responsive designs.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              Two Parts: Container & Items
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-700 dark:text-blue-400">Flex Container:</strong>
                <p className="text-gray-600 dark:text-gray-400 mt-1">The parent element with <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs">display: flex</code></p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-700 dark:text-blue-400">Flex Items:</strong>
                <p className="text-gray-600 dark:text-gray-400 mt-1">The direct children that get arranged</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            Getting Started with Flexbox
          </CardTitle>
          <CardDescription>The magic starts with display: flex</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Step 1: Create a Flex Container
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`.container {
  display: flex; /* That's it! */
}`}
              </code>
            </div>
            <p className="text-sm text-green-800 dark:text-green-200">
              All direct children automatically become flex items and line up horizontally!
            </p>
          </div>

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
      padding: 40px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .demo {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .section {
      margin-bottom: 40px;
    }
    
    .label {
      font-weight: 700;
      padding: 8px 15px;
      border-radius: 8px;
      display: inline-block;
      margin-bottom: 15px;
      font-size: 14px;
    }
    
    .label-before {
      background: #fee;
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-before {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .label-after {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-after {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .box {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 30px;
      margin: 10px 0;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
    }
    
    .no-flex .box {
      /* Without flexbox - stacks vertically */
    }
    
    .with-flex {
      display: flex;
      gap: 10px;
    }
    
    .with-flex .box {
      margin: 0;
      flex: 1; /* Equal width */
    }
  </style>
</head>
<body>
  <div class="demo">
    <h1>✨ Flexbox Magic</h1>
    
    <div class="section">
      <div class="label label-before">Without Flexbox</div>
      <div class="no-flex">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>
    
    <div class="section">
      <div class="label label-after">With display: flex ✅</div>
      <div class="with-flex">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Before & After Flexbox"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Main Axis */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Flex Direction
          </CardTitle>
          <CardDescription>Control the main axis direction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">flex-direction</code> property 
            controls whether items flow horizontally or vertically.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">row</Badge>
              <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900 ml-2 mb-3">Default</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Items flow horizontally (left to right)
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-purple-100">
                  flex-direction: row;
                </code>
              </div>
              <div className="flex gap-2">
                <div className="w-16 h-16 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-xs font-bold">1</div>
                <div className="w-16 h-16 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-xs font-bold">2</div>
                <div className="w-16 h-16 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-xs font-bold">3</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">column</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Items flow vertically (top to bottom)
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-purple-100">
                  flex-direction: column;
                </code>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-12 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-xs font-bold">1</div>
                <div className="h-12 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-xs font-bold">2</div>
                <div className="h-12 bg-purple-300 dark:bg-purple-700 rounded flex items-center justify-center text-xs font-bold">3</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alignment */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <AlignCenter className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Alignment Properties
          </CardTitle>
          <CardDescription>The power of Flexbox - perfect alignment!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* justify-content */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">justify-content</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Aligns items along the main axis (horizontal for row)
              </p>
              <div className="space-y-2 text-xs">
                <div><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">flex-start</code> - Start</div>
                <div><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">center</code> - Center</div>
                <div><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">flex-end</code> - End</div>
                <div><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">space-between</code> - Space between</div>
                <div><code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">space-around</code> - Space around</div>
              </div>
            </div>

            {/* align-items */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">align-items</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Aligns items along the cross axis (vertical for row)
              </p>
              <div className="space-y-2 text-xs">
                <div><code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">stretch</code> - Stretch (default)</div>
                <div><code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">flex-start</code> - Top</div>
                <div><code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">center</code> - Middle</div>
                <div><code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">flex-end</code> - Bottom</div>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Perfect Centering!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Want to center something both horizontally and vertically? This is the easiest way:
              <pre className="mt-2 bg-blue-900 dark:bg-blue-950 text-blue-100 p-3 rounded text-sm">
{`display: flex;
justify-content: center;
align-items: center;`}
              </pre>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Alignment Playground
          </CardTitle>
          <CardDescription>See different alignment combinations</CardDescription>
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
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    
    .demo-box {
      background: white;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-box {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    .label {
      font-size: 12px;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    .flex-container {
      height: 150px;
      display: flex;
      gap: 10px;
      background: #f3f4f6;
      border-radius: 8px;
      padding: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .flex-container {
        background: #374151;
      }
    }
    
    .item {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 14px;
    }
    
    .center {
      justify-content: center;
      align-items: center;
    }
    
    .space-between {
      justify-content: space-between;
    }
    
    .space-around {
      justify-content: space-around;
    }
    
    .flex-end {
      justify-content: flex-end;
    }
    
    .align-start {
      align-items: flex-start;
    }
    
    .align-end {
      align-items: flex-end;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Flexbox Alignment Examples</h1>
    
    <div class="grid">
      <div class="demo-box">
        <div class="label">justify: center | align: center</div>
        <div class="flex-container center">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="label">justify: space-between</div>
        <div class="flex-container space-between">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="label">justify: space-around</div>
        <div class="flex-container space-around">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="label">justify: flex-end | align: flex-start</div>
        <div class="flex-container flex-end align-start">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="label">justify: center | align: flex-end</div>
        <div class="flex-container center align-end">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
      
      <div class="demo-box">
        <div class="label">justify: space-around | align: flex-end</div>
        <div class="flex-container space-around align-end">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Flexbox Alignment Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Flex Item Properties */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Maximize2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Flex Item Properties
          </CardTitle>
          <CardDescription>Control individual items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">flex-grow</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                How much an item should grow
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg text-xs">
                <code className="text-orange-100">flex-grow: 1;</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">flex-shrink</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                How much an item should shrink
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg text-xs">
                <code className="text-orange-100">flex-shrink: 0;</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-300 dark:border-orange-700 shadow-lg">
              <Badge className="bg-orange-600 text-white mb-3">flex</Badge>
              <Badge className="bg-orange-700 text-white mb-3 ml-1 text-xs">⭐ Shorthand</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Shorthand for grow, shrink, basis
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg text-xs">
                <code className="text-orange-100">flex: 1;</code>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Common Pattern</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Use <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900 rounded">flex: 1</code> on items 
              to make them all equal width and fill available space!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>display: flex</strong> creates a flex container</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>justify-content</strong> aligns on main axis (horizontal)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>align-items</strong> aligns on cross axis (vertical)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>flex: 1</strong> on items for equal widths</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>gap</strong> property adds spacing between items</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
