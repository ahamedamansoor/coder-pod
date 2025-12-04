'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileCode, Layout, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlSemanticMarkupPracticesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlSemanticMarkupPractices({ onOpenWebPlayground }: HtmlSemanticMarkupPracticesProps) {
  
  const semanticVsDivExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML vs Div Soup</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%); }
    
    .comparison {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    
    .example {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .example { background: #1e293b; color: #e2e8f0; }
    
    .bad { border: 4px solid #ef4444; }
    .good { border: 4px solid #10b981; }
    
    .example h2 {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.5rem;
    }
    
    .bad h2 { color: #ef4444; }
    .good h2 { color: #10b981; }
    
    .code-display {
      background: #1f2937;
      color: #e5e7eb;
      padding: 20px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.8rem;
      line-height: 1.8;
      overflow-x: auto;
      margin: 20px 0;
    }
    :root.dark .code-display { background: #0f172a; }
    
    .bad-tag { color: #f87171; }
    .good-tag { color: #34d399; }
    .comment { color: #9ca3af; font-style: italic; }
    
    .benefits {
      background: #f0fdf4;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #10b981;
      margin-top: 20px;
    }
    :root.dark .benefits { background: #064e3b; }
    
    .benefits h4 { color: #065f46; margin-bottom: 10px; }
    :root.dark .benefits h4 { color: #6ee7b7; }
    
    .benefits ul {
      list-style: none;
      line-height: 2;
      color: #4b5563;
    }
    :root.dark .benefits ul { color: #cbd5e1; }
    
    .benefits li::before {
      content: "✓ ";
      color: #10b981;
      font-weight: bold;
      margin-right: 8px;
    }
    
    .issues {
      background: #fef2f2;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #ef4444;
      margin-top: 20px;
    }
    :root.dark .issues { background: #7f1d1d; }
    
    .issues h4 { color: #991b1b; margin-bottom: 10px; }
    :root.dark .issues h4 { color: #fca5a5; }
    
    .issues ul {
      list-style: none;
      line-height: 2;
      color: #4b5563;
    }
    :root.dark .issues ul { color: #cbd5e1; }
    
    .issues li::before {
      content: "✗ ";
      color: #ef4444;
      font-weight: bold;
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="comparison">
    <!-- Bad Example -->
    <div class="example bad">
      <h2>❌ Div Soup (Bad)</h2>
      
      <div class="code-display">
<span class="bad-tag">&lt;div class="header"&gt;</span>
  &lt;div class="logo"&gt;Site Logo&lt;/div&gt;
  <span class="bad-tag">&lt;div class="nav"&gt;</span>
    &lt;div class="nav-item"&gt;Home&lt;/div&gt;
    &lt;div class="nav-item"&gt;About&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

<span class="bad-tag">&lt;div class="content"&gt;</span>
  <span class="bad-tag">&lt;div class="post"&gt;</span>
    &lt;div class="title"&gt;Article Title&lt;/div&gt;
    &lt;div class="text"&gt;Content...&lt;/div&gt;
  &lt;/div&gt;
  
  <span class="bad-tag">&lt;div class="sidebar"&gt;</span>
    &lt;div&gt;Widget&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

<span class="bad-tag">&lt;div class="footer"&gt;</span>
  &lt;div&gt;© 2024&lt;/div&gt;
&lt;/div&gt;
      </div>
      
      <div class="issues">
        <h4>Problems:</h4>
        <ul>
          <li>No semantic meaning</li>
          <li>Screen readers can't navigate</li>
          <li>Poor SEO - search engines confused</li>
          <li>Hard to maintain and understand</li>
          <li>No document outline</li>
        </ul>
      </div>
    </div>
    
    <!-- Good Example -->
    <div class="example good">
      <h2>✅ Semantic HTML (Good)</h2>
      
      <div class="code-display">
<span class="good-tag">&lt;header&gt;</span>
  &lt;img src="logo.png" alt="Site Logo"&gt;
  <span class="good-tag">&lt;nav aria-label="Main"&gt;</span>
    &lt;a href="/"&gt;Home&lt;/a&gt;
    &lt;a href="/about"&gt;About&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;

<span class="good-tag">&lt;main&gt;</span>
  <span class="good-tag">&lt;article&gt;</span>
    <span class="good-tag">&lt;h1&gt;Article Title&lt;/h1&gt;</span>
    <span class="good-tag">&lt;p&gt;Content...&lt;/p&gt;</span>
  &lt;/article&gt;
  
  <span class="good-tag">&lt;aside&gt;</span>
    &lt;section&gt;Widget&lt;/section&gt;
  &lt;/aside&gt;
&lt;/main&gt;

<span class="good-tag">&lt;footer&gt;</span>
  &lt;p&gt;© 2024&lt;/p&gt;
&lt;/footer&gt;
      </div>
      
      <div class="benefits">
        <h4>Benefits:</h4>
        <ul>
          <li>Clear semantic meaning</li>
          <li>Screen readers navigate easily</li>
          <li>Better SEO - clear structure</li>
          <li>Easy to maintain</li>
          <li>Proper document outline</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`;

  const properHeadingsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proper Heading Hierarchy</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #78350f 0%, #92400e 100%); }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #f59e0b; margin-bottom: 10px; }
    :root.dark h1 { color: #fbbf24; }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 40px;
      text-align: center;
    }
    :root.dark .subtitle { color: #94a3b8; }
    
    .hierarchy {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    .outline-box {
      background: #fef3c7;
      padding: 25px;
      border-radius: 12px;
      border: 3px solid;
    }
    :root.dark .outline-box { background: #78350f; }
    
    .outline-box.bad { border-color: #ef4444; }
    .outline-box.good { border-color: #10b981; }
    
    .outline-box h3 {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .outline-box.bad h3 { color: #991b1b; }
    .outline-box.good h3 { color: #065f46; }
    :root.dark .outline-box.bad h3 { color: #fca5a5; }
    :root.dark .outline-box.good h3 { color: #6ee7b7; }
    
    .heading-tree {
      font-family: monospace;
      line-height: 2;
      color: #1f2937;
    }
    :root.dark .heading-tree { color: #e2e8f0; }
    
    .level-1 { font-size: 1.2rem; font-weight: bold; color: #f59e0b; }
    .level-2 { margin-left: 20px; font-size: 1.1rem; font-weight: 600; color: #d97706; }
    .level-3 { margin-left: 40px; font-size: 1rem; color: #b45309; }
    .level-4 { margin-left: 60px; font-size: 0.95rem; color: #92400e; }
    
    :root.dark .level-1 { color: #fbbf24; }
    :root.dark .level-2 { color: #fcd34d; }
    :root.dark .level-3 { color: #fde68a; }
    :root.dark .level-4 { color: #fef3c7; }
    
    .skip-warning {
      color: #ef4444;
      font-weight: bold;
      font-size: 1.5rem;
    }
    
    .info-card {
      background: #eff6ff;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
      margin-top: 30px;
    }
    :root.dark .info-card { background: #1e3a8a; }
    
    .info-card h4 {
      color: #1e40af;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    :root.dark .info-card h4 { color: #93c5fd; }
    
    .info-card ul {
      list-style: none;
      line-height: 2;
      color: #475569;
    }
    :root.dark .info-card ul { color: #cbd5e1; }
    
    .info-card li::before {
      content: "→ ";
      color: #3b82f6;
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📑 Heading Hierarchy</h1>
    <p class="subtitle">Proper heading structure is crucial for accessibility and SEO</p>
    
    <div class="hierarchy">
      <!-- Bad Example -->
      <div class="outline-box bad">
        <h3>❌ Bad Hierarchy</h3>
        <div class="heading-tree">
          <div class="level-1">h1: Page Title</div>
          <div class="level-4">
            <span class="skip-warning">⚠</span> h4: Subtitle (skipped h2, h3!)
          </div>
          <div class="level-2">h2: Section</div>
          <div class="level-1">
            <span class="skip-warning">⚠</span> h1: Another Title (second h1!)
          </div>
          <div class="level-3">h3: Subsection</div>
          <div class="level-2">h2: Another Section</div>
        </div>
        <p style="color: #991b1b; margin-top: 15px; font-size: 0.9rem;">
          ✗ Skipped levels<br>
          ✗ Multiple h1 elements<br>
          ✗ Confusing structure
        </p>
      </div>
      
      <!-- Good Example -->
      <div class="outline-box good">
        <h3>✅ Good Hierarchy</h3>
        <div class="heading-tree">
          <div class="level-1">h1: Page Title</div>
          <div class="level-2">h2: Introduction</div>
          <div class="level-2">h2: Main Section</div>
          <div class="level-3">h3: Subsection A</div>
          <div class="level-4">h4: Detail 1</div>
          <div class="level-4">h4: Detail 2</div>
          <div class="level-3">h3: Subsection B</div>
          <div class="level-2">h2: Conclusion</div>
        </div>
        <p style="color: #065f46; margin-top: 15px; font-size: 0.9rem;">
          ✓ Sequential levels<br>
          ✓ One h1 per page<br>
          ✓ Clear structure
        </p>
      </div>
    </div>
    
    <div class="info-card">
      <h4>📋 Heading Best Practices</h4>
      <ul>
        <li>Use only ONE h1 per page (page title)</li>
        <li>Don't skip heading levels (h2 → h3, not h2 → h4)</li>
        <li>Headings describe content, not for styling</li>
        <li>Use CSS for sizing, not wrong heading level</li>
        <li>Logical order - outline makes sense</li>
        <li>Screen readers use headings to navigate</li>
      </ul>
    </div>
    
    <div style="background: #dcfce7; padding: 20px; border-radius: 12px; border-left: 4px solid #10b981; margin-top: 20px;">
      <h4 style="color: #065f46; margin-bottom: 10px;">💡 Quick Test</h4>
      <p style="color: #166534; line-height: 1.6;">
        Remove all styling and look at just the headings. Do they create a logical table
        of contents? Can you understand the page structure from headings alone? If yes,
        you have good heading hierarchy!
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Layout}
        category="HTML · Best Practices"
        title="What is Semantic Markup?"
        description="Learn how to write meaningful, accessible HTML using proper semantic elements"
        colorTheme="blue"
      />

      {/* Semantic vs Div Soup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Semantic HTML vs Div Soup
          </CardTitle>
          <CardDescription>
            Compare generic divs with meaningful semantic elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={semanticVsDivExample}
            title="Semantic HTML Comparison"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Heading Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle>Proper Heading Hierarchy</CardTitle>
          <CardDescription>
            How to structure headings correctly for accessibility and SEO
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={properHeadingsExample}
            title="Heading Hierarchy Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Semantic Elements Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Semantic Elements</CardTitle>
          <CardDescription>
            When and how to use HTML5 semantic elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;header&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Introductory content - site header, article header, section header
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;header&gt;&lt;h1&gt;Site Title&lt;/h1&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/header&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;nav&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Major navigation blocks - main menu, table of contents
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;nav aria-label="Main"&gt;&lt;a href="/"&gt;Home&lt;/a&gt;...&lt;/nav&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;main&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Primary content - only ONE per page, skip navigation and sidebars
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;main&gt;&lt;article&gt;...&lt;/article&gt;&lt;/main&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;article&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Self-contained content - blog post, news article, comment
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;article&gt;&lt;h2&gt;Title&lt;/h2&gt;&lt;p&gt;Content...&lt;/p&gt;&lt;/article&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;section&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Thematic grouping - chapter, tab panel, part of article
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;section&gt;&lt;h2&gt;Chapter 1&lt;/h2&gt;&lt;p&gt;...&lt;/p&gt;&lt;/section&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;aside&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Tangentially related - sidebar, callout, related links
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;aside&gt;&lt;h3&gt;Related&lt;/h3&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/aside&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">&lt;footer&gt;</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Footer content - copyright, author info, related links
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;footer&gt;&lt;p&gt;© 2024&lt;/p&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/footer&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Semantic Markup Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic elements</strong> - header, nav, main, article, aside, footer</li>
            <li><strong>One h1 per page</strong> - Represents the main topic/title</li>
            <li><strong>Don't skip heading levels</strong> - h2 follows h1, h3 follows h2</li>
            <li><strong>Meaningful structure</strong> - Document outline should make sense</li>
            <li><strong>Proper nesting</strong> - Articles can contain sections, not vice versa</li>
            <li><strong>Use lists</strong> - ul, ol, dl for list content, not divs</li>
            <li><strong>Buttons for actions</strong> - Links for navigation, buttons for actions</li>
            <li><strong>Forms need labels</strong> - Every input needs associated label</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Semantic Markup Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Div soup</strong> - Using divs for everything instead of semantic elements</li>
            <li><strong>Multiple h1s</strong> - More than one h1 per page</li>
            <li><strong>Skipping heading levels</strong> - Going from h2 to h4</li>
            <li><strong>Headings for styling</strong> - Using h3 because it looks right</li>
            <li><strong>Wrong parent-child</strong> - Section containing article (should be opposite)</li>
            <li><strong>Divs for lists</strong> - Using divs instead of ul/ol/dl</li>
            <li><strong>Spans for buttons</strong> - Using span with click handler instead of button</li>
            <li><strong>No landmarks</strong> - Missing header, nav, main, footer</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All HTML5 semantic elements are supported in all modern browsers (Chrome, Firefox, Safari, Edge).
          For older IE support (IE8 and below), you may need HTML5 shiv polyfill.
        </AlertDescription>
      </Alert>
    </div>
  );
}
