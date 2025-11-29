'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ClipboardList,
  Sparkles,
  Columns,
  Layers,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ListChecks,
} from 'lucide-react';

interface JavaScriptObjectMethodsProps {
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
  <title>Object Methods Demo</title>
  <style>
    body { font-family: 'Inter', system-ui; background: #f8fafc; color: #0f172a; padding: 24px; }
    .panel { max-width: 720px; margin: 0 auto; border-radius: 16px; border: 1px solid #e2e8f0; background: #fff; padding: 28px; }
    pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 10px; overflow-x: auto; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Object Methods</h1>
    <p>Open DevTools console to inspect each helper.</p>
    <pre id="summary"></pre>
  </div>
  <script src="./object-methods-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Object Methods Demo ===\\n');

// 1. Inspection Methods
const user = { name: 'Ada', role: 'admin', active: true };
console.log('1. INSPECTION:');
console.log('  keys:', Object.keys(user));
console.log('  values:', Object.values(user));
console.log('  entries:', Object.entries(user));

// 2. Clone & Merge
console.log('\\n2. CLONE & MERGE:');
const defaults = { theme: 'light', fontSize: 14 };
const prefs = { theme: 'dark' };
const merged = Object.assign({}, defaults, prefs);
console.log('  merged config:', merged);

// 3. Convert Entries
console.log('\\n3. FROM ENTRIES:');
const pairs = [['env', 'prod'], ['debug', false]];
const config = Object.fromEntries(pairs);
console.log('  config object:', config);

// 4. Freeze (Immutable)
console.log('\\n4. FREEZE:');
const constants = Object.freeze({ PI: 3.14, MAX: 100 });
constants.PI = 999; // Ignored
console.log('  isFrozen:', Object.isFrozen(constants));
console.log('  PI still:', constants.PI);

// 5. Seal (No Add/Delete)
console.log('\\n5. SEAL:');
const record = Object.seal({ id: 5, status: 'open' });
record.status = 'closed'; // Works
record.newProp = 'test'; // Ignored
console.log('  isSealed:', Object.isSealed(record));
console.log('  record:', record);

// 6. Check Property
console.log('\\n6. HAS OWN:');
console.log('  hasOwn name:', Object.hasOwn(user, 'name'));
console.log('  hasOwn age:', Object.hasOwn(user, 'age'));

// 7. Precise Equality
console.log('\\n7. OBJECT.IS:');
console.log('  is(NaN, NaN):', Object.is(NaN, NaN));
console.log('  is(0, -0):', Object.is(0, -0));

// Summary Display
const summary = [
  '✓ Keys/Values/Entries extracted',
  '✓ Objects merged with assign',
  '✓ Entries converted to object',
  '✓ Constants frozen (immutable)',
  '✓ Record sealed (fixed shape)',
  '✓ Properties checked with hasOwn',
  '✓ Precise equality with Object.is'
].join('\\n');

document.getElementById('summary').textContent = summary;
console.log('\\n✅ All methods demonstrated!');
`;

export default function JavaScriptObjectMethods({ onOpenWebPlayground }: JavaScriptObjectMethodsProps) {
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Inspecting Properties
          </CardTitle>
          <CardDescription className="text-base">Extract keys, values, and entries without manual loops.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Object.keys',
              snippet: `const user = { id: 7, role: 'admin' };
const keys = Object.keys(user);`,
              output: ["['id','role']"]
            },
            {
              title: 'Object.values',
              snippet: `const values = Object.values({ a: 1, b: 2 });`,
              output: ['[1,2]']
            },
            {
              title: 'Object.entries',
              snippet: `const entries = Object.entries({ plan: 'pro', seats: 5 });`,
              output: ["[['plan','pro'],['seats',5]]"]
            },
          ].map(({ title, snippet, output }) => (
            <div key={title} className="rounded-xl border bg-white dark:bg-gray-900 p-4">
              <h4 className="font-semibold mb-2">{title}</h4>
              <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{snippet}</pre>
              <SnippetOutput lines={output} />
            </div>
          ))}
        </CardContent>
      </Card>

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

      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Transform & Clone Objects
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.assign</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const base = { theme: 'light' };
const merged = Object.assign({}, base, { theme: 'dark', layout: 'grid' });`}</pre>
            <SnippetOutput lines={["merged.theme -> 'dark'", "merged.layout -> 'grid'"]} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.fromEntries</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const pairs = [['env','prod'], ['debug', true]];
const config = Object.fromEntries(pairs);`}</pre>
            <SnippetOutput lines={["config.env -> 'prod'", 'config.debug -> true']} />
          </div>
        </CardContent>
      </Card>

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
console.log(dog.name);`}
            </pre>
            <SnippetOutput lines={['dog.speak() -> "Sound"', 'dog.name -> "Rex"', 'Object.getPrototypeOf(dog) === animal -> true']} />
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
console.log(config.newKey);`}
            </pre>
            <SnippetOutput lines={['Object.isExtensible(config) -> false', 'config.newKey -> undefined', 'config.apiKey -> "updated"']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.hasOwn</h4>
            <p className="text-xs text-muted-foreground">Check if property exists directly on object (safer than hasOwnProperty)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const user = { name: 'Alice', role: 'admin' };

console.log(Object.hasOwn(user, 'name'));
console.log(Object.hasOwn(user, 'age'));
console.log(Object.hasOwn(user, 'toString'));`}
            </pre>
            <SnippetOutput lines={['Object.hasOwn(user, "name") -> true', 'Object.hasOwn(user, "age") -> false', 'Object.hasOwn(user, "toString") -> false']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.is</h4>
            <p className="text-xs text-muted-foreground">Precise equality check (handles NaN and -0 correctly)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
console.log(Object.is(null, undefined));`}
            </pre>
            <SnippetOutput lines={['Object.is(25, 25) -> true', 'Object.is(NaN, NaN) -> true', 'Object.is(0, -0) -> false', 'Object.is(null, undefined) -> false']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ListChecks className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Integrity & Immutability
          </CardTitle>
          <CardDescription className="text-base">Lock objects to prevent modifications at different levels.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.freeze</h4>
            <p className="text-xs text-muted-foreground">Make object completely immutable (no add/update/delete)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const constants = Object.freeze({
  PI: 3.14159,
  MAX: 100
});

constants.PI = 3.14; // Ignored
constants.E = 2.718; // Ignored

console.log(Object.isFrozen(constants));
console.log(constants.PI);`}
            </pre>
            <SnippetOutput lines={['Object.isFrozen(constants) -> true', 'constants.PI -> 3.14159']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.seal</h4>
            <p className="text-xs text-muted-foreground">Prevent adding/deleting properties but allow value changes</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const user = Object.seal({
  id: 5,
  status: 'active'
});

user.status = 'inactive'; // Works
user.newProp = 'test'; // Ignored
delete user.id; // Ignored

console.log(Object.isSealed(user));
console.log(user.status);`}
            </pre>
            <SnippetOutput lines={['Object.isSealed(user) -> true', 'user.status -> "inactive"', 'user.id -> 5']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.getOwnPropertyDescriptors</h4>
            <p className="text-xs text-muted-foreground">Get full property descriptors (writable, enumerable, configurable)</p>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`const obj = { id: 1, name: 'Test' };

const descriptors = 
  Object.getOwnPropertyDescriptors(obj);

console.log(descriptors.id.writable);
console.log(descriptors.name.enumerable);`}
            </pre>
            <SnippetOutput lines={['descriptors.id.writable -> true', 'descriptors.name.enumerable -> true', 'descriptors.id.configurable -> true']} />
          </div>
        </CardContent>
      </Card>

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
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const user = {};
Object.defineProperty(user, 'id', {
  value: 100,
  writable: false,
});`}</pre>
            <SnippetOutput lines={['user.id -> 100', 'user.id = 200 // no effect']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.defineProperties</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const settings = {};
Object.defineProperties(settings, {
  theme: { value: 'dark', enumerable: true },
  version: { value: 1, writable: true },
});`}</pre>
            <SnippetOutput lines={["settings.theme -> 'dark'", 'Object.keys(settings) -> [\"theme\"]']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Object.getOwnPropertyNames</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const report = Object.create({}, {
  hidden: { value: true, enumerable: false },
  visible: { value: false, enumerable: true },
});
const names = Object.getOwnPropertyNames(report);`}</pre>
            <SnippetOutput lines={["names -> [\"hidden\",\"visible\"]"]} />
          </div>
        </CardContent>
      </Card>

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

