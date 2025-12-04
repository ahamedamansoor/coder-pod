'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { MapPin, Lightbulb, Zap, AlertCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlScriptPlacementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const headPlacementExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script in Head</title>
  <style>
    body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f0f9ff;
  color: #1e293b;
  text-align: center;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0c4a6e;
    color: #e0f2fe;
  }
}

h1 {
  color: #0369a1;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #7dd3fc;
  }
}

#msg {
  color: #059669;
  font-weight: 600;
  font-size: 1.1rem;
}

@media (prefers-color-scheme: dark) {
  #msg {
    color: #6ee7b7;
  }
}
  </style>
  
  <!-- Script in head with defer -->
  <script defer>
    // Runs after HTML is parsed
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('msg').textContent = 'Script from <head> executed! ✓';
    });
  </script>
</head>
<body>
  <h1>Script Placement</h1>
  <p id="msg">Loading...</p>
</body>
</html>`,
  css: ``,
  js: ``
};

const bodyEndExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script at Body End</title>
  <style>
    body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f0f9ff;
  color: #1e293b;
  text-align: center;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0c4a6e;
    color: #e0f2fe;
  }
}

h1 {
  color: #0369a1;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #7dd3fc;
  }
}

#result {
  color: #2563eb;
  font-weight: 600;
  font-size: 1.1rem;
}

@media (prefers-color-scheme: dark) {
  #result {
    color: #7dd3fc;
  }
}
  </style>
</head>
<body>
  <h1>Best Practice</h1>
  <p id="result">Waiting...</p>
  
  <!-- Script at end of body -->
  <script>
    // HTML already loaded, can access elements directly
    document.getElementById('result').textContent = 'Script at end executed! ✓';
  </script>
</body>
</html>`,
  css: ``,
  js: ``
};

const asyncDeferExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async vs Defer</title>
  <style>
    body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: #f0f9ff;
  color: #1e293b;
  text-align: center;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0c4a6e;
    color: #e0f2fe;
  }
}

h1 {
  color: #0369a1;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #7dd3fc;
  }
}

.info {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  .info {
    background: #1e293b;
    border-color: #334155;
  }
}
  </style>
  
  <!-- Async: download in parallel, execute ASAP -->
  <script async>
    console.log('Async script executed');
  </script>
  
  <!-- Defer: download in parallel, execute after HTML -->
  <script defer>
    console.log('Defer script executed');
  </script>
</head>
<body>
  <h1>Async vs Defer</h1>
  <p>Check console for execution order</p>
  <div class="info">
    <strong>Async:</strong> Executes immediately when downloaded<br>
    <strong>Defer:</strong> Waits until HTML is fully parsed
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

const diagramExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script Placement Options</title>
  <style>
    body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 1rem;
  margin: 0;
  background: #f8fafc;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
}

.placements {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.place-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  min-width: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .place-card {
    background: #1e293b;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

.head {
  border-top: 4px solid #f59e0b;
}

.body-start {
  border-top: 4px solid #ef4444;
}

.body-end {
  border-top: 4px solid #10b981;
}

h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #f1f5f9;
  }
}

p {
  margin: 0.25rem 0;
  font-size: 0.8rem;
  color: #64748b;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #94a3b8;
  }
}

code {
  display: block;
  background: #f1f5f9;
  color: #3b82f6;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  code {
    background: #0f172a;
    color: #7dd3fc;
  }
}

.arrow {
  font-size: 1.5rem;
  color: #94a3b8;
}

@media (prefers-color-scheme: dark) {
  .arrow {
    color: #64748b;
  }
}
  </style>
</head>
<body>
  <div class="placements">
    <div class="place-card head">
      <h3>&lt;head&gt;</h3>
      <p>With defer/async</p>
      <code>Non-blocking</code>
    </div>
    <div class="arrow">→</div>
    <div class="place-card body-start">
      <h3>Body Start</h3>
      <p>Rare use case</p>
      <code>Blocks rendering</code>
    </div>
    <div class="arrow">→</div>
    <div class="place-card body-end">
      <h3>Body End ✓</h3>
      <p>Best practice</p>
      <code>HTML ready</code>
    </div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlScriptPlacement({ onOpenWebPlayground }: HtmlScriptPlacementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={MapPin}
        category="HTML · Scripts & Styles"
        title="Script Placement"
        description="Where to put scripts for best performance"
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
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">Where to Place Scripts?</CardTitle>
              <CardDescription className="text-base mt-1">Location affects page loading speed</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Script placement is crucial for performance. Scripts block HTML parsing by default, 
            so placing them correctly ensures your page loads fast and works properly.
          </p>

          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Best Practice</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              <strong>Place scripts at the end of &lt;body&gt;</strong> or use <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">defer</code> in &lt;head&gt;. 
              This prevents blocking page rendering.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Placement Options</CardTitle>
          <CardDescription>Three common locations</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Script Locations"
            description="Visualizing where scripts can go"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="220px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Head Placement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <MapPin className="w-7 h-7" />
            Script in &lt;head&gt;
          </CardTitle>
          <CardDescription>Use with defer or async</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Head Placement"
            description="Scripts in head with defer attribute"
            html={headPlacementExample.html}
            css={headPlacementExample.css}
            js={headPlacementExample.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 mt-4">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Important</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Without <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">defer</code> or <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">async</code>, 
              scripts in &lt;head&gt; block HTML parsing. Always use defer for best results.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Body End Placement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Script at End of &lt;body&gt;
          </CardTitle>
          <CardDescription>Traditional best practice</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Body End Placement"
            description="Scripts after all HTML content"
            html={bodyEndExample.html}
            css={bodyEndExample.css}
            js={bodyEndExample.js}
            colorTheme="blue"
            previewHeight="280px"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>✓ Advantage:</strong> HTML is fully loaded before script runs, no need for defer or DOMContentLoaded.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Async vs Defer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Async vs Defer
          </CardTitle>
          <CardDescription>Understanding the difference</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Async vs Defer Comparison"
            description="Different loading strategies"
            html={asyncDeferExample.html}
            css={asyncDeferExample.css}
            js={asyncDeferExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Quick Reference</CardTitle>
          <CardDescription>Choose the right approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              { method: 'End of <body>', when: 'Simple projects, guaranteed HTML ready', pros: 'No attributes needed', cons: 'Script discovery delayed' },
              { method: '<head> with defer', when: 'Modern best practice', pros: 'Early download, ordered execution', cons: 'Requires defer attribute' },
              { method: '<head> with async', when: 'Independent scripts (analytics)', pros: 'Fastest execution', cons: 'Order not guaranteed' },
              { method: 'type="module"', when: 'ES6 modules', pros: 'Auto defer, strict mode', cons: 'Older browsers need polyfill' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{item.method}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-1"><strong>When:</strong> {item.when}</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400"><strong>✓</strong> {item.pros}</p>
                <p className="text-sm text-amber-600 dark:text-amber-400"><strong>⚠</strong> {item.cons}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
