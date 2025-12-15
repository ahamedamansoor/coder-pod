'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Settings } from 'lucide-react';

export default function JavaScriptObjectDefineProperty() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Settings}
        category="Advanced Object Patterns"
        title="Object.defineProperty()"
        description="Fine-grained control over how properties behave!"
        colorTheme="violet"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50/80 via-purple-50/50 to-fuchsia-50/30 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-xl">
              <Settings className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                What is Object.defineProperty()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of it as a <strong className="text-violet-700 dark:text-violet-400">property customizer</strong>! 
                While normally you'd just write <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 rounded">obj.name = "John"</code>, 
                this method lets you add properties with <strong className="text-purple-700 dark:text-purple-400">special rules</strong> - 
                like "this property can't be changed" or "this property won't show up in loops." It's like adding settings to each property!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use It?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Perfect for creating <strong>read-only</strong> properties, <strong>hidden</strong> properties, 
              properties with <strong>getters/setters</strong>, or properties that can't be deleted. Great for libraries and frameworks!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎛️</span>
            Property Descriptor Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10 border-2 border-violet-200 dark:border-violet-800">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📝</span>
                <h4 className="font-bold text-violet-900 dark:text-violet-100">value</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The actual value of the property
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">✏️</span>
                <h4 className="font-bold text-purple-900 dark:text-purple-100">writable</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can the value be changed? (true/false)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/10 border-2 border-fuchsia-200 dark:border-fuchsia-800">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👁️</span>
                <h4 className="font-bold text-fuchsia-900 dark:text-fuchsia-100">enumerable</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Shows up in for...in loops? (true/false)
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔧</span>
                <h4 className="font-bold text-pink-900 dark:text-pink-100">configurable</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Can be deleted or modified? (true/false)
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Advanced: Getters & Setters</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📥</span>
                  <code className="font-bold text-blue-900 dark:text-blue-100">get</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Function that runs when property is accessed
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📤</span>
                  <code className="font-bold text-blue-900 dark:text-blue-100">set</code>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Function that runs when property is set
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">⚠️ Important</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Can't use <strong>value/writable</strong> with <strong>get/set</strong> together! 
              Choose one approach: data descriptor (value/writable) or accessor descriptor (get/set).
            </p>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Creating Read-Only Properties"
        description="Make properties that can't be changed"
        language="javascript"
        colorTheme="violet"
        code={`const user = {};

// Define a read-only ID property
Object.defineProperty(user, 'id', {
  value: 12345,
  writable: false,      // Can't be changed!
  enumerable: true,     // Shows in loops
  configurable: false   // Can't be deleted
});

// Define a normal writable property
Object.defineProperty(user, 'name', {
  value: 'Alice',
  writable: true,       // Can be changed
  enumerable: true,
  configurable: true
});

console.log(user.id);    // 12345
console.log(user.name);  // "Alice"

// Try to change them
user.id = 99999;      // Fails silently (or throws error in strict mode)
user.name = 'Bob';    // Works fine!

console.log(user.id);    // Still 12345 (unchanged)
console.log(user.name);  // "Bob" (changed)

// Try to delete
delete user.id;       // Fails (configurable: false)
delete user.name;     // Works (configurable: true)

console.log(user.id);    // Still 12345
console.log(user.name);  // undefined (deleted)`}
      />

      <CodeSnippet
        title="Example 2: Computed Properties with Getters/Setters"
        description="Properties that run code when accessed or changed"
        language="javascript"
        colorTheme="purple"
        code={`const circle = {
  _radius: 5  // Private-like property (convention: _ prefix)
};

// Define area as a computed property
Object.defineProperty(circle, 'area', {
  get() {
    console.log('Calculating area...');
    return Math.PI * this._radius ** 2;
  },
  enumerable: true,
  configurable: true
});

// Define radius with validation
Object.defineProperty(circle, 'radius', {
  get() {
    return this._radius;
  },
  set(value) {
    if (value < 0) {
      throw new Error('Radius cannot be negative!');
    }
    console.log(\`Radius changed to \${value}\`);
    this._radius = value;
  },
  enumerable: true,
  configurable: true
});

console.log(circle.area);    // Calculating area... 78.54
console.log(circle.radius);  // 5

circle.radius = 10;          // Radius changed to 10
console.log(circle.area);    // Calculating area... 314.16

// Try invalid value
try {
  circle.radius = -5;        // Throws error!
} catch (error) {
  console.log(error.message); // "Radius cannot be negative!"
}

console.log(circle.radius);  // Still 10 (unchanged)`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Default Descriptor Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-5 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border-2 border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">⚠️ Watch Out!</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              When using <code className="bg-red-100 dark:bg-red-900/30 px-1.5 py-0.5 rounded">Object.defineProperty()</code>, 
              if you don't specify descriptor options, they default to <strong>false</strong>!
            </p>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <div className="space-y-2 text-xs font-mono">
                <div className="text-gray-700 dark:text-gray-300">
                  <span className="text-red-600 dark:text-red-400">// Without defineProperty:</span>
                </div>
                <div className="text-green-600 dark:text-green-400">obj.name = "test" // writable, enumerable, configurable = true</div>
                <div className="text-gray-700 dark:text-gray-300 mt-3">
                  <span className="text-red-600 dark:text-red-400">// With defineProperty (no options):</span>
                </div>
                <div className="text-orange-600 dark:text-orange-400">
                  Object.defineProperty(obj, 'name', {`{value: "test"}`})
                </div>
                <div className="text-red-600 dark:text-red-400">// writable, enumerable, configurable = false ⚠️</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-violet-300 dark:border-violet-700 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎛️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Fine Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Control writable, enumerable, and configurable behavior
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Read-Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set <code className="text-xs">writable: false</code> for constants
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Hidden Props</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set <code className="text-xs">enumerable: false</code> to hide from loops
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Computed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use get/set for dynamic, computed properties
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
