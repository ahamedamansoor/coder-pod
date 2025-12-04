'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Layout, Square, Layers, Sparkles, CheckCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssDisplayProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const displayTypesExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display Types</title>
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
      text-align: center;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
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
    
    .example-section {
      margin-bottom: 40px;
      padding: 30px;
      background: #f8fafc;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-section {
        background: #0f172a;
        border-color: #334155;
      }
    }
    
    .section-title {
      font-size: 20px;
      font-weight: 600;
      color: #10b981;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .section-title {
        color: #34d399;
      }
    }
    
    .demo-container {
      padding: 20px;
      background: white;
      border-radius: 8px;
      border: 2px dashed #94a3b8;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-container {
        background: #1e293b;
        border-color: #475569;
      }
    }
    
    .block-example {
      display: block;
      background: #10b981;
      color: white;
      padding: 20px;
      margin: 10px 0;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
    }
    
    .inline-example {
      display: inline;
      background: #3b82f6;
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
    }
    
    .inline-block-example {
      display: inline-block;
      background: #a855f7;
      color: white;
      padding: 20px;
      margin: 10px;
      border-radius: 8px;
      font-weight: 600;
      width: 120px;
      text-align: center;
    }
    
    .none-example {
      display: none;
    }
    
    .code-label {
      display: inline-block;
      margin-top: 10px;
      padding: 6px 12px;
      background: #fef3c7;
      border-radius: 6px;
      font-size: 13px;
      font-family: monospace;
      color: #92400e;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-label {
        background: #451a03;
        color: #fbbf24;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📐 Display Property</h1>
    <p class="subtitle">Control how elements behave in the layout</p>
    
    <div class="example-section">
      <div class="section-title">Block Elements</div>
      <div class="demo-container">
        <div class="block-example">Block 1 - Takes full width</div>
        <div class="block-example">Block 2 - Stacks vertically</div>
        <div class="block-example">Block 3 - New line each time</div>
      </div>
      <div class="code-label">display: block;</div>
    </div>
    
    <div class="example-section">
      <div class="section-title">Inline Elements</div>
      <div class="demo-container">
        <span class="inline-example">Inline 1</span>
        <span class="inline-example">Inline 2</span>
        <span class="inline-example">Inline 3</span>
        <span class="inline-example">Inline 4</span>
      </div>
      <div class="code-label">display: inline;</div>
    </div>
    
    <div class="example-section">
      <div class="section-title">Inline-Block Elements</div>
      <div class="demo-container">
        <div class="inline-block-example">Box 1</div>
        <div class="inline-block-example">Box 2</div>
        <div class="inline-block-example">Box 3</div>
      </div>
      <div class="code-label">display: inline-block;</div>
    </div>
    
    <div class="example-section">
      <div class="section-title">None (Hidden)</div>
      <div class="demo-container">
        <div class="block-example">Visible Element</div>
        <div class="block-example none-example">This is hidden!</div>
        <div class="block-example">Another Visible Element</div>
      </div>
      <div class="code-label">display: none; (removes from layout)</div>
    </div>
  </div>
</body>
</html>`;

const flexGridExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Display Values</title>
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
      max-width: 1100px;
      margin: 0 auto;
    }
    
    h1 {
      color: #10b981;
      text-align: center;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    .comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
    }
    
    .example-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: #1e293b;
      }
    }
    
    .example-card h3 {
      color: #1e293b;
      margin-bottom: 20px;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card h3 {
        color: #e2e8f0;
      }
    }
    
    .flex-container {
      display: flex;
      gap: 15px;
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .flex-container {
        background: #0f172a;
      }
    }
    
    .flex-item {
      background: #10b981;
      color: white;
      padding: 20px;
      border-radius: 6px;
      font-weight: 600;
      text-align: center;
    }
    
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      .grid-container {
        background: #0f172a;
      }
    }
    
    .grid-item {
      background: #3b82f6;
      color: white;
      padding: 20px;
      border-radius: 6px;
      font-weight: 600;
      text-align: center;
    }
    
    .code {
      margin-top: 15px;
      padding: 12px;
      background: #1e293b;
      color: #e2e8f0;
      border-radius: 6px;
      font-family: monospace;
      font-size: 13px;
    }
    
    @media (prefers-color-scheme: dark) {
      .code {
        background: #020617;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Modern Display Values</h1>
    
    <div class="comparison">
      <div class="example-card">
        <h3>Flexbox Layout</h3>
        <div class="flex-container">
          <div class="flex-item">1</div>
          <div class="flex-item">2</div>
          <div class="flex-item">3</div>
        </div>
        <div class="code">display: flex;</div>
      </div>
      
      <div class="example-card">
        <h3>Grid Layout</h3>
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
        </div>
        <div class="code">display: grid;</div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function CssDisplay({ onOpenWebPlayground }: CssDisplayProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layout}
        category="CSS · Box Model & Layout"
        title="Display Property"
        description="Control how elements behave in the layout flow"
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            What is Display?
          </CardTitle>
          <CardDescription>
            The most important property for controlling layout
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">display</code> property controls <strong className="text-foreground">how an element behaves</strong> in the page layout. 
            Does it take the full width? Can it sit next to other elements? This property is the key to mastering CSS layouts!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <Square className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Block</h4>
              <p className="text-sm text-muted-foreground">
                Takes full width, stacks vertically
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <Layers className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Inline</h4>
              <p className="text-sm text-muted-foreground">
                Flows with text, side-by-side
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <Layout className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Flex/Grid</h4>
              <p className="text-sm text-muted-foreground">
                Modern layout systems
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Square className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            1. Display Types
          </CardTitle>
          <CardDescription>
            Block, inline, inline-block, and none
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={displayTypesExample}
            title="Display Property Types"
            colorTheme="emerald"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">💡 Key Differences:</h4>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>block:</strong> Takes full width, starts on new line (div, p, h1)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>inline:</strong> Only takes needed width, stays on same line (span, a)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>inline-block:</strong> Like inline but accepts width/height</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>none:</strong> Completely removes from layout (not just hidden)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Layout className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Modern Display Values
          </CardTitle>
          <CardDescription>
            Flexbox and Grid for powerful layouts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={flexGridExample}
            title="Flex & Grid"
            colorTheme="green"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">display: block;</code>
              <p className="text-sm text-muted-foreground mt-1">Takes full width, new line</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">display: inline;</code>
              <p className="text-sm text-muted-foreground mt-1">Flows with text</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">display: inline-block;</code>
              <p className="text-sm text-muted-foreground mt-1">Inline but accepts width/height</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">display: flex;</code>
              <p className="text-sm text-muted-foreground mt-1">Flexible box layout</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">display: grid;</code>
              <p className="text-sm text-muted-foreground mt-1">Two-dimensional grid layout</p>
            </div>
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">display: none;</code>
              <p className="text-sm text-muted-foreground mt-1">Hide element (removed from layout)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Use <strong>flex</strong> or <strong>grid</strong> for modern layouts instead of floats</li>
            <li>Remember: <strong>inline elements</strong> ignore width and height</li>
            <li>Use <strong>inline-block</strong> for buttons and badges</li>
            <li><strong>display: none</strong> removes from layout, <strong>visibility: hidden</strong> just hides</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
