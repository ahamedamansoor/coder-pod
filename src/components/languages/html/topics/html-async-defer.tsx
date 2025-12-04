'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Code, Zap, CheckCircle, AlertTriangle, Info, Rocket, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAsyncDeferProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAsyncDefer({ onOpenWebPlayground }: HtmlAsyncDeferProps) {
  
  // Example 1: Normal Script Loading (Blocking)
  const normalScript = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Normal Script (Blocking)</title>
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
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      color: #ef4444;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    
    :root.dark h1 {
      color: #f87171;
    }
    
    .warning-badge {
      display: inline-block;
      background: #fee2e2;
      color: #dc2626;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    :root.dark .warning-badge {
      background: #7f1d1d;
      color: #fca5a5;
    }
    
    .timeline {
      margin: 30px 0;
      padding: 20px;
      background: #f3f4f6;
      border-radius: 12px;
    }
    
    :root.dark .timeline {
      background: #334155;
    }
    
    .timeline-item {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      border-left: 4px solid #ef4444;
    }
    
    :root.dark .timeline-item {
      background: #1e293b;
    }
    
    .timeline-number {
      width: 30px;
      height: 30px;
      background: #ef4444;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .timeline-text {
      color: #374151;
    }
    
    :root.dark .timeline-text {
      color: #cbd5e1;
    }
    
    .problem-box {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #dc2626;
      margin-top: 20px;
    }
    
    :root.dark .problem-box {
      background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
    }
    
    .problem-title {
      font-weight: 700;
      color: #dc2626;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    :root.dark .problem-title {
      color: #fca5a5;
    }
    
    .problem-text {
      color: #991b1b;
      line-height: 1.6;
    }
    
    :root.dark .problem-text {
      color: #fecaca;
    }
  </style>
