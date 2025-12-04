'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Zap, Eye, CheckCircle, AlertTriangle, Info, Rocket, Clock, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlCriticalRenderingPathProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlCriticalRenderingPath({ onOpenWebPlayground }: HtmlCriticalRenderingPathProps) {
  
  // Example 1: Unoptimized CRP
  const unoptimizedCRP = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unoptimized Critical Rendering Path</title>
  
  <!-- Render-blocking CSS -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
  <link rel="stylesheet" href="large-styles.css">
  
  <!-- Render-blocking JavaScript -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="large-app.js"></script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      color: #ef4444;
      margin-bottom: 20px;
      font-size: 2.5rem;
    }
    
    :root.dark h1 {
      color: #f87171;
    }
    
    .warning {
      background: #fee2e2;
      border: 2px solid #dc2626;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
    }
    
    :root.dark .warning {
      background: #7f1d1d;
      border-color: #991b1b;
    }
    
    .warning-title {
      font-weight: 700;
      color: #dc2626;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    
    :root.dark .warning-title {
      color: #fca5a5;
    }
    
    .problems {
      list-style: none;
      padding: 0;
    }
    
    .problems li {
      padding: 8px 0;
      color: #991b1b;
      font-size: 0.95rem;
    }
    
    :root.dark .problems li {
      color: #fecaca;
    }
    
    .problems li::before {
      content: '❌ ';
      margin-right: 8px;
    }
    
    .loading-sim {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 20px;
      border-radius: 12px;
      margin-top: 20px;
      text-align: center;
    }
    
    :root.dark .loading-sim {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .loading-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: #92400e;
      animation: pulse 1.5s infinite;
    }
    
    :root.dark .loading-text {
      color: #fef3c7;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>❌ Unoptimized Critical Rendering Path</h1>
    
    <p style="margin-bottom: 20px; color: #4b5563;">
      This page loads slowly because it has multiple render-blocking resources!
    </p>
    
    <div class="warning">
      <div class="warning-title">⚠️ Problems with This Page:</div>
      <ul class="problems">
        <li>External font blocks rendering</li>
        <li>Large CSS file blocks rendering</li>
        <li>jQuery blocks rendering</li>
        <li>Large JavaScript file blocks rendering</li>
        <li>User sees blank page for 3-5 seconds!</li>
      </ul>
    </div>
    
    <div class="loading-sim">
      <div class="loading-text">⏳ Loading... (3-5 seconds)</div>
      <p style="color: #78350f; margin-top: 10px; font-size: 0.9rem;">
        Users are staring at a blank white screen!
      </p>
    </div>
  </div>
</body>
</html>`;

  // Example 2: Optimized CRP
  const optimizedCRP = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Optimized Critical Rendering Path</title>
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Critical inline CSS for above-the-fold content -->
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      animation: fadeIn 0.5s ease-out;
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    h1 {
      color: #10b981;
      margin-bottom: 20px;
      font-size: 2.5rem;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    .success {
      background: #d1fae5;
      border: 2px solid #10b981;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
    }
    
    :root.dark .success {
      background: #064e3b;
      border-color: #065f46;
    }
    
    .success-title {
      font-weight: 700;
      color: #047857;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    
    :root.dark .success-title {
      color: #6ee7b7;
    }
    
    .benefits {
      list-style: none;
      padding: 0;
    }
    
    .benefits li {
      padding: 8px 0;
      color: #065f46;
      font-size: 0.95rem;
    }
    
    :root.dark .benefits li {
      color: #a7f3d0;
    }
    
    .benefits li::before {
      content: '✅ ';
      margin-right: 8px;
    }
    
    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .metric-card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }
    
    :root.dark .metric-card {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .metric-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: #047857;
      margin-bottom: 5px;
    }
    
    :root.dark .metric-value {
      color: #6ee7b7;
    }
    
    .metric-label {
      font-size: 0.9rem;
      color: #065f46;
    }
    
    :root.dark .metric-label {
      color: #a7f3d0;
    }
  </style>
  
  <!-- Preload critical font file -->
  <link rel="preload" href="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Async load non-critical CSS -->
  <link rel="preload" href="non-critical-styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  
  <!-- Defer JavaScript -->
  <script defer src="app.js"></script>
</head>
<body>
  <div class="container">
    <h1>✅ Optimized Critical Rendering Path</h1>
    
    <p style="margin-bottom: 20px; color: #4b5563;">
      This page loads instantly with optimized critical rendering!
    </p>
    
    <div class="success">
      <div class="success-title">🚀 Optimizations Applied:</div>
      <ul class="benefits">
        <li>Critical CSS inlined in head</li>
        <li>Fonts preloaded and preconnected</li>
        <li>Non-critical CSS loaded async</li>
        <li>JavaScript deferred</li>
        <li>Page visible in under 1 second!</li>
      </ul>
    </div>
    
    <div class="metrics">
      <div class="metric-card">
        <div class="metric-value">0.8s</div>
        <div class="metric-label">Time to First Paint</div>
      </div>
      
      <div class="metric-card">
        <div class="metric-value">1.2s</div>
        <div class="metric-label">Largest Contentful Paint</div>
      </div>
      
      <div class="metric-card">
        <div class="metric-value">0.1s</div>
        <div class="metric-label">First Input Delay</div>
      </div>
      
      <div class="metric-card">
        <div class="metric-value">0.05</div>
        <div class="metric-label">Cumulative Layout Shift</div>
      </div>
    </div>
  </div>
  
  <script>
    // Load non-critical CSS fallback
    var link = document.querySelector('link[rel="preload"]');
    if (link && link.rel !== 'stylesheet') {
      link.rel = 'stylesheet';
    }
  </script>
</body>
</html>`;

  // Example 3: CRP Visualization
  const crpVisualization = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Critical Rendering Path Visualization</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #5b21b6 0%, #6d28d9 100%);
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
    }
    
    h1 {
      color: white;
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 40px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .pipeline {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      margin-bottom: 30px;
    }
    
    :root.dark .pipeline {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    .stage {
      position: relative;
      margin-bottom: 25px;
      padding: 20px;
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      border-radius: 12px;
      border-left: 6px solid #8b5cf6;
    }
    
    :root.dark .stage {
      background: linear-gradient(135deg, #334155 0%, #475569 100%);
    }
    
    .stage-number {
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: #8b5cf6;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.2rem;
      border: 4px solid white;
    }
    
    :root.dark .stage-number {
      border-color: #1e293b;
    }
    
    .stage-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #7c3aed;
      margin-bottom: 10px;
      margin-left: 30px;
    }
    
    :root.dark .stage-title {
      color: #a78bfa;
    }
    
    .stage-description {
      color: #4b5563;
      margin-left: 30px;
      line-height: 1.6;
    }
    
    :root.dark .stage-description {
      color: #cbd5e1;
    }
    
    .stage-time {
      display: inline-block;
      background: #ddd6fe;
      color: #6d28d9;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-left: 30px;
      margin-top: 10px;
    }
    
    :root.dark .stage-time {
      background: #5b21b6;
      color: #e9d5ff;
    }
    
    .optimization-tips {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 25px;
      border-radius: 12px;
      border-left: 6px solid #f59e0b;
    }
    
    :root.dark .optimization-tips {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .tips-title {
      font-weight: 700;
      color: #92400e;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    
    :root.dark .tips-title {
      color: #fef3c7;
    }
    
    .tips-list {
      list-style: none;
      padding: 0;
    }
    
    .tips-list li {
      padding: 10px 0;
      color: #78350f;
      font-size: 0.95rem;
    }
    
    :root.dark .tips-list li {
      color: #fef3c7;
    }
    
    .tips-list li::before {
      content: '💡 ';
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Critical Rendering Path Pipeline</h1>
    
    <div class="pipeline">
      <div class="stage">
        <div class="stage-number">1</div>
        <div class="stage-title">DOM Construction</div>
        <div class="stage-description">
          Browser parses HTML and builds the Document Object Model (DOM) tree.
          Each HTML tag becomes a node in the tree.
        </div>
        <span class="stage-time">⏱️ ~50ms</span>
      </div>
      
      <div class="stage">
        <div class="stage-number">2</div>
        <div class="stage-title">CSSOM Construction</div>
        <div class="stage-description">
          Browser parses CSS and builds the CSS Object Model (CSSOM) tree.
          This defines all the styles for elements.
        </div>
        <span class="stage-time">⏱️ ~100ms</span>
      </div>
      
      <div class="stage">
        <div class="stage-number">3</div>
        <div class="stage-title">JavaScript Execution</div>
        <div class="stage-description">
          If there are scripts (without async/defer), they block everything!
          Scripts can modify both DOM and CSSOM.
        </div>
        <span class="stage-time">⏱️ ~200ms (or more!)</span>
      </div>
      
      <div class="stage">
        <div class="stage-number">4</div>
        <div class="stage-title">Render Tree Construction</div>
        <div class="stage-description">
          Browser combines DOM and CSSOM to create the Render Tree.
          Only visible elements are included (no display:none).
        </div>
        <span class="stage-time">⏱️ ~30ms</span>
      </div>
      
      <div class="stage">
        <div class="stage-number">5</div>
        <div class="stage-title">Layout (Reflow)</div>
        <div class="stage-description">
          Browser calculates the exact position and size of each element.
          This is where box model calculations happen.
        </div>
        <span class="stage-time">⏱️ ~40ms</span>
      </div>
      
      <div class="stage">
        <div class="stage-number">6</div>
        <div class="stage-title">Paint</div>
        <div class="stage-description">
          Browser converts the render tree into actual pixels on the screen.
          Elements are painted in layers.
        </div>
        <span class="stage-time">⏱️ ~60ms</span>
      </div>
      
      <div class="stage">
        <div class="stage-number">7</div>
        <div class="stage-title">Composite</div>
        <div class="stage-description">
          Browser combines all layers into the final image.
          User finally sees the page!
        </div>
        <span class="stage-time">⏱️ ~20ms</span>
      </div>
    </div>
    
    <div class="optimization-tips">
      <div class="tips-title">⚡ How to Optimize Each Stage:</div>
      <ul class="tips-list">
        <li><strong>DOM:</strong> Minimize HTML size, avoid deep nesting</li>
        <li><strong>CSSOM:</strong> Inline critical CSS, defer non-critical styles</li>
        <li><strong>JavaScript:</strong> Use async/defer, minimize blocking scripts</li>
        <li><strong>Render Tree:</strong> Avoid complex selectors, minimize CSS rules</li>
        <li><strong>Layout:</strong> Avoid layout thrashing, batch DOM reads/writes</li>
        <li><strong>Paint:</strong> Reduce paint complexity, use CSS transforms</li>
        <li><strong>Composite:</strong> Promote elements to layers wisely</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layers}
        category="HTML · Performance"
        title="Critical Rendering Path"
        description="Understand and optimize how browsers render pages"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-purple-600" />
            What is the Critical Rendering Path?
          </CardTitle>
          <CardDescription>
            The sequence of steps browsers take to convert code into pixels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            The Critical Rendering Path (CRP) is the sequence of steps the browser goes through to 
            convert HTML, CSS, and JavaScript into pixels on the screen. Understanding this process 
            is key to optimizing page load performance.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              The 7 Stages of Rendering
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">1. DOM Construction</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Parse HTML → Build DOM tree</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">2. CSSOM Construction</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Parse CSS → Build CSSOM tree</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">3. JavaScript Execution</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Execute scripts (can block!)</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">4. Render Tree</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Combine DOM + CSSOM</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">5. Layout (Reflow)</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Calculate positions & sizes</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">6. Paint</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Convert to pixels</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg col-span-2">
                <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">7. Composite</div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Combine layers → Final image!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CRP Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-purple-600" />
            Critical Rendering Path Pipeline
          </CardTitle>
          <CardDescription>
            Visual breakdown of all 7 stages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="CRP Stage-by-Stage Visualization"
            html={crpVisualization}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Unoptimized Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Unoptimized CRP (Slow!)
          </CardTitle>
          <CardDescription>
            Multiple render-blocking resources delay page visibility
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3">Problems:</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Render-blocking CSS:</strong> External stylesheets block rendering</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Render-blocking JS:</strong> Scripts in head block everything</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Slow fonts:</strong> External fonts not preloaded</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Result:</strong> Blank page for 3-5 seconds!</span>
              </li>
            </ul>
          </div>
          
          <FrontendCodePreview
            title="Unoptimized CRP Example"
            html={unoptimizedCRP}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Optimized Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600" />
            Optimized CRP (Fast!)
          </CardTitle>
          <CardDescription>
            Minimize render-blocking resources for instant page loads
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">Optimizations Applied:</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Inline Critical CSS:</strong> Above-the-fold styles in head</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Preload Fonts:</strong> Critical fonts loaded early</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Async CSS:</strong> Non-critical styles loaded asynchronously</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Defer JS:</strong> Scripts don't block rendering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Result:</strong> Page visible in under 1 second!</span>
              </li>
            </ul>
          </div>
          
          <FrontendCodePreview
            title="Optimized CRP Example"
            html={optimizedCRP}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* CRP Optimization Techniques */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-blue-600" />
            CRP Optimization Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">1. Minimize Critical Resources</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduce the number of resources needed before first render. Inline critical CSS, 
                defer non-critical assets.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">2. Minimize Critical Bytes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compress and minify CSS/JS. Remove unused code. Optimize images. Every byte counts!
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">3. Minimize Critical Path Length</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduce roundtrips. Use HTTP/2, CDNs, preconnect to third-party domains.
              </p>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">4. Prioritize Above-the-Fold Content</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load visible content first. Lazy load below-the-fold content. Users see something immediately.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Render-Blocking Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Render-Blocking Resources
          </CardTitle>
          <CardDescription>
            Resources that block initial page rendering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">What Blocks Rendering?</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-950/30 p-2 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">CSS Files</h5>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      All external CSS files block rendering by default
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      &lt;link rel="stylesheet" href="styles.css"&gt; ← Blocks!
                    </code>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-950/30 p-2 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">JavaScript in Head</h5>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Scripts without async/defer block everything
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      &lt;script src="app.js"&gt;&lt;/script&gt; ← Blocks!
                    </code>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-950/30 p-2 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">External Fonts</h5>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Font files discovered late, cause FOUT/FOIT
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      @font-face in external CSS ← Delays rendering!
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            CRP Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-950/30 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Inline Critical CSS
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Put above-the-fold CSS in a <code>&lt;style&gt;</code> tag in the head. 
                  Load the rest async.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-950/30 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Use Defer for Scripts
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Add <code>defer</code> to all scripts to prevent blocking. They'll execute after 
                  HTML parsing completes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 dark:bg-purple-950/30 p-2 rounded-lg">
                <Eye className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Preload Critical Resources
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use <code>&lt;link rel="preload"&gt;</code> for fonts and critical assets to 
                  load them early.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 dark:bg-amber-950/30 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Lazy Load Below-the-Fold Content
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use <code>loading="lazy"</code> for images and iframes that aren't immediately visible.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Measuring CRP */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Measuring CRP Performance</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-2"><strong>Use Chrome DevTools to measure:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>First Contentful Paint (FCP):</strong> When first content appears</li>
            <li><strong>Largest Contentful Paint (LCP):</strong> When main content loads (target: &lt;2.5s)</li>
            <li><strong>Time to Interactive (TTI):</strong> When page becomes fully interactive</li>
            <li><strong>Blocking Time:</strong> Time spent blocked by long tasks</li>
          </ul>
          <p className="mt-2 text-sm">Tools: Chrome DevTools Lighthouse, WebPageTest, PageSpeed Insights</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
