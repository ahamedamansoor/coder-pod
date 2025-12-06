'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Zap, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssWillChangeProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssWillChange({ onOpenWebPlayground }: CssWillChangeProps) {
  const [selectedExample, setSelectedExample] = useState('transform');

  const transformExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Will-Change - Transform Optimization</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #a16207 0%, #854d0e 100%); }
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
      color: #eab308;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #fde047; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .box {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      transition: transform 0.3s ease;
      border: 3px solid #eab308;
    }
    
    @media (prefers-color-scheme: dark) {
      .box { border-color: #fde047; }
    }
    
    .optimized {
      will-change: transform;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .optimized {
        background: linear-gradient(135deg, #a16207 0%, #854d0e 100%);
        color: #fde68a;
      }
    }
    
    .not-optimized {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      color: #7f1d1d;
    }
    
    @media (prefers-color-scheme: dark) {
      .not-optimized {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
        color: #fecaca;
      }
    }
    
    .box:hover {
      transform: scale(1.1) rotate(5deg);
    }
    
    .badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 10px;
    }
    
    .badge-optimized {
      background: #eab308;
      color: white;
    }
    
    .badge-not {
      background: #ef4444;
      color: white;
    }
    
    .info-box {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-left: 4px solid #10b981;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
        border-left-color: #6ee7b7;
      }
    }
    
    .info-title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title { color: #a7f3d0; }
    }
    
    .info-text {
      color: #047857;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text { color: #d1fae5; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Will-Change</h1>
    <p class="subtitle">Optimize animations with performance hints</p>
    
    <div class="demo-grid">
      <div class="optimized box">
        ✅ With will-change
        <br>
        <span class="badge badge-optimized">GPU Accelerated</span>
      </div>
      
      <div class="not-optimized box">
        ❌ Without optimization
        <br>
        <span class="badge badge-not">CPU Rendering</span>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">⚡ Performance Boost</div>
      <p class="info-text">
        <strong>Hover over the boxes!</strong> The optimized box uses <strong>will-change: transform</strong> 
        to hint the browser about upcoming animations. This moves the element to GPU layers for 
        smoother, more performant animations.
      </p>
    </div>
  </div>
</body>
</html>`;

  const opacityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Will-Change - Opacity</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #a16207 0%, #854d0e 100%); }
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
    h1 { color: #eab308; text-align: center; margin-bottom: 30px; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #fde047; }
    }
    
    .fade-element {
      will-change: opacity;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 700;
      color: #92400e;
      border: 3px solid #eab308;
      animation: fadeInOut 3s ease-in-out infinite;
    }
    
    @media (prefers-color-scheme: dark) {
      .fade-element {
        background: linear-gradient(135deg, #a16207 0%, #854d0e 100%);
        color: #fde68a;
        border-color: #fde047;
      }
    }
    
    @keyframes fadeInOut {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Opacity Animation</h1>
    <div class="fade-element">
      Smooth fade with will-change: opacity
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Zap}
        category="CSS · Modern Features"
        title="Will-Change"
        description="Optimize animations and transitions with performance hints to the browser"
        colorTheme="yellow"
      />

      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-yellow-700 dark:text-yellow-300">
            <div className="relative">
              <Zap className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            CSS Will-Change
          </CardTitle>
          <CardDescription className="text-lg text-yellow-600 dark:text-yellow-400">
            ⚡ Hint the browser about upcoming changes for better performance!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-yellow-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-yellow-700 dark:text-yellow-300">
                  What is Will-Change?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  The <code className="text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">will-change</code> property 
                  informs the browser about which properties will change, allowing it to optimize ahead of time by creating 
                  GPU-accelerated layers and preparing rendering pipelines.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-yellow-700 dark:text-yellow-300">GPU Acceleration</div>
                      <div className="text-sm text-yellow-600 dark:text-yellow-400">
                        Moves elements to GPU layers for smoother animations
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Better Performance</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Reduces jank and improves animation smoothness
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-yellow-200/50">
                <h4 className="font-bold mb-4 text-yellow-700 dark:text-yellow-300">
                  Common Values
                </h4>
                
                <div className="grid gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-yellow-600 dark:text-yellow-400">
                      will-change: transform;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      For scale, rotate, translate animations
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-amber-600 dark:text-amber-400">
                      will-change: opacity;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      For fade in/out animations
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                      will-change: scroll-position;
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      For scroll-based animations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 p-6 rounded-xl border border-yellow-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="font-bold text-lg text-yellow-700 dark:text-yellow-300">Performance</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Smoother animations
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Reduced jank
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      60fps+ rendering
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 p-4 rounded-xl border border-red-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚠️</div>
                  <div className="font-bold text-red-700 dark:text-red-300 mb-2">Warning!</div>
                  <div className="text-sm text-red-600 dark:text-red-400">
                    Don't overuse! Too many will-change properties can hurt performance
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
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            Live Examples
          </CardTitle>
          <CardDescription>
            See the performance difference with will-change
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedExample('transform')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'transform'
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Transform
            </button>
            <button
              onClick={() => setSelectedExample('opacity')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedExample === 'opacity'
                  ? 'bg-yellow-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Opacity
            </button>
          </div>

          {selectedExample === 'transform' && (
            <FrontendCodePreview
              html={transformExample}
              title="Will-Change: Transform Optimization"
              colorTheme="yellow"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedExample === 'opacity' && (
            <FrontendCodePreview
              html={opacityExample}
              title="Will-Change: Opacity Animation"
              colorTheme="yellow"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                ✅ Do
              </h4>
              <ul className="text-sm space-y-2 text-green-600 dark:text-green-400">
                <li>• Use for elements about to animate</li>
                <li>• Remove after animation completes</li>
                <li>• Limit to specific properties</li>
                <li>• Test performance impact</li>
              </ul>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200/50">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                ❌ Don't
              </h4>
              <ul className="text-sm space-y-2 text-red-600 dark:text-red-400">
                <li>• Apply to many elements at once</li>
                <li>• Use will-change: all</li>
                <li>• Leave it on permanently</li>
                <li>• Use without measuring benefit</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>When to Use Will-Change</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Hover animations</strong> - Scale, rotate effects on interaction</li>
            <li><strong>Scroll animations</strong> - Parallax and scroll-triggered effects</li>
            <li><strong>Page transitions</strong> - Slide-in/out navigation</li>
            <li><strong>Drag & drop</strong> - Smooth element dragging</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
        <Info className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-yellow-900 dark:text-yellow-100">Browser Support</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200">
          <div className="mt-2">
            Widely supported in all modern browsers (Chrome 36+, Firefox 36+, Safari 9.1+, Edge 79+)
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
