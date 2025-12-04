'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Type, Lightbulb, Search } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlTitleElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicTitleExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome Website - Home</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); margin: 0; text-align: center; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%); } }
    h1 { color: #0369a1; margin: 0 0 1rem 0; }
    @media (prefers-color-scheme: dark) { h1 { color: #7dd3fc; } }
    p { color: #475569; font-size: 1.1rem; }
    @media (prefers-color-scheme: dark) { p { color: #cbd5e1; } }
  </style>
</head>
<body>
  <h1>Welcome!</h1>
  <p>Check the browser tab to see the title.</p>
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
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); text-align: center; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .diagram { max-width: 600px; margin: 0 auto; }
    .browser-tab { display: inline-block; background: #e2e8f0; color: #1e293b; padding: 0.75rem 1.5rem; border-radius: 6px 6px 0 0; font-size: 0.95rem; border: 2px solid #94a3b8; margin-bottom: 1rem; font-weight: bold; }
    @media (prefers-color-scheme: dark) { .browser-tab { background: #334155; color: #f1f5f9; border-color: #64748b; } }
    .arrow { font-size: 1.5rem; margin: 0.75rem 0; color: #3b82f6; }
    @media (prefers-color-scheme: dark) { .arrow { color: #60a5fa; } }
    code { background: #1e293b; color: #7dd3fc; padding: 0.75rem 1.5rem; border-radius: 6px; display: inline-block; font-family: monospace; font-size: 0.95rem; }
    @media (prefers-color-scheme: dark) { code { background: #0f172a; color: #a5f3fc; } }
  </style>
</head>
<body>
  <div class="diagram">
    <div class="browser-tab">📄 My Awesome Website - Home</div>
    <div class="arrow">↑</div>
    <code>&lt;title&gt;My Awesome Website - Home&lt;/title&gt;</code>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

const seoExample = {
  html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .example { background: white; margin: 1rem auto; padding: 1.5rem; border-radius: 8px; max-width: 600px; border-left: 4px solid #10b981; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    @media (prefers-color-scheme: dark) { .example { background: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.3); } }
    .good { border-left-color: #10b981; }
    .bad { border-left-color: #ef4444; }
    .good h4 { color: #10b981; }
    .bad h4 { color: #ef4444; }
    @media (prefers-color-scheme: dark) { .good h4 { color: #86efac; } .bad h4 { color: #fca5a5; } }
    code { background: #f3f4f6; color: #1e293b; padding: 0.25rem 0.5rem; border-radius: 3px; font-size: 0.9rem; }
    @media (prefers-color-scheme: dark) { code { background: #0f172a; color: #a5f3fc; } }
    p { color: #475569; margin: 0; }
    @media (prefers-color-scheme: dark) { p { color: #cbd5e1; } }
  </style>
</head>
<body>
  <div class="example good">
    <h4>✓ Good Title Examples</h4>
    <p><code>Learn HTML - Free Tutorials | CoderPod</code></p>
    <p><code>Buy Running Shoes - Free Shipping | ShoeStore</code></p>
    <p><code>Contact Us - Get Support | MyCompany</code></p>
  </div>
  
  <div class="example bad">
    <h4>✗ Bad Title Examples (too vague)</h4>
    <p><code>Home</code></p>
    <p><code>Page 1</code></p>
    <p><code>Welcome</code></p>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlTitleElement({ onOpenWebPlayground }: HtmlTitleElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Type}
        category="HTML · Document Head"
        title="&lt;title&gt; Element"
        description="Set the title shown in browser tabs and search results"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Type className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;title&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Your page's name in the browser</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;title&gt;</code> element defines 
            the text shown in the <strong>browser tab</strong>, <strong>bookmarks</strong>, and <strong>search engine results</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">🔖</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Browser Tab</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">⭐</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Bookmarks</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
              <span className="text-2xl">🔍</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Search Results</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">How It Appears</CardTitle>
          <CardDescription>Title in browser tab</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Title in Browser"
            description="Visual representation of title element"
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
            <Type className="w-7 h-7" />
            Basic Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Setting Page Title"
            description="Simple title implementation"
            html={basicTitleExample.html}
            css={basicTitleExample.css}
            js={basicTitleExample.js}
            colorTheme="blue"
            previewHeight="280px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* SEO Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Search className="w-7 h-7" />
            SEO Best Practices
          </CardTitle>
          <CardDescription>Write titles that rank well</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">✅ Good Titles</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• 50-60 characters max</li>
                <li>• Include keywords</li>
                <li>• Brand at the end</li>
                <li>• Unique per page</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">❌ Avoid</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Generic titles like "Home"</li>
                <li>• Too long (gets cut off)</li>
                <li>• Duplicate titles</li>
                <li>• Keyword stuffing</li>
              </ul>
            </div>
          </div>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Format: <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">Primary Keyword - Secondary Info | Brand</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
