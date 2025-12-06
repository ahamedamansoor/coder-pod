'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Globe, CheckCircle, AlertTriangle, Code, Zap, 
  Monitor, Smartphone, Tablet, Globe as Chrome, Compass as Firefox, Globe2 as Safari
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CrossBrowserCssProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CrossBrowserCss({ onOpenWebPlayground }: CrossBrowserCssProps) {
  const [selectedBrowserIssue, setSelectedBrowserIssue] = useState('flexbox');

  const browserIssues = [
    { id: 'flexbox', name: 'Flexbox', icon: Monitor, color: 'bg-blue-500' },
    { id: 'grid', name: 'Grid', icon: Tablet, color: 'bg-purple-500' },
    { id: 'transforms', name: 'Transforms', icon: Zap, color: 'bg-orange-500' },
    { id: 'filters', name: 'Filters', icon: Smartphone, color: 'bg-green-500' },
  ];

  // Flexbox Cross-Browser Example
  const flexboxExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cross-Browser Flexbox</title>
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
    
    /* Cross-Browser Flexbox with Prefixes */
    .flex-container {
      /* Old syntax for older browsers */
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      
      /* Flex direction */
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      
      /* Justify content */
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      
      /* Align items */
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      
      gap: 20px;
      padding: 24px;
      background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
      border-radius: 12px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }
    
    @media (prefers-color-scheme: dark) {
      .flex-container {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .flex-item {
      /* Flex grow/shrink */
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      
      min-width: 150px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #667eea;
      transition: all 0.3s ease;
    }
    
    .flex-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .flex-item {
        background: #0f172a;
        border-color: #a78bfa;
        color: #e2e8f0;
      }
    }
    
    .item-title {
      color: #667eea;
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-title {
        color: #a78bfa;
      }
    }
    
    .browser-badge {
      display: inline-block;
      padding: 4px 10px;
      background: #d1fae5;
      color: #065f46;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-top: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .browser-badge {
        background: #065f46;
        color: #a7f3d0;
      }
    }
    
    .info-box {
      background: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #1e3a8a;
        border-left-color: #60a5fa;
      }
    }
    
    .info-title {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #93c5fd;
      }
    }
    
    .info-text {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text {
        color: #cbd5e0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌐 Cross-Browser Flexbox</h1>
    <p class="subtitle">Works across all major browsers with vendor prefixes</p>
    
    <div class="flex-container">
      <div class="flex-item">
        <div class="item-title">Chrome</div>
        <p style="color: #64748b; font-size: 0.9rem;">✅ Full Support</p>
        <span class="browser-badge">v29+</span>
      </div>
      
      <div class="flex-item">
        <div class="item-title">Firefox</div>
        <p style="color: #64748b; font-size: 0.9rem;">✅ Full Support</p>
        <span class="browser-badge">v28+</span>
      </div>
      
      <div class="flex-item">
        <div class="item-title">Safari</div>
        <p style="color: #64748b; font-size: 0.9rem;">✅ Prefix Needed</p>
        <span class="browser-badge">v9+ (-webkit-)</span>
      </div>
      
      <div class="flex-item">
        <div class="item-title">Edge</div>
        <p style="color: #64748b; font-size: 0.9rem;">✅ Full Support</p>
        <span class="browser-badge">All versions</span>
      </div>
    </div>
    
    <div class="info-box">
      <div class="info-title">💡 Why Vendor Prefixes?</div>
      <p class="info-text">
        Vendor prefixes like -webkit-, -moz-, and -ms- ensure your flexbox layouts work 
        in older browser versions. Modern build tools like Autoprefixer can add these automatically!
      </p>
    </div>
  </div>
</body>
</html>`;

  // Grid Cross-Browser Example
  const gridExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cross-Browser Grid</title>
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
        background: linear-gradient(135deg, #701a75 0%, #9f1239 100%);
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
    
    /* Cross-Browser CSS Grid */
    .grid-container {
      /* IE 10-11 support */
      display: -ms-grid;
      -ms-grid-columns: 1fr 20px 1fr 20px 1fr;
      -ms-grid-rows: auto 20px auto;
      
      /* Modern browsers */
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      gap: 20px;
      
      padding: 24px;
      background: linear-gradient(135deg, #fae8ff 0%, #fce7f3 100%);
      border-radius: 12px;
      margin-bottom: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .grid-container {
        background: linear-gradient(135deg, #701a75 0%, #9f1239 100%);
      }
    }
    
    /* IE positioning for grid items */
    .grid-item:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    
    .grid-item:nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
    }
    
    .grid-item:nth-child(3) {
      -ms-grid-column: 5;
      -ms-grid-row: 1;
    }
    
    .grid-item {
      padding: 24px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #a855f7;
      transition: all 0.3s ease;
    }
    
    .grid-item:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      .grid-item {
        background: #0f172a;
        border-color: #e879f9;
        color: #e2e8f0;
      }
    }
    
    .item-number {
      font-size: 2rem;
      font-weight: 700;
      color: #a855f7;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-number {
        color: #e879f9;
      }
    }
    
    .warning-box {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning-box {
        background: #78350f;
        border-left-color: #fbbf24;
      }
    }
    
    .warning-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning-title {
        color: #fde68a;
      }
    }
    
    .warning-text {
      color: #78350f;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning-text {
        color: #fde68a;
      }
    }
    
    @media (max-width: 768px) {
      .grid-container {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
      }
      
      .grid-item:nth-child(1) {
        -ms-grid-column: 1;
        -ms-grid-row: 1;
      }
      
      .grid-item:nth-child(2) {
        -ms-grid-column: 1;
        -ms-grid-row: 3;
      }
      
      .grid-item:nth-child(3) {
        -ms-grid-column: 1;
        -ms-grid-row: 5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Cross-Browser Grid</h1>
    <p class="subtitle">CSS Grid with IE 10/11 fallback support</p>
    
    <div class="grid-container">
      <div class="grid-item">
        <div class="item-number">1</div>
        <p style="color: #64748b; font-size: 0.9rem;">Grid Item One</p>
      </div>
      
      <div class="grid-item">
        <div class="item-number">2</div>
        <p style="color: #64748b; font-size: 0.9rem;">Grid Item Two</p>
      </div>
      
      <div class="grid-item">
        <div class="item-number">3</div>
        <p style="color: #64748b; font-size: 0.9rem;">Grid Item Three</p>
      </div>
    </div>
    
    <div class="warning-box">
      <div class="warning-title">⚠️ IE Grid Support</div>
      <p class="warning-text">
        Internet Explorer 10-11 uses an older -ms-grid syntax. You need to specify 
        explicit row and column positions for each item. Modern Grid features like 
        grid-template-areas and auto-placement don't work in IE.
      </p>
    </div>
  </div>
</body>
</html>`;

  // Transforms Cross-Browser Example
  const transformsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cross-Browser Transforms</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
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
      color: #f97316;
      margin-bottom: 10px;
      text-align: center;
      font-size: 2.5rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      padding: 24px;
      background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
      border-radius: 12px;
      margin-bottom: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-grid {
        background: linear-gradient(135deg, #9a3412 0%, #7c2d12 100%);
      }
    }
    
    .transform-box {
      padding: 24px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #f97316;
      cursor: pointer;
    }
    
    @media (prefers-color-scheme: dark) {
      .transform-box {
        background: #0f172a;
        border-color: #fb923c;
        color: #e2e8f0;
      }
    }
    
    .transform-box:hover .demo-element {
      /* Vendor prefixes for transforms */
      -webkit-transform: scale(1.2) rotate(5deg);
      -moz-transform: scale(1.2) rotate(5deg);
      -ms-transform: scale(1.2) rotate(5deg);
      -o-transform: scale(1.2) rotate(5deg);
      transform: scale(1.2) rotate(5deg);
    }
    
    .demo-element {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #f97316, #ea580c);
      border-radius: 12px;
      margin: 0 auto 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      
      /* Transition with vendor prefixes */
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    
    .transform-title {
      color: #f97316;
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .transform-title {
        color: #fb923c;
      }
    }
    
    .transform-desc {
      color: #64748b;
      font-size: 0.85rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .transform-desc {
        color: #94a3b8;
      }
    }
    
    .code-hint {
      background: #eff6ff;
      border: 1px solid #3b82f6;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-hint {
        background: #1e3a8a;
        border-color: #60a5fa;
        color: #e0e7ff;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Cross-Browser Transforms</h1>
    <p class="subtitle">Hover over boxes to see transforms with vendor prefixes</p>
    
    <div class="demo-grid">
      <div class="transform-box">
        <div class="demo-element">🎯</div>
        <div class="transform-title">Scale & Rotate</div>
        <p class="transform-desc">Hover to transform</p>
      </div>
      
      <div class="transform-box">
        <div class="demo-element">✨</div>
        <div class="transform-title">With Prefixes</div>
        <p class="transform-desc">Works everywhere</p>
      </div>
      
      <div class="transform-box">
        <div class="demo-element">🚀</div>
        <div class="transform-title">Smooth Transition</div>
        <p class="transform-desc">Vendor prefixed</p>
      </div>
    </div>
    
    <div class="code-hint">
      <div style="color: #3b82f6; margin-bottom: 8px;">/* Vendor Prefixes for Maximum Compatibility */</div>
      <div>-webkit-transform: scale(1.2) rotate(5deg);</div>
      <div>-moz-transform: scale(1.2) rotate(5deg);</div>
      <div>-ms-transform: scale(1.2) rotate(5deg);</div>
      <div>transform: scale(1.2) rotate(5deg);</div>
    </div>
  </div>
</body>
</html>`;

  // Filters Cross-Browser Example
  const filtersExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cross-Browser Filters</title>
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
    
    .filter-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      padding: 24px;
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-radius: 12px;
      margin-bottom: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .filter-grid {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
    }
    
    .filter-card {
      padding: 20px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #10b981;
      overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
      .filter-card {
        background: #0f172a;
        border-color: #34d399;
        color: #e2e8f0;
      }
    }
    
    .filter-demo {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 50%;
      margin: 0 auto 16px;
      transition: all 0.3s ease;
    }
    
    .blur-demo {
      /* Vendor prefixes for filters */
      -webkit-filter: blur(0px);
      filter: blur(0px);
    }
    
    .blur-demo:hover {
      -webkit-filter: blur(4px);
      filter: blur(4px);
    }
    
    .grayscale-demo {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
    }
    
    .grayscale-demo:hover {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
    
    .brightness-demo {
      -webkit-filter: brightness(100%);
      filter: brightness(100%);
    }
    
    .brightness-demo:hover {
      -webkit-filter: brightness(150%);
      filter: brightness(150%);
    }
    
    .filter-label {
      color: #10b981;
      font-weight: 700;
      margin-bottom: 4px;
    }
    
    @media (prefers-color-scheme: dark) {
      .filter-label {
        color: #34d399;
      }
    }
    
    .filter-hint {
      color: #64748b;
      font-size: 0.75rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .filter-hint {
        color: #94a3b8;
      }
    }
    
    .support-note {
      background: #dcfce7;
      border-left: 4px solid #10b981;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .support-note {
        background: #065f46;
        border-left-color: #34d399;
      }
    }
    
    .support-title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .support-title {
        color: #a7f3d0;
      }
    }
    
    .support-text {
      color: #047857;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .support-text {
        color: #d1fae5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Cross-Browser Filters</h1>
    <p class="subtitle">Hover over circles to see CSS filters in action</p>
    
    <div class="filter-grid">
      <div class="filter-card">
        <div class="filter-demo blur-demo"></div>
        <div class="filter-label">Blur</div>
        <p class="filter-hint">Hover to blur</p>
      </div>
      
      <div class="filter-card">
        <div class="filter-demo grayscale-demo"></div>
        <div class="filter-label">Grayscale</div>
        <p class="filter-hint">Hover for B&W</p>
      </div>
      
      <div class="filter-card">
        <div class="filter-demo brightness-demo"></div>
        <div class="filter-label">Brightness</div>
        <p class="filter-hint">Hover to brighten</p>
      </div>
    </div>
    
    <div class="support-note">
      <div class="support-title">✅ Filter Support</div>
      <p class="support-text">
        CSS Filters work in all modern browsers with -webkit- prefix for older Safari versions. 
        IE 11 doesn't support filters, but you can use SVG filters as a fallback.
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Globe}
        category="CSS · Compatibility"
        title="Cross-Browser CSS"
        description="Write CSS that works across all browsers with vendor prefixes and fallbacks"
        colorTheme="blue"
      />

      {/* INTRODUCTION */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Globe className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is Cross-Browser CSS?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            🌐 Ensure your styles work consistently across all browsers and versions!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  🎯 Browser Compatibility Challenges
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Different Browser Engines</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Chrome (Blink), Firefox (Gecko), Safari (WebKit), Edge (Chromium)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Code className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Vendor Prefixes</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        -webkit-, -moz-, -ms-, -o- for experimental features
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300 mb-1">Feature Support Varies</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        New CSS features may not work in older browsers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Browser Icons */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200/50">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 text-center">
                  Major Browser Engines
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200/50">
                    <Chrome className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">Chrome</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">Blink</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200/50">
                    <Firefox className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                    <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">Firefox</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">Gecko</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200/50">
                    <Safari className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                    <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">Safari</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">WebKit</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200/50">
                    <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">Edge</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">Chromium</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">🌐</div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Browser Support</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Vendor Prefixes
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Feature Detection
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Graceful Fallbacks
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Progressive Enhancement
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Use Autoprefixer to automatically add vendor prefixes!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BROWSER ISSUE SELECTOR */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Common Cross-Browser Issues
          </CardTitle>
          <CardDescription>
            Learn how to handle compatibility issues for different CSS features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {browserIssues.map((issue) => (
              <div
                key={issue.id}
                onClick={() => setSelectedBrowserIssue(issue.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedBrowserIssue === issue.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${issue.color} rounded-lg flex items-center justify-center`}>
                    <issue.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-gray-900 dark:text-gray-100">{issue.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected example */}
          {selectedBrowserIssue === 'flexbox' && (
            <FrontendCodePreview
              html={flexboxExample}
              title="Flexbox - Cross-Browser Support"
              colorTheme="blue"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedBrowserIssue === 'grid' && (
            <FrontendCodePreview
              html={gridExample}
              title="CSS Grid - IE 10/11 Compatibility"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedBrowserIssue === 'transforms' && (
            <FrontendCodePreview
              html={transformsExample}
              title="Transforms - Vendor Prefixes"
              colorTheme="orange"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedBrowserIssue === 'filters' && (
            <FrontendCodePreview
              html={filtersExample}
              title="CSS Filters - Browser Support"
              colorTheme="green"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* VENDOR PREFIXES TABLE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Common Vendor Prefixes
          </CardTitle>
          <CardDescription>
            Know which prefix to use for different browsers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Prefix</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Browser</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3"><code className="text-blue-600 dark:text-blue-400 font-mono">-webkit-</code></td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">Chrome, Safari, Edge, Opera</td>
                  <td className="p-3"><code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">-webkit-transform</code></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3"><code className="text-orange-600 dark:text-orange-400 font-mono">-moz-</code></td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">Firefox</td>
                  <td className="p-3"><code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">-moz-transform</code></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3"><code className="text-blue-600 dark:text-blue-400 font-mono">-ms-</code></td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">Internet Explorer</td>
                  <td className="p-3"><code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">-ms-transform</code></td>
                </tr>
                <tr>
                  <td className="p-3"><code className="text-red-600 dark:text-red-400 font-mono">-o-</code></td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">Opera (old versions)</td>
                  <td className="p-3"><code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">-o-transform</code></td>
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
            <li><strong>Use Autoprefixer</strong> - Automatically add vendor prefixes during build</li>
            <li><strong>Check Can I Use</strong> - Verify browser support before using new features</li>
            <li><strong>Test across browsers</strong> - Use BrowserStack or similar tools</li>
            <li><strong>Provide fallbacks</strong> - Use @supports for feature detection</li>
            <li><strong>Progressive enhancement</strong> - Build with basic support first, enhance for modern browsers</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* TOOLS */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Zap className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Helpful Tools</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <div><strong>🔧 Autoprefixer:</strong> Automatically add vendor prefixes to your CSS</div>
            <div><strong>🌐 Can I Use:</strong> Check browser support for CSS features (caniuse.com)</div>
            <div><strong>🧪 BrowserStack:</strong> Test your site across real browsers</div>
            <div><strong>📱 Modernizr:</strong> Detect HTML5 and CSS3 features in browsers</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
