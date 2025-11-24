'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  GitCompare,
  ToggleLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Play,
} from 'lucide-react';

interface JavaScriptTernaryOperatorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Ternary Demo</title>
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
    .row { display: grid; gap: 10px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-top: 12px; }
    .pill { padding: 10px 12px; border-radius: 12px; background: #f1f5f9; border: 1px dashed #e2e8f0; font-weight: 600; }
    .muted { color: #475569; margin: 0; }
    button {
      background: linear-gradient(120deg, #2563eb, #38bdf8);
      color: #fff;
      border: none;
      border-radius: 12px;
      padding: 12px 16px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
      margin-top: 14px;
    }
  </style>
</head>
<body>
  <div class="card">
    <p class="muted">Click run then open DevTools console to compare ternary and if/else output.</p>
    <div class="row" id="preview"></div>
    <button id="run">Run ternary demo</button>
  </div>
  <script src="./ternary-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const isMember = true;
const cartTotal = 120;

const discount = isMember ? 0.1 : 0;
const label = cartTotal > 100 ? 'High value' : 'Standard';
const shipping = cartTotal > 50 ? 'Free' : 'Paid';

console.log('Discount:', discount);
console.log('Label:', label);
console.log('Shipping:', shipping);

// Avoid nested ternaries by extracting expressions
const role = 'admin';
const access = role === 'admin' ? 'all' : role === 'editor' ? 'partial' : 'view';
console.log('Access (nested):', access);

document.getElementById('run').onclick = () => {
  document.getElementById('preview').innerHTML = [
    'Member discount: ' + (discount * 100) + '%',
    'Order label: ' + label,
    'Shipping: ' + shipping,
    'Access level: ' + access + ' (from nested ternary)'
  ].map(text => '<div class="pill">' + text + '</div>').join('');
};`;

export default function JavaScriptTernaryOperator({ onOpenWebPlayground }: JavaScriptTernaryOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ToggleLeft}
        category="JavaScript Fundamentals"
        title="Ternary Operator"
        description="Write concise conditionals with the ternary (? :) operator instead of verbose if/else."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Use Ternary?
          </CardTitle>
          <CardDescription className="text-base">
            Express small conditional assignments inline, keeping logic readable and compact.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ToggleLeft className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Inline decisions
            </h3>
            <p className="text-sm text-muted-foreground">Assign based on a condition without extra lines.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">? :</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Clear branches
            </h3>
            <p className="text-sm text-muted-foreground">Great for simple either/or scenarios.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">simple</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Keep it readable
            </h3>
            <p className="text-sm text-muted-foreground">Avoid deep nesting—extract to variables or functions.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">one level</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Syntax
          </CardTitle>
          <CardDescription className="text-base">
            `condition ? expressionIfTrue : expressionIfFalse`
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Example</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const age = 19;</div>
              <div>const label = age {'>='} 18 ? 'Adult' : 'Minor';</div>
            </div>
            <p className="text-sm text-muted-foreground">Readable for a single decision.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">If/Else equivalent</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>let label;</div>
              <div>if (age {'>='} 18) {'{'} label = 'Adult'; {'}'}</div>
              <div>else {'{'} label = 'Minor'; {'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Ternary saves lines when logic is short.</p>
          </div>
        </CardContent>
      </Card>

      {/* Nested ternary caution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Avoid Nested Ternaries
          </CardTitle>
          <CardDescription className="text-base">
            Nesting more than one ternary quickly reduces readability. Extract to variables or functions instead.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Hard to read
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const role = 'editor';</div>
              <div>const access = role === 'admin'</div>
              <div className="pl-4">? 'all'</div>
              <div className="pl-4">: role === 'editor' ? 'partial' : 'view';</div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Clear alternative
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const role = 'editor';</div>
              <div>let access = 'view';</div>
              <div>if (role === 'admin') access = 'all';</div>
              <div>else if (role === 'editor') access = 'partial';</div>
            </div>
            <p className="text-sm text-muted-foreground">Small functions beat nested ternaries for clarity.</p>
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
              <li>✅ Keep ternaries to a single decision.</li>
              <li>✅ Extract results into well-named variables.</li>
              <li>✅ Use parentheses if expressions are long.</li>
              <li>✅ Prefer strict comparisons inside ternaries.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Chaining multiple ternaries on one line.</li>
              <li>❌ Mixing side effects inside ternaries.</li>
              <li>❌ Repeating complex conditions—store them first.</li>
              <li>❌ Using ternaries when if/else is clearer.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try the Ternary Operator
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see ternary decisions in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">ternary-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Ternary, nested caution, console output</span>
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
