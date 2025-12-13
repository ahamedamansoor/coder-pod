'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Code, Zap, CheckCircle, Component, Sparkles, Target, 
  Layers, Package, FileCode, Settings, AlertTriangle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssInJsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssInJs({ onOpenWebPlayground }: CssInJsProps) {
  const [selectedLibrary, setSelectedLibrary] = useState('styled-components');

  const libraries = [
    {
      id: 'styled-components',
      name: 'styled-components',
      icon: Component,
      color: 'bg-pink-500',
      description: 'Most popular CSS-in-JS library',
      popularity: 'Very High'
    },
    {
      id: 'emotion',
      name: 'Emotion',
      icon: Sparkles,
      color: 'bg-purple-500',
      description: 'Performant and flexible',
      popularity: 'High'
    },
    {
      id: 'vanilla-extract',
      name: 'Vanilla Extract',
      icon: Package,
      color: 'bg-blue-500',
      description: 'Zero-runtime CSS-in-JS',
      popularity: 'Growing'
    },
    {
      id: 'linaria',
      name: 'Linaria',
      icon: Zap,
      color: 'bg-orange-500',
      description: 'Zero-runtime CSS-in-JS',
      popularity: 'Medium'
    }
  ];

  // Styled Components Example
  const styledComponentsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS-in-JS Styled Components</title>
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
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
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
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Styled Components Example - Dynamic Styling */
    .styled-button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      margin: 8px;
    }
    
    .styled-button.primary {
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
    }
    
    .styled-button.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
    }
    
    .styled-button.secondary {
      background: transparent;
      color: #ec4899;
      border: 2px solid #ec4899;
    }
    
    .styled-button.secondary:hover {
      background: #ec4899;
      color: white;
    }
    
    .styled-button.large {
      padding: 16px 32px;
      font-size: 1.125rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .styled-button.primary {
        background: linear-gradient(135deg, #f9a8d4 0%, #f472b6 100%);
        color: #1e293b;
      }
      
      .styled-button.secondary {
        color: #f9a8d4;
        border-color: #f9a8d4;
      }
      
      .styled-button.secondary:hover {
        background: #f9a8d4;
        color: #1e293b;
      }
    }
    
    .feature-card {
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 24px;
      border-radius: 12px;
      margin-bottom: 20px;
      border: 2px solid #f9a8d4;
      transition: all 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(236, 72, 153, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-card {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
        border-color: #f472b6;
      }
    }
    
    .card-title {
      color: #be185d;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-title {
        color: #fda4af;
      }
    }
    
    .feature-list {
      list-style: none;
      margin-top: 16px;
    }
    
    .feature-item {
      background: white;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 8px;
      border-left: 4px solid #ec4899;
      transition: all 0.3s ease;
    }
    
    .feature-item:hover {
      background: #fef2f2;
      transform: translateX(8px);
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-item {
        background: #0f172a;
        border-left-color: #f472b6;
        color: #cbd5e0;
      }
      
      .feature-item:hover {
        background: #1e293b;
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
    
    .keyword {
      color: #ec4899;
      font-weight: 600;
    }
    
    .button-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💅 styled-components</h1>
    <p class="subtitle">Write CSS directly in your JavaScript components</p>
    
    <div class="feature-card">
      <h3 class="card-title">🎨 Component-Scoped Styling</h3>
      
      <ul class="feature-list">
        <li class="feature-item">
          <strong>🎯 Automatic Scoping:</strong> Styles are automatically scoped to components
        </li>
        <li class="feature-item">
          <strong>⚡ Dynamic Props:</strong> Pass props to style components dynamically
        </li>
        <li class="feature-item">
          <strong>📦 No Class Names:</strong> No need to think about class naming conventions
        </li>
        <li class="feature-item">
          <strong>🔥 Theming:</strong> Built-in theming support with ThemeProvider
        </li>
      </ul>
      
      <div class="button-group">
        <button class="styled-button primary">Primary Button</button>
        <button class="styled-button secondary">Secondary Button</button>
        <button class="styled-button primary large">Large Primary</button>
      </div>
    </div>
    
    <div class="code-example">
      <div style="color: #94a3b8; margin-bottom: 10px;">// styled-components Syntax</div>
      <div><span class="keyword">import styled from</span> 'styled-components';</div>
      <div style="margin-top: 10px;"><span class="keyword">const Button</span> = styled.button\`</div>
      <div style="margin-left: 20px;">background: \${props => props.primary ? '#ec4899' : 'transparent'};</div>
      <div style="margin-left: 20px;">color: \${props => props.primary ? 'white' : '#ec4899'};</div>
      <div style="margin-left: 20px;">padding: 12px 24px;</div>
      <div style="margin-left: 20px;">border-radius: 8px;</div>
      <div>\`;</div>
      <div style="margin-top: 10px;">// Usage: &lt;Button primary&gt;Click Me&lt;/Button&gt;</div>
    </div>
  </div>
</body>
</html>`;

  // Emotion Example
  const emotionExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emotion CSS-in-JS</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #5b21b6 0%, #6b21a8 100%);
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
      color: #8b5cf6;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #c084fc;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Emotion Example - CSS Prop & Composition */
    .emotion-card {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      padding: 28px;
      border-radius: 16px;
      margin-bottom: 20px;
      border: 2px solid #c084fc;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .emotion-card:hover {
      transform: scale(1.02);
      box-shadow: 0 16px 40px rgba(139, 92, 246, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .emotion-card {
        background: linear-gradient(135deg, #5b21b6 0%, #6b21a8 100%);
        border-color: #a78bfa;
      }
    }
    
    .card-header {
      color: #6d28d9;
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-header {
        color: #ddd6fe;
      }
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    
    .benefit-box {
      background: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      border: 2px solid #ede9fe;
      transition: all 0.3s ease;
    }
    
    .benefit-box:hover {
      border-color: #8b5cf6;
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-box {
        background: #0f172a;
        border-color: #5b21b6;
        color: #cbd5e0;
      }
      
      .benefit-box:hover {
        border-color: #a78bfa;
      }
    }
    
    .benefit-icon {
      font-size: 2.5rem;
      margin-bottom: 12px;
      display: block;
    }
    
    .benefit-title {
      color: #6d28d9;
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-title {
        color: #c084fc;
      }
    }
    
    .benefit-desc {
      color: #64748b;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-desc {
        color: #94a3b8;
      }
    }
    
    .code-sample {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-top: 24px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-sample {
        background: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
      }
    }
    
    .syntax-highlight {
      color: #8b5cf6;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Emotion</h1>
    <p class="subtitle">Performant and flexible CSS-in-JS library</p>
    
    <div class="emotion-card">
      <h3 class="card-header">🚀 Emotion Benefits</h3>
      
      <div class="benefits-grid">
        <div class="benefit-box">
          <span class="benefit-icon">⚡</span>
          <div class="benefit-title">High Performance</div>
          <div class="benefit-desc">Optimized for speed with zero-config SSR</div>
        </div>
        
        <div class="benefit-box">
          <span class="benefit-icon">🎨</span>
          <div class="benefit-title">CSS Prop</div>
          <div class="benefit-desc">Style elements directly with the css prop</div>
        </div>
        
        <div class="benefit-box">
          <span class="benefit-icon">📦</span>
          <div class="benefit-title">Composition</div>
          <div class="benefit-desc">Easily compose and extend styles</div>
        </div>
        
        <div class="benefit-box">
          <span class="benefit-icon">🔥</span>
          <div class="benefit-title">Framework Agnostic</div>
          <div class="benefit-desc">Works with React, Vue, and more</div>
        </div>
      </div>
    </div>
    
    <div class="code-sample">
      <div style="color: #94a3b8; margin-bottom: 10px;">/** @jsxImportSource @emotion/react */</div>
      <div><span class="syntax-highlight">import</span> { css } <span class="syntax-highlight">from</span> '@emotion/react';</div>
      <div style="margin-top: 10px;"><span class="syntax-highlight">const</span> style = css\`</div>
      <div style="margin-left: 20px;">background: linear-gradient(135deg, #8b5cf6, #7c3aed);</div>
      <div style="margin-left: 20px;">padding: 20px;</div>
      <div style="margin-left: 20px;">border-radius: 12px;</div>
      <div>\`;</div>
      <div style="margin-top: 10px;">// Usage: &lt;div css={style}&gt;Styled!&lt;/div&gt;</div>
    </div>
  </div>
</body>
</html>`;

  // Zero-Runtime Example
  const zeroRuntimeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zero-Runtime CSS-in-JS</title>
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
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
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
    
    /* Zero-Runtime CSS - Extracted at Build Time */
    .hero-section {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 32px;
      border-radius: 16px;
      margin-bottom: 24px;
      border: 3px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .hero-section {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .hero-title {
      color: #1e40af;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 16px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .hero-title {
        color: #93c5fd;
      }
    }
    
    .comparison-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 24px;
    }
    
    .comparison-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      border: 2px solid #bfdbfe;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-card {
        background: #0f172a;
        border-color: #1e40af;
      }
    }
    
    .card-type {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 16px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    .card-type.runtime {
      background: #fef3c7;
      color: #92400e;
    }
    
    .card-type.zero-runtime {
      background: #dcfce7;
      color: #14532d;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-type.runtime {
        background: #78350f;
        color: #fde68a;
      }
      
      .card-type.zero-runtime {
        background: #14532d;
        color: #bbf7d0;
      }
    }
    
    .card-title-text {
      color: #1e40af;
      font-weight: 700;
      font-size: 1.3rem;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-title-text {
        color: #93c5fd;
      }
    }
    
    .pros-list {
      list-style: none;
      margin-top: 12px;
    }
    
    .pros-item {
      color: #16a34a;
      padding: 6px 0;
      font-size: 0.95rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .pros-item {
        color: #4ade80;
      }
    }
    
    .cons-item {
      color: #dc2626;
      padding: 6px 0;
      font-size: 0.95rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .cons-item {
        color: #f87171;
      }
    }
    
    .highlight-box {
      background: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 16px;
      border-radius: 8px;
      margin-top: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-box {
        background: #172554;
        border-left-color: #60a5fa;
      }
    }
    
    .highlight-title {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-title {
        color: #93c5fd;
      }
    }
    
    .highlight-text {
      color: #64748b;
      line-height: 1.7;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight-text {
        color: #cbd5e0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Zero-Runtime CSS-in-JS</h1>
    <p class="subtitle">Extract CSS at build time for better performance</p>
    
    <div class="hero-section">
      <h2 class="hero-title">🎯 Runtime vs Zero-Runtime</h2>
      
      <div class="comparison-grid">
        <div class="comparison-card">
          <span class="card-type runtime">Runtime</span>
          <h4 class="card-title-text">Runtime CSS-in-JS</h4>
          <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 12px;">
            Styles generated in browser at runtime
          </p>
          <ul class="pros-list">
            <li class="pros-item">✅ Dynamic theming</li>
            <li class="pros-item">✅ Prop-based styling</li>
            <li class="cons-item">❌ Bundle size overhead</li>
            <li class="cons-item">❌ Runtime cost</li>
          </ul>
        </div>
        
        <div class="comparison-card">
          <span class="card-type zero-runtime">Zero-Runtime</span>
          <h4 class="card-title-text">Zero-Runtime CSS-in-JS</h4>
          <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 12px;">
            Styles extracted to CSS files at build time
          </p>
          <ul class="pros-list">
            <li class="pros-item">✅ Zero bundle overhead</li>
            <li class="pros-item">✅ Best performance</li>
            <li class="pros-item">✅ Static CSS output</li>
            <li class="cons-item">❌ Limited dynamic styling</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="highlight-box">
      <div class="highlight-title">💡 When to Choose Zero-Runtime</div>
      <p class="highlight-text">
        Choose zero-runtime CSS-in-JS (like Vanilla Extract or Linaria) when performance 
        is critical and you don't need extensive runtime dynamic styling. Your styles are 
        extracted at build time, resulting in regular CSS files with zero JavaScript overhead!
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Code}
        category="CSS · Modern Tools"
        title="CSS-in-JS"
        description="Write CSS directly in JavaScript - component-scoped, dynamic, and powerful"
        colorTheme="pink"
      />

      {/* INTRODUCTION CARD */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-pink-700 dark:text-pink-300">
            <div className="relative">
              <Code className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is CSS-in-JS?
          </CardTitle>
          <CardDescription className="text-lg text-pink-600 dark:text-pink-400">
            💅 Style your components with JavaScript for dynamic, scoped, and maintainable CSS!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6 p-2">
            {/* Main Demo */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-pink-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-pink-400 dark:hover:border-pink-600 cursor-pointer group">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Traditional CSS vs CSS-in-JS
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">📄 Traditional CSS</div>
                    <div className="relative h-40 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 border-2 border-gray-200 dark:border-gray-600 overflow-hidden text-left">
                      <pre className="text-xs">
                        <code>{`/* styles.css */
.button {
  background: #ec4899;
  padding: 12px 24px;
}

.button-primary {
  color: white;
}

.button-large {
  font-size: 18px;
}`}</code>
                      </pre>
                    </div>
                    <div className="text-xs text-orange-600 dark:text-orange-400 mt-2 font-medium">⚠️ Global scope, class naming</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">💅 CSS-in-JS</div>
                    <div className="relative h-40 bg-pink-50 dark:bg-pink-900/20 rounded-lg p-3 border-2 border-pink-200 dark:border-pink-700 overflow-hidden text-left">
                      <pre className="text-xs">
                        <code>{`// Component.jsx
const Button = styled.button\`
  background: #ec4899;
  padding: 12px 24px;
  color: \${p => p.primary 
    ? 'white' : '#333'};
  font-size: \${p => p.large 
    ? '18px' : '14px'};
\`;`}</code>
                      </pre>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">✅ Scoped, dynamic, props-based</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-pink-200/50">
                  <div className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    💡 Key Advantage
                  </div>
                  <div className="text-xs text-pink-600 dark:text-pink-400">
                    CSS-in-JS brings the power of JavaScript to your styles: variables, functions, conditions, and component props!
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  🎨 Key Benefits
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200/50">
                    <Component className="w-6 h-6 text-pink-500" />
                    <div>
                      <div className="font-semibold text-pink-700 dark:text-pink-300 text-sm">Scoped Styles</div>
                      <div className="text-xs text-pink-600 dark:text-pink-400">No conflicts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Zap className="w-6 h-6 text-purple-500" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Dynamic Props</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">Prop-based styling</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Layers className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Co-location</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Styles with components</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <Package className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 text-sm">Dead Code</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Auto-removed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-fuchsia-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-fuchsia-900/30 p-6 rounded-xl border border-pink-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="text-4xl mb-2 animate-bounce">💅</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">✨</div>
                  </div>
                  <div className="font-bold text-lg text-pink-700 dark:text-pink-300">CSS-in-JS</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Component Scoped
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Dynamic Styling
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Theming Support
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Type Safety
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use styled-components for flexibility, or zero-runtime for max performance
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
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Component.jsx</span>
            </div>
            <div className="font-mono text-sm">
              <div className="text-gray-500">// 💅 styled-components Example</div>
              <div className="text-purple-700 dark:text-purple-400">import styled from</div>
              <div className="text-gray-900 dark:text-white"> <span className="text-green-600 dark:text-green-400">'styled-components'</span>;</div>
              <div className="text-gray-900 dark:text-white mt-2"><span className="text-purple-700 dark:text-purple-400">const</span> Button = styled.button\`</div>
              <div className="text-gray-900 dark:text-white">  <span className="text-blue-600 dark:text-blue-400">background</span>: #ec4899;</div>
              <div className="text-gray-900 dark:text-white">\`;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LIBRARY SELECTOR */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <FileCode className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Popular CSS-in-JS Libraries
          </CardTitle>
          <CardDescription>
            Explore different approaches to styling in JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {libraries.map((lib) => (
              <div
                key={lib.id}
                onClick={() => setSelectedLibrary(lib.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedLibrary === lib.id
                    ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${lib.color} rounded-lg flex items-center justify-center`}>
                    <lib.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">{lib.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{lib.description}</p>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300">
                      {lib.popularity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected example */}
          {selectedLibrary === 'styled-components' && (
            <FrontendCodePreview
              html={styledComponentsExample}
              title="styled-components - Most Popular CSS-in-JS"
              colorTheme="pink"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedLibrary === 'emotion' && (
            <FrontendCodePreview
              html={emotionExample}
              title="Emotion - Performant & Flexible"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {(selectedLibrary === 'vanilla-extract' || selectedLibrary === 'linaria') && (
            <FrontendCodePreview
              html={zeroRuntimeExample}
              title="Zero-Runtime CSS-in-JS - Best Performance"
              colorTheme="blue"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* COMPARISON */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Library Comparison
          </CardTitle>
          <CardDescription>
            Choose the right CSS-in-JS solution for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="text-center p-3 font-semibold text-pink-600 dark:text-pink-400">styled-components</th>
                  <th className="text-center p-3 font-semibold text-purple-600 dark:text-purple-400">Emotion</th>
                  <th className="text-center p-3 font-semibold text-blue-600 dark:text-blue-400">Vanilla Extract</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Runtime</td>
                  <td className="text-center p-3">Runtime</td>
                  <td className="text-center p-3">Runtime</td>
                  <td className="text-center p-3">Zero-runtime</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Bundle Size</td>
                  <td className="text-center p-3">~15 KB</td>
                  <td className="text-center p-3">~8 KB</td>
                  <td className="text-center p-3">~0 KB</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Performance</td>
                  <td className="text-center p-3">⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐</td>
                  <td className="text-center p-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">Dynamic Styling</td>
                  <td className="text-center p-3">✅ Full</td>
                  <td className="text-center p-3">✅ Full</td>
                  <td className="text-center p-3">⚠️ Limited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 text-gray-700 dark:text-gray-300">TypeScript</td>
                  <td className="text-center p-3">✅</td>
                  <td className="text-center p-3">✅</td>
                  <td className="text-center p-3">✅ Excellent</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700 dark:text-gray-300">Learning Curve</td>
                  <td className="text-center p-3">Easy</td>
                  <td className="text-center p-3">Easy</td>
                  <td className="text-center p-3">Medium</td>
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
            <li><strong>Use meaningful names</strong> - Name styled components clearly (Button, not StyledDiv)</li>
            <li><strong>Avoid deep nesting</strong> - Keep selectors flat for better performance</li>
            <li><strong>Leverage props</strong> - Use component props for dynamic styling</li>
            <li><strong>Create a theme</strong> - Define colors, spacing, and breakpoints in a theme object</li>
            <li><strong>Consider zero-runtime</strong> - For static sites, zero-runtime solutions offer best performance</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* WHEN TO USE */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">When to Use CSS-in-JS</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <p><strong>✅ Choose CSS-in-JS when:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Building component-based applications (React, Vue)</li>
              <li>You need dynamic, prop-based styling</li>
              <li>You want automatic scoping without CSS Modules</li>
              <li>Your team prefers co-locating styles with components</li>
            </ul>
            <p className="mt-3"><strong>❌ Consider alternatives when:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Performance is absolutely critical (use zero-runtime)</li>
              <li>You're working on a static site (use regular CSS/Tailwind)</li>
              <li>Your team prefers traditional CSS files</li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
