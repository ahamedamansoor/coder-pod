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
  ArrowRightCircle,
} from 'lucide-react';

export default function JavaScriptIteratorsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Repeat}
        category="JavaScript ES6+"
        title="Iterators"
        description="Create custom iteration behavior for objects"
        colorTheme="yellow"
      />

      {/* What are Iterators? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-rose-50/50 via-pink-50/30 to-fuchsia-50/20 dark:from-rose-950/10 dark:via-pink-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Iterators: Custom Iteration Logic
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                An <strong className="text-rose-700 dark:text-rose-400">iterator</strong> is an object that implements the <strong>iterator protocol</strong> with a <code>next()</code> method. It returns <code>{'{ value, done }'}</code> to control iteration!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-rose-200 dark:border-rose-800/30">
            <ArrowRightCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            <AlertTitle className="text-lg">Iterator Protocol</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              An object is an iterator if it has a <code>next()</code> method that returns:<br/>
              <code>{'{ value: any, done: boolean }'}</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Iterator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating an Iterator</CardTitle>
              <CardDescription>Implement the next() method</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Manual */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">🔧 Manual Iterator</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Create iterator manually
function createIterator(arr) {
  let index = 0;
  
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false
        };
      }
      return { done: true };
    }
  };
}

const iter = createIterator([1, 2, 3]);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { done: true }`}</pre>
              </div>
            </div>

            {/* Using */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">🔄 Using Iterator</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Use with while loop
const iterator = createIterator([10, 20, 30]);

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
// Output: 10 20 30

// Or consume all at once
function toArray(iterator) {
  const arr = [];
  let result = iterator.next();
  while (!result.done) {
    arr.push(result.value);
    result = iterator.next();
  }
  return arr;
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Iterator Examples"
        description="Different iterator implementations"
        code={`// Range iterator
function range(start, end) {
  let current = start;
  
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { done: true };
    }
  };
}

const nums = range(1, 5);
console.log(nums.next().value);  // 1
console.log(nums.next().value);  // 2
console.log(nums.next().value);  // 3

// Fibonacci iterator
function fibonacci() {
  let prev = 0, curr = 1;
  
  return {
    next() {
      const value = curr;
      [prev, curr] = [curr, prev + curr];
      return { value, done: false };
    }
  };
}

const fib = fibonacci();
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2
console.log(fib.next().value);  // 3
console.log(fib.next().value);  // 5

// Infinite iterator with take()
function take(iterator, n) {
  let count = 0;
  return {
    next() {
      if (count < n) {
        count++;
        return iterator.next();
      }
      return { done: true };
    }
  };
}

const first5Fib = take(fibonacci(), 5);
let result;
while (!(result = first5Fib.next()).done) {
  console.log(result.value);  // 1 1 2 3 5
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Iterable Protocol */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Iterable Protocol (Symbol.iterator)</CardTitle>
              <CardDescription>Make objects work with for...of</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Symbol.iterator Magic!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Make object iterable
const range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

// Now works with for...of!
for (const num of range) {
  console.log(num);  // 1 2 3 4 5
}

// And spread operator
console.log([...range]);  // [1, 2, 3, 4, 5]

// And destructuring
const [first, second, ...rest] = range;
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Custom Iterable Objects"
        description="Make any object iterable with Symbol.iterator"
        code={`// Linked list iterable
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  add(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  
  [Symbol.iterator]() {
    let current = this.head;
    
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}

const list = new LinkedList();
list.add('A');
list.add('B');
list.add('C');

for (const item of list) {
  console.log(item);  // A B C
}

// Tree traversal iterator
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  [Symbol.iterator]() {
    const stack = [this];
    
    return {
      next() {
        if (stack.length === 0) {
          return { done: true };
        }
        
        const node = stack.pop();
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
        
        return { value: node.value, done: false };
      }
    };
  }
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

console.log([...tree]);  // [1, 2, 3]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Iterator Helpers */}
      <CodeSnippet
        title="Iterator Utility Functions"
        description="Building reusable iterator utilities"
        code={`// Range function (needed for examples)
function range(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { done: true };
    }
  };
}

