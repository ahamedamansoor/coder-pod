'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Equal } from 'lucide-react';

export default function JavaScriptLogicalAssignment() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Equal}
        category="Modern JavaScript (ES2021)"
        title="Logical Assignment Operators"
        description="Assign only when needed - &&=, ||=, ??= shortcuts!"
        colorTheme="pink"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50/80 via-rose-50/50 to-red-50/30 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-red-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white shadow-xl">
              <Equal className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-700 via-rose-600 to-red-600 bg-clip-text text-transparent">
                What are Logical Assignment Operators?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                These are <strong className="text-pink-700 dark:text-pink-400">conditional assignment shortcuts</strong>! 
                <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 rounded mx-1">&&=</code>, 
                <code className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 rounded mx-1">||=</code>, and 
                <code className="px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded mx-1">??=</code> 
                combine logical operators with assignment. They only assign if the condition is met - making your code cleaner and more efficient!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Shorter & Clearer</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Instead of <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">x = x || 10</code>, 
              write <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-xs">x ||= 10</code>. Same logic, less code!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Three Operators
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800">
              <div className="text-4xl mb-3">||=</div>
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-2">Logical OR</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Assign if left is falsy
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                <code>x ||= y</code> → <code>x || (x = y)</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/10 border-2 border-rose-200 dark:border-rose-800">
              <div className="text-4xl mb-3">&&=</div>
              <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-2">Logical AND</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Assign if left is truthy
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                <code>x &&= y</code> → <code>x && (x = y)</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/10 border-2 border-red-200 dark:border-red-800">
              <div className="text-4xl mb-3">??=</div>
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Nullish</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Assign if left is null/undefined
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                <code>x ??= y</code> → <code>x ?? (x = y)</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Understanding Each Operator"
        description="See how each logical assignment operator works"
        language="javascript"
        colorTheme="pink"
        code={`// ||= (Logical OR Assignment)
// Assigns if left side is falsy
let count = 0;
count ||= 10;  // 0 is falsy, assigns 10
console.log(count);  // 10

let name = 'Alice';
name ||= 'Unknown';  // 'Alice' is truthy, no change
console.log(name);  // "Alice"


// &&= (Logical AND Assignment)
// Assigns if left side is truthy
let user = { name: 'Bob' };
user &&= { ...user, age: 25 };  // user is truthy, assigns new object
console.log(user);  // { name: 'Bob', age: 25 }

let empty = null;
empty &&= { value: 10 };  // null is falsy, no assignment
console.log(empty);  // null


// ??= (Nullish Coalescing Assignment)
// Assigns ONLY if left is null or undefined
let score = 0;
score ??= 100;  // 0 is NOT null/undefined, no change
console.log(score);  // 0 (keeps 0!)

let result = null;
result ??= 'default';  // null, assigns default
console.log(result);  // "default"

let message = undefined;
message ??= 'No message';  // undefined, assigns
console.log(message);  // "No message"`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for logical assignment"
        language="javascript"
        colorTheme="rose"
        code={`// 1. Default config values (||=)
function initConfig(config = {}) {
  config.theme ||= 'light';
  config.language ||= 'en';
  config.timeout ||= 5000;
  
  return config;
}

console.log(initConfig({}));
// { theme: 'light', language: 'en', timeout: 5000 }

console.log(initConfig({ theme: 'dark' }));
// { theme: 'dark', language: 'en', timeout: 5000 }


// 2. Update if exists (&&=)
const users = {
  'user1': { name: 'Alice', premium: true },
  'user2': { name: 'Bob', premium: false }
};

// Upgrade premium users only
for (let userId in users) {
  users[userId].premium &&= { 
    ...users[userId], 
    benefits: ['ad-free', 'support'] 
  };
}


// 3. Initialize if missing (??=)
const cache = {};

function getData(key) {
  // Initialize cache entry if doesn't exist
  cache[key] ??= fetchExpensiveData(key);
  return cache[key];
}

function fetchExpensiveData(key) {
  console.log(\`Fetching \${key}...\`);
  return { data: 'expensive' };
}

getData('user1');  // Fetches and caches
getData('user1');  // Uses cache (no fetch)


// 4. Form field defaults
const formData = {
  username: '',
  email: null,
  age: 0
};

// Use ||= for empty strings
formData.username ||= 'guest';
console.log(formData.username);  // "guest"

// Use ??= for nullish values (keeps 0!)
formData.age ??= 18;
console.log(formData.age);  // 0 (not replaced!)`}
      />

      <Card className="border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-red-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">||=</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">OR Assignment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Assign if falsy (0, '', false, null, undefined)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">&&=</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">AND Assignment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Assign only if truthy
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">??=</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Nullish Assignment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Assign only if null/undefined (keeps 0, false, '')
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2021</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Cleaner conditional assignments
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
