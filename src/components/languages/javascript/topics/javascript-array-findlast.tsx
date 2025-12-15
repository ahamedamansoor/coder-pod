'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, ArrowLeft } from 'lucide-react';

export default function JavaScriptArrayFindLast() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowLeft}
        category="Modern JavaScript (ES2023)"
        title="Array findLast/findLastIndex"
        description="Find elements from the end of arrays - search backwards!"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-violet-50/50 to-fuchsia-50/30 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-xl">
              <ArrowLeft className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                What are findLast & findLastIndex?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded">findLast()</code> and 
                <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 rounded mx-1">findLastIndex()</code> search arrays 
                <strong className="text-purple-700 dark:text-purple-400"> from the end backwards</strong>! 
                Just like <code className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded">find()</code> and 
                <code className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded">findIndex()</code>, but in reverse. 
                Perfect for finding the <strong className="text-violet-700 dark:text-violet-400">last matching element</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Mirror of find/findIndex!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Same API as <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">find()</code> and 
              <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">findIndex()</code>, just searches from the end!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Finding from the End"
        description="Use findLast() and findLastIndex() to search backwards"
        language="javascript"
        colorTheme="purple"
        code={`const numbers = [5, 12, 8, 130, 44, 12, 7];

// find() - searches from start
const firstLarge = numbers.find(n => n > 10);
console.log(firstLarge);  // 12 (first match)

// findLast() - searches from end
const lastLarge = numbers.findLast(n => n > 10);
console.log(lastLarge);  // 12 (last match, at index 5)


// findIndex() - index of first match
const firstIndex = numbers.findIndex(n => n > 10);
console.log(firstIndex);  // 1

// findLastIndex() - index of last match
const lastIndex = numbers.findLastIndex(n => n > 10);
console.log(lastIndex);  // 5


// Finding objects
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
  { id: 4, name: 'Diana', active: true }
];

// Last active user
const lastActive = users.findLast(user => user.active);
console.log(lastActive);
// { id: 4, name: 'Diana', active: true }

// Index of last active user
const lastActiveIndex = users.findLastIndex(user => user.active);
console.log(lastActiveIndex);  // 3


// Not found returns undefined/-1
const arr = [1, 2, 3];
console.log(arr.findLast(n => n > 10));       // undefined
console.log(arr.findLastIndex(n => n > 10));  // -1`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for searching from the end"
        language="javascript"
        colorTheme="purple"
        code={`// 1. Get most recent matching item
const transactions = [
  { id: 1, type: 'deposit', amount: 100, date: '2024-01-01' },
  { id: 2, type: 'withdrawal', amount: 50, date: '2024-01-02' },
  { id: 3, type: 'deposit', amount: 200, date: '2024-01-03' },
  { id: 4, type: 'withdrawal', amount: 75, date: '2024-01-04' }
];

const lastDeposit = transactions.findLast(t => t.type === 'deposit');
console.log(lastDeposit);
// { id: 3, type: 'deposit', amount: 200, date: '2024-01-03' }


// 2. Find last error in logs
const logs = [
  { level: 'info', message: 'Started' },
  { level: 'error', message: 'Connection failed' },
  { level: 'info', message: 'Retrying' },
  { level: 'error', message: 'Timeout' }
];

const lastError = logs.findLast(log => log.level === 'error');
console.log(lastError.message);  // "Timeout"


// 3. Find last occurrence in sorted data
const scores = [45, 67, 78, 82, 82, 90, 95];

// Last score below 90
const lastBelow90 = scores.findLast(score => score < 90);
console.log(lastBelow90);  // 82


// 4. Get most recent version
const versions = [
  { version: '1.0.0', stable: true },
  { version: '1.1.0', stable: false },
  { version: '1.2.0', stable: true },
  { version: '2.0.0', stable: false }
];

const latestStable = versions.findLast(v => v.stable);
console.log(latestStable.version);  // "1.2.0"


// 5. Remove last matching item (using findLastIndex)
function removeLastMatch(arr, predicate) {
  const index = arr.findLastIndex(predicate);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const items = ['a', 'b', 'c', 'b', 'd'];
removeLastMatch(items, item => item === 'b');
console.log(items);  // ['a', 'b', 'c', 'd']`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30">
                  <th className="p-3 text-left border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Method</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Direction</th>
                  <th className="p-3 text-center border border-purple-200 dark:border-purple-800 text-gray-900 dark:text-gray-100">Returns</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>find()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Start → End</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">First match or undefined</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>findLast()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-purple-600 dark:text-purple-400">End → Start</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Last match or undefined</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>findIndex()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Start → End</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">First index or -1</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code>findLastIndex()</code></td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-purple-600 dark:text-purple-400">End → Start</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Last index or -1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">◀️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Search Backwards</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Starts from end and works towards beginning
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Same API</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works like find/findIndex, just reversed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Most Recent</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for finding latest matching items
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2023</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Latest array search methods
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
