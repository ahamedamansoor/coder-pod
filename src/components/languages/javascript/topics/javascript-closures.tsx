'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Package,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Lock,
  Eye,
  Code2,
  Layers,
} from 'lucide-react';

export default function JavaScriptClosures() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript Fundamentals"
        title="Closures"
        description="Functions that remember their outer scope - the secret to data privacy and powerful patterns"
        colorTheme="yellow"
      />

      {/* What are Closures */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Closures?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A closure is a <strong className="text-yellow-700 dark:text-yellow-400">function that remembers variables from its outer scope</strong>, even after the outer function has finished. Think of it like a backpack - the function carries its variables wherever it goes!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">The "Aha!" Moment</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              A closure happens <strong>automatically</strong> whenever you create a function inside another function. The inner function gets special access to the outer function's variables - it "closes over" them.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Why Closures Matter */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Package className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Why Closures Matter</CardTitle>
              <CardDescription>Three powerful uses of closures</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold">Data Privacy</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create private variables that can't be accessed directly from outside
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold">State Management</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Functions remember and maintain their own state between calls
              </p>
            </div>
            
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold">Function Factories</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create specialized functions with preset configurations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Closure Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How Closures Work</CardTitle>
              <CardDescription>Step-by-step breakdown</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">The Magic Happens Here</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When the outer function finishes, you'd expect <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">message</code> to disappear. But the inner function keeps it alive!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function outer() {
  const message = 'Hello';  // 1. Variable created
  
  function inner() {        // 2. Inner function defined
    console.log(message);   // 3. Uses outer variable
  }
  
  return inner;             // 4. Return inner function
}

const myFunction = outer(); // outer() finishes
myFunction();               // Output: Hello

// HOW? The inner function "closed over" message!
// It remembered it even after outer() finished ✨`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Simple Closure Example"
        description="Inner function remembers outer function's variables"
        code={`function makeGreeting(greeting) {
  // 'greeting' is from outer scope
  
  return function(name) {
    // This inner function has access to 'greeting'
    return greeting + ', ' + name + '!';
  };
}

const sayHi = makeGreeting('Hi');
const sayHello = makeGreeting('Hello');

console.log(sayHi('Alice'));     // Hi, Alice!
console.log(sayHi('Bob'));       // Hi, Bob!
console.log(sayHello('Charlie')); // Hello, Charlie!

// Each function remembers its own 'greeting' value!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Data Privacy with Closures */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Data Privacy - Private Variables</CardTitle>
              <CardDescription>Create variables that can't be accessed directly</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Hide Implementation Details</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You can create private variables that can only be accessed through specific functions. The outside world can't touch them directly!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function createCounter() {
  let count = 0; // Private! Can't access directly
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// Can't access 'count' directly!
console.log(counter.count); // undefined ✅`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Bank Account"
        description="Use closures to protect sensitive data"
        code={`function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable!
  
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return 'Deposited: $' + amount;
      }
      return 'Invalid amount';
    },
    
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return 'Withdrew: $' + amount;
      }
      return 'Invalid or insufficient funds';
    },
    
    getBalance: function() {
      return 'Balance: $' + balance;
    }
  };
}

const myAccount = createBankAccount(100);

console.log(myAccount.deposit(50));
// Output: Deposited: $50

console.log(myAccount.getBalance());
// Output: Balance: $150

console.log(myAccount.withdraw(30));
// Output: Withdrew: $30

// Can't access balance directly!
console.log(myAccount.balance); // undefined
// Security through closures! ✅`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Function Factories */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Function Factories</CardTitle>
              <CardDescription>Create customized functions with preset values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Generate Specialized Functions</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use closures to create functions with pre-configured settings. Each function remembers its own configuration!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// Each function remembers its own multiplier!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Tax Calculator Factory"
        description="Create tax calculators for different rates"
        code={`function createTaxCalculator(taxRate) {
  return function(amount) {
    const tax = amount * (taxRate / 100);
    const total = amount + tax;
    
    return {
      original: amount,
      tax: tax,
      total: total,
      rate: taxRate + '%'
    };
  };
}

const stateTax = createTaxCalculator(8);
const cityTax = createTaxCalculator(2.5);
const federalTax = createTaxCalculator(15);

console.log(stateTax(100));
// { original: 100, tax: 8, total: 108, rate: '8%' }

console.log(cityTax(100));
// { original: 100, tax: 2.5, total: 102.5, rate: '2.5%' }

console.log(federalTax(100));
// { original: 100, tax: 15, total: 115, rate: '15%' }

// Each calculator remembers its tax rate!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>Where you'll use closures every day</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Event Handlers</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function setupButton(buttonId) {
  let clickCount = 0;
  
  const button = document.getElementById(buttonId);
  
  button.addEventListener('click', function() {
    clickCount++;
    console.log('Clicked ' + clickCount + ' times');
  });
}

// Each button remembers its own count!`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">Timers & Delays</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function delayedGreeting(name) {
  setTimeout(function() {
    // Closure! Remembers 'name'
    console.log('Hello, ' + name);
  }, 2000);
}

delayedGreeting('Alice');
// After 2 seconds: Hello, Alice`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">Callbacks with Context</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function fetchData(url) {
  const startTime = Date.now();
  
  fetch(url).then(function(response) {
    // Remembers startTime!
    const duration = Date.now() - startTime;
    console.log('Took ' + duration + 'ms');
  });
}`}</pre>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Partial Application</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function greet(greeting, name) {
  return greeting + ', ' + name;
}

function partial(fn, greeting) {
  return function(name) {
    return fn(greeting, name);
  };
}

const sayHi = partial(greet, 'Hi');
console.log(sayHi('Alice')); // Hi, Alice`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: API Rate Limiter"
        description="Use closures to track and limit function calls"
        code={`function createRateLimiter(maxCalls, timeWindow) {
  let calls = [];
  
  return function(fn) {
    const now = Date.now();
    
    // Remove old calls outside time window
    calls = calls.filter(time => now - time < timeWindow);
    
    if (calls.length < maxCalls) {
      calls.push(now);
      return fn();
    } else {
      return 'Rate limit exceeded. Try again later.';
    }
  };
}

// Max 3 calls per 5 seconds
const limiter = createRateLimiter(3, 5000);

function apiCall() {
  return 'API response data';
}

console.log(limiter(apiCall)); // API response data
console.log(limiter(apiCall)); // API response data
console.log(limiter(apiCall)); // API response data
console.log(limiter(apiCall)); // Rate limit exceeded...

// The limiter remembers previous calls!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common Pitfall */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Pitfall: Loop Closures</CardTitle>
              <CardDescription>A classic mistake beginners make</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30 p-5">
              <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">❌ Wrong - Using var</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Output: 3, 3, 3
// WHY? All closures share
// the same 'i' variable!`}</pre>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All three functions reference the same <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">i</code>, which ends at 3
              </p>
            </div>

            <div className="rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30 p-5">
              <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">✅ Correct - Using let</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Output: 0, 1, 2
// Perfect! Each closure has
// its own 'i' copy`}</pre>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">let</code> creates a new variable for each iteration!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use closures for data privacy</li>
                <li>• Create function factories when needed</li>
                <li>• Use let/const in loops (not var)</li>
                <li>• Return functions from functions</li>
                <li>• Keep closure scope minimal</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Creating unnecessary closures</li>
                <li>• Using var in loops with closures</li>
                <li>• Storing too much data in closures</li>
                <li>• Forgetting memory implications</li>
                <li>• Over-complicating simple code</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
