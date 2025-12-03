'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FileText, Box, Code, Lightbulb } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlBaseElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const demo = {
  html: `<header>
  <title>Document Metadata</title>
</header>
<body>
  <p>Use <code>&lt;base&gt;</code> to set the default URL for all relative links.</p>
  <a href="docs.html">Internal docs</a>
</body>`,
  css: `body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
}

code {
  background: #1e293b;
  color: #fff;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}`,
  js: ''
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
            description="Relative links resolve against the &lt;base&gt; tag."
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <base href="https://example.com/docs/" />
</head>
<body>
  <p>Example of base:</p>
  <a href="guide.html">Open default guide</a>
</body>
</html>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 1.5rem;
}

a {
  color: #2563eb;
}`}
            js=""
            previewHeight="420px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