console.log(grouped);`}
              </pre>
              <SnippetOutput lines={['grouped.fruit -> [Apple, Banana]', 'grouped.vegetable -> [Carrot, Broccoli]', 'Returns object with category keys']} />
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
console.log(byAgeGroup.minor.length);`}
              </pre>
              <SnippetOutput lines={['adult -> [Alice, Charlie]', 'minor -> [Bob, Diana]', 'adult.length -> 2']} />
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
console.log(byStatus.pending.length);`}
              </pre>
              <SnippetOutput lines={['keys -> ["pending", "shipped", "delivered"]', 'pending.length -> 2', 'shipped.length -> 1']} />
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

console.log(byPriority.none);`}
              </pre>
              <SnippetOutput lines={['high -> [Fix bug, Deploy]', 'low -> [Write docs]', 'none -> [Review PR]']} />
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
console.log(config.autoSave);`}
              </pre>
              <SnippetOutput lines={['config.theme -> "dark"', 'config.fontSize -> 16', 'config.autoSave -> true']} />
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

console.log(userData);`}
              </pre>
              <SnippetOutput lines={['userData -> { username: "alice", email: "alice@dev.com" }']} />
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

console.log(Object.keys(publicData));`}
              </pre>
              <SnippetOutput lines={['publicData -> { id: 123, name: "Bob", email: "bob@dev.com" }']} />
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

console.log(API_CONFIG.BASE_URL);`}
              </pre>
              <SnippetOutput lines={['API_CONFIG.BASE_URL -> "https://api.example.com"', 'Object.isFrozen(API_CONFIG) -> true']} />
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

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ object methods, manipulation, and ES2024 features.
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
            The console output highlights object methods (keys, values, entries, assign, freeze, seal, and ES2024 groupBy) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
