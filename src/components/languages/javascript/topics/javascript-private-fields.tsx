'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Shield,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Lock,
  EyeOff,
  Key,
} from 'lucide-react';

export default function JavaScriptPrivateFields() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript Fundamentals"
        title="Private Fields"
        description="Hide class data with true private fields using # syntax"
        colorTheme="yellow"
      />

      {/* What are Private Fields */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Private Fields?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Private fields are <strong className="text-yellow-700 dark:text-yellow-400">truly hidden</strong> class properties that can't be accessed from outside the class. Use <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">#</code> prefix to make fields private!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Secret Box Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Like a locked box that only the class can open! The <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-xs">#</code> symbol marks fields as private - no one outside can access them, not even subclasses!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Private Fields */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <EyeOff className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating Private Fields</CardTitle>
              <CardDescription>Use # prefix to make fields private</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Public vs Private</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                  <h5 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Public Field</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class User {
  name = 'Alice';  // Public
}

const user = new User();
console.log(user.name);  // 'Alice' ✓
user.name = 'Bob';       // Can change ✓`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">Private Field</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class User {
  #password = 'secret';  // Private
}

const user = new User();
console.log(user.#password);  // Error! ✗
user.#password = 'new';       // Error! ✗`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Private Fields"
        description="Truly hidden data"
        code={`class BankAccount {
  #balance = 0;  // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
    console.log(\`Deposited $\${amount}\`);
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);

// Can use public methods
account.deposit(500);
console.log(account.getBalance());  // 1500

// Cannot access private field directly
console.log(account.#balance);  // SyntaxError!
account.#balance = 9999;        // SyntaxError!

// Field is truly private
console.log(account.balance);   // undefined (not the private field)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Private Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Private Methods</CardTitle>
              <CardDescription>Hidden helper methods inside class</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Internal Helpers</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Methods can also be private - perfect for internal helper functions
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Validator {
  #isValidEmail(email) {  // Private method
    return email.includes('@') && email.includes('.');
  }
  
  validateUser(email) {  // Public method
    if (this.#isValidEmail(email)) {
      return 'Valid email';
    }
    return 'Invalid email';
  }
}

const validator = new Validator();
console.log(validator.validateUser('test@example.com'));  // 'Valid email'

// Cannot call private method
validator.#isValidEmail('test');  // SyntaxError!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Private Methods Examples"
        description="Hidden helper functions"
        code={`class CreditCard {
  #number;
  
  constructor(number) {
    this.#number = number;
  }
  
  // Private method to mask card number
  #maskNumber() {
    const last4 = this.#number.slice(-4);
    return '****-****-****-' + last4;
  }
  
  // Private validation
  #isValidNumber() {
    return this.#number.length === 16;
  }
  
  // Public method uses private methods
  getDisplayNumber() {
    if (!this.#isValidNumber()) {
      return 'Invalid card number';
    }
    return this.#maskNumber();
  }
}

const card = new CreditCard('1234567812345678');
console.log(card.getDisplayNumber());
// '****-****-****-5678'

// Private methods cannot be called
// card.#maskNumber();  // SyntaxError!

// Real-world: Password hashing
class User {
  #password;
  
  constructor(password) {
    this.#password = this.#hashPassword(password);
  }
  
  // Private method
  #hashPassword(password) {
    // Simplified hash (use real hashing in production!)
    return btoa(password);
  }
  
  // Private method
  #verifyHash(password, hash) {
    return this.#hashPassword(password) === hash;
  }
  
  // Public method
  checkPassword(password) {
    return this.#verifyHash(password, this.#password);
  }
}

const user = new User('mySecret123');
console.log(user.checkPassword('wrong'));      // false
console.log(user.checkPassword('mySecret123')); // true

// Cannot access private data or methods
// console.log(user.#password);        // Error!
// user.#hashPassword('test');         // Error!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Getters and Setters with Private Fields */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Key className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Controlled Access with Getters/Setters</CardTitle>
              <CardDescription>Validate and control private field access</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Controlled Exposure</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use getters/setters to provide controlled access to private fields
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Temperature {
  #celsius;
  
  constructor(celsius) {
    this.#celsius = celsius;
  }
  
  get celsius() {
    return this.#celsius;
  }
  
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Below absolute zero!');
    }
    this.#celsius = value;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);  // 25

