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
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aside Element</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .post { display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; max-width: 800px; margin: 0 auto; }
    .post-content { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
    @media (prefers-color-scheme: dark) { .post-content { background: #1e293b; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); } }
    .post-content h2 { color: #3b82f6; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .post-content h2 { color: #60a5fa; } }
    .post-content p { color: #1e293b; line-height: 1.6; }
    @media (prefers-color-scheme: dark) { .post-content p { color: #f1f5f9; } }
    .sidebar { background: #fef3c7; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #f59e0b; }
    @media (prefers-color-scheme: dark) { .sidebar { background: #78350f; border-left-color: #f59e0b; } }
    .sidebar h3 { color: #92400e; margin-top: 0; }
    @media (prefers-color-scheme: dark) { .sidebar h3 { color: #fcd34d; } }
    .sidebar p { color: #92400e; font-size: 0.9rem; }
    @media (prefers-color-scheme: dark) { .sidebar p { color: #fde68a; } }
    .sidebar ul { list-style: none; padding: 0; margin: 0; }
    .sidebar li { margin: 0.5rem 0; }
    .sidebar a { color: #f59e0b; text-decoration: none; font-weight: 500; }
    @media (prefers-color-scheme: dark) { .sidebar a { color: #fcd34d; } }
    .sidebar a:hover { text-decoration: underline; }
    @media (max-width: 768px) { .post { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <article class="post">
    <div class="post-content">
      <h2>Understanding Semantic HTML</h2>
      <p>Semantic HTML elements are tags that clearly describe their meaning to both browsers and developers. They improve accessibility, SEO, and code readability.</p>
      <p>The &lt;aside&gt; element is used for content that is tangentially related to the main content, such as sidebars, related links, or advertisements.</p>
    </div>
    <aside class="sidebar">
      <h3>Related Content</h3>
      <p>Check out these resources:</p>
      <ul>
        <li><a href="#html">HTML Basics</a></li>
        <li><a href="#css">CSS Styling</a></li>
        <li><a href="#js">JavaScript</a></li>
      </ul>
    </aside>
  </footer>
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
  <title>Aside Diagram</title>
  <style>
    body { margin: 0; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
    @media (prefers-color-scheme: dark) { body { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); } }
    .container { display: grid; grid-template-columns: 1fr 250px; gap: 0.5rem; text-align: center; font-family: sans-serif; max-width: 600px; margin: 0 auto; }
    .main { background: #e0f2fe; border: 2px solid #0284c7; padding: 2rem; border-radius: 8px; font-weight: bold; color: #0c4a6e; }
    @media (prefers-color-scheme: dark) { .main { background: #082f49; border-color: #0ea5e9; color: #cffafe; } }
    .aside { background: #fef3c7; border: 2px solid #f59e0b; padding: 2rem; border-radius: 8px; font-weight: bold; color: #92400e; }
    @media (prefers-color-scheme: dark) { .aside { background: #78350f; border-color: #f59e0b; color: #fde68a; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="main">Main Content</div>
    <div class="aside">Aside</div>
  </div>
</body>
</html>`,
  css: ``,
  js: ``
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
