'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Grid3x3, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Layout, Maximize2
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssGridProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssGrid({ onOpenWebPlayground }: CssGridProps) {
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Grid3x3}
        category="CSS · Modern Layout"
        title="CSS Grid"
        description="The most powerful layout system for two-dimensional designs"
        colorTheme="indigo"
      />

      {/* Introduction */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Grid3x3 className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Grid Layout</CardTitle>
              <CardDescription className="text-base">Two-dimensional layout system</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Grid = Two-Dimensional Layout</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              CSS Grid is the most powerful layout system for creating <strong>two-dimensional layouts</strong> with 
              rows AND columns. Perfect for page layouts, dashboards, image galleries, and complex designs.
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              Grid vs Flexbox
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-700 dark:text-blue-400">Flexbox:</strong>
                <p className="text-gray-600 dark:text-gray-400 mt-1">One-dimensional (row OR column)</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-700 dark:text-blue-400">Grid:</strong>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Two-dimensional (rows AND columns)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            Creating a Grid
          </CardTitle>
          <CardDescription>Simple 3-column layout</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-700">
            <h3 className="font-bold text-lg text-green-900 dark:text-green-100 mb-3">
              Basic Grid Setup
            </h3>
            <div className="bg-green-900 dark:bg-green-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-green-100 block">
{`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}`}
              </code>
            </div>
            <p className="text-sm text-green-800 dark:text-green-200">
              This creates 3 equal-width columns with 20px spacing!
            </p>
          </div>

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
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .demo {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
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
    
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
    
    .box {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="demo">
    <h1>🎯 3-Column Grid</h1>
    
    <div class="grid">
      <div class="box">Item 1</div>
      <div class="box">Item 2</div>
      <div class="box">Item 3</div>
      <div class="box">Item 4</div>
      <div class="box">Item 5</div>
      <div class="box">Item 6</div>
    </div>
  </div>
</body>
</html>`}
            title="Simple Grid Layout"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Grid Template Columns */}
      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Layout className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Grid Template Columns
          </CardTitle>
          <CardDescription>Define column sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">grid-template-columns</code> property 
            defines the width of each column.
          </p>

          <div className="space-y-4">
            {[
              {
                code: '1fr 1fr 1fr',
                desc: 'Three equal columns',
                color: 'blue'
              },
              {
                code: '200px 1fr 200px',
                desc: 'Fixed sidebars, flexible center',
                color: 'green'
              },
              {
                code: 'repeat(3, 1fr)',
                desc: 'Shorthand for equal columns',
                color: 'purple'
              },
              {
                code: 'repeat(auto-fit, minmax(250px, 1fr))',
                desc: 'Responsive! Auto-adjusts columns',
                color: 'orange'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="bg-gray-900 dark:bg-black p-3 rounded-lg mb-3">
                  <code className="text-sm text-gray-100">
                    grid-template-columns: {item.code};
                  </code>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">The "fr" Unit</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <strong>fr</strong> stands for "fraction" - it divides available space proportionally. 
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded mx-1">1fr 2fr</code> means 
              the second column is twice as wide as the first!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Responsive Grid Demo */}
      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Responsive Auto-Fit Grid
          </CardTitle>
          <CardDescription>The most powerful responsive pattern</CardDescription>
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
    
    .demo {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #8b5cf6;
      margin-bottom: 30px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #c4b5fd;
      }
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
  </style>
</head>
<body>
  <div class="demo">
    <h1>📱 Responsive Grid</h1>
    <div class="subtitle">Try resizing your browser!</div>
    
    <div class="grid">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
      <div class="card">Card 5</div>
      <div class="card">Card 6</div>
      <div class="card">Card 7</div>
      <div class="card">Card 8</div>
    </div>
  </div>
</body>
</html>`}
            title="Responsive Auto-Fit Grid"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Grid Areas */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Maximize2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Grid Template Areas
          </CardTitle>
          <CardDescription>Visual layout with named areas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Create complex layouts visually using named grid areas - perfect for page layouts!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-3">
              Page Layout Example
            </h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }`}
              </code>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Visual & Intuitive!</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Grid template areas let you "draw" your layout directly in CSS. The visual structure 
              matches the actual layout!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Gap Property */}
      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Grid3x3 className="w-6 h-6 text-green-600 dark:text-green-400" />
            Gap Property
          </CardTitle>
          <CardDescription>Spacing between grid items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white mb-3">gap</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Spacing between all grid items
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg">
                <code className="text-sm text-green-100">
                  gap: 20px;
                </code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white mb-3">row-gap / column-gap</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Different spacing for rows & columns
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-3 rounded-lg text-xs">
                <code className="text-green-100">
                  row-gap: 20px;<br />
                  column-gap: 40px;
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>display: grid</strong> creates a grid container</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>grid-template-columns</strong> defines column sizes</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>fr unit</strong> divides available space proportionally</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>auto-fit + minmax()</strong> creates responsive grids without media queries</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>gap</strong> adds spacing between items</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
