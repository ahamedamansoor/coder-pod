'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function JavaScriptHasOwn() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="Modern JavaScript"
        title="Object.hasOwn"
        description="Safer alternative to hasOwnProperty for checking properties (ES2022)"
        colorTheme="emerald"
      />

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-lg">
              <Shield className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Object.hasOwn? 🛡️
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A <strong className="text-emerald-700 dark:text-emerald-400">safer, simpler way</strong> to check if an object has its own property! 
                Replaces the old <code>hasOwnProperty</code> method with a more reliable static method that 
                <strong className="text-green-700 dark:text-green-400"> can't be overridden</strong>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Old Way vs New Way 📊</CardTitle>
          <CardDescription>See the improvement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100">❌ Old (hasOwnProperty)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`const obj = { name: 'Alice' };

// Works, but verbose
obj.hasOwnProperty('name'); // true

// Better way (to avoid issues)
Object.prototype.hasOwnProperty
  .call(obj, 'name'); // true
  
// Problem: can be overridden!
obj.hasOwnProperty = () => false;
obj.hasOwnProperty('name'); // false ❌`}</code></pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100">✅ New (Object.hasOwn)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`const obj = { name: 'Alice' };

// Simple and clean!
Object.hasOwn(obj, 'name'); // true

// Can't be overridden
obj.hasOwn = () => false;
Object.hasOwn(obj, 'name'); // true ✅

// Works with null prototype
const nullObj = Object.create(null);
Object.hasOwn(nullObj, 'x'); // Works!`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Examples 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example 1: Check Object Properties</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`const user = {
  name: 'Alice',
  age: 30
};

// Check own properties
console.log(Object.hasOwn(user, 'name'));     // true
console.log(Object.hasOwn(user, 'age'));      // true
console.log(Object.hasOwn(user, 'email'));    // false

// Inherited properties return false
console.log(Object.hasOwn(user, 'toString')); // false
console.log('toString' in user);              // true (inherited)`}</code></pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 2: Safe Property Iteration</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3
};

// Safely filter own properties
function getOwnProps(obj) {
  const result = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(getOwnProps(config));
// { apiUrl: '...', timeout: 5000, retries: 3 }`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Works with Null Prototype</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Object with no prototype
const map = Object.create(null);
map.key1 = 'value1';
map.key2 = 'value2';

// Old way fails!
// map.hasOwnProperty('key1'); // ❌ Error! No hasOwnProperty

// New way works perfectly!
console.log(Object.hasOwn(map, 'key1')); // true ✅
console.log(Object.hasOwn(map, 'key2')); // true ✅
console.log(Object.hasOwn(map, 'key3')); // false ✅`}</code></pre>
          </div>

          <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4 border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Example 4: Validation</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`function validateUser(user) {
  const required = ['name', 'email', 'age'];
  
  for (const field of required) {
    if (!Object.hasOwn(user, field)) {
      return \`Missing required field: \${field}\`;
    }
  }
  
  return 'Valid!';
}

const user1 = { name: 'Alice', email: 'alice@example.com', age: 30 };
const user2 = { name: 'Bob', email: 'bob@example.com' };

console.log(validateUser(user1)); // 'Valid!'
console.log(validateUser(user2)); // 'Missing required field: age'`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Why Use Object.hasOwn? 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Safer</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Can't be overridden or shadowed by object properties
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Cleaner</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    No need for <code>Object.prototype.hasOwnProperty.call()</code> workaround
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Works Everywhere</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Even with objects that have <code>null</code> prototype
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">More Readable</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Clear intent - checking if object has its own property
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/20 dark:via-green-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Safer Method</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can't be overridden like hasOwnProperty
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Clean Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Object.hasOwn(obj, 'prop') - simple!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Property checks, validation, iteration
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🚀</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern property checking standard
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
