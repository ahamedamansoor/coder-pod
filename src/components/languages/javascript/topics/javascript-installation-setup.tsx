'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Terminal,
  Download,
  Rocket,
  Globe,
  Code2,
  CheckCircle2,
  Lightbulb,
  Zap,
  MonitorSmartphone,
  Settings,
} from 'lucide-react';

interface JavaScriptInstallationSetupProps {
  onOpenWebPlayground?: (html: string, css: string, js: string, focusedPanel?: string, config?: any) => void;
}

export default function JavaScriptInstallationSetup({ onOpenWebPlayground }: JavaScriptInstallationSetupProps) {
  return (
    <div className="w-full space-y-8 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Download}
        category="JavaScript Fundamentals"
        title="Installation & Setup"
        description="Get started with JavaScript - no installation needed!"
        colorTheme="amber"
      />

      {/* Section 1: No Installation Needed */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            Good News - Nothing to Install!
          </CardTitle>
          <CardDescription>
            JavaScript runs in your browser - it's already installed!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Key Point */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">JavaScript is Already Ready!</h3>
                <p className="text-base leading-relaxed">
                  Every modern web browser (Chrome, Firefox, Safari, Edge) has JavaScript built-in. 
                  You don't need to download or install anything to start coding!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Start Options */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border bg-white dark:bg-slate-900/50 space-y-3">
              <div className="text-3xl">⚡</div>
              <h4 className="font-semibold">Browser Console</h4>
              <p className="text-sm text-muted-foreground">Start coding in 5 seconds</p>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                Easiest Way
              </Badge>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-slate-900/50 space-y-3">
              <div className="text-3xl">📄</div>
              <h4 className="font-semibold">HTML File</h4>
              <p className="text-sm text-muted-foreground">Create files and open in browser</p>
              <Badge variant="outline">Simple</Badge>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-slate-900/50 space-y-3">
              <div className="text-3xl">🚀</div>
              <h4 className="font-semibold">Node.js</h4>
              <p className="text-sm text-muted-foreground">Run JavaScript outside browser</p>
              <Badge variant="outline">Advanced</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Method 1 - Browser Console */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Terminal className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            Method 1: Browser Console (Recommended for Beginners)
          </CardTitle>
          <CardDescription>
            Start coding JavaScript in 3 simple steps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step-by-step Guide */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-slate-50/50 dark:bg-slate-900/30">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Open Your Browser</h4>
                <p className="text-sm text-muted-foreground">
                  Open any web browser (Chrome, Firefox, Safari, or Edge)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-slate-50/50 dark:bg-slate-900/30">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Open Developer Tools</h4>
                <p className="text-sm text-muted-foreground mb-2">Press one of these keyboard shortcuts:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-mono">F12</Badge>
                  <Badge variant="secondary" className="font-mono">Ctrl + Shift + J</Badge>
                  <Badge variant="secondary" className="font-mono">Cmd + Option + J (Mac)</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Start Typing Code!</h4>
                <p className="text-sm text-muted-foreground">
                  Go to the "Console" tab and start writing JavaScript
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Section 3: Method 2 - HTML File */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            Method 2: HTML File with Script Tag
          </CardTitle>
          <CardDescription>
            Create files and run JavaScript in the browser
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Create an HTML File</h4>
                <p className="text-sm text-muted-foreground">
                  Create a file named <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">index.html</code>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Add JavaScript Code</h4>
                <p className="text-sm text-muted-foreground">
                  Use the <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">&lt;script&gt;</code> tag to add JavaScript
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Open in Browser</h4>
                <p className="text-sm text-muted-foreground">
                  Double-click the file or right-click → Open with → Browser
                </p>
              </div>
            </div>
          </div>

          {/* HTML File Example */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              Complete Example
            </h4>
            
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-slate-700 dark:bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/80"></div>
                  <div className="w-3 h-3 rounded-full bg-white/60"></div>
                  <div className="w-3 h-3 rounded-full bg-white/40"></div>
                </div>
                <span className="text-xs font-semibold text-white ml-2">index.html</span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-800 dark:text-slate-100 leading-loose overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>My First JavaScript</title>
</head>
<body>
  <h1>Hello from HTML!</h1>
  
  <button id="myButton">Click Me</button>
  
  <script>
    // JavaScript code here
    console.log("Page loaded!");
    
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', () => {
      alert('Hello, JavaScript!');
    });
  </script>
</body>
</html>`}</pre>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">Tip</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300">Save this as index.html and open it in your browser. Click the button to see JavaScript in action!</p>
                </div>
              </div>
            </div>
          </div>

          {/* External JavaScript File */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              Pro Tip: External JavaScript Files
            </h4>
            <p className="text-sm mb-3">For larger projects, put JavaScript in a separate file:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-slate-600 dark:text-slate-400">1.</span>
                <span>Create <code className="px-1 bg-white dark:bg-slate-800 rounded text-xs">script.js</code></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-slate-600 dark:text-slate-400">2.</span>
                <span>Link it: <code className="px-1 bg-white dark:bg-slate-800 rounded text-xs">&lt;script src="script.js"&gt;&lt;/script&gt;</code></span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Method 3 - Node.js */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Rocket className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            Method 3: Node.js (Optional - For Advanced Users)
          </CardTitle>
          <CardDescription>
            Run JavaScript outside the browser
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* What is Node.js */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h4 className="font-bold text-lg mb-2">What is Node.js?</h4>
            <p className="text-sm leading-relaxed">
              Node.js lets you run JavaScript on your computer (not just in browsers). 
              It's used for building servers, tools, and applications. <strong>You don't need this for learning JavaScript basics!</strong>
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-4">
            <h4 className="font-semibold">Installation Steps:</h4>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h5 className="font-semibold mb-1">Download Node.js</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Visit <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    nodejs.org
                  </a> and download the LTS version
                </p>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                  Recommended: LTS Version
                </Badge>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h5 className="font-semibold mb-1">Run the Installer</h5>
                <p className="text-sm text-muted-foreground">
                  Double-click the downloaded file and follow installation steps
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-600 dark:bg-slate-700 text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h5 className="font-semibold mb-1">Verify Installation</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Open terminal/command prompt and check version
                </p>
              </div>
            </div>
          </div>

          {/* Verify Node.js Installation - Terminal Command Display */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h4 className="font-semibold">Verify Node.js Installation</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Run these commands in terminal/command prompt to verify installation
            </p>

            {/* Terminal-style Command Cards */}
            <div className="space-y-3">
              {/* Command 1 */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-indigo-600/90 dark:bg-indigo-700/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    <div className="w-3 h-3 rounded-full bg-white/60"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-xs font-semibold text-white ml-2">Check Node.js Version</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-950 p-5">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-green-600 dark:text-green-400 font-mono text-sm mt-0.5">$</span>
                    <code className="text-slate-800 dark:text-slate-100 font-mono text-sm">node --version</code>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono text-sm pl-4">
                    v20.11.0
                  </div>
                </div>
              </div>

              {/* Command 2 */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-teal-600/90 dark:bg-teal-700/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    <div className="w-3 h-3 rounded-full bg-white/60"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-xs font-semibold text-white ml-2">Check npm Version</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-950 p-5">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-green-600 dark:text-green-400 font-mono text-sm mt-0.5">$</span>
                    <code className="text-slate-800 dark:text-slate-100 font-mono text-sm">npm --version</code>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono text-sm pl-4">
                    10.2.4
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">Success!</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">If you see version numbers, installation is complete</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">Tip</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">npm comes bundled with Node.js automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Running Node.js */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <h4 className="font-semibold">Running JavaScript with Node.js</h4>
            </div>

            {/* Step 1: JavaScript Code */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Step 1:</strong> Create a file named <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">app.js</code> with this content:
              </p>
              
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-amber-600/90 dark:bg-amber-700/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    <div className="w-3 h-3 rounded-full bg-white/60"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-xs font-semibold text-white ml-2">app.js</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-950 p-5">
                  <pre className="font-mono text-sm text-slate-800 dark:text-slate-100 leading-loose overflow-x-auto">
{`console.log("Hello from Node.js!");

console.log("2 + 2 =", 2 + 2);

const name = "Developer";

console.log(\`Welcome, \${name}!\`);`}</pre>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">Tip</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">Save this file with .js extension in any folder. No HTML or browser needed!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Run Command */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Step 2:</strong> Open terminal in the same folder and run:
              </p>
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-emerald-600/90 dark:bg-emerald-700/80 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    <div className="w-3 h-3 rounded-full bg-white/60"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-xs font-semibold text-white ml-2">Run Your Program</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-950 p-5">
                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-green-600 dark:text-green-400 font-mono text-sm mt-0.5">$</span>
                    <code className="text-slate-800 dark:text-slate-100 font-mono text-sm">node app.js</code>
                  </div>
                  <div className="space-y-2 pl-4 text-slate-700 dark:text-slate-300 font-mono text-sm leading-relaxed">
                    <div>Hello from Node.js!</div>
                    <div>2 + 2 = 4</div>
                    <div>Welcome, Developer!</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">Success!</p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">You've just run JavaScript outside the browser! Press Ctrl+C to stop any running program.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Code Editors (Optional) */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            Recommended Code Editors (Optional)
          </CardTitle>
          <CardDescription>
            Better tools for writing code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Editor Options */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border bg-white dark:bg-slate-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">VS Code</h4>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  Most Popular
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Free, powerful, and beginner-friendly. Highly recommended!
              </p>
              <a 
                href="https://code.visualstudio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Download VS Code →
              </a>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-slate-900/50 space-y-3">
              <h4 className="font-semibold">Sublime Text</h4>
              <p className="text-sm text-muted-foreground">
                Fast and lightweight. Great for simple projects.
              </p>
              <a 
                href="https://www.sublimetext.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Download Sublime →
              </a>
            </div>

            <div className="p-5 rounded-xl border bg-white dark:bg-slate-900/50 space-y-3">
              <h4 className="font-semibold">Notepad++</h4>
              <p className="text-sm text-muted-foreground">
                Simple and fast. Good for Windows users.
              </p>
              <a 
                href="https://notepad-plus-plus.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Download Notepad++ →
              </a>
            </div>
          </div>

          {/* Why Use an Editor */}
          <div className="p-5 rounded-xl border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10">
            <h4 className="font-bold mb-3">Why Use a Code Editor?</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Syntax highlighting (colors make code easier to read)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Auto-completion (suggests code as you type)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Error detection (spots mistakes early)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>File management (organize your projects)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference Card */}
      <Card className="overflow-hidden border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/10 dark:to-yellow-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <Settings className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            Quick Setup Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">For Complete Beginners</h5>
                <p className="text-sm text-muted-foreground">
                  Start with <strong>Browser Console</strong> (F12 → Console). No setup needed!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">For Building Websites</h5>
                <p className="text-sm text-muted-foreground">
                  Use <strong>HTML files with &lt;script&gt; tags</strong>. Save and open in browser.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">For Advanced Development</h5>
                <p className="text-sm text-muted-foreground">
                  Install <strong>Node.js</strong> and use a code editor like <strong>VS Code</strong>.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
