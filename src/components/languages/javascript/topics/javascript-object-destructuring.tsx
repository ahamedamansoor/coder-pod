'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Boxes,
  Sparkles,
  Columns,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Package,
  Zap,
  ArrowRight,
} from 'lucide-react';


export default function JavaScriptObjectDestructuring() {
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

console.log(name, age, role);
// Output: Alice 28 developer
// name -> "Alice"
// age -> 28
// role -> "developer"`}
              </pre>
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
// Output: "JavaScript Pro"

console.log(author);
// Output: "Jane Doe"`}
              </pre>
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
// Output: 101

console.log(productName);
// Output: "Laptop"`}
              </pre>
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
// Output: "dark"

console.log(fontSize);
// Output: 16 (default)

console.log(lineHeight);
// Output: 1.5 (default)`}
              </pre>
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
// Output: "blue"

console.log(fontSize);
// Output: 12 (default)`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Basic Syntax"
        description="All basic destructuring patterns demonstrated together"
        code={`// Simple Extraction - Extract properties that match variable names
const book = {
  title: 'JavaScript Pro',
  author: 'Jane Doe',
  year: 2024
};

const { title, author } = book;

console.log(title);
// Output: "JavaScript Pro"

console.log(author);
// Output: "Jane Doe"

// Renaming Variables - Use colon syntax to rename properties
const product = {
  id: 101,
  name: 'Laptop'
};

const { id: productId, name: productName } = product;

console.log(productId);
// Output: 101

console.log(productName);
// Output: "Laptop"

// Default Values - Provide defaults for undefined properties
const config = {
  theme: 'dark'
};

const { theme, fontSize = 16, lineHeight = 1.5 } = config;

console.log(theme);
// Output: "dark"

console.log(fontSize);
// Output: 16 (default)

console.log(lineHeight);
// Output: 1.5 (default)

// Rename + Default - Combine both techniques
const options = {
  color: 'blue'
};

const {
  color: backgroundColor = 'white',
  size: textSize = 12
} = options;

console.log(backgroundColor);
// Output: "blue"

console.log(textSize);
// Output: 12 (default)`}
        language="javascript"
        colorTheme="blue"
        icon={Package}
      />

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
// Output: 200

console.log(id);
// Output: 5

console.log(name);
// Output: "Alice"`}
              </pre>
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
// Output: "localhost"

console.log(port);
// Output: 3000

console.log(otherSettings);
// Output: { ssl: true, cache: false, timeout: 5000 }`}
              </pre>
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
});
// Output:
// 1: Alice (admin)
// 2: Bob (user)`}
              </pre>
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

console.log(color);
// Output: "#3b82f6"`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Advanced Patterns"
        description="All advanced destructuring techniques demonstrated together"
        code={`// Nested Destructuring - Extract from nested objects
const response = {
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
// Output: 200

console.log(id);
// Output: 5

console.log(name);
// Output: "Alice"

// Rest Properties - Capture remaining properties
const settings = {
  host: 'localhost',
  port: 3000,
  ssl: true,
  cache: false,
  timeout: 5000
};

const { host, port, ...otherSettings } = settings;

console.log(host);
// Output: "localhost"

console.log(port);
// Output: 3000

console.log(otherSettings);
// Output: { ssl: true, cache: false, timeout: 5000 }

// Array of Objects - Destructure while iterating
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' }
];

users.forEach(({ id, name, role }) => {
  console.log(\`\${id}: \${name} (\${role})\`);
});
// Output:
// 1: Alice (admin)
// 2: Bob (user)

// Computed Properties - Use dynamic property names
const data = {
  primary: '#3b82f6',
  secondary: '#8b5cf6'
};

const key = 'primary';
const { [key]: color } = data;

console.log(color);
// Output: "#3b82f6"`}
        language="javascript"
        colorTheme="indigo"
        icon={Layers}
      />

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

console.log(newUser.role);
// Output: "user" (default)`}
              </pre>
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
console.log(result);
// Output: "Paris is at 48.8566, 2.3522"`}
              </pre>
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
console.log(user.name);
// Output: "Alice"
// timestamp -> 1637012345678`}
              </pre>
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
/>
// Output: Renders card with name and email
// Default theme "light" applied`}
              </pre>
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
// Output: "https://api.example.com"

console.log(darkMode);
// Output: true`}
              </pre>
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
});
// Extracts only needed event data
// Cleaner, more readable event handlers`}
              </pre>
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

    </div>
  );
}
