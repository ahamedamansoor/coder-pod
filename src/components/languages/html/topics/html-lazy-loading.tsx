'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Image, Film, Zap, CheckCircle, AlertTriangle, Info, Rocket } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlLazyLoadingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlLazyLoading({ onOpenWebPlayground }: HtmlLazyLoadingProps) {
  
  // Example 1: Basic Image Lazy Loading
  const basicImageExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Loading Images</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
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
      color: #667eea;
      margin-bottom: 10px;
      font-size: 1.8rem;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .image-card {
      background: #f3f4f6;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    :root.dark .image-card {
      background: #334155;
    }
    
    .image-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
    }
    
    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      display: block;
    }
    
    .caption {
      padding: 12px;
      font-size: 14px;
      color: #374151;
      text-align: center;
      font-weight: 600;
    }
    
    :root.dark .caption {
      color: #cbd5e1;
    }
    
    .info-box {
      background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }
    
    :root.dark .info-box {
      background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
      border-left-color: #818cf8;
    }
    
    .info-title {
      font-weight: 700;
      color: #667eea;
      margin-bottom: 8px;
    }
    
    :root.dark .info-title {
      color: #a5b4fc;
    }
    
    .info-text {
      font-size: 14px;
      color: #4b5563;
      line-height: 1.6;
    }
    
    :root.dark .info-text {
      color: #cbd5e1;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Lazy Loading Images</h1>
    <p class="subtitle">Images load only when they enter the viewport</p>
    
    <div class="info-box">
      <div class="info-title">💡 How It Works</div>
      <div class="info-text">
        The <code>loading="lazy"</code> attribute tells the browser to defer loading images 
        until they're near the viewport. Scroll down to see the effect!
      </div>
    </div>
    
    <div style="height: 400px; margin: 30px 0;"></div>
    
    <div class="gallery">
      <div class="image-card">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" 
          loading="lazy"
          alt="Mountain landscape"
        >
        <div class="caption">Mountain View</div>
      </div>
      
      <div class="image-card">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop" 
          loading="lazy"
          alt="Forest path"
        >
        <div class="caption">Forest Path</div>
      </div>
      
      <div class="image-card">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop" 
          loading="lazy"
          alt="Beach sunset"
        >
        <div class="caption">Beach Sunset</div>
      </div>
      
      <div class="image-card">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop" 
          loading="lazy"
          alt="Desert dunes"
        >
        <div class="caption">Desert Dunes</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 2: Iframe Lazy Loading
  const iframeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Loading Iframes</title>
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
      font-size: 1.8rem;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-bottom: 20px;
    }
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 12px;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .feature-card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }
    
    :root.dark .feature-card {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    
    .feature-title {
      font-weight: 700;
      color: #047857;
      margin-bottom: 8px;
    }
    
    :root.dark .feature-title {
      color: #6ee7b7;
    }
    
    .feature-text {
      font-size: 14px;
      color: #065f46;
    }
    
    :root.dark .feature-text {
      color: #a7f3d0;
    }
    
    .spacer {
      height: 800px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      font-size: 14px;
      text-align: center;
    }
    
    :root.dark .spacer {
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎥 Lazy Loading Iframes</h1>
    <p class="subtitle">Videos load only when needed - scroll down to see!</p>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Fast Initial Load</div>
        <div class="feature-text">Page loads instantly without heavy embeds</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">💰</div>
        <div class="feature-title">Save Bandwidth</div>
        <div class="feature-text">Only loads videos users actually want to see</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <div class="feature-title">Better UX</div>
        <div class="feature-text">Improves Core Web Vitals scores</div>
      </div>
    </div>
    
    <div class="spacer">
      👇 Scroll down to trigger the lazy-loaded video 👇
    </div>
    
    <h2 style="color: #10b981; margin-bottom: 20px;">Embedded Video (Lazy Loaded)</h2>
    
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        loading="lazy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    
    <p style="text-align: center; color: #6b7280; font-size: 14px;">
      ✅ This iframe only loaded when you scrolled near it!
    </p>
  </div>
</body>
</html>`;

  // Example 3: Performance Comparison
  const performanceExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy vs Eager Loading</title>
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
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      color: white;
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .comparison-card {
      background: white;
      padding: 25px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }
    
    :root.dark .comparison-card {
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
    
    .eager .card-icon {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    .lazy .card-icon {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }
    
    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .eager .card-title {
      color: #ef4444;
    }
    
    :root.dark .eager .card-title {
      color: #f87171;
    }
    
    .lazy .card-title {
      color: #10b981;
    }
    
    :root.dark .lazy .card-title {
      color: #34d399;
    }
    
    .metric {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    
    :root.dark .metric {
      background: #334155;
    }
    
    .metric-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #6b7280;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    :root.dark .metric-label {
      color: #94a3b8;
    }
    
    .metric-value {
      font-size: 24px;
      font-weight: 700;
    }
    
    .eager .metric-value {
      color: #dc2626;
    }
    
    :root.dark .eager .metric-value {
      color: #f87171;
    }
    
    .lazy .metric-value {
      color: #059669;
    }
    
    :root.dark .lazy .metric-value {
      color: #6ee7b7;
    }
    
    .pros-cons {
      margin-top: 15px;
    }
    
    .pros-cons h4 {
      font-size: 14px;
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
      font-size: 14px;
      color: #4b5563;
    }
    
    :root.dark .pros-cons li {
      color: #94a3b8;
    }
    
    .pros-cons li::before {
      margin-right: 8px;
    }
    
    .winner {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 700;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
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
    <h1>⚡ Lazy Loading vs Eager Loading</h1>
    
    <div class="comparison">
      <div class="comparison-card eager">
        <div class="card-header">
          <div class="card-icon">❌</div>
          <div class="card-title">Eager Loading</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Initial Page Load</div>
          <div class="metric-value">3.2s</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Data Downloaded</div>
          <div class="metric-value">4.5 MB</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Network Requests</div>
          <div class="metric-value">45</div>
        </div>
        
        <div class="pros-cons">
          <h4>❌ Drawbacks:</h4>
          <ul>
            <li>❌ Slower initial load time</li>
            <li>❌ Wastes bandwidth on unused resources</li>
            <li>❌ Poor performance on slow connections</li>
            <li>❌ Higher server costs</li>
          </ul>
        </div>
      </div>
      
      <div class="comparison-card lazy">
        <div class="card-header">
          <div class="card-icon">✅</div>
          <div class="card-title">Lazy Loading</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Initial Page Load</div>
          <div class="metric-value">0.8s</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Data Downloaded</div>
          <div class="metric-value">1.2 MB</div>
        </div>
        
        <div class="metric">
          <div class="metric-label">Network Requests</div>
          <div class="metric-value">12</div>
        </div>
        
        <div class="pros-cons">
          <h4>✅ Benefits:</h4>
          <ul>
            <li>✅ 4x faster initial load</li>
            <li>✅ Saves 73% bandwidth</li>
            <li>✅ Better user experience</li>
            <li>✅ Improved Core Web Vitals</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="winner">
      🏆 Lazy Loading is the clear winner for better performance!
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Rocket}
        category="HTML · Performance"
        title="Lazy Loading"
        description="Defer loading of offscreen resources until they're needed"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600" />
            What is Lazy Loading?
          </CardTitle>
          <CardDescription>
            Load resources only when they're about to be viewed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Lazy loading is a performance optimization technique that defers the loading of non-critical 
            resources at page load time. Instead, these resources are loaded only when they're needed 
            (typically when they're about to enter the viewport).
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Why Use Lazy Loading?
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Faster Initial Load:</strong> Pages load 2-4x faster</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Save Bandwidth:</strong> Only download what users actually see</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Better UX:</strong> Users can interact with content sooner</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Improved Core Web Vitals:</strong> Better LCP, FID, and CLS scores</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Basic Image Lazy Loading */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-purple-600" />
            Image Lazy Loading
          </CardTitle>
          <CardDescription>
            Native browser support with the loading attribute
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Basic Syntax:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<img src="image.jpg" loading="lazy" alt="Description" />`}
            </pre>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">loading="lazy"</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Defer loading until near viewport
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-green-900 dark:text-green-200 mb-2">loading="eager"</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Load immediately (default)
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">loading="auto"</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Let browser decide
              </p>
            </div>
          </div>
          
          <FrontendCodePreview
            title="Interactive Image Lazy Loading"
            html={basicImageExample}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Iframe Lazy Loading */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Film className="h-5 w-5 text-green-600" />
            Iframe Lazy Loading
          </CardTitle>
          <CardDescription>
            Defer loading of embedded videos and external content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Iframes (especially video embeds) can significantly slow down page load. Use lazy loading 
            to load them only when needed:
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">YouTube Embed Example:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  loading="lazy"
  title="Video description"
  allowfullscreen
></iframe>`}
            </pre>
          </div>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Browser Support</AlertTitle>
            <AlertDescription>
              Native lazy loading for iframes is supported in Chrome 77+, Firefox 121+, and Safari 16.4+. 
              For older browsers, consider using JavaScript solutions like IntersectionObserver.
            </AlertDescription>
          </Alert>
          
          <FrontendCodePreview
            title="Interactive Iframe Lazy Loading"
            html={iframeExample}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-600" />
            Performance Impact
          </CardTitle>
          <CardDescription>
            See the dramatic difference lazy loading makes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Lazy vs Eager Loading Comparison"
            html={performanceExample}
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
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
                  Always Use for Below-the-Fold Images
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Any image that's not immediately visible should be lazy loaded
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-red-100 dark:bg-red-950/30 p-2 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Don't Lazy Load Above-the-Fold Content
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hero images and critical content should load immediately
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-950/30 p-2 rounded-lg">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Provide Dimensions
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always specify width and height attributes to prevent layout shift
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 dark:bg-purple-950/30 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Use Placeholder Images
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Consider using low-quality image placeholders (LQIP) for better UX
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
          <p className="mb-2">Native lazy loading is widely supported:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Chrome:</strong> 77+ (September 2019)</li>
            <li><strong>Firefox:</strong> 75+ (April 2020)</li>
            <li><strong>Edge:</strong> 79+ (January 2020)</li>
            <li><strong>Safari:</strong> 15.4+ (March 2022)</li>
            <li><strong>Opera:</strong> 64+ (October 2019)</li>
          </ul>
          <p className="mt-2">For older browsers, the attribute is safely ignored and images load normally.</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
