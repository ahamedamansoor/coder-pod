'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Code, Tag, Hash, Grid, CheckCircle, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface CssSyntaxSelectorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const elementSelectorExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Element Selectors</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      }
    }

    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }

    /* Element Selector: Targets all <h1> elements */
    h1 {
      color: #3b82f6;
      text-align: center;
      margin-bottom: 15px;
      font-size: 2rem;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #60a5fa;
      }
    }

    /* Element Selector: Targets all <p> elements */
    p {
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      p {
        color: #cbd5e1;
      }
    }

    /* Element Selector: Targets all <button> elements */
    button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: block;
      margin: 20px auto;
    }

    button:hover {
      background: #2563eb;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    .code-example {
      background: #f1f5f9;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      margin: 20px 0;
      border-left: 4px solid #3b82f6;
    }

    @media (prefers-color-scheme: dark) {
      .code-example {
        background: #334155;
        border-left-color: #60a5fa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Element Selectors</h1>
    <p>Element selectors target HTML elements by their tag name. All elements of that type will be styled.</p>

    <div class="code-example">
      h1 { color: blue; }<br>
      p { line-height: 1.8; }<br>
      button { background: blue; }
    </div>

    <p>This paragraph is styled using the <strong>p</strong> element selector.</p>

    <button>This button is styled too!</button>

    <p><strong>Result:</strong> All h1, p, and button elements on this page have the same styles applied automatically!</p>
  </div>
</body>
</html>`;

  const classSelectorExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Class Selectors</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }

    h1 {
      color: #8b5cf6;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      p {
        color: #cbd5e1;
      }
    }

    /* Class Selector: .highlight */
    .highlight {
      background: #fef3c7;
      padding: 4px 8px;
      border-radius: 4px;
      color: #78350f;
      font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
      .highlight {
        background: #78350f;
        color: #fef3c7;
      }
    }

    /* Class Selector: .card */
    .card {
      background: #f5f3ff;
      padding: 20px;
      border-radius: 12px;
      margin: 20px 0;
      border-left: 4px solid #8b5cf6;
    }

    @media (prefers-color-scheme: dark) {
      .card {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }

    /* Class Selector: .btn */
    .btn {
      background: #8b5cf6;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      margin: 5px;
    }

    .btn:hover {
      background: #7c3aed;
      transform: translateY(-2px);
    }

    /* Class Selector: .btn-success */
    .btn-success {
      background: #10b981;
    }

    .btn-success:hover {
      background: #059669;
    }

    /* Class Selector: .btn-danger */
    .btn-danger {
      background: #ef4444;
    }

    .btn-danger:hover {
      background: #dc2626;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏷️ Class Selectors</h1>
    <p>Class selectors target elements with a specific <span class="highlight">class attribute</span>. Multiple elements can share the same class!</p>

    <div class="card">
      <h3 style="color: #7c3aed; margin-bottom: 10px;">Using Classes</h3>
      <p>Classes are reusable! You can apply <span class="highlight">class="highlight"</span> to any element to get the same yellow background.</p>
    </div>

    <div class="card">
      <h3 style="color: #7c3aed; margin-bottom: 10px;">Multiple Classes</h3>
      <p>Elements can have multiple classes. Look at these buttons:</p>
      <button class="btn">Default Button</button>
      <button class="btn btn-success">Success Button</button>
      <button class="btn btn-danger">Danger Button</button>
    </div>

    <p>Classes start with a <span class="highlight">dot (.)</span> in CSS: <code>.card { ... }</code></p>
  </div>
</body>
</html>`;

  const idSelectorExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ID Selectors</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }
    }

    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }

    h1 {
      color: #10b981;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      p {
        color: #cbd5e1;
      }
    }

    /* ID Selector: #header */
    #header {
      background: linear-gradient(135deg, #d1fae5, #a7f3d0);
      padding: 25px;
      border-radius: 12px;
      margin-bottom: 25px;
      border-left: 4px solid #10b981;
    }

    @media (prefers-color-scheme: dark) {
      #header {
        background: linear-gradient(135deg, #064e3b, #065f46);
        border-left-color: #34d399;
      }
    }

    #header h2 {
      color: #065f46;
      margin-bottom: 10px;
    }

    @media (prefers-color-scheme: dark) {
      #header h2 {
        color: #6ee7b7;
      }
    }

    /* ID Selector: #main-content */
    #main-content {
      background: #f0fdf4;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }

    @media (prefers-color-scheme: dark) {
      #main-content {
        background: #14532d;
      }
    }

    /* ID Selector: #footer */
    #footer {
      background: #10b981;
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin-top: 25px;
    }

    .warning {
      background: #fef3c7;
      border: 2px solid #fbbf24;
      padding: 15px;
      border-radius: 8px;
      color: #78350f;
      margin: 20px 0;
    }

    @media (prefers-color-scheme: dark) {
      .warning {
        background: #78350f;
        border-color: #fcd34d;
        color: #fef3c7;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🆔 ID Selectors</h1>

    <div id="header">
      <h2>Unique Header Section</h2>
      <p style="color: #047857;">This section has id="header" - only ONE element can have this ID!</p>
    </div>

    <div id="main-content">
      <p><strong>What are ID Selectors?</strong></p>
      <p>ID selectors target a specific element with a unique ID attribute. IDs must be unique on the page - no duplicates!</p>
    </div>

    <div class="warning">
      <strong>⚠️ Important Rule:</strong><br>
      Each ID can only be used ONCE per page. Use classes for reusable styles!
    </div>

    <p>IDs start with a <strong>hash (#)</strong> in CSS: <code>#header { ... }</code></p>

    <div id="footer">
      <strong>Footer Section</strong><br>
      This has id="footer" and is styled uniquely
    </div>
  </div>
</body>
</html>`;

  const universalGroupExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Universal & Group Selectors</title>
  <style>
    /* Universal Selector: Targets ALL elements */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
      }
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }

    h1 {
      color: #f97316;
      text-align: center;
      margin-bottom: 15px;
    }

    @media (prefers-color-scheme: dark) {
      h1 {
        color: #fb923c;
      }
    }

    .section {
      margin: 25px 0;
      padding: 20px;
      border-radius: 12px;
    }

    .universal-demo {
      background: #fff7ed;
      border-left: 4px solid #f97316;
    }

    @media (prefers-color-scheme: dark) {
      .universal-demo {
        background: #7c2d12;
        border-left-color: #fb923c;
      }
    }

    .group-demo {
      background: #fef3c7;
      border-left: 4px solid #fbbf24;
    }

    @media (prefers-color-scheme: dark) {
      .group-demo {
        background: #78350f;
        border-left-color: #fcd34d;
      }
    }

    /* Group Selector: Multiple elements with same styles */
    h2, h3, h4 {
      color: #ea580c;
      margin-bottom: 10px;
    }

    @media (prefers-color-scheme: dark) {
      h2, h3, h4 {
        color: #fdba74;
      }
    }

    .code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      margin: 15px 0;
      overflow-x: auto;
    }

    @media (prefers-color-scheme: dark) {
      .code {
        background: #0f172a;
      }
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 12px;
    }

    @media (prefers-color-scheme: dark) {
      p {
        color: #cbd5e1;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌟 Universal & Group Selectors</h1>

    <div class="section universal-demo">
      <h2>Universal Selector (*)</h2>
      <p>The asterisk (*) targets <strong>EVERY</strong> element on the page.</p>

      <div class="code">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
      </div>

      <p>This is commonly used for CSS resets at the beginning of stylesheets.</p>
    </div>

    <div class="section group-demo">
      <h2>Group Selectors (Comma-separated)</h2>
      <p>Apply the same styles to multiple selectors by separating them with commas.</p>

      <div class="code">
h1, h2, h3 {
  color: orange;
  margin-bottom: 10px;
}
      </div>

      <h3>This is an H3</h3>
      <h4>This is an H4</h4>
      <p>All headings (h2, h3, h4) on this page share the same color because of group selectors!</p>

      <p><strong>Benefit:</strong> Write styles once, apply to many elements. Keeps your CSS DRY (Don't Repeat Yourself)!</p>
    </div>
  </div>
</body>
</html>`;

export default function CssSyntaxSelectors({ onOpenWebPlayground }: CssSyntaxSelectorsProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={Code}
        category="CSS · Fundamentals"
        title="CSS Syntax & Selectors"
        description="Master CSS syntax rules and learn how to target HTML elements with different types of selectors"
        colorTheme="blue"
      />

      {/* CSS Syntax Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            CSS Syntax Basics
          </CardTitle>
          <CardDescription>
            Understanding the structure of CSS rules
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Every CSS rule consists of a <strong className="text-foreground">selector</strong> (what to style) 
            and a <strong className="text-foreground">declaration block</strong> (how to style it). 
            The declaration block contains properties and values.
          </p>

          <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="font-mono text-lg space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">selector</span>
                <span className="text-muted-foreground">{`{`}</span>
              </div>
              <div className="ml-6 flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold">property</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-red-600 dark:text-red-400 font-bold">value</span>
                <span className="text-muted-foreground">;</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{`}`}</span>
              </div>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Key Rules</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Selectors identify which elements to style</li>
                <li>Properties define what aspect to change</li>
                <li>Values specify how to change it</li>
                <li>Always end declarations with a semicolon (;)</li>
                <li>Use curly braces {`{ }`} to wrap declaration blocks</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Element Selectors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Tag className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            1. Element Selectors
          </CardTitle>
          <CardDescription>
            Target HTML elements by their tag name
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={elementSelectorExample}
            title="Element Selector Example"
            colorTheme="blue"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">When to Use Element Selectors:</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Setting base styles for all elements of a type</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Simple, small websites with consistent styling</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Avoid for large projects - can style too many elements</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Class Selectors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Grid className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            2. Class Selectors (Most Common!)
          </CardTitle>
          <CardDescription>
            Reusable styles with the class attribute
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={classSelectorExample}
            title="Class Selector Example"
            colorTheme="purple"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20">
            <CheckCircle className="h-4 w-4 text-purple-600" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Why Classes Are Best</AlertTitle>
            <AlertDescription className="text-purple-800 dark:text-purple-200">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Reusable</strong> - Apply same class to multiple elements</li>
                <li><strong>Multiple classes</strong> - One element can have many classes</li>
                <li><strong>Maintainable</strong> - Change style in one place</li>
                <li><strong>Flexible</strong> - Mix and match classes for variations</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* ID Selectors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Hash className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            3. ID Selectors
          </CardTitle>
          <CardDescription>
            Target unique elements with ID attributes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={idSelectorExample}
            title="ID Selector Example"
            colorTheme="green"
            onOpenWebPlayground={onOpenWebPlayground}
          />
          
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important: IDs Must Be Unique!</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Each ID can only appear ONCE per page</li>
                <li>IDs have higher specificity than classes</li>
                <li>Prefer classes for styling - use IDs for JavaScript targeting</li>
                <li>Over-using IDs makes CSS hard to override</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Universal & Group Selectors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            4. Universal & Group Selectors
          </CardTitle>
          <CardDescription>
            Select all elements or group multiple selectors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={universalGroupExample}
            title="Universal & Group Selectors"
            colorTheme="orange"
            onOpenWebPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Selector Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Selector Reference</CardTitle>
          <CardDescription>
            All basic CSS selectors at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">element</code>
              <p className="text-sm text-muted-foreground mt-1">
                Selects all elements of that type: <code>{'p { ... }'}</code>
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">.classname</code>
              <p className="text-sm text-muted-foreground mt-1">
                Selects all elements with that class: <code>{'.button { ... }'}</code>
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-green-600 dark:text-green-400">#idname</code>
              <p className="text-sm text-muted-foreground mt-1">
                Selects the element with that ID: <code>{'#header { ... }'}</code>
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-orange-600 dark:text-orange-400">*</code>
              <p className="text-sm text-muted-foreground mt-1">
                Selects ALL elements: <code>{'* { ... }'}</code>
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-cyan-600 dark:text-cyan-400">selector1, selector2</code>
              <p className="text-sm text-muted-foreground mt-1">
                Groups selectors with same styles: <code>{'h1, h2, h3 { ... }'}</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Selector Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Prefer classes</strong> - Most flexible and reusable</li>
            <li><strong>Use meaningful names</strong> - .button-primary instead of .blue-btn</li>
            <li><strong>Keep specificity low</strong> - Avoid deep nesting</li>
            <li><strong>Be consistent</strong> - Use one naming convention (kebab-case recommended)</li>
            <li><strong>Avoid !important</strong> - Sign of specificity problems</li>
            <li><strong>Group related selectors</strong> - Keeps CSS organized and DRY</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Universal Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All basic CSS selectors (element, class, ID, universal, group) are supported by every browser. 
          They've been part of CSS since CSS1 (1996) and work reliably across all platforms!
        </AlertDescription>
      </Alert>
    </div>
  );
}
