'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, GitBranch } from 'lucide-react';

export default function JavaScriptObjectCreate() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitBranch}
        category="Advanced Object Patterns"
        title="Object.create()"
        description="Create objects with a specific prototype - the blueprint way!"
        colorTheme="cyan"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50/80 via-blue-50/50 to-teal-50/30 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 text-white shadow-xl">
              <GitBranch className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-700 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                What is Object.create()?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Think of <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded text-cyan-700 dark:text-cyan-400">Object.create()</code> as a 
                <strong className="text-cyan-700 dark:text-cyan-400"> blueprint machine</strong>! 
                You give it a prototype (the blueprint), and it creates a new object that inherits all the properties and methods from that blueprint. 
                It's like saying "make me an object that acts like this parent object."
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use It?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Unlike <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">{`{}`}</code> or <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">new Object()</code>, 
              you have <strong>complete control</strong> over what the new object inherits. Perfect for implementing prototypal inheritance manually!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Set the Prototype</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The first argument becomes the new object's prototype - it inherits from this!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Optional Properties</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Second argument (optional) adds own properties to the new object with descriptors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">🔗</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">Inheritance Chain</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The new object can access all prototype properties via the prototype chain!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Full Control</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Unlike object literals, you choose exactly what the object inherits from!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Syntax</h4>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <code className="text-sm text-gray-800 dark:text-gray-200">
                <div className="mb-2">Object.create(proto)</div>
                <div>Object.create(proto, propertiesObject)</div>
              </code>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div>• <strong className="text-purple-700 dark:text-purple-300">proto</strong>: The prototype for the new object (can be null)</div>
              <div>• <strong className="text-purple-700 dark:text-purple-300">propertiesObject</strong>: Optional own properties with descriptors</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Creating Objects with Inheritance"
        description="Use a parent object as blueprint for child objects"
        language="javascript"
        colorTheme="cyan"
        code={`// Define a parent object (the blueprint)
const animal = {
  type: 'Unknown',
  makeSound() {
    console.log('Some sound...');
  },
  describe() {
    console.log(\`I am a \${this.type}\`);
  }
};

// Create a dog object that inherits from animal
const dog = Object.create(animal);
dog.type = 'Dog';
dog.makeSound = function() {
  console.log('Woof! Woof!');
};

// Create a cat object that inherits from animal
const cat = Object.create(animal);
cat.type = 'Cat';
cat.makeSound = function() {
  console.log('Meow!');
};

dog.describe();  // "I am a Dog"
dog.makeSound(); // "Woof! Woof!"

cat.describe();  // "I am a Cat"
cat.makeSound(); // "Meow!"

// Both inherit the describe method from animal!
console.log(Object.getPrototypeOf(dog) === animal);  // true`}
      />

      <CodeSnippet
        title="Example 2: Creating Objects with Properties"
        description="Add own properties during creation with descriptors"
        language="javascript"
        colorTheme="blue"
        code={`// Create a user prototype
const userPrototype = {
  login() {
    console.log(\`\${this.username} logged in\`);
  },
  logout() {
    console.log(\`\${this.username} logged out\`);
  }
};

// Create user with own properties and descriptors
const admin = Object.create(userPrototype, {
  username: {
    value: 'admin',
    writable: true,
    enumerable: true
  },
  role: {
    value: 'Administrator',
    writable: false,  // Can't change role
    enumerable: true
  },
  permissions: {
    value: ['read', 'write', 'delete'],
    writable: true,
    enumerable: true
  }
});

console.log(admin.username);  // "admin"
console.log(admin.role);      // "Administrator"
admin.login();                // "admin logged in"

// Try to change role (won't work - it's not writable)
admin.role = 'User';
console.log(admin.role);      // Still "Administrator"

// Can change username (it's writable)
admin.username = 'superadmin';
admin.logout();               // "superadmin logged out"`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Object.create() vs Other Ways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-2 border-cyan-200 dark:border-cyan-800/30">
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">✅ Use Object.create When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Need specific prototype inheritance</li>
                <li>• Implementing prototypal patterns</li>
                <li>• Want full control over prototype chain</li>
                <li>• Creating object without constructor</li>
                <li>• Need objects with null prototype</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-950/20 border-2 border-gray-200 dark:border-gray-800/30">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">✅ Use {} When</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Simple object creation</li>
                <li>• Don't need custom prototype</li>
                <li>• Object.prototype inheritance is fine</li>
                <li>• Most common use cases</li>
                <li>• Data storage/config objects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Special Use Case: null Prototype
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Creating "Pure" Objects</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Pass <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded">null</code> to create objects 
              with NO prototype - perfect for dictionaries and hash maps without inherited properties!
            </p>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-200 dark:border-amber-700">
              <code className="text-xs text-gray-800 dark:text-gray-200">
                <div>const pureObject = Object.create(null);</div>
                <div>pureObject.name = 'Test';</div>
                <div className="mt-2 text-green-600 dark:text-green-400">// No toString, hasOwnProperty, etc!</div>
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Custom Prototype</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Choose exactly what your object inherits from
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Prototype Chain</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    New object inherits all properties from prototype
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Full Control</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add properties with descriptors during creation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">null Prototype</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create pure objects with no inherited properties
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
