'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Boxes,
  Sparkles,
  Code2,
  Lightbulb,
  Key,
  UserCircle,
  Package,
} from 'lucide-react';

export default function JavaScriptObjects() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Boxes}
        category="JavaScript Fundamentals"
        title="Objects"
        description="Store related data together using key-value pairs - like a contact card"
        colorTheme="yellow"
      />

      {/* What are Objects? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-cyan-50/20 dark:from-indigo-950/10 dark:via-blue-950/5 dark:to-cyan-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Objects: Groups of Related Data
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                An object is like a <strong className="text-indigo-700 dark:text-indigo-400">labeled container</strong> that holds related information. Think of it like a contact card with name, phone, and email - all the info about one person in one place!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800/30">
            <Boxes className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-lg">Objects vs Arrays</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Arrays</strong> = Numbered list [1, 2, 3]<br/>
              <strong>Objects</strong> = Named properties {'{ name: "Alice", age: 25 }'}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Objects */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Creating Objects</CardTitle>
              <CardDescription>Use curly braces {'{ }'} with key-value pairs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Object Syntax</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30 mb-4">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const objectName = {
  key1: value1,
  key2: value2
};`}</pre>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">key</code> = property name</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">•</span>
                  <span><code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">value</code> = the data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Separate pairs with commas</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Creating Objects"
        description="Store multiple pieces of related information"
        code={`// Create a user object
const user = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  isActive: true
};

console.log(user);
// Output: { name: 'Alice', age: 25, city: 'New York', isActive: true }

// Create a product object
const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  inStock: true
};

console.log(product);
// Output: { id: 101, name: 'Laptop', price: 999, inStock: true }

// Empty object
const emptyObject = {};
console.log(emptyObject);
// Output: {}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Accessing Properties */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Key className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Accessing Object Properties</CardTitle>
              <CardDescription>Two ways: dot notation and bracket notation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-lg mb-3 text-green-700 dark:text-green-300">Dot Notation (Most Common)</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30 mb-3">
                <code className="text-sm font-mono text-gray-800 dark:text-gray-200">object.propertyName</code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simple and clean - use when you know the property name
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">Bracket Notation</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30 mb-3">
                <code className="text-sm font-mono text-gray-800 dark:text-gray-200">object['propertyName']</code>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use with spaces, variables, or special characters
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Accessing Properties"
        description="Get values from objects"
        code={`const person = {
  name: 'Bob',
  age: 30,
  city: 'Los Angeles',
  'favorite color': 'blue'  // Property with space
};

// Dot notation (most common)
console.log(person.name);  // Bob
console.log(person.age);   // 30
console.log(person.city);  // Los Angeles

// Bracket notation (for special cases)
console.log(person['favorite color']);  // blue

// Using a variable
const propertyName = 'age';
console.log(person[propertyName]);  // 30

// Property doesn't exist
console.log(person.country);  // undefined`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Modifying Objects */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Adding & Changing Properties</CardTitle>
              <CardDescription>Objects are flexible - add, change, or remove properties anytime</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">Add</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border mb-2">
                <code className="text-xs font-mono">obj.newKey = value</code>
              </div>
              <p className="text-xs text-gray-500">Creates new property</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">Change</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border mb-2">
                <code className="text-xs font-mono">obj.key = newValue</code>
              </div>
              <p className="text-xs text-gray-500">Updates existing property</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">Delete</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border mb-2">
                <code className="text-xs font-mono">delete obj.key</code>
              </div>
              <p className="text-xs text-gray-500">Removes property</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Modifying Objects"
        description="Add, change, and remove properties"
        code={`const car = {
  brand: 'Toyota',
  year: 2020
};

console.log(car);
// Output: { brand: 'Toyota', year: 2020 }

// Add new property
car.color = 'Blue';
console.log(car);
// Output: { brand: 'Toyota', year: 2020, color: 'Blue' }

// Change existing property
car.year = 2021;
console.log(car);
// Output: { brand: 'Toyota', year: 2021, color: 'Blue' }

// Delete property
delete car.color;
console.log(car);
// Output: { brand: 'Toyota', year: 2021 }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Methods in Objects */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Object Methods</CardTitle>
              <CardDescription>Objects can store functions too!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Functions as Properties</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When a function is stored in an object, it's called a <strong>method</strong>
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = {
  name: 'Alice',
  sayHello: function() {
    console.log('Hello!');
  }
};

person.sayHello();  // Hello!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object Methods Example"
        description="Store functions inside objects"
        code={`const calculator = {
  // Properties
  name: 'Simple Calculator',
  version: 1.0,
  
  // Methods (functions)
  add: function(a, b) {
    return a + b;
  },
  
  subtract: function(a, b) {
    return a - b;
  },
  
  multiply: function(a, b) {
    return a * b;
  }
};

// Use the methods
console.log(calculator.name);  // Simple Calculator

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(6, 7));  // 42`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Nested Objects */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Boxes className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Nested Objects</CardTitle>
              <CardDescription>Objects inside objects - like folders in folders</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Chain Dot Notation</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Access nested properties by chaining dots: <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">object.level1.level2</code>
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const company = {
  name: 'Tech Corp',
  address: {
    street: '123 Main St',
    city: 'Boston'
  }
};

console.log(company.address.city);
// Output: Boston`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Nested Objects Example"
        description="Objects containing other objects"
        code={`const student = {
  name: 'Emma',
  age: 20,
  address: {
    street: '456 Oak Ave',
    city: 'Seattle',
    state: 'WA'
  },
  grades: {
    math: 95,
    english: 88,
    science: 92
  }
};

// Access nested properties
console.log(student.name);  // Emma
console.log(student.address.city);  // Seattle
console.log(student.grades.math);   // 95

// Change nested property
student.address.city = 'Portland';
console.log(student.address.city);  // Portland`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: User Profile"
        description="Complete user profile with all information in one object"
        code={`const userProfile = {
  // Basic info
  id: 12345,
  username: 'alice_dev',
  email: 'alice@example.com',
  
  // Personal details
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 28,
  
  // Address (nested object)
  address: {
    street: '123 Code Lane',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102'
  },
  
  // Skills array
  skills: ['JavaScript', 'React', 'Node.js'],
  
  // Account status
  isActive: true,
  isPremium: false,
  
  // Method
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// Access everything
console.log('Username:', userProfile.username);
console.log('City:', userProfile.address.city);
console.log('Skills:', userProfile.skills.join(', '));
console.log('Full Name:', userProfile.getFullName());

// Output: Username: alice_dev
// Output: City: San Francisco
// Output: Skills: JavaScript, React, Node.js
// Output: Full Name: Alice Johnson`}
        language="javascript"
        colorTheme="yellow"
        icon={UserCircle}
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
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Objects = Key-Value Pairs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store related data: {'{ name: "Alice", age: 25 }'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔑</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Access with Dot</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use object.property to get values
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✏️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Flexible & Dynamic</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add, change, delete properties anytime
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Methods = Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Store functions as object properties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
