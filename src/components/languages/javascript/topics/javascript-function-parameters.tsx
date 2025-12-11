'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Brackets,
  Sparkles,
  Sliders,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface JavaScriptFunctionParametersProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptFunctionParameters({}: JavaScriptFunctionParametersProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Brackets}
        category="JavaScript Fundamentals"
        title="Function Parameters"
        description="Pass data into functions with defaults, rest parameters, and destructuring for clarity."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Parameters Matter
          </CardTitle>
          <CardDescription className="text-base">
            Parameters shape how functions receive and process data—defaults, rest, and destructuring keep code clean.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Defaults</h3>
            </div>
            <p className="text-sm text-muted-foreground">Provide fallback values to avoid undefined checks everywhere.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">name = 'Guest'</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Rest</h3>
            </div>
            <p className="text-sm text-muted-foreground">Handle variable arguments with a single array-like parameter.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">...nums</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Brackets className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h3 className="font-semibold">Destructuring</h3>
            </div>
            <p className="text-sm text-muted-foreground">Pull only what you need from objects or arrays right in the signature.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">{'{ name, plan }'}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* What are Function Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Brackets className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Function Parameters?
          </CardTitle>
          <CardDescription className="text-base">
            Parameters are the named variables in a function definition that receive values when the function is called
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Think of parameters as labeled containers that hold the data your function needs to work. When you call a function, you pass <strong>arguments</strong> (actual values) that fill these parameter containers.
          </p>
          
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">parameters-vs-arguments.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Understanding the difference</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Parameters: name, age (in definition)
function introduce(name, age) {
  return \`I'm \${name} and I'm \${age} years old.\`;
}

// Arguments: "Alice", 25 (values passed in)
const message = introduce('Alice', 25);

console.log(message);
// Output: "I'm Alice and I'm 25 years old."`}
            </pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Distinction</AlertTitle>
            <AlertDescription>
              <strong>Parameters</strong> are placeholders in the function definition. <strong>Arguments</strong> are the actual values you pass when calling the function.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Default Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sliders className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Default Parameters
          </CardTitle>
          <CardDescription className="text-base">
            Provide fallback values when arguments aren't supplied
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Basic Default Values</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
                <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">default-params.js</span>
                <span className="text-blue-600/70 dark:text-blue-400/70">Setting default values</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Function with default parameters
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

// Call with both arguments
console.log(greet('Alice', 'Hi'));
// Output: "Hi, Alice!"

// Call with one argument
console.log(greet('Bob'));
// Output: "Hello, Bob!"

// Call with no arguments
console.log(greet());
// Output: "Hello, Guest!"`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Default with Expressions</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
                <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">expression-defaults.js</span>
                <span className="text-purple-600/70 dark:text-purple-400/70">Dynamic defaults</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Default can be an expression
function createUser(name, createdAt = new Date()) {
  return {
    name: name,
    created: createdAt
  };
}

const user1 = createUser('Alice');
console.log(user1);
// { name: 'Alice', created: [current date] }

// Can pass custom date
const customDate = new Date('2024-01-01');
const user2 = createUser('Bob', customDate);
console.log(user2);
// { name: 'Bob', created: 2024-01-01T00:00:00.000Z }`}
              </pre>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">When Defaults Apply</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Default values are used when the argument is <code className="font-mono">undefined</code>. Passing <code className="font-mono">null</code> or <code className="font-mono">0</code> will NOT trigger the default.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Rest Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Rest Parameters
          </CardTitle>
          <CardDescription className="text-base">
            Collect multiple arguments into a single array
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The rest parameter syntax (<code className="font-mono">...name</code>) allows a function to accept any number of arguments as an array.
            </p>
            
            <h4 className="font-semibold text-lg">Basic Rest Parameter</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30">
                <span className="uppercase tracking-wide text-emerald-700 dark:text-emerald-300">rest-params.js</span>
                <span className="text-emerald-600/70 dark:text-emerald-400/70">Flexible arguments</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Function with rest parameter
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));
// Output: 3

console.log(sum(1, 2, 3, 4, 5));
// Output: 15

console.log(sum());
// Output: 0`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Mixing Regular and Rest Parameters</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30">
                <span className="uppercase tracking-wide text-cyan-700 dark:text-cyan-300">rest-mixed.js</span>
                <span className="text-cyan-600/70 dark:text-cyan-400/70">Combined parameters</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// First parameter is required, rest are collected
function createList(title, ...items) {
  return {
    title: title,
    items: items,
    count: items.length
  };
}

const groceries = createList('Shopping', 'Milk', 'Bread', 'Eggs');

