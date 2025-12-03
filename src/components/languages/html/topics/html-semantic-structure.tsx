'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Layers, Lightbulb, CheckCircle2, Code, BookOpen, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlSemanticStructureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const semanticPageLayoutExample = {
  html: `<h2>Semantic Page Layout</h2>

<header class="page-header">
  <h1>My Website</h1>
  <p>A semantic HTML5 structure example</p>
</header>

<nav class="page-nav">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#blog">Blog</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<main class="page-main">
  <section class="featured">
    <h2>Featured Article</h2>
    <article class="article-card">
      <h3>Understanding Semantic HTML</h3>
      <p>Semantic HTML provides meaning to web content, making it more accessible and SEO-friendly.</p>
      <a href="#">Read more →</a>
    </article>
  </section>

  <aside class="sidebar">
    <h3>Related Posts</h3>
    <ul>
      <li><a href="#">HTML Basics</a></li>
      <li><a href="#">CSS Layout</a></li>
      <li><a href="#">Accessibility</a></li>
    </ul>
  </aside>
</main>

<footer class="page-footer">
  <p>&copy; 2025 My Website. All rights reserved.</p>
  <address>
    Contact: <a href="mailto:info@example.com">info@example.com</a>
  </address>
</footer>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #f1f5f9;
  }
}

h1, h2, h3 {
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  h1, h2, h3 {
    color: #60a5fa;
  }
}

.page-header {
  background: white;
  padding: 2rem;
  border-bottom: 4px solid #3b82f6;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .page-header {
    background: #1e293b;
    border-bottom-color: #60a5fa;
  }
}

.page-nav {
  background: #3b82f6;
  padding: 1rem;
  sticky: top;
}

@media (prefers-color-scheme: dark) {
  .page-nav {
    background: #1e40af;
  }
}

.page-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.page-nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s;
}

.page-nav a:hover {
  opacity: 0.8;
}

.page-main {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.featured {
  flex: 1;
}

.article-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .article-card {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.sidebar {
  width: 250px;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

@media (prefers-color-scheme: dark) {
  .sidebar {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  color: #3b82f6;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  .sidebar a {
    color: #60a5fa;
  }
}

.page-footer {
  background: #1f2937;
  color: #f3f4f6;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}

@media (prefers-color-scheme: dark) {
  .page-footer {
    background: #0f172a;
  }
}

address {
  font-style: normal;
}

a {
  color: #3b82f6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  a {
    color: #60a5fa;
  }
}

@media (max-width: 768px) {
  .page-main {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
  }
  
  .page-nav ul {
    flex-direction: column;
    gap: 0;
  }
}`,
  js: ``,
};

const semanticElementsDetailExample = {
  html: `<h2>Semantic HTML5 Elements</h2>

<!-- Header Section -->
<header class="section-demo">
  <h3>&lt;header&gt; - Page or Section Header</h3>
  <p>Contains intro content, navigation, logo, search bar</p>
  <p class="demo-text">👨‍💻 Tells screen readers: "This is the header of the page"</p>
</header>

<!-- Navigation Section -->
<nav class="section-demo">
  <h3>&lt;nav&gt; - Navigation Links</h3>
  <p>Contains major navigation links</p>
  <p class="demo-text">🗺️ Helps with document structure and accessibility</p>
</nav>

<!-- Main Content Section -->
<main class="section-demo">
  <h3>&lt;main&gt; - Main Content</h3>
  <p>Contains the primary content of the page</p>
  <p class="demo-text">📄 Only one &lt;main&gt; per page, skipped by navigation</p>
</main>

<!-- Article Section -->
<article class="section-demo">
  <h3>&lt;article&gt; - Independent Content</h3>
  <p>Blog post, news article, forum post, comment</p>
  <p class="demo-text">📰 Can be reused/redistributed independently</p>
</article>

<!-- Section -->
<section class="section-demo">
  <h3>&lt;section&gt; - Thematic Content Group</h3>
  <p>Groups related content (chapters, tabbed content, etc.)</p>
  <p class="demo-text">🎯 Usually has a heading</p>
</section>

<!-- Aside -->
<aside class="section-demo">
  <h3>&lt;aside&gt; - Sidebar/Related Content</h3>
  <p>Ads, related links, author info, sidebars</p>
  <p class="demo-text">📌 Tangentially related to main content</p>
</aside>

<!-- Footer -->
<footer class="section-demo">
  <h3>&lt;footer&gt; - Page or Section Footer</h3>
  <p>Copyright, links, contact info, author details</p>
  <p class="demo-text">📍 Often contains address, contact, metadata</p>
</footer>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

h3 {
  color: #3b82f6;
  margin-top: 0;
  font-family: monospace;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.section-demo {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 5px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .section-demo {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

p {
  margin: 0.5rem 0;
  color: #1e293b;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
}

.demo-text {
  background: #eff6ff;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 1rem !important;
  color: #0c4a6e;
}

@media (prefers-color-scheme: dark) {
  .demo-text {
    background: #0f172a;
    color: #93c5fd;
  }
}`,
  js: ``,
};

