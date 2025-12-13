'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Boxes,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Package,
  Key,
  Tag,
} from 'lucide-react';

export default function JavaScriptObjectDestructuring() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Boxes}
        category="JavaScript Fundamentals"
        title="Object Destructuring"
        description="Extract properties from objects into variables - cleaner than dot notation"
        colorTheme="yellow"
      />

      {/* What is Object Destructuring */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Object Destructuring?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Object destructuring is a <strong className="text-yellow-700 dark:text-yellow-400">shortcut</strong> to extract properties from objects. Instead of <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">user.name</code>, <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">user.age</code>, you can unpack them all at once!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Analogy</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Like unpacking a gift box - instead of opening and taking items one by one, you open it and grab everything you need at once with labels!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Destructuring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Basic Object Destructuring</CardTitle>
              <CardDescription>Extract properties by name</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Old Way vs New Way</h4>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-red-200 dark:border-red-800/30">
                  <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">❌ Old Way (Repetitive)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

const name = user.name;
const age = user.age;
const email = user.email;`}</pre>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                  <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ New Way (Clean)</h5>
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

const { name, age, email } = user;
// name = 'Alice'
// age = 25
// email = 'alice@example.com'`}</pre>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Destructuring Examples"
        description="Extracting properties from objects"
        code={`// Simple destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const { firstName, lastName, age } = person;

console.log(firstName);  // 'John'
console.log(lastName);   // 'Doe'
console.log(age);        // 30

// You don't need to extract all properties
const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  inStock: true
};

const { name, price } = product;  // Just get name and price
console.log(name);   // 'Laptop'
console.log(price);  // 999

// Real-world: API response
const response = {
  status: 200,
  data: { message: 'Success' },
  timestamp: '2024-12-13'
};

const { status, data } = response;
console.log(status);  // 200
console.log(data);    // { message: 'Success' }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Renaming Variables */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Tag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Renaming Properties</CardTitle>
              <CardDescription>Use different variable names</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Property: Variable Syntax</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">propertyName: newName</code> to rename
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  age: 25
};

// Rename 'name' to 'userName'
const { name: userName, age: userAge } = user;

console.log(userName);  // 'Alice'
console.log(userAge);   // 25

// 'name' and 'age' variables don't exist!
// console.log(name);  // Error!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Renaming Examples"
        description="When you need different variable names"
        code={`// Avoid naming conflicts
const { name: productName } = { name: 'Laptop' };
const { name: userName } = { name: 'Alice' };

console.log(productName);  // 'Laptop'
console.log(userName);     // 'Alice'

// Real-world: API with unclear property names
const apiResponse = {
  res: 'success',
  msg: 'Data retrieved',
  usr: { id: 1, nm: 'Bob' }
};

const { res: status, msg: message, usr: user } = apiResponse;

console.log(status);   // 'success'
console.log(message);  // 'Data retrieved'
console.log(user);     // { id: 1, nm: 'Bob' }

// Rename nested properties
const { usr: { nm: username } } = apiResponse;
console.log(username);  // 'Bob'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Default Values */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Default Values</CardTitle>
              <CardDescription>Provide fallbacks for missing properties</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Safe Defaults</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs">=</code> to set default values
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  age: 25
};

// 'role' doesn't exist, use default
const { name, age, role = 'User' } = user;

