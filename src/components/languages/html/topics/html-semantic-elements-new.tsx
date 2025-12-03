'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { BookOpen, Lightbulb, CheckCircle2, Accessibility, Zap, Globe } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlSemanticElementsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

// Example 1: Full semantic page structure
const semanticPageExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Blog</title>
</head>
<body>
  <header class="page-header">
    <h1>My Learning Blog</h1>
    <p>Exploring web development concepts</p>
  </header>

  <nav class="page-nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/articles">Articles</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>

  <main class="page-main">
    <article class="blog-post">
      <h2>Understanding HTML Semantics</h2>
      <time datetime="2025-12-03">Published on Dec 3, 2025</time>
      <p>Semantic HTML is crucial for building accessible websites...</p>
    </article>
  </main>

  <footer class="page-footer">
    <p>&copy; 2025 My Blog. All rights reserved.</p>
  </footer>
</body>
</html>`,
  css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

.page-header {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  border-bottom: 4px solid #1e40af;
}

@media (prefers-color-scheme: dark) {
  .page-header {
    background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  }
}

.page-header h1 {
  margin-bottom: 0.5rem;
}

.page-nav {
  background: #1e40af;
  padding: 1rem;
  sticky: top;
}

@media (prefers-color-scheme: dark) {
  .page-nav {
    background: #0f172a;
  }
}

.page-nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.page-nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.page-nav a:hover {
  text-decoration: underline;
}

.page-main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.blog-post {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .blog-post {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.blog-post h2 {
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .blog-post h2 {
    color: #60a5fa;
  }
}

.blog-post time {
  display: block;
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  .blog-post time {
    color: #9ca3af;
  }
}

.blog-post p {
  color: #1e293b;
  line-height: 1.7;
}

@media (prefers-color-scheme: dark) {
  .blog-post p {
    color: #f1f5f9;
  }
}

.page-footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}

@media (prefers-color-scheme: dark) {
  .page-footer {
    background: #0f172a;
  }
}`,
  js: ``,
};

// Example 2: Individual semantic elements
const semanticElementsDemo = {
  html: `<h2>HTML5 Semantic Elements</h2>

<div class="demo-container">
  <div class="element-card">
    <h3>&lt;header&gt;</h3>
    <p>Contains intro content, titles, logos, or navigation for a page or section</p>
    <div class="example">Header with page title and tagline</div>
  </div>

  <div class="element-card">
    <h3>&lt;nav&gt;</h3>
    <p>Contains major navigation links for the page or site</p>
    <div class="example">Home | About | Services | Contact</div>
  </div>

  <div class="element-card">
    <h3>&lt;main&gt;</h3>
    <p>Contains the unique primary content of the page (one per page only)</p>
    <div class="example">Main article, product details, unique content</div>
  </div>

  <div class="element-card">
    <h3>&lt;article&gt;</h3>
    <p>Independent, self-contained content that could be distributed alone</p>
    <div class="example">Blog post, news article, forum post, comment</div>
  </div>

  <div class="element-card">
    <h3>&lt;section&gt;</h3>
    <p>Thematic grouping of content, usually with a heading</p>
    <div class="example">Chapter, introduction, news section, reviews</div>
  </div>

  <div class="element-card">
    <h3>&lt;aside&gt;</h3>
    <p>Tangentially related content like sidebars, ads, or related links</p>
    <div class="example">Sidebar, related articles, ad block, author info</div>
  </div>

  <div class="element-card">
    <h3>&lt;footer&gt;</h3>
    <p>Contains footer info: copyright, links, contact, author details</p>
    <div class="example">© 2025 | Privacy | Contact | Social Media</div>
  </div>

  <div class="element-card">
    <h3>&lt;address&gt;</h3>
    <p>Contact information for the nearest article or body ancestor</p>
    <div class="example">Email: info@example.com | Phone: (555) 123-4567</div>
  </div>

  <div class="element-card">
    <h3>&lt;time&gt;</h3>
    <p>Represents a specific time or date</p>
    <div class="example">Published: <time datetime="2025-12-03">December 3, 2025</time></div>
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
  color: #3b82f6;
  text-align: center;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #60a5fa;
  }
}

.demo-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.element-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 5px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .element-card {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border-left-color: #60a5fa;
  }
}

.element-card h3 {
  color: #3b82f6;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: monospace;
}

@media (prefers-color-scheme: dark) {
  .element-card h3 {
    color: #60a5fa;
  }
}

.element-card p {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (prefers-color-scheme: dark) {
  .element-card p {
    color: #f1f5f9;
  }
}

.example {
  background: linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%);
  border-left: 3px solid #0284c7;
  padding: 1rem;
  border-radius: 6px;
  color: #0c4a6e;
  font-style: italic;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .example {
    background: linear-gradient(135deg, #082f49 0%, #0c4a6e 100%);
    border-left-color: #0ea5e9;
    color: #cffafe;
  }
}`,
  js: ``,
};

