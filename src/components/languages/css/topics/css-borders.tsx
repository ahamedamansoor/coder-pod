'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Square, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Circle
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssBordersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBorders({ onOpenWebPlayground }: CssBordersProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Square}
        category="CSS · Styling Basics"
        title="CSS Borders"
        description="Style element borders with width, style, color, and radius"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Square className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Borders</CardTitle>
              <CardDescription className="text-base">Outline and define elements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Borders = Element Edges</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Borders go around elements and are part of the box model. You can control their width, 
              style, color, and even round the corners with border-radius!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Three Border Properties</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">1</Badge>
                <span><strong>border-width:</strong> How thick (px, em, rem)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">2</Badge>
                <span><strong>border-style:</strong> solid, dashed, dotted, etc.</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">3</Badge>
                <span><strong>border-color:</strong> Any CSS color</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Square className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Border Styles
          </CardTitle>
          <CardDescription>Different border line styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { style: 'solid', desc: 'Solid line (most common)' },
              { style: 'dashed', desc: 'Dashed line' },
              { style: 'dotted', desc: 'Dotted line' },
              { style: 'double', desc: 'Double line' },
              { style: 'groove', desc: '3D grooved effect' },
              { style: 'ridge', desc: '3D ridged effect' },
              { style: 'inset', desc: '3D inset effect' },
              { style: 'outset', desc: '3D outset effect' },
              { style: 'none', desc: 'No border' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                <div 
                  className="w-32 h-12 bg-white dark:bg-gray-900 flex items-center justify-center"
                  style={{ border: `3px ${item.style} #667eea` }}
                >
                  <span className="text-xs font-bold">{item.style}</span>
                </div>
                <div className="flex-1">
                  <code className="text-sm bg-purple-900 dark:bg-purple-950 text-purple-100 px-2 py-1 rounded">
                    border-style: {item.style};
                  </code>
                  <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Border Examples
          </CardTitle>
          <CardDescription>Interactive border showcase</CardDescription>
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
    
    .box {
      padding: 30px;
      text-align: center;
      font-weight: 600;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      transition: transform 0.3s;
    }
    
    .box:hover {
      transform: scale(1.05);
    }
    
    .label {
      display: block;
      font-size: 12px;
      margin-top: 10px;
      opacity: 0.9;
    }
    
    /* Different border styles */
    .thin {
      border: 1px solid #10b981;
    }
    
    .medium {
      border: 4px solid #3b82f6;
    }
    
    .thick {
      border: 8px solid #ef4444;
    }
    
    .dashed {
      border: 4px dashed #f59e0b;
    }
    
    .dotted {
      border: 4px dotted #8b5cf6;
    }
    
    .double {
      border: 6px double #ec4899;
    }
    
    .rounded {
      border: 4px solid #10b981;
      border-radius: 12px;
    }
    
    .circle {
      border: 4px solid #3b82f6;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .gradient-border {
      border: 4px solid;
      border-image: linear-gradient(45deg, #667eea, #764ba2) 1;
    }
    
    .mixed {
      border-top: 4px solid #ef4444;
      border-right: 4px dashed #10b981;
      border-bottom: 4px dotted #3b82f6;
      border-left: 4px double #f59e0b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Border Styles</h1>
    
    <div class="grid">
      <div class="box thin">
        Thin
        <span class="label">1px solid</span>
      </div>
      
      <div class="box medium">
        Medium
        <span class="label">4px solid</span>
      </div>
      
      <div class="box thick">
        Thick
        <span class="label">8px solid</span>
      </div>
      
      <div class="box dashed">
        Dashed
        <span class="label">4px dashed</span>
      </div>
      
      <div class="box dotted">
        Dotted
        <span class="label">4px dotted</span>
      </div>
      
      <div class="box double">
        Double
        <span class="label">6px double</span>
      </div>
      
      <div class="box rounded">
        Rounded
        <span class="label">border-radius: 12px</span>
      </div>
      
      <div style="text-align: center;">
        <div class="box circle">
          Circle
        </div>
        <span class="label" style="display: block; margin-top: 15px; color: #667eea;">border-radius: 50%</span>
      </div>
      
      <div class="box mixed">
        Mixed
        <span class="label">Different sides</span>
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Border Gallery"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Circle className="w-6 h-6 text-green-600 dark:text-green-400" />
            Border Radius
          </CardTitle>
          <CardDescription>Round those corners!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">border-radius</code> property 
            rounds the corners of elements. Perfect for modern, softer designs!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-4">
              Common Values
            </h3>
            <div className="space-y-3">
              {[
                { value: 'border-radius: 4px;', desc: 'Subtle rounding' },
                { value: 'border-radius: 8px;', desc: 'Medium rounding' },
                { value: 'border-radius: 16px;', desc: 'Large rounding' },
                { value: 'border-radius: 50%;', desc: 'Perfect circle/pill' },
                { value: 'border-radius: 10px 20px;', desc: 'Top-left/bottom-right, Top-right/bottom-left' },
                { value: 'border-radius: 10px 20px 30px 40px;', desc: 'Each corner different' }
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <code className="text-sm bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded block mb-1">
                    {item.value}
                  </code>
                  <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Border Shorthand
          </CardTitle>
          <CardDescription>All properties in one line</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Shorthand Syntax
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-blue-100 block">
{`/* width | style | color */
border: 2px solid #667eea;

/* Individual sides */
border-top: 2px solid red;
border-right: 2px dashed blue;
border-bottom: 2px dotted green;
border-left: 2px double orange;`}
              </code>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              The shorthand is much cleaner than setting each property separately!
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use shorthand: <code>border: width style color;</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>border-radius: 50%</strong> creates circles</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Can style each side independently</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Borders add to element's total size (unless box-sizing: border-box)</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
