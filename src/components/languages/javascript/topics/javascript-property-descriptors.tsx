'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, FileText } from 'lucide-react';

export default function JavaScriptPropertyDescriptors() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={FileText}
        category="Advanced Object Patterns"
        title="Property Descriptors"
        description="Peek behind the scenes - see how properties really work!"
        colorTheme="emerald"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-xl">
              <FileText className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent">
                What are Property Descriptors?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of a property descriptor as a <strong className="text-emerald-700 dark:text-emerald-400">detailed instruction manual</strong> for each property! 
                Every object property isn't just a value - it has hidden settings (metadata) that control how it behaves. 
                Property descriptors let you <strong className="text-teal-700 dark:text-teal-400">read these settings</strong> and understand 
                what you can and can't do with a property.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Why Learn This?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Property descriptors are the <strong>foundation</strong> of how JavaScript properties work! 
              Understanding them helps you debug weird behavior, create better APIs, and know exactly what's happening under the hood.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Two Types of Descriptors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-xl text-emerald-900 dark:text-emerald-100 mb-3">Data Descriptor</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                For regular properties that store values
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-emerald-200 dark:border-emerald-700">
                  <strong className="text-emerald-700 dark:text-emerald-300">value</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">The actual value stored</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-emerald-200 dark:border-emerald-700">
                  <strong className="text-emerald-700 dark:text-emerald-300">writable</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Can the value be changed?</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">⚙️</div>
              <h4 className="font-bold text-xl text-teal-900 dark:text-teal-100 mb-3">Accessor Descriptor</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                For computed properties with get/set
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-teal-200 dark:border-teal-700">
                  <strong className="text-teal-700 dark:text-teal-300">get</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Function called when reading</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded border border-teal-200 dark:border-teal-700">
                  <strong className="text-teal-700 dark:text-teal-300">set</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Function called when writing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Common to Both Types</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">👁️</span>
                  <strong className="text-blue-900 dark:text-blue-100">enumerable</strong>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Shows up in <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">for...in</code> loops 
                  and <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">Object.keys()</code>
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🔧</span>
                  <strong className="text-blue-900 dark:text-blue-100">configurable</strong>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Can the descriptor be changed or property be deleted?
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Reading Property Descriptors"
        description="Use Object.getOwnPropertyDescriptor() to see property settings"
        language="javascript"
        colorTheme="emerald"
        code={`const person = {
  name: 'Alice',
  age: 25
};

// Get descriptor for 'name' property
const nameDescriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(nameDescriptor);
// {
//   value: 'Alice',
//   writable: true,        // Can be changed
//   enumerable: true,      // Shows in loops
//   configurable: true     // Can be deleted
// }

// Regular properties have all flags set to true by default!


// Now let's check a property defined with defineProperty
Object.defineProperty(person, 'id', {
  value: 12345,
  writable: false
  // Note: enumerable and configurable default to false!
});

const idDescriptor = Object.getOwnPropertyDescriptor(person, 'id');

console.log(idDescriptor);
// {
//   value: 12345,
//   writable: false,       // Can't be changed
//   enumerable: false,     // Hidden from loops
//   configurable: false    // Can't be deleted/modified
// }


// Get ALL descriptors at once
const allDescriptors = Object.getOwnPropertyDescriptors(person);

console.log(allDescriptors);
// {
//   name: { value: 'Alice', writable: true, ... },
//   age: { value: 25, writable: true, ... },
//   id: { value: 12345, writable: false, ... }
// }`}
      />

      <CodeSnippet
        title="Example 2: Understanding Descriptor Flags"
        description="See how each flag affects property behavior"
        language="javascript"
        colorTheme="teal"
        code={`const product = {};

// Test 1: writable flag
Object.defineProperty(product, 'price', {
  value: 99.99,
  writable: false,      // ❌ Can't change value
  enumerable: true,
  configurable: true
});

console.log(product.price);  // 99.99
product.price = 199.99;      // Fails silently (or error in strict mode)
console.log(product.price);  // Still 99.99 ❌


// Test 2: enumerable flag
Object.defineProperty(product, 'secretKey', {
  value: 'hidden-value',
  writable: true,
  enumerable: false,    // ❌ Hidden from loops!
  configurable: true
});

console.log(Object.keys(product));        // ['price'] (no secretKey!)
console.log(product.secretKey);           // 'hidden-value' (still accessible)

for (let key in product) {
  console.log(key);  // Only logs 'price'
}


// Test 3: configurable flag
Object.defineProperty(product, 'category', {
  value: 'Electronics',
  writable: true,
  enumerable: true,
  configurable: false   // ❌ Can't delete or modify descriptor
});

delete product.category;  // Fails silently
console.log(product.category);  // Still 'Electronics'

// Try to redefine (will throw error!)
try {
  Object.defineProperty(product, 'category', {
    enumerable: false
  });
} catch (error) {
  console.log('Cannot redefine!');  // ❌ TypeError
}


// Summary of what we created:
console.log(Object.getOwnPropertyDescriptors(product));`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">Flag</th>
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">Default (normal)</th>
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">Default (defineProperty)</th>
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">Controls</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-emerald-600 dark:text-emerald-400">value</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">assigned value</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">undefined</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">The property's value</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-emerald-600 dark:text-emerald-400">writable</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">true</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">false</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Can change the value?</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-emerald-600 dark:text-emerald-400">enumerable</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">true</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">false</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Shows in for...in, keys()?</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-emerald-600 dark:text-emerald-400">configurable</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600 dark:text-green-400">true</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600 dark:text-red-400">false</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Can delete or redefine?</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-teal-600 dark:text-teal-400">get</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">undefined</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">undefined</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Getter function</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700">
                    <code className="text-teal-600 dark:text-teal-400">set</code>
                  </td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">undefined</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">undefined</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Setter function</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            Key Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800/30">
            <code className="font-bold text-emerald-900 dark:text-emerald-100">
              Object.getOwnPropertyDescriptor(obj, prop)
            </code>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Get descriptor for a single property
            </p>
          </div>

          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800/30">
            <code className="font-bold text-teal-900 dark:text-teal-100">
              Object.getOwnPropertyDescriptors(obj)
            </code>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Get all descriptors for all own properties
            </p>
          </div>

          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <code className="font-bold text-green-900 dark:text-green-100">
              Object.defineProperty(obj, prop, descriptor)
            </code>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Define or modify a property with specific descriptor
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <code className="font-bold text-blue-900 dark:text-blue-100">
              Object.defineProperties(obj, descriptors)
            </code>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Define or modify multiple properties at once
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Metadata</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Descriptors are hidden metadata about property behavior
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎛️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">4 Main Flags</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    value, writable, enumerable, configurable
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Types</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data descriptors (value) and accessor descriptors (get/set)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Read Them</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">getOwnPropertyDescriptor()</code> to inspect
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
