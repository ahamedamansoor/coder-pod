'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { 
  Sparkles, Lightbulb, ArrowRight, 
  CheckCircle, Info, Target, Zap
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

interface CssHasSelectorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function CssHasSelector({ onOpenWebPlayground }: CssHasSelectorProps) {
  
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Target}
        category="CSS · Modern Features"
        title=":has() Selector"
        description="Parent selector - style elements based on their children"
        colorTheme="indigo"
      />

      <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg animate-pulse">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">The :has() Pseudo-Class</CardTitle>
              <CardDescription className="text-base">
                <Badge className="bg-green-600 text-white mr-2">NEW 2023</Badge>
                The "Parent Selector" is finally here!
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">:has() = Parent Selector Magic!</AlertTitle>
            <AlertDescription className="text-indigo-800 dark:text-indigo-200">
              Select a parent element based on its children! This was <strong>impossible</strong> before. 
              Now you can style a <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">div</code> if 
              it contains an <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded">img</code>. Revolutionary! 🎉
            </AlertDescription>
          </Alert>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Why :has() is Game-Changing
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Before :has()</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  No way to select parent<br />
                  Need JavaScript for conditional styling<br />
                  Complex workarounds
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ With :has()</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Style parent based on children<br />
                  Pure CSS, no JavaScript<br />
                  Simple and powerful!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Basic Syntax
          </CardTitle>
          <CardDescription>How to use :has()</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700">
            <h3 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-3">
              Simple Examples
            </h3>
            <div className="bg-purple-900 dark:bg-purple-950 p-5 rounded-lg mb-4">
              <code className="text-sm text-purple-100 block">
{`/* If div HAS an img, style the div */
div:has(img) {
  border: 2px solid blue;
}

/* If article HAS an h2, style the article */
article:has(h2) {
  padding: 20px;
}

/* If form HAS an error, style the form */
form:has(.error) {
  border-color: red;
}`}
              </code>
            </div>
            <Alert className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Think of it as: "Select parent <strong>:has(child)</strong>"
              </AlertDescription>
            </Alert>
          </div>

          <div className="space-y-4">
            {[
              {
                desc: 'Style card if it has an image',
                code: '.card:has(img) { padding: 0; }',
                use: 'Remove padding when image present'
              },
              {
                desc: 'Style form with checked checkbox',
                code: 'form:has(input:checked) { opacity: 0.5; }',
                use: 'Show completed state'
              },
              {
                desc: 'Style section with no content',
                code: 'section:has(:empty) { display: none; }',
                use: 'Hide empty sections'
              },
              {
                desc: 'Style parent of focused input',
                code: 'div:has(input:focus) { border-color: blue; }',
                use: 'Highlight active form group'
              }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                <p className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.desc}</p>
                <code className="text-xs bg-purple-900 dark:bg-purple-950 text-purple-100 px-2 py-1 rounded block mb-2">
                  {item.code}
                </code>
                <p className="text-xs text-purple-700 dark:text-purple-300">→ {item.use}</p>
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
          <CardDescription>See :has() in action</CardDescription>
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
      max-width: 1200px;
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
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }
    
    .card {
      border: 3px solid #e5e7eb;
      padding: 20px;
      border-radius: 12px;
      transition: all 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .card {
        border-color: #374151;
      }
    }
    
    /* :has() MAGIC STARTS HERE! */
    
    /* If card has an image, remove padding and add gradient border */
    .card:has(img) {
      padding: 0;
      border: 3px solid transparent;
      background: linear-gradient(white, white) padding-box,
                  linear-gradient(135deg, #667eea, #764ba2) border-box;
    }
    
    @media (prefers-color-scheme: dark) {
      .card:has(img) {
        background: linear-gradient(#1a1a2e, #1a1a2e) padding-box,
                    linear-gradient(135deg, #667eea, #764ba2) border-box;
      }
    }
    
    .card:has(img) .card-content {
      padding: 20px;
    }
    
    /* If card has a .special badge, add glow effect */
    .card:has(.special) {
      box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
      border-color: #667eea;
    }
    
    /* If card has checked checkbox, fade it out */
    .card:has(input:checked) {
      opacity: 0.6;
      transform: scale(0.98);
    }
    
    .card:has(input:checked) h2 {
      text-decoration: line-through;
    }
    
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 12px 12px 0 0;
    }
    
    .card h2 {
      color: #667eea;
      margin-bottom: 10px;
      transition: all 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      .card h2 {
        color: #a78bfa;
      }
    }
    
    .card p {
      color: #6b7280;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .card p {
        color: #9ca3af;
      }
    }
    
    .special {
      display: inline-block;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    input[type="checkbox"] {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    
    .demo-image {
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 :has() Selector Demo</h1>
    
    <div class="grid">
      <div class="card">
        <h2>Regular Card</h2>
        <p>I'm a normal card with default styling. Nothing special!</p>
      </div>
      
      <div class="card">
        <div class="demo-image">🖼️</div>
        <div class="card-content">
          <h2>Card with Image</h2>
          <p>I have gradient border and no top padding thanks to :has(img)!</p>
        </div>
      </div>
      
      <div class="card">
        <span class="special">⭐ VIP</span>
        <h2>Special Card</h2>
        <p>I have a glowing border because I :has(.special) badge!</p>
      </div>
      
      <div class="card">
        <h2>
          <input type="checkbox" id="task1">
          <label for="task1">Task Card</label>
        </h2>
        <p>Check the box! I fade out with :has(input:checked)</p>
      </div>
      
      <div class="card">
        <h2>
          <input type="checkbox" id="task2">
          <label for="task2">Another Task</label>
        </h2>
        <p>Try checking this one too. Pure CSS, no JavaScript!</p>
      </div>
      
      <div class="card">
        <h2>Info Card</h2>
        <p>All of this conditional styling is done with :has() selector. No JS needed!</p>
      </div>
    </div>
  </div>
</body>
</html>`}
            title=":has() Selector Demo"
            colorTheme="indigo"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      <Card className="border-2 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            Advanced Patterns
          </CardTitle>
          <CardDescription>Powerful :has() techniques</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {[
              {
                pattern: 'Sibling Selector Replacement',
                code: 'h2:has(+ p) { margin-bottom: 0.5rem; }',
                desc: 'Style h2 if followed by p'
              },
              {
                pattern: 'Quantity Queries',
                code: 'ul:has(li:nth-child(10)) { columns: 2; }',
                desc: 'If list has 10+ items, use columns'
              },
              {
                pattern: 'Form Validation',
                code: 'form:has(:invalid) { border-color: red; }',
                desc: 'Highlight form with invalid inputs'
              },
              {
                pattern: 'Empty State',
                code: 'div:has(> :only-child) { text-align: center; }',
                desc: 'Center if only one child'
              },
              {
                pattern: 'No JavaScript Tabs',
                code: '.tabs:has(#tab1:checked) .panel-1 { display: block; }',
                desc: 'Pure CSS tabs with radio buttons'
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">{item.pattern}</h4>
                <code className="text-sm bg-green-900 dark:bg-green-950 text-green-100 px-3 py-2 rounded block mb-2">
                  {item.code}
                </code>
                <p className="text-xs text-green-700 dark:text-green-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Common Use Cases
          </CardTitle>
          <CardDescription>Practical applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { use: 'Highlight form groups with focus', code: '.form-group:has(input:focus)' },
            { use: 'Style empty containers', code: '.container:has(:empty)' },
            { use: 'Different layout with images', code: '.card:has(img)' },
            { use: 'Disable parent of disabled input', code: 'label:has(input:disabled)' },
            { use: 'Show error state on form', code: 'form:has(.error)' },
            { use: 'Conditional navigation styling', code: 'nav:has(.active)' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <span className="text-sm font-medium">{item.use}</span>
              <code className="text-xs bg-blue-900 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded">
                {item.code}
              </code>
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
            <span><strong>:has()</strong> selects parent based on children</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Combine with pseudo-classes: <code>:has(:checked)</code>, <code>:has(:focus)</code></span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>No JavaScript needed for conditional styling!</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>Browser support: <strong>Chrome 105+, Safari 15.4+, Firefox 121+</strong></span>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
