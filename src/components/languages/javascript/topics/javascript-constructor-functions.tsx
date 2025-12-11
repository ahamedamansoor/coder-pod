'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Box,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Code,
  AlertCircle,
  Zap,
  Package,
  Settings,
} from 'lucide-react';

export default function JavaScriptConstructorFunctions() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Box}
        category="JavaScript · Object-Oriented"
        title="Constructor Functions"
        description="Master constructor functions - the blueprint pattern for creating multiple objects with the new keyword, prototypes, and the foundation of JavaScript OOP."
        colorTheme="blue"
      />

      {/* What are Constructor Functions? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Constructor Functions?
          </CardTitle>
          <CardDescription className="text-base">
            Constructor functions are blueprints for creating multiple objects with the same structure and behavior.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of a constructor function like a <strong>cookie cutter</strong> or <strong>factory mold</strong>. Instead of creating each object manually with unique properties, you define a template once and create as many objects as you need from that template. Constructor functions are the foundation of object-oriented programming in JavaScript and the precursor to ES6 classes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">Blueprint Pattern</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Define once, create many instances
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Reusable</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">new Keyword</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Creates new instances automatically
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Magic!</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Prototype Chain</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Share methods across all instances
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Efficient</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Convention: Capital First Letter</AlertTitle>
            <AlertDescription>
              By convention, constructor functions start with a <strong>capital letter</strong> (e.g., <code className="font-mono text-xs">Person</code>, <code className="font-mono text-xs">Car</code>) to distinguish them from regular functions. Always use the <code className="font-mono text-xs">new</code> keyword when calling them!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The new Keyword */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The new Keyword - What Happens Behind the Scenes
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the 4 steps that occur when you use the new keyword.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-3 text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              The 4 Steps of the new Keyword
            </h4>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li><strong>1.</strong> Creates a new empty object <code className="font-mono text-xs">{'{}'}</code></li>
              <li><strong>2.</strong> Sets the object's prototype to the constructor's prototype</li>
              <li><strong>3.</strong> Binds <code className="font-mono text-xs">this</code> to the new object and executes the constructor</li>
              <li><strong>4.</strong> Returns the new object (unless constructor explicitly returns an object)</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Constructor Function</h4>
              <p className="text-xs text-muted-foreground">
                Simple template with properties
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Person(name, age) {
  // 'this' refers to the new object
  this.name = name;
  this.age = age;
}

// Create instances with 'new'
const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

console.log(alice);
console.log(bob);
console.log(alice.name);
console.log(bob.age);
// Output:
// alice: { name: "Alice", age: 25 }
// bob: { name: "Bob", age: 30 }
// alice.name -> "Alice"
// bob.age -> 30`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Without new - Common Mistake!</h4>
              <p className="text-xs text-muted-foreground">
                Forgetting new causes unexpected behavior
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

// BUG: Forgot 'new' keyword
const charlie = Person('Charlie', 35);

console.log(charlie);
console.log(window.name);
console.log(window.age);
// Output:
// charlie -> undefined
// window.name -> "Charlie" (polluted global!)
// window.age -> 35 (polluted global!)
// Always use new!`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Checking Instance Type</h4>
              <p className="text-xs text-muted-foreground">
                Use instanceof to verify object type
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car('Toyota', 'Camry');

console.log(myCar instanceof Car);
console.log(myCar instanceof Object);
console.log(myCar.constructor === Car);
// Output:
// myCar instanceof Car -> true
// myCar instanceof Object -> true
// myCar.constructor === Car -> true`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Return Value Behavior</h4>
              <p className="text-xs text-muted-foreground">
                Constructors normally return the new object automatically
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Test(value) {
  this.value = value;
  // No explicit return needed
}

const test1 = new Test(10);
console.log(test1.value);

function BadTest(value) {
  this.value = value;
  return { different: 'object' }; // Overrides!
}

const test2 = new BadTest(20);
console.log(test2.value);
console.log(test2.different);
// Output:
// test1.value -> 10
// test2.value -> undefined
// test2.different -> "object"
// Explicit object return overrides`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: The new Keyword"
        description="How new creates instances from constructor functions"
        code={`// Basic Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

console.log(alice); // { name: "Alice", age: 25 }
console.log(bob.name); // "Bob"

// MISTAKE: Forgetting 'new' keyword
const charlie = Person('Charlie', 35);
console.log(charlie); // undefined
console.log(window.name); // "Charlie" (POLLUTED GLOBAL!)
// Always use 'new'!

// Checking Instance Type
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar instanceof Car);    // true
console.log(myCar instanceof Object); // true
console.log(myCar.constructor === Car); // true

// Return Value Behavior
function Test(value) {
  this.value = value;
  // No return needed - returns new object automatically
}

const test1 = new Test(10);
console.log(test1.value); // 10

function BadTest(value) {
  this.value = value;
  return { different: 'object' }; // Override!
}

const test2 = new BadTest(20);
console.log(test2.value); // undefined
console.log(test2.different); // "object"
// Explicit object return overrides!`}
        language="javascript"
        colorTheme="blue"
        icon={Zap}
      />

      {/* Properties and Methods */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Properties and Methods
          </CardTitle>
          <CardDescription className="text-base">
            Adding data (properties) and behavior (methods) to your constructor functions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Instance Properties</h4>
              <p className="text-xs text-muted-foreground">
                Each instance gets its own copy
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function User(username, email) {
  // Instance properties
  this.username = username;
  this.email = email;
  this.isActive = true;
  this.createdAt = new Date();
}

const user1 = new User('alice', 'alice@email.com');
const user2 = new User('bob', 'bob@email.com');

console.log(user1.username);
console.log(user2.username);
console.log(user1.createdAt === user2.createdAt);
// Output:
// user1.username -> "alice"
// user2.username -> "bob"
// createdAt dates are different
// Each instance has own properties`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Instance Methods (Not Recommended)</h4>
              <p className="text-xs text-muted-foreground">
                Each instance creates a NEW function - wasteful!
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Dog(name) {
  this.name = name;
  
  // BAD: New function for each instance
  this.bark = function() {
    return this.name + ' barks!';
  };
}

const dog1 = new Dog('Max');
const dog2 = new Dog('Bella');

console.log(dog1.bark());
console.log(dog1.bark === dog2.bark);
// Output:
// dog1.bark() -> "Max barks!"
// dog1.bark === dog2.bark -> false
// Each instance has different function
// Memory inefficient!`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Computed Properties</h4>
              <p className="text-xs text-muted-foreground">
                Properties derived from other properties
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  // Computed at creation
  this.area = width * height;
  this.perimeter = 2 * (width + height);
}

const rect = new Rectangle(5, 10);
console.log(rect.area);
console.log(rect.perimeter);
// Output:
// rect.area -> 50
// rect.perimeter -> 30
// Computed once at creation`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Default Values</h4>
              <p className="text-xs text-muted-foreground">
                Provide defaults for optional parameters
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category || 'Uncategorized';
  this.inStock = true;
  this.discount = 0;
}

