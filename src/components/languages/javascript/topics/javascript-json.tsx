'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { FileJson, ArrowRightLeft, Lightbulb, Sparkles } from 'lucide-react';

export default function JavaScriptJSON() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={FileJson}
        category="JavaScript Data Exchange"
        title="JSON"
        description="JavaScript Object Notation - Data interchange format"
        colorTheme="cyan"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50/80 via-blue-50/50 to-sky-50/30 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-sky-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500 text-white shadow-xl">
              <FileJson className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-700 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                What is JSON?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JSON (JavaScript Object Notation) is a <strong className="text-cyan-700 dark:text-cyan-400">text format</strong> for storing and exchanging data. 
                It's lightweight, easy to read, and works everywhere - APIs, config files, databases, and more!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Language Independent</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Despite the name, JSON works with <strong>all programming languages</strong> - JavaScript, Python, Java, PHP, Ruby, etc.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Understanding JSON
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📝</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">Just Text</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                JSON is a text format that looks like JavaScript objects but is actually a string!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Universal</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Works with all languages - Python, Java, PHP, Ruby, etc. Not just JavaScript!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/10 border-2 border-sky-200 dark:border-sky-800">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-2">Data Transfer</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Perfect for APIs, config files, saving data, and exchanging info!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Two Main Operations</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📥</span>
                  <h5 className="font-bold text-purple-900 dark:text-purple-100">JSON.parse()</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Convert JSON string → JavaScript object
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-xs">
                  <code className="text-slate-800 dark:text-emerald-400">{`JSON.parse('{"name":"Ali"}')`}</code>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-pink-200 dark:border-pink-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📤</span>
                  <h5 className="font-bold text-pink-900 dark:text-pink-100">JSON.stringify()</h5>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Convert JavaScript object → JSON string
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-xs">
                  <code className="text-slate-800 dark:text-emerald-400">{`JSON.stringify({name:"Ali"})`}</code>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">JSON Rules (Strict!)</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Must Use:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• Double quotes for strings</div>
                  <div>• Keys must be strings</div>
                  <div>• No trailing commas</div>
                  <div>• No comments allowed</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Cannot Use:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <div>• Single quotes (JSON.parse fails)</div>
                  <div>• Functions or undefined</div>
                  <div>• Date objects directly</div>
                  <div>• Comments or extra commas</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Valid JSON Data Types</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">string</code></div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">number</code></div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">boolean</code></div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">null</code></div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">object</code></div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">array</code></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="JSON Syntax"
        description="Valid JSON format"
        language="javascript"
        colorTheme="cyan"
        code={`// Valid JSON (as a string)
const jsonString = '{
  "name": "John Doe",
  "age": 30,
  "isActive": true,
  "hobbies": ["reading", "coding", "gaming"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}';

// Key rules:
// ✅ Double quotes for strings (not single)
// ✅ Keys must be strings
// ✅ No trailing commas
// ✅ No comments allowed
// ✅ Values: string, number, boolean, null, object, array`}
      />

      <CodeSnippet
        title="JSON.parse() - String to Object"
        description="Convert JSON string to JavaScript object"
        language="javascript"
        colorTheme="blue"
        code={`const jsonString = '{"name":"Alice","age":25}';

// Parse JSON string
const obj = JSON.parse(jsonString);

console.log(obj.name);  // "Alice"
console.log(obj.age);   // 25
console.log(typeof obj); // "object"

// Parse array
const jsonArray = '["apple","banana","orange"]';
const arr = JSON.parse(jsonArray);
console.log(arr[0]);  // "apple"`}
      />

      <CodeSnippet
        title="JSON.stringify() - Object to String"
        description="Convert JavaScript object to JSON string"
        language="javascript"
        colorTheme="sky"
        code={`const user = {
  name: "Bob",
  age: 28,
  skills: ["JavaScript", "React", "Node.js"]
};

// Convert to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Bob","age":28,"skills":["JavaScript","React","Node.js"]}'

console.log(typeof jsonString);  // "string"

// Pretty print (with indentation)
const prettyJson = JSON.stringify(user, null, 2);
console.log(prettyJson);
// {
//   "name": "Bob",
//   "age": 28,
//   "skills": [
//     "JavaScript",
//     "React",
//     "Node.js"
//   ]
// }`}
      />

      <CodeSnippet
        title="Common Use Cases"
        description="Where JSON is used"
        language="javascript"
        colorTheme="indigo"
        code={`// 1. API Communication
fetch('https://api.example.com/users')
  .then(response => response.json())  // Parse JSON response
  .then(data => console.log(data));

// 2. Local Storage
const settings = { theme: 'dark', fontSize: 16 };
localStorage.setItem('settings', JSON.stringify(settings));

const saved = JSON.parse(localStorage.getItem('settings'));
console.log(saved.theme);  // "dark"

// 3. Sending Data to Server
const userData = { username: 'john', email: 'john@example.com' };
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userData)
});

// 4. Configuration Files (package.json, tsconfig.json, etc.)
// 5. Data Exchange between systems`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Valid JSON Data Types</CardTitle>
          <CardDescription>What can be stored in JSON</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Allowed</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• String: <code>"hello"</code></li>
                <li>• Number: <code>42</code>, <code>3.14</code></li>
                <li>• Boolean: <code>true</code>, <code>false</code></li>
                <li>• Null: <code>null</code></li>
                <li>• Object: <code>{`{"key": "value"}`}</code></li>
                <li>• Array: <code>["a", "b", "c"]</code></li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Not Allowed</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Functions</li>
                <li>• undefined</li>
                <li>• Date objects (convert to string)</li>
                <li>• Symbol</li>
                <li>• Regular expressions</li>
                <li>• Comments</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Error Handling"
        description="Handle invalid JSON gracefully"
        language="javascript"
        colorTheme="orange"
        code={`// Invalid JSON will throw an error
const invalidJSON = '{"name": "Alice",}';  // Trailing comma

try {
  const obj = JSON.parse(invalidJSON);
} catch (error) {
  console.error('Invalid JSON:', error.message);
  // Invalid JSON: Unexpected token } in JSON at position 18
}

// Safe JSON parsing
function safeJSONParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.warn('Failed to parse JSON:', error);
    return fallback;
  }
}

const result = safeJSONParse(invalidJSON, { name: 'Default' });
console.log(result.name);  // "Default"`}
      />

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <FileJson className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Text Format</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JSON is a string - not a JavaScript object
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <ArrowRightLeft className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">parse()</code> → object, <code className="text-xs">stringify()</code> → string
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Universal</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works with all programming languages
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">APIs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Standard format for web APIs and data exchange
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
