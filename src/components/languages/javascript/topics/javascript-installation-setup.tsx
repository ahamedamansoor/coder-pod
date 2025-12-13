'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Terminal,
  Rocket,
  Globe,
  Code2,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Monitor,
} from 'lucide-react';

interface JavaScriptInstallationSetupProps {
  onOpenWebPlayground?: (html: string, css: string, js: string, focusedPanel?: string, config?: any) => void;
}

export default function JavaScriptInstallationSetup({ onOpenWebPlayground }: JavaScriptInstallationSetupProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Rocket}
        category="JavaScript Fundamentals"
        title="Installation & Setup"
        description="The easiest programming language to get started with - literally zero installation!"
        colorTheme="yellow"
      />

      {/* Amazing News */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Amazing News: Nothing to Install!
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Unlike most programming languages, <strong className="text-green-700 dark:text-green-400">JavaScript is already installed</strong> on your computer! Every web browser (Chrome, Firefox, Safari, Edge) comes with JavaScript built right in. You can start coding in the next 30 seconds.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-green-200 dark:border-green-800/30">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-lg">Why JavaScript is Perfect for Beginners</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Zero installation, zero configuration, zero waiting. Just open your browser and start coding immediately. No other language makes it this easy!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 1: Browser Console */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Terminal className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Method 1: Browser Console (Start Here!)</CardTitle>
              <CardDescription>The fastest way to start coding JavaScript</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-white dark:bg-slate-900">
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4 text-2xl font-bold text-yellow-700 dark:text-yellow-400">
                1
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Open Browser</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Any browser works - Chrome, Firefox, Safari, or Edge
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 bg-white dark:bg-slate-900">
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4 text-2xl font-bold text-yellow-700 dark:text-yellow-400">
                2
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Press F12</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Or Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac)
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Start Coding!</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Go to Console tab and type your first code
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Try in Console */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Terminal className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Try This in Browser Console</CardTitle>
              <CardDescription>Type these commands one by one and press Enter after each</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border-2 border-yellow-200 dark:border-yellow-800/30 overflow-hidden">
            <div className="bg-yellow-600 dark:bg-yellow-700 px-4 py-2.5 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Browser Console (Press F12)</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 p-5">
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto">
{`// Type these one by one and press Enter after each
console.log('Hello, JavaScript!');

2 + 2

let name = 'Your Name';
console.log('Welcome, ' + name + '!');

Math.random()`}</pre>
            </div>
          </div>

          <Alert className="mt-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200 dark:border-yellow-800/30">
            <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle>Tip</AlertTitle>
            <AlertDescription className="text-base">
              The console shows results instantly. Try changing the code - it's a great way to experiment and learn!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Method 2: HTML File */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Globe className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Method 2: Create HTML File</CardTitle>
              <CardDescription>For building actual web pages with JavaScript</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base text-gray-700 dark:text-gray-300">
            When you want to build a real website, you'll create HTML files and add JavaScript to them. Here's how:
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-white dark:bg-slate-900">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-semibold mb-2">Step 1</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create a file called <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">index.html</code>
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-white dark:bg-slate-900">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Step 2</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Add your JavaScript code inside <code className="text-xs">&lt;script&gt;</code> tags
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold mb-2">Step 3</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Double-click the file to open it in your browser
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Simple HTML + JavaScript Example"
        description="Copy this entire code, save it as index.html, then open it in your browser"
        code={`<!DOCTYPE html>
<html>
<head>
  <title>My First JavaScript Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <button id="btn">Click Me!</button>
  <p id="message"></p>
  
  <script>
    // Your JavaScript goes here
    const button = document.getElementById('btn');
    const message = document.getElementById('message');
    
    button.addEventListener('click', () => {
      message.textContent = 'You clicked the button! 🎉';
    });
  </script>
</body>
</html>`}
        language="html"
        colorTheme="yellow"
      />

      <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
        <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <AlertTitle>Pro Tip: Separate JavaScript File</AlertTitle>
        <AlertDescription className="text-base">
          For bigger projects, put JavaScript in its own file (e.g., <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">script.js</code>) and link it like this:<br/>
          <code className="mt-2 inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-sm">&lt;script src="script.js"&gt;&lt;/script&gt;</code>
        </AlertDescription>
      </Alert>

      {/* Method 3: Node.js (Optional) */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Rocket className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Method 3: Node.js (Optional - Advanced)</CardTitle>
              <CardDescription>Run JavaScript outside the browser - for backend development</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Do You Need This?</AlertTitle>
            <AlertDescription className="text-base">
              <strong>No!</strong> You don't need Node.js to learn JavaScript basics. Only install this if you want to build servers or run JavaScript programs outside the browser.
            </AlertDescription>
          </Alert>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-white dark:bg-slate-900">
              <div className="text-3xl mb-3">⬇️</div>
              <h4 className="font-semibold mb-2">Download</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Visit <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">nodejs.org</a> and download LTS version
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-white dark:bg-slate-900">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-semibold mb-2">Install</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Run the installer and follow the simple setup steps
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="font-semibold mb-2">Verify</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open terminal and check: <code className="text-xs">node --version</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Running Node.js Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Running JavaScript with Node.js</CardTitle>
              <CardDescription>Create a file and run it from terminal</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Create File */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-bold text-purple-700 dark:text-purple-400">
                1
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Create a file called <code className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 rounded text-sm">app.js</code></h4>
            </div>
            
            <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 overflow-hidden">
              <div className="bg-purple-600 dark:bg-purple-700 px-4 py-2.5 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">app.js</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto">
{`// app.js - Save this file
console.log('Hello from Node.js!');

const name = 'Developer';
console.log(\`Welcome, \${name}!\`);

// Do some math
const result = 10 + 20;
console.log('10 + 20 =', result);`}</pre>
              </div>
            </div>
          </div>

          {/* Step 2: Run Command */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-sm font-bold text-emerald-700 dark:text-emerald-400">
                2
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Open terminal in the same folder and run this command</h4>
            </div>
            
            <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 overflow-hidden">
              <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-2.5 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Terminal</span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-5">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">$</span>
                  <code className="text-slate-800 dark:text-slate-100 font-mono text-sm">node app.js</code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Output */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-bold text-blue-700 dark:text-blue-400">
                3
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">You'll see this output</h4>
            </div>
            
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-600 dark:bg-blue-700 px-4 py-2.5 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Output</span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-5">
                <div className="space-y-1 font-mono text-sm text-slate-700 dark:text-slate-300">
                  <div>Hello from Node.js!</div>
                  <div>Welcome, Developer!</div>
                  <div>10 + 20 = 30</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription className="text-base">
              You just ran JavaScript outside the browser! Node.js can do much more - build servers, read files, connect to databases, and create powerful applications.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Code Editors */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Recommended Code Editors (Optional)</CardTitle>
              <CardDescription>Better tools make coding easier and more fun</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg">VS Code</h4>
                <Badge className="bg-blue-600 text-white border-0">Most Popular</Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Free, powerful, with tons of features. Highly recommended for beginners and pros!
              </p>
              <a 
                href="https://code.visualstudio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Download VS Code →
              </a>
            </div>

            <div className="p-5 rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-white dark:bg-slate-900">
              <h4 className="font-semibold text-lg mb-3">Sublime Text</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Fast and lightweight. Great for simple projects and quick edits.
              </p>
              <a 
                href="https://www.sublimetext.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
              >
                Download Sublime →
              </a>
            </div>

            <div className="p-5 rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-white dark:bg-slate-900">
              <h4 className="font-semibold text-lg mb-3">Notepad++</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Simple and fast. Perfect for Windows users who want something basic.
              </p>
              <a 
                href="https://notepad-plus-plus.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Download Notepad++ →
              </a>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/10 dark:to-purple-950/10 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold mb-3 text-gray-900 dark:text-gray-100">Why Use a Code Editor?</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Colors make code easier to read</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Suggests code as you type</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Spots mistakes before you run code</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Organize multiple files easily</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Summary */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Setup Summary</h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Complete Beginners</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Start with <strong>Browser Console</strong> (F12). No setup needed at all!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Building Websites</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use <strong>HTML files</strong> with &lt;script&gt; tags. Save and open in browser.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Advanced Projects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Install <strong>Node.js</strong> and use <strong>VS Code</strong> editor.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
