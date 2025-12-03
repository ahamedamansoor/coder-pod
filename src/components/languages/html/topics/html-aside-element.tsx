'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sidebar } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlAsideElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const example = {
  html: `<article class="post">
  <p>Main article content...</p>
  <aside class="sidebar">Related links & ads go here</aside>
</article>`,
  css: `.post{display:grid;grid-template-columns:2fr 1fr;gap:1rem;max-width:800px;margin:2rem auto;} .sidebar{background:#fef3c7;padding:1rem;border-radius:8px;} @media(prefers-color-scheme:dark){.sidebar{background:#78350f;color:#fde68a;}} @media(max-width:768px){.post{grid-template-columns:1fr;}}`,
  js: ``,
};

const diagram = {
  html: `<div style='display:grid;grid-template-columns:1fr 250px;gap:.5rem;text-align:center;font-family:sans-serif'><main style='background:#e0f2fe;padding:1rem'>Main</main><aside style='background:#fef3c7;padding:1rem'>Aside</aside></div>`,
  css: ``,
  js: ``,
};

export default function HtmlAsideElement({ onOpenWebPlayground }: HtmlAsideElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Sidebar}
        category="HTML · Semantic Structure"
        title="&lt;aside&gt; Element"
        description="Tangential content like sidebars or ads"
        colorTheme="blue"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Sidebar Example</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="&lt;aside&gt; Sidebar"
            description="Separating additional content from the main flow"
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
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Page Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Main + Aside"
            description="Visual position of aside"
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
