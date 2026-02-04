'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Info, Zap, Check, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlLinksInternalProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlLinksInternal({ onOpenWebPlayground }: HtmlLinksInternalProps) {
  const openPlayground = (html: string, css: string, js: string) => {
    onOpenWebPlayground?.(html, css, js);
  };

  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Layers}
        category="HTML · Links"
        title="Internal Links"
        description="Link to different pages and sections within your website"
        colorTheme="blue"
      />

      {/* Section 1: Understanding Internal Links */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Info className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are Internal Links?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Links that navigate within your own website
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/70 dark:bg-slate-900/50 p-5 rounded-lg border border-blue-100 dark:border-blue-900">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Internal links connect pages within your own website.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Instead of using full URLs like <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-orange-600 dark:text-orange-400 font-mono">https://example.com/about</code>, you use relative paths like <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-emerald-600 dark:text-emerald-400 font-mono">/about</code> or <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-emerald-600 dark:text-emerald-400 font-mono">about.html</code>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">📂 Relative Paths</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Link to pages relative to current location
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">🔗 SEO Benefits</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Helps search engines crawl your site
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">⚡ Fast</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Shorter links load faster
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Types of Internal Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Types of Internal Links
          </CardTitle>
          <CardDescription className="text-base">
            Different ways to reference pages within your site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Root relative */}
          <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
            <p className="font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">Root-Relative Path (Recommended)</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Starts with / and refers to the root of your domain
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-blue-200 dark:border-blue-800">
              &lt;a href="/about"&gt;About Us&lt;/a&gt;<br/>
              &lt;a href="/blog/article"&gt;Article&lt;/a&gt;<br/>
              &lt;a href="/contact"&gt;Contact&lt;/a&gt;
            </code>
          </div>

          {/* Document relative */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-l-4 border-emerald-500">
            <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2">Document-Relative Path</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Relative to the current page location
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-emerald-200 dark:border-emerald-800">
              &lt;a href="about.html"&gt;About&lt;/a&gt;<br/>
              &lt;a href="../index.html"&gt;Home&lt;/a&gt;<br/>
              &lt;a href="./other.html"&gt;Other Page&lt;/a&gt;
            </code>
          </div>

          {/* Absolute URL */}
          <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
            <p className="font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">Absolute Internal URL</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Full URL to your own domain (less common for internal links)
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-purple-200 dark:border-purple-800">
              &lt;a href="https://example.com/about"&gt;About Us&lt;/a&gt;
            </code>
          </div>

          {/* Fragment identifier */}
          <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
            <p className="font-mono font-bold text-orange-600 dark:text-orange-400 mb-2">Jump Links (Fragment Identifiers)</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Link to a specific section on a page using #
            </p>
            <code className="text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded block font-mono border border-orange-200 dark:border-orange-800">
              &lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;<br/>
              &lt;a href="/about#team"&gt;See Our Team&lt;/a&gt;
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Practical Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            See It in Action
          </CardTitle>
          <CardDescription className="text-base">
            Real examples of internal links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Simple Navigation */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              1️⃣ Site Navigation Menu
            </h4>
            <FrontendCodePreview
              title="Main Navigation Links"
              description="Internal links for navigating between main pages"
              html={`<nav class="navbar">
  <a href="/" class="logo">MyWebsite</a>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
  </div>
</nav>`}
              css={`body {
  font-family: system-ui;
  margin: 0;
}

.navbar {
  background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Dark mode */
html.dark body {
  background: #0f172a;
}

html.dark .navbar {
  background: linear-gradient(90deg, #1e293b 0%, #1e40af 100%);
}

.logo {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover {
  border-bottom-color: #fbbf24;
  padding-bottom: 0.25rem;
}`}
              colorTheme="blue"
              previewHeight="420px"
              onOpenPlayground={() => openPlayground(
                `<nav class="navbar"><a href="/" class="logo">MyWebsite</a><div class="nav-links"><a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a></div></nav>`,
                `.navbar { background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; } .nav-links { display: flex; gap: 2rem; } .nav-links a { color: white; text-decoration: none; font-weight: 500; transition: all 0.3s; } /* Dark mode */ html.dark body { background: #0f172a; } html.dark .navbar { background: linear-gradient(90deg, #1e293b 0%, #1e40af 100%); }`,
                ``
              )}
            />
          </div>

          {/* Example 2: Breadcrumb Navigation */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              2️⃣ Breadcrumb Trail
            </h4>
            <FrontendCodePreview
              title="Breadcrumb Navigation"
              description="Shows the current page location and navigation path"
              html={`<nav class="breadcrumb">
  <a href="/">Home</a>
  <span class="separator">/</span>
  <a href="/blog">Blog</a>
  <span class="separator">/</span>
  <a href="/blog/category/web-design">Web Design</a>
  <span class="separator">/</span>
  <span class="current">CSS Tips</span>
</nav>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
  background: #f9fafb;
}

html.dark body {
  background: #0f172a;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

html.dark .breadcrumb {
  background: #1e293b;
}

.breadcrumb a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.breadcrumb a:hover {
  color: #2563eb;
  text-decoration: underline;
}

html.dark .breadcrumb a {
  color: #60a5fa;
}

html.dark .breadcrumb a:hover {
  color: #93c5fd;
}`}
              colorTheme="blue"
              previewHeight="400px"
              onOpenPlayground={() => openPlayground(
                `<nav class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span class="current">CSS Tips</span></nav>`,
                `.breadcrumb { display: flex; align-items: center; gap: 0.5rem; padding: 1rem; background: white; border-radius: 8px; border-left: 4px solid #3b82f6; } .breadcrumb a { color: #3b82f6; text-decoration: none; font-weight: 500; } .breadcrumb a:hover { text-decoration: underline; } /* Dark mode */ html.dark body { background: #0f172a; } html.dark .breadcrumb { background: #1e293b; } html.dark .breadcrumb a { color: #60a5fa; } html.dark .breadcrumb a:hover { color: #93c5fd; }`,
                ``
              )}
            />
          </div>

          {/* Example 3: Jump Links */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              3️⃣ Jump to Sections (Same Page)
            </h4>
            <FrontendCodePreview
              title="Table of Contents with Jump Links"
              description="Links that jump to different sections of the same page"
              html={`<div class="page">
  <aside class="toc">
    <h3>Table of Contents</h3>
    <a href="#introduction">Introduction</a>
    <a href="#benefits">Benefits</a>
    <a href="#how-to">How to Use</a>
    <a href="#conclusion">Conclusion</a>
  </aside>
  
  <main class="content">
    <h2 id="introduction">Introduction</h2>
    <p>Lorem ipsum dolor sit amet...</p>
    
    <h2 id="benefits">Benefits</h2>
    <p>Here are the main benefits...</p>
    
    <h2 id="how-to">How to Use</h2>
    <p>Follow these steps...</p>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>In conclusion...</p>
  </main>
</div>`}
              css={`body {
  font-family: system-ui;
  padding: 2rem;
}

html.dark body {
  background: #0f172a;
}

.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  max-width: 1000px;
}

.toc {
  position: sticky;
  top: 2rem;
  background: #f3f4f6;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
}

html.dark .toc {
  background: #1e293b;
}

.toc h3 {
  color: #1e40af;
  margin-top: 0;
}

.toc a {
  display: block;
  color: #3b82f6;
  text-decoration: none;
  margin: 0.75rem 0;
  padding-left: 0.5rem;
  border-left: 2px solid transparent;
  transition: all 0.3s;
}

.toc a:hover {
  border-left-color: #3b82f6;
  padding-left: 1rem;
}

html.dark .toc a {
  color: #60a5fa;
}

html.dark .toc a:hover {
  border-left-color: #60a5fa;
  padding-left: 1rem;
}

.content h2 {
  color: #1e40af;
  scroll-margin-top: 2rem;
}`}
              colorTheme="blue"
              previewHeight="500px"
              onOpenPlayground={() => openPlayground(
                `<div class="page"><aside class="toc"><h3>Sections</h3><a href="#introduction">Introduction</a><a href="#benefits">Benefits</a><a href="#conclusion">Conclusion</a></aside><main><h2 id="introduction">Introduction</h2><p>Content...</p><h2 id="benefits">Benefits</h2><p>Content...</p><h2 id="conclusion">Conclusion</h2><p>Content...</p></main></div>`,
                `.page { display: grid; grid-template-columns: 200px 1fr; gap: 2rem; } .toc { position: sticky; top: 2rem; background: #f3f4f6; padding: 1.5rem; border-radius: 8px; } .toc a { display: block; color: #3b82f6; text-decoration: none; margin: 0.75rem 0; padding-left: 0.5rem; border-left: 2px solid transparent; transition: all 0.3s; } .toc a:hover { border-left-color: #3b82f6; padding-left: 1rem; } /* Dark mode */ html.dark body { background: #0f172a; } html.dark .toc { background: #1e293b; } html.dark .toc a { color: #60a5fa; } html.dark .toc a:hover { border-left-color: #60a5fa; padding-left: 1rem; }`,
                ``
              )}
            />
          </div>

          {/* Example 4: Footer Links */}
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-3">
              4️⃣ Footer Navigation
            </h4>
            <FrontendCodePreview
              title="Footer Internal Links"
              description="Internal links organized in the footer"
              html={`<footer class="footer">
  <div class="footer-section">
    <h4>Company</h4>
    <a href="/about">About Us</a>
    <a href="/careers">Careers</a>
    <a href="/privacy">Privacy Policy</a>
  </div>
  
  <div class="footer-section">
    <h4>Resources</h4>
    <a href="/blog">Blog</a>
    <a href="/docs">Documentation</a>
    <a href="/guides">Guides</a>
  </div>
  
  <div class="footer-section">
    <h4>Support</h4>
    <a href="/contact">Contact Us</a>
    <a href="/faq">FAQ</a>
    <a href="/sitemap">Sitemap</a>
  </div>
</footer>`}
              css={`body {
  margin: 0;
  font-family: system-ui;
}

html.dark body {
  background: #0f172a;
}

.footer {
  background: #1f2937;
  color: white;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer-section h4 {
  color: #fbbf24;
  margin-bottom: 1rem;
}

.footer-section a {
  display: block;
  color: #d1d5db;
  text-decoration: none;
  margin: 0.5rem 0;
  transition: all 0.3s;
  padding-left: 0.5rem;
}

.footer-section a:hover {
  color: #fbbf24;
  padding-left: 1rem;
}`}
              colorTheme="blue"
              previewHeight="480px"
              onOpenPlayground={() => openPlayground(
                `<footer class="footer"><div class="footer-section"><h4>Company</h4><a href="/about">About</a><a href="/careers">Careers</a></div><div class="footer-section"><h4>Resources</h4><a href="/blog">Blog</a><a href="/docs">Docs</a></div></footer>`,
                `.footer { background: #1f2937; color: white; padding: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; } .footer-section h4 { color: #fbbf24; margin-bottom: 1rem; } .footer-section a { display: block; color: #d1d5db; text-decoration: none; margin: 0.5rem 0; transition: all 0.3s; padding-left: 0.5rem; } .footer-section a:hover { color: #fbbf24; padding-left: 1rem; } /* Dark mode */ html.dark body { background: #0f172a; }`,
                ``
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Check className="w-7 h-7" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Tips for effective internal linking
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {/* Do's */}
          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg text-emerald-700 dark:text-emerald-400 mb-3">✅ Do This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use root-relative paths (/path) for consistency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use descriptive anchor text that explains the link</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Link to important content strategically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Test all internal links regularly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>Use id attributes for jump link targets</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg text-rose-700 dark:text-rose-400 mb-3">❌ Avoid This</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Mixing document-relative and root-relative paths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Using vague link text like "click here"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Linking to pages that no longer exist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Excessive internal linking (link spam)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 dark:text-rose-400 font-bold">✕</span>
                <span>Forgetting to test jump links with #</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: SEO Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            SEO Benefits
          </CardTitle>
          <CardDescription className="text-base">
            How internal links help search engines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">🐛 Crawlability</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Search engines follow internal links to discover new pages on your site
              </p>
            </div>

            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">📊 Link Authority</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Internal links pass authority and relevance between pages
              </p>
            </div>

            <div className="p-5 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">🎯 Context</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Anchor text helps search engines understand page content
              </p>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">📈 Ranking</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Good internal linking structure improves SEO rankings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
