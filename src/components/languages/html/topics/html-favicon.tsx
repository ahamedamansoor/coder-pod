'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Image, Lightbulb, Smartphone, Monitor } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlFaviconProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const faviconExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Standard favicon -->
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  
  <!-- SVG favicon (modern browsers) -->
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  
  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Web App Manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <title>Favicon Demo</title>
</head>
<body>
  <h1>🎨 Favicons</h1>
  <p>The small icon in your browser tab!</p>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1;font-size:2rem}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="favicon-demo">
  <div class="browser-bar">
    <div class="tab">
      <span class="favicon">🌐</span>
      <span class="title">My Website</span>
    </div>
  </div>
  <div class="arrow">↑ Favicon appears here</div>
</div>`,
  css: `.favicon-demo{font-family:sans-serif;text-align:center;padding:1rem}.browser-bar{background:#e2e8f0;border-radius:8px 8px 0 0;padding:.5rem;max-width:300px;margin:0 auto}.tab{display:inline-flex;align-items:center;gap:.5rem;background:#fff;padding:.5rem 1rem;border-radius:6px 6px 0 0;font-size:.9rem}.favicon{font-size:1rem}.title{color:#1e293b}.arrow{margin-top:1rem;color:#3b82f6;font-weight:600}@media(prefers-color-scheme:dark){.browser-bar{background:#334155}.tab{background:#1e293b}.title{color:#f1f5f9}.arrow{color:#60a5fa}}`,
  js: ``,
};

export default function HtmlFavicon({ onOpenWebPlayground }: HtmlFaviconProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Image}
        category="HTML · Document Head"
        title="Favicon"
        description="Add a small icon to your browser tab and bookmarks"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Image className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is a Favicon?</CardTitle>
              <CardDescription className="text-base mt-1">Your website's mini logo</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            A <strong>favicon</strong> (favorite icon) is the small icon displayed in browser tabs, bookmarks, 
            and mobile home screens. It helps users identify your site quickly.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <Monitor className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-slate-700 dark:text-slate-300">Browser Tabs</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">⭐</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Bookmarks</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <Smartphone className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-slate-700 dark:text-slate-300">Home Screen</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Where It Appears</CardTitle>
          <CardDescription>Visual representation</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Favicon in Browser"
            description="Location of favicon in browser tab"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="200px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Image className="w-7 h-7" />
            Complete Favicon Setup
          </CardTitle>
          <CardDescription>Modern favicon implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="All Favicon Types"
            description="Standard, SVG, Apple Touch, and Manifest"
            html={faviconExample.html}
            css={faviconExample.css}
            js={faviconExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Sizes Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Recommended Sizes</CardTitle>
          <CardDescription>Icons for different devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              { size: '16×16', use: 'Browser tabs (standard)', format: 'ICO/PNG' },
              { size: '32×32', use: 'Windows taskbar, Mac Dock', format: 'ICO/PNG' },
              { size: '180×180', use: 'Apple Touch Icon (iOS)', format: 'PNG' },
              { size: '192×192', use: 'Android Chrome', format: 'PNG' },
              { size: '512×512', use: 'PWA splash screen', format: 'PNG' },
              { size: 'Any', use: 'SVG favicon (scalable)', format: 'SVG' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <code className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded font-mono">{item.size}</code>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item.use}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">{item.format}</span>
              </div>
            ))}
          </div>
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Modern Approach</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              Use <strong>SVG favicons</strong> for modern browsers — they scale perfectly and support dark mode via CSS!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
