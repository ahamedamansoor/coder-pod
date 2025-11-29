
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Box, Play, Search, Accessibility, Code, Building, Sidebar, List, Newspaper, Image, Clock } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function HtmlSemanticElements({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void }) {
    
    const whySemantic = [
        { icon: Search, title: "Better SEO", description: "Search engines like Google better understand the content and context of your webpage, which can improve your search rankings." },
        { icon: Accessibility, title: "Better Accessibility", description: "Screen readers can use semantic tags to navigate a page, making your site much easier to use for visually impaired users." },
        { icon: Code, title: "Easier for Developers", description: "The code is more readable and easier to maintain. A `<nav>` block is instantly understandable, while a `<div class=\"main-nav\">` requires more thought." },
    ];
    
    const layoutTags = [
        { tag: "<header>", description: "Introductory content for a section or the whole page. Typically contains a logo, navigation, and a search bar." },
        { tag: "<nav>", description: "A container for major navigation links." },
        { tag: "<main>", description: "The main, unique content of the page. There should only be one `<main>` element per page." },
        { tag: "<section>", description: "A thematic grouping of content, which should almost always have its own heading." },
        { tag: "<article>", description: "A self-contained piece of content that could be distributed on its own, like a blog post or news story." },
        { tag: "<aside>", description: "Content that is tangentially related to the main content, like a sidebar or pull quotes." },
        { tag: "<footer>", description: "Footer content for a section or the whole page. Typically contains copyright info, contact details, and related links." },
    ];

    const playgroundCode = {
        html: `<header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <h1>My Semantic Blog</h1>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>This is the main content of the blog post...</p>
  </article>

  <aside>
    <h3>Related Posts</h3>
    <ul>
      <li>Another Post</li>
      <li>A Third Post</li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Coder Pod</p>
</footer>`,
        css: `body {
  font-family: sans-serif;
  color: #333;
}
header, footer {
  background-color: #f2f2f2;
  padding: 1rem;
  border: 1px dashed #ccc;
  margin-bottom: 1rem;
}
main {
  display: flex;
  gap: 1rem;
}
article {
  flex: 3;
  border: 1px dashed #aaa;
  padding: 1rem;
}
aside {
  flex: 1;
  border: 1px dashed #aaa;
  padding: 1rem;
  background-color: #fafafa;
}
nav a {
  margin-right: 1rem;
  color: hsl(var(--primary));
}`,
        js: ''
    };

    return (
      <div className="space-y-10 pb-16">
        <PageHeader
          icon={Box}
          category="HTML Basics"
          title="Semantic HTML"
          description="Writing HTML that describes its meaning, not just its appearance"
          colorTheme="purple"
        />

        <Card>
            <CardHeader>
                <CardTitle>The "Well-Labeled Boxes" Analogy</CardTitle>
                <CardDescription>Imagine you're moving. You could put everything in identical, unlabeled brown boxes, or you could label them "Kitchen," "Books," "Clothes." Which is easier to unpack?</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Box className="w-5 h-5 text-destructive"/>Non-Semantic: `&lt;div&gt;` and `&lt;span&gt;`</h3>
                    <p className="text-sm text-muted-foreground">These are the unlabeled brown boxes. They tell the browser nothing about the content inside them. A page made only of `div`s is a jumble of boxes.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><Box className="w-5 h-5 text-primary"/>Semantic Elements: `&lt;nav&gt;`, `&lt;article&gt;`</h3>
                    <p className="text-sm text-muted-foreground">These are the labeled boxes. They clearly communicate their purpose—both to the browser and to other developers.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Why Semantic HTML Matters</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
                {whySemantic.map((reason, index) => (
                    <div key={index} className="bg-muted p-4 rounded-lg text-center border">
                        <reason.icon className="w-8 h-8 text-primary mx-auto mb-3"/>
                        <h3 className="font-semibold text-lg">{reason.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{reason.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>The Main Layout Elements</CardTitle>
                <CardDescription>These tags form the primary structure of almost every modern webpage.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted">
                    {layoutTags.map(tag => (
                        <div key={tag.tag} className="flex items-start gap-3 my-2">
                           <code>{tag.tag}</code><p className="text-sm text-muted-foreground">- {tag.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Other Important Semantic Tags</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Image className="w-4 h-4"/>`&lt;figure&gt;` and `&lt;figcaption&gt;`</h3>
                    <p className="text-sm text-muted-foreground">Used to group media content (like an image or diagram) with its caption.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Clock className="w-4 h-4"/>`&lt;time&gt;`</h3>
                    <p className="text-sm text-muted-foreground">Represents a specific period in time. Can be used with a `datetime` attribute for machine-readable dates.</p>
                </div>
                 <div className="bg-muted p-4 rounded-lg border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><List className="w-4 h-4"/>`&lt;ul&gt;`, `&lt;ol&gt;`, `&lt;li&gt;`</h3>
                    <p className="text-sm text-muted-foreground">Correctly identify content as being part of a list, rather than just lines of text with bullet points.</p>
                </div>
            </CardContent>
        </Card>

        {/* Semantic HTML in Action */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Box className="w-6 h-6 text-purple-600" /> Semantic HTML in Action</CardTitle>
            <CardDescription className="text-base">See how semantic elements create meaningful page structure with proper styling and dark mode support</CardDescription>
          </CardHeader>
          <CardContent>
            <FrontendCodePreview
              title="Semantic HTML Layout"
              description="Complete webpage structure using semantic elements for better accessibility, SEO, and code readability"
              html={`<div class="page-container">
  <!-- Header Section -->
  <header class="site-header">
    <div class="logo">
      <h1>🌐 My Semantic Website</h1>
    </div>
    <nav class="main-nav">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#blog" class="nav-link">Blog</a>
      <a href="#contact" class="nav-link">Contact</a>
    </nav>
  </header>

  <!-- Main Content Area -->
  <main class="main-content">
    <!-- Article Section -->
    <article class="blog-post">
      <header class="article-header">
        <h2>Understanding Semantic HTML</h2>
        <p class="meta">
          <time datetime="2024-11-29">November 29, 2024</time>
          <span class="author">by John Doe</span>
        </p>
      </header>
      
      <section class="article-section">
        <h3>What is Semantic HTML?</h3>
        <p>Semantic HTML uses meaningful tags that describe the content they contain. Instead of using generic <code>&lt;div&gt;</code> tags everywhere, we use elements like <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;section&gt;</code>.</p>
      </section>
      
      <section class="article-section">
        <h3>Benefits of Semantic Markup</h3>
        <ul>
          <li>Better SEO - Search engines understand content structure</li>
          <li>Improved Accessibility - Screen readers navigate easily</li>
          <li>Easier Maintenance - Code is self-documenting</li>
        </ul>
      </section>
      
      <figure class="article-figure">
        <div class="placeholder-image">📊 Chart: Semantic vs Non-Semantic</div>
        <figcaption>Figure 1: Comparison of semantic and non-semantic HTML structure</figcaption>
      </figure>
    </article>

    <!-- Sidebar with Related Content -->
    <aside class="sidebar">
      <section class="widget">
        <h3>📚 Related Posts</h3>
        <ul class="related-list">
          <li><a href="#">HTML5 New Features</a></li>
          <li><a href="#">CSS Best Practices</a></li>
          <li><a href="#">Web Accessibility Guide</a></li>
        </ul>
      </section>
      
      <section class="widget">
        <h3>🏷️ Tags</h3>
        <div class="tags">
          <span class="tag">HTML</span>
          <span class="tag">Semantic</span>
          <span class="tag">Accessibility</span>
          <span class="tag">SEO</span>
        </div>
      </section>
      
      <section class="widget">
        <h3>💡 Quick Tip</h3>
        <p class="tip-text">Always use semantic elements to improve your website's accessibility and SEO!</p>
      </section>
    </aside>
  </main>

  <!-- Footer Section -->
  <footer class="site-footer">
    <section class="footer-content">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>Learning semantic HTML for better web development.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <nav class="footer-nav">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div class="footer-section">
        <h4>Connect</h4>
        <p>Follow us on social media</p>
      </div>
    </section>
    <div class="copyright">
      <p>&copy; 2024 Coder Pod. All rights reserved.</p>
    </div>
  </footer>
</div>`}
              css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  background: #f5f7fa;
  transition: background-color 0.3s;
}

html.dark body {
  background: #0f172a;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

html.dark .page-container {
  background: #1e293b;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

/* Header Styles */
.site-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.3);
}

/* Main Content Layout */
.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 2rem;
  transition: all 0.3s;
}

html.dark .main-content {
  color: #e2e8f0;
}

/* Article Styles */
.blog-post {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

html.dark .blog-post {
  background: #334155;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.article-header {
  border-bottom: 3px solid #667eea;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.article-header h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

html.dark .article-header h2 {
  color: #f1f5f9;
}

.meta {
  color: #64748b;
  font-size: 0.9rem;
  display: flex;
  gap: 1rem;
  transition: color 0.3s;
}

html.dark .meta {
  color: #94a3b8;
}

.article-section {
  margin-bottom: 2rem;
}

.article-section h3 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.article-section p {
  color: #475569;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

html.dark .article-section p {
  color: #cbd5e1;
}

.article-section ul {
  list-style: none;
  padding-left: 0;
}

.article-section li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #475569;
  transition: color 0.3s;
}

html.dark .article-section li {
  color: #cbd5e1;
}

.article-section li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

code {
  background: #f1f5f9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #e91e63;
  font-size: 0.9em;
  transition: all 0.3s;
}

html.dark code {
  background: #1e293b;
  color: #f472b6;
}

/* Figure Styles */
.article-figure {
  margin: 2rem 0;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}

html.dark .article-figure {
  border-color: #475569;
}

.placeholder-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

figcaption {
  background: #f8fafc;
  padding: 1rem;
  text-align: center;
  font-style: italic;
  color: #64748b;
  font-size: 0.9rem;
  transition: all 0.3s;
}

html.dark figcaption {
  background: #1e293b;
  color: #94a3b8;
}

/* Sidebar Styles */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.widget {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

html.dark .widget {
  background: #334155;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.widget h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  transition: color 0.3s;
}

html.dark .widget h3 {
  color: #f1f5f9;
}

.related-list {
  list-style: none;
  padding: 0;
}

.related-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.3s;
}

html.dark .related-list li {
  border-bottom-color: #475569;
}

.related-list li:last-child {
  border-bottom: none;
}

.related-list a {
  color: #667eea;
  text-decoration: none;
  transition: all 0.3s;
}

.related-list a:hover {
  color: #764ba2;
  padding-left: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #ede9fe;
  color: #7c3aed;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s;
}

html.dark .tag {
  background: #5b21b6;
  color: #e9d5ff;
}

.tag:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 4px rgba(124, 58, 237, 0.3);
}

.tip-text {
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #f59e0b;
  color: #78350f;
  font-size: 0.9rem;
  transition: all 0.3s;
}

html.dark .tip-text {
  background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  color: #fef3c7;
  border-left-color: #fbbf24;
}

/* Footer Styles */
.site-footer {
  background: #1e293b;
  color: #cbd5e1;
  padding: 2rem;
  margin-top: 2rem;
  transition: all 0.3s;
}

html.dark .site-footer {
  background: #0f172a;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section p {
  color: #94a3b8;
  font-size: 0.9rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: #667eea;
}

.copyright {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #334155;
  color: #64748b;
  font-size: 0.85rem;
  transition: all 0.3s;
}

html.dark .copyright {
  border-top-color: #1e293b;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .main-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
}`}
              colorTheme="purple"
              icon={Box}
              previewHeight="600px"
            />
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Interactive Semantic HTML Playground</CardTitle>
                <CardDescription>Experiment with semantic elements in a live code editor with preview and console.</CardDescription>
            </CardHeader>
            <CardContent>
                <InteractivePlayground
                  title="Complete Semantic HTML Playground"
                  description="Explore header, nav, main, article, aside, footer, section, figure, and time elements with styling"
                  features={[
                    'Semantic Structure',
                    'Layout Elements',
                    'Figure & Time',
                    'Responsive Design'
                  ]}
                  buttonText="Open Semantic HTML Playground"
                  onLaunchPlayground={onOpenWebPlayground}
                  playgroundData={{
                    html: playgroundCode.html,
                    css: playgroundCode.css,
                    js: playgroundCode.js
                  }}
                  colorTheme="purple"
                />
            </CardContent>
        </Card>

      </div>
    );
}
