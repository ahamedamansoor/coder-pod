'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Calculator,
  Scale,
  GitCompare,
  ToggleLeft,
  Type,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptOperatorsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Operators Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 48px 32px;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
      max-width: 600px;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
      font-size: 32px;
    }
    p {
      color: #64748b;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Monaco', monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔢 Operators</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const a = 10;
const b = 3;

console.log('Arithmetic');
console.log('a + b =', a + b);
console.log('a % b =', a % b);

let count = 5;
count += 2;
console.log('Assignment: count += 2 ->', count);

console.log('');
console.log('Comparison');
console.log('a > b ?', a > b);
console.log('a === "10"?', a === '10');

console.log('');
console.log('Logical');
const loggedIn = true;
const isAdmin = false;
console.log('loggedIn && isAdmin ->', loggedIn && isAdmin);
console.log('loggedIn || isAdmin ->', loggedIn || isAdmin);

console.log('');
console.log('Type checking');
console.log('typeof a ->', typeof a);
console.log('typeof null ->', typeof null);

console.log('Open this console any time to see operators in action.');`;

export default function JavaScriptOperators({ onOpenWebPlayground }: JavaScriptOperatorsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Calculator}
        category="JavaScript Fundamentals"
        title="Operators"
        description="Perform calculations, compare values, combine conditions, and inspect types with JavaScript operators."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Operator Categories
          </CardTitle>
          <CardDescription className="text-base">
            Five core groups cover most everyday tasks: arithmetic, assignment, comparison, logical, and type-checking.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-5 gap-3">
          {[
            { label: 'Arithmetic', color: 'blue' },
            { label: 'Assignment', color: 'amber' },
            { label: 'Comparison', color: 'emerald' },
            { label: 'Logical', color: 'purple' },
            { label: 'Type/Unary', color: 'indigo' },
          ].map(({ label, color }) => (
            <div
              key={label}
              className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-3 space-y-2"
            >
              <h3 className="font-semibold">{label}</h3>
              <Badge
                className={`bg-${color}-100/80 text-${color}-700 dark:bg-${color}-900/30 dark:text-${color}-300 border border-${color}-300/50 dark:border-${color}-700/40`}
              >
                Core set
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Arithmetic & Assignment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Calculator className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Arithmetic & Assignment
          </CardTitle>
          <CardDescription className="text-base">
            Modify numbers and variables with expressive operators.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Arithmetic
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>2 + 3 // addition</div>
              <div>10 - 4 // subtraction</div>
              <div>6 * 7 // multiplication</div>
              <div>9 / 3 // division</div>
              <div>10 % 3 // remainder</div>
              <div>2 ** 3 // exponent</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Assignment
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>let total = 10;</div>
              <div>total += 5; <span className="text-slate-500">// 15</span></div>
              <div>total -= 3; <span className="text-slate-500">// 12</span></div>
              <div>total *= 2; <span className="text-slate-500">// 24</span></div>
              <div>total /= 4; <span className="text-slate-500">// 6</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitCompare className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Comparison Operators
          </CardTitle>
          <CardDescription className="text-base">
            Check equality or ordering. Prefer strict equality to avoid type coercion surprises.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Strict Equality (===)
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>'5' === 5 <span className="text-rose-500">// false</span></div>
              <div>5 === 5 <span className="text-emerald-500">// true</span></div>
              <div>null === undefined <span className="text-rose-500">// false</span></div>
            </div>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Use === over == to avoid implicit conversions.</AlertDescription>
            </Alert>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <GitCompare className="w-5 h-5" />
              Relational
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>10 {'>'} 3 <span className="text-emerald-500">// true</span></div>
              <div>2 {'<='} 2 <span className="text-emerald-500">// true</span></div>
              <div>'b' {'>'} 'a' <span className="text-emerald-500">// true (lexicographic)</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logical */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Logical Operators
          </CardTitle>
          <CardDescription className="text-base">
            Combine conditions and use short-circuiting to simplify defaults.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <h4 className="font-semibold">Boolean logic</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>true && false <span className="text-rose-500">// false</span></div>
              <div>true || false <span className="text-emerald-500">// true</span></div>
              <div>!true <span className="text-rose-500">// false</span></div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Short-circuit defaults</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const name = input || 'Guest';</div>
              <div>const enabled = isAdmin && featureFlag;</div>
            </div>
            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Remember</AlertTitle>
              <AlertDescription>Logical operators return the last evaluated operand, not just true/false.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Type & unary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Type className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            typeof & Unary Helpers
          </CardTitle>
          <CardDescription className="text-base">
            Inspect types and flip booleans or signs with quick operators.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30 space-y-3">
            <h4 className="font-semibold">typeof quirks</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>typeof 42 <span className="text-emerald-500">// "number"</span></div>
              <div>typeof 'hi' <span className="text-emerald-500">// "string"</span></div>
              <div>typeof null <span className="text-rose-500">// "object" (historical bug)</span></div>
              <div>typeof undefined <span className="text-emerald-500">// "undefined"</span></div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Unary + and !</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>+'5' <span className="text-emerald-500">// 5</span></div>
              <div>-7 <span className="text-rose-500">// -7</span></div>
              <div>!!'text' <span className="text-emerald-500">// true (truthy)</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ClipboardCheck className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Operator Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Prefer strict equality (===) for reliability.</li>
              <li>✅ Use parentheses to make complex logic readable.</li>
              <li>✅ Consider optional chaining <code className="font-mono">?.</code> before accessing deep properties.</li>
              <li>✅ Use logical OR for defaults and AND for guarded calls.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Relying on <code className="font-mono">==</code> for mixed types.</li>
              <li>❌ Forgetting that <code className="font-mono">typeof null</code> is "object".</li>
              <li>❌ Overusing negation chains (e.g., <code className="font-mono">!!!!!value</code>).</li>
              <li>❌ Leaving arithmetic on non-numbers without parsing first.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Operators Live
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see each operator category in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">operators-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Arithmetic, assignment, comparison, logical, typeof</span>
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
