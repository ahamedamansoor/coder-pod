'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Type,
  Hash,
  Binary,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Play,
  Code2,
  Sparkles,
  Braces,
  Box,
  ClipboardCheck,
  DivideSquare,
  CircleDot,
} from 'lucide-react';

interface JavaScriptDataTypesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const primitivesHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Primitive Types</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see the output</p>
</body>
</html>`;

const primitivesJs = `// Primitive Data Types in JavaScript

// 1. String
const name = 'Alice';
const greeting = "Hello";
console.log('String:', name, greeting);

// 2. Number
const age = 25;
const price = 19.99;
console.log('Number:', age, price);

// 3. Boolean
const isActive = true;
const hasAccess = false;
console.log('Boolean:', isActive, hasAccess);

// 4. Undefined
let notAssigned;
console.log('Undefined:', notAssigned);

// 5. Null
const empty = null;
console.log('Null:', empty);

console.log('');
console.log('✅ All primitive types shown');`;

const typeCheckHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Type Checking</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see the output</p>
</body>
</html>`;

const typeCheckJs = `// Checking Data Types with typeof

const text = 'Hello';
const num = 42;
const bool = true;
const nothing = null;
const undef = undefined;

console.log('typeof "Hello":', typeof text);
console.log('typeof 42:', typeof num);
console.log('typeof true:', typeof bool);
console.log('typeof null:', typeof nothing); // ⚠️ Returns "object"
console.log('typeof undefined:', typeof undef);

console.log('');
console.log('✅ Use typeof to check data types');`;

const conversionHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Type Conversion</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see the output</p>
</body>
</html>`;

const conversionJs = `// Type Conversion Examples

// String to Number
const strNum = '42';
const converted = Number(strNum);
console.log('String "42" to Number:', converted);
console.log('Type:', typeof converted);

// Number to String
const num = 100;
const strVersion = String(num);
console.log('Number 100 to String:', strVersion);
console.log('Type:', typeof strVersion);

// Boolean conversion
console.log('');
console.log('Boolean conversions:');
console.log('Boolean(1):', Boolean(1));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log('Boolean("text"):', Boolean("text"));

console.log('');
console.log('✅ JavaScript can convert between types');`;

const symbolBigIntHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Symbol & BigInt</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see unique symbols and BigInt math</p>
</body>
</html>`;

const symbolBigIntJs = `// Symbol and BigInt examples

const userId = Symbol('user');
const productId = Symbol('product');
const user = { [userId]: 101, name: 'Ada' };
const product = { [productId]: 202, name: 'Keyboard' };

console.log('Symbols are unique:', userId === productId); // false
console.log('Symbol key access:', user[userId]);

const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991
const bigOrderCount = 9007199254740993n;
const incremented = bigOrderCount + 2n;

console.log('Number MAX_SAFE_INTEGER:', maxSafe);
console.log('BigInt math works past the limit:', incremented);

console.log('');
console.log('✅ Symbol gives unique keys, BigInt handles huge integers');`;

const referenceCopyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Value vs Reference</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see how copying works</p>
</body>
</html>`;

const referenceCopyJs = `// Copying primitives vs objects

let score = 80;
const copiedScore = score; // value copy
score += 20;

console.log('Original score:', score);       // 100
console.log('Copied score:', copiedScore);   // 80 (unchanged)

const originalUser = { name: 'Mina', level: 'beginner' };
const aliasUser = originalUser; // reference copy
const clonedUser = { ...originalUser }; // shallow copy

aliasUser.level = 'intermediate';
clonedUser.name = 'Leo';

console.log('Original (via alias):', originalUser); // level changed
console.log('Alias:', aliasUser); // same object
console.log('Cloned:', clonedUser); // separate object

