import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Zap, Sparkles, CheckCircle, Code, Rocket, Download, Clock, Gauge } from 'lucide-react';

interface LoadingStrategiesProps {
    onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function LoadingStrategies({ onOpenWebPlayground }: LoadingStrategiesProps) {
    
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <PageHeader
                icon={Rocket}
                category="CSS · Performance"
                title="CSS Loading Strategies"
                description="Optimize CSS delivery with async loading, critical CSS, and modern loading techniques for faster page loads"
                colorTheme="green"
            />

            {/* INTRODUCTION - Animation Style */}
            <Card>
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-3 text-2xl text-emerald-600 dark:text-emerald-400">
                        <div className="relative">
                            <Rocket className="w-8 h-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        What are CSS Loading Strategies?
                    </CardTitle>
                    <CardDescription className="text-lg text-emerald-600 dark:text-emerald-400">
                        ⚡ Accelerate page load times by optimizing how CSS is loaded, parsed, and applied to your web pages!
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6 p-2">
                        {/* Interactive Demo Section */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Interactive Card */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600 cursor-pointer group">
                                <h4 className="font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                                    <Zap className="w-5 h-5 animate-pulse" />
                                    ⚡ Performance Optimization
                                </h4>
                                
                                <p className="text-sm text-muted-foreground mb-4">
                                    <strong className="text-foreground">CSS Loading Strategies</strong> determine how and when CSS is loaded and applied. CSS blocks rendering by default, so optimizing its delivery is crucial for fast page loads. Modern techniques include critical CSS inline, async loading, and preloading.
                                </p>

                                {/* Loading Visual */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200/50">
                                    <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        🚀 Speed Boost
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        Optimized CSS loading can reduce First Contentful Paint by 40-60%!
                                    </div>
                                </div>
                            </div>

                            {/* Capability Grid */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50 shadow-lg transition-all duration-300">
                                <h4 className="font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    🎨 Loading Techniques
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                                        <Code className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Critical CSS</div>
                                            <div className="text-xs text-purple-600 dark:text-purple-400">Inline essential</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                                        <Download className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Preload</div>
                                            <div className="text-xs text-blue-600 dark:text-blue-400">Priority fetch</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                                        <Clock className="w-6 h-6 text-orange-500" />
                                        <div>
                                            <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Defer</div>
                                            <div className="text-xs text-orange-600 dark:text-orange-400">Load later</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                                        <Gauge className="w-6 h-6 text-green-500" />
                                        <div>
                                            <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Async</div>
                                            <div className="text-xs text-green-600 dark:text-green-400">Non-blocking</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Comparison Card */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl border border-green-200/50 shadow-lg">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div className="text-4xl mb-2 animate-bounce">⚡</div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                                    </div>
                                    <div className="font-bold text-lg text-green-700 dark:text-green-300">Fast Loading</div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Faster FCP
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Better UX
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            Higher scores
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip Card */}
                            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">💡</div>
                                    <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                                    <div className="text-sm text-orange-600 dark:text-orange-400">
                                        Use Chrome DevTools Coverage tab to find critical CSS!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Code Example */}
                    <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Preload CSS</span>
                        </div>
                        <div className="font-mono text-sm">
                            <div className="text-gray-500">{'<!-- ⚡ Preload important CSS -->'}</div>
                            <div className="text-gray-900 dark:text-white">{'<'}<span className="text-purple-700 dark:text-purple-400">link</span> <span className="text-blue-600 dark:text-blue-400">rel</span>=<span className="text-green-600 dark:text-green-400">"preload"</span></div>
                            <div className="text-gray-900 dark:text-white">      <span className="text-blue-600 dark:text-blue-400">href</span>=<span className="text-green-600 dark:text-green-400">"styles.css"</span></div>
                            <div className="text-gray-900 dark:text-white">      <span className="text-blue-600 dark:text-blue-400">as</span>=<span className="text-green-600 dark:text-green-400">"style"</span> {'>'}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* CRITICAL CSS */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Critical CSS Inline
                    </CardTitle>
                    <CardDescription>
                        Inline essential above-the-fold CSS for instant rendering
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Critical CSS Strategy"
                        html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Critical CSS Example</title>
  
  <!-- ⚡ CRITICAL CSS - Inline for instant render -->
  <style>
    /* Above-the-fold styles only */
    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      background: white;
    }
    
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 20px;
    }
    
