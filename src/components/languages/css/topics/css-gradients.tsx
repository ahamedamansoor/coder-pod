'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Palette, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, CircleDot, MoveRight
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssGradientsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssGradients({ onOpenWebPlayground }: CssGradientsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Palette}
        category="CSS · Colors & Backgrounds"
        title="CSS Gradients"
        description="Create smooth color transitions with linear, radial, and conic gradients"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Gradients</CardTitle>
              <CardDescription className="text-base">Smooth color transitions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Gradients = Color Transitions</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS gradients create smooth transitions between two or more colors. They're images, not colors, 
              so use them with <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">background-image</code> property!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-center">
              <MoveRight className="w-6 h-6 text-white mx-auto mb-2" />
              <h3 className="font-bold text-white mb-1">Linear</h3>
              <p className="text-xs text-white/90">Straight line transition</p>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-center">
              <CircleDot className="w-6 h-6 text-white mx-auto mb-2" />
              <h3 className="font-bold text-white mb-1">Radial</h3>
              <p className="text-xs text-white/90">Circular transition</p>
            </div>
            <div className="p-5 rounded-xl text-center" style={{
              background: 'conic-gradient(from 0deg, red, yellow, lime, aqua, blue, magenta, red)'
            }}>
              <Sparkles className="w-6 h-6 text-white mx-auto mb-2" />
              <h3 className="font-bold text-white mb-1">Conic</h3>
              <p className="text-xs text-white/90">Rotational transition</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MoveRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Linear Gradients
          </CardTitle>
          <CardDescription>Straight-line color transitions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Linear gradients transition colors along a straight line in any direction.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Basic Syntax
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`/* Top to bottom (default) */
background: linear-gradient(blue, red);

/* Direction keywords */
background: linear-gradient(to right, blue, red);
background: linear-gradient(to bottom right, blue, red);

/* Angle in degrees */
background: linear-gradient(45deg, blue, red);

/* Multiple colors */
background: linear-gradient(red, yellow, green);

/* Color stops (positions) */
background: linear-gradient(red 0%, yellow 50%, green 100%);`}
              </code>
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              Direction can be: <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded">to top</code>, 
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded ml-1">to right</code>, or an angle like 
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded ml-1">45deg</code>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Top to Bottom', code: 'linear-gradient(#667eea, #764ba2)', gradient: 'linear-gradient(#667eea, #764ba2)' },
              { name: 'Left to Right', code: 'linear-gradient(to right, #667eea, #764ba2)', gradient: 'linear-gradient(to right, #667eea, #764ba2)' },
              { name: '45° Diagonal', code: 'linear-gradient(45deg, #667eea, #764ba2)', gradient: 'linear-gradient(45deg, #667eea, #764ba2)' },
              { name: 'Three Colors', code: 'linear-gradient(red, yellow, lime)', gradient: 'linear-gradient(red, yellow, lime)' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <div 
                  className="h-32 rounded-lg mb-3"
                  style={{ background: item.gradient }}
                ></div>
                <p className="font-bold text-sm mb-1">{item.name}</p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block break-all">
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
            Gradient Showcase
          </CardTitle>
          <CardDescription>Beautiful gradient examples</CardDescription>
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
      background: #1a1a2e;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1400px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
      background: linear-gradient(45deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }
    
    .gradient-card {
      height: 200px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
      transition: transform 0.3s;
      cursor: pointer;
    }
    
    .gradient-card:hover {
      transform: scale(1.05);
    }
    
    .label {
      margin-top: 10px;
      font-size: 12px;
      opacity: 0.9;
      text-align: center;
    }
    
    /* Linear Gradients */
    .gradient1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .gradient2 {
      background: linear-gradient(to right, #f093fb 0%, #f5576c 100%);
    }
    
    .gradient3 {
      background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    }
    
    .gradient4 {
      background: linear-gradient(to top, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    }
    
    .gradient5 {
      background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    }
    
    .gradient6 {
      background: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    }
    
    /* Radial Gradients */
    .gradient7 {
      background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
    }
    
    .gradient8 {
      background: radial-gradient(circle at top left, #f093fb, #f5576c);
    }
    
    /* Multi-color */
    .gradient9 {
      background: linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8, #845ef7);
    }
    
    .gradient10 {
      background: linear-gradient(to right, #fa709a, #fee140, #30cfd0);
    }
    
    /* Repeating */
    .gradient11 {
      background: repeating-linear-gradient(
        45deg,
        #667eea,
        #667eea 10px,
        #764ba2 10px,
        #764ba2 20px
      );
    }
    
    .gradient12 {
      background: conic-gradient(
        from 0deg,
        #667eea,
        #764ba2,
        #f093fb,
        #667eea
      );
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 CSS Gradient Gallery</h1>
    
    <div class="grid">
      <div class="gradient-card gradient1">
        Sunset
        <span class="label">linear-gradient(135deg, ...)</span>
      </div>
      
      <div class="gradient-card gradient2">
        Pink Flamingo
        <span class="label">to right</span>
      </div>
      
      <div class="gradient-card gradient3">
        Blue Sky
        <span class="label">120deg angle</span>
      </div>
      
      <div class="gradient-card gradient4">
        Peachy
        <span class="label">to top</span>
      </div>
      
      <div class="gradient-card gradient5">
        Cotton Candy
        <span class="label">Soft pastels</span>
      </div>
      
      <div class="gradient-card gradient6">
        Warm Flame
        <span class="label">Pink to yellow</span>
      </div>
      
      <div class="gradient-card gradient7">
        Radial Burst
        <span class="label">radial-gradient</span>
      </div>
      
      <div class="gradient-card gradient8">
        Corner Radial
        <span class="label">circle at top left</span>
      </div>
      
      <div class="gradient-card gradient9">
        Rainbow
        <span class="label">4 colors</span>
      </div>
      
      <div class="gradient-card gradient10">
        Tropical
        <span class="label">3 vibrant colors</span>
      </div>
      
      <div class="gradient-card gradient11">
        Stripes
        <span class="label">repeating-linear</span>
      </div>
      
      <div class="gradient-card gradient12">
        Spinner
        <span class="label">conic-gradient</span>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Gradient Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CircleDot className="w-6 h-6 text-green-600 dark:text-green-400" />
            Radial Gradients
          </CardTitle>
          <CardDescription>Circular color transitions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Radial gradients radiate outward from a center point in a circular or elliptical shape.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Radial Syntax
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg">
              <code className="text-sm text-green-100 block">
{`/* Simple radial */
background: radial-gradient(blue, red);

/* Shape and position */
background: radial-gradient(circle, blue, red);
background: radial-gradient(circle at top left, blue, red);

/* Size keywords */
background: radial-gradient(circle closest-side, blue, red);`}
              </code>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Center', gradient: 'radial-gradient(circle, #667eea, #764ba2)' },
              { name: 'Top Left', gradient: 'radial-gradient(circle at top left, #667eea, #764ba2)' },
              { name: 'Ellipse', gradient: 'radial-gradient(ellipse, #667eea, #764ba2)' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg border-2 border-green-200 dark:border-green-800">
                <div 
                  className="h-32 rounded-lg mb-2"
                  style={{ background: item.gradient }}
                ></div>
                <p className="text-sm font-bold text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Conic Gradients
          </CardTitle>
          <CardDescription>Rotational color transitions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Conic gradients rotate colors around a center point - perfect for pie charts and loading spinners!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Conic Syntax
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`/* Simple conic */
background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);

/* With starting angle */
background: conic-gradient(from 45deg, red, yellow, blue);

/* Pie chart example */
background: conic-gradient(
  #667eea 0deg 120deg,
  #764ba2 120deg 240deg,
  #f093fb 240deg 360deg
);`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Gradient Text
          </CardTitle>
          <CardDescription>Apply gradients to text</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 border-2 border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-3">
              Gradient Text Technique
            </h3>
            <div className="bg-orange-900 dark:bg-orange-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-orange-100 block">
{`.gradient-text {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`}
              </code>
            </div>
            <div className="text-center">
              <h2 
                className="text-5xl font-bold"
                style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Gradient Text!
              </h2>
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
            <span>Gradients are <strong>images</strong>, use with <code>background-image</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Linear</strong> for straight lines, <strong>Radial</strong> for circles</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>conic</strong> for pie charts and spinners</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine multiple gradients with commas!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
