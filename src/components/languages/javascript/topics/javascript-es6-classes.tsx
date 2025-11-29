'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Layers,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  AlertCircle,
  Lock,
  Zap,
  GitBranch,
} from 'lucide-react';

interface JavaScriptES6ClassesProps {
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

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ES6 Classes Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
      max-width: 600px; 
    }
    h1 { 
      color: #667eea; 
      margin-bottom: 16px; 
      font-size: 32px; 
    }
    p { 
      color: #64748b; 
      font-size: 18px; 
    }
    .console-hint { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      margin-top: 24px; 
      font-family: monospace; 
      font-size: 14px; 
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ES6 Classes</h1>
    <p>Open the browser console (F12) to see class examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./classes-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== ES6 Classes Demo ===\\n');

// 1. Basic Class
console.log('1. BASIC CLASS:');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return 'Hello, I am ' + this.name;
  }
}

const person = new Person('Alice', 25);
console.log(person.greet());
console.log(person instanceof Person);

// 2. Inheritance
console.log('\\n2. INHERITANCE:');
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a sound';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return this.name + ' barks!';
  }
}

const dog = new Dog('Max', 'Labrador');
console.log(dog.speak());
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);

// 3. Static Methods
console.log('\\n3. STATIC METHODS:');
class MathHelper {
  static add(a, b) {
    return a + b;
  }
  
  static PI = 3.14159;
}

console.log(MathHelper.add(5, 3));
console.log(MathHelper.PI);

// 4. Getters and Setters
console.log('\\n4. GETTERS & SETTERS:');
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  get radius() {
    return this._radius;
  }
  
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
  
  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);
console.log('Radius:', circle.radius);
console.log('Area:', circle.area.toFixed(2));

console.log('\\nAll class examples demonstrated!');
`;

export default function JavaScriptES6Classes({ onOpenWebPlayground }: JavaScriptES6ClassesProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript · Object-Oriented"
        title="ES6 Classes"
        description="Master modern JavaScript classes - clean syntax for OOP, inheritance with extends, static methods, private fields, and all the latest ES2022+ features."
        colorTheme="blue"
      />

      {/* What are ES6 Classes? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are ES6 Classes?
          </CardTitle>
          <CardDescription className="text-base">
            Classes are syntactic sugar over JavaScript's prototype-based inheritance - a cleaner, more intuitive way to create objects and handle inheritance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of classes like a <strong>blueprint</strong> or <strong>template</strong> for creating objects. ES6 introduced the <code className="font-mono text-xs">class</code> keyword to make object-oriented programming in JavaScript feel more familiar to developers from class-based languages. Under the hood, classes still use prototypes - they're just a much cleaner syntax!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Clean Syntax</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                More readable than constructor functions
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">ES6+</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Easy Inheritance</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Simple extends keyword for inheritance
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Intuitive</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Private Fields</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                True private properties with # syntax
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">ES2022</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Syntactic Sugar Over Prototypes</AlertTitle>
            <AlertDescription>
              ES6 classes don't introduce a new object model - they're just a more elegant syntax for working with prototypes. Everything you can do with classes, you can do with constructor functions and prototypes!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Class Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Class Syntax
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the fundamental structure of a JavaScript class.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Simple Class Declaration</h4>
              <p className="text-xs text-muted-foreground">
                Basic class with constructor and methods
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Person {
  // Constructor - called when creating instance
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method - automatically on prototype
  greet() {
    return 'Hi, I am ' + this.name;
  }
  
  getAge() {
    return this.age;
  }
}

const alice = new Person('Alice', 25);
console.log(alice.greet());
console.log(alice.getAge());`}
              </pre>
              <SnippetOutput lines={['alice.greet() -> "Hi, I am Alice"', 'alice.getAge() -> 25', 'Clean, readable syntax!']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Class Expression</h4>
              <p className="text-xs text-muted-foreground">
                Classes can be assigned to variables
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Named class expression
const Person = class PersonClass {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return 'Hello ' + this.name;
  }
};

