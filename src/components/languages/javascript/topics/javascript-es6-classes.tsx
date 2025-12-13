'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Layers,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Lock,
  Zap,
  Users,
} from 'lucide-react';

export default function JavaScriptES6Classes() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="ES6 Classes"
        description="Modern, cleaner syntax for object-oriented programming"
        colorTheme="yellow"
      />

      {/* What are ES6 Classes */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are ES6 Classes?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                ES6 Classes are <strong className="text-yellow-700 dark:text-yellow-400">modern syntax</strong> for creating constructor functions and prototypes. Same functionality, but cleaner and easier to read!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Syntactic Sugar</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Classes are "syntactic sugar" - they look different but work the same way as constructor functions and prototypes under the hood!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Class */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating a Basic Class</CardTitle>
              <CardDescription>Use class keyword and constructor method</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Old vs New</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                  <h5 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Old Way (Constructor)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log('Hi ' + this.name);
};`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ New Way (Class)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log('Hi ' + this.name);
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Class Example"
        description="Creating and using a class"
        code={`// Define a class
class Person {
  // Constructor runs when you create an instance
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method (automatically added to prototype)
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
  
  getAge() {
    return this.age;
  }
}

// Create instances with 'new'
const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

// Use properties and methods
console.log(alice.name);  // 'Alice'
alice.greet();            // 'Hello, I'm Alice'
console.log(bob.getAge());  // 30

// Check type
console.log(alice instanceof Person);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Constructor Method */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>The constructor() Method</CardTitle>
              <CardDescription>Runs automatically when creating instance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Initialize Properties</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">constructor()</code> method sets up initial properties
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Car {
  constructor(make, model, year) {
    // Set up properties
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = 0;  // Default value
  }
  
  drive(miles) {
    this.mileage += miles;
  }
}

