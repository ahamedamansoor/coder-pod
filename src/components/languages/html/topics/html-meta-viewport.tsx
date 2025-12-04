'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Smartphone, Lightbulb } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlMetaViewportProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const viewportExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 1rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); margin: 0; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%); } }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { color: #0369a1; }
    @media (prefers-color-scheme: dark) { h1 { color: #7dd3fc; } }
    p { color: #475569; line-height: 1.6; }
    @media (prefers-color-scheme: dark) { p { color: #cbd5e1; } }
    .responsive-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0; }
    .card { background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    @media (prefers-color-scheme: dark) { .card { background: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.3); } }
    .card h3 { color: #0369a1; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .card h3 { color: #7dd3fc; } }
    .card p { color: #475569; margin: 0.5rem 0; }
    @media (prefers-color-scheme: dark) { .card p { color: #cbd5e1; } }
  </style>
</head>
<body>
  <div class="container">
    <h1>📱 Responsive Web Design</h1>
    <p>This page adapts to any screen size thanks to the viewport meta tag!</p>
    
    <div class="responsive-grid">
      <div class="card">
        <h3>📱 Mobile</h3>
        <p>Stacks vertically on small screens</p>
      </div>
      <div class="card">
        <h3>💻 Tablet</h3>
        <p>Optimized for mid-size screens</p>
      </div>
      <div class="card">
        <h3>🖥️ Desktop</h3>
        <p>Full width layout on large screens</p>
      </div>
    </div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

const attributesExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .attributes { max-width: 700px; margin: 0 auto; }
    .attribute { background: white; margin: 1rem 0; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #0369a1; }
    @media (prefers-color-scheme: dark) { .attribute { background: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.3); border-left-color: #7dd3fc; } }
    .attribute h3 { color: #0369a1; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .attribute h3 { color: #7dd3fc; } }
    .attribute code { background: #f3f4f6; color: #1e293b; padding: 0.2rem 0.5rem; border-radius: 3px; font-family: monospace; }
    @media (prefers-color-scheme: dark) { .attribute code { background: #0f172a; color: #a5f3fc; } }
    .attribute p { color: #475569; margin: 0.5rem 0; }
    @media (prefers-color-scheme: dark) { .attribute p { color: #cbd5e1; } }
  </style>
</head>
<body>
  <div class="attributes">
    <div class="attribute">
      <h3><code>width=device-width</code></h3>
      <p>Sets viewport width to match device width</p>
    </div>
    
    <div class="attribute">
      <h3><code>initial-scale=1.0</code></h3>
      <p>Sets initial zoom level (1.0 = 100%)</p>
    </div>
    
    <div class="attribute">
      <h3><code>maximum-scale=5.0</code></h3>
      <p>Limits maximum zoom level for accessibility</p>
    </div>
    
    <div class="attribute">
      <h3><code>user-scalable=yes</code></h3>
      <p>Allow users to zoom in and out</p>
    </div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlMetaViewport({ onOpenWebPlayground }: HtmlMetaViewportProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Smartphone}
        category="HTML · Document Head"
        title="Viewport Meta Tag"
        description="Control how pages display on mobile devices"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-950/20 dark:to-blue-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-xl">
              <Smartphone className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-cyan-600 dark:text-cyan-400">Viewport Meta Tag</CardTitle>
              <CardDescription className="text-base mt-1">Essential for mobile-friendly responsive design</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;meta name="viewport"&gt;</code> tag tells browsers how to render the page on different devices. Without it, mobile browsers will zoom out to show the full desktop view.
          </p>
          <Alert className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
            <Lightbulb className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-700 dark:text-cyan-300">Mobile First</AlertTitle>
            <AlertDescription className="text-cyan-600 dark:text-cyan-400">
              Always include viewport meta tag for responsive design. Use width=device-width and initial-scale=1.0.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
            <Smartphone className="w-7 h-7" />
            Responsive Example
          </CardTitle>
          <CardDescription>Resize your window to see responsive behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Responsive Layout"
            description="With viewport meta tag - layout adapts to screen size"
            html={viewportExample.html}
            css={viewportExample.css}
            js={viewportExample.js}
            colorTheme="cyan"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-cyan-600 dark:text-cyan-400">Viewport Attributes</CardTitle>
          <CardDescription>Common viewport meta tag properties</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Viewport Attributes"
            description="Common attributes and their meanings"
            html={attributesExample.html}
            css={attributesExample.css}
            js={attributesExample.js}
            colorTheme="cyan"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

