'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Target } from 'lucide-react';

export default function JavaScriptAtMethod() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Target}
        category="Modern JavaScript (ES2022)"
        title="Array/String .at()"
        description="Access elements with negative indices - count from the end!"
        colorTheme="teal"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50/80 via-cyan-50/50 to-blue-50/30 dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white shadow-xl">
              <Target className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                What is the .at() Method?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 rounded">.at()</code> method lets you 
                <strong className="text-teal-700 dark:text-teal-400"> access elements with negative indices</strong>! 
                Use <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded">.at(-1)</code> for the last element, 
                <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">.at(-2)</code> for second-to-last. 
                Works on <strong className="text-cyan-700 dark:text-cyan-400">arrays and strings</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Simpler Than [arr.length - 1]!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Before: <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">arr[arr.length - 1]</code>. 
              Now: <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">arr.at(-1)</code>. Much cleaner!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Accessing Array Elements"
        description="Use positive and negative indices"
        language="javascript"
        colorTheme="teal"
        code={`const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// Positive indices (from start)
console.log(fruits.at(0));   // "apple" (first)
console.log(fruits.at(1));   // "banana"
console.log(fruits.at(2));   // "orange"

// Negative indices (from end) - The magic!
console.log(fruits.at(-1));  // "grape" (last) ✨
console.log(fruits.at(-2));  // "mango" (second-to-last)
console.log(fruits.at(-3));  // "orange" (third-to-last)


// Old way vs new way
const arr = [10, 20, 30, 40, 50];

// Get last element
console.log(arr[arr.length - 1]);  // 50 (old way)
console.log(arr.at(-1));           // 50 (new way!) ✅

// Get second-to-last
console.log(arr[arr.length - 2]);  // 40 (old way)
console.log(arr.at(-2));           // 40 (new way!) ✅


// Out of bounds returns undefined
console.log(fruits.at(10));   // undefined
console.log(fruits.at(-10));  // undefined


// Works with strings too!
const text = 'Hello';
console.log(text.at(0));   // "H"
console.log(text.at(-1));  // "o" (last char)
console.log(text.at(-2));  // "l"`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for .at()"
        language="javascript"
        colorTheme="cyan"
        code={`// 1. Get last item in a function
function getLastElement(arr) {
  return arr.at(-1);  // Clean and simple!
}

console.log(getLastElement([1, 2, 3, 4, 5]));  // 5


// 2. Working with data from APIs
const userMessages = [
  { id: 1, text: 'Hello' },
  { id: 2, text: 'How are you?' },
  { id: 3, text: 'Good!' }
];

const latestMessage = userMessages.at(-1);
console.log(latestMessage);
// { id: 3, text: 'Good!' }


// 3. Get file extension
function getExtension(filename) {
  const parts = filename.split('.');
  return parts.at(-1);  // Last part is extension
}

console.log(getExtension('document.pdf'));      // "pdf"
console.log(getExtension('image.backup.jpg'));  // "jpg"


// 4. Check last character of string
function endsWithPunctuation(text) {
  const lastChar = text.at(-1);
  return ['.', '!', '?'].includes(lastChar);
}

console.log(endsWithPunctuation('Hello!'));    // true
console.log(endsWithPunctuation('Hello'));     // false


// 5. Get penultimate (second-to-last) element
const scores = [85, 90, 78, 92, 88];
const secondBest = scores.sort((a, b) => b - a).at(1);
console.log(secondBest);  // Second highest score


// 6. Dynamic index from end
function getNthFromEnd(arr, n) {
  return arr.at(-n);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getNthFromEnd(numbers, 1));  // 10 (last)
console.log(getNthFromEnd(numbers, 3));  // 8 (third from end)`}
      />

      <Card>
        <CardHeader>
          <CardTitle>.at() vs Bracket Notation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800/30">
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Use .at() When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Need negative indices</li>
                <li>✅ Accessing from end of array</li>
                <li>✅ Dynamic indices (might be negative)</li>
                <li>✅ Cleaner code for last element</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Use [] When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Simple positive indices</li>
                <li>✅ Performance critical (slightly faster)</li>
                <li>✅ Assigning values (can't use .at())</li>
                <li>✅ Older browser support needed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-300 dark:border-teal-700 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-blue-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➖</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Negative Indices</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Count from the end: -1 is last, -2 is second-to-last
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Cleaner Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Replace <code className="text-xs">arr[arr.length-1]</code> with <code className="text-xs">arr.at(-1)</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔤</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Works on Strings</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Both arrays and strings support .at()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern convenience method
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
