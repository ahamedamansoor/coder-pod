'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Calculator, CheckCircle, Sparkles, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssTrigonometricFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTrigonometricFunctions({ onOpenWebPlayground }: CssTrigonometricFunctionsProps) {
  const [selectedExample, setSelectedExample] = useState('rotation');

  const rotationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trigonometric Functions - Rotation Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0e7490 0%, #155e75 100%); }
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
      color: #06b6d4;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #67e8f9; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-area {
      background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);
      padding: 60px;
      border-radius: 12px;
      margin: 20px 0;
      border: 3px solid #06b6d4;
      display: flex;
      gap: 30px;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-area {
        background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
        border-color: #67e8f9;
      }
    }
    
    .angle-demo {
      text-align: center;
    }
    
    .angle-label {
      font-weight: 700;
      color: #0891b2;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .angle-label { color: #a5f3fc; }
    }
    
    .box {
      width: 120px;
      height: 40px;
      background: white;
      border: 3px solid #06b6d4;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #0891b2;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #0f172a;
        color: #a5f3fc;
        border-color: #67e8f9;
      }
    }
    
    .rotate-15 { transform: rotate(15deg); }
    .rotate-30 { transform: rotate(30deg); }
    .rotate-45 { transform: rotate(45deg); }
    .rotate-60 { transform: rotate(60deg); }
    
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
      color: #06b6d4;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      code { background: #0f172a; color: #67e8f9; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Trigonometric Functions</h1>
    <p class="subtitle">Angle-based transformations and calculations</p>
    
    <div class="demo-area">
      <div class="angle-demo">
        <div class="angle-label">15°</div>
        <div class="box rotate-15">15°</div>
      </div>
      <div class="angle-demo">
        <div class="angle-label">30°</div>
        <div class="box rotate-30">30°</div>
      </div>
      <div class="angle-demo">
        <div class="angle-label">45°</div>
        <div class="box rotate-45">45°</div>
      </div>
      <div class="angle-demo">
        <div class="angle-label">60°</div>
        <div class="box rotate-60">60°</div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">🧮 Trig Functions in CSS</div>
      <p class="info-text">
        While CSS supports <code>sin()</code>, <code>cos()</code>, and <code>tan()</code> functions for mathematical 
        calculations, they have <strong>limited browser support</strong>. This demo shows angle-based rotations using 
        the widely-supported <code>rotate()</code> transform instead. For circular layouts and complex positioning, 
        trigonometric functions will be powerful once fully supported!
      </p>
    </div>
  </div>
