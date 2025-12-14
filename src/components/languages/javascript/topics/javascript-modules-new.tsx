'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Package,
  FileCode,
} from 'lucide-react';

export default function JavaScriptModulesNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript ES6+"
        title="Modules (Import/Export)"
        description="Organize code into reusable, maintainable modules"
        colorTheme="yellow"
      />

      {/* What are Modules? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/20 dark:from-emerald-950/10 dark:via-teal-950/5 dark:to-cyan-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                ES6 Modules: Code Organization
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Modules let you <strong className="text-emerald-700 dark:text-emerald-400">split code into separate files</strong> and import/export between them. Each module has its own scope, preventing global namespace pollution!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-emerald-200 dark:border-emerald-800/30">
            <FileCode className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-lg">Benefits of Modules</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>✓ Reusability</strong> - Use code across multiple files<br/>
              <strong>✓ Maintainability</strong> - Organize code logically<br/>
              <strong>✓ Encapsulation</strong> - Private by default, export only what's needed
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Named Exports */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Named Exports</CardTitle>
              <CardDescription>Export multiple items from a module</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Export File */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">📄 math.js (Export)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Export individual items
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}`}</pre>
              </div>
            </div>

            {/* Import File */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">📄 app.js (Import)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Import specific items
import { PI, add, Calculator } from './math.js';

console.log(PI);        // 3.14159
console.log(add(5, 3)); // 8

const calc = new Calculator();
console.log(calc.multiply(4, 5)); // 20

// Import all as object
import * as Math from './math.js';
console.log(Math.PI);   // 3.14159
console.log(Math.E);    // 2.71828`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Named Export Variations"
        description="Different ways to export named items (simulated)"
        code={`// Simulating module exports (actual exports work in .js files only)

// Method 1: Variables and functions
const name = 'Alice';
function greet() {
  return 'Hello!';
}
console.log('Name:', name);
console.log('Greet:', greet());

// Method 2: Multiple declarations
const age = 25;
const city = 'Boston';
function sayBye() {
  return 'Goodbye!';
}

// Simulating export object
const exports = { age, city, sayBye };
console.log('Exports:', exports);
console.log('Age:', exports.age);
console.log('City:', exports.city);

// Method 3: Rename pattern
const userName = 'Bob';
const userAge = 30;

// Simulating renamed exports
const renamedExports = { 
  name: userName, 
  age: userAge 
};
console.log('Renamed:', renamedExports);

// In actual .js files:
// export { userName as name, userAge as age };`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Default Exports */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Default Exports</CardTitle>
              <CardDescription>One main export per module</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Export File */}
            <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 overflow-hidden">
              <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 border-b-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300">📄 user.js (Export)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Default export (one per file)
export default class User {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
}

// Or with function
export default function createUser(name) {
  return { name };
}`}</pre>
              </div>
            </div>

            {/* Import File */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">📄 app.js (Import)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Import default (no braces!)
import User from './user.js';

const alice = new User('Alice');
alice.greet(); // Hi, I'm Alice

// Can name it anything
import MyUser from './user.js';
import Person from './user.js';

// Both work - same import!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Default Export Examples"
        description="One default export per file (simulated)"
        code={`// Simulating default exports from different files

// person.js - Default export class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const personModule = Person; // Simulating: export default Person
console.log('Person class exported');

// utils.js - Default export function
function formatDate(date) {
  return date.toLocaleDateString();
}
const utilsModule = formatDate; // Simulating: export default formatDate
console.log('formatDate function exported');

// config.js - Default export object
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3
};
const configModule = config; // Simulating: export default config
console.log('Config object exported:', configModule);

// Using the imports
const alice = new personModule('Alice', 25);
console.log('Created person:', alice);
console.log('Formatted date:', utilsModule(new Date()));
console.log('API URL:', configModule.apiUrl);

// In actual .js files:
// export default class Person { ... }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Mixing Named and Default */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Lightbulb className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Mixing Named & Default Exports</CardTitle>
              <CardDescription>Combine both in one module</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Best of Both Worlds!</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <p className="text-sm font-semibold mb-3">📄 utils.js</p>
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Named exports
export const VERSION = '1.0.0';
export function helper() {
  return 'Helper function';
}

