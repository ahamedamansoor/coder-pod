'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Package,
  Users,
} from 'lucide-react';

export default function JavaScriptDesignPatternsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript ES6+"
        title="Design Patterns"
        description="Common patterns for better code organization"
        colorTheme="yellow"
      />

      {/* What are Design Patterns? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-blue-50/20 dark:from-teal-950/10 dark:via-cyan-950/5 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Design Patterns: Proven Solutions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-teal-700 dark:text-teal-400">Design patterns</strong> are reusable solutions to common problems. They're not code you copy-paste, but <strong>approaches</strong> that help organize and structure your code!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-teal-200 dark:border-teal-800/30">
            <Package className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <AlertTitle className="text-lg">Categories of Patterns</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Creational</strong> - How objects are created<br/>
              <strong>Structural</strong> - How objects relate to each other<br/>
              <strong>Behavioral</strong> - How objects communicate
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Module Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Module Pattern</CardTitle>
              <CardDescription>Encapsulate private data and methods</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Private + Public Interface</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// IIFE creates private scope
const Calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function log(operation, value) {
    console.log(\`\${operation}: \${value}\`);
  }
  
  // Public API
  return {
    add(value) {
      result += value;
      log('Add', value);
      return this;
    },
    subtract(value) {
      result -= value;
      log('Subtract', value);
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      return this;
    }
  };
})();

// Usage
Calculator.add(5).subtract(2).add(10);
console.log(Calculator.getResult()); // 13
// result is private - can't access directly
console.log(Calculator.result); // undefined`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Module Pattern with ES6 Modules"
        description="Modern approach using closures (ES6 modules simulated)"
        code={`// Simulating module pattern with IIFE
const CounterModule = (() => {
  // Private variable
  let count = 0;
  
  // Public API (simulating exports)
  return {
    increment() {
      count++;
      console.log('Incremented:', count);
    },
    decrement() {
      count--;
      console.log('Decremented:', count);
    },
    getCount() {
      return count;
    }
  };
})();

// Using the module (simulating import)
CounterModule.increment();
CounterModule.increment();
console.log('Count:', CounterModule.getCount()); // 2
// count variable is private, not accessible
console.log('Private count accessible?', CounterModule.count); // undefined

// Revealing Module Pattern
const UserModule = (() => {
  // Private
  const users = [];
  
  function validateUser(user) {
    return user.name && user.email;
  }
  
  // Reveal selected functions
  return {
    addUser(user) {
      if (validateUser(user)) {
        users.push(user);
        console.log('User added:', user.name);
        return true;
      }
      console.log('Invalid user');
      return false;
    },
    getAllUsers() {
      return [...users]; // Return copy to prevent mutation
    },
    getUserCount() {
      return users.length;
    }
  };
})();

UserModule.addUser({ name: 'Alice', email: 'alice@example.com' });
UserModule.addUser({ name: 'Bob', email: 'bob@example.com' });
console.log('All users:', UserModule.getAllUsers());
console.log('User count:', UserModule.getUserCount());

// In actual ES6 modules:
// export function increment() { ... }
// import { increment } from './counter.js';`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Singleton Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Singleton Pattern</CardTitle>
              <CardDescription>Only one instance exists</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Single Shared Instance</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    
    this.connection = 'Connected to DB';
    Database.instance = this;
  }
  
  query(sql) {
    console.log(\`Executing: \${sql}\`);
  }
}

// Both get the same instance
const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true (same instance!)

// With ES6 modules (natural singleton)
// config.js
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

export default config;

// Any file importing config gets the same object`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Factory Pattern"
        description="Create objects without specifying exact class"
        code={`// Factory Pattern
class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
  }
}

class Truck {
  constructor(options) {
    this.wheels = options.wheels || 6;
    this.state = options.state || 'used';
    this.color = options.color || 'blue';
  }
}

class VehicleFactory {
  createVehicle(type, options) {
    switch (type) {
      case 'car':
        return new Car(options);
      case 'truck':
        return new Truck(options);
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

// Usage
const factory = new VehicleFactory();
const car = factory.createVehicle('car', { color: 'red' });
const truck = factory.createVehicle('truck', { wheels: 8 });

// Simple function factory
function createUser(type) {
  const users = {
    admin: { role: 'admin', permissions: ['read', 'write', 'delete'] },
    editor: { role: 'editor', permissions: ['read', 'write'] },
    viewer: { role: 'viewer', permissions: ['read'] }
  };
  
  return (name) => ({
    name,
    ...users[type]
  });
}

const createAdmin = createUser('admin');
const alice = createAdmin('Alice');
console.log(alice); 
// { name: 'Alice', role: 'admin', permissions: [...] }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Observer Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Observer Pattern (Pub/Sub)</CardTitle>
              <CardDescription>Subscribe to events and get notified</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Event-Driven Communication</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    const callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }
  
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(
      cb => cb !== callback
    );
  }
}

// Usage
const emitter = new EventEmitter();

// Subscribe
emitter.on('userLogin', (user) => {
  console.log(\`\${user.name} logged in\`);
});

emitter.on('userLogin', (user) => {
  console.log(\`Logging event for \${user.email}\`);
});

// Emit event
emitter.emit('userLogin', { name: 'Alice', email: 'alice@example.com' });
// Both callbacks execute!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="More Design Patterns"
        description="Strategy, Decorator, and Command patterns"
        code={`// Strategy Pattern - Different algorithms
class Shipping {
  constructor(strategy) {
    this.strategy = strategy;
  }
  
  calculate(pkg) {
    return this.strategy.calculate(pkg);
  }
}

const strategies = {
  standard: {
    calculate: (pkg) => pkg.weight * 0.5
  },
  express: {
    calculate: (pkg) => pkg.weight * 1.5
  },
  overnight: {
    calculate: (pkg) => pkg.weight * 3.0
  }
};

const parcel = { weight: 10 };
const standard = new Shipping(strategies.standard);
const express = new Shipping(strategies.express);

console.log('Standard shipping:', standard.calculate(parcel));  // 5
console.log('Express shipping:', express.calculate(parcel));   // 15

// Decorator Pattern - Add functionality
class Coffee {
  cost() {
    return 5;
  }
}

function withMilk(coffee) {
  const cost = coffee.cost();
  coffee.cost = () => cost + 2;
  return coffee;
}

function withSugar(coffee) {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
  return coffee;
}

let myCoffee = new Coffee();
myCoffee = withMilk(myCoffee);
myCoffee = withSugar(myCoffee);
console.log(myCoffee.cost()); // 8

// Command Pattern - Encapsulate actions
class Command {
  constructor(execute, undo) {
    this.execute = execute;
    this.undo = undo;
  }
}

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  
  executeCommand(command) {
    this.history.push(command);
    command.execute();
  }
  
  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

const calc = new Calculator();

const addCommand = new Command(
  () => { calc.value += 10; },
  () => { calc.value -= 10; }
);

calc.executeCommand(addCommand);
console.log(calc.value); // 10
calc.undo();
console.log(calc.value); // 0`}
        language="javascript"
        colorTheme="yellow"
        icon={Package}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: State Management"
        description="Combining patterns for app state"
        code={`// State management with multiple patterns
class Store {
  // Singleton
  constructor() {
    if (Store.instance) {
      return Store.instance;
    }
    
    this.state = {};
    this.listeners = [];
    Store.instance = this;
  }
  
  // Observer pattern
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
  
  notify() {
    this.listeners.forEach(callback => callback(this.state));
  }
  
  // Command pattern
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.notify();
  }
  
  // Strategy pattern
  reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: (state.count || 0) + 1 };
      case 'DECREMENT':
        return { ...state, count: (state.count || 0) - 1 };
      default:
        return state;
    }
  }
  
  getState() {
    return this.state;
  }
}

// Usage (like Redux!)
const store = new Store();

// Subscribe to changes
const unsubscribe = store.subscribe((state) => {
  console.log('State updated:', state);
});

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
// State updated: { count: 1 }

store.dispatch({ type: 'INCREMENT' });
// State updated: { count: 2 }

store.dispatch({ type: 'DECREMENT' });
// State updated: { count: 1 }

// Same instance everywhere
const store2 = new Store();
console.log(store === store2); // true

// Unsubscribe when done
unsubscribe();`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Module Pattern</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encapsulate private data<br/>
                    ES6 modules are natural singletons
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏭</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Factory Pattern</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create objects dynamically<br/>
                    Hide complex creation logic
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Observer Pattern</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Event-driven communication<br/>
                    Pub/Sub, React, Vue use this
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Singleton Pattern</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    One instance only<br/>
                    Config, state management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Don't overuse patterns! Use them when they solve a real problem. Modern JavaScript (ES6+) and frameworks often provide better built-in solutions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
