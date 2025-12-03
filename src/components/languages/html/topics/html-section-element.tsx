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
  html: `<section class="chapter">
  <h2>Chapter 1: Getting Started</h2>
  <p>This section groups related content under a common heading.</p>
</section>`,
  css: `.chapter{max-width:600px;margin:2rem auto;padding:1.5rem;background:white;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.1);} .chapter h2{margin-top:0;color:#3b82f6;} @media(prefers-color-scheme:dark){.chapter{background:#1e293b;color:#e2e8f0;} .chapter h2{color:#60a5fa;}}`,
  js: ``,
};

const diagram = {
  html: `<section style='border:2px dashed #3b82f6;padding:1rem;text-align:center;font-family:sans-serif'>Section<br/><article style='margin-top:.5rem;padding:.5rem;background:#e0f2fe'>Article</article></section>`,
  css: ``,
  js: ``,
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
