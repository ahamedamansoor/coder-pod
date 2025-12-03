'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';
import { 
  FileCode, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb,
  Code2,
  FileType,
  Globe,
  Eye,
  Zap
} from 'lucide-react';

interface HtmlDocumentStructureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlDocumentStructure({ onOpenWebPlayground }: HtmlDocumentStructureProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Hero Section */}
      <PageHeader
        icon={FileCode}
        category="HTML · Fundamentals"
        title="HTML Document Structure"
        description="Learn the essential building blocks that make up every HTML document—from DOCTYPE to the body tag."
        colorTheme="blue"
      />

      {/* 1. WHAT IS DOCUMENT STRUCTURE */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Every HTML Page Has a Blueprint
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Just like a house needs a foundation, HTML documents need proper structure
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-4">Think of HTML Structure Like a Building:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="text-3xl mb-2">🏗️</div>
                <h4 className="font-bold mb-2">Foundation</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">&lt;!DOCTYPE html&gt;</code> - Tells the browser what type of document this is
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-bold mb-2">The Head</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">&lt;head&gt;</code> - Contains info about the page (like a building's blueprints)
                </p>
              </div>

              <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="text-3xl mb-2">🏠</div>
                <h4 className="font-bold mb-2">The Body</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <code className="bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">&lt;body&gt;</code> - Contains all visible content (the actual rooms and furniture)
                </p>
              </div>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-700">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Why Structure Matters</AlertTitle>
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              Proper structure helps browsers understand your content, improves SEO, ensures accessibility, and makes your code easier to maintain!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 2. MINIMAL STRUCTURE */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code2 className="w-7 h-7" />
            The Minimal HTML Document
          </CardTitle>
          <CardDescription className="text-base">
            Every HTML document needs these essential elements—nothing more, nothing less
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreview
            title="Bare Minimum HTML"
            description="The smallest valid HTML document you can create"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first properly structured HTML page.</p>
</body>
</html>`}
            css={`body {
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
  }
}

h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

p {
  color: white;
  font-size: 1.2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />

          {/* Structure Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Breaking It Down:</h3>
            <div className="grid gap-3">
              <div className="flex gap-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <code className="text-orange-600 dark:text-orange-400 font-mono text-sm">&lt;!DOCTYPE html&gt;</code>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Declares this is an HTML5 document. Always the first line!
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <code className="text-purple-600 dark:text-purple-400 font-mono text-sm">&lt;html lang="en"&gt;</code>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Root element that wraps everything. <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">lang</code> tells browsers and screen readers what language your content is in.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <code className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">&lt;head&gt;</code>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Contains metadata—info ABOUT the page, not visible content. Like the settings menu.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <code className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">&lt;body&gt;</code>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Contains ALL visible content—everything users actually see on the page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. THE HEAD ELEMENT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <FileType className="w-7 h-7" />
            Inside the &lt;head&gt; Element
          </CardTitle>
          <CardDescription className="text-base">
            The invisible but crucial part—tells browsers and search engines about your page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Essential Meta Tags */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
              <Badge className="bg-orange-500 text-white mb-3 text-xs">REQUIRED</Badge>
              <h4 className="font-bold text-lg mb-3">Character Encoding</h4>
              <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-orange-600 dark:text-orange-400">
                &lt;meta charset="UTF-8"&gt;
              </code>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Tells the browser how to read characters. UTF-8 supports all languages and emojis 🌍
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <Badge className="bg-purple-500 text-white mb-3 text-xs">REQUIRED</Badge>
              <h4 className="font-bold text-lg mb-3">Viewport</h4>
              <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-purple-600 dark:text-purple-400 break-all">
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
              </code>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Makes your site work on mobile devices. Without this, your site looks tiny on phones!
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <Badge className="bg-emerald-500 text-white mb-3 text-xs">REQUIRED</Badge>
              <h4 className="font-bold text-lg mb-3">Title</h4>
              <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-emerald-600 dark:text-emerald-400">
                &lt;title&gt;My Page&lt;/title&gt;
              </code>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Shows in browser tabs and search results. Keep it short and descriptive!
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
              <Badge className="bg-cyan-500 text-white mb-3 text-xs">RECOMMENDED</Badge>
              <h4 className="font-bold text-lg mb-3">Description</h4>
              <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-cyan-600 dark:text-cyan-400 break-all">
                &lt;meta name="description" content="..."&gt;
              </code>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Appears in search results. Write a compelling summary (150-160 characters).
              </p>
            </div>
          </div>

          <FrontendCodePreview
            title="Complete Head Example"
            description="A well-structured head section with all essential elements"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn HTML Structure - Complete Guide</title>
  <meta name="description" content="Master HTML document structure with easy-to-follow examples and interactive tutorials.">
  <meta name="author" content="Your Name">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>">
</head>
<body>
  <main>
    <h1>✨ Perfect Document Structure</h1>
    <p>This page has a complete and proper head section!</p>
    <ul>
      <li>✅ Character encoding for universal text support</li>
      <li>✅ Viewport meta for mobile responsiveness</li>
      <li>✅ Descriptive title for SEO</li>
      <li>✅ Meta description for search results</li>
      <li>✅ Favicon icon in the tab</li>
    </ul>
  </main>
</body>
</html>`}
            css={`body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c1d95 0%, #7f1d1d 100%);
  }
}

main {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
}

@media (prefers-color-scheme: dark) {
  main {
    background: #1e293b;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  }
}

h1 {
  color: #f5576c;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #fda4af;
  }
}

p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #cbd5e1;
  }
}

