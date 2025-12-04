'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { WrapText, AlignLeft, Scissors, Sparkles, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssTextWrappingProps {
  onOpenWebPlayground?: (html: string, css: string) => void;
}

// Basic text wrapping example
const basicWrappingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Wrapping Basics</title>
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
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .example-grid {
      display: grid;
      gap: 30px;
    }
    
    .example-box {
      padding: 25px;
      border-radius: 12px;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-box {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .example-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #ec4899;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-title {
        color: #f9a8d4;
      }
    }
    
    .demo-text {
      max-width: 400px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #ec4899;
      font-size: 16px;
      line-height: 1.6;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-text {
        background: #1e293b;
        color: #e2e8f0;
        border-color: #f9a8d4;
      }
    }
    
    .code-hint {
      font-size: 13px;
      color: #64748b;
      margin-top: 10px;
      font-family: monospace;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-hint {
        color: #94a3b8;
      }
    }
    
    /* Normal wrapping */
    .normal-wrap {
      overflow-wrap: normal;
    }
    
    /* Break long words */
    .break-word {
      overflow-wrap: break-word;
    }
    
    /* Break anywhere */
    .break-all {
      word-break: break-all;
    }
    
    /* No wrapping */
    .no-wrap {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Text Wrapping</h1>
    <p class="subtitle">Control how text breaks and wraps</p>
    
    <div class="example-grid">
      <div class="example-box">
        <div class="example-title">Normal Wrapping (Default)</div>
        <div class="demo-text normal-wrap">
          This is a normal sentence that will wrap naturally at word boundaries when it reaches the edge.
        </div>
        <div class="code-hint">overflow-wrap: normal;</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">Break Long Words</div>
        <div class="demo-text break-word">
          This demonstrates supercalifragilisticexpialidocious word breaking behavior.
        </div>
        <div class="code-hint">overflow-wrap: break-word;</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">Break Anywhere</div>
        <div class="demo-text break-all">
          This text will break at any character, even in the middle of words if necessary to fit.
        </div>
        <div class="code-hint">word-break: break-all;</div>
      </div>
      
      <div class="example-box">
        <div class="example-title">No Wrapping (Ellipsis)</div>
        <div class="demo-text no-wrap">
          This very long text will not wrap to the next line and will show an ellipsis at the end...
        </div>
        <div class="code-hint">white-space: nowrap; text-overflow: ellipsis;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Modern text-wrap property
const modernTextWrapExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern text-wrap Property</title>
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
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }
    
    .comparison-card {
      padding: 30px;
      border-radius: 12px;
      background: #fef3c7;
      border: 2px solid #fbbf24;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-card {
        background: #451a03;
        border-color: #d97706;
      }
    }
    
    .comparison-card h3 {
      font-size: 18px;
      margin-bottom: 20px;
      color: #92400e;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .comparison-card h3 {
        color: #fbbf24;
      }
    }
    
    .demo-heading {
      font-size: 28px;
      font-weight: 700;
      line-height: 1.3;
      color: #1e293b;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-heading {
        color: #e2e8f0;
      }
    }
    
    .code-label {
      font-size: 12px;
      font-family: monospace;
      color: #78350f;
      background: rgba(255,255,255,0.5);
      padding: 8px 12px;
      border-radius: 6px;
      display: inline-block;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-label {
        color: #fde68a;
        background: rgba(0,0,0,0.3);
      }
    }
    
    /* Balanced wrapping - prevents orphans */
    .wrap-balance {
      text-wrap: balance;
    }
    
    /* Pretty wrapping - better line breaks */
    .wrap-pretty {
      text-wrap: pretty;
    }
    
    /* No wrapping */
    .wrap-nowrap {
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .feature-highlight {
      margin-top: 30px;
      padding: 25px;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      border-radius: 12px;
      border: 2px solid #3b82f6;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-highlight {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        border-color: #60a5fa;
      }
    }
    
    .feature-highlight h3 {
      color: #1e40af;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-highlight h3 {
        color: #93c5fd;
      }
    }
    
    .feature-highlight p {
      color: #1e40af;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .feature-highlight p {
        color: #bfdbfe;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ Modern text-wrap</h1>
    <p class="subtitle">New CSS property for better text layout</p>
    
    <div class="comparison">
      <div class="comparison-card">
        <h3>Default Wrapping</h3>
        <div class="demo-heading">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="code-label">text-wrap: wrap; (default)</div>
      </div>
      
      <div class="comparison-card">
        <h3>Balanced Wrapping</h3>
        <div class="demo-heading wrap-balance">
          The quick brown fox jumps over the lazy dog
        </div>
        <div class="code-label">text-wrap: balance;</div>
      </div>
      
      <div class="comparison-card">
        <h3>Pretty Wrapping</h3>
        <div class="demo-heading wrap-pretty">
          The quick brown fox jumps over the lazy dog and then comes back
        </div>
        <div class="code-label">text-wrap: pretty;</div>
      </div>
    </div>
    
    <div class="feature-highlight">
      <h3>🎯 What's the Difference?</h3>
      <p>
        <strong>text-wrap: balance</strong> - Balances the text across lines to avoid orphans (single words on the last line). 
        Perfect for headings!<br><br>
        <strong>text-wrap: pretty</strong> - Optimizes line breaks for better readability. Great for paragraphs!
      </p>
    </div>
  </div>
</body>
</html>`;

// Hyphenation example
const hyphenationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Hyphenation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f1f5f9;
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f9a8d4;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .comparison-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    
    .text-column {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .text-column {
        background: #1e293b;
        border-color: #334155;
      }
    }
    
    .text-column h3 {
      font-size: 16px;
      color: #ec4899;
      margin-bottom: 20px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .text-column h3 {
        color: #f9a8d4;
      }
    }
    
    .narrow-text {
      max-width: 180px;
      text-align: justify;
      font-size: 15px;
      line-height: 1.6;
      color: #1e293b;
    }
    
    @media (prefers-color-scheme: dark) {
      .narrow-text {
        color: #e2e8f0;
      }
    }
    
    /* No hyphenation */
    .no-hyphen {
      hyphens: none;
    }
    
    /* Auto hyphenation */
    .auto-hyphen {
      hyphens: auto;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
    }
    
    .code-label {
      font-size: 12px;
      font-family: monospace;
      color: #64748b;
      margin-top: 15px;
      padding: 8px 12px;
      background: #f8fafc;
      border-radius: 6px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-label {
        color: #94a3b8;
        background: #0f172a;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔤 Text Hyphenation</h1>
    <p class="subtitle">Automatic word hyphenation for narrow columns</p>
    
    <div class="comparison-grid">
      <div class="text-column">
        <h3>No Hyphenation</h3>
        <div class="narrow-text no-hyphen">
          Web development requires understanding fundamental technologies and programming concepts.
        </div>
        <div class="code-label">hyphens: none;</div>
      </div>
      
      <div class="text-column">
        <h3>Auto Hyphenation</h3>
        <div class="narrow-text auto-hyphen" lang="en">
          Web development requires understanding fundamental technologies and programming concepts.
        </div>
        <div class="code-label">hyphens: auto;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssTextWrapping({ onOpenWebPlayground }: CssTextWrappingProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={WrapText}
        category="CSS · Typography"
        title="Text Wrapping"
        description="Control how text breaks, wraps, and flows in your layouts"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What is Text Wrapping?
          </CardTitle>
          <CardDescription>
            Control how text behaves when it reaches the edge of its container
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Text wrapping controls how <strong className="text-foreground">lines break and flow</strong> in your content. 
            Should long words break? Should text wrap at all? CSS gives you powerful tools to control exactly how text 
            behaves when it reaches the edge of its container!
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <WrapText className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Word Breaking</h4>
              <p className="text-sm text-muted-foreground">
                Control how long words break to fit in narrow spaces
              </p>
            </div>
            
            <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <AlignLeft className="h-6 w-6 text-pink-600 dark:text-pink-400 mb-2" />
              <h4 className="font-semibold mb-2">Line Balance</h4>
              <p className="text-sm text-muted-foreground">
                Prevent awkward single words on the last line (orphans)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Wrapping */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <WrapText className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            1. Basic Text Wrapping
          </CardTitle>
          <CardDescription>
            Traditional word wrapping and breaking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicWrappingExample}
            title="Text Wrapping Basics"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
            <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-3">📝 Key Properties:</h4>
            <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>overflow-wrap: break-word</strong> - Breaks long words to prevent overflow</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>word-break: break-all</strong> - Breaks at any character (more aggressive)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>white-space: nowrap</strong> - Prevents all wrapping</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>text-overflow: ellipsis</strong> - Adds "..." when text is cut off</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Modern text-wrap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-rose-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            2. Modern text-wrap Property
          </CardTitle>
          <CardDescription>
            New CSS feature for balanced and pretty text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={modernTextWrapExample}
            title="Modern text-wrap"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>New Feature!</AlertTitle>
            <AlertDescription>
              <code className="px-2 py-1 bg-muted rounded">text-wrap: balance</code> is perfect for headings - it prevents 
              orphaned words on the last line. <code className="px-2 py-1 bg-muted rounded">text-wrap: pretty</code> optimizes 
              line breaks for better readability in paragraphs!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Hyphenation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Scissors className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            3. Text Hyphenation
          </CardTitle>
          <CardDescription>
            Automatic word hyphenation for narrow columns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={hyphenationExample}
            title="Hyphenation Demo"
            colorTheme="pink"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Text wrapping properties at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">overflow-wrap: break-word;</code>
              <p className="text-sm text-muted-foreground mt-1">Breaks long words to prevent overflow</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">text-wrap: balance;</code>
              <p className="text-sm text-muted-foreground mt-1">Balances text across lines (perfect for headings)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">text-wrap: pretty;</code>
              <p className="text-sm text-muted-foreground mt-1">Optimizes line breaks for readability</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">hyphens: auto;</code>
              <p className="text-sm text-muted-foreground mt-1">Enables automatic hyphenation (requires lang attribute)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400">white-space: nowrap; text-overflow: ellipsis;</code>
              <p className="text-sm text-muted-foreground mt-1">Single line with "..." for overflow</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use text-wrap: balance</strong> for all headings to prevent orphans</li>
            <li><strong>Add lang attribute</strong> to enable proper hyphenation</li>
            <li><strong>Test narrow widths:</strong> Ensure text looks good on mobile</li>
            <li><strong>Avoid break-all:</strong> Use break-word instead for better readability</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-900 dark:text-amber-100">Browser Support</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>overflow-wrap, word-break:</strong> Supported everywhere! ✅<br />
          <strong>text-wrap:</strong> New feature - Chrome 114+, Safari 17.5+. Use with @supports for fallbacks.<br />
          <strong>hyphens:</strong> Works in all modern browsers with proper lang attribute.
        </AlertDescription>
      </Alert>
    </div>
  );
}
