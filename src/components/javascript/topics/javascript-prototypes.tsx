'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Link as LinkIcon,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  AlertCircle,
  Layers,
  GitBranch,
  Share2,
} from 'lucide-react';

interface JavaScriptPrototypesProps {
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
  <title>Prototypes Demo</title>
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
    <h1>JavaScript Prototypes</h1>
    <p>Open the browser console (F12) to see prototype examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./prototypes-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== JavaScript Prototypes Demo ===\\n');

// 1. Basic Prototype
console.log('1. PROTOTYPE BASICS:');
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return 'Hello, I am ' + this.name;
};

const person1 = new Person('Alice');
console.log(person1.greet());
console.log(person1.__proto__ === Person.prototype);

// 2. Prototype Chain
console.log('\\n2. PROTOTYPE CHAIN:');
const obj = { a: 1 };
console.log(obj.toString());
console.log(obj.hasOwnProperty('a'));
console.log('toString and hasOwnProperty are from Object.prototype');

// 3. Object.create()
console.log('\\n3. OBJECT.CREATE():');
const animal = {
  type: 'Animal',
  describe() {
    return 'I am a ' + this.type;
  }
};

const dog = Object.create(animal);
dog.type = 'Dog';
console.log(dog.describe());
console.log(Object.getPrototypeOf(dog) === animal);

// 4. Checking Prototypes
console.log('\\n4. CHECKING PROTOTYPES:');
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(Person.prototype.isPrototypeOf(person1));

// 5. Prototype Methods
console.log('\\n5. MODERN PROTOTYPE METHODS:');
const parent = { x: 10 };
const child = Object.create(parent);
child.y = 20;

console.log('child.x:', child.x);
console.log('child.y:', child.y);
console.log('child.hasOwnProperty("x"):', child.hasOwnProperty('x'));
console.log('child.hasOwnProperty("y"):', child.hasOwnProperty('y'));

