'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Target,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  Layers,
  ArrowRight,
  Code,
} from 'lucide-react';

export default function JavaScriptThisKeyword() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Target}
        category="JavaScript · Advanced Concepts"
        title="The 'this' Keyword"
        description="Master JavaScript's most confusing concept—understand how 'this' changes based on context and calling patterns."
        colorTheme="blue"
      />

      {/* What is 'this'? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is "this"?
          </CardTitle>
          <CardDescription className="text-base">
            The <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">this</code> keyword is a special identifier that refers to the <strong>context</strong> in which a function is executed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            In JavaScript, <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">this</code> is NOT determined by where a function is defined—it's determined by <strong>how and where it's called</strong>. This single fact is the source of most confusion. The value of <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">this</code> can change depending on the calling pattern, making it one of the most powerful yet misunderstood features in JavaScript.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">
                Simple Example
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, I am ' + this.name);
  }
};

person.greet();
// Output: Hello, I am Alice
// this.name -> "Alice"
// "this" refers to person object`}
              </pre>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300">
                Key Point
              </h4>
              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <p className="text-sm font-semibold mb-2">🎯 Golden Rule</p>
                <p className="text-xs text-muted-foreground">
                  The value of <code className="font-mono">this</code> is determined by <strong>HOW</strong> a function is called, not <strong>WHERE</strong> it's written.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why is 'this' Confusing? */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Why is "this" Confusing?
          </CardTitle>
          <CardDescription className="text-base">
            Understanding why developers struggle with "this" helps you avoid common mistakes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold">Dynamic Binding</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Unlike other languages, <code className="font-mono text-xs">this</code> isn't bound at write-time. It changes based on the <strong>call-site</strong> (how the function is invoked).
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold">Lost Context</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Passing methods as callbacks often loses <code className="font-mono text-xs">this</code>. Event handlers and timers are common culprits.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold">Different Rules</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Arrow functions, constructors, and explicit binding (call/apply/bind) each have their own <code className="font-mono text-xs">this</code> rules.
              </p>
            </div>
          </div>

          <Alert className="border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20">
            <AlertTriangle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
            <AlertTitle>Common Beginner Mistake</AlertTitle>
            <AlertDescription>
              Many developers expect <code className="font-mono text-xs">this</code> to work like <code className="font-mono text-xs">self</code> in Python or <code className="font-mono text-xs">this</code> in Java—always referring to the instance. In JavaScript, it doesn't work that way!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The 4 Rules of 'this' Binding */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The 4 Rules of "this" Binding
          </CardTitle>
          <CardDescription className="text-base">
            These rules determine what <code className="font-mono text-xs">this</code> refers to, in order of precedence (highest to lowest).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Rule 1: new Binding */}
            <div className="rounded-xl border bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg">1. New Binding</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Highest</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                When called with <code className="font-mono">new</code>, <code className="font-mono">this</code> refers to the newly created object.
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function User(name) {
  this.name = name;
}

const user = new User('Alice');
console.log(user.name);
// Output: Alice
// this = new User instance`}
              </pre>
            </div>

            {/* Rule 2: Explicit Binding */}
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg">2. Explicit Binding</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">High</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Using <code className="font-mono">call</code>, <code className="font-mono">apply</code>, or <code className="font-mono">bind</code> explicitly sets <code className="font-mono">this</code>.
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function greet() {
  console.log('Hello, ' + this.name);
}

const person = { name: 'Bob' };
greet.call(person);
// Output: Hello, Bob
// this = person object`}
              </pre>
            </div>

            {/* Rule 3: Implicit Binding */}
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg">3. Implicit Binding</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Medium</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                When called as a method, <code className="font-mono">this</code> refers to the object before the dot.
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

console.log(obj.getValue());
// Output: 42
// this = obj (before the dot)`}
              </pre>
            </div>

            {/* Rule 4: Default Binding */}
            <div className="rounded-xl border bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg">4. Default Binding</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Lowest</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Plain function call: <code className="font-mono">this</code> is global object (or <code className="font-mono">undefined</code> in strict mode).
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function show() {
  console.log(this);
}

