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
  Type,
  FileText,
} from 'lucide-react';

export default function JavaScriptTemplateLiteralsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript ES6+"
        title="Template Literals"
        description="String interpolation and multi-line strings with backticks"
        colorTheme="yellow"
      />

      {/* What are Template Literals? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Template Literals: Modern Strings
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Template literals use <strong className="text-green-700 dark:text-green-400">backticks (`)</strong> instead of quotes. They allow <strong>string interpolation</strong> with ${'{}'}, <strong>multi-line strings</strong> without \n, and even <strong>tagged templates</strong> for advanced processing!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-green-200 dark:border-green-800/30">
            <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-lg">Backticks are the Key</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Use backticks <code>`...`</code> instead of single/double quotes. Everything inside can span multiple lines and embed expressions!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* String Interpolation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>String Interpolation</CardTitle>
              <CardDescription>Embed variables and expressions with ${'{}'}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - String Concatenation</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const name = 'Alice';
const age = 25;

// Messy concatenation
const message = 'Hello, ' + name + 
  '! You are ' + age + ' years old.';

console.log(message);
// Hello, Alice! You are 25 years old.

// Gets worse with more variables
const greeting = 'Welcome ' + name + 
  ', you have ' + (10 - age) + 
  ' years until retirement!';`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Template Literals - Clean!</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const name = 'Alice';
const age = 25;

// Clean interpolation
const message = \`Hello, \${name}! You are \${age} years old.\`;

console.log(message);
// Hello, Alice! You are 25 years old.

// Easy to read with expressions
const greeting = \`Welcome \${name}, you have \${65 - age} years until retirement!\`;`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="String Interpolation Examples"
        description="Embed any expression inside ${'{}'}"
        code={`// Variables
const user = 'Bob';
const points = 150;
console.log(\`User \${user} has \${points} points\`);
// User Bob has 150 points

// Expressions
const a = 5;
const b = 10;
console.log(\`Sum: \${a + b}\`);        // Sum: 15
console.log(\`Product: \${a * b}\`);    // Product: 50
console.log(\`Comparison: \${a > b}\`); // Comparison: false

// Function calls
function getGreeting() {
  return 'Hello';
}
console.log(\`\${getGreeting()}, World!\`);
// Hello, World!

// Ternary operator
const age = 20;
const status = \`You are \${age >= 18 ? 'an adult' : 'a minor'}\`;
console.log(status);  // You are an adult

// Object properties
const person = { name: 'Charlie', city: 'NYC' };
console.log(\`\${person.name} lives in \${person.city}\`);
// Charlie lives in NYC

// Array elements
const colors = ['red', 'green', 'blue'];
console.log(\`First color: \${colors[0]}\`);
// First color: red`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Multi-line Strings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Multi-line Strings</CardTitle>
              <CardDescription>No more \n escape sequences!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Escape Sequences</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Using \\n for newlines
const poem = 'Roses are red,\\n' +
  'Violets are blue,\\n' +
  'JavaScript is awesome,\\n' +
  'And so are you!';

// HTML with concatenation
const html = '<div>\\n' +
  '  <h1>Title</h1>\\n' +
  '  <p>Content</p>\\n' +
  '</div>';`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Template Literals - Natural!</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Natural line breaks
const poem = \`Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!\`;

// HTML as written
const html = \`<div>
  <h1>Title</h1>
  <p>Content</p>
</div>\`;`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Multi-line String Examples"
        description="Write strings exactly as they should appear"
        code={`// Email template
const name = 'Alice';
const email = \`
Dear \${name},

Thank you for your order!

Your items will ship within 2-3 business days.

Best regards,
The Team
\`;

// SQL query
const userId = 123;
const query = \`
  SELECT *
  FROM users
  WHERE id = \${userId}
    AND status = 'active'
  ORDER BY created_at DESC
\`;

// HTML component
function createCard(title, content) {
  return \`
    <div class="card">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
  \`;
}

// JSON-like structure
const config = \`{
  "name": "MyApp",
  "version": "1.0.0",
  "features": [
    "auth",
    "dashboard"
  ]
}\`;

// Code snippet
const snippet = \`
function greet(name) {
  return \\\`Hello, \\\${name}!\\\`;
}
\`;`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Expression Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Complex Expressions</CardTitle>
              <CardDescription>Any JavaScript expression works inside ${'{}'}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Any Expression is Valid!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Conditional (ternary)
const age = 20;
const message = \`You are \${age >= 18 ? 'an adult' : 'a minor'}\`;

// Array methods
const names = ['Alice', 'Bob', 'Charlie'];
const list = \`Users: \${names.join(', ')}\`;

// Math
const price = 99.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`;

// Nested templates
const items = ['apple', 'banana'];
const html = \`
  <ul>
    \${items.map(item => \`<li>\${item}</li>\`).join('')}
  </ul>
\`;

// Method calls
const text = 'hello';
console.log(\`Uppercase: \${text.toUpperCase()}\`);
// Uppercase: HELLO`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Advanced Expression Examples"
        description="Complex expressions in template literals"
        code={`// Array mapping
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const userList = \`
  <ul>
    \${users.map(u => \`
      <li>\${u.name} (\${u.age} years old)</li>
    \`).join('')}
  </ul>
\`;

// Conditional rendering
const isLoggedIn = true;
const username = 'Alice';

const greeting = \`
  <div>
    \${isLoggedIn 
      ? \`Welcome back, \${username}!\` 
      : \`Please log in\`}
  </div>
\`;

// Calculation with formatting
function formatCurrency(amount) {
  return \`$\${amount.toFixed(2)}\`;
}

const price = 29.99;
const tax = 0.08;
const total = price * (1 + tax);

const receipt = \`
  Price: \${formatCurrency(price)}
  Tax (8%): \${formatCurrency(price * tax)}
  Total: \${formatCurrency(total)}
\`;

// Nested operations
const score = 85;
const grade = \`Your grade: \${
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : 'F'
}\`;

// Dynamic property access
const obj = { x: 10, y: 20 };
const key = 'x';
console.log(\`Value of \${key}: \${obj[key]}\`);
// Value of x: 10`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Tagged Templates */}
      <CodeSnippet
        title="Tagged Templates (Advanced)"
        description="Custom processing of template literals"
        code={`// Tagged template function
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined 
      ? \`<mark>\${values[i]}</mark>\` 
      : '';
    return result + str + value;
  }, '');
}

const name = 'Alice';
const age = 25;
const html = highlight\`User \${name} is \${age} years old\`;
console.log(html);
// User <mark>Alice</mark> is <mark>25</mark> years old

// SQL escaping (simplified example)
function sql(strings, ...values) {
  return strings.reduce((query, str, i) => {
    const value = values[i] !== undefined
      ? \`'\${String(values[i]).replace(/'/g, "''")}\`
      : '';
    return query + str + value;
  }, '');
}

const username = "O'Brien";
const query = sql\`SELECT * FROM users WHERE name = \${username}\`;
console.log(query);
// SELECT * FROM users WHERE name = 'O''Brien'

// Styling library (like styled-components)
function css(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '');
  }, '');
}

const primaryColor = '#3b82f6';
const styles = css\`
  .button {
    background: \${primaryColor};
    padding: 10px 20px;
  }
\`;`}
        language="javascript"
        colorTheme="yellow"
        icon={Type}
      />

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: Dynamic HTML Generator"
        description="Building HTML with template literals"
        code={`// Blog post renderer
function renderBlogPost(post) {
  const { title, author, date, content, tags } = post;
  
  return \`
    <article class="blog-post">
      <header>
        <h1>\${title}</h1>
        <div class="meta">
          <span class="author">By \${author}</span>
          <time datetime="\${date}">\${new Date(date).toLocaleDateString()}</time>
        </div>
      </header>
      
      <div class="content">
        \${content}
      </div>
      
      <footer>
        <div class="tags">
          \${tags.map(tag => \`<span class="tag">\${tag}</span>\`).join('')}
        </div>
      </footer>
    </article>
  \`;
}

const post = {
  title: 'Getting Started with JavaScript',
  author: 'Alice Johnson',
  date: '2024-01-15',
  content: '<p>JavaScript is an amazing language...</p>',
  tags: ['javascript', 'tutorial', 'beginners']
};

console.log(renderBlogPost(post));

// API response formatter
function formatResponse(data, success = true) {
  const timestamp = new Date().toISOString();
  const status = success ? 'success' : 'error';
  
  return \`
    Response Status: \${status.toUpperCase()}
    Timestamp: \${timestamp}
    Data: \${JSON.stringify(data, null, 2)}
    \${!success ? \`Error: \${data.message}\` : ''}
  \`;
}

// Email template
function sendWelcomeEmail(user) {
  const { name, email, verificationCode } = user;
  
  return \`
    To: \${email}
    Subject: Welcome to MyApp!
    
    Hi \${name},
    
    Welcome to MyApp! We're excited to have you on board.
    
    Please verify your email using this code: \${verificationCode}
    
    This code expires in 24 hours.
    
    Best regards,
    The MyApp Team
  \`;
}`}
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
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Backticks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Template literals use backticks <code>`...`</code> instead of quotes<br/>
                    Found on the key with tilde (~) on US keyboards
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Interpolation with ${'{}'}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Embed any expression: variables, calculations, function calls, ternary operators
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Multi-line Friendly</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No need for \n or + concatenation<br/>
                    Just press Enter and keep typing!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Tagged Templates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced: Custom processing functions<br/>
                    Used by libraries like styled-components
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use template literals by default! They're more readable and flexible than quote-based strings, even without interpolation.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
