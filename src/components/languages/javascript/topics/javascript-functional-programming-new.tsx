'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Zap,
  GitBranch,
} from 'lucide-react';

export default function JavaScriptFunctionalProgrammingNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Design Patterns"
        title="Functional Programming"
        description="Pure functions, immutability, and composition"
        colorTheme="yellow"
      />

      {/* What is Functional Programming? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-violet-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-violet-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Functional Programming: Data Transformation
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-blue-700 dark:text-blue-400">Functional programming</strong> treats computation as evaluating mathematical functions. Focus on <strong>what to do</strong>, not <strong>how to do it</strong>. Use pure functions, avoid mutations, and compose small functions!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <GitBranch className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">Core Principles</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>1. Pure Functions</strong> - Same input = same output, no side effects<br/>
              <strong>2. Immutability</strong> - Never modify data, create new data<br/>
              <strong>3. Composition</strong> - Combine simple functions into complex ones
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Pure Functions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Pure Functions</CardTitle>
              <CardDescription>Predictable, testable, no side effects</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Impure */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Impure - Side Effects</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`let total = 0;

// Impure - modifies external state
function add(value) {
  total += value;
  return total;
}

add(5);  // 5
add(5);  // 10 (different result!)

// Impure - depends on external state
function getTax() {
  return total * 0.1;
}

// Impure - random output
function getRandomPrice() {
  return Math.random() * 100;
}

// Impure - mutates input
function addToArray(arr, item) {
  arr.push(item);
  return arr;
}`}</pre>
              </div>
            </div>

            {/* Pure */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Pure - Predictable</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Pure - takes all inputs as parameters
function add(a, b) {
  return a + b;
}

add(5, 10);  // 15
add(5, 10);  // 15 (always same!)

// Pure - all inputs explicit
function getTax(amount) {
  return amount * 0.1;
}

// Pure - deterministic
function getPrice(basePrice, quantity) {
  return basePrice * quantity;
}

// Pure - returns new array
function addToArray(arr, item) {
  return [...arr, item];
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Pure Function Benefits"
        description="Easy to test, cache, and reason about"
        code={`// Pure function - easy to test
function multiply(a, b) {
  return a * b;
}

// Test is simple
console.log(multiply(3, 4) === 12); // true
console.log(multiply(3, 4) === 12); // always true!

// Can memoize (cache) results
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedMultiply = memoize(multiply);
console.log(memoizedMultiply(3, 4)); // Calculates
console.log(memoizedMultiply(3, 4)); // Uses cache

// Pure functions are composable
const double = x => x * 2;
const square = x => x * x;
const doubleThenSquare = x => square(double(x));

console.log(doubleThenSquare(3)); // 36`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Immutability */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Immutability</CardTitle>
              <CardDescription>Never modify, always create new</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Mutable */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Mutable - Changes Data</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice',
  age: 25
};

// Mutates original object
user.age = 26;
console.log(user); // { name: 'Alice', age: 26 }

const numbers = [1, 2, 3];

// Mutates original array
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// Hard to track changes
function updateUser(user) {
  user.lastModified = Date.now();
  return user; // Modified original!
}`}</pre>
              </div>
            </div>

            {/* Immutable */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Immutable - New Data</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice',
  age: 25
};

// Creates new object
const updated = { ...user, age: 26 };
console.log(user);    // { name: 'Alice', age: 25 }
console.log(updated); // { name: 'Alice', age: 26 }

const numbers = [1, 2, 3];

// Creates new array
const newNumbers = [...numbers, 4];
console.log(numbers);    // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4]

// Easy to track
function updateUser(user) {
  return { ...user, lastModified: Date.now() };
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Immutable Array Operations"
        description="Array methods that don't mutate"
        code={`const numbers = [1, 2, 3, 4, 5];

// ✅ map - creates new array
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - unchanged

// ✅ filter - creates new array
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens);   // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] - unchanged

// ✅ reduce - computes value
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum);     // 15

// ✅ slice - creates new array
const subset = numbers.slice(1, 3);
console.log(subset);  // [2, 3]
console.log(numbers); // [1, 2, 3, 4, 5] - unchanged

