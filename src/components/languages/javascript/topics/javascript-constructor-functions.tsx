'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Box,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Zap,
  Package,
  Copy,
} from 'lucide-react';

export default function JavaScriptConstructorFunctions() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Box}
        category="JavaScript Fundamentals"
        title="Constructor Functions"
        description="Blueprints for creating multiple objects with the same structure"
        colorTheme="yellow"
      />

      {/* What are Constructor Functions */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Constructor Functions?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Constructor functions are <strong className="text-yellow-700 dark:text-yellow-400">templates</strong> for creating multiple objects with the same properties and methods. Like a cookie cutter - define once, use many times!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Cookie Cutter Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Instead of manually creating each object, use a constructor function as a <strong>mold</strong>. One template creates unlimited objects with the same structure!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Constructor */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Creating a Constructor Function</CardTitle>
              <CardDescription>Use capital first letter and the new keyword</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Basic Structure</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30 mb-4">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function Person(name, age) {
  this.name = name;      // Property
  this.age = age;        // Property
  
  this.greet = function() {  // Method
    console.log('Hi, I am ' + this.name);
  };
}

// Create instances with 'new'
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);`}</pre>
              </div>
              <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
                <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-sm">
                  <strong>Convention:</strong> Constructor functions start with a <strong>capital letter</strong> (Person, Car, User) to distinguish them from regular functions!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Constructor Example"
        description="Creating a Person constructor"
        code={`// Define constructor function (capital first letter!)
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.greet = function() {
    console.log(\`Hello, my name is \${this.name}\`);
  };
}

// Create new instances
const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

// Access properties
console.log(alice.name);  // 'Alice'
console.log(bob.age);     // 30

// Call methods
alice.greet();  // 'Hello, my name is Alice'
bob.greet();    // 'Hello, my name is Bob'

// Each instance is independent
alice.age = 26;
console.log(alice.age);  // 26
console.log(bob.age);    // 30 (unchanged)`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* The new Keyword */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>The "new" Keyword</CardTitle>
              <CardDescription>What happens behind the scenes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Four Steps of "new"</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h5 className="font-semibold">Create empty object</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">
                  Creates a new empty object: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">{'{}'}</code>
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <h5 className="font-semibold">Set "this" to new object</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">
                  Points <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">this</code> to the new object
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <h5 className="font-semibold">Execute constructor code</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">
                  Runs the function, adding properties to <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">this</code>
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <h5 className="font-semibold">Return the object</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-11">
                  Automatically returns the new object (no <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">return</code> needed!)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="What 'new' Does"
        description="Behind the scenes magic"
        code={`function Person(name, age) {
  // Step 1 & 2: 'new' creates empty object and sets 'this'
  // this = {};
  
  // Step 3: Your code runs, adding properties
  this.name = name;
  this.age = age;
  
  // Step 4: 'new' automatically returns 'this'
  // return this;
}

const alice = new Person('Alice', 25);
console.log(alice);  // { name: 'Alice', age: 25 }

// What happens WITHOUT 'new'? (Don't do this!)
const bob = Person('Bob', 30);  // Missing 'new'!
console.log(bob);  // undefined (no return statement)
// And 'this' refers to global object - BAD!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Real-World Examples</CardTitle>
              <CardDescription>Common use cases</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Practical Constructors</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">User Account</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function User(username, email) {
  this.username = username;
  this.email = email;
  this.isActive = true;
  
  this.login = function() {
    console.log(\`\${this.username} logged in\`);
  };
}`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Product</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function Product(name, price) {
  this.name = name;
  this.price = price;
  
  this.discount = function(percent) {
    return this.price * (1 - percent / 100);
  };
}`}</pre>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Bank Account</h5>
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
  
  this.deposit = function(amount) {
    this.balance += amount;
  };
  
  this.withdraw = function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  };
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Constructor Examples"
        description="Practical applications"
        code={`// User constructor
function User(username, email) {
  this.username = username;
  this.email = email;
  this.isActive = true;
  
  this.login = function() {
    console.log(\`\${this.username} logged in\`);
  };
  
  this.logout = function() {
    console.log(\`\${this.username} logged out\`);
  };
}

const user1 = new User('alice123', 'alice@example.com');
user1.login();  // 'alice123 logged in'

// Product constructor
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
  
  this.applyDiscount = function(percent) {
    this.price = this.price * (1 - percent / 100);
  };
  
  this.getInfo = function() {
    return \`\${this.name} - $\${this.price}\`;
  };
}

const laptop = new Product('Laptop', 1000, 'Electronics');
console.log(laptop.getInfo());  // 'Laptop - $1000'

laptop.applyDiscount(20);
console.log(laptop.getInfo());  // 'Laptop - $800'

// Bank Account constructor
function BankAccount(owner, initialBalance) {
  this.owner = owner;
  this.balance = initialBalance || 0;
  
  this.deposit = function(amount) {
    this.balance += amount;
    console.log(\`Deposited $\${amount}. New balance: $\${this.balance}\`);
  };
  
  this.withdraw = function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(\`Withdrew $\${amount}. New balance: $\${this.balance}\`);
    } else {
      console.log('Insufficient funds');
    }
  };
  
  this.getBalance = function() {
    return \`$\${this.balance}\`;
  };
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);   // Deposited $500. New balance: $1500
account.withdraw(200);  // Withdrew $200. New balance: $1300
console.log(account.getBalance());  // '$1300'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Adding Methods to Prototype */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Copy className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Prototype Methods (Better Way)</CardTitle>
              <CardDescription>Share methods across all instances</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">More Efficient</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Instead of creating a new function for each instance, add methods to the prototype so all instances share the same function!
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-200 dark:border-red-800/30">
                  <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Less Efficient</h5>
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function Person(name) {
  this.name = name;
  
  // New function for EACH instance
  this.greet = function() {
    console.log('Hi ' + this.name);
  };
}

// 100 instances = 100 copies of greet()`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ More Efficient</h5>
                  <pre className="font-mono text-xs text-gray-800 dark:text-gray-200">
{`function Person(name) {
  this.name = name;
}

// ONE function shared by ALL instances
Person.prototype.greet = function() {
  console.log('Hi ' + this.name);
};

// 100 instances = 1 copy of greet()`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Prototype Methods"
        description="Efficient method sharing"
        code={`// Constructor with properties only
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (shared by all instances)
Person.prototype.greet = function() {
  console.log(\`Hello, I'm \${this.name}\`);
};

Person.prototype.getAge = function() {
  return this.age;
};

Person.prototype.haveBirthday = function() {
  this.age++;
  console.log(\`Happy birthday! Now \${this.age} years old\`);
};

// Create instances
const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

// Methods work for all instances
alice.greet();  // 'Hello, I'm Alice'
bob.greet();    // 'Hello, I'm Bob'

alice.haveBirthday();  // 'Happy birthday! Now 26 years old'

// Check if method is shared
console.log(alice.greet === bob.greet);  // true (same function!)

// Real-world: Car constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = 0;
}

Car.prototype.drive = function(miles) {
  this.mileage += miles;
  console.log(\`Drove \${miles} miles. Total: \${this.mileage}\`);
};

Car.prototype.getInfo = function() {
  return \`\${this.year} \${this.make} \${this.model}\`;
};

const car1 = new Car('Toyota', 'Camry', 2020);
car1.drive(100);  // 'Drove 100 miles. Total: 100'
console.log(car1.getInfo());  // '2020 Toyota Camry'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Checking Instances */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>instanceof Operator</CardTitle>
              <CardDescription>Check if object was created by constructor</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Type Checking</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">instanceof</code> to check if an object was created by a specific constructor
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`function Person(name) {
  this.name = name;
}

const alice = new Person('Alice');

console.log(alice instanceof Person);  // true
console.log(alice instanceof Object);  // true (all objects)
console.log(alice instanceof Array);   // false`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="instanceof Examples"
        description="Checking object types"
        code={`function Person(name) {
  this.name = name;
}

function Car(model) {
  this.model = model;
}

const alice = new Person('Alice');
const myCar = new Car('Tesla');

// Check types
console.log(alice instanceof Person);  // true
console.log(alice instanceof Car);     // false
console.log(myCar instanceof Car);     // true

// All objects are instances of Object
console.log(alice instanceof Object);  // true
console.log(myCar instanceof Object);  // true

// Real-world: Type checking in function
function processUser(obj) {
  if (obj instanceof Person) {
    console.log(\`User: \${obj.name}\`);
  } else {
    console.log('Not a Person instance');
  }
}

processUser(alice);  // 'User: Alice'
processUser(myCar);  // 'Not a Person instance'
processUser({});     // 'Not a Person instance'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>capital first letter</strong> for constructors</li>
                <li>• Always use <strong>new</strong> keyword</li>
                <li>• Add methods to <strong>prototype</strong></li>
                <li>• Use <strong>instanceof</strong> to check types</li>
                <li>• Set properties in constructor body</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't forget <strong>new</strong> keyword</li>
                <li>• Don't add methods inside constructor (use prototype)</li>
                <li>• Don't use lowercase for constructor names</li>
                <li>• Don't call constructor like regular function</li>
                <li>• Don't return values from constructor</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Constructor Pattern</h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// 1. Define constructor (capital first letter)
function MyConstructor(param1, param2) {
  this.property1 = param1;
  this.property2 = param2;
}

// 2. Add methods to prototype
MyConstructor.prototype.method1 = function() {
  // use this.property1, this.property2
};

// 3. Create instances with 'new'
const instance = new MyConstructor(value1, value2);`}</pre>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Modern Alternative</AlertTitle>
            <AlertDescription className="text-base">
              Constructor functions are still valid, but modern JavaScript uses <strong>ES6 Classes</strong> which provide cleaner syntax. They work the same way under the hood!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