    .hero h1 {
      font-size: 48px;
      margin-bottom: 16px;
    }
    
    .hero p {
      font-size: 20px;
      opacity: 0.9;
    }
  </style>
  
  <!-- 📦 NON-CRITICAL CSS - Load async -->
  <link rel="preload" href="/styles.css" as="style" 
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles.css"></noscript>
</head>
<body>
  <section class="hero">
    <div>
      <h1>Lightning Fast ⚡</h1>
      <p>Critical CSS loads instantly</p>
      <button class="cta">Get Started</button>
    </div>
  </section>
  
  <section class="content">
    <h2>Below the Fold Content</h2>
    <p>This section's styles can load later without blocking initial render.</p>
  </section>
</body>
</html>`}
                        css={`/* ⚡ CRITICAL CSS (inline in <style> tag) */
/* Only styles for above-the-fold content */

/* 📦 NON-CRITICAL CSS (external file) */
/* Everything else loads async */

.cta {
  padding: 16px 32px;
  font-size: 18px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: transform 0.2s;
}

.cta:hover {
  transform: scale(1.05);
}

.content {
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;
}

.content h2 {
  font-size: 36px;
  color: #111827;
  margin-bottom: 16px;
}

.content p {
  font-size: 18px;
  line-height: 1.8;
  color: #4b5563;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #111827;
  }
  
  .content h2 {
    color: #f9fafb;
  }
  
  .content p {
    color: #d1d5db;
  }
}`}
                        colorTheme="purple"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* PRELOAD */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        CSS Preloading
                    </CardTitle>
                    <CardDescription>
                        Fetch CSS early with preload hint for faster loading
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Preload CSS Files"
                        html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Preload Example</title>
  
  <!-- 📝 In production, you would use: -->
  <!-- 
  <link rel="preload" href="/styles/main.css" as="style">
  <link rel="stylesheet" href="/styles/main.css">
  -->
</head>
<body>
  <div class="demo-container">
    <header>
      <h1>CSS Preload Demo</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main>
      <div class="info-box">
        <h2>How Preloading Works:</h2>
        <p>
          Preload hints tell the browser to start downloading CSS files 
          early, before they're discovered in the normal parsing process.
        </p>
      </div>
      
      <div class="benefit">
        <strong>Benefits:</strong><br>
        ✓ Faster initial render<br>
        ✓ Better Core Web Vitals<br>
        ✓ Improved user experience
      </div>
      
      <div class="code-example">
        <code>&lt;link rel="preload" href="main.css" as="style"&gt;</code>
        <code>&lt;link rel="stylesheet" href="main.css"&gt;</code>
      </div>
    </main>
  </div>
</body>
</html>`}
                        css={`body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f9fafb;
}

.demo-container {
  min-height: 100vh;
}

header {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  padding: 32px 24px;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
}

h1 {
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 700;
}

h2 {
  color: #0ea5e9;
  font-size: 24px;
  margin: 0 0 12px 0;
}

nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

nav a:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.info-box {
  background: white;
  border: 2px solid #e0f2fe;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

p {
  font-size: 16px;
  line-height: 1.7;
  color: #475569;
  margin: 0;
}

.benefit {
  background: #dbeafe;
  border-left: 4px solid #0ea5e9;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.8;
  color: #1e40af;
  margin-bottom: 24px;
}

.benefit strong {
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
}

.code-example {
  background: #1e293b;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.code-example code {
  color: #e2e8f0;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  display: block;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
  
  header {
    background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
  }
  
  .info-box {
    background: #1e293b;
    border-color: #334155;
  }
  
  h2 {
    color: #38bdf8;
  }
  
  p {
    color: #cbd5e1;
  }
  
  .benefit {
    background: #1e3a8a;
    border-left-color: #60a5fa;
    color: #dbeafe;
  }
  
  .code-example {
    background: #0f172a;
    border: 1px solid #334155;
  }
}`}
                        colorTheme="blue"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* ASYNC LOADING */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Async CSS Loading
                    </CardTitle>
                    <CardDescription>
                        Load non-critical CSS asynchronously without blocking render
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FrontendCodePreview
                        title="Async CSS Pattern"
                        html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Async CSS Loading</title>
  
  <!-- ⚡ CRITICAL - Inline or blocking -->
  <style>
    body { 
      margin: 0; 
      font-family: system-ui; 
    }
    .header { 
      background: #10b981; 
      color: white; 
      padding: 20px;
    }
  </style>
  
  <!-- 🚀 ASYNC - Non-blocking load -->
  <link rel="preload" 
        href="/non-critical.css" 
        as="style" 
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript>
    <link rel="stylesheet" href="/non-critical.css">
  </noscript>
  
  <!-- Alternative: Media query trick -->
  <link rel="stylesheet" 
        href="/print.css" 
        media="print" 
        onload="this.media='all'">
