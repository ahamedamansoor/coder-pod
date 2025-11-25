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

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
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
  <title>Arrow Functions Demo</title>
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
    <h1>🎯 Arrow Functions</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('🎯 Arrow Functions Demo\\n');

// 1. Basic Syntax
console.log('=== Basic Syntax ===');
const double = (n) => n * 2;
const greet = (name = 'Coder') => 'Hi ' + name + '!';

console.log('double(5):', double(5));
console.log('greet():', greet());
console.log('greet("Ada"):', greet('Ada'));

// 2. Array Methods
console.log('\\n=== Array Transformations ===');
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 29 },
  { name: 'Keyboard', price: 79 }
];

const discounted = products.map(p => p.price * 0.8);
console.log('Discounted prices:', discounted);

const expensive = products.filter(p => p.price > 50);
console.log('Expensive items:', expensive);

// 3. Lexical this
console.log('\\n=== Lexical this ===');
const report = {
  total: 0,
  add: (value) => {
    report.total += value;
    return report.total;
  },
  log: () => console.log('Total:', report.total),
};

report.add(3);
report.add(4);
report.log();

// 4. Higher-Order Functions
console.log('\\n=== Higher-Order Functions ===');
const multiplyBy = (factor) => (num) => num * factor;
const triple = multiplyBy(3);
console.log('triple(5):', triple(5));

// 5. Implicit Returns
console.log('\\n=== Implicit Returns ===');
const numbers = [1, 2, 3, 4, 5];
console.log('Squares:', numbers.map(n => n * n));
console.log('Sum:', numbers.reduce((sum, n) => sum + n, 0));