</body>
</html>`;

  const circleExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Circular Layout Pattern</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0e7490 0%, #155e75 100%); }
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
    h1 { color: #06b6d4; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #67e8f9; }
    }
    
    .circle-container {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 40px auto;
      background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);
      border-radius: 50%;
      border: 3px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .circle-container {
        background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
        border-color: #67e8f9;
      }
    }
    
    .item {
      position: absolute;
      width: 50px;
      height: 50px;
      background: white;
      border-radius: 50%;
      border: 3px solid #06b6d4;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #0891b2;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .item {
        background: #0f172a;
        color: #a5f3fc;
        border-color: #67e8f9;
      }
    }
    
    /* Positioned using calculated values (would use sin/cos when supported) */
    .item:nth-child(1) { top: 25px; left: 125px; }
    .item:nth-child(2) { top: 64px; right: 43px; }
    .item:nth-child(3) { bottom: 64px; right: 43px; }
    .item:nth-child(4) { bottom: 25px; left: 125px; }
    .item:nth-child(5) { bottom: 64px; left: 43px; }
    .item:nth-child(6) { top: 64px; left: 43px; }
    
    .note {
      margin-top: 20px;
      padding: 16px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      color: #78350f;
      text-align: center;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .note { background: linear-gradient(135deg, #78350f 0%, #92400e 100%); color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Circular Layout</h1>
    
    <div class="circle-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
    </div>
    
    <div class="note">
      💡 This circular layout uses pre-calculated positions. Once browser support improves, 
      sin() and cos() functions will make this dynamic and easier!
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Calculator}
        category="CSS · Modern Features"
        title="Trigonometric Functions"
        description="Mathematical calculations with sin(), cos(), and tan() in CSS"
        colorTheme="cyan"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-700 dark:text-cyan-300">
            <div className="relative">
              <Calculator className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            Trigonometric Functions
          </CardTitle>
          <CardDescription className="text-lg text-cyan-600 dark:text-cyan-400">
            📐 Mathematical calculations for angles and circular layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">
                  What are CSS Trig Functions?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CSS Trigonometric Functions (<code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">sin()</code>, 
                  <code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">cos()</code>, 
                  <code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">tan()</code>, 
                  <code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">asin()</code>, 
                  <code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">acos()</code>, 
                  <code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">atan()</code>, 
                  <code className="text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">atan2()</code>) 
                  allow mathematical calculations based on angles. These functions enable circular layouts, 
                  wave patterns, and complex geometric designs without JavaScript!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-cyan-700 dark:text-cyan-300">Geometric Layouts</div>
                      <div className="text-sm text-cyan-600 dark:text-cyan-400">
                        Create circular menus, radial layouts, and complex shapes
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Dynamic Calculations</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Calculate values based on angles for responsive designs
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 p-6 rounded-xl border border-cyan-200/50">
                <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">
                  Available Functions
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📐</span> sin(angle)
                    </div>
                    <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400 block mb-2">
                      width: calc(sin(45deg) * 200px);
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the sine of an angle (-1 to 1). Useful for vertical positioning in circles.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-sky-700 dark:text-sky-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📊</span> cos(angle)
                    </div>
                    <code className="text-sm font-mono text-sky-600 dark:text-sky-400 block mb-2">
                      height: calc(cos(30deg) * 150px);
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the cosine of an angle (-1 to 1). Perfect for horizontal positioning in circles.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📈</span> tan(angle)
                    </div>
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400 block mb-2">
                      transform: skewY(tan(10deg));
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Returns the tangent of an angle. Useful for slopes and skew effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-100 via-sky-100 to-cyan-100 dark:from-cyan-900/30 dark:via-sky-900/30 dark:to-cyan-900/30 p-6 rounded-xl border border-cyan-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">📐</div>
                  <div className="font-bold text-lg text-cyan-700 dark:text-cyan-300">Trig Functions</div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-cyan-600 dark:text-cyan-400">sin()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-sky-600 dark:text-sky-400">cos()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <code className="text-blue-600 dark:text-blue-400">tan()</code>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded text-xs">
                      + asin(), acos(), atan(), atan2()
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-orange-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚠️</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Limited Support</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    These functions are cutting-edge with evolving browser support!
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
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Calculator className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            See trigonometric concepts in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('rotation')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'rotation'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Angle Rotations
            </button>
            <button
              onClick={() => setSelectedExample('circle')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'circle'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Circular Layout
            </button>
          </div>

          {selectedExample === 'rotation' && (
            <FrontendCodePreview
              html={rotationExample}
              title="Angle-based Rotations"
              colorTheme="cyan"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'circle' && (
            <FrontendCodePreview
              html={circleExample}
              title="Circular Layout Pattern"
              colorTheme="cyan"
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
            <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200/50">
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-3">Layout & Design</h4>
              <ul className="text-sm space-y-2 text-cyan-600 dark:text-cyan-400">
                <li>• <strong>Circular menus</strong> - Position items in a circle</li>
                <li>• <strong>Radial layouts</strong> - Arrange elements radially</li>
                <li>• <strong>Wave patterns</strong> - Create flowing designs</li>
                <li>• <strong>Geometric shapes</strong> - Complex polygon layouts</li>
              </ul>
            </div>
            
            <div className="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-lg border border-sky-200/50">
              <h4 className="font-bold text-sky-700 dark:text-sky-300 mb-3">Animations & Effects</h4>
              <ul className="text-sm space-y-2 text-sky-600 dark:text-sky-400">
                <li>• <strong>Orbital animations</strong> - Elements moving in circles</li>
                <li>• <strong>Pendulum effects</strong> - Swinging motions</li>
                <li>• <strong>Wave animations</strong> - Flowing water effects</li>
                <li>• <strong>Spiral patterns</strong> - Rotating spiral designs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>When to Use Trig Functions</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Circular layouts:</strong> Position elements around a circle dynamically</li>
            <li><strong>Responsive angles:</strong> Calculate dynamic angles for rotations</li>
            <li><strong>Wave effects:</strong> Create smooth, flowing wave designs</li>
            <li><strong>Complex geometry:</strong> Build intricate geometric patterns</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-900 dark:text-orange-100">Limited Browser Support</AlertTitle>
        <AlertDescription className="text-orange-800 dark:text-orange-200">
          <div className="space-y-2 mt-2">
            <div><strong>⚠️ Experimental:</strong> CSS trig functions have limited browser support as of 2024</div>
            <div><strong>Chrome 111+:</strong> Behind feature flag</div>
            <div><strong>Firefox 108+:</strong> Behind feature flag</div>
            <div><strong>Safari 15.4+:</strong> Partial support</div>
            <div className="mt-3 pt-3 border-t border-orange-200 dark:border-orange-700">
              <strong>💡 Recommendation:</strong> Use with progressive enhancement and provide fallbacks. Consider using 
              JavaScript or pre-calculated values for production until browser support improves.
            </div>
          </div>
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Learn More</AlertTitle>
        <AlertDescription>
          CSS Trigonometric Functions are part of the CSS Values and Units Module Level 4 specification. 
          They will become powerful tools for complex layouts once browser support is widespread. Monitor 
          compatibility at <a href="https://caniuse.com" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 underline">caniuse.com</a> before using in production.
        </AlertDescription>
      </Alert>
    </div>
  );
}
