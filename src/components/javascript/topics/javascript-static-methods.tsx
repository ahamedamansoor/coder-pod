'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Settings,
  Sparkles,
  Code2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  AlertCircle,
  Zap,
  Box,
  Globe,
  Lock,
  Users
} from 'lucide-react';

interface JavaScriptStaticMethodsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

export default function JavaScriptStaticMethods({ onOpenWebPlayground }: JavaScriptStaticMethodsProps) {
  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Static Methods Demo</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      padding: 48px 32px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      width: 90%;
    }
    h1 {
      color: #667eea;
      margin: 0 0 16px 0;
      font-size: 32px;
      font-weight: 700;
    }
    p {
      color: #64748b;
      margin: 0 0 24px 0;
      font-size: 18px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚙️ Static Methods Demo</h1>
    <p>Open the browser console to see static methods in action!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J (Mac) / Ctrl+Shift+J (Windows)</div>
  </div>
  <script>
    console.log('=== Static Methods Demo ===\\n');

    // 1. Basic Static Method
    class MathHelper {
      static add(a, b) {
        return a + b;
      }
      
      static multiply(a, b) {
        return a * b;
      }
    }

    console.log('1. Basic Static Methods:');
    console.log('MathHelper.add(5, 3) =', MathHelper.add(5, 3));
    console.log('MathHelper.multiply(4, 7) =', MathHelper.multiply(4, 7));
    console.log('');

    // 2. Factory Pattern
    class User {
      constructor(name, role) {
        this.name = name;
        this.role = role;
      }
      
      static createAdmin(name) {
        return new User(name, 'admin');
      }
      
      static createGuest(name) {
        return new User(name, 'guest');
      }
      
      describe() {
        return \`\${this.name} is a \${this.role}\`;
      }
    }

    console.log('2. Factory Methods:');
    const admin = User.createAdmin('Alice');
    const guest = User.createGuest('Bob');
    console.log(admin.describe());
    console.log(guest.describe());
    console.log('');

    // 3. Static Properties (ES2022)
    class Config {
      static appName = 'MyApp';
      static version = '1.0.0';
      static maxUsers = 100;
      
      static getInfo() {
        return \`\${this.appName} v\${this.version} (Max: \${this.maxUsers})\`;
      }
    }

    console.log('3. Static Properties:');
    console.log('Config.appName =', Config.appName);
    console.log('Config.getInfo() =', Config.getInfo());
    console.log('');

    // 4. Static vs Instance
    class Counter {
      static globalCount = 0;
      
      constructor() {
        this.instanceCount = 0;
      }
      
      static incrementGlobal() {
        Counter.globalCount++;
      }
      
      incrementInstance() {
        this.instanceCount++;
      }
    }

    console.log('4. Static vs Instance:');
    Counter.incrementGlobal();
    Counter.incrementGlobal();
    console.log('Counter.globalCount =', Counter.globalCount);

    const c1 = new Counter();
    c1.incrementInstance();
    c1.incrementInstance();
    console.log('c1.instanceCount =', c1.instanceCount);
    console.log('');

    // 5. Utility Class
    class StringUtils {
      static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      
      static reverse(str) {
        return str.split('').reverse().join('');
      }
      
      static truncate(str, length) {
        return str.length > length ? str.slice(0, length) + '...' : str;
      }
    }

    console.log('5. Utility Class:');
    console.log('capitalize("hello") =', StringUtils.capitalize('hello'));
    console.log('reverse("world") =', StringUtils.reverse('world'));
    console.log('truncate("long text", 4) =', StringUtils.truncate('long text', 4));
    
    console.log('\\n=== Check console for all results! ===');
  </script>
</body>
</html>`;

  const playgroundCss = '';
  const playgroundJs = '';

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Settings}
        category="JavaScript · Object-Oriented"
        title="Static Methods & Properties"
        description="Master class-level methods, static properties, factory patterns, utility classes, and ES2022 static features for organized and reusable code."
        colorTheme="blue"
      />

      {/* What are Static Methods */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Static Methods?
          </CardTitle>
          <CardDescription className="text-base">
            Static methods belong to the class itself, not to instances. Call them directly on the class.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of static methods like <strong>class-level utilities</strong>. You don't need an instance to use them—they're always available on the class.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Class-Level</h4>
              </div>
              <p className="text-xs text-muted-foreground">Belong to the class, not instances</p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">ClassName.method()</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">No Instance Needed</h4>
              </div>
              <p className="text-xs text-muted-foreground">Call without creating an object</p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">No new required</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Box className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Utility Functions</h4>
              </div>
              <p className="text-xs text-muted-foreground">Perfect for helpers and factories</p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Reusable Logic</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Difference</AlertTitle>
            <AlertDescription>
              <strong>Static:</strong> <code className="font-mono text-xs">ClassName.method()</code> - No instance needed<br />
              <strong>Instance:</strong> <code className="font-mono text-xs">obj.method()</code> - Requires new ClassName()
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Defining Static Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Defining Static Methods
          </CardTitle>
          <CardDescription className="text-base">
            Use the static keyword before the method name inside a class.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Static Method</h4>
              <p className="text-xs text-muted-foreground">
                Define with static keyword
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Calculator {
  static add(a, b) {
    return a + b;
  }
  
  static subtract(a, b) {
    return a - b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

// Call directly on the class
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));
console.log(Calculator.multiply(10, 5));`}
              </pre>
              <SnippetOutput lines={['Calculator.add(10, 5) -> 15', 'Calculator.subtract(10, 5) -> 5', 'Calculator.multiply(10, 5) -> 50', 'No instance needed!']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Multiple Static Methods</h4>
              <p className="text-xs text-muted-foreground">
                Group related utilities in one class
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class StringHelper {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static reverse(str) {
    return str.split('').reverse().join('');
  }
  
  static isEmpty(str) {
    return str.trim().length === 0;
  }
}

console.log(StringHelper.capitalize('hello'));
console.log(StringHelper.reverse('world'));
console.log(StringHelper.isEmpty('   '));`}
              </pre>
              <SnippetOutput lines={['capitalize("hello") -> "Hello"', 'reverse("world") -> "dlrow"', 'isEmpty("   ") -> true', 'Utility class pattern']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Accessing this in Static</h4>
              <p className="text-xs text-muted-foreground">
                this refers to the class itself
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Database {
  static connection = null;
  
  static connect() {
    this.connection = 'Connected';
    return this.connection;
  }
  
  static disconnect() {
    this.connection = null;
    return 'Disconnected';
  }
  
  static getStatus() {
    return this.connection || 'Not connected';
  }
}

Database.connect();
console.log(Database.getStatus());

Database.disconnect();
console.log(Database.getStatus());`}
              </pre>
              <SnippetOutput lines={['After connect: "Connected"', 'After disconnect: "Not connected"', 'this = class in static methods']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Cannot Call on Instances</h4>
              <p className="text-xs text-muted-foreground">
                Static methods are not available on instances
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class MathUtils {
  static square(n) {
    return n * n;
  }
}

// ✅ Works - call on class
console.log(MathUtils.square(5));

// ❌ Error - cannot call on instance
const utils = new MathUtils();
try {
  console.log(utils.square(5));
} catch (e) {
  console.log('Error: utils.square is not a function');
}

// Static methods don't exist on instances
console.log(typeof utils.square);`}
              </pre>
              <SnippetOutput lines={['MathUtils.square(5) -> 25', 'utils.square(5) -> Error!', 'typeof utils.square -> "undefined"', 'Class-only methods']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Static vs Instance Methods */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Users className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Static vs Instance Methods
          </CardTitle>
          <CardDescription className="text-base">
            Understanding when to use static vs instance methods.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Static Methods
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class User {
  static totalUsers = 0;
  
  // Static - class-level counter
  static incrementTotal() {
    this.totalUsers++;
  }
  
  // Static - utility
  static validateEmail(email) {
    return email.includes('@');
  }
}

// Call on class
User.incrementTotal();
User.incrementTotal();
console.log(User.totalUsers);

console.log(User.validateEmail('test@example.com'));`}
              </pre>
              <SnippetOutput lines={['User.totalUsers -> 2', 'validateEmail(...) -> true', 'Shared across all users', 'No instance needed']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Instance Methods
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  // Instance - works with specific user data
  greet() {
    return 'Hello, ' + this.name;
  }
  
  // Instance - modifies this user
  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

// Need instance
const user = new User('Alice', 'alice@test.com');
console.log(user.greet());

user.updateEmail('alice@new.com');
console.log(user.email);`}
              </pre>
              <SnippetOutput lines={['user.greet() -> "Hello, Alice"', 'user.email -> "alice@new.com"', 'Specific to each instance', 'Requires new User()']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Mixing Both
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Product {
  static count = 0;
  
  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.count++;
  }
  
  // Static - class-level info
  static getTotalProducts() {
    return Product.count;
  }
  
  // Instance - specific product
  getInfo() {
    return this.name + ': $' + this.price;
  }
}

const p1 = new Product('Laptop', 999);
const p2 = new Product('Mouse', 25);

console.log(Product.getTotalProducts());
console.log(p1.getInfo());
console.log(p2.getInfo());`}
              </pre>
              <SnippetOutput lines={['getTotalProducts() -> 2', 'p1.getInfo() -> "Laptop: $999"', 'p2.getInfo() -> "Mouse: $25"', 'Best of both worlds!']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Common Mistake
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  // Instance method accessing instance data
  drive() {
    return this.brand + ' is driving';
  }
  
  // ❌ Static cannot access instance properties
  static staticDrive() {
    // 'this' refers to class, not instance
    // this.brand is undefined
    return this.brand + ' is driving';
  }
}

const car = new Car('Toyota');
console.log(car.drive());
console.log(Car.staticDrive());`}
              </pre>
              <SnippetOutput lines={['car.drive() -> "Toyota is driving" ✅', 'staticDrive() -> "undefined is driving" ❌', 'Static cannot access instance data!', 'Use instance methods for that']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Static Properties (ES2022) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lock className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Static Properties (ES2022)
          </CardTitle>
          <CardDescription className="text-base">
            Class-level properties that are shared across all instances.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>ES2022 Feature</AlertTitle>
            <AlertDescription>
              Static properties (fields) were added in ES2022. They work just like instance properties but at the class level.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Static Properties</h4>
              <p className="text-xs text-muted-foreground">
                Define properties directly on the class
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Config {
  static appName = 'MyApp';
  static version = '2.0.0';
  static apiUrl = 'https://api.example.com';
  static maxRetries = 3;
  
  static getFullInfo() {
    return \`\${this.appName} v\${this.version}\`;
  }
}

console.log(Config.appName);
console.log(Config.version);
console.log(Config.apiUrl);
console.log(Config.getFullInfo());

// Modify static property
Config.maxRetries = 5;
console.log(Config.maxRetries);`}
              </pre>
              <SnippetOutput lines={['Config.appName -> "MyApp"', 'Config.version -> "2.0.0"', 'getFullInfo() -> "MyApp v2.0.0"', 'maxRetries -> 5 (modified)']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Static Counter Pattern</h4>
              <p className="text-xs text-muted-foreground">
                Track instances with static property
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Animal {
  static count = 0;
  static types = [];
  
  constructor(name, type) {
    this.name = name;
    this.type = type;
    
    Animal.count++;
    
    if (!Animal.types.includes(type)) {
      Animal.types.push(type);
    }
  }
  
  static getStats() {
    return \`Total: \${this.count}, Types: \${this.types.join(', ')}\`;
  }
}

new Animal('Dog', 'mammal');
new Animal('Cat', 'mammal');
new Animal('Eagle', 'bird');

console.log(Animal.count);
console.log(Animal.types);
console.log(Animal.getStats());`}
              </pre>
              <SnippetOutput lines={['Animal.count -> 3', 'Animal.types -> ["mammal", "bird"]', 'getStats() -> "Total: 3, Types: mammal, bird"', 'Tracking all instances']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Private Static Properties</h4>
              <p className="text-xs text-muted-foreground">
                Use # for private static fields (ES2022)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class BankAccount {
  static #nextId = 1000;
  static #accounts = [];
  
  constructor(owner) {
    this.id = BankAccount.#nextId++;
    this.owner = owner;
    BankAccount.#accounts.push(this);
  }
  
  static getTotalAccounts() {
    return BankAccount.#accounts.length;
  }
  
  static getNextId() {
    return BankAccount.#nextId;
  }
}

const acc1 = new BankAccount('Alice');
const acc2 = new BankAccount('Bob');

console.log(acc1.id);
console.log(acc2.id);
console.log(BankAccount.getTotalAccounts());
console.log(BankAccount.getNextId());

// console.log(BankAccount.#nextId); // ❌ Error: private`}
              </pre>
              <SnippetOutput lines={['acc1.id -> 1000', 'acc2.id -> 1001', 'getTotalAccounts() -> 2', 'getNextId() -> 1002', 'Private fields protected!']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Static Initialization</h4>
              <p className="text-xs text-muted-foreground">
                Initialize with complex logic
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Theme {
  static colors = {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981'
  };
  
  static defaultTheme = 'light';
  
  static supportedThemes = ['light', 'dark', 'auto'];
  
  static isValidTheme(theme) {
    return this.supportedThemes.includes(theme);
  }
  
  static getColor(name) {
    return this.colors[name] || '#000000';
  }
}

console.log(Theme.colors.primary);
console.log(Theme.isValidTheme('dark'));
console.log(Theme.isValidTheme('custom'));
console.log(Theme.getColor('success'));`}
              </pre>
              <SnippetOutput lines={['colors.primary -> "#3b82f6"', 'isValidTheme("dark") -> true', 'isValidTheme("custom") -> false', 'getColor("success") -> "#10b981"']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical static method patterns used in production code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Factory Pattern</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.createdAt = new Date();
  }
  
  // Factory methods for different user types
  static createAdmin(name, email) {
    return new User(name, email, 'admin');
  }
  
  static createModerator(name, email) {
    return new User(name, email, 'moderator');
  }
  
  static createGuest() {
    return new User('Guest', 'guest@temp.com', 'guest');
  }
  
  getRole() {
    return this.role;
  }
}

const admin = User.createAdmin('Alice', 'alice@app.com');
const guest = User.createGuest();

console.log(admin.getRole());
console.log(guest.getRole());`}
              </pre>
              <SnippetOutput lines={['admin.getRole() -> "admin"', 'guest.getRole() -> "guest"', 'Clean object creation', 'Descriptive factory methods']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Utility Class</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class DateUtils {
  static formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  static getDaysBetween(date1, date2) {
    const diff = Math.abs(date2 - date1);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
  
  static isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}

const today = new Date('2024-01-15');
console.log(DateUtils.formatDate(today));
console.log(DateUtils.isWeekend(today));

const future = DateUtils.addDays(today, 7);
console.log(DateUtils.getDaysBetween(today, future));`}
              </pre>
              <SnippetOutput lines={['formatDate() -> "January 15, 2024"', 'isWeekend() -> false', 'getDaysBetween() -> 7', 'Reusable date utilities']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Validation Class</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Validator {
  static isEmail(str) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(str);
  }
  
  static isPhone(str) {
    const regex = /^\\d{10}$/;
    return regex.test(str.replace(/\\D/g, ''));
  }
  
  static isStrongPassword(str) {
    return str.length >= 8 &&
           /[A-Z]/.test(str) &&
           /[a-z]/.test(str) &&
           /[0-9]/.test(str);
  }
  
  static isURL(str) {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  }
}

console.log(Validator.isEmail('test@example.com'));
console.log(Validator.isPhone('1234567890'));
console.log(Validator.isStrongPassword('Pass123'));
console.log(Validator.isURL('https://example.com'));`}
              </pre>
              <SnippetOutput lines={['isEmail(...) -> true', 'isPhone(...) -> true', 'isStrongPassword(...) -> true', 'isURL(...) -> true', 'Centralized validation']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Singleton Pattern</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Logger {
  static #instance = null;
  
  constructor() {
    if (Logger.#instance) {
      return Logger.#instance;
    }
    
    this.logs = [];
    Logger.#instance = this;
  }
  
  static getInstance() {
    if (!Logger.#instance) {
      Logger.#instance = new Logger();
    }
    return Logger.#instance;
  }
  
  log(message) {
    this.logs.push({ message, time: new Date() });
  }
  
  getLogs() {
    return this.logs;
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('First message');
logger2.log('Second message');

console.log(logger1 === logger2);
console.log(logger1.getLogs().length);`}
              </pre>
              <SnippetOutput lines={['logger1 === logger2 -> true', 'getLogs().length -> 2', 'Single shared instance', 'Singleton pattern with static']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use static for utility functions</li>
              <li>✅ Use static for factory methods</li>
              <li>✅ Use static for configuration/constants</li>
              <li>✅ Use static for class-level counters</li>
              <li>✅ Use descriptive method names</li>
              <li>✅ Keep static methods pure when possible</li>
              <li>✅ Use private static (#) for internal data</li>
              <li>✅ Document static method purpose</li>
            </ul>
          </div>
          
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Don't try to access instance properties in static</li>
              <li>❌ Don't call instance methods from static</li>
              <li>❌ Don't overuse static for everything</li>
              <li>❌ Don't make stateful utilities</li>
              <li>❌ Don't create overly complex static methods</li>
              <li>❌ Don't use static when instance makes more sense</li>
              <li>❌ Don't forget about testability</li>
              <li>❌ Don't ignore memory implications</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Interactive Playground
          </CardTitle>
          <CardDescription className="text-base">
            Try static methods live - factory patterns, utilities, and static properties!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Interactive Demo
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
