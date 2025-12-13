'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Calculator, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Maximize2, Minimize2
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssFunctions({ onOpenWebPlayground }: CssFunctionsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Calculator}
        category="CSS · Advanced CSS"
        title="CSS Functions"
        description="Dynamic calculations with calc(), min(), max(), and clamp()"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Functions</CardTitle>
              <CardDescription className="text-base">Dynamic value calculations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Functions = Dynamic Values</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS functions perform calculations and return values dynamically. No JavaScript needed! 
              Perfect for responsive designs and flexible layouts.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Calculator, name: 'calc()', desc: 'Math operations' },
              { icon: Minimize2, name: 'min()', desc: 'Smallest value' },
              { icon: Maximize2, name: 'max()', desc: 'Largest value' },
              { icon: Sparkles, name: 'clamp()', desc: 'Range limit' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h3 className="font-bold mb-1">{item.name}</h3>
                <p className="text-xs text-blue-800 dark:text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            calc() Function
          </CardTitle>
          <CardDescription>Perform mathematical calculations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">calc()</code> function 
            lets you perform calculations with different units. Perfect for dynamic layouts!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              calc() Examples
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`/* Mix different units */
width: calc(100% - 50px);

/* Math operations: +, -, *, / */
width: calc(100vw - 2rem);
height: calc(100vh / 3);

/* Complex calculations */
padding: calc(1rem + 2vw);
margin: calc((100% - 1200px) / 2);

/* With variables */
width: calc(var(--sidebar-width) + 20px);`}
              </code>
            </div>
            <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Spacing is Important!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Always use spaces around <code>+</code> and <code>-</code> operators: 
                <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded ml-1">calc(100% - 20px)</code> ✓<br />
                Not: <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">calc(100%-20px)</code> ✗
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-3">
            {[
              { use: 'Full width minus fixed sidebar', code: 'width: calc(100% - 250px);' },
              { use: 'Center with margin', code: 'margin: calc((100% - 800px) / 2);' },
              { use: 'Responsive padding', code: 'padding: calc(1rem + 1vw);' },
              { use: 'Grid gap calculation', code: 'gap: calc(20px + 1%);' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.use}</p>
                <code className="text-xs bg-purple-900 dark:bg-purple-950 text-purple-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See calc() in action</CardDescription>
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
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    /* calc() Examples */
    .example {
      margin-bottom: 30px;
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    .box {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 20px;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
    }
    
    /* Example 1: Full width minus fixed */
    .calc1 {
      width: calc(100% - 100px);
    }
    
    /* Example 2: Viewport based */
    .calc2 {
      width: calc(100vw - 120px);
      max-width: 100%;
    }
    
    /* Example 3: Centered with calc */
    .calc3 {
      width: 400px;
      margin-left: calc(50% - 200px);
    }
    
    /* Example 4: Dynamic padding */
    .calc4 {
      padding: calc(10px + 2vw);
    }
    
    /* Example 5: Grid with calc */
    .grid {
      display: grid;
      grid-template-columns: repeat(3, calc(33.333% - 20px));
      gap: 30px;
      margin-top: 20px;
    }
    
    .code {
      background: #1a1a2e;
      color: #10b981;
      padding: 10px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 12px;
      margin-top: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #0a0a14;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🧮 calc() Function</h1>
    
    <div class="example">
      <div class="label">width: calc(100% - 100px)</div>
      <div class="box calc1">100% width minus 100px</div>
      <div class="code">Perfect for fixed sidebar layouts</div>
    </div>
    
    <div class="example">
      <div class="label">width: calc(100vw - 120px)</div>
      <div class="box calc2">Viewport width minus 120px</div>
      <div class="code">Responsive to window size</div>
    </div>
    
    <div class="example">
      <div class="label">margin-left: calc(50% - 200px)</div>
      <div class="box calc3">Centered with calc!</div>
      <div class="code">Alternative to margin: 0 auto</div>
    </div>
    
    <div class="example">
      <div class="label">padding: calc(10px + 2vw)</div>
      <div class="box calc4">Dynamic padding!</div>
      <div class="code">Grows with viewport width</div>
    </div>
    
    <div class="example">
      <div class="label">Grid: calc(33.333% - 20px) with 30px gap</div>
      <div class="grid">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <div class="code">Equal columns with gap</div>
    </div>
  </div>
</body>
</html>`}
            title="calc() Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Minimize2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            min() & max() Functions
          </CardTitle>
          <CardDescription>Choose smallest or largest value</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">min()</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Returns the <strong>smallest</strong> value from a list
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-blue-100">
                  width: min(500px, 100%);
                </code>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                ✓ Never exceeds 500px, but can be smaller
              </p>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">max()</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Returns the <strong>largest</strong> value from a list
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg mb-3">
                <code className="text-sm text-green-100">
                  width: max(300px, 50%);
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                ✓ At least 300px, but can be larger
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { func: 'min()', use: 'Max width constraint', code: 'width: min(100%, 800px);', desc: 'Never wider than 800px' },
              { func: 'max()', use: 'Min width constraint', code: 'width: max(50%, 300px);', desc: 'At least 300px wide' },
              { func: 'min()', use: 'Responsive font', code: 'font-size: min(5vw, 32px);', desc: 'Caps at 32px' },
              { func: 'max()', use: 'Responsive padding', code: 'padding: max(20px, 2vw);', desc: 'Minimum 20px' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600 text-white text-xs">{item.func}</Badge>
                  <span className="font-bold text-sm">{item.use}</span>
                </div>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded block mb-1">
                  {item.code}
                </code>
                <p className="text-xs text-green-700 dark:text-green-300">→ {item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            clamp() Function
          </CardTitle>
          <CardDescription>The most powerful: min, ideal, and max</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">clamp()</code> combines 
            min and max in one function: <code>clamp(minimum, ideal, maximum)</code>
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              clamp() Syntax
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-blue-100 block">
{`/* clamp(minimum, ideal, maximum) */

/* Responsive font size */
font-size: clamp(16px, 4vw, 32px);
/* Never smaller than 16px, never larger than 32px */

/* Responsive width */
width: clamp(300px, 50%, 800px);
/* Min 300px, Max 800px, tries for 50% */

/* Fluid spacing */
padding: clamp(1rem, 2vw, 3rem);`}
              </code>
            </div>
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Most Popular Use: Typography!</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <code>clamp()</code> is perfect for fluid typography that scales with viewport but stays readable!
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-3">
            {[
              { use: 'Fluid Typography', code: 'font-size: clamp(1rem, 2.5vw, 2rem);' },
              { use: 'Responsive Container', code: 'width: clamp(320px, 90%, 1200px);' },
              { use: 'Flexible Padding', code: 'padding: clamp(20px, 5%, 80px);' },
              { use: 'Dynamic Gap', code: 'gap: clamp(10px, 2vw, 40px);' }
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

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>calc()</strong> for math operations between units</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>min()</strong> picks smallest, <strong>max()</strong> picks largest</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>clamp()</strong> = min + ideal + max in one function</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use spaces around <strong>+</strong> and <strong>-</strong> in calc()</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
