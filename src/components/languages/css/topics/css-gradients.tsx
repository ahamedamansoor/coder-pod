'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layers, TrendingUp, Circle, Sparkles, CheckCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssGradientsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Linear gradients example
const linearGradientsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linear Gradients</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .gradient-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .gradient-box {
      height: 200px;
      border-radius: 12px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 20px;
      color: white;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      position: relative;
      overflow: hidden;
    }
    
    .gradient-label {
      position: relative;
      z-index: 2;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      text-align: center;
    }
    
    .gradient-label .title {
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    .gradient-label .code {
      font-size: 11px;
      opacity: 0.9;
      font-family: monospace;
    }
    
    /* Top to Bottom (default) */
    .grad-1 {
      background: linear-gradient(#3b82f6, #8b5cf6);
    }
    
    /* Bottom to Top */
    .grad-2 {
      background: linear-gradient(to top, #ec4899, #f97316);
    }
    
    /* Left to Right */
    .grad-3 {
      background: linear-gradient(to right, #10b981, #06b6d4);
    }
    
    /* Diagonal */
    .grad-4 {
      background: linear-gradient(45deg, #f59e0b, #ef4444);
    }
    
    /* Multi-color */
    .grad-5 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 100%);
    }
    
    /* With transparency */
    .grad-6 {
      background-color: #3b82f6;
      background-image: linear-gradient(45deg, rgba(255,255,255,0.2), transparent);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌈 Linear Gradients</h1>
    <p class="subtitle">Smooth color transitions in a straight line</p>
    
    <div class="gradient-grid">
      <div class="gradient-box grad-1">
        <div class="gradient-label">
          <div class="title">Top to Bottom</div>
          <div class="code">(default)</div>
        </div>
      </div>
      
      <div class="gradient-box grad-2">
        <div class="gradient-label">
          <div class="title">Bottom to Top</div>
          <div class="code">to top</div>
        </div>
      </div>
      
      <div class="gradient-box grad-3">
        <div class="gradient-label">
          <div class="title">Left to Right</div>
          <div class="code">to right</div>
        </div>
      </div>
      
      <div class="gradient-box grad-4">
        <div class="gradient-label">
          <div class="title">Diagonal</div>
          <div class="code">45deg</div>
        </div>
      </div>
      
      <div class="gradient-box grad-5">
        <div class="gradient-label">
          <div class="title">Multi-Color</div>
          <div class="code">4 colors</div>
        </div>
      </div>
      
      <div class="gradient-box grad-6">
        <div class="gradient-label">
          <div class="title">With Transparency</div>
          <div class="code">rgba()</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Radial gradients example
const radialGradientsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Radial Gradients</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .gradient-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .gradient-box {
      height: 200px;
      border-radius: 12px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 20px;
      color: white;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .gradient-label {
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      text-align: center;
    }
    
    .gradient-label .title {
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    .gradient-label .code {
      font-size: 11px;
      opacity: 0.9;
      font-family: monospace;
    }
    
    /* Circle from center */
    .radial-1 {
      background: radial-gradient(circle, #3b82f6, #1e40af);
    }
    
    /* Ellipse shape */
    .radial-2 {
      background: radial-gradient(ellipse, #ec4899, #be185d);
    }
    
    /* Positioned circle */
    .radial-3 {
      background: radial-gradient(circle at top left, #10b981, #047857);
    }
    
    /* Multiple color stops */
    .radial-4 {
      background: radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
    }
    
    /* Spotlight effect */
    .radial-5 {
      background-color: #1e293b;
      background-image: radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%);
    }
    
    /* Multi-spotlight */
    .radial-6 {
      background-color: #0f172a;
      background-image:
        radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 30%),
        radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 30%);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⭕ Radial Gradients</h1>
    <p class="subtitle">Color transitions radiating from a center point</p>
    
    <div class="gradient-grid">
      <div class="gradient-box radial-1">
        <div class="gradient-label">
          <div class="title">Circle</div>
          <div class="code">radial-gradient(circle, ...)</div>
        </div>
      </div>
      
      <div class="gradient-box radial-2">
        <div class="gradient-label">
          <div class="title">Ellipse</div>
          <div class="code">radial-gradient(ellipse, ...)</div>
        </div>
      </div>
      
      <div class="gradient-box radial-3">
        <div class="gradient-label">
          <div class="title">Positioned</div>
          <div class="code">at top left</div>
        </div>
      </div>
      
      <div class="gradient-box radial-4">
        <div class="gradient-label">
          <div class="title">Multi-Color</div>
          <div class="code">3 color stops</div>
        </div>
      </div>
      
      <div class="gradient-box radial-5">
        <div class="gradient-label">
          <div class="title">Spotlight</div>
          <div class="code">with transparency</div>
        </div>
      </div>
      
      <div class="gradient-box radial-6">
        <div class="gradient-label">
          <div class="title">Multi-Spotlight</div>
          <div class="code">layered gradients</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Conic gradients example
const conicGradientsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conic Gradients</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    h1 {
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .gradient-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .gradient-box {
      height: 200px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }
    
    .gradient-label {
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      text-align: center;
      background: rgba(0,0,0,0.3);
      padding: 10px 20px;
      border-radius: 8px;
    }
    
    .gradient-label .title {
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    .gradient-label .code {
      font-size: 11px;
      opacity: 0.9;
      font-family: monospace;
    }
    
    /* Rainbow wheel */
    .conic-1 {
      background: conic-gradient(
        from 0deg,
        red, yellow, lime, aqua, blue, magenta, red
      );
    }
    
    /* Pie chart style */
    .conic-2 {
      background: conic-gradient(
        #3b82f6 0% 30%,
        #10b981 30% 60%,
        #f59e0b 60% 100%
      );
    }
    
    /* Loading spinner */
    .conic-3 {
      background: conic-gradient(
        from 0deg,
        #3b82f6 0deg 270deg,
        #e2e8f0 270deg 360deg
      );
    }
    
    /* Progress wheel */
    .conic-4 {
      background: conic-gradient(
        from -90deg,
        #10b981 0deg 252deg,
        #f1f5f9 252deg 360deg
      );
    }
    
    @media (prefers-color-scheme: dark) {
      .conic-3, .conic-4 {
        background: conic-gradient(
          from 0deg,
          #3b82f6 0deg 270deg,
          #334155 270deg 360deg
        );
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎡 Conic Gradients</h1>
    <p class="subtitle">Color transitions rotating around a center point</p>
    
    <div class="gradient-grid">
      <div class="gradient-box conic-1">
        <div class="gradient-label">
          <div class="title">Rainbow Wheel</div>
          <div class="code">full spectrum</div>
        </div>
      </div>
      
      <div class="gradient-box conic-2">
        <div class="gradient-label">
          <div class="title">Pie Chart</div>
          <div class="code">3 segments</div>
        </div>
      </div>
      
      <div class="gradient-box conic-3">
        <div class="gradient-label">
          <div class="title">Loading (75%)</div>
          <div class="code">270deg</div>
        </div>
      </div>
      
      <div class="gradient-box conic-4">
        <div class="gradient-label">
          <div class="title">Progress (70%)</div>
          <div class="code">252deg</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssGradients({ onOpenWebPlayground }: CssGradientsProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="CSS · Colors & Design"
        title="Gradients"
        description="Create beautiful color transitions with linear, radial, and conic gradients"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            What are Gradients?
          </CardTitle>
          <CardDescription>
            Smooth transitions between two or more colors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Gradients let you create <strong className="text-foreground">smooth color transitions</strong> instead of solid colors. 
            They're perfect for backgrounds, buttons, and adding visual interest to your designs. CSS has three types of gradients, 
            each creating a different effect!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">Linear</h4>
              <p className="text-sm text-muted-foreground">
                Colors transition in a straight line
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Circle className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">Radial</h4>
              <p className="text-sm text-muted-foreground">
                Colors radiate from a center point
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Layers className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">Conic</h4>
              <p className="text-sm text-muted-foreground">
                Colors rotate around a center point
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Linear Gradients */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            1. Linear Gradients
          </CardTitle>
          <CardDescription>
            Straight-line color transitions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={linearGradientsExample}
            title="Linear Gradient Examples"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">💡 Linear Gradient Tips:</h4>
            <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Direction:</strong> Use "to top", "to right", or angles like "45deg"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Multiple colors:</strong> Add as many color stops as you want</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Color stops:</strong> Control where colors start/stop with percentages</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Radial Gradients */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Circle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            2. Radial Gradients
          </CardTitle>
          <CardDescription>
            Colors radiating from a center
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={radialGradientsExample}
            title="Radial Gradient Examples"
            colorTheme="amber"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>When to Use Radial Gradients</AlertTitle>
            <AlertDescription>
              Perfect for <strong>spotlight effects</strong>, <strong>button highlights</strong>, and creating 
              <strong> depth</strong> in your designs. Great for hero sections and card backgrounds!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Conic Gradients */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            3. Conic Gradients
          </CardTitle>
          <CardDescription>
            Color transitions rotating around a center
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={conicGradientsExample}
            title="Conic Gradient Examples"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Gradient syntax at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">linear-gradient(blue, red)</code>
              <p className="text-sm text-muted-foreground mt-1">Simple top-to-bottom gradient</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">linear-gradient(45deg, blue, red)</code>
              <p className="text-sm text-muted-foreground mt-1">Diagonal gradient at 45 degrees</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">radial-gradient(circle, blue, red)</code>
              <p className="text-sm text-muted-foreground mt-1">Circular gradient from center</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">conic-gradient(red, yellow, green, blue, red)</code>
              <p className="text-sm text-muted-foreground mt-1">Rainbow wheel gradient</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Subtle is better:</strong> Use gentle gradients for professional looks</li>
            <li><strong>Layer them:</strong> Combine multiple gradients for complex effects</li>
            <li><strong>Performance:</strong> Gradients render fast - no image files needed!</li>
            <li><strong>Accessibility:</strong> Ensure text is still readable on gradients</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All gradient types work perfectly in all modern browsers! Conic gradients are supported in Safari 12.1+, Chrome 69+, and Firefox 83+.
        </AlertDescription>
      </Alert>
    </div>
  );
}
