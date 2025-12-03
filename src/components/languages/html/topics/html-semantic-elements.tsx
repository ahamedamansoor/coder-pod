'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { BookOpen, Lightbulb, CheckCircle2, Code, MapPin, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlSemanticElementsDetailProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const headerFooterExample = {
  html: `<h2>Header & Footer Elements</h2>

<!-- Page Header -->
<header class="page-header">
  <div class="header-content">
    <h1>Tech Blog</h1>
    <p>Latest articles about web development</p>
  </div>
</header>

<!-- Article with Header and Footer -->
<article class="article">
  <header class="article-header">
    <h2>Getting Started with HTML5</h2>
    <p class="meta">Published on <time datetime="2025-12-03">Dec 3, 2025</time></p>
  </header>
  
  <p>HTML5 introduces semantic elements that make our code more meaningful...</p>
  
  <footer class="article-footer">
    <p>By: Jane Developer | <a href="#">Read comments (5)</a></p>
  </footer>
</article>

<!-- Section with Header -->
<section class="section">
  <header>
    <h2>Recommended Articles</h2>
  </header>
  <ul>
    <li><a href="#">Advanced CSS Tips</a></li>
    <li><a href="#">JavaScript Best Practices</a></li>
  </ul>
</section>

<!-- Page Footer -->
<footer class="page-footer">
  <p>&copy; 2025 Tech Blog. All rights reserved.</p>
  <nav>
    <a href="#">About</a> | 
    <a href="#">Privacy</a> | 
    <a href="#">Contact</a>
  </nav>
</footer>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
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
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .page-header {
    background: #1e293b;
    border-bottom-color: #60a5fa;
    color: #f1f5f9;
  }
}

.article {
  background: white;
  padding: 2rem;
  margin: 1.5rem auto;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .article {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.article-header {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .article-header {
    border-bottom-color: #334155;
  }
}

.meta {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
}

@media (prefers-color-scheme: dark) {
  .meta {
    color: #9ca3af;
  }
}

.article-footer {
  border-top: 2px solid #e2e8f0;
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
}

@media (prefers-color-scheme: dark) {
  .article-footer {
    border-top-color: #334155;
    color: #9ca3af;
  }
}

.section {
  background: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .section {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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

p {
  color: #1e293b;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
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
}`,
  js: ``,
};

const navMainAsideExample = {
  html: `<h2>Nav, Main & Aside</h2>

<!-- Navigation -->
<nav class="top-nav">
  <h3>Site Navigation</h3>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">Features</a></li>
    <li><a href="/">Documentation</a></li>
    <li><a href="/">Community</a></li>
  </ul>
</nav>

<!-- Main Content -->
<main class="main-content">
  <section class="content-section">
    <h2>Welcome to Our Site</h2>
    <p>This is the primary content area. All main content goes here.</p>
  </section>
</main>

<!-- Sidebar -->
<aside class="sidebar">
  <h3>Quick Links</h3>
  <ul>
    <li><a href="#">Getting Started</a></li>
    <li><a href="#">API Reference</a></li>
    <li><a href="#">Examples</a></li>
  </ul>
  
  <h3>Recent Updates</h3>
  <ul>
    <li>Version 2.0 Released</li>
    <li>New Tutorial Added</li>
  </ul>
</aside>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2, h3 {
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  h2, h3 {
    color: #60a5fa;
  }
}

.top-nav {
  background: #3b82f6;
  padding: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .top-nav {
    background: #1e40af;
  }
}

.top-nav h3 {
  color: white;
  margin-top: 0;
}

.top-nav ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: flex;
  gap: 2rem;
}

.top-nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.top-nav a:hover,
.top-nav a.active {
  opacity: 0.8;
  text-decoration: underline;
}

.main-content {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.content-section {
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .content-section {
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
  margin: 1rem 0;
}

.sidebar li {
  padding: 0.5rem 0;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .sidebar li {
    color: #f1f5f9;
  }
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

p {
  color: #1e293b;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #f1f5f9;
  }
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
  }
  
  .top-nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }
}`,
  js: ``,
};

