'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Eye, EyeOff, Sparkles, MousePointer, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssVisibilityOpacityProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssVisibilityOpacity({ onOpenWebPlayground }: CssVisibilityOpacityProps) {
  
  const visibilityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Visibility</title>
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
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .container {
      max-width: 800px;
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
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .demo-section {
      background: #f5f3ff;
      padding: 25px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-section {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    .demo-section h2 {
      color: #7c3aed;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-section h2 {
        color: #c4b5fd;
      }
    }
    
    .box {
      width: 200px;
      height: 100px;
      background: #ddd6fe;
      border: 2px solid #8b5cf6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #5b21b6;
      margin: 15px auto;
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #5b21b6;
        color: #e9d5ff;
        border-color: #a78bfa;
      }
    }
    
    .hidden-box {
      visibility: hidden;
    }
    
    .spacer {
      height: 20px;
      background: repeating-linear-gradient(
        45deg,
        #fbbf24,
        #fbbf24 10px,
        #fef3c7 10px,
        #fef3c7 20px
      );
      border-radius: 4px;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .spacer {
        background: repeating-linear-gradient(
          45deg,
          #78350f,
          #78350f 10px,
          #451a03 10px,
          #451a03 20px
        );
      }
    }
    
    .note {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      color: #78350f;
      margin: 15px 0;
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #78350f;
        color: #fef3c7;
        border-color: #fcd34d;
      }
    }
    
    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #0f172a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👻 CSS Visibility</h1>
    <p class="subtitle">Hiding elements while keeping their space</p>
    
    <div class="demo-section">
      <h2>visibility: visible (default)</h2>
      <div class="box">Visible Box</div>
      <div class="spacer"></div>
      <p style="text-align: center; color: #6b7280;">Normal element, takes up space</p>
    </div>
    
    <div class="demo-section">
      <h2>visibility: hidden</h2>
      <div class="box hidden-box">Hidden Box</div>
      <div class="spacer"></div>
      <p style="text-align: center; color: #6b7280;">
        Element is invisible but STILL takes up space!<br>
        Notice the gap above?
      </p>
      
      <div class="code">
.hidden {
  visibility: hidden;
}
      </div>
    </div>
    
    <div class="note">
      <strong>🔑 Key Point:</strong><br>
      visibility: hidden makes the element invisible, but it still occupies space in the layout. 
      Other elements don't move to fill the gap.
    </div>
    
    <div class="note" style="background: #ecfdf5; color: #065f46; border-color: #10b981;">
      <strong>💡 Common Use Case:</strong><br>
      Use visibility: hidden when you want to toggle elements without causing layout shifts. 
      Perfect for creating smooth animations where elements appear/disappear without jumping.
    </div>
  </div>
