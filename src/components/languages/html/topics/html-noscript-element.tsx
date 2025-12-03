'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { ShieldAlert, Lightbulb, AlertTriangle, Users } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlNoscriptElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicNoscriptExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Noscript Example</title>
</head>
<body>
  <h1>JavaScript Detection</h1>
  
  <noscript>
    <div class="warning">
      <h2>⚠️ JavaScript is Disabled</h2>
      <p>This website requires JavaScript to function properly.</p>
      <p>Please enable JavaScript in your browser settings.</p>
    </div>
  </noscript>
  
  <script>
    document.write('<p style="color:green">✓ JavaScript is enabled!</p>');
  </script>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}.warning{background:#fee2e2;border:2px solid#ef4444;color:#991b1b;padding:2rem;border-radius:8px;max-width:500px;margin:1rem auto}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}.warning{background:#450a0a;border-color:#991b1b;color:#fecaca}}`,
  js: ``,
};

const headNoscriptExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Noscript in Head</title>
  
  <!-- Redirect if JS disabled -->
  <noscript>
    <meta http-equiv="refresh" content="0; url=/no-js-version.html">
  </noscript>
  
  <!-- Alternative: Load no-JS stylesheet -->
  <noscript>
    <link rel="stylesheet" href="no-js-styles.css">
  </noscript>
</head>
<body>
  <h1>Modern Web App</h1>
  <p>This page uses advanced JavaScript features.</p>
  <p id="js-check">Checking JavaScript...</p>
  
  <script>
    document.getElementById('js-check').textContent = '✓ JavaScript is working!';
    document.getElementById('js-check').style.color = 'green';
  </script>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}#js-check{font-weight:600}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const alternativeContentExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Accessible Alternative</title>
</head>
<body>
  <h1>Interactive Counter</h1>
  
  <!-- JavaScript version -->
  <div id="counter-app">
    <button onclick="increment()">Click Me</button>
    <p>Count: <span id="count">0</span></p>
  </div>
  
  <!-- Fallback for no JS -->
  <noscript>
    <div style="background:#fef3c7;border:2px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-top:1rem">
      <h3 style="margin-top:0">📱 Alternative Version</h3>
      <p>This interactive feature requires JavaScript.</p>
      <p>You can still view our content in <a href="/static-version">static mode</a>.</p>
    </div>
  </noscript>
  
  <script>
    let count = 0;
    function increment() {
      count++;
      document.getElementById('count').textContent = count;
    }
  </script>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}button{background:#2563eb;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:6px;cursor:pointer;font-size:1rem}button:hover{background:#1d4ed8}#count{color:#059669;font-weight:700;font-size:1.5rem}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="flow">
  <div class="box start">Page Loads</div>
  <div class="arrow">↓</div>
  <div class="decision">
    <div class="question">JavaScript Enabled?</div>
    <div class="paths">
      <div class="path yes">
        <div class="label">✓ YES</div>
        <div class="result">Run scripts normally</div>
      </div>
      <div class="path no">
        <div class="label">✗ NO</div>
        <div class="result">Show &lt;noscript&gt; content</div>
      </div>
    </div>
  </div>
</div>`,
  css: `.flow{font-family:sans-serif;text-align:center;padding:1rem}.box{background:#3b82f6;color:#fff;padding:1rem;border-radius:8px;display:inline-block;margin-bottom:.5rem}.arrow{font-size:2rem;color:#64748b;margin:.5rem 0}.decision{margin-top:1rem}.question{background:#f1f5f9;color:#1e293b;padding:1rem;border-radius:8px;display:inline-block;font-weight:600;margin-bottom:1rem}.paths{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}.path{background:#fff;padding:1rem;border-radius:8px;min-width:150px;box-shadow:0 2px 4px rgba(0,0,0,.1)}.yes{border-top:4px solid #10b981}.no{border-top:4px solid #ef4444}.label{font-weight:700;margin-bottom:.5rem}.result{font-size:.85rem;color:#64748b}@media(prefers-color-scheme:dark){.box{background:#1e40af}.question{background:#1e293b;color:#f1f5f9}.path{background:#1e293b}.result{color:#94a3b8}}`,
  js: ``,
};

export default function HtmlNoscriptElement({ onOpenWebPlayground }: HtmlNoscriptElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={ShieldAlert}
        category="HTML · Scripts & Styles"
        title="&lt;noscript&gt; Element"
        description="Provide fallback content when JavaScript is disabled"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <AlertTriangle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;noscript&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Fallback for users without JavaScript</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;noscript&gt;</code> element 
            displays content only when JavaScript is disabled or unavailable. It ensures your site remains accessible to all users.
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm mb-1">Why It Matters</h4>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Accessibility for all users</li>
                <li>• SEO-friendly fallbacks</li>
                <li>• Graceful degradation</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
              <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-1">Usage Stats</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ~0.2% of users browse without JavaScript (corporate firewalls, privacy tools, older devices)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">How It Works</CardTitle>
          <CardDescription>Decision flow</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Noscript Logic"
            description="Browser decides which content to show"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ShieldAlert className="w-7 h-7" />
            Basic Warning Message
          </CardTitle>
          <CardDescription>Alert users about JavaScript requirement</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Simple Noscript"
            description="Display message when JS is off"
            html={basicNoscriptExample.html}
            css={basicNoscriptExample.css}
            js={basicNoscriptExample.js}
            colorTheme="blue"
            previewHeight="360px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Testing Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              In browser DevTools, disable JavaScript to see noscript content (Settings → Debugger → Disable JavaScript).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Head Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Users className="w-7 h-7" />
            Noscript in &lt;head&gt;
          </CardTitle>
          <CardDescription>Redirect or load alternative stylesheets</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Head Noscript"
            description="Only &lt;link&gt;, &lt;style&gt;, &lt;meta&gt; allowed in head"
            html={headNoscriptExample.html}
            css={headNoscriptExample.css}
            js={headNoscriptExample.js}
            colorTheme="blue"
            previewHeight="360px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 mt-4">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Restriction</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              In &lt;head&gt;, noscript can only contain &lt;link&gt;, &lt;style&gt;, and &lt;meta&gt; elements.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Alternative Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Lightbulb className="w-7 h-7" />
            Accessible Alternatives
          </CardTitle>
          <CardDescription>Provide useful fallback content</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Graceful Degradation"
            description="Offer alternative ways to access content"
            html={alternativeContentExample.html}
            css={alternativeContentExample.css}
            js={alternativeContentExample.js}
            colorTheme="blue"
            previewHeight="420px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">✅ Do</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Provide helpful messages</li>
                <li>• Link to alternative versions</li>
                <li>• Explain why JS is needed</li>
                <li>• Test with JS disabled</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">❌ Don't</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Show generic "enable JS" messages</li>
                <li>• Duplicate entire page content</li>
                <li>• Forget about accessibility</li>
                <li>• Assume everyone has JS</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