const product1 = new Product('Laptop', 999);
const product2 = new Product('Mouse', 25, 'Electronics');

console.log(product1.category);
console.log(product2.category);
// Output:
// product1.category -> "Uncategorized"
// product2.category -> "Electronics"
// Default values provided`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Properties and Methods"
        description="Adding properties and behavior to constructor functions"
        code={`// Instance Properties - Each instance gets own copy
function User(username, email) {
  this.username = username;
  this.email = email;
  this.isActive = true;
  this.createdAt = new Date();
}

const user1 = new User('alice', 'alice@email.com');
const user2 = new User('bob', 'bob@email.com');

console.log(user1.username); // "alice"
console.log(user2.username); // "bob"
// Each instance has independent properties

// Instance Methods (NOT RECOMMENDED - memory waste!)
function Dog(name) {
  this.name = name;
  this.bark = function() {
    return this.name + ' barks!';
  };
}

const dog1 = new Dog('Max');
const dog2 = new Dog('Bella');

console.log(dog1.bark()); // "Max barks!"
console.log(dog1.bark === dog2.bark); // false
// Each instance creates NEW function - inefficient!

// Computed Properties
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = width * height; // Computed at creation
  this.perimeter = 2 * (width + height);
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
console.log(rect.perimeter); // 30

// Default Values
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category || 'Uncategorized'; // Default
  this.inStock = true;
  this.discount = 0;
}

const product1 = new Product('Laptop', 999);
console.log(product1.category); // "Uncategorized"

const product2 = new Product('Mouse', 25, 'Electronics');
console.log(product2.category); // "Electronics"`}
        language="javascript"
        colorTheme="purple"
        icon={Code}
      />

      {/* Prototype Methods */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Prototype Methods - The Right Way!
          </CardTitle>
          <CardDescription className="text-base">
            Share methods across all instances using the prototype - memory efficient and best practice.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Use Prototype?</AlertTitle>
            <AlertDescription>
              Methods defined on the prototype are <strong>shared</strong> across all instances. Instead of creating a new function for each object, all instances reference the same function in memory. This is much more efficient!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Adding Prototype Methods</h4>
              <p className="text-xs text-muted-foreground">
                Define methods outside the constructor
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Animal(name, species) {
  this.name = name;
  this.species = species;
}

// Add methods to prototype
Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

Animal.prototype.getInfo = function() {
  return this.name + ' is a ' + this.species;
};

const cat = new Animal('Whiskers', 'Cat');
const dog = new Animal('Buddy', 'Dog');

console.log(cat.speak());
console.log(dog.getInfo());
console.log(cat.speak === dog.speak);
// Output:
// cat.speak() -> "Whiskers makes a sound"
// dog.getInfo() -> "Buddy is a Dog"
// cat.speak === dog.speak -> true
// Methods are shared!`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Multiple Prototype Methods</h4>
              <p className="text-xs text-muted-foreground">
                Add as many shared methods as needed
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Counter(startValue) {
  this.count = startValue || 0;
}

Counter.prototype.increment = function() {
  this.count++;
  return this.count;
};

Counter.prototype.decrement = function() {
  this.count--;
  return this.count;
};

Counter.prototype.reset = function() {
  this.count = 0;
};

const counter = new Counter(5);
console.log(counter.increment());
console.log(counter.decrement());
counter.reset();
console.log(counter.count);
// Output:
// increment() -> 6
// decrement() -> 5
// reset() sets count to 0
// All methods on prototype`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Accessing Prototype</h4>
              <p className="text-xs text-muted-foreground">
                Every instance has access to constructor's prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function() {
  return this.title + ' by ' + this.author;
};

