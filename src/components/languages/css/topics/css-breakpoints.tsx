'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import {
  Smartphone, Tablet, Laptop, Monitor, Tv, CheckCircle,
  AlertTriangle, Zap, Settings, Target, MousePointer, ArrowRight,
  Maximize, Minimize, Scaling, Layout, Grid, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CssBreakpointsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssBreakpoints({ onOpenWebPlayground }: CssBreakpointsProps) {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState('md');

  // Common breakpoints data
  const breakpoints = [
    { name: 'xs', size: '0px', icon: Smartphone, label: 'Extra Small', devices: 'Small phones', color: 'blue' },
    { name: 'sm', size: '640px', icon: Smartphone, label: 'Small', devices: 'Large phones', color: 'cyan' },
    { name: 'md', size: '768px', icon: Tablet, label: 'Medium', devices: 'Tablets', color: 'green' },
    { name: 'lg', size: '1024px', icon: Laptop, label: 'Large', devices: 'Laptops', color: 'purple' },
    { name: 'xl', size: '1280px', icon: Monitor, label: 'Extra Large', devices: 'Desktops', color: 'orange' },
    { name: '2xl', size: '1536px', icon: Tv, label: '2X Large', devices: 'Large screens', color: 'pink' },
  ];

  // Basic breakpoints example
  const basicBreakpointsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Breakpoints Basics</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      min-height: 100vh;
      padding: 20px;
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
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      text-align: center;
      color: #3b82f6;
      margin-bottom: 10px;
      font-size: 1.8rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #60a5fa; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 0.95rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle { color: #94a3b8; }
    }
    
    /* Current breakpoint indicator */
    .breakpoint-display {
      text-align: center;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 25px;
      font-weight: 600;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    /* Mobile first - default styles */
    .breakpoint-display {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
    }
    .breakpoint-display::before {
      content: '📱 Mobile (< 640px)';
    }
    
    /* Small screens */
    @media (min-width: 640px) {
      .breakpoint-display {
        background: linear-gradient(135deg, #06b6d4, #0891b2);
      }
      .breakpoint-display::before {
        content: '📱 Small (≥ 640px)';
      }
    }
    
    /* Medium screens */
    @media (min-width: 768px) {
      .breakpoint-display {
        background: linear-gradient(135deg, #10b981, #059669);
      }
      .breakpoint-display::before {
        content: '📱 Tablet (≥ 768px)';
      }
    }
    
    /* Large screens */
    @media (min-width: 1024px) {
      .breakpoint-display {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      }
      .breakpoint-display::before {
        content: '💻 Laptop (≥ 1024px)';
      }
    }
    
    /* Extra large screens */
    @media (min-width: 1280px) {
      .breakpoint-display {
        background: linear-gradient(135deg, #f59e0b, #d97706);
      }
      .breakpoint-display::before {
        content: '🖥️ Desktop (≥ 1280px)';
      }
    }
    
    /* Breakpoint reference table */
    .breakpoint-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      font-size: 0.9rem;
    }
    
    .breakpoint-table th,
    .breakpoint-table td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .breakpoint-table th,
      .breakpoint-table td {
        border-bottom: 1px solid #334155;
      }
    }
    
    .breakpoint-table th {
      background: #f8fafc;
      font-weight: 600;
      color: #475569;
    }
    
    @media (prefers-color-scheme: dark) {
      .breakpoint-table th {
        background: #334155;
        color: #e2e8f0;
      }
    }
    
    .breakpoint-table tr:hover {
      background: #f1f5f9;
    }
    
    @media (prefers-color-scheme: dark) {
      .breakpoint-table tr:hover {
        background: #334155;
      }
    }
    
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    
    .badge-blue { background: #dbeafe; color: #1d4ed8; }
    .badge-cyan { background: #cffafe; color: #0891b2; }
    .badge-green { background: #d1fae5; color: #059669; }
    .badge-purple { background: #ede9fe; color: #7c3aed; }
    .badge-orange { background: #fed7aa; color: #c2410c; }
    
    @media (prefers-color-scheme: dark) {
      .badge-blue { background: #1e3a8a; color: #93c5fd; }
      .badge-cyan { background: #164e63; color: #67e8f9; }
      .badge-green { background: #064e3b; color: #6ee7b7; }
      .badge-purple { background: #4c1d95; color: #c4b5fd; }
      .badge-orange { background: #7c2d12; color: #fdba74; }
    }
    
    .tip {
      margin-top: 20px;
      padding: 15px;
      background: #fef3c7;
      border-radius: 10px;
      border-left: 4px solid #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .tip {
        background: #78350f;
        border-left-color: #fbbf24;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 CSS Breakpoints</h1>
    <p class="subtitle">Resize your browser to see the breakpoint change!</p>
    
    <div class="breakpoint-display"></div>
    
    <table class="breakpoint-table">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Min Width</th>
          <th>Devices</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="badge badge-blue">xs</span></td>
          <td>0px</td>
          <td>Small phones</td>
        </tr>
        <tr>
          <td><span class="badge badge-cyan">sm</span></td>
          <td>640px</td>
          <td>Large phones</td>
        </tr>
        <tr>
          <td><span class="badge badge-green">md</span></td>
          <td>768px</td>
          <td>Tablets</td>
        </tr>
        <tr>
          <td><span class="badge badge-purple">lg</span></td>
          <td>1024px</td>
          <td>Laptops</td>
        </tr>
        <tr>
          <td><span class="badge badge-orange">xl</span></td>
          <td>1280px</td>
          <td>Desktops</td>
        </tr>
      </tbody>
    </table>
    
    <div class="tip">
      💡 <strong>Tip:</strong> Use mobile-first approach - start with base styles and add @media (min-width) for larger screens.
    </div>
  </div>
</body>
</html>`;

  // Custom breakpoints example
  const customBreakpointsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Breakpoints with CSS Variables</title>
  <style>
    :root {
      /* Custom breakpoint values */
      --bp-phone: 480px;
      --bp-tablet: 768px;
      --bp-laptop: 1024px;
      --bp-desktop: 1280px;
      
      /* Spacing that changes with breakpoints */
      --spacing: 1rem;
      --font-size: 14px;
      --columns: 1;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      min-height: 100vh;
      padding: var(--spacing);
      font-size: var(--font-size);
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: calc(var(--spacing) * 2);
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      text-align: center;
      color: #10b981;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #34d399; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle { color: #94a3b8; }
    }
    
    /* Variable display */
    .var-display {
      display: grid;
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: var(--spacing);
      margin-bottom: 25px;
    }
    
    .var-card {
      padding: var(--spacing);
      background: #f0fdf4;
      border-radius: 10px;
      border: 2px solid #86efac;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .var-card {
        background: #064e3b;
        border-color: #10b981;
      }
    }
    
    .var-name {
      font-weight: 700;
      color: #059669;
      margin-bottom: 5px;
    }
    
    @media (prefers-color-scheme: dark) {
      .var-name { color: #34d399; }
    }
    
    .var-value {
      font-family: monospace;
      background: #dcfce7;
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 0.9em;
    }
    
    @media (prefers-color-scheme: dark) {
      .var-value {
        background: #022c22;
        color: #6ee7b7;
      }
    }
    
    /* Tablet breakpoint */
    @media (min-width: 768px) {
      :root {
        --spacing: 1.5rem;
        --font-size: 15px;
        --columns: 2;
      }
    }
    
    /* Laptop breakpoint */
    @media (min-width: 1024px) {
      :root {
        --spacing: 2rem;
        --font-size: 16px;
        --columns: 3;
      }
    }
    
    /* Desktop breakpoint */
    @media (min-width: 1280px) {
      :root {
        --spacing: 2.5rem;
        --font-size: 17px;
        --columns: 4;
      }
    }
    
    .code-block {
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 10px;
      font-family: monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      white-space: pre;
    }
    
    .code-comment { color: #64748b; }
    .code-property { color: #7dd3fc; }
    .code-value { color: #fde047; }
    .code-media { color: #c084fc; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Custom Breakpoints</h1>
    <p class="subtitle">CSS Variables change at each breakpoint - resize to see!</p>
    
    <div class="var-display">
      <div class="var-card">
        <div class="var-name">--spacing</div>
        <div class="var-value">Dynamic</div>
      </div>
      <div class="var-card">
        <div class="var-name">--font-size</div>
        <div class="var-value">Dynamic</div>
      </div>
      <div class="var-card">
        <div class="var-name">--columns</div>
        <div class="var-value">Dynamic</div>
      </div>
      <div class="var-card">
        <div class="var-name">--bp-tablet</div>
        <div class="var-value">768px</div>
      </div>
    </div>
    
    <div class="code-block"><span class="code-comment">/* Define custom breakpoints */</span>
<span class="code-property">:root</span> {
  <span class="code-property">--bp-phone</span>: <span class="code-value">480px</span>;
  <span class="code-property">--bp-tablet</span>: <span class="code-value">768px</span>;
  <span class="code-property">--bp-laptop</span>: <span class="code-value">1024px</span>;
}

<span class="code-media">@media (min-width: 768px)</span> {
  <span class="code-property">:root</span> {
    <span class="code-property">--spacing</span>: <span class="code-value">1.5rem</span>;
  }
}</div>
  </div>
</body>
</html>`;

  // Breakpoint ranges example
  const breakpointRangesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Breakpoint Ranges & Operators</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      min-height: 100vh;
      padding: 20px;
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
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      text-align: center;
      color: #8b5cf6;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #a78bfa; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle { color: #94a3b8; }
    }
    
    .range-demo {
      display: grid;
      gap: 15px;
      margin-bottom: 25px;
    }
    
    .range-item {
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    @media (prefers-color-scheme: dark) {
      .range-item {
        border-color: #475569;
      }
    }
    
    .range-item h3 {
      font-size: 1rem;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .range-item code {
      display: block;
      background: #f1f5f9;
      padding: 10px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      color: #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .range-item code {
        background: #334155;
        color: #c4b5fd;
      }
    }
    
    /* Highlight active range */
    .range-min-only { opacity: 0.5; }
    .range-max-only { opacity: 0.5; }
    .range-between { opacity: 0.5; }
    .range-modern { opacity: 0.5; }
    
    /* min-width only */
    @media (min-width: 768px) {
      .range-min-only {
        opacity: 1;
        background: #dcfce7;
        border-color: #22c55e;
      }
      @media (prefers-color-scheme: dark) {
        .range-min-only {
          background: #064e3b;
          border-color: #10b981;
        }
      }
    }
    
    /* max-width only */
    @media (max-width: 767px) {
      .range-max-only {
        opacity: 1;
        background: #fef3c7;
        border-color: #f59e0b;
      }
      @media (prefers-color-scheme: dark) {
        .range-max-only {
          background: #78350f;
          border-color: #fbbf24;
        }
      }
    }
    
    /* Between range */
    @media (min-width: 640px) and (max-width: 1023px) {
      .range-between {
        opacity: 1;
        background: #dbeafe;
        border-color: #3b82f6;
      }
      @media (prefers-color-scheme: dark) {
        .range-between {
          background: #1e3a8a;
          border-color: #60a5fa;
        }
      }
    }
    
    /* Modern range syntax */
    @media (768px <= width <= 1024px) {
      .range-modern {
        opacity: 1;
        background: #f3e8ff;
        border-color: #a855f7;
      }
      @media (prefers-color-scheme: dark) {
        .range-modern {
          background: #581c87;
          border-color: #c084fc;
        }
      }
    }
    
    .legend {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
    }
    
    .legend-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Breakpoint Ranges</h1>
    <p class="subtitle">Different ways to target screen sizes</p>
    
    <div class="range-demo">
      <div class="range-item range-min-only">
        <h3>✅ Min-Width (Mobile First)</h3>
        <code>@media (min-width: 768px) { ... }</code>
        <p style="margin-top: 10px; font-size: 0.9rem;">Applies at 768px and above</p>
      </div>
      
      <div class="range-item range-max-only">
        <h3>⚠️ Max-Width (Desktop First)</h3>
        <code>@media (max-width: 767px) { ... }</code>
        <p style="margin-top: 10px; font-size: 0.9rem;">Applies below 768px</p>
      </div>
      
      <div class="range-item range-between">
        <h3>🎯 Between Range</h3>
        <code>@media (min-width: 640px) and (max-width: 1023px)</code>
        <p style="margin-top: 10px; font-size: 0.9rem;">Applies between 640px - 1023px</p>
      </div>
      
      <div class="range-item range-modern">
        <h3>✨ Modern Range Syntax (CSS4)</h3>
        <code>@media (768px <= width <= 1024px)</code>
        <p style="margin-top: 10px; font-size: 0.9rem;">Cleaner syntax for ranges</p>
      </div>
    </div>
    
    <div class="legend">
      <div class="legend-item">
        <div class="legend-dot" style="background: #22c55e;"></div>
        <span>Active (highlighted)</span>
      </div>
      <div class="legend-item">
        <div class="legend-dot" style="background: #94a3b8;"></div>
        <span>Inactive (dimmed)</span>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Interactive playground
  const playgroundExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Breakpoints Playground</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      min-height: 100vh;
      padding: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
      }
    }
    
    .playground {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .playground {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
    
    .playground-header {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: white;
      padding: 25px;
      text-align: center;
    }
    
    .playground-header h1 {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }
    
    .playground-header p {
      opacity: 0.8;
    }
    
    /* Breakpoint indicator bar */
    .breakpoint-bar {
      display: flex;
      height: 50px;
      background: #f8fafc;
    }
    
    @media (prefers-color-scheme: dark) {
      .breakpoint-bar {
        background: #1e293b;
      }
    }
    
    .bp-segment {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.8rem;
      transition: all 0.3s ease;
      border-right: 1px solid rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .bp-segment {
        border-right-color: rgba(255,255,255,0.1);
      }
    }
    
    .bp-xs { background: #dbeafe; color: #1d4ed8; }
    .bp-sm { background: #cffafe; color: #0891b2; }
    .bp-md { background: #d1fae5; color: #059669; }
    .bp-lg { background: #ede9fe; color: #7c3aed; }
    .bp-xl { background: #fed7aa; color: #c2410c; }
    
    @media (prefers-color-scheme: dark) {
      .bp-xs { background: #1e3a8a; color: #93c5fd; }
      .bp-sm { background: #164e63; color: #67e8f9; }
      .bp-md { background: #064e3b; color: #6ee7b7; }
      .bp-lg { background: #4c1d95; color: #c4b5fd; }
      .bp-xl { background: #7c2d12; color: #fdba74; }
    }
    
    /* Active breakpoint highlight */
    .bp-segment.active {
      transform: scaleY(1.2);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 10;
    }
    
    /* Default - mobile */
    .bp-xs.active { display: flex; }
    .bp-sm, .bp-md, .bp-lg, .bp-xl { opacity: 0.4; }
    .bp-xs { opacity: 1; transform: scaleY(1.1); }
    
    @media (min-width: 640px) {
      .bp-xs { opacity: 0.4; transform: none; }
      .bp-sm { opacity: 1; transform: scaleY(1.1); }
    }
    
    @media (min-width: 768px) {
      .bp-sm { opacity: 0.4; transform: none; }
      .bp-md { opacity: 1; transform: scaleY(1.1); }
    }
    
    @media (min-width: 1024px) {
      .bp-md { opacity: 0.4; transform: none; }
      .bp-lg { opacity: 1; transform: scaleY(1.1); }
    }
    
    @media (min-width: 1280px) {
      .bp-lg { opacity: 0.4; transform: none; }
      .bp-xl { opacity: 1; transform: scaleY(1.1); }
    }
    
    .playground-content {
      padding: 30px;
    }
    
    /* Responsive grid demo */
    .demo-grid {
      display: grid;
      gap: 15px;
      margin-bottom: 30px;
    }
    
    /* Mobile: 1 column */
    .demo-grid {
      grid-template-columns: 1fr;
    }
    
    /* Small: 2 columns */
    @media (min-width: 640px) {
      .demo-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    /* Medium: 3 columns */
    @media (min-width: 768px) {
      .demo-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    /* Large: 4 columns */
    @media (min-width: 1024px) {
      .demo-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .demo-card {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    
    .demo-card:hover {
      transform: translateY(-5px);
    }
    
    .demo-card h3 {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    
    .demo-card p {
      font-size: 0.9rem;
      opacity: 0.9;
    }
    
    /* Current breakpoint display */
    .current-bp {
      text-align: center;
      padding: 20px;
      background: #f0f9ff;
      border-radius: 12px;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .current-bp {
        background: #1e3a8a;
      }
    }
    
    .current-bp::before {
      content: '📱 Current: xs (Mobile)';
      font-size: 1.2rem;
      font-weight: 600;
      color: #1d4ed8;
    }
    
    @media (prefers-color-scheme: dark) {
      .current-bp::before {
        color: #93c5fd;
      }
    }
    
    @media (min-width: 640px) {
      .current-bp::before {
        content: '📱 Current: sm (640px+)';
        color: #0891b2;
      }
    }
    
    @media (min-width: 768px) {
      .current-bp::before {
        content: '📱 Current: md (768px+)';
        color: #059669;
      }
    }
    
    @media (min-width: 1024px) {
      .current-bp::before {
        content: '💻 Current: lg (1024px+)';
        color: #7c3aed;
      }
    }
    
    @media (min-width: 1280px) {
      .current-bp::before {
        content: '🖥️ Current: xl (1280px+)';
        color: #c2410c;
      }
    }
    
    .info-section {
      display: grid;
      gap: 15px;
      margin-top: 20px;
    }
    
    @media (min-width: 768px) {
      .info-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .info-card {
      padding: 20px;
      background: #f8fafc;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card {
        background: #1e293b;
        border-left-color: #60a5fa;
      }
    }
    
    .info-card h4 {
      color: #1e293b;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card h4 {
        color: #f1f5f9;
      }
    }
    
    .info-card ul {
      margin-left: 20px;
      color: #64748b;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card ul {
        color: #94a3b8;
      }
    }
    
    .info-card li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="playground">
    <div class="playground-header">
      <h1>🎮 Breakpoints Playground</h1>
      <p>Resize your browser to see responsive breakpoints in action!</p>
    </div>
    
    <div class="breakpoint-bar">
      <div class="bp-segment bp-xs">xs<br>&lt;640px</div>
      <div class="bp-segment bp-sm">sm<br>≥640px</div>
      <div class="bp-segment bp-md">md<br>≥768px</div>
      <div class="bp-segment bp-lg">lg<br>≥1024px</div>
      <div class="bp-segment bp-xl">xl<br>≥1280px</div>
    </div>
    
    <div class="playground-content">
      <div class="current-bp"></div>
      
      <div class="demo-grid">
        <div class="demo-card">
          <h3>1</h3>
          <p>Grid Item</p>
        </div>
        <div class="demo-card">
          <h3>2</h3>
          <p>Grid Item</p>
        </div>
        <div class="demo-card">
          <h3>3</h3>
          <p>Grid Item</p>
        </div>
        <div class="demo-card">
          <h3>4</h3>
          <p>Grid Item</p>
        </div>
      </div>
      
      <div class="info-section">
        <div class="info-card">
          <h4>📐 Common Breakpoints</h4>
          <ul>
            <li><strong>xs:</strong> 0px (mobile default)</li>
            <li><strong>sm:</strong> 640px (large phones)</li>
            <li><strong>md:</strong> 768px (tablets)</li>
            <li><strong>lg:</strong> 1024px (laptops)</li>
            <li><strong>xl:</strong> 1280px (desktops)</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h4>💡 Best Practices</h4>
          <ul>
            <li>Use mobile-first approach</li>
            <li>Test on real devices</li>
            <li>Don't create too many breakpoints</li>
            <li>Use content-based breakpoints</li>
            <li>Consider touch vs mouse input</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8 max-w-full overflow-hidden">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Scaling}
        category="CSS · Responsive Design"
        title="CSS Breakpoints"
        description="Master responsive breakpoints to create layouts that adapt seamlessly across all device sizes"
        colorTheme="blue"
      />

      {/* INTRODUCTION CARD */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Scaling className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What are CSS Breakpoints?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            📱 Breakpoints are specific viewport widths where your layout changes to provide the best experience!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Interactive Demo Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Device Breakpoints Visual */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  🎯 Common Breakpoints
                </h4>

                <div className="space-y-3">
                  {breakpoints.map((bp) => {
                    const Icon = bp.icon;
                    return (
                      <button
                        key={bp.name}
                        onClick={() => setSelectedBreakpoint(bp.name)}
                        className={cn(
                          "w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300",
                          selectedBreakpoint === bp.name
                            ? "bg-blue-100 dark:bg-blue-900/40 border-2 border-blue-500 shadow-md"
                            : "bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          `bg-${bp.color}-100 dark:bg-${bp.color}-900/30`
                        )}>
                          <Icon className={cn("w-5 h-5", `text-${bp.color}-600 dark:text-${bp.color}-400`)} />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{bp.name}</Badge>
                            <span className="font-semibold text-sm">{bp.label}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{bp.size} • {bp.devices}</div>
                        </div>
                        <ArrowRight className={cn(
                          "w-4 h-4 transition-transform",
                          selectedBreakpoint === bp.name ? "translate-x-1" : ""
                        )} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Media Query Syntax */}
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">breakpoints.css</span>
                </div>
                <div className="font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500">/* Mobile-first breakpoints */</div>
                  <div className="text-purple-400">@media</div>
                  <span className="text-white"> (</span>
                  <span className="text-blue-400">min-width</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-400">768px</span>
                  <span className="text-white">) {'{'}</span>
                  <div className="text-white ml-4">  <span className="text-blue-400">.element</span> {'{'}</div>
                  <div className="text-white ml-8">    <span className="text-cyan-400">padding</span>: <span className="text-yellow-400">2rem</span>;</div>
                  <div className="text-white ml-4">  {'}'}</div>
                  <div className="text-white">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Side Info Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2 animate-bounce">📐</div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Why Breakpoints?</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Adapt to any device
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Better user experience
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Consistent layouts
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50 dark:border-yellow-800/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Pro Tip!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Start with mobile styles first, then add breakpoints for larger screens (mobile-first approach)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SECTION 1: Basic Breakpoints */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Standard Breakpoints
          </CardTitle>
          <CardDescription>
            Learn the common breakpoint values used across the industry
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicBreakpointsExample}
            title="Standard Breakpoints Demo"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Key Points:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Mobile-first:</strong> Start with base styles, add min-width media queries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Common sizes:</strong> 640px, 768px, 1024px, 1280px, 1536px</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>Test thoroughly:</strong> Always test on real devices when possible</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* SECTION 2: Custom Breakpoints */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Settings className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Custom Breakpoints with CSS Variables
          </CardTitle>
          <CardDescription>
            Create your own breakpoint system using CSS custom properties
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={customBreakpointsExample}
            title="Custom Breakpoints with Variables"
            colorTheme="green"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">🎨 Benefits of Custom Breakpoints:</h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Match your design system's specific needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Update values in one place for consistency</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Combine with CSS variables for dynamic spacing</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* SECTION 3: Breakpoint Ranges */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            3. Breakpoint Ranges & Modern Syntax
          </CardTitle>
          <CardDescription>
            Different ways to target specific screen size ranges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={breakpointRangesExample}
            title="Breakpoint Range Operators"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />

          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>CSS Level 4 Range Syntax</AlertTitle>
            <AlertDescription>
              The new range syntax <code className="px-1 bg-muted rounded">@media (768px &lt;= width &lt;= 1024px)</code> is more readable!
              It's supported in all modern browsers (Chrome 104+, Firefox 102+, Safari 16.4+).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* QUICK REFERENCE */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Layout className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            Quick Reference
          </CardTitle>
          <CardDescription>
            Common breakpoint patterns at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">@media (min-width: 768px)</code>
              <p className="text-sm text-muted-foreground mt-1">Tablet and above (mobile-first ✅)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">@media (max-width: 767px)</code>
              <p className="text-sm text-muted-foreground mt-1">Mobile only (desktop-first ⚠️)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">@media (min-width: 768px) and (max-width: 1023px)</code>
              <p className="text-sm text-muted-foreground mt-1">Tablet only (specific range)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">@media (768px &lt;= width &lt;= 1024px)</code>
              <p className="text-sm text-muted-foreground mt-1">Modern range syntax (CSS Level 4) ✨</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEST PRACTICES */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Best Practices</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Mobile-first:</strong> Start with mobile styles, enhance for larger screens</li>
            <li><strong>Content-based:</strong> Let your content determine where breakpoints should be</li>
            <li><strong>Limit breakpoints:</strong> 3-5 breakpoints are usually enough</li>
            <li><strong>Use relative units:</strong> Combine with rem/em for better scaling</li>
            <li><strong>Test on real devices:</strong> Emulators don't catch everything</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* INTERACTIVE PLAYGROUND */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            🎮 Interactive Playground
          </CardTitle>
          <CardDescription>
            Experiment with breakpoints - resize your browser to see them in action!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={playgroundExample}
            title="Breakpoints Playground"
            colorTheme="cyan"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

