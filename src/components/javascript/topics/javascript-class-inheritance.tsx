'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  GitBranch,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  AlertCircle,
  Layers,
  ArrowUp,
  Share2,
} from 'lucide-react';

interface JavaScriptClassInheritanceProps {
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
  <title>Class Inheritance Demo</title>
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
    <h1>Class Inheritance</h1>
    <p>Open the browser console (F12) to see inheritance examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./inheritance-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Class Inheritance Demo ===\\n');

// 1. Basic Inheritance
console.log('1. BASIC INHERITANCE:');
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a sound';
  }
}

class Dog extends Animal {
  bark() {
    return this.name + ' barks!';
  }
}

const dog = new Dog('Max');
console.log(dog.speak());
console.log(dog.bark());
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);

// 2. super Keyword
console.log('\\n2. SUPER KEYWORD:');
class Cat extends Animal {
  constructor(name, color) {
    super(name); // Call parent constructor
    this.color = color;
  }
  
  speak() {
    return super.speak() + ' and meows!';
  }
}

const cat = new Cat('Whiskers', 'orange');
console.log(cat.speak());
console.log(cat.color);

// 3. Method Overriding
console.log('\\n3. METHOD OVERRIDING:');
class Bird extends Animal {
  speak() {
    return this.name + ' chirps!';
  }
  
  fly() {
    return this.name + ' is flying';
  }
}

const bird = new Bird('Tweety');
console.log(bird.speak());
console.log(bird.fly());

// 4. Multi-level Inheritance
console.log('\\n4. MULTI-LEVEL INHERITANCE:');
class Mammal extends Animal {
  nurse() {
    return this.name + ' nurses young';
  }
}

class Dolphin extends Mammal {
  swim() {
    return this.name + ' swims';
  }
}

const dolphin = new Dolphin('Flipper');
console.log(dolphin.speak());
console.log(dolphin.nurse());
console.log(dolphin.swim());

console.log('\\nAll inheritance examples demonstrated!');
`;

export default function JavaScriptClassInheritance({ onOpenWebPlayground }: JavaScriptClassInheritanceProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={GitBranch}
        category="JavaScript · Object-Oriented"
        title="Class Inheritance"
        description="Master inheritance with extends and super - create class hierarchies, override methods, call parent constructors, and build reusable object-oriented code."
        colorTheme="blue"
      />

      {/* What is Class Inheritance */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Class Inheritance?
          </CardTitle>
          <CardDescription className="text-base">
            Inheritance allows a class to inherit properties and methods from another class.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Think of inheritance like a <strong>family tree</strong>. A child class inherits from its parent but can add unique features or modify inherited ones.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">extends Keyword</h4>
              </div>
              <p className="text-xs text-muted-foreground">Create child classes from parents</p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">ES6</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">super Keyword</h4>
              </div>
              <p className="text-xs text-muted-foreground">Access parent constructor and methods</p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Access Parent</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-sm">Method Override</h4>
              </div>
              <p className="text-xs text-muted-foreground">Customize inherited behavior</p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 text-xs">Polymorphism</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>IS-A Relationship</AlertTitle>
            <AlertDescription>
              Use inheritance for "IS-A" relationships. Dog IS-A Animal, Car IS-A Vehicle.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The extends Keyword */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The extends Keyword - Creating Child Classes
          </CardTitle>
          <CardDescription className="text-base">
            Use extends to create a subclass that inherits from a parent class.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Inheritance</h4>
              <p className="text-xs text-muted-foreground">
                Child class inherits all parent methods
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    return this.name + ' is eating';
  }
  
  sleep() {
    return this.name + ' is sleeping';
  }
}

// Dog extends Animal
class Dog extends Animal {
  bark() {
    return this.name + ' barks!';
  }
}

const dog = new Dog('Max');
console.log(dog.eat());
console.log(dog.sleep());
console.log(dog.bark());`}
              </pre>
              <SnippetOutput lines={['dog.eat() -> "Max is eating"', 'dog.sleep() -> "Max is sleeping"', 'dog.bark() -> "Max barks!"', 'Dog inherits from Animal']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">instanceof Check</h4>
              <p className="text-xs text-muted-foreground">
                Verify inheritance relationships
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Vehicle {
  constructor(type) {
    this.type = type;
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super('car');
    this.brand = brand;
  }
}

const myCar = new Car('Toyota');

console.log(myCar instanceof Car);
console.log(myCar instanceof Vehicle);
console.log(myCar instanceof Object);

console.log(Car.prototype instanceof Vehicle);`}
              </pre>
              <SnippetOutput lines={['myCar instanceof Car -> true', 'myCar instanceof Vehicle -> true', 'myCar instanceof Object -> true', 'Prototype chain verified']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Multiple Properties</h4>
              <p className="text-xs text-muted-foreground">
                Inherit and add your own properties
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return 'I am ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  
  work() {
    return this.name + ' is working as ' + this.jobTitle;
  }
}

const emp = new Employee('Alice', 30, 'Developer');
console.log(emp.introduce());
console.log(emp.work());
console.log(emp.jobTitle);`}
              </pre>
              <SnippetOutput lines={['emp.introduce() -> "I am Alice"', 'emp.work() -> "Alice is working as Developer"', 'emp.jobTitle -> "Developer"', 'Combined parent & child properties']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Inheriting Static Methods</h4>
              <p className="text-xs text-muted-foreground">
                Static methods are also inherited
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Shape {
  static getDescription() {
    return 'A geometric shape';
  }
  
  static count = 0;
}

class Circle extends Shape {
  static getType() {
    return 'Circle';
  }
}

// Child class inherits static methods
console.log(Circle.getDescription());
console.log(Circle.getType());

// Child can access parent's static properties
Circle.count++;
console.log(Circle.count);`}
              </pre>
              <SnippetOutput lines={['Circle.getDescription() -> "A geometric shape"', 'Circle.getType() -> "Circle"', 'Circle.count -> 1', 'Static members inherited!']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The super Keyword */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowUp className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            The super Keyword
          </CardTitle>
          <CardDescription className="text-base">
            Access parent class constructor and methods using super.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Two Uses of super</AlertTitle>
            <AlertDescription>
              1) <code className="font-mono text-xs">super()</code> - Call parent constructor (must be first in child constructor)
              <br />
              2) <code className="font-mono text-xs">super.method()</code> - Call parent methods
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">super() in Constructor</h4>
              <p className="text-xs text-muted-foreground">
                Initialize parent class properties
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
    this.size = size;
  }
}

const square = new Square(5);
console.log(square.getArea());
console.log(square.width);
console.log(square.height);
console.log(square.size);`}
              </pre>
              <SnippetOutput lines={['square.getArea() -> 25', 'square.width -> 5', 'square.height -> 5', 'square.size -> 5', 'super() initializes parent']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Must Call super() First</h4>
              <p className="text-xs text-muted-foreground">
                super() required before using this
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    // Must call super() first
    super(name);
    
    // NOW we can use 'this'
    this.age = age;
  }
}

