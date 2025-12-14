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
  Pause,
  Play,
} from 'lucide-react';

export default function JavaScriptGeneratorsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Pause}
        category="JavaScript ES6+"
        title="Generators"
        description="Pausable functions with yield - create iterators easily"
        colorTheme="yellow"
      />

      {/* What are Generators? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-yellow-50/20 dark:from-amber-950/10 dark:via-orange-950/5 dark:to-yellow-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Generators: Pausable Functions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A <strong className="text-amber-700 dark:text-amber-400">generator</strong> is a special function that can <strong>pause execution</strong> and <strong>resume later</strong>. Use <code>function*</code> syntax and <code>yield</code> to return multiple values over time!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-amber-200 dark:border-amber-800/30">
            <Play className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-lg">Generators = Easy Iterators</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Generators automatically implement the iterator protocol - they return an iterator when called!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Generator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating Generators</CardTitle>
              <CardDescription>function* and yield keyword</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Regular Function */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Regular Function - Returns Once</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Returns all at once
function getNumbers() {
  return [1, 2, 3, 4, 5];
}

const nums = getNumbers();
console.log(nums); // [1, 2, 3, 4, 5]

// Must create iterator manually
function createIterator() {
  let index = 0;
  const arr = [1, 2, 3, 4, 5];
  
  return {
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      }
      return { done: true };
    }
  };
}`}</pre>
              </div>
            </div>

            {/* Generator */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Generator - Yields Multiple Times</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// function* creates generator
function* getNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const nums = getNumbers();
console.log(nums.next()); // { value: 1, done: false }
console.log(nums.next()); // { value: 2, done: false }
console.log(nums.next()); // { value: 3, done: false }

// Works with for...of!
for (const num of getNumbers()) {
  console.log(num); // 1 2 3 4 5
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Generator Examples"
        description="function* and yield in action"
        code={`// Simple generator
function* countTo3() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countTo3();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().done);  // true

// Generator with loop
function* countdown(n) {
  while (n > 0) {
    yield n;
    n--;
  }
}

for (const num of countdown(5)) {
  console.log(num); // 5 4 3 2 1
}

// Infinite generator
function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const nums = infiniteNumbers();
console.log(nums.next().value); // 0
console.log(nums.next().value); // 1
console.log(nums.next().value); // 2
// Can keep going forever!

// Generator with return
function* withReturn() {
  yield 1;
  yield 2;
  return 'done';
  yield 3; // Never reached
}

const gen = withReturn();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 'done', done: true }
console.log(gen.next()); // { value: undefined, done: true }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* yield* Delegation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>yield* (Delegation)</CardTitle>
              <CardDescription>Delegate to another generator or iterable</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Compose Generators!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield 3;
  yield 4;
}

// Manually combining
function* combined1() {
  for (const value of gen1()) {
    yield value;
  }
  for (const value of gen2()) {
    yield value;
  }
}

// Using yield* (cleaner!)
function* combined2() {
  yield* gen1();
  yield* gen2();
}

console.log([...combined2()]); // [1, 2, 3, 4]

// Works with any iterable
function* letters() {
  yield* 'ABC'; // String is iterable
  yield* [1, 2, 3]; // Array is iterable
}