const addressTimeExample = {
  html: `<h2>Address & Time Elements</h2>

<!-- Address Example -->
<section class="example-section">
  <h3>&lt;address&gt; Element</h3>
  <address class="address-block">
    <strong>TechCorp Inc.</strong><br>
    123 Developer Lane<br>
    San Francisco, CA 94105<br>
    <a href="tel:+14155551234">+1 (415) 555-1234</a><br>
    <a href="mailto:info@techcorp.com">info@techcorp.com</a>
  </address>
</section>

<!-- Article with Author Address -->
<article class="example-section">
  <h3>Article with Author Info</h3>
  <header>
    <h4>Understanding Web Standards</h4>
  </header>
  <p>Web standards help create consistent, accessible experiences...</p>
  <footer>
    <h5>About the Author</h5>
    <address>
      <strong>Dr. Sarah Chen</strong><br>
      <a href="https://example.com">example.com</a><br>
      <a href="mailto:sarah@example.com">sarah@example.com</a>
    </address>
  </footer>
</article>

<!-- Time Examples -->
<section class="example-section">
  <h3>&lt;time&gt; Element</h3>
  
  <p>
    Published: <time datetime="2025-12-03">December 3, 2025</time>
  </p>
  
  <p>
    Event time: <time datetime="2025-12-15T14:30:00">3:30 PM on Dec 15</time>
  </p>
  
  <p>
    Duration: <time datetime="PT2H30M">2 hours 30 minutes</time>
  </p>
</section>`,
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

h2, h3, h4, h5 {
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  h2, h3, h4, h5 {
    color: #60a5fa;
  }
}

.example-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 5px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .example-section {
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

.address-block {
  background: #eff6ff;
  padding: 1.5rem;
  border-radius: 8px;
  font-style: normal;
  line-height: 1.8;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  .address-block {
    background: #0f172a;
    color: #f1f5f9;
  }
}

address {
  margin: 1rem 0;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 8px;
  font-style: normal;
}

@media (prefers-color-scheme: dark) {
  address {
    background: #1f2937;
  }
}

time {
  background: #fef3c7;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #92400e;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  time {
    background: #78350f;
    color: #fcd34d;
  }
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
}`,
  js: ``,
};

export default function HtmlSemanticElementsDetail({ onOpenWebPlayground }: HtmlSemanticElementsDetailProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={BookOpen}
        category="HTML · Semantic Elements"
        title="Detailed Semantic Elements"
        description="Header, Footer, Nav, Main, Article, Section, Aside, Address, Time"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                All Semantic HTML Elements
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Detailed guide to each semantic element with examples
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Each semantic element serves a specific purpose and tells browsers and assistive technologies what the content means.
            This guide covers all major semantic elements with practical examples.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { tag: 'header', use: 'Intro, logo, nav' },
              { tag: 'footer', use: 'Copyright, links' },
              { tag: 'nav', use: 'Navigation links' },
              { tag: 'main', use: 'Main content' },
              { tag: 'article', use: 'Independent content' },
              { tag: 'section', use: 'Thematic group' },
              { tag: 'aside', use: 'Sidebar content' },
              { tag: 'address', use: 'Contact info' },
              { tag: 'time', use: 'Date/time' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">&lt;{item.tag}&gt;</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.use}</p>
              </div>
            ))}
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Remember</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Semantic elements improve accessibility for screen readers, SEO for search engines, and readability for developers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Header & Footer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Header & Footer Elements
          </CardTitle>
          <CardDescription className="text-base">
            Introduction and conclusion sections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p>
              <strong>&lt;header&gt;:</strong> Contains introductory content for a page or section. Usually includes logo, title, navigation.
              Can appear in page, article, and section elements.
            </p>
            <p>
              <strong>&lt;footer&gt;:</strong> Contains concluding content. Usually has copyright, links, contact info. Can appear at page or section level.
            </p>
          </div>

          <FrontendCodePreview
            title="Header & Footer Examples"
            description="Page-level and article-level headers and footers"
            html={headerFooterExample.html}
            css={headerFooterExample.css}
            js={headerFooterExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Nav, Main, Aside */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <MapPin className="w-7 h-7" />
            Navigation, Main & Aside
          </CardTitle>
          <CardDescription className="text-base">
            Page structure and layout elements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p>
              <strong>&lt;nav&gt;:</strong> Contains major navigation links. Only use for primary navigation, not all links.
            </p>
            <p>
              <strong>&lt;main&gt;:</strong> The unique, primary content of the page. Only one per page! Helps skip repetitive content.
            </p>
            <p>
              <strong>&lt;aside&gt;:</strong> Sidebar or related content. Typically ads, related links, author info, or sidebars.
            </p>
          </div>

          <FrontendCodePreview
            title="Nav, Main & Aside Layout"
            description="Typical page layout with navigation, main content, and sidebar"
            html={navMainAsideExample.html}
            css={navMainAsideExample.css}
            js={navMainAsideExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Address & Time */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Clock className="w-7 h-7" />
            Address & Time Elements
          </CardTitle>
          <CardDescription className="text-base">
            Contact information and temporal data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-slate-700 dark:text-slate-300">
            <p>
              <strong>&lt;address&gt;:</strong> Contact information (email, phone, physical address). Not for postal addresses of content, only contact info.
            </p>
            <p>
              <strong>&lt;time&gt;:</strong> Dates, times, or durations. The datetime attribute provides machine-readable format.
            </p>
          </div>

          <FrontendCodePreview
            title="Address & Time Examples"
            description="Contact information and temporal content"
            html={addressTimeExample.html}
            css={addressTimeExample.css}
            js={addressTimeExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { element: '&lt;address&gt;', use: 'Only for contact info, not postal addresses', datetime: 'N/A' },
              { element: '&lt;time&gt;', use: 'Dates, times, durations', datetime: 'datetime attribute' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 className="font-mono font-semibold text-orange-600 dark:text-orange-400 mb-1">{item.element}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Use:</strong> {item.use}<br/>
                  <strong>Machine-readable:</strong> {item.datetime}
                </p>
              </div>
            ))}
          </div>
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
                <li>✓ Use semantic elements appropriately</li>
                <li>✓ One &lt;main&gt; per page</li>
                <li>✓ Use &lt;nav&gt; for major navigation</li>
                <li>✓ Include &lt;address&gt; for contact</li>
                <li>✓ Use &lt;time datetime&gt; for dates</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Multiple &lt;main&gt; elements</li>
                <li>✗ &lt;nav&gt; for non-navigation</li>
                <li>✗ Omitting &lt;datetime&gt; attribute</li>
                <li>✗ &lt;address&gt; for postal addresses</li>
                <li>✗ Overusing &lt;header&gt;/&lt;footer&gt;</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Impact</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              These elements create landmarks that screen reader users can navigate to directly. Always use them semantically!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

