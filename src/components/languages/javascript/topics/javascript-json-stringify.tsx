'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function JavaScriptJSONStringify() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowLeft}
        category="JavaScript Data Exchange"
        title="JSON.stringify()"
        description="Convert JavaScript object to JSON string"
        colorTheme="green"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-xl">
              <ArrowLeft className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Object → String
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Converts a JavaScript object into a JSON string. Use it to send data to servers, save to local storage, or prepare data for transmission.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Usage"
        description="Convert objects and arrays to JSON strings"
        language="javascript"
        colorTheme="green"
        code={`// Simple object
const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Alice","age":25}'

// Array
const colors = ["red", "green", "blue"];
console.log(JSON.stringify(colors));
// '["red","green","blue"]'

// Nested object
const data = {
  user: { name: "Bob", age: 30 },
  items: ["item1", "item2"],
  active: true
};
console.log(JSON.stringify(data));
// '{"user":{"name":"Bob","age":30},"items":["item1","item2"],"active":true}'`}
      />

      <CodeSnippet
        title="Pretty Printing"
        description="Format JSON with indentation"
        language="javascript"
        colorTheme="emerald"
        code={`const user = {
  name: "Alice",
  age: 25,
  skills: ["JavaScript", "React"]
};

// No formatting (compact)
console.log(JSON.stringify(user));
// '{"name":"Alice","age":25,"skills":["JavaScript","React"]}'

// With 2-space indentation
console.log(JSON.stringify(user, null, 2));
// {
//   "name": "Alice",
//   "age": 25,
//   "skills": [
//     "JavaScript",
//     "React"
//   ]
// }

// With tab indentation
console.log(JSON.stringify(user, null, '\t'));

// Custom indentation (4 spaces)
console.log(JSON.stringify(user, null, 4));`}
      />

      <CodeSnippet
        title="Send to Server"
        description="Common use with fetch API"
        language="javascript"
        colorTheme="teal"
        code={`// POST request with JSON body
const userData = {
  username: "john_doe",
  email: "john@example.com",
  age: 28
};

fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)  // Convert to JSON string
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));

// With async/await
async function createUser(user) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return response.json();
}`}
      />

      <CodeSnippet
        title="Save to LocalStorage"
        description="Store complex data in localStorage"
        language="javascript"
        colorTheme="cyan"
        code={`// Save object (must convert to string)
const settings = {
  theme: 'dark',
  fontSize: 16,
  notifications: true,
  preferences: {
    language: 'en',
    timezone: 'UTC'
  }
};

// Store
localStorage.setItem('settings', JSON.stringify(settings));

// Retrieve and parse
const saved = localStorage.getItem('settings');
const parsedSettings = JSON.parse(saved);
console.log(parsedSettings.theme);  // "dark"

// Helper functions
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key, defaultValue = null) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
}

saveToStorage('user', { name: 'Alice', id: 123 });
const user = loadFromStorage('user');`}
      />

      <CodeSnippet
        title="What Gets Excluded"
        description="Values that won't be stringified"
        language="javascript"
        colorTheme="orange"
        code={`const obj = {
  name: "Alice",
  greet: function() { return "Hi"; },  // ❌ Functions excluded
  age: undefined,                       // ❌ undefined excluded
  date: new Date(),                     // ✅ Converted to ISO string
  symbol: Symbol('test'),               // ❌ Symbols excluded
  nullValue: null,                      // ✅ Kept as null
  nested: {
    foo: "bar",
    func: () => {}                      // ❌ Functions excluded
  }
};

console.log(JSON.stringify(obj));
// {
//   "name": "Alice",
//   "date": "2024-12-14T...",
//   "nullValue": null,
//   "nested": {
//     "foo": "bar"
//   }
// }

// Arrays: undefined and functions become null
const arr = [1, undefined, function() {}, null, "text"];
console.log(JSON.stringify(arr));
// '[1,null,null,null,"text"]'`}
      />

      <CodeSnippet
        title="Handling Dates"
        description="Date objects convert to ISO strings"
        language="javascript"
        colorTheme="blue"
        code={`const event = {
  title: "Meeting",
  date: new Date('2024-12-14T10:00:00')
};

// Date becomes ISO string automatically
const jsonString = JSON.stringify(event);
console.log(jsonString);
// '{"title":"Meeting","date":"2024-12-14T10:00:00.000Z"}'

// Parse back (date is still a string!)
const parsed = JSON.parse(jsonString);
console.log(typeof parsed.date);  // "string"

// Convert back to Date
parsed.date = new Date(parsed.date);
console.log(parsed.date instanceof Date);  // true

// Or use reviver in JSON.parse
const obj = JSON.parse(jsonString, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});
console.log(obj.date instanceof Date);  // true`}
      />

      <CodeSnippet
        title="Circular References Error"
        description="Objects that reference themselves will throw errors"
        language="javascript"
        colorTheme="red"
        code={`// Circular reference
const obj = { name: "Alice" };
obj.self = obj;  // Points to itself

try {
  JSON.stringify(obj);
} catch (error) {
  console.error(error.message);
  // TypeError: Converting circular structure to JSON
}

// Solution: Use replacer function
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === 'self') return undefined;  // Exclude circular ref
  return value;
});
console.log(jsonString);  // '{"name":"Alice"}'

// Or use a Set to track seen objects
function stringifyWithCircular(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return undefined;
      seen.add(value);
    }
    return value;
  });
}`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <code className="font-bold">JSON.stringify(value, replacer?, space?)</code>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <strong>value:</strong> Object or value to convert
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <strong>replacer:</strong> Function or array to filter/transform properties
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <strong>space:</strong> Number (0-10) or string for indentation
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <ArrowLeft className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">JSON.stringify(value, replacer?, space?)</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📤</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Returns String</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Converts object/array to JSON string
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Excludes Values</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Functions, undefined, symbols are excluded
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Pretty Print</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use 3rd parameter for formatted output
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
