'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Tags, AlertTriangle, User } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlMetaKeywordsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const keywordsExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="HTML, tutorial, web development, coding">
  <meta name="author" content="John Developer">
  <meta name="robots" content="index, follow">
  <title>HTML Tutorial</title>
</head>
<body>
  <h1>HTML Tutorial</h1>
  <p>Various meta tags for page information</p>
</body>
</html>`,
  css: ``,
  js: ``
};

const diagramExample = {
  html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .meta-list { max-width: 600px; margin: 0 auto; }
    .meta-item { background: white; margin: 1rem 0; padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #3b82f6; }
    @media (prefers-color-scheme: dark) { .meta-item { background: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.3); border-left-color: #60a5fa; } }
    .name { background: #3b82f6; color: white; padding: 0.35rem 0.75rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600; font-family: monospace; }
    @media (prefers-color-scheme: dark) { .name { background: #1e40af; } }
    .desc { color: #64748b; font-size: 0.9rem; }
    @media (prefers-color-scheme: dark) { .desc { color: #cbd5e1; } }
  </style>
</head>
<body>
  <div class="meta-list">
    <div class="meta-item">
      <span class="name">keywords</span>
      <span class="desc">Page topics (legacy)</span>
    </div>
    <div class="meta-item">
      <span class="name">author</span>
      <span class="desc">Content creator</span>
    </div>
    <div class="meta-item">
      <span class="name">robots</span>
      <span class="desc">Search engine instructions</span>
    </div>
    <div class="meta-item">
      <span class="name">generator</span>
      <span class="desc">Software used</span>
    </div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlMetaKeywords({ onOpenWebPlayground }: HtmlMetaKeywordsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Tags}
        category="HTML · Document Head"
        title="Meta Keywords & More"
        description="Additional meta tags for page information"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Tags className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">Other Meta Tags</CardTitle>
              <CardDescription className="text-base mt-1">Keywords, author, robots, and more</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">About Keywords</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              <strong>Google ignores the keywords meta tag</strong> for ranking since 2009. 
              Focus on quality content instead. Other meta tags are still useful.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg font-mono text-xs">
              <code className="text-blue-600 dark:text-blue-400">&lt;meta name="author" content="Name"&gt;</code>
            </div>
            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg font-mono text-xs">
              <code className="text-blue-600 dark:text-blue-400">&lt;meta name="robots" content="index"&gt;</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Common Meta Tags</CardTitle>
          <CardDescription>Quick reference</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Meta Tag Types"
            description="Different meta tags and their purposes"
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
            <User className="w-7 h-7" />
            Complete Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Multiple Meta Tags"
            description="Using keywords, author, and robots"
            html={keywordsExample.html}
            css={keywordsExample.css}
            js={keywordsExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Robots Meta */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Robots Meta Tag</CardTitle>
          <CardDescription>Control search engine behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              { value: 'index, follow', desc: 'Index page and follow links (default)' },
              { value: 'noindex', desc: 'Don\'t show in search results' },
              { value: 'nofollow', desc: 'Don\'t follow links on this page' },
              { value: 'noarchive', desc: 'Don\'t show cached version' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <code className="text-sm text-blue-600 dark:text-blue-400 font-mono">{item.value}</code>
                <span className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