ul {
  list-style: none;
  padding: 0;
}

li {
  color: #475569;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #fef2f2;
  border-radius: 8px;
  border-left: 4px solid #f5576c;
}

@media (prefers-color-scheme: dark) {
  li {
    color: #e2e8f0;
    background: #334155;
    border-left-color: #fda4af;
  }
}`}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* 4. THE BODY ELEMENT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Eye className="w-7 h-7" />
            Inside the &lt;body&gt; Element
          </CardTitle>
          <CardDescription className="text-base">
            Everything visible to users goes here—text, images, videos, forms, and more
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h3 className="text-xl font-bold mb-4">Body Structure Best Practices:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-600 dark:text-emerald-400">Use semantic HTML5 tags</strong>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      &lt;header&gt;, &lt;main&gt;, &lt;footer&gt; instead of generic &lt;div&gt;
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-600 dark:text-emerald-400">Logical content hierarchy</strong>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      One &lt;h1&gt; per page, then &lt;h2&gt;, &lt;h3&gt; in order
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-600 dark:text-emerald-400">Wrap content properly</strong>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Use &lt;article&gt; for standalone content, &lt;section&gt; for groups
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-600 dark:text-emerald-400">Keep it organized</strong>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Indent properly, use comments for sections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FrontendCodePreview
            title="Semantic Body Structure"
            description="Modern HTML5 semantic structure for better accessibility and SEO"
            html={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML Example</title>
</head>
<body>
  <header>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>Understanding HTML Structure</h1>
      <p>This article shows proper semantic HTML5 structure.</p>
      
      <section>
        <h2>What is Semantic HTML?</h2>
        <p>Semantic HTML uses tags that describe their content.</p>
      </section>

      <section>
        <h2>Why It Matters</h2>
        <ul>
          <li>Better accessibility for screen readers</li>
          <li>Improved SEO rankings</li>
          <li>Easier to maintain code</li>
        </ul>
      </section>
    </article>
  </main>

  <footer>
    <p>&copy; 2024 Your Website. All rights reserved.</p>
  </footer>
</body>
</html>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f8fafc;
  color: #1e293b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
    color: #e2e8f0;
  }
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s;
}

nav a:hover {
  opacity: 0.8;
}

main {
  flex: 1;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
}

article {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

@media (prefers-color-scheme: dark) {
  article {
    background: #1e293b;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
}

h1 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

@media (prefers-color-scheme: dark) {
  h1 {
    color: #a78bfa;
  }
}

h2 {
  color: #764ba2;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #c4b5fd;
  }
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #cbd5e1;
  }
}

ul {
  list-style-position: inside;
  color: #64748b;
}

@media (prefers-color-scheme: dark) {
  ul {
    color: #94a3b8;
  }
}

li {
  padding: 0.5rem 0;
}

footer {
  background: #1e293b;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
}

@media (prefers-color-scheme: dark) {
  footer {
    background: #0c1425;
  }
}`}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* 5. MODERN HTML5 FEATURES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Sparkles className="w-7 h-7" />
            Modern HTML5 Document Features
          </CardTitle>
          <CardDescription className="text-base">
            Latest HTML5 additions that improve structure, accessibility, and functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
            <Badge className="bg-orange-500 text-white mb-3">NEW IN HTML5</Badge>
            <h4 className="font-bold text-lg mb-2">Custom Data Attributes</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded mb-2 text-orange-600 dark:text-orange-400">
              &lt;div data-user-id="123"&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Store custom data directly in HTML elements for JavaScript access.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
            <Badge className="bg-purple-500 text-white mb-3">NEW IN HTML5</Badge>
            <h4 className="font-bold text-lg mb-2">Native Dialog Element</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded mb-2 text-purple-600 dark:text-purple-400">
              &lt;dialog&gt;&lt;/dialog&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Create accessible modals without JavaScript libraries.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <Badge className="bg-emerald-500 text-white mb-3">NEW IN HTML5</Badge>
            <h4 className="font-bold text-lg mb-2">Picture Element</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded mb-2 text-emerald-600 dark:text-emerald-400">
              &lt;picture&gt;&lt;source&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Serve different images for different screen sizes and formats.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 rounded-xl border border-cyan-200 dark:border-cyan-700">
            <Badge className="bg-cyan-500 text-white mb-3">NEW IN HTML5</Badge>
            <h4 className="font-bold text-lg mb-2">Template Element</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded mb-2 text-cyan-600 dark:text-cyan-400">
              &lt;template&gt;&lt;/template&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Define reusable HTML chunks that won't render until activated.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 6. COMMON MISTAKES */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Common Structure Mistakes to Avoid
          </CardTitle>
          <CardDescription className="text-base">
            Learn from these common errors and write better HTML
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg mb-3 text-rose-600 dark:text-rose-400">❌ Missing DOCTYPE</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-rose-600 dark:text-rose-400">
              &lt;html&gt;<br/>
              &nbsp;&nbsp;&lt;head&gt;...<br/>
              {/* Missing DOCTYPE! */}
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Always start with <code className="bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded">&lt;!DOCTYPE html&gt;</code>
            </p>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg mb-3 text-emerald-600 dark:text-emerald-400">✅ Correct Way</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-emerald-600 dark:text-emerald-400">
              &lt;!DOCTYPE html&gt;<br/>
              &lt;html&gt;<br/>
              &nbsp;&nbsp;&lt;head&gt;...
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              DOCTYPE tells browsers to use standards mode.
            </p>
          </div>

          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg mb-3 text-rose-600 dark:text-rose-400">❌ Missing lang Attribute</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-rose-600 dark:text-rose-400">
              &lt;html&gt;<br/>
              {/* Missing lang! */}
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Screen readers need to know the language.
            </p>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg mb-3 text-emerald-600 dark:text-emerald-400">✅ Correct Way</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-emerald-600 dark:text-emerald-400">
              &lt;html lang="en"&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Improves accessibility and SEO.
            </p>
          </div>

          <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-lg mb-3 text-rose-600 dark:text-rose-400">❌ Missing Viewport Meta</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-rose-600 dark:text-rose-400">
              &lt;head&gt;<br/>
              &nbsp;&nbsp;&lt;title&gt;...<br/>
              {/* No viewport! */}
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Site won't work properly on mobile devices.
            </p>
          </div>

          <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-lg mb-3 text-emerald-600 dark:text-emerald-400">✅ Correct Way</h4>
            <code className="block text-xs font-mono bg-white dark:bg-slate-900 p-3 rounded mb-3 text-emerald-600 dark:text-emerald-400 break-all">
              &lt;meta name="viewport"<br/>
              content="width=device-width,<br/>
              initial-scale=1.0"&gt;
            </code>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Essential for responsive design.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 7. INTERACTIVE PLAYGROUND */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="🏗️ Build Your Perfect HTML Document"
          description="Practice creating properly structured HTML documents with all the essential elements!"
          features={[
            'Complete document structure',
            'Semantic HTML5 tags',
            'Proper head elements',
            'Accessible body content'
          ]}
          buttonText="Launch Structure Playground"
          onLaunchPlayground={() => onOpenWebPlayground(
            `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="An example of perfect HTML structure">
  <title>My Perfect HTML Page</title>
</head>
<body>
  <header>
    <nav>
      <h1>🏗️ Perfect HTML Structure</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article id="about">
      <h2>What Makes This Structure Perfect?</h2>
      <p>This document follows all HTML5 best practices:</p>
      <ul>
        <li>✅ Valid DOCTYPE declaration</li>
        <li>✅ Language attribute set</li>
        <li>✅ Character encoding specified</li>
        <li>✅ Viewport meta for mobile</li>
        <li>✅ Semantic HTML5 elements</li>
        <li>✅ Proper heading hierarchy</li>
      </ul>
    </article>

    <section id="features">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature">
          <h3>🎯 Accessible</h3>
          <p>Screen readers can navigate easily</p>
        </div>
        <div class="feature">
          <h3>📱 Responsive</h3>
          <p>Works on all devices</p>
        </div>
        <div class="feature">
          <h3>🔍 SEO-Friendly</h3>
          <p>Search engines love it</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Try It Yourself!</h2>
      <p>Edit the code on the left to experiment with HTML structure.</p>
      <button onclick="celebrate()">Celebrate Good Structure! 🎉</button>
      <div id="message"></div>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Perfect HTML Structure Demo</p>
  </footer>
</body>
</html>`,
            `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #1e293b;
}

header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav h1 {
  color: #667eea;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

nav a {
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

nav a:hover {
  color: #667eea;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

article, section {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #764ba2;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

h3 {
  color: #667eea;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

p {
  line-height: 1.8;
  color: #64748b;
  margin-bottom: 1rem;
}

ul {
  list-style-position: inside;
  color: #64748b;
  padding-left: 1rem;
}

li {
  padding: 0.5rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  padding: 2rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 20%);
  border-radius: 16px;
  color: white;
  text-align: center;
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  color: white;
  margin-bottom: 1rem;
}

.feature p {
  color: rgba(255, 255, 255, 0.9);
}

button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
  margin-top: 1rem;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

#message {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s;
}

#message.show {
  opacity: 1;
}

footer {
  background: rgba(30, 41, 59, 0.95);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}`,
            `function celebrate() {
  const message = document.getElementById('message');
  message.textContent = '🎉 Congratulations! You understand HTML structure!';
  message.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
  message.style.color = 'white';
  message.classList.add('show');
  
  setTimeout(() => {
    message.textContent = '💡 Keep practicing to master HTML document structure!';
  }, 2500);
}

console.log('🏗️ Perfect HTML Structure Loaded!');
console.log('✅ All essential elements present');
console.log('📚 Ready for learning!');`
          )}
          playgroundData={{
            html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Structure</title></head><body><h1>HTML Structure</h1></body></html>`,
            css: '',
            js: ''
          }}
          colorTheme="blue"
        />
      )}
    </div>
  );
}
