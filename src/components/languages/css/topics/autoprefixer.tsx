'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Zap, CheckCircle, Code, Settings, ArrowRight, 
  Package, Terminal, FileCode, Sparkles, Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AutoprefixerProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function Autoprefixer({ onOpenWebPlayground }: AutoprefixerProps) {
  const [selectedDemo, setSelectedDemo] = useState('flexbox');

  const demos = [
    { id: 'flexbox', name: 'Flexbox', icon: Code, color: 'bg-blue-500' },
    { id: 'transforms', name: 'Transforms', icon: Zap, color: 'bg-purple-500' },
    { id: 'grid', name: 'Grid', icon: Package, color: 'bg-green-500' },
    { id: 'gradients', name: 'Gradients', icon: Sparkles, color: 'bg-pink-500' },
  ];

  // Flexbox Demo
  const flexboxDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autoprefixer - Flexbox</title>
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
      font-size: 1.1rem;
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .code-box {
      background: #f8fafc;
      border: 2px solid #3b82f6;
      border-radius: 12px;
      padding: 20px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-box {
        background: #0f172a;
        border-color: #60a5fa;
        color: #e2e8f0;
      }
    }
    
    .code-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: #3b82f6;
      margin-bottom: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-title {
        color: #60a5fa;
      }
    }
    
    .code-line {
      color: #1e293b;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-line {
        color: #cbd5e0;
      }
    }
    
    .prefix {
      color: #10b981;
      font-weight: 600;
    }
    
    .arrow {
      text-align: center;
      font-size: 2rem;
      color: #3b82f6;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .arrow {
        color: #60a5fa;
      }
    }
    
    /* Demo Flexbox with all prefixes */
    .flex-demo {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      
      gap: 16px;
      padding: 20px;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      border-radius: 12px;
      margin-top: 24px;
      flex-wrap: wrap;
    }
    
    @media (prefers-color-scheme: dark) {
      .flex-demo {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
      }
    }
    
    .flex-item {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      
      min-width: 120px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #3b82f6;
      font-weight: 600;
      color: #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .flex-item {
        background: #0f172a;
        border-color: #60a5fa;
        color: #60a5fa;
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
    <h1>⚡ Autoprefixer</h1>
    <p class="subtitle">Flexbox with Vendor Prefixes</p>
    
    <div class="comparison">
      <div class="code-box">
        <div class="code-title">📝 Your CSS (Input)</div>
        <div class="code-line">.flex-container {</div>
        <div class="code-line" style="margin-left: 20px;">display: flex;</div>
        <div class="code-line" style="margin-left: 20px;">justify-content: space-between;</div>
        <div class="code-line" style="margin-left: 20px;">align-items: center;</div>
        <div class="code-line">}</div>
      </div>
      
      <div class="arrow">→</div>
      
      <div class="code-box">
        <div class="code-title">✨ Autoprefixed (Output)</div>
        <div class="code-line">.flex-container {</div>
        <div class="code-line" style="margin-left: 20px;"><span class="prefix">display: -webkit-box;</span></div>
        <div class="code-line" style="margin-left: 20px;"><span class="prefix">display: -ms-flexbox;</span></div>
        <div class="code-line" style="margin-left: 20px;">display: flex;</div>
        <div class="code-line" style="margin-left: 20px;"><span class="prefix">-webkit-box-pack: justify;</span></div>
        <div class="code-line" style="margin-left: 20px;"><span class="prefix">-ms-flex-pack: justify;</span></div>
        <div class="code-line" style="margin-left: 20px;">justify-content: space-between;</div>
        <div class="code-line">}</div>
      </div>
    </div>
    
    <div class="flex-demo">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
    </div>
    
    <div class="info-box">
      <div class="info-title">💡 How it Works</div>
      <p class="info-text">
        Autoprefixer automatically adds vendor prefixes to your CSS based on current browser 
        popularity and support. You write modern CSS, and it handles the compatibility!
      </p>
    </div>
  </div>
</body>
</html>`;

  // Transforms Demo
  const transformsDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autoprefixer - Transforms</title>
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
    
    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 24px;
      background: linear-gradient(135deg, #fae8ff 0%, #fce7f3 100%);
      border-radius: 12px;
      margin-bottom: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-grid {
        background: linear-gradient(135deg, #6b21a8 0%, #9f1239 100%);
      }
    }
    
    .transform-card {
      padding: 24px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #a855f7;
      cursor: pointer;
    }
    
    @media (prefers-color-scheme: dark) {
      .transform-card {
        background: #0f172a;
        border-color: #e879f9;
        color: #e2e8f0;
      }
    }
    
    .transform-card:hover .box {
      -webkit-transform: scale(1.2) rotate(15deg);
      -moz-transform: scale(1.2) rotate(15deg);
      -ms-transform: scale(1.2) rotate(15deg);
      -o-transform: scale(1.2) rotate(15deg);
      transform: scale(1.2) rotate(15deg);
    }
    
    .box {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #a855f7, #ec4899);
      border-radius: 12px;
      margin: 0 auto 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    
    .card-title {
      color: #a855f7;
      font-weight: 700;
      margin-bottom: 4px;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-title {
        color: #e879f9;
      }
    }
    
    .card-desc {
      color: #64748b;
      font-size: 0.85rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .card-desc {
        color: #94a3b8;
      }
    }
    
    .code-example {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
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
    
    .prefix-highlight {
      color: #10b981;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔄 Autoprefixer</h1>
    <p class="subtitle">CSS Transforms with Vendor Prefixes - Hover to see!</p>
    
    <div class="demo-grid">
      <div class="transform-card">
        <div class="box">🎯</div>
        <div class="card-title">Scale & Rotate</div>
        <p class="card-desc">Hover to transform</p>
      </div>
      
      <div class="transform-card">
        <div class="box">✨</div>
        <div class="card-title">Smooth Transition</div>
        <p class="card-desc">With all prefixes</p>
      </div>
      
      <div class="transform-card">
        <div class="box">🚀</div>
        <div class="card-title">Cross-Browser</div>
        <p class="card-desc">Works everywhere</p>
      </div>
    </div>
    
    <div class="code-example">
      <div style="color: #94a3b8; margin-bottom: 10px;">/* Input CSS */</div>
      <div>.box {</div>
      <div style="margin-left: 20px;">transform: scale(1.2) rotate(15deg);</div>
      <div style="margin-left: 20px;">transition: all 0.3s ease;</div>
      <div>}</div>
      
      <div style="margin-top: 16px; color: #94a3b8;">/* Autoprefixed Output */</div>
      <div>.box {</div>
      <div style="margin-left: 20px;"><span class="prefix-highlight">-webkit-transform: scale(1.2) rotate(15deg);</span></div>
      <div style="margin-left: 20px;"><span class="prefix-highlight">-moz-transform: scale(1.2) rotate(15deg);</span></div>
      <div style="margin-left: 20px;"><span class="prefix-highlight">-ms-transform: scale(1.2) rotate(15deg);</span></div>
      <div style="margin-left: 20px;">transform: scale(1.2) rotate(15deg);</div>
      <div>}</div>
    </div>
  </div>
</body>
</html>`;

  // Grid Demo
  const gridDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autoprefixer - Grid</title>
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
    
    .grid-demo {
      display: -ms-grid;
      -ms-grid-columns: 1fr 20px 1fr 20px 1fr;
      -ms-grid-rows: auto 20px auto;
      
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      gap: 20px;
      
      padding: 24px;
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-radius: 12px;
      margin-bottom: 24px;
    }
    
    @media (prefers-color-scheme: dark) {
      .grid-demo {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
      }
    }
    
    .grid-item {
      padding: 24px;
      background: white;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #10b981;
    }
    
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
    
    @media (prefers-color-scheme: dark) {
      .grid-item {
        background: #0f172a;
        border-color: #34d399;
        color: #e2e8f0;
      }
    }
    
    .item-number {
      font-size: 2rem;
      font-weight: 700;
      color: #10b981;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .item-number {
        color: #34d399;
      }
    }
    
    .note-box {
      background: #dcfce7;
      border-left: 4px solid #10b981;
      padding: 16px;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .note-box {
        background: #065f46;
        border-left-color: #34d399;
      }
    }
    
    .note-title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .note-title {
        color: #a7f3d0;
      }
    }
    
    .note-text {
      color: #047857;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .note-text {
        color: #d1fae5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Autoprefixer</h1>
    <p class="subtitle">CSS Grid with IE 10/11 Support</p>
    
    <div class="grid-demo">
      <div class="grid-item">
        <div class="item-number">1</div>
        <p style="color: #64748b; font-size: 0.9rem;">Grid Item</p>
      </div>
      
      <div class="grid-item">
        <div class="item-number">2</div>
        <p style="color: #64748b; font-size: 0.9rem;">Grid Item</p>
      </div>
      
      <div class="grid-item">
        <div class="item-number">3</div>
        <p style="color: #64748b; font-size: 0.9rem;">Grid Item</p>
      </div>
    </div>
    
    <div class="note-box">
      <div class="note-title">⚡ Automatic Grid Prefixing</div>
      <p class="note-text">
        Autoprefixer can add -ms-grid prefixes for Internet Explorer 10-11, converting modern 
        Grid syntax to the older IE implementation. Perfect for maintaining backward compatibility!
      </p>
    </div>
  </div>
</body>
</html>`;

  // Gradients Demo
  const gradientsDemo = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autoprefixer - Gradients</title>
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
    
    .gradient-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .gradient-box {
      height: 150px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .gradient-1 {
      background: -webkit-linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      background: -moz-linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      background: -o-linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
    }
    
    .gradient-2 {
      background: -webkit-linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      background: -moz-linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      background: -o-linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    }
    
    .gradient-3 {
      background: -webkit-linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      background: -moz-linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      background: -o-linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
    }
    
    .gradient-4 {
      background: -webkit-linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
      background: -moz-linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
      background: -o-linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
      background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
    }
    
    .info-card {
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 24px;
      border-radius: 12px;
      border: 2px solid #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-card {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
        border-color: #f472b6;
      }
    }
    
    .info-title {
      color: #be185d;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 12px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-title {
        color: #fda4af;
      }
    }
    
    .info-text {
      color: #831843;
      line-height: 1.7;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-text {
        color: #fecdd3;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌈 Autoprefixer</h1>
    <p class="subtitle">CSS Gradients with Vendor Prefixes</p>
    
    <div class="gradient-gallery">
      <div class="gradient-box gradient-1">Pink Gradient</div>
      <div class="gradient-box gradient-2">Blue Gradient</div>
      <div class="gradient-box gradient-3">Green Gradient</div>
      <div class="gradient-box gradient-4">Orange Gradient</div>
    </div>
    
    <div class="info-card">
      <div class="info-title">✨ Perfect Gradients Everywhere</div>
      <p class="info-text">
        Autoprefixer adds -webkit-, -moz-, and -o- prefixes to linear gradients, ensuring 
        they work perfectly across all browsers including older versions of Safari, Firefox, 
        and Opera. Your gradients will look beautiful everywhere!
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <PageHeader
        icon={Zap}
        category="CSS · Build Tools"
        title="Autoprefixer"
        description="Automatically add vendor prefixes to CSS for perfect cross-browser compatibility"
        colorTheme="blue"
      />

      {/* INTRODUCTION */}
      <Card>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-300">
            <div className="relative">
              <Zap className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            What is Autoprefixer?
          </CardTitle>
          <CardDescription className="text-lg text-blue-600 dark:text-blue-400">
            ⚡ Write modern CSS, let Autoprefixer handle vendor prefixes automatically!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  🎯 How It Works
                </h4>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mb-2">
                        <FileCode className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">Your CSS</div>
                      <code className="text-xs text-gray-600 dark:text-gray-400 block mt-1">display: flex;</code>
                    </div>
                    
                    <div className="text-center">
                      <ArrowRight className="w-8 h-8 mx-auto text-blue-500" />
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">Autoprefixer</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-2">
                        <CheckCircle className="w-8 h-8 mx-auto text-green-600 dark:text-green-400" />
                      </div>
                      <div className="font-semibold text-sm text-green-700 dark:text-green-300">Prefixed CSS</div>
                      <code className="text-xs text-gray-600 dark:text-gray-400 block mt-1">-webkit-, -moz-</code>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                    <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Automatic</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        No manual prefix writing - runs during build time
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Up-to-Date</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Uses Can I Use database for current browser support
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                    <Settings className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Configurable</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">
                        Target specific browsers with browserslist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200/50">
                <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  📦 Installation
                </h4>
                
                <div className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                  <div>$ npm install autoprefixer postcss --save-dev</div>
                </div>

                <div className="text-sm text-blue-600 dark:text-blue-400">
                  <strong>Note:</strong> Autoprefixer is a PostCSS plugin, so you need PostCSS too!
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl border border-blue-200/50 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Autoprefixer</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Automatic Prefixing
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      PostCSS Plugin
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Can I Use Data
                    </div>
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Build Time Tool
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-yellow-200/50">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">Set It & Forget It!</div>
                  <div className="text-sm text-orange-600 dark:text-orange-400">
                    Configure once, works automatically in your build process
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* DEMO SELECTOR */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Autoprefixer in Action
          </CardTitle>
          <CardDescription>
            See how Autoprefixer adds vendor prefixes automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 ${demo.color} rounded-lg flex items-center justify-center`}>
                    <demo.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-gray-900 dark:text-gray-100">{demo.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected example */}
          {selectedDemo === 'flexbox' && (
            <FrontendCodePreview
              html={flexboxDemo}
              title="Flexbox Autoprefixing"
              colorTheme="blue"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedDemo === 'transforms' && (
            <FrontendCodePreview
              html={transformsDemo}
              title="Transform Autoprefixing"
              colorTheme="purple"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedDemo === 'grid' && (
            <FrontendCodePreview
              html={gridDemo}
              title="Grid Autoprefixing"
              colorTheme="green"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}

          {selectedDemo === 'gradients' && (
            <FrontendCodePreview
              html={gradientsDemo}
              title="Gradient Autoprefixing"
              colorTheme="pink"
              onOpenPlayground={onOpenWebPlayground}
            />
          )}
        </CardContent>
      </Card>

      {/* CONFIGURATION */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Configuration
          </CardTitle>
          <CardDescription>
            Configure Autoprefixer with browserslist
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-700 dark:text-gray-300 mb-2">package.json</div>
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto"><code>{`{
  "browserslist": [
    "last 2 versions",
    "> 1%",
    "not dead"
  ]
}`}</code></pre>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50">
                <div className="font-bold text-blue-700 dark:text-blue-300 mb-2">"last 2 versions"</div>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Last 2 versions of all browsers
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50">
                <div className="font-bold text-purple-700 dark:text-purple-300 mb-2">&gt; 1%</div>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Browsers with &gt;1% market share
                </p>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200/50">
                <div className="font-bold text-green-700 dark:text-green-300 mb-2">"not dead"</div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Exclude unmaintained browsers
                </p>
              </div>
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
            <li><strong>Configure browserslist</strong> - Target only browsers you need to support</li>
            <li><strong>Run in build process</strong> - Integrate with webpack, Vite, or other bundlers</li>
            <li><strong>Test output</strong> - Check generated CSS to ensure prefixes are added</li>
            <li><strong>Update regularly</strong> - Keep Autoprefixer updated for latest browser data</li>
            <li><strong>Don't write prefixes manually</strong> - Let Autoprefixer handle it all</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* INTEGRATION */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Framework Integration</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <div><strong>⚛️ Create React App:</strong> Built-in, no configuration needed!</div>
            <div><strong>⚡ Vite:</strong> Add to postcss.config.js</div>
            <div><strong>📦 Next.js:</strong> Built-in, configured automatically</div>
            <div><strong>🎨 Tailwind CSS:</strong> Included in Tailwind's PostCSS setup</div>
            <div><strong>📝 webpack:</strong> Use postcss-loader with autoprefixer</div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
