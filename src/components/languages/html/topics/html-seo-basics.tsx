'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Search, FileText, Layers, CheckCircle, AlertTriangle, Info, Sparkles, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlSeoBasicsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlSeoBasics({ onOpenWebPlayground }: HtmlSeoBasicsProps) {
  
  // Example 1: SEO-Optimized Page Structure
  const seoStructureExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Guide to Web Development | Learn Coding 2024</title>
  <meta name="description" content="Learn web development with our comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks. Perfect for beginners and professionals.">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #333;
      padding: 20px;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: #e2e8f0;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
    }
    
    header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px solid #667eea;
    }
    
    :root.dark header {
      border-bottom-color: #818cf8;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #667eea;
      margin-bottom: 10px;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    .subtitle {
      font-size: 1.2rem;
      color: #6b7280;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    nav {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    
    :root.dark nav {
      background: #334155;
    }
    
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    nav a {
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }
    
    nav a:hover {
      color: #764ba2;
    }
    
    :root.dark nav a {
      color: #818cf8;
    }
    
    :root.dark nav a:hover {
      color: #a5b4fc;
    }
    
    main {
      padding: 20px 0;
    }
    
    article {
      margin-bottom: 40px;
    }
    
    h2 {
      font-size: 2rem;
      color: #1f2937;
      margin-bottom: 15px;
    }
    
    :root.dark h2 {
      color: #f1f5f9;
    }
    
    h3 {
      font-size: 1.5rem;
      color: #374151;
      margin: 20px 0 10px;
    }
    
    :root.dark h3 {
      color: #cbd5e1;
    }
    
    p {
      margin-bottom: 15px;
      color: #4b5563;
    }
    
    :root.dark p {
      color: #94a3b8;
    }
    
    .highlight-box {
      background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #667eea;
      margin: 20px 0;
    }
    
    :root.dark .highlight-box {
      background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
      border-left-color: #818cf8;
    }
    
    .seo-badge {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
    }
    
    :root.dark footer {
      border-top-color: #475569;
      color: #94a3b8;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        color: #e2e8f0;
      }

      .container {
        background: #1e293b;
        color: #e2e8f0;
      }

      header {
        border-bottom-color: #818cf8;
      }

      h1 {
        color: #818cf8;
      }

      .subtitle {
        color: #94a3b8;
      }

      nav {
        background: #334155;
      }

      nav a {
        color: #818cf8;
      }

      nav a:hover {
        color: #a5b4fc;
      }

      h2 {
        color: #f1f5f9;
      }

      h3 {
        color: #cbd5e1;
      }

      p {
        color: #94a3b8;
      }

      .highlight-box {
        background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
        border-left-color: #818cf8;
      }

      .seo-badge {
        background: #10b981;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Semantic Header with proper heading hierarchy -->
    <header>
      <h1>Complete Guide to Web Development</h1>
      <p class="subtitle">Master HTML, CSS, and JavaScript in 2024</p>
    </header>
    
    <!-- Semantic Navigation -->
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#javascript">JavaScript</a></li>
      </ul>
    </nav>
    
    <!-- Main Content with Semantic HTML -->
    <main>
      <article>
        <span class="seo-badge">✓ SEO Optimized</span>
        <h2 id="introduction">Introduction to Web Development</h2>
        <p>
          Web development is the art and science of building websites and web applications. 
          This comprehensive guide covers everything from basic HTML to advanced frameworks.
        </p>
        
        <h3>Why Learn Web Development?</h3>
        <p>
          The demand for skilled web developers continues to grow exponentially. 
          Whether you're building personal projects or professional applications, 
          web development skills open countless opportunities.
        </p>
        
        <div class="highlight-box">
          <strong>💡 SEO Tip:</strong> Use descriptive headings (H1-H6) in proper hierarchy 
          to help search engines understand your content structure.
        </div>
      </article>
      
      <article>
        <h2 id="html">HTML Fundamentals</h2>
        <p>
          HTML (HyperText Markup Language) is the foundation of every website. 
          Learn semantic tags, accessibility, and modern HTML5 features.
        </p>
      </article>
    </main>
    
    <!-- Semantic Footer -->
    <footer>
      <p>&copy; 2024 Web Development Guide. All rights reserved.</p>
    </footer>
  </div>
</body>
</html>`;

  // Example 2: Heading Hierarchy
  const headingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proper Heading Hierarchy for SEO</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #10b981;
      margin-bottom: 10px;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    h2 {
      font-size: 2rem;
      color: #059669;
      margin: 30px 0 15px;
      padding-left: 20px;
      border-left: 4px solid #10b981;
    }
    
    :root.dark h2 {
      color: #6ee7b7;
      border-left-color: #34d399;
    }
    
    h3 {
      font-size: 1.5rem;
      color: #047857;
      margin: 20px 0 10px 40px;
    }
    
    :root.dark h3 {
      color: #a7f3d0;
    }
    
    h4 {
      font-size: 1.2rem;
      color: #065f46;
      margin: 15px 0 10px 60px;
    }
    
    :root.dark h4 {
      color: #d1fae5;
    }
    
    p {
      margin: 10px 0 10px 80px;
      color: #4b5563;
      line-height: 1.6;
    }
    
    :root.dark p {
      color: #94a3b8;
    }
    
    .hierarchy-tree {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
      margin: 30px 0;
      font-family: monospace;
    }
    
    :root.dark .hierarchy-tree {
      background: #334155;
    }
    
    .hierarchy-tree div {
      margin: 5px 0;
      color: #374151;
    }
    
    :root.dark .hierarchy-tree div {
      color: #cbd5e1;
    }
    
    .level-1 { padding-left: 0; color: #10b981; font-weight: bold; }
    .level-2 { padding-left: 30px; color: #059669; }
    .level-3 { padding-left: 60px; color: #047857; }
    .level-4 { padding-left: 90px; color: #065f46; }
    
    :root.dark .level-1 { color: #34d399; }
    :root.dark .level-2 { color: #6ee7b7; }
    :root.dark .level-3 { color: #a7f3d0; }
    :root.dark .level-4 { color: #d1fae5; }
    
    .info-box {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
    }
    
    :root.dark .info-box {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📚 SEO Content Structure</h1>
    
    <div class="info-box">
      <strong>💡 Golden Rule:</strong> Use only ONE H1 per page. It should describe the main topic. 
      Then use H2-H6 to create a logical content hierarchy.
    </div>
    
    <div class="hierarchy-tree">
      <div class="level-1">H1: Main Page Title (only one)</div>
      <div class="level-2">├── H2: Major Section</div>
      <div class="level-3">│   ├── H3: Subsection</div>
      <div class="level-4">│   │   └── H4: Detail</div>
      <div class="level-3">│   └── H3: Another Subsection</div>
      <div class="level-2">└── H2: Another Major Section</div>
      <div class="level-3">    └── H3: Subsection</div>
    </div>
    
    <!-- Example hierarchy in action -->
    <h2>🎯 Understanding Web Development</h2>
    
    <h3>Frontend Development</h3>
    <h4>HTML - The Structure</h4>
    <p>HTML provides the basic structure and content of web pages.</p>
    
    <h4>CSS - The Style</h4>
    <p>CSS controls the visual presentation and layout.</p>
    
    <h3>Backend Development</h3>
    <h4>Server-Side Languages</h4>
    <p>Languages like Node.js, Python, and PHP handle server logic.</p>
    
    <h2>🚀 Best Practices</h2>
    <h3>Always Use Semantic HTML</h3>
    <p>Semantic tags like article, section, and nav help search engines understand your content.</p>
  </div>
</body>
</html>`;

  // Example 3: SEO Checklist
  const checklistExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEO Checklist - Essential Elements</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #f59e0b;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #fbbf24;
    }
    
    .checklist {
      display: grid;
      gap: 20px;
    }
    
    .checklist-item {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
      border-left: 5px solid #10b981;
      display: flex;
      gap: 15px;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    :root.dark .checklist-item {
      background: #334155;
    }
    
    .checklist-item:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
    }
    
    .check-icon {
      width: 30px;
      height: 30px;
      background: #10b981;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }
    
    .checklist-content h3 {
      color: #1f2937;
      margin-bottom: 8px;
      font-size: 1.2rem;
    }
    
    :root.dark .checklist-content h3 {
      color: #f1f5f9;
    }
    
    .checklist-content p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    :root.dark .checklist-content p {
      color: #94a3b8;
    }
    
    .checklist-content code {
      background: #1f2937;
      color: #fbbf24;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9rem;
    }
    
    :root.dark .checklist-content code {
      background: #0f172a;
      color: #fde047;
    }
    
    .priority-high {
      border-left-color: #ef4444;
    }
    
    .priority-high .check-icon {
      background: #ef4444;
    }
    
    .category-header {
      color: #f59e0b;
      font-size: 1.5rem;
      margin: 30px 0 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #fbbf24;
    }
    
    :root.dark .category-header {
      color: #fbbf24;
      border-bottom-color: #f59e0b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Essential SEO Checklist</h1>
    
    <h2 class="category-header">🎯 Critical Elements</h2>
    <div class="checklist">
      <div class="checklist-item priority-high">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Unique Title Tag</h3>
          <p>
            50-60 characters. Include primary keyword and brand. 
            <code>&lt;title&gt;Product Name | Brand&lt;/title&gt;</code>
          </p>
        </div>
      </div>
      
      <div class="checklist-item priority-high">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Meta Description</h3>
          <p>
            150-160 characters. Compelling summary with call-to-action. 
            <code>&lt;meta name="description" content="..."&gt;</code>
          </p>
        </div>
      </div>
      
      <div class="checklist-item priority-high">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>One H1 Tag</h3>
          <p>
            Single H1 per page describing the main topic. Should include primary keyword naturally.
          </p>
        </div>
      </div>
    </div>
    
    <h2 class="category-header">📝 Content Optimization</h2>
    <div class="checklist">
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Semantic HTML</h3>
          <p>
            Use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, 
            <code>&lt;aside&gt;</code> for better structure.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Heading Hierarchy</h3>
          <p>
            Logical H1 → H2 → H3 → H4 structure. Don't skip levels.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Image Alt Text</h3>
          <p>
            Descriptive alt attributes for all images. Improves accessibility and SEO.
            <code>&lt;img src="photo.jpg" alt="Description"&gt;</code>
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Internal Links</h3>
          <p>
            Link related pages using descriptive anchor text. Helps search engines understand site structure.
          </p>
        </div>
      </div>
    </div>
    
    <h2 class="category-header">⚡ Technical SEO</h2>
    <div class="checklist">
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Mobile Responsive</h3>
          <p>
            Include viewport meta tag: <code>&lt;meta name="viewport" content="width=device-width"&gt;</code>
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Fast Loading Speed</h3>
          <p>
            Optimize images, use lazy loading, minify CSS/JS. Target &lt;3 seconds load time.
          </p>
        </div>
      </div>
      
      <div class="checklist-item">
        <div class="check-icon">✓</div>
        <div class="checklist-content">
          <h3>Valid HTML</h3>
          <p>
            Use W3C validator to ensure clean, error-free HTML code.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Search}
        category="HTML · SEO & Metadata"
        title="SEO Basics"
        description="Learn HTML fundamentals for search engine optimization and better visibility"
        colorTheme="purple"
      />

      {/* What is SEO */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Search className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What is SEO?
          </CardTitle>
          <CardDescription>
            Understanding Search Engine Optimization and why HTML structure matters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">SEO (Search Engine Optimization)</strong> is the practice of optimizing your 
            website to rank higher in search engine results. Good HTML structure is the foundation of SEO success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Higher Rankings</h4>
              <p className="text-sm text-muted-foreground">
                Appear on first page of search results for relevant keywords
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">More Traffic</h4>
              <p className="text-sm text-muted-foreground">
                Attract organic visitors without paid advertising
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Better UX</h4>
              <p className="text-sm text-muted-foreground">
                SEO best practices improve user experience and accessibility
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO-Optimized Structure Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            SEO-Optimized Page Structure
          </CardTitle>
          <CardDescription>
            Complete example with proper semantic HTML, meta tags, and content structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={seoStructureExample}
            title="SEO-Friendly HTML Structure"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Heading Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Proper Heading Hierarchy
          </CardTitle>
          <CardDescription>
            How to use H1-H6 tags correctly for better SEO and content structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <Info className="h-4 w-4 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Heading Best Practices</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>One H1 per page</strong> - Describes the main topic</li>
                <li><strong>H2 for major sections</strong> - Main content divisions</li>
                <li><strong>H3-H6 for subsections</strong> - Create logical hierarchy</li>
                <li><strong>Don't skip levels</strong> - H1 → H2 → H3 (not H1 → H3)</li>
                <li><strong>Include keywords naturally</strong> - But avoid keyword stuffing</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <FrontendCodePreview
            html={headingExample}
            title="Heading Hierarchy in Action"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* SEO Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Essential SEO Checklist
          </CardTitle>
          <CardDescription>
            Must-have HTML elements for every SEO-optimized page
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={checklistExample}
            title="Complete SEO Checklist"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Key SEO Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Key HTML Elements for SEO</CardTitle>
          <CardDescription>
            Critical HTML tags that impact search engine rankings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">
                  &lt;title&gt;Your Page Title&lt;/title&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Most important SEO element.</strong> 50-60 characters. Include primary keyword and brand name.
                  Shows in search results and browser tab.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">
                  &lt;meta name="description" content="..."&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Search result snippet.</strong> 150-160 characters. Compelling summary that encourages clicks.
                  Include keywords naturally.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">
                  &lt;h1&gt;Main Heading&lt;/h1&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Primary page heading.</strong> Only one per page. Should match or complement the title tag.
                  Describes main topic clearly.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">
                  &lt;img src="photo.jpg" alt="Description"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Image optimization.</strong> Descriptive alt text helps search engines understand images.
                  Also improves accessibility.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block mb-2">
                  &lt;a href="/page" title="Link description"&gt;Anchor Text&lt;/a&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  <strong>Internal linking.</strong> Descriptive anchor text helps search engines understand page relationships.
                  Use relevant keywords in links.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>SEO Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic HTML</strong> - article, section, nav, aside tags</li>
            <li><strong>Create descriptive URLs</strong> - /blog/seo-basics not /page?id=123</li>
            <li><strong>Optimize page speed</strong> - Fast loading improves rankings</li>
            <li><strong>Mobile-first</strong> - Responsive design is crucial</li>
            <li><strong>Add internal links</strong> - Help search engines discover content</li>
            <li><strong>Use HTTPS</strong> - Security is a ranking factor</li>
            <li><strong>Create unique content</strong> - Avoid duplicate content issues</li>
            <li><strong>Focus on user experience</strong> - Good UX signals quality</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common SEO Mistakes to Avoid</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Multiple H1 tags</strong> - Use only one H1 per page</li>
            <li><strong>Missing meta descriptions</strong> - Every page needs unique description</li>
            <li><strong>Keyword stuffing</strong> - Use keywords naturally, not excessively</li>
            <li><strong>Broken links</strong> - Regular check and fix broken internal/external links</li>
            <li><strong>Missing alt text</strong> - All images should have descriptive alt attributes</li>
            <li><strong>Duplicate titles</strong> - Each page needs a unique title tag</li>
            <li><strong>Ignoring mobile</strong> - Mobile-first indexing is now standard</li>
            <li><strong>Thin content</strong> - Pages need substantial, valuable content</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Universal Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All SEO HTML elements (title, meta tags, headings, semantic elements) are supported in all browsers
          and search engines. These are fundamental HTML features with universal compatibility.
        </AlertDescription>
      </Alert>
    </div>
  );
}
