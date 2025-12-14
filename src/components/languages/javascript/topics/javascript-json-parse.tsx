'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function JavaScriptJSONParse() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowRight}
        category="JavaScript Data Exchange"
        title="JSON.parse()"
        description="Convert JSON string to JavaScript object"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-xl">
              <ArrowRight className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                String → Object
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Converts a JSON string into a JavaScript object. Essential for working with API responses, reading config files, or retrieving data from local storage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Usage"
        description="Parse JSON strings"
        language="javascript"
        colorTheme="blue"
        code={`// Parse simple object
const jsonString = '{"name":"Alice","age":25}';
const user = JSON.parse(jsonString);

console.log(user.name);     // "Alice"
console.log(user.age);      // 25
console.log(typeof user);   // "object"

// Parse array
const jsonArray = '["apple","banana","orange"]';
const fruits = JSON.parse(jsonArray);
console.log(fruits[0]);     // "apple"
console.log(Array.isArray(fruits));  // true

// Parse nested objects
const nested = '{"user":{"name":"Bob","address":{"city":"NYC"}}}';
const data = JSON.parse(nested);
console.log(data.user.address.city);  // "NYC"`}
      />

      <CodeSnippet
        title="Parse API Response"
        description="Common use with fetch()"
        language="javascript"
        colorTheme="cyan"
        code={`// Modern way (response.json() does parsing automatically)
fetch('https://api.example.com/users')
  .then(response => response.json())  // Built-in JSON.parse()
  .then(data => {
    console.log(data);
  });

// Manual parsing
fetch('https://api.example.com/users')
  .then(response => response.text())   // Get as string
  .then(jsonString => {
    const data = JSON.parse(jsonString);  // Parse manually
    console.log(data);
  });

// With async/await
async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();  // Parse JSON
  console.log(data);
}`}
      />

      <CodeSnippet
        title="Parse LocalStorage Data"
        description="Retrieve and parse stored data"
        language="javascript"
        colorTheme="sky"
        code={`// Save data (must stringify first)
const settings = { theme: 'dark', fontSize: 16 };
localStorage.setItem('settings', JSON.stringify(settings));

// Retrieve and parse
const savedSettings = localStorage.getItem('settings');
if (savedSettings) {
  const settings = JSON.parse(savedSettings);
  console.log(settings.theme);      // "dark"
  console.log(settings.fontSize);   // 16
}

// Helper function
function getStoredData(key, defaultValue = null) {
  const stored = localStorage.getItem(key);
  if (!stored) return defaultValue;
  
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to parse stored data:', error);
    return defaultValue;
  }
}`}
      />

      <CodeSnippet
        title="Parse with Reviver Function"
        description="Transform values during parsing"
        language="javascript"
        colorTheme="indigo"
        code={`// JSON with ISO date string
const jsonString = '{"name":"Alice","birthDate":"2000-01-15T00:00:00Z"}';

// Parse and convert date string to Date object
const user = JSON.parse(jsonString, (key, value) => {
  // Check if value looks like a date
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);  // Convert to Date object
  }
  return value;  // Return other values unchanged
});

console.log(user.birthDate);           // Date object
console.log(user.birthDate.getFullYear());  // 2000

// Another example: Convert numbers
const data = JSON.parse('{"price":"99.99","quantity":"5"}', (key, value) => {
  if (key === 'price' || key === 'quantity') {
    return Number(value);  // Convert strings to numbers
  }
  return value;
});

console.log(typeof data.price);     // "number"
console.log(data.price * data.quantity);  // 499.95`}
      />

      <CodeSnippet
        title="Error Handling"
        description="Handle parsing errors safely"
        language="javascript"
        colorTheme="orange"
        code={`// Invalid JSON throws SyntaxError
const invalidJSON = '{"name": "Alice",}';  // Trailing comma

try {
  const obj = JSON.parse(invalidJSON);
} catch (error) {
  console.error('Parse error:', error.message);
  // Parse error: Unexpected token } in JSON at position 18
}

// Safe parse helper
function safeParse(jsonString, fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.warn('Invalid JSON, returning fallback:', error.message);
    return fallback;
  }
}

const result1 = safeParse('{"valid": true}');
console.log(result1);  // { valid: true }

const result2 = safeParse('invalid json', { error: true });
console.log(result2);  // { error: true }

// Validate before parsing
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('{"valid":true}'));   // true
console.log(isValidJSON('{invalid}'));        // false`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Pitfalls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Parsing non-string values</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300">JSON.parse(123)</code>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Only works on strings! Numbers, objects, etc. will throw errors.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Single quotes in JSON</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300">{'JSON.parse("{\'name\':\'Alice\'}")'}</code>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                JSON requires double quotes. Single quotes will cause errors.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Always use try-catch</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Wrap JSON.parse() in try-catch when parsing user input or external data.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">JSON.parse(string, reviver?)</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Returns Object</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Converts string to JavaScript object/array
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Error Prone</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always use try-catch with untrusted data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Reviver Function</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transform values during parsing (dates, etc.)
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
