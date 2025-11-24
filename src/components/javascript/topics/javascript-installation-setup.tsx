'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Zap,
  MonitorSmartphone,
  Cpu,
  Code2,
  Terminal,
  Globe,
  Sparkles,
  Layers,
  CheckCircle2,
  Play,
  Download,
  Settings,
  Wrench,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  FileCode,
  Package,
  Search,
  Rocket,
  Shield,
  TrendingUp,
  BookOpen,
  ExternalLink,
} from 'lucide-react';

interface JavaScriptInstallationSetupProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const browserInlineHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Setup Check</title>
    <style>
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #fef3c7, #ffedd5);
      }
      .card {
        background: white;
        padding: 2rem 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Check the Console</h1>
      <p>If you see "JavaScript is working!" in the console, your setup is correct 🎉</p>
    </div>
    <script>
      console.log('JavaScript is working!');
    </script>
  </body>
</html>`;

const browserInlineCss = '';
const browserInlineJs = '';

const domPlaygroundHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Interactive Button</title>
  </head>
  <body>
    <main style="font-family: system-ui; padding: 2rem;">
      <h1>Click the button to test JavaScript</h1>
      <button id="btn" style="padding: 0.75rem 1.5rem; font-size: 1rem;">
        Click me
      </button>
      <p id="output" style="margin-top: 1rem;"></p>
    </main>
  </body>
</html>`;

const domPlaygroundCss = '';

const domPlaygroundJs = `const button = document.getElementById('btn');
const output = document.getElementById('output');

let count = 0;

button.addEventListener('click', () => {
  count++;
  output.textContent = 'Button clicked ' + count + ' time' + (count === 1 ? '' : 's') + '.';
});`;

const nodeStyleHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Node-style Script</title>
  </head>
  <body style="font-family: system-ui; padding: 2rem;">
    <h1>Simulated Node.js Script</h1>
    <p>Open the console to see the output of a Node-style script.</p>
  </body>
</html>`;

const nodeStyleCss = '';

const nodeStyleJs = `console.log('Hello from a Node-style script!');

const args = ['--env=dev', '--verbose'];
console.log('Arguments:', args.join(' '));`;

const packageJsonExample = `{
  "name": "my-javascript-project",
  "version": "1.0.0",
  "description": "A beginner JavaScript project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "keywords": ["javascript", "learning"],
  "author": "Your Name",
  "license": "MIT"
}`;

const vscodeSetupHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>VS Code Setup Demo</title>
  </head>
  <body style="font-family: system-ui; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
    <h1>✨ Your Editor is Ready!</h1>
    <p>This page represents a fully configured JavaScript environment.</p>
    <button id="testBtn" style="padding: 0.75rem 1.5rem; font-size: 1rem; border-radius: 0.5rem; border: none; background: white; color: #667eea; cursor: pointer; font-weight: 600;">
      Test JavaScript
    </button>
    <div id="output" style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 0.5rem;"></div>
  </body>
</html>`;

const vscodeSetupCss = '';

const vscodeSetupJs = `const button = document.getElementById('testBtn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const features = [
    '✅ Syntax highlighting',
    '✅ Auto-completion',
    '✅ Error detection',
    '✅ Integrated terminal',
    '✅ Git integration'
  ];
  
  output.innerHTML = '<h3>Editor Features Active:</h3>' + 
    features.map(f => '<p>' + f + '</p>').join('');
});

console.log('Editor environment initialized! 🚀');`;

export default function JavaScriptInstallationSetup({ onOpenWebPlayground }: JavaScriptInstallationSetupProps) {
  const [selectedEnvironment, setSelectedEnvironment] = useState<'browser' | 'node' | 'both'>('browser');

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="Installation & Setup"
        description="Turn your machine into a JavaScript-ready environment—from browser console to professional tooling."
        colorTheme="yellow"
      />

      {/* Learning Path Overview */}
      <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/15 dark:to-orange-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-yellow-600" />
            Your JavaScript Setup Journey
          </CardTitle>
          <CardDescription className="text-base">
            Start with the browser, level up with Node.js, and finish with a professional editor workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <MonitorSmartphone className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold">Level 1: Browser Only</h3>
            </div>
            <p className="text-muted-foreground">
              Use the developer console and inline scripts. Perfect for your first day of JavaScript.
            </p>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
              Beginner
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold">Level 2: Node.js & Terminal</h3>
            </div>
            <p className="text-muted-foreground">
              Run JavaScript from the command line and access the npm ecosystem used by professionals.
            </p>
            <Badge variant="secondary" className="bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100">
              Intermediate
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold">Level 3: Pro Editor Workflow</h3>
            </div>
            <p className="text-muted-foreground">
              Combine Node.js with a modern editor, extensions, and integrated terminal for maximum productivity.
            </p>
            <Badge variant="secondary" className="bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100">
              Expert
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Setup Modes – Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-yellow-600" />
            Setup Modes
          </CardTitle>
          <CardDescription className="text-base">
            Switch between beginner-friendly, intermediate, and expert setup instructions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="browser">
            <TabsList className="mb-4">
              <TabsTrigger value="browser">Beginner: Browser</TabsTrigger>
              <TabsTrigger value="node">Intermediate: Node.js</TabsTrigger>
              <TabsTrigger value="editor">Expert: Editor</TabsTrigger>
            </TabsList>
            <TabsContent value="browser" className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                Use your browser&apos;s DevTools to run JavaScript instantly—no installation required. This is the
                fastest, lowest-friction way to start experimenting.
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Open DevTools (F12 or right-click → &quot;Inspect&quot;).</li>
                <li>Go to the <strong>Console</strong> tab.</li>
                <li>Type <code className="font-mono">console.log('Hello, JavaScript');</code> and press Enter.</li>
              </ul>
            </TabsContent>
            <TabsContent value="node" className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                Install Node.js to run JavaScript files from your terminal and use tools like bundlers, linters, and
                package managers.
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Download the LTS version from the official Node.js site.</li>
                <li>Run <code className="font-mono">node -v</code> and <code className="font-mono">npm -v</code> to confirm installation.</li>
                <li>Create <code className="font-mono">app.js</code> with a simple <code className="font-mono">console.log</code> and run it.</li>
              </ul>
            </TabsContent>
            <TabsContent value="editor" className="space-y-3 text-sm md:text-base">
              <p className="text-muted-foreground">
                Combine Node.js with a modern editor (like VS Code) for linting, formatting, and integrated terminals.
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Install a code editor with JavaScript and TypeScript support.</li>
                <li>Add extensions: ESLint, Prettier, Git integration, and a theme you like.</li>
                <li>Open a project folder and run your Node scripts from the built-in terminal.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Live Playground Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-yellow-600" />
            Try It in the Web Playground
          </CardTitle>
          <CardDescription className="text-base">
            Launch ready-made examples directly in the Web Playground and see JavaScript run in a realistic environment.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base">
          <Tabs defaultValue="inline">
            <TabsList className="mb-4">
              <TabsTrigger value="inline">Inline &lt;script&gt;</TabsTrigger>
              <TabsTrigger value="dom">DOM Interaction</TabsTrigger>
              <TabsTrigger value="node-style">Node-style Script</TabsTrigger>
            </TabsList>

            <TabsContent value="inline" className="space-y-3">
              <p className="text-muted-foreground">
                Classic way to include JavaScript: place a <code className="font-mono">&lt;script&gt;</code> tag in your
                HTML. The example logs a message to the console and shows a friendly card on the page.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">index.html</span>
                  <span className="text-slate-500 dark:text-slate-300">Inline script</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{browserInlineHtml}
                </pre>
              </div>
              {onOpenWebPlayground && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => onOpenWebPlayground(browserInlineHtml, browserInlineCss, browserInlineJs)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Open in Web Playground
                </Button>
              )}
            </TabsContent>

            <TabsContent value="dom" className="space-y-3">
              <p className="text-muted-foreground">
                This example uses <code className="font-mono">addEventListener</code> to respond to clicks and update
                the DOM. It demonstrates how JavaScript can manipulate the page in real time.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">dom-demo.html</span>
                  <span className="text-slate-500 dark:text-slate-300">DOM interactions</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{domPlaygroundHtml}
                </pre>
              </div>
              {onOpenWebPlayground && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => onOpenWebPlayground(domPlaygroundHtml, domPlaygroundCss, domPlaygroundJs)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Open in Web Playground
                </Button>
              )}
            </TabsContent>

            <TabsContent value="node-style" className="space-y-3">
              <p className="text-muted-foreground">
                While Node.js runs outside the browser, the core language is the same. This example mimics a
                Node-style script that logs environment-like information.
              </p>
              <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                  <span className="uppercase tracking-wide">node-style.js</span>
                  <span className="text-slate-500 dark:text-slate-300">Console script</span>
                </div>
                <pre className="font-mono text-xs md:text-sm px-4 py-3 whitespace-pre overflow-x-auto">
{nodeStyleJs}
                </pre>
              </div>
              {onOpenWebPlayground && (
                <Button
                  className="w-full md:w-auto"
                  onClick={() => onOpenWebPlayground(nodeStyleHtml, nodeStyleCss, nodeStyleJs)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Open in Web Playground
                </Button>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Visual Architecture Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-yellow-600" />
            JavaScript Environment Architecture
          </CardTitle>
          <CardDescription className="text-base">
            Understand how different JavaScript environments work together in modern development.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* ASCII Diagram */}
          <div className="rounded-lg border bg-slate-50 dark:bg-slate-900/50 p-6 overflow-x-auto">
            <pre className="font-mono text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────┐
│                    YOUR DEVELOPMENT MACHINE                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐         ┌──────────────────┐              │
│  │   Web Browser    │         │     Node.js      │              │
│  │   (V8 Engine)    │         │   (V8 Engine)    │              │
│  ├──────────────────┤         ├──────────────────┤              │
│  │ • DOM APIs       │         │ • File System    │              │
│  │ • Fetch API      │         │ • HTTP Server    │              │
│  │ • localStorage   │         │ • Process APIs   │              │
│  │ • Console        │         │ • npm/packages   │              │
│  └────────┬─────────┘         └────────┬─────────┘              │
│           │                            │                         │
│           └────────────┬───────────────┘                         │
│                        │                                         │
│              ┌─────────▼─────────┐                               │
│              │  JavaScript Code  │                               │
│              │  (Your Scripts)   │                               │
│              └───────────────────┘                               │
│                        │                                         │
│           ┌────────────┴────────────┐                            │
│           │                         │                            │
│  ┌────────▼────────┐    ┌──────────▼─────────┐                  │
│  │  Code Editor    │    │   Build Tools      │                  │
│  │  (VS Code)      │    │  (Vite, Webpack)   │                  │
│  └─────────────────┘    └────────────────────┘                  │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>

          {/* Interactive Environment Selector */}
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedEnvironment('browser')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedEnvironment === 'browser'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'border-slate-200 dark:border-slate-700 hover:border-blue-300'
              }`}
            >
              <Globe className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-semibold mb-1">Browser Only</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for learning basics and building web pages
              </p>
            </button>

            <button
              onClick={() => setSelectedEnvironment('node')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedEnvironment === 'node'
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                  : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300'
              }`}
            >
              <Cpu className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold mb-1">Node.js Only</h3>
              <p className="text-sm text-muted-foreground">
                Backend development, CLI tools, and automation
              </p>
            </button>

            <button
              onClick={() => setSelectedEnvironment('both')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedEnvironment === 'both'
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
                  : 'border-slate-200 dark:border-slate-700 hover:border-purple-300'
              }`}
            >
              <Rocket className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="font-semibold mb-1">Full Stack</h3>
              <p className="text-sm text-muted-foreground">
                Complete modern workflow for professional projects
              </p>
            </button>
          </div>

          {/* Environment Details */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              {selectedEnvironment === 'browser' && 'Browser Environment'}
              {selectedEnvironment === 'node' && 'Node.js Environment'}
              {selectedEnvironment === 'both' && 'Full Stack Environment'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {selectedEnvironment === 'browser' && 'Start here! No installation needed. Use DevTools console and HTML files with <script> tags. Great for learning DOM manipulation and front-end basics.'}
              {selectedEnvironment === 'node' && 'Install Node.js to run JavaScript outside the browser. Access npm packages, build servers, and create CLI tools. Essential for backend development.'}
              {selectedEnvironment === 'both' && 'Professional setup: Browser for front-end + Node.js for tooling and backend. Use VS Code with extensions, npm for packages, and build tools like Vite or Webpack.'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Installation Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Download className="w-6 h-6 text-yellow-600" />
            Step-by-Step Installation Guide
          </CardTitle>
          <CardDescription className="text-base">
            Follow these detailed instructions to set up your JavaScript development environment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="browser-setup">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="browser-setup">Browser Setup</TabsTrigger>
              <TabsTrigger value="node-setup">Node.js Setup</TabsTrigger>
              <TabsTrigger value="editor-setup">Editor Setup</TabsTrigger>
            </TabsList>

            <TabsContent value="browser-setup" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 text-blue-600 dark:text-blue-300">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Open Your Browser</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Any modern browser works: Chrome, Firefox, Safari, or Edge. They all include JavaScript engines.
                    </p>
                    <Badge variant="outline">No installation required</Badge>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 text-blue-600 dark:text-blue-300">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Open Developer Tools</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Press F12 (Windows/Linux) or Cmd+Option+I (Mac), or right-click and select "Inspect".
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        Windows/Linux: <strong>F12</strong>
                      </div>
                      <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        Mac: <strong>⌘+⌥+I</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 text-blue-600 dark:text-blue-300">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Navigate to Console Tab</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Click the "Console" tab in DevTools. This is your JavaScript playground.
                    </p>
                    <div className="mt-2 p-3 bg-slate-900 text-green-400 rounded font-mono text-xs">
                      <span className="text-slate-500">&gt;</span> console.log('Hello, World!');<br/>
                      <span className="text-white">Hello, World!</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2 text-blue-600 dark:text-blue-300">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Create an HTML File (Optional)</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      For more complex projects, create an HTML file with a &lt;script&gt; tag.
                    </p>
                    <div className="mt-2 rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                      <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                        <span className="uppercase tracking-wide">index.html</span>
                      </div>
                      <pre className="font-mono text-xs px-4 py-3 overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First JS Page</title>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
    <script src="app.js"></script>
  </body>
</html>`}
                      </pre>
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>You're Ready!</AlertTitle>
                  <AlertDescription>
                    You can now write and run JavaScript directly in the browser. No additional setup required for learning basics.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            <TabsContent value="node-setup" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 text-emerald-600 dark:text-emerald-300">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Download Node.js</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visit nodejs.org and download the LTS (Long Term Support) version for your operating system.
                    </p>
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        nodejs.org
                      </a>
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 text-emerald-600 dark:text-emerald-300">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Run the Installer</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Follow the installation wizard. Accept default settings unless you have specific preferences.
                    </p>
                    <Badge variant="secondary">Installs both Node.js and npm</Badge>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 text-emerald-600 dark:text-emerald-300">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Verify Installation</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Open a terminal/command prompt and run these commands to confirm installation:
                    </p>
                    <div className="space-y-2 mt-2">
                      <div className="p-3 bg-slate-900 text-green-400 rounded font-mono text-xs">
                        <span className="text-slate-500">$</span> node --version<br/>
                        <span className="text-white">v20.11.0</span>
                      </div>
                      <div className="p-3 bg-slate-900 text-green-400 rounded font-mono text-xs">
                        <span className="text-slate-500">$</span> npm --version<br/>
                        <span className="text-white">10.2.4</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 text-emerald-600 dark:text-emerald-300">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Create Your First Node.js Script</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Create a file named <code className="font-mono">app.js</code> and add a simple console log:
                    </p>
                    <div className="mt-2 rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                      <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                        <span className="uppercase tracking-wide">app.js</span>
                      </div>
                      <pre className="font-mono text-xs px-4 py-3 overflow-x-auto">
{`console.log('Hello from Node.js!');

// Node.js gives you access to system APIs
const os = require('os');
console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);`}
                      </pre>
                    </div>
                    <div className="mt-2 p-3 bg-slate-900 text-green-400 rounded font-mono text-xs">
                      <span className="text-slate-500">$</span> node app.js<br/>
                      <span className="text-white">Hello from Node.js!<br/>Platform: darwin<br/>CPU cores: 8</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 text-emerald-600 dark:text-emerald-300">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Initialize a Project with npm</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Create a <code className="font-mono">package.json</code> file to manage dependencies:
                    </p>
                    <div className="p-3 bg-slate-900 text-green-400 rounded font-mono text-xs mb-2">
                      <span className="text-slate-500">$</span> npm init -y
                    </div>
                    <div className="rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                      <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                        <span className="uppercase tracking-wide">package.json</span>
                      </div>
                      <pre className="font-mono text-xs px-4 py-3 overflow-x-auto">
{packageJsonExample}
                      </pre>
                    </div>
                  </div>
                </div>

                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Node.js is Ready!</AlertTitle>
                  <AlertDescription>
                    You can now run JavaScript files, install packages with npm, and build backend applications.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            <TabsContent value="editor-setup" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2 text-purple-600 dark:text-purple-300">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Choose a Code Editor</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      VS Code is recommended for JavaScript development due to excellent built-in support and extensions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mt-2">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Visual Studio Code</h4>
                        <p className="text-xs text-muted-foreground">Free, feature-rich, huge ecosystem</p>
                        <Badge variant="outline" className="mt-2">Recommended</Badge>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">Alternatives</h4>
                        <p className="text-xs text-muted-foreground">WebStorm, Sublime, Atom</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2 text-purple-600 dark:text-purple-300">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Install Essential Extensions</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Enhance your editor with these must-have extensions for JavaScript:
                    </p>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <div className="flex-1">
                          <span className="font-semibold text-sm">ESLint</span>
                          <p className="text-xs text-muted-foreground">Catches errors and enforces code style</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <div className="flex-1">
                          <span className="font-semibold text-sm">Prettier</span>
                          <p className="text-xs text-muted-foreground">Automatic code formatting</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <div className="flex-1">
                          <span className="font-semibold text-sm">Path Intellisense</span>
                          <p className="text-xs text-muted-foreground">Autocomplete file paths</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <div className="flex-1">
                          <span className="font-semibold text-sm">JavaScript (ES6) Snippets</span>
                          <p className="text-xs text-muted-foreground">Quick code templates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2 text-purple-600 dark:text-purple-300">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Configure Editor Settings</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Optimize your workspace with these recommended settings:
                    </p>
                    <div className="mt-2 rounded-md overflow-hidden border bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
                      <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                        <span className="uppercase tracking-wide">settings.json</span>
                      </div>
                      <pre className="font-mono text-xs px-4 py-3 overflow-x-auto">
{`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange"
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2 text-purple-600 dark:text-purple-300">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Set Up Integrated Terminal</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Use the built-in terminal for running Node.js commands without leaving your editor.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        Toggle Terminal: <strong>Ctrl+`</strong>
                      </div>
                      <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        New Terminal: <strong>Ctrl+Shift+`</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2 text-purple-600 dark:text-purple-300">
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Test Your Complete Setup</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Verify everything works together with this interactive example:
                    </p>
                    {onOpenWebPlayground && (
                      <Button
                        className="mt-2"
                        onClick={() => onOpenWebPlayground(vscodeSetupHtml, vscodeSetupCss, vscodeSetupJs)}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Test Complete Setup
                      </Button>
                    )}
                  </div>
                </div>

                <Alert>
                  <Rocket className="h-4 w-4" />
                  <AlertTitle>Professional Environment Ready!</AlertTitle>
                  <AlertDescription>
                    You now have a complete development setup with linting, formatting, and modern tooling.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Common Pitfalls & Troubleshooting */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/15 dark:to-yellow-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            Common Pitfalls & Troubleshooting
          </CardTitle>
          <CardDescription className="text-base">
            Avoid these common setup mistakes and learn how to fix them quickly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pitfall-1">
              <AccordionTrigger className="text-sm md:text-base">
                ❌ "node is not recognized" error in terminal
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Problem:</strong> Node.js wasn't added to your system PATH during installation.
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                  <p className="text-sm font-semibold mb-2">✅ Solutions:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Restart your terminal/command prompt after installation</li>
                    <li>Reinstall Node.js and check "Add to PATH" option</li>
                    <li>Manually add Node.js to PATH in system environment variables</li>
                    <li>On Windows: Search for "Environment Variables" in Start menu</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pitfall-2">
              <AccordionTrigger className="text-sm md:text-base">
                ❌ Code runs in editor but not in browser
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Problem:</strong> Mixing Node.js APIs with browser code or forgetting to link script file.
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded border space-y-2">
                  <p className="text-sm font-semibold">✅ Common causes:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Using <code className="font-mono">require()</code> in browser (use ES modules instead)</li>
                    <li>Forgot <code className="font-mono">&lt;script src="app.js"&gt;&lt;/script&gt;</code> in HTML</li>
                    <li>Script tag placed before elements it tries to access (move to bottom of body)</li>
                    <li>File path incorrect (check console for 404 errors)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pitfall-3">
              <AccordionTrigger className="text-sm md:text-base">
                ❌ npm install fails with permission errors
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Problem:</strong> Insufficient permissions for global package installation.
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                  <p className="text-sm font-semibold mb-2">✅ Solutions:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Avoid global installs when possible (use npx or local packages)</li>
                    <li>On Mac/Linux: Use nvm (Node Version Manager) instead of system Node</li>
                    <li>On Windows: Run terminal as administrator for global installs</li>
                    <li>Never use sudo with npm on Mac/Linux (fix permissions instead)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pitfall-4">
              <AccordionTrigger className="text-sm md:text-base">
                ❌ Code works locally but breaks when deployed
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Problem:</strong> Different environments or missing dependencies.
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                  <p className="text-sm font-semibold mb-2">✅ Prevention:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Always commit <code className="font-mono">package.json</code> and <code className="font-mono">package-lock.json</code></li>
                    <li>Test with <code className="font-mono">NODE_ENV=production</code> before deploying</li>
                    <li>Check for hardcoded paths or environment-specific code</li>
                    <li>Ensure correct Node.js version on server (use .nvmrc file)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pitfall-5">
              <AccordionTrigger className="text-sm md:text-base">
                ❌ Editor shows errors but code runs fine
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Problem:</strong> TypeScript or ESLint misconfiguration.
                </p>
                <div className="bg-white dark:bg-slate-900 p-3 rounded border">
                  <p className="text-sm font-semibold mb-2">✅ Fixes:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Check if you have <code className="font-mono">jsconfig.json</code> or <code className="font-mono">tsconfig.json</code></li>
                    <li>Install type definitions: <code className="font-mono">npm i -D @types/node</code></li>
                    <li>Reload VS Code window after installing extensions</li>
                    <li>Disable TypeScript checking for pure JavaScript projects</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="w-6 h-6 text-yellow-600" />
            Setup Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Professional tips for maintaining a healthy JavaScript development environment.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold">Version Management</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Use nvm/nvm-windows to manage multiple Node versions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Keep Node.js updated to latest LTS version</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Document required Node version in README</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">Package Management</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Commit package-lock.json to version control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Run <code className="font-mono text-xs">npm audit</code> regularly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Keep dependencies updated with dependabot</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Code Quality</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Set up ESLint and Prettier from day one</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Use pre-commit hooks with Husky</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Configure editor to format on save</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Project Organization</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Create .gitignore for node_modules and .env</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Use consistent folder structure across projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Write descriptive README with setup instructions</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Create a dotfiles repository with your preferred editor settings, extensions list, and shell configuration. This makes setting up new machines much faster!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Learning Path & Next Steps */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/15 dark:to-sky-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Your Learning Path Forward
          </CardTitle>
          <CardDescription className="text-base">
            Now that your environment is set up, here's what to learn next.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg bg-white/50 dark:bg-slate-900/50">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Next: JavaScript Basics</h3>
                <p className="text-sm text-muted-foreground">
                  Learn variables, data types, and basic operators. Start writing your first real programs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg bg-white/50 dark:bg-slate-900/50">
              <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2">
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Then: DOM Manipulation</h3>
                <p className="text-sm text-muted-foreground">
                  Make web pages interactive by learning how to select and modify HTML elements with JavaScript.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg bg-white/50 dark:bg-slate-900/50">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2">
                <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Advanced: Build Tools & Frameworks</h3>
                <p className="text-sm text-muted-foreground">
                  Once comfortable with JavaScript fundamentals, explore React, Vue, or build tools like Vite and Webpack.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Official Resources
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  MDN JavaScript Guide
                </a>
                {' '}- Comprehensive documentation from Mozilla
              </li>
              <li>
                <a
                  href="https://nodejs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Node.js Documentation
                </a>
                {' '}- Official Node.js API reference
              </li>
              <li>
                <a
                  href="https://tc39.es/ecma262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  ECMAScript Specification
                </a>
                {' '}- The official JavaScript language specification
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
