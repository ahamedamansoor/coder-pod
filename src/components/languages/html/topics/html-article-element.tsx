'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Newspaper, FileText, Lightbulb } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlArticleElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const articleExample = {
  html: `<article class="blog-post">
  <header>
    <h2>Why Learning HTML Matters</h2>
    <p class="meta">by Jane · <time datetime="2025-12-03">Dec 3, 2025</time></p>
  </header>
  <p>HTML forms the backbone of the web. Understanding its semantics...</p>
</article>`,
  css: `.blog-post{max-width:650px;margin:2rem auto;background:white;padding:1.5rem;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.1);} .meta{font-size:.9rem;color:#6b7280;} @media(prefers-color-scheme:dark){.blog-post{background:#1e293b;color:#e2e8f0;} .meta{color:#94a3b8;}}`,
  js: ``,
};

const diagram = {
  html: `<main style='display:grid;gap:.5rem;text-align:center;font-family:sans-serif'><header style='background:#3b82f6;color:#fff;padding:.5rem'>Header</header><article style='background:#0ea5e9;color:#fff;padding:1rem;border-radius:6px'>Article</article><footer style='background:#1f2937;color:#fff;padding:.5rem'>Footer</footer></main>`,
  css: `article{border-radius:6px}`,
  js: ``,
};

export default function HtmlArticleElement({ onOpenWebPlayground }: HtmlArticleElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Newspaper}
        category="HTML · Semantic Structure"
        title="&lt;article&gt; Element"
        description="Encapsulate self-contained content like blog posts or news items"
        colorTheme="blue"
      />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <FileText className="w-7 h-7" />
            Blog Post Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Basic &lt;article&gt;"
            description="Self-contained blog post"
            html={articleExample.html}
            css={articleExample.css}
            js={articleExample.js}
            colorTheme="blue"
            previewHeight="340px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">Articles should be distributable independently, e.g., via RSS.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Layout Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Article in Layout"
            description="Position of article inside main"
            html={diagram.html}
            css={diagram.css}
            js={diagram.js}
            colorTheme="blue"
            previewHeight="220px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
