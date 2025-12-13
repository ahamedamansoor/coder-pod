'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Target, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Code2, Search
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssAttributeSelectorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssAttributeSelectors({ onOpenWebPlayground }: CssAttributeSelectorsProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Target}
        category="CSS · Advanced Selectors"
        title="Attribute Selectors"
        description="Target elements based on their HTML attributes"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Attribute Selectors</CardTitle>
              <CardDescription className="text-base">Select elements by their attributes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Attribute Selectors = HTML Attributes!</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Target elements based on their attributes like <code>type</code>, <code>href</code>, <code>data-*</code>, 
              or any custom attribute. Super powerful for forms and links! 🎯
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-3">Basic Syntax</h3>
            <div className="bg-blue-900 dark:bg-blue-950 p-4 rounded-lg">
              <code className="text-sm text-blue-100 block">
{`/* Select elements WITH an attribute */
[attr] { }

/* Select elements with EXACT value */
[attr="value"] { }

/* Select elements with value in list */
[attr~="value"] { }`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            7 Attribute Selectors
          </CardTitle>
          <CardDescription>All the ways to match attributes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                selector: '[attr]',
                name: 'Has Attribute',
                desc: 'Element has the attribute (any value)',
                example: '[disabled]',
                matches: '<button disabled>',
                color: 'blue'
              },
              {
                selector: '[attr="value"]',
                name: 'Exact Match',
                desc: 'Attribute equals exact value',
                example: '[type="text"]',
                matches: '<input type="text">',
                color: 'green'
              },
              {
                selector: '[attr~="value"]',
                name: 'Word Match',
                desc: 'Value in space-separated list',
                example: '[class~="active"]',
                matches: '<div class="btn active">',
                color: 'purple'
              },
              {
                selector: '[attr|="value"]',
                name: 'Prefix Match',
                desc: 'Starts with value followed by hyphen',
                example: '[lang|="en"]',
                matches: '<html lang="en-US">',
                color: 'pink'
              },
              {
                selector: '[attr^="value"]',
                name: 'Starts With',
                desc: 'Attribute starts with value',
                example: '[href^="https"]',
                matches: '<a href="https://...">',
                color: 'orange'
              },
              {
                selector: '[attr$="value"]',
                name: 'Ends With',
                desc: 'Attribute ends with value',
                example: '[href$=".pdf"]',
                matches: '<a href="file.pdf">',
                color: 'red'
              },
              {
                selector: '[attr*="value"]',
                name: 'Contains',
                desc: 'Attribute contains value anywhere',
                example: '[href*="google"]',
                matches: '<a href="https://google.com">',
                color: 'cyan'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>
                    {item.selector}
                  </Badge>
                  <span className="font-bold text-sm">{item.name}</span>
                </div>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold mb-1">Example:</p>
                    <code className={`text-xs bg-${item.color}-900 dark:bg-${item.color}-950 text-${item.color}-100 px-2 py-1 rounded block`}>
                      {item.example}
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1">Matches:</p>
                    <code className={`text-xs bg-${item.color}-900 dark:bg-${item.color}-950 text-${item.color}-100 px-2 py-1 rounded block`}>
                      {item.matches}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See attribute selectors in action</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #434190 0%, #5a3d7a 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1a1a2e;
        color: #e5e5e5;
      }
    }
    
    h1 {
      text-align: center;
      color: #667eea;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .section {
      margin-bottom: 30px;
    }
    
    .label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 10px;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      .label {
        color: #a78bfa;
      }
    }
    
    /* [type="text"] - Exact match */
    input[type="text"] {
      border: 2px solid #667eea;
      background: #ede9fe;
    }
    
    /* [type="email"] - Exact match */
    input[type="email"] {
      border: 2px solid #10b981;
      background: #d1fae5;
    }
    
    /* [required] - Has attribute */
    input[required] {
      border-left: 4px solid #ef4444;
    }
    
    /* [disabled] - Has attribute */
    input[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    /* [href^="https"] - Starts with */
    a[href^="https"] {
      color: #10b981;
    }
    
    a[href^="https"]::before {
      content: "🔒 ";
    }
    
    /* [href$=".pdf"] - Ends with */
    a[href$=".pdf"] {
      color: #ef4444;
    }
    
    a[href$=".pdf"]::after {
      content: " 📄";
    }
    
    /* [href*="google"] - Contains */
    a[href*="google"] {
      background: #fef3c7;
      padding: 2px 6px;
      border-radius: 4px;
      text-decoration: none;
    }
    
    @media (prefers-color-scheme: dark) {
      a[href*="google"] {
        background: #78350f;
      }
    }
    
    /* [data-priority="high"] - Custom attributes */
    [data-priority="high"] {
      border-left: 4px solid #ef4444;
      background: #fee2e2;
      padding: 10px;
      margin: 5px 0;
      border-radius: 4px;
    }
    
    @media (prefers-color-scheme: dark) {
      [data-priority="high"] {
        background: #7f1d1d;
      }
    }
    
    [data-priority="low"] {
      border-left: 4px solid #10b981;
      background: #d1fae5;
      padding: 10px;
      margin: 5px 0;
      border-radius: 4px;
    }
    
    @media (prefers-color-scheme: dark) {
      [data-priority="low"] {
        background: #064e3b;
      }
    }
    
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 6px;
      border: 2px solid #e5e7eb;
      font-size: 14px;
    }
    
    @media (prefers-color-scheme: dark) {
      input {
        background: #374151;
        border-color: #4b5563;
        color: white;
      }
    }
    
    a {
      display: block;
      margin: 8px 0;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Attribute Selectors</h1>
    
    <div class="section">
      <div class="label">[type="..."] - Different input types</div>
      <input type="text" placeholder="Text input (purple border)" required>
      <input type="email" placeholder="Email input (green border)" required>
      <input type="text" placeholder="Disabled input" disabled>
    </div>
    
    <div class="section">
      <div class="label">[href^="https"] - Secure links with 🔒</div>
      <a href="https://example.com">Secure HTTPS Link</a>
      <a href="http://example.com">Regular HTTP Link</a>
    </div>
    
    <div class="section">
      <div class="label">[href$=".pdf"] - PDF links with 📄</div>
      <a href="document.pdf">Download PDF</a>
      <a href="page.html">Regular HTML Link</a>
    </div>
    
    <div class="section">
      <div class="label">[href*="google"] - Contains "google"</div>
      <a href="https://google.com">Google Homepage</a>
      <a href="https://youtube.com">YouTube</a>
    </div>
    
    <div class="section">
      <div class="label">[data-priority] - Custom data attributes</div>
      <div data-priority="high">⚠️ High Priority Task</div>
      <div data-priority="low">✅ Low Priority Task</div>
    </div>
  </div>
</body>
</html>`}
            title="Attribute Selectors Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Search className="w-6 h-6 text-green-600 dark:text-green-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Practical examples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Form Input Types', selector: 'input[type="email"]', desc: 'Style different input types' },
            { use: 'External Links', selector: 'a[href^="http"]', desc: 'Target external links' },
            { use: 'File Types', selector: 'a[href$=".pdf"]', desc: 'Style PDF/ZIP links' },
            { use: 'Required Fields', selector: 'input[required]', desc: 'Highlight required inputs' },
            { use: 'Disabled Elements', selector: '[disabled]', desc: 'Style disabled state' },
            { use: 'Data Attributes', selector: '[data-state="active"]', desc: 'Custom attribute states' },
            { use: 'Language', selector: '[lang|="en"]', desc: 'Target language variants' },
            { use: 'Search Links', selector: 'a[href*="search"]', desc: 'Links containing "search"' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-green-900 dark:text-green-100">{item.use}</p>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-1">{item.desc}</p>
                </div>
                <code className="text-xs bg-green-900 dark:bg-green-950 text-green-100 px-2 py-1 rounded whitespace-nowrap">
                  {item.selector}
                </code>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Case Sensitivity
          </CardTitle>
          <CardDescription>Case-insensitive matching</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Add <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">i</code> flag 
            for case-insensitive matching!
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700">
            <div className="bg-blue-900 dark:bg-blue-950 p-5 rounded-lg mb-3">
              <code className="text-sm text-blue-100 block">
{`/* Case-sensitive (default) */
[href$=".PDF"] { }  /* Only matches .PDF */

/* Case-insensitive with 'i' flag */
[href$=".pdf" i] { }  /* Matches .pdf, .PDF, .Pdf */`}
              </code>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Perfect for file extensions and search terms!
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>[attr]</strong> - has attribute, <strong>[attr="val"]</strong> - exact match</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>^</strong> starts with, <strong>$</strong> ends with, <strong>*</strong> contains</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use <strong>i</strong> flag for case-insensitive matching</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Perfect for <strong>forms</strong>, <strong>links</strong>, and <strong>data attributes</strong>!</span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
