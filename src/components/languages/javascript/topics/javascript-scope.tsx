'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Layers,
  Sparkles,
  Code2,
  Lightbulb,
  Home,
  Lock,
} from 'lucide-react';

export default function JavaScriptScope() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="Scope"
        description="Where can you use your variables? Understanding visibility rules"
        colorTheme="yellow"
      />

      {/* What is Scope? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/20 dark:from-purple-950/10 dark:via-indigo-950/5 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Scope: Where Variables Live
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Scope is like <strong className="text-purple-700 dark:text-purple-400">rooms in a house</strong>. A variable created in one room might not be visible in another room. Scope determines where you can use your variables!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-purple-200 dark:border-purple-800/30">
            <Home className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-lg">Think of a House</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>Global</strong> = Living room (everyone can access)<br/>
              <strong>Local</strong> = Your bedroom (only you can access)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Global Scope */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Home className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Global Scope</CardTitle>
              <CardDescription>Variables accessible everywhere in your code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Global Variables</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Variables declared <strong>outside functions</strong> are global - they can be used anywhere in your entire program
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Global variable (outside everything)
const userName = 'Alice';

function greet() {
  console.log('Hello, ' + userName);
}

function sayGoodbye() {
  console.log('Bye, ' + userName);
}

greet();       // Can use userName
sayGoodbye();  // Can use userName
console.log(userName);  // Can use it here too`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Global Scope Example"
        description="Variables declared at the top level are accessible everywhere"
        code={`// Global variable
const appName = 'My App';
const version = '1.0';

function displayInfo() {
  // Can access global variables
  console.log(appName + ' v' + version);
}

function getDetails() {
  // Also can access them here
  return 'Running ' + appName;
}

displayInfo();  // My App v1.0
console.log(getDetails());  // Running My App

// Can even access directly
console.log('App: ' + appName);  // App: My App`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Local Scope */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Local Scope (Function Scope)</CardTitle>
              <CardDescription>Variables only accessible inside their function</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Local Variables</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Variables declared <strong>inside functions</strong> are local - they only exist within that function
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function greet() {
  // Local variable (inside function)
  const message = 'Hello!';
  console.log(message);  // Works!
}

greet();  // Hello!

// Try to use message outside function
console.log(message);  // ❌ ERROR!
// message is not defined`}</pre>
              </div>
            </div>
          </div>

          <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle>Local Variables Are Private</AlertTitle>
            <AlertDescription className="text-base">
              Local variables are like secrets - they only exist inside their function and disappear when the function ends!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Local Scope Example"
        description="Variables declared inside functions stay inside"
        code={`function calculateTotal() {
  // Local variables
  const price = 50;
  const tax = 5;
  const total = price + tax;
  
  console.log('Total: $' + total);
  return total;
}

calculateTotal();  // Total: $55

// Try to use local variables outside
console.log(price);  // ❌ ERROR! price is not defined
console.log(total);  // ❌ ERROR! total is not defined

// Each function has its own scope
function orderItem() {
  const price = 100;  // Different variable!
  console.log(price);
}

orderItem();  // 100 (this function's price)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Block Scope */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Block Scope</CardTitle>
              <CardDescription>Variables inside {'{ }'} are block-scoped</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Variables Inside {'{ }'}</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                With <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">let</code> and <code className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs">const</code>, variables inside curly braces {'{ }'} stay inside those braces
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`if (true) {
  const greeting = 'Hello!';
  console.log(greeting);  // Works!
}

// Outside the block
console.log(greeting);  // ❌ ERROR!
// greeting only exists inside the if block`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Block Scope Example"
        description="let and const are block-scoped"
        code={`// Block scope with if
if (true) {
  const x = 10;
  console.log(x);  // 10 - works inside block
}
console.log(x);  // ❌ ERROR! x not defined outside

// Block scope with loops
for (let i = 0; i < 3; i++) {
  console.log(i);  // 0, 1, 2
}
console.log(i);  // ❌ ERROR! i not defined outside loop

// Each block has its own scope
{
  const message = 'First block';
  console.log(message);  // First block
}

{
  const message = 'Second block';  // Different variable!
  console.log(message);  // Second block
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Scope Chain */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Scope Chain - Looking Outward</CardTitle>
              <CardDescription>Inner scopes can access outer scopes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">JavaScript Looks Outward</h4>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                If JavaScript can't find a variable in the current scope, it looks in the outer scope, then the next outer scope, and so on...
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-200 dark:border-red-800">
                  <div className="font-bold text-red-700 dark:text-red-300 mb-2">🌍 Level 3: Global Scope</div>
                  <code className="text-xs font-mono">const country = 'USA';</code>
                </div>
                
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg border-2 border-orange-200 dark:border-orange-800 ml-6">
                  <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">🏠 Level 2: Outer Function</div>
                  <code className="text-xs font-mono">const city = 'Boston';</code>
                </div>
                
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-200 dark:border-green-800 ml-12">
                  <div className="font-bold text-green-700 dark:text-green-300 mb-2">🚪 Level 1: Inner Function</div>
                  <code className="text-xs font-mono">const name = 'Alice';</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Can access: name, city, country</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Scope Chain Example"
        description="Inner functions can access outer variables"
        code={`// Global scope
const country = 'USA';

function outer() {
  // Outer function scope
  const city = 'Boston';
  
  function inner() {
    // Inner function scope
    const name = 'Alice';
    
    // Can access all three!
    console.log(name);     // Alice (own scope)
    console.log(city);     // Boston (outer scope)
    console.log(country);  // USA (global scope)
  }
  
  inner();
  // Can't access name here
  console.log(city);     // Works
  console.log(country);  // Works
}

outer();
// Can't access name or city here
console.log(country);  // Works`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Global = Everywhere</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Variables outside functions work anywhere
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Local = Private</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Variables inside functions stay inside
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Block = {'{ }'} Scope</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    let/const inside {'{ }'} stay in that block
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Looks Outward</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Inner scopes can see outer variables
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