temp.celsius = 30;  // ✓ Valid
temp.celsius = -300;  // ✗ Error!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Getters/Setters with Private Fields"
        description="Validated access"
        code={`class Person {
  #age;
  #name;
  
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  
  // Getter - read-only access
  get name() {
    return this.#name;
  }
  
  // Getter with validation
  get age() {
    return this.#age;
  }
  
  // Setter with validation
  set age(value) {
    if (value < 0 || value > 150) {
      console.log('Invalid age');
      return;
    }
    this.#age = value;
  }
  
  // Computed property using private field
  get isAdult() {
    return this.#age >= 18;
  }
}

const person = new Person('Alice', 25);

console.log(person.name);    // 'Alice'
console.log(person.age);     // 25
console.log(person.isAdult); // true

person.age = 30;  // ✓ Valid
console.log(person.age);  // 30

person.age = -5;  // ✗ 'Invalid age'
console.log(person.age);  // 30 (unchanged)

// Real-world: Product with price control
class Product {
  #price;
  #discount = 0;
  
  constructor(name, price) {
    this.name = name;  // Public
    this.#price = price;
  }
  
  get price() {
    return this.#price * (1 - this.#discount);
  }
  
  set price(value) {
    if (value < 0) {
      throw new Error('Price cannot be negative');
    }
    this.#price = value;
  }
  
  applyDiscount(percent) {
    if (percent >= 0 && percent <= 100) {
      this.#discount = percent / 100;
    }
  }
  
  get originalPrice() {
    return this.#price;
  }
}

const product = new Product('Laptop', 1000);
console.log(product.price);  // 1000

product.applyDiscount(20);
console.log(product.price);          // 800 (with discount)
console.log(product.originalPrice);  // 1000 (original)

// Cannot access private fields directly
// console.log(product.#price);     // Error!
// console.log(product.#discount);  // Error!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Static Private Fields */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Static Private Fields</CardTitle>
              <CardDescription>Private class-level data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Class-Level Privacy</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Combine <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">static</code> and private for hidden class data
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Database {
  static #connection = null;  // Static private
  static #maxConnections = 5;
  
  static connect() {
    if (!this.#connection) {
      this.#connection = 'Connected';
      console.log('Database connected');
    }
  }
  
  static getStatus() {
    return this.#connection ? 'Connected' : 'Disconnected';
  }
}

Database.connect();
console.log(Database.getStatus());  // 'Connected'

// Cannot access static private fields
// Database.#connection;  // Error!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Static Private Fields Example"
        description="Singleton pattern with privacy"
        code={`class Config {
  static #instance = null;
  static #settings = {};
  
  #id;
  
  constructor() {
    if (Config.#instance) {
      return Config.#instance;
    }
    this.#id = Math.random();
    Config.#instance = this;
  }
  
  static set(key, value) {
    Config.#settings[key] = value;
  }
  
  static get(key) {
    return Config.#settings[key];
  }
  
  static reset() {
    Config.#settings = {};
  }
}

// Set config
Config.set('apiUrl', 'https://api.example.com');
Config.set('timeout', 5000);

console.log(Config.get('apiUrl'));  // 'https://api.example.com'

// Singleton pattern - always same instance
const config1 = new Config();
const config2 = new Config();
console.log(config1 === config2);  // true

// Cannot access private static fields
// console.log(Config.#settings);  // Error!
// console.log(Config.#instance);  // Error!

// Real-world: Counter with private state
class IDGenerator {
  static #counter = 0;
  static #prefix = 'ID';
  
  static generate() {
    return \`\${IDGenerator.#prefix}-\${++IDGenerator.#counter}\`;
  }
  
  static getCount() {
    return IDGenerator.#counter;
  }
  
  static reset() {
    IDGenerator.#counter = 0;
  }
}

console.log(IDGenerator.generate());  // 'ID-1'
console.log(IDGenerator.generate());  // 'ID-2'
console.log(IDGenerator.generate());  // 'ID-3'
console.log(IDGenerator.getCount());  // 3

IDGenerator.reset();
console.log(IDGenerator.generate());  // 'ID-1'`}
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
                <li>• Use <strong>#</strong> for truly private data</li>
                <li>• Hide sensitive data (passwords, keys)</li>
                <li>• Use getters/setters for controlled access</li>
                <li>• Make helper methods private</li>
                <li>• Use for encapsulation and data hiding</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't make everything private (use public when appropriate)</li>
                <li>• Don't forget <strong>#</strong> prefix in class methods</li>
                <li>• Don't use _ convention for truly private data</li>
                <li>• Don't access private fields in child classes (they can't!)</li>
                <li>• Don't forget browser support (ES2022+)</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Privacy Comparison</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
              <div><strong>Public:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">this.field</code> - Accessible everywhere</div>
              <div><strong>Convention "private":</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">this._field</code> - Not enforced, just convention</div>
              <div><strong>True private:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">this.#field</code> - Truly hidden, enforced by language ✓</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Browser Support</AlertTitle>
            <AlertDescription className="text-base">
              Private fields are ES2022+ feature. Check browser compatibility for production use. All modern browsers (2022+) support them!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
