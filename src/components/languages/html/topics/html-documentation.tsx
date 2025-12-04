'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileText, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlDocumentationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlDocumentation({ onOpenWebPlayground }: HtmlDocumentationProps) {
  
  const documentationExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Documentation Best Practices</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%); }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #8b5cf6; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #a78bfa; }
    
    .doc-section {
      background: #f5f3ff;
      padding: 25px;
      border-radius: 12px;
      border-left: 4px solid #8b5cf6;
      margin: 25px 0;
    }
    :root.dark .doc-section { background: #4c1d95; }
    
    .doc-section h2 {
      color: #6d28d9;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    :root.dark .doc-section h2 { color: #c4b5fd; }
    
    pre {
      background: #1f2937;
      color: #e5e7eb;
      padding: 20px;
      border-radius: 8px;
      font-size: 0.8rem;
      line-height: 1.8;
      overflow-x: auto;
      margin: 15px 0;
    }
    :root.dark pre { background: #0f172a; }
    
    .comment { color: #9ca3af; font-style: italic; }
    .tag { color: #60a5fa; }
    .good-comment { color: #34d399; }
    
    .example-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    
    .example-card {
      padding: 20px;
      border-radius: 8px;
      border: 2px solid;
    }
    
    .bad-example { background: #fef2f2; border-color: #ef4444; }
    .good-example { background: #f0fdf4; border-color: #10b981; }
    :root.dark .bad-example { background: #7f1d1d; border-color: #f87171; }
    :root.dark .good-example { background: #064e3b; border-color: #34d399; }
    
    .example-card h4 {
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    .bad-example h4 { color: #991b1b; }
    .good-example h4 { color: #065f46; }
    :root.dark .bad-example h4 { color: #fca5a5; }
    :root.dark .good-example h4 { color: #6ee7b7; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 HTML Documentation Examples</h1>
    
    <!-- Section Comments -->
    <div class="doc-section">
      <h2>1. Section Comments</h2>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Use comments to mark major sections of your HTML document.
      </p>
      
      <pre><span class="good-comment">&lt;!-- ========================================
     HEADER SECTION
     Contains logo, navigation, and search
     ======================================== --&gt;</span>
&lt;header class="site-header"&gt;
  &lt;!-- Logo --&gt;
  &lt;img src="logo.png" alt="Company Logo"&gt;
  
  &lt;!-- Main Navigation --&gt;
  &lt;nav aria-label="Main"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

<span class="good-comment">&lt;!-- ========================================
     MAIN CONTENT
     ======================================== --&gt;</span>
&lt;main&gt;
  &lt;!-- Content goes here --&gt;
&lt;/main&gt;</pre>
    </div>
    
    <!-- Component Documentation -->
    <div class="doc-section">
      <h2>2. Component Documentation</h2>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Document reusable components with their purpose and usage.
      </p>
      
      <pre><span class="good-comment">&lt;!--
  PRODUCT CARD COMPONENT
  
  Purpose: Display product information in a card format
  
  Required:
  - .product-card: Main container
  - .product-card__image: Product image
  - .product-card__title: Product name
  - .product-card__price: Price display
  
  Optional:
  - .product-card--featured: Featured product style
  - .product-card__badge: Sale/New badge
  
  Example:
  &lt;article class="product-card"&gt;
    &lt;img class="product-card__image" src="..."&gt;
    &lt;h3 class="product-card__title"&gt;Product Name&lt;/h3&gt;
    &lt;span class="product-card__price"&gt;$99&lt;/span&gt;
  &lt;/article&gt;
--&gt;</span>
&lt;article class="product-card"&gt;
  &lt;img class="product-card__image" src="product.jpg" alt="Product"&gt;
  &lt;h3 class="product-card__title"&gt;Laptop&lt;/h3&gt;
  &lt;span class="product-card__price"&gt;$999&lt;/span&gt;
&lt;/article&gt;</pre>
    </div>
    
    <!-- Good vs Bad Comments -->
    <div class="doc-section">
      <h2>3. Good vs Bad Comments</h2>
      
      <div class="example-grid">
        <div class="example-card bad-example">
          <h4>❌ Bad Comments</h4>
          <pre style="font-size: 0.7rem;"><span class="comment">&lt;!-- div --&gt;</span>
&lt;div class="container"&gt;

<span class="comment">&lt;!-- heading --&gt;</span>
&lt;h1&gt;Title&lt;/h1&gt;

<span class="comment">&lt;!-- This is a paragraph tag --&gt;</span>
&lt;p&gt;Text&lt;/p&gt;

<span class="comment">&lt;!-- end div --&gt;</span>
&lt;/div&gt;</pre>
          <p style="color: #991b1b; font-size: 0.85rem; margin-top: 10px;">
            Too obvious, no value added
          </p>
        </div>
        
        <div class="example-card good-example">
          <h4>✅ Good Comments</h4>
          <pre style="font-size: 0.7rem;"><span class="good-comment">&lt;!-- Hero Section --&gt;</span>
&lt;div class="hero-container"&gt;

<span class="good-comment">&lt;!-- Page Title - Updated via CMS --&gt;</span>
&lt;h1&gt;Welcome&lt;/h1&gt;

<span class="good-comment">&lt;!-- Introduction text --&gt;</span>
&lt;p&gt;Description text...&lt;/p&gt;

&lt;/div&gt;
<span class="good-comment">&lt;!-- /Hero Section --&gt;</span></pre>
          <p style="color: #065f46; font-size: 0.85rem; margin-top: 10px;">
            Adds context and useful information
          </p>
        </div>
      </div>
    </div>
    
    <!-- TODO Comments -->
    <div class="doc-section">
      <h2>4. TODO Comments</h2>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Mark incomplete work or future improvements.
      </p>
      
      <pre><span class="good-comment">&lt;!-- TODO: Add accessibility labels to form inputs --&gt;</span>
&lt;form&gt;
  &lt;input type="text" name="username"&gt;
&lt;/form&gt;

<span class="good-comment">&lt;!-- FIXME: Image alt text needs updating --&gt;</span>
&lt;img src="photo.jpg" alt="Image"&gt;

<span class="good-comment">&lt;!-- NOTE: This component is deprecated, use &lt;new-component&gt; instead --&gt;</span>
&lt;div class="old-component"&gt;&lt;/div&gt;</pre>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 12px; border-left: 4px solid #f59e0b; margin-top: 30px;">
      <h3 style="color: #78350f; margin-bottom: 10px;">💡 Documentation Tips</h3>
      <ul style="list-style: none; line-height: 2; color: #92400e;">
        <li>✓ Comment WHY, not WHAT (code shows what)</li>
        <li>✓ Document complex sections only</li>
        <li>✓ Keep comments up-to-date</li>
        <li>✓ Use TODO/FIXME/NOTE prefixes</li>
        <li>✓ Remove commented-out code before commit</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FileText}
        category="HTML · Best Practices"
        title="What is HTML Documentation?"
        description="Learn how to document HTML code effectively with comments"
        colorTheme="blue"
      />

      {/* Documentation Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            HTML Documentation Examples
          </CardTitle>
          <CardDescription>
            How to write helpful comments and documentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={documentationExample}
            title="Documentation Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Comment Types */}
      <Card>
        <CardHeader>
          <CardTitle>Types of HTML Comments</CardTitle>
          <CardDescription>
            Different comment styles for different purposes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">Section Headers</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Mark major sections of your page
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;!-- ===== HEADER SECTION ===== --&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">Explanatory Comments</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Explain why something is done a certain way
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;!-- Using inline styles here due to email client compatibility --&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">TODO Comments</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Mark incomplete work or future improvements
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;!-- TODO: Add error handling for empty form submission --&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">Component Documentation</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Document reusable components with usage examples
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;!-- CARD COMPONENT: Requires .card, .card__title, .card__body --&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">Closing Tags</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Mark closing tags for long sections
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;/section&gt; &lt;!-- /Hero Section --&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comment Prefixes */}
      <Card>
        <CardHeader>
          <CardTitle>Comment Prefixes</CardTitle>
          <CardDescription>
            Standard prefixes to categorize comments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <strong className="text-blue-600 dark:text-blue-400">TODO:</strong>
              <span className="text-sm ml-2">Work that needs to be done</span>
              <code className="block text-xs mt-1 bg-white dark:bg-slate-900 p-2 rounded">
                &lt;!-- TODO: Add form validation --&gt;
              </code>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <strong className="text-red-600 dark:text-red-400">FIXME:</strong>
              <span className="text-sm ml-2">Known issues that need fixing</span>
              <code className="block text-xs mt-1 bg-white dark:bg-slate-900 p-2 rounded">
                &lt;!-- FIXME: Broken link on mobile --&gt;
              </code>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <strong className="text-yellow-600 dark:text-yellow-400">HACK:</strong>
              <span className="text-sm ml-2">Temporary workaround</span>
              <code className="block text-xs mt-1 bg-white dark:bg-slate-900 p-2 rounded">
                &lt;!-- HACK: IE11 compatibility fix --&gt;
              </code>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <strong className="text-purple-600 dark:text-purple-400">NOTE:</strong>
              <span className="text-sm ml-2">Important information</span>
              <code className="block text-xs mt-1 bg-white dark:bg-slate-900 p-2 rounded">
                &lt;!-- NOTE: Don't modify this without updating CSS --&gt;
              </code>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <strong className="text-orange-600 dark:text-orange-400">WARNING:</strong>
              <span className="text-sm ml-2">Critical warning</span>
              <code className="block text-xs mt-1 bg-white dark:bg-slate-900 p-2 rounded">
                &lt;!-- WARNING: Changes here affect entire site --&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Documentation Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Comment WHY, not WHAT</strong> - Code shows what it does, explain why</li>
            <li><strong>Be concise</strong> - Short, clear comments are better than long explanations</li>
            <li><strong>Keep comments updated</strong> - Outdated comments are worse than no comments</li>
            <li><strong>Document complex sections</strong> - Don't comment obvious code</li>
            <li><strong>Use TODO/FIXME</strong> - Standard prefixes help track issues</li>
            <li><strong>Mark major sections</strong> - Help navigate large HTML files</li>
            <li><strong>Document components</strong> - Explain reusable component usage</li>
            <li><strong>Remove old code</strong> - Don't leave commented-out code</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Documentation Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Over-commenting</strong> - &lt;!-- This is a div --&gt; (too obvious)</li>
            <li><strong>Outdated comments</strong> - Comments don't match current code</li>
            <li><strong>Commented-out code</strong> - Leaving old code in comments</li>
            <li><strong>No comments at all</strong> - Complex sections with zero documentation</li>
            <li><strong>Vague comments</strong> - "Fix this later" (what needs fixing?)</li>
            <li><strong>Long paragraphs</strong> - Comments should be brief and scannable</li>
            <li><strong>Stating the obvious</strong> - &lt;!-- Close div --&gt; before &lt;/div&gt;</li>
            <li><strong>Personal notes</strong> - "This is stupid" (unprofessional)</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Documentation Tools */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Documentation Tools</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>JSDoc</strong> - Document JavaScript within HTML</li>
            <li><strong>Stylelint</strong> - Enforce comment style rules</li>
            <li><strong>TODO Tree (VS Code)</strong> - Highlights TODO/FIXME comments</li>
            <li><strong>Better Comments (VS Code)</strong> - Color-code comment types</li>
            <li><strong>README.md</strong> - Project-level documentation</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
