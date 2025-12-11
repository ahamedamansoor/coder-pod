'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ArrowRightCircle,
  Sparkles,
  Zap,
  Braces,
  Activity,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface JavaScriptArrowFunctionsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptArrowFunctions({}: JavaScriptArrowFunctionsProps) {
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

          <CodeSnippet
            title="Arrow Function Comparison"
            description="Traditional function vs arrow function syntax"
            code={`// Traditional Function
function greet(name) {
  return 'Hello ' + name;
}

// Arrow Function ✨
const greetArrow = (name) => 'Hello ' + name;

// Testing both
console.log(greet('Ada'));
// Output: Hello Ada

console.log(greetArrow('Bob'));
// Output: Hello Bob`}
            language="javascript"
            colorTheme="amber"
            icon={ArrowRightCircle}
            features={[
              "Shorter syntax with =>",
              "Implicit return for single expressions",
              "No function keyword needed",
              "More concise and readable"
            ]}
            tips={[
              "Use for simple, short functions",
              "Great for array methods like map/filter",
              "Removes boilerplate code"
            ]}
          />

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
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="Array Transformations"
              description="Perfect for map, filter, and reduce operations with clean, readable syntax"
              code={`// Data processing with arrow functions
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 29 },
  { name: 'Keyboard', price: 79 }
];

// Get discounted prices (20% off)
const discounted = products.map(p => p.price * 0.8);
console.log(discounted);
// Output: [799.2, 23.2, 63.2]

// Filter expensive items
const expensive = products.filter(p => p.price > 50);
console.log(expensive);
// Output: [{ name: 'Laptop', price: 999 }, { name: 'Keyboard', price: 79 }]`}
              language="javascript"
              colorTheme="blue"
              icon={Activity}
              features={[
                "Concise array method callbacks",
                "Implicit returns for single expressions",
                "Clean, readable data transformations",
                "Common in modern JavaScript"
              ]}
              tips={[
                "Perfect for map, filter, reduce",
                "No need for explicit return keyword",
                "Essential for functional programming"
              ]}
            />

            <CodeSnippet
              title="Event Handlers with Lexical this"
              description="Arrow functions preserve 'this' from the surrounding context—perfect for class methods"
              code={`// Arrow function preserves 'this' context
class Counter {
  constructor() {
    this.count = 0;
    this.button = document.querySelector('#btn');
  }

  start() {
    // Arrow function preserves 'this'
    this.button.addEventListener('click', () => {
      this.count++; // 'this' refers to Counter instance!
      console.log(this.count);
      // Output: 1, 2, 3... (increments on each click)
    });
  }
}

// Without arrow function, you'd need .bind(this) or store this in a variable!`}
              language="javascript"
              colorTheme="purple"
              icon={CheckCircle2}
              features={[
                "Lexical 'this' binding",
                "No need for .bind(this)",
                "Perfect for event handlers",
                "Preserves class instance context"
              ]}
              tips={[
                "Use in class methods for events",
                "Avoids 'this' binding issues",
                "Cleaner than traditional functions"
              ]}
            />
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
    </div>
  );
}
