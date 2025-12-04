'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Code, Lightbulb, AlertCircle } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlMetaCharsetProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const charsetExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Character Encoding</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); margin: 0; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%); } }
    h1 { color: #0369a1; margin: 0 0 1rem 0; }
    @media (prefers-color-scheme: dark) { h1 { color: #7dd3fc; } }
    p { color: #475569; font-size: 1.1rem; }
    @media (prefers-color-scheme: dark) { p { color: #cbd5e1; } }
    .symbols { font-size: 1.5rem; margin: 1rem 0; }
  </style>
</head>
<body>
  <h1>Character Encoding</h1>
  <p>UTF-8 supports all languages and symbols:</p>
  <div class="symbols">
    English • 中文 • Русский • العربية • 日本語 • Ελληνικά
  </div>
  <p>✅ Always use UTF-8 for modern web projects!</p>
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
    .comparison { max-width: 700px; margin: 0 auto; }
    .encoding { background: white; margin: 1rem 0; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    @media (prefers-color-scheme: dark) { .encoding { background: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.3); } }
    .encoding h3 { color: #0369a1; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .encoding h3 { color: #7dd3fc; } }
    .encoding p { color: #475569; margin: 0.5rem 0; font-size: 0.95rem; }
    @media (prefers-color-scheme: dark) { .encoding p { color: #cbd5e1; } }
    .good { border-left: 4px solid #10b981; }
    .bad { border-left: 4px solid #ef4444; }
  </style>
</head>
<body>
  <div class="comparison">
    <div class="encoding good">
      <h3>✅ UTF-8 (Recommended)</h3>
      <p><code>&lt;meta charset="UTF-8"&gt;</code></p>
      <p>Supports all languages and emojis 🌍</p>
      <p>Modern standard for web</p>
    </div>
    
    <div class="encoding bad">
      <h3>❌ Other Encodings (Legacy)</h3>
      <p>ISO-8859-1, Windows-1252, etc.</p>
      <p>Limited language support</p>
      <p>Avoid in new projects</p>
    </div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlMetaCharset({ onOpenWebPlayground }: HtmlMetaCharsetProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={FileText}
        category="HTML · Document Head"
        title="Character Encoding"
        description="Declare UTF-8 encoding for proper text display"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">Character Encoding</CardTitle>
              <CardDescription className="text-base mt-1">Tell browsers how to interpret text characters</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;meta charset&gt;</code> tag declares how the browser should interpret text characters. <strong>UTF-8</strong> is the universal standard that supports all languages.
          </p>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Always Use UTF-8</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Place &lt;meta charset="UTF-8"&gt; as the first element in &lt;head&gt; for proper character handling.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Live Example
          </CardTitle>
          <CardDescription>Character encoding in action</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="UTF-8 Character Support"
            description="Shows multiple languages and special characters"
            html={charsetExample.html}
            css={charsetExample.css}
            js={charsetExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">UTF-8 vs Other Encodings</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Encoding Comparison"
            description="Why UTF-8 is the standard choice"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}

