'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Compass, Menu, Lightbulb } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlNavElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const navExample = {
  html: `<nav class="main-nav">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#tutorials">Tutorials</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>`,
  css: `.main-nav ul{list-style:none;display:flex;gap:1.2rem;justify-content:center;padding:0;margin:0;}
.main-nav a{color:white;text-decoration:none;font-weight:600;}
.main-nav{background:#0ea5e9;padding:1rem;}
.main-nav a:hover{text-decoration:underline;}
@media(prefers-color-scheme:dark){.main-nav{background:#0369a1;}}`,
  js: ``,
};

// Diagram example
const diagramExample = {
  html: `<div class="diagram"><nav>Nav</nav><main>Main</main></div>`,
  css: `.diagram{display:grid;grid-template-columns:200px 1fr;gap:1rem;font-family:sans-serif;text-align:center} .diagram nav{background:#0ea5e9;color:#fff;padding:1rem;border-radius:8px} .diagram main{background:#e0f2fe;padding:1rem;border-radius:8px}@media(prefers-color-scheme:dark){.diagram main{background:#082f49;color:#e2e8f0;}}`,
  js: ``,
};

export default function HtmlNavElement({ onOpenWebPlayground }: HtmlNavElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Compass}
        category="HTML · Semantic Structure"
        title="&lt;nav&gt; Element"
        description="Provide major navigation landmarks on your page"
        colorTheme="blue"
      />

      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Compass className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;nav&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Contains primary navigation links</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-sm">&lt;nav&gt;</code> element groups
            major navigational links. Use one for the main menu and optionally additional ones for secondary navigation (breadcrumbs, footers).
          </p>
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Screen-Reader Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Users can jump directly to landmarks like &lt;nav&gt; via keyboard shortcuts (e.g., NVDA: <kbd>n</kbd>)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Menu className="w-7 h-7" />
            Simple Navigation Bar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Basic &lt;nav&gt;"
            description="Horizontal menu inside a nav landmark"
            html={navExample.html}
            css={navExample.css}
            js={navExample.js}
            colorTheme="blue"
            previewHeight="260px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Layout Diagram</CardTitle>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Nav + Main Layout"
            description="Visual placement of navigation beside main content"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="220px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>
    </div>
  );
}
