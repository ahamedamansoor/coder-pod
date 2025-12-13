'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Square, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Hexagon
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssShapesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssShapes({ onOpenWebPlayground }: CssShapesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Hexagon}
        category="CSS · Visual Effects"
        title="CSS Shapes"
        description="Wrap text around custom shapes with shape-outside"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Hexagon className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Shapes</CardTitle>
              <CardDescription className="text-base">Text wrapping around custom shapes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">shape-outside = Text Flow! 🌊</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">shape-outside</code> property 
              makes text wrap around <strong>custom shapes</strong> instead of just rectangles. Perfect for 
              magazine-style layouts!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Key Properties:</h3>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">shape-outside</code> - Defines the shape
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">shape-margin</code> - Space around shape
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">shape-image-threshold</code> - Image transparency threshold
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Square className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            shape-outside Values
          </CardTitle>
          <CardDescription>Different shape types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                shape: 'circle()',
                code: 'shape-outside: circle(50%);',
                desc: 'Text wraps around circle',
                color: 'blue'
              },
              {
                shape: 'ellipse()',
                code: 'shape-outside: ellipse(50% 30%);',
                desc: 'Text wraps around ellipse',
                color: 'green'
              },
              {
                shape: 'polygon()',
                code: 'shape-outside: polygon(0 0, 100% 0, 50% 100%);',
                desc: 'Text wraps around custom polygon',
                color: 'purple'
              },
              {
                shape: 'url()',
                code: 'shape-outside: url(image.png);',
                desc: 'Text wraps around image transparency',
                color: 'pink'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.shape}</Badge>
                  <span className="text-sm">{item.desc}</span>
                </div>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    {item.code}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Important!</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              shape-outside only works with <strong>floated elements</strong>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>Text wrapping around circle</CardDescription>
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
      max-width: 900px;
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
    
    .example {
      margin-bottom: 40px;
    }
    
    .label {
      display: inline-block;
      padding: 8px 16px;
      background: #667eea;
      color: white;
      border-radius: 6px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        background: #a78bfa;
        color: #1a1a2e;
      }
    }
    
    .content {
      line-height: 1.8;
      text-align: justify;
    }
    
    /* CIRCLE SHAPE */
    .circle-shape {
      width: 200px;
      height: 200px;
      float: left;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      margin: 0 30px 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
      
      /* KEY PROPERTY */
      shape-outside: circle(50%);
      shape-margin: 20px;
    }
    
    /* POLYGON SHAPE */
    .polygon-shape {
      width: 200px;
      height: 200px;
      float: right;
      background: linear-gradient(135deg, #f093fb, #f5576c);
      margin: 0 0 20px 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
      
      /* TRIANGLE SHAPE */
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      shape-outside: polygon(50% 0, 100% 100%, 0 100%);
      shape-margin: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌊 CSS Shapes Demo</h1>
    
    <div class="example">
      <span class="label">Text wrapping around circle</span>
      <div class="content">
        <div class="circle-shape">
          Circle
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
          Notice how the text flows naturally around the circular shape! 
          This creates magazine-style layouts that were impossible with just CSS before. 
          The shape-outside property defines the shape, and shape-margin adds spacing.
          You can use circles, ellipses, polygons, or even images. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
      </div>
    </div>
    
    <div class="example">
      <span class="label">Text wrapping around triangle</span>
      <div class="content">
        <div class="polygon-shape">
          Triangle
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          With polygon shapes, you can create any custom shape you want! 
          The text flows around the triangular shape on the right side. 
          This technique works great for creating unique, eye-catching layouts. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Remember that shape-outside only works on floated elements, so make sure 
          to add float: left or float: right to your shaped element.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="CSS Shapes Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
            Practical Tips
          </CardTitle>
          <CardDescription>Making shapes work</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { tip: 'Must be floated', code: 'float: left;' },
              { tip: 'Add margin with shape-margin', code: 'shape-margin: 20px;' },
              { tip: 'Combine with clip-path', code: 'clip-path: circle(50%);' },
              { tip: 'Works with images', code: 'shape-outside: url(shape.png);' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <span className="font-medium text-green-900 dark:text-green-100">{item.tip}</span>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
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
            <span><strong>shape-outside</strong> only works on <strong>floated</strong> elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>shape-margin</strong> to add space around shape</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with <strong>clip-path</strong> for visual effect</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>All modern browsers</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