</head>
<body>
  <header class="header">
    <h1>Async Loading Example</h1>
  </header>
  
  <main class="content">
    <h2>Non-Blocking CSS</h2>
    <p>
      The header renders immediately with critical CSS. 
      Additional styles load asynchronously without blocking.
    </p>
    
    <div class="card">
      <h3>Benefits</h3>
      <ul>
        <li>✓ Faster First Contentful Paint</li>
        <li>✓ Better Largest Contentful Paint</li>
        <li>✓ Improved Time to Interactive</li>
      </ul>
    </div>
  </main>
</body>
</html>`}
                        css={`/* 📦 NON-CRITICAL CSS (loaded async) */

.content {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

h2 {
  color: #047857;
  font-size: 32px;
  margin-bottom: 16px;
}

p {
  font-size: 18px;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 32px;
}

.card {
  background: white;
  border: 2px solid #d1fae5;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
}

.card h3 {
  color: #059669;
  font-size: 24px;
  margin-bottom: 16px;
}

.card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card li {
  padding: 12px 0;
  font-size: 16px;
  color: #047857;
  border-bottom: 1px solid #d1fae5;
}

.card li:last-child {
  border-bottom: none;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .content {
    background: #111827;
  }
  
  h2 {
    color: #34d399;
  }
  
  p {
    color: #d1d5db;
  }
  
  .card {
    background: #1f2937;
    border-color: #065f46;
  }
  
  .card h3 {
    color: #6ee7b7;
  }
  
  .card li {
    color: #a7f3d0;
    border-bottom-color: #065f46;
  }
}`}
                        colorTheme="green"
                        onOpenPlayground={onOpenWebPlayground}
                    />
                </CardContent>
            </Card>

            {/* BEST PRACTICES */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                        <Sparkles className="w-5 h-5" />
                        Loading Strategy Best Practices
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Inline critical CSS:</strong>
                            <span className="text-green-700 dark:text-green-300"> Extract and inline above-the-fold CSS (typically 10-15KB) in the HTML head.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Preload important CSS:</strong>
                            <span className="text-green-700 dark:text-green-300"> Use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">{'<link rel="preload">'}</code> for CSS needed early but not critical.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Load non-critical async:</strong>
                            <span className="text-green-700 dark:text-green-300"> Use the <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">{'media="print"'}</code> trick or JavaScript to load below-the-fold CSS asynchronously.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <strong className="text-green-900 dark:text-green-200">Minimize CSS files:</strong>
                            <span className="text-green-700 dark:text-green-300"> Split CSS into smaller chunks and load only what's needed per page.</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* BROWSER SUPPORT */}
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong className="block mb-1">Universal Support</strong>
                    Preload (<code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">{'rel="preload"'}</code>) is supported in all modern browsers. The async loading patterns work universally with progressive enhancement.
                </AlertDescription>
            </Alert>
        </div>
    );
}
