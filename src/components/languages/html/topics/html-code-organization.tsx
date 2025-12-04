'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FolderTree, Code, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlCodeOrganizationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlCodeOrganization({ onOpenWebPlayground }: HtmlCodeOrganizationProps) {
  
  const cleanCodeExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clean HTML Code Organization</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%); }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #3b82f6; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #60a5fa; }
    
    .code-examples {
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
      font-size: 0.75rem;
      line-height: 1.6;
      overflow-x: auto;
    }
    :root.dark pre { background: #0f172a; }
    
    .comment { color: #9ca3af; font-style: italic; }
    .tag { color: #60a5fa; }
    .attr { color: #34d399; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📁 Clean Code Organization</h1>
    
    <!-- Example 1: Indentation -->
    <div class="code-examples">
      <div class="example-box bad">
        <h3>❌ Poor Indentation</h3>
        <pre>&lt;header&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
&lt;article&gt;
&lt;h1&gt;Title&lt;/h1&gt;
&lt;p&gt;Content&lt;/p&gt;
&lt;/article&gt;
&lt;/main&gt;</pre>
        <p style="color: #991b1b; margin-top: 10px; font-size: 0.9rem;">
          Hard to read hierarchy
        </p>
      </div>
      
      <div class="example-box good">
        <h3>✅ Proper Indentation</h3>
        <pre>&lt;header&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;Content&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;</pre>
        <p style="color: #065f46; margin-top: 10px; font-size: 0.9rem;">
          Clear structure, easy to read
        </p>
      </div>
    </div>
    
    <!-- Example 2: Comments -->
    <div class="code-examples">
      <div class="example-box bad">
        <h3>❌ No Comments</h3>
        <pre>&lt;section&gt;
  &lt;div class="widget-1"&gt;...&lt;/div&gt;
  &lt;div class="widget-2"&gt;...&lt;/div&gt;
  &lt;div class="widget-3"&gt;...&lt;/div&gt;
&lt;/section&gt;

&lt;section&gt;
  &lt;div class="module-a"&gt;...&lt;/div&gt;
  &lt;div class="module-b"&gt;...&lt;/div&gt;
&lt;/section&gt;</pre>
        <p style="color: #991b1b; margin-top: 10px; font-size: 0.9rem;">
          What are these sections for?
        </p>
      </div>
      
      <div class="example-box good">
        <h3>✅ Helpful Comments</h3>
        <pre><span class="comment">&lt;!-- Dashboard Widgets --&gt;</span>
&lt;section&gt;
  &lt;div class="widget-1"&gt;...&lt;/div&gt;
  &lt;div class="widget-2"&gt;...&lt;/div&gt;
  &lt;div class="widget-3"&gt;...&lt;/div&gt;
&lt;/section&gt;

<span class="comment">&lt;!-- User Profile Modules --&gt;</span>
&lt;section&gt;
  &lt;div class="module-a"&gt;...&lt;/div&gt;
  &lt;div class="module-b"&gt;...&lt;/div&gt;
&lt;/section&gt;</pre>
        <p style="color: #065f46; margin-top: 10px; font-size: 0.9rem;">
          Clear purpose, easier to navigate
        </p>
      </div>
    </div>
    
    <!-- Example 3: Line Length -->
    <div class="code-examples">
      <div class="example-box bad">
        <h3>❌ Long Lines</h3>
        <pre>&lt;button onclick="handleSubmit(event)" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#submitModal" aria-label="Submit form"&gt;Submit&lt;/button&gt;</pre>
        <p style="color: #991b1b; margin-top: 10px; font-size: 0.9rem;">
          Hard to read, scrolling needed
        </p>
      </div>
      
      <div class="example-box good">
        <h3>✅ Wrapped Attributes</h3>
        <pre>&lt;button
  onclick="handleSubmit(event)"
  class="btn btn-primary btn-lg"
  data-toggle="modal"
  data-target="#submitModal"
  aria-label="Submit form"&gt;
  Submit
&lt;/button&gt;</pre>
        <p style="color: #065f46; margin-top: 10px; font-size: 0.9rem;">
          Each attribute visible, easy to edit
        </p>
      </div>
    </div>
    
    <div style="background: #eff6ff; padding: 25px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 30px;">
      <h3 style="color: #1e40af; margin-bottom: 15px;">📋 Organization Checklist</h3>
      <ul style="list-style: none; line-height: 2; color: #475569;">
        <li>✓ Consistent 2-space or 4-space indentation</li>
        <li>✓ One declaration per line for multiple attributes</li>
        <li>✓ Comments for major sections</li>
        <li>✓ Blank lines between major blocks</li>
        <li>✓ Lowercase tag and attribute names</li>
        <li>✓ Quotes around all attribute values</li>
        <li>✓ Logical ordering (header → main → footer)</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FolderTree}
        category="HTML · Best Practices"
        title="What is Code Organization?"
        description="Learn how to structure and format HTML for maximum readability and maintainability"
        colorTheme="blue"
      />

      {/* Clean Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Clean Code Organization
          </CardTitle>
          <CardDescription>
            Examples of well-organized vs poorly organized HTML
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={cleanCodeExample}
            title="Code Organization Examples"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Organization Principles */}
      <Card>
        <CardHeader>
          <CardTitle>HTML Organization Principles</CardTitle>
          <CardDescription>
            Key principles for organizing HTML code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">1. Consistent Indentation</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use 2 or 4 spaces (never tabs and spaces mixed). Each nested level adds one indent.
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;div&gt;{'\n  '}&lt;p&gt;Text&lt;/p&gt;{'\n'}&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">2. One Line Per Attribute (for many attributes)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                When element has 3+ attributes, put each on its own line
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;input{'\n  '}type="text"{'\n  '}id="name"{'\n  '}required&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">3. Meaningful Comments</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Comment major sections, but don't over-comment obvious things
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;!-- Navigation --&gt;{'\n'}&lt;nav&gt;...&lt;/nav&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">4. Blank Lines for Separation</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Add blank line between major sections for visual separation
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;/header&gt;{'\n\n'}&lt;main&gt;{'\n\n'}&lt;/main&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">5. Lowercase Everything</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Tag names and attributes should be lowercase for consistency
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                &lt;div class="container"&gt; not &lt;DIV CLASS="container"&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">6. Quote All Attributes</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Always use quotes (double quotes preferred) around attribute values
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                type="text" not type=text
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Organization */}
      <Card>
        <CardHeader>
          <CardTitle>File Organization</CardTitle>
          <CardDescription>
            How to organize HTML files in your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-muted rounded-lg font-mono text-sm">
            <div className="space-y-1">
              <div>📁 project/</div>
              <div className="ml-4">📄 index.html <span className="text-muted-foreground">// Homepage</span></div>
              <div className="ml-4">📁 pages/</div>
              <div className="ml-8">📄 about.html</div>
              <div className="ml-8">📄 contact.html</div>
              <div className="ml-8">📄 products.html</div>
              <div className="ml-4">📁 partials/ <span className="text-muted-foreground">// Reusable components</span></div>
              <div className="ml-8">📄 header.html</div>
              <div className="ml-8">📄 footer.html</div>
              <div className="ml-8">📄 nav.html</div>
              <div className="ml-4">📁 assets/</div>
              <div className="ml-8">📁 css/</div>
              <div className="ml-8">📁 js/</div>
              <div className="ml-8">📁 images/</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Code Organization Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Consistent indentation</strong> - 2 or 4 spaces, never tabs</li>
            <li><strong>Logical structure</strong> - Header → Main → Footer</li>
            <li><strong>Comment major sections</strong> - Help others understand code</li>
            <li><strong>Blank lines for spacing</strong> - Separate major blocks</li>
            <li><strong>Lowercase tags/attributes</strong> - Consistent naming</li>
            <li><strong>Quote all attributes</strong> - Use double quotes</li>
            <li><strong>One line per attribute</strong> - When many attributes</li>
            <li><strong>Consistent naming</strong> - Follow a naming convention</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Organization Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>No indentation</strong> - Everything at same level</li>
            <li><strong>Mixed tabs and spaces</strong> - Inconsistent indentation</li>
            <li><strong>No comments</strong> - Hard to understand sections</li>
            <li><strong>Long lines</strong> - Horizontal scrolling needed</li>
            <li><strong>Uppercase tags</strong> - &lt;DIV&gt; instead of &lt;div&gt;</li>
            <li><strong>No quotes</strong> - Unquoted attribute values</li>
            <li><strong>Over-commenting</strong> - Too many obvious comments</li>
            <li><strong>Inconsistent formatting</strong> - Different styles in same file</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Tools */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Code Formatting Tools</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          Use automatic formatters to maintain consistency:
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Prettier</strong> - Auto-format HTML, CSS, JavaScript</li>
            <li><strong>VS Code Format Document</strong> - Built-in formatter (Shift+Alt+F)</li>
            <li><strong>EditorConfig</strong> - Define coding styles across editors</li>
            <li><strong>HTMLHint</strong> - Linting for HTML best practices</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