console.log('\\nAll prototype examples demonstrated!');
`;

export default function JavaScriptPrototypes({ onOpenWebPlayground }: JavaScriptPrototypesProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={LinkIcon}
        category="JavaScript · Object-Oriented"
        title="Prototypes"
        description="Master JavaScript's prototype system - the backbone of inheritance, the prototype chain, and how objects share methods and properties."
        colorTheme="blue"
      />

      {/* What are Prototypes? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Prototypes?
          </CardTitle>
          <CardDescription className="text-base">
            Prototypes are the mechanism by which JavaScript objects inherit features from one another.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of prototypes like a <strong>family tree</strong> or <strong>inheritance chain</strong>. Every object in JavaScript has a hidden link to another object called its "prototype". If you try to access a property that doesn't exist on an object, JavaScript automatically looks for it in the object's prototype, then that prototype's prototype, and so on. This is the foundation of JavaScript's inheritance system!
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <LinkIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Hidden Link</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Every object has a secret connection to its prototype
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">[[Prototype]]</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Prototype Chain</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Objects can inherit from other objects in a chain
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Inheritance</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Shared Methods</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Methods can be shared across all instances
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Efficient</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              Prototypes enable JavaScript's <strong>prototypal inheritance</strong> - a different model than class-based inheritance in languages like Java. Objects inherit directly from other objects, not from classes (though ES6 classes are syntactic sugar over prototypes).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* prototype vs __proto__ */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            prototype vs __proto__ - Understanding the Difference
          </CardTitle>
          <CardDescription className="text-base">
            Two different but related concepts that often confuse developers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              The Confusion Explained
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>prototype:</strong> Property on <strong>constructor functions</strong> - it's the object that will become the <code className="font-mono text-xs">__proto__</code> of instances</li>
              <li><strong>__proto__:</strong> Property on <strong>object instances</strong> - it references the prototype object</li>
              <li>Constructor's <code className="font-mono text-xs">.prototype</code> becomes instance's <code className="font-mono text-xs">__proto__</code></li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">prototype (on Functions)</h4>
              <p className="text-xs text-muted-foreground">
                Only functions have .prototype property
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Animal(name) {
  this.name = name;
}

// prototype is on the constructor
console.log(Animal.prototype);

// Add method to prototype
Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

const dog = new Animal('Dog');
console.log(dog.speak());`}
              </pre>
              <SnippetOutput lines={['Animal.prototype -> { constructor: Animal }', 'Added speak method to prototype', 'dog.speak() -> "Dog makes a sound"', 'Instance uses prototype method']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">__proto__ (on Objects)</h4>
              <p className="text-xs text-muted-foreground">
                All objects have __proto__ linking to prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

const dog = new Animal('Dog');

// __proto__ is on the instance
console.log(dog.__proto__ === Animal.prototype);
console.log(dog.__proto__.speak === dog.speak);`}
              </pre>
              <SnippetOutput lines={['dog.__proto__ === Animal.prototype -> true', 'Instance __proto__ points to constructor prototype', 'Methods are shared via __proto__']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Visual Relationship</h4>
              <p className="text-xs text-muted-foreground">
                How they connect together
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Car() {}

const myCar = new Car();

// The relationship:
console.log(myCar.__proto__ === Car.prototype);

// myCar.__proto__ ──┐
//                   ↓
//         Car.prototype

// Constructor's prototype becomes
// instance's __proto__`}
              </pre>
              <SnippetOutput lines={['myCar.__proto__ === Car.prototype -> true', 'They point to the same object!', 'This is how inheritance works']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Modern Alternative</h4>
              <p className="text-xs text-muted-foreground">
                Use Object.getPrototypeOf() instead of __proto__
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Person(name) {
  this.name = name;
}

const person = new Person('Alice');

// Modern way (recommended)
console.log(Object.getPrototypeOf(person) === Person.prototype);

// Old way (deprecated but still works)
console.log(person.__proto__ === Person.prototype);`}
              </pre>
              <SnippetOutput lines={['Object.getPrototypeOf(person) === Person.prototype -> true', '__proto__ still works but use getPrototypeOf', 'More standardized approach']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prototype Chain */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            The Prototype Chain
          </CardTitle>
          <CardDescription className="text-base">
            How JavaScript looks up properties through a chain of prototypes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>How Property Lookup Works</AlertTitle>
            <AlertDescription>
              When you access a property, JavaScript checks: 1) The object itself, 2) Its prototype, 3) That prototype's prototype, and so on, until it reaches <code className="font-mono text-xs">null</code>. This chain is called the <strong>prototype chain</strong>.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Prototype Chain</h4>
              <p className="text-xs text-muted-foreground">
                Every object ultimately inherits from Object.prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const obj = { a: 1 };

// Property lookup chain:
// 1. Check obj itself
console.log(obj.a);

// 2. Check obj's prototype (Object.prototype)
console.log(obj.toString());

// 3. Object.prototype has no prototype
console.log(Object.getPrototypeOf(Object.prototype));

// Chain: obj -> Object.prototype -> null`}
              </pre>
              <SnippetOutput lines={['obj.a -> 1 (found on obj)', 'obj.toString() -> "[object Object]" (from Object.prototype)', 'Object.prototype.__proto__ -> null', 'End of chain']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Constructor Prototype Chain</h4>
              <p className="text-xs text-muted-foreground">
                Instances inherit from constructor prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return 'Hello ' + this.name;
};

const alice = new Person('Alice');

