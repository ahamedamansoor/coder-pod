'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Search, CheckCircle, Code, Zap, Target, 
  Layers, Shield, AlertCircle, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface FeatureQueriesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function FeatureQueries({ onOpenWebPlayground }: FeatureQueriesProps) {
  const [selectedFeature, setSelectedFeature] = useState('grid');

  const features = [
    { id: 'grid', name: 'Grid Support', icon: Layers, color: 'bg-purple-500' },
    { id: 'custom-properties', name: 'CSS Variables', icon: Code, color: 'bg-blue-500' },
    { id: 'sticky', name: 'Sticky Position', icon: Target, color: 'bg-green-500' },
    { id: 'backdrop-filter', name: 'Backdrop Filter', icon: Shield, color: 'bg-pink-500' },
  ];

  // Grid Feature Query Example
  const gridExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feature Queries - Grid</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #6b21a8 0%, #9f1239 100%);
      }
    }
    
    .container {
      max-width: 1000px;
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
      color: #a855f7;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #e879f9;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    /* Fallback for browsers without Grid support */
    .layout {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 24px;
      background: linear-gradient(135deg, #fae8ff 0%, #fce7f3 100%);
      border-radius: 12px;
      margin-bottom: 20px;
    }
    
    .layout-item {
      flex: 1 1 200px;
      padding: 24px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #a855f7;
    }
    
    @media (prefers-color-scheme: dark) {
      .layout {
        background: linear-gradient(135deg, #6b21a8 0%, #9f1239 100%);
      }
      
      .layout-item {
        background: #0f172a;
        border-color: #e879f9;
        color: #e2e8f0;
      }
    }
    
    /* Enhanced layout with Grid if supported */
    @supports (display: grid) {
      .layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: minmax(120px, auto);
      }
      
      .layout-item:first-child {
        grid-column: span 2;
        background: linear-gradient(135deg, #a855f7, #ec4899);
        color: white;
        border-color: transparent;
      }
      
      .support-badge {
        display: inline-block;
        padding: 6px 14px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        font-size: 0.75rem;
        font-weight: 700;
        margin-top: 8px;
      }
    }
    
    .item-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #a855f7;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-title {
        color: #e879f9;
      }
    }
    
    .item-desc {
      color: #64748b;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-desc {
        color: #94a3b8;
      }
    }
    
    .code-example {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      margin-top: 20px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-example {
        background: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
      }
    }
    
    .highlight {
      color: #a855f7;
      font-weight: 600;
    }
    
    @media (prefers-color-scheme: dark) {
      .highlight {
        color: #e879f9;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 @supports (display: grid)</h1>
    <p class="subtitle">Enhanced layout for Grid-supporting browsers</p>
    
    <div class="layout">
      <div class="layout-item">
        <div class="item-title">✨ Grid Supported!</div>
        <p class="item-desc">This spans 2 columns</p>
        <span class="support-badge">Enhanced Layout</span>
      </div>
      
      <div class="layout-item">
        <div class="item-title">Item 2</div>
        <p class="item-desc">Standard grid item</p>
      </div>
      
      <div class="layout-item">
        <div class="item-title">Item 3</div>
        <p class="item-desc">Standard grid item</p>
      </div>
      
      <div class="layout-item">
        <div class="item-title">Item 4</div>
        <p class="item-desc">Standard grid item</p>
      </div>
    </div>
    
    <div class="code-example">
      <div style="color: #94a3b8; margin-bottom: 10px;">/* Feature Query Syntax */</div>
      <div><span class="highlight">@supports</span> (display: grid) {</div>
      <div style="margin-left: 20px;">.layout {</div>
      <div style="margin-left: 40px;">display: grid;</div>
      <div style="margin-left: 40px;">grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</div>
      <div style="margin-left: 20px;">}</div>
      <div>}</div>
    </div>
  </div>
</body>
</html>`;

  // CSS Variables Feature Query Example
  const customPropertiesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feature Queries - CSS Variables</title>
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
      max-width: 1000px;
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
    
    /* Fallback colors for browsers without CSS Variables */
    .theme-card {
      padding: 32px;
      background: #3b82f6;
      color: white;
      border-radius: 12px;
      margin-bottom: 20px;
      text-align: center;
    }
    
    /* Enhanced theming with CSS Variables if supported */
    @supports (--css: variables) {
      :root {
        --primary-color: #3b82f6;
        --secondary-color: #8b5cf6;
        --text-color: white;
        --spacing: 32px;
        --radius: 16px;
      }
      
      .theme-card {
        padding: var(--spacing);
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: var(--text-color);
        border-radius: var(--radius);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
      }
      
      .theme-card::before {
        content: '✨ CSS Variables Supported!';
        display: block;
        padding: 8px 16px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 700;
        margin-bottom: 16px;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
      }
    }
    
    .theme-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    .theme-desc {
      font-size: 1.1rem;
      opacity: 0.9;
      line-height: 1.6;
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 24px;
    }
    
    .benefit-box {
      padding: 20px;
      background: #eff6ff;
      border-radius: 8px;
      border: 2px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-box {
        background: #1e3a8a;
        border-color: #60a5fa;
      }
    }
    
    @supports (--css: variables) {
      .benefit-box {
        background: white;
        border-color: var(--primary-color);
      }
      
      @media (prefers-color-scheme: dark) {
        .benefit-box {
          background: #0f172a;
          border-color: #60a5fa;
        }
      }
    }
    
    .benefit-title {
      color: #3b82f6;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-title {
        color: #60a5fa;
      }
    }
    
    .benefit-text {
      color: #64748b;
      font-size: 0.9rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .benefit-text {
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 @supports (--css: variables)</h1>
    <p class="subtitle">Dynamic theming with CSS Variables</p>
    
    <div class="theme-card">
      <div class="theme-title">CSS Variables</div>
      <p class="theme-desc">
        When supported, this card uses CSS variables for colors, spacing, and more!
      </p>
    </div>
    
    <div class="benefits-grid">
      <div class="benefit-box">
        <div class="benefit-title">🔄 Dynamic</div>
        <p class="benefit-text">Change values at runtime</p>
      </div>
      
      <div class="benefit-box">
        <div class="benefit-title">🎯 Scoped</div>
        <p class="benefit-text">Component-level theming</p>
      </div>
      
      <div class="benefit-box">
        <div class="benefit-title">📦 Reusable</div>
        <p class="benefit-text">Define once, use everywhere</p>
      </div>
      
      <div class="benefit-box">
        <div class="benefit-title">✨ Fallbacks</div>
        <p class="benefit-text">Graceful degradation</p>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Sticky Position Feature Query Example
  const stickyExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feature Queries - Sticky Position</title>
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
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    .header {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 40px;
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    
    .subtitle {
      opacity: 0.9;
    }
    
    /* Fallback for browsers without sticky support */
    .sticky-nav {
      background: #10b981;
      color: white;
      padding: 16px 40px;
      font-weight: 600;
      border-bottom: 2px solid #059669;
    }
    
    /* Sticky positioning if supported */
    @supports (position: sticky) {
      .sticky-nav {
        position: sticky;
        top: 0;
        z-index: 10;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .sticky-nav::after {
        content: ' 📌 (Sticky!)';
        font-size: 0.85rem;
        opacity: 0.8;
      }
    }
    
    .content {
      padding: 40px;
    }
    
    .section {
      margin-bottom: 32px;
      padding: 24px;
      background: #d1fae5;
      border-radius: 8px;
      border-left: 4px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: #065f46;
        border-left-color: #34d399;
      }
    }
    
    .section-title {
      color: #065f46;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #a7f3d0;
      }
    }
    
    .section-text {
      color: #047857;
      line-height: 1.7;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-text {
        color: #d1fae5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📌 @supports (position: sticky)</h1>
      <p class="subtitle">Scroll down to see sticky navigation</p>
    </div>
    
    <div class="sticky-nav">
      Sticky Navigation Bar
    </div>
    
    <div class="content">
      <div class="section">
        <h3 class="section-title">Section 1</h3>
        <p class="section-text">
          Sticky positioning allows an element to toggle between relative and fixed positioning 
          based on the scroll position. If your browser supports it, the navigation bar above 
          will stick to the top when you scroll!
        </p>
      </div>
      
      <div class="section">
        <h3 class="section-title">Section 2</h3>
        <p class="section-text">
          Feature queries with @supports allow you to check if a browser supports a specific 
          CSS feature before applying styles. This enables progressive enhancement and better 
          cross-browser compatibility.
        </p>
      </div>
      
      <div class="section">
        <h3 class="section-title">Section 3</h3>
        <p class="section-text">
          Keep scrolling to see the sticky navigation in action. If sticky positioning isn't 
          supported, the navigation will simply appear as a regular element without the sticky 
          behavior.
        </p>
      </div>
      
      <div class="section">
        <h3 class="section-title">Section 4</h3>
        <p class="section-text">
          This is a perfect example of progressive enhancement - the page works fine without 
          sticky positioning, but gets an enhanced experience when the feature is available!
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Backdrop Filter Feature Query Example
  const backdropFilterExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feature Queries - Backdrop Filter</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: 
        linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(219, 39, 119, 0.3) 100%),
        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="20" fill="%23ec4899" opacity="0.3"/><circle cx="75" cy="75" r="20" fill="%23db2777" opacity="0.3"/><circle cx="75" cy="25" r="15" fill="%23f472b6" opacity="0.3"/></svg>');
      background-size: cover, 200px 200px;
      padding: 40px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: 
          linear-gradient(135deg, rgba(159, 18, 57, 0.5) 0%, rgba(136, 19, 55, 0.5) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="20" fill="%239f1239" opacity="0.5"/><circle cx="75" cy="75" r="20" fill="%23881337" opacity="0.5"/><circle cx="75" cy="25" r="15" fill="%23be123c" opacity="0.5"/></svg>');
        background-size: cover, 200px 200px;
      }
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Fallback for browsers without backdrop-filter */
    .glass-card {
      background: rgba(255, 255, 255, 0.85);
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .glass-card {
        background: rgba(30, 41, 59, 0.85);
        border-color: rgba(255, 255, 255, 0.1);
      }
    }
    
    /* Enhanced glass effect with backdrop-filter if supported */
    @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
      .glass-card {
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(10px) saturate(180%);
      }
      
      @media (prefers-color-scheme: dark) {
        .glass-card {
          background: rgba(30, 41, 59, 0.3);
        }
      }
      
      .glass-card::before {
        content: '✨ Backdrop Filter Supported!';
        display: block;
        padding: 8px 16px;
        background: rgba(236, 72, 153, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 700;
        color: #ec4899;
        margin-bottom: 20px;
        width: fit-content;
      }
      
      @media (prefers-color-scheme: dark) {
        .glass-card::before {
          color: #f472b6;
        }
      }
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 16px;
      font-size: 2.5rem;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .description {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 24px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .description {
        color: #cbd5e0;
      }
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
    }
    
    .feature-item {
      padding: 16px;
      background: rgba(236, 72, 153, 0.1);
      border-radius: 8px;
      margin-bottom: 12px;
      border-left: 4px solid #ec4899;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-item {
        background: rgba(236, 72, 153, 0.2);
        border-left-color: #f472b6;
        color: #e2e8f0;
      }
    }
    
    @supports (backdrop-filter: blur(10px)) {
      .feature-item {
        background: rgba(236, 72, 153, 0.15);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="glass-card">
      <h1>💎 Backdrop Filter</h1>
      <p class="description">
        A glassmorphism effect created with backdrop-filter. If your browser supports it, 
        you'll see a beautiful blurred background effect!
      </p>
      
      <ul class="feature-list">
        <li class="feature-item">
          <strong>🎨 Glassmorphism:</strong> Modern UI design trend
        </li>
        <li class="feature-item">
          <strong>✨ Blur Effect:</strong> Beautiful background blur
        </li>
        <li class="feature-item">
          <strong>🔍 Feature Detection:</strong> Using @supports
        </li>
        <li class="feature-item">
          <strong>📱 Fallback Support:</strong> Works without the feature
        </li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Search}
        category="CSS · Feature Detection"
        title="CSS Feature Queries"
        description="Detect and use CSS features with @supports for progressive enhancement"
        colorTheme="purple"
      />

      {/* INTRODUCTION */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-purple-700 dark:text-purple-300">
            <div className="relative">
              <Search className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are Feature Queries?
          </CardTitle>
          <CardDescription className="text-lg text-purple-600 dark:text-purple-400">
            🔍 Check if a browser supports a CSS feature before applying styles!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  🎯 @supports Syntax
                </h4>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
                  <div className="text-purple-600 dark:text-purple-400">@supports (property: value) {'{'}</div>
                  <div className="ml-4 text-gray-700 dark:text-gray-300">/* Enhanced styles */</div>
                  <div className="ml-4 text-blue-600 dark:text-blue-400">.element {'{'}</div>
                  <div className="ml-8 text-gray-700 dark:text-gray-300">property: value;</div>
                  <div className="ml-4 text-blue-600 dark:text-blue-400">{'}'}</div>
                  <div className="text-purple-600 dark:text-purple-400">{'}'}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Progressive Enhancement</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Provide fallbacks for older browsers, enhanced experience for modern ones
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <Zap className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Conditional Styling</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Apply styles only when specific features are supported
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Target className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">No JavaScript Needed</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Pure CSS solution for feature detection
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logical Operators */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200/50">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">
                  🔗 Logical Operators
                </h4>
                
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-purple-200/50">
                    <code className="text-purple-600 dark:text-purple-400 font-mono text-sm">
                      @supports (prop1: val) <strong>and</strong> (prop2: val)
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Both conditions must be true</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-purple-200/50">
                    <code className="text-purple-600 dark:text-purple-400 font-mono text-sm">
                      @supports (prop1: val) <strong>or</strong> (prop2: val)
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">At least one condition must be true</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-purple-200/50">
                    <code className="text-purple-600 dark:text-purple-400 font-mono text-sm">
                      @supports <strong>not</strong> (prop: val)
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Condition must be false</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-fuchsia-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-fuchsia-900/30 p-6 rounded-xl border border-purple-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🔍</div>
                  <div className="font-bold text-lg text-purple-700 dark:text-purple-300">Feature Queries</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Check Feature Support
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Conditional Styles
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Progressive Enhancement
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Graceful Fallbacks
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Browser Support</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    @supports works in all modern browsers (96%+ coverage)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FEATURE SELECTOR */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Feature Query Examples
          </CardTitle>
          <CardDescription>
            See how @supports enables progressive enhancement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedFeature === feature.id
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-sm text-gray-900 dark:text-gray-100">{feature.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected example */}
          {selectedFeature === 'grid' && (
            <FrontendCodePreview
              html={gridExample}
              title="@supports (display: grid)"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedFeature === 'custom-properties' && (
            <FrontendCodePreview
              html={customPropertiesExample}
              title="@supports (--css: variables)"
              colorTheme="blue"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedFeature === 'sticky' && (
            <FrontendCodePreview
              html={stickyExample}
              title="@supports (position: sticky)"
              colorTheme="green"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedFeature === 'backdrop-filter' && (
            <FrontendCodePreview
              html={backdropFilterExample}
              title="@supports (backdrop-filter: blur())"
              colorTheme="pink"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* USE CASES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Common Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🎨 Modern Layout Features</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Check for Grid, Flexbox, Subgrid support before using advanced layouts
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">✨ Visual Effects</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Test for backdrop-filter, clip-path, CSS filters before applying effects
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">🎯 CSS Variables</h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                Detect custom property support for dynamic theming
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200/50">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">📱 Position Sticky</h4>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Check for sticky positioning before creating fixed navigation
              </p>
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
            <li><strong>Start with fallbacks</strong> - Write CSS that works everywhere first</li>
            <li><strong>Progressive enhancement</strong> - Add enhanced features with @supports</li>
            <li><strong>Test carefully</strong> - Ensure fallback styles look good too</li>
            <li><strong>Combine logically</strong> - Use and/or/not to check multiple features</li>
            <li><strong>Keep it simple</strong> - Don't over-complicate with too many queries</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* BROWSER SUPPORT */}
      <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
        <Info className="h-4 w-4 text-purple-600" />
        <AlertTitle className="text-purple-900 dark:text-purple-100">Browser Support</AlertTitle>
        <AlertDescription className="text-purple-800 dark:text-purple-200">
          <div className="mt-2 space-y-2">
            <div><strong>✅ Excellent Support:</strong> Chrome 28+, Firefox 22+, Safari 9+, Edge 12+</div>
            <div><strong>📊 Coverage:</strong> Over 96% of all browsers support @supports</div>
            <div><strong>⚠️ Fallback:</strong> Older browsers simply ignore @supports blocks</div>
            <div><strong>🔍 Test Tool:</strong> Use CSS.supports() in JavaScript to detect support</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
