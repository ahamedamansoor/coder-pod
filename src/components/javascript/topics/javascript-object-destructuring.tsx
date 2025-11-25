'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Boxes,
  Sparkles,
  Columns,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  Package,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface JavaScriptObjectDestructuringProps {
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
  <title>Object Destructuring Demo</title>
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
      max-width: 720px; 
      border-radius: 20px; 
      background: rgba(255,255,255,0.95); 
      padding: 32px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { color: #667eea; margin-bottom: 16px; font-size: 32px; }
    p { color: #64748b; font-size: 16px; margin-bottom: 24px; }
    pre { 
      background: #0f172a; 
      color: #22d3ee; 
      padding: 16px; 
      border-radius: 12px; 
      overflow-x: auto;
      font-size: 14px;
    }
    .console-hint {
      background: #fef3c7;
      color: #92400e;
      padding: 12px;
      border-radius: 8px;
      margin-top: 16px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h1>🎯 Object Destructuring</h1>
    <p>Open the browser console to see all examples!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
    <pre id="summary"></pre>
  </div>
  <script src="./object-destructure-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Object Destructuring Demo ===\\n');

// 1. Basic Extraction
const user = { name: 'Alice', age: 28, role: 'developer' };
const { name, age, role } = user;
console.log('1. BASIC:', name, age, role);

// 2. Renaming
const product = { id: 101, title: 'Laptop', price: 999 };
const { title: productName, price: cost } = product;
console.log('2. RENAME:', productName, cost);

// 3. Defaults
const settings = { theme: 'dark' };
const { theme, fontSize = 14, autoSave = true } = settings;
console.log('3. DEFAULTS:', theme, fontSize, autoSave);

// 4. Nested
const response = {
  status: 200,
  data: { username: 'bob', email: 'bob@dev.com' }
};
const { status, data: { username, email } } = response;
console.log('4. NESTED:', status, username, email);

// 5. Rest
const config = { host: 'localhost', port: 3000, ssl: true, cache: false };
const { host, port, ...otherConfig } = config;
console.log('5. REST:', host, port, otherConfig);

// Summary
const summary = [
  '✓ Extract properties directly',
  '✓ Rename with colon syntax',
  '✓ Provide default values',
  '✓ Handle nested objects',
  '✓ Capture rest properties'
].join('\\n');

document.getElementById('summary').textContent = summary;
console.log('\\n✅ Complete!');
`;

export default function JavaScriptObjectDestructuring({ onOpenWebPlayground }: JavaScriptObjectDestructuringProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Boxes}
        category="JavaScript · Objects"
        title="Object Destructuring"
        description="Extract object properties into variables with clean syntax—rename, set defaults, and handle nested data effortlessly."
        colorTheme="blue"
      />

      {/* What is Object Destructuring */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Object Destructuring?
          </CardTitle>
          <CardDescription className="text-base">
            A concise syntax to unpack properties from objects into distinct variables.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Object destructuring lets you extract multiple properties from an object in a single statement. Instead of writing <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">const name = user.name</code> repeatedly, you can unpack several properties at once: <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">const {'{ name, age }'} = user</code>. This is especially powerful for function parameters, API responses, and configuration objects.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Without Destructuring
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = {
  name: 'Alice',
  age: 28,
  role: 'developer'
};

const name = user.name;
const age = user.age;
const role = user.role;

console.log(name, age, role);`}
              </pre>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                With Destructuring
              </h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = {
  name: 'Alice',
  age: 28,
  role: 'developer'
};

const { name, age, role } = user;

console.log(name, age, role);`}
              </pre>
              <SnippetOutput lines={['name -> "Alice"', 'age -> 28', 'role -> "developer"']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Use Object Destructuring */}
      <Card className="bg-gradient-to-br from-blue-50/70 via-cyan-50/60 to-emerald-50/60 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-emerald-950/10 border border-blue-200/40 dark:border-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Use Object Destructuring?
          </CardTitle>
          <CardDescription className="text-base">Key benefits that make your code cleaner and more maintainable.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold">Less Repetition</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Extract multiple properties in one line instead of writing <code className="font-mono text-xs">object.property</code> repeatedly.
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Concise</Badge>
          </div>
          <div className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-semibold">Self-Documenting</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Function signatures show exactly which properties they use, making code intent clear.
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Readable</Badge>
          </div>
          <div className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="font-semibold">Flexible</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Rename variables, set defaults, and handle nested objects with elegant syntax.
            </p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Powerful</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Basic Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Package className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Syntax
          </CardTitle>
          <CardDescription className="text-base">
            Start with these fundamental patterns—extract, rename, and provide defaults.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Simple Extraction */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Simple Extraction</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Basic</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Extract properties that match variable names
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const book = {
  title: 'JavaScript Pro',
  author: 'Jane Doe',
  year: 2024
};

const { title, author } = book;

console.log(title);
console.log(author);`}
              </pre>
              <SnippetOutput lines={['title -> "JavaScript Pro"', 'author -> "Jane Doe"']} />
            </div>

            {/* Renaming Variables */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Renaming Variables</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Alias</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Use colon syntax to rename properties during extraction
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const product = {
  id: 101,
  name: 'Laptop'
};

const { id: productId, name: productName } = product;

console.log(productId);
console.log(productName);`}
              </pre>
              <SnippetOutput lines={['productId -> 101', 'productName -> "Laptop"']} />
            </div>

            {/* Default Values */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Default Values</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Fallback</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Provide default values for properties that might be undefined
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const config = {
  theme: 'dark'
};

const { theme, fontSize = 16, lineHeight = 1.5 } = config;

console.log(theme);
console.log(fontSize);
console.log(lineHeight);`}
              </pre>
              <SnippetOutput lines={['theme -> "dark"', 'fontSize -> 16 (default)', 'lineHeight -> 1.5 (default)']} />
            </div>

            {/* Combining Rename + Default */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Rename + Default</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Combined</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Rename a property and provide a default value at the same time
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const options = {
  color: 'blue'
};

const {
  color: backgroundColor = 'white',
  size: fontSize = 12
} = options;

console.log(backgroundColor);
console.log(fontSize);`}
              </pre>
              <SnippetOutput lines={['backgroundColor -> "blue"', 'fontSize -> 12 (default)']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Patterns */}
      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Advanced Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Handle nested objects, rest properties, and computed property names.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nested Destructuring */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Nested Destructuring</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">Deep</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Extract properties from nested objects in one statement
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const response = {
  status: 200,
  data: {
    user: {
      id: 5,
      name: 'Alice'
    }
  }
};

const {
  status,
  data: {
    user: { id, name }
  }
} = response;

console.log(status);
console.log(id);
console.log(name);`}
              </pre>
              <SnippetOutput lines={['status -> 200', 'id -> 5', 'name -> "Alice"']} />
            </div>

            {/* Rest Properties */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Rest Properties</h4>
                <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30">Collect</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Capture remaining properties into a new object
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const settings = {
  host: 'localhost',
  port: 3000,
  ssl: true,
  cache: false,
  timeout: 5000
};

const { host, port, ...otherSettings } = settings;

console.log(host);
console.log(port);
console.log(otherSettings);`}
              </pre>
              <SnippetOutput lines={['host -> "localhost"', 'port -> 3000', 'otherSettings -> { ssl: true, cache: false, timeout: 5000 }']} />
            </div>

            {/* Array of Objects */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Array of Objects</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Iteration</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Destructure while iterating over an array of objects
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' }
];

users.forEach(({ id, name, role }) => {
  console.log(\`\${id}: \${name} (\${role})\`);
});`}
              </pre>
              <SnippetOutput lines={['1: Alice (admin)', '2: Bob (user)']} />
            </div>

            {/* Computed Property Names */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Computed Properties</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Dynamic</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Use variable names as property keys with bracket notation
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const data = {
  primary: '#3b82f6',
  secondary: '#8b5cf6'
};

const key = 'primary';
const { [key]: color } = data;

console.log(color);`}
              </pre>
              <SnippetOutput lines={['color -> "#3b82f6"']} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Function Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Function Parameter Destructuring
          </CardTitle>
          <CardDescription className="text-base">
            Make function signatures self-documenting by destructuring parameters directly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Function Params */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <h4 className="font-semibold">Basic Function Parameters</h4>
              <p className="text-xs text-muted-foreground">
                Destructure object parameters to show what the function expects
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function createUser({ name, email, role = 'user' }) {
  return {
    id: Date.now(),
    name,
    email,
    role
  };
}

const newUser = createUser({
  name: 'Alice',
  email: 'alice@dev.com'
});

console.log(newUser.role);`}
              </pre>
              <SnippetOutput lines={['newUser.role -> "user" (default)']} />
            </div>

            {/* Nested Function Params */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
              <h4 className="font-semibold">Nested Parameters</h4>
              <p className="text-xs text-muted-foreground">
                Destructure nested objects in function parameters
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`function displayLocation({ city, coordinates: { lat, lng } }) {
  return \`\${city} is at \${lat}, \${lng}\`;
}

const location = {
  city: 'Paris',
  coordinates: { lat: 48.8566, lng: 2.3522 }
};

const result = displayLocation(location);
console.log(result);`}
              </pre>
              <SnippetOutput lines={['result -> "Paris is at 48.8566, 2.3522"']} />
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              When destructuring function parameters, always provide default values or make the entire parameter optional with <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">= {'{}'}</code> to avoid errors when called without arguments.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll encounter in production code every day.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* API Response Handling */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                API Response Handling
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Fetch user data from API
async function getUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const json = await response.json();
  
  // Destructure response
  const {
    data: { user },
    meta: { timestamp }
  } = json;
  
  return { user, timestamp };
}

// Usage
const { user, timestamp } = await getUserData(123);
console.log(user.name);`}
              </pre>
              <SnippetOutput lines={['user.name -> "Alice"', 'timestamp -> 1637012345678']} />
            </div>

            {/* React Component Props */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                React Component Props
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function UserCard({ user: { name, email }, theme = 'light' }) {
  return (
    <div className={\`card \${theme}\`}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// Usage
<UserCard 
  user={{ name: 'Alice', email: 'alice@dev.com' }}
/>`}
              </pre>
              <SnippetOutput lines={['Renders card with name and email', 'Default theme applied']} />
            </div>

            {/* Config Object Extraction */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Config Object Extraction
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const appConfig = {
  api: {
    baseURL: 'https://api.example.com',
    timeout: 5000
  },
  features: {
    darkMode: true,
    analytics: false
  }
};

const {
  api: { baseURL, timeout },
  features: { darkMode }
} = appConfig;

console.log(baseURL);
console.log(darkMode);`}
              </pre>
              <SnippetOutput lines={['baseURL -> "https://api.example.com"', 'darkMode -> true']} />
            </div>

            {/* Event Handling */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Event Handling
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Extract specific event properties
button.addEventListener('click', ({ target, clientX, clientY }) => {
  console.log('Clicked element:', target.tagName);
  console.log('Position:', clientX, clientY);
});

// Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target: { elements } } = event;
  
  const { username, email } = elements;
  console.log(username.value, email.value);
});`}
              </pre>
              <SnippetOutput lines={['Extracts only needed event data', 'Cleaner event handlers']} />
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
              <li>✅ Use descriptive variable names that match property meaning.</li>
              <li>✅ Provide default values for optional properties.</li>
              <li>✅ Destructure in function parameters for self-documenting code.</li>
              <li>✅ Use rest operator to collect remaining properties cleanly.</li>
              <li>✅ Keep destructuring shallow for better readability.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" /> Avoid This
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Over-nesting destructuring (3+ levels deep).</li>
              <li>❌ Destructuring without considering undefined values.</li>
              <li>❌ Using confusing rename aliases that hide property origin.</li>
              <li>❌ Destructuring large objects when you only need 1-2 properties.</li>
              <li>❌ Forgetting to handle missing nested objects.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ object destructuring, renaming, and nested patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights object destructuring patterns (basic extraction, renaming, defaults, nested, and rest properties) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
