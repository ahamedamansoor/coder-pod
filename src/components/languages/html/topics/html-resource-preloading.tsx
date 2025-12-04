'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Zap, Download, Eye, Link as LinkIcon, CheckCircle, AlertTriangle, Info, Rocket } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlResourcePreloadingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlResourcePreloading({ onOpenWebPlayground }: HtmlResourcePreloadingProps) {
  
  // Example 1: Preload CSS and Fonts
  const preloadCssFonts = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preload CSS & Fonts</title>
  
  <!-- Preload critical CSS -->
  <link rel="preload" href="styles/critical.css" as="style">
  <link rel="preload" href="styles/main.css" as="style">
  
  <!-- Preload fonts -->
  <link rel="preload" href="fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Apply stylesheets -->
  <link rel="stylesheet" href="styles/critical.css">
  <link rel="stylesheet" href="styles/main.css">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @font-face {
      font-family: 'Inter';
      font-weight: 400;
      src: url('fonts/inter-regular.woff2') format('woff2');
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Inter';
      font-weight: 700;
      src: url('fonts/inter-bold.woff2') format('woff2');
      font-display: swap;
    }
    
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
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
      color: #667eea;
      margin-bottom: 10px;
      font-size: 2.5rem;
      font-weight: 700;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .feature-card {
      background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    :root.dark .feature-card {
      background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
    }
    
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }
    
    .feature-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 10px;
    }
    
    :root.dark .feature-title {
      color: #a5b4fc;
    }
    
    .feature-text {
      font-size: 0.9rem;
      color: #4b5563;
      line-height: 1.6;
    }
    
    :root.dark .feature-text {
      color: #cbd5e1;
    }
    
    .info-box {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #10b981;
      margin-top: 30px;
    }
    
    :root.dark .info-box {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      border-left-color: #34d399;
    }
    
    .info-title {
      font-weight: 700;
      color: #047857;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    :root.dark .info-title {
      color: #6ee7b7;
    }
    
    .info-text {
      color: #065f46;
      line-height: 1.6;
    }
    
    :root.dark .info-text {
      color: #a7f3d0;
    }
    
    code {
      background: rgba(102, 126, 234, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Resource Preloading</h1>
    <p class="subtitle">Load critical resources faster with preload hints</p>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <div class="feature-title">Preloaded CSS</div>
        <div class="feature-text">
          Critical styles loaded before parser encounters them
        </div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">✍️</div>
        <div class="feature-title">Preloaded Fonts</div>
        <div class="feature-text">
          Custom fonts ready instantly, no FOUT or FOIT
        </div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Faster Rendering</div>
        <div class="feature-text">
          Page renders faster with all resources ready
        </div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">✨ How Preload Works</div>
      <div class="info-text">
        The <code>rel="preload"</code> attribute tells the browser to download resources 
        immediately, even before they're needed. This is perfect for critical assets like 
        fonts, CSS, and hero images that you know will be needed.
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 2: Preload Images
  const preloadImages = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preload Hero Images</title>
  
  <!-- Preload hero image -->
  <link rel="preload" 
        href="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" 
        as="image">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .hero {
      position: relative;
      height: 80vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      padding: 20px;
    }
    
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
      animation: fadeInUp 0.8s ease-out;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      margin-bottom: 30px;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
      animation: fadeInUp 1s ease-out;
    }
    
    .badge {
      display: inline-block;
      background: rgba(16, 185, 129, 0.9);
      padding: 12px 24px;
      border-radius: 30px;
      font-weight: 600;
      animation: fadeInUp 1.2s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .content {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      background: white;
      border-radius: 16px 16px 0 0;
      margin-top: -20px;
      position: relative;
      z-index: 2;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
    }
    
    :root.dark .content {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h2 {
      color: #10b981;
      margin-bottom: 15px;
    }
    
    :root.dark h2 {
      color: #34d399;
    }
    
    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .metric {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }
    
    :root.dark .metric {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .metric-value {
      font-size: 2rem;
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
</head>
<body>
  <div class="hero">
    <img 
      class="hero-image" 
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" 
      alt="Mountain landscape"
    >
    <div class="hero-content">
      <h1 class="hero-title">Hero Image Preloaded!</h1>
      <p class="hero-subtitle">No layout shift, instant display</p>
      <div class="badge">✨ Optimized Performance</div>
    </div>
  </div>
  
  <div class="content">
    <h2>📊 Performance Benefits</h2>
    <p>By preloading the hero image, we ensure it loads immediately without causing layout shifts or delays.</p>
    
    <div class="metrics">
      <div class="metric">
        <div class="metric-value">0ms</div>
        <div class="metric-label">Layout Shift</div>
      </div>
      
      <div class="metric">
        <div class="metric-value">50%</div>
        <div class="metric-label">Faster LCP</div>
      </div>
      
      <div class="metric">
        <div class="metric-value">100</div>
        <div class="metric-label">Perfect Score</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 3: Prefetch vs Preload
  const prefetchPreload = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prefetch vs Preload</title>
  
  <!-- Preload: High priority, needed NOW -->
  <link rel="preload" href="critical-style.css" as="style">
  
  <!-- Prefetch: Low priority, might be needed LATER -->
  <link rel="prefetch" href="next-page.html">
  <link rel="prefetch" href="next-page-image.jpg">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
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
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    
    .card {
      background: white;
      padding: 30px;
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
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .card-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    
    .preload-icon {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    .prefetch-icon {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    }
    
    .card-title {
      font-size: 1.8rem;
      font-weight: 700;
    }
    
    .preload-card .card-title {
      color: #ef4444;
    }
    
    :root.dark .preload-card .card-title {
      color: #f87171;
    }
    
    .prefetch-card .card-title {
      color: #3b82f6;
    }
    
    :root.dark .prefetch-card .card-title {
      color: #60a5fa;
    }
    
    .priority-badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    .high-priority {
      background: #fee2e2;
      color: #dc2626;
    }
    
    :root.dark .high-priority {
      background: #7f1d1d;
      color: #fca5a5;
    }
    
    .low-priority {
      background: #dbeafe;
      color: #2563eb;
    }
    
    :root.dark .low-priority {
      background: #1e3a8a;
      color: #93c5fd;
    }
    
    .description {
      font-size: 1rem;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 20px;
    }
    
    :root.dark .description {
      color: #94a3b8;
    }
    
    .features {
      list-style: none;
      padding: 0;
    }
    
    .features li {
      padding: 12px 0;
      border-bottom: 1px solid #e5e7eb;
      font-size: 0.95rem;
      color: #374151;
    }
    
    :root.dark .features li {
      border-bottom-color: #334155;
      color: #cbd5e1;
    }
    
    .features li:last-child {
      border-bottom: none;
    }
    
    .features li::before {
      margin-right: 10px;
    }
    
    .use-case {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 20px;
      border-radius: 12px;
      margin-top: 20px;
    }
    
    :root.dark .use-case {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .use-case-title {
      font-weight: 700;
      color: #92400e;
      margin-bottom: 10px;
    }
    
    :root.dark .use-case-title {
      color: #fde68a;
    }
    
    .use-case-text {
      font-size: 0.9rem;
      color: #78350f;
    }
    
    :root.dark .use-case-text {
      color: #fef3c7;
    }
    
    @media (max-width: 768px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔥 Prefetch vs Preload</h1>
    
    <div class="comparison">
      <!-- Preload Card -->
      <div class="card preload-card">
        <div class="card-header">
          <div class="card-icon preload-icon">⚡</div>
          <div class="card-title">Preload</div>
        </div>
        
        <div class="priority-badge high-priority">HIGH PRIORITY</div>
        
        <p class="description">
          Tells the browser: "I need this resource RIGHT NOW for the current page!"
        </p>
        
        <ul class="features">
          <li>🎯 Loads immediately</li>
          <li>⚡ High priority in network queue</li>
          <li>📦 Used for current page</li>
          <li>🚀 Mandatory attribute: <code>as</code></li>
          <li>⏱️ Downloaded during page load</li>
        </ul>
        
        <div class="use-case">
          <div class="use-case-title">Perfect For:</div>
          <div class="use-case-text">
            • Critical CSS<br>
            • Web fonts<br>
            • Hero images<br>
            • Above-the-fold resources
          </div>
        </div>
      </div>
      
      <!-- Prefetch Card -->
      <div class="card prefetch-card">
        <div class="card-header">
          <div class="card-icon prefetch-icon">🔮</div>
          <div class="card-title">Prefetch</div>
        </div>
        
        <div class="priority-badge low-priority">LOW PRIORITY</div>
        
        <p class="description">
          Tells the browser: "I might need this later, load it when you have time."
        </p>
        
        <ul class="features">
          <li>⏰ Loads when browser is idle</li>
          <li>📉 Low priority in network queue</li>
          <li>🔜 Used for future navigation</li>
          <li>💾 Cached for later use</li>
          <li>🎯 Downloaded opportunistically</li>
        </ul>
        
        <div class="use-case">
          <div class="use-case-title">Perfect For:</div>
          <div class="use-case-text">
            • Next page resources<br>
            • Images for next page<br>
            • Scripts for future routes<br>
            • Predictable user journeys
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Rocket}
        category="HTML · Performance"
        title="Resource Preloading"
        description="Tell the browser what to load in advance for optimal performance"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            What is Resource Preloading?
          </CardTitle>
          <CardDescription>
            Give the browser hints about what resources to load early
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Resource preloading allows you to tell the browser about critical resources that should be 
            loaded as soon as possible, before the browser would naturally discover them. This can 
            significantly improve page load performance.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Three Types of Resource Hints
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <h5 className="font-semibold text-red-600 dark:text-red-400 mb-1">Preload</h5>
                <p className="text-xs text-gray-700 dark:text-gray-300">High priority, needed NOW</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Prefetch</h5>
                <p className="text-xs text-gray-700 dark:text-gray-300">Low priority, might need LATER</p>
              </div>
              <div className="bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-1">Preconnect</h5>
                <p className="text-xs text-gray-700 dark:text-gray-300">Prepare connection early</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preload Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-blue-600" />
            Preload Syntax
          </CardTitle>
          <CardDescription>
            Load critical resources with high priority
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Basic Preload Examples:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto space-y-2">
{`<!-- Preload CSS -->
<link rel="preload" href="styles.css" as="style">

<!-- Preload Font (requires crossorigin) -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preload Image -->
<link rel="preload" href="hero.jpg" as="image">

<!-- Preload JavaScript -->
<link rel="preload" href="script.js" as="script">`}
            </pre>
          </div>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>The "as" Attribute is Required!</AlertTitle>
            <AlertDescription>
              The <code>as</code> attribute tells the browser what type of resource it is, so it can 
              assign the correct priority and apply the right Content Security Policy.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg text-center">
              <div className="font-semibold text-blue-900 dark:text-blue-200 text-sm">style</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">CSS files</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg text-center">
              <div className="font-semibold text-purple-900 dark:text-purple-200 text-sm">script</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">JS files</div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg text-center">
              <div className="font-semibold text-green-900 dark:text-green-200 text-sm">font</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Font files</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg text-center">
              <div className="font-semibold text-amber-900 dark:text-amber-200 text-sm">image</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Images</div>
            </div>
          </div>
          
          <FrontendCodePreview
            title="Preload CSS and Fonts Example"
            html={preloadCssFonts}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Preload Hero Images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-green-600" />
            Preload Hero Images
          </CardTitle>
          <CardDescription>
            Eliminate layout shift and improve LCP score
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Hero images (large above-the-fold images) should always be preloaded to improve 
            Largest Contentful Paint (LCP) and prevent layout shifts.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">Benefits:</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>No Layout Shift:</strong> Image space reserved immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Faster LCP:</strong> Critical image loads first</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Better UX:</strong> Hero section appears instantly</span>
              </li>
            </ul>
          </div>
          
          <FrontendCodePreview
            title="Hero Image Preload Example"
            html={preloadImages}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Prefetch vs Preload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-amber-600" />
            Prefetch vs Preload
          </CardTitle>
          <CardDescription>
            Understanding the difference between these two hints
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Preload (Urgent)
              </h5>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• High priority</li>
                <li>• For current page</li>
                <li>• Loads immediately</li>
                <li>• Use for critical resources</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                <Download className="h-4 w-4" />
                Prefetch (Later)
              </h5>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Low priority</li>
                <li>• For future pages</li>
                <li>• Loads when idle</li>
                <li>• Use for next navigation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Prefetch Syntax:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<!-- Prefetch next page -->
<link rel="prefetch" href="/next-page.html">

<!-- Prefetch image for next page -->
<link rel="prefetch" href="/next-page-hero.jpg">`}
            </pre>
          </div>
          
          <FrontendCodePreview
            title="Prefetch vs Preload Comparison"
            html={prefetchPreload}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Preconnect */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-purple-600" />
            Preconnect & DNS-Prefetch
          </CardTitle>
          <CardDescription>
            Prepare connections to third-party domains
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            When loading resources from third-party domains (fonts, APIs, CDNs), you can save time 
            by establishing connections early.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Connection Hints:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto space-y-2">
{`<!-- Preconnect: Full connection (DNS + TCP + TLS) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.example.com">

<!-- DNS-Prefetch: DNS lookup only (lighter weight) -->
<link rel="dns-prefetch" href="https://api.example.com">`}
            </pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Preconnect</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Full connection setup (DNS + TCP + TLS handshake). Use for critical third-party resources.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">DNS-Prefetch</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                DNS lookup only. Lighter weight, use for less critical domains.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Best Practices
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
                  Don't Overuse Preload
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only preload 3-5 critical resources. Everything marked as high priority is effectively no priority.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-950/30 p-2 rounded-lg">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Always Use Preload for Fonts
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Fonts are discovered late in the render process. Preload them to eliminate FOUT/FOIT.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 dark:bg-purple-950/30 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Use Prefetch for Predictable Navigation
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If 80% of users click "Next", prefetch the next page resources during idle time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-red-100 dark:bg-red-950/30 p-2 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Watch for Unused Preloads
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Chrome DevTools will warn you about preloaded resources that weren't used within 3 seconds.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-2"><strong>Preload:</strong> Excellent support across all modern browsers</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Chrome:</strong> 50+ (April 2016)</li>
            <li><strong>Firefox:</strong> 85+ (January 2021)</li>
            <li><strong>Safari:</strong> 11.1+ (March 2018)</li>
            <li><strong>Edge:</strong> 79+ (January 2020)</li>
          </ul>
          <p className="mt-2 text-sm"><strong>Prefetch, Preconnect, DNS-Prefetch:</strong> Universal support in all modern browsers</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