const car = new Car('Toyota', 'Camry', 2020);
console.log(car.make);  // 'Toyota'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Constructor Examples"
        description="Setting up initial state"
        code={`class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = [];  // Empty array
  }
  
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(\`Deposit: $\${amount}\`);
  }
  
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(\`Withdraw: $\${amount}\`);
    }
  }
  
  getBalance() {
    return \`$\${this.balance}\`;
  }
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());  // '$1300'
console.log(account.transactions);
// ['Deposit: $500', 'Withdraw: $200']

// Real-world: User class
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.isActive = true;      // Default value
    this.createdAt = new Date();  // Auto-set timestamp
  }
  
  login() {
    console.log(\`\${this.username} logged in\`);
  }
  
  logout() {
    console.log(\`\${this.username} logged out\`);
  }
}

const user = new User('alice123', 'alice@example.com');
console.log(user.createdAt);  // Current date/time
user.login();  // 'alice123 logged in'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Class Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Class Methods</CardTitle>
              <CardDescription>Functions that work with class data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Instance Methods</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Methods defined in class are automatically added to the prototype (shared by all instances)
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
    return this;  // For chaining
  }
  
  subtract(num) {
    this.result -= num;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

const calc = new Calculator();
calc.add(10).add(5).subtract(3);
console.log(calc.getResult());  // 12`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Class Methods Examples"
        description="Working with instance methods"
        code={`class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Calculate total value
  getTotalValue() {
    return this.price * this.quantity;
  }
  
  // Apply discount
  applyDiscount(percent) {
    this.price = this.price * (1 - percent / 100);
  }
  
  // Restock
  addStock(amount) {
    this.quantity += amount;
  }
  
  // Display info
  getInfo() {
    return \`\${this.name} - $\${this.price} (\${this.quantity} in stock)\`;
  }
}

const laptop = new Product('Laptop', 1000, 5);
console.log(laptop.getInfo());
// 'Laptop - $1000 (5 in stock)'

laptop.applyDiscount(20);
console.log(laptop.getTotalValue());  // 4000 (800 * 5)

laptop.addStock(3);
console.log(laptop.quantity);  // 8

// Real-world: Counter class
class Counter {
  constructor(start = 0) {
    this.count = start;
  }
  
  increment() {
    this.count++;
    return this.count;
  }
  
  decrement() {
    this.count--;
    return this.count;
  }
  
  reset() {
    this.count = 0;
  }
  
  getValue() {
    return this.count;
  }
}

const counter = new Counter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
counter.reset();
console.log(counter.getValue());   // 0`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Static Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Static Methods</CardTitle>
              <CardDescription>Methods that belong to the class, not instances</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Class-Level Methods</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">static</code> keyword for utility methods that don't need instance data
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class MathHelper {
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

// Call on class, not instance
console.log(MathHelper.add(5, 3));       // 8
console.log(MathHelper.multiply(4, 2));  // 8

// Can't call on instance
const helper = new MathHelper();
// helper.add(5, 3);  // Error!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Static Methods Examples"
        description="Utility methods on the class"
        code={`class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  
  // Static method - validates email format
  static isValidEmail(email) {
    return email.includes('@') && email.includes('.');
  }
  
  // Static method - creates admin user
  static createAdmin(username, email) {
    const user = new User(username, email);
    user.isAdmin = true;
    return user;
  }
}

// Use static methods on class
console.log(User.isValidEmail('test@example.com'));  // true
console.log(User.isValidEmail('invalid'));           // false

const admin = User.createAdmin('admin', 'admin@example.com');
console.log(admin.isAdmin);  // true

// Real-world: Date formatter
class DateFormatter {
  static formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  }
  
  static getCurrentDate() {
    return DateFormatter.formatDate(new Date());
  }
}

console.log(DateFormatter.formatDate(new Date()));
// '2024-12-13'

console.log(DateFormatter.getCurrentDate());
// Current date in YYYY-MM-DD format

// Real-world: Temperature converter
class Temperature {
  static celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  static fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
}

console.log(Temperature.celsiusToFahrenheit(0));   // 32
console.log(Temperature.fahrenheitToCelsius(32));  // 0`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Getters and Setters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Getters & Setters</CardTitle>
              <CardDescription>Control how properties are accessed and modified</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Computed Properties</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">get</code> and <code className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">set</code> keywords
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Getter - access like a property
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  
  // Setter - set like a property
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName);  // 'John Doe'

person.fullName = 'Jane Smith';
console.log(person.firstName);  // 'Jane'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Getters & Setters Examples"
        description="Computed and controlled properties"
        code={`class Circle {
  constructor(radius) {
    this._radius = radius;  // _ indicates "private" by convention
  }
  
  // Getter for radius
  get radius() {
    return this._radius;
  }
  
  // Setter with validation
  set radius(value) {
    if (value < 0) {
      console.log('Radius must be positive');
      return;
    }
    this._radius = value;
  }
  
  // Computed property (no setter needed)
  get area() {
    return Math.PI * this._radius ** 2;
  }
  
  get circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.area);  // 78.54...
console.log(circle.circumference);  // 31.41...

circle.radius = 10;
console.log(circle.area);  // 314.15...

circle.radius = -5;  // 'Radius must be positive'

// Real-world: Temperature class
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  
  get celsius() {
    return this._celsius;
  }
  
  set celsius(value) {
    this._celsius = value;
  }
  
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
}

const temp = new Temperature(0);
console.log(temp.fahrenheit);  // 32

temp.fahrenheit = 212;
console.log(temp.celsius);  // 100`}
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
                <li>• Use <strong>class</strong> keyword for modern OOP</li>
                <li>• Define <strong>constructor()</strong> for initialization</li>
                <li>• Use <strong>static</strong> for utility methods</li>
                <li>• Use getters/setters for computed properties</li>
                <li>• Always use <strong>new</strong> to create instances</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't call class without <strong>new</strong></li>
                <li>• Don't use lowercase for class names</li>
                <li>• Don't call static methods on instances</li>
                <li>• Don't forget <strong>constructor()</strong> if you need it</li>
                <li>• Don't use commas between methods</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Class Structure</h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class MyClass {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // Instance method
  instanceMethod() {
    // uses this.property1, etc.
  }
  
  // Static method
  static staticMethod() {
    // utility function
  }
  
  // Getter
  get computedProperty() {
    return this.property1 + this.property2;
  }
  
  // Setter
  set computedProperty(value) {
    // validation and assignment
  }
}`}</pre>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern JavaScript</AlertTitle>
            <AlertDescription className="text-base">
              ES6 Classes are the modern standard for OOP in JavaScript. They're cleaner than constructor functions but work the same way with prototypes under the hood!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