const book1 = new Book('1984', 'George Orwell');

// Check prototype
console.log(book1.__proto__ === Book.prototype);
console.log(book1.hasOwnProperty('title'));
console.log(book1.hasOwnProperty('getSummary'));
// Output:
// __proto__ === Book.prototype -> true
// hasOwnProperty("title") -> true
// hasOwnProperty("getSummary") -> false
// Method is on prototype, not instance`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Prototype Chain</h4>
              <p className="text-xs text-muted-foreground">
                Instances inherit from constructor prototype
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.describe = function() {
  return 'This is a ' + this.type;
};

const car = new Vehicle('car');

// Check prototype chain
console.log(car.describe());
console.log(car instanceof Vehicle);
console.log(car instanceof Object);
console.log(Object.getPrototypeOf(car) === Vehicle.prototype);
// Output:
// describe() -> "This is a car"
// instanceof Vehicle -> true
// instanceof Object -> true
// Prototype chain: car -> Vehicle.prototype -> Object.prototype`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Prototype Methods"
        description="Memory-efficient shared methods via prototype"
        code={`// Adding Prototype Methods - Shared across all instances
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

// Methods added to prototype (NOT inside constructor)
Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

Animal.prototype.getInfo = function() {
  return this.name + ' is a ' + this.species;
};

const cat = new Animal('Whiskers', 'Cat');
const dog = new Animal('Buddy', 'Dog');

console.log(cat.speak());        // "Whiskers makes a sound"
console.log(dog.getInfo());      // "Buddy is a Dog"
console.log(cat.speak === dog.speak); // true - SHARED!

// Multiple Prototype Methods
function Counter(startValue) {
  this.count = startValue || 0;
}

Counter.prototype.increment = function() {
  this.count++;
  return this.count;
};

Counter.prototype.decrement = function() {
  this.count--;
  return this.count;
};

Counter.prototype.reset = function() {
  this.count = 0;
};

const counter = new Counter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
counter.reset();
console.log(counter.count); // 0

// Accessing Prototype
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function() {
  return this.title + ' by ' + this.author;
};

const book1 = new Book('1984', 'George Orwell');
console.log(book1.__proto__ === Book.prototype); // true
console.log(book1.hasOwnProperty('title')); // true (own property)
console.log(book1.hasOwnProperty('getSummary')); // false (on prototype!)

// Prototype Chain
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.describe = function() {
  return 'This is a ' + this.type;
};

const car = new Vehicle('car');
console.log(car.describe());   // "This is a car"
console.log(car instanceof Vehicle); // true
console.log(car instanceof Object);  // true
// Prototype chain: car -> Vehicle.prototype -> Object.prototype`}
        language="javascript"
        colorTheme="emerald"
        icon={Package}
      />

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns using constructor functions in production code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                User Authentication System
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.createdAt = new Date();
  this.isActive = true;
}

