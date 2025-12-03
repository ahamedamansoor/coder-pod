'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { LayoutGrid, Lightbulb, LayoutPanelLeft } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlMainElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const mainExample = {
  html: `<main class="page-main">
  <h2>Latest Tutorials</h2>
  <article>
    <h3>Semantic HTML Deep Dive</h3>
    <p>Learn why semantics are crucial for accessibility...</p>
  </article>
</main>`,
  css: `.page-main{max-width:700px;margin:2rem auto;padding:0 1rem;}
.page-main h2{color:#3b82f6;text-align:center;margin-bottom:1rem;}
@media(prefers-color-scheme:dark){.page-main h2{color:#60a5fa;}}`,
  js: ``,
};

const layoutDiagram = {
  html: `<div class='diagram'><header>Header</header><main>Main</main><footer>Footer</footer></div>`,
  css: `.diagram{display:grid;grid-template-rows:auto 1fr auto;font-family:sans-serif;text-align:center;gap:.5rem} .diagram header,.diagram main,.diagram footer{padding:1rem;border-radius:6px;color:#fff} .diagram header{background:#3b82f6} .diagram main{background:#0ea5e9} .diagram footer{background:#1f2937} @media(prefers-color-scheme:dark){.diagram main{background:#0369a1}}`,
  js: ``,
};

export default function HtmlMainElement({ onOpenWebPlayground }: HtmlMainElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={LayoutPanelLeft}
        category="HTML · Semantic Structure"
        title="&lt;main&gt; Element"
        description="Represent the primary unique content of a document"
        colorTheme="blue"
      />
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <LayoutGrid className="w-7 h-7" />
            Single &lt;main&gt; Per Page
          </CardTitle>
          <CardDescription>The page’s unique content goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Basic &lt;main&gt;"
            description="Highlight the most important content"
            html={mainExample.html}
            css={mainExample.css}
            js={mainExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Rule</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">Only one &lt;main&gt; per page for proper landmark navigation.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Page Layout Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Header / Main / Footer"
            description="Visualizing the main element in context"
            html={layoutDiagram.html}
            css={layoutDiagram.css}
            js={layoutDiagram.js}
            colorTheme="blue"
            previewHeight="220px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
