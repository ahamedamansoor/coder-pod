'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ClipboardList,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Key,
  Lock,
  Copy,
  Package,
} from 'lucide-react';

export default function JavaScriptObjectMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ClipboardList}
        category="JavaScript Fundamentals"
        title="Object Methods"
        description="Built-in methods to work with objects efficiently"
        colorTheme="yellow"
      />

      {/* What are Object Methods */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Object Methods?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Object methods are <strong className="text-yellow-700 dark:text-yellow-400">built-in functions</strong> that help you work with objects. Instead of writing loops to get keys or values, use these ready-made tools from <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">Object</code>!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Why Use Them?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              These methods save you from writing manual loops. Want all keys? Use <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">Object.keys()</code>. Want to copy? Use <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">Object.assign()</code>. Clean and simple!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Method Categories</CardTitle>
          <CardDescription>Different methods for different tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold text-lg mb-2">Inspect</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">keys, values, entries</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-bold text-lg mb-2">Copy & Merge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">assign, fromEntries</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-bold text-lg mb-2">Protect</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">freeze, seal</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-bold text-lg mb-2">Latest (ES2024)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">groupBy</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Object.keys() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Key className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Object.keys() - Get All Keys</CardTitle>
              <CardDescription>Returns an array of property names</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Extract Property Names</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Gets all <strong>enumerable</strong> property names as an array
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

const keys = Object.keys(user);
console.log(keys);
// ['name', 'age', 'email']`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.keys() Examples"
        description="Working with object keys"
        code={`const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  inStock: true
};

// Get all keys
const keys = Object.keys(product);
console.log(keys);
// ['id', 'name', 'price', 'inStock']

// Count properties
console.log('Properties:', keys.length);  // Properties: 4

// Loop through keys
keys.forEach(key => {
  console.log(\`\${key}: \${product[key]}\`);
});
// id: 101
// name: Laptop
// price: 999
// inStock: true

// Check if key exists
const hasName = keys.includes('name');
console.log(hasName);  // true

// Real-world: Validate required fields
const requiredFields = ['name', 'price'];
const hasAllFields = requiredFields.every(field => 
  keys.includes(field)
);
console.log('Valid:', hasAllFields);  // Valid: true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object.values() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Package className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Object.values() - Get All Values</CardTitle>
              <CardDescription>Returns an array of property values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Extract Property Values</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Gets all values without needing keys
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const scores = {
  math: 95,
  english: 87,
  science: 92
};

const values = Object.values(scores);
console.log(values);  // [95, 87, 92]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.values() Examples"
        description="Working with object values"
        code={`const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 45
};

// Get all values
const quantities = Object.values(inventory);
console.log(quantities);  // [50, 30, 45]

// Calculate total
const total = quantities.reduce((sum, qty) => sum + qty, 0);
console.log('Total items:', total);  // Total items: 125

// Find max value
const max = Math.max(...quantities);
console.log('Max quantity:', max);  // Max quantity: 50

// Real-world: Calculate average score
const scores = { math: 90, english: 85, science: 88 };
const grades = Object.values(scores);
const average = grades.reduce((a, b) => a + b, 0) / grades.length;
console.log('Average:', average);  // Average: 87.67

// Check if all values meet condition
const prices = { item1: 10, item2: 20, item3: 15 };
const allAffordable = Object.values(prices).every(price => price < 50);
console.log('All affordable:', allAffordable);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object.entries() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ClipboardList className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Object.entries() - Get Key-Value Pairs</CardTitle>
              <CardDescription>Returns array of [key, value] arrays</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Extract Pairs</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Perfect for looping when you need both key and value
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = { name: 'Bob', age: 30 };

const entries = Object.entries(user);
console.log(entries);
// [['name', 'Bob'], ['age', 30]]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.entries() Examples"
        description="Working with key-value pairs"
        code={`const settings = {
  theme: 'dark',
  language: 'en',
  notifications: true
};

// Get all entries
const entries = Object.entries(settings);
console.log(entries);
// [['theme', 'dark'], ['language', 'en'], ['notifications', true]]

// Loop with destructuring
entries.forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});
// theme: dark
// language: en
// notifications: true

// Convert to Map
const map = new Map(entries);
console.log(map.get('theme'));  // 'dark'

// Filter entries
const booleanSettings = entries.filter(([key, value]) => 
  typeof value === 'boolean'
);
console.log(booleanSettings);
// [['notifications', true]]

// Real-world: Build query string
const params = { page: 1, limit: 10, sort: 'name' };
const queryString = Object.entries(params)
  .map(([key, value]) => \`\${key}=\${value}\`)
  .join('&');
console.log(queryString);
// page=1&limit=10&sort=name`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object.assign() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Copy className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Object.assign() - Copy & Merge</CardTitle>
              <CardDescription>Copy properties from one or more objects</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Shallow Copy & Merge</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Copies properties from source objects to target
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source);
console.log(target);
// { a: 1, b: 2, c: 3 }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.assign() Examples"
        description="Copying and merging objects"
        code={`// Clone an object
const original = { name: 'Alice', age: 25 };
const clone = Object.assign({}, original);

console.log(clone);  // { name: 'Alice', age: 25 }
clone.age = 30;
console.log(original.age);  // 25 (original unchanged)

// Merge multiple objects
const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark' };
const config = Object.assign({}, defaults, userPrefs);

console.log(config);
// { theme: 'dark', lang: 'en' } (userPrefs overwrites defaults)

// Add properties to existing object
const user = { name: 'Bob' };
Object.assign(user, { age: 30, email: 'bob@example.com' });
console.log(user);
// { name: 'Bob', age: 30, email: 'bob@example.com' }

// Real-world: Merge settings
const systemDefaults = {
  notifications: true,
  autoSave: false,
  theme: 'light'
};

const userSettings = {
  theme: 'dark',
  autoSave: true
};

const finalSettings = Object.assign({}, systemDefaults, userSettings);
console.log(finalSettings);
// { notifications: true, autoSave: true, theme: 'dark' }

// Modern alternative: Spread operator
const merged = { ...defaults, ...userPrefs };
console.log(merged);  // Same result`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object.fromEntries() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Package className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Object.fromEntries() - Build from Pairs</CardTitle>
              <CardDescription>Convert [key, value] pairs to object</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Opposite of Object.entries()</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Creates object from array of [key, value] pairs
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const entries = [['name', 'Alice'], ['age', 25]];

const obj = Object.fromEntries(entries);
console.log(obj);
// { name: 'Alice', age: 25 }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.fromEntries() Examples"
        description="Building objects from entries"
        code={`// From array of pairs
const pairs = [['x', 10], ['y', 20], ['z', 30]];
const coords = Object.fromEntries(pairs);
console.log(coords);  // { x: 10, y: 20, z: 30 }

// From Map
const map = new Map([
  ['name', 'Bob'],
  ['age', 30]
]);
const obj = Object.fromEntries(map);
console.log(obj);  // { name: 'Bob', age: 30 }

// Real-world: Transform object values
const prices = { apple: 1, banana: 2, orange: 3 };

// Double all prices
const doubled = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(doubled);
// { apple: 2, banana: 4, orange: 6 }

// Filter object properties
const user = {
  name: 'Alice',
  age: 25,
  password: 'secret123',
  email: 'alice@example.com'
};

// Remove password
const safe = Object.fromEntries(
  Object.entries(user).filter(([key]) => key !== 'password')
);
console.log(safe);
// { name: 'Alice', age: 25, email: 'alice@example.com' }

// Real-world: Parse URL query string
const queryString = 'page=1&limit=10&sort=name';
const params = Object.fromEntries(
  queryString.split('&').map(pair => pair.split('='))
);
console.log(params);
// { page: '1', limit: '10', sort: 'name' }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object.freeze() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Object.freeze() - Make Immutable</CardTitle>
              <CardDescription>Prevent any changes to an object</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Lock It Down</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                No adding, deleting, or modifying properties (shallow only!)
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const config = { api: 'v1', timeout: 5000 };

Object.freeze(config);

config.api = 'v2';        // Ignored (strict mode: error)
config.newProp = 'test';  // Ignored
delete config.timeout;    // Ignored

console.log(config);
// { api: 'v1', timeout: 5000 } (unchanged)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.freeze() Examples"
        description="Creating immutable objects"
        code={`// Freeze constants
const COLORS = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745'
};

Object.freeze(COLORS);

// Attempts to modify fail silently
COLORS.PRIMARY = '#ff0000';  // Ignored
COLORS.NEW = '#000000';      // Ignored

console.log(COLORS.PRIMARY);  // '#007bff' (unchanged)

// Check if frozen
console.log(Object.isFrozen(COLORS));  // true

// Real-world: API endpoints
const API = Object.freeze({
  BASE_URL: 'https://api.example.com',
  USERS: '/users',
  POSTS: '/posts'
});

// Cannot be changed
API.BASE_URL = 'https://hacker.com';  // Ignored
console.log(API.BASE_URL);
// 'https://api.example.com' (still safe)

// Note: Freeze is shallow!
const user = {
  name: 'Alice',
  address: { city: 'NYC' }
};

Object.freeze(user);

user.name = 'Bob';  // Ignored (frozen)
user.address.city = 'LA';  // WORKS! (nested not frozen)

console.log(user);
// { name: 'Alice', address: { city: 'LA' } }

// Deep freeze (manual)
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach(value => {
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Object.groupBy() - ES2024 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Object.groupBy() - Latest ES2024</CardTitle>
              <CardDescription>Group array items into object by key</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-pink-200 dark:border-pink-800/30 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-pink-600 dark:bg-pink-700 px-4 py-3">
              <h4 className="text-white font-semibold">Modern Grouping</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                New in ES2024 - group array items by a key function
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-pink-200 dark:border-pink-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const byAge = Object.groupBy(people, person => person.age);
console.log(byAge);
// {
//   25: [{ name: 'Alice', ... }, { name: 'Charlie', ... }],
//   30: [{ name: 'Bob', ... }]
// }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.groupBy() Examples"
        description="Grouping arrays by property (ES2024)"
        code={`// Group by property
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' },
  { name: 'Pants', category: 'Clothing' }
];

const byCategory = Object.groupBy(products, p => p.category);
console.log(byCategory);
// {
//   Electronics: [{ name: 'Laptop' }, { name: 'Phone' }],
//   Clothing: [{ name: 'Shirt' }, { name: 'Pants' }]
// }

// Group by condition
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenOdd = Object.groupBy(numbers, n => 
  n % 2 === 0 ? 'even' : 'odd'
);
console.log(evenOdd);
// { odd: [1, 3, 5, 7, 9], even: [2, 4, 6, 8, 10] }

// Real-world: Group users by role
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'David', role: 'user' }
];

const byRole = Object.groupBy(users, u => u.role);
console.log(byRole);
// {
//   admin: [{ name: 'Alice' }, { name: 'Charlie' }],
//   user: [{ name: 'Bob' }, { name: 'David' }]
// }

// Group by first letter
const names = ['Alice', 'Bob', 'Anna', 'Charlie', 'Alex'];

const byFirstLetter = Object.groupBy(names, name => name[0]);
console.log(byFirstLetter);
// {
//   A: ['Alice', 'Anna', 'Alex'],
//   B: ['Bob'],
//   C: ['Charlie']
// }

// Note: Use polyfill or check browser support!
// Not yet available in all environments`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* hasOwn */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Object.hasOwn() - Check Property</CardTitle>
              <CardDescription>Safer way to check if property exists</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-amber-200 dark:border-amber-800/30 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 overflow-hidden">
            <div className="bg-amber-600 dark:bg-amber-700 px-4 py-3">
              <h4 className="text-white font-semibold">Modern Property Check</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Replaces <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">obj.hasOwnProperty()</code> with safer alternative
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-amber-200 dark:border-amber-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = { name: 'Alice', age: 25 };

console.log(Object.hasOwn(user, 'name'));  // true
console.log(Object.hasOwn(user, 'email')); // false`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object.hasOwn() Examples"
        description="Checking property existence safely"
        code={`const user = {
  name: 'Alice',
  age: 25
};

// Check if property exists
console.log(Object.hasOwn(user, 'name'));   // true
console.log(Object.hasOwn(user, 'email'));  // false

// Real-world: Validate object
function validateUser(user) {
  const required = ['name', 'email', 'age'];
  
  for (const field of required) {
    if (!Object.hasOwn(user, field)) {
      return \`Missing field: \${field}\`;
    }
  }
  
  return 'Valid user';
}

console.log(validateUser({ name: 'Bob', age: 30 }));
// Missing field: email

console.log(validateUser({ name: 'Alice', email: 'a@example.com', age: 25 }));
// Valid user

// Why use hasOwn instead of 'in'?
const obj = { prop: undefined };

console.log('prop' in obj);              // true
console.log(Object.hasOwn(obj, 'prop')); // true

// 'in' checks prototype chain, hasOwn checks own properties only
console.log('toString' in obj);              // true (inherited)
console.log(Object.hasOwn(obj, 'toString')); // false (not own property)`}
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Reference & Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>keys()</strong> to get property names</li>
                <li>• Use <strong>values()</strong> to get just values</li>
                <li>• Use <strong>entries()</strong> for key-value pairs</li>
                <li>• Use <strong>freeze()</strong> for constants</li>
                <li>• Use <strong>hasOwn()</strong> to check properties</li>
                <li>• Use spread <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">{'...obj'}</code> for shallow copy</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">for...in</code> without checks</li>
                <li>• Don't forget freeze() is shallow</li>
                <li>• Don't use old <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">hasOwnProperty()</code></li>
                <li>• Don't mutate frozen objects</li>
                <li>• Don't assume groupBy() works everywhere yet</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Method Comparison</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Inspect:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• keys() → array of keys</div>
                  <div>• values() → array of values</div>
                  <div>• entries() → array of pairs</div>
                </div>
              </div>
              <div>
                <strong>Transform:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• assign() → merge/copy</div>
                  <div>• fromEntries() → pairs to object</div>
                  <div>• groupBy() → group by key</div>
                </div>
              </div>
              <div>
                <strong>Protect:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• freeze() → no changes</div>
                  <div>• seal() → no add/remove</div>
                </div>
              </div>
              <div>
                <strong>Check:</strong>
                <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <div>• hasOwn() → property exists</div>
                  <div>• isFrozen() → is frozen</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Browser Support</AlertTitle>
            <AlertDescription className="text-base">
              Most methods are widely supported. <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">Object.groupBy()</code> is very new (ES2024) - check compatibility or use a polyfill for production code!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