// Chain: alice -> Person.prototype -> Object.prototype -> null
console.log(alice.name);
console.log(alice.greet());
console.log(alice.toString());`}
              </pre>
              <SnippetOutput lines={['alice.name -> "Alice" (on instance)', 'alice.greet() -> from Person.prototype', 'alice.toString() -> from Object.prototype', '3-level chain']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Checking the Chain</h4>
              <p className="text-xs text-muted-foreground">
                Verify prototype relationships
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Animal() {}
Animal.prototype.eat = function() {};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {};

const myDog = new Dog();

// Check chain
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
console.log(myDog instanceof Object);

// Chain: myDog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null`}
              </pre>
              <SnippetOutput lines={['myDog instanceof Dog -> true', 'myDog instanceof Animal -> true', 'myDog instanceof Object -> true', 'Multi-level inheritance chain']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Property Shadowing</h4>
              <p className="text-xs text-muted-foreground">
                Own properties shadow prototype properties
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Car() {}
Car.prototype.color = 'red';

const myCar = new Car();
console.log(myCar.color);

// Add own property (shadows prototype)
myCar.color = 'blue';
console.log(myCar.color);

// Prototype value unchanged
console.log(Car.prototype.color);

// Check property location
console.log(myCar.hasOwnProperty('color'));`}
              </pre>
              <SnippetOutput lines={['myCar.color -> "red" (from prototype)', 'myCar.color = "blue" (own property)', 'myCar.color -> "blue" (own takes precedence)', 'Car.prototype.color still "red"']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Object.create() */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Object.create() - Prototypal Inheritance
          </CardTitle>
          <CardDescription className="text-base">
            Create objects with a specific prototype - the purest form of prototypal inheritance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pure Prototypal Inheritance</AlertTitle>
            <AlertDescription>
              <code className="font-mono text-xs">Object.create(proto)</code> creates a new object with <code className="font-mono text-xs">proto</code> as its prototype. This is more direct than constructor functions and is the foundation of the "delegation" pattern.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Object.create()</h4>
              <p className="text-xs text-muted-foreground">
                Create object inheriting from another
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const animal = {
  type: 'Animal',
  describe() {
    return 'I am a ' + this.type;
  }
};

// Create dog inheriting from animal
const dog = Object.create(animal);
dog.type = 'Dog';

console.log(dog.describe());
console.log(dog.type);
console.log(Object.getPrototypeOf(dog) === animal);`}
              </pre>
              <SnippetOutput lines={['dog.describe() -> "I am a Dog"', 'dog.type -> "Dog"', 'getPrototypeOf(dog) === animal -> true', 'dog inherits from animal']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">With Property Descriptors</h4>
              <p className="text-xs text-muted-foreground">
                Add properties during creation
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const parent = {
  greet() {
    return 'Hello';
  }
};

const child = Object.create(parent, {
  name: {
    value: 'Alice',
    writable: true,
    enumerable: true
  },
  age: {
    value: 25,
    writable: true,
    enumerable: true
  }
});

console.log(child.name);
console.log(child.age);
console.log(child.greet());`}
              </pre>
              <SnippetOutput lines={['child.name -> "Alice"', 'child.age -> 25', 'child.greet() -> "Hello" (inherited)', 'Properties defined with descriptors']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Creating Empty Object</h4>
              <p className="text-xs text-muted-foreground">
                Object with no prototype chain
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Normal object has Object.prototype
const normal = {};
console.log(normal.toString);

// Object with null prototype
const empty = Object.create(null);
console.log(empty.toString);

// No prototype chain at all
console.log(Object.getPrototypeOf(empty));

// Useful for dictionaries/maps`}
              </pre>
              <SnippetOutput lines={['normal.toString -> [Function]', 'empty.toString -> undefined', 'getPrototypeOf(empty) -> null', 'No inherited methods']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Inheritance Chain</h4>
              <p className="text-xs text-muted-foreground">
                Build multi-level inheritance
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const grandparent = {
  familyName: 'Smith'
};

const parent = Object.create(grandparent);
parent.role = 'Parent';

const child = Object.create(parent);
child.age = 10;

console.log(child.age);
console.log(child.role);
console.log(child.familyName);

// Chain: child -> parent -> grandparent -> Object.prototype -> null`}
              </pre>
              <SnippetOutput lines={['child.age -> 10 (own)', 'child.role -> "Parent" (from parent)', 'child.familyName -> "Smith" (from grandparent)', 'Multi-level chain']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Prototype Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Modern Prototype Methods (ES5+)
          </CardTitle>
          <CardDescription className="text-base">
            Modern JavaScript methods for working with prototypes safely and effectively.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Object.getPrototypeOf()
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function Person(name) {
  this.name = name;
}

const person = new Person('Alice');

// Modern way to get prototype
const proto = Object.getPrototypeOf(person);
console.log(proto === Person.prototype);

// Instead of person.__proto__
console.log(proto.constructor.name);`}
              </pre>
              <SnippetOutput lines={['getPrototypeOf(person) === Person.prototype -> true', 'proto.constructor.name -> "Person"', 'Safer than __proto__']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Object.setPrototypeOf()
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const animal = {
  speak() {
    return 'Animal sound';
  }
};

const dog = { name: 'Dog' };

// Change prototype (not recommended for performance)
Object.setPrototypeOf(dog, animal);

console.log(dog.speak());
console.log(Object.getPrototypeOf(dog) === animal);`}
              </pre>
              <SnippetOutput lines={['dog.speak() -> "Animal sound"', 'getPrototypeOf(dog) === animal -> true', 'Prototype changed dynamically', 'Performance impact!']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Object.prototype.isPrototypeOf()
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog();

// Check if object is in prototype chain
console.log(Animal.prototype.isPrototypeOf(myDog));
console.log(Dog.prototype.isPrototypeOf(myDog));
console.log(Object.prototype.isPrototypeOf(myDog));`}
              </pre>
              <SnippetOutput lines={['Animal.prototype.isPrototypeOf(myDog) -> true', 'Dog.prototype.isPrototypeOf(myDog) -> true', 'Object.prototype.isPrototypeOf(myDog) -> true', 'All are in the chain']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                hasOwnProperty()
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function Car(brand) {
  this.brand = brand;
}

Car.prototype.type = 'vehicle';

const myCar = new Car('Toyota');

// Check if property is own or inherited
console.log(myCar.hasOwnProperty('brand'));
console.log(myCar.hasOwnProperty('type'));
console.log('type' in myCar);`}
              </pre>
              <SnippetOutput lines={['hasOwnProperty("brand") -> true (own property)', 'hasOwnProperty("type") -> false (inherited)', '"type" in myCar -> true (exists)', 'Distinguish own vs inherited']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical prototype patterns used in production JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Extending Built-in Objects</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Add methods to existing prototypes (use with caution!)
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Add utility method to String prototype
// (Usually not recommended, but educational)
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const text = 'hello world';
console.log(text.capitalize());

// Available on all strings
console.log('javascript'.capitalize());`}
              </pre>
              <SnippetOutput lines={['text.capitalize() -> "Hello world"', '"javascript".capitalize() -> "Javascript"', 'Method added to all strings', '⚠️ Can cause conflicts!']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Delegation Pattern</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Objects delegate behavior to prototypes
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const validators = {
  isEmail(value) {
    return /@/.test(value);
  },
  isPhone(value) {
    return /\\d{10}/.test(value);
  }
};

const userValidator = Object.create(validators);
userValidator.isValid = function(user) {
  return this.isEmail(user.email) &&
         this.isPhone(user.phone);
};

console.log(userValidator.isEmail('test@email.com'));
console.log(userValidator.isPhone('1234567890'));`}
              </pre>
              <SnippetOutput lines={['isEmail() -> true', 'isPhone() -> true', 'userValidator delegates to validators', 'Clean separation of concerns']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Plugin System</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Extend functionality via prototypes
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function App() {
  this.plugins = [];
}

App.prototype.use = function(plugin) {
  this.plugins.push(plugin);
  plugin(this);
};

App.prototype.run = function() {
  console.log('App running with ' + this.plugins.length + ' plugins');
};

const app = new App();
app.use(function(app) {
  app.logger = { log: (msg) => console.log(msg) };
});

app.run();
app.logger.log('Hello from plugin');`}
              </pre>
              <SnippetOutput lines={['app.run() -> "App running with 1 plugins"', 'logger.log() works', 'Extensible architecture']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Mixin Pattern</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Copy methods from mixins to prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const eventMixin = {
  on(event, handler) {
    this.handlers = this.handlers || {};
    this.handlers[event] = handler;
  },
  emit(event) {
    if (this.handlers && this.handlers[event]) {
      this.handlers[event]();
    }
  }
};

function Component() {}

// Copy mixin methods to prototype
Object.assign(Component.prototype, eventMixin);

const comp = new Component();
comp.on('click', () => console.log('Clicked!'));
comp.emit('click');`}
              </pre>
              <SnippetOutput lines={['comp.on("click", ...) registers handler', 'comp.emit("click") -> "Clicked!"', 'Event system via prototype', 'Reusable behavior']} />
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
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use <code className="font-mono text-xs">Object.getPrototypeOf()</code> instead of <code className="font-mono text-xs">__proto__</code></li>
              <li>✅ Add methods to prototype for memory efficiency</li>
              <li>✅ Use <code className="font-mono text-xs">Object.create()</code> for clean inheritance</li>
              <li>✅ Check own properties with <code className="font-mono text-xs">hasOwnProperty()</code></li>
              <li>✅ Use ES6 classes for new code (simpler syntax)</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't modify built-in prototypes (Object, Array, etc.)</li>
              <li>❌ Don't use <code className="font-mono text-xs">Object.setPrototypeOf()</code> (performance impact)</li>
              <li>❌ Don't rely on <code className="font-mono text-xs">__proto__</code> (non-standard)</li>
              <li>❌ Don't add non-enumerable properties without reason</li>
              <li>❌ Don't create deep prototype chains (hard to debug)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Hands-on Playground
          </CardTitle>
          <CardDescription className="text-base">
            Open the interactive playground to experiment with prototypes in your browser!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                Practice with Real Code
              </p>
              <p className="text-xs text-muted-foreground">
                Try prototype chain, Object.create(), and modern prototype methods in an interactive environment. See results instantly in the browser console.
              </p>
            </div>
          </div>
          {onOpenWebPlayground && (
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              <Play className="w-4 h-4 mr-2" />
              Launch Interactive Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
