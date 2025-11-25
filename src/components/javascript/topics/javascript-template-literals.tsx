'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Code,
  Layers,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface JavaScriptTemplateLiteralsProps {
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
  <title>Template Literals Demo</title>
  <style>
    body { 
      font-family: 'Inter', system-ui; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .panel { 
      max-width: 800px; 
      width: 100%;
      border-radius: 20px; 
      background: rgba(255,255,255,0.95); 
      padding: 32px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { 
      color: #667eea; 
      margin-bottom: 16px; 
      font-size: 32px;
    }
    p { 
      color: #64748b; 
      font-size: 16px;
      margin-bottom: 24px;
    }
    pre { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>✨ Template Literals</h1>
    <p>Open the browser console to see template literal examples!</p>
    <pre id="summary"></pre>
  </div>
  <script src="./template-literals-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Template Literals Demo ===\\n');

// 1. Variable Interpolation
console.log('1. VARIABLE INTERPOLATION:');
const name = 'Alice';
const age = 25;
const message = \`Hello, my name is \${name} and I am \${age} years old\`;
console.log(message);

// 2. Expression Evaluation
console.log('\\n2. EXPRESSION EVALUATION:');
const a = 10;
const b = 5;
console.log(\`Sum: \${a + b}\`);
console.log(\`Product: \${a * b}\`);
console.log(\`Is a > b? \${a > b}\`);

// 3. Multiline Strings
console.log('\\n3. MULTILINE STRINGS:');
const email = \`Dear Customer,

Thank you for your order.
Your package will arrive soon.

Best regards,
The Team\`;
console.log(email);

// 4. Function Calls
console.log('\\n4. FUNCTION CALLS:');
function getGreeting(time) {
  return time < 12 ? 'Good morning' : 'Good afternoon';
}
const hour = 9;
console.log(\`\${getGreeting(hour)}, Alice!\`);

// 5. Nested Templates
console.log('\\n5. NESTED TEMPLATES:');
const users = ['Alice', 'Bob', 'Charlie'];
const userList = \`Users: \${users.map(u => \`<\${u}>\`).join(', ')}\`;
console.log(userList);

// Summary
const summary = [
  '✓ Use backticks (\\\`) for template literals',
  '✓ Embed variables with \${variable}',
  '✓ Execute expressions with \${expression}',
  '✓ Create multiline strings naturally',
  '✓ Call functions inside \${}'
].join('\\n');

document.getElementById('summary').textContent = summary;
console.log('\\n✅ All template literal features demonstrated!');
`;

export default function JavaScriptTemplateLiterals({ onOpenWebPlayground }: JavaScriptTemplateLiteralsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Sparkles}
        category="JavaScript · Strings & Regex"
        title="Template Literals"
        description="Master template literals—the modern way to work with strings, featuring interpolation, multiline support, and embedded expressions."
        colorTheme="blue"
      />

      {/* What are Template Literals? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Template Literals?
          </CardTitle>
          <CardDescription className="text-base">
            Template literals are a modern way to work with strings in JavaScript using backticks (``) instead of quotes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Introduced in ES6 (ES2015), template literals provide a <strong>more powerful and flexible</strong> way to create strings. They use <strong>backticks</strong> (<code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">`</code>) instead of single or double quotes, and allow you to <strong>embed variables and expressions</strong> directly in the string using <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">${}</code> syntax.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold">Backtick Syntax</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Use backticks (`) to create template literals instead of regular quotes.
              </p>
              <Badge className="mt-2 bg-blue-100/80 text-blue-700 dark:bg-blue-900/30">Modern</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold">Variable Embedding</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Insert variables and expressions directly using ${} syntax.
              </p>
              <Badge className="mt-2 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30">Dynamic</Badge>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold">Multiline Support</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Create strings that span multiple lines without concatenation.
              </p>
              <Badge className="mt-2 bg-purple-100/80 text-purple-700 dark:bg-purple-900/30">Convenient</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-800">
              <h4 className="font-semibold mb-2 text-rose-700 dark:text-rose-300">Old Way (Quotes)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const name = 'Alice';
const age = 25;
const msg = 'Hello ' + name + ', you are ' + age;
console.log(msg);`}
              </pre>
              <SnippetOutput lines={['msg -> "Hello Alice, you are 25"', 'Requires concatenation with +']} />
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">Modern Way (Template Literals)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const name = 'Alice';
const age = 25;
const msg = \`Hello \${name}, you are \${age}\`;
console.log(msg);`}
              </pre>
              <SnippetOutput lines={['msg -> "Hello Alice, you are 25"', 'Clean and readable!']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Interpolation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Variable Interpolation
          </CardTitle>
          <CardDescription className="text-base">
            Embed variables directly in your strings using ${} placeholder syntax.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Basic Variable Insertion</h4>
              <p className="text-xs text-muted-foreground">
                Place any variable inside ${} to insert its value
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const firstName = 'John';
const lastName = 'Doe';

const greeting = \`Hello, \${firstName} \${lastName}!\`;
console.log(greeting);

const city = 'New York';
const country = 'USA';
const location = \`\${city}, \${country}\`;
console.log(location);`}
              </pre>
              <SnippetOutput lines={['greeting -> "Hello, John Doe!"', 'location -> "New York, USA"']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Numeric Variables</h4>
              <p className="text-xs text-muted-foreground">
                Numbers are automatically converted to strings
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const product = 'Laptop';
const price = 999;
const quantity = 2;

const orderSummary = \`Product: \${product}
Price: $\${price}
Quantity: \${quantity}
Total: $\${price * quantity}\`;

console.log(orderSummary);`}
              </pre>
              <SnippetOutput lines={['Product: Laptop', 'Price: $999', 'Quantity: 2', 'Total: $1998']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expression Evaluation */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Expression Evaluation
          </CardTitle>
          <CardDescription className="text-base">
            Execute any JavaScript expression inside ${} - not just variables!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Powerful Feature</AlertTitle>
            <AlertDescription>
              You can perform calculations, call functions, use ternary operators, and execute any valid JavaScript expression inside ${}.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Arithmetic Operations</h4>
              <p className="text-xs text-muted-foreground">
                Perform calculations directly in the template
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const a = 10;
const b = 5;

console.log(\`Sum: \${a + b}\`);
console.log(\`Difference: \${a - b}\`);
console.log(\`Product: \${a * b}\`);
console.log(\`Division: \${a / b}\`);
console.log(\`Power: \${a ** 2}\`);`}
              </pre>
              <SnippetOutput lines={['Sum: 15', 'Difference: 5', 'Product: 50', 'Division: 2', 'Power: 100']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Conditional (Ternary) Expressions</h4>
              <p className="text-xs text-muted-foreground">
                Use ternary operators for conditional text
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const score = 85;
const passed = score >= 60;

const result = \`Score: \${score}
Status: \${passed ? 'PASSED' : 'FAILED'}\`;
console.log(result);

const hour = 14;
const greeting = \`Good \${hour < 12 ? 'morning' : 'afternoon'}\`;
console.log(greeting);`}
              </pre>
              <SnippetOutput lines={['Score: 85', 'Status: PASSED', 'greeting -> "Good afternoon"']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Function Calls</h4>
              <p className="text-xs text-muted-foreground">
                Call functions and use their return values
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const name = 'alice';
const message = \`Hello, \${capitalize(name)}!\`;
console.log(message);

// Using Math methods
const pi = 3.14159;
console.log(\`Rounded: \${Math.round(pi)}\`);`}
              </pre>
              <SnippetOutput lines={['message -> "Hello, Alice!"', 'Rounded: 3']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Comparison Operations</h4>
              <p className="text-xs text-muted-foreground">
                Evaluate boolean expressions
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const age = 20;
const isAdult = age >= 18;

console.log(\`Age: \${age}\`);
console.log(\`Is adult? \${isAdult}\`);
console.log(\`Can vote? \${age >= 18}\`);
console.log(\`Can drink? \${age >= 21}\`);`}
              </pre>
              <SnippetOutput lines={['Age: 20', 'Is adult? true', 'Can vote? true', 'Can drink? false']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multiline Strings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Multiline Strings
          </CardTitle>
          <CardDescription className="text-base">
            Create strings that span multiple lines without concatenation or escape characters.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-800">
              <h4 className="font-semibold mb-3 text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Old Way (Messy)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Using quotes requires \\n or concatenation
const email = 'Dear Customer,\\n' +
  '\\n' +
  'Thank you for your order.\\n' +
  'Your package will arrive soon.\\n' +
  '\\n' +
  'Best regards,\\n' +
  'The Team';

console.log(email);`}
              </pre>
              <SnippetOutput lines={['Requires \\\\n for line breaks', 'Needs + for concatenation', 'Hard to read and maintain']} />
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                New Way (Clean)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Template literals preserve line breaks naturally
const email = \`Dear Customer,

Thank you for your order.
Your package will arrive soon.

Best regards,
The Team\`;

console.log(email);`}
              </pre>
              <SnippetOutput lines={['No \\\\n needed!', 'Natural line breaks', 'Easy to read and write']} />
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">HTML Generation Example</h4>
            <p className="text-xs text-muted-foreground">
              Perfect for generating HTML or formatted text
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const title = 'My Article';
const author = 'John Doe';
const content = 'This is the article content.';

const html = \`
  <article>
    <h1>\${title}</h1>
    <p class="author">By \${author}</p>
    <div class="content">
      \${content}
    </div>
  </article>
\`;

console.log(html);`}
            </pre>
            <SnippetOutput lines={['Generates clean HTML', 'Variables embedded naturally', 'Indentation preserved']} />
          </div>
        </CardContent>
      </Card>

      {/* Nested Templates & Advanced Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ArrowRight className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Nested Templates & Advanced Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Template literals can be nested inside other template literals for complex scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Nested Array Mapping</h4>
              <p className="text-xs text-muted-foreground">
                Combine template literals with array methods
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const users = ['Alice', 'Bob', 'Charlie'];

// Create a formatted list
const userList = \`Users: \${users.map(u => \`<\${u}>\`).join(', ')}\`;
console.log(userList);

// Create HTML list
const htmlList = \`
  <ul>
    \${users.map(u => \`<li>\${u}</li>\`).join('')}
  </ul>
\`;
console.log(htmlList);`}
              </pre>
              <SnippetOutput lines={['Users: <Alice>, <Bob>, <Charlie>', 'Generated <ul> with 3 <li> items']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Dynamic Table Generation</h4>
              <p className="text-xs text-muted-foreground">
                Generate complex HTML structures
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

const table = \`
  <table>
    <tr><th>Product</th><th>Price</th></tr>
    \${products.map(p => 
      \`<tr><td>\${p.name}</td><td>$\${p.price}</td></tr>\`
    ).join('')}
  </table>
\`;

console.log(table);`}
              </pre>
              <SnippetOutput lines={['Generated HTML table', 'Each product as a row', 'Nested templates in map()']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Conditional Content</h4>
              <p className="text-xs text-muted-foreground">
                Include or exclude sections based on conditions
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const user = {
  name: 'Alice',
  isPremium: true,
  points: 1500
};

const profile = \`
  Name: \${user.name}
  \${user.isPremium ? 'Status: PREMIUM MEMBER' : ''}
  \${user.points > 1000 ? \`Reward: \${user.points} points!\` : ''}
\`;

console.log(profile);`}
              </pre>
              <SnippetOutput lines={['Name: Alice', 'Status: PREMIUM MEMBER', 'Reward: 1500 points!']} />
            </div>

            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Object Property Access</h4>
              <p className="text-xs text-muted-foreground">
                Access nested object properties
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

const info = \`
  \${user.name} lives at:
  \${user.address.street}
  \${user.address.city}, \${user.address.country}
\`;

console.log(info);`}
              </pre>
              <SnippetOutput lines={['John lives at:', '123 Main St', 'New York, USA']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Use Cases */}
      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/40 dark:border-amber-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Real-World Use Cases
          </CardTitle>
          <CardDescription className="text-base">
            Practical examples where template literals shine in production code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                URL Building
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const baseURL = 'https://api.example.com';
const endpoint = 'users';
const userId = 123;

// Build API endpoint
const apiURL = \`\${baseURL}/\${endpoint}/\${userId}\`;
console.log(apiURL);

// With query parameters
const search = 'javascript';
const page = 2;
const searchURL = \`\${baseURL}/search?q=\${search}&page=\${page}\`;
console.log(searchURL);`}
              </pre>
              <SnippetOutput lines={['apiURL -> "https://api.example.com/users/123"', 'searchURL with query params']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Email Templates
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function sendWelcomeEmail(userName, activationLink) {
  return \`
    Subject: Welcome to our platform!
    
    Hi \${userName},
    
    Thanks for signing up! Click below to activate:
    \${activationLink}
    
    Best regards,
    The Team
  \`;
}

const email = sendWelcomeEmail('Alice', 'https://app.com/activate/abc123');
console.log(email);`}
              </pre>
              <SnippetOutput lines={['Personalized email generated', 'Clean and readable template', 'Easy to maintain']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                SQL Queries (Be Careful!)
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ⚠️ WARNING: Use parameterized queries in production!
// This is just an example of template syntax

const tableName = 'users';
const userId = 5;

const query = \`
  SELECT * FROM \${tableName}
  WHERE id = \${userId}
  AND active = true
\`;

console.log(query);

// Better: Use prepared statements/parameterized queries`}
              </pre>
              <SnippetOutput lines={['Query built dynamically', '⚠️ Use prepared statements!', 'Prevent SQL injection']} />
            </div>

            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Logging & Debugging
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function processOrder(orderId, items, total) {
  console.log(\`
    Processing Order #\${orderId}
    Items: \${items.length}
    Total: $\${total.toFixed(2)}
    Time: \${new Date().toISOString()}
  \`);
  
  // Process the order...
}

processOrder('ORD-123', [{}, {}, {}], 299.97);`}
              </pre>
              <SnippetOutput lines={['Processing Order #ORD-123', 'Items: 3', 'Total: $299.97', 'Timestamp included']} />
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
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" /> Do This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use template literals for any string with variables or expressions.</li>
              <li>✅ Use them for multiline strings to avoid \\n escapes.</li>
              <li>✅ Prefer template literals over string concatenation with +.</li>
              <li>✅ Use them for generating HTML, SQL, or formatted text.</li>
              <li>✅ Nest templates for complex scenarios like array mapping.</li>
              <li>✅ Keep expressions inside ${} simple and readable.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" /> Avoid This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Don't use template literals for simple static strings.</li>
              <li>❌ Don't put complex logic inside ${}—extract to functions.</li>
              <li>❌ Don't build SQL queries with user input (SQL injection risk).</li>
              <li>❌ Don't forget to escape HTML if displaying user content.</li>
              <li>❌ Don't over-nest templates—it hurts readability.</li>
              <li>❌ Don't use quotes when you mean to use backticks.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practice Template Literals
          </CardTitle>
          <CardDescription className="text-base">
            Interactive demo covering variable interpolation, expressions, multiline strings, and nested templates.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">template-literals-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">5 powerful features</span>
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
