'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  RefreshCcw,
  ListOrdered,
  ListChecks,
  Gauge,
  Timer,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  Flag,
} from 'lucide-react';

interface JavaScriptLoopsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Loops Demo</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 15% 20%, #eef2ff, #f8fafc 45%), #f8fafc;
      color: #0f172a;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .card {
      width: min(760px, 100%);
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      box-shadow: 0 18px 70px rgba(15, 23, 42, 0.08);
      padding: 22px;
    }
    .grid { display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-top: 12px; }
    .pill { padding: 10px 12px; border-radius: 12px; background: #f1f5f9; border: 1px dashed #e2e8f0; font-weight: 600; }
    code { background: #0f172a; color: #e2e8f0; padding: 8px 10px; border-radius: 8px; display: block; white-space: pre; }
    button {
      margin-top: 14px;
      background: linear-gradient(120deg, #2563eb, #38bdf8);
      color: #fff;
      border: none;
      border-radius: 12px;
      padding: 12px 16px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
    }
  </style>
</head>
<body>
  <div class="card">
    <p class="muted">Click run then open DevTools console to see loop outputs.</p>
    <div class="grid" id="preview"></div>
    <code id="snippet"></code>
    <button id="run">Run loops demo</button>
  </div>
  <script src="./loops-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const numbers = [1, 2, 3];

// for: index + control
for (let i = 0; i < numbers.length; i++) {
  console.log('for index', i, 'value', numbers[i]);
}

// for...of: simple values
for (const n of numbers) {
  console.log('for...of value', n);
}

// while: runs while condition is true
let count = 0;
while (count < 2) {
  console.log('while count', count);
  count++;
}

// forEach: callback for each item (no break)
numbers.forEach((n, i) => console.log('forEach idx', i, 'value', n));

document.getElementById('run').onclick = () => {
  document.getElementById('preview').innerHTML = [
    'for (i < length) { ... }',
    'for...of (values only)',
    'while (condition) { ... }',
    'arr.forEach(cb)'
  ].map(text => '<div class="pill">' + text + '</div>').join('');

  document.getElementById('snippet').textContent =
'for (let i = 0; i < arr.length; i++) { ... }\\n' +
'for (const item of arr) { ... }\\n' +
'while (condition) { ... }\\n' +
'arr.forEach(cb)';
};`;

export default function JavaScriptLoops({ onOpenWebPlayground }: JavaScriptLoopsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={RefreshCcw}
        category="JavaScript Fundamentals"
        title="Loops"
        description="Repeat actions with for, while, for...of, and forEach—choose the right loop for the job."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Loops?
          </CardTitle>
          <CardDescription className="text-base">
            Automate repetitive tasks: iterate lists, retry operations, or run until a condition changes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Iterate data
            </h3>
            <p className="text-sm text-muted-foreground">Process arrays and collections item by item.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Arrays</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Timer className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Run until done
            </h3>
            <p className="text-sm text-muted-foreground">Use while loops when the count depends on a condition.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Conditions</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Gauge className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Choose the right tool
            </h3>
            <p className="text-sm text-muted-foreground">Pick based on readability, needed indexes, and control.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Trade-offs</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Visual flow */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-7 h-7 text-blue-600/80 dark:text-blue-400/80" />
            Loop Selection Diagram
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Decide which loop to use based on what you need—index, early exit, or simple iteration.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <RefreshCcw className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h4 className="font-semibold">Need index + control?</h4>
              </div>
              <p className="text-sm text-muted-foreground">Use classic for when you need the counter, step size, or to break early.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>for (let i = 0; i {'<'} arr.length; i++) {'{'} ... {'}'}</div>
                <div>if (match) break;</div>
              </div>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h4 className="font-semibold">Value-only, readable?</h4>
              </div>
              <p className="text-sm text-muted-foreground">Reach for for...of to keep iteration clean when you don’t need indexes.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>for (const user of users) {'{'} ... {'}'}</div>
              </div>
            </div>
            <div className="p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h4 className="font-semibold">Need early exit/continue?</h4>
              </div>
              <p className="text-sm text-muted-foreground">Pick for/while to break or continue; avoid forEach when you need to stop early.</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>for (const item of items) {'{'} if (!item) continue; ... {'}'}</div>
                <div>while (!ready) {'{'} attempt++; if (attempt {'>'} 5) break; {'}'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Syntax & examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListOrdered className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Common Loop Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Compare syntax and when to use each loop.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Indexed and conditional</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>for (let i = 0; i {'<'} items.length; i++) {'{'} ... {'}'}</div>
              <div>while (count {'<'} 5) {'{'} count++; {'}'}</div>
              <div>do {'{'} attempt++; {'}'} while (!success);</div>
            </div>
            <p className="text-sm text-muted-foreground">Use when you need indexes or dynamic stop conditions.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Array-friendly</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>for (const item of items) {'{'} ... {'}'}</div>
              <div>items.forEach((item, i) =&gt; ...);</div>
              <div>for (const key in obj) {'{'} ... {'}'}</div>
            </div>
            <Alert>
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>Use `for...in` for object keys; avoid it on arrays because order can be unexpected.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Performance & pitfalls */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Pick the loop that matches your need (index vs values vs condition).</li>
              <li>✅ Break/return early to stop work when you find what you need.</li>
              <li>✅ Cache array length in classic for loops in hot paths.</li>
              <li>✅ Use `for...of` for readability when index isn’t required.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Infinite loops—ensure conditions change.</li>
              <li>❌ Using `forEach` when you need `break`/`return` to exit early.</li>
              <li>❌ Mutating arrays while iterating without care (indexes shift).</li>
              <li>❌ `for...in` on arrays—stick to `for` or `for...of`.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Loop control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Flag className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Control Statements
          </CardTitle>
          <CardDescription className="text-base">
            Break out early, skip iterations, and guard against infinite loops.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">break & continue</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>for (const item of items) {'{'}</div>
              <div className="pl-4">if (!item) continue; <span className="text-slate-500">// skip blanks</span></div>
              <div className="pl-4">if (item.id === target) {'{'} found = item; break; {'}'}</div>
              <div>{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Use continue to skip, break to exit as soon as you’re done.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Prevent infinite loops</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>let safety = 0;</div>
              <div>while (!ready && safety {'<'} 100) {'{'}</div>
              <div className="pl-4">safety++;</div>
              <div className="pl-4">checkStatus();</div>
              <div>{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Always mutate the condition and consider a safety counter for retries.</p>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Loops Live
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see each loop pattern in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">loops-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">for, for...of, while, forEach</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
