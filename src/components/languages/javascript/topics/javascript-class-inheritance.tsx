'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  GitBranch,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowUp,
  Layers,
  Users,
} from 'lucide-react';

export default function JavaScriptClassInheritance() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitBranch}
        category="JavaScript Fundamentals"
        title="Class Inheritance"
        description="Create specialized classes that inherit from parent classes"
        colorTheme="yellow"
      />

      {/* What is Class Inheritance */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Class Inheritance?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Inheritance lets you create a <strong className="text-yellow-700 dark:text-yellow-400">specialized class</strong> based on an existing one. The new class gets all properties and methods from the parent, plus its own unique features!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <GitBranch className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Parent-Child Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Like a child inheriting traits from parents! A "Dog" class can inherit from "Animal" - it gets all Animal features, plus Dog-specific behaviors like barking.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Inheritance */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <ArrowUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Inheritance with extends</CardTitle>
              <CardDescription>Use extends keyword to inherit from parent class</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Parent → Child</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

// Child class inherits from Animal
class Dog extends Animal {
  bark() {
    console.log(\`\${this.name} barks!\`);
  }
}

const dog = new Dog('Buddy');
dog.speak();  // 'Buddy makes a sound' (inherited)
dog.bark();   // 'Buddy barks!' (own method)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Inheritance Example"
        description="Child class inherits from parent"
        code={`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(\`\${this.name} is eating\`);
  }
  
  sleep() {
    console.log(\`\${this.name} is sleeping\`);
  }
}

// Child class inherits all Animal methods
class Dog extends Animal {
  bark() {
    console.log(\`\${this.name} says Woof!\`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(\`\${this.name} says Meow!\`);
  }
}

// Create instances
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

// Use inherited methods
dog.eat();    // 'Buddy is eating' (from Animal)
dog.sleep();  // 'Buddy is sleeping' (from Animal)
dog.bark();   // 'Buddy says Woof!' (own method)

cat.eat();    // 'Whiskers is eating' (from Animal)
cat.meow();   // 'Whiskers says Meow!' (own method)

// Check inheritance
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true
console.log(cat instanceof Animal);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* super() in Constructor */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Layers className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>super() - Call Parent Constructor</CardTitle>
              <CardDescription>Initialize parent class properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Calling Parent Constructor</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">super()</code> to call the parent's constructor
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);  // Call parent constructor
    this.breed = breed;  // Add child property
  }
}

const dog = new Dog('Buddy', 3, 'Golden Retriever');
console.log(dog.name);   // 'Buddy' (from parent)
console.log(dog.age);    // 3 (from parent)
console.log(dog.breed);  // 'Golden Retriever' (own)`}</pre>
              </div>
              <Alert className="mt-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
                <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-sm">
                  <strong>Important:</strong> If child has constructor, you <strong>must</strong> call <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">super()</code> before using <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-xs">this</code>!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="super() Examples"
        description="Initializing parent and child properties"
        code={`// Parent class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
}

// Child class
class Employee extends Person {
  constructor(firstName, lastName, jobTitle, salary) {
    super(firstName, lastName);  // Initialize parent properties
    this.jobTitle = jobTitle;    // Child property
    this.salary = salary;        // Child property
  }
  
  getInfo() {
    return \`\${this.getFullName()} - \${this.jobTitle}\`;
  }
}

const emp = new Employee('John', 'Doe', 'Developer', 80000);
console.log(emp.getFullName());  // 'John Doe' (inherited)
console.log(emp.getInfo());      // 'John Doe - Developer'
console.log(emp.salary);         // 80000

// Real-world: Vehicle hierarchy
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  getInfo() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  
  getDetails() {
    return \`\${this.getInfo()} (\${this.doors} doors)\`;
  }
}

const car = new Car('Toyota', 'Camry', 2020, 4);
console.log(car.getDetails());
// '2020 Toyota Camry (4 doors)'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Method Overriding */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Method Overriding</CardTitle>
              <CardDescription>Replace parent method with child's version</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Override Parent Methods</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Child class can define its own version of a parent method
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks!');  // Override parent method
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows!');  // Override parent method
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.speak();  // 'Animal makes a sound'
dog.speak();     // 'Dog barks!' (overridden)
cat.speak();     // 'Cat meows!' (overridden)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Method Overriding Examples"
        description="Customizing parent methods"
        code={`class Shape {
  constructor(name) {
    this.name = name;
  }
  
  getArea() {
    return 0;  // Default implementation
  }
  
  getInfo() {
    return \`\${this.name}: Area = \${this.getArea()}\`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }
  
  // Override getArea()
  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }
  
  // Override getArea()
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const rect = new Rectangle(5, 10);
const circle = new Circle(7);

console.log(rect.getInfo());
// 'Rectangle: Area = 50'

console.log(circle.getInfo());
// 'Circle: Area = 153.93...'

// Real-world: Employee types
class Employee {
  constructor(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  
  getSalary() {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary);
    this.bonus = bonus;
  }
  
  // Override getSalary()
  getSalary() {
    return this.baseSalary + this.bonus;
  }
}

const emp = new Employee('John', 50000);
const mgr = new Manager('Jane', 60000, 10000);

console.log(emp.getSalary());  // 50000
console.log(mgr.getSalary());  // 70000 (overridden)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* super.method() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <ArrowUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>super.method() - Call Parent Method</CardTitle>
              <CardDescription>Extend parent method instead of replacing</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Extend Parent Behavior</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Call parent method and add child behavior
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Animal {
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak();  // Call parent method first
    console.log('Woof woof!');  // Then add child behavior
  }
}

const dog = new Dog();
dog.name = 'Buddy';
dog.speak();
// 'Buddy makes a sound' (parent)
// 'Woof woof!' (child)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="super.method() Examples"
        description="Extending parent methods"
        code={`class Person {
  constructor(name) {
    this.name = name;
  }
  
  introduce() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  
  introduce() {
    super.introduce();  // Call parent method
    console.log(\`I'm in grade \${this.grade}\`);  // Add more info
  }
}

const student = new Student('Alice', 10);
student.introduce();
// 'Hi, I'm Alice' (from parent)
// 'I'm in grade 10' (from child)

// Real-world: Logger hierarchy
class Logger {
  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }
}

class ErrorLogger extends Logger {
  log(message) {
    super.log('ERROR: ' + message);  // Call parent with prefix
    // Could also save to error log file
  }
}

const logger = new Logger();
const errorLogger = new ErrorLogger();

logger.log('Normal message');
// '[2024-12-13...] Normal message'

errorLogger.log('Something went wrong');
// '[2024-12-13...] ERROR: Something went wrong'

// Real-world: Extended functionality
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  
  withdraw(amount) {
    this.balance -= amount;
    console.log(\`Withdrew $\${amount}\`);
  }
}

class SavingsAccount extends BankAccount {
  constructor(balance, interestRate) {
    super(balance);
    this.interestRate = interestRate;
  }
  
  withdraw(amount) {
    if (this.balance - amount < 100) {
      console.log('Must maintain minimum $100');
      return;
    }
    super.withdraw(amount);  // Call parent withdraw
  }
}

const savings = new SavingsAccount(500, 0.02);
savings.withdraw(450);  // 'Must maintain minimum $100'
savings.withdraw(200);  // 'Withdrew $200'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real-World Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Real-World: User Hierarchy</CardTitle>
              <CardDescription>Complete inheritance example</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">User Types</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  
  login() {
    console.log(\`\${this.username} logged in\`);
  }
}

class AdminUser extends User {
  constructor(username, email) {
    super(username, email);
    this.isAdmin = true;
  }
  
  deleteUser(user) {
    console.log(\`Admin deleted \${user}\`);
  }
}

class GuestUser extends User {
  login() {
    console.log('Guest has limited access');
  }
}

const admin = new AdminUser('admin', 'admin@site.com');
admin.login();  // 'admin logged in'
admin.deleteUser('baduser');  // 'Admin deleted baduser'

const guest = new GuestUser('guest', 'guest@site.com');
guest.login();  // 'Guest has limited access'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Real-World Example"
        description="E-commerce product hierarchy"
        code={`// Base Product class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  getInfo() {
    return \`\${this.name} - $\${this.price}\`;
  }
  
  calculatePrice(quantity) {
    return this.price * quantity;
  }
}

// Digital Product (can be downloaded)
class DigitalProduct extends Product {
  constructor(name, price, fileSize) {
    super(name, price);
    this.fileSize = fileSize;
  }
  
  getInfo() {
    return \`\${super.getInfo()} (File: \${this.fileSize}MB)\`;
  }
  
  download() {
    console.log(\`Downloading \${this.name}...\`);
  }
}

// Physical Product (needs shipping)
class PhysicalProduct extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  
  getInfo() {
    return \`\${super.getInfo()} (Weight: \${this.weight}kg)\`;
  }
  
  calculatePrice(quantity) {
    const basePrice = super.calculatePrice(quantity);
    const shipping = this.weight * 5;  // $5 per kg
    return basePrice + shipping;
  }
}

// Usage
const ebook = new DigitalProduct('JavaScript Guide', 29.99, 5);
const laptop = new PhysicalProduct('Laptop', 999, 2);

console.log(ebook.getInfo());
// 'JavaScript Guide - $29.99 (File: 5MB)'

console.log(laptop.getInfo());
// 'Laptop - $999 (Weight: 2kg)'

console.log(ebook.calculatePrice(2));    // 59.98
console.log(laptop.calculatePrice(1));   // 1009 (999 + 10 shipping)

ebook.download();  // 'Downloading JavaScript Guide...'`}
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
                <li>• Use <strong>extends</strong> to inherit from parent</li>
                <li>• Call <strong>super()</strong> in child constructor</li>
                <li>• Use <strong>super.method()</strong> to extend parent methods</li>
                <li>• Override methods when child needs different behavior</li>
                <li>• Check types with <strong>instanceof</strong></li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't forget <strong>super()</strong> in constructor</li>
                <li>• Don't use <strong>this</strong> before <strong>super()</strong></li>
                <li>• Don't create deep inheritance chains (3+ levels)</li>
                <li>• Don't inherit just to reuse code (use composition)</li>
                <li>• Don't override without good reason</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Inheritance Pattern</h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Parent {
  constructor(param1) {
    this.property1 = param1;
  }
  
  method1() {
    // parent implementation
  }
}

class Child extends Parent {
  constructor(param1, param2) {
    super(param1);  // Call parent constructor
    this.property2 = param2;
  }
  
  method1() {
    super.method1();  // Call parent method (optional)
    // child implementation
  }
  
  method2() {
    // child-only method
  }
}`}</pre>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Design Tip</AlertTitle>
            <AlertDescription className="text-base">
              Prefer <strong>composition over inheritance</strong> when possible. Only inherit when there's a true "is-a" relationship (Dog IS-A Animal). For "has-a" relationships, use composition!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
