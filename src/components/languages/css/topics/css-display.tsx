'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Layout, Sparkles, Lightbulb, Square, 
  CheckCircle, Info, ArrowRight, Layers,
  Minus, Grid3x3, EyeOff
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssDisplayProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssDisplay({ onOpenWebPlayground }: CssDisplayProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Layout}
        category="CSS · Box Model & Layout"
        title="Display Property"
        description="Control how elements behave in the document flow"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Layout className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">The Display Property</CardTitle>
              <CardDescription className="text-base">How elements flow and behave</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Display = Element Behavior</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              The <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded">display</code> property 
              controls how an element participates in the layout. Does it take full width? Can it sit next to other elements? 
              Does it create a new line? This property answers all these questions.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              Key Question
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              "How should this element behave in the page layout?"
            </p>
            <div className="mt-3 space-y-2 text-xs text-blue-800 dark:text-blue-200">
              <div>• Should it take the full width?</div>
              <div>• Can other elements sit beside it?</div>
              <div>• Does it start on a new line?</div>
              <div>• Can you set its width and height?</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Display Values */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Square className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Common Display Values
          </CardTitle>
          <CardDescription>The four most-used display types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Block */}
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-blue-600 text-white text-lg">block</Badge>
                <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                  Full Width
                </Badge>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Takes full width available. Starts on a new line. Can set width/height.
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-blue-100">
                  display: block;
                </code>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center text-sm font-bold">
                  Block Element (Full Width)
                </div>
                <div className="h-12 bg-blue-200 dark:bg-blue-800 rounded flex items-center justify-center text-sm font-bold">
                  Another Block Element
                </div>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-3">
                Examples: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;section&gt;</code>
              </p>
            </div>

            {/* Inline */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-green-600 text-white text-lg">inline</Badge>
                <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                  Flows with Text
                </Badge>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Only takes needed width. Sits next to other inline elements. Cannot set width/height.
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-green-100">
                  display: inline;
                </code>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded border border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300">This is text with </span>
                <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-bold">inline element</span>
                <span className="text-gray-700 dark:text-gray-300"> and </span>
                <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-bold">another one</span>
                <span className="text-gray-700 dark:text-gray-300"> flowing together.</span>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300 mt-3">
                Examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>
              </p>
            </div>

            {/* Inline-Block */}
            <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-purple-600 text-white text-lg">inline-block</Badge>
                <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                  Best of Both
                </Badge>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200 mb-4">
                Sits next to other elements BUT you can set width/height. Perfect hybrid!
              </p>
              <div className="bg-purple-900 dark:bg-purple-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-purple-100">
                  display: inline-block;
                </code>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold">
                  Box 1
                </div>
                <div className="w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold">
                  Box 2
                </div>
                <div className="w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold">
                  Box 3
                </div>
              </div>
              <p className="text-xs text-purple-700 dark:text-purple-300 mt-3">
                Common for: Buttons, navigation items, card grids
              </p>
            </div>

            {/* None */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-red-600 text-white text-lg">none</Badge>
                <Badge variant="outline" className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                  Hidden
                </Badge>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                Element is completely removed from the layout. No space reserved.
              </p>
              <div className="bg-red-900 dark:bg-red-950 p-4 rounded-lg mb-4">
                <code className="text-sm text-red-100">
                  display: none;
                </code>
              </div>
              <div className="flex gap-3">
                <div className="w-24 h-24 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center text-xs font-bold">
                  Visible
                </div>
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-xs italic text-gray-500">
                  (removed)
                </div>
                <div className="w-24 h-24 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center text-xs font-bold">
                  Visible
                </div>
              </div>
              <p className="text-xs text-red-700 dark:text-red-300 mt-3">
                Common for: Hiding elements, modals, dropdown menus
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Display Demo
          </CardTitle>
          <CardDescription>See how different display values behave</CardDescription>
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
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .section {
      margin-bottom: 40px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: #374151;
      }
    }
    
    .label {
      font-weight: 700;
      padding: 8px 15px;
      border-radius: 8px;
      display: inline-block;
      margin-bottom: 15px;
      font-size: 14px;
    }
    
    .label-block {
      background: #dbeafe;
      color: #1e40af;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-block {
        background: #1e3a8a;
        color: #93c5fd;
      }
    }
    
    .label-inline {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-inline {
        background: #064e3b;
        color: #6ee7b7;
      }
    }
    
    .label-inline-block {
      background: #f3e8ff;
      color: #6b21a8;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-inline-block {
        background: #581c87;
        color: #e9d5ff;
      }
    }
    
    /* Block elements */
    .block-demo div {
      display: block;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      font-weight: 600;
    }
    
    /* Inline elements */
    .inline-demo span {
      display: inline;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 8px 15px;
      margin: 5px;
      border-radius: 6px;
      font-weight: 600;
    }
    
    /* Inline-block elements */
    .inline-block-demo div {
      display: inline-block;
      width: 120px;
      height: 120px;
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      color: white;
      margin: 10px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    
    .note {
      margin-top: 15px;
      padding: 12px;
      background: white;
      border-radius: 8px;
      font-size: 13px;
      color: #4b5563;
      border-left: 4px solid #667eea;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #1f2937;
        color: #d1d5db;
        border-left-color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Display Property Demo</h1>
    
    <div class="section">
      <div class="label label-block">display: block</div>
      <div class="block-demo">
        <div>Block Element 1 (Takes full width)</div>
        <div>Block Element 2 (New line)</div>
        <div>Block Element 3 (New line)</div>
      </div>
      <div class="note">
        Notice: Each element takes the full width and starts on a new line
      </div>
    </div>
    
    <div class="section">
      <div class="label label-inline">display: inline</div>
      <div class="inline-demo">
        <span>Inline 1</span>
        <span>Inline 2</span>
        <span>Inline 3</span>
        <span>Inline 4</span>
      </div>
      <div class="note">
        Notice: Elements flow together like text, wrapping when needed
      </div>
    </div>
    
    <div class="section">
      <div class="label label-inline-block">display: inline-block</div>
      <div class="inline-block-demo">
        <div>Box 1</div>
        <div>Box 2</div>
        <div>Box 3</div>
        <div>Box 4</div>
      </div>
      <div class="note">
        Notice: Elements sit next to each other BUT have set width/height
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Display Property Comparison"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Modern Display Values */}
      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Grid3x3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Modern Display Values
          </CardTitle>
          <CardDescription>Powerful layout systems</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">flex</Badge>
              <h3 className="font-bold mb-2">Flexbox</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Creates a flexible container for arranging items in one direction
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  display: flex;
                </code>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-3">
                Perfect for: Navigation bars, card layouts, centering
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800">
              <Badge className="bg-orange-600 text-white mb-3">grid</Badge>
              <h3 className="font-bold mb-2">Grid</h3>
              <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                Creates a two-dimensional grid system for complex layouts
              </p>
              <div className="bg-orange-900 dark:bg-orange-950 p-3 rounded-lg">
                <code className="text-sm text-orange-100">
                  display: grid;
                </code>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300 mt-3">
                Perfect for: Page layouts, image galleries, dashboards
              </p>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Modern Approach</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              Today, most layouts use <strong>Flexbox</strong> or <strong>Grid</strong> instead of 
              float or inline-block. They're more powerful and easier to work with!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>block</strong> - Full width, new line, can set dimensions</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>inline</strong> - Flows with text, cannot set width/height</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>inline-block</strong> - Sits inline BUT can set dimensions (best of both!)</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>flex/grid</strong> - Modern powerful layout systems</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
