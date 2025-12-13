'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Target,
  Sparkles,
  Code2,
  Lightbulb,
  User,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptThisKeyword() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Target}
        category="JavaScript Fundamentals"
        title="The 'this' Keyword"
        description="Understanding 'this' - refers to the object that's calling the function"
        colorTheme="yellow"
      />

      {/* What is this? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is "this"?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded text-base">this</code> is a special keyword that refers to <strong className="text-cyan-700 dark:text-cyan-400">the object that's calling the function</strong>. Think of it as "whoever is doing the action right now."
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <Target className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">Simple Way to Think About It</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              When you say "I am hungry", "I" refers to YOU. Similarly, when an object's method says <code className="px-2 py-0.5 bg-cyan-100 dark:bg-cyan-900/30 rounded text-xs">this</code>, it refers to THAT object!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Basic Example</CardTitle>
              <CardDescription>Using 'this' in an object method</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Object with Method</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                When you have a method inside an object, <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">this</code> refers to that object
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = {
  name: 'Alice',
  age: 25,
  
  introduce: function() {
    console.log('Hi, I am ' + this.name);
    console.log('I am ' + this.age + ' years old');
  }
};

person.introduce();
// Output: Hi, I am Alice
// Output: I am 25 years old

// "this" refers to the person object`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic 'this' Example"
        description="this refers to the object calling the method"
        code={`const dog = {
  name: 'Buddy',
  breed: 'Golden Retriever',
  
  bark: function() {
    console.log(this.name + ' says Woof!');
  },
  
  getInfo: function() {
    console.log('Name: ' + this.name);
    console.log('Breed: ' + this.breed);
  }
};

dog.bark();     // Buddy says Woof!
dog.getInfo();  // Name: Buddy
                // Breed: Golden Retriever

// this.name = dog.name (Buddy)
// this.breed = dog.breed (Golden Retriever)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Why Use this? */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Why Use 'this'?</CardTitle>
              <CardDescription>Access the object's own properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-lg mb-4 text-red-700 dark:text-red-300">❌ Without 'this' - Doesn't Work</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Bob',
  greet: function() {
    console.log('Hello ' + name);
    // ❌ ERROR! name is not defined
  }
};`}</pre>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Without <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">this</code>, JavaScript doesn't know which name you mean
              </p>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-lg mb-4 text-green-700 dark:text-green-300">✅ With 'this' - Works!</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Bob',
  greet: function() {
    console.log('Hello ' + this.name);
    // ✅ Works! this.name = Bob
  }
};`}</pre>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                With <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">this</code>, it knows to look at the user object
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Example: Calculator"
        description="Using 'this' to access object properties"
        code={`const calculator = {
  num1: 0,
  num2: 0,
  
  setNumbers: function(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  
  add: function() {
    return this.num1 + this.num2;
  },
  
  multiply: function() {
    return this.num1 * this.num2;
  },
  
  getInfo: function() {
    console.log('Number 1: ' + this.num1);
    console.log('Number 2: ' + this.num2);
  }
};

calculator.setNumbers(5, 3);
calculator.getInfo();
// Output: Number 1: 5
// Output: Number 2: 3

console.log('Sum: ' + calculator.add());        // Sum: 8
console.log('Product: ' + calculator.multiply()); // Product: 15`}
        language="javascript"
        colorTheme="yellow"
        icon={User}
      />

      {/* Multiple Objects */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Same Method, Different Objects</CardTitle>
              <CardDescription>'this' changes based on who calls it</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Dynamic 'this'</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">this</code> refers to whoever called the function - different objects can use the same method!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const car1 = {
  brand: 'Toyota',
  showBrand: function() {
    console.log('This is a ' + this.brand);
  }
};

const car2 = {
  brand: 'Honda',
  showBrand: function() {
    console.log('This is a ' + this.brand);
  }
};

car1.showBrand();  // This is a Toyota
car2.showBrand();  // This is a Honda

