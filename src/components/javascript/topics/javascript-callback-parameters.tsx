'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Link2,
  Sparkles,
  Clock3,
  ListChecks,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptCallbackParametersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Callback Parameters Demo</title>
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
    <p class="muted">Click run then open DevTools console to see callback params in action.</p>
    <div class="grid" id="preview"></div>
    <code id="snippet"></code>
    <button id="run">Run callback demo</button>
  </div>
  <script src="./callback-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

// map passes (value, index, array)
const numbers = [10, 20, 30];
const withIndex = numbers.map((value, index, array) => {
  console.log('map args:', value, index, array === numbers);
  return value + index;
});

// setTimeout passes no args; use closure
setTimeout(() => console.log('timeout fired'), 0);

// Custom async-style callback (err, data)
function fetchUser(onSuccess, onError) {
  const ok = true;
  if (ok) onSuccess({ name: 'Ada', plan: 'pro' });
  else onError(new Error('Failed'));
}

fetchUser(
  (user) => console.log('success user', user),
  (err) => console.error('error', err.message)
);

console.log('map result', withIndex); // [10,21,32]

document.getElementById('run').onclick = () => {
  document.getElementById('preview').innerHTML = [
    'arr.map((value, index, array) => ...)',
    'setTimeout(() => console.log("done"), 0)',
    'fetchUser((data) => ..., (err) => ...)'
  ].map(text => '<div class="pill">' + text + '</div>').join('');

  document.getElementById('snippet').textContent =
'arr.map((value, index, array) => value + index)\\n' +
'setTimeout(() => console.log(\"done\"), 0)\\n' +
'fetchUser((data) => { ... }, (err) => { ... })';
};`;

export default function JavaScriptCallbackParameters({ onOpenWebPlayground }: JavaScriptCallbackParametersProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Link2}
        category="JavaScript Fundamentals"
        title="Callback Parameters"
        description="Understand what arguments callback APIs pass you and how to design clear callback signatures."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Callback Params Matter
          </CardTitle>
          <CardDescription className="text-base">
            Callbacks receive specific arguments: know the order, name them clearly, and validate before using.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Know the shape</h3>
            </div>
            <p className="text-sm text-muted-foreground">map gives (value, index, array); setTimeout gives none; custom APIs vary.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Signature</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Clock3 className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Async ready</h3>
            </div>
            <p className="text-sm text-muted-foreground">Callbacks often signal completion or errors—design both paths.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Success/Error</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Name clearly</h3>
            </div>
            <p className="text-sm text-muted-foreground">Use descriptive param names (`value`, `index`, `array`, `err`, `result`) to avoid confusion.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Clarity</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Canonical signatures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Link2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Canonical Callback Signatures
          </CardTitle>
          <CardDescription className="text-base">
            Minimal, runnable snippets showing real callback arguments and outputs.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Array helpers</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>arr.map((value, index, array) =&gt; value + index);</div>
              <div>arr.filter((value, index, array) =&gt; value {'>'} 10);</div>
              <div className="text-slate-500">// map log: value, index, same array</div>
            </div>
            <p className="text-sm text-muted-foreground">Most array callbacks give (value, index, array) in that order.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Node-style (err, result)</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>fs.readFile('file.txt', (err, data) =&gt; {'{'} ... {'}'});</div>
              <div>callback(new Error('fail'), null);</div>
              <div>callback(null, data);</div>
              <div className="text-slate-500">// handle err first, data second</div>
            </div>
            <Alert>
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Design async callbacks to deliver error first, result second, or migrate to Promises.</AlertDescription>
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
              <li>✅ Name callback parameters descriptively (value, index, array).</li>
              <li>✅ Handle both success and error paths in async callbacks.</li>
              <li>✅ Keep callbacks pure when possible—avoid unexpected mutations.</li>
              <li>✅ Prefer Promises/async-await for complex async flows.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Ignoring the error argument in Node-style callbacks.</li>
              <li>❌ Over-nesting callbacks; refactor to Promises to avoid callback hell.</li>
              <li>❌ Relying on implicit globals inside callbacks.</li>
              <li>❌ Forgetting to return or handle results inside array callbacks.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Callback Parameters
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see real callback signatures and arguments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">callback-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">map args, timeout, custom (err, data)</span>
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
