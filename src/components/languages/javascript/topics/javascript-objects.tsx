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
  Layers,
  Database,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Key,
  ListChecks,
  Braces,
  Package,
  Zap,
} from 'lucide-react';

export default function JavaScriptObjects() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Boxes}
        category="JavaScript · Arrays & Objects"
        title="Objects"
        description="Store related data as key-value pairs and model everything from users to configuration."
        colorTheme="blue"
      />

      {/* All Object Features Reference */}
      <Card className="bg-gradient-to-br from-indigo-50/70 via-purple-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-purple-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            All Object Features
          </CardTitle>
          <CardDescription className="text-base">
            Comprehensive features for working with JavaScript objects
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-2">Creation</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Object literals</div>
              <div>• Constructor functions</div>
              <div>• Object.create()</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="font-semibold text-sm text-emerald-700 dark:text-emerald-300 mb-2">Properties</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Dot notation</div>
              <div>• Bracket notation</div>
              <div>• Computed properties</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-purple-50/80 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-800/30">
            <h4 className="font-semibold text-sm text-purple-700 dark:text-purple-300 mb-2">Methods</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Object.keys()</div>
              <div>• Object.values()</div>
              <div>• Object.entries()</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30">
            <h4 className="font-semibold text-sm text-amber-700 dark:text-amber-300 mb-2">Operations</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Spread operator</div>
              <div>• Destructuring</div>
              <div>• Object.assign()</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/70 via-sky-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:via-sky-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Why Objects Matter
          </CardTitle>
          <CardDescription className="text-base">
            Objects are the foundation of JavaScript - everything is built on them.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Key className="w-5 h-5 text-indigo-500" />
              <h3 className="font-semibold">Key-value pairs</h3>
            </div>
            <p className="text-sm text-muted-foreground">Store related data with descriptive keys instead of numeric indices.</p>
            <Badge className="bg-indigo-100/80 text-indigo-700 border border-indigo-200/60">{`{ }`}</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Flexible structure</h3>
            </div>
            <p className="text-sm text-muted-foreground">Add or remove properties dynamically as your needs change.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">Dynamic</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold">Universal format</h3>
            </div>
            <p className="text-sm text-muted-foreground">JSON, APIs, and frameworks all use objects as the standard data structure.</p>
            <Badge className="bg-sky-100/80 text-sky-700 border border-sky-200/60">JSON</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Boxes className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            What Are Objects?
          </CardTitle>
          <CardDescription className="text-base">
            Collections of key-value pairs that represent entities, configurations, and data structures.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre 
            className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
            style={{
              fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
            }}
          >
{`// Creating an object
const user = {
  name: 'Ada Lovelace',
  age: 36,
  role: 'Developer',
  skills: ['JavaScript', 'Python', 'Math']
};

// Accessing properties
console.log(user.name);        // "Ada Lovelace"
console.log(user['role']);     // "Developer"
console.log(user.skills[0]);   // "JavaScript"`}
          </pre>
          <p className="text-sm text-muted-foreground">
            Objects use curly braces and contain properties as key-value pairs. Access properties with dot notation or bracket notation.
          </p>
        </CardContent>
      </Card>

      {/* Object Operations */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-slate-50/60 dark:from-indigo-950/10 dark:to-slate-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Common Object Operations
          </CardTitle>
          <CardDescription className="text-base">
            Essential operations for creating, accessing, and manipulating objects
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Creating Objects</h4>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30">Basic</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Multiple ways to create object instances</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`// Object literal (most common)
const user = { name: 'Ada', age: 36 };

// Object constructor
const config = new Object();
config.theme = 'dark';

// Object.create()
const prototype = { greet() { return 'Hi'; } };
const obj = Object.create(prototype);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Accessing Properties</h4>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Essential</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Dot notation and bracket notation</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const user = { name: 'Ada', 'favorite-color': 'blue' };

// Dot notation
console.log(user.name); // "Ada"

// Bracket notation (for special chars or dynamic keys)
console.log(user['favorite-color']); // "blue"
const key = 'name';
console.log(user[key]); // "Ada"`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Spread Operator</h4>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Copy</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Clone and merge objects easily</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark' };

// Merge objects (right side wins)
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: 'dark', lang: 'en' }`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Destructuring</h4>
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Extract</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Unpack properties into variables</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const user = { name: 'Ada', role: 'Dev', city: 'London' };

// Extract specific properties
const { name, role } = user;
console.log(name); // "Ada"

// With defaults
const { city, country = 'UK' } = user;
console.log(country); // "UK"`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Object Methods: Keys, Values, Entries"
        description="Iterate over objects using built-in methods"
        code={`const product = {
  name: 'Laptop',
  price: 999,
  inStock: true,
  specs: { ram: '16GB', cpu: 'M2' }
};

// Get all keys
const keys = Object.keys(product);
console.log(keys); // ["name", "price", "inStock", "specs"]

// Get all values
const values = Object.values(product);
console.log(values); // ["Laptop", 999, true, {...}]

// Get key-value pairs
const entries = Object.entries(product);
console.log(entries);
// [["name", "Laptop"], ["price", 999], ["inStock", true], ["specs", {...}]]

// Iterate with for...in
for (const key in product) {
  console.log(\`\${key}: \${product[key]}\`);
}

// Check if key exists
console.log('price' in product); // true
console.log(product.hasOwnProperty('name')); // true`}
        language="javascript"
        colorTheme="purple"
        icon={Braces}
      />

      <CodeSnippet
        title="Computed Property Names"
        description="Use expressions as property keys with square brackets"
        code={`// Dynamic property names
const propName = 'status';
const user = {
  name: 'Ada',
  [propName]: 'active',
  ['is' + 'Admin']: true
};

console.log(user);
// { name: "Ada", status: "active", isAdmin: true }

// With functions
const createKey = (prefix, name) => \`\${prefix}_\${name}\`;

const config = {
  [createKey('api', 'key')]: 'abc123',
  [createKey('db', 'host')]: 'localhost'
};

console.log(config);
// { api_key: "abc123", db_host: "localhost" }`}
        language="javascript"
        colorTheme="blue"
        icon={Key}
      />

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-sky-50/60 to-blue-50/60 dark:from-sky-950/10 dark:to-blue-950/10 border border-sky-200/40 dark:border-sky-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6 text-sky-600/80 dark:text-sky-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Common use cases where objects are essential
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
              <h4 className="font-semibold">API Response</h4>
            </div>
            <p className="text-xs text-muted-foreground">Parse and access nested API data</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const response = {
  data: {
    user: { id: 1, name: 'Ada' },
    posts: [{ id: 101, title: 'Hello' }]
  }
};

