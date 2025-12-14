'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, CheckCircle2, XCircle } from 'lucide-react';

export default function JavaScriptSet() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Sparkles}
        category="JavaScript Collections"
        title="Set"
        description="Store unique values - no duplicates allowed!"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-violet-50/50 to-fuchsia-50/30 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-xl">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                What is a Set?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of a Set as a <strong className="text-purple-700 dark:text-purple-400">VIP guest list</strong> where each person's name can only appear once! 
                It's a collection that automatically removes duplicates. Perfect for storing unique values like unique IDs, tags, or email addresses.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use Set?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Arrays can have duplicates like <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">[1, 2, 2, 3]</code>. 
              Sets automatically ensure uniqueness: <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">{`{1, 2, 3}`}</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">🚫</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">No Duplicates</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each value can only appear once - duplicates are automatically ignored!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/10 border-2 border-violet-200 dark:border-violet-800">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Fast Lookup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Check if a value exists instantly - faster than arrays!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Any Type</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Store numbers, strings, objects - anything! Each unique value counts.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Common Methods</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <code className="font-bold text-blue-900 dark:text-blue-100">add(value)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Add a new value</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <code className="font-bold text-blue-900 dark:text-blue-100">delete(value)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Remove a value</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">🔍</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">has(value)</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Check if value exists</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">🔢</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">size</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Get number of values</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">🧹</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">clear()</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Remove all values</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 dark:text-blue-400">🔄</span>
                    <code className="font-bold text-blue-900 dark:text-blue-100">forEach()</code>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Loop through values</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Removing Duplicates from Array"
        description="The most common use case - get unique values"
        language="javascript"
        colorTheme="purple"
        code={`// Array with duplicate numbers
const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// Create Set - duplicates automatically removed!
const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);
// Set { 1, 2, 3, 4, 5 }

// Convert back to array
const cleanArray = [...uniqueNumbers];
console.log(cleanArray);
// [1, 2, 3, 4, 5]

// Real-world example: Unique tags
const tags = ['javascript', 'react', 'javascript', 'nodejs', 'react'];
const uniqueTags = [...new Set(tags)];
console.log(uniqueTags);
// ['javascript', 'react', 'nodejs']`}
      />

      <CodeSnippet
        title="Example 2: Managing a Collection"
        description="Add, check, and remove items from Set"
        language="javascript"
        colorTheme="violet"
        code={`// Create empty Set
const visitedPages = new Set();

// Add pages
visitedPages.add('/home');
visitedPages.add('/about');
visitedPages.add('/contact');
visitedPages.add('/home');  // Duplicate - won't be added!

console.log(visitedPages.size);  // 3 (not 4)

// Check if exists
console.log(visitedPages.has('/home'));     // true
console.log(visitedPages.has('/products')); // false

// Remove a page
visitedPages.delete('/contact');
console.log(visitedPages.size);  // 2

// Loop through Set
visitedPages.forEach(page => {
  console.log('Visited:', page);
});
// Visited: /home
// Visited: /about`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Set vs Array</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">✅ Use Set When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Need unique values only</li>
                <li>• Fast lookup is important</li>
                <li>• Adding/removing frequently</li>
                <li>• Order doesn't matter much</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">✅ Use Array When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Duplicates are needed</li>
                <li>• Need index access (arr[0])</li>
                <li>• Array methods needed (map, filter)</li>
                <li>• Order is very important</li>
              </ul>
            </div>
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
                <span className="text-2xl">🚫</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No Duplicates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Each value can only appear once - perfect for unique collections
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Fast Operations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">has()</code> is much faster than array <code className="text-xs">includes()</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Easy Conversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">[...set]</code> to convert Set back to Array
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Case</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tags, IDs, visited pages, unique usernames
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
