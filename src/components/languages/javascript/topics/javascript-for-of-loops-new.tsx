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
  Repeat,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptForOfLoopsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript ES6+"
        title="for...of Loops"
        description="Iterate over values - cleaner than traditional for loops"
        colorTheme="yellow"
      />

      {/* What is for...of? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                for...of: Iterate Over Values
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <strong className="text-blue-700 dark:text-blue-400">for...of loop</strong> iterates over <strong>values</strong> of iterable objects (arrays, strings, Maps, Sets, etc.). It's cleaner and more intuitive than traditional for loops!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">for...of vs for...in</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>for...of</strong> → iterates over <strong>values</strong> (use with arrays, strings)<br/>
              <strong>for...in</strong> → iterates over <strong>keys/indexes</strong> (use with objects)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Array Iteration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Array Iteration</CardTitle>
              <CardDescription>Loop through array values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Index-Based</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const colors = ['red', 'green', 'blue'];

// Traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach (can't break/continue)
colors.forEach(color => {
  console.log(color);
});`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ for...of - Clean!</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const colors = ['red', 'green', 'blue'];

// for...of loop
for (const color of colors) {
  console.log(color);
}

// Can use break/continue!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Array for...of Examples"
        description="Iterate over array values"
        code={`// Basic array iteration
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
// Output: 1 2 3 4 5

// With break
const items = ['apple', 'banana', 'cherry', 'date'];

for (const item of items) {
  if (item === 'cherry') break;
  console.log(item);
}
// Output: apple banana

// With continue
for (const num of [1, 2, 3, 4, 5]) {
  if (num === 3) continue;
  console.log(num);
}
// Output: 1 2 4 5

// Array of objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

for (const user of users) {
  console.log(\`\${user.name} is \${user.age} years old\`);
}

// Nested arrays
const matrix = [[1, 2], [3, 4], [5, 6]];

for (const row of matrix) {
  for (const num of row) {
    console.log(num);
  }
}
// Output: 1 2 3 4 5 6`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* String Iteration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>String Iteration</CardTitle>
              <CardDescription>Loop through each character</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - charAt()</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const text = 'Hello';

// Using charAt()
for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}

// Or bracket notation
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ for...of - Natural!</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const text = 'Hello';

// for...of with strings
for (const char of text) {
  console.log(char);
}

// H e l l o`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="String for...of Examples"
        description="Character-by-character iteration"
        code={`// Basic string iteration
const word = 'JavaScript';

for (const char of word) {
  console.log(char);
}

// Count vowels
const text = 'Hello World';
let vowelCount = 0;

for (const char of text.toLowerCase()) {
  if ('aeiou'.includes(char)) {
    vowelCount++;
  }
}
console.log(\`Vowels: \${vowelCount}\`);  // Vowels: 3

// Reverse a string
const original = 'hello';
let reversed = '';

for (const char of original) {
  reversed = char + reversed;
}
console.log(reversed);  // olleh

// Check palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
  let reversed = '';
  
  for (const char of cleaned) {
    reversed = char + reversed;
  }
  
  return cleaned === reversed;
}

console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('hello'));    // false`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* for...of vs for...in */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Lightbulb className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>for...of vs for...in</CardTitle>
              <CardDescription>Understanding the difference</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Critical Difference!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const arr = ['a', 'b', 'c'];

// for...of → VALUES
for (const value of arr) {
  console.log(value);
}
// Output: a b c

// for...in → INDEXES/KEYS
for (const index in arr) {
  console.log(index);
}
// Output: 0 1 2

// With objects
const obj = { x: 1, y: 2, z: 3 };

// for...in → KEYS (use with objects)
for (const key in obj) {
  console.log(key, obj[key]);
}
// Output: x 1, y 2, z 3

// for...of doesn't work with plain objects
// for (const value of obj) {}  // ERROR!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="When to Use Which"
        description="Choosing the right loop"
        code={`// Use for...of with ARRAYS (values)
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);  // red, green, blue
}

// Use for...in with OBJECTS (keys)
const person = { name: 'Alice', age: 25 };

for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}
// name: Alice
// age: 25

// DON'T use for...in with arrays
const nums = [10, 20, 30];

for (const index in nums) {
  console.log(index);  // 0, 1, 2 (indexes, not values!)
}

// Wrong way:
for (const index in nums) {
  console.log(nums[index]);  // Works but awkward
}

// Right way:
for (const num of nums) {
  console.log(num);  // 10, 20, 30 (clean!)
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Iterables */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Repeat className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Other Iterables</CardTitle>
              <CardDescription>for...of works with Maps, Sets, and more</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Works with Many Types!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Set
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

for (const num of uniqueNumbers) {
  console.log(num);
}
// Output: 1 2 3

// Map
const userRoles = new Map([
  ['alice', 'admin'],
  ['bob', 'user']
]);

for (const [name, role] of userRoles) {
  console.log(\`\${name}: \${role}\`);
}
// Output: alice: admin, bob: user

// Map.entries()
for (const entry of userRoles.entries()) {
  console.log(entry);
}
// Output: ['alice', 'admin'], ['bob', 'user']`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Advanced Iterables Examples"
        description="Maps, Sets, and more"
        code={`// Set iteration
const fruits = new Set(['apple', 'banana', 'cherry']);

for (const fruit of fruits) {
  console.log(fruit);
}

// Map iteration
const scores = new Map([
  ['Alice', 95],
  ['Bob', 87],
  ['Charlie', 92]
]);

// Iterate entries (default)
for (const [name, score] of scores) {
  console.log(\`\${name}: \${score}\`);
}

// Just keys
for (const name of scores.keys()) {
  console.log(name);
}

// Just values
for (const score of scores.values()) {
  console.log(score);
}

// NodeList (DOM elements)
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}

// Arguments object (with spread)
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));  // 15

// Typed Arrays
const bytes = new Uint8Array([10, 20, 30]);

for (const byte of bytes) {
  console.log(byte);
}
// Output: 10 20 30`}
        language="javascript"
        colorTheme="yellow"
        icon={Repeat}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: Data Processing"
        description="Practical uses of for...of"
        code={`// Filter and transform array
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 299, inStock: true }
];

const availableProducts = [];

for (const product of products) {
  if (product.inStock && product.price < 500) {
    availableProducts.push(product.name);
  }
}

console.log(availableProducts);
// ['Mouse', 'Monitor']

// Process form data
const formData = new FormData();
formData.append('username', 'alice');
formData.append('email', 'alice@example.com');

for (const [key, value] of formData.entries()) {
  console.log(\`\${key}: \${value}\`);
}

// Sum nested arrays
const orders = [
  [10, 20, 30],
  [5, 15],
  [100, 200, 50]
];

let total = 0;

for (const order of orders) {
  for (const amount of order) {
    total += amount;
  }
}

console.log(\`Total: $\${total}\`);  // Total: $430

// Build HTML from data
const users = ['Alice', 'Bob', 'Charlie'];
let html = '<ul>';

for (const user of users) {
  html += \`<li>\${user}</li>\`;
}

html += '</ul>';
console.log(html);

// Process API response
async function processUsers() {
  const response = await fetch('/api/users');
  const users = await response.json();
  
  for (const user of users) {
    if (user.isActive) {
      console.log(\`Active user: \${user.name}\`);
    }
  }
}`}
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
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">for...of = VALUES</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Iterates over values of iterables<br/>
                    Use with: arrays, strings, Maps, Sets
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">for...in = KEYS</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Iterates over keys/indexes<br/>
                    Use with: plain objects
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⛔</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">break & continue Work</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Unlike forEach(), you can break out of for...of loops early
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Works with Iterables</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Arrays, strings, Maps, Sets, NodeLists, TypedArrays, and more!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use <strong>for...of</strong> with arrays for cleaner code. Use <strong>for...in</strong> only with plain objects to iterate over keys.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
