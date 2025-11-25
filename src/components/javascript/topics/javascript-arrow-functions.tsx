'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ArrowRightCircle,
  Sparkles,
  Zap,
  Braces,
  Activity,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptArrowFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Arrow Functions Demo</title>
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
    <p class="muted">Click run then open DevTools console to see arrow functions in action.</p>
    <div class="grid" id="preview"></div>
    <code id="snippet"></code>
    <button id="run">Run arrow demo</button>
  </div>
  <script src="./arrow-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

// One-liners
const add = (a, b) => a + b; // add(2,3) -> 5
const greet = name => 'Hi ' + name; // greet('Ada') -> "Hi Ada"
const toUser = name => ({ name, active: true }); // returns object

// Lexical this
const counter = {
  total: 0,
  incLater() {
    setTimeout(() => {
      this.total += 1;
      console.log('total now', this.total);
    }, 0);
  }
};

console.log(add(2, 3));
console.log(greet('Ada'));
console.log(toUser('Ada'));
counter.incLater();

document.getElementById('run').onclick = () => {
  document.getElementById('preview').innerHTML = [
    'const add = (a,b) => a + b;',
    'const greet = name => "Hi " + name;',
    'const toUser = name => ({ name, active: true });',
    'setTimeout(() => this.total++, 0)'
  ].map(text => '<div class="pill">' + text + '</div>').join('');

  document.getElementById('snippet').textContent =
'const add = (a,b) => a + b;\\n' +
'const greet = name => \"Hi \" + name;\\n' +
'const toUser = name => ({ name, active: true });';
};`;

export default function JavaScriptArrowFunctions({ onOpenWebPlayground }: JavaScriptArrowFunctionsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ArrowRightCircle}
        category="JavaScript Fundamentals"
        title="Arrow Functions"
        description="Write concise, expression-first functions with lexical this and predictable returns."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Arrows?
          </CardTitle>
          <CardDescription className="text-base">
            Short syntax, implicit returns, and lexical this make arrows ideal for callbacks and inline helpers.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Concise</h3>
            </div>
            <p className="text-sm text-muted-foreground">Drop `function` keyword and braces when returning expressions.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Short</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Lexical this</h3>
            </div>
            <p className="text-sm text-muted-foreground">Inherit `this` from the surrounding scope—great for callbacks.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Stable</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Braces className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Expression-first</h3>
            </div>
            <p className="text-sm text-muted-foreground">Return expressions directly; wrap objects in parentheses.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Inline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Arrows vs regular functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Braces className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Arrows vs Regular Functions
          </CardTitle>
          <CardDescription className="text-base">
            Know what arrows omit so you pick the right tool.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Arrows give you</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>Lexical this (inherits outer)</div>
              <div>Short syntax for callbacks</div>
              <div>Implicit return for expressions</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Arrows do NOT have</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>No own this/arguments</div>
              <div>No prototype (not for constructors)</div>
              <div>No implicit binding (great for setTimeout)</div>
            </div>
            <Alert>
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Use regular functions when you need `this` rebinding, `arguments`, or to be used as constructors.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Syntax & patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowRightCircle className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Canonical Arrow Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Start with these minimal, runnable snippets—covering params, returns, and objects.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Parameters & return</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const add = (a, b) =&gt; a + b;</div>
              <div>const greet = name =&gt; 'Hi ' + name;</div>
              <div>const toUser = name =&gt; ({'{'} name, active: true {'}'});</div>
            </div>
            <p className="text-sm text-muted-foreground">Use parens for multiple params; wrap objects to return them.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Callbacks & lexical this</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const nums = [1,2,3];</div>
              <div>const doubled = nums.map(n =&gt; n * 2);</div>
              <div>const timer = {'{'} total: 0, inc() {'{'} setTimeout(() =&gt; this.total++, 0); {'}'} {'}'};</div>
            </div>
            <Alert>
              <AlertTitle>Remember</AlertTitle>
              <AlertDescription>Arrows don’t have their own `this`, `arguments`, or `prototype`—avoid them for constructors.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
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
              <li>✅ Use arrows for inline callbacks (map/filter/reduce).</li>
              <li>✅ Prefer implicit returns for short expressions.</li>
              <li>✅ Wrap returned objects in parens.</li>
              <li>✅ Keep arrows small—extract longer logic to named functions.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Using arrows as constructors (no `prototype`).</li>
              <li>❌ Relying on `this` rebinding inside arrows.</li>
              <li>❌ Overusing implicit returns when readability suffers.</li>
              <li>❌ Returning different types without clear intent.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Arrow Functions Live
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see concise returns and lexical this in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">arrow-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Arrow forms + lexical this</span>
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