const child = new Child('Alice', 10);
console.log(child.name);
console.log(child.age);`}
              </pre>
              <SnippetOutput lines={['child.name -> "Alice"', 'child.age -> 10', 'super() must come first!', 'Then you can use this']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">super.method() Call</h4>
              <p className="text-xs text-muted-foreground">
                Call parent class methods
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Animal {
  speak() {
    return 'Animal makes a sound';
  }
}

class Cat extends Animal {
  speak() {
    const parentSound = super.speak();
    return parentSound + ' - specifically meows';
  }
}

const cat = new Cat();
console.log(cat.speak());

class Dog extends Animal {
  speak() {
    return 'Dog barks';
  }
}

const dog = new Dog();
console.log(dog.speak());`}
              </pre>
              <SnippetOutput lines={['cat.speak() -> "Animal makes a sound - specifically meows"', 'dog.speak() -> "Dog barks"', 'super.method() extends behavior', 'Without super, complete override']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">super in Static Methods</h4>
              <p className="text-xs text-muted-foreground">
                Call parent static methods
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Base {
  static greet() {
    return 'Hello from Base';
  }
}

class Derived extends Base {
  static greet() {
    const baseGreeting = super.greet();
    return baseGreeting + ' and Derived';
  }
}

console.log(Base.greet());
console.log(Derived.greet());

class Extended extends Base {
  static farewell() {
    return 'Goodbye';
  }
}

console.log(Extended.greet());
console.log(Extended.farewell());`}
              </pre>
              <SnippetOutput lines={['Base.greet() -> "Hello from Base"', 'Derived.greet() -> "Hello from Base and Derived"', 'Extended has both methods', 'super works in static context']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Method Overriding */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Method Overriding & Polymorphism
          </CardTitle>
          <CardDescription className="text-base">
            Child classes can override parent methods to provide specialized behavior.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Complete Override
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Vehicle {
  start() {
    return 'Vehicle starting...';
  }
  
  stop() {
    return 'Vehicle stopping...';
  }
}

class ElectricCar extends Vehicle {
  start() {
    return 'Electric motor powering on silently';
  }
}

const tesla = new ElectricCar();
console.log(tesla.start());
console.log(tesla.stop());`}
              </pre>
              <SnippetOutput lines={['tesla.start() -> "Electric motor powering on silently"', 'tesla.stop() -> "Vehicle stopping..."', 'start() overridden, stop() inherited']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Extend with super
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Logger {
  log(message) {
    console.log('[LOG]:', message);
  }
}

class TimestampLogger extends Logger {
  log(message) {
    const timestamp = new Date().toISOString();
    const enhanced = timestamp + ' - ' + message;
    super.log(enhanced);
  }
}

const logger = new TimestampLogger();
logger.log('User logged in');`}
              </pre>
              <SnippetOutput lines={['[LOG]: 2024-01-01T12:00:00.000Z - User logged in', 'Extended parent behavior with timestamp']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Polymorphism in Action
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  
  area() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => {
  console.log('Area:', shape.area().toFixed(2));
});`}
              </pre>
              <SnippetOutput lines={['Area: 78.54 (Circle)', 'Area: 16.00 (Square)', 'Same interface, different implementations', 'Polymorphism!']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Multi-Level Override
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`class Animal {
  move() {
    return 'Animal moves';
  }
}

class Mammal extends Animal {
  move() {
    return super.move() + ' on land';
  }
}

class Dog extends Mammal {
  move() {
    return super.move() + ' by running';
  }
}

const dog = new Dog();
console.log(dog.move());`}
              </pre>
              <SnippetOutput lines={['dog.move() -> "Animal moves on land by running"', 'Each level extends the previous', 'Multi-level inheritance chain']} />
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
            Practical inheritance patterns used in production applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Error Handling Hierarchy</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(resource + ' not found', 404);
    this.name = 'NotFoundError';
  }
}

