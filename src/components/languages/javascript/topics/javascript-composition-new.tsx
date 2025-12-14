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
  GitBranch,
  Workflow,
} from 'lucide-react';

export default function JavaScriptCompositionNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Workflow}
        category="JavaScript Design Patterns"
        title="Function Composition"
        description="Combine simple functions into complex operations"
        colorTheme="yellow"
      />

      {/* What is Composition? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-teal-50/30 to-emerald-50/20 dark:from-cyan-950/10 dark:via-teal-950/5 dark:to-emerald-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Composition: Building Blocks
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-cyan-700 dark:text-cyan-400">Function composition</strong> combines simple functions to build more complex ones. Think of it as a <strong>pipeline</strong> where data flows through transformations!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <GitBranch className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">Mathematical Definition</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <code>(f ∘ g)(x) = f(g(x))</code><br/>
              Output of <code>g</code> becomes input of <code>f</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Composition */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Composition</CardTitle>
              <CardDescription>Combining two functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Manual */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">Manual Nesting</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

// Nested calls (hard to read)
const result = addOne(square(double(3)));
console.log(result); // 37

// Step by step (verbose)
const step1 = double(3);   // 6
const step2 = square(step1); // 36
const step3 = addOne(step2); // 37

// Hard to reuse this pattern`}</pre>
              </div>
            </div>

            {/* Composed */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Composed Function</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

// Compose helper
const compose = (...fns) => x =>
  fns.reduceRight((v, f) => f(v), x);

// Create composed function
const transform = compose(addOne, square, double);

console.log(transform(3)); // 37

// Reusable and readable!
const data = [1, 2, 3, 4, 5];
console.log(data.map(transform));
// [5, 17, 37, 65, 101]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Compose and Pipe"
        description="Two ways to compose functions"
        code={`// Compose - right to left (mathematical)
const compose = (...fns) => x =>
  fns.reduceRight((v, f) => f(v), x);

// Pipe - left to right (more intuitive)
const pipe = (...fns) => x =>
  fns.reduce((v, f) => f(v), x);

const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

// Compose: reads right to left
const composed = compose(addOne, square, double);
console.log(composed(3)); // addOne(square(double(3))) = 37

// Pipe: reads left to right
const piped = pipe(double, square, addOne);
console.log(piped(3)); // addOne(square(double(3))) = 37

// Pipe is often more readable
const processUser = pipe(
  user => ({ ...user, name: user.name.toUpperCase() }),
  user => ({ ...user, age: user.age + 1 }),
  user => ({ ...user, verified: true })
);

const user = { name: 'alice', age: 25 };
console.log(processUser(user));
// { name: 'ALICE', age: 26, verified: true }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Point-Free Style */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Point-Free Style</CardTitle>
              <CardDescription>Define functions without mentioning arguments</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">No Explicit Parameters</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// With points (parameters)
const doubleAll = numbers => numbers.map(x => x * 2);
const sumAll = numbers => numbers.reduce((a, b) => a + b, 0);

// Point-free (no parameters mentioned)
const double = x => x * 2;
const sum = (a, b) => a + b;

const doubleAllPointFree = arr => arr.map(double);
const sumAllPointFree = arr => arr.reduce(sum, 0);

// Or even more point-free
const map = fn => arr => arr.map(fn);
const reduce = (fn, init) => arr => arr.reduce(fn, init);

const doubleAllClean = map(double);
const sumAllClean = reduce(sum, 0);

const numbers = [1, 2, 3, 4, 5];
console.log(doubleAllClean(numbers));  // [2, 4, 6, 8, 10]
console.log(sumAllClean(numbers));     // 15

// Compose point-free functions
const sumOfDoubles = pipe(
  map(double),
  reduce(sum, 0)
);

console.log(sumOfDoubles(numbers)); // 30`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

        <CodeSnippet
          title="Building Reusable Utilities"
          description="Create a functional toolkit"
          code={`// Utility functions
const map = fn => arr => arr.map(fn);
const filter = fn => arr => arr.filter(fn);
const reduce = (fn, init) => arr => arr.reduce(fn, init);
const take = n => arr => arr.slice(0, n);
const skip = n => arr => arr.slice(n);
const reverse = arr => [...arr].reverse();
const pipe = (...fns) => x =>
  fns.reduce((v, f) => f(v), x);

// Predicates
const isEven = x => x % 2 === 0;
const isPositive = x => x > 0;
const greaterThan = n => x => x > n;

// Transformations
const double = x => x * 2;
const square = x => x * x;
const add = a => b => a + b;

// Compose complex operations
const sumOfSquaredEvens = pipe(
  filter(isEven),
  map(square),
  reduce(add(0), 0)
);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfSquaredEvens(numbers)); // 220

// Another example
const firstFiveOddsDoubled = pipe(
  filter(x => !isEven(x)),
  take(5),
  map(double)
);

console.log(firstFiveOddsDoubled(numbers)); // [2, 6, 10, 14, 18]

// String processing
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const words = str => str.split(' ');
const join = sep => arr => arr.join(sep);

const slugify = pipe(
  trim,
  toLowerCase,
  words,
  join('-')
);

console.log(slugify('  Hello World Example  ')); // hello-world-example`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Async Composition */}
      <CodeSnippet
        title="Async Composition"
        description="Compose async functions"
        code={`// Async pipe
const pipeAsync = (...fns) => x =>
  fns.reduce(async (v, f) => f(await v), x);

// Async functions
const fetchUser = async id => {
  // Simulate API call
  return { id, name: 'Alice', age: 25 };
};

const addTimestamp = async user => {
  return { ...user, timestamp: Date.now() };
};

const validate = async user => {
  if (!user.name) throw new Error('Name required');
  return user;
};

const saveToDatabase = async user => {
  console.log('Saving:', user);
  return { ...user, saved: true };
};

// Compose async operations
const processUser = pipeAsync(
  fetchUser,
  validate,
  addTimestamp,
  saveToDatabase
);

// Usage
processUser(123).then(console.log);

// Promise composition
const composeAsync = (...fns) => x =>
  fns.reduceRight((v, f) => v.then(f), Promise.resolve(x));

const getUserData = id => Promise.resolve({ id, email: 'a@b.com' });
const enrichData = user => Promise.resolve({ ...user, premium: true });
const formatResponse = user => Promise.resolve(JSON.stringify(user, null, 2));

const getFormattedUser = composeAsync(
  formatResponse,
  enrichData,
  getUserData
);

getFormattedUser(456).then(console.log);`}
        language="javascript"
        colorTheme="yellow"
        icon={Workflow}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: Data Processing Pipeline"
        description="Transform raw data into presentation format"
        code={`// Data transformation utilities
const map = fn => arr => arr.map(fn);
const filter = fn => arr => arr.filter(fn);
const sortBy = fn => arr => [...arr].sort((a, b) => fn(a) - fn(b));
const groupBy = key => arr => 
  arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});

// Raw data
const orders = [
  { id: 1, customer: 'Alice', amount: 100, status: 'completed' },
  { id: 2, customer: 'Bob', amount: 50, status: 'pending' },
  { id: 3, customer: 'Alice', amount: 200, status: 'completed' },
  { id: 4, customer: 'Charlie', amount: 75, status: 'completed' },
  { id: 5, customer: 'Bob', amount: 120, status: 'completed' },
];

// Processing functions
const onlyCompleted = filter(order => order.status === 'completed');
const addTax = map(order => ({ ...order, total: order.amount * 1.1 }));
const sortByAmount = sortBy(order => order.amount);

// Compose pipeline
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const processOrders = pipe(
  onlyCompleted,
  addTax,
  sortByAmount
);

console.log(processOrders(orders));

// Another pipeline
const calculateRevenue = orders => pipe(
  filter(o => o.status === 'completed'),
  map(o => o.amount),
  arr => arr.reduce((sum, n) => sum + n, 0)
)(orders);

console.log('Revenue:', calculateRevenue(orders)); // 495

// Group and summarize
const customerSummary = pipe(
  onlyCompleted,
  groupBy('customer'),
  groups => Object.entries(groups).map(([customer, orders]) => ({
    customer,
    orderCount: orders.length,
    totalSpent: orders.reduce((sum, o) => sum + o.amount, 0)
  })),
  sortBy(summary => -summary.totalSpent)
);

console.log(customerSummary(orders));
// [
//   { customer: 'Alice', orderCount: 2, totalSpent: 300 },
//   { customer: 'Bob', orderCount: 1, totalSpent: 120 },
//   { customer: 'Charlie', orderCount: 1, totalSpent: 75 }
// ]`}
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
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Combine Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Build complex from simple<br/>
                    f(g(x)) - output of g feeds into f
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pipe vs Compose</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pipe: left to right (intuitive)<br/>
                    Compose: right to left (mathematical)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Point-Free Style</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No explicit parameters<br/>
                    Focus on function composition
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reusable Pipelines</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create data transformation flows<br/>
                    Easy to test and maintain
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Start with small, pure functions. Compose them into pipelines. This makes code easier to understand, test, and reuse!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
