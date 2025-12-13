'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Move, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, RotateCw, Maximize2
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssTransformsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssTransforms({ onOpenWebPlayground }: CssTransformsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Move}
        category="CSS · Animations & Effects"
        title="CSS Transforms"
        description="Move, rotate, scale, and skew elements in 2D space"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Move className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Transforms</CardTitle>
              <CardDescription className="text-base">2D transformations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Transform = Shape & Position</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Transforms let you modify elements without affecting document flow. Perfect for animations, 
              hover effects, and creating dynamic interfaces. Combine with transitions for smooth effects!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Move, name: 'Translate', desc: 'Move' },
              { icon: RotateCw, name: 'Rotate', desc: 'Spin' },
              { icon: Maximize2, name: 'Scale', desc: 'Resize' },
              { icon: Move, name: 'Skew', desc: 'Tilt' }
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
            <Move className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Transform Functions
          </CardTitle>
          <CardDescription>Four main transform types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Translate */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">translate()</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Move elements horizontally and/or vertically
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg mb-3">
                <code className="text-sm text-blue-100 block">
                  transform: translate(50px, 100px);<br />
                  transform: translateX(50px);<br />
                  transform: translateY(100px);
                </code>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                ✨ Doesn't affect other elements - great for positioning!
              </p>
            </div>

            {/* Rotate */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">rotate()</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Spin elements clockwise or counter-clockwise
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg mb-3">
                <code className="text-sm text-green-100 block">
                  transform: rotate(45deg);<br />
                  transform: rotate(-90deg);
                </code>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                ✨ Positive = clockwise, Negative = counter-clockwise
              </p>
            </div>

            {/* Scale */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 text-white text-lg mb-3">scale()</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Resize elements (1 = original size)
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-4 rounded-lg mb-3">
                <code className="text-sm text-purple-100 block">
                  transform: scale(1.5); /* 150% */  <br />
                  transform: scale(0.5); /* 50% */   <br />
                  transform: scaleX(2); /* Width only */
                </code>
              </div>
              <p className="text-xs text-purple-700 dark:text-purple-300">
                ✨ Perfect for hover effects!
              </p>
            </div>

            {/* Skew */}
            <div className="p-6 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white text-lg mb-3">skew()</Badge>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Tilt elements along X or Y axis
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-4 rounded-lg mb-3">
                <code className="text-sm text-orange-100 block">
                  transform: skew(20deg);<br />
                  transform: skewX(20deg);<br />
                  transform: skewY(20deg);
                </code>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                ✨ Less common but creates interesting effects
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Transform Demo
          </CardTitle>
          <CardDescription>Hover to see transforms in action</CardDescription>
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
      max-width: 1000px;
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
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
    }
    
    .card {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    
    .translate:hover {
      transform: translateY(-20px);
    }
    
    .rotate:hover {
      transform: rotate(15deg);
    }
    
    .scale:hover {
      transform: scale(1.2);
    }
    
    .skew:hover {
      transform: skew(-10deg);
    }
    
    .combo:hover {
      transform: translateY(-10px) rotate(5deg) scale(1.1);
    }
    
    .label {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Hover Each Card!</h1>
    
    <div class="grid">
      <div class="card translate">
        Translate
        <span class="label">Moves up</span>
      </div>
      
      <div class="card rotate">
        Rotate
        <span class="label">Spins</span>
      </div>
      
      <div class="card scale">
        Scale
        <span class="label">Gets bigger</span>
      </div>
      
      <div class="card skew">
        Skew
        <span class="label">Tilts</span>
      </div>
      
      <div class="card combo">
        Combined
        <span class="label">Multiple transforms!</span>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Transform Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Combining Transforms
          </CardTitle>
          <CardDescription>Multiple transforms in one property</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`/* Space-separated transforms */
transform: translateX(50px) rotate(45deg) scale(1.2);

/* Order matters! */
transform: scale(2) rotate(45deg); /* Different result */
transform: rotate(45deg) scale(2); /* Than this */`}
              </code>
            </div>
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 mt-4">
              <Info className="w-5 h-5 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                <strong>Order matters!</strong> Transforms are applied left to right, and the order 
                changes the final result.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Move className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Transform Origin
          </CardTitle>
          <CardDescription>Change the pivot point</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">transform-origin</code> property 
            sets the point around which transformations happen.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { value: 'center', desc: 'Middle (default)' },
              { value: 'top left', desc: 'Top-left corner' },
              { value: 'bottom right', desc: 'Bottom-right corner' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <code className="font-mono text-sm text-blue-700 dark:text-blue-400">{item.value}</code>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-2">{item.desc}</p>
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
            <span><strong>translate()</strong> - Move elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>rotate()</strong> - Spin elements (degrees)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>scale()</strong> - Resize (1 = original)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <strong>transition</strong> for smooth effects!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
