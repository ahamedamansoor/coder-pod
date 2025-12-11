'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ClipboardList,
  Sparkles,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ListChecks,
  Key,
  Lock,
  Shuffle,
  Package,
  Zap,
  Columns,
} from 'lucide-react';

export default function JavaScriptObjectMethods() {
  const methodGroups = [
    { label: 'Inspection', methods: ['Object.keys', 'Object.values', 'Object.entries'] },
    { label: 'Creation', methods: ['Object.assign', 'Object.fromEntries', 'Object.create'] },
    { label: 'Grouping', methods: ['Object.groupBy (ES2024)'] },
    { label: 'Integrity', methods: ['Object.freeze', 'Object.seal', 'Object.preventExtensions'] },
    { label: 'Definition', methods: ['Object.defineProperty', 'Object.defineProperties', 'Object.getOwnPropertyNames'] },
    { label: 'Meta', methods: ['Object.hasOwn', 'Object.is', 'Object.getOwnPropertyDescriptors'] },
  ];

  const methodReference = [
    { method: 'Object.keys()', tip: 'Array of enumerable property names.' },
    { method: 'Object.values()', tip: 'Array of enumerable property values.' },
    { method: 'Object.entries()', tip: 'Array of [key, value] pairs.' },
    { method: 'Object.fromEntries()', tip: 'Build object from [key, value] pairs.' },
    { method: 'Object.assign()', tip: 'Copy properties into a target object.' },
    { method: 'Object.create()', tip: 'Create object with chosen prototype.' },
    { method: 'Object.groupBy()', tip: 'Group array items by key (ES2024).' },
    { method: 'Object.freeze()', tip: 'Lock additions/updates (deep copy still required).' },
    { method: 'Object.seal()', tip: 'Disallow adding/removing properties but allow value changes.' },
    { method: 'Object.preventExtensions()', tip: 'Block new properties entirely.' },
    { method: 'Object.defineProperty()', tip: 'Define a property with descriptors (writable, enumerable).' },
    { method: 'Object.defineProperties()', tip: 'Define multiple properties at once.' },
    { method: 'Object.getOwnPropertyNames()', tip: 'List own property names (including non-enumerable).' },
    { method: 'Object.hasOwn()', tip: 'Check if a key exists directly on the object.' },
    { method: 'Object.is()', tip: 'Precise equality comparison (handles NaN, -0).' },
    { method: 'Object.getOwnPropertyDescriptors()', tip: 'Inspect attributes like enumerable/writeable.' },
  ];

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ClipboardList}
        category="JavaScript · Arrays & Objects"
        title="Object Methods"
        description="Use built-in helpers including ES2024 Object.groupBy() to inspect, clone, lock, group, and transform objects with confidence."
        colorTheme="blue"
      />

      {/* What Are Object Methods */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What Are Object Methods?
          </CardTitle>
          <CardDescription className="text-base">
            Built-in utilities that inspect, transform, protect, and manipulate objects without manual property loops.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            JavaScript's <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">Object</code> global provides <strong>16+ static methods</strong> to work with objects efficiently. Instead of writing <code className="font-mono text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">for...in</code> loops, you can extract keys, values, or entries in one call. The latest ES2024 adds <code className="font-mono text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">Object.groupBy()</code> for elegant array grouping. You can also clone, freeze, seal, or define properties with precise control.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <p className="text-sm font-semibold mb-1">Inspect</p>
              <p className="text-xs text-muted-foreground">Extract keys, values, and entries without manual iteration</p>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <p className="text-sm font-semibold mb-1">Transform</p>
              <p className="text-xs text-muted-foreground">Clone, merge, and convert objects with built-in helpers</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2" />
              <p className="text-sm font-semibold mb-1">Protect</p>
              <p className="text-xs text-muted-foreground">Freeze, seal, or control property behavior</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/70 via-cyan-50/60 to-emerald-50/60 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-emerald-950/10 border border-blue-200/40 dark:border-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Method Families
          </CardTitle>
          <CardDescription className="text-base">Group helpers by what they do—understand the toolbox at a glance.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodGroups.map(({ label, methods }) => (
            <div key={label} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">{label}</Badge>
              <ul className="text-xs text-muted-foreground space-y-1">
                {methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <CodeSnippet
        title="Inspecting Properties: Keys, Values, Entries"
        description="Extract all keys, values, or key-value pairs from an object"
        code={`const user = {
  id: 123,
  name: 'Ada Lovelace',
  role: 'Developer',
  active: true
};

// Get all property names
const keys = Object.keys(user);
console.log(keys);
// ["id", "name", "role", "active"]

// Get all property values
const values = Object.values(user);
console.log(values);
// [123, "Ada Lovelace", "Developer", true]

// Get key-value pairs
const entries = Object.entries(user);
console.log(entries);
// [["id", 123], ["name", "Ada Lovelace"], ["role", "Developer"], ["active", true]]

// Iterate with entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}`}
        language="javascript"
        colorTheme="blue"
        icon={Key}
      />

      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Method Reference Quick List
          </CardTitle>
          <CardDescription className="text-base">Scan the core helpers and remember when to reach for them.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-3">
          {methodReference.map(({ method, tip }) => (
            <div key={method} className="rounded-lg border bg-white/90 dark:bg-slate-900/80 p-3">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{method}</p>
              <p className="text-xs text-muted-foreground mt-1">{tip}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <CodeSnippet
        title="Transform & Clone: Object.assign()"
        description="Merge multiple objects into a target object (shallow copy)"
        code={`// Merging objects (right side wins on conflicts)
const defaults = {
  theme: 'light',
  fontSize: 14,
  autoSave: true
};

const userPrefs = {
  theme: 'dark',
  fontSize: 16
};

// Merge into new object
const config = Object.assign({}, defaults, userPrefs);
console.log(config);
// {
//   theme: "dark",
//   fontSize: 16,
//   autoSave: true
// }

// Alternative with spread (more common)
const config2 = { ...defaults, ...userPrefs };
console.log(config2); // Same result`}
        language="javascript"
        colorTheme="emerald"
        icon={Shuffle}
      />

      <CodeSnippet
        title="Convert Entries: Object.fromEntries()"
        description="Build an object from an array of key-value pairs"
        code={`// From array of pairs
const pairs = [
  ['name', 'Alice'],
  ['age', 30],
  ['role', 'Developer']
];

const user = Object.fromEntries(pairs);
console.log(user);
// { name: "Alice", age: 30, role: "Developer" }

// Practical: Convert FormData to object
const formData = new FormData();
formData.append('username', 'ada_dev');
formData.append('email', 'ada@example.com');

const userData = Object.fromEntries(formData.entries());
console.log(userData);
// { username: "ada_dev", email: "ada@example.com" }

// Practical: Filter object properties
const original = { id: 1, password: 'secret', email: 'a@b.com' };
const filtered = Object.fromEntries(
  Object.entries(original).filter(([key]) => key !== 'password')
);
console.log(filtered); // { id: 1, email: "a@b.com" }`}
        language="javascript"
        colorTheme="purple"
        icon={Package}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Prototype & Extension Control
          </CardTitle>
          <CardDescription className="text-base">Create objects with custom prototypes and control extensibility.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.create</h4>
            <p className="text-xs text-muted-foreground">Create a new object with a specific prototype</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const animal = {
  speak() { return 'Sound'; }
};

const dog = Object.create(animal);
dog.name = 'Rex';

console.log(dog.speak());
// Output: "Sound"

console.log(dog.name);
// Output: "Rex"

// Object.getPrototypeOf(dog) === animal -> true`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.preventExtensions</h4>
            <p className="text-xs text-muted-foreground">Block adding new properties to an object</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const config = { apiKey: 'secret123' };
Object.preventExtensions(config);

config.newKey = 'test'; // Silently ignored
config.apiKey = 'updated'; // Works

console.log(Object.isExtensible(config));
// Output: false

console.log(config.newKey);
// Output: undefined

// config.apiKey -> "updated"`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.hasOwn</h4>
            <p className="text-xs text-muted-foreground">Check if property exists directly on object (safer than hasOwnProperty)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const user = { name: 'Alice', role: 'admin' };

console.log(Object.hasOwn(user, 'name'));
// Output: true

console.log(Object.hasOwn(user, 'age'));
// Output: false

console.log(Object.hasOwn(user, 'toString'));
// Output: false`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.is</h4>
            <p className="text-xs text-muted-foreground">Precise equality check (handles NaN and -0 correctly)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log(Object.is(25, 25));
// Output: true

console.log(Object.is(NaN, NaN));
// Output: true

console.log(Object.is(0, -0));
// Output: false

console.log(Object.is(null, undefined));
// Output: false`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Immutability: Object.freeze()"
        description="Prevent any modifications to an object (add, update, or delete)"
        code={`// Create immutable constants
const API_CONFIG = Object.freeze({
  BASE_URL: 'https://api.example.com',
  TIMEOUT: 5000,
  MAX_RETRIES: 3
});

// Attempts to modify are silently ignored (throws in strict mode)
API_CONFIG.BASE_URL = 'https://hacked.com'; // Ignored
API_CONFIG.NEW_PROP = 'value'; // Ignored
delete API_CONFIG.TIMEOUT; // Ignored

console.log(Object.isFrozen(API_CONFIG)); // true
console.log(API_CONFIG.BASE_URL); // "https://api.example.com"

// Note: freeze() is shallow
const config = Object.freeze({
  api: { url: 'test' }
});

config.api = {}; // Ignored (frozen)
config.api.url = 'changed'; // Works! (nested object not frozen)

// Deep freeze nested objects too
config.api = Object.freeze(config.api);`}
        language="javascript"
        colorTheme="amber"
        icon={Lock}
      />

      <CodeSnippet
        title="Controlled Mutability: Object.seal()"
        description="Allow value changes but prevent adding or deleting properties"
        code={`// Seal an object (fixed structure, mutable values)
const user = Object.seal({
  id: 123,
  name: 'Alice',
  status: 'active'
});

// Can modify existing properties
user.name = 'Alice Cooper'; // ✓ Works
user.status = 'inactive'; // ✓ Works

// Cannot add new properties
user.email = 'alice@dev.com'; // ✗ Ignored
user.role = 'admin'; // ✗ Ignored

// Cannot delete properties
delete user.status; // ✗ Ignored

console.log(Object.isSealed(user)); // true
console.log(user);
// { id: 123, name: "Alice Cooper", status: "inactive" }

// Use case: Database record with fixed schema
const record = Object.seal({
  id: null,
  createdAt: null,
  updatedAt: null
});

// Can set values
record.id = 456;
record.createdAt = new Date();
// But cannot add extra fields
record.metadata = {}; // Ignored`}
        language="javascript"
        colorTheme="indigo"
        icon={Lock}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Define & Describe Properties
          </CardTitle>
          <CardDescription className="text-base">Control modifiers (enumerable, writable, configurable) with descriptor helpers.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.defineProperty</h4>
            <p className="text-xs text-muted-foreground">Define a single property with descriptors</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const user = {};
Object.defineProperty(user, 'id', {
  value: 100,
  writable: false,
});

console.log(user.id);
// Output: 100

user.id = 200; // No effect (non-writable)`}</pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.defineProperties</h4>
            <p className="text-xs text-muted-foreground">Define multiple properties at once</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const settings = {};
Object.defineProperties(settings, {
  theme: { value: 'dark', enumerable: true },
  version: { value: 1, writable: true },
});

console.log(settings.theme);
// Output: 'dark'

console.log(Object.keys(settings));
// Output: ["theme"]`}</pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.getOwnPropertyNames</h4>
            <p className="text-xs text-muted-foreground">Get all property names (including non-enumerable)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const report = Object.create({}, {
  hidden: { value: true, enumerable: false },
  visible: { value: false, enumerable: true },
});
const names = Object.getOwnPropertyNames(report);

console.log(names);
// Output: ["hidden","visible"]`}</pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: Define & Describe Properties"
        description="All three methods demonstrated together"
        code={`// Object.defineProperty - Define single property with descriptors
const user = {};
Object.defineProperty(user, 'id', {
  value: 100,
  writable: false,
});

console.log(user.id);
// Output: 100

user.id = 200; // No effect (non-writable)

// Object.defineProperties - Define multiple properties at once
const settings = {};
Object.defineProperties(settings, {
  theme: { value: 'dark', enumerable: true },
  version: { value: 1, writable: true },
});

console.log(settings.theme);
// Output: 'dark'

console.log(Object.keys(settings));
// Output: ["theme"]

// Object.getOwnPropertyNames - Get all property names (including non-enumerable)
const report = Object.create({}, {
  hidden: { value: true, enumerable: false },
  visible: { value: false, enumerable: true },
});
const names = Object.getOwnPropertyNames(report);

console.log(names);
// Output: ["hidden","visible"]`}
        language="javascript"
        colorTheme="purple"
        icon={Layers}
      />

      {/* ES2024 New Method */}
      <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            ES2024: Object.groupBy()
          </CardTitle>
          <CardDescription className="text-base">
            New method for grouping array items by a key—perfect for data organization and categorization.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Latest Addition</AlertTitle>
            <AlertDescription>
              <code className="font-mono text-xs bg-indigo-100 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">Object.groupBy()</code> is a <strong>static method</strong> introduced in ES2024 that groups array elements based on a callback function. Returns an object with groups as keys.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Grouping */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Basic Grouping</h4>
                <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30">ES2024</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Group array items by a property or computed value
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const products = [
  { name: 'Apple', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Banana', category: 'fruit' },
  { name: 'Broccoli', category: 'vegetable' }
];

const grouped = Object.groupBy(
  products,
  (item) => item.category
);

console.log(grouped);
// Output: {
//   fruit: [Apple, Banana],
//   vegetable: [Carrot, Broccoli]
// }`}
              </pre>
            </div>

            {/* Grouping by Computation */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Grouping by Computation</h4>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30">Dynamic</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Use any logic to determine the grouping key
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'Diana', age: 16 }
];

const byAgeGroup = Object.groupBy(
  users,
  (user) => user.age >= 18 ? 'adult' : 'minor'
);

console.log(byAgeGroup.adult.length);
// Output: 2 (Alice, Charlie)

console.log(byAgeGroup.minor.length);
// Output: 2 (Bob, Diana)`}
              </pre>
            </div>

            {/* Grouping by String Property */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Grouping Orders by Status</h4>
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">Practical</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Common use case: organize items by status
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const orders = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'shipped' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'delivered' }
];

const byStatus = Object.groupBy(
  orders,
  (order) => order.status
);

console.log(Object.keys(byStatus));
// Output: ["pending", "shipped", "delivered"]

console.log(byStatus.pending.length);
// Output: 2`}
              </pre>
            </div>

            {/* Grouping with Fallback */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Grouping with Fallback</h4>
                <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30">Safe</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Handle missing properties with default values
              </p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const tasks = [
  { title: 'Fix bug', priority: 'high' },
  { title: 'Write docs', priority: 'low' },
  { title: 'Review PR' }, // No priority
  { title: 'Deploy', priority: 'high' }
];

const byPriority = Object.groupBy(
  tasks,
  (task) => task.priority || 'none'
);

console.log(byPriority.none);
// Output: [{ title: 'Review PR' }]
// high -> [Fix bug, Deploy]
// low -> [Write docs]`}
              </pre>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              When to Use Object.groupBy()
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Organizing data by category, status, or type</li>
              <li>✅ Creating reports with grouped summaries</li>
              <li>✅ Building navigation menus from flat arrays</li>
              <li>✅ Sorting items into buckets for processing</li>
              <li>✅ Replacing complex reduce() patterns with cleaner code</li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold mb-2 text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Before Object.groupBy() (Old Way)
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border mt-2">
{`// Old way: using reduce()
const grouped = products.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});

// New way: much cleaner!
const grouped = Object.groupBy(products, item => item.category);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Example: ES2024 Object.groupBy()"
        description="All grouping patterns demonstrated together"
        code={`// Example 1: Basic Grouping by Property
const products = [
  { name: 'Apple', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Banana', category: 'fruit' },
  { name: 'Broccoli', category: 'vegetable' }
];

const grouped = Object.groupBy(
  products,
  (item) => item.category
);

console.log(grouped);
// Output: {
//   fruit: [Apple, Banana],
//   vegetable: [Carrot, Broccoli]
// }

// Example 2: Grouping by Computation (Dynamic)
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'Diana', age: 16 }
];

const byAgeGroup = Object.groupBy(
  users,
  (user) => user.age >= 18 ? 'adult' : 'minor'
);

console.log(byAgeGroup.adult.length);
// Output: 2 (Alice, Charlie)

console.log(byAgeGroup.minor.length);
// Output: 2 (Bob, Diana)

// Example 3: Grouping Orders by Status (Practical)
const orders = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'shipped' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'delivered' }
];

const byStatus = Object.groupBy(
  orders,
  (order) => order.status
);

console.log(Object.keys(byStatus));
// Output: ["pending", "shipped", "delivered"]

console.log(byStatus.pending.length);
// Output: 2

// Example 4: Grouping with Fallback (Safe)
const tasks = [
  { title: 'Fix bug', priority: 'high' },
  { title: 'Write docs', priority: 'low' },
  { title: 'Review PR' }, // No priority
  { title: 'Deploy', priority: 'high' }
];

const byPriority = Object.groupBy(
  tasks,
  (task) => task.priority || 'none'
);

console.log(byPriority.none);
// Output: [{ title: 'Review PR' }]
// high -> [Fix bug, Deploy]
// low -> [Write docs]

// Old way: using reduce()
const grouped2 = products.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});

// New way: much cleaner!
const grouped3 = Object.groupBy(products, item => item.category);`}
        language="javascript"
        colorTheme="indigo"
        icon={Sparkles}
      />

      {/* Real-World Examples */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/40 dark:border-purple-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll use in production code every day.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pattern 1: Merging Configuration */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Merging Configuration Objects
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Default config
const defaults = {
  theme: 'light',
  fontSize: 14,
  autoSave: true
};

// User preferences
const userPrefs = {
  theme: 'dark',
  fontSize: 16
};

// Merge configurations
const config = Object.assign(
  {},
  defaults,
  userPrefs
);

console.log(config.theme);
// Output: "dark"

console.log(config.autoSave);
// Output: true

// config.fontSize -> 16`}
              </pre>
            </div>

            {/* Pattern 2: Converting Form Data */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Converting Form Data to Object
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Form data as entries
const formData = new FormData();
formData.append('username', 'alice');
formData.append('email', 'alice@dev.com');

// Convert to object
const userData = Object.fromEntries(
  formData.entries()
);

console.log(userData);
// Output: { username: "alice", email: "alice@dev.com" }`}
              </pre>
            </div>

            {/* Pattern 3: Filtering Object Properties */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Filtering Object Properties
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const user = {
  id: 123,
  name: 'Bob',
  password: 'secret',
  email: 'bob@dev.com'
};

// Remove password from object
const publicData = Object.fromEntries(
  Object.entries(user)
    .filter(([key]) => key !== 'password')
);

console.log(Object.keys(publicData));
// Output: ["id", "name", "email"]

// publicData -> { id: 123, name: "Bob", email: "bob@dev.com" }`}
              </pre>
            </div>

            {/* Pattern 4: Creating Immutable Constants */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Creating Immutable Constants
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// API configuration
const API_CONFIG = Object.freeze({
  BASE_URL: 'https://api.example.com',
  TIMEOUT: 5000,
  ENDPOINTS: Object.freeze({
    USERS: '/users',
    POSTS: '/posts'
  })
});

// Attempts to modify are ignored
API_CONFIG.BASE_URL = 'hacked';

console.log(API_CONFIG.BASE_URL);
// Output: "https://api.example.com"

console.log(Object.isFrozen(API_CONFIG));
// Output: true`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Use <code className="font-mono text-xs">Object.assign</code> or spread to avoid mutating shared objects.</li>
              <li>✅ Convert entry arrays with <code className="font-mono text-xs">Object.fromEntries</code> for clarity.</li>
              <li>✅ Use <code className="font-mono text-xs">Object.groupBy()</code> instead of complex <code className="font-mono text-xs">reduce()</code> patterns (ES2024).</li>
              <li>✅ Freeze config objects in production to catch accidental writes.</li>
              <li>✅ Check properties with <code className="font-mono text-xs">Object.hasOwn()</code> instead of <code className="font-mono text-xs">hasOwnProperty</code>.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Overusing <code className="font-mono text-xs">Object.assign</code> when spread syntax is clearer.</li>
              <li>❌ Relying on property order—use <code className="font-mono text-xs">Object.entries</code> when you need pairs.</li>
              <li>❌ Complex <code className="font-mono text-xs">reduce()</code> for grouping when <code className="font-mono text-xs">Object.groupBy()</code> exists.</li>
              <li>❌ Forgetting to handle missing keys (check with <code className="font-mono text-xs">Object.hasOwn</code>).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
