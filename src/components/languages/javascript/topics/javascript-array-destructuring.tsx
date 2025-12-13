'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  SplitSquareHorizontal,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Shuffle,
  Package,
  ArrowRightLeft,
} from 'lucide-react';

export default function JavaScriptArrayDestructuring() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={SplitSquareHorizontal}
        category="JavaScript Fundamentals"
        title="Array Destructuring"
        description="Unpack array values into variables - a cleaner way to extract data"
        colorTheme="yellow"
      />

      {/* What is Array Destructuring */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Array Destructuring?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Array destructuring is a <strong className="text-yellow-700 dark:text-yellow-400">shortcut</strong> to extract values from arrays and assign them to variables. Instead of <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">arr[0]</code>, <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">arr[1]</code>, you can unpack them all at once!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Like unpacking a suitcase - instead of taking items out one by one (<code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">arr[0]</code>, <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">arr[1]</code>), you lay them all out at once with labels!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Destructuring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Array Destructuring</CardTitle>
              <CardDescription>Extract values by position</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Old Way vs New Way</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-red-200 dark:border-red-800/30">
                  <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Old Way (Tedious)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const colors = ['red', 'green', 'blue'];

const first = colors[0];
const second = colors[1];
const third = colors[2];`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ New Way (Clean)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const colors = ['red', 'green', 'blue'];

const [first, second, third] = colors;
// first = 'red'
// second = 'green'
// third = 'blue'`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Destructuring Examples"
        description="Extracting values from arrays"
        code={`// Simple destructuring
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;

console.log(first);   // 'apple'
console.log(second);  // 'banana'
console.log(third);   // 'cherry'

// You don't need to extract all values
const numbers = [1, 2, 3, 4, 5];
const [a, b] = numbers;  // Just get first two

console.log(a);  // 1
console.log(b);  // 2

// Real-world: Coordinates
const point = [10, 20];
const [x, y] = point;

console.log(\`X: \${x}, Y: \${y}\`);  // X: 10, Y: 20

// Real-world: RGB colors
const color = [255, 128, 0];
const [red, green, blue] = color;

console.log(\`RGB(\${red}, \${green}, \${blue})\`);
// RGB(255, 128, 0)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Skipping Elements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ArrowRightLeft className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Skipping Elements</CardTitle>
              <CardDescription>Use commas to skip unwanted values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Skip with Empty Commas</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Leave empty slots with commas to skip elements you don't need
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const colors = ['red', 'green', 'blue', 'yellow'];

// Skip green and blue, only get red and yellow
const [first, , , fourth] = colors;

console.log(first);   // 'red'
console.log(fourth);  // 'yellow'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Skipping Elements Examples"
        description="Get only what you need"
        code={`const data = ['Alice', 25, 'Engineer', 'New York', 'USA'];

// Only want name and city
const [name, , , city] = data;
console.log(name);   // 'Alice'
console.log(city);   // 'New York'

// Real-world: Date components
const date = [2024, 12, 25, 10, 30, 0];  // [year, month, day, hour, min, sec]

// Only want year, month, day
const [year, month, day] = date;
console.log(\`\${year}-\${month}-\${day}\`);  // 2024-12-25

// Skip to get only time
const [, , , hour, minute, second] = date;
console.log(\`\${hour}:\${minute}:\${second}\`);  // 10:30:0`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Default Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Default Values</CardTitle>
              <CardDescription>Provide fallback values if array is too short</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Safe Defaults</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">=</code> to set default values in case elements are missing
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const colors = ['red'];

// Without defaults
const [first, second] = colors;
console.log(second);  // undefined

// With defaults
const [a, b = 'green'] = colors;
console.log(b);  // 'green'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Default Values Examples"
        description="Handling missing array elements"
        code={`// Array might be incomplete
const user = ['Alice', 25];

// Set default values
const [name, age, role = 'User'] = user;

console.log(name);  // 'Alice'
console.log(age);   // 25
console.log(role);  // 'User' (default)

// With complete data, defaults are ignored
const admin = ['Bob', 30, 'Admin'];
const [n, a, r = 'User'] = admin;

console.log(r);  // 'Admin' (from array, not default)

// Real-world: API response
const apiResponse = ['Success'];
const [status, message = 'No message', code = 200] = apiResponse;

console.log(status);   // 'Success'
console.log(message);  // 'No message' (default)
console.log(code);     // 200 (default)

// Function that returns array
function getConfig() {
  return ['dark'];  // Only returns theme
}

const [theme = 'light', language = 'en'] = getConfig();
console.log(theme);     // 'dark'
console.log(language);  // 'en' (default)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Rest Operator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Package className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Rest Operator (...)</CardTitle>
              <CardDescription>Collect remaining elements into a new array</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Collect the Rest</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">...</code> to gather remaining elements (must be last!)
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Rest Operator Examples"
        description="Gathering remaining elements"
        code={`const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Get first color and rest
const [primary, ...others] = colors;
console.log(primary);  // 'red'
console.log(others);   // ['green', 'blue', 'yellow', 'purple']

// Get first two and rest
const [first, second, ...remaining] = colors;
console.log(first);      // 'red'
console.log(second);     // 'green'
console.log(remaining);  // ['blue', 'yellow', 'purple']

// Real-world: Head and tail
const numbers = [10, 20, 30, 40, 50];
const [head, ...tail] = numbers;

console.log('Head:', head);  // Head: 10
console.log('Tail:', tail);  // Tail: [20, 30, 40, 50]

// Real-world: Extract first item from list
const tasks = ['Buy milk', 'Clean room', 'Study JavaScript'];
const [nextTask, ...remainingTasks] = tasks;

console.log('Do next:', nextTask);
// Do next: Buy milk

console.log('Later:', remainingTasks);
// Later: ['Clean room', 'Study JavaScript']

// If array is empty, rest is empty array
const empty = [];
const [a, ...b] = empty;
console.log(a);  // undefined
console.log(b);  // []`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Swapping Variables */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Shuffle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Swapping Variables</CardTitle>
              <CardDescription>Swap values without a temporary variable</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Elegant Swap</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-red-200 dark:border-red-800/30">
                  <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Old Way</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`let a = 1;
let b = 2;

// Need temp variable
let temp = a;
a = b;
b = temp;`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ New Way</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`let a = 1;
let b = 2;

// One line swap!
[a, b] = [b, a];`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Swapping Variables Examples"
        description="Quick variable swaps"
        code={`// Simple swap
let x = 10;
let y = 20;

console.log(\`Before: x=\${x}, y=\${y}\`);  // Before: x=10, y=20

[x, y] = [y, x];

console.log(\`After: x=\${x}, y=\${y}\`);   // After: x=20, y=10

// Swap multiple values
let a = 1, b = 2, c = 3;

[a, b, c] = [c, b, a];
console.log(a, b, c);  // 3 2 1

// Real-world: Sort two numbers
let num1 = 50;
let num2 = 30;

if (num1 > num2) {
  [num1, num2] = [num2, num1];  // Ensure num1 is smaller
}

console.log(\`Min: \${num1}, Max: \${num2}\`);
// Min: 30, Max: 50

// Real-world: Rotate values
let first = 'A';
let second = 'B';
let third = 'C';

// Rotate right: C -> A, A -> B, B -> C
[first, second, third] = [third, first, second];
console.log(first, second, third);  // C A B`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Nested Arrays */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Package className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Nested Array Destructuring</CardTitle>
              <CardDescription>Unpack arrays within arrays</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-pink-200 dark:border-pink-800/30 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-pink-600 dark:bg-pink-700 px-4 py-3">
              <h4 className="text-white font-semibold">Deep Unpacking</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use nested brackets to destructure nested arrays
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-pink-200 dark:border-pink-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const matrix = [[1, 2], [3, 4]];

const [[a, b], [c, d]] = matrix;

console.log(a, b, c, d);  // 1 2 3 4`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Nested Destructuring Examples"
        description="Working with multi-dimensional arrays"
        code={`// Nested arrays
const data = [
  ['Alice', 25],
  ['Bob', 30]
];

const [[name1, age1], [name2, age2]] = data;
console.log(name1, age1);  // Alice 25
console.log(name2, age2);  // Bob 30

// Real-world: Coordinates
const points = [[10, 20], [30, 40], [50, 60]];

const [[x1, y1], [x2, y2], [x3, y3]] = points;
console.log(\`Point 1: (\${x1}, \${y1})\`);  // Point 1: (10, 20)
console.log(\`Point 2: (\${x2}, \${y2})\`);  // Point 2: (30, 40)

// Mixed with rest
const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [[first, ...restFirst], second] = nested;
console.log(first);       // 1
console.log(restFirst);   // [2, 3]
console.log(second);      // [4, 5, 6]

// Real-world: RGB color palette
const palette = [
  [255, 0, 0],    // Red
  [0, 255, 0],    // Green
  [0, 0, 255]     // Blue
];

const [[r1, g1, b1], [r2, g2, b2], [r3, g3, b3]] = palette;
console.log(\`Red: rgb(\${r1}, \${g1}, \${b1})\`);`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Function Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <ArrowRightLeft className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Destructuring in Functions</CardTitle>
              <CardDescription>Unpack parameters and return values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Functions + Destructuring</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Destructure directly in function parameters or return values
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Function parameter destructuring
function printCoords([x, y]) {
  console.log(\`X: \${x}, Y: \${y}\`);
}

printCoords([10, 20]);  // X: 10, Y: 20

// Return value destructuring
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([5, 2, 8, 1, 9]);
console.log(min, max);  // 1 9`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Functions with Destructuring"
        description="Clean function signatures and returns"
        code={`// Parameter destructuring
function sumFirstTwo([a, b]) {
  return a + b;
}

console.log(sumFirstTwo([10, 20, 30]));  // 30

// With defaults
function greet([firstName, lastName = 'Doe']) {
  console.log(\`Hello, \${firstName} \${lastName}!\`);
}

greet(['John']);         // Hello, John Doe!
greet(['Jane', 'Smith']); // Hello, Jane Smith!

// Multiple return values
function getDimensions() {
  return [1920, 1080];
}

const [width, height] = getDimensions();
console.log(\`\${width}x\${height}\`);  // 1920x1080

// Real-world: React useState pattern
function useState(initial) {
  let value = initial;
  
  function setValue(newValue) {
    value = newValue;
  }
  
  return [value, setValue];
}

const [count, setCount] = useState(0);
console.log(count);  // 0

// Real-world: Split string and destructure
function parseDate(dateString) {
  return dateString.split('-');
}

const [year, month, day] = parseDate('2024-12-25');
console.log(\`Year: \${year}, Month: \${month}, Day: \${day}\`);
// Year: 2024, Month: 12, Day: 25`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use descriptive variable names</li>
                <li>• Set defaults for optional values</li>
                <li>• Use rest operator for remaining items</li>
                <li>• Swap variables with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">[a, b] = [b, a]</code></li>
                <li>• Skip elements with commas</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use cryptic names like <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">x, y, z</code></li>
                <li>• Don't over-nest (hard to read)</li>
                <li>• Don't forget rest must be last</li>
                <li>• Don't destructure null/undefined (errors!)</li>
                <li>• Don't use when array structure is unclear</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Common Patterns</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
              <div><strong>Basic:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const [a, b, c] = array</code></div>
              <div><strong>Skip:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const [a, , c] = array</code></div>
              <div><strong>Defaults:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const [a = 1, b = 2] = array</code></div>
              <div><strong>Rest:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const [first, ...rest] = array</code></div>
              <div><strong>Swap:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">[a, b] = [b, a]</code></div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>React Developers</AlertTitle>
            <AlertDescription className="text-base">
              Array destructuring is heavily used in React hooks: <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">const [state, setState] = useState(0)</code> - this is array destructuring in action!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