// Example 3: Accessibility benefits
const accessibilityExample = {
  html: `<h2>Why Semantic HTML Matters</h2>

<div class="container">
  <section class="benefit-section">
    <h3>Accessibility Benefits</h3>
    <div class="benefit-list">
      <div class="benefit-item">
        <span class="icon">♿</span>
        <h4>Screen Readers</h4>
        <p>Semantic elements help screen readers understand page structure and navigate better</p>
      </div>
      <div class="benefit-item">
        <span class="icon">🎯</span>
        <h4>Landmarks</h4>
        <p>Users can jump to main, nav, or footer areas directly</p>
      </div>
      <div class="benefit-item">
        <span class="icon">⌨️</span>
        <h4>Keyboard Navigation</h4>
        <p>Better structure helps with keyboard-only navigation</p>
      </div>
    </div>
  </section>

  <section class="benefit-section">
    <h3>SEO Benefits</h3>
    <div class="benefit-list">
      <div class="benefit-item">
        <span class="icon">🔍</span>
        <h4>Search Engines</h4>
        <p>Semantic HTML helps search engines understand your content better</p>
      </div>
      <div class="benefit-item">
        <span class="icon">📊</span>
        <h4>Better Indexing</h4>
        <p>Clear structure improves how your pages are indexed</p>
      </div>
      <div class="benefit-item">
        <span class="icon">🏆</span>
        <h4>Rankings</h4>
        <p>Well-structured HTML can improve search engine rankings</p>
      </div>
    </div>
  </section>

  <section class="benefit-section">
    <h3>Developer Benefits</h3>
    <div class="benefit-list">
      <div class="benefit-item">
        <span class="icon">📖</span>
        <h4>Readable Code</h4>
        <p>Semantic elements make code easier to understand and maintain</p>
      </div>
      <div class="benefit-item">
        <span class="icon">🧩</span>
        <h4>Structure</h4>
        <p>Clear HTML structure makes debugging easier</p>
      </div>
      <div class="benefit-item">
        <span class="icon">🎨</span>
        <h4>Styling</h4>
        <p>Semantic HTML requires less CSS and JavaScript hacks</p>
      </div>
    </div>
  </section>
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
  color: #3b82f6;
  text-align: center;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #60a5fa;
  }
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.benefit-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .benefit-section {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.benefit-section h3 {
  color: #3b82f6;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .benefit-section h3 {
    color: #60a5fa;
  }
}

.benefit-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.benefit-item {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0284c7;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .benefit-item {
    background: linear-gradient(135deg, #082f49 0%, #0c4a6e 100%);
    border-left-color: #0ea5e9;
  }
}

.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.benefit-item h4 {
  color: #3b82f6;
  margin: 0.5rem 0;
}

@media (prefers-color-scheme: dark) {
  .benefit-item h4 {
    color: #60a5fa;
  }
}

.benefit-item p {
  color: #1e293b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  .benefit-item p {
    color: #f1f5f9;
  }
}`,
  js: ``,
};

