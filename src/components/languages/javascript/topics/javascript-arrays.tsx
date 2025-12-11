'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Layers,
  Sparkles,
  ListChecks,
  Grid,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Boxes,
  Package,
  ShoppingCart,
  ListTodo,
} from 'lucide-react';

export default function JavaScriptArrays() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript · Data Structures"
        title="Arrays"
        description="Master ordered collections and powerful transformation methods"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Arrays?
          </CardTitle>
          <CardDescription className="text-base">
            Ordered collections that store multiple values in a single variable, enabling powerful data manipulation
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Ordered Data</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Maintains insertion order with zero-based indexing
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Index-based
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-cyan-600/80 dark:text-cyan-400/80" />
              <h3 className="font-semibold">Flexible Type</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Store any type: numbers, strings, objects, or nested arrays
            </p>
            <Badge className="bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-300/50 dark:border-cyan-700/40">
              Dynamic
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Grid className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Transform Power</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Built-in methods for mapping, filtering, and reducing data
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Functional
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Understanding Arrays */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Understanding Arrays
          </CardTitle>
          <CardDescription className="text-base">
            A zero-indexed list that stores multiple values in a single variable
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Arrays are JavaScript's most fundamental data structure for storing <strong>ordered collections</strong>. They use zero-based indexing, meaning the first element is at position <code>0</code>. Arrays can store any type of data and dynamically grow or shrink as needed.
          </p>
          
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">array-basics.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Creating and accessing arrays</span>
            </div>
            <pre 
              className="text-xs px-4 py-3 whitespace-pre overflow-x-auto"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`// Create and access arrays
const languages = ['HTML', 'CSS', 'JavaScript'];
console.log(languages[0]); // HTML
console.log(languages.length); // 3`}
            </pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              Arrays use bracket notation <code>[]</code> for access. The <code>length</code> property always reflects the number of elements. Use <code>array[array.length - 1]</code> to access the last element.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Core Array Operations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Grid className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Core Array Operations
          </CardTitle>
          <CardDescription className="text-base">
            Transform, filter, and summarize data with built-in methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="map, filter & reduce"
              description="The holy trinity of array transformation methods"
              code={`const numbers = [10, 20, 30, 40];

const doubled = numbers.map((value) => value * 2);
const filtered = numbers.filter((value) => value >= 25);
const total = numbers.reduce((sum, value) => sum + value, 0);

console.log(doubled);  // [20, 40, 60, 80]
console.log(filtered); // [30, 40]
console.log(total);    // 100`}
              language="javascript"
              colorTheme="blue"
              icon={Grid}
              features={[
                "map() transforms each element",
                "filter() selects matching items",
                "reduce() combines to single value",
                "Pure functions - no mutations"
              ]}
              tips={[
                "map() creates new array with same length",
                "filter() returns subset of original",
                "reduce() is most powerful - can do anything"
              ]}
            />

            <CodeSnippet
              title="Nested Arrays & flatten"
              description="Work with multi-dimensional arrays and flatten them"
              code={`// Nested arrays (2D)
const seats = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
];

console.log(seats[1][2]); // B3

// Flatten
const flat = seats.flat();
console.log(flat); // ["A1","A2","A3","B1","B2","B3"]`}
              language="javascript"
              colorTheme="purple"
              icon={Layers}
              features={[
                "Access nested elements",
                "flat() flattens one level",
                "flatMap() combines map + flat",
                "Useful for grids and tables"
              ]}
              tips={[
                "Use flat(depth) for deep nesting",
                "Perfect for matrix operations",
                "Great for CSV or spreadsheet data"
              ]}
            />
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
            Practical patterns you'll use in every application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-3 gap-6">
            <CodeSnippet
              title="Shopping Cart Total"
              description="Calculate totals and extract data from object arrays"
              code={`const cart = [
  { id: 1, name: 'Keyboard', price: 80 },
  { id: 2, name: 'Mouse', price: 40 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
const names = cart.map((item) => item.name);

console.log('Cart total:', total); // 120
console.log('Items:', names);      // ["Keyboard","Mouse"]`}
              language="javascript"
              colorTheme="emerald"
              icon={ShoppingCart}
              features={[
                "reduce() for totals",
                "map() for extraction",
                "Works with object arrays",
                "Common e-commerce pattern"
              ]}
              tips={[
                "Start reduce with 0 for numbers",
                "map() is perfect for UI rendering",
                "Chain methods for complex logic"
              ]}
            />

            <CodeSnippet
              title="Todo State Updates"
              description="Immutably toggle items in state management"
              code={`function toggleTodo(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

const todos = [
  { id: 1, text: 'Plan lesson', done: false },
  { id: 2, text: 'Record video', done: false },
];

const updated = toggleTodo(todos, 2);
console.log(updated);
// id 2 toggled to true`}
              language="javascript"
              colorTheme="blue"
              icon={ListTodo}
              features={[
                "Immutable updates",
                "Spread operator for copying",
                "React/Redux pattern",
                "Preserves other items"
              ]}
              tips={[
                "Always return new array in React",
                "map() perfect for targeted updates",
                "Ternary for conditional logic"
              ]}
            />

            <CodeSnippet
              title="API Data Filtering"
              description="Filter and transform API responses"
              code={`const response = {
  data: [
    { id: '1', status: 'done' },
    { id: '2', status: 'todo' },
    { id: '3', status: 'done' },
  ],
};

const doneIds = response.data
  .filter((item) => item.status === 'done')
  .map((item) => item.id);

console.log(doneIds); // ["1","3"]`}
              language="javascript"
              colorTheme="purple"
              icon={Grid}
              features={[
                "Chain filter + map",
                "Process API responses",
                "Extract specific fields",
                "Clean data pipelines"
              ]}
              tips={[
                "Filter first to reduce iterations",
                "Method chaining is readable",
                "Perfect for analytics data"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Working Immutably */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Boxes className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Working Immutably
          </CardTitle>
          <CardDescription className="text-base">
            Copy and merge arrays without mutations for predictable state
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="Clone Before Editing"
              description="Use spread operator to create copies"
              code={`const base = ['JS', 'TS'];

const copy = [...base];
copy.push('Rust');

console.log('Base:', base); // ["JS","TS"]
console.log('Copy:', copy); // ["JS","TS","Rust"]`}
              language="javascript"
              colorTheme="blue"
              icon={Package}
              features={[
                "Spread creates shallow copy",
                "Original stays unchanged",
                "Essential for React state",
                "Prevents bugs"
              ]}
              tips={[
                "Always clone before mutating",
                "Spread is fastest method",
                "Use slice() as alternative"
              ]}
            />

            <CodeSnippet
              title="Merge with Spread"
              description="Combine multiple arrays elegantly"
              code={`const morning = ['email', 'standup'];
const afternoon = ['code review', 'deploy'];

const schedule = ['Plan', ...morning, 'Lunch', ...afternoon, 'Wrap up'];

console.log(schedule);
// ["Plan","email","standup","Lunch","code review","deploy","Wrap up"]`}
              language="javascript"
              colorTheme="emerald"
              icon={Layers}
              features={[
                "Combine arrays inline",
                "Add items between arrays",
                "Clean, readable syntax",
                "No concat() needed"
              ]}
              tips={[
                "Spread can merge multiple arrays",
                "Add elements anywhere",
                "More flexible than concat()"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive variable names (cartItems, students, tasks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Prefer pure methods (map/filter/reduce) over loops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Clone arrays before mutating in shared state</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Check array length before accessing elements</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Mutating arrays received as props or from state</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Using for loops when array methods are clearer</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Assuming arrays always have items without guards</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Storing unrelated types without proper context</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Takeaway</AlertTitle>
            <AlertDescription>
              Arrays are JavaScript's workhorse data structure. Master map/filter/reduce and immutable patterns to write clean, predictable code. Always clone before mutating shared state, and leverage method chaining for readable transformations.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
    </div>
  );
}
