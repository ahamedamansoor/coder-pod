'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileCode, Lightbulb, Brain } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlHeadElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicHeadExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <meta name="description" content="A sample website">
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); margin: 0; text-align: center; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%); } }
    h1 { color: #0369a1; margin: 0; }
    @media (prefers-color-scheme: dark) { h1 { color: #7dd3fc; } }
    p { color: #475569; }
    @media (prefers-color-scheme: dark) { p { color: #cbd5e1; } }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This page has proper head metadata</p>
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
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .diagram { display: flex; gap: 1rem; justify-content: center; align-items: center; flex-wrap: wrap; }
    .box { padding: 1.5rem 2rem; border-radius: 8px; text-align: center; font-weight: bold; min-width: 150px; }
    .head { background: #3b82f6; color: white; border: 2px solid #1e40af; }
    @media (prefers-color-scheme: dark) { .head { background: #1e40af; border-color: #60a5fa; } }
    .body { background: #10b981; color: white; border: 2px solid #065f46; }
    @media (prefers-color-scheme: dark) { .body { background: #065f46; border-color: #6ee7b7; } }
    small { display: block; opacity: 0.9; font-size: 0.9rem; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <div class="diagram">
    <div class="box head">&lt;head&gt;<br/><small>Metadata (invisible)</small></div>
    <div class="box body">&lt;body&gt;<br/><small>Content (visible)</small></div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlHeadElement({ onOpenWebPlayground }: HtmlHeadElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={FileCode}
        category="HTML · Document Head"
        title="&lt;head&gt; Element"
        description="The container for metadata that browsers and search engines need"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Brain className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;head&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">The brain of your HTML document</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;head&gt;</code> element contains
            <strong> metadata</strong> — information about the page that isn't displayed directly but is essential for browsers, search engines, and social media.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">📋 What goes in &lt;head&gt;</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Page title</li>
                <li>• Character encoding</li>
                <li>• Viewport settings</li>
                <li>• CSS stylesheets</li>
                <li>• Favicon</li>
                <li>• Meta tags (SEO, social)</li>
              </ul>
            </div>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">👁️ Key Point</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Content in &lt;head&gt; is <strong>not visible</strong> on the page. It's read by browsers and search engines only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Head vs Body</CardTitle>
          <CardDescription>Visual comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Document Structure"
            description="Head (metadata) vs Body (content)"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="180px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <FileCode className="w-7 h-7" />
            Complete Head Example
          </CardTitle>
          <CardDescription>A typical HTML document head</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Basic &lt;head&gt; Setup"
            description="Essential elements every page needs"
            html={basicHeadExample.html}
            css={basicHeadExample.css}
            js={basicHeadExample.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Essential Head Elements</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Always include: charset, viewport, and title. These are the minimum requirements for a proper HTML5 document.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
