'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Lightbulb,
  Shield,
  Zap,
  Eye,
  Code2,
} from 'lucide-react';

export default function JavaScriptReflectAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Eye}
        category="JavaScript ES6+"
        title="Reflect API"
        description="Built-in methods for meta programming operations"
        colorTheme="yellow"
      />

      {/* What is Reflect API? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Reflect API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-cyan-700 dark:text-cyan-400">Reflect</strong> is a built-in JavaScript object that provides methods for interceptable operations. It mirrors Proxy traps and offers a cleaner, more functional approach to meta programming. All Reflect methods are <strong>static functions</strong> - no constructor!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">Why Use Reflect?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Reflect provides functional alternatives to common operations (like <code>delete obj.prop</code> or <code>'prop' in obj</code>). It returns boolean success values instead of throwing errors, making code safer and more predictable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Reflect vs Traditional */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Reflect vs Traditional Approach</CardTitle>
              <CardDescription>Why Reflect is better</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Traditional Way</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const obj = { x: 1 };

// Property operations
obj.x;              // Get
obj.x = 2;          // Set
delete obj.x;       // Delete
'x' in obj;         // Has

// Function operations
func.apply(obj, args);
new Constructor(...args);

// Issues:
// - Imperative syntax
// - Mixed patterns
// - No consistent API`}</pre>
              </div>
            </div>

            {/* Reflect */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Reflect Way</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const obj = { x: 1 };

// Property operations
Reflect.get(obj, 'x');
Reflect.set(obj, 'x', 2);
Reflect.deleteProperty(obj, 'x');
Reflect.has(obj, 'x');

// Function operations
Reflect.apply(func, obj, args);
Reflect.construct(Constructor, args);

// Benefits:
// - Functional approach
// - Consistent API
// - Returns boolean success`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Reflect Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Core Reflect Methods</CardTitle>
              <CardDescription>13 methods that mirror Proxy traps</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Reflect.get(target, prop)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gets property value<br/>
                Alternative to: <code>obj[prop]</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Reflect.set(target, prop, value)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sets property value<br/>
                Alternative to: <code>obj[prop] = value</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Reflect.has(target, prop)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Checks property existence<br/>
                Alternative to: <code>'prop' in obj</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Reflect.deleteProperty(target, prop)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deletes property<br/>
                Alternative to: <code>delete obj.prop</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Reflect.apply(func, thisArg, args)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Calls function<br/>
                Alternative to: <code>func.apply()</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-400">Reflect.construct(target, args)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creates instance<br/>
                Alternative to: <code>new Constructor()</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Reflect.get() & Reflect.set()"
        description="Property access and assignment"
        code={`const person = {
  name: 'Alice',
  age: 25,
  city: 'NYC'
};

// Get property value
console.log('Name:', Reflect.get(person, 'name'));
console.log('Age:', Reflect.get(person, 'age'));

// Set property value
const success = Reflect.set(person, 'age', 26);
console.log('Set success:', success);
console.log('New age:', person.age);

// Get non-existent property
console.log('Job:', Reflect.get(person, 'job'));`}
        language="javascript"
        colorTheme="yellow"
        icon={Eye}
      />

      <CodeSnippet
        title="Reflect.has() & Reflect.deleteProperty()"
        description="Check existence and delete properties"
        code={`const user = {
  username: 'bob123',
  email: 'bob@example.com',
  _secret: 'private'
};

// Check if property exists
console.log('Has username:', Reflect.has(user, 'username'));
console.log('Has password:', Reflect.has(user, 'password'));

// Delete property
const deleted = Reflect.deleteProperty(user, 'email');
console.log('Email deleted:', deleted);
console.log('Has email now:', Reflect.has(user, 'email'));

// Try to delete non-existent property
const result = Reflect.deleteProperty(user, 'nonexistent');
console.log('Delete non-existent:', result);`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Reflect.apply() - Function Calls"
        description="Call functions with specific context"
        code={`function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

const person = { name: 'Alice' };

// Traditional way
console.log('Traditional:', greet.apply(person, ['Hello', '!']));

// Reflect way
console.log('Reflect:', Reflect.apply(greet, person, ['Hi', '?']));

// Works with built-in functions
const numbers = [5, 2, 8, 1, 9];
const max = Reflect.apply(Math.max, null, numbers);
console.log('Max value:', max);`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Reflect.construct() - Create Instances"
        description="Alternative to 'new' operator"
        code={`class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

// Traditional way
const user1 = new User('Alice', 25);
console.log('Traditional:', user1.greet());

// Reflect way
const user2 = Reflect.construct(User, ['Bob', 30]);
console.log('Reflect:', user2.greet());
console.log('Is instance:', user2 instanceof User);`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Advanced Reflect Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Advanced Reflect Methods</CardTitle>
              <CardDescription>Property descriptors and prototypes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Reflect.defineProperty()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Define property with descriptor
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Reflect.getOwnPropertyDescriptor()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get property descriptor
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Reflect.ownKeys()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All own keys (strings + symbols)
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Reflect.getPrototypeOf()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get object's prototype
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Reflect.setPrototypeOf()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Set object's prototype
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">Reflect.isExtensible() / preventExtensions()</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Check/prevent object extension
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Reflect.defineProperty() & getOwnPropertyDescriptor()"
        description="Working with property descriptors"
        code={`const obj = {};

// Define a read-only property
const defined = Reflect.defineProperty(obj, 'id', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log('Property defined:', defined);
console.log('ID value:', obj.id);

// Get property descriptor
const desc = Reflect.getOwnPropertyDescriptor(obj, 'id');
console.log('Writable:', desc.writable);
console.log('Enumerable:', desc.enumerable);

// Try to change (silently fails in non-strict mode)
Reflect.set(obj, 'id', 456);
console.log('ID after set:', obj.id);`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Reflect.ownKeys() - All Keys Including Symbols"
        description="Get all own property keys"
        code={`const sym1 = Symbol('secret');
const sym2 = Symbol('id');

const obj = {
  name: 'Alice',
  age: 25,
  [sym1]: 'hidden',
  [sym2]: 123
};

// Get all keys (including symbols)
const allKeys = Reflect.ownKeys(obj);
console.log('All keys:', allKeys);
console.log('Total keys:', allKeys.length);

// Compare with Object.keys (only strings)
const stringKeys = Object.keys(obj);
console.log('String keys:', stringKeys);
console.log('String count:', stringKeys.length);`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Reflect with Proxy */}
      <Card className="border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Reflect with Proxy - Best Practice</CardTitle>
              <CardDescription>Why you should always use Reflect in Proxy handlers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-white/80 dark:bg-slate-900/80 border-emerald-200 dark:border-emerald-800/30">
            <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle>Why Use Reflect in Proxy?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Reflect</strong> methods handle receivers correctly, maintain proper <code>this</code> binding, and ensure correct behavior with getters/setters and inheritance. Always use <code>Reflect</code> instead of direct operations!
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Without Reflect</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log('Getting', prop);
    return target[prop]; // Wrong!
  },
  set(target, prop, value) {
    console.log('Setting', prop);
    target[prop] = value; // Wrong!
    return true;
  }
});

// Issues:
// - Doesn't handle receiver
// - Breaks getter/setter logic
// - Inheritance problems`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With Reflect</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const proxy = new Proxy(obj, {
  get(target, prop, receiver) {
    console.log('Getting', prop);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log('Setting', prop);
    return Reflect.set(target, prop, value, receiver);
  }
});

// Benefits:
// - Correct receiver handling
// - Proper getter/setter behavior
// - Works with inheritance`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World: Validation with Reflect"
        description="Type validation using Proxy + Reflect"
        code={`function createValidatedObject(schema) {
  return new Proxy({}, {
    set(target, prop, value, receiver) {
      const expectedType = schema[prop];
      
      if (expectedType && typeof value !== expectedType) {
        console.log(\`Error: \${prop} must be \${expectedType}\`);
        return false;
      }
      
      console.log(\`✓ Valid: \${prop} = \${value}\`);
      return Reflect.set(target, prop, value, receiver);
    }
  });
}

const user = createValidatedObject({
  name: 'string',
  age: 'number',
  active: 'boolean'
});

user.name = 'Alice';
user.age = 25;
user.age = 'twenty-five';`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Real-World: Safe Property Access"
        description="Prevent errors with non-existent properties"
        code={`function createSafeObject(obj, defaultValue = null) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      
      if (value === undefined) {
        console.log(\`Warning: \${prop} not found, returning default\`);
        return defaultValue;
      }
      
      return value;
    }
  });
}

const config = createSafeObject({
  apiUrl: 'https://api.example.com',
  timeout: 5000
}, 'NOT_CONFIGURED');

console.log('API URL:', config.apiUrl);
console.log('Timeout:', config.timeout);
console.log('Debug mode:', config.debugMode);`}
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
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Functional Approach</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reflect provides functions for operations<br/>
                    Cleaner, more consistent than mixed syntax
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Boolean Returns</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns true/false for success<br/>
                    No errors thrown, safer code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Mirrors Proxy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    13 methods match Proxy traps exactly<br/>
                    Perfect for Proxy handlers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use with Proxy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always use in Proxy handlers<br/>
                    Ensures correct receiver behavior
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Think of <strong>Reflect</strong> as the functional programming version of object operations. It's especially powerful when combined with <strong>Proxy</strong> for meta programming!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
