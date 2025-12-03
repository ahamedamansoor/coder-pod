'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Layout, SunMedium, Lightbulb } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlHeaderElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicHeaderExample = {
  html: `<header class="site-header">
  <h1>CoderPod</h1>
  <p>Your daily dose of coding tips</p>
</header>`,
  css: `.site-header {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  border-bottom: 4px solid #1e40af;
}
@media (prefers-color-scheme: dark) {
  .site-header { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);} }
  h1 { margin: 0 0 0.3rem 0; }
  p { margin: 0; font-size: 1rem; opacity: 0.9; }`,
  js: ``,
};

const nestedHeaderExample = {
  html: `<article class="post">
  <header class="post-header">
    <h2>Understanding &lt;header&gt; Element</h2>
    <p class="tagline">Published by Jane · <time datetime="2025-12-03">Dec 3, 2025</time></p>
  </header>
  <p>The &lt;header&gt; element acts as the introductory section for its nearest ancestor.</p>
</article>`,
  css: `.post {
  max-width: 600px; margin: 2rem auto; padding: 1.5rem; background: white; border-radius: 12px;
}
.post-header { border-bottom: 2px solid #e2e8f0; margin-bottom:1rem; }
.tagline { font-size: .9rem; color: #6b7280; }
@media (prefers-color-scheme: dark){
  .post{background:#1e293b;color:#e2e8f0;}
  .post-header{border-color:#334155;}
  .tagline{color:#94a3b8;}}
`,
  js: ``,
};

const layoutDiagram = {
  html: `<div class="layout">
  <header>Header</header>
  <main>Main</main>
  <footer>Footer</footer>
</div>`,
  css: `.layout{font-family:sans-serif;text-align:center;}
.layout header{background:#3b82f6;color:white;padding:1rem;}
.layout main{background:#e0f2fe;padding:2rem;}
.layout footer{background:#1f2937;color:white;padding:1rem;}@media(prefers-color-scheme:dark){.layout main{background:#082f49;color:#e2e8f0;}}`,
  js: ``,
};

export default function HtmlHeaderElement({ onOpenWebPlayground }: HtmlHeaderElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Layout}
        category="HTML · Semantic Structure"
        title="&lt;header&gt; Element"
        description="Introduce pages or sections with the semantic header element"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Layout className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;header&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Defines introductory content like logos, titles, or nav</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Use <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;header&gt;</code> for any
            introductory group of content for a page or a section. A page can have multiple headers (e.g., site header & section headers).
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Common Contents</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Logos, titles, taglines, search forms, and primary navigation are perfect residents of &lt;header&gt;
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic site header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <SunMedium className="w-7 h-7" />
            Simple Site Header
          </CardTitle>
          <CardDescription>Minimal but semantic site banner</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Basic &lt;header&gt;"
            description="A clean site header with title and tagline"
            html={basicHeaderExample.html}
            css={basicHeaderExample.css}
            js={basicHeaderExample.js}
            colorTheme="blue"
            previewHeight="320px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Nested header example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Layout className="w-7 h-7" />
            Header in an Article
          </CardTitle>
          <CardDescription>Headers can belong to any sectioning content</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Article Header"
            description="Using &lt;header&gt; inside &lt;article&gt;"
            html={nestedHeaderExample.html}
            css={nestedHeaderExample.css}
            js={nestedHeaderExample.js}
            colorTheme="blue"
            previewHeight="380px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Where &lt;header&gt; Fits</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Page Layout Diagram"
            description="Visualizing header in a simple page"
            html={layoutDiagram.html}
            css={layoutDiagram.css}
            js={layoutDiagram.js}
            colorTheme="blue"
            previewHeight="260px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
