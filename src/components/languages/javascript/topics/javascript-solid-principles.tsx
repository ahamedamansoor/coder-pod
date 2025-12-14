'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Layers,
  CheckCircle,
  XCircle,
  Box,
  Lightbulb,
  Target,
} from 'lucide-react';

export default function JavaScriptSOLIDPrinciples() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Best Practices"
        title="SOLID Principles"
        description="Five principles for better object-oriented design"
        colorTheme="blue"
      />

      {/* What is SOLID */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are SOLID Principles?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SOLID is an acronym for five design principles that help create <strong className="text-indigo-700 dark:text-indigo-400">maintainable</strong>, <strong className="text-purple-700 dark:text-purple-400">flexible</strong>, and <strong className="text-pink-700 dark:text-pink-400">scalable</strong> object-oriented code. These principles guide you to write better classes and functions.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">S - Single Responsibility Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">A class should have one reason to change</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100">O - Open/Closed Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Open for extension, closed for modification</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">L - Liskov Substitution Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Subtypes must be substitutable for their base types</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">I - Interface Segregation Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Many specific interfaces are better than one general interface</p>
            </div>
            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border-l-4 border-pink-500">
              <h4 className="font-semibold text-pink-900 dark:text-pink-100">D - Dependency Inversion Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Depend on abstractions, not concretions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Single Responsibility Principle */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>S - Single Responsibility Principle (SRP)</CardTitle>
              <CardDescription>One class, one responsibility</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30 mb-4">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>The Principle</AlertTitle>
            <AlertDescription>
              A class should have only one reason to change. Each class should focus on a single responsibility or concern.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Violates SRP
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Too many responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  // Responsibility 1: Data management
  save() {
    database.insert(this);
  }
  
  // Responsibility 2: Email
  sendWelcomeEmail() {
    emailService.send(this.email, 'Welcome!');
  }
  
  // Responsibility 3: Validation
  validate() {
    return this.email.includes('@');
  }
  
  // Responsibility 4: Formatting
  toHTML() {
    return \`<div>\${this.name}</div>\`;
  }
}
// ❌ User class does everything!`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ✅ Follows SRP
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Separate responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    database.insert(user);
  }
}

class EmailService {
  sendWelcome(email) {
    emailService.send(email, 'Welcome!');
  }
}

class UserValidator {
  validate(user) {
    return user.email.includes('@');
  }
}

class UserFormatter {
  toHTML(user) {
    return \`<div>\${user.name}</div>\`;
  }
}
// ✅ Each class has one job!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Open/Closed Principle */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Box className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>O - Open/Closed Principle (OCP)</CardTitle>
              <CardDescription>Extend behavior without modifying existing code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30 mb-4">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>The Principle</AlertTitle>
            <AlertDescription>
              Software entities should be open for extension but closed for modification. Add new functionality without changing existing code.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Violates OCP</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Must modify class to add new shapes
class AreaCalculator {
  calculate(shapes) {
    let total = 0;
    
    for (const shape of shapes) {
      if (shape.type === 'circle') {
        total += Math.PI * shape.radius ** 2;
      } else if (shape.type === 'square') {
        total += shape.side ** 2;
      } else if (shape.type === 'rectangle') {
        total += shape.width * shape.height;
      }
      // Need to modify this for new shapes!
    }
    
    return total;
  }
}
// ❌ Adding triangle requires modifying this class`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Follows OCP</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Each shape knows its own area
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}

class AreaCalculator {
  calculate(shapes) {
    return shapes.reduce((total, shape) => 
      total + shape.area(), 0
    );
  }
}
// ✅ Add Triangle without modifying calculator!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liskov Substitution Principle */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>L - Liskov Substitution Principle (LSP)</CardTitle>
              <CardDescription>Subtypes must be substitutable for their base types</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30 mb-4">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle>The Principle</AlertTitle>
            <AlertDescription>
              Objects of a subclass should be able to replace objects of the parent class without breaking the application.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Violates LSP</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Bird can fly
class Bird {
  fly() {
    return 'Flying!';
  }
}

// But penguins can't fly!
class Penguin extends Bird {
  fly() {
    throw new Error("Can't fly!");
  }
}

function makeBirdFly(bird) {
  return bird.fly(); // Breaks for Penguin!
}

const bird = new Bird();
makeBirdFly(bird); // ✅ Works

const penguin = new Penguin();
makeBirdFly(penguin); // ❌ Throws error!
// Can't substitute Penguin for Bird`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Follows LSP</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Better hierarchy
class Bird {
  move() {
    return 'Moving!';
  }
}

class FlyingBird extends Bird {
  fly() {
    return 'Flying!';
  }
  move() {
    return this.fly();
  }
}

class Penguin extends Bird {
  swim() {
    return 'Swimming!';
  }
  move() {
    return this.swim();
  }
}

function makeBirdMove(bird) {
  return bird.move(); // Works for all birds!
}

makeBirdMove(new FlyingBird()); // ✅ Flying!
makeBirdMove(new Penguin()); // ✅ Swimming!
// All birds can be substituted`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interface Segregation & Dependency Inversion */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Box className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>I & D - Interface Segregation & Dependency Inversion</CardTitle>
              <CardDescription>Final two principles</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle>Interface Segregation Principle (ISP)</AlertTitle>
              <AlertDescription>
                Clients should not be forced to depend on methods they don't use. Split large interfaces into smaller, specific ones.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
                <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3">
                  <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Violates ISP</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950 p-5">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Fat interface - too many methods
class Worker {
  work() { }
  eat() { }
  sleep() { }
}

// Robot doesn't eat or sleep!
class Robot extends Worker {
  work() { return 'Working'; }
  eat() { throw new Error('No!'); }
  sleep() { throw new Error('No!'); }
}
// ❌ Forced to implement unused methods`}</pre>
                </div>
              </div>

