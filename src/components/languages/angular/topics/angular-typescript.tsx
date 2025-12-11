'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Lightbulb,
  CheckCircle2,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function AngularTypeScript() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Code}
        category="Angular · TypeScript"
        title="TypeScript in Angular"
        description="Learn how TypeScript makes Angular apps safer and easier to build"
        colorTheme="red"
      />

      {/* What is TypeScript? */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">What is TypeScript?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                TypeScript is JavaScript with superpowers! It adds <strong>types</strong> to your code.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Think of types as labels that tell you what kind of data you're working with (numbers, text, objects, etc.).
              </p>
              
              {/* Visual Diagram */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800 mb-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="px-6 py-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border-2 border-yellow-500 text-center">
                    <p className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">JavaScript</p>
                    <p className="text-xs text-muted-foreground mt-1">No types</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="px-6 py-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-500 text-center">
                    <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm">TypeScript</p>
                    <p className="text-xs text-muted-foreground mt-1">With types!</p>
                  </div>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-3">TypeScript = JavaScript + Types</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    <h5 className="text-xs font-semibold">Catch Errors Early</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Find bugs while coding, not after</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <h5 className="text-xs font-semibold">Better Tools</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Auto-complete helps you code faster</p>
                </div>
                
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg border">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <h5 className="text-xs font-semibold">Self-Explaining</h5>
                  </div>
                  <p className="text-xs text-muted-foreground">Code is easier to understand</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Types - Simple Start */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Types - The Building Blocks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Let's start with the most common types you'll use every day.
          </p>

          <CodeSnippetWithOutput
            title="String, Number, and Boolean"
            description="The three most basic types"
            code={`// String - for text
let name: string = 'Alice';
let message: string = 'Hello!';

// Number - for numbers (any kind)
let age: number = 25;
let price: number = 99.99;

// Boolean - for true/false
let isActive: boolean = true;
let hasAccount: boolean = false;`}
            output={[
              "name = 'Alice' (text)",
              'age = 25 (number)',
              'isActive = true (true or false)'
            ]}
            language="typescript"
            colorTheme="blue"
          />

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Remember!</AlertTitle>
            <AlertDescription>
              Use <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">string</code> for text, 
              <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs mx-1">number</code> for numbers, 
              <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">boolean</code> for true/false.
            </AlertDescription>
          </Alert>

          <CodeSnippetWithOutput
            title="Arrays - Lists of Things"
            description="When you have multiple items"
            code={`// Array of strings (list of text)
let names: string[] = ['Alice', 'Bob', 'Charlie'];

// Array of numbers (list of numbers)
let scores: number[] = [95, 87, 92, 88];

// You can also write it like this
let emails: Array<string> = ['a@test.com', 'b@test.com'];`}
            output={[
              "names has 3 items: Alice, Bob, Charlie",
              'scores has 4 numbers',
              '// Both ways work the same!'
            ]}
            language="typescript"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* Objects - Real World Data */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle>Objects - Grouping Related Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Objects let you group related information together. Like a person has a name, age, and email.
          </p>

          <CodeSnippetWithOutput
            title="Simple Object Type"
            description="Defining what an object should look like"
            code={`// Define what a user looks like
let user: {
  name: string;
  age: number;
  email: string;
} = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

// Now user MUST have these fields!
console.log(user.name);  // John
console.log(user.age);    // 30`}
            output={[
              'John',
              '30',
              '// TypeScript makes sure all fields exist!'
            ]}
            language="typescript"
            colorTheme="blue"
          />

          {/* Visual Diagram for Object */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h5 className="font-semibold mb-4 text-center">Object Structure</h5>
            <div className="flex items-start justify-center gap-4">
              <div className="px-6 py-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-500 space-y-2">
                <p className="font-semibold text-purple-700 dark:text-purple-300 text-center text-sm">user</p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px]">string</Badge>
                    <span className="text-muted-foreground">name: "John"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px]">number</Badge>
                    <span className="text-muted-foreground">age: 30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px]">string</Badge>
                    <span className="text-muted-foreground">email: "john@..."</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">Each property has a type!</p>
          </div>
        </CardContent>
      </Card>

      {/* Interfaces - Reusable Types */}
      <Card>
        <CardHeader>
          <CardTitle>Interfaces - Creating Reusable Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Instead of writing the same type over and over, create an interface once and reuse it!
          </p>

          <CodeSnippetWithOutput
            title="Define Once, Use Everywhere"
            description="Interface makes your code cleaner"
            code={`// Define the User type once
interface User {
  id: number;
  name: string;
  email: string;
}

// Now use it anywhere!
let user1: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

let user2: User = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com'
};

// TypeScript checks they match!
let users: User[] = [user1, user2];`}
            output={[
              '// user1 and user2 both follow the User interface',
              '// users is an array of User objects',
              '✓ All type-safe and correct!'
            ]}
            language="typescript"
            colorTheme="emerald"
          />

          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Why Use Interfaces?</AlertTitle>
            <AlertDescription className="text-sm space-y-1">
              <p>✅ Write the type definition once</p>
              <p>✅ Use it in many places</p>
              <p>✅ Easy to update if things change</p>
              <p>✅ Makes code easier to read</p>
            </AlertDescription>
          </Alert>

          <CodeSnippetWithOutput
            title="Optional Properties"
            description="Some fields don't always exist"
            code={`// The ? means optional
interface Product {
  id: number;
  name: string;
  description?: string;  // Optional!
  price: number;
}

// Works without description
let product1: Product = {
  id: 1,
  name: 'Laptop',
  price: 999
};

// Also works with description
let product2: Product = {
  id: 2,
  name: 'Mouse',
  description: 'Wireless gaming mouse',
  price: 49
};`}
            output={[
              '// product1: No description needed',
              '// product2: Has description',
              '✓ Both are valid!'
            ]}
            language="typescript"
            colorTheme="blue"
          />
        </CardContent>
      </Card>

      {/* Functions in TypeScript */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle>Functions - Adding Types to Your Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Functions can have types for their inputs (parameters) and outputs (return value).
          </p>

          <CodeSnippetWithOutput
            title="Basic Function Types"
            description="Tell TypeScript what goes in and what comes out"
            code={`// Function with typed parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Function with string parameter
function greet(name: string): string {
  return 'Hello, ' + name + '!';
}

// Function that returns nothing (void)
function logMessage(message: string): void {
  console.log(message);
}

// Using the functions
let result = add(5, 3);         // result is number
let greeting = greet('Alice');  // greeting is string
logMessage('Hi there!');         // returns nothing`}
            output={[
              'result = 8',
              "greeting = 'Hello, Alice!'",
              'Hi there!',
              '// TypeScript knows the types!'
            ]}
            language="typescript"
            colorTheme="emerald"
          />

          {/* Visual Function Diagram */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
            <h5 className="font-semibold mb-4 text-center">Function Flow</h5>
            <div className="flex items-center justify-center gap-3">
              <div className="px-4 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-500 text-center">
                <p className="text-xs text-muted-foreground mb-1">Input</p>
                <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm">a: number</p>
                <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm">b: number</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="px-6 py-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border-2 border-emerald-500 text-center">
                <p className="text-xs text-muted-foreground mb-1">Function</p>
                <p className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">add()</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="px-4 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-500 text-center">
                <p className="text-xs text-muted-foreground mb-1">Output</p>
                <p className="font-semibold text-purple-700 dark:text-purple-300 text-sm">: number</p>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">Inputs and output are all typed!</p>
          </div>

          <CodeSnippetWithOutput
            title="Optional Parameters"
            description="Parameters that may or may not be provided"
            code={`// The ? makes the parameter optional
function greet(name: string, title?: string): string {
  if (title) {
    return \`Hello, \${title} \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}

// Both ways work!
console.log(greet('Alice'));           // Hello, Alice!
console.log(greet('Bob', 'Dr.'));      // Hello, Dr. Bob!`}
            output={[
              'Hello, Alice!',
              'Hello, Dr. Bob!',
              '// title is optional'
            ]}
            language="typescript"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      {/* TypeScript in Angular Components */}
      <Card className="bg-gradient-to-br from-red-50/60 to-pink-50/60 dark:from-red-950/10 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardHeader>
          <CardTitle>Using TypeScript in Angular</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Here's how everything comes together in a real Angular component!
          </p>

          <CodeSnippetWithOutput
            title="Simple Angular Component"
            description="Component with typed properties and methods"
            code={`import { Component } from '@angular/core';

// Define a User interface
interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  template: \`
    <h2>{{ title }}</h2>
    <div *ngFor="let user of users">
      {{ user.name }} - {{ user.email }}
    </div>
  \`
})
export class UserListComponent {
  // Properties with types
  title: string = 'User List';
  users: User[] = [];
  selectedUser: User | null = null;
  
  // Method with parameter type
  selectUser(user: User): void {
    this.selectedUser = user;
    console.log('Selected:', user.name);
  }
  
  // Method with return type
  getUserCount(): number {
    return this.users.length;
  }
}`}
            output={[
              '// title is a string',
              '// users is an array of User objects',
              '// selectedUser can be a User or null',
              '✓ Everything is type-safe!'
            ]}
            language="typescript"
            colorTheme="blue"
          />

          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Why This Helps</AlertTitle>
            <AlertDescription className="text-sm space-y-1">
              <p>✅ Your editor suggests properties as you type</p>
              <p>✅ Typos are caught immediately</p>
              <p>✅ Refactoring is safer</p>
              <p>✅ Code is self-documenting</p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Tips & Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
              <h5 className="font-semibold mb-3 flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                DO This
              </h5>
              <div className="space-y-2 text-sm">
                <p>✅ Use specific types (string, number, boolean)</p>
                <p>✅ Create interfaces for objects you use often</p>
                <p>✅ Type function parameters and returns</p>
                <p>✅ Let TypeScript infer simple types</p>
                <p>✅ Use optional properties with <code>?</code></p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/10 dark:to-orange-950/10 rounded-xl border border-red-200 dark:border-red-800">
              <h5 className="font-semibold mb-3 flex items-center gap-2 text-red-700 dark:text-red-400">
                <CheckCircle2 className="w-5 h-5" />
                AVOID This
              </h5>
              <div className="space-y-2 text-sm">
                <p>❌ Using <code>any</code> (defeats the purpose!)</p>
                <p>❌ Ignoring TypeScript errors</p>
                <p>❌ Over-complicating simple types</p>
                <p>❌ Not typing function parameters</p>
                <p>❌ Duplicate type definitions</p>
              </div>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Remember</AlertTitle>
            <AlertDescription>
              TypeScript is here to help you! It might feel like extra work at first, 
              but it saves you tons of time by catching errors early. Start simple and add more types as you learn!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
