'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Link as LinkIcon,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  GitBranch,
  Share2,
  Layers,
} from 'lucide-react';

export default function JavaScriptPrototypes() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={LinkIcon}
        category="JavaScript Fundamentals"
        title="Prototypes"
        description="Understanding JavaScript's prototype chain and inheritance"
        colorTheme="yellow"
      />

      {/* What are Prototypes */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Prototypes?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                In JavaScript, every object has a hidden link to another object called its <strong className="text-yellow-700 dark:text-yellow-400">prototype</strong>. Think of it as a parent that objects can inherit properties and methods from!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <GitBranch className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Family Tree Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Like inheriting traits from your parents, objects inherit properties from their prototype. If an object doesn't have something, JavaScript looks up the chain to find it!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Every Object Has a Prototype */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <LinkIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>The Prototype Link</CardTitle>
              <CardDescription>Every object connects to a prototype</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Hidden Connection</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Every object has a hidden property called <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">__proto__</code> that links to its prototype
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = { name: 'Alice' };

// Check the prototype
console.log(person.__proto__);
// Object.prototype (the base object)

// Access inherited methods
console.log(person.toString());  // '[object Object]'
// toString() comes from Object.prototype!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Prototype Chain Basics"
        description="How objects find properties"
        code={`const person = { name: 'Alice' };

// person has 'name' directly
console.log(person.name);  // 'Alice'

// person doesn't have toString(), but finds it in prototype
console.log(person.toString());  // '[object Object]'

// How? JavaScript looks up the chain:
// 1. Check person object - no toString()
// 2. Check person.__proto__ (Object.prototype) - found!

// Check what's in the prototype
console.log(Object.getPrototypeOf(person));
// Shows Object.prototype with: toString, valueOf, hasOwnProperty, etc.

// Every object inherits from Object.prototype
const obj = {};
console.log(obj.hasOwnProperty('name'));  // false
// hasOwnProperty() comes from Object.prototype`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Constructor Function Prototypes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Share2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Constructor Function Prototypes</CardTitle>
              <CardDescription>Share methods across instances</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Efficient Method Sharing</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When you create a constructor function, JavaScript automatically creates a <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">prototype</code> property where you can add shared methods
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function Person(name) {
  this.name = name;
}

// Add method to prototype
Person.prototype.greet = function() {
  console.log('Hi, I am ' + this.name);
};

const alice = new Person('Alice');
const bob = new Person('Bob');

// Both use the same method from prototype
alice.greet();  // 'Hi, I am Alice'
bob.greet();    // 'Hi, I am Bob'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Adding Methods to Prototype"
        description="Shared methods for all instances"
        code={`function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (shared by ALL instances)
Person.prototype.greet = function() {
  console.log(\`Hello, I'm \${this.name}\`);
};

Person.prototype.getAge = function() {
  return this.age;
};

Person.prototype.haveBirthday = function() {
  this.age++;
  console.log(\`Happy birthday! Now \${this.age} years old\`);
};

// Create instances
const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

// All instances share the same methods
alice.greet();  // 'Hello, I'm Alice'
bob.greet();    // 'Hello, I'm Bob'

// Verify they're the same function
console.log(alice.greet === bob.greet);  // true

// Check prototype
console.log(alice.__proto__ === Person.prototype);  // true
console.log(Object.getPrototypeOf(alice) === Person.prototype);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Prototype Chain */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>The Prototype Chain</CardTitle>
              <CardDescription>Multiple levels of inheritance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Looking Up the Chain</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When you access a property, JavaScript searches in order:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>The object itself</strong> - Check if property exists directly
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>The prototype</strong> - Check object's prototype
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>Object.prototype</strong> - Check the base object
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded p-3 border">
                    <strong>undefined</strong> - Not found anywhere
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Prototype Chain in Action"
        description="How property lookup works"
        code={`function Person(name) {
  this.name = name;  // Own property
}

Person.prototype.species = 'Human';  // Prototype property

const alice = new Person('Alice');

// 1. Check alice object - has 'name'
console.log(alice.name);  // 'Alice' (found on object)

// 2. Check alice object - no 'species', check prototype
console.log(alice.species);  // 'Human' (found on Person.prototype)

// 3. Check all the way up to Object.prototype
console.log(alice.toString());  // '[object Object]' (from Object.prototype)

// 4. Property not found anywhere
console.log(alice.notExists);  // undefined

// Visualize the chain
console.log(alice.__proto__ === Person.prototype);  // true
console.log(Person.prototype.__proto__ === Object.prototype);  // true
console.log(Object.prototype.__proto__);  // null (end of chain)

// The chain:
// alice -> Person.prototype -> Object.prototype -> null`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* hasOwnProperty */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>hasOwnProperty()</CardTitle>
              <CardDescription>Check if property belongs to object directly</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Own vs Inherited</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">hasOwnProperty()</code> to check if a property exists directly on the object (not inherited)
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function Person(name) {
  this.name = name;
}

Person.prototype.species = 'Human';

const alice = new Person('Alice');

// 'name' is own property
console.log(alice.hasOwnProperty('name'));     // true

// 'species' is inherited from prototype
console.log(alice.hasOwnProperty('species'));  // false

// But alice can still access it
console.log(alice.species);  // 'Human'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="hasOwnProperty() Examples"
        description="Distinguishing own vs inherited properties"
        code={`function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.wheels = 4;

const myCar = new Car('Toyota', 'Camry');

// Check own properties
console.log(myCar.hasOwnProperty('make'));   // true (own)
console.log(myCar.hasOwnProperty('model'));  // true (own)
console.log(myCar.hasOwnProperty('wheels')); // false (inherited)

// But still accessible
console.log(myCar.wheels);  // 4

// Loop through own properties only
for (let key in myCar) {
  if (myCar.hasOwnProperty(key)) {
    console.log(\`\${key}: \${myCar[key]}\`);
  }
}
// make: Toyota
// model: Camry
// (wheels not shown - it's inherited)

// Get all own property names
const ownProps = Object.keys(myCar);
console.log(ownProps);  // ['make', 'model']

// Modern alternative: Object.hasOwn()
console.log(Object.hasOwn(myCar, 'make'));   // true
console.log(Object.hasOwn(myCar, 'wheels')); // false`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Modifying Prototypes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Adding to Existing Prototypes</CardTitle>
              <CardDescription>Extend built-in objects (use with caution!)</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Prototype Extension</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You CAN add methods to built-in prototypes, but generally shouldn't in production code!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Add method to Array prototype (not recommended!)
Array.prototype.myMethod = function() {
  return this.length;
};

const arr = [1, 2, 3];
console.log(arr.myMethod());  // 3 (all arrays have it now)

// Better: Create your own constructor
function MyArray() {
  Array.call(this);
}
MyArray.prototype = Object.create(Array.prototype);
MyArray.prototype.myMethod = function() {
  return this.length;
};`}</pre>
              </div>
              <Alert className="mt-4 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/30">
                <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-sm">
                  <strong>Warning:</strong> Modifying built-in prototypes (Array, Object, String) can cause conflicts with other code or future JavaScript features. Avoid in production!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Prototype Extension Example"
        description="For learning purposes only!"
        code={`// DON'T do this in production code!
// Just for understanding how it works

// Add method to String prototype
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

const str = 'hello';
console.log(str.reverse());  // 'olleh'

// Now ALL strings have this method
const str2 = 'world';
console.log(str2.reverse());  // 'dlrow'

// Add method to Number prototype
Number.prototype.double = function() {
  return this * 2;
};

const num = 5;
console.log(num.double());  // 10

// Why it's dangerous:
// 1. Can conflict with future JavaScript features
// 2. Can break libraries that loop through properties
// 3. Hard to debug when methods appear "magically"

// Better approach: Create utility functions
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));  // 'olleh'`}
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
                <li>• Add methods to <strong>your</strong> constructor prototypes</li>
                <li>• Use <strong>hasOwnProperty()</strong> to check ownership</li>
                <li>• Understand the prototype chain</li>
                <li>• Use <strong>Object.getPrototypeOf()</strong></li>
                <li>• Share methods via prototype for efficiency</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't modify built-in prototypes (Array, Object, String)</li>
                <li>• Don't use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">__proto__</code> directly (deprecated)</li>
                <li>• Don't confuse prototype with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">__proto__</code></li>
                <li>• Don't add properties to prototype (use constructor)</li>
                <li>• Don't forget prototypes are shared</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Key Concepts</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>Constructor.prototype</strong> - Where you add shared methods</div>
              <div><strong>instance.__proto__</strong> - Links to constructor's prototype</div>
              <div><strong>Object.getPrototypeOf(obj)</strong> - Modern way to access prototype</div>
              <div><strong>Prototype chain</strong> - obj → Constructor.prototype → Object.prototype → null</div>
              <div><strong>hasOwnProperty()</strong> - Check if property is own (not inherited)</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern JavaScript</AlertTitle>
            <AlertDescription className="text-base">
              ES6 Classes use prototypes under the hood! Understanding prototypes helps you understand how classes really work in JavaScript.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
