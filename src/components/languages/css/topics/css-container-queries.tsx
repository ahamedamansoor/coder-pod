'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Package, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Box, Maximize2
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssContainerQueriesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssContainerQueries({ onOpenWebPlayground }: CssContainerQueriesProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Package}
        category="CSS · Modern Features"
        title="Container Queries"
        description="Responsive design based on container size, not viewport"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg animate-pulse">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Container Queries</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2023</Badge>
                Component-based responsive design
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Container Queries = Component Responsive</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Unlike media queries that respond to <strong>viewport size</strong>, container queries respond to 
              the <strong>parent container's size</strong>. Revolutionary for component-based design! 🚀
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Why Container Queries?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Media Queries</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Based on <strong>viewport width</strong><br />
                  Same component looks different everywhere<br />
                  Hard to reuse components
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Container Queries</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Based on <strong>container size</strong><br />
                  Component adapts to its space<br />
                  Truly reusable components!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Box className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Setup
          </CardTitle>
          <CardDescription>Two simple steps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
              <Badge className="bg-blue-600 text-white text-lg mb-3">Step 1: Define Container</Badge>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                Mark parent as a container
              </p>
              <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg">
                <code className="text-sm text-blue-100">
{`.container {
  container-type: inline-size;
  /* or */
  container-type: size;
}`}
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
              <Badge className="bg-green-600 text-white text-lg mb-3">Step 2: Query Container</Badge>
              <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                Respond to container size
              </p>
              <div className="bg-green-900 dark:bg-green-950 p-4 rounded-lg">
                <code className="text-sm text-green-100">
{`@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`}
                </code>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Complete Example
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg">
              <code className="text-sm text-purple-100 block">
{`/* 1. Define container */
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

/* 2. Query the container */
@container sidebar (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: auto 1fr;
  }
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
            Interactive Demo
          </CardTitle>
          <CardDescription>Resize the container to see magic!</CardDescription>
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
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .info {
      text-align: center;
      padding: 15px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border-radius: 12px;
      margin-bottom: 30px;
      font-weight: 600;
    }
    
    /* CONTAINER SETUP */
    .container {
      container-type: inline-size;
      container-name: cardContainer;
      border: 3px dashed #667eea;
      padding: 20px;
      border-radius: 12px;
      resize: horizontal;
      overflow: auto;
      min-width: 300px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        border-color: #a78bfa;
      }
    }
    
    /* CARD STYLES */
    .card {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 20px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .card-image {
      width: 100%;
      height: 150px;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
    }
    
    .card-content h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    .card-content p {
      opacity: 0.9;
      line-height: 1.6;
    }
    
    /* CONTAINER QUERIES */
    @container cardContainer (min-width: 500px) {
      .card {
        flex-direction: row;
        align-items: center;
      }
      
      .card-image {
        width: 150px;
        flex-shrink: 0;
      }
      
      .card-content h2 {
        font-size: 1.75rem;
      }
    }
    
    @container cardContainer (min-width: 700px) {
      .card {
        padding: 30px;
      }
      
      .card-image {
        width: 200px;
        height: 200px;
      }
      
      .card-content h2 {
        font-size: 2rem;
      }
      
      .card-content p {
        font-size: 1.1rem;
      }
    }
    
    .resize-handle {
      text-align: center;
      margin-top: 15px;
      font-size: 12px;
      color: #667eea;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .resize-handle {
        color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="demo">
    <h1>📦 Container Query Demo</h1>
    
    <div class="info">
      ⚡ This card adapts to its CONTAINER size, not viewport!
    </div>
    
    <div class="container">
      <div class="card">
        <div class="card-image">🎨</div>
        <div class="card-content">
          <h2>Container Query Card</h2>
          <p>
            I change my layout based on my container's width! 
            Drag the dashed border to resize me and watch the magic happen.
          </p>
        </div>
      </div>
      
      <div class="resize-handle">
        ← Drag the right edge to resize →
      </div>
    </div>
  </div>
</body>
</html>`}
            title="Container Query Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Maximize2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            Container Types
          </CardTitle>
          <CardDescription>Different container query types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              {
                type: 'inline-size',
                desc: 'Queries width only (most common)',
                use: 'Horizontal layouts',
                code: 'container-type: inline-size;'
              },
              {
                type: 'size',
                desc: 'Queries width AND height',
                use: 'Fixed-size containers',
                code: 'container-type: size;'
              },
              {
                type: 'normal',
                desc: 'Not a container (default)',
                use: 'Disable container behavior',
                code: 'container-type: normal;'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600 text-white">{item.type}</Badge>
                  <span className="text-xs text-green-700 dark:text-green-300">{item.use}</span>
                </div>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">{item.desc}</p>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>

          <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Lightbulb className="w-5 h-5 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Use <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">inline-size</code> in 99% of cases. 
              It's more performant and works for most layouts!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Container Units
          </CardTitle>
          <CardDescription>New responsive units!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Container queries come with new units that are relative to the container size!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">
              Container Query Units
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">cqw</code> - 1% of container width
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">cqh</code> - 1% of container height
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">cqi</code> - 1% of container inline size
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">cqb</code> - 1% of container block size
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">cqmin</code> - smaller of cqi or cqb
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <code className="font-bold text-blue-700 dark:text-blue-400">cqmax</code> - larger of cqi or cqb
              </div>
            </div>
            <div className="mt-4 bg-blue-900 dark:bg-blue-950 p-4 rounded-lg">
              <code className="text-sm text-blue-100">
{`/* Fluid typography based on container */
.card h2 {
  font-size: clamp(1rem, 5cqi, 3rem);
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
            <span><strong>container-type: inline-size</strong> on parent</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>@container (min-width: ...)</strong> to query</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>container-name</strong> to target specific containers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 105+, Safari 16+, Firefox 110+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
