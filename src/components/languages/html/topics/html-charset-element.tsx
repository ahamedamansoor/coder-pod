'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Languages, Lightbulb, Globe } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlCharsetElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const charsetExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Character Encoding Demo</title>
</head>
<body>
  <h1>Hello World! 🌍</h1>
  <p>Special characters: © ® ™ € £ ¥</p>
  <p>Languages: 中文 日本語 한국어 العربية</p>
  <p>Symbols: ♠ ♥ ♦ ♣ ★ ☆ ✓ ✗</p>
</body>
</html>`,
  css: `body{font-family:system-ui;padding:2rem;background:#f0f9ff;text-align:center}h1{color:#0369a1}p{margin:.5rem 0;font-size:1.1rem}@media(prefers-color-scheme:dark){body{background:#0c4a6e;color:#e0f2fe}h1{color:#7dd3fc}}`,
  js: ``,
};

const diagramExample = {
  html: `<div class="diagram">
  <div class="encoding">
    <div class="label">Without UTF-8</div>
    <div class="text bad">Caf? · Stra?e · ???</div>
  </div>
  <div class="encoding">
    <div class="label">With UTF-8</div>
    <div class="text good">Café · Straße · 日本語</div>
  </div>
</div>`,
  css: `.diagram{display:grid;grid-template-columns:1fr 1fr;gap:1rem;font-family:sans-serif;padding:1rem}.encoding{padding:1rem;border-radius:8px;text-align:center}.label{font-weight:600;margin-bottom:.5rem;font-size:.9rem}.bad{background:#fee2e2;color:#991b1b;padding:.5rem;border-radius:4px}.good{background:#d1fae5;color:#065f46;padding:.5rem;border-radius:4px}`,
  js: ``,
};

export default function HtmlCharsetElement({ onOpenWebPlayground }: HtmlCharsetElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Languages}
        category="HTML · Document Head"
        title="Character Encoding"
        description="Ensure all characters display correctly with UTF-8"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Globe className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is Charset?</CardTitle>
              <CardDescription className="text-base mt-1">How computers understand text</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;meta charset="UTF-8"&gt;</code> tells 
            the browser how to decode text. <strong>UTF-8</strong> supports virtually all characters from all languages.
          </p>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-700">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>⚠️ Important:</strong> Always place charset as the <strong>first element</strong> in &lt;head&gt; — 
              before even the title. Browsers need this information immediately.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Why UTF-8 Matters</CardTitle>
          <CardDescription>Comparison with and without proper encoding</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Encoding Comparison"
            description="See the difference UTF-8 makes"
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
            <Languages className="w-7 h-7" />
            UTF-8 in Action
          </CardTitle>
          <CardDescription>Special characters and multiple languages</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="UTF-8 Character Support"
            description="Emojis, symbols, and international text"
            html={charsetExample.html}
            css={charsetExample.css}
            js={charsetExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Always Use UTF-8</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              UTF-8 is the universal standard. It supports 1,112,064 characters including emojis, symbols, and all world languages.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
