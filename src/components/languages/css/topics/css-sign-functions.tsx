'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { PlusCircle, CheckCircle, Sparkles, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssSignFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssSignFunctions({ onOpenWebPlayground }: CssSignFunctionsProps) {
  const [selectedExample, setSelectedExample] = useState('absolute');

  const absoluteExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Functions - Absolute Values</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); }
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
      color: #14b8a6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #5eead4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-area {
      background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
      padding: 40px;
      border-radius: 12px;
      margin: 20px 0;
      border: 3px solid #14b8a6;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-area {
        background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
        border-color: #5eead4;
      }
    }
    
    .example-row {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 20px 0;
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #14b8a6;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-row {
        background: #0f172a;
        border-color: #5eead4;
      }
    }
    
    .label {
      min-width: 200px;
      font-weight: 700;
      color: #0f766e;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .label { color: #99f6e4; }
    }
    
    .arrow {
      font-size: 1.5rem;
      color: #14b8a6;
    }
    
    @media (prefers-color-scheme: dark) {
      .arrow { color: #5eead4; }
    }
    
    .bar {
      height: 50px;
      background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
      font-size: 1.1rem;
      padding: 0 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .bar {
        background: linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%);
      }
    }
    
    /* All absolute values are positive */
    .abs-100 { width: 100px; }
    .abs-150 { width: 150px; }
    .abs-200 { width: 200px; }
    .abs-250 { width: 250px; }
    
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
      color: #14b8a6;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #5eead4; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>➕ Sign Functions</h1>
    <p class="subtitle">Absolute values and sign detection</p>
    
    <div class="demo-area">
      <div class="example-row">
        <div class="label">-100px</div>
        <div class="arrow">→</div>
        <div class="bar abs-100">abs() = 100px</div>
      </div>
      <div class="example-row">
        <div class="label">-150px</div>
        <div class="arrow">→</div>
        <div class="bar abs-150">abs() = 150px</div>
      </div>
      <div class="example-row">
        <div class="label">200px</div>
        <div class="arrow">→</div>
        <div class="bar abs-200">abs() = 200px</div>
      </div>
      <div class="example-row">
        <div class="label">250px</div>
        <div class="arrow">→</div>
        <div class="bar abs-250">abs() = 250px</div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">🔢 Absolute Value Function</div>
      <p class="info-text">
        CSS supports <code>abs()</code> and <code>sign()</code> functions for absolute values and sign detection. 
        These functions have <strong>limited browser support</strong>. The <code>abs()</code> function returns 
        the absolute value (always positive), while <code>sign()</code> returns -1, 0, or 1 based on the 
        number's sign. Perfect for calculations that need positive values!
      </p>
    </div>
  </div>
