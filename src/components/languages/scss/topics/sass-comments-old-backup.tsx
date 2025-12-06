'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { MessageSquare, Slash, Hash, Star, CheckCircle, AlertCircle, Info, Code } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SassCommentsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassComments({ onOpenWebPlayground }: SassCommentsProps) {
  
  const singleLineExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Single-Line Comments</title>
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
    
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 20px;
    }
    
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
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
      margin-bottom: 12px;
      font-size: 16px;
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
    
    .comment {
      color: #64748b;
    }
    
    .output {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 10px;
      border: 2px dashed #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .output {
        background: #1e293b;
        border-color: #60a5fa;
      }
    }
    
    .output-code {
      font-family: monospace;
      font-size: 13px;
      color: #1e40af;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .output-code { color: #bfdbfe; }
    }
    
    .note {
      background: #eff6ff;
      padding: 12px;
      border-radius: 6px;
      font-size: 13px;
      color: #1e40af;
      margin-top: 10px;
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
    <h1>// Single-Line Comments</h1>
    <p class="subtitle">Silent comments that don't appear in compiled CSS</p>
    
    <div class="grid">
      <div class="code-card">
        <div class="label">📝 SCSS Input</div>
        <div class="code">
<span class="comment">// This is a single-line comment</span><br>
<span class="comment">// It won't appear in the CSS</span><br>
<br>
$primary: #3b82f6;<br>
<br>
.button {<br>
&nbsp;&nbsp;background: $primary;<br>
&nbsp;&nbsp;<span class="comment">// Internal note</span><br>
&nbsp;&nbsp;padding: 10px 20px;<br>
}
        </div>
        <div class="note">
          ✓ Use for development notes and explanations
        </div>
      </div>
      
      <div class="code-card">
        <div class="label">📄 CSS Output</div>
        <div class="output">
          <div class="output-code">
.button {<br>
&nbsp;&nbsp;background: #3b82f6;<br>
&nbsp;&nbsp;padding: 10px 20px;<br>
}
          </div>
        </div>
        <div class="note">
          ✓ Single-line comments are completely removed
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const multiLineExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Multi-Line Comments</title>
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
    
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 20px;
    }
    
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
    }
    
    .code-card {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-card {
        background: linear-gradient(135deg, #065f46 0%, #064e3b 100%);
        border-color: #6ee7b7;
      }
    }
    
    .label {
      color: #065f46;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 16px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label { color: #d1fae5; }
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
    
    .comment {
      color: #64748b;
    }
    
    .output {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 10px;
      border: 2px dashed #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .output {
        background: #1e293b;
        border-color: #6ee7b7;
      }
    }
    
    .output-code {
      font-family: monospace;
      font-size: 13px;
      color: #065f46;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .output-code { color: #d1fae5; }
    }
    
    .note {
      background: #f0fdf4;
      padding: 12px;
      border-radius: 6px;
      font-size: 13px;
      color: #065f46;
      margin-top: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #064e3b;
        color: #d1fae5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>/* Multi-Line Comments */</h1>
    <p class="subtitle">Preserved in expanded CSS output</p>
    
    <div class="grid">
      <div class="code-card">
        <div class="label">📝 SCSS Input</div>
        <div class="code">
<span class="comment">/*<br>
&nbsp;* Button Component<br>
&nbsp;* Author: Your Name<br>
&nbsp;* Last updated: 2025<br>
&nbsp;*/</span><br>
<br>
$btn-color: #10b981;<br>
<br>
.button {<br>
&nbsp;&nbsp;<span class="comment">/* Primary button style */</span><br>
&nbsp;&nbsp;background: $btn-color;<br>
&nbsp;&nbsp;padding: 10px 20px;<br>
}
        </div>
        <div class="note">
          ✓ Use for documentation and copyright notices
        </div>
      </div>
      
      <div class="code-card">
        <div class="label">📄 CSS Output (Expanded)</div>
        <div class="output">
          <div class="output-code">
<span class="comment">/*<br>
&nbsp;* Button Component<br>
&nbsp;* Author: Your Name<br>
&nbsp;* Last updated: 2025<br>
&nbsp;*/</span><br>
.button {<br>
&nbsp;&nbsp;<span class="comment">/* Primary button style */</span><br>
&nbsp;&nbsp;background: #10b981;<br>
&nbsp;&nbsp;padding: 10px 20px;<br>
}
          </div>
        </div>
        <div class="note">
          ✓ Multi-line comments are preserved in output
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const importantExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Important Comments</title>
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
      color: #f59e0b;
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 { color: #fcd34d; }
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
    
    .mode-card {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      padding: 25px;
      border-radius: 12px;
      border: 3px solid #f59e0b;
    }
    
    @media (prefers-color-scheme: dark) {
      .mode-card {
        background: linear-gradient(135deg, #92400e 0%, #78350f 100%);
        border-color: #fcd34d;
      }
    }
    
    .mode-title {
      color: #92400e;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 18px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .mode-title { color: #fef3c7; }
    }
    
    .code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      color: #fbbf24;
      line-height: 1.6;
      margin: 10px 0;
    }
    
    .comment {
      color: #64748b;
    }
    
    .note {
      background: #fff7ed;
      padding: 12px;
      border-radius: 6px;
      font-size: 12px;
      color: #92400e;
      margin-top: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .note {
        background: #78350f;
        color: #fef3c7;
      }
    }
    
    .header {
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #f59e0b;
      margin-bottom: 30px;
    }
    
    @media (prefers-color-scheme: dark) {
      .header {
        background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
        border-color: #fcd34d;
      }
    }
    
    .header-code {
      background: #0f172a;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      color: #fbbf24;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>/*! Important Comments */</h1>
    <p class="subtitle">Always preserved, even in compressed mode</p>
    
    <div class="header">
      <div class="header-code">
<span class="comment">/*!</span><br>
<span class="comment">&nbsp;* MyLibrary v2.0.0</span><br>
<span class="comment">&nbsp;* Copyright (c) 2025 Your Company</span><br>
<span class="comment">&nbsp;* Licensed under MIT</span><br>
<span class="comment">&nbsp;*/</span>
      </div>
    </div>
    
    <div class="comparison">
      <div class="mode-card">
        <div class="mode-title">📄 Expanded Mode</div>
        <div class="code">
<span class="comment">/*!</span><br>
<span class="comment">&nbsp;* MyLibrary v2.0.0</span><br>
<span class="comment">&nbsp;* Copyright (c) 2025</span><br>
<span class="comment">&nbsp;* Licensed under MIT</span><br>
<span class="comment">&nbsp;*/</span><br>
.button { background: #3b82f6; }
        </div>
        <div class="note">
          ✓ Comment preserved with formatting
        </div>
      </div>
      
      <div class="mode-card">
        <div class="mode-title">📦 Compressed Mode</div>
        <div class="code">
<span class="comment">/*! MyLibrary v2.0.0 Copyright (c) 2025 Licensed under MIT */</span>.button{background:#3b82f6}
        </div>
        <div class="note">
          ✓ Comment still present (condensed)
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={MessageSquare}
        category="Sass/SCSS · Fundamentals"
        title="Comments"
        description="Master the three types of comments in Sass - single-line, multi-line, and important comments"
        colorTheme="pink"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <MessageSquare className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Comment Types in Sass
          </CardTitle>
          <CardDescription>
            Three ways to add comments with different behaviors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sass supports <strong className="text-foreground">three types of comments</strong>, each serving different purposes 
            in your development workflow. Understanding when to use each type is essential for maintainable code.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-3">
                <Slash className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold">Single-Line</h4>
              </div>
              <code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded block mb-2">
                // Comment
              </code>
              <p className="text-sm text-muted-foreground">
                Silent comments removed from CSS. Perfect for development notes.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-3">
                <Hash className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold">Multi-Line</h4>
              </div>
              <code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded block mb-2">
                /* Comment */
              </code>
              <p className="text-sm text-muted-foreground">
                Preserved in expanded CSS. Great for documentation.
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-semibold">Important</h4>
              </div>
              <code className="text-xs bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded block mb-2">
                /*! Comment */
              </code>
              <p className="text-sm text-muted-foreground">
                Always kept, even compressed. For legal notices.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Single-Line Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Slash className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Single-Line Comments (//)
          </CardTitle>
          <CardDescription>
            Silent comments for development notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={singleLineExample}
            title="Single-Line Comments Demo"
            colorTheme="blue"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✓ Best Uses:</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                <li>Temporary notes during development</li>
                <li>TODO and FIXME reminders</li>
                <li>Code explanations for your team</li>
                <li>Disabling code temporarily</li>
              </ul>
            </div>
            
            <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Key Feature</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Single-line comments are <strong>completely removed</strong> during compilation, 
                making them perfect for internal notes that don't need to be in production CSS.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Multi-Line Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Hash className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Multi-Line Comments (/* */)
          </CardTitle>
          <CardDescription>
            Documentation comments preserved in CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={multiLineExample}
            title="Multi-Line Comments Demo"
            colorTheme="green"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✓ Best Uses:</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
                <li>File headers and descriptions</li>
                <li>Component documentation</li>
                <li>Author and date information</li>
                <li>API documentation</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚠️ Behavior:</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 list-disc list-inside">
                <li><strong>Expanded mode:</strong> Preserved as-is</li>
                <li><strong>Compressed mode:</strong> Removed</li>
                <li>Appears in final CSS output</li>
                <li>Good for debugging</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Star className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            Important Comments (/*! */)
          </CardTitle>
          <CardDescription>
            Always preserved, even in compressed output
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={importantExample}
            title="Important Comments Demo"
            colorTheme="orange"
            styleLanguage="scss"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
            <Star className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Critical Information</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Copyright notices:</strong> Legal requirements for your code</li>
                <li><strong>License information:</strong> MIT, Apache, GPL, etc.</li>
                <li><strong>Attribution:</strong> Credit to authors or libraries</li>
                <li><strong>Version info:</strong> Library version and build date</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Comparison</CardTitle>
          <CardDescription>
            When to use each comment type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Syntax</th>
                  <th className="text-left p-3 font-semibold">Expanded Mode</th>
                  <th className="text-left p-3 font-semibold">Compressed Mode</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-blue-50 dark:bg-blue-950/20">
                  <td className="p-3 font-semibold text-blue-600 dark:text-blue-400">Single-Line</td>
                  <td className="p-3"><code className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">//</code></td>
                  <td className="p-3">❌ Removed</td>
                  <td className="p-3">❌ Removed</td>
                  <td className="p-3">Dev notes, TODOs</td>
                </tr>
                <tr className="border-b bg-green-50 dark:bg-green-950/20">
                  <td className="p-3 font-semibold text-green-600 dark:text-green-400">Multi-Line</td>
                  <td className="p-3"><code className="text-xs bg-green-100 dark:bg-green-900 px-2 py-1 rounded">/* */</code></td>
                  <td className="p-3">✅ Kept</td>
                  <td className="p-3">❌ Removed</td>
                  <td className="p-3">Documentation</td>
                </tr>
                <tr className="bg-orange-50 dark:bg-orange-950/20">
                  <td className="p-3 font-semibold text-orange-600 dark:text-orange-400">Important</td>
                  <td className="p-3"><code className="text-xs bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded">/*! */</code></td>
                  <td className="p-3">✅ Kept</td>
                  <td className="p-3">✅ Kept</td>
                  <td className="p-3">Legal, licenses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Comment Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use // for development:</strong> Notes, TODOs, temporary comments</li>
            <li><strong>Use /* */ for docs:</strong> File headers, component descriptions</li>
            <li><strong>Use /*! */ for legal:</strong> Copyright, licenses, attribution</li>
            <li><strong>Be clear and concise:</strong> Explain WHY, not WHAT (code shows what)</li>
            <li><strong>Keep comments updated:</strong> Remove outdated comments regularly</li>
            <li><strong>Use consistent formatting:</strong> Follow team conventions</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Practical Examples</CardTitle>
          <CardDescription>
            Real-world comment usage patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2">File Header Example</h4>
              <div className="bg-gray-100 dark:bg-gray-950 p-3 rounded font-mono text-sm">
                <div className="text-muted-foreground">
                  /*!<br />
                  &nbsp;* Bootstrap v5.3.0<br />
                  &nbsp;* Copyright 2011-2023 The Bootstrap Authors<br />
                  &nbsp;* Licensed under MIT<br />
                  &nbsp;*/<br />
                  <br />
                  <span className="text-muted-foreground/70">// Configuration Variables</span><br />
                  $primary: #0d6efd;<br />
                  $secondary: #6c757d;
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2">Mixin Documentation</h4>
              <div className="bg-gray-100 dark:bg-gray-950 p-3 rounded font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-muted-foreground/70">// Creates a button with hover effects</span><br />
                  <span className="text-muted-foreground/70">// @param $bg - Background color</span><br />
                  <span className="text-muted-foreground/70">// @param $text - Text color</span><br />
                  @mixin button($bg, $text) {'{'}<br />
                  &nbsp;&nbsp;background: $bg;<br />
                  &nbsp;&nbsp;color: $text;<br />
                  {'}'}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Alert */}
      <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
        <AlertCircle className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-yellow-900 dark:text-yellow-100">Important Note</AlertTitle>
        <AlertDescription className="text-yellow-800 dark:text-yellow-200">
          Important comments (<code>/*! */</code>) will increase your production CSS file size since they're never removed. 
          Only use them for truly critical information like licenses and copyright notices.
        </AlertDescription>
      </Alert>
    </div>
  );
}
