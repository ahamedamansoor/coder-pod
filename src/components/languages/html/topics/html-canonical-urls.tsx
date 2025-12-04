'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Link2, Copy, AlertCircle, CheckCircle, AlertTriangle, Info, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlCanonicalUrlsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlCanonicalUrls({ onOpenWebPlayground }: HtmlCanonicalUrlsProps) {
  
  // Example 1: Basic Canonical Tag
  const basicCanonicalExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Development Guide | CoderPod</title>
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://coderpod.com/guides/web-development">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
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
      color: #10b981;
      margin-bottom: 20px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    .canonical-badge {
      display: inline-block;
      background: #d1fae5;
      color: #065f46;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin: 10px 5px;
    }
    
    :root.dark .canonical-badge {
      background: #065f46;
      color: #a7f3d0;
    }
    
    .info-box {
      background: #f0fdf4;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
      border-left: 4px solid #10b981;
    }
    
    :root.dark .info-box {
      background: #064e3b;
      border-left-color: #34d399;
    }
    
    .info-box h3 {
      color: #059669;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    
    :root.dark .info-box h3 {
      color: #6ee7b7;
    }
    
    .info-box p {
      color: #065f46;
      line-height: 1.6;
    }
    
    :root.dark .info-box p {
      color: #a7f3d0;
    }
    
    .url-display {
      background: #1f2937;
      color: #34d399;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.9rem;
      margin: 20px 0;
      overflow-x: auto;
    }
    
    :root.dark .url-display {
      background: #0f172a;
      color: #6ee7b7;
    }
    
    .duplicate-urls {
      display: grid;
      gap: 15px;
      margin: 20px 0;
    }
    
    .url-card {
      background: #fef3c7;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
    }
    
    :root.dark .url-card {
      background: #78350f;
      border-left-color: #fbbf24;
    }
    
    .url-card strong {
      color: #78350f;
      font-size: 0.85rem;
      display: block;
      margin-bottom: 5px;
    }
    
    :root.dark .url-card strong {
      color: #fef3c7;
    }
    
    .url-card code {
      color: #92400e;
      font-size: 0.85rem;
    }
    
    :root.dark .url-card code {
      color: #fde68a;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔗 Canonical URL Example</h1>
    
    <div style="text-align: center;">
      <span class="canonical-badge">✅ Canonical Tag Present</span>
      <span class="canonical-badge">🎯 SEO Optimized</span>
    </div>
    
    <div class="info-box">
      <h3>💡 What is a Canonical URL?</h3>
      <p>
        The canonical tag tells search engines which version of a page is the "master" copy.
        This prevents duplicate content issues when the same page is accessible via multiple URLs.
      </p>
    </div>
    
    <h2 style="color: #10b981; margin: 30px 0 15px; font-size: 1.5rem;">
      Canonical URL for This Page:
    </h2>
    <div class="url-display">
      &lt;link rel="canonical" href="https://coderpod.com/guides/web-development"&gt;
    </div>
    
    <h3 style="color: #10b981; margin: 30px 0 15px;">
      These URLs all point to the same canonical:
    </h3>
    <div class="duplicate-urls">
      <div class="url-card">
        <strong>HTTP Version:</strong>
        <code>http://coderpod.com/guides/web-development</code>
      </div>
      <div class="url-card">
        <strong>With www:</strong>
        <code>https://www.coderpod.com/guides/web-development</code>
      </div>
      <div class="url-card">
        <strong>With Parameters:</strong>
        <code>https://coderpod.com/guides/web-development?ref=social</code>
      </div>
      <div class="url-card">
        <strong>With Session:</strong>
        <code>https://coderpod.com/guides/web-development?sessionid=abc123</code>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ✅ All these URLs should have the same canonical tag pointing to the preferred version!
    </p>
  </div>
</body>
</html>`;

  // Example 2: Pagination Canonical
  const paginationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Articles - Page 2 | CoderPod</title>
  
  <!-- Self-Referencing Canonical for Paginated Content -->
  <link rel="canonical" href="https://coderpod.com/blog?page=2">
  
  <!-- Pagination Links -->
  <link rel="prev" href="https://coderpod.com/blog?page=1">
  <link rel="next" href="https://coderpod.com/blog?page=3">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%);
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
      color: #3b82f6;
      margin-bottom: 20px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #60a5fa;
    }
    
    .page-indicator {
      text-align: center;
      font-size: 1.2rem;
      color: #6b7280;
      margin-bottom: 30px;
    }
    
    :root.dark .page-indicator {
      color: #94a3b8;
    }
    
    .pagination-nav {
      background: #dbeafe;
      padding: 25px;
      border-radius: 12px;
      margin: 30px 0;
    }
    
    :root.dark .pagination-nav {
      background: #1e3a8a;
    }
    
    .pagination-nav h3 {
      color: #1e40af;
      margin-bottom: 15px;
    }
    
    :root.dark .pagination-nav h3 {
      color: #93c5fd;
    }
    
    .nav-links {
      display: grid;
      gap: 10px;
    }
    
    .nav-link {
      background: white;
      padding: 12px;
      border-radius: 6px;
      border-left: 4px solid #3b82f6;
    }
    
    :root.dark .nav-link {
      background: #334155;
      border-left-color: #60a5fa;
    }
    
    .nav-link strong {
      color: #1f2937;
      font-size: 0.85rem;
      display: block;
      margin-bottom: 5px;
    }
    
    :root.dark .nav-link strong {
      color: #f1f5f9;
    }
    
    .nav-link code {
      color: #3b82f6;
      font-size: 0.85rem;
    }
    
    :root.dark .nav-link code {
      color: #93c5fd;
    }
    
    .tag-display {
      background: #1f2937;
      color: #60a5fa;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      margin: 15px 0;
      overflow-x: auto;
      line-height: 1.6;
    }
    
    :root.dark .tag-display {
      background: #0f172a;
      color: #93c5fd;
    }
    
    .info-note {
      background: #f0f9ff;
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }
    
    :root.dark .info-note {
      background: #0c4a6e;
      border-left-color: #60a5fa;
    }
    
    .info-note p {
      color: #1e40af;
      line-height: 1.6;
    }
    
    :root.dark .info-note p {
      color: #bfdbfe;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📄 Pagination & Canonical URLs</h1>
    <p class="page-indicator">You are on Page 2 of 10</p>
    
    <div class="info-note">
      <p>
        <strong>✅ Best Practice:</strong> Each paginated page should have a self-referencing canonical tag.
        This tells search engines that page 2 is intentionally different from page 1.
      </p>
    </div>
    
    <div class="tag-display">
&lt;!-- Canonical points to current page --&gt;
&lt;link rel="canonical" href="https://coderpod.com/blog?page=2"&gt;

&lt;!-- Pagination navigation --&gt;
&lt;link rel="prev" href="https://coderpod.com/blog?page=1"&gt;
&lt;link rel="next" href="https://coderpod.com/blog?page=3"&gt;
    </div>
    
    <div class="pagination-nav">
      <h3>📑 Pagination Tags Explained</h3>
      <div class="nav-links">
        <div class="nav-link">
          <strong>rel="canonical"</strong>
          <code>Points to THIS page (page 2) - self-referencing</code>
        </div>
        <div class="nav-link">
          <strong>rel="prev"</strong>
          <code>Points to previous page in series (page 1)</code>
        </div>
        <div class="nav-link">
          <strong>rel="next"</strong>
          <code>Points to next page in series (page 3)</code>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; color: #6b7280; margin-top: 30px; line-height: 1.6;">
      ⚠️ Common mistake: DON'T point all paginated pages to page 1!<br>
      Each page should canonicalize to itself.
    </p>
  </div>
</body>
</html>`;

  // Example 3: Problem Scenarios
  const problemExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Common Canonical URL Problems | Guide</title>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: 20px;
      min-height: 100vh;
    }
    
    :root.dark body {
      background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
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
      color: #ef4444;
      margin-bottom: 30px;
      text-align: center;
    }
    
    :root.dark h1 {
      color: #f87171;
    }
    
    .problem-grid {
      display: grid;
      gap: 20px;
      margin: 30px 0;
    }
    
    .problem-card {
      background: #fef2f2;
      padding: 25px;
      border-radius: 12px;
      border-left: 5px solid #ef4444;
    }
    
    :root.dark .problem-card {
      background: #7f1d1d;
      border-left-color: #f87171;
    }
    
    .problem-card h3 {
      color: #dc2626;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2rem;
    }
    
    :root.dark .problem-card h3 {
      color: #fca5a5;
    }
    
    .problem-card .icon {
      font-size: 1.5rem;
    }
    
    .problem-desc {
      color: #991b1b;
      margin-bottom: 15px;
      line-height: 1.6;
    }
    
    :root.dark .problem-desc {
      color: #fecaca;
    }
    
    .code-bad {
      background: #7f1d1d;
      color: #fca5a5;
      padding: 12px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 0.85rem;
      margin: 10px 0;
      overflow-x: auto;
    }
    
    :root.dark .code-bad {
      background: #450a0a;
      color: #fecaca;
    }
    
    .solution {
      background: #dcfce7;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      border-left: 4px solid #10b981;
    }
    
    :root.dark .solution {
      background: #064e3b;
      border-left-color: #34d399;
    }
    
    .solution strong {
      color: #059669;
      display: block;
      margin-bottom: 8px;
    }
    
    :root.dark .solution strong {
      color: #6ee7b7;
    }
    
    .solution code {
      background: #166534;
      color: #bbf7d0;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.85rem;
      display: block;
      margin-top: 8px;
      overflow-x: auto;
    }
    
    :root.dark .solution code {
      background: #14532d;
      color: #d1fae5;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚠️ Common Canonical URL Problems</h1>
    
    <div class="problem-grid">
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 1: Missing Canonical Tag</h3>
        <p class="problem-desc">
          Page has no canonical tag at all. Search engines may choose their own preferred version,
          leading to unpredictable rankings.
        </p>
        <div class="code-bad">
&lt;!-- No canonical tag present --&gt;
&lt;head&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          <code>&lt;link rel="canonical" href="https://example.com/page"&gt;</code>
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 2: Relative URLs</h3>
        <p class="problem-desc">
          Using relative URLs instead of absolute URLs. Canonical must always be absolute.
        </p>
        <div class="code-bad">
&lt;!-- Wrong: Relative URL --&gt;
&lt;link rel="canonical" href="/blog/article"&gt;
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          <code>&lt;link rel="canonical" href="https://example.com/blog/article"&gt;</code>
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 3: Multiple Canonicals</h3>
        <p class="problem-desc">
          Page has multiple canonical tags pointing to different URLs. Search engines will ignore all of them.
        </p>
        <div class="code-bad">
&lt;!-- Wrong: Multiple canonicals --&gt;
&lt;link rel="canonical" href="https://example.com/page1"&gt;
&lt;link rel="canonical" href="https://example.com/page2"&gt;
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          Use only ONE canonical tag per page
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 4: Canonical Chain</h3>
        <p class="problem-desc">
          Page A canonicalizes to Page B, which canonicalizes to Page C. Avoid chains - point directly to the final URL.
        </p>
        <div class="code-bad">
Page A → canonical → Page B → canonical → Page C
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          Page A and Page B should both point directly to Page C
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 5: Canonical to Different Content</h3>
        <p class="problem-desc">
          Canonical points to a page with completely different content. Only use for near-duplicates.
        </p>
        <div class="code-bad">
&lt;!-- Wrong: Different content --&gt;
Product page → canonical → Homepage
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          Only canonicalize to pages with substantially similar content
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 6: Canonical to 404</h3>
        <p class="problem-desc">
          Canonical URL returns 404 or 500 error. Make sure canonical URL is accessible.
        </p>
        <div class="code-bad">
&lt;link rel="canonical" href="https://example.com/deleted-page"&gt;
&lt;!-- Returns 404 --&gt;
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          Ensure canonical URL is live and returns 200 status
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 7: HTTP/HTTPS Mismatch</h3>
        <p class="problem-desc">
          HTTPS page canonicalizes to HTTP version (or vice versa). Always use the secure version.
        </p>
        <div class="code-bad">
&lt;!-- On HTTPS page --&gt;
&lt;link rel="canonical" href="http://example.com/page"&gt;
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          <code>&lt;link rel="canonical" href="https://example.com/page"&gt;</code>
        </div>
      </div>
      
      <div class="problem-card">
        <h3><span class="icon">❌</span> Problem 8: Paginated Content to Page 1</h3>
        <p class="problem-desc">
          All paginated pages (2, 3, 4...) canonicalize to page 1. Each should self-reference.
        </p>
        <div class="code-bad">
&lt;!-- On page 2 - WRONG --&gt;
&lt;link rel="canonical" href="https://example.com/blog?page=1"&gt;
        </div>
        <div class="solution">
          <strong>✅ Solution:</strong>
          <code>&lt;link rel="canonical" href="https://example.com/blog?page=2"&gt;</code>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Link2}
        category="HTML · SEO & Metadata"
        title="Canonical URLs"
        description="Prevent duplicate content issues and consolidate page ranking signals"
        colorTheme="emerald"
      />

      {/* What are Canonical URLs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Link2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            What are Canonical URLs?
          </CardTitle>
          <CardDescription>
            Understanding canonical tags and why they're essential for SEO
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A <strong className="text-foreground">canonical URL</strong> tells search engines which version of a page is the
            "master" or "preferred" version. This prevents duplicate content penalties when the same content is accessible
            via multiple URLs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <Copy className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Avoid Duplicates</h4>
              <p className="text-sm text-muted-foreground">
                Prevent search engines from treating similar pages as duplicates
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <AlertCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Consolidate Signals</h4>
              <p className="text-sm text-muted-foreground">
                Combine ranking signals from duplicate pages into one URL
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Control Indexing</h4>
              <p className="text-sm text-muted-foreground">
                Tell search engines which URL to show in search results
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            Basic Canonical Tag
          </CardTitle>
          <CardDescription>
            How to implement a canonical URL for duplicate content scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicCanonicalExample}
            title="Basic Canonical Implementation"
            colorTheme="emerald"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* When to Use Canonical */}
      <Card>
        <CardHeader>
          <CardTitle>When to Use Canonical URLs</CardTitle>
          <CardDescription>
            Common scenarios where canonical tags are essential
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🔀 HTTP vs HTTPS</h4>
              <p className="text-sm text-muted-foreground mb-2">
                When both versions are accessible, canonicalize to HTTPS
              </p>
              <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">
                http://example.com → canonical → https://example.com
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🌐 WWW vs non-WWW</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Choose one version and canonicalize the other to it
              </p>
              <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">
                www.example.com → canonical → example.com (or vice versa)
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🔗 URL Parameters</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Tracking parameters, session IDs, and filters should canonicalize to clean URL
              </p>
              <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">
                example.com/product?ref=email&sessionid=123 → canonical → example.com/product
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📱 Mobile vs Desktop</h4>
              <p className="text-sm text-muted-foreground mb-2">
                If separate mobile URLs exist (m.example.com), canonicalize to desktop
              </p>
              <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">
                m.example.com/page → canonical → example.com/page
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📄 Print/PDF Versions</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Print-friendly or PDF versions should canonicalize to main page
              </p>
              <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">
                example.com/article?print=true → canonical → example.com/article
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🛍️ Product Variations</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Different color/size options with separate URLs
              </p>
              <code className="text-xs bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded">
                example.com/shirt?color=red → canonical → example.com/shirt
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pagination Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            Pagination & Canonical URLs
          </CardTitle>
          <CardDescription>
            Special case: How to handle paginated content correctly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={paginationExample}
            title="Pagination Canonical Strategy"
            colorTheme="emerald"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            Common Canonical URL Problems
          </CardTitle>
          <CardDescription>
            Mistakes to avoid when implementing canonical tags
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={problemExample}
            title="Canonical URL Problems & Solutions"
            colorTheme="emerald"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Canonical URL Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use absolute URLs</strong> - Always include full https:// domain</li>
            <li><strong>One canonical per page</strong> - Multiple canonicals will be ignored</li>
            <li><strong>Self-referencing is good</strong> - Pages can canonicalize to themselves</li>
            <li><strong>Match content closely</strong> - Only canonicalize near-duplicate pages</li>
            <li><strong>Check accessibility</strong> - Canonical URL must return 200 status</li>
            <li><strong>Use HTTPS</strong> - Always prefer secure version in canonical</li>
            <li><strong>Be consistent</strong> - Use same canonical across all duplicate versions</li>
            <li><strong>Monitor in Search Console</strong> - Check Google's interpretation</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Testing */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Canonical URLs</CardTitle>
          <CardDescription>
            Tools to verify your canonical implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 URL Inspection Tool</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Google Search Console - See how Google interprets your canonical
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                search.google.com/search-console
              </code>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">👀 View Page Source</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Check HTML source to verify canonical tag is present
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                Right-click → View Page Source → Search for "canonical"
              </code>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔍 SEO Browser Extensions</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Extensions like "SEO Meta in 1 Click" show canonical URLs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Canonical Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Using relative URLs</strong> - Must be absolute with domain</li>
            <li><strong>Multiple canonicals</strong> - Only one per page</li>
            <li><strong>Canonical chains</strong> - A→B→C, point A and B directly to C</li>
            <li><strong>Wrong protocol</strong> - HTTPS page pointing to HTTP</li>
            <li><strong>Canonical to 404</strong> - Target URL must be accessible</li>
            <li><strong>Conflicting signals</strong> - Canonical vs sitemap vs robots.txt</li>
            <li><strong>Paginated to page 1</strong> - Each page should self-reference</li>
            <li><strong>Not monitoring</strong> - Check Search Console regularly</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Search Engine Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Canonical URLs are supported by all major search engines: Google, Bing, Yahoo, Yandex, and DuckDuckGo.
          It's a standard HTML element (<code>&lt;link rel="canonical"&gt;</code>) that has been widely supported since 2009.
        </AlertDescription>
      </Alert>
    </div>
  );
}
