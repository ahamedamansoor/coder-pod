'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { ScrollText, Eye, EyeOff, Maximize2, CheckCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssOverflowProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssOverflow({ onOpenWebPlayground }: CssOverflowProps) {
  
  const overflowValuesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overflow Values</title>
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
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    
    .example-box {
      background: #ecfeff;
      padding: 15px;
      border-radius: 12px;
      border: 2px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #164e63;
        border-color: #22d3ee;
      }
    }
    
    .example-box h3 {
      color: #0891b2;
      margin-bottom: 10px;
      font-size: 16px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box h3 {
        color: #67e8f9;
      }
    }
    
    .box {
      width: 100%;
      height: 100px;
      background: #cffafe;
      border: 2px solid #06b6d4;
      border-radius: 8px;
      padding: 10px;
      font-size: 14px;
      color: #0c4a6e;
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #0c4a6e;
        color: #bae6fd;
        border-color: #22d3ee;
      }
    }
    
    .overflow-visible {
      overflow: visible;
    }
    
    .overflow-hidden {
      overflow: hidden;
    }
    
    .overflow-scroll {
      overflow: scroll;
    }
    
    .overflow-auto {
      overflow: auto;
    }
    
    .content {
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 CSS Overflow Values</h1>
    <p class="subtitle">How to handle content that doesn't fit</p>
    
    <div class="grid">
      <div class="example-box">
        <h3>visible (default)</h3>
        <div class="box overflow-visible">
          <div class="content">
            This is a lot of text content that will overflow the box. 
            With visible, it spills out and overlaps other content. 
            This is the default behavior but usually not what you want.
          </div>
        </div>
      </div>
      
      <div class="example-box">
        <h3>hidden</h3>
        <div class="box overflow-hidden">
          <div class="content">
            This is a lot of text content that will overflow the box. 
            With hidden, the overflow is cut off and not visible. 
            No scrollbars appear - content is simply clipped.
          </div>
        </div>
      </div>
      
      <div class="example-box">
        <h3>scroll</h3>
        <div class="box overflow-scroll">
          <div class="content">
            This is a lot of text content that will overflow the box. 
            With scroll, scrollbars always appear even if content fits. 
            This lets users scroll to see hidden content.
          </div>
        </div>
      </div>
      
      <div class="example-box">
        <h3>auto (best!)</h3>
        <div class="box overflow-auto">
          <div class="content">
            This is a lot of text content that will overflow the box. 
            With auto, scrollbars appear only when needed. 
            This is usually the best choice for most situations!
          </div>
        </div>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 12px; border-left: 4px solid #fbbf24; margin-top: 30px;">
      <p style="color: #78350f; line-height: 1.6;">
        <strong style="display: block; margin-bottom: 10px;">💡 Best Practice:</strong>
        Use <code style="background: white; padding: 2px 6px; border-radius: 4px;">overflow: auto</code> 
        in most cases. It only shows scrollbars when necessary, providing the best user experience.
      </p>
    </div>
  </div>
</body>
</html>`;

  const overflowAxisExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>overflow-x & overflow-y</title>
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
    
    .example {
      background: #f5f3ff;
      padding: 20px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .example {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    .example h3 {
      color: #7c3aed;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example h3 {
        color: #c4b5fd;
      }
    }
    
    .box {
      width: 100%;
      height: 150px;
      background: #ddd6fe;
      border: 2px solid #8b5cf6;
      border-radius: 8px;
      padding: 15px;
      color: #5b21b6;
    }
    
    @media (prefers-color-scheme: dark) {
      .box {
        background: #5b21b6;
        color: #e9d5ff;
        border-color: #a78bfa;
      }
    }
    
    .horizontal-only {
      overflow-x: auto;
      overflow-y: hidden;
    }
    
    .vertical-only {
      overflow-x: hidden;
      overflow-y: auto;
    }
    
    .wide-content {
      width: 800px;
      white-space: nowrap;
    }
    
    .tall-content {
      line-height: 2;
    }
    
    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
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
    <h1>↔️ overflow-x & overflow-y</h1>
    <p class="subtitle">Control horizontal and vertical overflow separately</p>
    
    <div class="example">
      <h3>Horizontal Scrolling Only</h3>
      <div class="code">
overflow-x: auto;<br>
overflow-y: hidden;
      </div>
      <div class="box horizontal-only">
        <div class="wide-content">
          This content is very wide and will scroll horizontally only. 
          Vertical overflow is hidden. Perfect for tables or wide content!
        </div>
      </div>
    </div>
    
    <div class="example">
      <h3>Vertical Scrolling Only</h3>
      <div class="code">
overflow-x: hidden;<br>
overflow-y: auto;
      </div>
      <div class="box vertical-only">
        <div class="tall-content">
          Line 1: This content is tall and will scroll vertically only.<br>
          Line 2: Horizontal overflow is hidden.<br>
          Line 3: This is the most common use case.<br>
          Line 4: Like a scrollable text area.<br>
          Line 5: Or a fixed-height content panel.<br>
          Line 6: Keep scrolling down!<br>
          Line 7: Almost there...<br>
          Line 8: You reached the bottom! 🎉
        </div>
      </div>
    </div>
    
    <div style="background: #ecfdf5; padding: 20px; border-radius: 12px; border: 2px solid #10b981; margin-top: 25px;">
      <p style="color: #065f46; line-height: 1.6;">
        <strong style="display: block; margin-bottom: 10px;">✅ When to Use:</strong>
        Use <code style="background: white; padding: 2px 6px; border-radius: 4px;">overflow-x</code> and 
        <code style="background: white; padding: 2px 6px; border-radius: 4px;">overflow-y</code> when you 
        want different behavior on each axis. Common for data tables (horizontal scroll) or chat windows (vertical scroll).
      </p>
    </div>
  </div>
</body>
</html>`;

  const textOverflowExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>text-overflow</title>
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
      max-width: 700px;
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
    
    .example {
      background: #fff7ed;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #f97316;
    }
    
    @media (prefers-color-scheme: dark) {
      .example {
        background: #7c2d12;
        border-left-color: #fb923c;
      }
    }
    
    .example h3 {
      color: #ea580c;
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example h3 {
        color: #fdba74;
      }
    }
    
    .text-box {
      background: white;
      padding: 15px;
      border-radius: 8px;
      border: 2px solid #f97316;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .text-box {
        background: #1e293b;
        border-color: #fb923c;
        color: #e2e8f0;
      }
    }
    
    .ellipsis {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
    
    .clip {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
      width: 100%;
    }
    
    .multi-line {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
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
    <h1>✂️ text-overflow</h1>
    <p class="subtitle">Handling text that doesn't fit</p>
    
    <div class="example">
      <h3>text-overflow: ellipsis</h3>
      <div class="code">
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
      </div>
      <div class="text-box ellipsis">
        This is a very long text that will be cut off with three dots (ellipsis) when it doesn't fit
      </div>
    </div>
    
    <div class="example">
      <h3>text-overflow: clip</h3>
      <div class="code">
.clip {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
      </div>
      <div class="text-box clip">
        This is a very long text that will be cut off abruptly without any indication when it doesn't fit
      </div>
    </div>
    
    <div class="example">
      <h3>Multi-line Ellipsis (Modern)</h3>
      <div class="code">
.multi-line {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
      </div>
      <div class="text-box multi-line">
        This is a longer paragraph that will be truncated after two lines with an ellipsis. 
        This technique works for multi-line text truncation and is very useful for card layouts, 
        article previews, or any situation where you want to limit text to a specific number of lines.
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 12px; border: 2px solid #fbbf24; margin-top: 25px;">
      <p style="color: #78350f; line-height: 1.6;">
        <strong style="display: block; margin-bottom: 10px;">💡 Requirements:</strong>
        For text-overflow to work, you need all three properties:<br>
        1. <code style="background: white; padding: 2px 6px; border-radius: 4px;">white-space: nowrap</code><br>
        2. <code style="background: white; padding: 2px 6px; border-radius: 4px;">overflow: hidden</code><br>
        3. <code style="background: white; padding: 2px 6px; border-radius: 4px;">text-overflow: ellipsis</code>
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={ScrollText}
        category="CSS · Fundamentals"
        title="CSS Overflow"
        description="Control how content behaves when it doesn't fit inside its container"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            What is Overflow?
          </CardTitle>
          <CardDescription>
            Handling content that exceeds container boundaries
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">overflow</code> property controls what happens 
            when content is too large to fit in its container. Should it be hidden? Show scrollbars? Spill out? 
            You decide!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <Eye className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">Visible Content</h4>
              <p className="text-sm text-muted-foreground">
                Let content overflow or add scrollbars to access it
              </p>
            </div>
            
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <EyeOff className="h-6 w-6 text-cyan-600 dark:text-cyan-400 mb-2" />
              <h4 className="font-semibold mb-2">Hidden Content</h4>
              <p className="text-sm text-muted-foreground">
                Clip overflow content or add ellipsis for text
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Overflow Values */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <ScrollText className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            Overflow Values
          </CardTitle>
          <CardDescription>
            Four ways to handle overflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={overflowValuesExample}
            title="overflow: visible, hidden, scroll, auto"
            colorTheme="cyan"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <CheckCircle className="h-4 w-4 text-cyan-600" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Recommended: Use auto</AlertTitle>
            <AlertDescription className="text-cyan-800 dark:text-cyan-200">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded">overflow: auto</code> is usually the best 
              choice. It only shows scrollbars when needed, providing a clean interface while ensuring content is accessible.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* overflow-x & overflow-y */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Maximize2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            overflow-x & overflow-y
          </CardTitle>
          <CardDescription>
            Control horizontal and vertical overflow independently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={overflowAxisExample}
            title="Axis-specific Overflow Control"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* text-overflow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            text-overflow
          </CardTitle>
          <CardDescription>
            Add ellipsis (...) to truncated text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={textOverflowExample}
            title="Text Overflow with Ellipsis"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Overflow Quick Reference</CardTitle>
          <CardDescription>
            All overflow properties at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">overflow: visible</code>
              <p className="text-sm text-muted-foreground mt-1">
                Content spills out (default). Can overlap other elements.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-red-600 dark:text-red-400">overflow: hidden</code>
              <p className="text-sm text-muted-foreground mt-1">
                Clips overflow content. No scrollbars, content is cut off.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">overflow: scroll</code>
              <p className="text-sm text-muted-foreground mt-1">
                Always shows scrollbars, even if content fits.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">overflow: auto</code>
              <p className="text-sm text-muted-foreground mt-1">
                Shows scrollbars only when needed. Best choice!
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">overflow-x / overflow-y</code>
              <p className="text-sm text-muted-foreground mt-1">
                Control horizontal and vertical overflow separately.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">text-overflow: ellipsis</code>
              <p className="text-sm text-muted-foreground mt-1">
                Adds ... to truncated text. Requires overflow: hidden and white-space: nowrap.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Overflow Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use overflow: auto</strong> - Shows scrollbars only when needed</li>
            <li><strong>Test with long content</strong> - Make sure overflow works in all scenarios</li>
            <li><strong>Add text-overflow for single-line text</strong> - Better UX than cut-off text</li>
            <li><strong>Consider mobile</strong> - Scrolling works differently on touch devices</li>
            <li><strong>Avoid overflow: scroll</strong> - Empty scrollbars look unprofessional</li>
            <li><strong>Use overflow-x/y separately</strong> - For tables (horizontal) or chat (vertical)</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Universal Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All overflow properties are supported in every browser. text-overflow: ellipsis works in all modern 
          browsers. Multi-line ellipsis with line-clamp has excellent support (Chrome, Safari, Firefox, Edge).
        </AlertDescription>
      </Alert>
    </div>
  );
}
