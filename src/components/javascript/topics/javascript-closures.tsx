'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Package,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Lock,
  Eye,
  Layers,
  Code,
  AlertCircle,
} from 'lucide-react';

interface JavaScriptClosuresProps {
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
  <title>Closures Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
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
    }
    .console-hint { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      margin-top: 24px; 
      font-family: monospace; 
      font-size: 14px; 
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>JavaScript Closures</h1>
    <p>Open the browser console (F12) to see closure examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./closures-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== JavaScript Closures Demo ===\\n');

// 1. Basic Closure
console.log('1. BASIC CLOSURE:');
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// 2. Private Variables
console.log('\\n2. PRIVATE VARIABLES:');
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log('Initial:', account.getBalance());
console.log('Deposit 50:', account.deposit(50));
console.log('Withdraw 30:', account.withdraw(30));
console.log('Final:', account.getBalance());

// 3. Function Factory
console.log('\\n3. FUNCTION FACTORY:');
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log('double(5):', double(5));
console.log('triple(5):', triple(5));

// 4. Event Handler Closures
console.log('\\n4. CLOSURE IN LOOPS:');
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log('Timer ' + i + ' executed');
  }, i * 1000);
}

console.log('\\nAll closure examples demonstrated!');
console.log('Check timers above - they remember their i values!');
`;

export default function JavaScriptClosures({ onOpenWebPlayground }: JavaScriptClosuresProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript · Scope & Closures"
        title="Closures"
        description="Master closures - functions that remember their outer scope, enabling data privacy, factory patterns, and powerful functional programming."
        colorTheme="blue"
      />

      {/* What are Closures? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Closures?
          </CardTitle>
          <CardDescription className="text-base">
            A closure is a function that has access to variables from its outer (enclosing) scope, even after that outer function has returned.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of a closure like a <strong>backpack</strong> - when a function is created, it packs up all the variables it needs from its surrounding environment and carries them wherever it goes. Even if the outer function finishes executing, the inner function still has access to those variables. This is one of JavaScript's most powerful features!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Data Privacy</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Create private variables that can't be accessed directly
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Encapsulation</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">State Management</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Functions remember and maintain their own state
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Persistent</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Function Factories</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Create specialized functions with preset configurations
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Dynamic</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>The "Aha!" Moment</AlertTitle>
            <AlertDescription>
              A closure happens automatically whenever you create a function inside another function. The inner function gets special access to the outer function's variables - it "closes over" them.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Closures Work */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            How Closures Work - Step by Step
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the mechanics: lexical scope + function preservation = closure magic!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Step 1: Outer Function Executes</h4>
              <p className="text-xs text-muted-foreground">
                The outer function creates local variables and an inner function
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function outer() {
  // Step 1: Variable created
  const message = 'Hello';
  
  // Step 2: Inner function defined
  function inner() {
    console.log(message); // References outer var
  }
  
  // Step 3: Return inner function
  return inner;
}

const myFunction = outer();`}
              </pre>
              <SnippetOutput lines={['outer() creates message', 'Returns inner function', 'outer() finishes executing']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Step 2: Inner Function Remembers</h4>
              <p className="text-xs text-muted-foreground">
                The inner function still has access to outer's variables!
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// outer() has finished
// But message is still accessible!

myFunction();

// Output: "Hello"
// How? CLOSURE!
// myFunction "closed over" the message variable`}
              </pre>
              <SnippetOutput lines={['myFunction() -> "Hello"', 'message still exists!', 'This is a closure in action']} />
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              The Magic Explained
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1️⃣ When <code className="font-mono text-xs">inner</code> is created, it forms a closure over <code className="font-mono text-xs">message</code></li>
              <li>2️⃣ Even after <code className="font-mono text-xs">outer()</code> finishes, <code className="font-mono text-xs">message</code> stays in memory</li>
              <li>3️⃣ JavaScript keeps the variable alive because <code className="font-mono text-xs">inner</code> still references it</li>
              <li>4️⃣ This is how closures create "persistent" state and data privacy</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Basic Closure Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Closure Examples
          </CardTitle>
          <CardDescription className="text-base">
            Simple, foundational examples to build your understanding.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Counter Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Counter Function</h4>
              <p className="text-xs text-muted-foreground">
                Classic example: function that remembers its count
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function createCounter() {
  let count = 0;
  
  return function() {
    count++;        // Accesses outer count
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());`}
              </pre>
              <SnippetOutput lines={['counter1: 1', 'counter1: 2', 'counter1: 3', 'counter2: 1 (separate count!)', 'Each closure has own state']} />
            </div>

            {/* Greeting Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Personalized Greeter</h4>
              <p className="text-xs text-muted-foreground">
                Closure remembers the name
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function createGreeter(name) {
  // name is "closed over"
  return function(greeting) {
    return greeting + ', ' + name + '!';
  };
}

const greetAlice = createGreeter('Alice');
const greetBob = createGreeter('Bob');

console.log(greetAlice('Hello'));
console.log(greetAlice('Hi'));
console.log(greetBob('Hey'));`}
              </pre>
              <SnippetOutput lines={['greetAlice("Hello") -> "Hello, Alice!"', 'greetAlice("Hi") -> "Hi, Alice!"', 'greetBob("Hey") -> "Hey, Bob!"', 'Each closure remembers its name']} />
            </div>

            {/* Multiplier Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Function Factory</h4>
              <p className="text-xs text-muted-foreground">
                Create specialized functions with closures
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));
console.log(triple(5));
console.log(quadruple(5));`}
              </pre>
              <SnippetOutput lines={['double(5) -> 10', 'triple(5) -> 15', 'quadruple(5) -> 20', 'Each function "remembers" its multiplier']} />
            </div>

            {/* Private Variable Example */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Private Variable</h4>
              <p className="text-xs text-muted-foreground">
                Variables hidden from outside access
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function createSecret() {
  const secret = 'My secret value';
  
  return {
    getSecret: function() {
      return secret;
    },
    tellSecret: function(person) {
      return 'Told ' + person + ': ' + secret;
    }
  };
}

const vault = createSecret();
console.log(vault.getSecret());
console.log(vault.tellSecret('Alice'));
console.log(vault.secret);`}
              </pre>
              <SnippetOutput lines={['getSecret() -> "My secret value"', 'tellSecret("Alice") -> works', 'vault.secret -> undefined', 'secret is truly private!']} />
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
            Practical closure patterns you'll use in production code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Bank Account with Privacy
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function createBankAccount(initialBalance) {
  let balance = initialBalance;
  const transactions = [];
  
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({ type: 'deposit', amount });
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactions.push({ type: 'withdraw', amount });
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    },
    getHistory() {
      return [...transactions];
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());`}
              </pre>
              <SnippetOutput lines={['deposit(500) -> 1500', 'withdraw(200) -> 1300', 'balance is private!', 'transactions is private!']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Memoization (Cache Results)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function createMemoized(fn) {
  const cache = {};
  
  return function(arg) {
    if (cache[arg] !== undefined) {
      console.log('From cache');
      return cache[arg];
    }
    
    console.log('Computing...');
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const expensiveCalculation = n => n * n;
const memoized = createMemoized(expensiveCalculation);

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(10));`}
              </pre>
              <SnippetOutput lines={['memoized(5) -> Computing... 25', 'memoized(5) -> From cache 25', 'memoized(10) -> Computing... 100', 'Closure remembers cache!']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Event Handler Setup
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function setupCounter(elementId) {
  let count = 0;
  const element = document.getElementById(elementId);
  
  element.addEventListener('click', function() {
    count++;
    element.textContent = 'Clicked: ' + count;
  });
  
  return {
    reset() {
      count = 0;
      element.textContent = 'Clicked: 0';
    },
    getCount() {
      return count;
    }
  };
}

const counter = setupCounter('myButton');`}
              </pre>
              <SnippetOutput lines={['Each click increments count', 'count is private to handler', 'reset() can access count', 'Perfect for UI components']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                API Client with Config
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function createAPIClient(baseURL, apiKey) {
  // Private config
  const config = { baseURL, apiKey };
  
  return {
    get(endpoint) {
      return fetch(
        config.baseURL + endpoint,
        { headers: { 'X-API-Key': config.apiKey } }
      );
    },
    post(endpoint, data) {
      return fetch(
        config.baseURL + endpoint,
        {
          method: 'POST',
          headers: { 'X-API-Key': config.apiKey },
          body: JSON.stringify(data)
        }
      );
    }
  };
}

const api = createAPIClient('https://api.com', 'secret');
api.get('/users');`}
              </pre>
              <SnippetOutput lines={['API key is private', 'Config is encapsulated', 'Clean API interface', 'Used in real apps!']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Closure Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Common Closure Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Advanced patterns that leverage closures for powerful functionality.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Module Pattern</h4>
              <p className="text-xs text-muted-foreground">
                Organize code with public/private members
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const UserModule = (function() {
  // Private
  const users = [];
  let nextId = 1;
  
  // Public API
  return {
    addUser(name) {
      users.push({ id: nextId++, name });
    },
    getUser(id) {
      return users.find(u => u.id === id);
    },
    getAllUsers() {
      return [...users];
    }
  };
})();

UserModule.addUser('Alice');
console.log(UserModule.getAllUsers());`}
              </pre>
              <SnippetOutput lines={['users array is private', 'Only public methods accessible', 'Clean module interface']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Currying</h4>
              <p className="text-xs text-muted-foreground">
                Transform function with multiple args into sequence
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1)(2, 3));`}
              </pre>
              <SnippetOutput lines={['curriedAdd(1)(2)(3) -> 6', 'curriedAdd(1, 2)(3) -> 6', 'Flexible argument application']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Once Function</h4>
              <p className="text-xs text-muted-foreground">
                Function that can only be called once
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function once(fn) {
  let called = false;
  let result;
  
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const initialize = once(() => {
  console.log('Initializing...');
  return 'Initialized';
});

console.log(initialize());
console.log(initialize());
console.log(initialize());`}
              </pre>
              <SnippetOutput lines={['First call: "Initializing..." + "Initialized"', 'Second call: "Initialized" (cached)', 'Third call: "Initialized" (cached)']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Debounce Function</h4>
              <p className="text-xs text-muted-foreground">
                Delay execution until after wait time
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log('Searching for:', query);
}, 500);