// Anonymous class expression
const Animal = class {
  constructor(type) {
    this.type = type;
  }
};

const person = new Person('Bob');
console.log(person.greet());`}
              </pre>
              <SnippetOutput lines={['person.greet() -> "Hello Bob"', 'Class expressions work like function expressions', 'Can be named or anonymous']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Must Use new Keyword</h4>
              <p className="text-xs text-muted-foreground">
                Classes enforce using new
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

// Correct way
const car1 = new Car('Toyota');
console.log(car1.brand);

// Error! Classes require 'new'
try {
  const car2 = Car('Honda');
} catch (error) {
  console.log('Error:', error.message);
}`}
              </pre>
              <SnippetOutput lines={['car1.brand -> "Toyota"', 'Error: Class constructor Car cannot be invoked without new', 'Safer than constructor functions!']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Class vs Constructor Function</h4>
              <p className="text-xs text-muted-foreground">
                Same functionality, different syntax
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Old way - Constructor Function
function PersonOld(name) {
  this.name = name;
}
PersonOld.prototype.greet = function() {
  return 'Hi ' + this.name;
};

// New way - ES6 Class
class PersonNew {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return 'Hi ' + this.name;
  }
}

// Both work the same!
const p1 = new PersonOld('Alice');
const p2 = new PersonNew('Bob');
console.log(p1.greet());
console.log(p2.greet());`}
              </pre>
              <SnippetOutput lines={['p1.greet() -> "Hi Alice"', 'p2.greet() -> "Hi Bob"', 'Classes are cleaner to read', 'Both use prototypes underneath']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Constructor and Methods */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Constructor and Methods
          </CardTitle>
          <CardDescription className="text-base">
            Understanding initialization and behavior in classes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Constructor Method</h4>
              <p className="text-xs text-muted-foreground">
                Special method for initializing instances
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class User {
  constructor(username, email) {
    // Initialize instance properties
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
    this.isActive = true;
    
    console.log('User created:', username);
  }
}

const user = new User('alice', 'alice@email.com');
console.log(user.username);
console.log(user.isActive);`}
              </pre>
              <SnippetOutput lines={['User created: alice', 'user.username -> "alice"', 'user.isActive -> true', 'Constructor runs automatically']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Default Parameters</h4>
              <p className="text-xs text-muted-foreground">
                Provide default values in constructor
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Product {
  constructor(name, price = 0, inStock = true) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
  
  getInfo() {
    return this.name + ' - $' + this.price;
  }
}

const product1 = new Product('Laptop', 999);
const product2 = new Product('Pen');

console.log(product1.getInfo());
console.log(product2.price);
console.log(product2.inStock);`}
              </pre>
              <SnippetOutput lines={['product1.getInfo() -> "Laptop - $999"', 'product2.price -> 0 (default)', 'product2.inStock -> true (default)']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Instance Methods</h4>
              <p className="text-xs text-muted-foreground">
                Methods automatically added to prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Counter {
  constructor(startValue = 0) {
    this.count = startValue;
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
}

const counter = new Counter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
counter.reset();
console.log(counter.count);`}
              </pre>
              <SnippetOutput lines={['increment() -> 6', 'increment() -> 7', 'decrement() -> 6', 'reset() sets to 0', 'All methods on prototype']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Method Chaining</h4>
              <p className="text-xs text-muted-foreground">
                Return this for chainable methods
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Calculator {
  constructor() {
    this.value = 0;
  }
  
  add(num) {
    this.value += num;
    return this; // Enable chaining
  }
  
  multiply(num) {
    this.value *= num;
    return this;
  }
  
  result() {
    return this.value;
  }
}

const calc = new Calculator();
const result = calc.add(5).multiply(2).add(3).result();
console.log(result);`}
              </pre>
              <SnippetOutput lines={['calc.add(5).multiply(2).add(3).result()', '(5 * 2) + 3 = 13', 'result -> 13', 'Fluent interface pattern']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ ES6 classes, inheritance, and modern syntax.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights ES6 class features (basic syntax, inheritance, static methods, and getters/setters) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
