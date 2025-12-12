'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Palette, Sparkles, Lightbulb, Droplet, 
  CheckCircle, Info, ArrowRight, Image as ImageIcon
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssColorsBackgroundsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssColorsBackgrounds({ onOpenWebPlayground }: CssColorsBackgroundsProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Palette}
        category="CSS · Fundamentals"
        title="Colors & Backgrounds"
        description="Master color formats, background properties, and create beautiful designs"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Colors & Backgrounds</CardTitle>
              <CardDescription className="text-base">The foundation of visual design</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Colors Bring Life to Your Design</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS offers multiple ways to define colors and backgrounds. From simple color names to complex gradients 
              and images - you have complete control over how your elements look.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
              <Droplet className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Text Colors</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Control the color of text content using the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">color</code> property
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
              <ImageIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Backgrounds</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Set solid colors, gradients, or images using various <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">background</code> properties
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Formats */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Droplet className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Color Formats
          </CardTitle>
          <CardDescription>Different ways to specify colors in CSS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Named Colors */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <Badge className="bg-red-600 mb-3">Named Colors</Badge>
              <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                Use built-in color names (140+ available)
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-500 border-2 border-red-700"></div>
                  <code className="text-sm">red</code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-500 border-2 border-blue-700"></div>
                  <code className="text-sm">blue</code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500 border-2 border-green-700"></div>
                  <code className="text-sm">green</code>
                </div>
              </div>
            </div>

            {/* Hex Colors */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <Badge className="bg-purple-600 mb-3">Hexadecimal</Badge>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                Six-digit color codes with # prefix
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border-2 border-gray-700" style={{background: '#FF5733'}}></div>
                  <code className="text-sm">#FF5733</code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border-2 border-gray-700" style={{background: '#3498DB'}}></div>
                  <code className="text-sm">#3498DB</code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded border-2 border-gray-700" style={{background: '#2ECC71'}}></div>
                  <code className="text-sm">#2ECC71</code>
                </div>
              </div>
            </div>

            {/* RGB */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 mb-3">RGB</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Red, Green, Blue values (0-255)
              </p>
              <div className="space-y-2">
                <code className="text-sm block">rgb(255, 87, 51)</code>
                <code className="text-sm block">rgb(52, 152, 219)</code>
                <code className="text-sm block">rgb(46, 204, 113)</code>
              </div>
            </div>

            {/* RGBA */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 mb-3">RGBA (with transparency) ⭐</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                RGB + Alpha channel (0-1 for opacity)
              </p>
              <div className="space-y-2">
                <code className="text-sm block">rgba(255, 87, 51, 0.8)</code>
                <code className="text-sm block">rgba(52, 152, 219, 0.5)</code>
                <code className="text-sm block">rgba(46, 204, 113, 0.3)</code>
              </div>
            </div>
          </div>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Recommended Format</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>Use Hex for solid colors</strong> (#FF5733) and <strong>RGBA for transparency</strong> (rgba(255, 87, 51, 0.8)). 
              These are the most commonly used formats in modern CSS.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Text Color Example */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Text Color Property
          </CardTitle>
          <CardDescription>Changing text colors</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      background: white;
      padding: 40px;
      border-radius: 20px;
      max-width: 700px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
      }
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #333;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #e5e5e5;
      }
    }
    
    .color-box {
      padding: 20px;
      margin: 15px 0;
      border-radius: 10px;
      border: 2px solid #e5e7eb;
    }
    
    @media (prefers-color-scheme: dark) {
      .color-box {
        border-color: #374151;
      }
    }
    
    .red-text {
      color: red;
    }
    
    .hex-color {
      color: #3498DB;
    }
    
    .rgb-color {
      color: rgb(46, 204, 113);
    }
    
    .rgba-color {
      color: rgba(231, 76, 60, 0.7);
    }
    
    code {
      background: #f3f4f6;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
      color: #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      code {
        background: #374151;
        color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Text Colors</h1>
    
    <div class="color-box red-text">
      <strong>Named Color:</strong> This text is red<br>
      <code>color: red;</code>
    </div>
    
    <div class="color-box hex-color">
      <strong>Hex Color:</strong> This text is blue using hex<br>
      <code>color: #3498DB;</code>
    </div>
    
    <div class="color-box rgb-color">
      <strong>RGB Color:</strong> This text is green using RGB<br>
      <code>color: rgb(46, 204, 113);</code>
    </div>
    
    <div class="color-box rgba-color">
      <strong>RGBA Color:</strong> This text has transparency<br>
      <code>color: rgba(231, 76, 60, 0.7);</code>
    </div>
  </div>
</body>
</html>`}
            title="Text Color Examples"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Background Properties */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Background Properties
          </CardTitle>
          <CardDescription>Styling element backgrounds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {[
              {
                property: 'background-color',
                desc: 'Sets a solid background color',
                example: 'background-color: #3498DB;',
                color: 'blue'
              },
              {
                property: 'background-image',
                desc: 'Sets a background image or gradient',
                example: 'background-image: url("image.jpg");',
                color: 'green'
              },
              {
                property: 'background-size',
                desc: 'Controls the size of background image',
                example: 'background-size: cover;',
                color: 'purple'
              },
              {
                property: 'background-position',
                desc: 'Positions the background image',
                example: 'background-position: center;',
                color: 'orange'
              },
              {
                property: 'background-repeat',
                desc: 'Controls if/how background repeats',
                example: 'background-repeat: no-repeat;',
                color: 'red'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-2">
                  <code className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{item.property}</code>
                  <Badge variant="outline" className={`bg-${item.color}-50 dark:bg-${item.color}-950/20`}>{item.color}</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                <div className="bg-gray-900 dark:bg-black p-3 rounded text-sm">
                  <code className="text-gray-100">{item.example}</code>
                </div>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Shorthand Property</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              You can use the <code>background</code> shorthand to set multiple properties at once:
              <pre className="mt-2 bg-purple-900 dark:bg-purple-950 text-purple-100 p-3 rounded text-sm">
                background: #3498DB url("bg.jpg") center/cover no-repeat;
              </pre>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Background Examples */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Background Examples
          </CardTitle>
          <CardDescription>Solid colors and gradients</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0f172a;
      padding: 40px;
      min-height: 100vh;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      height: 200px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      text-align: center;
      padding: 20px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      transition: transform 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .solid {
      background-color: #3498DB;
    }
    
    .gradient-1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .gradient-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    
    .gradient-3 {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }
    
    .gradient-4 {
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    }
    
    .gradient-5 {
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    }
    
    code {
      background: rgba(0,0,0,0.3);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      display: block;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="card solid">
      <div>
        Solid Color
        <code>#3498DB</code>
      </div>
    </div>
    
    <div class="card gradient-1">
      <div>
        Purple Gradient
        <code>linear-gradient</code>
      </div>
    </div>
    
    <div class="card gradient-2">
      <div>
        Pink Gradient
        <code>linear-gradient</code>
      </div>
    </div>
    
    <div class="card gradient-3">
      <div>
        Blue Gradient
        <code>linear-gradient</code>
      </div>
    </div>
    
    <div class="card gradient-4">
      <div>
        Green Gradient
        <code>linear-gradient</code>
      </div>
    </div>
    
    <div class="card gradient-5">
      <div>
        Sunset Gradient
        <code>linear-gradient</code>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Background Colors & Gradients"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <Palette className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>hex (#FF5733)</strong> for solid colors and <strong>RGBA</strong> for transparency</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>color</strong> property changes text color</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>background-color</strong> fills the element's background</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Linear gradients</strong> create smooth color transitions</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