// Only last call executes after 500ms
search('a');
search('ab');
search('abc');`}
              </pre>
              <SnippetOutput lines={['Only "Searching for: abc" logged', 'Previous calls cancelled', 'Perfect for search inputs!']} />
            </div>
          </div>
        </CardContent>
      </Card>

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
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use closures for data privacy and encapsulation</li>
              <li>✅ Create factory functions to generate specialized functions</li>
              <li>✅ Use <code className="font-mono text-xs">const</code>/<code className="font-mono text-xs">let</code> in outer scope (better than <code className="font-mono text-xs">var</code>)</li>
              <li>✅ Return functions from functions when you need state</li>
              <li>✅ Use closures for memoization and caching</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't create unnecessary closures (memory overhead)</li>
              <li>❌ Avoid closures in loops with <code className="font-mono text-xs">var</code> (use <code className="font-mono text-xs">let</code>)</li>
              <li>❌ Don't use closures when simple parameters would work</li>
              <li>❌ Avoid holding large objects in closures (memory leaks)</li>
              <li>❌ Don't modify closed-over variables unexpectedly</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practice Closures
          </CardTitle>
          <CardDescription className="text-base">
            Interactive demo with counters, private variables, function factories, and event handlers. Open the console!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">closures-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Multiple closure patterns</span>
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
