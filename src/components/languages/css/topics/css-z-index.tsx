'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Layers, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, SquareStack
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssZIndexProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssZIndex({ onOpenWebPlayground }: CssZIndexProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Box Model & Layout"
        title="Z-Index & Stacking"
        description="Control the stacking order of overlapping elements"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Z-Index & Stacking Context</CardTitle>
              <CardDescription className="text-base">3D layering on 2D screens</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Z-Index = Layer Order</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">z-index</code> property 
              controls which elements appear on top when they overlap. Higher values = closer to you!
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Key Concept</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Think of z-index like stacking papers on a desk. Higher numbers are on top!
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">z-index: 1</Badge>
                <span>Bottom layer</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">z-index: 10</Badge>
                <span>Middle layer</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-600 text-white">z-index: 999</Badge>
                <span>Top layer</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <SquareStack className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            How Z-Index Works
          </CardTitle>
          <CardDescription>Requirements and rules</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Important Rule!</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Z-index only works on <strong>positioned elements</strong> (position: relative, absolute, fixed, or sticky). 
              It doesn't work on <code>position: static</code> (the default).
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Correct Usage
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg">
              <code className="text-sm text-purple-100 block">
{`.element {
  position: relative; /* Required! */
  z-index: 10;
}`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Stacking Demo
          </CardTitle>
          <CardDescription>See z-index in action</CardDescription>
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
      padding: 60px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      position: relative;
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
      margin-bottom: 50px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .stack-demo {
      position: relative;
      height: 300px;
      margin: 50px auto;
      max-width: 400px;
    }
    
    .box {
      position: absolute;
      width: 200px;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      color: white;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .box:hover {
      transform: scale(1.05);
    }
    
    .box-1 {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      top: 0;
      left: 0;
      z-index: 1;
    }
    
    .box-2 {
      background: linear-gradient(135deg, #10b981, #059669);
      top: 50px;
      left: 50px;
      z-index: 10;
    }
    
    .box-3 {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      top: 100px;
      left: 100px;
      z-index: 5;
    }
    
    .label {
      font-size: 12px;
      margin-top: 5px;
      opacity: 0.9;
    }
    
    .note {
      text-align: center;
      margin-top: 30px;
      padding: 15px;
      background: #f3f4f6;
      border-radius: 8px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #374151;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📚 Z-Index Demo</h1>
    
    <div class="stack-demo">
      <div class="box box-1">
        Red Box
        <span class="label">z-index: 1</span>
      </div>
      
      <div class="box box-2">
        Green Box
        <span class="label">z-index: 10</span>
      </div>
      
      <div class="box box-3">
        Blue Box
        <span class="label">z-index: 5</span>
      </div>
    </div>
    
    <div class="note">
      Notice: Green (z-index: 10) is on top, Blue (5) is in middle, Red (1) is on bottom.<br>
      Hover over boxes to see them scale up!
    </div>
  </div>
</body>
</html>`}
            title="Z-Index Stacking"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
            Common Z-Index Values
          </CardTitle>
          <CardDescription>Conventional layering system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { value: '-1', use: 'Behind content', example: 'Backgrounds, decorative elements' },
            { value: '0', use: 'Default layer', example: 'Normal content' },
            { value: '1-9', use: 'Elevated content', example: 'Cards, tooltips' },
            { value: '10-99', use: 'Dropdowns & menus', example: 'Navigation menus' },
            { value: '100-999', use: 'Modals & overlays', example: 'Dialog boxes' },
            { value: '9999', use: 'Always on top', example: 'Notifications, alerts' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div>
                <Badge className="bg-green-600 text-white mb-1">{item.value}</Badge>
                <p className="text-sm font-bold text-green-900 dark:text-green-100">{item.use}</p>
                <p className="text-xs text-green-700 dark:text-green-300">{item.example}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Stacking Context
          </CardTitle>
          <CardDescription>Advanced concept</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            A <strong>stacking context</strong> is a 3D conceptualization of HTML elements. Elements with certain 
            properties create new stacking contexts.
          </p>

          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold mb-3">Properties that create stacking context:</h3>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>• <code>position: relative/absolute/fixed</code> with <code>z-index</code></li>
              <li>• <code>opacity</code> less than 1</li>
              <li>• <code>transform</code> property</li>
              <li>• <code>filter</code> property</li>
            </ul>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Info className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Important Note</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Children of a stacking context are contained within it. Even with z-index: 9999, a child 
              can't appear above elements outside its parent's stacking context!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>z-index</strong> only works on positioned elements</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>Higher values</strong> = closer to viewer</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>consistent scale</strong> (1, 10, 100, 1000)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Be aware of <strong>stacking contexts</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
