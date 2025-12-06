'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Gem, Code, FileCode, Layers, CheckCircle, AlertTriangle, Info, Sparkles, Zap, Settings } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface WhatIsSassProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function WhatIsSass({ onOpenWebPlayground }: WhatIsSassProps) {
  
  const comparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS vs Sass</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
      }
    }
    
    .container {
      max-width: 1100px;
      width: 100%;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 30px;
    }
    
    @media (max-width: 768px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
    
    .box {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    .label {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 15px;
    }
    
    .css-label {
      background: #fee2e2;
      color: #991b1b;
    }
    
    @media (prefers-color-scheme: dark) {
      .css-label {
        background: #7f1d1d;
        color: #fca5a5;
      }
    }
    
    .sass-label {
      background: #fce7f3;
      color: #be185d;
    }
    
    @media (prefers-color-scheme: dark) {
      .sass-label {
        background: #831843;
        color: #fbcfe8;
      }
    }
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #1f2937;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #e2e8f0;
      }
    }
    
    .code-block {
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.6;
      overflow-x: auto;
      margin-top: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-block {
        background: #0f172a;
      }
    }
    
    .comment { color: #64748b; }
    .selector { color: #fbbf24; }
    .property { color: #a3e635; }
    .value { color: #fb7185; }
    .variable { color: #60a5fa; }
    .keyword { color: #c4b5fd; }
    
    .note {
      margin-top: 15px;
      padding: 12px;
      background: #fef3c7;
      border-radius: 6px;
      font-size: 14px;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #78350f;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="comparison">
      <div class="box">
        <span class="label css-label">❌ Plain CSS - Repetitive</span>
        <h2>Traditional CSS</h2>
        <div class="code-block">
<span class="comment">/* Repeated values */</span>
<span class="selector">.button</span> {
  <span class="property">background</span>: <span class="value">#ec4899</span>;
  <span class="property">padding</span>: <span class="value">10px 20px</span>;
  <span class="property">border-radius</span>: <span class="value">8px</span>;
}

<span class="selector">.button:hover</span> {
  <span class="property">background</span>: <span class="value">#db2777</span>;
}

<span class="selector">.button-large</span> {
  <span class="property">background</span>: <span class="value">#ec4899</span>;
  <span class="property">padding</span>: <span class="value">15px 30px</span>;
  <span class="property">border-radius</span>: <span class="value">8px</span>;
}
        </div>
        <div class="note">
          ⚠️ Hard to maintain, lots of repetition!
        </div>
      </div>
      
      <div class="box">
        <span class="label sass-label">✅ Sass/SCSS - DRY & Clean</span>
        <h2>With Sass Power!</h2>
        <div class="code-block">
<span class="comment">// Variables - Define once!</span>
<span class="variable">$primary</span>: <span class="value">#ec4899</span>;
<span class="variable">$spacing</span>: <span class="value">10px 20px</span>;

<span class="selector">.button</span> {
  <span class="property">background</span>: <span class="variable">$primary</span>;
  <span class="property">padding</span>: <span class="variable">$spacing</span>;
  <span class="property">border-radius</span>: <span class="value">8px</span>;
  
  <span class="comment">// Nesting!</span>
  <span class="keyword">&:hover</span> {
    <span class="property">background</span>: <span class="keyword">darken</span>(<span class="variable">$primary</span>, <span class="value">5%</span>);
  }
  
  <span class="keyword">&-large</span> {
    <span class="property">padding</span>: <span class="value">15px 30px</span>;
  }
}
        </div>
        <div class="note">
          ✨ Clean, maintainable, and powerful!
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const variablesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sass Variables</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #3b82f6;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #60a5fa; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .code-box {
      background: #1e293b;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      font-family: monospace;
      color: #e2e8f0;
      font-size: 14px;
      line-height: 1.8;
    }
    
    .variable { color: #60a5fa; }
    .value { color: #fb7185; }
    .comment { color: #64748b; }
    
    .buttons {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
      margin: 30px 0;
    }
    
    .btn {
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .btn:hover {
      transform: translateY(-2px);
    }
    
    .btn-primary {
      background: #3b82f6;
      color: white;
    }
    
    .btn-success {
      background: #10b981;
      color: white;
    }
    
    .btn-danger {
      background: #ef4444;
      color: white;
    }
    
    .note {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .note { background: #78350f; color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💎 Sass Variables</h1>
    <p class="subtitle">Define once, use everywhere!</p>
    
    <div class="code-box">
<span class="comment">// Define your variables</span>
<span class="variable">$primary-color</span>: <span class="value">#3b82f6</span>;
<span class="variable">$success-color</span>: <span class="value">#10b981</span>;
<span class="variable">$danger-color</span>: <span class="value">#ef4444</span>;
<span class="variable">$spacing</span>: <span class="value">15px 30px</span>;

<span class="comment">// Use them anywhere!</span>
<span class="selector">.btn-primary</span> {
  <span class="property">background</span>: <span class="variable">$primary-color</span>;
  <span class="property">padding</span>: <span class="variable">$spacing</span>;
}
    </div>
    
    <div class="buttons">
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-success">Success Button</button>
      <button class="btn btn-danger">Danger Button</button>
    </div>
    
    <div class="note">
      ✨ Change $primary-color once and update all buttons instantly!
    </div>
  </div>
</body>
</html>`;

  const nestingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sass Nesting</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #065f46 0%, #064e3b 100%); }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #10b981;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #6ee7b7; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #10b981;
      margin: 20px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);
        border-color: #6ee7b7;
      }
    }
    
    .card h2 {
      color: #065f46;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card h2 { color: #a7f3d0; }
    }
    
    .card p {
      color: #047857;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card p { color: #d1fae5; }
    }
    
    .card button {
      background: #10b981;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    .card button:hover {
      background: #059669;
    }
    
    .code-box {
      background: #1e293b;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      font-family: monospace;
      color: #e2e8f0;
      font-size: 13px;
      line-height: 1.8;
    }
    
    .selector { color: #fbbf24; }
    .property { color: #a3e635; }
    .value { color: #fb7185; }
    .keyword { color: #c4b5fd; }
    .comment { color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🪆 Sass Nesting</h1>
    <p class="subtitle">Mirror your HTML structure in CSS!</p>
    
    <div class="code-box">
<span class="comment">// Nested Sass - So clean!</span>
<span class="selector">.card</span> {
  <span class="property">padding</span>: <span class="value">25px</span>;
  <span class="property">border-radius</span>: <span class="value">12px</span>;
  
  <span class="comment">// Nested selector</span>
  <span class="selector">h2</span> {
    <span class="property">color</span>: <span class="value">#065f46</span>;
    <span class="property">margin-bottom</span>: <span class="value">10px</span>;
  }
  
  <span class="selector">p</span> {
    <span class="property">color</span>: <span class="value">#047857</span>;
  }
  
  <span class="comment">// & references parent</span>
  <span class="keyword">&:hover</span> {
    <span class="property">transform</span>: <span class="value">scale(1.02)</span>;
  }
}
    </div>
    
    <div class="card">
      <h2>Card Title</h2>
      <p>This card uses nested Sass for clean, organized styles!</p>
      <button>Learn More</button>
    </div>
  </div>
</body>
</html>`;

  const mixinsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sass Mixins</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%); }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .code-box {
      background: #1e293b;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      font-family: monospace;
      color: #e2e8f0;
      font-size: 13px;
      line-height: 1.8;
    }
    
    .boxes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .box {
      padding: 30px 20px;
      border-radius: 12px;
      text-align: center;
      font-weight: 700;
      color: white;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .box:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }
    
    .box-primary {
      background: #3b82f6;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .box-success {
      background: #10b981;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    .box-danger {
      background: #ef4444;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
    
    .box-warning {
      background: #f59e0b;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
    }
    
    .keyword { color: #c4b5fd; }
    .selector { color: #fbbf24; }
    .property { color: #a3e635; }
    .value { color: #fb7185; }
    .comment { color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔧 Sass Mixins</h1>
    <p class="subtitle">Reusable style blocks - like functions!</p>
    
    <div class="code-box">
<span class="comment">// Define a mixin once</span>
<span class="keyword">@mixin</span> <span class="selector">box-style</span>(<span class="value">$color</span>) {
  <span class="property">padding</span>: <span class="value">30px 20px</span>;
  <span class="property">background</span>: <span class="value">$color</span>;
  <span class="property">box-shadow</span>: <span class="value">0 4px 12px rgba($color, 0.3)</span>;
  <span class="property">border-radius</span>: <span class="value">12px</span>;
  
  <span class="keyword">&:hover</span> {
    <span class="property">transform</span>: <span class="value">translateY(-5px)</span>;
  }
}

<span class="comment">// Use it everywhere!</span>
<span class="selector">.box-primary</span> { <span class="keyword">@include</span> <span class="selector">box-style</span>(<span class="value">#3b82f6</span>); }
<span class="selector">.box-success</span> { <span class="keyword">@include</span> <span class="selector">box-style</span>(<span class="value">#10b981</span>); }
    </div>
    
    <div class="boxes">
      <div class="box box-primary">Primary</div>
      <div class="box box-success">Success</div>
      <div class="box box-danger">Danger</div>
      <div class="box box-warning">Warning</div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Gem}
        category="Sass/SCSS · Introduction"
        title="What is Sass/SCSS?"
        description="CSS with superpowers - variables, nesting, mixins, and more!"
        colorTheme="pink"
      />

      {/* What is Sass/SCSS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Gem className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What is Sass/SCSS?
          </CardTitle>
          <CardDescription>
            A powerful CSS preprocessor that makes writing styles easier and more maintainable
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Sass</strong> (Syntactically Awesome Style Sheets) is a <strong className="text-pink-600 dark:text-pink-400">CSS preprocessor</strong> - 
            it's like CSS with extra programming features! You write Sass code, and it gets compiled into regular CSS that browsers can understand.
          </p>
          
          <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 dark:from-pink-950/20 dark:via-rose-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <div className="flex items-center gap-4 justify-center text-center">
              <div>
                <div className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">Write Sass</div>
                <div className="text-xs text-pink-600 dark:text-pink-400">(Enhanced CSS)</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl">→</div>
                <div className="text-xs font-semibold text-pink-600 dark:text-pink-400 mt-1">Compile</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300 mb-1">Get CSS</div>
                <div className="text-xs text-green-600 dark:text-green-400">(Browser-ready)</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2 flex items-center gap-2">
                <Code className="h-4 w-4" />
                SCSS Syntax (Recommended)
              </h4>
              <p className="text-sm text-pink-700 dark:text-pink-300">
                Sassy CSS - uses brackets and semicolons just like regular CSS. 
                <strong> Every valid CSS is valid SCSS!</strong>
              </p>
              <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded mt-2 inline-block">
                .scss file extension
              </code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                Sass Syntax (Original)
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Indented syntax - uses indentation instead of brackets. 
                More minimal but less common today.
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded mt-2 inline-block">
                .sass file extension
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Sass Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle>Why Use Sass?</CardTitle>
          <CardDescription>
            Powerful features that make CSS development faster and more maintainable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Variables</h4>
              <p className="text-sm text-muted-foreground">
                Store colors, fonts, spacing - reuse everywhere!
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <Layers className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Nesting</h4>
              <p className="text-sm text-muted-foreground">
                Write CSS that mirrors your HTML structure
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Settings className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Mixins</h4>
              <p className="text-sm text-muted-foreground">
                Create reusable style blocks like functions
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <Code className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-2">Functions</h4>
              <p className="text-sm text-muted-foreground">
                Built-in color manipulation and math operations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            The Sass Advantage
          </CardTitle>
          <CardDescription>
            See how Sass makes your CSS cleaner and more powerful
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={comparisonExample}
            title="CSS vs Sass/SCSS Side-by-Side"
            colorTheme="pink"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">💎 What Sass Gives You:</h4>
            <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Variables</strong> - Define once, use everywhere (change color in one place!)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Nesting</strong> - Organize code to match HTML structure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Functions</strong> - darken(), lighten(), and more built-in helpers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>DRY Code</strong> - Don't Repeat Yourself - write less, do more!</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Variables Feature */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Feature 1: Variables ($)
          </CardTitle>
          <CardDescription>
            Store values and reuse them throughout your stylesheets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={variablesExample}
            title="Sass Variables in Action"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Why Variables Matter:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Change one value, update everywhere instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Maintain consistency across your entire website</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Easy theme changes and brand color updates</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Nesting Feature */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Feature 2: Nesting
          </CardTitle>
          <CardDescription>
            Write CSS that mirrors your HTML structure for better organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={nestingExample}
            title="Sass Nesting Example"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">Benefits of Nesting:</h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Cleaner, more readable code structure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Easier to understand component relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Use & to reference parent selector</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Mixins Feature */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Feature 3: Mixins (@mixin)
          </CardTitle>
          <CardDescription>
            Create reusable blocks of styles with parameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={mixinsExample}
            title="Sass Mixins Demo"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Power of Mixins:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Write once, use many times with @include</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Accept parameters for flexible styling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Perfect for responsive design patterns</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* How Sass Works */}
      <Card>
        <CardHeader>
          <CardTitle>How Sass Works</CardTitle>
          <CardDescription>
            Understanding the compilation process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">1. Write Sass</h4>
              <p className="text-sm text-pink-700 dark:text-pink-300">
                Create .scss files with variables, nesting, mixins
              </p>
              <code className="text-xs bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded mt-2 inline-block">
                styles.scss
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">2. Compile</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Sass compiler converts to plain CSS
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded mt-2 inline-block">
                sass styles.scss styles.css
              </code>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">3. Use in Browser</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Link the compiled CSS file to HTML
              </p>
              <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded mt-2 inline-block">
                styles.css
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Sass Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use SCSS syntax</strong> - More familiar for CSS developers</li>
            <li><strong>Organize with partials</strong> - Split code into _partial.scss files</li>
            <li><strong>Name variables clearly</strong> - $primary-color not $color1</li>
            <li><strong>Don't over-nest</strong> - Keep nesting to 3-4 levels maximum</li>
            <li><strong>Create mixins for patterns</strong> - Reuse common style blocks</li>
            <li><strong>Use variables for consistency</strong> - Colors, spacing, fonts</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Compilation Required */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Important: Compilation Required</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          Browsers <strong>cannot</strong> read .scss files directly! You must compile Sass to CSS first. 
          Use tools like <strong>Dart Sass</strong> (via npm), <strong>VS Code extensions</strong> (Live Sass Compiler), 
          or build tools like <strong>Vite/Webpack</strong>. Once compiled, link the .css file to your HTML.
        </AlertDescription>
      </Alert>
    </div>
  );
}
