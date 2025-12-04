'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Palette, Lightbulb, Sparkles, Paintbrush } from 'lucide-react';
import { FrontendCodePreview } from '@/components/shared';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface HtmlStyleElementProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicStyleExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal Styles</title>
</head>
<body>
  <h1>Styled with &lt;style&gt;</h1>
  <p>All styling defined externally!</p>
  <button class="button">Click Me</button>
</body>
</html>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 3rem;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c51bf 0%, #553c9a 100%);
  }
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.button {
  background: white;
  color: #667eea;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

@media (prefers-color-scheme: dark) {
  .button {
    background: #f3f4f6;
  }
}`,
  js: ``
};

const multipleStylesExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiple Style Tags</title>
</head>
<body>
  <div class="card">
    <h2>Styled Elements</h2>
    <p>CSS applied from external stylesheet!</p>
  </div>
</body>
</html>`,
  css: `/* Base styles */
body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  margin: 0;
  background: #f8fafc;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
}

/* Component-specific styles */
.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .card {
    background: linear-gradient(135deg, #4c51bf 0%, #553c9a 100%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
}

h2 {
  margin: 0 0 1rem;
  font-size: 1.8rem;
}

p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.95;
}`,
  js: ``
};

const mediaQueryExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Styles</title>
</head>
<body>
  <div class="box">
    <h2>Responsive Design</h2>
    <p>Resize window to see color change!</p>
    <p class="hint">Also supports dark mode!</p>
  </div>
</body>
</html>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  text-align: center;
  margin: 0;
  background: #f8fafc;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1e293b;
    color: #e2e8f0;
  }
}

.box {
  background: #3b82f6;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive styles - changes on smaller screens */
@media (max-width: 768px) {
  .box {
    background: #ec4899;
    font-size: 0.9rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .box {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

p {
  margin: 0.5rem 0;
}

.hint {
  font-size: 0.9rem;
  opacity: 0.9;
}`,
  js: ``
};

const diagramExample = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Methods</title>
</head>
<body>
  <div class="style-types">
    <div class="type-box inline">
      <h3>Inline</h3>
      <code>style="color:red"</code>
      <p>Highest priority</p>
    </div>
    <div class="type-box internal">
      <h3>Internal</h3>
      <code>&lt;style&gt;...&lt;/style&gt;</code>
      <p>In &lt;head&gt;</p>
    </div>
    <div class="type-box external">
      <h3>External</h3>
      <code>&lt;link rel="stylesheet"&gt;</code>
      <p>Separate file</p>
    </div>
  </div>
</body>
</html>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 1rem;
  margin: 0;
  background: #f8fafc;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
}

.style-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.type-box {
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .type-box {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

.inline {
  background: #fef3c7;
  color: #92400e;
}

@media (prefers-color-scheme: dark) {
  .inline {
    background: #78350f;
    color: #fde68a;
  }
}

.internal {
  background: #dbeafe;
  color: #1e40af;
}

@media (prefers-color-scheme: dark) {
  .internal {
    background: #1e3a8a;
    color: #dbeafe;
  }
}

.external {
  background: #d1fae5;
  color: #065f46;
}

@media (prefers-color-scheme: dark) {
  .external {
    background: #064e3b;
    color: #d1fae5;
  }
}

h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

code {
  display: block;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin: 0.5rem 0;
}

@media (prefers-color-scheme: dark) {
  code {
    background: rgba(255, 255, 255, 0.1);
  }
}

p {
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
  opacity: 0.8;
}`,
  js: ``
};

export default function HtmlStyleElement({ onOpenWebPlayground }: HtmlStyleElementProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Palette}
        category="HTML · Scripts & Styles"
        title="&lt;style&gt; Element"
        description="Add internal CSS styling to your HTML document"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Paintbrush className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">What is &lt;style&gt;?</CardTitle>
              <CardDescription className="text-base mt-1">Write CSS directly in HTML</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;style&gt;</code> element 
            contains CSS styling information for the document. It's placed in &lt;head&gt; and applies to the current page only.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">✅ When to Use</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Page-specific styles</li>
                <li>• Quick prototypes</li>
                <li>• Critical CSS (above fold)</li>
                <li>• Email templates</li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-700">
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2">⚠️ Consider External</h4>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Reusable styles across pages</li>
                <li>• Large stylesheets</li>
                <li>• Browser caching needed</li>
                <li>• Team collaboration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">CSS Methods</CardTitle>
          <CardDescription>Three ways to add styles</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Styling Methods"
            description="Inline vs Internal vs External"
            html={diagramExample.html}
            css={diagramExample.css}
            js={diagramExample.js}
            colorTheme="blue"
            previewHeight="220px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            Basic Internal Styles
          </CardTitle>
          <CardDescription>CSS in the head element</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Internal Stylesheet"
            description="Complete styling within HTML"
            html={basicStyleExample.html}
            css={basicStyleExample.css}
            js={basicStyleExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Syntax</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Write normal CSS inside &lt;style&gt; tags. All CSS rules, selectors, and properties work the same.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Multiple Style Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Palette className="w-7 h-7" />
            Multiple Style Elements
          </CardTitle>
          <CardDescription>Organize styles by purpose</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Multiple &lt;style&gt; Tags"
            description="You can have multiple style elements"
            html={multipleStylesExample.html}
            css={multipleStylesExample.css}
            js={multipleStylesExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Multiple &lt;style&gt; tags are valid and useful for organizing styles by component or purpose. Later styles override earlier ones (CSS cascade).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Media Queries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            Responsive Styles
          </CardTitle>
          <CardDescription>Media queries for different devices</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Responsive CSS"
            description="Styles adapt to screen size and theme"
            html={mediaQueryExample.html}
            css={mediaQueryExample.css}
            js={mediaQueryExample.js}
            colorTheme="blue"
            previewHeight="400px"
            onOpenPlayground={onOpenWebPlayground}
          />
          <Alert className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 mt-4">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-700 dark:text-emerald-300">Media Queries</AlertTitle>
            <AlertDescription className="text-emerald-600 dark:text-emerald-400">
              Use @media rules inside &lt;style&gt; for responsive design and dark mode support.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Style Attributes</CardTitle>
          <CardDescription>Optional attributes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              { attr: 'media', desc: 'Apply styles only for specific media (print, screen)', example: 'media="print"' },
              { attr: 'type', desc: 'MIME type (default: text/css, optional in HTML5)', example: 'type="text/css"' },
              { attr: 'title', desc: 'Define alternative stylesheets', example: 'title="Dark Theme"' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start mb-1">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono font-bold">{item.attr}</code>
                  <code className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">{item.example}</code>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
