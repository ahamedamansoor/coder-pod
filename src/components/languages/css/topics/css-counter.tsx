'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Hash, Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, ListOrdered, Binary
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssCounterProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssCounter({ onOpenWebPlayground }: CssCounterProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Hash}
        category="CSS · Advanced CSS"
        title="CSS Counters"
        description="Automatic numbering with counter-reset and counter-increment"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">CSS Counters</CardTitle>
              <CardDescription className="text-base">Automatic numbering system</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">CSS Counters = Auto Numbering! 🔢</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Create <strong>automatic numbering</strong> for headings, sections, lists, and more! 
              Perfect for documentation, articles, and nested numbering schemes.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { prop: 'counter-reset', icon: Binary, desc: 'Initialize counter' },
              { prop: 'counter-increment', icon: Hash, desc: 'Increase counter' },
              { prop: 'counter()', icon: ListOrdered, desc: 'Display counter' }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 text-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <code className="font-bold text-blue-700 dark:text-blue-400 text-sm">{item.prop}</code>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ListOrdered className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Counter Setup
          </CardTitle>
          <CardDescription>Three-step process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                step: '1. Reset',
                prop: 'counter-reset',
                code: 'counter-reset: section;',
                desc: 'Create and initialize counter to 0',
                color: 'blue'
              },
              {
                step: '2. Increment',
                prop: 'counter-increment',
                code: 'counter-increment: section;',
                desc: 'Increase counter value',
                color: 'green'
              },
              {
                step: '3. Display',
                prop: 'counter()',
                code: 'content: counter(section);',
                desc: 'Show counter value',
                color: 'purple'
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/20 border-2 border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`bg-${item.color}-600 text-white text-lg`}>{item.step}</Badge>
                  <code className="font-bold">{item.prop}</code>
                </div>
                <p className="text-sm mb-3">{item.desc}</p>
                <div className={`bg-${item.color}-900 dark:bg-${item.color}-950 p-3 rounded-lg`}>
                  <code className={`text-sm text-${item.color}-100`}>
                    {item.code}
                  </code>
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
            Complete Example
          </CardTitle>
          <CardDescription>Numbered sections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-300 dark:border-indigo-700">
            <div className="bg-indigo-900 dark:bg-indigo-950 p-5 rounded-lg">
              <code className="text-sm text-indigo-100 block">
{`/* Initialize counter */
body {
  counter-reset: section;
}

/* Increment counter */
h2 {
  counter-increment: section;
}

/* Display counter */
h2::before {
  content: "Section " counter(section) ": ";
  color: blue;
}

/* Result:
Section 1: Introduction
Section 2: Getting Started
Section 3: Advanced Topics
*/`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Binary className="w-6 h-6 text-green-600 dark:text-green-400" />
            Interactive Demo
          </CardTitle>
          <CardDescription>See counters in action</CardDescription>
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
      
      /* RESET COUNTERS */
      counter-reset: section subsection;
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
    
    /* SECTION COUNTER (H2) */
    h2 {
      counter-increment: section;
      counter-reset: subsection;
      color: #667eea;
      margin: 30px 0 15px;
      padding: 10px;
      background: #ede9fe;
      border-radius: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      h2 {
        color: #a78bfa;
        background: #4c1d95;
      }
    }
    
    h2::before {
      content: counter(section) ". ";
      font-weight: bold;
    }
    
    /* SUBSECTION COUNTER (H3) */
    h3 {
      counter-increment: subsection;
      color: #3b82f6;
      margin: 20px 0 10px 20px;
      padding: 8px;
      background: #dbeafe;
      border-radius: 6px;
    }
    
    @media (prefers-color-scheme: dark) {
      h3 {
        color: #93c5fd;
        background: #1e3a8a;
      }
    }
    
    h3::before {
      content: counter(section) "." counter(subsection) " ";
      font-weight: bold;
    }
    
    p {
      margin: 10px 0 10px 40px;
      color: #6b7280;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      p {
        color: #9ca3af;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔢 CSS Counters Demo</h1>
    
    <h2>Introduction</h2>
    <h3>What are counters?</h3>
    <p>CSS counters provide automatic numbering.</p>
    
    <h3>How they work</h3>
    <p>They use counter-reset, counter-increment, and counter().</p>
    
    <h2>Getting Started</h2>
    <h3>Basic setup</h3>
    <p>Initialize counters in the parent element.</p>
    
    <h3>Incrementing</h3>
    <p>Use counter-increment on elements to count.</p>
    
    <h2>Advanced Usage</h2>
    <h3>Nested counters</h3>
    <p>Counters can be nested for multi-level numbering.</p>
    
    <h3>Custom formatting</h3>
    <p>Use different number styles like roman numerals.</p>
  </div>
</body>
</html>`}
            title="CSS Counters Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Counter Styles
          </CardTitle>
          <CardDescription>Different numbering formats</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Use the second parameter of <code>counter()</code> for custom styles:
          </p>

          <div className="space-y-3">
            {[
              { style: 'decimal', result: '1, 2, 3', code: 'counter(section, decimal)' },
              { style: 'upper-roman', result: 'I, II, III', code: 'counter(section, upper-roman)' },
              { style: 'lower-alpha', result: 'a, b, c', code: 'counter(section, lower-alpha)' },
              { style: 'upper-alpha', result: 'A, B, C', code: 'counter(section, upper-alpha)' },
              { style: 'lower-roman', result: 'i, ii, iii', code: 'counter(section, lower-roman)' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <div>
                  <code className="font-bold text-blue-700 dark:text-blue-400">{item.style}</code>
                  <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">{item.result}</p>
                </div>
                <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded">
                  {item.code}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Hash className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Where to use counters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Documentation', desc: 'Number sections and headings' },
            { use: 'Table of Contents', desc: 'Automatic numbering' },
            { use: 'Code Examples', desc: 'Number code blocks' },
            { use: 'Footnotes', desc: 'Reference numbering' },
            { use: 'Nested Lists', desc: 'Multi-level numbering' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
              <div>
                <p className="font-bold text-orange-900 dark:text-orange-100">{item.use}</p>
                <p className="text-xs text-orange-700 dark:text-orange-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Alert className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <CheckCircle className="w-5 h-5 text-indigo-600" />
        <AlertTitle className="text-xl text-indigo-900 dark:text-indigo-100">Remember</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200 space-y-2">
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span><strong>counter-reset</strong> initializes, <strong>counter-increment</strong> increases</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Display with <code>content: counter(name)</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Use different styles: <strong>decimal, roman, alpha</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>All browsers</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