const { data: { user, posts } } = response;
console.log(user.name); // "Ada"`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h4 className="font-semibold">Configuration</h4>
            </div>
            <p className="text-xs text-muted-foreground">Store app settings and preferences</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const config = {
  api: {
    baseURL: 'https://api.example.com',
    timeout: 5000
  },
  features: { darkMode: true }
};

fetch(config.api.baseURL + '/users');`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500" />
              <h4 className="font-semibold">State Management</h4>
            </div>
            <p className="text-xs text-muted-foreground">Track component or application state</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const state = {
  user: null,
  isLoading: false,
  error: null
};

// Update state
const newState = { ...state, isLoading: true };`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <h4 className="font-semibold">Form Data</h4>
            </div>
            <p className="text-xs text-muted-foreground">Collect and validate user input</p>
            <pre 
              className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs overflow-x-auto border"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`const formData = {
  email: 'ada@example.com',
  password: '••••••',
  remember: true
};

if (formData.email && formData.password) {
  // Submit form
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: User Profile Manager"
        description="Combining object operations for a practical use case"
        code={`// Default profile template
const defaultProfile = {
  theme: 'light',
  notifications: true,
  language: 'en'
};

// User's custom settings
const userSettings = {
  theme: 'dark',
  username: 'ada_dev'
};

// Merge with defaults
const profile = { ...defaultProfile, ...userSettings };
console.log(profile);
// {
//   theme: "dark",
//   notifications: true,
//   language: "en",
//   username: "ada_dev"
// }

// Update specific property
const updatedProfile = {
  ...profile,
  notifications: false,
  lastLogin: new Date()
};

// Extract needed values
const { username, theme, language } = updatedProfile;
console.log(\`\${username} prefers \${theme} mode in \${language}\`);

// Save to localStorage
localStorage.setItem('profile', JSON.stringify(updatedProfile));

// Load from localStorage
const savedProfile = JSON.parse(localStorage.getItem('profile'));`}
        language="javascript"
        colorTheme="indigo"
        icon={Sparkles}
      />

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
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
              <li>✅ Use descriptive property names that reflect their purpose.</li>
              <li>✅ Prefer object destructuring for cleaner variable assignment.</li>
              <li>✅ Use spread operator to create shallow copies when updating.</li>
              <li>✅ Freeze configuration objects with Object.freeze() for safety.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Directly mutating objects passed as props or shared state.</li>
              <li>❌ Using reserved words or special characters as property names.</li>
              <li>❌ Creating deeply nested objects without proper documentation.</li>
              <li>❌ Forgetting to check if properties exist before accessing them.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
