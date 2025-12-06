'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Database, Hash, Type, Palette, List, CheckCircle, FileJson, Globe, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassDataTypesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassDataTypes({ onOpenWebPlayground }: SassDataTypesProps) {
  
  const numbersExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Numbers in Sass</title>
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
      max-width: 1000px;
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
      font-size: 14px;
    }
    
    .examples {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .example-card {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 20px;
      border-radius: 12px;
      border: 3px solid #3b82f6;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .type-label {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .type-label { color: #bfdbfe; }
    }
    
    .code {
      background: #0f172a;
      padding: 12px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #10b981;
      margin-bottom: 10px;
    }
    
    .result {
      color: #1e40af;
      font-weight: 600;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .result { color: #dbeafe; }
    }
    
    .demo-box {
      width: 100px;
      height: 100px;
      margin: 15px auto;
      border-radius: 8px;
      background: #3b82f6;
    }
    
    .demo-box.with-unit {
      width: 80px;
      height: 80px;
      background: #10b981;
    }
    
    .demo-box.unitless {
      width: 50px;
      height: 50px;
      background: #f59e0b;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔢 Numbers in Sass</h1>
    <p class="subtitle">Numbers can have units or be unitless</p>
    
    <div class="examples">
      <div class="example-card">
        <div class="type-label">With Units (px)</div>
        <div class="code">$width: 100px;</div>
        <div class="demo-box"></div>
        <div class="result">100px × 100px</div>
      </div>
      
      <div class="example-card">
        <div class="type-label">With Units (rem)</div>
        <div class="code">$padding: 5rem;</div>
        <div class="demo-box with-unit"></div>
        <div class="result">80px × 80px</div>
      </div>
      
      <div class="example-card">
        <div class="type-label">Unitless</div>
        <div class="code">$opacity: 0.8;</div>
        <div class="demo-box unitless"></div>
        <div class="result">50px × 50px (80% opacity)</div>
      </div>
      
      <div class="example-card">
        <div class="type-label">Math Operations</div>
        <div class="code">$size: 10px * 5;</div>
        <div class="result">Result: 50px</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const stringsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Strings in Sass</title>
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
      max-width: 1000px;
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
      font-size: 14px;
    }
    
    .examples {
      display: grid;
      gap: 20px;
    }
    
    .example-card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);
        border-color: #6ee7b7;
      }
    }
    
    .type-label {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .type-label { color: #d1fae5; }
    }
    
    .code {
      background: #0f172a;
      padding: 12px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #10b981;
      margin: 10px 0;
    }
    
    .demo {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 10px;
      border: 2px dashed #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
        background: #1e293b;
        border-color: #6ee7b7;
      }
    }
    
    .demo::before {
      content: "Hello, Sass!";
      font-size: 18px;
      font-weight: 600;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo::before { color: #d1fae5; }
    }
    
    .font-demo {
      font-family: 'Georgia', serif;
      font-size: 20px;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Strings in Sass</h1>
    <p class="subtitle">Text values with or without quotes</p>
    
    <div class="examples">
      <div class="example-card">
        <div class="type-label">
          <span>✅</span>
          <span>Quoted Strings</span>
        </div>
        <div class="code">$font-family: "Helvetica Neue", sans-serif;</div>
        <div class="code">$message: 'Hello, Sass!';</div>
        <div class="demo"></div>
      </div>
      
      <div class="example-card">
        <div class="type-label">
          <span>✅</span>
          <span>Unquoted Strings</span>
        </div>
        <div class="code">$display: block;</div>
        <div class="code">$position: relative;</div>
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <div style="color: #065f46; font-size: 14px;">display: block;</div>
          <div style="color: #065f46; font-size: 14px;">position: relative;</div>
        </div>
      </div>
      
      <div class="example-card">
        <div class="type-label">
          <span>🔗</span>
          <span>String Concatenation</span>
        </div>
        <div class="code">$prefix: "btn-";</div>
        <div class="code">$class: $prefix + "primary";</div>
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-top: 10px; color: #065f46;">
          Result: .btn-primary
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const colorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Colors in Sass</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #9f1239 0%, #881337 100%); }
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
      color: #ec4899;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #f9a8d4; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 14px;
    }
    
    .formats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .format-card {
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 20px;
      border-radius: 12px;
      border: 3px solid #ec4899;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .format-card {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
        border-color: #f9a8d4;
      }
    }
    
    .format-label {
      color: #9f1239;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .format-label { color: #fce7f3; }
    }
    
    .code {
      background: #0f172a;
      padding: 10px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      color: #ec4899;
      margin: 10px 0;
    }
    
    .color-box {
      width: 100%;
      height: 80px;
      border-radius: 8px;
      margin-top: 10px;
    }
    
    .hex { background: #3b82f6; }
    .rgb { background: rgb(16, 185, 129); }
    .rgba { background: rgba(245, 158, 11, 0.7); }
    .hsl { background: hsl(280, 60%, 60%); }
    .hsla { background: hsla(350, 80%, 60%, 0.8); }
    .named { background: tomato; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Colors in Sass</h1>
    <p class="subtitle">Multiple color formats supported</p>
    
    <div class="formats">
      <div class="format-card">
        <div class="format-label">Hex Colors</div>
        <div class="code">$blue: #3b82f6;</div>
        <div class="color-box hex"></div>
      </div>
      
      <div class="format-card">
        <div class="format-label">RGB</div>
        <div class="code">$green: rgb(16, 185, 129);</div>
        <div class="color-box rgb"></div>
      </div>
      
      <div class="format-card">
        <div class="format-label">RGBA (Transparent)</div>
        <div class="code">$orange: rgba(245, 158, 11, 0.7);</div>
        <div class="color-box rgba"></div>
      </div>
      
      <div class="format-card">
        <div class="format-label">HSL</div>
        <div class="code">$purple: hsl(280, 60%, 60%);</div>
        <div class="color-box hsl"></div>
      </div>
      
      <div class="format-card">
        <div class="format-label">HSLA (Transparent)</div>
        <div class="code">$pink: hsla(350, 80%, 60%, 0.8);</div>
        <div class="color-box hsla"></div>
      </div>
      
      <div class="format-card">
        <div class="format-label">Named Colors</div>
        <div class="code">$color: tomato;</div>
        <div class="color-box named"></div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const listsAndMapsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lists and Maps</title>
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
      max-width: 1000px;
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
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
    }
    
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
    }
    
    .section {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .section {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    h2 {
      color: #6b21a8;
      margin-bottom: 15px;
      font-size: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 { color: #ddd6fe; }
    }
    
    .code-block {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #c4b5fd;
      margin: 12px 0;
      line-height: 1.6;
    }
    
    .demo-list {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      flex-wrap: wrap;
    }
    
    .demo-item {
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      color: white;
    }
    
    .demo-item:nth-child(1) { background: #3b82f6; }
    .demo-item:nth-child(2) { background: #10b981; }
    .demo-item:nth-child(3) { background: #f59e0b; }
    .demo-item:nth-child(4) { background: #ef4444; }
    
    .map-demo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 15px;
    }
    
    .map-item {
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: white;
    }
    
    .map-item:nth-child(1) { background: #3b82f6; }
    .map-item:nth-child(2) { background: #64748b; }
    .map-item:nth-child(3) { background: #10b981; }
    .map-item:nth-child(4) { background: #ef4444; }
    
    .label {
      font-size: 11px;
      opacity: 0.9;
      display: block;
      margin-top: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📋 Lists & Maps</h1>
    
    <div class="grid">
      <div class="section">
        <h2>📝 Lists (Arrays)</h2>
        <div class="code-block">
$colors: blue, green, orange, red;<br>
$margins: 10px 20px 10px 20px;<br>
$fonts: Arial, sans-serif;
        </div>
        <div class="demo-list">
          <div class="demo-item">Blue</div>
          <div class="demo-item">Green</div>
          <div class="demo-item">Orange</div>
          <div class="demo-item">Red</div>
        </div>
      </div>
      
      <div class="section">
        <h2>🗺️ Maps (Key-Value)</h2>
        <div class="code-block">
$theme-colors: (<br>
&nbsp;&nbsp;primary: #3b82f6,<br>
&nbsp;&nbsp;secondary: #64748b,<br>
&nbsp;&nbsp;success: #10b981,<br>
&nbsp;&nbsp;danger: #ef4444<br>
);
        </div>
        <div class="map-demo">
          <div class="map-item">
            Primary
            <span class="label">key: primary</span>
          </div>
          <div class="map-item">
            Secondary
            <span class="label">key: secondary</span>
          </div>
          <div class="map-item">
            Success
            <span class="label">key: success</span>
          </div>
          <div class="map-item">
            Danger
            <span class="label">key: danger</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const booleansAndNullExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Booleans & Null</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body { background: linear-gradient(135deg, #92400e 0%, #78350f 100%); }
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
      color: #f59e0b;
      text-align: center;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #fcd34d; }
    }
    
    .examples {
      display: grid;
      gap: 25px;
    }
    
    .example-card {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: linear-gradient(135deg, #92400e 0%, #78350f 100%);
        border-color: #fcd34d;
      }
    }
    
    .type-label {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .type-label { color: #fef3c7; }
    }
    
    .code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #fbbf24;
      margin: 12px 0;
      line-height: 1.6;
    }
    
    .demo {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-top: 15px;
      border: 2px dashed #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
        background: #1e293b;
        border-color: #fcd34d;
      }
    }
    
    .toggle {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
    }
    
    .toggle-on {
      background: #10b981;
      color: white;
    }
    
    .toggle-off {
      background: #ef4444;
      color: white;
    }
    
    .note {
      margin-top: 10px;
      padding: 10px;
      background: #fff7ed;
      border-radius: 6px;
      font-size: 13px;
      color: #92400e;
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
    <h1>✓ Booleans & Null</h1>
    
    <div class="examples">
      <div class="example-card">
        <div class="type-label">
          <span>✅</span>
          <span>Boolean: true</span>
        </div>
        <div class="code">
$enable-grid: true;<br>
$debug-mode: false;
        </div>
        <div class="demo">
          <div class="toggle toggle-on">
            ✓ Feature Enabled
          </div>
        </div>
        <div class="note">
          💡 Use with @if/@else conditions to toggle features
        </div>
      </div>
      
      <div class="example-card">
        <div class="type-label">
          <span>❌</span>
          <span>Boolean: false</span>
        </div>
        <div class="code">
$enable-animations: false;
        </div>
        <div class="demo">
          <div class="toggle toggle-off">
            ✗ Feature Disabled
          </div>
        </div>
      </div>
      
      <div class="example-card">
        <div class="type-label">
          <span>⚪</span>
          <span>Null (No Value)</span>
        </div>
        <div class="code">
$border: null;<br>
// Property won't be rendered
        </div>
        <div class="demo">
          <div style="color: #64748b; text-align: center; padding: 15px;">
            When a variable is null, the CSS property is not generated at all.
          </div>
        </div>
        <div class="note">
          💡 Useful for optional properties that may not always be needed
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Database}
        category="Sass/SCSS · Fundamentals"
        title="Data Types"
        description="Understanding all data types available in Sass - numbers, strings, colors, lists, maps, booleans, and null"
        colorTheme="pink"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Database className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Sass Data Types
          </CardTitle>
          <CardDescription>
            Seven core data types for flexible styling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sass supports <strong className="text-foreground">7 different data types</strong> that you can use in variables, 
            functions, and operations. Understanding these types helps you write more powerful and flexible stylesheets.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Hash className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-1">Numbers</h4>
              <p className="text-xs text-muted-foreground">10px, 2rem, 0.5</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <Type className="h-5 w-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">Strings</h4>
              <p className="text-xs text-muted-foreground">"Arial", sans-serif</p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-1">Colors</h4>
              <p className="text-xs text-muted-foreground">#3b82f6, rgba()</p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <List className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-1">Lists</h4>
              <p className="text-xs text-muted-foreground">10px 20px 30px</p>
            </div>
            
            <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <FileJson className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mb-2" />
              <h4 className="font-semibold mb-1">Maps</h4>
              <p className="text-xs text-muted-foreground">(key: value)</p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mb-2" />
              <h4 className="font-semibold mb-1">Booleans</h4>
              <p className="text-xs text-muted-foreground">true, false</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
              <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400 mb-2" />
              <h4 className="font-semibold mb-1">Null</h4>
              <p className="text-xs text-muted-foreground">No value</p>
            </div>
            
            <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
              <FileJson className="h-5 w-5 text-teal-600 dark:text-teal-400 mb-2" />
              <h4 className="font-semibold mb-1">Functions</h4>
              <p className="text-xs text-muted-foreground">get-function()</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Numbers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Hash className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Numbers
          </CardTitle>
          <CardDescription>
            Numeric values with or without units
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={numbersExample}
            title="Numbers in Sass"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">With Units</h4>
              <div className="space-y-1 text-sm font-mono text-blue-700 dark:text-blue-300">
                <div>$width: <span className="text-pink-600 dark:text-pink-400">100px</span>;</div>
                <div>$margin: <span className="text-pink-600 dark:text-pink-400">2rem</span>;</div>
                <div>$duration: <span className="text-pink-600 dark:text-pink-400">0.5s</span>;</div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Unitless (Pure Numbers)</h4>
              <div className="space-y-1 text-sm font-mono text-blue-700 dark:text-blue-300">
                <div>$opacity: <span className="text-pink-600 dark:text-pink-400">0.8</span>;</div>
                <div>$z-index: <span className="text-pink-600 dark:text-pink-400">1000</span>;</div>
                <div>$line-height: <span className="text-pink-600 dark:text-pink-400">1.6</span>;</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Type className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Strings
          </CardTitle>
          <CardDescription>
            Text values with or without quotes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={stringsExample}
            title="Strings in Sass"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Type className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">String Tips</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Quoted strings:</strong> Use for font names with spaces</li>
                <li><strong>Unquoted strings:</strong> CSS keywords like <code>block</code>, <code>relative</code></li>
                <li><strong>Concatenation:</strong> Use <code>+</code> to combine strings</li>
                <li><strong>Interpolation:</strong> Use <code>#{`$variable`}</code> inside strings</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Colors
          </CardTitle>
          <CardDescription>
            Multiple color format support
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={colorsExample}
            title="Color Formats"
            colorTheme="pink"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Color Functions</h4>
              <div className="space-y-1 text-sm font-mono text-pink-700 dark:text-pink-300">
                <div>lighten($color, 10%)</div>
                <div>darken($color, 10%)</div>
                <div>rgba($color, 0.5)</div>
                <div>mix($color1, $color2)</div>
              </div>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">All Formats Work</h4>
              <p className="text-sm text-pink-700 dark:text-pink-300">
                Sass supports all CSS color formats plus powerful color manipulation functions!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lists and Maps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <List className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Lists & Maps
          </CardTitle>
          <CardDescription>
            Collections of values and key-value pairs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={listsAndMapsExample}
            title="Lists & Maps Demo"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📝 Lists</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                Ordered collection of values (like arrays)
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block">
                $sizes: 10px, 20px, 30px;
              </code>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🗺️ Maps</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                Key-value pairs (like objects)
              </p>
              <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded block">
                $colors: (primary: blue)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booleans and Null */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            Booleans & Null
          </CardTitle>
          <CardDescription>
            True/false values and empty values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={booleansAndNullExample}
            title="Booleans & Null"
            colorTheme="orange"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">When to Use</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Booleans:</strong> Control flow with @if/@else statements</li>
                <li><strong>Null:</strong> Optional properties that may not always render</li>
                <li><strong>Feature flags:</strong> Toggle features on/off in your stylesheet</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Type Checking */}
      <Card>
        <CardHeader>
          <CardTitle>Type Checking Functions</CardTitle>
          <CardDescription>
            Check variable types in Sass
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">type-of($value)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Returns the type of a value as a string
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">unit($number)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Returns the unit of a number (px, rem, etc.)
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">unitless($number)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Returns true if number has no unit
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">comparable($num1, $num2)</code>
              <p className="text-sm text-muted-foreground mt-2">
                Check if two numbers can be compared
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Data Type Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use appropriate types</strong> - Choose the right type for your data</li>
            <li><strong>Quote font names</strong> - Always quote fonts with spaces</li>
            <li><strong>Use maps for themes</strong> - Organize color schemes with maps</li>
            <li><strong>Leverage booleans</strong> - Control features with conditional logic</li>
            <li><strong>Type checking</strong> - Use type-of() for debugging</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