// ✅ concat - creates new array
const combined = numbers.concat([6, 7]);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7]
console.log(numbers);  // [1, 2, 3, 4, 5] - unchanged

// ❌ Avoid these (they mutate):
// push, pop, shift, unshift, splice, sort, reverse`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Higher-Order Functions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Higher-Order Functions</CardTitle>
              <CardDescription>Functions that take or return functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Functions as First-Class Citizens</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Function that returns a function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Function that takes a function
function applyOperation(arr, operation) {
  return arr.map(operation);
}

const numbers = [1, 2, 3, 4, 5];
const squared = applyOperation(numbers, x => x * x);
console.log(squared); // [1, 4, 9, 16, 25]

// Combining both
function createLogger(prefix) {
  return function(message) {
    console.log(\`[\${prefix}] \${message}\`);
  };
}

const errorLog = createLogger('ERROR');
const infoLog = createLogger('INFO');

errorLog('Something went wrong'); // [ERROR] Something went wrong
infoLog('Process completed');     // [INFO] Process completed`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Declarative vs Imperative"
        description="Focus on what, not how"
        code={`const numbers = [1, 2, 3, 4, 5];

// ❌ Imperative - HOW to do it
function getEvensImperative(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// ✅ Declarative - WHAT to do
function getEvensDeclarative(arr) {
  return arr.filter(x => x % 2 === 0);
}

console.log(getEvensImperative(numbers));  // [2, 4]
console.log(getEvensDeclarative(numbers)); // [2, 4]

// Imperative - step by step
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Declarative - express intent
const sumDeclarative = numbers.reduce((acc, x) => acc + x, 0);

// Chain operations declaratively
const result = numbers
  .filter(x => x % 2 === 0)  // Get evens
  .map(x => x * x)           // Square them
  .reduce((acc, x) => acc + x, 0); // Sum

console.log(result); // 20 (2² + 4² = 4 + 16)`}
        language="javascript"
        colorTheme="yellow"
        icon={Zap}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: Shopping Cart"
        description="Functional approach to state management"
        code={`// Functional shopping cart
const cart = [
  { id: 1, name: 'Laptop', price: 999, quantity: 1 },
  { id: 2, name: 'Mouse', price: 25, quantity: 2 },
  { id: 3, name: 'Keyboard', price: 75, quantity: 1 }
];

// Pure function - calculate total
const calculateTotal = (cart) =>
  cart.reduce((total, item) => total + (item.price * item.quantity), 0);

console.log(calculateTotal(cart)); // 1124

// Pure function - add item (immutable)
const addItem = (cart, item) => [...cart, item];

// Pure function - update quantity (immutable)
const updateQuantity = (cart, id, quantity) =>
  cart.map(item => 
    item.id === id 
      ? { ...item, quantity }
      : item
  );

// Pure function - remove item (immutable)
const removeItem = (cart, id) =>
  cart.filter(item => item.id !== id);

// Pure function - apply discount
const applyDiscount = (cart, discount) =>
  cart.map(item => ({
    ...item,
    price: item.price * (1 - discount)
  }));

// Use it
const newItem = { id: 4, name: 'Monitor', price: 299, quantity: 1 };
const cartWithNewItem = addItem(cart, newItem);
const cartWithUpdatedQty = updateQuantity(cartWithNewItem, 1, 2);
const cartWithDiscount = applyDiscount(cartWithUpdatedQty, 0.1);

console.log(calculateTotal(cartWithDiscount));

// Original cart unchanged!
console.log(cart.length); // 3
console.log(cartWithDiscount.length); // 4`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pure Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Same input = same output<br/>
                    No side effects, easy to test
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Immutability</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Never modify, always create new<br/>
                    Use map, filter, reduce, spread
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Higher-Order Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Functions as arguments/returns<br/>
                    Enable powerful abstractions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Declarative Style</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Express what, not how<br/>
                    Readable, maintainable code
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              You don't have to go 100% functional! Mix functional concepts with other styles. Use pure functions where possible, prefer immutability, and leverage array methods.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