console.log(groceries);
// Output: {
//   title: 'Shopping',
//   items: ['Milk', 'Bread', 'Eggs'],
//   count: 3
// }`}
              </pre>
            </div>
          </div>

          <Alert className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
            <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Rest Must Be Last</AlertTitle>
            <AlertDescription className="text-emerald-800 dark:text-emerald-200">
              The rest parameter must always be the last parameter in the function signature.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Destructuring Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Brackets className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Destructuring Parameters
          </CardTitle>
          <CardDescription className="text-base">
            Extract values from objects and arrays directly in the function signature
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Object Destructuring</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-amber-100 dark:bg-amber-900/30">
                <span className="uppercase tracking-wide text-amber-700 dark:text-amber-300">object-destructure.js</span>
                <span className="text-amber-600/70 dark:text-amber-400/70">Pull specific properties</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Destructure object parameter
function displayUser({ name, email, role = 'user' }) {
  return \`\${name} (\${email}) - Role: \${role}\`;
}

const user1 = { name: 'Alice', email: 'alice@example.com', role: 'admin' };
const user2 = { name: 'Bob', email: 'bob@example.com' };

console.log(displayUser(user1));
// Output: "Alice (alice@example.com) - Role: admin"

console.log(displayUser(user2));
// Output: "Bob (bob@example.com) - Role: user"`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Array Destructuring</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
                <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">array-destructure.js</span>
                <span className="text-blue-600/70 dark:text-blue-400/70">Extract array elements</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Destructure array parameter
function getCoordinates([x, y, z = 0]) {
  return {
    x: x,
    y: y,
    z: z
  };
}

console.log(getCoordinates([10, 20, 30]));
// Output: { x: 10, y: 20, z: 30 }

console.log(getCoordinates([5, 15]));
// Output: { x: 5, y: 15, z: 0 }`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nested Destructuring</h4>
            <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
                <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">nested-destructure.js</span>
                <span className="text-purple-600/70 dark:text-purple-400/70">Deep extraction</span>
              </div>
              <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">
{`// Destructure nested objects
function formatAddress({ user: { name }, address: { city, country } }) {
  return \`\${name} lives in \${city}, \${country}\`;
}

const data = {
  user: { name: 'Alice', id: 123 },
  address: { city: 'New York', country: 'USA', zip: '10001' }
};

console.log(formatAddress(data));
// Output: "Alice lives in New York, USA"`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use every day
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="Options Object Pattern"
              description="Pass multiple parameters as a single object with defaults - perfect for complex configurations"
              code={`// Options object with destructuring and defaults
function createButton({
  text,
  color = 'blue',
  size = 'medium',
  disabled = false
}) {
  return \`Button: \${text} (\${color}, \${size})\`;
}

const btn = createButton({
  text: 'Click Me',
  color: 'red'
});

console.log(btn);
// Output: "Button: Click Me (red, medium)"`}
              language="javascript"
              colorTheme="blue"
              icon={CheckCircle2}
              features={[
                "Named parameters pattern",
                "Default values for optional params",
                "Only pass what you need",
                "Self-documenting API"
              ]}
              tips={[
                "Essential for complex configurations",
                "Makes code more readable",
                "Common in React components and APIs"
              ]}
            />

            <CodeSnippet
              title="Rest Parameters for Math"
              description="Use rest operator (...) to accept unlimited arguments - perfect for flexible operations"
              code={`// Rest parameters for variable arguments
function average(...numbers) {
  if (numbers.length === 0) return 0;
  
  const sum = numbers.reduce(
    (total, num) => total + num,
    0
  );
  
  return sum / numbers.length;
}

console.log(average(10, 20, 30));
// Output: 20

console.log(average(5, 15, 25, 35));
// Output: 20`}
              language="javascript"
              colorTheme="emerald"
              icon={CheckCircle2}
              features={[
                "Accept unlimited arguments",
                "Works with all array methods",
                "Cleaner than 'arguments' object",
                "Type-safe with TypeScript"
              ]}
              tips={[
                "Use ...rest for flexible functions",
                "Perfect for math operations",
                "Combine with other parameters"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Default optional params to avoid undefined checks.</li>
              <li>✅ Destructure only needed fields to reduce noise.</li>
              <li>✅ Validate inputs early; throw descriptive errors.</li>
              <li>✅ Prefer rest over `arguments` for clarity.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Overloading params with multiple meanings.</li>
              <li>❌ Mutating parameter objects inside the function.</li>
              <li>❌ Depending on `arguments` instead of rest.</li>
              <li>❌ Returning inconsistent shapes when params vary.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