console.log('');
console.log('✅ Primitives copy by value; reference types need cloning');`;

export default function JavaScriptDataTypes({ onOpenWebPlayground }: JavaScriptDataTypesProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Type}
        category="JavaScript Fundamentals"
        title="Data Types"
        description="Learn about primitive and reference types in JavaScript and how to work with different kinds of data."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Two Categories of Data Types
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript has primitive types and reference types (objects).
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Primitive Types</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Simple, immutable values stored directly.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                String
              </Badge>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Number
              </Badge>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Boolean
              </Badge>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Null
              </Badge>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Undefined
              </Badge>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Symbol
              </Badge>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                BigInt
              </Badge>
            </div>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Binary className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Reference Types</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Complex values stored by reference.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Object
              </Badge>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Array
              </Badge>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Function
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Primitive Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Type className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Primitive Types Quick Guide
          </CardTitle>
          <CardDescription className="text-base">
            Seven built-in primitives that power everyday JavaScript code.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h4 className="font-semibold">String & Number</h4>
            </div>
            <p className="text-sm text-muted-foreground">Text and numeric values. Numbers cover integers and decimals.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const title = <span className="text-green-600 dark:text-green-400">'Docs'</span>;</div>
              <div>const rating = <span className="text-blue-600 dark:text-blue-400">4.8</span>;</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <Binary className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h4 className="font-semibold">Boolean & Empty</h4>
            </div>
            <p className="text-sm text-muted-foreground">`true` or `false`, plus `null` and `undefined` to represent "no value".</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const isLoggedIn = <span className="text-emerald-600">true</span>;</div>
              <div>let note; <span className="text-slate-500">// undefined</span></div>
              <div>const user = <span className="text-rose-600">null</span>;</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <div className="flex items-center gap-2">
              <CircleDot className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h4 className="font-semibold">Symbol & BigInt</h4>
            </div>
            <p className="text-sm text-muted-foreground">Unique identifiers and safe big integers beyond Number limits.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const id = <span className="text-purple-600">Symbol</span>(<span className="text-green-600">'id'</span>);</div>
              <div>const total = <span className="text-purple-600">987654321n</span>;</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* String Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            String - Text Data
          </CardTitle>
          <CardDescription className="text-base">
            Used for storing text. Can use single quotes, double quotes, or backticks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-sm">Single Quotes</h4>
              <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs">
                <span className="text-blue-600 dark:text-blue-400">const</span>{' '}
                <span className="text-amber-700 dark:text-amber-300">name</span> ={' '}
                <span className="text-green-600 dark:text-green-400">'Alice'</span>;
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-sm">Double Quotes</h4>
              <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs">
                <span className="text-blue-600 dark:text-blue-400">const</span>{' '}
                <span className="text-amber-700 dark:text-amber-300">name</span> ={' '}
                <span className="text-green-600 dark:text-green-400">"Alice"</span>;
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-2 text-sm">Template Literals</h4>
              <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs">
                <span className="text-blue-600 dark:text-blue-400">const</span>{' '}
                <span className="text-amber-700 dark:text-amber-300">name</span> ={' '}
                <span className="text-green-600 dark:text-green-400">`Alice`</span>;
              </div>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Best Practice</AlertTitle>
            <AlertDescription>
              Use single quotes or double quotes for simple strings. Use backticks (``) for template literals with variables.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Number Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Hash className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Number - Numeric Data
          </CardTitle>
          <CardDescription className="text-base">
            Represents both integers and floating-point numbers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                Valid Numbers
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div>const age = <span className="text-purple-600">25</span>;</div>
                <div>const price = <span className="text-purple-600">19.99</span>;</div>
                <div>const negative = <span className="text-purple-600">-10</span>;</div>
                <div>const large = <span className="text-purple-600">1e6</span>; // 1 million</div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Special Values
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div>const inf = <span className="text-rose-600">Infinity</span>;</div>
                <div>const negInf = <span className="text-rose-600">-Infinity</span>;</div>
                <div>const notNum = <span className="text-rose-600">NaN</span>; // Not a Number</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Boolean Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Binary className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Boolean - True or False
          </CardTitle>
          <CardDescription className="text-base">
            Logical type with only two values: true or false.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300">Common Uses</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Checking conditions (if statements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Toggling features on/off</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Loop conditions</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
              <h4 className="font-semibold mb-3">Examples</h4>
              <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-2">
                <div>const isActive = <span className="text-emerald-600">true</span>;</div>
                <div>const hasPermission = <span className="text-rose-600">false</span>;</div>
                <div className="text-slate-500">// From comparison</div>
                <div>const isAdult = age {'>'} 18;</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Null and Undefined */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <XCircle className="w-6 h-6 text-slate-600/80 dark:text-slate-400/80" />
            Null & Undefined - Empty Values
          </CardTitle>
          <CardDescription className="text-base">
            Two ways to represent "no value" in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Type</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Meaning</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono font-semibold">undefined</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Variable declared but not assigned
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono text-xs">
                    let x;
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono font-semibold">null</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Intentionally empty or missing
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono text-xs">
                    const user = null;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Symbol & BigInt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CircleDot className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Symbol & BigInt
          </CardTitle>
          <CardDescription className="text-base">
            Extra primitives for unique identifiers and safely handling huge integers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600/80 dark:text-purple-400/80" />
                Symbol
              </h4>
              <p className="text-sm text-muted-foreground">
                Always unique. Great for object keys that shouldn&apos;t collide with other properties.
              </p>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>const unique = Symbol(<span className="text-green-600 dark:text-green-400">'id'</span>);</div>
                <div>const user = {'{'} [unique]: 1, name: <span className="text-green-600 dark:text-green-400">'Mia'</span> {'}'};</div>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30 space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Hash className="w-4 h-4 text-indigo-600/80 dark:text-indigo-400/80" />
                BigInt
              </h4>
              <p className="text-sm text-muted-foreground">
                Represents integers larger than <code className="font-mono">Number.MAX_SAFE_INTEGER</code> using an <code className="font-mono">n</code> suffix.
              </p>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
                <div>const max = Number.MAX_SAFE_INTEGER; <span className="text-slate-500">// 9007199254740991</span></div>
                <div>const huge = <span className="text-indigo-600">9007199254740995n</span>;</div>
                <div>console.log(huge + <span className="text-indigo-600">5n</span>);</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
              <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">JavaScript</span>
              <span className="text-purple-600/70 dark:text-purple-400/70">Unique keys + huge numbers</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{symbolBigIntJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(symbolBigIntHtml, '', symbolBigIntJs)}>
              <Play className="w-4 h-4 mr-2" />
              Run Symbol & BigInt demo
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Truthy vs Falsy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <DivideSquare className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Truthy vs Falsy Values
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript treats some values as false in conditions. Everything else is truthy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Falsy Values
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Examples of Truthy Values
                  </th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono text-xs">
                    false, 0, -0, 0n, &quot;&quot;, null, undefined, NaN
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-mono text-xs">
                    Non-empty strings, [], {'{}'}, numbers other than 0, functions
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    Conditionals like <code className="font-mono">if (value)</code> rely on this conversion.
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3" colSpan={3}>
                    <div className="flex items-center gap-2 text-sm">
                      <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>Check for empty strings or arrays explicitly to avoid accidental truthy checks.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Reference Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Braces className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Reference Types: Objects, Arrays, Functions
          </CardTitle>
          <CardDescription className="text-base">
            Collections of data stored by reference—mutating them changes all references.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-2">
            <div className="flex items-center gap-2">
              <Box className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h4 className="font-semibold">Objects</h4>
            </div>
            <p className="text-sm text-muted-foreground">Key-value pairs. Order is not guaranteed.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const user = {'{'} name: <span className="text-green-600 dark:text-green-400">'Asha'</span>, age: 20 {'}'};</div>
              <div>user.city = <span className="text-green-600 dark:text-green-400">'Lagos'</span>;</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h4 className="font-semibold">Arrays</h4>
            </div>
            <p className="text-sm text-muted-foreground">Ordered lists of values of any type.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const scores = [10, 20, 30];</div>
              <div>scores.push(40);</div>
              <div>const first = scores[0];</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h4 className="font-semibold">Functions</h4>
            </div>
            <p className="text-sm text-muted-foreground">First-class citizens—store them in variables or pass as arguments.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>
                const greet = (name) =&gt; <span className="text-green-600 dark:text-green-400">{'`Hi ${name}`'}</span>;
              </div>
              <div>const fnList = [greet];</div>
              <div>fnList[0](<span className="text-green-600 dark:text-green-400">'Sam'</span>);</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Value vs Reference Copying */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ClipboardCheck className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Copying Values vs References
          </CardTitle>
          <CardDescription className="text-base">
            Primitives copy by value; objects/arrays/functions copy by reference unless you clone them.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This (Primitives)
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Copying numbers/strings/booleans creates a new independent value.</li>
                <li>✅ Safe to modify the original without affecting the copy.</li>
                <li>✅ Reassign variables freely; no shared state.</li>
              </ul>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This (References)
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Assigning an object or array copies the reference, not the data.</li>
                <li>❌ Mutations through any reference update the original too.</li>
                <li>✅ Use spread/structuredClone/libraries for clones when needed.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">JavaScript</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Value vs reference in code</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{referenceCopyJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(referenceCopyHtml, '', referenceCopyJs)}>
              <Play className="w-4 h-4 mr-2" />
              See copy behavior live
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Primitive Types Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Primitive Types
          </CardTitle>
          <CardDescription className="text-base">
            See all primitive data types in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">JavaScript</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{primitivesJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(primitivesHtml, '', primitivesJs)}>
              <Play className="w-4 h-4 mr-2" />
              Try Primitive Types
            </Button>
          )}
        </CardContent>
      </Card>

      {/* typeof Operator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Type className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            typeof Operator
          </CardTitle>
          <CardDescription className="text-base">
            Check the data type of any value using typeof.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
              <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">JavaScript</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{typeCheckJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(typeCheckHtml, '', typeCheckJs)}>
              <Play className="w-4 h-4 mr-2" />
              Try typeof Operator
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Type Conversion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Type Conversion
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript can convert between different data types.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30">
              <span className="uppercase tracking-wide text-emerald-700 dark:text-emerald-300">JavaScript</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{conversionJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(conversionHtml, '', conversionJs)}>
              <Play className="w-4 h-4 mr-2" />
              Try Type Conversion
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Key Takeaways
          </CardTitle>
          <CardDescription className="text-base">
            Remember these important points about data types.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">JavaScript is dynamically typed</p>
              <p className="text-sm text-muted-foreground">Variables can hold any type and change types</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Use typeof to check types</p>
              <p className="text-sm text-muted-foreground">Helps avoid type-related bugs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Null vs Undefined</p>
              <p className="text-sm text-muted-foreground">Null is intentional, undefined means not set yet</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Be careful with type conversion</p>
              <p className="text-sm text-muted-foreground">JavaScript automatically converts types, which can cause unexpected results</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
