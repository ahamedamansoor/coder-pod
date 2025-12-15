'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Link2 } from 'lucide-react';

export default function JavaScriptOptionalChaining() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Link2}
        category="Modern JavaScript (ES2020)"
        title="Optional Chaining (?.)"
        description="Access nested properties safely - no more 'cannot read property' errors!"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-violet-50/30 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-violet-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 text-white shadow-xl">
              <Link2 className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                What is Optional Chaining?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">?.</code> operator is like a 
                <strong className="text-blue-700 dark:text-blue-400"> safety net for property access</strong>! 
                Instead of throwing an error when you try to access a property on <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded">null</code> or 
                <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 rounded">undefined</code>, it simply returns 
                <strong className="text-indigo-700 dark:text-indigo-400"> undefined</strong>. No more crashes!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Problem Solved!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Before ES2020, accessing nested properties required lengthy checks like 
              <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs mx-1">obj && obj.prop && obj.prop.nested</code>. 
              Now just use <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">obj?.prop?.nested</code>!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔗</span>
            Three Ways to Use ?.
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">obj?.prop</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Access object properties safely
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Returns undefined if obj is null/undefined
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/10 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">arr?.[index]</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Access array elements safely
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Works with bracket notation
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10 border-2 border-violet-200 dark:border-violet-800">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">func?.()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Call functions safely
              </p>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Only calls if function exists
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Safe Property Access"
        description="Access deeply nested properties without errors"
        language="javascript"
        colorTheme="blue"
        code={`// Without optional chaining (Old way)
const user = null;

// ❌ This throws an error!
// const name = user.profile.name;
// TypeError: Cannot read property 'profile' of null

// Ugly workaround
const name1 = user && user.profile && user.profile.name;
console.log(name1);  // undefined (safe, but verbose!)


// With optional chaining (New way)
const name2 = user?.profile?.name;
console.log(name2);  // undefined (safe and clean!)


// Real-world example: API response
const apiResponse = {
  data: {
    user: {
      name: 'Alice',
      address: {
        city: 'NYC'
        // street is missing!
      }
    }
  }
};

// Safe access to nested properties
console.log(apiResponse?.data?.user?.name);
// "Alice"

console.log(apiResponse?.data?.user?.address?.city);
// "NYC"

console.log(apiResponse?.data?.user?.address?.street);
// undefined (no error!)

console.log(apiResponse?.data?.posts?.length);
// undefined (posts doesn't exist, no error!)


// Works with arrays too
const users = null;
console.log(users?.[0]?.name);
// undefined (safe!)`}
      />

      <CodeSnippet
        title="Example 2: Optional Function Calls"
        description="Safely call functions that might not exist"
        language="javascript"
        colorTheme="indigo"
        code={`// Optional method calls
const user = {
  name: 'Bob',
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  // sayGoodbye is missing!
};

// Call existing method
console.log(user.greet?.());
// "Hello, I'm Bob"

// Try to call non-existent method
console.log(user.sayGoodbye?.());
// undefined (no error!)

// Without ?. this would crash:
// user.sayGoodbye();  // ❌ TypeError!


// Real-world: Callbacks
function processData(data, onSuccess, onError) {
  try {
    const result = data * 2;
    onSuccess?.(result);  // Only call if provided
  } catch (error) {
    onError?.(error);     // Only call if provided
  }
}

processData(5, (result) => console.log('Result:', result));
// Result: 10
// No error even though onError wasn't provided!


// Array access with optional chaining
const config = {
  settings: null
};

const theme = config.settings?.[0]?.theme;
console.log(theme);  // undefined


// Combining with nullish coalescing (??)
const defaultTheme = config.settings?.[0]?.theme ?? 'light';
console.log(defaultTheme);  // 'light' (fallback value)`}
      />

      <Card>
        <CardHeader>
          <CardTitle>When to Use Optional Chaining</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Use When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Accessing optional API data</li>
                <li>• Calling optional callbacks</li>
                <li>• Deep nested object access</li>
                <li>• User-provided config objects</li>
                <li>• Properties might be null/undefined</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">⚠️ Don't Overuse</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Don't hide actual bugs</li>
                <li>• Properties that should exist</li>
                <li>• Use proper validation instead</li>
                <li>• When you need to know about errors</li>
                <li>• Required properties</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-violet-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Safe Access</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns undefined instead of throwing errors
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Clean Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Replaces lengthy <code className="text-xs">&&</code> chains
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Three Forms</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">?.</code> <code className="text-xs">?.[]</code> <code className="text-xs">?.()</code> for props, arrays, functions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2020</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern JavaScript - widely supported now
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
