'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Variable, DollarSign, RefreshCw, CheckCircle, AlertCircle, Info, Sparkles, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassVariablesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassVariables({ onOpenWebPlayground }: SassVariablesProps) {
  
  const basicVariablesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 20px;
    }
    
    @media (max-width: 768px) {
      .comparison { grid-template-columns: 1fr; }
    }
    
    .code-card {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-card {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        border-color: #60a5fa;
      }
    }
    
    .label {
      color: #1e40af;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label { color: #bfdbfe; }
    }
    
    .code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #10b981;
      line-height: 1.6;
      margin: 10px 0;
    }
    
    .variable {
      color: #ec4899;
    }
    
    .buttons {
      display: flex;
      gap: 15px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    
    .button {
      padding: 12px 24px;
      border-radius: 8px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
      color: white;
    }
    
    .button:hover {
      transform: translateY(-2px);
    }
    
    .btn-primary {
      background: #3b82f6;
    }
    
    .btn-success {
      background: #10b981;
    }
    
    .btn-danger {
      background: #ef4444;
    }
    
    .note {
      background: #eff6ff;
      padding: 12px;
      border-radius: 6px;
      font-size: 13px;
      color: #1e40af;
      margin-top: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #1e3a8a;
        color: #dbeafe;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>$ Sass Variables</h1>
    <p class="subtitle">Store and reuse values throughout your stylesheet</p>
    
    <div class="comparison">
      <div class="code-card">
        <div class="label">
          <span>📝</span>
          <span>SCSS with Variables</span>
        </div>
        <div class="code">
<span class="variable">$primary</span>: #3b82f6;<br>
<span class="variable">$success</span>: #10b981;<br>
<span class="variable">$danger</span>: #ef4444;<br>
<br>
.btn-primary { background: <span class="variable">$primary</span>; }<br>
.btn-success { background: <span class="variable">$success</span>; }<br>
.btn-danger { background: <span class="variable">$danger</span>; }
        </div>
        <div class="note">
          ✓ Define once, use everywhere!
        </div>
      </div>
      
      <div class="code-card">
        <div class="label">
          <span>🎨</span>
          <span>Live Result</span>
        </div>
        <div class="buttons">
          <button class="button btn-primary">Primary</button>
          <button class="button btn-success">Success</button>
          <button class="button btn-danger">Danger</button>
        </div>
        <div class="note">
          ✓ Consistent colors across all buttons
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const scopeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Variable Scope</title>
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
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #6ee7b7; }
    }
    
    .scopes {
      display: grid;
      gap: 25px;
    }
    
    .scope-card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .scope-card {
        background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);
        border-color: #6ee7b7;
      }
    }
    
    .scope-title {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .scope-title { color: #d1fae5; }
    }
    
    .code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #10b981;
      line-height: 1.6;
      margin: 10px 0;
    }
    
    .variable {
      color: #ec4899;
    }
    
    .comment {
      color: #64748b;
    }
    
    .demo {
      display: flex;
      gap: 15px;
      margin-top: 15px;
      flex-wrap: wrap;
    }
    
    .box {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 12px;
    }
    
    .box-global {
      background: #3b82f6;
    }
    
    .box-local {
      background: #10b981;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔍 Variable Scope</h1>
    
    <div class="scopes">
      <div class="scope-card">
        <div class="scope-title">
          <span>🌍</span>
          <span>Global Variables</span>
        </div>
        <div class="code">
<span class="variable">$global-color</span>: #3b82f6;<br>
<br>
.header {<br>
&nbsp;&nbsp;color: <span class="variable">$global-color</span>;<br>
}<br>
<br>
.footer {<br>
&nbsp;&nbsp;color: <span class="variable">$global-color</span>; <span class="comment">// Works!</span><br>
}
        </div>
        <div class="demo">
          <div class="box box-global">Global</div>
        </div>
      </div>
      
      <div class="scope-card">
        <div class="scope-title">
          <span>📍</span>
          <span>Local Variables</span>
        </div>
        <div class="code">
.card {<br>
&nbsp;&nbsp;<span class="variable">$local-color</span>: #10b981;<br>
&nbsp;&nbsp;background: <span class="variable">$local-color</span>; <span class="comment">// Works</span><br>
}<br>
<br>
.button {<br>
&nbsp;&nbsp;background: <span class="variable">$local-color</span>; <span class="comment">// Error!</span><br>
}
        </div>
        <div class="demo">
          <div class="box box-local">Local</div>
        </div>
      </div>
      
      <div class="scope-card">
        <div class="scope-title">
          <span>⬆️</span>
          <span>!global Flag</span>
        </div>
        <div class="code">
.component {<br>
&nbsp;&nbsp;<span class="variable">$theme</span>: dark <span style="color: #f59e0b;">!global</span>;<br>
}<br>
<br>
.other {<br>
&nbsp;&nbsp;<span class="comment">// Can now access $theme</span><br>
&nbsp;&nbsp;background: <span class="variable">$theme</span>;<br>
}
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const defaultValuesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Default Values</title>
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
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #c4b5fd; }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 30px;
      font-size: 14px;
    }
    
    .examples {
      display: grid;
      gap: 25px;
    }
    
    .example-card {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: linear-gradient(135deg, #6b21a8 0%, #581c87 100%);
        border-color: #c4b5fd;
      }
    }
    
    .example-title {
      color: #6b21a8;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-title { color: #ddd6fe; }
    }
    
    .code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #c4b5fd;
      line-height: 1.6;
      margin: 10px 0;
    }
    
    .variable {
      color: #ec4899;
    }
    
    .default {
      color: #fbbf24;
    }
    
    .comment {
      color: #64748b;
    }
    
    .demo-box {
      padding: 20px;
      border-radius: 8px;
      margin-top: 15px;
      text-align: center;
      font-weight: 600;
      color: white;
    }
    
    .demo-default {
      background: #8b5cf6;
    }
    
    .demo-custom {
      background: #10b981;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Default Values</h1>
    <p class="subtitle">Use !default to provide fallback values</p>
    
    <div class="examples">
      <div class="example-card">
        <div class="example-title">✓ Without Override</div>
        <div class="code">
<span class="variable">$primary</span>: #8b5cf6 <span class="default">!default</span>;<br>
<br>
<span class="comment">// No override, uses default</span><br>
.button {<br>
&nbsp;&nbsp;background: <span class="variable">$primary</span>;<br>
}
        </div>
        <div class="demo-box demo-default">
          Default Color
        </div>
      </div>
      
      <div class="example-card">
        <div class="example-title">✓ With Override</div>
        <div class="code">
<span class="variable">$primary</span>: #10b981; <span class="comment">// Override</span><br>
<span class="variable">$primary</span>: #8b5cf6 <span class="default">!default</span>; <span class="comment">// Ignored</span><br>
<br>
.button {<br>
&nbsp;&nbsp;background: <span class="variable">$primary</span>; <span class="comment">// Uses #10b981</span><br>
}
        </div>
        <div class="demo-box demo-custom">
          Custom Color
        </div>
      </div>
      
      <div class="example-card">
        <div class="example-title">📚 Library Pattern</div>
        <div class="code">
<span class="comment">// _library.scss (component library)</span><br>
<span class="variable">$btn-bg</span>: #3b82f6 <span class="default">!default</span>;<br>
<span class="variable">$btn-padding</span>: 10px 20px <span class="default">!default</span>;<br>
<br>
<span class="comment">// _custom.scss (your customization)</span><br>
<span class="variable">$btn-bg</span>: #10b981; <span class="comment">// Override</span><br>
@import 'library'; <span class="comment">// Uses your color</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const interpolationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Variable Interpolation</title>
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
    
    .examples {
      display: grid;
      gap: 25px;
    }
    
    .example-card {
      background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: linear-gradient(135deg, #9f1239 0%, #881337 100%);
        border-color: #f9a8d4;
      }
    }
    
    .example-title {
      color: #9f1239;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-title { color: #fce7f3; }
    }
    
    .code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #ec4899;
      line-height: 1.6;
      margin: 10px 0;
    }
    
    .variable {
      color: #fbbf24;
    }
    
    .interpolation {
      color: #10b981;
    }
    
    .demo {
      margin-top: 15px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo {
        background: #1e293b;
        border-color: #f9a8d4;
      }
    }
    
    .btn-primary {
      background: #3b82f6;
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      border: none;
      font-weight: 600;
    }
    
    .icon-home::before {
      content: "🏠 ";
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>#{} Interpolation</h1>
    <p class="subtitle">Insert variables into selectors and strings</p>
    
    <div class="examples">
      <div class="example-card">
        <div class="example-title">1. In Selectors</div>
        <div class="code">
<span class="variable">$btn-type</span>: "primary";<br>
<br>
.btn-<span class="interpolation">#{'#{'}$btn-type{'}'}</span> {<br>
&nbsp;&nbsp;background: #3b82f6;<br>
}
        </div>
        <div class="demo">
          <button class="btn-primary">Primary Button</button>
        </div>
      </div>
      
      <div class="example-card">
        <div class="example-title">2. In Property Names</div>
        <div class="code">