try {
  throw new ValidationError('Invalid email');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.statusCode);
}`}
              </pre>
              <SnippetOutput lines={['error.name -> "ValidationError"', 'error.message -> "Invalid email"', 'error.statusCode -> 400', 'Clean error hierarchy']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">UI Component Hierarchy</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }
  
  render() {
    return '<div>Component</div>';
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  
  handleClick() {
    this.state.clicked = true;
    console.log('Button clicked!');
  }
  
  render() {
    return '<button>' + this.props.text + '</button>';
  }
}

const btn = new Button({ text: 'Click me' });
console.log(btn.render());
btn.handleClick();`}
              </pre>
              <SnippetOutput lines={['btn.render() -> "<button>Click me</button>"', 'btn.handleClick() -> "Button clicked!"', 'Component hierarchy']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Database Model Hierarchy</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Model {
  constructor(data) {
    this.data = data;
    this.createdAt = new Date();
  }
  
  save() {
    console.log('Saving to database...');
    return true;
  }
  
  validate() {
    return true;
  }
}

class User extends Model {
  constructor(username, email) {
    super({ username, email });
    this.role = 'user';
  }
  
  validate() {
    return this.data.email.includes('@');
  }
  
  login() {
    console.log(this.data.username + ' logged in');
  }
}

const user = new User('alice', 'alice@email.com');
console.log(user.validate());
user.save();
user.login();`}
              </pre>
              <SnippetOutput lines={['user.validate() -> true', 'Saving to database...', 'alice logged in', 'Model base class']} />
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3">Payment Processing System</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`class Payment {
  constructor(amount) {
    this.amount = amount;
    this.status = 'pending';
  }
  
  process() {
    throw new Error('Must implement process()');
  }
  
  refund() {
    this.status = 'refunded';
    return 'Refund processed';
  }
}

class CreditCardPayment extends Payment {
  constructor(amount, cardNumber) {
    super(amount);
    this.cardNumber = cardNumber;
  }
  
  process() {
    console.log('Processing credit card...');
    this.status = 'completed';
    return 'Payment successful';
  }
}

const payment = new CreditCardPayment(100, '1234');
console.log(payment.process());`}
              </pre>
              <SnippetOutput lines={['Processing credit card...', 'payment.process() -> "Payment successful"', 'Strategy pattern with inheritance']} />
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
              <li>✅ Use inheritance for clear "IS-A" relationships</li>
              <li>✅ Always call <code className="font-mono text-xs">super()</code> first in child constructor</li>
              <li>✅ Use <code className="font-mono text-xs">super.method()</code> to extend parent behavior</li>
              <li>✅ Keep inheritance hierarchies shallow (max 2-3 levels)</li>
              <li>✅ Override methods to provide specialized behavior</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't use inheritance when composition is better</li>
              <li>❌ Don't forget to call <code className="font-mono text-xs">super()</code> in child constructor</li>
              <li>❌ Don't create deep inheritance chains (hard to maintain)</li>
              <li>❌ Don't override without understanding parent behavior</li>
              <li>❌ Don't use inheritance just to share code (use composition)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-4 h-4 mr-2" />
            Practice Class Inheritance
          </CardTitle>
          <CardDescription className="text-base">
            Interactive demo with extends, super, method overriding, and multi-level inheritance. Open the console!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">inheritance-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Inheritance patterns</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