console.log('\\n✅ Check these examples above!');`;

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

      {/* What are Arrow Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Arrow Functions?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the modern, concise function syntax introduced in ES6
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">
              Arrow functions are a shorter way to write functions in JavaScript, introduced in ES6. They use the <code>=&gt;</code> syntax
              instead of the <code>function</code> keyword and provide a more concise way to write function expressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Traditional Function</h4>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
                <div>function greet(name) {'{'}</div>
                <div>  return 'Hello ' + name;</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Arrow Function</h4>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
                <div>const greet = (name) =&gt; 'Hello ' + name;</div>
              </div>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Much Shorter!
              </Badge>
              <SnippetOutput lines={['greet(\"Ada\") -> Hello Ada']} />
            </div>
          </div>

          <Alert className="bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Key Point</AlertTitle>
            <AlertDescription className="text-blue-600/80 dark:text-blue-400/80">
              Arrow functions are not just syntactic sugar—they have different behavior for <code>this</code>, 
              <code>arguments</code>, and cannot be used as constructors. This makes them perfect for callbacks and array methods!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
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

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns where arrow functions shine in everyday JavaScript development
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Example 1: Array Methods */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50">1</Badge>
              Array Transformations
            </h4>
            <p className="text-sm text-muted-foreground">Perfect for map, filter, and reduce operations with clean, readable syntax</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-4 font-mono text-xs border space-y-2">
              <div className="text-emerald-600 dark:text-emerald-400">// Data processing with arrow functions</div>
              <div>const products = [</div>
              <div>  {'{'}name: 'Laptop', price: 999{'}'},</div>
              <div>  {'{'}name: 'Mouse', price: 29{'}'},</div>
              <div>  {'{'}name: 'Keyboard', price: 79{'}'}</div>
              <div>];</div>
              <div>&nbsp;</div>
              <div className="text-amber-600 dark:text-amber-400">// Get discounted prices (20% off)</div>
              <div>const discounted = products.map(p =&gt; p.price * 0.8);</div>
              <div className="text-blue-600 dark:text-blue-400">// Output: [799.2, 23.2, 63.2]</div>
              <div>&nbsp;</div>
              <div className="text-amber-600 dark:text-amber-400">// Filter expensive items</div>
              <div>const expensive = products.filter(p =&gt; p.price &gt; 50);</div>
              <div className="text-blue-600 dark:text-blue-400">// Output: [{'{'}name: 'Laptop', price: 999{'}'}, {'{'}name: 'Keyboard', price: 79{'}'}]</div>
            </div>
            <SnippetOutput lines={['discounted -> [799.2, 23.2, 63.2]', "expensive -> [{ name: 'Laptop', price: 999 }, { name: 'Keyboard', price: 79 }]"]} />
          </div>

          {/* Example 2: Event Handlers */}
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50">2</Badge>
              Event Handlers with Lexical `this`
            </h4>
            <p className="text-sm text-muted-foreground">Arrow functions preserve `this` from the surrounding context—perfect for class methods</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-4 font-mono text-xs border space-y-2">
              <div>class Counter {'{'}</div>
              <div>  constructor() {'{'}</div>
              <div>    this.count = 0;</div>
              <div>    this.button = document.querySelector('#btn');</div>
              <div>  {'}'}</div>
              <div>&nbsp;</div>
              <div className="text-amber-600 dark:text-amber-400">  // Arrow function preserves `this`</div>
              <div>  start() {'{'}</div>
              <div>    this.button.addEventListener('click', () =&gt; {'{'}</div>
              <div>      this.count++; <span className="text-emerald-600 dark:text-emerald-400">// `this` refers to Counter instance!</span></div>
              <div>      console.log(this.count);</div>
              <div>    {'}'});</div>
              <div>  {'}'}</div>
              <div>{'}'}</div>
            </div>
            <Alert className="bg-purple-50/50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <AlertDescription className="text-sm">
                Without arrow function, you'd need <code>.bind(this)</code> or store <code>this</code> in a variable!
              </AlertDescription>
            </Alert>
          </div>

          {/* Example 3: Async Operations */}
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50">3</Badge>
              Promises & Async/Await
            </h4>
            <p className="text-sm text-muted-foreground">Clean, modern async code with arrow functions</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-4 font-mono text-xs border space-y-2">
              <div className="text-amber-600 dark:text-amber-400">// Fetching user data with arrow functions</div>
              <div>const fetchUser = async (id) =&gt; {'{'}</div>
              <div>  const response = await fetch(`/api/users/${'{'}id{'}'}`);</div>
              <div>  return response.json();</div>
              <div>{'}'};</div>
              <div>&nbsp;</div>
              <div className="text-amber-600 dark:text-amber-400">// Promise chaining</div>
              <div>fetchUser(1)</div>
              <div>  .then(user =&gt; console.log(user.name))</div>
              <div>  .catch(err =&gt; console.error('Error:', err));</div>
              <div>&nbsp;</div>
              <div className="text-amber-600 dark:text-amber-400">// Multiple users at once</div>
              <div>const ids = [1, 2, 3];</div>
              <div>const users = await Promise.all(ids.map(id =&gt; fetchUser(id)));</div>
            </div>
          </div>

          {/* Example 4: Higher-Order Functions */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50">4</Badge>
              Creating Utilities & Higher-Order Functions
            </h4>
            <p className="text-sm text-muted-foreground">Build reusable function factories and utilities</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-4 font-mono text-xs border space-y-2">
              <div className="text-amber-600 dark:text-amber-400">// Function that returns a function</div>
              <div>const multiplyBy = (factor) =&gt; (num) =&gt; num * factor;</div>
              <div>&nbsp;</div>
              <div>const double = multiplyBy(2);</div>
              <div>const triple = multiplyBy(3);</div>
              <div>&nbsp;</div>
              <div>console.log(double(5)); <span className="text-blue-600 dark:text-blue-400">// Output: 10</span></div>
              <div>console.log(triple(5)); <span className="text-blue-600 dark:text-blue-400">// Output: 15</span></div>
              <div>&nbsp;</div>
              <div className="text-amber-600 dark:text-amber-400">// Debounce utility</div>
              <div>const debounce = (fn, delay) =&gt; {'{'}</div>
              <div>  let timeoutId;</div>
              <div>  return (...args) =&gt; {'{'}</div>
              <div>    clearTimeout(timeoutId);</div>
              <div>    timeoutId = setTimeout(() =&gt; fn(...args), delay);</div>
              <div>  {'}'};</div>
              <div>{'}'};</div>
            </div>
            <SnippetOutput lines={['double(5) -> 10', 'triple(5) -> 15']} />
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

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ arrow functions, concise syntax, and lexical this.
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
            The console output highlights arrow function features (concise syntax, implicit returns, lexical this binding, and limitations) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