show(); // window (browser) or global
// Output: this -> Window (or global object)
// undefined in strict mode`}
              </pre>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Priority Order</AlertTitle>
            <AlertDescription>
              If multiple rules apply, follow the priority: <strong>new</strong> → <strong>explicit</strong> → <strong>implicit</strong> → <strong>default</strong>. The highest priority rule wins.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Four Binding Rules"
        description="All binding rules demonstrated together with priority order"
        code={`// Rule 1: New Binding (Highest Priority)
function User(name) {
  this.name = name;
}

const user = new User('Alice');
console.log(user.name);
// Output: "Alice"
// this = new User instance

// Rule 2: Explicit Binding (High Priority)
function greet() {
  console.log('Hello, ' + this.name);
}

const person = { name: 'Bob' };
greet.call(person);
// Output: "Hello, Bob"
// this = person object

// Rule 3: Implicit Binding (Medium Priority)
const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

console.log(obj.getValue());
// Output: 42
// this = obj (before the dot)

// Rule 4: Default Binding (Lowest Priority)
function show() {
  'use strict';
  console.log(this);
}

show();
// Output: undefined (in strict mode)
// Output: Window object (in non-strict mode)

// Priority Order: new > explicit > implicit > default`}
        language="javascript"
        colorTheme="purple"
        icon={Target}
      />

      {/* Context-by-Context Deep Dive */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Context-by-Context Deep Dive
          </CardTitle>
          <CardDescription className="text-base">
            Let's explore each context with detailed examples and common scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Global Context */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">Global Context</h4>
              <Badge className="bg-slate-100 text-slate-700 dark:bg-slate-900/30">Default</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              In the global scope or a plain function call, <code className="font-mono text-xs">this</code> refers to the global object (<code className="font-mono text-xs">window</code> in browsers).
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Global scope
console.log(this); // Window object

// Plain function call
function showThis() {
  console.log(this);
}
showThis(); // Window (non-strict) or undefined (strict)

// Strict mode
'use strict';
function strictFunc() {
  console.log(this);
}
strictFunc(); // undefined
// Global this -> Window
// Function call -> Window or undefined
// Strict mode prevents global this`}
            </pre>
          </div>

          {/* Object Method Context */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">Object Method Context</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Implicit</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              When a function is called as an object method, <code className="font-mono text-xs">this</code> refers to the object that owns the method.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const calculator = {
  value: 0,
  add: function(num) {
    this.value += num;
    return this.value;
  },
  reset: function() {
    this.value = 0;
  }
};

console.log(calculator.add(5));
console.log(calculator.add(3));
calculator.reset();
console.log(calculator.value);
// calculator.add(5) -> 5
// calculator.add(3) -> 8
// After reset -> 0
// this = calculator object`}
            </pre>
          </div>

          {/* Constructor Context */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">Constructor Context</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">New Binding</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              When a function is called with <code className="font-mono text-xs">new</code>, <code className="font-mono text-xs">this</code> is bound to the newly created object.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getInfo = function() {
    return this.brand + ' ' + this.model;
  };
}

const car1 = new Car('Tesla', 'Model 3');
const car2 = new Car('BMW', 'i4');

console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car1.brand);
// car1.getInfo() -> "Tesla Model 3"
// car2.getInfo() -> "BMW i4"
// Each instance has its own "this"`}
            </pre>
          </div>

          {/* Explicit Binding Context */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">Explicit Binding (call, apply, bind)</h4>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Explicit</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Force <code className="font-mono text-xs">this</code> to refer to a specific object using <code className="font-mono text-xs">call()</code>, <code className="font-mono text-xs">apply()</code>, or <code className="font-mono text-xs">bind()</code>.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function introduce(greeting, punctuation) {
  console.log(greeting + ', I am ' + this.name + punctuation);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

// call - arguments passed individually
introduce.call(person1, 'Hello', '!');

// apply - arguments passed as array
introduce.apply(person2, ['Hi', '?']);

// bind - creates new function with fixed this
const boundIntroduce = introduce.bind(person1);
boundIntroduce('Hey', '.');
// call: "Hello, I am Alice!"
// apply: "Hi, I am Bob?"
// bind: "Hey, I am Alice."
// All three explicitly set "this"`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Different Contexts"
        description="How 'this' behaves in various contexts"
        code={`// Global Context
function showThis() {
  'use strict';
  console.log(this);
}
showThis();
// Output: undefined (strict mode)
// Output: Window object (non-strict mode)

// Object Method Context
const calculator = {
  value: 0,
  add: function(n) {
    this.value += n;
    return this.value;
  }
};

console.log(calculator.add(5));
// Output: 5
// this = calculator object

// Constructor Context
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getInfo = function() {
    return this.brand + ' ' + this.model;
  };
}

const car1 = new Car('Tesla', 'Model 3');
console.log(car1.getInfo());
// Output: "Tesla Model 3"
// this = new Car instance

// Explicit Binding (call, apply, bind)
function introduce(greeting, punctuation) {
  console.log(greeting + ', I am ' + this.name + punctuation);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

introduce.call(person1, 'Hello', '!');
// Output: "Hello, I am Alice!"

introduce.apply(person2, ['Hi', '?']);
// Output: "Hi, I am Bob?"

const boundIntroduce = introduce.bind(person1);
boundIntroduce('Hey', '.');
// Output: "Hey, I am Alice."`}
        language="javascript"
        colorTheme="indigo"
        icon={Code}
      />

      {/* Common Pitfalls */}
      <Card className="bg-gradient-to-br from-rose-50/60 to-orange-50/60 dark:from-rose-950/10 dark:to-orange-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            Common Pitfalls
          </CardTitle>
          <CardDescription className="text-base">
            These are the most common mistakes developers make with "this"—learn to avoid them!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pitfall 1: Lost Context in Callbacks */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold text-lg">Lost Context in Callbacks</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                ❌ <strong>Problem:</strong> Passing a method as a callback loses its context
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hi, ' + this.name);
  }
};

