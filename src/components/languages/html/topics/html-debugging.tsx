'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Bug, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlDebuggingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlDebugging({ onOpenWebPlayground }: HtmlDebuggingProps) {
  
  const debuggingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Debugging Techniques</title>
  
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
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2.5rem; color: #ef4444; margin-bottom: 30px; text-align: center; }
    :root.dark h1 { color: #f87171; }
    
    .tool-card {
      background: #fef2f2;
      padding: 25px;
      border-radius: 12px;
      border-left: 4px solid #ef4444;
      margin: 20px 0;
    }
    :root.dark .tool-card { background: #7f1d1d; }
    
    .tool-card h2 {
      color: #991b1b;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    :root.dark .tool-card h2 { color: #fca5a5; }
    
    .debug-steps {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 15px 0;
    }
    :root.dark .debug-steps { background: #334155; }
    
    .debug-steps ol {
      list-style: decimal;
      padding-left: 20px;
      line-height: 2;
      color: #4b5563;
    }
    :root.dark .debug-steps ol { color: #cbd5e1; }
    
    .technique {
      background: #eff6ff;
      padding: 20px;
      border-radius: 8px;
      margin: 15px 0;
      border: 2px solid #3b82f6;
    }
    :root.dark .technique { background: #1e3a8a; border-color: #60a5fa; }
    
    .technique h3 {
      color: #1e40af;
      margin-bottom: 10px;
    }
    :root.dark .technique h3 { color: #93c5fd; }
    
    .technique code {
      background: #1f2937;
      color: #22d3ee;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9rem;
    }
    
    .error-example {
      background: #fef2f2;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #ef4444;
      font-family: monospace;
      color: #991b1b;
      margin: 10px 0;
    }
    :root.dark .error-example { background: #450a0a; color: #fecaca; }
    
    .shortcut-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin: 20px 0;
    }
    
    .shortcut-item {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 8px;
    }
    :root.dark .shortcut-item { background: #374151; }
    
    .shortcut-item strong {
      color: #1f2937;
      display: block;
      margin-bottom: 5px;
    }
    :root.dark .shortcut-item strong { color: #f3f4f6; }
    
    .shortcut-item code {
      background: #e5e7eb;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.85rem;
    }
    :root.dark .shortcut-item code { background: #1f2937; color: #22d3ee; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🐛 HTML Debugging Guide</h1>
    
    <!-- Browser DevTools -->
    <div class="tool-card">
      <h2>1. Browser DevTools (F12)</h2>
      <p style="color: #6b7280; margin-bottom: 15px;">
        Your primary debugging tool - available in all modern browsers
      </p>
      
      <div class="debug-steps">
        <ol>
          <li>Press <strong>F12</strong> or right-click → Inspect</li>
          <li>Use <strong>Elements</strong> tab to inspect HTML structure</li>
          <li>Check <strong>Console</strong> for errors and warnings</li>
          <li>View <strong>Network</strong> tab for loading issues</li>
          <li>Use <strong>Lighthouse</strong> for performance audits</li>
        </ol>
      </div>
    </div>
    
    <!-- Common Debugging Techniques -->
    <div class="technique">
      <h3>📍 Inspect Element</h3>
      <p style="color: #475569; margin-bottom: 10px;">
        Right-click any element → Inspect to see its HTML and CSS
      </p>
      <code>Right-click → Inspect Element</code>
    </div>
    
    <div class="technique">
      <h3>🔍 Console Errors</h3>
      <p style="color: #475569; margin-bottom: 10px;">
        Check Console tab (F12) for HTML/JavaScript errors
      </p>
      <div class="error-example">
        ❌ Uncaught TypeError: Cannot read property 'value' of null
        <br>→ Element with that ID doesn't exist
      </div>
    </div>
    
    <div class="technique">
      <h3>✏️ Edit Live HTML</h3>
      <p style="color: #475569; margin-bottom: 10px;">
        Double-click any text in Elements tab to edit and test changes
      </p>
      <code>Elements tab → Double-click text → Edit</code>
    </div>
    
    <div class="technique">
      <h3>🎨 Highlight Elements</h3>
      <p style="color: #475569; margin-bottom: 10px;">
        Hover over elements in DevTools to highlight them on the page
      </p>
      <code>Hover in Elements tab → See highlight on page</code>
    </div>
    
    <!-- Keyboard Shortcuts -->
    <h2 style="color: #ef4444; margin-top: 40px; margin-bottom: 20px;">
      ⌨️ DevTools Shortcuts
    </h2>
    
    <div class="shortcut-grid">
      <div class="shortcut-item">
        <strong>Open DevTools</strong>
        <code>F12 or Ctrl+Shift+I</code>
      </div>
      
      <div class="shortcut-item">
        <strong>Inspect Element</strong>
        <code>Ctrl+Shift+C</code>
      </div>
      
      <div class="shortcut-item">
        <strong>Console</strong>
        <code>Ctrl+Shift+J</code>
      </div>
      
      <div class="shortcut-item">
        <strong>Refresh Page</strong>
        <code>Ctrl+R or F5</code>
      </div>
      
      <div class="shortcut-item">
        <strong>Hard Refresh</strong>
        <code>Ctrl+Shift+R</code>
      </div>
      
      <div class="shortcut-item">
        <strong>View Source</strong>
        <code>Ctrl+U</code>
      </div>
    </div>
    
    <!-- Validation -->
    <div style="background: #fef3c7; padding: 20px; border-radius: 12px; border-left: 4px solid #f59e0b; margin-top: 30px;">
      <h3 style="color: #78350f; margin-bottom: 10px;">🔧 Validation Tools</h3>
      <ul style="list-style: none; line-height: 2; color: #92400e;">
        <li>✓ W3C Markup Validator (validator.w3.org)</li>
        <li>✓ HTML Hint (VS Code extension)</li>
        <li>✓ Browser Console (F12 → Console)</li>
        <li>✓ Lighthouse Audit (F12 → Lighthouse)</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Bug}
        category="HTML · Best Practices"
        title="What is HTML Debugging?"
        description="Learn how to find and fix HTML errors using browser tools"
        colorTheme="blue"
      />

      {/* Debugging Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bug className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            HTML Debugging Techniques
          </CardTitle>
          <CardDescription>
            Tools and methods for debugging HTML issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={debuggingExample}
            title="Debugging Guide"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common Errors */}
      <Card>
        <CardHeader>
          <CardTitle>Common HTML Errors & Solutions</CardTitle>
          <CardDescription>
            Frequent issues and how to fix them
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Missing Closing Tags</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Elements not properly closed cause layout issues
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2">
                ❌ &lt;div&gt;&lt;p&gt;Text
              </code>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                ✅ &lt;div&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Duplicate IDs</h4>
              <p className="text-sm text-muted-foreground mb-2">
                IDs must be unique - use classes for multiple elements
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2">
                ❌ &lt;div id="box"&gt;&lt;/div&gt;&lt;div id="box"&gt;&lt;/div&gt;
              </code>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                ✅ &lt;div class="box"&gt;&lt;/div&gt;&lt;div class="box"&gt;&lt;/div&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Missing Alt Attribute</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Images must have alt text for accessibility
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2">
                ❌ &lt;img src="photo.jpg"&gt;
              </code>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                ✅ &lt;img src="photo.jpg" alt="Description"&gt;
              </code>
            </div>
            
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Invalid Nesting</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Block elements cannot go inside inline elements
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block mb-2">
                ❌ &lt;a&gt;&lt;div&gt;Link&lt;/div&gt;&lt;/a&gt;
              </code>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded block">
                ✅ &lt;a&gt;&lt;span&gt;Link&lt;/span&gt;&lt;/a&gt;
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>HTML Debugging Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use Browser DevTools</strong> - F12 to inspect and debug</li>
            <li><strong>Check Console first</strong> - Errors show up here immediately</li>
            <li><strong>Validate HTML</strong> - Use W3C validator to catch errors</li>
            <li><strong>Inspect elements</strong> - Right-click → Inspect to see structure</li>
            <li><strong>Test incrementally</strong> - Add code gradually, test often</li>
            <li><strong>Use meaningful IDs/classes</strong> - Easier to find in DevTools</li>
            <li><strong>Comment your code</strong> - Helps identify sections quickly</li>
            <li><strong>Hard refresh</strong> - Ctrl+Shift+R to clear cache</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Debugging Workflow */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Debugging Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Not checking Console</strong> - Errors are logged there</li>
            <li><strong>Cache issues</strong> - Old version cached, use hard refresh</li>
            <li><strong>Typos in IDs/classes</strong> - Case-sensitive, check spelling</li>
            <li><strong>Wrong file path</strong> - Images/links not loading due to path errors</li>
            <li><strong>Missing DOCTYPE</strong> - Causes quirks mode rendering</li>
            <li><strong>Unclosed tags</strong> - Layout breaks completely</li>
            <li><strong>Browser-specific issues</strong> - Test in multiple browsers</li>
            <li><strong>Not using validation</strong> - Errors go unnoticed</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Tools */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Debugging Tools</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Chrome DevTools</strong> - F12, most comprehensive debugging</li>
            <li><strong>Firefox Developer Tools</strong> - Great for CSS debugging</li>
            <li><strong>W3C Validator</strong> - validator.w3.org for HTML validation</li>
            <li><strong>HTMLHint (VS Code)</strong> - Real-time error detection</li>
            <li><strong>Lighthouse</strong> - Performance and accessibility audits</li>
            <li><strong>Wave</strong> - Accessibility evaluation tool</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