</body>
</html>`;

  const opacityExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Opacity</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
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
      color: #06b6d4;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .opacity-demo {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .opacity-box {
      height: 120px;
      background: #06b6d4;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 18px;
    }
    
    .opacity-100 { opacity: 1; }
    .opacity-75 { opacity: 0.75; }
    .opacity-50 { opacity: 0.5; }
    .opacity-25 { opacity: 0.25; }
    .opacity-0 { opacity: 0; }
    
    .label {
      font-size: 12px;
      margin-top: 5px;
      font-weight: normal;
    }
    
    .interactive-section {
      background: #ecfeff;
      padding: 30px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .interactive-section {
        background: #164e63;
        border-left-color: #22d3ee;
      }
    }
    
    .interactive-section h2 {
      color: #0891b2;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .interactive-section h2 {
        color: #67e8f9;
      }
    }
    
    .hover-box {
      width: 200px;
      height: 100px;
      background: #06b6d4;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      margin: 20px auto;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }
    
    .hover-box:hover {
      opacity: 0.7;
    }
    
    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #0f172a;
      }
    }
    
    .info {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      color: #78350f;
      margin: 20px 0;
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .info {
        background: #78350f;
        color: #fef3c7;
        border-color: #fcd34d;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💫 CSS Opacity</h1>
    <p class="subtitle">Make elements transparent (0 to 1)</p>
    
    <div class="opacity-demo">
      <div class="opacity-box opacity-100">
        100%
        <span class="label">opacity: 1</span>
      </div>
      <div class="opacity-box opacity-75">
        75%
        <span class="label">opacity: 0.75</span>
      </div>
      <div class="opacity-box opacity-50">
        50%
        <span class="label">opacity: 0.5</span>
      </div>
      <div class="opacity-box opacity-25">
        25%
        <span class="label">opacity: 0.25</span>
      </div>
      <div class="opacity-box opacity-0">
        0%
        <span class="label">opacity: 0</span>
      </div>
    </div>
    
    <div class="interactive-section">
      <h2>🖱️ Interactive Hover Effect</h2>
      <div class="hover-box">
        Hover over me!
      </div>
      <div class="code">
.hover-box {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.hover-box:hover {
  opacity: 0.7;
}
      </div>
      <p style="text-align: center; color: #0c4a6e;">
        Hover effects with opacity are smooth and professional
      </p>
    </div>
    
    <div class="info">
      <strong>🎯 Key Facts:</strong><br>
      • Opacity values range from 0 (invisible) to 1 (fully visible)<br>
      • Affects the entire element AND all children<br>
      • Element still takes up space even at opacity: 0<br>
      • Great for fade-in/fade-out animations
    </div>
  </div>
</body>
</html>`;

  const comparisonExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>display vs visibility vs opacity</title>
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
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
      }
    }
    
    .container {
      max-width: 1100px;
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
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .comparison-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .example {
      background: #fff7ed;
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #f97316;
    }
    
    @media (prefers-color-scheme: dark) {
      .example {
        background: #7c2d12;
        border-color: #fb923c;
      }
    }
    
    .example h3 {
      color: #ea580c;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .example h3 {
        color: #fdba74;
      }
    }
    
    .demo-container {
      background: white;
      padding: 15px;
      border-radius: 8px;
      min-height: 150px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-container {
        background: #1e293b;
      }
    }
    
    .box {
      width: 100%;
      height: 80px;
      background: #f97316;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      margin: 10px 0;
    }
    
    .box-display-none {
      display: none;
    }
    
    .box-visibility-hidden {
      visibility: hidden;
    }
    
    .box-opacity-0 {
      opacity: 0;
    }
    
    .feature-list {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      font-size: 14px;
      color: #78350f;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-list {
        background: #78350f;
        color: #fef3c7;
      }
    }
    
    .feature-list ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    
    .feature-list li {
      line-height: 1.8;
    }
    
    .comparison-table {
      width: 100%;
      margin: 30px 0;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-table {
        background: #334155;
      }
    }
    
    .comparison-table th {
      background: #f97316;
      color: white;
      padding: 15px;
      text-align: left;
      font-weight: 600;
    }
    
    .comparison-table td {
      padding: 15px;
      border-bottom: 1px solid #fed7aa;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-table td {
        border-bottom-color: #7c2d12;
        color: #e2e8f0;
      }
    }
    
    .comparison-table tr:last-child td {
      border-bottom: none;
    }
    
    .yes {
      color: #10b981;
      font-weight: 600;
    }
    
    .no {
      color: #ef4444;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚖️ display vs visibility vs opacity</h1>
    <p class="subtitle">Understanding the differences</p>
    
    <div class="comparison-grid">
      <div class="example">
        <h3>display: none</h3>
        <div class="demo-container">
          <div class="box">Box 1</div>
          <div class="box box-display-none">Hidden Box</div>
          <div class="box">Box 3</div>
        </div>
        <div class="feature-list">
          <ul>
            <li>❌ Not visible</li>
            <li>❌ Takes NO space</li>
            <li>❌ Not clickable</li>
            <li>⚡ Layout reflows</li>
          </ul>
        </div>
      </div>
      
      <div class="example">
        <h3>visibility: hidden</h3>
        <div class="demo-container">
          <div class="box">Box 1</div>
          <div class="box box-visibility-hidden">Hidden Box</div>
          <div class="box">Box 3</div>
        </div>
        <div class="feature-list">
          <ul>
            <li>❌ Not visible</li>
            <li>✅ Takes space</li>
            <li>❌ Not clickable</li>
            <li>🎯 No layout shift</li>
          </ul>
        </div>
      </div>
      
      <div class="example">
        <h3>opacity: 0</h3>
        <div class="demo-container">
          <div class="box">Box 1</div>
          <div class="box box-opacity-0">Hidden Box</div>
          <div class="box">Box 3</div>
        </div>
        <div class="feature-list">
          <ul>
            <li>❌ Not visible</li>
            <li>✅ Takes space</li>
            <li>✅ Still clickable!</li>
            <li>💫 Good for fades</li>
          </ul>
        </div>
      </div>
    </div>
    
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Visible</th>
          <th>Takes Space</th>
          <th>Clickable</th>
          <th>Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>display: none</strong></td>
          <td class="no">No</td>
          <td class="no">No</td>
          <td class="no">No</td>
          <td>Removing from layout</td>
        </tr>
        <tr>
          <td><strong>visibility: hidden</strong></td>
          <td class="no">No</td>
          <td class="yes">Yes</td>
          <td class="no">No</td>
          <td>Hiding without layout shift</td>
        </tr>
        <tr>
          <td><strong>opacity: 0</strong></td>
          <td class="no">No</td>
          <td class="yes">Yes</td>
          <td class="yes">Yes</td>
          <td>Fade animations</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Eye}
        category="CSS · Fundamentals"
        title="Visibility & Opacity"
        description="Control element visibility with different techniques and understand the differences"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Hiding Elements in CSS
          </CardTitle>
          <CardDescription>
            Three different ways to make elements invisible
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            CSS provides multiple ways to hide elements, each with different behavior. Understanding these 
            differences is crucial for creating smooth animations, interactive UIs, and responsive layouts.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <EyeOff className="h-6 w-6 text-red-600 dark:text-red-400 mb-2" />
              <h4 className="font-semibold mb-2">display: none</h4>
              <p className="text-sm text-muted-foreground">
                Removes from layout completely
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">visibility: hidden</h4>
              <p className="text-sm text-muted-foreground">
                Invisible but keeps space
              </p>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <Sparkles className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">opacity: 0</h4>
              <p className="text-sm text-muted-foreground">
                Transparent but interactive
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visibility Property */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <EyeOff className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            visibility Property
          </CardTitle>
          <CardDescription>
            Hide elements while preserving layout space
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={visibilityExample}
            title="visibility: hidden Example"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">When to Use visibility: hidden:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Toggle elements without causing layout shifts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Maintain spacing in grid/flex layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Prevent cumulative layout shift (CLS) issues</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Opacity Property */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            opacity Property
          </CardTitle>
          <CardDescription>
            Control transparency level from 0 to 1
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={opacityExample}
            title="Opacity Values & Hover Effects"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Info className="h-4 w-4 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Opacity Affects Children</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              When you set <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded">opacity</code> on 
              a parent, ALL child elements inherit that transparency. You can't make children more opaque than their parent!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <MousePointer className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            Complete Comparison
          </CardTitle>
          <CardDescription>
            display: none vs visibility: hidden vs opacity: 0
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={comparisonExample}
            title="Side-by-Side Comparison"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Visibility & Opacity Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use display: none</strong> - When element should not exist in layout</li>
            <li><strong>Use visibility: hidden</strong> - When you want to prevent layout shifts</li>
            <li><strong>Use opacity: 0</strong> - For smooth fade animations with transitions</li>
            <li><strong>Combine with transitions</strong> - opacity works great with CSS transitions</li>
            <li><strong>Consider accessibility</strong> - Hidden elements aren't read by screen readers</li>
            <li><strong>Watch for clickability</strong> - opacity: 0 elements are still interactive!</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Perfect Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Both <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">visibility</code> and 
          <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded mx-1">opacity</code> are supported 
          in all browsers including IE9+. These are fundamental CSS properties you can use with confidence!
        </AlertDescription>
      </Alert>
    </div>
  );
}
