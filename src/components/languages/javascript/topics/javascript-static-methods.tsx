'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Settings,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Users,
  Calculator,
  Globe,
} from 'lucide-react';

export default function JavaScriptStaticMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="JavaScript Fundamentals"
        title="Static Methods"
        description="Class-level utility methods that don't need instances"
        colorTheme="yellow"
      />

      {/* What are Static Methods */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Static Methods?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Static methods belong to the <strong className="text-yellow-700 dark:text-yellow-400">class itself</strong>, not to instances. They're like utility functions that live inside a class - call them directly on the class, no instance needed!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Globe className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Toolbox Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Think of static methods as tools in a toolbox (the class) that you can use without taking out the tools. You don't need to create an instance - just call the method on the class itself!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Static Method */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating Static Methods</CardTitle>
              <CardDescription>Use static keyword for class-level methods</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Instance vs Static</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                  <h5 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Instance Method</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 mb-3">
{`class Calculator {
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 3);  // 8`}</pre>
                  <p className="text-xs text-gray-500">Need to create instance first</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">Static Method ✅</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 mb-3">
{`class Calculator {
  static add(a, b) {
    return a + b;
  }
}

Calculator.add(5, 3);  // 8`}</pre>
                  <p className="text-xs text-gray-500">Call directly on class!</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Static Method"
        description="Call methods without creating instances"
        code={`class MathHelper {
  // Static method - called on class
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static square(n) {
    return n * n;
  }
}

// Call directly on class - no instance needed!
console.log(MathHelper.add(5, 3));       // 8
console.log(MathHelper.multiply(4, 2));  // 8
console.log(MathHelper.square(5));       // 25

// You CAN'T call on instance
const helper = new MathHelper();
// helper.add(5, 3);  // Error! Static methods aren't on instances`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* When to Use Static Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>When to Use Static Methods</CardTitle>
              <CardDescription>Perfect for utility functions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Use Cases</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">✓ Utility Functions</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Math operations, string formatting, data conversion
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">✓ Factory Methods</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create instances in specific ways
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">✓ Validation</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Check data before creating instances
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">✓ Configuration</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Class-level settings and constants
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Static Methods"
        description="Common use cases"
        code={`// Utility functions
class StringHelper {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static truncate(str, length) {
    return str.length > length ? str.slice(0, length) + '...' : str;
  }
  
  static slugify(str) {
    return str.toLowerCase().replace(/\\s+/g, '-');
  }
}

console.log(StringHelper.capitalize('hello'));  // 'Hello'
console.log(StringHelper.truncate('Long text here', 8));  // 'Long tex...'
console.log(StringHelper.slugify('My Blog Post'));  // 'my-blog-post'

// Validation
class User {
  static isValidEmail(email) {
    return email.includes('@') && email.includes('.');
  }
  
  static isStrongPassword(password) {
    return password.length >= 8 && /\\d/.test(password);
  }
}

console.log(User.isValidEmail('test@example.com'));  // true
console.log(User.isStrongPassword('pass'));  // false
console.log(User.isStrongPassword('pass1234'));  // true

// Factory methods
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  static fromHex(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return new Color(r, g, b);
  }
  
  static red() {
    return new Color(255, 0, 0);
  }
  
  static blue() {
    return new Color(0, 0, 255);
  }
}

const color1 = Color.fromHex('#FF5733');
const color2 = Color.red();
console.log(color2.r);  // 255`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Built-in Static Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Calculator className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Built-in Static Methods</CardTitle>
              <CardDescription>JavaScript has many built-in static methods</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Common Built-in Static Methods</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Math.* methods</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`Math.round(4.7);      // 5
Math.floor(4.7);      // 4
Math.random();        // 0.123...
Math.max(1, 5, 3);    // 5`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Object.* methods</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`Object.keys({a: 1, b: 2});     // ['a', 'b']
Object.values({a: 1, b: 2});   // [1, 2]
Object.entries({a: 1, b: 2});  // [['a',1],['b',2]]`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Array.* methods</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`Array.isArray([1, 2]);     // true
Array.from('hello');        // ['h','e','l','l','o']
Array.of(1, 2, 3);          // [1, 2, 3]`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Using Built-in Static Methods"
        description="JavaScript's native static methods"
        code={`// Math static methods
console.log(Math.round(4.7));       // 5
console.log(Math.floor(4.3));       // 4
console.log(Math.ceil(4.1));        // 5
console.log(Math.abs(-5));          // 5
console.log(Math.max(1, 5, 3, 9));  // 9
console.log(Math.min(1, 5, 3, 9));  // 1

// Random number between 1 and 10
const random = Math.floor(Math.random() * 10) + 1;
console.log(random);  // 1-10

// Object static methods
const user = { name: 'Alice', age: 25 };

console.log(Object.keys(user));     // ['name', 'age']
console.log(Object.values(user));   // ['Alice', 25]
console.log(Object.entries(user));  // [['name','Alice'],['age',25]]

// Check if property exists
console.log(Object.hasOwn(user, 'name'));  // true

// Array static methods
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray('hello'));    // false

const arr = Array.from('hello');
console.log(arr);  // ['h', 'e', 'l', 'l', 'o']

const nums = Array.of(1, 2, 3);
console.log(nums);  // [1, 2, 3]

// Number static methods
console.log(Number.isInteger(5));      // true
console.log(Number.isInteger(5.5));    // false
console.log(Number.parseInt('123'));   // 123
console.log(Number.parseFloat('3.14'));  // 3.14`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Static vs Instance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Static vs Instance Methods</CardTitle>
              <CardDescription>Understanding the difference</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Key Differences</h4>
            </div>
            <div className="p-6">
              <div className="grid gap-4">
                <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <h5 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Instance Methods</h5>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Called on instances (objects)</li>
                    <li>• Can access instance data with <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">this</code></li>
                    <li>• Each instance has its own copy</li>
                    <li>• Use for object-specific behavior</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded p-4 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-2 text-green-700 dark:text-green-300">Static Methods</h5>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Called on class itself</li>
                    <li>• Can't access instance data</li>
                    <li>• Shared across all instances</li>
                    <li>• Use for utility/helper functions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Static vs Instance Comparison"
        description="Side-by-side comparison"
        code={`class Circle {
  constructor(radius) {
    this.radius = radius;  // Instance property
  }
  
  // Instance method - needs instance, uses 'this'
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  
  // Static method - doesn't need instance
  static compareAreas(circle1, circle2) {
    return circle1.getArea() - circle2.getArea();
  }
  
  // Static utility - no instance needed
  static calculateArea(radius) {
    return Math.PI * radius ** 2;
  }
}

// Create instances
const circle1 = new Circle(5);
const circle2 = new Circle(10);

// Call instance method on instance
console.log(circle1.getArea());  // 78.54

// Call static method on class
console.log(Circle.compareAreas(circle1, circle2));  // negative number

// Static method - no instance needed
console.log(Circle.calculateArea(7));  // 153.94

// This WON'T work:
// circle1.compareAreas(circle1, circle2);  // Error!
// Circle.getArea();  // Error!

// Real-world example: User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  // Instance method - uses 'this'
  getDisplayName() {
    return this.name.toUpperCase();
  }
  
  // Static method - validation utility
  static isValidEmail(email) {
    return email.includes('@');
  }
  
  // Static factory method
  static createGuest() {
    return new User('Guest', 'guest@example.com');
  }
}

const user = new User('Alice', 'alice@example.com');
console.log(user.getDisplayName());  // 'ALICE'

// Static methods on class
console.log(User.isValidEmail('test@test.com'));  // true
const guest = User.createGuest();
console.log(guest.name);  // 'Guest'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Advanced Example */}
      <CodeSnippet
        title="Complete Real-World Example"
        description="Database connection class with static methods"
        code={`class Database {
  static #connection = null;  // Static private field
  static #config = {
    host: 'localhost',
    port: 5432
  };
  
  // Static method - get or create connection (Singleton pattern)
  static connect() {
    if (!this.#connection) {
      this.#connection = {
        host: this.#config.host,
        port: this.#config.port,
        status: 'connected'
      };
      console.log('Database connected');
    }
    return this.#connection;
  }
  
  // Static method - close connection
  static disconnect() {
    if (this.#connection) {
      this.#connection = null;
      console.log('Database disconnected');
    }
  }
  
  // Static method - get status
  static getStatus() {
    return this.#connection ? 'Connected' : 'Disconnected';
  }
  
  // Static method - configure before connecting
  static configure(options) {
    this.#config = { ...this.#config, ...options };
  }
}

// Use static methods
Database.configure({ host: 'prod-db.com', port: 3306 });
Database.connect();
console.log(Database.getStatus());  // 'Connected'
Database.disconnect();

// Another example: ID Generator
class IDGenerator {
  static #counter = 0;
  static #prefix = 'ID';
  
  static generate() {
    return \`\${this.#prefix}-\${++this.#counter}\`;
  }
  
  static setPrefix(prefix) {
    this.#prefix = prefix;
  }
  
  static reset() {
    this.#counter = 0;
  }
  
  static getCount() {
    return this.#counter;
  }
}

console.log(IDGenerator.generate());  // 'ID-1'
console.log(IDGenerator.generate());  // 'ID-2'
console.log(IDGenerator.generate());  // 'ID-3'
console.log(IDGenerator.getCount());  // 3

IDGenerator.setPrefix('USER');
console.log(IDGenerator.generate());  // 'USER-4'

IDGenerator.reset();
console.log(IDGenerator.generate());  // 'USER-1'`}
        language="javascript"
        colorTheme="yellow"
        icon={Calculator}
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
                <li>• Use <strong>static</strong> for utility functions</li>
                <li>• Call on class, not instances</li>
                <li>• Use for validation and helpers</li>
                <li>• Use for factory methods</li>
                <li>• Use for configuration</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't call static methods on instances</li>
                <li>• Don't use <strong>this</strong> for instance data in static methods</li>
                <li>• Don't make everything static</li>
                <li>• Don't confuse with instance methods</li>
                <li>• Don't use for object-specific behavior</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">When to Use Static Methods</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div><strong>✓ Utility functions:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">StringHelper.capitalize()</code></div>
              <div><strong>✓ Validation:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">User.isValidEmail()</code></div>
              <div><strong>✓ Factory methods:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">Color.fromHex()</code></div>
              <div><strong>✓ Configuration:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">Database.configure()</code></div>
              <div><strong>✓ Counters/State:</strong> <code className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs">IDGenerator.generate()</code></div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Remember</AlertTitle>
            <AlertDescription className="text-base">
              Static methods are called on the <strong>class</strong> (e.g., <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">Math.round()</code>), instance methods are called on <strong>objects</strong> (e.g., <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">array.push()</code>)!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
