'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Filter, Sparkles } from 'lucide-react';

export default function JavaScriptJSONReplacerReviver() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Filter}
        category="JavaScript Data Exchange"
        title="Replacer & Reviver"
        description="Transform data during JSON.stringify() and JSON.parse()"
        colorTheme="purple"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-pink-50/30 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-xl">
              <Filter className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Transform During Conversion
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-purple-700 dark:text-purple-400">Replacer</strong> filters/transforms values during stringify. <strong className="text-fuchsia-700 dark:text-fuchsia-400">Reviver</strong> transforms values during parse. Perfect for handling dates, excluding sensitive data, or custom serialization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Replacer Function"
        description="Transform values during JSON.stringify()"
        language="javascript"
        colorTheme="purple"
        code={`const user = {
  name: "Alice",
  password: "secret123",
  age: 25,
  salary: 75000
};

// Replacer function to exclude sensitive data
const safeStringify = JSON.stringify(user, (key, value) => {
  // Exclude password and salary
  if (key === 'password' || key === 'salary') {
    return undefined;  // Exclude this property
  }
  return value;  // Keep other properties
});

console.log(safeStringify);
// '{"name":"Alice","age":25}'

// Another example: Convert dates
const data = {
  title: "Event",
  createdAt: new Date('2024-12-14')
};

const jsonString = JSON.stringify(data, (key, value) => {
  // Keep dates as timestamp instead of ISO string
  if (value instanceof Date) {
    return value.getTime();
  }
  return value;
});

console.log(jsonString);
// '{"title":"Event","createdAt":1702512000000}'`}
      />

      <CodeSnippet
        title="Replacer Array"
        description="Whitelist specific properties"
        language="javascript"
        colorTheme="amber"
        code={`const user = {
  id: 123,
  name: "Alice",
  email: "alice@example.com",
  password: "secret",
  role: "admin",
  lastLogin: "2024-12-14"
};

// Only include id, name, and email
const allowedFields = ['id', 'name', 'email'];
const jsonString = JSON.stringify(user, allowedFields);

console.log(jsonString);
// '{"id":123,"name":"Alice","email":"alice@example.com"}'

// Pretty printed version
const prettyJson = JSON.stringify(user, allowedFields, 2);
console.log(prettyJson);
// {
//   "id": 123,
//   "name": "Alice",
//   "email": "alice@example.com"
// }`}
      />

      <CodeSnippet
        title="Reviver Function"
        description="Transform values during JSON.parse()"
        language="javascript"
        colorTheme="pink"
        code={`// JSON with date as ISO string
const jsonString = '{"name":"Alice","birthDate":"2000-01-15T00:00:00.000Z"}';

// Reviver to convert date strings to Date objects
const user = JSON.parse(jsonString, (key, value) => {
  // Check if value looks like an ISO date
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);  // Convert to Date
  }
  return value;
});

console.log(user.birthDate);  // Date object
console.log(user.birthDate.getFullYear());  // 2000

// Another example: Convert string numbers
const data = JSON.parse(
  '{"price":"99.99","quantity":"5"}',
  (key, value) => {
    // Convert numeric strings to numbers
    if (typeof value === 'string' && !isNaN(value)) {
      return Number(value);
    }
    return value;
  }
);

console.log(typeof data.price);     // "number"
console.log(data.price * data.quantity);  // 499.95`}
      />

      <CodeSnippet
        title="Real-World Example: Date Handling"
        description="Proper date serialization and deserialization"
        language="javascript"
        colorTheme="indigo"
        code={`// Helper to serialize dates as timestamps
function stringifyWithDates(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (value instanceof Date) {
      return { __type: 'Date', value: value.toISOString() };
    }
    return value;
  });
}

// Helper to deserialize dates
function parseWithDates(jsonString) {
  return JSON.parse(jsonString, (key, value) => {
    if (value && value.__type === 'Date') {
      return new Date(value.value);
    }
    return value;
  });
}

// Usage
const event = {
  title: "Meeting",
  startDate: new Date('2024-12-14T10:00:00'),
  endDate: new Date('2024-12-14T11:00:00')
};

const json = stringifyWithDates(event);
console.log(json);
// Contains: {"__type":"Date","value":"2024-12-14T10:00:00.000Z"}

const parsed = parseWithDates(json);
console.log(parsed.startDate instanceof Date);  // true
console.log(parsed.startDate.getHours());       // 10`}
      />

      <CodeSnippet
        title="Sanitize Sensitive Data"
        description="Remove passwords, tokens, and private fields"
        language="javascript"
        colorTheme="orange"
        code={`// List of sensitive field names
const sensitiveFields = ['password', 'token', 'apiKey', 'secret', 'ssn'];

function sanitize(obj) {
  return JSON.stringify(obj, (key, value) => {
    // Exclude sensitive fields
    if (sensitiveFields.includes(key)) {
      return '[REDACTED]';
    }
    // Exclude private fields (starting with _)
    if (key.startsWith('_')) {
      return undefined;
    }
    return value;
  });
}

const userData = {
  username: "john_doe",
  email: "john@example.com",
  password: "super_secret",
  apiKey: "abc123xyz",
  _internal: "private data",
  age: 30
};

console.log(sanitize(userData));
// '{"username":"john_doe","email":"john@example.com","password":"[REDACTED]","apiKey":"[REDACTED]","age":30}'

// For logging/debugging
console.log('User data:', JSON.parse(sanitize(userData)));`}
      />

      <CodeSnippet
        title="Custom Class Serialization"
        description="Handle custom objects properly"
        language="javascript"
        colorTheme="cyan"
        code={`class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  
  // Define how to serialize this class
  toJSON() {
    return {
      __type: 'Person',
      name: this.name,
      birthYear: this.birthYear
    };
  }
}

// Serialize
const person = new Person('Alice', 1990);
const json = JSON.stringify(person);
console.log(json);
// '{"__type":"Person","name":"Alice","birthYear":1990}'

// Deserialize with reviver
function parsePerson(jsonString) {
  return JSON.parse(jsonString, (key, value) => {
    if (value && value.__type === 'Person') {
      return new Person(value.name, value.birthYear);
    }
    return value;
  });
}

const restored = parsePerson(json);
console.log(restored instanceof Person);  // true
console.log(restored.age);                // 34 (calculated property works!)`}
      />

      <Card>
        <CardHeader>
          <CardTitle>When to Use</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Replacer (stringify)</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Exclude sensitive data</li>
                <li>• Filter properties</li>
                <li>• Transform dates/objects</li>
                <li>• Custom serialization</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border-2 border-pink-200 dark:border-pink-800/30">
              <h4 className="font-bold text-pink-900 dark:text-pink-100 mb-3">Reviver (parse)</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Convert date strings to Date</li>
                <li>• Parse string numbers</li>
                <li>• Restore class instances</li>
                <li>• Custom deserialization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/20 dark:via-fuchsia-950/10 dark:to-pink-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <Filter className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Replacer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Function or array in <code className="text-xs">JSON.stringify(obj, replacer)</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <Filter className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reviver</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Function in <code className="text-xs">JSON.parse(str, reviver)</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-200 dark:border-pink-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Security</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use replacer to exclude sensitive data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Date Handling</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use reviver to restore Date objects
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
