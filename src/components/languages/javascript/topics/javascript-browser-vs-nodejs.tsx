'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Globe,
  CheckCircle,
  XCircle,
  Server,
  Lightbulb,
  ArrowLeftRight,
} from 'lucide-react';

export default function JavaScriptBrowserVsNodeJS() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowLeftRight}
        category="JavaScript Fundamentals"
        title="Browser vs Node.js"
        description="Where JavaScript runs - understanding the two environments"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-indigo-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <ArrowLeftRight className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Two Homes for JavaScript
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript can run in <strong className="text-blue-700 dark:text-blue-400">two main environments</strong>: the <strong className="text-cyan-700 dark:text-cyan-400">browser</strong> (like Chrome, Firefox) and <strong className="text-indigo-700 dark:text-indigo-400">Node.js</strong> (on your computer/server). Same language, different capabilities!
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Think of it like this:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Browser</strong> = JavaScript in web pages (frontend)<br/>
              <strong>Node.js</strong> = JavaScript on your computer (backend, scripts, tools)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Side by Side Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ArrowLeftRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Browser vs Node.js - Side by Side</CardTitle>
              <CardDescription>Key differences at a glance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Browser Column */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-4 border-b-2 border-blue-600">
                <div className="flex items-center gap-3 text-white">
                  <Globe className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Browser JavaScript</h3>
                </div>
                <p className="text-blue-100 text-sm mt-1">Frontend / Client-side</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📍 Where it runs</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Inside web browsers (Chrome, Firefox, Safari, Edge)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎯 Main purpose</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Make websites interactive - handle clicks, forms, animations
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ What you CAN do</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Access DOM (HTML elements)</li>
                    <li>• Handle user events (clicks, typing)</li>
                    <li>• Make HTTP requests (fetch data)</li>
                    <li>• Use Web APIs (localStorage, geolocation)</li>
                    <li>• Manipulate CSS styles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">❌ What you CANNOT do</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Access file system directly</li>
                    <li>• Create HTTP servers</li>
                    <li>• Access databases directly</li>
                    <li>• Run system commands</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🔧 Common tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs text-blue-800 dark:text-blue-200">React</span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs text-blue-800 dark:text-blue-200">Vue</span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs text-blue-800 dark:text-blue-200">Angular</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Node.js Column */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 border-b-2 border-green-600">
                <div className="flex items-center gap-3 text-white">
                  <Server className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Node.js JavaScript</h3>
                </div>
                <p className="text-green-100 text-sm mt-1">Backend / Server-side</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📍 Where it runs</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    On servers, your computer, IoT devices (outside browser)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 Main purpose</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Build servers, APIs, tools, scripts - backend applications
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ What you CAN do</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Read/write files on computer</li>
                    <li>• Create HTTP servers</li>
                    <li>• Connect to databases</li>
                    <li>• Run system commands</li>
                    <li>• Process large data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">❌ What you CANNOT do</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Access DOM (no HTML elements)</li>
                    <li>• Handle browser events</li>
                    <li>• Access browser APIs</li>
                    <li>• Manipulate CSS directly</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🔧 Common tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs text-green-800 dark:text-green-200">Express</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs text-green-800 dark:text-green-200">MongoDB</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-xs text-green-800 dark:text-green-200">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Browser-Only Code</CardTitle>
          <CardDescription>Code that only works in browsers</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Works in BROWSER only

// Access HTML elements
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});

// Change page styles
document.body.style.backgroundColor = 'lightblue';

// Get user location
navigator.geolocation.getCurrentPosition((position) => {
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);
});

// Store data in browser
localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');

// Make HTTP request to API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// ❌ This will ERROR in Node.js
// ReferenceError: document is not defined`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Node.js-Only Code</CardTitle>
          <CardDescription>Code that only works in Node.js</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Works in NODE.JS only

// Read a file from computer
const fs = require('fs');
const fileContent = fs.readFileSync('data.txt', 'utf8');
console.log(fileContent);

// Write to a file
fs.writeFileSync('output.txt', 'Hello from Node.js!');

// Create a simple HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from Node.js server!');
});
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Access system information
const os = require('os');
console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);

// Run in terminal (not browser!)
// $ node server.js

// ❌ This will ERROR in Browser
// ReferenceError: require is not defined`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: Code That Works in BOTH</CardTitle>
          <CardDescription>Universal JavaScript - runs everywhere</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ Works in BOTH Browser and Node.js

// Variables and data structures
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Functions
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Objects and classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}

// Promises and async/await
async function fetchData() {
  // Works with different fetch implementations
  const response = await fetch('https://api.example.com/data');
  return response.json();
}

// Array methods, string operations, math
const text = 'hello world';
const uppercase = text.toUpperCase();
const randomNum = Math.random();

// JSON operations
const user = { name: 'Alice', age: 25 };
const json = JSON.stringify(user);
const parsed = JSON.parse(json);`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* What to Use When */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>When to Use Each</CardTitle>
              <CardDescription>Choosing the right environment</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Use Browser JavaScript When:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Building user interfaces for websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Making pages interactive (clicks, forms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Creating animations and visual effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Validating forms before submission</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Fetching data from APIs to display</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Use Node.js When:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Building REST APIs and backend servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Working with databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Processing files and data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Creating command-line tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Real-time apps (chat, notifications)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Globals */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Global Objects Available</CardTitle>
              <CardDescription>What's available in each environment</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Available in BOTH</h4>
              <div className="flex flex-wrap gap-2">
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">console</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">setTimeout</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">setInterval</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">Promise</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">JSON</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">Math</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">Date</code>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🌐 Browser Only</h4>
              <div className="flex flex-wrap gap-2">
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">window</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">document</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">navigator</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">localStorage</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">alert</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">location</code>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🖥️ Node.js Only</h4>
              <div className="flex flex-wrap gap-2">
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">global</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">process</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">__dirname</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">__filename</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">require</code>
                <code className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs">module</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Browser = Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Runs in web browsers<br/>
                    Makes websites interactive
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🖥️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Node.js = Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Runs on servers/computers<br/>
                    Builds APIs and tools
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Different APIs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Browser has DOM, window<br/>
                    Node has fs, http modules
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Same Core Language</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Variables, functions, classes<br/>
                    Work the same everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <ArrowLeftRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Full-Stack JavaScript</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              With JavaScript, you can build <strong>both frontend and backend</strong> using the same language! That's why it's so popular for full-stack development.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
