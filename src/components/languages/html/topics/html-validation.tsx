'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { CheckCircle, XCircle, AlertTriangle, Info, Shield } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlValidationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlValidation({ onOpenWebPlayground }: HtmlValidationProps) {
  
  const validVsInvalidExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Validation Examples</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #064e3b 0%, #065f46 100%); }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #10b981; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #34d399; }
    
    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 30px 0;
    }
    
    .example-card {
      padding: 25px;
      border-radius: 12px;
      border: 3px solid;
    }
    
    .invalid { background: #fef2f2; border-color: #ef4444; }
    .valid { background: #f0fdf4; border-color: #10b981; }
    :root.dark .invalid { background: #7f1d1d; border-color: #f87171; }
    :root.dark .valid { background: #064e3b; border-color: #34d399; }
    
    .example-card h3 {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.3rem;
    }
    
    .invalid h3 { color: #991b1b; }
    .valid h3 { color: #065f46; }
    :root.dark .invalid h3 { color: #fca5a5; }
    :root.dark .valid h3 { color: #6ee7b7; }
    
    .code-block {
      background: #1f2937;
      color: #e5e7eb;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      margin: 15px 0;
      line-height: 1.6;
    }
    :root.dark .code-block { background: #0f172a; }
    
    .error-tag { color: #f87171; }
    .success-tag { color: #34d399; }
    
    .issue-list {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
    }
    :root.dark .issue-list { background: #334155; }
    
    .issue-list ul {
      list-style: none;
      line-height: 2;
    }
    
    .issue-list li {
      padding-left: 25px;
      position: relative;
      color: #4b5563;
    }
    :root.dark .issue-list li { color: #cbd5e1; }
    
    .invalid .issue-list li::before {
      content: "✗";
      position: absolute;
      left: 0;
      color: #ef4444;
      font-weight: bold;
    }
    
    .valid .issue-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Valid vs ❌ Invalid HTML</h1>
    
    <!-- Example 1: DOCTYPE -->
    <div class="comparison">
      <div class="example-card invalid">
        <h3>❌ Missing DOCTYPE</h3>
        <div class="code-block">
<span class="error-tag">&lt;html&gt;</span>
  &lt;head&gt;
    &lt;title&gt;Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Content
  &lt;/body&gt;
&lt;/html&gt;
        </div>
        <div class="issue-list">
          <ul>
            <li>Triggers quirks mode in browsers</li>
            <li>Inconsistent rendering</li>
            <li>Modern CSS features may not work</li>
          </ul>
        </div>
      </div>
      
      <div class="example-card valid">
        <h3>✅ Proper DOCTYPE</h3>
        <div class="code-block">
<span class="success-tag">&lt;!DOCTYPE html&gt;</span>
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Content
  &lt;/body&gt;
&lt;/html&gt;
        </div>
        <div class="issue-list">
          <ul>
            <li>Triggers standards mode</li>
            <li>Consistent rendering across browsers</li>
            <li>All modern features work correctly</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Example 2: Nested Tags -->
    <div class="comparison">
      <div class="example-card invalid">
        <h3>❌ Improper Nesting</h3>
        <div class="code-block">
<span class="error-tag">&lt;p&gt;This is &lt;strong&gt;bold&lt;/p&gt;&lt;/strong&gt;</span>

<span class="error-tag">&lt;a href="#"&gt;&lt;div&gt;Link&lt;/div&gt;&lt;/a&gt;</span>

<span class="error-tag">&lt;ul&gt;&lt;div&gt;Item&lt;/div&gt;&lt;/ul&gt;</span>
        </div>
        <div class="issue-list">
          <ul>
            <li>Tags closed in wrong order</li>
            <li>Block elements inside inline elements</li>
            <li>Invalid parent-child relationships</li>
          </ul>
        </div>
      </div>
      
      <div class="example-card valid">
        <h3>✅ Proper Nesting</h3>
        <div class="code-block">
<span class="success-tag">&lt;p&gt;This is &lt;strong&gt;bold&lt;/strong&gt;&lt;/p&gt;</span>

<span class="success-tag">&lt;a href="#"&gt;&lt;span&gt;Link&lt;/span&gt;&lt;/a&gt;</span>

<span class="success-tag">&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</span>
        </div>
        <div class="issue-list">
          <ul>
            <li>Tags closed in correct order</li>
            <li>Proper element hierarchy</li>
            <li>Valid parent-child relationships</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Example 3: Attributes -->
    <div class="comparison">
      <div class="example-card invalid">
        <h3>❌ Invalid Attributes</h3>
        <div class="code-block">
<span class="error-tag">&lt;img src="photo.jpg"&gt;</span>

<span class="error-tag">&lt;input type=text&gt;</span>

<span class="error-tag">&lt;div onclick='alert("Hi")'&gt;&lt;/div&gt;</span>
        </div>
        <div class="issue-list">
          <ul>
            <li>Missing alt attribute</li>
            <li>Unquoted attribute values</li>
            <li>Inconsistent quote styles</li>
          </ul>
        </div>
      </div>
      
      <div class="example-card valid">
        <h3>✅ Valid Attributes</h3>
        <div class="code-block">
<span class="success-tag">&lt;img src="photo.jpg" alt="Description"&gt;</span>

<span class="success-tag">&lt;input type="text"&gt;</span>

<span class="success-tag">&lt;button onclick="handleClick()"&gt;Click&lt;/button&gt;</span>
        </div>
        <div class="issue-list">
          <ul>
            <li>All required attributes present</li>
            <li>Quoted attribute values</li>
            <li>Consistent double quotes</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div style="background: #fef3c7; padding: 25px; border-radius: 12px; margin-top: 30px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #78350f; margin-bottom: 15px;">🔧 Validation Tools</h3>
      <ul style="list-style: none; line-height: 2; color: #92400e;">
        <li>✓ W3C Markup Validator (validator.w3.org)</li>
        <li>✓ Browser DevTools (Console errors)</li>
        <li>✓ HTML Hint (VS Code extension)</li>
        <li>✓ ESLint with HTML plugin</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  const commonErrorsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Common HTML Validation Errors</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%); }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #ef4444; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #f87171; }
    
    .error-card {
      background: #fef2f2;
      padding: 25px;
      border-radius: 12px;
      border-left: 4px solid #ef4444;
      margin: 20px 0;
    }
    :root.dark .error-card { background: #7f1d1d; border-left-color: #f87171; }
    
    .error-card h3 {
      color: #991b1b;
      margin-bottom: 15px;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    :root.dark .error-card h3 { color: #fca5a5; }
    
    .code-bad {
      background: #7f1d1d;
      color: #fca5a5;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 0.85rem;
      margin: 10px 0;
      overflow-x: auto;
    }
    :root.dark .code-bad { background: #450a0a; color: #fecaca; }
    
    .fix {
      background: #dcfce7;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
      border-left: 4px solid #10b981;
    }
    :root.dark .fix { background: #064e3b; border-left-color: #34d399; }
    
    .fix strong { color: #059669; display: block; margin-bottom: 8px; }
    :root.dark .fix strong { color: #6ee7b7; }
    
    .fix code {
      background: #166534;
      color: #bbf7d0;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.85rem;
      display: block;
      margin-top: 8px;
      overflow-x: auto;
    }
    :root.dark .fix code { background: #14532d; color: #d1fae5; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚠️ Top 10 HTML Validation Errors</h1>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">1️⃣</span> Missing DOCTYPE</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        The page will render in quirks mode without DOCTYPE.
      </p>
      <div class="code-bad">
&lt;html&gt;
  &lt;head&gt;...
      </div>
      <div class="fix">
        <strong>✅ Fix: Add DOCTYPE</strong>
        <code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">2️⃣</span> Missing Closing Tags</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        All non-void elements must have closing tags.
      </p>
      <div class="code-bad">
&lt;p&gt;Paragraph
&lt;div&gt;Content
      </div>
      <div class="fix">
        <strong>✅ Fix: Close all tags</strong>
        <code>&lt;p&gt;Paragraph&lt;/p&gt;
&lt;div&gt;Content&lt;/div&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">3️⃣</span> Duplicate IDs</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        IDs must be unique within the document.
      </p>
      <div class="code-bad">
&lt;div id="content"&gt;...&lt;/div&gt;
&lt;div id="content"&gt;...&lt;/div&gt;
      </div>
      <div class="fix">
        <strong>✅ Fix: Use unique IDs or classes</strong>
        <code>&lt;div id="content-1"&gt;...&lt;/div&gt;
&lt;div id="content-2"&gt;...&lt;/div&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">4️⃣</span> Missing Alt Attribute</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        All images must have alt attributes for accessibility.
      </p>
      <div class="code-bad">
&lt;img src="photo.jpg"&gt;
      </div>
      <div class="fix">
        <strong>✅ Fix: Add alt attribute</strong>
        <code>&lt;img src="photo.jpg" alt="Description"&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">5️⃣</span> Invalid Nesting</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        Block elements inside inline elements are invalid.
      </p>
      <div class="code-bad">
&lt;a href="#"&gt;&lt;div&gt;Link&lt;/div&gt;&lt;/a&gt;
      </div>
      <div class="fix">
        <strong>✅ Fix: Use inline elements or make link block</strong>
        <code>&lt;a href="#"&gt;&lt;span&gt;Link&lt;/span&gt;&lt;/a&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">6️⃣</span> Obsolete Elements</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        Using deprecated HTML elements.
      </p>
      <div class="code-bad">
&lt;center&gt;Text&lt;/center&gt;
&lt;font color="red"&gt;Text&lt;/font&gt;
      </div>
      <div class="fix">
        <strong>✅ Fix: Use CSS instead</strong>
        <code>&lt;div style="text-align: center"&gt;Text&lt;/div&gt;
&lt;span style="color: red"&gt;Text&lt;/span&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">7️⃣</span> Missing lang Attribute</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        The html element should specify the page language.
      </p>
      <div class="code-bad">
&lt;html&gt;
      </div>
      <div class="fix">
        <strong>✅ Fix: Add lang attribute</strong>
        <code>&lt;html lang="en"&gt;</code>
      </div>
    </div>
    
    <div class="error-card">
      <h3><span style="font-size: 1.5rem;">8️⃣</span> Unescaped Special Characters</h3>
      <p style="color: #6b7280; margin-bottom: 10px;">
        &lt;, &gt;, & must be escaped in content.
      </p>
      <div class="code-bad">
&lt;p&gt;5 &lt; 10 & 10 &gt; 5&lt;/p&gt;
      </div>
      <div class="fix">
        <strong>✅ Fix: Use HTML entities</strong>
        <code>&lt;p&gt;5 &amp;lt; 10 &amp;amp; 10 &amp;gt; 5&lt;/p&gt;</code>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Shield}
        category="HTML · Best Practices"
        title="What is HTML Validation?"
        description="Learn why valid HTML matters and how to write error-free markup"
        colorTheme="blue"
      />

      {/* Valid vs Invalid Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Valid vs Invalid HTML
          </CardTitle>
          <CardDescription>
            Compare correct and incorrect HTML patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={validVsInvalidExample}
            title="HTML Validation Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common Errors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Top Validation Errors
          </CardTitle>
          <CardDescription>
            Most common HTML validation mistakes and how to fix them
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={commonErrorsExample}
            title="Common HTML Errors"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Why Validation Matters */}
      <Card>
        <CardHeader>
          <CardTitle>Why HTML Validation Matters</CardTitle>
          <CardDescription>
            Benefits of writing valid, standards-compliant HTML
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🎯 Consistency</h4>
              <p className="text-sm text-muted-foreground">
                Valid HTML renders consistently across all browsers. Invalid HTML may work in one browser but break in another.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">♿ Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                Screen readers and assistive technologies rely on valid HTML structure to properly interpret content.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🔍 SEO</h4>
              <p className="text-sm text-muted-foreground">
                Search engines prefer valid HTML. Validation errors can hurt your search rankings.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🚀 Performance</h4>
              <p className="text-sm text-muted-foreground">
                Browsers don't need to guess or fix errors, resulting in faster rendering and better performance.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">🛠️ Maintainability</h4>
              <p className="text-sm text-muted-foreground">
                Valid code is easier to debug, update, and maintain. Future developers will thank you!
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">📱 Future-proof</h4>
              <p className="text-sm text-muted-foreground">
                Standards-compliant HTML works better with new browsers and devices as they're released.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>HTML Validation Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always include DOCTYPE</strong> - &lt;!DOCTYPE html&gt; at the very top</li>
            <li><strong>Close all tags</strong> - Except void elements (img, br, hr, input, meta)</li>
            <li><strong>Nest properly</strong> - Close tags in reverse order of opening</li>
            <li><strong>Quote attributes</strong> - Use double quotes consistently</li>
            <li><strong>Unique IDs</strong> - Never reuse an ID value on the same page</li>
            <li><strong>Include lang</strong> - Add lang="en" to html element</li>
            <li><strong>Required attributes</strong> - Add alt to images, type to inputs</li>
            <li><strong>Validate regularly</strong> - Use W3C validator during development</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Validation Tools */}
      <Card>
        <CardHeader>
          <CardTitle>HTML Validation Tools</CardTitle>
          <CardDescription>
            Tools to check your HTML for errors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🌐 W3C Markup Validator</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Official HTML validator from W3C. Upload file or validate by URL.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                https://validator.w3.org/
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">🔧 Browser DevTools</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Check Console tab for HTML errors and warnings
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                F12 → Console → Look for red errors
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">💻 HTMLHint (VS Code)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                VS Code extension that validates HTML as you type
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                ext install HTMLHint.vscode-htmlhint
              </code>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h4 className="font-semibold mb-2">⚡ Lighthouse</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Chrome DevTools audit tool checks HTML best practices
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                DevTools → Lighthouse → Generate report
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common HTML Validation Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>No DOCTYPE</strong> - Page renders in quirks mode</li>
            <li><strong>Unclosed tags</strong> - &lt;p&gt;Text without closing &lt;/p&gt;</li>
            <li><strong>Improper nesting</strong> - &lt;p&gt;&lt;div&gt;Text&lt;/div&gt;&lt;/p&gt;</li>
            <li><strong>Duplicate IDs</strong> - Same ID used multiple times</li>
            <li><strong>Missing alt on images</strong> - Breaks accessibility</li>
            <li><strong>Unquoted attributes</strong> - type=text instead of type="text"</li>
            <li><strong>Obsolete elements</strong> - Using &lt;center&gt;, &lt;font&gt;</li>
            <li><strong>Invalid characters</strong> - Not escaping &lt;, &gt;, &</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Standards Compliance</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All modern browsers (Chrome, Firefox, Safari, Edge) follow W3C HTML5 standards. Valid HTML ensures
          your site works correctly across all browsers without browser-specific hacks or workarounds.
        </AlertDescription>
      </Alert>
    </div>
  );
}