// Same method, different 'this'!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Multiple Objects Example"
        description="this refers to the calling object"
        code={`// Create two user objects
const user1 = {
  username: 'alice123',
  email: 'alice@example.com',
  
  displayInfo: function() {
    console.log('Username: ' + this.username);
    console.log('Email: ' + this.email);
  }
};

const user2 = {
  username: 'bob456',
  email: 'bob@example.com',
  
  displayInfo: function() {
    console.log('Username: ' + this.username);
    console.log('Email: ' + this.email);
  }
};

console.log('User 1:');
user1.displayInfo();
// Output: Username: alice123
// Output: Email: alice@example.com

console.log('\\nUser 2:');
user2.displayInfo();
// Output: Username: bob456
// Output: Email: bob@example.com

// Same method name, but 'this' points to different objects!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Arrow Functions and 'this' */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <ArrowRight className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Arrow Functions Don't Have 'this'</CardTitle>
              <CardDescription>Arrow functions inherit 'this' from their surrounding code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Arrow Functions Are Different!</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Arrow functions don't have their own <code className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded text-xs">this</code>. They inherit it from the surrounding code (called "lexical this").
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-3">✅ Regular Function - Has 'this'</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hi, ' + this.name);
  }
};

person.greet();
// Output: Hi, Alice
// this = person object ✅`}</pre>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-3">❌ Arrow Function - No 'this'</h5>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                    <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const person = {
  name: 'Alice',
  greet: () => {
    console.log('Hi, ' + this.name);
  }
};

person.greet();
// Output: Hi, undefined
// this = NOT person! ❌`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800/30">
            <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle>Important Rule</AlertTitle>
            <AlertDescription className="text-base">
              Don't use arrow functions as object methods if you need 'this' to refer to that object. Use regular functions instead!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="'this' in Arrow Functions"
        description="Arrow functions inherit 'this' from surrounding code"
        code={`// Regular function - 'this' works
const user1 = {
  name: 'Bob',
  sayName: function() {
    console.log('My name is ' + this.name);
  }
};

user1.sayName();  // My name is Bob ✅

// Arrow function - 'this' doesn't work
const user2 = {
  name: 'Alice',
  sayName: () => {
    console.log('My name is ' + this.name);
  }
};

user2.sayName();  // My name is undefined ❌

// When arrow functions ARE useful with 'this':
const counter = {
  count: 0,
  
  start: function() {
    // Regular function - 'this' = counter object
    setInterval(() => {
      // Arrow function inherits 'this' from start()
      this.count++;  // Works! ✅
      console.log(this.count);
    }, 1000);
  }
};

// If we used a regular function in setInterval,
// 'this' would NOT be the counter object!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Common Mistake */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Lightbulb className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Beginner Mistake</CardTitle>
              <CardDescription>Forgetting 'this' when accessing properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
            <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">❌ Wrong - Forgetting 'this'</h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const book = {
  title: 'JavaScript Basics',
  pages: 200,
  
  info: function() {
    console.log(title);  // ❌ ERROR!
    console.log(pages);  // ❌ ERROR!
  }
};`}</pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Without <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">this</code>, JavaScript looks for variables named title and pages, not properties
            </p>
          </div>

          <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">✅ Correct - Using 'this'</h4>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border mb-3">
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const book = {
  title: 'JavaScript Basics',
  pages: 200,
  
  info: function() {
    console.log(this.title);  // ✅ Works!
    console.log(this.pages);  // ✅ Works!
  }
};`}</pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              With <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">this</code>, JavaScript knows to look at the book object's properties
            </p>
          </div>
        </CardContent>
      </Card>

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
                <span className="text-2xl">👉</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">this = The Object</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Refers to the object calling the method
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Access Properties</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use this.propertyName to get values
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">➡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Arrow Functions Different</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Arrow functions don't have their own 'this'
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Don't Forget It!</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always use 'this' to access object properties
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