// Map iterator
function map(iterator, fn) {
  return {
    next() {
      const result = iterator.next();
      if (result.done) return result;
      return {
        value: fn(result.value),
        done: false
      };
    }
  };
}

// Filter iterator
function filter(iterator, predicate) {
  return {
    next() {
      while (true) {
        const result = iterator.next();
        if (result.done) return result;
        if (predicate(result.value)) {
          return result;
        }
      }
    }
  };
}

// Take iterator
function take(iterator, n) {
  let count = 0;
  return {
    next() {
      if (count++ < n) {
        return iterator.next();
      }
      return { done: true };
    }
  };
}

// Usage example
const nums = range(1, 10);
const doubled = map(nums, x => x * 2);
const evens = filter(doubled, x => x % 4 === 0);
const first3 = take(evens, 3);

console.log('Chained iteration results:');
while (true) {
  const result = first3.next();
  if (result.done) break;
  console.log(result.value);  // 4 8 12
}

// Collecting results
const nums2 = range(1, 15);
const doubled2 = map(nums2, x => x * 2);
const multiples = filter(doubled2, x => x % 3 === 0);
const first5 = take(multiples, 5);

const collected = [];
while (true) {
  const result = first5.next();
  if (result.done) break;
  collected.push(result.value);
}
console.log('Collected:', collected);  // [6, 12, 18, 24, 30]`}
        language="javascript"
        colorTheme="yellow"
        icon={Repeat}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: Pagination Iterator"
        description="Iterate through paginated data"
        code={`// Simulating paginated data (in real apps, this would be from API)
const mockDatabase = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Diana', age: 28 },
  { id: 5, name: 'Eve', age: 32 },
  { id: 6, name: 'Frank', age: 27 },
  { id: 7, name: 'Grace', age: 29 },
  { id: 8, name: 'Henry', age: 31 }
];

// Pagination iterator
class PaginatedCollection {
  constructor(data, pageSize = 3) {
    this.data = data;
    this.pageSize = pageSize;
  }
  
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    const pageSize = this.pageSize;
    let currentPage = 1;
    
    return {
      next() {
        if (index < data.length) {
          const value = data[index];
          const page = Math.floor(index / pageSize) + 1;
          
          // Log page transitions
          if (page !== currentPage) {
            console.log(\`--- Loading page \${page} ---\`);
            currentPage = page;
          }
          
          index++;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}

const paginated = new PaginatedCollection(mockDatabase, 3);

console.log('Iterating through paginated data:');
for (const user of paginated) {
  console.log(\`User: \${user.name}, Age: \${user.age}\`);
}

// Custom filtered collection
class FilteredCollection {
  constructor(data, predicate) {
    this.data = data;
    this.predicate = predicate;
  }
  
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    const predicate = this.predicate;
    
    return {
      next() {
        while (index < data.length) {
          const value = data[index++];
          if (predicate(value)) {
            return { value, done: false };
          }
        }
        return { done: true };
      }
    };
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = new FilteredCollection(numbers, n => n % 2 === 0);

console.log('Even numbers:', [...evens]);  // [2, 4, 6, 8, 10]

const adults = new FilteredCollection(mockDatabase, user => user.age >= 30);
console.log('Adults:', [...adults].map(u => u.name));`}
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
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Iterator Protocol</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Object with <code>next()</code> method<br/>
                    Returns <code>{'{ value, done }'}</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Iterable Protocol</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Object with <code>[Symbol.iterator]()</code><br/>
                    Works with for...of, spread, destructuring
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">♾️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Lazy Evaluation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Values computed on demand<br/>
                    Perfect for infinite sequences
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Composable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Build utilities: map, filter, take<br/>
                    Chain operations efficiently
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Iterators are great for custom data structures and lazy sequences. For simpler cases, use <strong>generators</strong> (function*) - they create iterators automatically!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
