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
  Settings,
  Shield,
} from 'lucide-react';

export default function JavaScriptDefaultParametersNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="JavaScript ES6+"
        title="Default Parameters"
        description="Set fallback values for function parameters - no more undefined checks!"
        colorTheme="yellow"
      />

      {/* What are Default Parameters? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-orange-50/20 dark:from-amber-950/10 dark:via-yellow-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Default Parameters: Safe Fallbacks
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Default parameters let you set <strong className="text-amber-700 dark:text-amber-400">fallback values</strong> for function parameters. If no argument is provided (or undefined is passed), the default value is used automatically!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-amber-200 dark:border-amber-800/30">
            <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-lg">Prevent Undefined Errors</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Default parameters protect your code from undefined values and make functions more predictable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Basic Default Parameters</CardTitle>
              <CardDescription>Simple fallback values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Manual Checks</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`function greet(name) {
  // Check if undefined
  if (name === undefined) {
    name = 'Guest';
  }
  console.log('Hello, ' + name);
}

// OR using || operator
function greet2(name) {
  name = name || 'Guest';
  console.log('Hello, ' + name);
}

greet();        // Hello, Guest
greet('Alice'); // Hello, Alice`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - Default Parameters</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Set default in parameter list!
function greet(name = 'Guest') {
  console.log(\`Hello, \${name}\`);
}





greet();        // Hello, Guest
greet('Alice'); // Hello, Alice`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Default Parameters"
        description="Simple examples with fallback values"
        code={`// Single parameter with default
function greet(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}

greet();        // Hello, Guest!
greet('Alice'); // Hello, Alice!

// Multiple parameters with defaults
function createUser(name = 'Anonymous', age = 18, role = 'user') {
  return { name, age, role };
}

console.log(createUser());
// { name: 'Anonymous', age: 18, role: 'user' }

console.log(createUser('Bob'));
// { name: 'Bob', age: 18, role: 'user' }

console.log(createUser('Alice', 25));
// { name: 'Alice', age: 25, role: 'user' }

console.log(createUser('Charlie', 30, 'admin'));
// { name: 'Charlie', age: 30, role: 'admin' }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* undefined vs null */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>undefined vs null</CardTitle>
              <CardDescription>Defaults only trigger for undefined</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Important Distinction!</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Default parameters only activate when the value is <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">undefined</code>. They do NOT activate for <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">null</code>, <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">0</code>, <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">''</code>, or <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">false</code>.
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function greet(name = 'Guest') {
  console.log(name);
}

greet();           // Guest (undefined → default)
greet(undefined);  // Guest (undefined → default)
greet(null);       // null (NOT undefined)
greet('');         // '' (NOT undefined)
greet(0);          // 0 (NOT undefined)
greet(false);      // false (NOT undefined)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="undefined Triggers Defaults"
        description="Only undefined uses the default value"
        code={`function multiply(a, b = 5) {
  return a * b;
}

console.log(multiply(3));          // 15 (3 * 5)
console.log(multiply(3, 2));       // 6 (3 * 2)
console.log(multiply(3, undefined)); // 15 (3 * 5)
console.log(multiply(3, null));    // 0 (3 * null = 0)
console.log(multiply(3, 0));       // 0 (3 * 0)

// Falsy values that DON'T trigger defaults
function test(value = 'default') {
  console.log(value);
}

test(0);        // 0
test('');       // ''
test(false);    // false
test(null);     // null
test(undefined); // 'default' ✅`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Expression as Default */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Expressions as Defaults</CardTitle>
              <CardDescription>Default values can be expressions, not just literals</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Defaults are Evaluated at Call Time</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Defaults can be function calls, calculations, or any expression. They're evaluated fresh each time the function is called!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Function call as default
function log(message, timestamp = Date.now()) {
  console.log(\`[\${timestamp}] \${message}\`);
}

// Calculation as default
function calculate(a, b = a * 2) {
  return a + b;
}

console.log(calculate(5));     // 15 (5 + 10)
console.log(calculate(5, 3));  // 8 (5 + 3)

// Another parameter as default
function greet(firstName, lastName = firstName.toUpperCase()) {
  console.log(\`Hello, \${firstName} \${lastName}\`);
}

greet('john');          // Hello, john JOHN
greet('john', 'doe');   // Hello, john doe`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Expression Examples"
        description="Various expressions as default values"
        code={`// Array/Object as default
function addItem(item, list = []) {
  list.push(item);
  return list;
}

// Date as default
function createPost(title, date = new Date()) {
  return { title, date };
}

// Math as default
function setPrice(base, tax = base * 0.1) {
  return base + tax;
}

console.log(setPrice(100));     // 110
console.log(setPrice(100, 20)); // 120

// Template literal as default
function createURL(path, domain = \`example.com\`) {
  return \`https://\${domain}/\${path}\`;
}

console.log(createURL('home'));              
// https://example.com/home
console.log(createURL('about', 'mysite.com')); 
// https://mysite.com/about

// Previous parameter in expression
function rectangle(width, height = width) {
  return width * height; // Square by default
}

console.log(rectangle(5));    // 25 (5 * 5)
console.log(rectangle(5, 3)); // 15 (5 * 3)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Examples */}
      <CodeSnippet
        title="Real-World Example: Configuration Object"
        description="Common pattern with configuration defaults"
        code={`// API request with default options
function fetchData(url, options = {}) {
  const {
    method = 'GET',
    headers = { 'Content-Type': 'application/json' },
    timeout = 5000
  } = options;
  
  console.log(\`\${method} \${url}\`);
  console.log('Headers:', headers);
  console.log('Timeout:', timeout);
}

// Use all defaults
fetchData('/api/users');
// GET /api/users
// Headers: { Content-Type: 'application/json' }
// Timeout: 5000

// Override some defaults
fetchData('/api/posts', {
  method: 'POST',
  timeout: 10000
});
// POST /api/posts
// Headers: { Content-Type: 'application/json' }
// Timeout: 10000

// Another example: UI component
function createButton({
  text = 'Click me',
  color = 'blue',
  size = 'medium',
  disabled = false
} = {}) {
  return {
    text,
    color,
    size,
    disabled,
    render() {
      console.log(\`[\${size} \${color} button] \${text}\`);
    }
  };
}

const btn1 = createButton();
btn1.render(); // [medium blue button] Click me

const btn2 = createButton({ text: 'Submit', color: 'green' });
btn2.render(); // [medium green button] Submit`}
        language="javascript"
        colorTheme="yellow"
        icon={Settings}
      />

      {/* Destructuring with Defaults */}
      <CodeSnippet
        title="Destructuring + Default Parameters"
        description="Powerful combination for object parameters"
        code={`// Named parameters with defaults
function createProfile({
  username = 'anonymous',
  email = 'no-email@example.com',
  age = 18,
  role = 'user',
  isActive = true
} = {}) {
  return {
    username,
    email,
    age,
    role,
    isActive
  };
}

// No arguments - all defaults
console.log(createProfile());
// {
//   username: 'anonymous',
//   email: 'no-email@example.com',
//   age: 18,
//   role: 'user',
//   isActive: true
// }

// Some arguments
console.log(createProfile({ username: 'alice', age: 25 }));
// {
//   username: 'alice',
//   email: 'no-email@example.com',
//   age: 25,
//   role: 'user',
//   isActive: true
// }

// All arguments
console.log(createProfile({
  username: 'bob',
  email: 'bob@example.com',
  age: 30,
  role: 'admin',
  isActive: false
}));`}
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
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">When to Use</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • Optional function parameters<br/>
                    • Configuration objects<br/>
                    • Sensible fallback values<br/>
                    • API calls with defaults
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Only undefined</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Default values only trigger for <code>undefined</code><br/>
                    Not for <code>null</code>, <code>0</code>, <code>''</code>, or <code>false</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Expressions Allowed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Defaults can be:<br/>
                    • Literals (numbers, strings)<br/>
                    • Function calls<br/>
                    • Calculations<br/>
                    • Other parameters
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Combine with Destructuring</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use with object destructuring for powerful named parameters with defaults!
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
