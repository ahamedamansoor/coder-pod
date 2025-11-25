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

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Callback Parameters Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: #f1f5f9;
      color: #0f172a;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .panel {
      text-align: center;
      background: #fff;
      border-radius: 18px;
      padding: 40px 32px;
      box-shadow: 0 20px 70px rgba(15, 23, 42, 0.08);
      max-width: 520px;
      width: 100%;
    }
    h1 {
      margin-bottom: 12px;
      font-size: 28px;
      color: #2563eb;
    }
    p {
      color: #475569;
      line-height: 1.6;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Callback Arguments</h1>
    <p>Open your browser console to see the exact values passed to each callback.</p>
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
console.log('Open the console any time to rerun this logic.');`;

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

      {/* Beginner walkthrough */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-amber-500/80 dark:text-amber-300/80" />
            Function Parameters 101
          </CardTitle>
          <CardDescription className="text-base">
            Start with tiny functions, name the inputs, and pass callbacks that expect those inputs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border space-y-2">
              <h4 className="font-semibold">Step 1: Plain function</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 text-xs font-mono whitespace-pre-wrap">
{`function add(a, b) {
  return a + b;
}

add(2, 3); // a=2, b=3`}
              </pre>
              <SnippetOutput lines={['add(2, 3); // returns 5']} />
              <p className="text-sm text-muted-foreground">Regular parameters are listed inside parentheses. Order matters.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
              <h4 className="font-semibold">Step 2: Function as parameter</h4>
              <pre className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 text-xs font-mono whitespace-pre-wrap border">
{`function greet(name, formatter) {
  const message = formatter(name);
  console.log(message);
}

greet('Ada', (value) => 'Hi ' + value + '!');`}
              </pre>
              <SnippetOutput lines={["console.log(message); // 'Hi Ada!'"]} />
              <p className="text-sm text-muted-foreground">Here the second parameter is a callback. It receives the <code>name</code> value.</p>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Extra beginner-friendly callback examples
            </h4>
            <div className="grid md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 space-y-1 border">
                <div>// Timer callback (no parameters)</div>
                <div>setTimeout(() =&gt; console.log('time!'), 500);</div>
                <div className="text-slate-500">// callback runs later, but no args</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 space-y-1 border">
                <div>// Iterating list (value, index)</div>
                <div>['JS', 'TS'].forEach((value, index) =&gt; {'{'}</div>
                <div className="pl-2">console.log(index, value);</div>
                <div>{'}'});</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 space-y-1 border md:col-span-2">
                <div>// Custom helper with success + failure callbacks</div>
                <div>{`function loadUser(onSuccess, onFailure) {`}</div>
                <div className="pl-2">{`const ok = true;`}</div>
                <div className="pl-2">{`if (ok) onSuccess({ name: 'Ada' });`}</div>
                <div className="pl-2">{`else onFailure('Could not load');`}</div>
                <div>{`}`}</div>
                <div>{`loadUser(`}</div>
                <div className="pl-2">{`(user) => console.log('user', user),`}</div>
                <div className="pl-2">{`(message) => console.error(message)`}</div>
                <div>{`);`}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Identify what each callback receives (value, index, event, error) and write descriptive parameter names so the next
              developer can follow your intent.
            </p>
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
              <div>arr.reduce((total, value, index, array) =&gt; total + value, 0);</div>
              <div className="text-slate-500">// reduce gets accumulator + value</div>
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

      {/* Extra practical examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practical Callback Examples
          </CardTitle>
          <CardDescription className="text-base">
            Quick references for everyday APIs and patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">DOM events</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>button.addEventListener('click', event =&gt; {'{'} ... {'}'});</div>
              <div className="text-slate-500">// event carries target, coordinates, etc.</div>
              <div>{`input.addEventListener('input', ({ target }) => console.log(target.value));`}</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Promise-style adapters</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const toPromise = (fn) =&gt;</div>
              <div className="pl-2">new Promise((resolve, reject) =&gt; fn(resolve, reject));</div>
              <div>toPromise((res) =&gt; res('done')).then(console.log);</div>
            </div>
            <p className="text-sm text-muted-foreground">Wrap callbacks to integrate with Promise/async flows.</p>
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

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ callback parameters, signatures, and argument patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights callback parameter patterns (array methods, event handlers, error-first callbacks, and custom signatures) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
