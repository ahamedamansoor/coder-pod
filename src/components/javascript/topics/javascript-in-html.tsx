'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Code2,
  FileCode,
  Link,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Download,
  Upload,
  Lightbulb,
  Sparkles,
  Play,
  Settings,
} from 'lucide-react';

interface JavaScriptInHtmlProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const inlineExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inline Example</title>
</head>
<body>
  <h1>Click the button</h1>
  <button onclick="alert('Hello!')">Click Me</button>
</body>
</html>`;

const internalExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal JavaScript</title>
  <script>
    function greet() {
      alert('Hello from internal script!');
    }
  </script>
</head>
<body>
  <h1>Internal Script Example</h1>
  <button onclick="greet()">Click Me</button>
</body>
</html>`;

const externalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External JavaScript</title>
  <script src="app.js" defer></script>
</head>
<body>
  <h1 id="title">Welcome</h1>
  <button id="btn">Click Me</button>
</body>
</html>`;

const externalJs = `// app.js
console.log('External JS loaded!');

const button = document.getElementById('btn');
const title = document.getElementById('title');

button.addEventListener('click', () => {
  title.textContent = 'Hello from external JS!';
  title.style.color = 'green';
});`;

export default function JavaScriptInHtml({ onOpenWebPlayground }: JavaScriptInHtmlProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={FileCode}
        category="JavaScript Fundamentals"
        title="JavaScript in HTML"
        description="Learn the different ways to add JavaScript to your HTML pages and when to use each approach."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Three Ways to Add JavaScript
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript can be embedded in HTML in three different ways, each with its own use case.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Inline</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Write JavaScript directly inside HTML tags using event attributes.
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Quick & Simple
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Internal</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Use &lt;script&gt; tags inside the HTML file to keep code organized.
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Organized
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Link className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">External</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Link to separate .js files for better maintainability and reusability.
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Professional
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Method 1: Inline JavaScript */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Method 1: Inline JavaScript
          </CardTitle>
          <CardDescription className="text-base">
            Write JavaScript directly in HTML attributes for simple interactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* What it is */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                What It Is
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                JavaScript code written directly inside HTML event attributes like <code className="font-mono">onclick</code>, <code className="font-mono">onload</code>, etc.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
                <span className="text-gray-600 dark:text-gray-400">&lt;</span>
                <span className="text-blue-600 dark:text-blue-400">button</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">onclick</span>=
                <span className="text-purple-600 dark:text-purple-400">"alert('Hi!')"</span>
                <span className="text-gray-600 dark:text-gray-400">&gt;</span>
              </div>
            </div>

            {/* When to use */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                When to Use
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Quick prototypes or demos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Very simple one-line interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Learning and experimenting</span>
                </li>
              </ul>
            </div>

            {/* Pros */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Advantages
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Very quick to write</li>
                <li>✅ Easy to understand for beginners</li>
                <li>✅ No extra files needed</li>
              </ul>
            </div>

            {/* Cons */}
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
              <h4 className="font-semibold mb-3 text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Disadvantages
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>❌ Mixes HTML and JavaScript</li>
                <li>❌ Hard to maintain</li>
                <li>❌ Can't reuse code</li>
                <li>❌ Not recommended for production</li>
              </ul>
            </div>
          </div>

          {/* Example */}
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">inline-example.html</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{inlineExample}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(inlineExample, '', '')}>
              <Play className="w-4 h-4 mr-2" />
              Try Inline Example
            </Button>
          )}

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Best Practice</AlertTitle>
            <AlertDescription>
              While inline JavaScript works, it's better to separate your HTML and JavaScript for cleaner, more maintainable code. Use it only for learning or quick tests.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 2: Internal JavaScript */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileCode className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Method 2: Internal JavaScript
          </CardTitle>
          <CardDescription className="text-base">
            Use &lt;script&gt; tags to keep JavaScript organized within your HTML file.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200/60 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/80 dark:bg-emerald-600/80 rounded-lg">
                <FileCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-300">Script Tag Placement</h3>
                <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Where to place your &lt;script&gt; tags</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* In Head */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Upload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  In &lt;head&gt;
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Loads before page content</p>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs">
                  <div className="text-gray-500">&lt;head&gt;</div>
                  <div className="ml-2">&lt;script&gt;</div>
                  <div className="ml-4 text-gray-500">// Your code</div>
                  <div className="ml-2">&lt;/script&gt;</div>
                  <div className="text-gray-500">&lt;/head&gt;</div>
                </div>
              </div>

              {/* In Body */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Before &lt;/body&gt;
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Recommended ✅</p>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs">
                  <div className="text-gray-500">&lt;body&gt;</div>
                  <div className="ml-2 text-gray-500">...content...</div>
                  <div className="ml-2">&lt;script&gt;</div>
                  <div className="ml-4 text-gray-500">// Your code</div>
                  <div className="ml-2">&lt;/script&gt;</div>
                  <div className="text-gray-500">&lt;/body&gt;</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Why at the end?</h4>
                  <p className="text-sm text-muted-foreground">
                    Placing scripts before &lt;/body&gt; ensures all HTML elements load first, so your JavaScript can access them immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30">
              <span className="uppercase tracking-wide text-emerald-700 dark:text-emerald-300">internal-script.html</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{internalExample}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(internalExample, '', '')}>
              <Play className="w-4 h-4 mr-2" />
              Try Internal Script
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Method 3: External JavaScript */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Method 3: External JavaScript Files
          </CardTitle>
          <CardDescription className="text-base">
            The professional way: separate .js files linked to your HTML.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200/60 dark:border-purple-800/40 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/80 dark:bg-purple-600/80 rounded-lg">
                <Link className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-purple-700 dark:text-purple-300">How It Works</h3>
                <p className="text-xs text-purple-600/70 dark:text-purple-400/70">Link separate JS files with src attribute</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* HTML File */}
              <div>
                <h4 className="font-semibold mb-2 text-sm">1. Your HTML file:</h4>
                <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
                  <div className="px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
                    <span className="text-purple-700 dark:text-purple-300">index.html</span>
                  </div>
                  <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{externalHtml}</pre>
                </div>
              </div>

              {/* JS File */}
              <div>
                <h4 className="font-semibold mb-2 text-sm">2. Your JavaScript file (app.js):</h4>
                <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
                  <div className="px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
                    <span className="text-purple-700 dark:text-purple-300">app.js</span>
                  </div>
                  <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{externalJs}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold mb-2">Reusability</h4>
              <p className="text-sm text-muted-foreground">
                Use the same JS file across multiple HTML pages
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h4 className="font-semibold mb-2">Maintainability</h4>
              <p className="text-sm text-muted-foreground">
                Easier to find, edit, and debug your code
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Browser Caching</h4>
              <p className="text-sm text-muted-foreground">
                Browsers cache .js files for faster page loads
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* defer vs async */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Script Loading: defer vs async
          </CardTitle>
          <CardDescription className="text-base">
            Control when and how your external scripts load with these attributes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* defer */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border-2 border-blue-200/60 dark:border-blue-800/40">
              <div className="font-mono text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">defer</div>
              <p className="text-sm text-muted-foreground mb-3">
                Downloads in parallel but waits to execute until HTML is fully parsed
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs mb-3">
                &lt;script src="app.js" <span className="text-blue-600 dark:text-blue-400">defer</span>&gt;
              </div>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Recommended ✅</Badge>
            </div>

            {/* async */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border-2 border-emerald-200/60 dark:border-emerald-800/40">
              <div className="font-mono text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">async</div>
              <p className="text-sm text-muted-foreground mb-3">
                Downloads and executes as soon as ready (order not guaranteed)
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs mb-3">
                &lt;script src="analytics.js" <span className="text-emerald-600 dark:text-emerald-400">async</span>&gt;
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Independent Scripts</Badge>
            </div>

            {/* None */}
            <div className="p-5 bg-gradient-to-br from-slate-50/60 to-gray-50/60 dark:from-slate-950/10 dark:to-gray-950/10 rounded-xl border-2 border-slate-200/60 dark:border-slate-800/40 opacity-60">
              <div className="font-mono text-xl font-bold text-slate-700 dark:text-slate-300 mb-3">none</div>
              <p className="text-sm text-muted-foreground mb-3">
                Blocks HTML parsing until script downloads and executes
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs mb-3">
                &lt;script src="old.js"&gt;
              </div>
              <Badge variant="outline" className="opacity-60">Avoid ❌</Badge>
            </div>
          </div>

          <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-700 dark:text-amber-300">
              <Lightbulb className="w-5 h-5" />
              Quick Decision Guide
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Use <code className="font-mono">defer</code> for scripts that manipulate the DOM</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Use <code className="font-mono">async</code> for independent scripts (analytics, ads)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Place scripts at end of &lt;body&gt; if you don't use either attribute</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* ES6 Modules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Modern: ES6 Modules (type="module")
          </CardTitle>
          <CardDescription className="text-base">
            Use JavaScript modules for better code organization and modern features.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200/60 dark:border-indigo-800/40 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-500/80 dark:bg-indigo-600/80 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-indigo-700 dark:text-indigo-300">What's Different?</h3>
                <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70">ES6 modules enable import/export</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Old Way */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
                <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-slate-500" />
                  Regular Script
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs mb-2">
                  &lt;script src="app.js"&gt;&lt;/script&gt;
                </div>
                <p className="text-xs text-muted-foreground">No import/export support</p>
              </div>

              {/* New Way */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  Module Script
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs mb-2">
                  &lt;script src="app.js" <span className="text-indigo-600 dark:text-indigo-400">type="module"</span>&gt;
                </div>
                <p className="text-xs text-muted-foreground">Modern import/export syntax</p>
              </div>
            </div>

            {/* Example */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Example Usage:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
                  <div className="px-3 py-2 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30">
                    <span className="text-indigo-700 dark:text-indigo-300">utils.js</span>
                  </div>
                  <pre className="font-mono text-xs px-3 py-2 whitespace-pre">
<span className="text-blue-600 dark:text-blue-400">export</span> <span className="text-purple-600 dark:text-purple-400">function</span> <span className="text-amber-600 dark:text-amber-400">greet</span>(name) {'{'}
  <span className="text-blue-600 dark:text-blue-400">return</span> <span className="text-green-600 dark:text-green-400">`Hello, ${'$'}{'{'}name{'}'}`</span>;
{'}'}
                  </pre>
                </div>

                <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
                  <div className="px-3 py-2 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30">
                    <span className="text-indigo-700 dark:text-indigo-300">app.js</span>
                  </div>
                  <pre className="font-mono text-xs px-3 py-2 whitespace-pre">
<span className="text-blue-600 dark:text-blue-400">import</span> {'{'} greet {'}'} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'./utils.js'</span>;

console.log(greet(<span className="text-green-600 dark:text-green-400">'World'</span>));
                  </pre>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                <p className="text-sm font-semibold mb-1">No Global Scope</p>
                <p className="text-xs text-muted-foreground">Variables stay private</p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                <p className="text-sm font-semibold mb-1">Auto Strict Mode</p>
                <p className="text-xs text-muted-foreground">Catches common errors</p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                <p className="text-sm font-semibold mb-1">Deferred by Default</p>
                <p className="text-xs text-muted-foreground">No blocking</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Advanced Script Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Additional attributes for security, compatibility, and performance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* nomodule */}
            <div className="rounded-xl border-2 border-cyan-200/60 dark:border-cyan-800/40 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/10 dark:to-blue-950/10 p-5">
              <div className="font-mono text-lg font-bold text-cyan-700 dark:text-cyan-300 mb-3">nomodule</div>
              <p className="text-sm text-muted-foreground mb-3">
                Fallback for browsers that don't support ES6 modules
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs space-y-1">
                <div>&lt;script type="module" src="modern.js"&gt;</div>
                <div>&lt;script <span className="text-cyan-600 dark:text-cyan-400">nomodule</span> src="legacy.js"&gt;</div>
              </div>
            </div>

            {/* crossorigin */}
            <div className="rounded-xl border-2 border-emerald-200/60 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 p-5">
              <div className="font-mono text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-3">crossorigin</div>
              <p className="text-sm text-muted-foreground mb-3">
                Enable CORS for scripts from other domains
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
                &lt;script src="cdn.js" <span className="text-emerald-600 dark:text-emerald-400">crossorigin="anonymous"</span>&gt;
              </div>
            </div>

            {/* integrity */}
            <div className="rounded-xl border-2 border-purple-200/60 dark:border-purple-800/40 bg-gradient-to-br from-purple-50/40 to-pink-50/40 dark:from-purple-950/10 dark:to-pink-950/10 p-5">
              <div className="font-mono text-lg font-bold text-purple-700 dark:text-purple-300 mb-3">integrity</div>
              <p className="text-sm text-muted-foreground mb-3">
                Verify script hasn't been tampered with (security)
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
                &lt;script src="cdn.js" <span className="text-purple-600 dark:text-purple-400">integrity="sha384-..."</span>&gt;
              </div>
            </div>

            {/* referrerpolicy */}
            <div className="rounded-xl border-2 border-amber-200/60 dark:border-amber-800/40 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 dark:from-amber-950/10 dark:to-yellow-950/10 p-5">
              <div className="font-mono text-lg font-bold text-amber-700 dark:text-amber-300 mb-3">referrerpolicy</div>
              <p className="text-sm text-muted-foreground mb-3">
                Control what referrer info is sent
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
                &lt;script src="app.js" <span className="text-amber-600 dark:text-amber-400">referrerpolicy="no-referrer"</span>&gt;
              </div>
            </div>
          </div>

          {/* Security Best Practice */}
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Security Tip</AlertTitle>
            <AlertDescription>
              When loading scripts from CDNs, always use both <code className="font-mono">integrity</code> and <code className="font-mono">crossorigin</code> attributes to ensure the script hasn't been modified maliciously.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Visual Comparison Chart */}
      <Card className="bg-gradient-to-br from-slate-50/60 to-gray-50/60 dark:from-slate-950/10 dark:to-gray-950/10 border border-slate-200/50 dark:border-slate-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowRight className="w-6 h-6 text-slate-600/80 dark:text-slate-400/80" />
            Quick Reference Chart
          </CardTitle>
          <CardDescription className="text-base">
            At-a-glance comparison of all script loading methods and attributes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Attribute</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">When to Use</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Blocks HTML?</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Execution Order</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono">defer</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Scripts that need DOM</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">No ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Guaranteed order</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono">async</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Independent scripts</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">No ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Random order</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono">type="module"</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Modern ES6 modules</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">No ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Deferred by default</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono">none</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Legacy code</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge variant="outline" className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">Yes ❌</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Immediate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices Summary
          </CardTitle>
          <CardDescription className="text-base">
            Follow these guidelines for professional JavaScript integration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Use external .js files for production</li>
                <li>✅ Add <code className="font-mono">defer</code> to script tags</li>
                <li>✅ Use <code className="font-mono">type="module"</code> for modern code</li>
                <li>✅ Add integrity checks for CDN scripts</li>
                <li>✅ Keep JavaScript separate from HTML</li>
                <li>✅ Use meaningful file names</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Inline JavaScript in production</li>
                <li>❌ Scripts without defer/async in &lt;head&gt;</li>
                <li>❌ Loading CDN scripts without integrity</li>
                <li>❌ Mixing HTML and JavaScript logic</li>
                <li>❌ Large scripts in internal tags</li>
                <li>❌ Blocking scripts that delay page load</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
