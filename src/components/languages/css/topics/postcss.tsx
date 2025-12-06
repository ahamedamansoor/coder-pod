'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Settings, Zap, CheckCircle, Package, Puzzle, ArrowRight,
  Sparkles, Code, RefreshCw, Target, Layers, AlertTriangle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface PostCSSProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function PostCSS({ onOpenWebPlayground }: PostCSSProps) {
  const [selectedPlugin, setSelectedPlugin] = useState('autoprefixer');

  const popularPlugins = [
    {
      id: 'autoprefixer',
      name: 'Autoprefixer',
      icon: RefreshCw,
      color: 'bg-blue-500',
      description: 'Automatically adds vendor prefixes',
      useCase: 'Cross-browser compatibility'
    },
    {
      id: 'cssnano',
      name: 'cssnano',
      icon: Package,
      color: 'bg-green-500',
      description: 'Minifies and optimizes CSS',
      useCase: 'Production builds'
    },
    {
      id: 'postcss-preset-env',
      name: 'postcss-preset-env',
      icon: Sparkles,
      color: 'bg-purple-500',
      description: 'Use future CSS features today',
      useCase: 'Modern CSS syntax'
    },
    {
      id: 'tailwindcss',
      name: 'Tailwind CSS',
      icon: Zap,
      color: 'bg-cyan-500',
      description: 'Utility-first CSS framework',
      useCase: 'Rapid development'
    }
  ];

  // Autoprefixer Example
  const autoprefixerExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PostCSS Autoprefixer</title>
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
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .container {
      max-width: 900px;
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
      color: #667eea;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* PostCSS Autoprefixer automatically adds vendor prefixes */
    .card {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
      border-radius: 12px;
      margin-bottom: 20px;
      transition: all 0.3s ease;
      /* Autoprefixer adds: -webkit-transition, -moz-transition, etc. */
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .card:hover {
      transform: translateY(-4px);
      /* Autoprefixer adds: -webkit-transform, -ms-transform, etc. */
      box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);
    }
    
    .feature-box {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      /* Autoprefixer handles grid prefixes for older browsers */
    }
    
    .feature {
      background: white;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid #e0e7ff;
      transition: all 0.3s ease;
      user-select: none;
      /* Autoprefixer adds: -webkit-user-select, -moz-user-select, etc. */
    }
    
    @media (prefers-color-scheme: dark) {
      .feature {
        background: #0f172a;
        border-color: #4c1d95;
        color: #cbd5e0;
      }
    }
    
    .feature:hover {
      transform: scale(1.05);
      border-color: #667eea;
    }
    
    .feature-title {
      color: #667eea;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-title {
        color: #a78bfa;
      }
    }
    
    .code-block {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-top: 20px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      overflow-x: auto;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-block {
        background: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
      }
    }
    
    .highlight {
      color: #667eea;
      font-weight: 600;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: #667eea;
      color: white;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚙️ PostCSS Autoprefixer</h1>
    <p class="subtitle">Automatic vendor prefix management</p>
    
    <div class="card">
      <h3 style="color: #667eea; font-size: 1.5rem; font-weight: 700;">🎯 What Autoprefixer Does</h3>
      
      <div class="feature-box">
        <div class="feature">
          <div class="feature-title">🔧 Flexbox</div>
          <p style="font-size: 0.9rem; color: #64748b;">Adds -webkit-flex prefixes</p>
        </div>
        
        <div class="feature">
          <div class="feature-title">🎨 Grid</div>
          <p style="font-size: 0.9rem; color: #64748b;">Handles -ms-grid syntax</p>
        </div>
        
        <div class="feature">
          <div class="feature-title">⚡ Transforms</div>
          <p style="font-size: 0.9rem; color: #64748b;">Adds -webkit-transform</p>
        </div>
        
        <div class="feature">
          <div class="feature-title">🎭 Transitions</div>
          <p style="font-size: 0.9rem; color: #64748b;">Cross-browser animations</p>
        </div>
      </div>
    </div>
    
    <div class="code-block">
      <div style="color: #94a3b8; margin-bottom: 10px;">/* Before PostCSS (Your Code) */</div>
      <div>.box {</div>
      <div style="margin-left: 20px;">display: <span class="highlight">flex</span>;</div>
      <div style="margin-left: 20px;">transform: <span class="highlight">scale(1.1)</span>;</div>
      <div>}</div>
      
      <div style="margin: 20px 0; color: #94a3b8;">↓ PostCSS Processes ↓</div>
      
      <div style="color: #94a3b8;">/* After PostCSS (Browser-Ready) */</div>
      <div>.box {</div>
      <div style="margin-left: 20px;">display: <span class="highlight">-webkit-box</span>;</div>
      <div style="margin-left: 20px;">display: <span class="highlight">-ms-flexbox</span>;</div>
      <div style="margin-left: 20px;">display: <span class="highlight">flex</span>;</div>
      <div style="margin-left: 20px;"><span class="highlight">-webkit-transform</span>: scale(1.1);</div>
      <div style="margin-left: 20px;"><span class="highlight">-ms-transform</span>: scale(1.1);</div>
      <div style="margin-left: 20px;">transform: scale(1.1);</div>
      <div>}</div>
    </div>
    
    <div style="margin-top: 24px; text-align: center;">
      <span class="badge">✅ Chrome</span>
      <span class="badge">✅ Firefox</span>
      <span class="badge">✅ Safari</span>
      <span class="badge">✅ Edge</span>
      <span class="badge">✅ IE 11</span>
    </div>
  </div>
</body>
</html>`;

  // Modern CSS Example
  const modernCssExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PostCSS Modern CSS</title>
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
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
    }
    
    .container {
      max-width: 900px;
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
      color: #10b981;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Modern CSS Features via postcss-preset-env */
    .feature-card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 24px;
      border-radius: 16px;
      margin-bottom: 20px;
      /* Custom properties */
      --card-spacing: 24px;
      --card-radius: 16px;
      transition: all 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-card {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
    }
    
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(16, 185, 129, 0.3);
    }
    
    .feature-title {
      color: #047857;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      /* Nesting (future CSS, works with postcss-preset-env) */
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-title {
        color: #6ee7b7;
      }
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    
    .feature-item {
      background: white;
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #d1fae5;
      transition: all 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-item {
        background: #0f172a;
        border-color: #065f46;
        color: #cbd5e0;
      }
    }
    
    .feature-item:hover {
      border-color: #10b981;
      transform: scale(1.05);
    }
    
    .icon {
      font-size: 2rem;
      margin-bottom: 12px;
      display: block;
    }
    
    .label {
      color: #047857;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #6ee7b7;
      }
    }
    
    .description {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .description {
        color: #94a3b8;
      }
    }
    
    .info-box {
      background: #f0fdf4;
      border: 2px solid #10b981;
      border-radius: 12px;
      padding: 20px;
      margin-top: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #022c22;
        border-color: #065f46;
      }
    }
    
    .info-title {
      color: #047857;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #6ee7b7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ postcss-preset-env</h1>
    <p class="subtitle">Use tomorrow's CSS today!</p>
    
    <div class="feature-card">
      <h3 class="feature-title">🚀 Modern CSS Features</h3>
      
      <div class="feature-grid">
        <div class="feature-item">
          <span class="icon">🎨</span>
          <div class="label">Custom Properties</div>
          <div class="description">CSS variables with fallbacks for older browsers</div>
        </div>
        
        <div class="feature-item">
          <span class="icon">📐</span>
          <div class="label">Nesting</div>
          <div class="description">Sass-like nesting in vanilla CSS</div>
        </div>
        
        <div class="feature-item">
          <span class="icon">🎯</span>
          <div class="label">Custom Media</div>
          <div class="description">Define reusable media queries</div>
        </div>
        
        <div class="feature-item">
          <span class="icon">⚡</span>
          <div class="label">Color Functions</div>
          <div class="description">color-mod(), hwb(), lab() functions</div>
        </div>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">💡 How It Works</div>
      <p style="line-height: 1.7; color: #64748b;">
        postcss-preset-env lets you write modern CSS syntax that automatically gets 
        transpiled to work in older browsers. It's like Babel for CSS, allowing you 
        to use cutting-edge features today while maintaining broad browser support.
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Settings}
        category="CSS · Build Tools"
        title="PostCSS"
        description="Transform CSS with JavaScript plugins - the ultimate CSS processing tool"
        colorTheme="purple"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Settings className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is PostCSS?
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            🔧 A tool for transforming CSS with JavaScript plugins - autoprefixing, minification, and more!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Main Demo */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 PostCSS Processing Pipeline
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-700">
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">📝 Input CSS</div>
                      <pre className="text-xs text-gray-900 dark:text-gray-100">
                        <code>{`.box {\n  display: flex;\n  transform: scale(1.1);\n}`}</code>
                      </pre>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    
                    <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-2 border-purple-200 dark:border-purple-700">
                      <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">⚙️ PostCSS Plugins</div>
                      <div className="space-y-1 text-xs">
                        <div className="text-purple-700 dark:text-purple-300">• Autoprefixer</div>
                        <div className="text-purple-700 dark:text-purple-300">• cssnano</div>
                        <div className="text-purple-700 dark:text-purple-300">• preset-env</div>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-green-500 flex-shrink-0" />
                    
                    <div className="flex-1 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-2 border-green-200 dark:border-green-700">
                      <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">✅ Output CSS</div>
                      <pre className="text-xs text-gray-900 dark:text-gray-100">
                        <code>{`.box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-200/50 mt-4">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    💡 Key Concept
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    PostCSS is like a Swiss Army knife for CSS - it runs plugins that transform your CSS in powerful ways!
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <Puzzle className="w-5 h-5" />
                  🎨 What PostCSS Can Do
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <RefreshCw className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Autoprefixing</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Vendor prefixes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <Package className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Minification</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Optimize file size</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Sparkles className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Future CSS</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Use tomorrow's syntax</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                    <Layers className="w-6 h-6 text-orange-500" />
                    <div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Linting</div>
                      <div className="text-xs text-orange-600 dark:text-orange-400">Code quality checks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">⚙️</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">PostCSS</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Plugin Ecosystem
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Fast Performance
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Industry Standard
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Highly Customizable
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Most modern frameworks (Next.js, Vite) include PostCSS by default!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Example */}
          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">postcss.config.js</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">// 🎨 PostCSS Configuration</div>
              <div className="text-gray-900 dark:text-white">module.exports = {'{'}</div>
              <div className="text-gray-900 dark:text-white">  <span className="text-purple-700 dark:text-purple-400">plugins</span>: [</div>
              <div className="text-gray-900 dark:text-white">    <span className="text-green-600 dark:text-green-400">'autoprefixer'</span>,</div>
              <div className="text-gray-900 dark:text-white">    <span className="text-green-600 dark:text-green-400">'cssnano'</span></div>
              <div className="text-gray-900 dark:text-white">  ]</div>
              <div className="text-gray-900 dark:text-white">{'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* POPULAR PLUGINS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Puzzle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Popular PostCSS Plugins
          </CardTitle>
          <CardDescription>
            Explore powerful plugins that extend PostCSS capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {popularPlugins.map((plugin) => (
              <div
                key={plugin.id}
                onClick={() => setSelectedPlugin(plugin.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPlugin === plugin.id
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${plugin.color} rounded-lg flex items-center justify-center`}>
                    <plugin.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">{plugin.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{plugin.description}</p>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300">
                      {plugin.useCase}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected example */}
          {(selectedPlugin === 'autoprefixer' || selectedPlugin === 'cssnano') && (
            <FrontendCodePreview
              html={autoprefixerExample}
              title="Autoprefixer - Automatic Vendor Prefixes"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {(selectedPlugin === 'postcss-preset-env' || selectedPlugin === 'tailwindcss') && (
            <FrontendCodePreview
              html={modernCssExample}
              title="postcss-preset-env - Use Future CSS Today"
              colorTheme="green"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* SETUP GUIDE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Getting Started with PostCSS
          </CardTitle>
          <CardDescription>
            Quick setup guide for PostCSS in your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1️⃣ Install PostCSS</div>
              <code className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded block">
                npm install -D postcss postcss-cli
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2️⃣ Install Plugins</div>
              <code className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded block">
                npm install -D autoprefixer cssnano postcss-preset-env
              </code>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">3️⃣ Create Configuration</div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-xs">
                <div className="text-gray-600 dark:text-gray-400">// postcss.config.js</div>
                <div className="text-gray-900 dark:text-gray-100">module.exports = {'{'}</div>
                <div className="text-gray-900 dark:text-gray-100 ml-4">plugins: [</div>
                <div className="text-gray-900 dark:text-gray-100 ml-8">require('autoprefixer'),</div>
                <div className="text-gray-900 dark:text-gray-100 ml-8">require('postcss-preset-env'),</div>
                <div className="text-gray-900 dark:text-gray-100 ml-8">require('cssnano')</div>
                <div className="text-gray-900 dark:text-gray-100 ml-4">]</div>
                <div className="text-gray-900 dark:text-gray-100">{'}'}</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">4️⃣ Process CSS</div>
              <code className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded block">
                npx postcss input.css -o output.css
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always use Autoprefixer</strong> - Ensures cross-browser compatibility</li>
            <li><strong>Minify for production</strong> - Use cssnano to reduce file size</li>
            <li><strong>Enable source maps</strong> - For easier debugging</li>
            <li><strong>Use postcss-preset-env</strong> - Write modern CSS with confidence</li>
            <li><strong>Integrate with build tools</strong> - Works with Webpack, Vite, Parcel, etc.</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* FRAMEWORK SUPPORT */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Framework Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <div className="space-y-2 mt-2">
            <p><strong>✅ Next.js</strong> - Built-in PostCSS support</p>
            <p><strong>✅ Vite</strong> - PostCSS configured by default</p>
            <p><strong>✅ Create React App</strong> - Includes PostCSS (with ejecting)</p>
            <p><strong>✅ Tailwind CSS</strong> - Built on PostCSS</p>
            <p className="text-sm mt-3">Most modern frameworks come with PostCSS pre-configured!</p>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
