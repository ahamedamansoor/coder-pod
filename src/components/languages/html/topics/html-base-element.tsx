'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Box, Code } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlBaseElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const demo = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Base Element Demo</title>
  <base href="https://example.com/">
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); margin: 0; }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #0c4a6e 0%, #082f49 100%); } }
    p { color: #475569; font-size: 1.1rem; }
    @media (prefers-color-scheme: dark) { p { color: #cbd5e1; } }
    code { background: #1e293b; color: #7dd3fc; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: monospace; }
    @media (prefers-color-scheme: dark) { code { background: #0f172a; } }
    a { color: #0369a1; text-decoration: none; font-weight: 500; margin-left: 0.5rem; }
    @media (prefers-color-scheme: dark) { a { color: #7dd3fc; } }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <p>Use <code>&lt;base&gt;</code> to set the default URL for all relative links.</p>
  <p><a href="docs.html">Internal docs</a></p>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlBaseElement({ onOpenWebPlayground }: HtmlBaseElementProps) {
  return (
    <div className="space-y-8 pb-10">
      <PageHeader
        icon={Box}
        category="HTML · Document Head"
        title="Base Element"
        description="Set the default base URL used by relative links and resources."
        colorTheme="blue"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <FileText className="w-6 h-6 text-blue-600" />
            How &lt;base&gt; works
          </CardTitle>
          <CardDescription>Every relative URL resolves using the closest base element.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Place the <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">&lt;base href="https://example.com/"&gt;</code> tag inside <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">&lt;head&gt;</code>.
            Subsequent links resolve relative to that URL until another base overrides it.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Code className="w-6 h-6 text-blue-600" />
            Live Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Base element demo"
            description="Relative links resolve against the base tag."
            html={demo.html}
            css={demo.css}
            js={demo.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