// Default export
export default function main() {
  return 'Main function';
}`}</pre>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <p className="text-sm font-semibold mb-3">📄 app.js</p>
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Import both
import main, { VERSION, helper } from './utils.js';

console.log(main());     // Main function
console.log(VERSION);    // 1.0.0
console.log(helper());   // Helper function`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Mixed Export Patterns"
        description="Combining named and default exports (simulated)"
        code={`// Simulating button.js module

// Main component (would be default export)
function Button(label, onClick) {
  return { label, onClick, type: 'button' };
}

// Named exports - utilities
const ButtonSizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

function validateButtonProps(props) {
  return props.label && typeof props.onClick === 'function';
}

// Simulating module exports
const buttonModule = {
  default: Button,
  ButtonSizes,
  validateButtonProps
};

console.log('Button module:', buttonModule);
console.log('Button sizes:', buttonModule.ButtonSizes);

// Using the imports
const btn = buttonModule.default('Click me', () => {});
console.log('Created button:', btn);

const isValid = buttonModule.validateButtonProps({
  label: 'Submit',
  onClick: () => console.log('Clicked')
});
console.log('Props valid:', isValid);

// In actual .js files:
// export default function Button() { ... }
// export const ButtonSizes = { ... };`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Re-exporting */}
      <CodeSnippet
        title="Re-exporting Modules"
        description="Create barrel exports for easier imports (simulated)"
        code={`// Simulating barrel exports pattern

// components/Button.js (separate file)
function Button() {
  return { type: 'button', text: 'Click me' };
}

// components/Input.js (separate file)
function Input() {
  return { type: 'input' };
}

// components/Card.js (separate file)
function Card() {
  return { type: 'div', content: 'Card' };
}

console.log('Individual components created');

// components/index.js - Barrel export (aggregator)
const componentsModule = {
  Button,
  Input,
  Card
};

console.log('Components barrel:', Object.keys(componentsModule));

// Using the barrel import (one import instead of three)
const { Button: Btn, Input: Inp, Card: Crd } = componentsModule;

console.log('Button:', Btn());
console.log('Input:', Inp());
console.log('Card:', Crd());

// Benefit: Single import line instead of multiple
console.log('All components accessible from one import!');

// In actual .js files:
// export { default as Button } from './Button.js';`}
        language="javascript"
        colorTheme="yellow"
        icon={Package}
      />

      {/* Dynamic Imports */}
      <CodeSnippet
        title="Dynamic Imports (Lazy Loading)"
        description="Load modules on demand (simulated)"
        code={`// Simulating dynamic imports with async functions

// Static loading (immediate)
const utils = {
  format: (str) => str.toUpperCase()
};
console.log('Utils loaded immediately');

// Simulating dynamic import (lazy loading)
const heavyModule = {
  heavyFunction: () => console.log('Heavy function executed!')
};

// Dynamic loading simulation
function simulateClick() {
  console.log('Button clicked - loading module...');
  // In real module: const { heavyFunction } = await import('./heavy-module.js');
  setTimeout(() => {
    heavyModule.heavyFunction();
  }, 100);
}
simulateClick();

// Conditional loading pattern
function loadModule(name) {
  console.log(\`Loading \${name} module...\`);
  
  if (name === 'admin') {
    const admin = { init: () => console.log('Admin initialized') };
    admin.init();
  } else {
    const user = { init: () => console.log('User initialized') };
    user.init();
  }
}

loadModule('admin');
loadModule('user');

// Error handling pattern
function loadChart() {
  try {
    console.log('Chart loading...');
    const Chart = class {
      constructor() {
        console.log('Chart created!');
      }
    };
    return new Chart();
  } catch (error) {
    console.error('Failed to load chart:', error);
  }
}

loadChart();

// In actual .js files:
// const module = await import('./file.js');`}
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
                <span className="text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Named Exports</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Multiple exports per file<br/>
                    <code>export {'{}'} const, function, class {'}'};</code><br/>
                    <code>import {'{ name }'} from './file.js';</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Default Export</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    One per file<br/>
                    <code>export default class/function</code><br/>
                    <code>import name from './file.js';</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Import Variations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code>import * as Name</code> - All as object<br/>
                    <code>import {'{ x as y }'}</code> - Rename<br/>
                    <code>await import()</code> - Dynamic
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">File Extension</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always include <code>.js</code> in import paths<br/>
                    Relative paths use <code>./</code> or <code>../</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Use <strong>named exports</strong> for utilities and <strong>default export</strong> for the main item (component, class, etc.). This makes imports more predictable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