<span class="variable">$side</span>: "left";<br>
<br>
.box {<br>
&nbsp;&nbsp;margin-<span class="interpolation">#{'#{'}$side{'}'}</span>: 20px;<br>
}
        </div>
      </div>
      
      <div class="example-card">
        <div class="example-title">3. In Strings</div>
        <div class="code">
<span class="variable">$icon</span>: "home";<br>
<br>
.icon-<span class="interpolation">#{'#{'}$icon{'}'}</span>::before {<br>
&nbsp;&nbsp;content: "🏠 ";<br>
}
        </div>
        <div class="demo">
          <span class="icon-home">Home Icon</span>
        </div>
      </div>
      
      <div class="example-card">
        <div class="example-title">4. In URLs</div>
        <div class="code">
<span class="variable">$path</span>: "/images";<br>
<span class="variable">$file</span>: "bg.jpg";<br>
<br>
.hero {<br>
&nbsp;&nbsp;background-image:<br>
&nbsp;&nbsp;&nbsp;&nbsp;url("<span class="interpolation">#{'#{'}$path{'}'}</span>/<span class="interpolation">#{'#{'}$file{'}'}</span>");<br>
}
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Variable}
        category="Sass/SCSS · Fundamentals"
        title="Variables"
        description="Learn how to store and reuse values with Sass variables - the foundation of maintainable stylesheets"
        colorTheme="pink"
      />

      {/* What are Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What are Sass Variables?
          </CardTitle>
          <CardDescription>
            Store values once, use them everywhere
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Variables let you <strong className="text-foreground">store values</strong> (like colors, fonts, or sizes) 
            and <strong className="text-foreground">reuse them</strong> throughout your stylesheet. 
            Change one value, update everywhere instantly!
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-pink-700 dark:text-pink-300">$variable</div>
                <div className="text-xl">→</div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">value</div>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Variables start with <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">$</code> symbol
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold mb-2">Consistency</h4>
              <p className="text-sm text-muted-foreground">
                Use same values everywhere
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Easy Updates</h4>
              <p className="text-sm text-muted-foreground">
                Change once, update all
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Maintainable</h4>
              <p className="text-sm text-muted-foreground">
                Cleaner, organized code
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Basic Variable Usage
          </CardTitle>
          <CardDescription>
            Define once, use many times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicVariablesExample}
            title="Variables in Action"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Without Variables</h4>
              <div className="text-sm font-mono text-blue-700 dark:text-blue-300 space-y-1">
                <div>.button {'{'} color: <span className="text-red-600 dark:text-red-400">#3b82f6</span>; {'}'}</div>
                <div>.link {'{'} color: <span className="text-red-600 dark:text-red-400">#3b82f6</span>; {'}'}</div>
                <div>.card {'{'} border: 1px solid <span className="text-red-600 dark:text-red-400">#3b82f6</span>; {'}'}</div>
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">❌ Repetitive and hard to update</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ With Variables</h4>
              <div className="text-sm font-mono text-green-700 dark:text-green-300 space-y-1">
                <div><span className="text-pink-600 dark:text-pink-400">$primary</span>: #3b82f6;</div>
                <div>.button {'{'} color: <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
                <div>.link {'{'} color: <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
                <div>.card {'{'} border: 1px solid <span className="text-pink-600 dark:text-pink-400">$primary</span>; {'}'}</div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">✅ DRY (Don't Repeat Yourself)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Variable className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Variable Scope
          </CardTitle>
          <CardDescription>
            Global vs local variables
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={scopeExample}
            title="Understanding Scope"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🌍 Global Scope</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                Variables defined at the root level are available everywhere
              </p>
              <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                $color: blue; // Global - accessible anywhere
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📍 Local Scope</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                Variables defined inside selectors are only available within that block
              </p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block">
                .card {'{'} $local: red; {'}'} // Only inside .card
              </code>
            </div>
          </div>
          
          <Alert className="mt-4 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">!global Flag</AlertTitle>
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              Use <code>!global</code> to make a local variable accessible globally. 
              Example: <code>$color: red !global;</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Default Values */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            Default Values (!default)
          </CardTitle>
          <CardDescription>
            Provide fallback values for libraries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={defaultValuesExample}
            title="Default Values Demo"
            colorTheme="purple"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">How !default Works:</h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <div className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>If variable is <strong>NOT defined</strong>, use the default value</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>If variable <strong>IS defined</strong>, keep existing value</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>Perfect for <strong>component libraries</strong> - users can override defaults</span>
              </div>
            </div>
          </div>
          
          <Alert className="mt-4 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Info className="h-4 w-4 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Library Pattern</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              Use <code>!default</code> in libraries so users can customize variables before importing your code. 
              This is how Bootstrap, Foundation, and other frameworks work!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interpolation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Code className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Variable Interpolation #{'{'}{'}'}}
          </CardTitle>
          <CardDescription>
            Insert variables into selectors and strings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={interpolationExample}
            title="Interpolation Examples"
            colorTheme="pink"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Where to Use</h4>
              <ul className="text-sm text-pink-700 dark:text-pink-300 space-y-1 list-disc list-inside">
                <li>Selector names</li>
                <li>Property names</li>
                <li>Inside strings</li>
                <li>URL paths</li>
                <li>Custom properties</li>
              </ul>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Syntax</h4>
              <code className="text-sm bg-pink-100 dark:bg-pink-900 px-2 py-1 rounded block">
                #{'{'}$variable{'}'}
              </code>
              <p className="text-sm text-pink-700 dark:text-pink-300 mt-2">
                Wraps the variable name in curly braces with # prefix
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Naming Conventions */}
      <Card>
        <CardHeader>
          <CardTitle>Variable Naming Best Practices</CardTitle>
          <CardDescription>
            Write clear, maintainable variable names
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Good Names</h4>
              <div className="space-y-2 text-sm font-mono text-green-700 dark:text-green-300">
                <div>$primary-color</div>
                <div>$font-size-large</div>
                <div>$spacing-medium</div>
                <div>$border-radius-sm</div>
                <div>$transition-duration</div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                Clear, descriptive, follow conventions
              </p>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Avoid</h4>
              <div className="space-y-2 text-sm font-mono text-red-700 dark:text-red-300">
                <div>$c</div>
                <div>$blue</div>
                <div>$size1</div>
                <div>$thing</div>
                <div>$temp</div>
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 mt-3">
                Too short, unclear, or implementation-specific
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Naming Tips:</h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
              <li>Use <strong>kebab-case</strong> (words-separated-by-hyphens)</li>
              <li>Start with <strong>category</strong>: $color-primary, $spacing-large</li>
              <li>Be <strong>descriptive</strong>: $btn-padding not $bp</li>
              <li>Use <strong>semantic names</strong>: $text-primary not $gray-800</li>
              <li>Group related variables with <strong>prefixes</strong>: $font-*, $spacing-*</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Variable Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Define at the top:</strong> Keep all variables in one place or separate file</li>
            <li><strong>Use meaningful names:</strong> Describe purpose, not appearance</li>
            <li><strong>Group related variables:</strong> Colors together, sizes together, etc.</li>
            <li><strong>Avoid magic numbers:</strong> Use variables instead of hardcoded values</li>
            <li><strong>Document complex values:</strong> Add comments for non-obvious variables</li>
            <li><strong>Use !default for libraries:</strong> Allow users to override your defaults</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Common Variable Patterns</CardTitle>
          <CardDescription>
            Real-world variable organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border">
            <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`// Colors
$color-primary: #3b82f6;
$color-secondary: #64748b;
$color-success: #10b981;
$color-danger: #ef4444;

// Typography
$font-family-base: -apple-system, sans-serif;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;

// Spacing
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

// Layout
$container-width: 1200px;
$border-radius: 8px;
$transition-speed: 0.3s;`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