console.log(name);  // 'Alice'
console.log(age);   // 25
console.log(role);  // 'User' (default)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Default Values Examples"
        description="Handling missing properties"
        code={`// Basic defaults
const settings = {
  theme: 'dark'
};

const { theme, language = 'en', notifications = true } = settings;

console.log(theme);         // 'dark' (from object)
console.log(language);      // 'en' (default)
console.log(notifications); // true (default)

// Real-world: API with optional fields
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

const {
  id,
  name,
  email,
  phone = 'Not provided',
  address = 'Not provided'
} = user;

console.log(phone);    // 'Not provided' (default)
console.log(address);  // 'Not provided' (default)

// Combining rename and default
const config = { timeout: 5000 };

const { timeout: maxTime = 3000, retries: maxRetries = 3 } = config;

console.log(maxTime);     // 5000 (from object)
console.log(maxRetries);  // 3 (default)

// Function parameters with defaults
function createUser({ name, age = 18, role = 'User' }) {
  console.log(\`\${name}, \${age}, \${role}\`);
}

createUser({ name: 'Bob' });  // Bob, 18, User
createUser({ name: 'Alice', age: 25, role: 'Admin' });  // Alice, 25, Admin`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Nested Destructuring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Package className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Nested Object Destructuring</CardTitle>
              <CardDescription>Unpack objects within objects</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Deep Unpacking</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use nested braces to destructure nested objects
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const { name, address: { city, zip } } = user;

console.log(name);  // 'Alice'
console.log(city);  // 'New York'
console.log(zip);   // '10001'`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Nested Destructuring Examples"
        description="Working with complex objects"
        code={`// Nested objects
const person = {
  name: 'John',
  age: 30,
  location: {
    city: 'San Francisco',
    country: 'USA'
  }
};

const { name, location: { city, country } } = person;

console.log(name);     // 'John'
console.log(city);     // 'San Francisco'
console.log(country);  // 'USA'

// Real-world: API response
const response = {
  status: 200,
  data: {
    user: {
      id: 1,
      profile: {
        name: 'Alice',
        avatar: 'avatar.jpg'
      }
    }
  }
};

const {
  status,
  data: {
    user: {
      id,
      profile: { name: userName, avatar }
    }
  }
} = response;

console.log(status);    // 200
console.log(id);        // 1
console.log(userName);  // 'Alice'
console.log(avatar);    // 'avatar.jpg'

// Nested with defaults
const config = {
  server: {
    port: 3000
  }
};

const {
  server: {
    port,
    host = 'localhost'
  }
} = config;

console.log(port);  // 3000
console.log(host);  // 'localhost' (default)

// Multiple levels
const data = {
  company: {
    name: 'TechCorp',
    departments: {
      engineering: {
        head: 'Bob Smith',
        count: 50
      }
    }
  }
};

const {
  company: {
    departments: {
      engineering: { head, count }
    }
  }
} = data;

console.log(head);   // 'Bob Smith'
console.log(count);  // 50`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Rest Operator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Key className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Rest Operator (...)</CardTitle>
              <CardDescription>Collect remaining properties into a new object</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">Collect the Rest</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use <code className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">...</code> to gather remaining properties
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  city: 'NYC'
};

const { name, ...rest } = user;

console.log(name);  // 'Alice'
console.log(rest);
// { age: 25, email: 'alice@example.com', city: 'NYC' }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Rest Operator Examples"
        description="Gathering remaining properties"
        code={`const user = {
  id: 1,
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
  role: 'admin'
};

// Extract id, collect rest
const { id, ...userWithoutId } = user;

console.log(id);              // 1
console.log(userWithoutId);
// { name: 'Alice', age: 25, email: 'alice@example.com', role: 'admin' }

// Real-world: Remove sensitive data
const userData = {
  username: 'alice123',
  password: 'secret',
  email: 'alice@example.com',
  firstName: 'Alice'
};

const { password, ...safeData } = userData;

console.log(safeData);
// { username: 'alice123', email: 'alice@example.com', firstName: 'Alice' }
// password is excluded!

// Multiple extractions with rest
const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  category: 'Electronics',
  brand: 'TechBrand',
  inStock: true
};

const { id: productId, name, ...details } = product;

console.log(productId);  // 101
console.log(name);       // 'Laptop'
console.log(details);
// { price: 999, category: 'Electronics', brand: 'TechBrand', inStock: true }

// Function parameters
function updateUser(userId, { name, email, ...otherUpdates }) {
  console.log('Update user', userId);
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Other changes:', otherUpdates);
}

updateUser(1, {
  name: 'Alice Smith',
  email: 'alice@new.com',
  age: 26,
  city: 'Boston'
});
// Update user 1
// Name: Alice Smith
// Email: alice@new.com
// Other changes: { age: 26, city: 'Boston' }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Function Parameters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Destructuring in Functions</CardTitle>
              <CardDescription>Clean function parameters and returns</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-cyan-200 dark:border-cyan-800/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-cyan-600 dark:bg-cyan-700 px-4 py-3">
              <h4 className="text-white font-semibold">Functions + Destructuring</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Destructure directly in function parameters
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-cyan-200 dark:border-cyan-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Instead of this:
function greet(user) {
  console.log(\`Hello, \${user.name}!\`);
}

// Do this:
function greet({ name }) {
  console.log(\`Hello, \${name}!\`);
}

greet({ name: 'Alice', age: 25 });
// Hello, Alice!`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Functions with Destructuring"
        description="Clean function signatures"
        code={`// Basic parameter destructuring
function printUser({ name, age, email }) {
  console.log(\`Name: \${name}\`);
  console.log(\`Age: \${age}\`);
  console.log(\`Email: \${email}\`);
}

printUser({
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
});

// With defaults
function createPost({ title, content, published = false }) {
  console.log(\`Title: \${title}\`);
  console.log(\`Published: \${published}\`);
}

createPost({ title: 'Hello', content: 'World' });
// Title: Hello
// Published: false

// Nested destructuring in parameters
function processOrder({ user: { name, email }, items, total }) {
  console.log(\`Order for \${name} (\${email})\`);
  console.log(\`Items: \${items.length}\`);
  console.log(\`Total: $\${total}\`);
}

processOrder({
  user: { name: 'Bob', email: 'bob@example.com' },
  items: ['item1', 'item2'],
  total: 49.99
});

// Real-world: React component pattern
function UserCard({ user: { name, avatar, role }, onEdit }) {
  return \`User: \${name}, Role: \${role}\`;
}

// Real-world: API handler
function handleResponse({ data, status, error = null }) {
  if (error) {
    console.log('Error:', error);
    return;
  }
  
  console.log('Status:', status);
  console.log('Data:', data);
}

handleResponse({
  data: { users: [] },
  status: 200
});

// Returning objects to destructure
function getUser() {
  return {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  };
}

const { name, email } = getUser();
console.log(name);   // 'Alice'
console.log(email);  // 'alice@example.com'`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Mixed Destructuring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <Sparkles className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <CardTitle>Mixed Array & Object Destructuring</CardTitle>
              <CardDescription>Combine both destructuring types</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-pink-200 dark:border-pink-800/30 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 overflow-hidden">
            <div className="bg-pink-600 dark:bg-pink-700 px-4 py-3">
              <h4 className="text-white font-semibold">Arrays in Objects, Objects in Arrays</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Mix both destructuring syntaxes for complex data
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-pink-200 dark:border-pink-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const data = {
  user: 'Alice',
  scores: [95, 87, 92]
};

// Object destructuring + Array destructuring
const { user, scores: [math, english, science] } = data;

console.log(user);     // 'Alice'
console.log(math);     // 95
console.log(english);  // 87
console.log(science);  // 92`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Mixed Destructuring Examples"
        description="Complex data structures"
        code={`// Arrays of objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const [{ name: firstName }, { name: secondName }] = users;
console.log(firstName);   // 'Alice'
console.log(secondName);  // 'Bob'

// Objects with arrays
const student = {
  name: 'John',
  grades: [85, 90, 88],
  info: { id: 123, year: 2024 }
};

const {
  name,
  grades: [test1, test2, test3],
  info: { id }
} = student;

console.log(name);   // 'John'
console.log(test1);  // 85
console.log(test2);  // 90
console.log(test3);  // 88
console.log(id);     // 123

// Real-world: API response with pagination
const apiResponse = {
  data: [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ],
  meta: {
    page: 1,
    total: 100
  }
};

const {
  data: [firstPost, secondPost],
  meta: { page, total }
} = apiResponse;

console.log(firstPost.title);  // 'Post 1'
console.log(page);             // 1
console.log(total);            // 100

// Complex nesting
const company = {
  name: 'TechCorp',
  employees: [
    { name: 'Alice', skills: ['JS', 'React'] },
    { name: 'Bob', skills: ['Python', 'Django'] }
  ]
};

const {
  name: companyName,
  employees: [
    { name: emp1Name, skills: [skill1, skill2] },
    { name: emp2Name }
  ]
} = company;

console.log(companyName);  // 'TechCorp'
console.log(emp1Name);     // 'Alice'
console.log(skill1);       // 'JS'
console.log(skill2);       // 'React'
console.log(emp2Name);     // 'Bob'`}
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
                <li>• Use descriptive property names</li>
                <li>• Set defaults for optional properties</li>
                <li>• Use rest operator to collect remaining props</li>
                <li>• Destructure in function parameters</li>
                <li>• Rename when properties have unclear names</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't over-nest (hard to read)</li>
                <li>• Don't destructure null/undefined (errors!)</li>
                <li>• Don't use cryptic renamed variables</li>
                <li>• Don't forget defaults for optional props</li>
                <li>• Don't destructure when object structure is unclear</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Common Patterns</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
              <div><strong>Basic:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const {'{ name, age }'} = user</code></div>
              <div><strong>Rename:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const {'{ name: userName }'} = user</code></div>
              <div><strong>Default:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const {'{ age = 18 }'} = user</code></div>
              <div><strong>Rest:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const {'{ id, ...rest }'} = user</code></div>
              <div><strong>Nested:</strong> <code className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded">const {'{ address: { city } }'} = user</code></div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>React & Modern JS</AlertTitle>
            <AlertDescription className="text-base">
              Object destructuring is everywhere in modern JavaScript! React components use it constantly: <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">function MyComponent({'{ title, children }'})</code> - this is object destructuring in action!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
