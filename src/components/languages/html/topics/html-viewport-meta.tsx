'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Smartphone, Lightbulb, Monitor } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlViewportMetaProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const viewportExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Page</title>
</head>
<body>
  <h1>Responsive Design</h1>
  <p>This page adapts to any screen size!</p>
  <div class="box">📱 Mobile</div>
  <div class="box">💻 Desktop</div>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:1.5rem;background:#f0f9ff;text-align:center}h1{color:#0369a1;font-size:clamp(1.5rem,4vw,2.5rem)}.box{display:inline-block;background:#0ea5e9;color:#fff;padding:1rem 2rem;margin:.5rem;border-radius:8px}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="diagram">
  <div class="device">
    <div class="screen bad">
      <small>Without viewport</small>
      <div class="content tiny">Zoomed out tiny text</div>
    </div>
    <div class="label">❌ Desktop layout on mobile</div>
  </div>
  <div class="device">
    <div class="screen good">
      <small>With viewport</small>
      <div class="content">Readable text!</div>
    </div>
    <div class="label">✅ Proper mobile layout</div>
  </div>
</div>`,
  css: `.diagram{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;font-family:sans-serif;padding:1rem}.device{text-align:center}.screen{width:120px;height:200px;margin:0 auto;border:3px solid #64748b;border-radius:12px;padding:.5rem;display:flex;flex-direction:column;justify-content:center}.bad{background:#fee2e2}.good{background:#d1fae5}.tiny{font-size:6px}.content{padding:.5rem;background:#fff;border-radius:4px;font-size:12px}.label{margin-top:.5rem;font-size:.8rem;color:#64748b}`,
  js: ``,
};

export default function HtmlViewportMeta({ onOpenWebPlayground }: HtmlViewportMetaProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Smartphone}
        category="HTML · Document Head"
        title="Viewport Meta"
        description="Make your website responsive on all devices"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Monitor className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is Viewport?</CardTitle>
              <CardDescription className="text-base mt-1">The visible area of a web page</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The viewport meta tag controls how your page scales on mobile devices. Without it, mobile browsers render pages at desktop width and zoom out.
          </p>

          <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg font-mono text-sm">
            <code className="text-blue-600 dark:text-blue-400">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm">width=device-width</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">Match screen width</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm">initial-scale=1.0</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">No initial zoom</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Visual Comparison</CardTitle>
          <CardDescription>With vs without viewport meta</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Mobile Rendering"
            description="See the difference viewport makes"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Smartphone className="w-7 h-7" />
            Responsive Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Viewport in Action"
            description="Page that works on all screen sizes"
            html={viewportExample.html}
            css={viewportExample.css}
            js={viewportExample.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Required for Mobile</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              This meta tag is essential for any responsive website. Include it in every HTML document.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
