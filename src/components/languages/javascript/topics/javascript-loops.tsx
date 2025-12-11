'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
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
  ArrowRight,
  Flag,
} from 'lucide-react';

interface JavaScriptLoopsProps {}

export default function JavaScriptLoops({}: JavaScriptLoopsProps) {
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

      {/* What are Loops? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <RefreshCcw className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Loops?
          </CardTitle>
          <CardDescription className="text-base">
            Control structures that repeat a block of code until a condition is met
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border space-y-4">
            <p className="text-sm text-muted-foreground">
              Loops are programming constructs that <strong>execute a block of code repeatedly</strong>. Instead of writing the same code multiple times,
              you use a loop to automate repetition. Loops are essential for <strong>processing arrays, retrying operations, counting,</strong> and
              <strong> iterating through collections</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">❌ Without Loops (Repetitive)</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Repetitive and unscalable
const names = ['Alice', 'Bob', 'Charlie'];

console.log('Hello, ' + names[0]);
console.log('Hello, ' + names[1]);
console.log('Hello, ' + names[2]);

// What if we add 100 more names?
// This approach doesn't scale!`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">✅ With Loops (Clean & Scalable)</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Clean and scalable
const names = ['Alice', 'Bob', 'Charlie'];

for (const name of names) {
  console.log('Hello, ' + name);
}

// Works with 3 or 3000 names!
// Output: Hello, Alice
//         Hello, Bob
//         Hello, Charlie`}
                </pre>
              </div>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Key Concept</AlertTitle>
              <AlertDescription>
                Loops have three main parts: <strong>initialization</strong> (start), <strong>condition</strong> (when to continue), and <strong>iteration</strong> (how to progress).
              </AlertDescription>
            </Alert>
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

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in real applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            {/* Pattern 1: Processing Array Data */}
            <CodeSnippet
              title="Processing Array Data"
              description="Calculate total price from shopping cart - perfect for summing values from arrays of objects"
              code={`// Pattern: Calculate total price
const cart = [
  { name: 'Book', price: 15 },
  { name: 'Pen', price: 5 },
  { name: 'Bag', price: 30 }
];

let total = 0;
for (const item of cart) {
  total += item.price;
  console.log(item.name + ': $' + item.price);
}

console.log('Total: $' + total);
// Output: Book: $15
// Output: Pen: $5
// Output: Bag: $30
// Output: Total: $50`}
              language="javascript"
              colorTheme="blue"
              icon={CheckCircle2}
              features={[
                "for...of loop for clean iteration",
                "Accumulate values in a variable",
                "Common in e-commerce calculations",
                "Works with arrays of objects"
              ]}
              tips={[
                "Initialize accumulator before loop",
                "Use reduce() for functional approach",
                "Essential for shopping cart totals"
              ]}
            />

            {/* Pattern 2: Finding Items */}
            <CodeSnippet
              title="Finding Items (Early Exit)"
              description="Search and stop - use break to exit once you find what you need"
              code={`// Pattern: Search and stop
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

let found = null;
for (const user of users) {
  if (user.id === 2) {
    found = user;
    break; // Stop searching!
  }
}

console.log('Found:', found.name);
// Output: Found: Bob
// Loop exits after match - no need to check remaining items`}
              language="javascript"
              colorTheme="emerald"
              icon={CheckCircle2}
              features={[
                "break exits loop immediately",
                "Saves processing time",
                "Common search pattern",
                "More efficient than checking all items"
              ]}
              tips={[
                "Use break for early exit optimization",
                "Consider Array.find() for similar logic",
                "Essential for search operations"
              ]}
            />
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

    </div>
  );
}