              <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
                <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3">
                  <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Follows ISP</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950 p-5">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Separate interfaces
class Workable {
  work() { }
}

class Eatable {
  eat() { }
}

class Sleepable {
  sleep() { }
}

class Human extends Workable {
  // Also implements Eatable, Sleepable
}

class Robot extends Workable {
  // Only implements what it needs!
}
// ✅ Each class implements only what it uses`}</pre>
                </div>
              </div>
            </div>

            <Alert className="bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800/30 mt-6">
              <Lightbulb className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              <AlertTitle>Dependency Inversion Principle (DIP)</AlertTitle>
              <AlertDescription>
                High-level modules should not depend on low-level modules. Both should depend on abstractions.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
                <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3">
                  <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Violates DIP</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950 p-5">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Depends on concrete implementation
class MySQLDatabase {
  save(data) { /* MySQL logic */ }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase(); // ❌ Tight coupling
  }
  
  createUser(user) {
    this.db.save(user);
  }
}
// Can't switch to PostgreSQL without modifying UserService`}</pre>
                </div>
              </div>

              <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
                <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3">
                  <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Follows DIP</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950 p-5">
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Depends on abstraction
class Database {
  save(data) { throw new Error('Not implemented'); }
}

class MySQLDatabase extends Database {
  save(data) { /* MySQL logic */ }
}

class UserService {
  constructor(database) {
    this.db = database; // ✅ Injected dependency
  }
  
  createUser(user) {
    this.db.save(user);
  }
}

const service = new UserService(new MySQLDatabase());
// ✅ Easy to swap databases!`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits of SOLID */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Benefits of SOLID Principles</CardTitle>
              <CardDescription>Why follow these principles?</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Advantages
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Easier to maintain and modify</li>
                <li>• Better code organization</li>
                <li>• Reduced coupling between components</li>
                <li>• Easier to test</li>
                <li>• More flexible and scalable</li>
                <li>• Easier to understand</li>
                <li>• Promotes code reuse</li>
                <li>• Reduces bugs</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                💡 When to Apply
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Large codebases</li>
                <li>• Team projects</li>
                <li>• Long-term projects</li>
                <li>• When building libraries/frameworks</li>
                <li>• Complex business logic</li>
                <li>• Not for small scripts</li>
                <li>• Balance with simplicity</li>
                <li>• Use pragmatically</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">S</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Single Responsibility</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    One class, one job<br/>
                    One reason to change
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">O</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Open/Closed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Open for extension<br/>
                    Closed for modification
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">L</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Liskov Substitution</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Subtypes are substitutable<br/>
                    For their base types
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">I</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Interface Segregation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Specific interfaces<br/>
                    Not one general-purpose
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30 sm:col-span-2">
              <div className="flex items-start gap-3">
                <span className="text-3xl">D</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Dependency Inversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Depend on abstractions, not concrete implementations<br/>
                    High-level modules independent of low-level modules
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-300 dark:border-indigo-700">
            <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-indigo-900 dark:text-indigo-100">Guidelines, Not Rules</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              SOLID principles are <strong>guidelines</strong> for better design. Apply them pragmatically—don't over-engineer simple solutions!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