console.log([...letters()]); // ['A', 'B', 'C', 1, 2, 3]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="yield* Examples"
        description="Delegating to other generators"
        code={`// Tree traversal with yield*
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  
  *[Symbol.iterator]() {
    yield this.value;
    if (this.left) yield* this.left;
    if (this.right) yield* this.right;
  }
}

const tree = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3)
);

console.log([...tree]); // [1, 2, 3]

// Flatten nested arrays
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item); // Recursive delegation
    } else {
      yield item;
    }
  }
}

const nested = [1, [2, [3, 4]], 5];
console.log([...flatten(nested)]); // [1, 2, 3, 4, 5]

// Combining multiple sequences
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

function* take(n, iterable) {
  let count = 0;
  for (const value of iterable) {
    if (count++ >= n) return;
    yield value;
  }
}

function* sequence() {
  yield* [1, 2, 3];
  yield* take(5, fibonacci());
}

console.log([...sequence()]); // [1, 2, 3, 1, 1, 2, 3, 5]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Two-Way Communication */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Two-Way Communication</CardTitle>
              <CardDescription>Pass values back into generator with next()</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Send Values Into Generator!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function* conversation() {
  const name = yield 'What is your name?';
  const age = yield \`Hello \${name}! How old are you?\`;
  return \`\${name} is \${age} years old\`;
}

const chat = conversation();

console.log(chat.next().value);
// 'What is your name?'

console.log(chat.next('Alice').value);
// 'Hello Alice! How old are you?'

console.log(chat.next(25).value);
// 'Alice is 25 years old'

// Practical example: alternating values
function* alternator() {
  let toggle = true;
  while (true) {
    toggle = yield toggle;
  }
}

const alt = alternator();
console.log(alt.next().value);     // true
console.log(alt.next(false).value); // false
console.log(alt.next(true).value);  // true`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Generator Error Handling"
        description="throw() and return() methods"
        code={`// throw() method - inject error
function* withErrorHandling() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    console.log('Caught:', error);
    yield 'error handled';
  }
}

const gen = withErrorHandling();
console.log(gen.next().value);  // 1
console.log(gen.next().value);  // 2
console.log(gen.throw('Oops!').value); // Caught: Oops!, 'error handled'

// return() method - early exit
function* earlyExit() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const exit = earlyExit();
console.log(exit.next().value);   // 1
console.log(exit.next().value);   // 2
console.log(exit.return('done')); // { value: 'done', done: true }
console.log(exit.next().value);   // undefined (generator finished)

// Cleanup with finally
function* withCleanup() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log('Cleanup!');
  }
}

const cleanup = withCleanup();
cleanup.next(); // 1
cleanup.return(); // Cleanup!`}
        language="javascript"
        colorTheme="yellow"
        icon={Pause}
      />

      {/* Real-World Examples */}
      <CodeSnippet
        title="Real-World Example: Pagination"
        description="Lazy loading pages of data"
        code={`// Paginated data fetching
function* fetchPages(endpoint, pageSize = 10) {
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = yield fetch(
      \`\${endpoint}?page=\${page}&size=\${pageSize}\`
    ).then(r => r.json());
    
    hasMore = response.hasMore;
    page++;
    
    yield* response.items; // Yield each item
  }
}

// Usage with async
async function loadAllUsers() {
  const generator = fetchPages('/api/users');
  
  for await (const user of generator) {
    console.log(user);
    // Process one user at a time
  }
}

// ID generator
function* idGenerator(prefix = 'id') {
  let counter = 0;
  while (true) {
    yield \`\${prefix}_\${counter++}\`;
  }
}

const ids = idGenerator('user');
console.log(ids.next().value); // user_0
console.log(ids.next().value); // user_1
console.log(ids.next().value); // user_2

// State machine
function* trafficLight() {
  while (true) {
    yield 'green';
    yield 'yellow';
    yield 'red';
  }
}

const light = trafficLight();
console.log(light.next().value); // green
console.log(light.next().value); // yellow
console.log(light.next().value); // red
console.log(light.next().value); // green (cycles)

// Lazy evaluation pipeline
function* numbers() {
  let i = 0;
  while (true) yield i++;
}

function* map(iterable, fn) {
  for (const value of iterable) {
    yield fn(value);
  }
}

function* filter(iterable, predicate) {
  for (const value of iterable) {
    if (predicate(value)) yield value;
  }
}

function* take(n, iterable) {
  let count = 0;
  for (const value of iterable) {
    if (count++ >= n) return;
    yield value;
  }
}

// Compose pipeline
const result = [
  ...take(5, 
    filter(
      map(numbers(), x => x * 2),
      x => x % 3 === 0
    )
  )
];

console.log(result); // [0, 6, 12, 18, 24]`}
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
                <span className="text-2xl">⏸️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pausable Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code>function*</code> and <code>yield</code><br/>
                    Execution pauses at each yield
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Auto Iterator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generators return iterators<br/>
                    Works with for...of, spread, destructuring
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">↔️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two-Way</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code>next(value)</code> sends values in<br/>
                    <code>throw()</code> and <code>return()</code> control flow
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">yield* Delegation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Delegate to other generators/iterables<br/>
                    Perfect for composition
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use generators for lazy evaluation, infinite sequences, and when you need to pause/resume execution. Much easier than writing iterators manually!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
