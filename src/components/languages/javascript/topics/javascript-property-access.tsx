'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Key,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Code2,
} from 'lucide-react';

export default function JavaScriptPropertyAccess() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Key}
        category="JavaScript Fundamentals"
        title="Property Access"
        description="Master dot notation, bracket notation, and optional chaining"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-teal-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
              <Key className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Accessing Object Properties
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript provides multiple ways to access object properties: <strong className="text-blue-700 dark:text-blue-400">dot notation</strong>, <strong className="text-cyan-700 dark:text-cyan-400">bracket notation</strong>, and <strong className="text-teal-700 dark:text-teal-400">optional chaining</strong>. Each has its use cases!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dot vs Bracket Notation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Dot vs Bracket Notation</CardTitle>
              <CardDescription>Two ways to access properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Dot Notation */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Dot Notation (obj.prop)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

// Clean and readable
console.log(user.name);  // 'Alice'
console.log(user.age);   // 25
console.log(user.email); // 'alice@example.com'

// ✅ Use when:
// - Property name is valid identifier
// - Property name is known at code time
// - Want clean, readable code`}</pre>
              </div>
            </div>

            {/* Bracket Notation */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">🔧 Bracket Notation (obj['prop'])</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  'name': 'Alice',
  'user-age': 25,
  'first name': 'Alice'
};

// Access with any string
console.log(user['name']);       // 'Alice'
console.log(user['user-age']);   // 25
console.log(user['first name']); // 'Alice'

// ✅ Use when:
// - Property has special characters
// - Property name is dynamic/computed
// - Property name is a number`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Basic Property Access"
        description="Dot and bracket notation comparison"
        code={`const person = {
  name: 'Alice',
  age: 25,
  'favorite-color': 'blue',
  'home address': '123 Main St'
};

// Dot notation - simple properties
console.log(person.name); // 'Alice'
console.log(person.age);  // 25

// Bracket notation - special characters
console.log(person['favorite-color']); // 'blue'
console.log(person['home address']);   // '123 Main St'

// Can't use dot notation for these:
// console.log(person.favorite-color); // ❌ Error!
// console.log(person.home address);   // ❌ Error!`}
        language="javascript"
        colorTheme="purple"
      />

      <CodeSnippet
        title="Example 2: Dynamic Property Access"
        description="Using variables to access properties"
        code={`const user = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 25,
  city: 'New York'
};

// Dynamic access with bracket notation
const propertyName = 'firstName';
console.log(user[propertyName]); // 'Alice'

// Loop through properties
const properties = ['firstName', 'lastName', 'city'];
properties.forEach(prop => {
  console.log(prop + ':', user[prop]);
});
// firstName: Alice
// lastName: Smith
// city: New York

// User input example
function getUserProperty(obj, key) {
  return obj[key]; // Dynamic!
}

console.log(getUserProperty(user, 'age')); // 25`}
        language="javascript"
        colorTheme="emerald"
      />

      <CodeSnippet
        title="Example 3: Computed Property Names"
        description="Dynamic property names in object literals"
        code={`// ES6: Computed property names
const fieldName = 'email';
const fieldValue = 'alice@example.com';

const user = {
  name: 'Alice',
  [fieldName]: fieldValue,  // Computed: email: 'alice@example.com'
  ['age']: 25,              // Computed: age: 25
  [\`user_\${Date.now()}\`]: true  // Dynamic key with template literal
};

console.log(user.email); // 'alice@example.com'

// Building objects dynamically
function createUser(key, value) {
  return {
    name: 'Default',
    [key]: value  // Dynamic key
  };
}

const user1 = createUser('age', 30);
console.log(user1); // { name: 'Default', age: 30 }

const user2 = createUser('city', 'NYC');
console.log(user2); // { name: 'Default', city: 'NYC' }`}
        language="javascript"
        colorTheme="blue"
      />

      {/* Optional Chaining */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Optional Chaining (?.)</CardTitle>
              <CardDescription>Safe property access without errors</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Without Optional Chaining */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Without Optional Chaining</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice'
  // No address property!
};

