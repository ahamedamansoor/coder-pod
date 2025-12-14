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
  Shield,
  Eye,
} from 'lucide-react';

export default function JavaScriptProxyReflectNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript ES6+"
        title="Proxy & Reflect"
        description="Intercept and customize object operations"
        colorTheme="yellow"
      />

      {/* What are Proxy & Reflect? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-violet-50/30 to-purple-50/20 dark:from-indigo-950/10 dark:via-violet-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Proxy & Reflect: Meta Programming
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-indigo-700 dark:text-indigo-400">Proxy</strong> lets you intercept and customize operations on objects. <strong className="text-violet-700 dark:text-violet-400">Reflect</strong> provides methods for interceptable operations. Together they enable powerful meta-programming!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800/30">
            <Eye className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-lg">Intercept Everything</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Proxy can intercept: get, set, delete, has, apply, construct, and more - 13 traps total!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Proxy */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating a Proxy</CardTitle>
              <CardDescription>Wrap an object with custom behavior</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Without Proxy */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Without Proxy</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = {
  name: 'Alice',
  age: 25
};

console.log(user.name); // Alice
user.age = 26;

// No way to intercept operations
// Can't validate, log, or customize`}</pre>
              </div>
            </div>

            {/* With Proxy */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With Proxy</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const user = { name: 'Alice', age: 25 };

const proxy = new Proxy(user, {
  get(target, prop) {
    console.log(\`Reading \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Writing \${prop} = \${value}\`);
    target[prop] = value;
    return true;
  }
});

console.log(proxy.name); // Reading name, Alice
proxy.age = 26;          // Writing age = 26`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Proxy Basics"
        description="Intercepting get and set operations"
        code={`// Basic proxy syntax
const target = { message: 'Hello' };

const handler = {
  get(target, prop) {
    console.log(\`GET \${prop}\`);
    return target[prop];
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // GET message, Hello

// Validation with set trap
const person = {
  name: 'Alice',
  age: 25
};

const validatedPerson = new Proxy(person, {
  set(target, prop, value) {
    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new TypeError('Age must be a number');
      }
      if (value < 0 || value > 150) {
        throw new RangeError('Age must be between 0 and 150');
      }
    }
    target[prop] = value;
    return true; // Indicate success
  }
});

validatedPerson.age = 30; // OK
// validatedPerson.age = 'thirty'; // TypeError
// validatedPerson.age = 200; // RangeError

// Default values with get trap
const withDefaults = new Proxy({}, {
  get(target, prop) {
    return prop in target ? target[prop] : 'default';
  }
});

console.log(withDefaults.name);  // 'default'
withDefaults.name = 'Alice';
console.log(withDefaults.name);  // 'Alice'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Proxy Traps */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Common Proxy Traps</CardTitle>
              <CardDescription>13 traps to intercept operations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">get(target, prop, receiver)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intercepts property access<br/>
                <code>obj.prop</code> or <code>obj['prop']</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">set(target, prop, value, receiver)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intercepts property assignment<br/>
                <code>obj.prop = value</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">has(target, prop)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intercepts <code>in</code> operator<br/>
                <code>'prop' in obj</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">deleteProperty(target, prop)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intercepts deletion<br/>
                <code>delete obj.prop</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">apply(target, thisArg, args)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intercepts function calls<br/>
                <code>func(...args)</code>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400">construct(target, args, newTarget)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Intercepts <code>new</code> operator<br/>
                <code>new Constructor(...args)</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="More Proxy Traps"
        description="has, deleteProperty, apply, and more"
        code={`// has trap - hide private properties
const obj = {
  public: 'visible',
  _private: 'hidden'
};

const proxy = new Proxy(obj, {
  has(target, prop) {
    if (prop.startsWith('_')) {
      return false; // Hide private props
    }
    return prop in target;
  }
});

console.log('public' in proxy);   // true
console.log('_private' in proxy); // false (hidden!)

// deleteProperty trap - prevent deletion
const protected = new Proxy({ x: 1, y: 2 }, {
  deleteProperty(target, prop) {
    throw new Error(\`Cannot delete property \${prop}\`);
  }
});

// delete protected.x; // Error!

// apply trap - log function calls
function sum(a, b) {
  return a + b;
}

const trackedSum = new Proxy(sum, {
  apply(target, thisArg, args) {
    console.log(\`Called with: \${args}\`);
    const result = target.apply(thisArg, args);
    console.log(\`Result: \${result}\`);
    return result;
  }
});

trackedSum(5, 3);
// Called with: 5,3
// Result: 8

// construct trap - customize new
class User {
  constructor(name) {
    this.name = name;
  }
}

const UserProxy = new Proxy(User, {
  construct(target, args) {
    console.log('Creating user:', args[0]);
    return new target(...args);
  }
});

const user = new UserProxy('Alice');
// Creating user: Alice`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Reflect API */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Reflect API</CardTitle>
              <CardDescription>Built-in methods for meta operations</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Reflect Mirrors Proxy Traps</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Reflect methods match proxy traps
const obj = { x: 1, y: 2 };

// Reflect.get = obj.x
console.log(Reflect.get(obj, 'x')); // 1

// Reflect.set = obj.x = value
Reflect.set(obj, 'x', 10);
console.log(obj.x); // 10

// Reflect.has = 'prop' in obj
console.log(Reflect.has(obj, 'x')); // true

// Reflect.deleteProperty = delete obj.prop
Reflect.deleteProperty(obj, 'y');
console.log(obj); // { x: 10 }

// Using in proxy (recommended!)
const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log(\`Reading \${prop}\`);
    return Reflect.get(target, prop); // Use Reflect!
  },
  set(target, prop, value) {
    console.log(\`Writing \${prop}\`);
    return Reflect.set(target, prop, value); // Use Reflect!
  }
});`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Reflect API Examples"
        description="Meta operations with Reflect"
        code={`const obj = {
  name: 'Alice',
  greet() {
    return \`Hello, \${this.name}\`;
  }
};

// Reflect.get with receiver
console.log('Name:', Reflect.get(obj, 'name'));

// Reflect.apply - call function
console.log('Greet:', Reflect.apply(obj.greet, obj, []));

// Reflect.construct - like 'new'
class Person {
  constructor(name) {
    this.name = name;
  }
}
const person = Reflect.construct(Person, ['Bob']);
console.log('Person name:', person.name);

// Reflect.defineProperty
Reflect.defineProperty(obj, 'age', {
  value: 25,
  writable: true,
  enumerable: true
});
console.log('Age defined:', obj.age);

// Reflect.getOwnPropertyDescriptor
const desc = Reflect.getOwnPropertyDescriptor(obj, 'age');
console.log('Descriptor writable:', desc.writable);
console.log('Descriptor enumerable:', desc.enumerable);

// Reflect.ownKeys - all keys including symbols
const sym = Symbol('secret');
const objWithSymbol = { a: 1, [sym]: 'hidden' };
console.log('Keys:', Reflect.ownKeys(objWithSymbol));`}
        language="javascript"
        colorTheme="yellow"
        icon={Shield}
      />

      {/* Real-World Examples */}
      <CodeSnippet
        title="Real-World: Observable Object"
        description="Track changes with Proxy (like Vue 3 reactivity)"
        code={`// Create observable
function observable(obj, onChange) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === 'object' && value !== null) {
        return observable(value, onChange);
      }
      return value;
    },
    set(target, prop, value, receiver) {
      const oldValue = target[prop];
      const result = Reflect.set(target, prop, value, receiver);
      if (oldValue !== value) {
        onChange(prop, oldValue, value);
      }
      return result;
    }
  });
}

const state = observable({
  user: { name: 'Alice', age: 25 },
  count: 0
}, (prop, oldVal, newVal) => {
  console.log(prop + ' changed: ' + oldVal + ' -> ' + newVal);
});

state.count = 1;
state.user.name = 'Bob';`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Real-World: Negative Array Indexes"
        description="Python-style negative indexes with Proxy"
        code={`function createArray(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        prop = String(target.length + index);
      }
      return Reflect.get(target, prop);
    }
  });
}

const arr = createArray([1, 2, 3, 4, 5]);
console.log('Last item:', arr[-1]);
console.log('Second to last:', arr[-2]);
console.log('Third to last:', arr[-3]);`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Real-World: Property Access Logger"
        description="Track all property access and modifications"
        code={`function createLogger(obj, name) {
  return new Proxy(obj, {
    get(target, prop) {
      console.log('[' + name + '] GET ' + String(prop));
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log('[' + name + '] SET ' + String(prop) + ' = ' + value);
      return Reflect.set(target, prop, value);
    }
  });
}

const user = createLogger({ name: 'Alice' }, 'User');
const username = user.name;
user.age = 25;
user.name = 'Bob';`}
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
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Proxy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Wrap objects to intercept operations<br/>
                    13 traps: get, set, has, delete, apply, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reflect</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built-in meta operations<br/>
                    Mirrors proxy traps (use in handlers!)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validation, logging, reactivity<br/>
                    Default values, access control
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Framework Usage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Vue 3 reactivity uses Proxy<br/>
                    MobX, Immer also leverage Proxy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Always use <strong>Reflect</strong> methods inside proxy handlers to maintain proper behavior with receivers and inherited properties!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
