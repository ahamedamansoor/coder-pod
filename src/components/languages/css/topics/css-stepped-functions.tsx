'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { BarChart3, CheckCircle, Sparkles, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssSteppedFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSteppedFunctions({ onOpenWebPlayground }: CssSteppedFunctionsProps) {
  const [selectedExample, setSelectedExample] = useState('rounding');

  const roundingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stepped Functions - Rounding Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%); }
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
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #6366f1;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #a5b4fc; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-area {
      background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
      padding: 40px;
      border-radius: 12px;
      margin: 20px 0;
      border: 3px solid #6366f1;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-area {
        background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%);
        border-color: #a5b4fc;
      }
    }
    
    .example-group {
      margin: 20px 0;
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #6366f1;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-group {
        background: #0f172a;
        border-color: #a5b4fc;
      }
    }
    
    .example-title {
      font-weight: 700;
      color: #4338ca;
      margin-bottom: 15px;
      font-size: 1.1rem;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-title { color: #c7d2fe; }
    }
    
    .bar-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 10px 0;
    }
    
    .bar-label {
      min-width: 200px;
      font-weight: 600;
      color: #4f46e5;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar-label { color: #a5b4fc; }
    }
    
    .bar {
      height: 40px;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
      font-size: 0.9rem;
      white-space: nowrap;
      padding: 0 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar {
        background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
      }
    }
    
    /* Rounding examples (pre-calculated) */
    .round-150 { width: 150px; } /* round(157, 50) → 150 */
    .round-200 { width: 200px; } /* round(185, 50) → 200 */
    .floor-150 { width: 150px; } /* floor(187) → 150 (to nearest 50) */
    .ceil-200 { width: 200px; }  /* ceil(157) → 200 (to nearest 50) */
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24;
      }
    }
    
    .info-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #fde68a; }
    }
    
    .info-text {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #fef3c7; }
    }
    
    code {
      background: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      color: #6366f1;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #a5b4fc; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Stepped Functions</h1>
    <p class="subtitle">Rounding and stepping operations</p>
    
    <div class="demo-area">
      <div class="example-group">
        <div class="example-title">Round to Nearest 50px</div>
        <div class="bar-wrapper">
          <div class="bar-label">157px → round(157, 50)</div>
          <div class="bar round-150">150px</div>
        </div>
        <div class="bar-wrapper">
          <div class="bar-label">185px → round(185, 50)</div>
          <div class="bar round-200">200px</div>
        </div>
      </div>
      
      <div class="example-group">
        <div class="example-title">Floor & Ceiling</div>
        <div class="bar-wrapper">
          <div class="bar-label">187px → floor (to 50)</div>
          <div class="bar floor-150">150px</div>
        </div>
        <div class="bar-wrapper">
          <div class="bar-label">157px → ceil (to 50)</div>
          <div class="bar ceil-200">200px</div>
        </div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">🔢 Rounding Operations</div>
      <p class="info-text">
        CSS supports <code>round()</code>, <code>mod()</code>, and <code>rem()</code> functions for stepping 
        and rounding operations. These functions have <strong>limited browser support</strong>. This demo shows 
        pre-calculated rounding examples. Once supported, you can round values to specific intervals like 50px, 
        create stepped layouts, and implement modulo-based patterns!
      </p>
    </div>
  </div>
</body>
</html>`;

  const moduloExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modulo Pattern</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%); }
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    h1 { 
      color: #6366f1; 
      text-align: center; 
      margin-bottom: 10px; 
      font-size: 2.5rem;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #a5b4fc; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 15px;
      padding: 30px;
      background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
      border-radius: 12px;
      border: 3px solid #6366f1;
    }
    
    @media (prefers-color-scheme: dark) {
      .grid {
        background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%);
        border-color: #a5b4fc;
      }
    }
    
    .box {
      height: 80px;
      background: white;
      border: 3px solid #6366f1;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #4f46e5;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #0f172a;
        color: #a5b4fc;
        border-color: #a5b4fc;
      }
    }
    
    .box:hover {
      transform: scale(1.05);
    }
    
    /* Pattern using mod concept (every 3rd item different) */
    .box:nth-child(3n) {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: white;
    }
    
    @media (prefers-color-scheme: dark) {
      .box:nth-child(3n) {
        background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
      }
    }
    
    .note {
      margin-top: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .note { 
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%); 
        color: #fef3c7; 
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Modulo Pattern</h1>
    <p class="subtitle">Every 3rd item highlighted</p>
    
    <div class="grid">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
      <div class="box">10</div>
      <div class="box">11</div>
      <div class="box">12</div>
    </div>
    
    <div class="note">
      💡 This pattern uses :nth-child(3n) to style every 3rd item, 
      similar to how mod(n, 3) would work in CSS once supported!
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={BarChart3}
        category="CSS · Modern Features"
        title="Stepped Functions"
        description="Rounding and modulo operations with round(), mod(), and rem()"
        colorTheme="indigo"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-indigo-700 dark:text-indigo-300">
            <div className="relative">
              <BarChart3 className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            Stepped Functions
          </CardTitle>
          <CardDescription className="text-lg text-indigo-600 dark:text-indigo-400">
            📊 Rounding, modulo, and stepping operations for precise values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">
                  What are Stepped Functions?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CSS Stepped Functions (<code className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">round()</code>, 
                  <code className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">mod()</code>, 
                  <code className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">rem()</code>) 
                  enable rounding operations and modulo arithmetic for creating stepped values, grid-aligned layouts, 
                  and pattern-based designs!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-indigo-700 dark:text-indigo-300">Precise Rounding</div>
                      <div className="text-sm text-indigo-600 dark:text-indigo-400">
                        Round values to specific intervals and steps
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-violet-700 dark:text-violet-300">Pattern Creation</div>
                      <div className="text-sm text-violet-600 dark:text-violet-400">
                        Create repeating patterns with modulo operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 p-6 rounded-xl border border-indigo-200/50">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">
                  Available Functions
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">🔄</span> round(value, interval)
                    </div>
                    <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">
                      width: round(157px, 50px); /* Rounds to 150px */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Rounds a value to the nearest multiple of an interval.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">%</span> mod(dividend, divisor)
                    </div>
                    <code className="text-sm font-mono text-violet-600 dark:text-violet-400 block mb-2">
                      left: mod(position, 100px); /* Returns remainder */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the modulo (remainder) of division. Always has the sign of the divisor.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">÷</span> rem(dividend, divisor)
                    </div>
                    <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">
                      margin: rem(total, spacing); /* CSS remainder */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the remainder. Always has the sign of the dividend.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-100 via-violet-100 to-indigo-100 dark:from-indigo-900/30 dark:via-violet-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="font-bold text-lg text-indigo-700 dark:text-indigo-300">Stepping Functions</div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-indigo-600 dark:text-indigo-400">round()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-violet-600 dark:text-violet-400">mod()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-purple-600 dark:text-purple-400">rem()</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-orange-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚠️</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Limited Support</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Cutting-edge functions with evolving browser support!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <BarChart3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            See stepping concepts in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('rounding')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'rounding'
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Rounding Operations
            </button>
            <button
              onClick={() => setSelectedExample('modulo')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'modulo'
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Modulo Pattern
            </button>
          </div>

          {selectedExample === 'rounding' && (
            <FrontendCodePreview
              html={roundingExample}
              title="Rounding Operations"
              colorTheme="indigo"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'modulo' && (
            <FrontendCodePreview
              html={moduloExample}
              title="Modulo-Based Pattern"
              colorTheme="indigo"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200/50">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">Layout & Alignment</h4>
              <ul className="text-sm space-y-2 text-indigo-600 dark:text-indigo-400">
                <li>• <strong>Grid alignment</strong> - Round to grid intervals (8px, 16px)</li>
                <li>• <strong>Stepped sizing</strong> - Create size systems with fixed steps</li>
                <li>• <strong>Baseline grids</strong> - Align to vertical rhythm</li>
                <li>• <strong>Snap-to-grid</strong> - Precise element positioning</li>
              </ul>
            </div>
            
            <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border border-violet-200/50">
              <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-3">Pattern Design</h4>
              <ul className="text-sm space-y-2 text-violet-600 dark:text-violet-400">
                <li>• <strong>Repeating patterns</strong> - Use modulo for cyclic designs</li>
                <li>• <strong>Alternating layouts</strong> - Every nth item different</li>
                <li>• <strong>Color patterns</strong> - Cycle through color palettes</li>
                <li>• <strong>Stepped animations</strong> - Frame-based animations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>When to Use Stepped Functions</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Grid systems:</strong> Align elements to consistent intervals</li>
            <li><strong>Stepped sizing:</strong> Create systematic size progressions</li>
            <li><strong>Pattern creation:</strong> Use modulo for repeating designs</li>
            <li><strong>Precise rounding:</strong> Round to specific units or multiples</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-900 dark:text-orange-100">Limited Browser Support</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          <div className="space-y-2 mt-2">
            <div><strong>⚠️ Experimental:</strong> CSS stepped functions have limited browser support</div>
            <div><strong>Chrome 111+:</strong> Behind feature flag</div>
            <div><strong>Firefox 108+:</strong> Behind feature flag</div>
            <div><strong>Safari 15.4+:</strong> Partial support</div>
            <div className="mt-3 pt-3 border-t border-orange-200 dark:border-orange-700">
              <strong>💡 Recommendation:</strong> Use with progressive enhancement. Consider CSS Grid's 
              built-in rounding or pre-calculated values for production until browser support improves.
            </div>
          </div>
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Learn More</AlertTitle>
        <AlertDescription>
          CSS Stepped Functions are part of the CSS Values and Units Module Level 4. They provide precise 
          control over rounding and modulo operations, enabling systematic layouts and pattern-based designs. 
          For now, use CSS preprocessors or JavaScript for similar functionality.
        </AlertDescription>
      </Alert>
    </div>
  );
}