// Unsafe access
console.log(user.address.street);
// ❌ TypeError: Cannot read property 
//    'street' of undefined

// Must check manually
if (user.address && 
    user.address.street) {
  console.log(user.address.street);
}

// Verbose and tedious!`}</pre>
              </div>
            </div>

            {/* With Optional Chaining */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With Optional Chaining</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice'
  // No address property!
};

// Safe access with ?.
console.log(user.address?.street);
// undefined (no error!)

// Short-circuits at first nullish
console.log(user?.address?.street?.zip);
// undefined (safe!)

// Clean and concise!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 4: Optional Chaining Basics"
        description="Safe access to nested properties"
        code={`const user = {
  name: 'Alice',
  address: {
    city: 'New York'
    // No street property
  }
};

// Without optional chaining (verbose)
const street1 = user && user.address && user.address.street;
console.log(street1); // undefined

// With optional chaining (clean!)
const street2 = user?.address?.street;
console.log(street2); // undefined

// Works with null/undefined
const user2 = null;
console.log(user2?.name); // undefined (no error!)

const user3 = undefined;
console.log(user3?.name); // undefined (no error!)

// Can combine with bracket notation
const propName = 'street';
console.log(user?.address?.[propName]); // undefined`}
        language="javascript"
        colorTheme="cyan"
      />

      <CodeSnippet
        title="Example 5: Optional Chaining with Functions"
        description="Safe method calls with ?.()"
        code={`const user = {
  name: 'Alice',
  greet() {
    return 'Hello, ' + this.name;
  }
};

// Call method if it exists
console.log(user.greet?.()); // 'Hello, Alice'

// Safe even if method doesn't exist
console.log(user.sayBye?.()); // undefined (no error!)

// With null object
const user2 = null;
console.log(user2?.greet?.()); // undefined

// Useful for callbacks
function processUser(user, callback) {
  const result = callback?.(user); // Safe call
  return result ?? 'No callback provided';
}

console.log(processUser({ name: 'Bob' }, null)); // 'No callback provided'
console.log(processUser({ name: 'Bob' }, u => u.name)); // 'Bob'`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Example 6: Optional Chaining with Arrays"
        description="Safe access to array elements and methods"
        code={`const data = {
  users: [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ]
};

// Safe array access
console.log(data.users?.[0]?.name); // 'Alice'
console.log(data.users?.[10]?.name); // undefined

// Safe array methods
console.log(data.users?.length); // 2
console.log(data.users?.map(u => u.name)); // ['Alice', 'Bob']

// With missing array
const data2 = {};
console.log(data2.users?.[0]?.name); // undefined
console.log(data2.users?.length); // undefined
console.log(data2.users?.map); // undefined

// Real-world API response handling
function getUserName(response) {
  return response?.data?.users?.[0]?.name ?? 'Unknown';
}

console.log(getUserName(null)); // 'Unknown'
console.log(getUserName({ data: { users: [{ name: 'Alice' }] } })); // 'Alice'`}
        language="javascript"
        colorTheme="blue"
      />

      {/* Nullish Coalescing */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Nullish Coalescing (??)</CardTitle>
              <CardDescription>Default values for null/undefined only</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* OR Operator */}
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 overflow-hidden">
              <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-3 border-b-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">⚠️ OR (||) - Falsy Values</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const count = 0;
const name = '';
const enabled = false;

// OR treats all falsy as missing
console.log(count || 10);   // 10 ❌
console.log(name || 'User'); // 'User' ❌
console.log(enabled || true); // true ❌

// Loses valid 0, '', false values!`}</pre>
              </div>
            </div>

            {/* Nullish Coalescing */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ?? - Only null/undefined</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const count = 0;
const name = '';
const enabled = false;

// ?? only for null/undefined
console.log(count ?? 10);   // 0 ✅
console.log(name ?? 'User'); // '' ✅
console.log(enabled ?? true); // false ✅

// Preserves valid falsy values!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 7: Nullish Coalescing with Optional Chaining"
        description="Perfect combination for safe defaults"
        code={`const config = {
  timeout: 0,        // Valid 0
  retries: null,     // Not set
  cache: false       // Explicitly disabled
};

// Using || (wrong - loses valid falsy values)
console.log(config.timeout || 5000);  // 5000 ❌ (should be 0)
console.log(config.cache || true);    // true ❌ (should be false)

// Using ?? (correct - only null/undefined)
console.log(config.timeout ?? 5000);  // 0 ✅
console.log(config.retries ?? 3);     // 3 ✅
console.log(config.cache ?? true);    // false ✅

// Combined with optional chaining
const user = null;
const userName = user?.profile?.name ?? 'Guest';
console.log(userName); // 'Guest'

// Real-world: API defaults
function getSettings(response) {
  return {
    theme: response?.settings?.theme ?? 'light',
    fontSize: response?.settings?.fontSize ?? 16,
    notifications: response?.settings?.notifications ?? true
  };
}`}
        language="javascript"
        colorTheme="emerald"
      />

      {/* Common Patterns */}
      <CodeSnippet
        title="Example 8: Common Property Access Patterns"
        description="Real-world usage patterns"
        code={`// Pattern 1: Safe nested access
const user = {
  profile: {
    settings: {
      theme: 'dark'
    }
  }
};
const theme = user?.profile?.settings?.theme ?? 'light';

// Pattern 2: Dynamic property with fallback
function getProperty(obj, key, defaultValue) {
  return obj?.[key] ?? defaultValue;
}
console.log(getProperty(user, 'name', 'Unknown')); // 'Unknown'

// Pattern 3: Method chaining with optional chaining
const result = user
  ?.getProfile?.()
  ?.getSettings?.()
  ?.getTheme?.() ?? 'default';

// Pattern 4: Array access with defaults
const users = [{ name: 'Alice' }];
const firstUserName = users?.[0]?.name ?? 'No users';
const secondUserName = users?.[1]?.name ?? 'No second user';

// Pattern 5: Configuration merging
const defaultConfig = { timeout: 5000, retries: 3 };
const userConfig = { timeout: 0 };
const config = {
  timeout: userConfig.timeout ?? defaultConfig.timeout,
  retries: userConfig.retries ?? defaultConfig.retries
};`}
        language="javascript"
        colorTheme="purple"
      />

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>When to use each method</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Use Dot Notation When:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Property name is a valid identifier (no spaces, no special chars)</li>
                <li>• Property name is known at code time</li>
                <li>• You want clean, readable code</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Use Bracket Notation When:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Property name has special characters or spaces</li>
                <li>• Property name is dynamic (variable or computed)</li>
                <li>• Property name is a number</li>
                <li>• Property name is stored in a variable</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Use Optional Chaining When:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Property might not exist (nested objects)</li>
                <li>• Dealing with API responses (uncertain structure)</li>
                <li>• Object might be null/undefined</li>
                <li>• You want to avoid verbose null checks</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Use Nullish Coalescing When:</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• You need default values for null/undefined only</li>
                <li>• Valid falsy values (0, '', false) should be preserved</li>
                <li>• Combined with optional chaining for safe defaults</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

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
                <span className="text-3xl">.</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Dot Notation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean syntax: <code>obj.prop</code><br/>
                    Use for known, valid identifiers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">[]</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Bracket Notation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dynamic access: <code>obj[key]</code><br/>
                    Use for computed/special properties
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">?.</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Optional Chaining</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Safe access: <code>obj?.prop</code><br/>
                    Returns undefined if null/undefined
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">??</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Nullish Coalescing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Default values: <code>value ?? default</code><br/>
                    Only for null/undefined (not falsy)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-300 dark:border-cyan-700">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Combine <strong>?.</strong> and <strong>??</strong> for the safest property access: <code className="text-sm">user?.name ?? 'Guest'</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
