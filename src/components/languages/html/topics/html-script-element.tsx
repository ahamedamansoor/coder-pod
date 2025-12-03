'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Code, Lightbulb, Zap, FileCode } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlScriptElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const inlineScriptExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inline Script</title>
</head>
<body>
  <h1 id="greeting">Hello!</h1>
  <button onclick="changeText()">Click Me</button>
  
  <script>
    function changeText() {
      document.getElementById('greeting').textContent = 'JavaScript Works! 🎉';
    }
  </script>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}button{background:#2563eb;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:6px;cursor:pointer;font-size:1rem}button:hover{background:#1d4ed8}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const externalScriptExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External Script</title>
</head>
<body>
  <h1>External JavaScript</h1>
  <p id="output">Waiting for script...</p>
  
  <!-- External script -->
  <script src="script.js"></script>
  
  <!-- Inline script to demonstrate -->
  <script>
    setTimeout(() => {
      document.getElementById('output').textContent = 'Script loaded successfully! ✓';
    }, 500);
  </script>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}#output{color:#059669;font-weight:600;font-size:1.1rem}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}#output{color:#6ee7b7}}`,
  js: ``,
};

const typeModuleExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ES6 Module</title>
</head>
<body>
  <h1>ES6 Module Script</h1>
  <div id="result"></div>
  
  <!-- Modern ES6 module -->
  <script type="module">
    // Modern import/export syntax
    const greeting = 'Hello from ES6 Module!';
    document.getElementById('result').innerHTML = 
      '<p style="color:#2563eb;font-weight:600">' + greeting + '</p>';
  </script>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="types">
  <div class="type-card">
    <h3>Inline Script</h3>
    <code>&lt;script&gt;code here&lt;/script&gt;</code>
    <p>JavaScript inside HTML</p>
  </div>
  <div class="type-card">
    <h3>External Script</h3>
    <code>&lt;script src="file.js"&gt;</code>
    <p>Separate .js file</p>
  </div>
  <div class="type-card">
    <h3>ES6 Module</h3>
    <code>&lt;script type="module"&gt;</code>
    <p>Import/export syntax</p>
  </div>
</div>`,
  css: `.types{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;font-family:sans-serif;padding:1rem}.type-card{background:#fff;padding:1.5rem;border-radius:8px;text-align:center;box-shadow:0 2px 4px rgba(0,0,0,.1)}h3{margin:0 0 .5rem;color:#3b82f6}code{display:block;background:#1e293b;color:#7dd3fc;padding:.5rem;border-radius:4px;font-size:.75rem;margin:.5rem 0;word-wrap:break-word}p{margin:.5rem 0 0;color:#64748b;font-size:.85rem}@media(prefers-color-scheme:dark){.type-card{background:#1e293b}h3{color:#60a5fa}code{background:#0f172a}p{color:#94a3b8}}`,
  js: ``,
};

export default function HtmlScriptElement({ onOpenWebPlayground }: HtmlScriptElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Code}
        category="HTML · Scripts & Styles"
        title="&lt;script&gt; Element"
        description="Add JavaScript to make your pages interactive"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;script&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Add JavaScript for interactivity</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;script&gt;</code> element 
            embeds or references JavaScript code. You can write code directly inside (inline) or link to external .js files.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">📝</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Inline Scripts</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">📄</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">External Files</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">📦</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">ES6 Modules</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Script Types</CardTitle>
          <CardDescription>Three ways to use scripts</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Script Formats"
            description="Inline vs External vs Module"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="240px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Inline Script */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <FileCode className="w-7 h-7" />
            Inline Script
          </CardTitle>
          <CardDescription>JavaScript code directly in HTML</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Inline Script Example"
            description="JavaScript inside the HTML file"
            html={inlineScriptExample.html}
            css={inlineScriptExample.css}
            js={inlineScriptExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">When to Use</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use inline scripts for small, page-specific code. For larger projects, external files are better for organization and caching.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* External Script */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            External Script
          </CardTitle>
          <CardDescription>Link to separate JavaScript file</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="External Script Example"
            description="Using src attribute to load JavaScript"
            html={externalScriptExample.html}
            css={externalScriptExample.css}
            js={externalScriptExample.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Syntax:</strong></p>
            <code className="text-blue-600 dark:text-blue-400 text-sm">&lt;script src="path/to/file.js"&gt;&lt;/script&gt;</code>
          </div>
        </CardContent>
      </Card>

      {/* Module Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            ES6 Modules
          </CardTitle>
          <CardDescription>Modern JavaScript with import/export</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="ES6 Module Script"
            description="Using type='module' for modern JS"
            html={typeModuleExample.html}
            css={typeModuleExample.css}
            js={typeModuleExample.js}
            colorTheme="blue"
            previewHeight="280px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Modern Approach</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              ES6 modules automatically use strict mode, have their own scope, and support import/export. They're loaded with defer by default.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Script Attributes</CardTitle>
          <CardDescription>Control how scripts load and execute</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              { attr: 'src', desc: 'Path to external JavaScript file', example: 'src="script.js"' },
              { attr: 'type', desc: 'Script type (module, text/javascript)', example: 'type="module"' },
              { attr: 'async', desc: 'Download in parallel, execute when ready', example: 'async' },
              { attr: 'defer', desc: 'Download in parallel, execute after HTML', example: 'defer' },
              { attr: 'crossorigin', desc: 'CORS requests for external scripts', example: 'crossorigin="anonymous"' },
              { attr: 'integrity', desc: 'Verify file integrity (SRI)', example: 'integrity="sha384-..."' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start mb-1">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono font-bold">{item.attr}</code>
                  <code className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">{item.example}</code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