const articleSectionDifferencesExample = {
  html: `<h2>Article vs Section</h2>

<!-- Article Example -->
<article class="content-example">
  <h3>&lt;article&gt; Example</h3>
  <header>
    <h4>Why Learn Semantic HTML</h4>
    <time datetime="2025-12-03">December 3, 2025</time>
  </header>
  <p>Semantic HTML makes your code more meaningful and accessible...</p>
  <footer>
    <p>By: John Doe | <time datetime="2025-12-03T10:00:00Z">10:00 AM</time></p>
  </footer>
</article>

<!-- Section Example -->
<section class="content-example">
  <h3>&lt;section&gt; Example</h3>
  <h4>Chapter 1: Getting Started</h4>
  <p>In this chapter, we'll learn the fundamentals...</p>
  
  <h4>Chapter 2: Advanced Topics</h4>
  <p>Building on what we learned, we'll explore...</p>
</section>

<!-- Key Differences Table -->
<div class="comparison-table">
  <div class="table-row header">
    <div class="cell">Feature</div>
    <div class="cell">&lt;article&gt;</div>
    <div class="cell">&lt;section&gt;</div>
  </div>
  
  <div class="table-row">
    <div class="cell">Standalone Content</div>
    <div class="cell">✓ Yes</div>
    <div class="cell">✗ No</div>
  </div>
  
  <div class="table-row">
    <div class="cell">Can be Syndicated</div>
    <div class="cell">✓ Yes</div>
    <div class="cell">✗ No</div>
  </div>
  
  <div class="table-row">
    <div class="cell">Requires Heading</div>
    <div class="cell">✓ Usually</div>
    <div class="cell">✓ Usually</div>
  </div>
  
  <div class="table-row">
    <div class="cell">Related Content</div>
    <div class="cell">Independent</div>
    <div class="cell">Grouped</div>
  </div>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

h3, h4 {
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  h3, h4 {
    color: #60a5fa;
  }
}

.content-example {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 5px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .content-example {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

p {
  color: #1e293b;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
}

time {
  color: #6b7280;
  font-style: italic;
}

@media (prefers-color-scheme: dark) {
  time {
    color: #9ca3af;
  }
}

.comparison-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .comparison-table {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
}

@media (prefers-color-scheme: dark) {
  .table-row {
    border-bottom-color: #334155;
  }
}

.table-row.header {
  background: #3b82f6;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .table-row.header {
    background: #1e40af;
  }
}

.table-row.header .cell {
  color: white;
}

.cell {
  padding: 1rem;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .cell {
    color: #f1f5f9;
  }
}`,
  js: ``,
};

export default function HtmlSemanticStructure({ onOpenWebPlayground }: HtmlSemanticStructureProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="HTML · Semantic Structure"
        title="Semantic HTML Elements"
        description="Learn header, footer, nav, main, article, section, aside, and address elements"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Semantic HTML Structure
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Meaningful HTML5 elements for better accessibility and SEO
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Semantic HTML uses elements with meaningful names that describe the content they contain. This improves accessibility,
            SEO, code readability, and helps assistive technologies understand page structure.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Benefits</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Better accessibility</li>
                <li>✓ Improved SEO</li>
                <li>✓ Cleaner HTML</li>
                <li>✓ More maintainable</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Key Elements</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ header, footer, nav</li>
                <li>✓ main, article, section</li>
                <li>✓ aside, address, time</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Always use semantic elements instead of divs when their meaning matches your content. This makes your code more readable and accessible!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Full Page Layout Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <BookOpen className="w-7 h-7" />
            Complete Page Layout
          </CardTitle>
          <CardDescription className="text-base">
            See how semantic elements structure a complete webpage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example shows a realistic page layout using all major semantic elements in their proper places.
          </p>

          <FrontendCodePreview
            title="Semantic Page Layout"
            description="Header, nav, main, article, aside, footer structure"
            html={semanticPageLayoutExample.html}
            css={semanticPageLayoutExample.css}
            js={semanticPageLayoutExample.js}
            colorTheme="blue"
            previewHeight="600px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* All Elements Explained */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            All Semantic Elements Explained
          </CardTitle>
          <CardDescription className="text-base">
            What each element means and when to use it
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Each semantic element has a specific meaning that helps browsers and assistive technologies understand the page structure.
          </p>

          <FrontendCodePreview
            title="Semantic Elements Guide"
            description="Detailed examples of all major semantic elements"
            html={semanticElementsDetailExample.html}
            css={semanticElementsDetailExample.css}
            js={semanticElementsDetailExample.js}
            colorTheme="blue"
            previewHeight="650px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Article vs Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Clock className="w-7 h-7" />
            Article vs Section: Key Differences
          </CardTitle>
          <CardDescription className="text-base">
            Understanding when to use each element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;article&gt;</code> and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;section&gt;</code> are often confused.
            The key difference is that articles are independent and standalone, while sections group related content.
          </p>

          <FrontendCodePreview
            title="Article vs Section"
            description="Clear examples and comparison table"
            html={articleSectionDifferencesExample.html}
            css={articleSectionDifferencesExample.css}
            js={articleSectionDifferencesExample.js}
            colorTheme="blue"
            previewHeight="600px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use semantic elements</li>
                <li>✓ One &lt;header&gt; and &lt;footer&gt; per section</li>
                <li>✓ One &lt;main&gt; per page</li>
                <li>✓ Use &lt;nav&gt; for navigation</li>
                <li>✓ Include &lt;article&gt; for standalone content</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Using div for everything</li>
                <li>✗ Multiple &lt;main&gt; elements</li>
                <li>✗ Nested &lt;nav&gt; elements</li>
                <li>✗ &lt;header&gt;/&lt;footer&gt; outside sections</li>
                <li>✗ Ignoring semantic meaning</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Note</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Screen readers announce semantic landmarks. Using proper elements helps blind and low-vision users navigate your site more easily!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

