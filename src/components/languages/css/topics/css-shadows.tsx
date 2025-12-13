'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Box, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Type, Layers
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssShadowsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssShadows({ onOpenWebPlayground }: CssShadowsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Box}
        category="CSS · Visual Effects"
        title="Shadows"
        description="box-shadow, text-shadow, and drop-shadow()"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Box className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Shadows</CardTitle>
              <CardDescription className="text-base">Add depth with shadows</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Shadows = Depth & Focus! 📦</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Shadows add <strong>depth</strong> to flat designs. Use <strong>box-shadow</strong> for elements, 
              <strong>text-shadow</strong> for text, and <strong>drop-shadow()</strong> filter for complex shapes!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'box-shadow', icon: Box, use: 'Elements' },
              { name: 'text-shadow', icon: Type, use: 'Text' },
              { name: 'drop-shadow()', icon: Layers, use: 'Filters' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="font-bold">{item.name}</p>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">{item.use}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Box className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            box-shadow Syntax
          </CardTitle>
          <CardDescription>Shadow for box elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Complete Syntax
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`box-shadow: [inset] x y blur spread color;

/* Examples */
box-shadow: 2px 4px 6px rgba(0,0,0,0.1);
box-shadow: 0 10px 20px rgba(0,0,0,0.2);
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);`}
              </code>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong>x-offset:</strong> Horizontal
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong>y-offset:</strong> Vertical
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong>blur:</strong> Blur radius
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <strong>spread:</strong> Shadow size
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Subtle', code: 'box-shadow: 0 1px 3px rgba(0,0,0,0.1);' },
              { name: 'Medium', code: 'box-shadow: 0 4px 6px rgba(0,0,0,0.15);' },
              { name: 'Large', code: 'box-shadow: 0 10px 25px rgba(0,0,0,0.2);' },
              { name: 'Inner', code: 'box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-600 text-white">{item.name}</Badge>
                </div>
                <code className="text-xs bg-purple-900 dark:bg-purple-950 text-purple-100 px-2 py-1 rounded block">
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
          <CardDescription>Different shadow styles</CardDescription>
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
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    
    .card {
      background: linear-gradient(135deg, #667eea, #764ba2);
      padding: 30px;
      border-radius: 16px;
      color: white;
      text-align: center;
      transition: all 0.3s;
    }
    
    .label {
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .description {
      font-size: 12px;
      opacity: 0.9;
    }
    
    /* DIFFERENT SHADOWS */
    .subtle {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    }
    
    .subtle:hover {
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    
    .medium {
      box-shadow: 0 4px 6px rgba(0,0,0,0.15);
    }
    
    .medium:hover {
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }
    
    .large {
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    }
    
    .large:hover {
      box-shadow: 0 15px 35px rgba(0,0,0,0.3);
      transform: translateY(-2px);
    }
    
    .inner {
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
    }
    
    .colored {
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
    }
    
    .colored:hover {
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.7);
    }
    
    .multi {
      box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),
        0 8px 16px rgba(0,0,0,0.1),
        0 16px 32px rgba(0,0,0,0.1);
    }
    
    .multi:hover {
      transform: translateY(-5px);
      box-shadow: 
        0 4px 8px rgba(0,0,0,0.15),
        0 12px 24px rgba(0,0,0,0.15),
        0 24px 48px rgba(0,0,0,0.15);
    }
    
    /* TEXT SHADOW */
    .text-shadow h2 {
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .text-glow h2 {
      text-shadow: 
        0 0 10px rgba(255,255,255,0.8),
        0 0 20px rgba(255,255,255,0.5);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 CSS Shadows Gallery</h1>
    
    <div class="grid">
      <div class="card subtle">
        <div class="label">Subtle Shadow</div>
        <div class="description">0 1px 3px</div>
      </div>
      
      <div class="card medium">
        <div class="label">Medium Shadow</div>
        <div class="description">0 4px 6px</div>
      </div>
      
      <div class="card large">
        <div class="label">Large Shadow</div>
        <div class="description">0 10px 25px</div>
      </div>
      
      <div class="card inner">
        <div class="label">Inner Shadow</div>
        <div class="description">inset 0 2px 4px</div>
      </div>
      
      <div class="card colored">
        <div class="label">Colored Shadow</div>
        <div class="description">Brand color</div>
      </div>
      
      <div class="card multi">
        <div class="label">Multiple Shadows</div>
        <div class="description">Layered depth</div>
      </div>
      
      <div class="card text-shadow">
        <h2>Text Shadow</h2>
        <div class="description">2px 2px 4px</div>
      </div>
      
      <div class="card text-glow">
        <h2>Text Glow</h2>
        <div class="description">Multiple shadows</div>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="CSS Shadows Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Type className="w-6 h-6 text-green-600 dark:text-green-400" />
            text-shadow
          </CardTitle>
          <CardDescription>Shadows for text</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`text-shadow: x y blur color;

/* Examples */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
text-shadow: 0 0 10px rgba(255,255,255,0.8);

/* Multiple shadows */
text-shadow: 
  2px 2px 0 #000,
  4px 4px 0 #666;`}
              </code>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { effect: 'Basic Shadow', code: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.5);' },
              { effect: 'Glow Effect', code: 'text-shadow: 0 0 10px rgba(255,255,255,0.8);' },
              { effect: '3D Effect', code: 'text-shadow: 1px 1px 0 #000, 2px 2px 0 #666;' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <p className="font-bold text-green-900 dark:text-green-100 mb-2">{item.effect}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Multiple Shadows
          </CardTitle>
          <CardDescription>Layer shadows for depth</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Separate multiple shadows with commas for layered effects:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`/* Layered shadows */
.card {
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);
}

/* Material Design elevation */
.elevated {
  box-shadow:
    0 2px 4px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.1),
    0 16px 32px rgba(0,0,0,0.1);
}`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>box-shadow</strong> for elements, <strong>text-shadow</strong> for text</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>rgba()</strong> for semi-transparent shadows</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Layer <strong>multiple shadows</strong> for depth</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Animate shadows on <strong>:hover</strong> for interactivity</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
