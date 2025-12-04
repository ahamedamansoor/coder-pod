'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Tag, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlNamingConventionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlNamingConventions({ onOpenWebPlayground }: HtmlNamingConventionsProps) {
  
  const namingExamples = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Naming Conventions</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%); }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #06b6d4; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #22d3ee; }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    .example-box {
      padding: 25px;
      border-radius: 12px;
      border: 3px solid;
    }
    
    .bad { background: #fef2f2; border-color: #ef4444; }
    .good { background: #f0fdf4; border-color: #10b981; }
    :root.dark .bad { background: #7f1d1d; border-color: #f87171; }
    :root.dark .good { background: #064e3b; border-color: #34d399; }
    
    .example-box h3 {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.3rem;
    }
    
    .bad h3 { color: #991b1b; }
    .good h3 { color: #065f46; }
    :root.dark .bad h3 { color: #fca5a5; }
    :root.dark .good h3 { color: #6ee7b7; }
    
    pre {
      background: #1f2937;
      color: #e5e7eb;
      padding: 15px;
      border-radius: 8px;
      font-size: 0.8rem;
      line-height: 1.8;
      overflow-x: auto;
      margin: 15px 0;
    }
    :root.dark pre { background: #0f172a; }
    
    .tag-bad { color: #f87171; }
    .tag-good { color: #34d399; }
    
    .notes {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      font-size: 0.9rem;
      line-height: 1.6;
    }
    :root.dark .notes { background: #334155; }
    
    .section-card {
      background: #eff6ff;
      padding: 25px;
      border-radius: 12px;
      border-left: 4px solid #06b6d4;
      margin: 30px 0;
    }
    :root.dark .section-card { background: #0c4a6e; }
    
    .section-card h2 {
      color: #0369a1;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    :root.dark .section-card h2 { color: #7dd3fc; }
    
    .convention-item {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
    }
    :root.dark .convention-item { background: #1e293b; }
    
    .convention-item strong {
      color: #0369a1;
      display: block;
      margin-bottom: 8px;
    }
    :root.dark .convention-item strong { color: #7dd3fc; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏷️ HTML Naming Conventions</h1>
    
    <!-- Class Names -->
    <div class="comparison">
      <div class="example-box bad">
        <h3>❌ Bad Class Names</h3>
        <pre><span class="tag-bad">&lt;div class="RedBox"&gt;</span>
<span class="tag-bad">&lt;div class="box1"&gt;</span>
<span class="tag-bad">&lt;div class="bluebutton"&gt;</span>
<span class="tag-bad">&lt;div class="div-container"&gt;</span>
<span class="tag-bad">&lt;div class="myButton"&gt;</span></pre>
        <div class="notes">
          <p style="color: #991b1b;">
            ✗ Mixed case (RedBox)<br>
            ✗ Non-descriptive (box1)<br>
            ✗ No separator (bluebutton)<br>
            ✗ Redundant (div-container)<br>
            ✗ camelCase (myButton)
          </p>
        </div>
      </div>
      
      <div class="example-box good">
        <h3>✅ Good Class Names</h3>
        <pre><span class="tag-good">&lt;div class="alert-box"&gt;</span>
<span class="tag-good">&lt;div class="product-card"&gt;</span>
<span class="tag-good">&lt;div class="primary-button"&gt;</span>
<span class="tag-good">&lt;div class="main-container"&gt;</span>
<span class="tag-good">&lt;div class="user-profile"&gt;</span></pre>
        <div class="notes">
          <p style="color: #065f46;">
            ✓ Lowercase with hyphens<br>
            ✓ Descriptive names<br>
            ✓ Clear separators<br>
            ✓ Meaningful purpose<br>
            ✓ Consistent style
          </p>
        </div>
      </div>
    </div>
    
    <!-- ID Names -->
    <div class="comparison">
      <div class="example-box bad">
        <h3>❌ Bad ID Names</h3>
        <pre><span class="tag-bad">&lt;div id="1stSection"&gt;</span>
<span class="tag-bad">&lt;div id="my header"&gt;</span>
<span class="tag-bad">&lt;div id="MainContent"&gt;</span>
<span class="tag-bad">&lt;div id="section#1"&gt;</span></pre>
        <div class="notes">
          <p style="color: #991b1b;">
            ✗ Starts with number<br>
            ✗ Contains spaces<br>
            ✗ Mixed case<br>
            ✗ Special characters
          </p>
        </div>
      </div>
      
      <div class="example-box good">
        <h3>✅ Good ID Names</h3>
        <pre><span class="tag-good">&lt;div id="first-section"&gt;</span>
<span class="tag-good">&lt;div id="site-header"&gt;</span>
<span class="tag-good">&lt;div id="main-content"&gt;</span>
<span class="tag-good">&lt;div id="section-one"&gt;</span></pre>
        <div class="notes">
          <p style="color: #065f46;">
            ✓ Starts with letter<br>
            ✓ No spaces (use hyphens)<br>
            ✓ All lowercase<br>
            ✓ No special characters
          </p>
        </div>
      </div>
    </div>
    
    <!-- File Names -->
    <div class="section-card">
      <h2>📁 File Naming Conventions</h2>
      
      <div class="convention-item">
        <strong>❌ Bad File Names:</strong>
        <code style="color: #ef4444;">
          About Us.html, Contact_Form.HTML, Product Page.html, myPage.html
        </code>
      </div>
      
      <div class="convention-item">
        <strong>✅ Good File Names:</strong>
        <code style="color: #10b981;">
          about-us.html, contact-form.html, product-page.html, my-page.html
        </code>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
        <p style="color: #78350f; line-height: 1.6;">
          <strong>Rules:</strong><br>
          • All lowercase letters<br>
          • Use hyphens (-) not underscores or spaces<br>
          • Descriptive names (contact-form not cf.html)<br>
          • Keep extensions lowercase (.html not .HTML)
        </p>
      </div>
    </div>
    
    <!-- Data Attributes -->
    <div class="comparison">
      <div class="example-box bad">
        <h3>❌ Bad Data Attributes</h3>
        <pre><span class="tag-bad">&lt;div data-UserId="123"&gt;</span>
<span class="tag-bad">&lt;div data-product_name="Laptop"&gt;</span>
<span class="tag-bad">&lt;div datatype="button"&gt;</span></pre>
        <div class="notes">
          <p style="color: #991b1b;">
            ✗ Mixed case<br>
            ✗ Underscore separator<br>
            ✗ Missing 'data-' prefix
          </p>
        </div>
      </div>
      
      <div class="example-box good">
        <h3>✅ Good Data Attributes</h3>
        <pre><span class="tag-good">&lt;div data-user-id="123"&gt;</span>
<span class="tag-good">&lt;div data-product-name="Laptop"&gt;</span>
<span class="tag-good">&lt;div data-type="button"&gt;</span></pre>
        <div class="notes">
          <p style="color: #065f46;">
            ✓ Lowercase with hyphens<br>
            ✓ Consistent separator<br>
            ✓ Proper 'data-' prefix
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
        icon={Tag}
        category="HTML · Best Practices"
        title="What are Naming Conventions?"
        description="Learn how to name HTML classes, IDs, files, and attributes consistently"
        colorTheme="blue"
      />

      {/* Naming Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            HTML Naming Convention Examples
          </CardTitle>
          <CardDescription>
            Compare good and bad naming practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={namingExamples}
            title="Naming Convention Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Naming Styles */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Naming Conventions</CardTitle>
          <CardDescription>
            Different naming styles for HTML/CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">kebab-case (Recommended)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Lowercase with hyphens - most common in HTML/CSS
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                class="user-profile" id="main-header" data-product-id="123"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">BEM (Block Element Modifier)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Structured naming for components and their variations
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                class="card" class="card__title" class="card--featured"
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">snake_case (Not recommended for HTML)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Lowercase with underscores - common in Python, but avoid in HTML/CSS
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                class="user_profile" ← Avoid this in HTML
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">camelCase (Not recommended for HTML)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                First word lowercase, rest capitalized - good for JavaScript, not HTML
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                class="userProfile" ← Avoid this in HTML
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BEM Methodology */}
      <Card>
        <CardHeader>
          <CardTitle>BEM Naming Methodology</CardTitle>
          <CardDescription>
            Block Element Modifier - structured naming for components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Block</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Standalone component (e.g., card, button, menu)
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;div class="card"&gt;
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Element (Block__element)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Part of a block (e.g., card title, card body)
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;h2 class="card__title"&gt;
              </code>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Modifier (Block--modifier)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Variation of block or element (e.g., card--featured, button--large)
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                &lt;div class="card card--featured"&gt;
              </code>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">Complete Example</h4>
              <pre className="text-xs bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto">
{`<article class="card card--featured">
  <h2 class="card__title">Title</h2>
  <p class="card__description">Text</p>
  <button class="card__button card__button--primary">
    Read More
  </button>
</article>`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Naming Convention Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Be consistent</strong> - Pick one style (kebab-case) and stick to it</li>
            <li><strong>Be descriptive</strong> - "user-profile" not "div1" or "box"</li>
            <li><strong>Use lowercase</strong> - All letters lowercase for HTML/CSS</li>
            <li><strong>Use hyphens</strong> - Separate words with hyphens, not underscores or camelCase</li>
            <li><strong>Avoid abbreviations</strong> - "navigation" not "nav" unless universally understood</li>
            <li><strong>No spaces</strong> - Use hyphens instead of spaces</li>
            <li><strong>Start with letter</strong> - IDs must start with letter, not number</li>
            <li><strong>Be semantic</strong> - Name based on purpose, not appearance</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Naming Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Mixed case</strong> - "RedBox" or "myButton" (use kebab-case)</li>
            <li><strong>Non-descriptive</strong> - "box1", "div2", "thing" (meaningless names)</li>
            <li><strong>Appearance-based</strong> - "blue-text" (what if it changes to red?)</li>
            <li><strong>Spaces in names</strong> - "my header" (causes errors)</li>
            <li><strong>Starting with number</strong> - "1st-section" (invalid)</li>
            <li><strong>Special characters</strong> - "section#1", "header@top" (avoid !@#$%)</li>
            <li><strong>Inconsistent style</strong> - Mixing kebab-case, camelCase, snake_case</li>
            <li><strong>Too generic</strong> - "container", "wrapper", "box" everywhere</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Best Practices Summary */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Quick Reference</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <div className="space-y-2 mt-2">
            <div><strong>Classes:</strong> <code>user-profile</code>, <code>nav-menu</code>, <code>product-card</code></div>
            <div><strong>IDs:</strong> <code>main-header</code>, <code>footer-section</code>, <code>contact-form</code></div>
            <div><strong>Files:</strong> <code>about-us.html</code>, <code>contact-form.html</code>, <code>product-page.html</code></div>
            <div><strong>Data Attributes:</strong> <code>data-user-id</code>, <code>data-product-name</code></div>
            <div><strong>BEM:</strong> <code>card</code>, <code>card__title</code>, <code>card--featured</code></div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