export default function HtmlSemanticElements({ onOpenWebPlayground }: HtmlSemanticElementsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Globe}
        category="HTML · Semantic Structure"
        title="Semantic HTML Elements"
        description="Master the meaningful elements that structure modern websites"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Globe className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Semantic HTML Elements
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Building meaningful, accessible web structures
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            <strong>Semantic HTML elements</strong> are tags that clearly describe their meaning to both browsers and developers.
            Instead of using generic <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;div&gt;</code> elements for everything,
            semantic elements like <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;header&gt;</code>,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;article&gt;</code>, and
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;footer&gt;</code> provide meaning.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">What Makes HTML Semantic?</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Semantic HTML uses element names that <strong>describe what the content is</strong>,
              not just how it looks. &lt;article&gt; means "this is an article," not "this is styled like an article."
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-3">✅ Semantic</h4>
              <code className="block bg-white dark:bg-slate-900 p-3 rounded text-sm mb-2 text-slate-700 dark:text-slate-300">
                &lt;header&gt;...&lt;/header&gt;
              </code>
              <p className="text-sm text-slate-700 dark:text-slate-300">Clear meaning: this is a header</p>
            </div>

            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-lg border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-3">❌ Not Semantic</h4>
              <code className="block bg-white dark:bg-slate-900 p-3 rounded text-sm mb-2 text-slate-700 dark:text-slate-300">
                &lt;div class="header"&gt;...&lt;/div&gt;
              </code>
              <p className="text-sm text-slate-700 dark:text-slate-300">No clear meaning without CSS class</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full Page Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <BookOpen className="w-7 h-7" />
            Complete Semantic Page Structure
          </CardTitle>
          <CardDescription className="text-base">
            See all semantic elements working together
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example shows how semantic elements create a complete, meaningful page structure:
          </p>

          <FrontendCodePreview
            title="Full Semantic HTML Page"
            description="Header, nav, main, article, and footer working together"
            html={semanticPageExample.html}
            css={semanticPageExample.css}
            js={semanticPageExample.js}
            colorTheme="blue"
            previewHeight="600px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* All Semantic Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <span className="text-2xl">🏗️</span> All Semantic Elements Explained
          </CardTitle>
          <CardDescription className="text-base">
            Learn what each semantic element does
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Here are the main HTML5 semantic elements with practical examples:
          </p>

          <FrontendCodePreview
            title="Semantic Elements Reference"
            description="All major semantic elements with descriptions"
            html={semanticElementsDemo.html}
            css={semanticElementsDemo.css}
            js={semanticElementsDemo.js}
            colorTheme="blue"
            previewHeight="700px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Why Use Semantic HTML?
          </CardTitle>
          <CardDescription className="text-base">
            The benefits for accessibility, SEO, and developers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Benefits of Semantic HTML"
            description="Accessibility, SEO, and developer advantages"
            html={accessibilityExample.html}
            css={accessibilityExample.css}
            js={accessibilityExample.js}
            colorTheme="blue"
            previewHeight="600px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Element Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Accessibility className="w-7 h-7" />
            Quick Element Guide
          </CardTitle>
          <CardDescription className="text-base">
            When and where to use each element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {[
              {
                element: '&lt;header&gt;',
                use: 'Page or section header with title, logo, tagline',
                example: 'Page title, site header, article header',
              },
              {
                element: '&lt;nav&gt;',
                use: 'Major navigation links for the site',
                example: 'Main menu, breadcrumbs, footer links section',
              },
              {
                element: '&lt;main&gt;',
                use: 'Primary, unique content (ONE per page)',
                example: 'Blog article, product page, main content',
              },
              {
                element: '&lt;article&gt;',
                use: 'Independent, self-contained content',
                example: 'Blog post, news article, forum post, comment',
              },
              {
                element: '&lt;section&gt;',
                use: 'Thematic grouping with a heading',
                example: 'Chapter, introduction, review section',
              },
              {
                element: '&lt;aside&gt;',
                use: 'Tangentially related, supplementary content',
                example: 'Sidebar, related links, advertisements',
              },
              {
                element: '&lt;footer&gt;',
                use: 'Footer info: copyright, links, contact',
                example: 'Page footer, article footer, site footer',
              },
              {
                element: '&lt;address&gt;',
                use: 'Contact information for article/page',
                example: 'Email, phone, physical address',
              },
              {
                element: '&lt;time&gt;',
                use: 'Machine-readable date or time',
                example: 'Publication date, event time, duration',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-mono font-semibold text-purple-600 dark:text-purple-400 mb-2">{item.element}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-1"><strong>Use:</strong> {item.use}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Example:</strong> {item.example}</p>
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
            Best Practices for Semantic HTML
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Best Practices</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use semantic elements first</li>
                <li>✓ One &lt;main&gt; per page</li>
                <li>✓ One &lt;header&gt; & &lt;footer&gt; per page</li>
                <li>✓ &lt;nav&gt; for major navigation</li>
                <li>✓ &lt;article&gt; for syndicated content</li>
                <li>✓ &lt;section&gt; with headings</li>
                <li>✓ Use &lt;time&gt; for dates</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Common Mistakes</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Multiple &lt;main&gt; elements</li>
                <li>✗ &lt;nav&gt; for non-navigation</li>
                <li>✗ Nested &lt;nav&gt; elements</li>
                <li>✗ Using &lt;div&gt; instead of semantic</li>
                <li>✗ &lt;section&gt; without heading</li>
                <li>✗ Forgetting &lt;time datetime&gt;</li>
                <li>✗ Not testing with screen readers</li>
              </ul>
            </div>
          </div>

          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 mt-4">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              Test your HTML with screen readers and DevTools accessibility inspector. This is the best way to ensure your semantic HTML is effective!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