// Lost context!
setTimeout(person.greet, 1000);
// Output: "Hi, undefined"

// ✅ Fix with arrow function
setTimeout(() => person.greet(), 1000);

// ✅ Fix with bind
setTimeout(person.greet.bind(person), 1000);
// Direct pass -> undefined
// Arrow wrapper -> works
// bind() -> works`}
              </pre>
            </div>

            {/* Pitfall 2: Method Assignment */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold text-lg">Method Assignment</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                ❌ <strong>Problem:</strong> Extracting a method loses its binding
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const counter = {
  count: 0,
  increment: function() {
    this.count++;
    return this.count;
  }
};

const inc = counter.increment;
console.log(inc()); // Error or NaN

// ✅ Fix 1: Keep it as method
console.log(counter.increment()); // 1

// ✅ Fix 2: Bind permanently
const boundInc = counter.increment.bind(counter);
console.log(boundInc()); // 1
// Extracted -> loses "this"
// Method call -> works
// Bound function -> works`}
              </pre>
            </div>

            {/* Pitfall 3: Nested Functions */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold text-lg">Nested Functions</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                ❌ <strong>Problem:</strong> Inner functions don't inherit outer "this"
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const obj = {
  value: 42,
  getValue: function() {
    function inner() {
      return this.value; // Wrong "this"!
    }
    return inner();
  }
};

console.log(obj.getValue()); // undefined

// ✅ Fix 1: Arrow function
const obj2 = {
  value: 42,
  getValue: function() {
    const inner = () => this.value;
    return inner();
  }
};
console.log(obj2.getValue()); // 42

// ✅ Fix 2: Store "this"
const obj3 = {
  value: 42,
  getValue: function() {
    const self = this;
    function inner() {
      return self.value;
    }
    return inner();
  }
};
console.log(obj3.getValue()); // 42
// Regular inner -> undefined
// Arrow inner -> 42
// self variable -> 42`}
              </pre>
            </div>

            {/* Pitfall 4: Event Handlers */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h4 className="font-semibold text-lg">Event Handlers</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                ❌ <strong>Problem:</strong> In DOM events, "this" refers to the element
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const app = {
  count: 0,
  handleClick: function() {
    this.count++; // "this" = button, not app!
    console.log(this.count);
  }
};

button.addEventListener('click', app.handleClick);
// "this" = button element, not app object

// ✅ Fix 1: Arrow function
button.addEventListener('click', () => {
  app.count++;
});

// ✅ Fix 2: bind
button.addEventListener('click', app.handleClick.bind(app));
// Direct method -> "this" = button
// Arrow wrapper -> "this" = app
// bind() -> "this" = app`}
              </pre>
            </div>
          </div>

          <Alert className="border-rose-200 dark:border-rose-800">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Key Takeaway</AlertTitle>
            <AlertDescription>
              When passing methods as callbacks (setTimeout, event handlers, array methods), use <strong>arrow functions</strong> or <strong>bind()</strong> to preserve context!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Common Pitfalls"
        description="How to avoid losing 'this' context"
        code={`// Pitfall 1: Passing Methods as Callbacks
const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hi, ' + this.name);
  }
};

// ❌ Lost context!
setTimeout(person.greet, 1000);
// Output: "Hi, undefined"

// ✅ Fix with arrow function
setTimeout(() => person.greet(), 1000);
// Output: "Hi, Alice"

// ✅ Fix with bind
setTimeout(person.greet.bind(person), 1000);
// Output: "Hi, Alice"

// Pitfall 2: Method Assignment
const counter = {
  count: 0,
  increment: function() {
    this.count++;
    return this.count;
  }
};

const inc = counter.increment;
// console.log(inc()); // ❌ Error or NaN

// ✅ Fix with bind
const boundInc = counter.increment.bind(counter);
console.log(boundInc());
// Output: 1

// Pitfall 3: Nested Functions
const obj = {
  value: 42,
  getValue: function() {
    function inner() {
      return this.value; // ❌ undefined!
    }
    return inner();
  }
};

// ✅ Fix with arrow function
const obj2 = {
  value: 42,
  getValue: function() {
    const inner = () => this.value;
    return inner();
  }
};

console.log(obj2.getValue());
// Output: 42

// Pitfall 4: Event Handlers
const app = {
  count: 0,
  handleClick: function() {
    this.count++;
    console.log(this.count);
  }
};

// Example with DOM button (conceptual)
// const button = document.querySelector('button');
// 
// ❌ button.addEventListener('click', app.handleClick);
// "this" = button element, not app object
// 
// ✅ Fix with arrow function
// button.addEventListener('click', () => {
//   app.count++;
// });
// 
// ✅ Fix with bind
// button.addEventListener('click', app.handleClick.bind(app));

// Direct method call works fine
app.handleClick();
// Output: 1`}
        language="javascript"
        colorTheme="rose"
        icon={AlertTriangle}
      />

      {/* Arrow Functions vs Regular Functions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowRight className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Arrow Functions vs Regular Functions
          </CardTitle>
          <CardDescription className="text-base">
            Arrow functions have <strong>lexical this</strong>—they inherit "this" from their surrounding scope.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Regular Function */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Regular Function
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                "this" determined by <strong>call-site</strong>
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const obj = {
  value: 100,
  regular: function() {
    console.log(this.value);
  }
};

obj.regular(); // 100
const fn = obj.regular;
fn(); // undefined (lost context)
// Method call -> 100
// Standalone call -> undefined
// "this" changes with call-site`}
              </pre>
            </div>

            {/* Arrow Function */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Arrow Function
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                "this" inherited from <strong>lexical scope</strong>
              </p>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const obj = {
  value: 100,
  arrow: () => {
    console.log(this.value);
  }
};

obj.arrow(); // undefined (inherits global)

// Better use: Inside methods
const obj2 = {
  value: 100,
  method: function() {
    const arrow = () => console.log(this.value);
    arrow(); // 100 (inherits from method)
  }
};
obj2.method();
// Arrow in object -> global "this"
// Arrow in method -> method "this"
// "this" never changes once set`}
              </pre>
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5">
            <h4 className="font-semibold mb-4">When to Use Each</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-2">✅ Use Arrow Functions For:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• Callbacks (setTimeout, event listeners)</li>
                  <li>• Array methods (map, filter, reduce)</li>
                  <li>• When you need to preserve outer "this"</li>
                  <li>• Short inline functions</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">✅ Use Regular Functions For:</p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• Object methods (when you need dynamic "this")</li>
                  <li>• Constructor functions</li>
                  <li>• Methods that use call/apply/bind</li>
                  <li>• When you need "arguments" object</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll encounter in production code every day.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Class Methods */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Class Methods
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Counter {
  constructor() {
    this.count = 0;
    // Bind in constructor for event handlers
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.count++;
    console.log(this.count);
  }
  
  // Arrow function property (alternative)
  decrement = () => {
    this.count--;
    console.log(this.count);
  }
}

const counter = new Counter();
button.addEventListener('click', counter.increment);
// Works! "this" is bound in constructor
// Bound method works in callbacks
// Arrow property works automatically
// Common in React classes`}
              </pre>
            </div>

            {/* Example 2: API Request Handler */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                API Request Handler
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const api = {
  baseURL: 'https://api.example.com',
  token: 'abc123',
  
  fetchUser: function(id) {
    return fetch(\`\${this.baseURL}/users/\${id}\`, {
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    })
    .then(response => response.json())
    .then(data => {
      // Arrow function preserves "this"
      console.log('Fetched from:', this.baseURL);
      return data;
    });
  }
};

api.fetchUser(123);
// Arrow in .then() preserves "this"
// Can access api.baseURL
// Common in service objects`}
              </pre>
            </div>

            {/* Example 3: Timer with Context */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Timer with Context
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const game = {
  score: 0,
  timer: 60,
  
  start: function() {
    // Arrow function captures game context
    const countdown = setInterval(() => {
      this.timer--;
      console.log('Time left:', this.timer);
      
      if (this.timer <= 0) {
        clearInterval(countdown);
        this.endGame();
      }
    }, 1000);
  },
  
  endGame: function() {
    console.log('Final score:', this.score);
  }
};

game.start();
// Arrow in setInterval preserves "this"
// Can call this.endGame()
// Game object maintains state`}
              </pre>
            </div>

            {/* Example 4: Array Methods */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Array Methods with Context
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const processor = {
  multiplier: 10,
  
  process: function(numbers) {
    // Arrow function accesses this.multiplier
    return numbers.map(n => n * this.multiplier);
  },
  
  // Alternative: Use second argument
  processAlt: function(numbers) {
    return numbers.map(function(n) {
      return n * this.multiplier;
    }, this); // Pass "this" as second arg
  }
};

console.log(processor.process([1, 2, 3]));
console.log(processor.processAlt([1, 2, 3]));
// processor.process() -> [10, 20, 30]
// Arrow function is cleaner
// thisArg parameter works too`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Real-World Patterns"
        description="Practical patterns for using 'this' in production code"
        code={`// Example 1: Event Handler with Bound Method
class Counter {
  constructor() {
    this.count = 0;
    // Bind in constructor
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.count++;
    console.log(this.count);
  }
  
  // Arrow function property (alternative)
  decrement = () => {
    this.count--;
    console.log(this.count);
  }
}

const counter = new Counter();

// Direct calls for demonstration
counter.increment();
// Output: 1

counter.decrement();
// Output: 0

// In real DOM usage:
// const button = document.querySelector('button');
// button.addEventListener('click', counter.increment);
// Works! "this" is bound in constructor

// Example 2: API Request Handler
const api = {
  baseURL: 'https://api.example.com',
  
  fetchUser: function(userId) {
    console.log('Fetching from:', this.baseURL);
    
    // Simulated async operation
    return new Promise((resolve) => {
      setTimeout(() => {
        // Arrow function preserves "this"
        console.log('Response from:', this.baseURL);
        resolve({ id: userId, name: 'User' + userId });
      }, 100);
    });
  }
};

api.fetchUser(123);
// Output: "Fetching from: https://api.example.com"
// Output: "Response from: https://api.example.com"
// Arrow in .then() preserves "this"

// Example 3: Timer with Context
const game = {
  score: 100,
  timeLeft: 3,
  
  start: function() {
    console.log('Game started!');
    const timer = setInterval(() => {
      this.timeLeft--;
      console.log('Time left:', this.timeLeft);
      
      if (this.timeLeft === 0) {
        clearInterval(timer);
        this.endGame();
      }
    }, 1000);
  },
  
  endGame: function() {
    console.log('Game over! Final score:', this.score);
  }
};

// Demonstrating the method works
console.log('Initial time:', game.timeLeft);
// Output: "Initial time: 3"

game.endGame();
// Output: "Game over! Final score: 100"

// In real usage: game.start();
// Arrow in setInterval preserves "this"

// Example 4: Array Methods with Context
const processor = {
  multiplier: 10,
  
  // Arrow function in map
  process: function(numbers) {
    return numbers.map(n => n * this.multiplier);
  },
  
  // Alternative: Use thisArg parameter
  processAlt: function(numbers) {
    return numbers.map(function(n) {
      return n * this.multiplier;
    }, this); // Pass "this" as second arg
  }
};

console.log(processor.process([1, 2, 3]));
// Output: [10, 20, 30]`}
        language="javascript"
        colorTheme="purple"
        icon={Sparkles}
      />

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" /> Do This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use arrow functions for callbacks to preserve context.</li>
              <li>✅ Bind methods in constructor when using classes.</li>
              <li>✅ Understand the 4 binding rules and their priority.</li>
              <li>✅ Use <code className="font-mono text-xs">bind()</code> for reusable bound functions.</li>
              <li>✅ Log <code className="font-mono text-xs">this</code> when debugging context issues.</li>
              <li>✅ Use arrow functions inside object methods for nested logic.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" /> Avoid This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't use arrow functions as object methods.</li>
              <li>❌ Don't pass object methods as callbacks without binding.</li>
              <li>❌ Don't assume <code className="font-mono text-xs">this</code> works like other languages.</li>
              <li>❌ Don't use regular functions inside regular functions expecting same <code className="font-mono text-xs">this</code>.</li>
              <li>❌ Don't forget <code className="font-mono text-xs">this</code> is <code className="font-mono text-xs">undefined</code> in strict mode.</li>
              <li>❌ Don't rely on <code className="font-mono text-xs">this</code> in arrow function constructors (they can't be constructors).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
