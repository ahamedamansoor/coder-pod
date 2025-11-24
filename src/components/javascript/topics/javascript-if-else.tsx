'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  SplitSquareHorizontal,
  GitCompare,
  ToggleLeft,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Sparkles,
  Play,
} from 'lucide-react';

interface JavaScriptIfElseProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>If Else Demo</title>
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
    <p class="muted">Click run then open DevTools console to watch if/else branches fire.</p>
    <div class="row" id="preview"></div>
    <button id="run">Run conditional demo</button>
  </div>
  <script src="./if-else-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const time = 14;
const isMember = true;

if (time < 12) {
  console.log('Morning routine');
} else if (time < 18) {
  console.log('Afternoon tasks');
} else {
  console.log('Evening wind-down');
}

let shipping;
if (isMember && time < 18) {
  shipping = 'Same-day';
} else if (isMember) {
  shipping = 'Free 2-day';
} else {
  shipping = 'Standard';
}

console.log('Shipping selected:', shipping);

// Truthy/Falsy reminder
const coupon = '';
if (coupon) {
  console.log('Coupon applied');
} else {
  console.log('No coupon provided (empty string is falsy)');
}

document.getElementById('run').onclick = () => {
  document.getElementById('preview').innerHTML = [
    'Time: ' + time,
    'Member: ' + isMember,
    'Shipping: ' + shipping,
    'Coupon?: ' + (coupon ? 'yes' : 'no (falsy)')
  ].map(text => '<div class="pill">' + text + '</div>').join('');
};`;

export default function JavaScriptIfElse({ onOpenWebPlayground }: JavaScriptIfElseProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={SplitSquareHorizontal}
        category="JavaScript Fundamentals"
        title="If...Else Statements"
        description="Control program flow by branching on conditions with if, else if, and else."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why If/Else?
          </CardTitle>
          <CardDescription className="text-base">
            Branch logic, handle edge cases, and keep code explicit when conditions change outcomes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ToggleLeft className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Direct flow
            </h3>
            <p className="text-sm text-muted-foreground">Choose exactly one path based on conditions.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">Branch</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Handle cases
            </h3>
            <p className="text-sm text-muted-foreground">Use else-if for multiple, ordered checks.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">Else-if</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Guard edges
            </h3>
            <p className="text-sm text-muted-foreground">Add else for safe defaults when no conditions match.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">Fallback</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <SplitSquareHorizontal className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Structure
          </CardTitle>
          <CardDescription className="text-base">
            Conditions run top-to-bottom; the first match wins.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Template</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>if (condition) {'{'} ... {'}'}</div>
              <div>else if (other) {'{'} ... {'}'}</div>
              <div>else {'{'} ... {'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Stop checking once a branch runs.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Example</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const score = 82;</div>
              <div>let grade;</div>
              <div>if (score {'>='} 90) grade = 'A';</div>
              <div>else if (score {'>='} 80) grade = 'B';</div>
              <div>else grade = 'C';</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Practical Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Guard clauses and truthy/falsy checks keep conditions tight.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <h4 className="font-semibold">Guard clauses</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>if (!user) {'{'} return 'Guest'; {'}'}</div>
              <div>if (!user.isActive) {'{'} return 'Inactive'; {'}'}</div>
              <div>return 'Active';</div>
            </div>
            <p className="text-sm text-muted-foreground">Exit early to avoid deep nesting.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Truthy / Falsy</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>if (input) {'{'} ... {'}'}</div>
              <div className="text-slate-500">// '', 0, null, undefined, NaN are falsy</div>
            </div>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Remember</AlertTitle>
              <AlertDescription>Check exact conditions for numbers/strings when zero or empty strings are valid values.</AlertDescription>
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
              <li>✅ Order conditions from most specific to least.</li>
              <li>✅ Use early returns to reduce nesting.</li>
              <li>✅ Keep branches short; extract helper functions if needed.</li>
              <li>✅ Default with else when all cases must be handled.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Deeply nested if/else pyramids.</li>
              <li>❌ Duplicate complex conditions—store them in variables.</li>
              <li>❌ Forgetting an else when one is necessary.</li>
              <li>❌ Using ternary for multi-branch logic—prefer if/else.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try If/Else Live
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to watch branches execute.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">if-else-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">if, else-if, else, truthy/falsy</span>
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