User.prototype.login = function() {
  console.log(this.username + ' logged in');
  return true;
};

User.prototype.logout = function() {
  console.log(this.username + ' logged out');
  return true;
};

User.prototype.updateEmail = function(newEmail) {
  this.email = newEmail;
  console.log('Email updated to ' + newEmail);
};

const user = new User('alice', 'alice@email.com', 'pass123');
user.login();
user.updateEmail('newemail@email.com');
// Output:
// user.login() -> "alice logged in"
// updateEmail() -> "Email updated"
// Clean OOP pattern`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Shopping Cart System
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function ShoppingCart(userId) {
  this.userId = userId;
  this.items = [];
  this.total = 0;
}

ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
  this.total += item.price;
};

ShoppingCart.prototype.removeItem = function(itemId) {
  const index = this.items.findIndex(i => i.id === itemId);
  if (index > -1) {
    this.total -= this.items[index].price;
    this.items.splice(index, 1);
  }
};

ShoppingCart.prototype.getTotal = function() {
  return '$' + this.total.toFixed(2);
};

const cart = new ShoppingCart('user123');
cart.addItem({ id: 1, name: 'Book', price: 19.99 });
cart.addItem({ id: 2, name: 'Pen', price: 2.99 });
console.log(cart.getTotal());
// Output:
// addItem() adds to cart
// getTotal() -> "$22.98"
// Stateful object pattern`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Task Manager
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function Task(title, priority) {
  this.id = Date.now();
  this.title = title;
  this.priority = priority || 'medium';
  this.completed = false;
  this.createdAt = new Date();
}

Task.prototype.complete = function() {
  this.completed = true;
  this.completedAt = new Date();
};

Task.prototype.updatePriority = function(newPriority) {
  this.priority = newPriority;
};

Task.prototype.getStatus = function() {
  return this.completed ? 'Done' : 'Pending';
};

const task1 = new Task('Fix bug', 'high');
const task2 = new Task('Write docs', 'low');
task1.complete();
console.log(task1.getStatus());
console.log(task2.getStatus());
// Output:
// task1.getStatus() -> "Done"
// task2.getStatus() -> "Pending"
// Task management system`}
              </pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Validator Factory
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function Validator(rules) {
  this.rules = rules;
  this.errors = [];
}

Validator.prototype.validate = function(data) {
  this.errors = [];
  
  for (let field in this.rules) {
    const rule = this.rules[field];
    const value = data[field];
    
    if (rule.required && !value) {
      this.errors.push(field + ' is required');
    }
    
    if (rule.minLength && value.length < rule.minLength) {
      this.errors.push(field + ' too short');
    }
  }
  
  return this.errors.length === 0;
};

const validator = new Validator({
  username: { required: true, minLength: 3 },
  email: { required: true }
});