</head>
<body>
  <!-- Script in head blocks rendering -->
  <script>
    console.log('Script is executing...');
    // Simulate slow script
    const start = Date.now();
    while(Date.now() - start < 2000) {
      // Block for 2 seconds
    }
    console.log('Script finished!');
  </script>
  
  <div class="container">
    <h1>❌ Normal Script (Blocking)</h1>
    <div class="warning-badge">⚠️ Blocks Page Rendering</div>
    
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-number">1</div>
        <div class="timeline-text">HTML parsing starts...</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-number">2</div>
        <div class="timeline-text">❌ Encounters &lt;script&gt; - STOPS everything!</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-number">3</div>
        <div class="timeline-text">Downloads and executes script (2s delay)</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-number">4</div>
        <div class="timeline-text">Finally resumes HTML parsing</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-number">5</div>
        <div class="timeline-text">Page becomes visible</div>
      </div>
    </div>
    
    <div class="problem-box">
      <div class="problem-title">😢 The Problem</div>
      <div class="problem-text">
        The page was blank for 2+ seconds while the script executed! 
        Users see nothing until the script finishes. This creates a terrible user experience.
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 2: Async Script Loading
  const asyncScript = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async Script Loading</title>
  
  <!-- Async script downloads in parallel, executes immediately when ready -->
  <script async src="https://cdn.example.com/analytics.js"></script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      color: #3b82f6;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    
    :root.dark h1 {
      color: #60a5fa;
    }
    
    .success-badge {
      display: inline-block;
      background: #dbeafe;
      color: #2563eb;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    :root.dark .success-badge {
      background: #1e3a8a;
      color: #93c5fd;
    }
    
    .parallel-flow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 30px 0;
    }
    
    .flow-column {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
    }
    
    :root.dark .flow-column {
      background: #334155;
    }
    
    .flow-title {
      font-weight: 700;
      color: #3b82f6;
      margin-bottom: 15px;
      text-align: center;
    }
    
    :root.dark .flow-title {
      color: #60a5fa;
    }
    
    .flow-item {
      background: white;
      padding: 12px;
      margin-bottom: 10px;
      border-radius: 8px;
      border-left: 4px solid #3b82f6;
      font-size: 0.9rem;
      color: #374151;
    }
    
    :root.dark .flow-item {
      background: #1e293b;
      color: #cbd5e1;
    }
    
    .benefit-box {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #2563eb;
      margin-top: 20px;
    }
    
    :root.dark .benefit-box {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    }
    
    .benefit-title {
      font-weight: 700;
      color: #2563eb;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    :root.dark .benefit-title {
      color: #93c5fd;
    }
    
    .benefit-text {
      color: #1e40af;
      line-height: 1.6;
    }
    
    :root.dark .benefit-text {
      color: #bfdbfe;
    }
    
    .use-case {
      background: #e0e7ff;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
    }
    
    :root.dark .use-case {
      background: #312e81;
    }
    
    .use-case-title {
      font-weight: 600;
      color: #4f46e5;
      margin-bottom: 8px;
    }
    
    :root.dark .use-case-title {
      color: #c7d2fe;
    }
    
    @media (max-width: 768px) {
      .parallel-flow {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Async Script Loading</h1>
    <div class="success-badge">✅ Non-Blocking & Parallel</div>
    
    <p style="margin-bottom: 20px; color: #4b5563;">
      The page loads immediately while scripts download in parallel!
    </p>
    
    <div class="parallel-flow">
      <div class="flow-column">
        <div class="flow-title">HTML Parsing</div>
        <div class="flow-item">⏩ Parsing continues...</div>
        <div class="flow-item">⏩ Building DOM...</div>
        <div class="flow-item">⏩ Rendering page...</div>
        <div class="flow-item">✅ Page visible!</div>
      </div>
      
      <div class="flow-column">
        <div class="flow-title">Script (Parallel)</div>
        <div class="flow-item">📥 Downloading...</div>
        <div class="flow-item">📥 Downloading...</div>
        <div class="flow-item">✅ Ready!</div>
        <div class="flow-item">⚡ Executes immediately</div>
      </div>
    </div>
    
    <div class="benefit-box">
      <div class="benefit-title">🎯 Perfect For</div>
      <div class="benefit-text">
        Async is ideal for scripts that don't depend on the DOM or other scripts:
      </div>
      <div class="use-case">
        <div class="use-case-title">Use Cases:</div>
        <ul style="margin-left: 20px; color: #4338ca;">
          <li>Analytics scripts (Google Analytics, Plausible)</li>
          <li>Advertising scripts</li>
          <li>Social media widgets</li>
          <li>Independent third-party scripts</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 3: Defer Script Loading
  const deferScript = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Defer Script Loading</title>
  
  <!-- Defer script downloads in parallel, waits for HTML parsing to complete -->
  <script defer src="app.js"></script>
  <script defer src="utils.js"></script>
  <script defer src="main.js"></script>
  
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
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      color: #10b981;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    .success-badge {
      display: inline-block;
      background: #d1fae5;
      color: #059669;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    :root.dark .success-badge {
      background: #064e3b;
      color: #6ee7b7;
    }
    
    .execution-order {
      margin: 30px 0;
      padding: 20px;
      background: #f3f4f6;
      border-radius: 12px;
    }
    
    :root.dark .execution-order {
      background: #334155;
    }
    
    .order-title {
      font-weight: 700;
      color: #047857;
      margin-bottom: 15px;
      font-size: 1.1rem;
    }
    
    :root.dark .order-title {
      color: #6ee7b7;
    }
    
    .order-item {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 12px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      border-left: 4px solid #10b981;
    }
    
    :root.dark .order-item {
      background: #1e293b;
    }
    
    .order-number {
      width: 35px;
      height: 35px;
      background: #10b981;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .order-text {
      color: #374151;
    }
    
    :root.dark .order-text {
      color: #cbd5e1;
    }
    
    .highlight {
      font-weight: 700;
      color: #047857;
    }
    
    :root.dark .highlight {
      color: #6ee7b7;
    }
    
    .benefit-box {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #059669;
      margin-top: 20px;
    }
    
    :root.dark .benefit-box {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .benefit-title {
      font-weight: 700;
      color: #047857;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    :root.dark .benefit-title {
      color: #6ee7b7;
    }
    
    .benefit-text {
      color: #065f46;
      line-height: 1.6;
    }
    
    :root.dark .benefit-text {
      color: #a7f3d0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Defer Script Loading</h1>
    <div class="success-badge">✅ Ordered & DOM-Safe</div>
    
    <p style="margin-bottom: 20px; color: #4b5563;">
      Scripts download in parallel but execute in order after HTML is parsed!
    </p>
    
    <div class="execution-order">
      <div class="order-title">Execution Timeline:</div>
      
      <div class="order-item">
        <div class="order-number">1</div>
        <div class="order-text">HTML parsing starts</div>
      </div>
      
      <div class="order-item">
        <div class="order-number">2</div>
        <div class="order-text">
          <span class="highlight">Scripts download in parallel</span> (non-blocking)
        </div>
      </div>
      
      <div class="order-item">
        <div class="order-number">3</div>
        <div class="order-text">HTML parsing continues uninterrupted</div>
      </div>
      
      <div class="order-item">
        <div class="order-number">4</div>
        <div class="order-text">
          <span class="highlight">HTML parsing completes</span> - DOM ready!
        </div>
      </div>
      
      <div class="order-item">
        <div class="order-number">5</div>
        <div class="order-text">
          Scripts execute <span class="highlight">in order</span>: app.js → utils.js → main.js
        </div>
      </div>
      
      <div class="order-item">
        <div class="order-number">6</div>
        <div class="order-text">DOMContentLoaded event fires</div>
      </div>
    </div>
    
    <div class="benefit-box">
      <div class="benefit-title">🏆 Why Defer is Usually Best</div>
      <div class="benefit-text">
        <strong>1. Maintains execution order</strong> - Scripts run in the order they appear<br>
        <strong>2. DOM is ready</strong> - All HTML elements are available<br>
        <strong>3. Non-blocking</strong> - Downloads happen in parallel<br>
        <strong>4. Predictable</strong> - Consistent behavior across browsers
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 4: Comparison of all three
  const comparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script Loading Comparison</title>
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
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      color: white;
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 40px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .comparison-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }
    
    .card {
      background: white;
      padding: 25px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }
    
    :root.dark .card {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }
    
    .card-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    
    .normal-icon { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
    .async-icon { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
    .defer-icon { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
    
    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .normal-card .card-title { color: #ef4444; }
    .async-card .card-title { color: #3b82f6; }
    .defer-card .card-title { color: #10b981; }
    
    :root.dark .normal-card .card-title { color: #f87171; }
    :root.dark .async-card .card-title { color: #60a5fa; }
    :root.dark .defer-card .card-title { color: #34d399; }
    
    .syntax {
      background: #f3f4f6;
      padding: 12px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      margin-bottom: 15px;
      color: #374151;
    }
    
    :root.dark .syntax {
      background: #334155;
      color: #cbd5e1;
    }
    
    .pros-cons {
      margin-bottom: 15px;
    }
    
    .pros-cons h4 {
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: #374151;
    }
    
    :root.dark .pros-cons h4 {
      color: #cbd5e1;
    }
    
    .pros-cons ul {
      list-style: none;
      padding: 0;
    }
    
    .pros-cons li {
      padding: 6px 0;
      font-size: 0.85rem;
      color: #4b5563;
    }
    
    :root.dark .pros-cons li {
      color: #94a3b8;
    }
    
    .recommendation {
      background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%);
      padding: 15px;
      border-radius: 12px;
      text-align: center;
      font-weight: 700;
      color: #6d28d9;
      margin-top: 15px;
    }
    
    :root.dark .recommendation {
      background: linear-gradient(135deg, #5b21b6 0%, #6d28d9 100%);
      color: #e9d5ff;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Script Loading Comparison</h1>
    
    <div class="comparison-grid">
      <!-- Normal -->
      <div class="card normal-card">
        <div class="card-header">
          <div class="card-icon normal-icon">❌</div>
          <div class="card-title">Normal</div>
        </div>
        
        <div class="syntax">&lt;script src="file.js"&gt;</div>
        
        <div class="pros-cons">
          <h4>❌ Downsides:</h4>
          <ul>
            <li>❌ Blocks HTML parsing</li>
            <li>❌ Blocks page rendering</li>
            <li>❌ Slow page load</li>
            <li>❌ Poor user experience</li>
          </ul>
        </div>
        
        <div class="pros-cons">
          <h4>✅ Use When:</h4>
          <ul>
            <li>• Never (use defer instead)</li>
          </ul>
        </div>
        
        <div class="recommendation">⛔ Avoid This</div>
      </div>
      
      <!-- Async -->
      <div class="card async-card">
        <div class="card-header">
          <div class="card-icon async-icon">⚡</div>
          <div class="card-title">Async</div>
        </div>
        
        <div class="syntax">&lt;script async src="file.js"&gt;</div>
        
        <div class="pros-cons">
          <h4>✅ Benefits:</h4>
          <ul>
            <li>✅ Non-blocking download</li>
            <li>✅ Executes immediately when ready</li>
            <li>✅ Fast initial page load</li>
          </ul>
        </div>
        
        <div class="pros-cons">
          <h4>⚠️ Watch Out:</h4>
          <ul>
            <li>⚠️ Unpredictable execution order</li>
            <li>⚠️ DOM might not be ready</li>
          </ul>
        </div>
        
        <div class="recommendation">👍 For Independent Scripts</div>
      </div>
      
      <!-- Defer -->
      <div class="card defer-card">
        <div class="card-header">
          <div class="card-icon defer-icon">🎯</div>
          <div class="card-title">Defer</div>
        </div>
        
        <div class="syntax">&lt;script defer src="file.js"&gt;</div>
        
        <div class="pros-cons">
          <h4>✅ Benefits:</h4>
          <ul>
            <li>✅ Non-blocking download</li>
            <li>✅ Maintains execution order</li>
            <li>✅ DOM is fully loaded</li>
            <li>✅ Predictable behavior</li>
          </ul>
        </div>
        
        <div class="pros-cons">
          <h4>🎯 Use When:</h4>
          <ul>
            <li>• Scripts depend on DOM</li>
            <li>• Scripts depend on each other</li>
            <li>• Most application code</li>
          </ul>
        </div>
        
        <div class="recommendation">🏆 Best Choice (Usually)</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Code}
        category="HTML · Performance"
        title="Async & Defer"
        description="Load JavaScript without blocking page rendering"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            Why Async & Defer Matter
          </CardTitle>
          <CardDescription>
            JavaScript can block your entire page from loading
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            By default, when the browser encounters a <code>&lt;script&gt;</code> tag, it stops 
            everything: HTML parsing stops, rendering stops, and the user sees a blank page until 
            the script downloads and executes. This is terrible for performance!
          </p>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              The Problem with Normal Scripts
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Normal script tags are <strong>render-blocking</strong>. The browser can't show 
              anything to users until all scripts finish downloading and executing.
            </p>
            <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                &lt;script src="app.js"&gt;&lt;/script&gt; ← Blocks everything! ❌
              </code>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              The Solution
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Use <code>async</code> or <code>defer</code> attributes to load scripts without 
              blocking the page!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Normal Script (Blocking) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Normal Script (Blocking) - Avoid This!
          </CardTitle>
          <CardDescription>
            The default behavior that causes slow page loads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Normal Script Blocking Example"
            html={normalScript}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Async Script */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600" />
            Async Scripts
          </CardTitle>
          <CardDescription>
            Download in parallel, execute immediately when ready
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">How Async Works:</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Downloads in parallel:</strong> Doesn't block HTML parsing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Executes immediately:</strong> Runs as soon as download completes</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span><strong>Unpredictable order:</strong> Multiple async scripts execute in random order</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span><strong>DOM might not be ready:</strong> Script may run before DOM is complete</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Syntax:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<script async src="analytics.js"></script>
<script async src="ads.js"></script>`}
            </pre>
          </div>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Perfect For:</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Analytics scripts (Google Analytics)</li>
                <li>Advertising scripts</li>
                <li>Social media widgets</li>
                <li>Any script that doesn't depend on DOM or other scripts</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <FrontendCodePreview
            title="Async Script Example"
            html={asyncScript}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Defer Script */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-600" />
            Defer Scripts (Recommended!)
          </CardTitle>
          <CardDescription>
            Download in parallel, execute in order after HTML parsing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">How Defer Works:</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Downloads in parallel:</strong> Doesn't block HTML parsing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Waits for HTML:</strong> Only executes after DOM is fully parsed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Maintains order:</strong> Scripts execute in the order they appear</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>DOM is ready:</strong> Safe to manipulate HTML elements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Syntax:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<script defer src="app.js"></script>
<script defer src="utils.js"></script>
<script defer src="main.js"></script>`}
            </pre>
          </div>
          
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>This is Usually the Best Choice!</AlertTitle>
            <AlertDescription>
              Defer provides the perfect balance: non-blocking downloads, guaranteed execution order, 
              and a fully-loaded DOM. Use defer for almost all your JavaScript!
            </AlertDescription>
          </Alert>
          
          <FrontendCodePreview
            title="Defer Script Example"
            html={deferScript}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-purple-600" />
            Complete Comparison
          </CardTitle>
          <CardDescription>
            All three methods side by side
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Normal vs Async vs Defer"
            html={comparisonExample}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Decision Tree */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            Decision Tree: Which Should You Use?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border-l-4 border-l-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                ❌ Normal (No attribute)
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>When:</strong> Almost never!<br/>
                <strong>Exception:</strong> Only if the script MUST execute before anything else (very rare)
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border-l-4 border-l-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                ⚡ Async
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>When:</strong> The script is completely independent<br/>
                <strong>Examples:</strong> Analytics, ads, social widgets<br/>
                <strong>Key question:</strong> "Does this script need the DOM or other scripts?" If NO → use async
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border-l-4 border-l-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                🎯 Defer (Recommended!)
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>When:</strong> For all your application code<br/>
                <strong>Examples:</strong> App logic, UI components, utilities<br/>
                <strong>Key question:</strong> "Does this script need the DOM or depends on other scripts?" If YES → use defer
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-2"><strong>Async & Defer:</strong> Universally supported in all modern browsers</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>async:</strong> IE 10+, all modern browsers (2012+)</li>
            <li><strong>defer:</strong> IE 10+, all modern browsers (2012+)</li>
          </ul>
          <p className="mt-2 text-sm">Safe to use in production without any fallbacks!</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
