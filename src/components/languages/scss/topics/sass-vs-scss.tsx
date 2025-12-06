'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Code2, CheckCircle, Sparkles, Info, ArrowRightLeft, Zap, FileCode } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassVsScssyntaxProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassVsScssSyntax({ onOpenWebPlayground }: SassVsScssyntaxProps) {
  const [selectedSyntax, setSelectedSyntax] = useState('scss');

  const scssExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SCSS Syntax Demo</title>
  <style>
    /* Reset */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    /*
      🎨 SCSS Syntax (CSS-like):
      
      $primary: #ec4899;
      $spacing: 20px;
      
      .card {
        padding: $spacing;
        background: $primary;
        
        .title {
          font-size: 24px;
        }
        
        &:hover {
          transform: scale(1.05);
        }
      }
    */
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #9f1239 0%, #881337 100%); }
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
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .feature-card {
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #ec4899;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-card {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
        border-color: #f9a8d4;
      }
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(236, 72, 153, 0.3);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 10px;
      text-align: center;
    }
    
    .feature-title {
      font-weight: 700;
      color: #be185d;
      text-align: center;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-title { color: #fbcfe8; }
    }
    
    .feature-desc {
      text-align: center;
      color: #831843;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-desc { color: #fce7f3; }
    }
    
    .highlight-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-box {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24;
      }
    }
    
    .highlight-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-title { color: #fde68a; }
    }
    
    .highlight-text {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-text { color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💎 SCSS Syntax</h1>
    <p class="subtitle">CSS-like syntax with braces { } and semicolons ;</p>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">✅</div>
        <div class="feature-title">CSS Compatible</div>
        <div class="feature-desc">Every valid CSS file is valid SCSS</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <div class="feature-title">Easy Learning</div>
        <div class="feature-desc">Familiar syntax for CSS developers</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">More Popular</div>
        <div class="feature-desc">Most widely used Sass syntax</div>
      </div>
    </div>
    
    <div class="highlight-box">
      <div class="highlight-title">📌 SCSS (Sassy CSS)</div>
      <p class="highlight-text">
        SCSS uses braces {}, semicolons ;, and looks just like CSS but with superpowers! 
        File extension is <strong>.scss</strong>. This is the recommended syntax for beginners 
        because you can write plain CSS and gradually add Sass features.
      </p>
    </div>
  </div>
</body>
</html>`;

  const sassExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sass Syntax Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    /*
      🎨 Sass Syntax (Indented):
      
      $primary: #ec4899
      $spacing: 20px
      
      .card
        padding: $spacing
        background: $primary
        
        .title
          font-size: 24px
        
        &:hover
          transform: scale(1.05)
    */
    
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
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .feature-card {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #8b5cf6;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-card {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
    }
    
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 10px;
      text-align: center;
    }
    
    .feature-title {
      font-weight: 700;
      color: #6b21a8;
      text-align: center;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-title { color: #ddd6fe; }
    }
    
    .feature-desc {
      text-align: center;
      color: #7c3aed;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-desc { color: #ede9fe; }
    }
    
    .highlight-box {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-left: 4px solid #f59e0b;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-box {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-left-color: #fbbf24;
      }
    }
    
    .highlight-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 1.1rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-title { color: #fde68a; }
    }
    
    .highlight-text {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-text { color: #fef3c7; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Sass Syntax</h1>
    <p class="subtitle">Indentation-based syntax (no braces or semicolons)</p>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <div class="feature-title">Minimal Syntax</div>
        <div class="feature-desc">No braces {}, no semicolons ;</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">📐</div>
        <div class="feature-title">Indentation</div>
        <div class="feature-desc">Uses whitespace for structure</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <div class="feature-title">Original</div>
        <div class="feature-desc">The first Sass syntax</div>
      </div>
    </div>
    
    <div class="highlight-box">
      <div class="highlight-title">📌 Sass (Indented Syntax)</div>
      <p class="highlight-text">
        Sass uses indentation instead of braces and doesn't require semicolons. 
        File extension is <strong>.sass</strong>. This syntax is more minimal but less 
        popular than SCSS. It's inspired by Haml and Python's whitespace-based syntax.
      </p>
    </div>
  </div>
</body>
</html>`;

  const comparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Syntax Comparison</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #0e7490 0%, #155e75 100%); }
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container { background: #1e293b; color: #e2e8f0; }
    }
    
    h1 {
      color: #06b6d4;
      text-align: center;
      margin-bottom: 10px;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #67e8f9; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 30px 0;
    }
    
    @media (max-width: 768px) {
      .comparison { grid-template-columns: 1fr; }
    }
    
    .syntax-block {
      background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);
      padding: 20px;
      border-radius: 12px;
      border: 3px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .syntax-block {
        background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
        border-color: #67e8f9;
      }
    }
    
    .syntax-title {
      font-weight: 700;
      color: #0e7490;
      margin-bottom: 15px;
      font-size: 1.2rem;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .syntax-title { color: #a5f3fc; }
    }
    
    .code-block {
      background: #0f172a;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      color: #e2e8f0;
      line-height: 1.8;
      overflow-x: auto;
    }
    
    .comment { color: #64748b; }
    .variable { color: #a5f3fc; }
    .selector { color: #fbbf24; }
    .property { color: #a3e635; }
    .value { color: #fb7185; }
    .keyword { color: #c4b5fd; }
    
    .note {
      margin-top: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: #78350f;
      border-left: 4px solid #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        color: #fef3c7;
        border-left-color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>↔️ Side-by-Side Comparison</h1>
    <p class="subtitle">Same functionality, different syntax</p>
    
    <div class="comparison">
      <div class="syntax-block">
        <div class="syntax-title">💎 SCSS Syntax (.scss)</div>
        <div class="code-block">
<span class="comment">// Variables</span>
<span class="variable">$primary</span>: <span class="value">#ec4899</span>;
<span class="variable">$spacing</span>: <span class="value">20px</span>;

<span class="comment">// Nesting</span>
<span class="selector">.card</span> {
  <span class="property">padding</span>: <span class="variable">$spacing</span>;
  <span class="property">background</span>: <span class="variable">$primary</span>;
  
  <span class="selector">.title</span> {
    <span class="property">font-size</span>: <span class="value">24px</span>;
  }
  
  <span class="keyword">&:hover</span> {
    <span class="property">transform</span>: <span class="value">scale(1.05)</span>;
  }
}
        </div>
      </div>
      
      <div class="syntax-block">
        <div class="syntax-title">📝 Sass Syntax (.sass)</div>
        <div class="code-block">
<span class="comment">// Variables</span>
<span class="variable">$primary</span>: <span class="value">#ec4899</span>
<span class="variable">$spacing</span>: <span class="value">20px</span>

<span class="comment">// Nesting</span>
<span class="selector">.card</span>
  <span class="property">padding</span>: <span class="variable">$spacing</span>
  <span class="property">background</span>: <span class="variable">$primary</span>
  
  <span class="selector">.title</span>
    <span class="property">font-size</span>: <span class="value">24px</span>
  
  <span class="keyword">&:hover</span>
    <span class="property">transform</span>: <span class="value">scale(1.05)</span>
        </div>
      </div>
    </div>
    
    <div class="note">
      💡 Both compile to the exact same CSS! Choose SCSS for easier learning and CSS compatibility.
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Code2}
        category="CSS · Preprocessors"
        title="Sass vs SCSS Syntax"
        description="Understanding the two syntax styles: SCSS (Sassy CSS) and Sass (Indented)"
        colorTheme="pink"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative overflow-hidden">
          <CardTitle className="flex items-center gap-3 text-2xl text-pink-700 dark:text-pink-300">
            <div className="relative">
              <ArrowRightLeft className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            Two Syntaxes, One Compiler
          </CardTitle>
          <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
            🎯 Choose between CSS-like SCSS or minimal Sass indented syntax!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-pink-400 dark:hover:border-pink-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎨 Syntax Comparison
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">SCSS (.scss)</div>
                    <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border-2 border-pink-400 dark:border-pink-500 p-3">
                      <div className="text-xs font-mono text-left space-y-1">
                        <div><span className="text-pink-600">$color</span>: <span className="text-blue-600">#ec4899</span>;</div>
                        <div><span className="text-amber-600">.btn</span> {'{'}</div>
                        <div className="ml-2"><span className="text-green-600">color</span>: <span className="text-pink-600">$color</span>;</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">✅ CSS-like</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Sass (.sass)</div>
                    <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border-2 border-purple-400 dark:border-purple-500 p-3">
                      <div className="text-xs font-mono text-left space-y-1">
                        <div><span className="text-purple-600">$color</span>: <span className="text-blue-600">#ec4899</span></div>
                        <div><span className="text-amber-600">.btn</span></div>
                        <div className="ml-2"><span className="text-green-600">color</span>: <span className="text-purple-600">$color</span></div>
                      </div>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">✨ Minimal</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200/50">
                  <div className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                    💡 Same Power, Different Style
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Both syntaxes compile to identical CSS and have the same features! 
                    SCSS is recommended for beginners because it's fully compatible with CSS.
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <FileCode className="w-5 h-5" />
                  📋 Key Differences
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                    <Code2 className="w-6 h-6 text-pink-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm mb-1">Braces & Semicolons</div>
                      <div className="text-xs text-pink-600 dark:text-pink-400">
                        <strong>SCSS:</strong> Uses {' { } '} and ; (like CSS) <br />
                        <strong>Sass:</strong> No braces or semicolons
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <FileCode className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm mb-1">File Extension</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">
                        <strong>SCSS:</strong> .scss <br />
                        <strong>Sass:</strong> .sass
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-100 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2">📝</div>
                  </div>
                  <div className="font-bold text-lg text-pink-700 dark:text-pink-300">Recommendation</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Use SCSS
                    </div>
                    <div className="text-xs text-pink-600 dark:text-pink-400">
                      Most popular, CSS-compatible, easier to learn
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    You can convert between syntaxes using sass-convert tool!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SYNTAX EXAMPLES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Live Syntax Examples
          </CardTitle>
          <CardDescription>
            Compare both syntaxes with interactive demos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6 flex-wrap">
            <button
              onClick={() => setSelectedSyntax('scss')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedSyntax === 'scss'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              SCSS Syntax
            </button>
            <button
              onClick={() => setSelectedSyntax('sass')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedSyntax === 'sass'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Sass Syntax
            </button>
            <button
              onClick={() => setSelectedSyntax('comparison')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedSyntax === 'comparison'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Side-by-Side
            </button>
          </div>

          {selectedSyntax === 'scss' && (
            <FrontendCodePreview
              html={scssExample}
              title="SCSS Syntax Demo"
              colorTheme="pink"
              styleLanguage="scss"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedSyntax === 'sass' && (
            <FrontendCodePreview
              html={sassExample}
              title="Sass Syntax Demo"
              colorTheme="purple"
              styleLanguage="scss"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedSyntax === 'comparison' && (
            <FrontendCodePreview
              html={comparisonExample}
              title="Syntax Comparison"
              colorTheme="cyan"
              styleLanguage="scss"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* DETAILED COMPARISON */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Comparison</CardTitle>
          <CardDescription>
            Feature-by-feature breakdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-pink-200 dark:border-pink-800">
                  <th className="text-left p-3 font-bold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="text-left p-3 font-bold text-pink-700 dark:text-pink-300">SCSS (.scss)</th>
                  <th className="text-left p-3 font-bold text-purple-700 dark:text-purple-300">Sass (.sass)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Braces</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ Uses { }</td>
                  <td className="p-3 text-red-600 dark:text-red-400">❌ No braces</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Semicolons</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ Required ;</td>
                  <td className="p-3 text-red-600 dark:text-red-400">❌ Not allowed</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Indentation</td>
                  <td className="p-3">Optional (style choice)</td>
                  <td className="p-3 text-orange-600 dark:text-orange-400">⚠️ Required (strict)</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">CSS Compatibility</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ 100% compatible</td>
                  <td className="p-3 text-red-600 dark:text-red-400">❌ Not compatible</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Learning Curve</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ Easy (like CSS)</td>
                  <td className="p-3 text-orange-600 dark:text-orange-400">⚠️ Different style</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-semibold">Popularity</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ Most popular</td>
                  <td className="p-3">Less common</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Features</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ All features</td>
                  <td className="p-3 text-green-600 dark:text-green-400">✅ All features</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Which Syntax Should I Choose?</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Choose SCSS if:</strong> You're new to Sass, want CSS compatibility, or working in a team</li>
            <li><strong>Choose Sass if:</strong> You prefer minimal syntax and are comfortable with indentation-based languages (like Python)</li>
            <li><strong>Recommendation:</strong> Start with SCSS - it's more popular, easier to learn, and every CSS file is valid SCSS</li>
            <li><strong>Good news:</strong> You can mix both syntaxes in the same project using @use and @forward</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* INFO */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Learn More</AlertTitle>
        <AlertDescription>
          Both SCSS and Sass compile to the exact same CSS output and have identical features. The only difference 
          is the syntax style. SCSS (Sassy CSS) uses CSS-like syntax with braces and semicolons, while Sass uses 
          an indentation-based syntax similar to Python or Haml. Most developers prefer SCSS because it's easier 
          to learn and maintains CSS compatibility.
        </AlertDescription>
      </Alert>
    </div>
  );
}
