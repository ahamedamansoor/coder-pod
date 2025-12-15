'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Layers } from 'lucide-react';

export default function JavaScriptArrayGroupBy() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="Modern JavaScript (ES2024)"
        title="Array Grouping"
        description="Group arrays by property with Object.groupBy() and Map.groupBy()!"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-sky-50/30 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-xl">
              <Layers className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                What is Array Grouping?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">Object.groupBy()</code> and 
                <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded mx-1">Map.groupBy()</code> let you 
                <strong className="text-blue-700 dark:text-blue-400"> group array elements</strong> by any property or condition! 
                No more <code className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 rounded">reduce()</code> gymnastics - 
                just simple, <strong className="text-cyan-700 dark:text-cyan-400">readable grouping</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">So Much Cleaner!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Replace complex <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">reduce()</code> logic 
              with a single <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">groupBy()</code> call!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Object.groupBy() Basics"
        description="Group arrays into objects"
        language="javascript"
        colorTheme="blue"
        code={`const inventory = [
  { name: 'Asparagus', type: 'vegetables', quantity: 5 },
  { name: 'Bananas', type: 'fruit', quantity: 0 },
  { name: 'Goat', type: 'meat', quantity: 23 },
  { name: 'Cherries', type: 'fruit', quantity: 5 },
  { name: 'Fish', type: 'meat', quantity: 22 }
];

// Old way with reduce - verbose!
const groupedOld = inventory.reduce((acc, item) => {
  const key = item.type;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});


// New way - Object.groupBy()
const grouped = Object.groupBy(inventory, item => item.type);

console.log(grouped);
// {
//   vegetables: [{ name: 'Asparagus', ... }],
//   fruit: [{ name: 'Bananas', ... }, { name: 'Cherries', ... }],
//   meat: [{ name: 'Goat', ... }, { name: 'Fish', ... }]
// }


// Group by availability
const availability = Object.groupBy(inventory, item => {
  return item.quantity > 0 ? 'inStock' : 'outOfStock';
});

console.log(availability);
// {
//   inStock: [asparagus, goat, cherries, fish],
//   outOfStock: [bananas]
// }


// Group users by age range
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 28 },
  { name: 'Diana', age: 42 }
];

const byAgeGroup = Object.groupBy(users, user => {
  if (user.age < 30) return '20s';
  if (user.age < 40) return '30s';
  return '40s+';
});

console.log(byAgeGroup);
// {
//   '20s': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 28 }],
//   '30s': [{ name: 'Bob', age: 35 }],
//   '40s+': [{ name: 'Diana', age: 42 }]
// }`}
      />

      <CodeSnippet
        title="Example 2: Map.groupBy() for Non-String Keys"
        description="Use Map.groupBy() when keys aren't strings"
        language="javascript"
        colorTheme="cyan"
        code={`// Map.groupBy() - for non-primitive keys
const products = [
  { id: 1, price: 10.99 },
  { id: 2, price: 25.50 },
  { id: 3, price: 10.99 },
  { id: 4, price: 50.00 },
  { id: 5, price: 25.50 }
];

// Group by price (number keys)
const byPrice = Map.groupBy(products, p => p.price);

console.log(byPrice);
// Map {
//   10.99 => [{ id: 1, price: 10.99 }, { id: 3, price: 10.99 }],
//   25.50 => [{ id: 2, price: 25.50 }, { id: 5, price: 25.50 }],
//   50.00 => [{ id: 4, price: 50.00 }]
// }

// Access grouped data
console.log(byPrice.get(10.99));
// [{ id: 1, price: 10.99 }, { id: 3, price: 10.99 }]


// Real-world: Group events by date object
const events = [
  { name: 'Meeting', date: new Date('2024-01-15') },
  { name: 'Conference', date: new Date('2024-01-15') },
  { name: 'Workshop', date: new Date('2024-01-16') }
];

// Using date strings as keys
const byDate = Object.groupBy(events, event => 
  event.date.toDateString()
);

console.log(byDate);
// {
//   'Mon Jan 15 2024': [meeting, conference],
//   'Tue Jan 16 2024': [workshop]
// }


// Complex grouping with nested properties
const orders = [
  { id: 1, customer: { country: 'USA' }, total: 100 },
  { id: 2, customer: { country: 'UK' }, total: 200 },
  { id: 3, customer: { country: 'USA' }, total: 150 }
];

const byCountry = Object.groupBy(orders, 
  order => order.customer.country
);

console.log(byCountry);
// {
//   USA: [{ id: 1, ... }, { id: 3, ... }],
//   UK: [{ id: 2, ... }]
// }`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Object.groupBy() vs Map.groupBy()</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                  <th className="p-3 text-left border border-blue-200 dark:border-blue-800 text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="p-3 text-center border border-blue-200 dark:border-blue-800 text-gray-900 dark:text-gray-100">Object.groupBy()</th>
                  <th className="p-3 text-center border border-blue-200 dark:border-blue-800 text-gray-900 dark:text-gray-100">Map.groupBy()</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Return type</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Plain object</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Map instance</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Key types</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Strings/Symbols</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">Any type ✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Access</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"><code className="text-xs">obj.key</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"><code className="text-xs">map.get(key)</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Best for</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Simple cases</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400">Complex keys ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Object.groupBy() and Map.groupBy()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Clean Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No more complex reduce() logic
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗂️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Group by Anything</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Any property or custom condition
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2024</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built-in array grouping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
