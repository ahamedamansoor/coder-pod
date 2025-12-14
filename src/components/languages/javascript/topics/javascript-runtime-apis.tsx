'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Globe,
  CheckCircle,
  Server,
  Layers,
  Lightbulb,
  Package,
} from 'lucide-react';

export default function JavaScriptRuntimeAPIs() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Layers}
        category="JavaScript Fundamentals"
        title="Runtime APIs"
        description="Extra powers provided by the environment"
        colorTheme="cyan"
      />

      {/* What are Runtime APIs */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Runtime APIs?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Runtime APIs are <strong className="text-cyan-700 dark:text-cyan-400">extra features</strong> provided by the environment (browser or Node.js) where your JavaScript runs. They're <strong className="text-blue-700 dark:text-blue-400">not part of JavaScript itself</strong> - they're bonus tools!
              </p>
            </div>
          </div>

          <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Think of it like this:</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>JavaScript Language</strong> = The core (variables, functions, objects)<br/>
              <strong>Runtime APIs</strong> = Extra tools the environment gives you (like fetch, setTimeout, DOM)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Core JavaScript vs Runtime APIs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>JavaScript Core vs Runtime APIs</CardTitle>
              <CardDescription>Understanding the difference</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">📚 Core JavaScript (ECMAScript)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Works everywhere - part of the language itself
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Variables (let, const, var)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Functions & arrow functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Objects, arrays, maps, sets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Classes & prototypes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Promises & async/await</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Array methods (map, filter, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>String & Math operations</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">🎁 Runtime APIs</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Provided by browser or Node.js - environment-specific
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>DOM manipulation (document)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Network requests (fetch)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Timers (setTimeout, setInterval)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Console (console.log)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Storage (localStorage, sessionStorage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>File system (Node.js fs module)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>HTTP server (Node.js http module)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Runtime APIs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Browser Runtime APIs</CardTitle>
              <CardDescription>Web APIs provided by browsers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">DOM API</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Manipulate HTML elements on the page
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                document.getElementById('title')<br/>
                document.querySelector('.button')
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Fetch API</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Make HTTP requests to servers
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                fetch('https://api.example.com/data')
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Web Storage API</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Store data in the browser
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                localStorage.setItem('key', 'value')<br/>
                sessionStorage.getItem('key')
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Geolocation API</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Get user's location
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                navigator.geolocation.getCurrentPosition()
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Canvas API</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Draw graphics and animations
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                canvas.getContext('2d')
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Web Audio API</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Process and play audio
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                new AudioContext()
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Node.js Runtime APIs */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Server className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Node.js Runtime APIs</CardTitle>
              <CardDescription>Built-in modules provided by Node.js</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">fs (File System)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Read and write files on the computer
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                const fs = require('fs');<br/>
                fs.readFileSync('file.txt', 'utf8');
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">http / https</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Create web servers and make requests
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                const http = require('http');<br/>
                http.createServer((req, res) =&gt; {'{}'});
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">path</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Work with file and directory paths
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                const path = require('path');<br/>
                path.join(__dirname, 'file.txt');
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">os</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Get system information
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                const os = require('os');<br/>
                os.platform(); // 'darwin', 'win32', etc.
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">process</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Current Node.js process info
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                process.env.NODE_ENV<br/>
                process.exit(0)
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">crypto</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Cryptographic operations
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs overflow-x-auto">
                const crypto = require('crypto');<br/>
                crypto.randomBytes(16)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Universal APIs */}
      <Card>
        <CardHeader>
          <CardTitle>Example: APIs Available in Both Environments</CardTitle>
          <CardDescription>These work in browser AND Node.js</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ✅ These Runtime APIs work EVERYWHERE

// 1. console - debugging output
console.log('Hello');
console.error('Error occurred');
console.table([{name: 'Alice', age: 25}]);

// 2. setTimeout & setInterval - timers
setTimeout(() => {
  console.log('After 1 second');
}, 1000);

const interval = setInterval(() => {
  console.log('Every 2 seconds');
}, 2000);
clearInterval(interval);

// 3. fetch - HTTP requests (modern Node has it!)
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// 4. URL - parse URLs
const url = new URL('https://example.com/path?query=value');
console.log(url.hostname); // 'example.com'

// 5. Crypto (Web Crypto API in browser, crypto in Node)
// Available with slight differences

// 6. TextEncoder / TextDecoder
const encoder = new TextEncoder();
const encoded = encoder.encode('Hello');`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Example: Same Task, Different APIs</CardTitle>
          <CardDescription>Reading JSON data in different environments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">🌐 Browser</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Use fetch API
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

// Or from a server
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(users => {
    // Display in DOM
    document.getElementById('users')
      .innerHTML = users.map(u => 
        \`<li>\${u.name}</li>\`
      ).join('');
  });`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">🖥️ Node.js</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Use fs module
const fs = require('fs');

const data = fs.readFileSync(
  'data.json', 
  'utf8'
);
const parsed = JSON.parse(data);
console.log(parsed);

// Or from a server
const https = require('https');

https.get('https://api.example.com/users',
  (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      const users = JSON.parse(body);
      console.log(users);
    });
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎁</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Extra Features</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    APIs not in JS core<br/>
                    Provided by environment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Browser APIs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    DOM, fetch, localStorage<br/>
                    Web-specific features
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🖥️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Node.js APIs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    fs, http, path, os<br/>
                    Server & system features
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Universal APIs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    console, fetch, setTimeout<br/>
                    Work in both environments
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-300 dark:border-cyan-700">
            <Layers className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Environment Matters</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Runtime APIs are <strong>environment-specific</strong>. Always check where your code will run - browser APIs won't work in Node.js, and Node.js modules won't work in browsers!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
