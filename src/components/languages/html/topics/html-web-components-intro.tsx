'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Puzzle, Component, Code, Sparkles, CheckCircle, Info, Layers } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlWebComponentsIntroProps {
  onOpenWebPlayground?: (content: { html: string; css?: string; js?: string }) => void;
}

export default function HtmlWebComponentsIntro({ onOpenWebPlayground }: HtmlWebComponentsIntroProps) {
  const simpleComponentExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First Web Component</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 30px;
    }
    
    .demo-area {
      padding: 30px;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border-radius: 12px;
      margin-bottom: 30px;
    }
    
    .info {
      padding: 20px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
    }
    
    .info h3 {
      color: #92400e;
      margin-bottom: 8px;
    }
    
    .info p {
      color: #78350f;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: #0f172a;
      }
      
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #fbbf24;
      }
      
      p {
        color: #94a3b8;
      }
      
      .info {
        background: #78350f;
        border-left-color: #fbbf24;
      }
      
      .info h3 {
        color: #fde68a;
      }
      
      .info p {
        color: #fed7aa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🧩 My First Web Component</h1>
    
    <div class="demo-area">
      <!-- Use the custom element -->
      <greeting-card name="Alice"></greeting-card>
      <greeting-card name="Bob"></greeting-card>
      <greeting-card name="Charlie"></greeting-card>
    </div>
    
    <div class="info">
      <h3>✨ What Just Happened?</h3>
      <p>
        We created a custom HTML element called <code>&lt;greeting-card&gt;</code>! 
        It's reusable, encapsulated, and works just like built-in HTML elements.
      </p>
    </div>
  </div>

  <script>
    // Define a Web Component
    class GreetingCard extends HTMLElement {
      connectedCallback() {
        const name = this.getAttribute('name') || 'Guest';
        
        this.innerHTML = \`
          <div style="
            padding: 20px;
            margin: 16px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            animation: slideIn 0.5s ease;
          ">
            <h2 style="margin: 0 0 8px 0;">👋 Hello, \${name}!</h2>
            <p style="margin: 0; opacity: 0.9;">Welcome to Web Components</p>
          </div>
          
          <style>
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          </style>
        \`;
      }
    }
    
    // Register the custom element
    customElements.define('greeting-card', GreetingCard);
  </script>
</body>
</html>`;

  const threePartsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Components: The 3 Parts</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .parts-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      margin-bottom: 40px;
    }
    
    .part-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .part-header {
      padding: 24px;
      color: white;
      text-align: center;
    }
    
    .part-1 { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
    .part-2 { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
    .part-3 { background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); }
    
    .part-header h3 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
    
    .part-body {
      padding: 24px;
    }
    
    .part-body h4 {
      color: #1f2937;
      margin-bottom: 12px;
    }
    
    .part-body p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    
    .code-snippet {
      padding: 16px;
      background: #f3f4f6;
      border-radius: 8px;
      border-left: 4px solid #10b981;
      overflow-x: auto;
    }
    
    .code-snippet code {
      font-family: monospace;
      font-size: 13px;
      color: #1f2937;
    }
    
    .demo-section {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      text-align: center;
    }
    
    .demo-section h2 {
      color: #10b981;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
      }
      
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #34d399;
      }
      
      .part-card {
        background: #0f172a;
      }
      
      .part-header {
        background: linear-gradient(135deg, #047857 0%, #059669 100%);
      }
      
      .part-body h4 {
        color: #f3f4f6;
      }
      
      .part-body p {
        color: #94a3b8;
      }
      
      .code-snippet {
        background: #1e293b;
        border-color: #475569;
      }
      
      .code-snippet code {
        color: #e2e8f0;
      }
      
      .demo-section {
        background: #1e293b;
      }
      
      .demo-section h2 {
        color: #34d399;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 The 3 Core Technologies</h1>
    
    <div class="parts-grid">
      <!-- Part 1: Custom Elements -->
      <div class="part-card">
        <div class="part-header part-1">
          <h3>1️⃣ Custom Elements</h3>
          <p style="opacity: 0.9; font-size: 14px;">Create your own HTML tags</p>
        </div>
        <div class="part-body">
          <h4>What it does:</h4>
          <p>Define new HTML elements with custom behavior</p>
          
          <div class="code-snippet">
<code>class MyElement extends HTMLElement {
  // Custom behavior
}

customElements.define(
  'my-element',
  MyElement
);</code>
          </div>
        </div>
      </div>
      
      <!-- Part 2: Shadow DOM -->
      <div class="part-card">
        <div class="part-header part-2">
          <h3>2️⃣ Shadow DOM</h3>
          <p style="opacity: 0.9; font-size: 14px;">Encapsulate styles & markup</p>
        </div>
        <div class="part-body">
          <h4>What it does:</h4>
          <p>Creates isolated DOM tree with scoped CSS</p>
          
          <div class="code-snippet">
<code>const shadow = 
  this.attachShadow({
    mode: 'open'
  });

shadow.innerHTML = \`
  <style>/* Scoped */</style>
  <div>Content</div>
\`;</code>
          </div>
        </div>
      </div>
      
      <!-- Part 3: HTML Templates -->
      <div class="part-card">
        <div class="part-header part-3">
          <h3>3️⃣ HTML Templates</h3>
          <p style="opacity: 0.9; font-size: 14px;">Reusable markup patterns</p>
        </div>
        <div class="part-body">
          <h4>What it does:</h4>
          <p>Define reusable HTML chunks that can be cloned</p>
          
          <div class="code-snippet">
<code>&lt;template id="my-template"&gt;
  &lt;div&gt;Reusable!&lt;/div&gt;
&lt;/template&gt;

const template = 
  document.querySelector(
    '#my-template'
  );</code>
          </div>
        </div>
      </div>
    </div>
    
    <div class="demo-section">
      <h2>🚀 All 3 Technologies Together!</h2>
      <p style="color: #6b7280; margin-bottom: 30px;">
        Custom Element + Shadow DOM + Template = Powerful Web Component
      </p>
      
      <!-- Use the component -->
      <complete-component></complete-component>
    </div>
  </div>

  <script>
    // Define a complete web component using all 3 technologies
    class CompleteComponent extends HTMLElement {
      connectedCallback() {
        // 1. Custom Element (this class)
        
        // 2. Shadow DOM (encapsulation)
        const shadow = this.attachShadow({ mode: 'open' });
        
        // 3. HTML Template (reusable structure)
        shadow.innerHTML = \`
          <style>
            :host {
              display: block;
              padding: 30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 12px;
              color: white;
              text-align: center;
              box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
            }
            
            h3 {
              margin: 0 0 12px 0;
              font-size: 1.8rem;
            }
            
            p {
              margin: 0;
              opacity: 0.9;
              line-height: 1.6;
            }
          </style>
          
          <h3>✨ Complete Web Component</h3>
          <p>This component uses Custom Elements, Shadow DOM, and Templates!</p>
          <p style="margin-top: 12px; font-size: 14px;">
            🎨 Styles are scoped | 🔒 Markup is encapsulated | ♻️ Fully reusable
          </p>
        \`;
      }
    }
    
    customElements.define('complete-component', CompleteComponent);
  </script>
</body>
</html>`;

  const benefitsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Why Use Web Components?</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      color: white;
      margin-bottom: 40px;
      font-size: 2.5rem;
    }
    
    .benefits-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      margin-bottom: 40px;
    }
    
    .benefit-card {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    
    .benefit-card:hover {
      transform: translateY(-4px);
    }
    
    .icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin-bottom: 16px;
    }
    
    .benefit-card h3 {
      color: #667eea;
      margin-bottom: 12px;
      font-size: 1.3rem;
    }
    
    .benefit-card p {
      color: #6b7280;
      line-height: 1.6;
    }
    
    .demo {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    .demo h2 {
      color: #667eea;
      margin-bottom: 30px;
      text-align: center;
      font-size: 2rem;
    }
    
    .comparison {
      display: grid;
      gap: 24px;
      grid-template-columns: 1fr 1fr;
    }
    
    .before, .after {
      padding: 20px;
      border-radius: 12px;
    }
    
    .before {
      background: #fef2f2;
      border: 2px solid #ef4444;
    }
    
    .after {
      background: #f0fdf4;
      border: 2px solid #10b981;
    }
    
    .before h4 {
      color: #991b1b;
      margin-bottom: 12px;
    }
    
    .after h4 {
      color: #065f46;
      margin-bottom: 12px;
    }
    
    pre {
      background: #f9fafb;
      padding: 16px;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 12px;
    }
    
    @media (max-width: 768px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
      }
      
      h1 {
        color: #c4b5fd;
      }
      
      .benefit-card {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      .benefit-card h3 {
        color: #f3f4f6;
      }
      
      .benefit-card p {
        color: #94a3b8;
      }
      
      .demo {
        background: #1e293b;
      }
      
      .demo h2 {
        color: #a78bfa;
      }
      
      .before {
        background: #7f1d1d;
        border-color: #dc2626;
      }
      
      .before h4 {
        color: #fecaca;
      }
      
      .after {
        background: #14532d;
        border-color: #22c55e;
      }
      
      .after h4 {
        color: #86efac;
      }
      
      pre {
        background: #0f172a;
        color: #e2e8f0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💎 Benefits of Web Components</h1>
    
    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="icon">♻️</div>
        <h3>Reusability</h3>
        <p>Write once, use anywhere. Components work across different projects and frameworks.</p>
      </div>
      
      <div class="benefit-card">
        <div class="icon">🔒</div>
        <h3>Encapsulation</h3>
        <p>Styles and scripts are scoped. No conflicts with the rest of your page.</p>
      </div>
      
      <div class="benefit-card">
        <div class="icon">🎨</div>
        <h3>Maintainability</h3>
        <p>Self-contained components are easier to update, test, and debug.</p>
      </div>
      
      <div class="benefit-card">
        <div class="icon">🚀</div>
        <h3>Framework Agnostic</h3>
        <p>Use with React, Vue, Angular, or vanilla JavaScript. No lock-in.</p>
      </div>
      
      <div class="benefit-card">
        <div class="icon">📦</div>
        <h3>Native Browser Support</h3>
        <p>No build tools required. Works directly in the browser.</p>
      </div>
      
      <div class="benefit-card">
        <div class="icon">⚡</div>
        <h3>Performance</h3>
        <p>Lightweight and fast. No framework overhead needed.</p>
      </div>
    </div>
    
    <div class="demo">
      <h2>📊 Before vs After</h2>
      
      <div class="comparison">
        <div class="before">
          <h4>❌ Without Web Components</h4>
          <pre><code>&lt;!-- Repeated code everywhere --&gt;
&lt;div class="card card-blue"&gt;
  &lt;div class="card-header"&gt;
    &lt;h3&gt;Title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;p&gt;Content&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- CSS conflicts --&gt;
&lt;style&gt;
  .card { /* Might affect others */ }
&lt;/style&gt;</code></pre>
        </div>
        
        <div class="after">
          <h4>✅ With Web Components</h4>
          <pre><code>&lt;!-- Clean and reusable --&gt;
&lt;custom-card 
  title="Title" 
  color="blue"&gt;
  Content
&lt;/custom-card&gt;

&lt;!-- Styles are scoped --&gt;
&lt;!-- No conflicts! --&gt;
&lt;!-- Works everywhere! --&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Puzzle}
        category="12. Web Components"
        title="Web Components Introduction"
        description="Learn the fundamentals of Web Components - the future of reusable web development"
        colorTheme="blue"
      />

      {/* What are Web Components */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Puzzle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What are Web Components?
          </CardTitle>
          <CardDescription>
            A set of web platform APIs that allow you to create reusable custom elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Web Components are a suite of native browser technologies that let you create reusable, 
            encapsulated HTML elements with their own functionality. They work in any JavaScript framework or none at all.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Think of Them Like LEGO Blocks 🧱</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Each Web Component is a self-contained building block. You can snap them together to build 
              complex applications, and they'll work the same way every time, anywhere you use them.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Component className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Reusable</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Write once, use everywhere across projects
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Encapsulated</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Styles and scripts don't leak out or in
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Native</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Built into browsers, no framework needed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* First Web Component */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            1. Your First Web Component
          </CardTitle>
          <CardDescription>
            See how simple it is to create a custom HTML element
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={simpleComponentExample}
            css=""
            title="Simple Web Component"
            colorTheme="green"
          />
          
          <div className="mt-4 space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">How It Works:</h4>
              <ol className="space-y-2 text-sm text-green-800 dark:text-green-200 list-decimal list-inside">
                <li>Create a class that extends <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">HTMLElement</code></li>
                <li>Define behavior in <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">connectedCallback()</code></li>
                <li>Register with <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">customElements.define()</code></li>
                <li>Use your custom tag like any HTML element!</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Three Core Technologies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. The 3 Core Technologies
          </CardTitle>
          <CardDescription>
            Web Components are built on three main specifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={threePartsExample}
            css=""
            title="Three Parts of Web Components"
            colorTheme="purple"
          />
          
          <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🎯 The Power of Three:</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">Custom Elements:</strong>
                  <p className="text-blue-600 dark:text-blue-400 mt-1">Define your own HTML tags with custom behavior</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <strong className="text-purple-700 dark:text-purple-300">Shadow DOM:</strong>
                  <p className="text-purple-600 dark:text-purple-400 mt-1">Encapsulate styles and markup from the rest of the page</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <strong className="text-pink-700 dark:text-pink-300">HTML Templates:</strong>
                  <p className="text-pink-600 dark:text-pink-400 mt-1">Define reusable markup that can be cloned and inserted</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <CheckCircle className="h-5 w-5" />
            </div>
            3. Why Use Web Components?
          </CardTitle>
          <CardDescription>
            The advantages of using Web Components in your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={benefitsExample}
            css=""
            title="Benefits of Web Components"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Visual Architecture */}
      <Card>
        <CardHeader>
          <CardTitle>Web Component Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
            <div className="space-y-4">
              {/* Regular DOM */}
              <div className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900">
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full font-semibold">Regular DOM</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                </div>
              </div>

              <div className="text-center text-2xl">↓</div>

              {/* Web Component */}
              <div className="p-4 rounded-lg border-4 border-purple-500 bg-white dark:bg-slate-900">
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-semibold">
                    &lt;my-component&gt;
                  </span>
                </div>
                
                {/* Shadow DOM inside */}
                <div className="p-3 rounded-lg border-2 border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30">
                  <div className="text-center mb-2">
                    <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">Shadow DOM (Encapsulated)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-purple-300 dark:bg-purple-700 rounded w-full"></div>
                    <div className="h-3 bg-purple-300 dark:bg-purple-700 rounded w-2/3"></div>
                    <div className="text-xs text-center text-purple-600 dark:text-purple-400 mt-2">
                      🔒 Styles & Scripts Isolated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Real-World Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎨 Design Systems</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Build consistent UI components for your entire organization
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📦 Widget Libraries</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Create embeddable widgets that work anywhere
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔧 Micro Frontends</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Build independent, framework-agnostic modules
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚡ Progressive Enhancement</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Add features that degrade gracefully
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Support */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Browser Support</AlertTitle>
        <AlertDescription>
          Web Components are supported in all modern browsers: Chrome 54+, Firefox 63+, Safari 10.1+, Edge 79+. 
          For older browsers, use <a href="https://github.com/webcomponents/polyfills" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">polyfills</a>.
        </AlertDescription>
      </Alert>
    </div>
  );
}
