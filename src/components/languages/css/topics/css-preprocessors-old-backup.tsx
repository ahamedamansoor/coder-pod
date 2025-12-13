'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Code, Layers, Zap, CheckCircle, Hash, TreePine, Component, 
  Settings, Sparkles, Target, Package, FileCode, ArrowRight,
  AlertTriangle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssPreprocessorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssPreprocessors({ onOpenWebPlayground }: CssPreprocessorsProps) {
  const [selectedPreprocessor, setSelectedPreprocessor] = useState('sass');

  const preprocessors = [
    {
      id: 'sass',
      name: 'Sass/SCSS',
      color: 'bg-pink-500',
      icon: Component,
      features: ['Variables', 'Nesting', 'Mixins', 'Functions', 'Inheritance']
    },
    {
      id: 'less',
      name: 'Less',
      color: 'bg-blue-500',
      icon: Layers,
      features: ['Variables', 'Nesting', 'Mixins', 'Operations', 'Functions']
    },
    {
      id: 'stylus',
      name: 'Stylus',
      color: 'bg-green-500',
      icon: Zap,
      features: ['Variables', 'Flexible Syntax', 'Mixins', 'Functions', 'Built-in Functions']
    }
  ];

  // Basic Sass Example
  const sassExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sass/SCSS Example</title>
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
    
    /* SCSS Compiled Example */
    .card {
      background: linear-gradient(135deg, #f3e7fe 0%, #e9d5ff 100%);
      padding: 24px;
      border-radius: 12px;
      margin-bottom: 20px;
      border: 2px solid #c084fc;
      transition: all 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(192, 132, 252, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: linear-gradient(135deg, #581c87 0%, #6b21a8 100%);
        border-color: #7c3aed;
      }
    }
    
    .card__title {
      color: #7c3aed;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card__title {
        color: #c084fc;
      }
    }
    
    .card__content {
      color: #64748b;
      line-height: 1.7;
    }
    
    @media (prefers-color-scheme: dark) {
      .card__content {
        color: #cbd5e0;
      }
    }
    
    .button-group {
      display: flex;
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    
    .button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .button--primary {
      background: #7c3aed;
      color: white;
    }
    
    .button--primary:hover {
      background: #6d28d9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
    }
    
    .button--secondary {
      background: transparent;
      color: #7c3aed;
      border: 2px solid #7c3aed;
    }
    
    .button--secondary:hover {
      background: #7c3aed;
      color: white;
    }
    
    @media (prefers-color-scheme: dark) {
      .button--primary {
        background: #a78bfa;
        color: #1e293b;
      }
      
      .button--primary:hover {
        background: #c084fc;
      }
      
      .button--secondary {
        color: #a78bfa;
        border-color: #a78bfa;
      }
      
      .button--secondary:hover {
        background: #a78bfa;
        color: #1e293b;
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
      color: #7c3aed;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight {
        color: #c084fc;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 CSS Preprocessors</h1>
    <p class="subtitle">Write powerful, maintainable CSS with Sass/SCSS</p>
    
    <div class="card">
      <h3 class="card__title">✨ Variables & Nesting</h3>
      <div class="card__content">
        <p>This card demonstrates SCSS features compiled to CSS:</p>
        <ul style="margin-left: 20px; margin-top: 10px;">
          <li>Variables for consistent colors</li>
          <li>Nested selectors (card__title, card__content)</li>
          <li>Hover states with transform</li>
          <li>Responsive design with media queries</li>
        </ul>
      </div>
      <div class="button-group">
        <button class="button button--primary">Primary Action</button>
        <button class="button button--secondary">Secondary Action</button>
      </div>
    </div>
    
    <div class="code-block">
      <div style="color: #94a3b8;">// SCSS Source Code</div>
      <div><span class="highlight">$primary-color</span>: #7c3aed;</div>
      <div><span class="highlight">$border-radius</span>: 12px;</div>
      <div style="margin-top: 10px;">.card {</div>
      <div style="margin-left: 20px;">padding: 24px;</div>
      <div style="margin-left: 20px;">border-radius: <span class="highlight">$border-radius</span>;</div>
      <div style="margin-left: 20px;"></div>
      <div style="margin-left: 20px;"><span class="highlight">&__title</span> {</div>
      <div style="margin-left: 40px;">color: <span class="highlight">$primary-color</span>;</div>
      <div style="margin-left: 20px;">}</div>
      <div>}</div>
    </div>
  </div>
</body>
</html>`;

  // Less Example
  const lessExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Less Example</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
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
      color: #3b82f6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Less Compiled Example - Operations & Mixins */
    .panel {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 24px;
      border-radius: 12px;
      margin-bottom: 20px;
      border-left: 4px solid #3b82f6;
      transition: all 0.3s ease;
    }
    
    .panel:hover {
      border-left-width: 8px;
      padding-left: 28px;
    }
    
    @media (prefers-color-scheme: dark) {
      .panel {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        border-left-color: #60a5fa;
      }
    }
    
    .panel-heading {
      color: #1e40af;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .panel-heading {
        color: #93c5fd;
      }
    }
    
    .feature-list {
      list-style: none;
      margin-top: 20px;
    }
    
    .feature-item {
      padding: 12px;
      background: white;
      border-radius: 8px;
      margin-bottom: 8px;
      border: 1px solid #bfdbfe;
      transition: all 0.3s ease;
    }
    
    .feature-item:hover {
      background: #eff6ff;
      border-color: #3b82f6;
      transform: translateX(8px);
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-item {
        background: #0f172a;
        border-color: #334155;
        color: #cbd5e0;
      }
      
      .feature-item:hover {
        background: #1e293b;
        border-color: #60a5fa;
      }
    }
    
    .code-example {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-top: 20px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-example {
        background: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
      }
    }
    
    .variable {
      color: #3b82f6;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📘 Less Preprocessor</h1>
    <p class="subtitle">Dynamic CSS with variables, mixins, and operations</p>
    
    <div class="panel">
      <h3 class="panel-heading">🎯 Less Features</h3>
      
      <ul class="feature-list">
        <li class="feature-item">📦 <strong>Variables:</strong> Store reusable values (@primary-color)</li>
        <li class="feature-item">🔄 <strong>Operations:</strong> Perform math operations (width: 100% / 3)</li>
        <li class="feature-item">🎨 <strong>Mixins:</strong> Reusable CSS declarations</li>
        <li class="feature-item">⚡ <strong>Functions:</strong> Built-in color functions</li>
      </ul>
    </div>
    
    <div class="code-example">
      <div style="color: #94a3b8;">// Less Source Code</div>
      <div><span class="variable">@base-color</span>: #3b82f6;</div>
      <div><span class="variable">@spacing</span>: 24px;</div>
      <div style="margin-top: 10px;">.panel {</div>
      <div style="margin-left: 20px;">padding: <span class="variable">@spacing</span>;</div>
      <div style="margin-left: 20px;">background: lighten(<span class="variable">@base-color</span>, 30%);</div>
      <div style="margin-left: 20px;">border-left: 4px solid <span class="variable">@base-color</span>;</div>
      <div>}</div>
    </div>
  </div>
</body>
</html>`;

  // Stylus Example
  const stylusExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stylus Example</title>
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
    
    /* Stylus Compiled Example - Flexible Syntax */
    .box {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 24px;
      border-radius: 16px;
      margin-bottom: 20px;
      border: 3px solid #10b981;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .box:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 32px rgba(16, 185, 129, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        border-color: #34d399;
      }
    }
    
    .box-title {
      color: #047857;
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-title {
        color: #6ee7b7;
      }
    }
    
    .box-text {
      color: #64748b;
      line-height: 1.8;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .box-text {
        color: #cbd5e0;
      }
    }
    
    .badge-group {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    .badge {
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      background: #10b981;
      color: white;
    }
    
    .badge:nth-child(2) {
      background: #059669;
    }
    
    .badge:nth-child(3) {
      background: #047857;
    }
    
    @media (prefers-color-scheme: dark) {
      .badge {
        background: #34d399;
        color: #064e3b;
      }
      
      .badge:nth-child(2) {
        background: #6ee7b7;
      }
      
      .badge:nth-child(3) {
        background: #a7f3d0;
      }
    }
    
    .syntax-demo {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-top: 20px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .syntax-demo {
        background: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
      }
    }
    
    .keyword {
      color: #10b981;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Stylus Preprocessor</h1>
    <p class="subtitle">Flexible, powerful, and feature-rich CSS preprocessor</p>
    
    <div class="box">
      <h3 class="box-title">🎨 Stylus Flexibility</h3>
      <p class="box-text">
        Stylus offers the most flexible syntax of all preprocessors. You can write CSS with or without 
        braces, semicolons, and colons. It's Python-inspired and highly expressive!
      </p>
      
      <div class="badge-group">
        <span class="badge">Flexible Syntax</span>
        <span class="badge">Built-in Functions</span>
        <span class="badge">Powerful Operations</span>
      </div>
    </div>
    
    <div class="syntax-demo">
      <div style="color: #94a3b8;">// Stylus Source (Optional Syntax)</div>
      <div><span class="keyword">primary-color</span> = #10b981</div>
      <div><span class="keyword">box-padding</span> = 24px</div>
      <div style="margin-top: 10px;">.box</div>
      <div style="margin-left: 20px;">padding <span class="keyword">box-padding</span></div>
      <div style="margin-left: 20px;">background lighten(<span class="keyword">primary-color</span>, 30%)</div>
      <div style="margin-left: 20px;">border 3px solid <span class="keyword">primary-color</span></div>
      <div style="margin-top: 10px;">// No braces, semicolons, or colons needed!</div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Code}
        category="CSS · Advanced Tools"
        title="CSS Preprocessors"
        description="Write more maintainable CSS with variables, nesting, mixins, and functions"
        colorTheme="purple"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Code className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are CSS Preprocessors?
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            🚀 Supercharge your CSS with programming features like variables, functions, and mixins!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Main Demo */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 From Preprocessor to CSS
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">📝 SCSS Source</div>
                    <div className="relative h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border-2 border-purple-200 dark:border-purple-700 overflow-hidden">
                      <pre className="text-xs text-left">
                        <code>{`$color: #667eea;
$size: 24px;

.btn {
  padding: $size;
  &:hover {
    color: $color;
  }
}`}</code>
                      </pre>
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 mt-2 font-medium">✨ Enhanced Syntax</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">⚡ Compiled CSS</div>
                    <div className="relative h-32 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border-2 border-green-200 dark:border-green-700 overflow-hidden">
                      <pre className="text-xs text-left">
                        <code>{`.btn {
  padding: 24px;
}
.btn:hover {
  color: #667eea;
}`}</code>
                      </pre>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">✅ Browser-Ready</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-200/50">
                  <div className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    💡 Key Benefit
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Write DRY (Don't Repeat Yourself) code with variables, nesting, and mixins. The preprocessor compiles it to standard CSS!
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  🎨 Common Features
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Hash className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Variables</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Store reusable values</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <TreePine className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Nesting</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Cleaner structure</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Component className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Mixins</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Reusable CSS blocks</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
                    <Layers className="w-6 h-6 text-orange-500" />
                    <div>
                      <div className="font-semibold text-orange-700 dark:text-orange-300 text-sm">Functions</div>
                      <div className="text-xs text-orange-600 dark:text-orange-400">Dynamic values</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">⚡</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">CSS Preprocessors</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Better Organization
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Code Reusability
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Maintainability
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Developer Experience
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Choose based on your project: Sass for features, Less for simplicity, Stylus for flexibility
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
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Preprocessor Compilation</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">/* 🎨 Sass/SCSS Syntax */</div>
              <div className="text-purple-700 dark:text-purple-400">$primary-color</div>
              <div className="text-gray-900 dark:text-white">: <span className="text-blue-600 dark:text-blue-400">#667eea</span>;</div>
              <div className="text-gray-900 dark:text-white">.button {'{'}</div>
              <div className="text-gray-900 dark:text-white">  <span className="text-green-600 dark:text-green-400">background</span>: <span className="text-purple-700 dark:text-purple-400">$primary-color</span>;</div>
              <div className="text-gray-900 dark:text-white">{'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PREPROCESSOR SELECTOR */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Package className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Choose Your Preprocessor
          </CardTitle>
          <CardDescription>
            Explore examples from popular CSS preprocessors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {preprocessors.map((prep) => (
              <div
                key={prep.id}
                onClick={() => setSelectedPreprocessor(prep.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPreprocessor === prep.id
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${prep.color} rounded-lg flex items-center justify-center`}>
                    <prep.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">{prep.name}</h4>
                </div>
                <div className="space-y-1">
                  {prep.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Display selected example */}
          {selectedPreprocessor === 'sass' && (
            <FrontendCodePreview
              html={sassExample}
              title="Sass/SCSS Example - Variables & Nesting"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedPreprocessor === 'less' && (
            <FrontendCodePreview
              html={lessExample}
              title="Less Example - Operations & Functions"
              colorTheme="blue"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedPreprocessor === 'stylus' && (
            <FrontendCodePreview
              html={stylusExample}
              title="Stylus Example - Flexible Syntax"
              colorTheme="green"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* COMPARISON TABLE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            Quick Comparison
          </CardTitle>
          <CardDescription>
            Choose the right preprocessor for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="text-center p-3 font-semibold text-pink-600 dark:text-pink-400">Sass/SCSS</th>
                  <th className="text-center p-3 font-semibold text-blue-600 dark:text-blue-400">Less</th>
                  <th className="text-center p-3 font-semibold text-green-600 dark:text-green-400">Stylus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Variables</td>
                  <td className="text-center p-3">✅ $var</td>
                  <td className="text-center p-3">✅ @var</td>
                  <td className="text-center p-3">✅ var</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Nesting</td>
                  <td className="text-center p-3">✅</td>
                  <td className="text-center p-3">✅</td>
                  <td className="text-center p-3">✅</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Mixins</td>
                  <td className="text-center p-3">✅ @mixin</td>
                  <td className="text-center p-3">✅ .mixin()</td>
                  <td className="text-center p-3">✅ mixin()</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Functions</td>
                  <td className="text-center p-3">✅ @function</td>
                  <td className="text-center p-3">✅ Built-in</td>
                  <td className="text-center p-3">✅ function</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Inheritance</td>
                  <td className="text-center p-3">✅ @extend</td>
                  <td className="text-center p-3">✅ :extend</td>
                  <td className="text-center p-3">✅ @extend</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700 dark:text-gray-300">Syntax Flexibility</td>
                  <td className="text-center p-3">⭐⭐</td>
                  <td className="text-center p-3">⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Keep nesting shallow</strong> - Max 3-4 levels to avoid specificity issues</li>
            <li><strong>Use variables</strong> - Define colors, spacing, and breakpoints as variables</li>
            <li><strong>Create mixins</strong> - For repeated patterns like buttons and cards</li>
            <li><strong>Organize files</strong> - Split into partials (_variables, _mixins, _layout)</li>
            <li><strong>Use functions wisely</strong> - For calculations and color manipulations</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* SETUP INFO */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Installation & Setup</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <div><strong>Sass:</strong> <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">npm install -D sass</code></div>
            <div><strong>Less:</strong> <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">npm install -D less</code></div>
            <div><strong>Stylus:</strong> <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">npm install -D stylus</code></div>
            <p className="text-sm mt-3">Most modern build tools (Vite, Webpack, Parcel) have built-in support for all three preprocessors!</p>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
