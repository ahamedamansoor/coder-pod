'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, GitBranch } from 'lucide-react';

export default function JavaScriptPrototypeManipulation() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitBranch}
        category="Advanced Object Patterns"
        title="Prototype Manipulation"
        description="Read and change an object's inheritance chain on the fly!"
        colorTheme="pink"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50/80 via-rose-50/50 to-fuchsia-50/30 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 text-white shadow-xl">
              <GitBranch className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-700 via-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
                What is Prototype Manipulation?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of it as <strong className="text-pink-700 dark:text-pink-400">changing your family tree</strong>! 
                Every object in JavaScript has a hidden link to another object (its prototype) - like a parent. 
                With <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 rounded">Object.getPrototypeOf()</code> you can see who the parent is, 
                and with <code className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 rounded">Object.setPrototypeOf()</code> you can 
                <strong className="text-rose-700 dark:text-rose-400"> change the parent</strong> at runtime!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">⚠️ Use with Caution!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              While powerful, <strong>changing prototypes at runtime is slow</strong> and can hurt performance. 
              Prefer <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">Object.create()</code> to set prototype during creation instead!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔗</span>
            Key Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/10 border-2 border-pink-200 dark:border-pink-800">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-bold text-xl text-pink-900 dark:text-pink-100 mb-3">Object.getPrototypeOf()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                <strong>Read</strong> the prototype - see what object inherits from
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-pink-200 dark:border-pink-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  const proto = Object.getPrototypeOf(obj);
                </code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50 to-fuchsia-50 dark:from-rose-900/20 dark:to-fuchsia-900/10 border-2 border-rose-200 dark:border-rose-800">
              <div className="text-4xl mb-3">✏️</div>
              <h4 className="font-bold text-xl text-rose-900 dark:text-rose-100 mb-3">Object.setPrototypeOf()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                <strong>Change</strong> the prototype - make object inherit from something else
              </p>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-rose-200 dark:border-rose-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">
                  Object.setPrototypeOf(obj, newProto);
                </code>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Alternative: __proto__ (Deprecated)</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              You might see <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">obj.__proto__</code> in old code. 
              It's the old way to access prototypes. <strong className="text-red-600 dark:text-red-400">Don't use it!</strong> 
              Use the standard <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">Object.getPrototypeOf()</code> instead.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-200 dark:border-red-700">
                <div className="font-bold text-red-700 dark:text-red-300 mb-1">❌ Old Way (Avoid)</div>
                <code className="text-gray-700 dark:text-gray-300">obj.__proto__</code>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-700">
                <div className="font-bold text-green-700 dark:text-green-300 mb-1">✅ Modern Way</div>
                <code className="text-gray-700 dark:text-gray-300">Object.getPrototypeOf(obj)</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Reading Prototypes"
        description="Inspect the prototype chain of objects"
        language="javascript"
        colorTheme="pink"
        code={`// Regular object literal
const user = { name: 'Alice' };

// Get its prototype
const userProto = Object.getPrototypeOf(user);

console.log(userProto === Object.prototype);  // true
// Regular objects inherit from Object.prototype!

console.log(userProto);
// { constructor: f, toString: f, hasOwnProperty: f, ... }


// Array example
const numbers = [1, 2, 3];
const arrayProto = Object.getPrototypeOf(numbers);

console.log(arrayProto === Array.prototype);  // true
// Arrays inherit from Array.prototype!

console.log(arrayProto);
// { push: f, pop: f, map: f, filter: f, ... }


// Check the prototype chain
const proto1 = Object.getPrototypeOf(numbers);     // Array.prototype
const proto2 = Object.getPrototypeOf(proto1);      // Object.prototype
const proto3 = Object.getPrototypeOf(proto2);      // null (end of chain!)

console.log(proto1 === Array.prototype);    // true
console.log(proto2 === Object.prototype);   // true
console.log(proto3);                        // null


// Custom object with Object.create
const animal = {
  type: 'Unknown',
  makeSound() {
    console.log('Some sound');
  }
};

const dog = Object.create(animal);
dog.name = 'Buddy';

const dogProto = Object.getPrototypeOf(dog);
console.log(dogProto === animal);  // true
// dog inherits from animal!`}
      />

      <CodeSnippet
        title="Example 2: Changing Prototypes (Use Carefully!)"
        description="Dynamically change what an object inherits from"
        language="javascript"
        colorTheme="rose"
        code={`// Create some parent objects
const flyingAbility = {
  canFly: true,
  fly() {
    console.log(\`\${this.name} is flying! 🦅\`);
  }
};

const swimmingAbility = {
  canSwim: true,
  swim() {
    console.log(\`\${this.name} is swimming! 🏊\`);
  }
};

// Create a basic animal
const duck = {
  name: 'Donald'
};

console.log(duck.canFly);   // undefined
console.log(duck.canSwim);  // undefined


// Give it flying ability!
Object.setPrototypeOf(duck, flyingAbility);

duck.fly();  // "Donald is flying! 🦅"
console.log(duck.canFly);   // true
console.log(duck.canSwim);  // undefined


// Change its ability to swimming!
Object.setPrototypeOf(duck, swimmingAbility);

duck.swim();  // "Donald is swimming! 🏊"
console.log(duck.canFly);   // undefined (lost flying!)
console.log(duck.canSwim);  // true


// ⚠️ Performance warning!
// Changing prototypes is SLOW - JavaScript engines have to
// reorganize internal structures. Avoid in production code!


// Better approach: Set prototype during creation
const eagle = Object.create(flyingAbility);
eagle.name = 'Eddie';
eagle.fly();  // "Eddie is flying! 🦅"
// Much faster! ✅`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Prototype Chain Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/10 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">How the Chain Works</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg border-2 border-pink-300 dark:border-pink-700 text-center min-w-[120px]">
                  <code className="text-sm font-bold text-pink-900 dark:text-pink-100">myObject</code>
                </div>
                <span className="text-2xl">→</span>
                <div className="text-sm text-gray-700 dark:text-gray-300">Looks for property here first</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-rose-100 dark:bg-rose-900/30 rounded-lg border-2 border-rose-300 dark:border-rose-700 text-center min-w-[120px]">
                  <code className="text-sm font-bold text-rose-900 dark:text-rose-100">[[Prototype]]</code>
                </div>
                <span className="text-2xl">→</span>
                <div className="text-sm text-gray-700 dark:text-gray-300">Not found? Check parent</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-lg border-2 border-fuchsia-300 dark:border-fuchsia-700 text-center min-w-[120px]">
                  <code className="text-sm font-bold text-fuchsia-900 dark:text-fuchsia-100">Object.prototype</code>
                </div>
                <span className="text-2xl">→</span>
                <div className="text-sm text-gray-700 dark:text-gray-300">Still not found? Check grandparent</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 dark:bg-gray-900/30 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-center min-w-[120px]">
                  <code className="text-sm font-bold text-gray-900 dark:text-gray-100">null</code>
                </div>
                <span className="text-2xl">→</span>
                <div className="text-sm text-gray-700 dark:text-gray-300">End of chain! Return undefined</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Performance & Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ DO: Use Object.create()</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Set the prototype when creating the object - fast and clean!
            </p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-green-200 dark:border-green-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                const obj = Object.create(protoObj);
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ DON'T: Use setPrototypeOf() in Loops</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Changing prototypes repeatedly is extremely slow! JavaScript engines can't optimize it.
            </p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-red-200 dark:border-red-700">
              <code className="text-xs text-red-600 dark:text-red-400">
                // BAD - Very slow!<br/>
                for (let obj of objects) {`{`}<br/>
                {'  '}Object.setPrototypeOf(obj, newProto);<br/>
                {`}`}
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 TIP: getPrototypeOf() is Safe</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Reading prototypes with <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">getPrototypeOf()</code> has 
              no performance penalty. Use it freely for debugging and inspection!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-pink-300 dark:border-pink-700 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-fuchsia-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Read Prototypes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">Object.getPrototypeOf()</code> to inspect
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✏️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Change Prototypes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">Object.setPrototypeOf()</code> sparingly
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefer <code className="text-xs">Object.create()</code> over changing prototypes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Prototype Chain</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Objects inherit from parent until reaching null
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
