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
  Key,
  Lock,
} from 'lucide-react';

export default function JavaScriptSymbolsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Key}
        category="JavaScript ES6+"
        title="Symbols"
        description="Unique identifiers for object properties"
        colorTheme="yellow"
      />

      {/* What are Symbols? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-fuchsia-50/20 dark:from-violet-950/10 dark:via-purple-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Symbols: Guaranteed Unique
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Symbols are <strong className="text-violet-700 dark:text-violet-400">primitive unique values</strong>. Every Symbol() creates a completely unique identifier, even with the same description. Perfect for private properties!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-violet-200 dark:border-violet-800/30">
            <Lock className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            <AlertTitle className="text-lg">Why Use Symbols?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>✓ Unique</strong> - No collisions, even with same name<br/>
              <strong>✓ Hidden</strong> - Don't show in for...in or Object.keys()<br/>
              <strong>✓ Safe</strong> - Won't override existing properties
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Symbols */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating Symbols</CardTitle>
              <CardDescription>Every Symbol() is unique</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Unique */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">✨ Always Unique</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Each Symbol() is unique
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2);  // false

// Even with same description
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2);    // false

// Description is just for debugging
console.log(id1.description); // 'id'`}</pre>
              </div>
            </div>

            {/* As Properties */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">🔑 As Property Keys</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Use as object property
const id = Symbol('id');

const user = {
  name: 'Alice',
  [id]: 123  // Symbol as key
};

console.log(user[id]);     // 123
console.log(user.name);    // Alice

// Won't clash with other properties
const otherId = Symbol('id');
user[otherId] = 456;       // Different property!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Symbol Basics"
        description="Creating and using symbols"
        code={`// Create symbol
const sym = Symbol();
console.log(typeof sym);  // 'symbol'

// With description (for debugging)
const userId = Symbol('user_id');
const userName = Symbol('user_name');

// Use in object
const person = {
  [userId]: 42,
  [userName]: 'Bob',
  age: 30
};

console.log(person[userId]);    // 42
console.log(person[userName]);  // Bob
console.log(person.age);        // 30

// Symbols are hidden from normal iteration
console.log(Object.keys(person));     // ['age']
console.log(Object.values(person));   // [30]

for (const key in person) {
  console.log(key);  // Only prints 'age'
}

// But can be accessed with getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(person));
// [Symbol(user_id), Symbol(user_name)]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Hidden Properties */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Hidden from Enumeration</CardTitle>
              <CardDescription>Symbols don't appear in normal loops</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Private-like Properties</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const password = Symbol('password');
const email = Symbol('email');

const user = {
  name: 'Alice',
  [password]: 'secret123',
  [email]: 'alice@example.com'
};

// Hidden from normal methods
console.log(Object.keys(user));
// ['name'] - Symbols not included!

console.log(JSON.stringify(user));
// {"name":"Alice"} - Symbols excluded!

for (const key in user) {
  console.log(key);  // Only 'name'
}

// But still accessible if you have the symbol
console.log(user[password]);  // 'secret123'
console.log(user[email]);     // 'alice@example.com'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Symbol as Private Properties"
        description="Simulating private object properties"
        code={`// Private properties pattern
const _balance = Symbol('balance');
const _withdraw = Symbol('withdraw');

class BankAccount {
  constructor(initialBalance) {
    this[_balance] = initialBalance;
  }
  
  deposit(amount) {
    this[_balance] += amount;
    console.log(\`Deposited $\${amount}\`);
  }
  
  [_withdraw](amount) {
    if (this[_balance] >= amount) {
      this[_balance] -= amount;
      return true;
    }
    return false;
  }
  
  getBalance() {
    return this[_balance];
  }
}

const account = new BankAccount(1000);
account.deposit(500);

console.log(account.getBalance());  // 1500

// Can't access private properties directly
console.log(account.balance);       // undefined
console.log(account._balance);      // undefined

// Hidden from Object.keys()
console.log(Object.keys(account));  // []

// But can be found with getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(account));
// [Symbol(balance), Symbol(withdraw)]`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Global Symbols */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Global Symbol Registry</CardTitle>
              <CardDescription>Share symbols across modules</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Symbol.for() & Symbol.keyFor()</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Symbol.for() creates/retrieves from global registry
const globalId = Symbol.for('app.id');
const sameId = Symbol.for('app.id');

console.log(globalId === sameId);  // true!

// Symbol.keyFor() gets the key
console.log(Symbol.keyFor(globalId));  // 'app.id'

// Regular symbols don't have keys
const localId = Symbol('id');
console.log(Symbol.keyFor(localId));   // undefined

// Useful across modules
// module1.js
export const APP_ID = Symbol.for('app.id');

// module2.js
const APP_ID = Symbol.for('app.id');
// Same symbol!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Well-Known Symbols"
        description="Built-in symbols for special behaviors"
        code={`// Symbol.iterator - Make object iterable
const range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        }
        return { done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num);  // 1 2 3 4 5
}

// Symbol.toStringTag - Customize toString
class CustomArray {
  get [Symbol.toStringTag]() {
    return 'MyCustomArray';
  }
}

const arr = new CustomArray();
console.log(arr.toString());  // [object MyCustomArray]

// Symbol.hasInstance - Customize instanceof
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof MyArray);  // true
console.log({} instanceof MyArray);  // false

// Symbol.toPrimitive - Custom type conversion
const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'hello';
    return true;
  }
};

console.log(+obj);      // 42 (number)
console.log(\`\${obj}\`); // 'hello' (string)
console.log(obj + '');  // 'true' (default)`}
        language="javascript"
        colorTheme="yellow"
        icon={Key}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: Object Metadata"
        description="Using symbols for metadata that won't interfere"
        code={`// Library that adds metadata to objects
const META = {
  created: Symbol('created'),
  modified: Symbol('modified'),
  version: Symbol('version')
};

function trackMetadata(obj) {
  obj[META.created] = new Date();
  obj[META.version] = 1;
  
  return new Proxy(obj, {
    set(target, prop, value) {
      if (typeof prop === 'string') {
        target[META.modified] = new Date();
        target[META.version]++;
      }
      target[prop] = value;
      return true;
    }
  });
}

const user = trackMetadata({
  name: 'Alice',
  age: 25
});

console.log(user.name);  // Alice

user.age = 26;

console.log(Object.keys(user));
// ['name', 'age'] - metadata hidden

console.log(user[META.version]);   // 2
console.log(user[META.modified]);  // Recent date

// Event system with symbol keys
const LISTENERS = Symbol('listeners');

class EventEmitter {
  constructor() {
    this[LISTENERS] = {};
  }
  
  on(event, handler) {
    if (!this[LISTENERS][event]) {
      this[LISTENERS][event] = [];
    }
    this[LISTENERS][event].push(handler);
  }
  
  emit(event, data) {
    const handlers = this[LISTENERS][event] || [];
    handlers.forEach(handler => handler(data));
  }
}

const emitter = new EventEmitter();
emitter.on('data', data => console.log('Received:', data));
emitter.emit('data', { value: 42 });`}
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
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Always Unique</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Every Symbol() creates a unique value<br/>
                    Even Symbol('id') !== Symbol('id')
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Hidden Properties</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't show in Object.keys(), for...in<br/>
                    Use Object.getOwnPropertySymbols()
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Global Registry</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code>Symbol.for(key)</code> - Share across modules<br/>
                    <code>Symbol.keyFor(sym)</code> - Get key
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Well-Known Symbols</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Symbol.iterator, Symbol.toStringTag<br/>
                    Symbol.hasInstance, Symbol.toPrimitive
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use symbols for metadata, internal properties, or when you need guaranteed unique keys that won't clash with existing properties!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