</body>
</html>`;

  const signExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Detection</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0f766e 0%, #115e59 100%); }
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
      color: #14b8a6; 
      text-align: center; 
      margin-bottom: 10px; 
      font-size: 2.5rem;
    }
    @media (prefers-color-scheme: dark) {
      h1 { color: #5eead4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    .sign-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 30px;
      background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
      border-radius: 12px;
      border: 3px solid #14b8a6;
    }
    
    @media (prefers-color-scheme: dark) {
      .sign-grid {
        background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
        border-color: #5eead4;
      }
    }
    
    .sign-card {
      background: white;
      padding: 30px 20px;
      border-radius: 12px;
      border: 3px solid #14b8a6;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .sign-card {
        background: #0f172a;
        border-color: #5eead4;
      }
    }
    
    .value {
      font-size: 2rem;
      font-weight: 700;
      color: #0f766e;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .value { color: #99f6e4; }
    }
    
    .sign {
      font-size: 3rem;
      font-weight: 700;
      margin: 20px 0;
    }
    
    .negative { color: #ef4444; }
    .zero { color: #64748b; }
    .positive { color: #10b981; }
    
    .sign-label {
      font-weight: 600;
      color: #0d9488;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .sign-label { color: #99f6e4; }
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
    <h1>➕ Sign Detection</h1>
    <p class="subtitle">Returns -1, 0, or +1</p>
    
    <div class="sign-grid">
      <div class="sign-card">
        <div class="value">-100</div>
        <div class="sign negative">−</div>
        <div class="sign-label">sign() = -1</div>
      </div>
      
      <div class="sign-card">
        <div class="value">0</div>
        <div class="sign zero">0</div>
        <div class="sign-label">sign() = 0</div>
      </div>
      
      <div class="sign-card">
        <div class="value">+100</div>
        <div class="sign positive">+</div>
        <div class="sign-label">sign() = +1</div>
      </div>
    </div>
    
    <div class="note">
      💡 The sign() function returns -1 for negative numbers, 0 for zero, 
      and +1 for positive numbers. Useful for conditional calculations!
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={PlusCircle}
        category="CSS · Modern Features"
        title="Sign Functions"
        description="Absolute values and sign detection with abs() and sign()"
        colorTheme="teal"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-teal-700 dark:text-teal-300">
            <div className="relative">
              <PlusCircle className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            Sign Functions
          </CardTitle>
          <CardDescription className="text-lg text-teal-600 dark:text-teal-400">
            ➕ Absolute values and sign detection for mathematical operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-teal-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-teal-700 dark:text-teal-300">
                  What are Sign Functions?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CSS Sign Functions (<code className="text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">abs()</code> and 
                  <code className="text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">sign()</code>) 
                  handle absolute values and sign detection. The <code className="text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">abs()</code> function 
                  returns the absolute value (always positive), while <code className="text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">sign()</code> 
                  returns -1, 0, or +1 based on whether a number is negative, zero, or positive!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-teal-700 dark:text-teal-300">Always Positive</div>
                      <div className="text-sm text-teal-600 dark:text-teal-400">
                        abs() converts negative values to positive
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-cyan-700 dark:text-cyan-300">Sign Detection</div>
                      <div className="text-sm text-cyan-600 dark:text-cyan-400">
                        sign() determines if a value is negative, zero, or positive
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-teal-200/50">
                <h4 className="font-bold mb-4 text-teal-700 dark:text-teal-300">
                  Available Functions
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-teal-700 dark:text-teal-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">|x|</span> abs(value)
                    </div>
                    <code className="text-sm font-mono text-teal-600 dark:text-teal-400 block mb-2">
                      width: abs(-200px); /* Returns 200px */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Returns the absolute value (magnitude without sign). Always positive or zero.
                    </p>
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-2 rounded text-xs">
                      <strong>Examples:</strong> abs(-5) = 5, abs(5) = 5, abs(0) = 0
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">±</span> sign(value)
                    </div>
                    <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400 block mb-2">
                      transform: scale(sign(width)); /* -1, 0, or 1 */
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Returns -1 for negative numbers, 0 for zero, and +1 for positive numbers.
                    </p>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded text-xs">
                      <strong>Examples:</strong> sign(-5) = -1, sign(5) = 1, sign(0) = 0
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-100 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-teal-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">➕</div>
                  <div className="font-bold text-lg text-teal-700 dark:text-teal-300">Sign Functions</div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <code className="text-teal-600 dark:text-teal-400">abs()</code>
                      <div className="text-xs text-gray-500 mt-1">Absolute value</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <code className="text-cyan-600 dark:text-cyan-400">sign()</code>
                      <div className="text-xs text-gray-500 mt-1">Sign detection</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use abs() when you need only magnitude, not direction!
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
            <div className="p-2 bg-teal-500/10 rounded-lg">
              <PlusCircle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            See sign functions in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('absolute')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'absolute'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Absolute Values
            </button>
            <button
              onClick={() => setSelectedExample('sign')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'sign'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Sign Detection
            </button>
          </div>

          {selectedExample === 'absolute' && (
            <FrontendCodePreview
              html={absoluteExample}
              title="Absolute Value Operations"
              colorTheme="teal"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'sign' && (
            <FrontendCodePreview
              html={signExample}
              title="Sign Detection"
              colorTheme="teal"
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
            <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200/50">
              <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-3">abs() Use Cases</h4>
              <ul className="text-sm space-y-2 text-teal-600 dark:text-teal-400">
                <li>• <strong>Distance calculations</strong> - Always positive distances</li>
                <li>• <strong>Size constraints</strong> - Ensure non-negative dimensions</li>
                <li>• <strong>Symmetric layouts</strong> - Mirror positioning</li>
                <li>• <strong>Error margins</strong> - Magnitude of deviations</li>
              </ul>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200/50">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-3">sign() Use Cases</h4>
              <ul className="text-sm space-y-2 text-cyan-600 dark:text-cyan-400">
                <li>• <strong>Conditional styling</strong> - Different styles based on sign</li>
                <li>• <strong>Direction indicators</strong> - Positive/negative visualization</li>
                <li>• <strong>Transform multipliers</strong> - Scale or flip based on sign</li>
                <li>• <strong>State detection</strong> - Above/below threshold checks</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>When to Use Sign Functions</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Magnitude only:</strong> Use abs() when direction doesn't matter</li>
            <li><strong>Positive values:</strong> Ensure dimensions are always non-negative</li>
            <li><strong>Direction detection:</strong> Use sign() for positive/negative checks</li>
            <li><strong>Conditional logic:</strong> Apply different styles based on sign</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-900 dark:text-orange-100">Limited Browser Support</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          <div className="space-y-2 mt-2">
            <div><strong>⚠️ Experimental:</strong> CSS sign functions have limited browser support</div>
            <div><strong>Chrome 111+:</strong> Behind feature flag</div>
            <div><strong>Firefox 108+:</strong> Behind feature flag</div>
            <div><strong>Safari 15.4+:</strong> Partial support</div>
            <div className="mt-3 pt-3 border-t border-orange-200 dark:border-orange-700">
              <strong>💡 Recommendation:</strong> Use with progressive enhancement. For production, 
              use JavaScript's Math.abs() and Math.sign() or CSS custom properties with calculated values 
              until browser support improves.
            </div>
          </div>
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Learn More</AlertTitle>
        <AlertDescription>
          CSS Sign Functions are part of the CSS Values and Units Module Level 4. They provide simple 
          but powerful operations for handling signed numbers and absolute values. For compatibility, 
          use CSS preprocessors or JavaScript for similar functionality until full browser support arrives.
        </AlertDescription>
      </Alert>
    </div>
  );
}
