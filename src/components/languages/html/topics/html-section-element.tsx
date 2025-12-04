'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Layout } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlSectionElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const example = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section Element</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .chapter { max-width: 600px; margin: 0 auto; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); border-left: 4px solid #3b82f6; }
    @media (prefers-color-scheme: dark) { .chapter { background: #1e293b; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); border-left-color: #60a5fa; } }
    .chapter h2 { margin-top: 0; color: #3b82f6; }
    @media (prefers-color-scheme: dark) { .chapter h2 { color: #60a5fa; } }
    .chapter p { color: #1e293b; line-height: 1.6; }
    @media (prefers-color-scheme: dark) { .chapter p { color: #f1f5f9; } }
  </style>
</head>
<body>
  <section class="chapter">
    <h2>Chapter 1: Getting Started</h2>
    <p>This section groups related content under a common heading. The &lt;section&gt; element is used for thematic grouping of content, typically with a heading.</p>
    <p>Use &lt;section&gt; to organize content into chapters, sections, or logical parts of your document.</p>
  </section>
</body>
</html>`,
  css: ``,
  js: ``
};

const diagram = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Section Diagram</title>
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .section { border: 2px dashed #3b82f6; padding: 1.5rem; text-align: center; font-family: sans-serif; max-width: 400px; margin: 0 auto; border-radius: 8px; background: white; }
    @media (prefers-color-scheme: dark) { .section { background: #1e293b; border-color: #60a5fa; } }
    .section { color: #3b82f6; font-weight: bold; }
    @media (prefers-color-scheme: dark) { .section { color: #60a5fa; } }
    .article { margin-top: 1rem; padding: 1rem; background: #e0f2fe; border-radius: 6px; color: #0c4a6e; font-weight: bold; }
    @media (prefers-color-scheme: dark) { .article { background: #082f49; border: 1px solid #0ea5e9; color: #cffafe; } }
  </style>
</head>
<body>
  <div class="section">
    Section
    <div class="article">Article</div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
};

export default function HtmlSectionElement({ onOpenWebPlayground }: HtmlSectionElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Layout}
        category="HTML · Semantic Structure"
        title="&lt;section&gt; Element"
        description="Thematic grouping of related content with a heading"
        colorTheme="blue"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Basic Example</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="&lt;section&gt; with Heading"
            description="Organize content into logical chapters or parts"
            html={example.html}
            css={example.css}
            js={example.js}
            colorTheme="blue"
            previewHeight="300px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Section Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Section outlining"
            description="Section grouping articles"
            html={diagram.html}
            css={diagram.css}
            js={diagram.js}
            colorTheme="blue"
            previewHeight="200px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
