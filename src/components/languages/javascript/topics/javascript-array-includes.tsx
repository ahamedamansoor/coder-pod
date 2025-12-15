'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Search } from 'lucide-react';

export default function JavaScriptArrayIncludes() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Search}
        category="Advanced Array Methods"
        title="Array includes()"
        description="Check if array contains a value - simple and powerful!"
        colorTheme="teal"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50/80 via-cyan-50/50 to-blue-50/30 dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white shadow-xl">
              <Search className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                What is Array includes()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <code className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 rounded">includes()</code> as 
                <strong className="text-teal-700 dark:text-teal-400"> asking "Is this in the list?"</strong> 
                It returns <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded">true</code> if the array contains the value, 
                <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">false</code> if not. 
                Super simple! And unlike <code className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 rounded">indexOf()</code>, 
                it can <strong className="text-cyan-700 dark:text-cyan-400">properly detect NaN</strong>!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use includes()?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Much cleaner than <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">indexOf() !== -1</code>! 
              Returns a boolean, reads like English, and handles <strong>NaN correctly</strong> unlike indexOf.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            includes() vs indexOf() vs find()
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30">
                  <th className="p-3 text-left border border-teal-200 dark:border-teal-800 text-gray-900 dark:text-gray-100">Method</th>
                  <th className="p-3 text-left border border-teal-200 dark:border-teal-800 text-gray-900 dark:text-gray-100">Returns</th>
                  <th className="p-3 text-left border border-teal-200 dark:border-teal-800 text-gray-900 dark:text-gray-100">Use When</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-teal-600 dark:text-teal-400">includes()</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>true/false</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Just checking if value exists
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-cyan-600 dark:text-cyan-400">indexOf()</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>index or -1</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Need the position/index
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-blue-600 dark:text-blue-400">find()</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    <code>element or undefined</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    Need the actual element (objects)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">includes() Advantages</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Returns boolean (cleaner)</li>
                <li>✅ Finds NaN correctly</li>
                <li>✅ Reads like English</li>
                <li>✅ No need to check -1</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📍</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">indexOf() Advantages</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✅ Returns position/index</li>
                <li>✅ Can use for multiple operations</li>
                <li>✅ Older browser support</li>
                <li>✅ Can start from specific index</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Syntax</h4>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                arr.includes(searchElement, fromIndex?)
              </code>
              <div className="mt-3 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                <div>• <strong className="text-purple-700 dark:text-purple-300">searchElement</strong>: Value to search for</div>
                <div>• <strong className="text-purple-700 dark:text-purple-300">fromIndex</strong>: Optional starting index (default: 0)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Basic Usage & Comparison"
        description="See includes() in action vs other methods"
        language="javascript"
        colorTheme="teal"
        code={`const fruits = ['apple', 'banana', 'orange', 'mango'];

// 1. Check if value exists
console.log(fruits.includes('banana'));  // true
console.log(fruits.includes('grape'));   // false

// Much cleaner than indexOf!
console.log(fruits.indexOf('banana') !== -1);  // true (old way)
console.log(fruits.includes('banana'));        // true (clean!)


// 2. Case-sensitive
console.log(fruits.includes('Apple'));   // false (different case)
console.log(fruits.includes('apple'));   // true


// 3. Works with different types
const mixed = [1, 'two', true, null, undefined];

console.log(mixed.includes(1));         // true
console.log(mixed.includes('two'));     // true
console.log(mixed.includes(true));      // true
console.log(mixed.includes(null));      // true
console.log(mixed.includes(undefined)); // true


// 4. The NaN advantage!
const numbers = [1, 2, NaN, 4];

console.log(numbers.indexOf(NaN));      // -1 (can't find NaN!)
console.log(numbers.includes(NaN));     // true (finds NaN!)


// 5. Starting from index
const arr = ['a', 'b', 'c', 'b', 'd'];

console.log(arr.includes('b'));      // true
console.log(arr.includes('b', 2));   // true (starts from index 2)
console.log(arr.includes('a', 1));   // false (starts from index 1, misses 'a')


// 6. Negative index (from end)
console.log(arr.includes('d', -1));  // true (last element)
console.log(arr.includes('c', -2));  // false (starts 2 from end)`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for includes()"
        language="javascript"
        colorTheme="cyan"
        code={`// 1. Validation - Check allowed values
function setTheme(theme) {
  const validThemes = ['light', 'dark', 'auto'];
  
  if (!validThemes.includes(theme)) {
    console.error('Invalid theme!');
    return;
  }
  
  console.log(\`Theme set to: \${theme}\`);
}

setTheme('dark');    // "Theme set to: dark"
setTheme('blue');    // "Invalid theme!"


// 2. Feature flags
const enabledFeatures = ['darkMode', 'notifications', 'analytics'];

function isFeatureEnabled(feature) {
  return enabledFeatures.includes(feature);
}

if (isFeatureEnabled('darkMode')) {
  console.log('Dark mode is enabled');
}


// 3. Filter based on whitelist
const allowedUsers = ['admin', 'user1', 'user2'];
const currentUser = 'user1';

if (allowedUsers.includes(currentUser)) {
  console.log('Access granted');
} else {
  console.log('Access denied');
}


// 4. Form validation
function validateEmail(email) {
  const bannedDomains = ['spam.com', 'fake.net', 'test.org'];
  const domain = email.split('@')[1];
  
  if (bannedDomains.includes(domain)) {
    return 'Email domain is not allowed';
  }
  
  return 'Email is valid';
}

console.log(validateEmail('user@gmail.com'));   // "Email is valid"
console.log(validateEmail('user@spam.com'));    // "Email domain is not allowed"


// 5. Check permissions
const userRoles = ['read', 'write', 'delete'];

function canDelete() {
  return userRoles.includes('delete');
}

function canWrite() {
  return userRoles.includes('write');
}

console.log(canDelete());  // true
console.log(canWrite());   // true


// 6. Filter array based on another array
const availableColors = ['red', 'blue', 'green'];
const selectedColors = ['red', 'yellow', 'blue'];

const validSelections = selectedColors.filter(color => 
  availableColors.includes(color)
);

console.log(validSelections);
// ['red', 'blue']  (filtered out 'yellow')`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Common Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">✅</span>
              <h4 className="font-bold text-teal-900 dark:text-teal-100">Validation</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-teal-200 dark:border-teal-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                if (!validOptions.includes(input)) return;
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔒</span>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100">Access Control</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-cyan-200 dark:border-cyan-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                if (allowedUsers.includes(user)) {`{ /* grant access */ }`}
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎯</span>
              <h4 className="font-bold text-blue-900 dark:text-blue-100">Filter by Whitelist</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-blue-200 dark:border-blue-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                arr.filter(item {'=>'} whitelist.includes(item))
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔍</span>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100">Conditional Logic</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-indigo-200 dark:border-indigo-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                if (['admin', 'moderator'].includes(role)) {`{ /* ... */ }`}
              </code>
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
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Boolean Return</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns true/false - perfect for conditionals
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">NaN Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can find NaN unlike <code className="text-xs">indexOf()</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Readable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reads like English - very intuitive
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validation, filtering, access control, permissions
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
