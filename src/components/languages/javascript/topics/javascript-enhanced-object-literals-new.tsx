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
  Box,
  Zap,
} from 'lucide-react';

export default function JavaScriptEnhancedObjectLiteralsNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Box}
        category="JavaScript ES6+"
        title="Enhanced Object Literals"
        description="Cleaner, shorter syntax for creating objects"
        colorTheme="yellow"
      />

      {/* What are Enhanced Object Literals? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/20 dark:from-indigo-950/10 dark:via-purple-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Enhanced Object Literals: Less Typing!
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                ES6 introduced <strong className="text-indigo-700 dark:text-indigo-400">three major improvements</strong> to object literal syntax: property shorthand, method shorthand, and computed property names. Write less code to create objects!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800/30">
            <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <AlertTitle className="text-lg">Three Enhancements</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <strong>1. Property Shorthand</strong> - Skip repetition when key = value<br/>
              <strong>2. Method Shorthand</strong> - Drop the function keyword<br/>
              <strong>3. Computed Properties</strong> - Use expressions as keys
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Property Shorthand */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Property Shorthand</CardTitle>
              <CardDescription>When key and variable name match</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Repetitive</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const name = 'Alice';
const age = 25;
const city = 'Boston';

const user = {
  name: name,    // Repetitive!
  age: age,      // Repetitive!
  city: city     // Repetitive!
};

console.log(user);
// { name: 'Alice', age: 25, city: 'Boston' }`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - Property Shorthand</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const name = 'Alice';
const age = 25;
const city = 'Boston';

const user = {
  name,     // Same as name: name
  age,      // Same as age: age
  city      // Same as city: city
};

console.log(user);
// { name: 'Alice', age: 25, city: 'Boston' }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Property Shorthand Examples"
        description="When variable name matches property name"
        code={`// Creating user object
const username = 'bob123';
const email = 'bob@example.com';
const isActive = true;

const user = {
  username,    // Instead of username: username
  email,       // Instead of email: email
  isActive     // Instead of isActive: isActive
};

// Function returning object
function createPoint(x, y) {
  return { x, y };  // Instead of { x: x, y: y }
}

const point = createPoint(10, 20);
console.log(point);  // { x: 10, y: 20 }

// Mixing shorthand with regular properties
const id = 101;
const title = 'Product';

const product = {
  id,           // Shorthand
  title,        // Shorthand
  price: 99.99, // Regular (different name/literal)
  inStock: true // Regular
};`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Method Shorthand */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Method Shorthand</CardTitle>
              <CardDescription>Drop the function keyword for methods</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - function Keyword</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const person = {
  name: 'Alice',
  
  greet: function() {
    console.log('Hello!');
  },
  
  sayName: function() {
    console.log(this.name);
  }
};

person.greet();    // Hello!
person.sayName();  // Alice`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - Method Shorthand</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const person = {
  name: 'Alice',
  
  greet() {
    console.log('Hello!');
  },
  
  sayName() {
    console.log(this.name);
  }
};

person.greet();    // Hello!
person.sayName();  // Alice`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Method Shorthand Examples"
        description="Cleaner method definitions"
        code={`// Calculator object
const calculator = {
  value: 0,
  
  add(n) {
    this.value += n;
    return this;
  },
  
  subtract(n) {
    this.value -= n;
    return this;
  },
  
  multiply(n) {
    this.value *= n;
    return this;
  },
  
  getValue() {
    return this.value;
  }
};

// Method chaining
calculator.add(10).multiply(2).subtract(5);
console.log(calculator.getValue());  // 15

// User object with methods
const user = {
  firstName: 'John',
  lastName: 'Doe',
  
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  
  greet(time = 'day') {
    console.log(\`Good \${time}, \${this.getFullName()}!\`);
  }
};

user.greet('morning');  // Good morning, John Doe!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Computed Property Names */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Computed Property Names</CardTitle>
              <CardDescription>Use expressions as property keys with [brackets]</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way - Two Steps</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const field = 'username';
const value = 'alice123';

// Create object first
const obj = {};

// Then add property
obj[field] = value;

console.log(obj);
// { username: 'alice123' }`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ ES6 - Computed Properties</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`const field = 'username';
const value = 'alice123';

// Use [brackets] for computed key
const obj = {
  [field]: value
};


console.log(obj);
// { username: 'alice123' }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Computed Property Name Examples"
        description="Dynamic property keys using expressions"
        code={`// Variable as key
const key = 'color';
const value = 'blue';

const obj = {
  [key]: value
};
console.log(obj);  // { color: 'blue' }

// Expression as key
const prefix = 'user_';
const user = {
  [\`\${prefix}name\`]: 'Alice',
  [\`\${prefix}age\`]: 25,
  [\`\${prefix}email\`]: 'alice@example.com'
};
console.log(user);
// { user_name: 'Alice', user_age: 25, user_email: 'alice@example.com' }

// Function call as key
const getId = () => 'id_' + Date.now();

const item = {
  [getId()]: 'value',
  name: 'Item'
};

// Method with computed name
const methodName = 'sayHello';
const person = {
  name: 'Bob',
  [methodName]() {
    console.log(\`Hello from \${this.name}\`);
  }
};

person.sayHello();  // Hello from Bob

// Dynamic keys from array
const fields = ['name', 'age', 'city'];
const values = ['Charlie', 30, 'NYC'];

const profile = {
  [fields[0]]: values[0],
  [fields[1]]: values[1],
  [fields[2]]: values[2]
};
console.log(profile);
// { name: 'Charlie', age: 30, city: 'NYC' }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Combining All Three */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Combining All Enhancements</CardTitle>
              <CardDescription>Use property shorthand, method shorthand, and computed names together</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">Powerful Combination!</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-emerald-200 dark:border-emerald-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const name = 'Alice';
const age = 25;
const field = 'email';

const user = {
  // Property shorthand
  name,
  age,
  
  // Computed property
  [field]: 'alice@example.com',
  [\`is\${name}\`]: true,
  
  // Method shorthand
  greet() {
    console.log(\`Hi, I'm \${this.name}!\`);
  },
  
  getInfo() {
    return \`\${this.name} is \${this.age} years old\`;
  }
};

console.log(user);
// {
//   name: 'Alice',
//   age: 25,
//   email: 'alice@example.com',
//   isAlice: true,
//   greet: [Function: greet],
//   getInfo: [Function: getInfo]
// }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Example */}
      <CodeSnippet
        title="Real-World Example: API Response Builder"
        description="Practical use of all enhancements"
        code={`function createAPIResponse(data, success = true) {
  const timestamp = Date.now();
  const status = success ? 200 : 500;
  const statusText = success ? 'OK' : 'Error';
  
  return {
    // Property shorthand
    data,
    success,
    timestamp,
    status,
    
    // Computed property
    [\`status_\${status}\`]: true,
    
    // Method shorthand
    isSuccess() {
      return this.success;
    },
    
    getData() {
      return this.data;
    },
    
    toJSON() {
      return {
        data: this.data,
        success: this.success,
        status: this.status,
        timestamp: this.timestamp
      };
    }
  };
}

const response = createAPIResponse({ users: ['Alice', 'Bob'] });
console.log(response.isSuccess());  // true
console.log(response.getData());    // { users: ['Alice', 'Bob'] }

// Dynamic form builder
function buildFormData(formId, values) {
  const type = 'form';
  const submittedAt = new Date();
  
  return {
    // Property shorthand
    type,
    submittedAt,
    
    // Computed properties
    [formId]: values,
    [\`\${formId}_count\`]: Object.keys(values).length,
    
    // Methods
    getValues() {
      return this[formId];
    },
    
    hasField(field) {
      return field in this[formId];
    },
    
    validate() {
      return Object.values(this[formId]).every(v => v !== '');
    }
  };
}

const form = buildFormData('loginForm', {
  username: 'alice',
  password: 'secret123'
});

console.log(form.validate());  // true
console.log(form.hasField('username'));  // true`}
        language="javascript"
        colorTheme="yellow"
        icon={Box}
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
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Property Shorthand</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    When variable name = key name<br/>
                    <code>{'{ name }'}</code> instead of <code>{'{ name: name }'}</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Method Shorthand</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Drop <code>function</code> keyword<br/>
                    <code>{'greet() { }'}</code> instead of <code>{'greet: function() { }'}</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Computed Names</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use expressions as keys<br/>
                    <code>{'[key]: value'}</code> or <code>{'[`prefix_${name}`]: val'}</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Combine all three enhancements for maximum conciseness! They work perfectly together in the same object.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
