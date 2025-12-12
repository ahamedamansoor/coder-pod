'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Box, Sparkles, Lightbulb, Layers, 
  CheckCircle, Info, ArrowRight, 
  Maximize, Square
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssBoxModelProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBoxModel({ onOpenWebPlayground }: CssBoxModelProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Box}
        category="CSS · Fundamentals"
        title="CSS Box Model"
        description="Understanding how every HTML element is a box with content, padding, border, and margin"
        colorTheme="indigo"
      />

      {/* What is Box Model? */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Box className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">What is the Box Model?</CardTitle>
              <CardDescription className="text-base">Every element is a rectangular box</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">The Box Concept</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              In CSS, every HTML element is treated as a rectangular box. The box model describes how these boxes are sized 
              and spaced, consisting of four parts: <strong>Content</strong>, <strong>Padding</strong>, <strong>Border</strong>, and <strong>Margin</strong>.
            </AlertDescription>
          </Alert>

          {/* Visual Box Model Diagram */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-300 dark:border-gray-700">
            <h3 className="font-bold text-center text-lg mb-6 text-gray-900 dark:text-gray-100">
              Box Model Layers (Outside → Inside)
            </h3>
            
            {/* Margin Layer */}
            <div className="p-6 rounded-xl bg-red-100 dark:bg-red-900/30 border-4 border-red-400 dark:border-red-600">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-red-600">Margin (Outermost)</Badge>
                <span className="text-sm text-red-900 dark:text-red-100">Space outside the element</span>
              </div>
              
              {/* Border Layer */}
              <div className="p-6 rounded-xl bg-blue-100 dark:bg-blue-900/30 border-4 border-blue-500 dark:border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-600">Border</Badge>
                  <span className="text-sm text-blue-900 dark:text-blue-100">The element's border</span>
                </div>
                
                {/* Padding Layer */}
                <div className="p-6 rounded-xl bg-green-100 dark:bg-green-900/30 border-4 border-green-500 dark:border-green-600">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-600">Padding</Badge>
                    <span className="text-sm text-green-900 dark:text-green-100">Space inside the element</span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 rounded-lg bg-white dark:bg-gray-800 border-4 border-purple-500 dark:border-purple-600 text-center">
                    <Badge className="bg-purple-600 mb-2">Content</Badge>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Your actual content
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Text, images, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Four Parts Explained */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Four Parts of the Box Model
          </CardTitle>
          <CardDescription>Understanding each layer from inside out</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Content */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Square className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">1. Content</h3>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                The actual content of the element - text, images, or other elements
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-3 rounded-lg">
                <code className="text-sm text-purple-100">
                  width: 200px;<br />
                  height: 100px;
                </code>
              </div>
            </div>

            {/* Padding */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-600 rounded-lg">
                  <Maximize className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">2. Padding</h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Space between content and border - inside the element
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100">
                  padding: 20px;<br />
                  padding-top: 10px;
                </code>
              </div>
            </div>

            {/* Border */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Square className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">3. Border</h3>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                A line around the padding and content
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-3 rounded-lg">
                <code className="text-sm text-blue-100">
                  border: 2px solid black;<br />
                  border-radius: 10px;
                </code>
              </div>
            </div>

            {/* Margin */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-600 rounded-lg">
                  <Maximize className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">4. Margin</h3>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                Space outside the border - creates distance from other elements
              </p>
              <div className="bg-red-900 dark:bg-red-950 p-3 rounded-lg">
                <code className="text-sm text-red-100">
                  margin: 30px;<br />
                  margin-left: auto;
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Example */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Box Model Demo
          </CardTitle>
          <CardDescription>See how each part affects the element</CardDescription>
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
      max-width: 800px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h2 {
      color: #667eea;
      margin-bottom: 30px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #a78bfa;
      }
    }
    
    .box-demo {
      /* MARGIN - Space outside (red background shows this) */
      margin: 40px;
      background: #fee;
      
      /* BORDER - The visible border */
      border: 8px solid #667eea;
      border-radius: 10px;
      
      /* PADDING - Space inside border */
      padding: 30px;
      
      /* Show background for padding area */
      background-clip: content-box;
      background-color: #d1fae5;
      
      /* Content size */
      width: 300px;
      
      position: relative;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-demo {
        background: #5a1a1a;
      }
    }
    
    .box-content {
      background: white;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      font-weight: 600;
      color: #333;
      border: 2px dashed #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-content {
        background: #2a2a3e;
        color: #e5e5e5;
        border-color: #a78bfa;
      }
    }
    
    .label {
      position: absolute;
      background: #333;
      color: white;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        background: #555;
      }
    }
    
    .margin-label {
      top: -15px;
      left: 10px;
      background: #dc2626;
    }
    
    .border-label {
      top: -5px;
      right: 10px;
      background: #667eea;
    }
    
    .padding-label {
      bottom: -15px;
      left: 10px;
      background: #059669;
    }
    
    .info-section {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    
    .info-card {
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    
    .margin-card {
      background: #fee;
      color: #991b1b;
      border: 2px solid #dc2626;
    }
    
    @media (prefers-color-scheme: dark) {
      .margin-card {
        background: #5a1a1a;
        color: #fca5a5;
      }
    }
    
    .border-card {
      background: #dbeafe;
      color: #1e40af;
      border: 2px solid #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .border-card {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .padding-card {
      background: #d1fae5;
      color: #065f46;
      border: 2px solid #059669;
    }
    
    @media (prefers-color-scheme: dark) {
      .padding-card {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .content-card {
      background: #f3e8ff;
      color: #6b21a8;
      border: 2px solid #a855f7;
    }
    
    @media (prefers-color-scheme: dark) {
      .content-card {
        background: #581c87;
        color: #e9d5ff;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🎨 Box Model Visualization</h2>
    
    <div style="display: flex; justify-content: center; position: relative;">
      <div class="box-demo">
        <span class="label margin-label">Margin</span>
        <span class="label border-label">Border</span>
        <span class="label padding-label">Padding</span>
        
        <div class="box-content">
          <strong>Content Area</strong><br>
          Your actual content
        </div>
      </div>
    </div>
    
    <div class="info-section">
      <div class="info-card margin-card">
        <strong>Margin</strong><br>
        <small>40px all sides</small>
      </div>
      <div class="info-card border-card">
        <strong>Border</strong><br>
        <small>8px solid</small>
      </div>
      <div class="info-card padding-card">
        <strong>Padding</strong><br>
        <small>30px all sides</small>
      </div>
      <div class="info-card content-card">
        <strong>Content</strong><br>
        <small>300px width</small>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Box Model Interactive Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Calculating Total Size */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Maximize className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Calculating Element Size
          </CardTitle>
          <CardDescription>How the total size is calculated</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Info className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Total Element Width Formula</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>Total Width = Content Width + Padding (left + right) + Border (left + right) + Margin (left + right)</strong>
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-2 border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-4 text-center">
              Example Calculation
            </h3>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`width: 200px;
padding: 20px;
border: 5px;
margin: 15px;

Total Width = 200 + (20×2) + (5×2) + (15×2)
            = 200 + 40 + 10 + 30
            = 280px`}
              </pre>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 text-center">
              <p className="text-2xl font-bold text-purple-600">200px</p>
              <p className="text-xs text-purple-800 dark:text-purple-200">Content</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-center">
              <p className="text-2xl font-bold text-green-600">+ 40px</p>
              <p className="text-xs text-green-800 dark:text-green-200">Padding</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 text-center">
              <p className="text-2xl font-bold text-blue-600">+ 10px</p>
              <p className="text-xs text-blue-800 dark:text-blue-200">Border</p>
            </div>
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-center">
              <p className="text-2xl font-bold text-red-600">+ 30px</p>
              <p className="text-xs text-red-800 dark:text-red-200">Margin</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Box-Sizing Property */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            The box-sizing Property
          </CardTitle>
          <CardDescription>Making sizing easier to work with</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            By default, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">width</code> and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">height</code> only apply 
            to the content. But you can change this behavior:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">content-box (default)</h4>
              <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg text-sm mb-3">
{`box-sizing: content-box;
width: 200px;
padding: 20px;

/* Total width = 240px */`}
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Width applies to content only
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">border-box (recommended) ⭐</h4>
              <pre className="bg-purple-900 dark:bg-purple-950 text-purple-100 p-4 rounded-lg text-sm mb-3">
{`box-sizing: border-box;
width: 200px;
padding: 20px;

/* Total width = 200px */`}
              </pre>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Width includes padding and border
              </p>
            </div>
          </div>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <code>box-sizing: border-box</code> for easier sizing! Many developers apply this to all elements:
              <pre className="mt-2 bg-green-900 dark:bg-green-950 text-green-100 p-2 rounded text-xs">
                * {`{ box-sizing: border-box; }`}
              </pre>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <Box className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Every element is a box</strong> with 4 parts: content, padding, border, margin</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Padding</strong> is inside the border (adds to element size)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Margin</strong> is outside the border (creates space between elements)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Use border-box</strong> for easier, more intuitive sizing</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
