'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileCode, Tag, Shield, Smartphone, CheckCircle, AlertTriangle, Info, Globe } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlMetaTagsSeoProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlMetaTagsSeo({ onOpenWebPlayground }: HtmlMetaTagsSeoProps) {
  
  // Example 1: Essential Meta Tags
  const essentialMetaExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character Encoding -->
  <meta charset="UTF-8">
  
  <!-- Viewport for Responsive Design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Page Title (Most Important SEO Tag) -->
  <title>Learn Web Development | Complete Guide 2024 | CoderPod</title>
  
  <!-- Meta Description (Search Result Snippet) -->
  <meta name="description" content="Master web development with our comprehensive guide covering HTML, CSS, JavaScript, React, and modern frameworks. Perfect for beginners and professionals. Start learning today!">
  
  <!-- Keywords (Less important, but still used by some) -->
  <meta name="keywords" content="web development, HTML, CSS, JavaScript, React, programming tutorial, learn coding">
  
  <!-- Author Information -->
  <meta name="author" content="CoderPod Team">
  
  <!-- Robots Meta Tag (Control Indexing) -->
  <meta name="robots" content="index, follow">
  
  <!-- Theme Color for Mobile Browsers -->
  <meta name="theme-color" content="#667eea">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
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
    
    .header {
      text-align: center;
      margin-bottom: 40px;
    }
    
    h1 {
      font-size: 2.5rem;
      color: #667eea;
      margin-bottom: 15px;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    .description {
      font-size: 1.1rem;
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    
    :root.dark .description {
      color: #94a3b8;
    }
    
    .meta-showcase {
      display: grid;
      gap: 20px;
      margin-top: 30px;
    }
    
    .meta-card {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }
    
    :root.dark .meta-card {
      background: #334155;
      border-left-color: #818cf8;
    }
    
    .meta-card h3 {
      color: #1f2937;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    
    :root.dark .meta-card h3 {
      color: #f1f5f9;
    }
    
    .meta-tag {
      background: #1f2937;
      color: #fbbf24;
      padding: 10px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 0.9rem;
      margin: 10px 0;
      overflow-x: auto;
    }
    
    :root.dark .meta-tag {
      background: #0f172a;
      color: #fde047;
    }
    
    .meta-explanation {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    :root.dark .meta-explanation {
      color: #94a3b8;
    }
    
    .badge {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-left: 10px;
    }
    
    .badge-critical {
      background: #ef4444;
    }
    
    .badge-important {
      background: #f59e0b;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      }

      .container {
        background: #1e293b;
        color: #e2e8f0;
      }

      h1 {
        color: #818cf8;
      }

      .description {
        color: #94a3b8;
      }

      .meta-card {
        background: #334155;
        border-left-color: #818cf8;
      }

      .meta-card h3 {
        color: #f1f5f9;
      }

      .meta-tag {
        background: #0f172a;
        color: #fde047;
      }

      .meta-explanation {
        color: #94a3b8;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏷️ Essential Meta Tags</h1>
      <p class="description">
        This page demonstrates all the important meta tags in the &lt;head&gt; section.
        View the page source or inspect the &lt;head&gt; to see them in action!
      </p>
    </div>
    
    <div class="meta-showcase">
      <div class="meta-card">
        <h3>Title Tag <span class="badge badge-critical">CRITICAL</span></h3>
        <div class="meta-tag">&lt;title&gt;Learn Web Development | Complete Guide 2024 | CoderPod&lt;/title&gt;</div>
        <p class="meta-explanation">
          Appears in search results, browser tabs, and social shares. 50-60 characters recommended.
          Include primary keyword and brand name.
        </p>
      </div>
      
      <div class="meta-card">
        <h3>Meta Description <span class="badge badge-critical">CRITICAL</span></h3>
        <div class="meta-tag">&lt;meta name="description" content="Master web development with..."&gt;</div>
        <p class="meta-explanation">
          Shown in search results below the title. 150-160 characters. Should be compelling and include keywords.
        </p>
      </div>
      
      <div class="meta-card">
        <h3>Viewport <span class="badge badge-critical">CRITICAL</span></h3>
        <div class="meta-tag">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
        <p class="meta-explanation">
          Essential for responsive design. Tells browsers how to scale the page on different devices.
        </p>
      </div>
      
      <div class="meta-card">
        <h3>Charset <span class="badge badge-critical">CRITICAL</span></h3>
        <div class="meta-tag">&lt;meta charset="UTF-8"&gt;</div>
        <p class="meta-explanation">
          Defines character encoding. UTF-8 supports all languages and special characters.
        </p>
      </div>
      
      <div class="meta-card">
        <h3>Robots <span class="badge badge-important">IMPORTANT</span></h3>
        <div class="meta-tag">&lt;meta name="robots" content="index, follow"&gt;</div>
        <p class="meta-explanation">
          Controls how search engines crawl and index your page. "index, follow" is default.
        </p>
      </div>
      
      <div class="meta-card">
        <h3>Author <span class="badge">OPTIONAL</span></h3>
        <div class="meta-tag">&lt;meta name="author" content="CoderPod Team"&gt;</div>
        <p class="meta-explanation">
          Specifies the content author. Useful for blogs and articles.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 2: Robots Meta Tag Options
  const robotsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Robots Meta Tag Guide</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    }
    
    .container {
      max-width: 1000px;
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
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    .robots-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .robot-card {
      background: #f3f4f6;
      padding: 25px;
      border-radius: 12px;
      border: 2px solid transparent;
      transition: all 0.3s;
    }
    
    :root.dark .robot-card {
      background: #334155;
    }
    
    .robot-card:hover {
      border-color: #10b981;
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(16, 185, 129, 0.2);
    }
    
    :root.dark .robot-card:hover {
      border-color: #34d399;
    }
    
    .robot-card h3 {
      color: #1f2937;
      margin-bottom: 15px;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    :root.dark .robot-card h3 {
      color: #f1f5f9;
    }
    
    .icon {
      width: 35px;
      height: 35px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }
    
    .robot-card code {
      display: block;
      background: #1f2937;
      color: #34d399;
      padding: 12px;
      border-radius: 6px;
      font-size: 0.85rem;
      margin: 15px 0;
      overflow-x: auto;
    }
    
    :root.dark .robot-card code {
      background: #0f172a;
      color: #6ee7b7;
    }
    
    .description {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    :root.dark .description {
      color: #94a3b8;
    }
    
    .use-case {
      background: #d1fae5;
      padding: 10px 15px;
      border-radius: 6px;
      font-size: 0.9rem;
      color: #065f46;
      margin-top: 10px;
    }
    
    :root.dark .use-case {
      background: #064e3b;
      color: #a7f3d0;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }

      .container {
        background: #1e293b;
        color: #e2e8f0;
      }

      h1 {
        color: #34d399;
      }

      .robots-grid {
        background: transparent;
      }

      .robot-card {
        background: #334155;
      }

      .robot-card h3 {
        color: #f1f5f9;
      }

      .robot-card code {
        background: #0f172a;
        color: #6ee7b7;
      }

      .use-case {
        background: #064e3b;
        color: #a7f3d0;
      }
    }
    
    .warning {
      background: #fef3c7;
      color: #78350f;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .warning {
      background: #78350f;
      color: #fef3c7;
      border-left-color: #fbbf24;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🤖 Robots Meta Tag Options</h1>
    
    <div class="warning">
      <strong>⚠️ Important:</strong> The robots meta tag controls how search engines interact with your page.
      Use it carefully to avoid accidentally blocking your content from search results!
    </div>
    
    <div class="robots-grid">
      <div class="robot-card">
        <h3><span class="icon">✓</span> Index, Follow</h3>
        <code>&lt;meta name="robots" content="index, follow"&gt;</code>
        <p class="description">
          <strong>Default behavior.</strong> Allow search engines to index this page and follow all links on it.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Normal public pages you want in search results
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">✗</span> Noindex, Follow</h3>
        <code>&lt;meta name="robots" content="noindex, follow"&gt;</code>
        <p class="description">
          Don't index this page, but follow the links. Page won't appear in search results.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Thank you pages, private member areas, duplicate content
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">✓</span> Index, Nofollow</h3>
        <code>&lt;meta name="robots" content="index, nofollow"&gt;</code>
        <p class="description">
          Index this page, but don't follow any links. Page appears in results but doesn't pass link equity.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Pages with untrusted user-generated content
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">✗</span> Noindex, Nofollow</h3>
        <code>&lt;meta name="robots" content="noindex, nofollow"&gt;</code>
        <p class="description">
          Don't index and don't follow links. Complete SEO isolation.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Admin pages, login pages, internal tools
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">⚡</span> Noarchive</h3>
        <code>&lt;meta name="robots" content="noarchive"&gt;</code>
        <p class="description">
          Prevent search engines from showing cached version of the page.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Frequently updated content, time-sensitive pages
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">📝</span> Nosnippet</h3>
        <code>&lt;meta name="robots" content="nosnippet"&gt;</code>
        <p class="description">
          Don't show text snippet or video preview in search results. Only show title and URL.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Pages where you don't want preview text shown
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">🔍</span> Max-snippet</h3>
        <code>&lt;meta name="robots" content="max-snippet:160"&gt;</code>
        <p class="description">
          Limit snippet length to specified number of characters.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Controlling preview length in search results
        </div>
      </div>
      
      <div class="robot-card">
        <h3><span class="icon">🎯</span> Specific Bot</h3>
        <code>&lt;meta name="googlebot" content="noindex"&gt;</code>
        <p class="description">
          Target specific search engine bots. Can use googlebot, bingbot, etc.
        </p>
        <div class="use-case">
          <strong>Use for:</strong> Different rules for different search engines
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  // Example 3: Complete Meta Tags Template
  const completeTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ========================================
       ESSENTIAL META TAGS
       ======================================== -->
  
  <!-- Character Encoding -->
  <meta charset="UTF-8">
  
  <!-- IE Compatibility -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- Viewport for Responsive Design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  
  <!-- ========================================
       SEO META TAGS
       ======================================== -->
  
  <!-- Page Title (50-60 characters) -->
  <title>Ultimate Web Development Guide 2024 | Learn HTML, CSS, JS | CoderPod</title>
  
  <!-- Meta Description (150-160 characters) -->
  <meta name="description" content="Master web development with our comprehensive, beginner-friendly guide. Learn HTML, CSS, JavaScript, React, and modern frameworks through hands-on projects and real-world examples.">
  
  <!-- Keywords (optional, less important now) -->
  <meta name="keywords" content="web development, HTML tutorial, CSS guide, JavaScript course, React learning, coding bootcamp, programming tutorial">
  
  <!-- Author -->
  <meta name="author" content="CoderPod Team">
  
  <!-- Robots -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://coderpod.com/guides/web-development">
  
  <!-- ========================================
       MOBILE & BROWSER
       ======================================== -->
  
  <!-- Theme Color (Android Chrome) -->
  <meta name="theme-color" content="#667eea">
  
  <!-- Apple Mobile Web App -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  
  <!-- Microsoft Tiles -->
  <meta name="msapplication-TileColor" content="#667eea">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    .hero {
      text-align: center;
      margin-bottom: 50px;
    }
    
    h1 {
      font-size: 3rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
    }
    
    :root.dark h1 {
      background: linear-gradient(135deg, #818cf8 0%, #a78bfa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .subtitle {
      font-size: 1.3rem;
      color: #6b7280;
      line-height: 1.6;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    .meta-section {
      margin: 40px 0;
    }
    
    .section-title {
      font-size: 1.8rem;
      color: #1f2937;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid #667eea;
    }
    
    :root.dark .section-title {
      color: #f1f5f9;
      border-bottom-color: #818cf8;
    }
    
    .meta-list {
      display: grid;
      gap: 15px;
    }
    
    .meta-item {
      background: #f9fafb;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #667eea;
    }
    
    :root.dark .meta-item {
      background: #334155;
      border-left-color: #818cf8;
    }
    
    .meta-item h4 {
      color: #667eea;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    
    :root.dark .meta-item h4 {
      color: #818cf8;
    }
    
    .meta-item code {
      display: block;
      background: #1f2937;
      color: #fbbf24;
      padding: 12px;
      border-radius: 6px;
      font-size: 0.85rem;
      margin: 10px 0;
      overflow-x: auto;
      line-height: 1.5;
    }
    
    :root.dark .meta-item code {
      background: #0f172a;
      color: #fde047;
    }
    
    .meta-item p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    :root.dark .meta-item p {
      color: #94a3b8;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-left: 10px;
    }
    
    .badge-critical {
      background: #fee2e2;
      color: #991b1b;
    }
    
    .badge-important {
      background: #fef3c7;
      color: #78350f;
    }
    
    .badge-optional {
      background: #dbeafe;
      color: #1e3a8a;
    }
    
    :root.dark .badge-critical {
      background: #7f1d1d;
      color: #fecaca;
    }
    
    :root.dark .badge-important {
      background: #78350f;
      color: #fef3c7;
    }
    
    :root.dark .badge-optional {
      background: #1e3a8a;
      color: #dbeafe;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      }

      .container {
        background: #1e293b;
        color: #e2e8f0;
      }

      h1 {
        color: #818cf8;
      }

      .subtitle {
        color: #94a3b8;
      }

      .section-title {
        color: #f1f5f9;
        border-bottom-color: #818cf8;
      }

      .meta-item {
        background: #334155;
        border-left-color: #818cf8;
      }

      .meta-item h4 {
        color: #818cf8;
      }

      .meta-item code {
        background: #0f172a;
        color: #fde047;
      }

      .meta-item p {
        color: #94a3b8;
      }

      .badge-critical {
        background: #7f1d1d;
        color: #fecaca;
      }

      .badge-important {
        background: #78350f;
        color: #fef3f7;
      }

      .badge-optional {
        background: #1e3a8a;
        color: #dbeafe;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>📋 Complete Meta Tags Template</h1>
      <p class="subtitle">
        A comprehensive reference showing all important meta tags properly implemented.
        View source to see the complete &lt;head&gt; section!
      </p>
    </div>
    
    <div class="meta-section">
      <h2 class="section-title">🎯 Critical Meta Tags</h2>
      <div class="meta-list">
        <div class="meta-item">
          <h4>Character Encoding <span class="badge badge-critical">REQUIRED</span></h4>
          <code>&lt;meta charset="UTF-8"&gt;</code>
          <p>Defines character encoding. Always use UTF-8 for universal language support.</p>
        </div>
        
        <div class="meta-item">
          <h4>Viewport <span class="badge badge-critical">REQUIRED</span></h4>
          <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
          <p>Essential for responsive design. Controls how page scales on different devices.</p>
        </div>
        
        <div class="meta-item">
          <h4>Title <span class="badge badge-critical">REQUIRED</span></h4>
          <code>&lt;title&gt;Ultimate Web Development Guide 2024 | Learn HTML, CSS, JS | CoderPod&lt;/title&gt;</code>
          <p>50-60 characters. Appears in search results, browser tabs, and social shares.</p>
        </div>
        
        <div class="meta-item">
          <h4>Description <span class="badge badge-critical">REQUIRED</span></h4>
          <code>&lt;meta name="description" content="Master web development with our comprehensive guide..."&gt;</code>
          <p>150-160 characters. Shown in search results. Should be compelling and include keywords.</p>
        </div>
      </div>
    </div>
    
    <div class="meta-section">
      <h2 class="section-title">⚙️ Important Meta Tags</h2>
      <div class="meta-list">
        <div class="meta-item">
          <h4>Robots <span class="badge badge-important">IMPORTANT</span></h4>
          <code>&lt;meta name="robots" content="index, follow"&gt;</code>
          <p>Controls search engine crawling and indexing behavior.</p>
        </div>
        
        <div class="meta-item">
          <h4>Canonical URL <span class="badge badge-important">IMPORTANT</span></h4>
          <code>&lt;link rel="canonical" href="https://coderpod.com/guides/web-development"&gt;</code>
          <p>Prevents duplicate content issues by specifying the preferred URL.</p>
        </div>
        
        <div class="meta-item">
          <h4>Author <span class="badge badge-optional">OPTIONAL</span></h4>
          <code>&lt;meta name="author" content="CoderPod Team"&gt;</code>
          <p>Specifies content author. Useful for blogs and articles.</p>
        </div>
        
        <div class="meta-item">
          <h4>Theme Color <span class="badge badge-optional">OPTIONAL</span></h4>
          <code>&lt;meta name="theme-color" content="#667eea"&gt;</code>
          <p>Sets browser toolbar color on mobile devices (Android Chrome).</p>
        </div>
      </div>
    </div>
    
    <div class="meta-section">
      <h2 class="section-title">📱 Mobile & Browser Tags</h2>
      <div class="meta-list">
        <div class="meta-item">
          <h4>Apple Web App</h4>
          <code>&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
&lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;</code>
          <p>Controls behavior when site is added to iOS home screen.</p>
        </div>
        
        <div class="meta-item">
          <h4>IE Compatibility</h4>
          <code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</code>
          <p>Forces Internet Explorer to use latest rendering engine.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Tag}
        category="HTML · SEO & Metadata"
        title="Meta Tags for SEO"
        description="Master essential meta tags for better search engine rankings and user experience"
        colorTheme="purple"
      />

      {/* What are Meta Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Tag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What are Meta Tags?
          </CardTitle>
          <CardDescription>
            Understanding meta tags and their role in SEO and web development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Meta tags</strong> are HTML elements that provide metadata about your 
            web page. They're placed in the <code className="px-2 py-1 bg-muted rounded">&lt;head&gt;</code> section 
            and aren't visible on the page, but they're crucial for search engines, browsers, and social media platforms.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <FileCode className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">SEO Impact</h4>
              <p className="text-sm text-muted-foreground">
                Control how search engines index and display your pages in results
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Social Sharing</h4>
              <p className="text-sm text-muted-foreground">
                Define how your content appears when shared on social media
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Browser Behavior</h4>
              <p className="text-sm text-muted-foreground">
                Control responsive design, caching, and mobile app behavior
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Essential Meta Tags Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Essential Meta Tags
          </CardTitle>
          <CardDescription>
            Must-have meta tags for every web page with live demonstration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={essentialMetaExample}
            title="Essential Meta Tags in Action"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Meta Tag Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Meta Tag Categories</CardTitle>
          <CardDescription>
            Different types of meta tags and their purposes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-muted border">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-xs font-bold">
                    CRITICAL
                  </span>
                  Character & Viewport
                </h4>
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block my-2">
                  &lt;meta charset="UTF-8"&gt;<br/>
                  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  Character encoding and responsive design viewport. Required on every page.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-xs font-bold">
                    CRITICAL
                  </span>
                  SEO Meta Tags
                </h4>
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block my-2">
                  &lt;meta name="description" content="..."&gt;<br/>
                  &lt;meta name="robots" content="index, follow"&gt;<br/>
                  &lt;meta name="keywords" content="..."&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  Control search engine indexing and define how your page appears in search results.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded text-xs font-bold">
                    IMPORTANT
                  </span>
                  Mobile & Browser
                </h4>
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block my-2">
                  &lt;meta name="theme-color" content="#667eea"&gt;<br/>
                  &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  Control mobile browser appearance and progressive web app behavior.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted border">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-bold">
                    OPTIONAL
                  </span>
                  Additional Info
                </h4>
                <code className="text-sm font-mono text-purple-600 dark:text-purple-400 block my-2">
                  &lt;meta name="author" content="Your Name"&gt;<br/>
                  &lt;meta name="copyright" content="Company Name"&gt;
                </code>
                <p className="text-sm text-muted-foreground">
                  Authorship and copyright information. Useful for blogs and articles.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Robots Meta Tag */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Robots Meta Tag Options
          </CardTitle>
          <CardDescription>
            Control how search engines crawl and index your pages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Important Warning</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              The robots meta tag is powerful! <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900 rounded">noindex</code> will 
              remove your page from search results. Always double-check before deploying.
            </AlertDescription>
          </Alert>
          
          <FrontendCodePreview
            html={robotsExample}
            title="Robots Meta Tag Guide"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Complete Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Complete Meta Tags Template
          </CardTitle>
          <CardDescription>
            Production-ready template with all important meta tags
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={completeTemplate}
            title="Full Meta Tags Implementation"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Meta Tags Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always include charset and viewport</strong> - Required for modern web</li>
            <li><strong>Unique titles and descriptions</strong> - Every page should have different meta tags</li>
            <li><strong>Keep title under 60 characters</strong> - Longer titles get truncated in search results</li>
            <li><strong>Keep description under 160 characters</strong> - Optimal length for search snippets</li>
            <li><strong>Include primary keyword naturally</strong> - In title and description</li>
            <li><strong>Write for humans first</strong> - Make descriptions compelling, not just keyword-stuffed</li>
            <li><strong>Use robots meta carefully</strong> - Default is "index, follow" - only change if needed</li>
            <li><strong>Test on mobile</strong> - Check theme-color and viewport on actual devices</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Meta Tag Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Missing viewport tag</strong> - Page won't be responsive on mobile</li>
            <li><strong>Duplicate meta descriptions</strong> - Each page needs unique description</li>
            <li><strong>Too long titles/descriptions</strong> - Get cut off in search results</li>
            <li><strong>Accidentally using noindex</strong> - Page won't appear in search results</li>
            <li><strong>Missing charset</strong> - Special characters may not display correctly</li>
            <li><strong>Keyword stuffing</strong> - Looks spammy, hurts SEO</li>
            <li><strong>Forgetting to update</strong> - Meta tags should match current content</li>
            <li><strong>Not testing mobile</strong> - Mobile appearance can be very different</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Universal Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Meta tags are supported in all browsers and search engines. They are fundamental HTML elements with 100% compatibility.
          Some newer meta tags (like theme-color) may have limited support in older browsers, but they degrade gracefully.
        </AlertDescription>
      </Alert>
    </div>
  );
}
