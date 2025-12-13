'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Eye, CheckCircle, Zap, Info, Sparkles, Lightbulb, ArrowRight, Rocket, Gauge, EyeOff, Package, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssContentVisibilityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssContentVisibility({ onOpenWebPlayground }: CssContentVisibilityProps) {
  const [selectedExample, setSelectedExample] = useState('auto');

  const autoExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Content Visibility Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 200vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #10b981;
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #6ee7b7;
      }
    }
    
    .section {
      /* The magic property! */
      content-visibility: auto;
      contain-intrinsic-size: 0 400px;
      
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 30px;
      border-radius: 16px;
      margin-bottom: 30px;
      border: 3px solid #10b981;
      transition: all 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
        border-color: #6ee7b7;
      }
    }
    
    .section:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }
    
    .section-title {
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: #047857;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #a7f3d0;
      }
    }
    
    .section-content {
      color: #064e3b;
      line-height: 1.8;
      font-size: 1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-content {
        color: #d1fae5;
      }
    }
    
    .badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 12px;
      background: #10b981;
      color: white;
    }
    
    .info-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 24px;
      border-radius: 12px;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24;
      }
    }
    
    .info-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #fde68a;
      }
    }
    
    .info-text {
      color: #78350f;
      line-height: 1.7;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text {
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👁️ Content Visibility in Action</h1>
    
    <div class="section">
      <div class="section-title">✨ Section 1 - Lazy Rendered!</div>
      <div class="section-content">
        This section uses <strong>content-visibility: auto</strong>. The browser only renders it when it's near the viewport, dramatically improving initial page load!
        <br><br>
        <strong>Key Benefits:</strong><br>
        • 50%+ faster initial page load<br>
        • Reduced memory usage<br>
        • Smoother scrolling performance<br>
        • Better user experience
      </div>
      <span class="badge">⚡ Optimized</span>
    </div>
    
    <div class="section">
      <div class="section-title">🚀 Section 2 - On-Demand Rendering</div>
      <div class="section-content">
        Each section with <code>content-visibility: auto</code> is rendered on-demand. Combined with <strong>contain-intrinsic-size</strong>, the browser reserves space without rendering!
        <br><br>
        This means the page loads instantly, and sections render as you scroll to them.
      </div>
      <span class="badge">⚡ Optimized</span>
    </div>
    
    <div class="section">
      <div class="section-title">💨 Section 3 - Performance Boost</div>
      <div class="section-content">
        For pages with many sections, this can reduce initial rendering work by <strong>50% or more</strong>!
        <br><br>
        The browser skips rendering off-screen content until you actually need to see it. Simple but powerful!
      </div>
      <span class="badge">⚡ Optimized</span>
    </div>
    
    <div class="section">
      <div class="section-title">📱 Section 4 - Mobile First</div>
      <div class="section-content">
        This is especially important on mobile devices where performance matters most. Users get a fast, responsive experience!
      </div>
      <span class="badge">⚡ Optimized</span>
    </div>
    
    <div class="info-box">
      <div class="info-title">⚡ How It Works</div>
      <p class="info-text">
        <code>content-visibility: auto</code> tells the browser to skip rendering off-screen elements. Combined with <code>contain-intrinsic-size</code>, the browser knows how much space to reserve without actually rendering the content. It's like magic! ✨
      </p>
    </div>
  </div>
</body>
</html>`;

  const comparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Performance Comparison</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      width: 100%;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #10b981;
      text-align: center;
      margin-bottom: 50px;
      font-size: 3rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #6ee7b7;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }
    
    .card {
      padding: 30px;
      border-radius: 16px;
      transition: transform 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-8px);
    }
    
    .optimized {
      content-visibility: auto;
      contain-intrinsic-size: 300px;
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border: 3px solid #10b981;
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .optimized {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
        border-color: #6ee7b7;
      }
    }
    
    .normal {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      border: 3px solid #ef4444;
      box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .normal {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
        border-color: #fca5a5;
      }
    }
    
    .title {
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .optimized .title {
      color: #047857;
    }
    
    @media (prefers-color-scheme: dark) {
      .optimized .title {
        color: #a7f3d0;
      }
    }
    
    .normal .title {
      color: #7f1d1d;
    }
    
    @media (prefers-color-scheme: dark) {
      .normal .title {
        color: #fca5a5;
      }
    }
    
    .description {
      line-height: 1.7;
      font-size: 1.05rem;
    }
    
    .optimized .description {
      color: #064e3b;
    }
    
    @media (prefers-color-scheme: dark) {
      .optimized .description {
        color: #d1fae5;
      }
    }
    
    .normal .description {
      color: #7f1d1d;
    }
    
    @media (prefers-color-scheme: dark) {
      .normal .description {
        color: #fecaca;
      }
    }
    
    .stats {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px dashed currentColor;
      opacity: 0.8;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👁️ Performance Comparison</h1>
    
    <div class="comparison">
      <div class="card optimized">
        <div class="title">✅ With content-visibility</div>
        <div class="description">
          <strong>Lazy rendered</strong> - Only renders when near viewport
          <div class="stats">
            ⚡ 50%+ faster load<br>
            💾 Less memory usage<br>
            🚀 Better performance
          </div>
        </div>
      </div>
      
      <div class="card normal">
        <div class="title">❌ Without optimization</div>
        <div class="description">
          <strong>Always rendered</strong> - Renders everything immediately
          <div class="stats">
            🐌 Slower initial load<br>
            💥 More memory usage<br>
            📉 Worse performance
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader icon={Eye} category="CSS · Modern Features" title="CSS Content Visibility" description="Boost performance with lazy rendering - 50%+ faster page loads!" colorTheme="emerald" />

      {/* What is Content Visibility - Simple explanation */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/60 dark:from-emerald-950/30 dark:via-slate-900 dark:to-teal-950/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                What is Content Visibility?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                The secret to lightning-fast page loads ⚡
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
            <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">The Simple Idea</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              Don't render what users can't see yet! <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded">content-visibility: auto</code> tells the browser to skip rendering off-screen content. When users scroll to it, THEN it renders. Result? 50%+ faster page loads!
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-red-200 dark:border-red-800 shadow-lg">
              <h4 className="font-bold text-lg text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                <EyeOff className="w-5 h-5" /> ❌ Without It
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span>🐌</span>
                  <span className="text-gray-700 dark:text-gray-300">Renders EVERYTHING immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💥</span>
                  <span className="text-gray-700 dark:text-gray-300">Slow 5-10 second load times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📉</span>
                  <span className="text-gray-700 dark:text-gray-300">High memory usage</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 shadow-lg">
              <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-300 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" /> ✅ With It
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span>⚡</span>
                  <span className="text-gray-700 dark:text-gray-300">Only renders visible content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🚀</span>
                  <span className="text-gray-700 dark:text-gray-300">Instant page loads!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📈</span>
                  <span className="text-gray-700 dark:text-gray-300">Low memory, smooth scrolling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl border-2 border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100 mb-2">💡 Simple Example</h4>
                <p className="text-amber-800 dark:text-amber-200">
                  Imagine a blog with 50 sections. Normally, the browser renders all 50 (slow!). With <code className="px-2 py-1 bg-white dark:bg-slate-800 rounded">content-visibility: auto</code>, it only renders what's on screen. Sections render as you scroll. Result? Lightning-fast! ⚡
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg mb-4">📝 Super Easy Setup</h4>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm mb-3">
              <div className="text-emerald-600 dark:text-emerald-400">.section &#123;</div>
              <div className="ml-4 text-emerald-700 dark:text-emerald-300">content-visibility: auto;</div>
              <div className="ml-4 text-gray-600 dark:text-gray-400">contain-intrinsic-size: 0 500px;</div>
              <div className="text-emerald-600 dark:text-emerald-400">&#125;</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              That's it! Just 2 lines. The second property prevents layout shift.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Live Examples with dark mode */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Live Examples (Dark Mode Supported!)</CardTitle>
              <CardDescription>See it in action - works in light and dark mode</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setSelectedExample('auto')} 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'auto' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Auto (Recommended)
            </button>
            <button 
              onClick={() => setSelectedExample('comparison')} 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'comparison' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Before/After Comparison
            </button>
          </div>

          {selectedExample === 'auto' && (
            <FrontendCodePreview 
              html={autoExample} 
              title="Content Visibility Demo" 
              colorTheme="emerald" 
              onOpenPlayground={onOpenWebPlayground} 
            />
          )}
          
          {selectedExample === 'comparison' && (
            <FrontendCodePreview 
              html={comparisonExample} 
              title="Performance Comparison" 
              colorTheme="emerald" 
              onOpenPlayground={onOpenWebPlayground} 
            />
          )}
        </CardContent>
      </Card>

      {/* When to use it */}
      <Card className="relative overflow-hidden border-2 border-emerald-200 dark:border-emerald-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-teal-50/60 dark:from-emerald-950/20 dark:to-teal-950/20"></div>
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">When to Use It</CardTitle>
              <CardDescription>Perfect for long pages - avoid for short ones</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> ✅ Perfect For
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">📝</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Blog Posts</strong>
                    <p className="text-gray-600 dark:text-gray-400">Long articles with many sections</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📰</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">News Feeds</strong>
                    <p className="text-gray-600 dark:text-gray-400">Infinite scroll lists</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🛍️</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Product Pages</strong>
                    <p className="text-gray-600 dark:text-gray-400">E-commerce catalogs</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-2 border-red-200 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" /> ❌ Don't Use For
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">👀</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Visible Content</strong>
                    <p className="text-gray-600 dark:text-gray-400">Content already on screen</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🧭</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Navigation</strong>
                    <p className="text-gray-600 dark:text-gray-400">Menus, headers, footers</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📄</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Short Pages</strong>
                    <p className="text-gray-600 dark:text-gray-400">Everything fits on screen</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Browser Support</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              ✅ Chrome 85+ • ✅ Edge 85+ • ✅ Opera 71+ • ⏳ Safari (Coming Soon)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