console.log(validator.validate({ username: 'ab', email: '' }));
console.log(validator.errors);
// Output:
// validate() -> false
// errors: ["username too short", "email is required"]
// Flexible validation pattern`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Real-World Constructor Patterns"
        description="Production-ready patterns for practical applications"
        code={`// User Authentication System
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.createdAt = new Date();
  this.isActive = true;
}

User.prototype.login = function() {
  console.log(this.username + ' logged in');
  return true;
};

User.prototype.logout = function() {
  console.log(this.username + ' logged out');
  return true;
};

User.prototype.updateEmail = function(newEmail) {
  this.email = newEmail;
  console.log('Email updated to ' + newEmail);
};

const user = new User('alice', 'alice@email.com', 'pass123');
user.login(); // "alice logged in"
user.updateEmail('newemail@email.com'); // "Email updated"

// Shopping Cart System
function ShoppingCart(userId) {
  this.userId = userId;
  this.items = [];
  this.total = 0;
}

ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
  this.total += item.price;
};

ShoppingCart.prototype.removeItem = function(itemId) {
  const index = this.items.findIndex(i => i.id === itemId);
  if (index > -1) {
    this.total -= this.items[index].price;
    this.items.splice(index, 1);
  }
};

ShoppingCart.prototype.getTotal = function() {
  return '$' + this.total.toFixed(2);
};

const cart = new ShoppingCart('user123');
cart.addItem({ id: 1, name: 'Book', price: 19.99 });
cart.addItem({ id: 2, name: 'Pen', price: 2.99 });
console.log(cart.getTotal()); // "$22.98"

// Task Manager
function Task(title, priority) {
  this.id = Date.now();
  this.title = title;
  this.priority = priority || 'medium';
  this.completed = false;
  this.createdAt = new Date();
}

Task.prototype.complete = function() {
  this.completed = true;
  this.completedAt = new Date();
};

Task.prototype.getStatus = function() {
  return this.completed ? 'Done' : 'Pending';
};

const task1 = new Task('Fix bug', 'high');
const task2 = new Task('Write docs', 'low');
task1.complete();
console.log(task1.getStatus()); // "Done"
console.log(task2.getStatus()); // "Pending"`}
        language="javascript"
        colorTheme="blue"
        icon={Sparkles}
      />

      {/* Constructor vs ES6 Classes */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Constructor Functions vs ES6 Classes
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the relationship between constructor functions and modern class syntax.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>ES6 Classes are Syntactic Sugar</AlertTitle>
            <AlertDescription>
              ES6 classes are essentially a cleaner syntax for constructor functions. Under the hood, they work the same way with prototypes!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Constructor Function</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Traditional</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return 'Hi, I am ' + this.name;
};

Person.prototype.getAge = function() {
  return this.age;
};

const person = new Person('Alice', 25);
console.log(person.greet());`}
              </pre>
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">ES6 Class</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Modern</Badge>
              </div>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return 'Hi, I am ' + this.name;
  }
  
  getAge() {
    return this.age;
  }
}

const person = new Person('Alice', 25);
console.log(person.greet());`}
              </pre>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Key Differences</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Classes have cleaner, more readable syntax</li>
              <li>✅ Classes enforce using <code className="font-mono text-xs">new</code> (error without it)</li>
              <li>✅ Class methods are non-enumerable by default</li>
              <li>✅ Classes support <code className="font-mono text-xs">extends</code> for easy inheritance</li>
              <li>⚠️ Both work with prototypes under the hood</li>
            </ul>
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
              <li>✅ Use capital letter for constructor names (convention)</li>
              <li>✅ Always use <code className="font-mono text-xs">new</code> keyword</li>
              <li>✅ Add methods to prototype (not in constructor)</li>
              <li>✅ Initialize all properties in constructor</li>
              <li>✅ Use ES6 classes for new code (cleaner syntax)</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't forget the <code className="font-mono text-xs">new</code> keyword</li>
              <li>❌ Don't add methods inside the constructor</li>
              <li>❌ Don't return values from constructors (usually)</li>
              <li>❌ Don't use arrow functions for prototype methods</li>
              <li>❌ Don't modify built-in prototypes (Object, Array, etc.)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
