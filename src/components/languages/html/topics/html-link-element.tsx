'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Link2, Lightbulb, Palette, Zap } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlLinkElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const linkExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- CSS Stylesheet -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Favicon -->
  <link rel="icon" href="favicon.ico">
  
  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/page">
  
  <title>Link Element Demo</title>
</head>
<body>
  <h1>Link Element</h1>
  <p>Check the head section for various link uses!</p>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="link-types">
  <div class="link-card">
    <span class="icon">🎨</span>
    <code>rel="stylesheet"</code>
    <span class="desc">CSS files</span>
  </div>
  <div class="link-card">
    <span class="icon">⭐</span>
    <code>rel="icon"</code>
    <span class="desc">Favicon</span>
  </div>
  <div class="link-card">
    <span class="icon">⚡</span>
    <code>rel="preload"</code>
    <span class="desc">Priority loading</span>
  </div>
  <div class="link-card">
    <span class="icon">🔗</span>
    <code>rel="canonical"</code>
    <span class="desc">Primary URL</span>
  </div>
</div>`,
  css: `.link-types{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;font-family:sans-serif;padding:1rem}.link-card{background:#fff;padding:1rem;border-radius:8px;text-align:center;box-shadow:0 2px 4px rgba(0,0,0,.1)}.icon{font-size:1.5rem;display:block;margin-bottom:.5rem}code{display:block;background:#e0f2fe;color:#0369a1;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;margin-bottom:.5rem}.desc{color:#64748b;font-size:.8rem}@media(prefers-color-scheme:dark){.link-card{background:#1e293b}code{background:#0c4a6e;color:#7dd3fc}.desc{color:#94a3b8}}`,
  js: ``,
};

export default function HtmlLinkElement({ onOpenWebPlayground }: HtmlLinkElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Link2}
        category="HTML · Document Head"
        title="&lt;link&gt; Element"
        description="Connect external resources like stylesheets and icons"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Link2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;link&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Connect external resources to your page</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;link&gt;</code> element links 
            external resources like stylesheets, fonts, and icons. It's a <strong>void element</strong> (no closing tag).
          </p>

          <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg font-mono text-sm overflow-x-auto">
            <code className="text-blue-600 dark:text-blue-400">&lt;link rel="stylesheet" href="styles.css"&gt;</code>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Common Link Types</CardTitle>
          <CardDescription>Different rel attribute values</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Link Relationships"
            description="Most used link types"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="240px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Palette className="w-7 h-7" />
            Complete Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Multiple Link Elements"
            description="Various link uses in one document"
            html={linkExample.html}
            css={linkExample.css}
            js={linkExample.js}
            colorTheme="blue"
            previewHeight="380px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Performance Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400">
            <Zap className="w-6 h-6" />
            Performance Links
          </CardTitle>
          <CardDescription>Speed up your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              { rel: 'preload', desc: 'Load critical resources early', example: 'fonts, hero images' },
              { rel: 'prefetch', desc: 'Load resources for next page', example: 'next page assets' },
              { rel: 'preconnect', desc: 'Early connection to domains', example: 'fonts.googleapis.com' },
              { rel: 'dns-prefetch', desc: 'Resolve DNS early', example: 'third-party domains' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-1">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono">rel="{item.rel}"</code>
                  <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded">Performance</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc} — <em>{item.example}</em></p>
              </div>
            ))}
          </div>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">preconnect</code> for Google Fonts to speed up font loading significantly.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
