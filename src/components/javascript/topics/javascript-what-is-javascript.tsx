'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Code2,
  Globe,
  Cpu,
  Smartphone,
  Layers,
  Sparkles,
  Terminal,
  MousePointerClick,
  Activity,
  Lightbulb,
  Server,
  Cloud,
  Zap,
  Play,
} from 'lucide-react';

interface JavaScriptWhatIsJavaScriptProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/20 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const consoleSnippet = `console.log('Hello, JavaScript!');
console.log('Running inside the browser console.');`;

const domSnippet = `const message = document.getElementById('message');
message.textContent = '✅ DOM updated by JavaScript!';`;

const fetchSnippet = `fetch('https://api.example.com/todos')
  .then((res) => res.json())
  .then((todos) => console.log('First todo:', todos[0]));`;

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JavaScript Snapshot</title>
  <style>
    body { font-family: 'Inter', system-ui; background: #f8fafc; color: #0f172a; padding: 24px; }
    .panel { max-width: 720px; margin: 0 auto; border-radius: 16px; border: 1px solid #e2e8f0; background: #fff; padding: 28px; }
    pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 10px; overflow-x: auto; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>JavaScript Live Demo</h1>
    <p>Open DevTools console to follow the logs.</p>
    <pre id="code"></pre>
  </div>
  <script src="./what-is-js-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('Welcome to JavaScript!');

const greet = (name = 'Coder') => 'Hello, ' + name + '!';
console.log(greet());
console.log(greet('Ada'));

const scores = [12, 18, 20];
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;
console.log('Average score:', average);

const summary = 'greet() -> ' + greet() + '\\nAverage -> ' + average;
document.getElementById('code').textContent = summary;
`;

export default function JavaScriptWhatIsJavaScript({ onOpenWebPlayground }: JavaScriptWhatIsJavaScriptProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Code2}
        category="JavaScript Fundamentals"
        title="What is JavaScript?"
        description="A beginner-friendly tour of the language that makes the web interactive, connected, and alive."
        colorTheme="blue"
      />

      {/* What is JavaScript - Clear Definition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is JavaScript?
          </CardTitle>
          <CardDescription className="text-base">
            The programming language that powers the modern web
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Simple Definition */}
          <div className="p-6 bg-gradient-to-br from-blue-50/70 to-cyan-50/70 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-lg leading-relaxed text-foreground">
              JavaScript is a <strong>high-level programming language</strong> that makes websites interactive and dynamic. 
              It's the only language that runs <strong>natively in web browsers</strong>, allowing you to create everything from simple button clicks to complex web applications.
            </p>
          </div>

          {/* Key Characteristics */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border bg-white/90 dark:bg-slate-900/80 space-y-3">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Core Characteristics
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span><strong className="text-foreground">Interpreted:</strong> Runs directly in browsers without compilation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span><strong className="text-foreground">Dynamically typed:</strong> Variables can hold any data type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span><strong className="text-foreground">Event-driven:</strong> Responds to user actions like clicks and scrolls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span><strong className="text-foreground">Asynchronous:</strong> Handles multiple tasks without blocking</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border bg-white/90 dark:bg-slate-900/80 space-y-3">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                What Makes it Special?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>Works everywhere: browsers, servers, mobile, desktop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>Huge ecosystem with millions of libraries (npm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>Powers frameworks like React, Vue, Angular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>Easy to start—no setup required, just a browser</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Comparison: Static vs Dynamic */}
          <div className="p-5 bg-gradient-to-br from-slate-50/80 to-gray-50/80 dark:from-slate-900/40 dark:to-gray-900/40 rounded-xl border border-slate-200/50 dark:border-slate-800/30">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Without JavaScript vs With JavaScript
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border space-y-2">
                <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">Without JS</Badge>
                <p className="text-sm text-muted-foreground">Static page that never changes</p>
                <div className="text-xs space-y-1 font-mono bg-slate-50 dark:bg-slate-950 p-2 rounded">
                  <div className="text-slate-500">// Just HTML + CSS</div>
                  <div className="text-slate-600 dark:text-slate-400">✗ No button clicks work</div>
                  <div className="text-slate-600 dark:text-slate-400">✗ Can't load new data</div>
                  <div className="text-slate-600 dark:text-slate-400">✗ Page reload for changes</div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border space-y-2">
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">With JS</Badge>
                <p className="text-sm text-muted-foreground">Dynamic, interactive experience</p>
                <div className="text-xs space-y-1 font-mono bg-slate-50 dark:bg-slate-950 p-2 rounded">
                  <div className="text-emerald-500">// HTML + CSS + JavaScript</div>
                  <div className="text-emerald-600 dark:text-emerald-400">✓ Respond to clicks/input</div>
                  <div className="text-emerald-600 dark:text-emerald-400">✓ Fetch data from APIs</div>
                  <div className="text-emerald-600 dark:text-emerald-400">✓ Update content instantly</div>
                </div>
              </div>
            </div>
          </div>

          {/* First Example */}
          <Alert className="bg-gradient-to-r from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200 dark:border-violet-800">
            <Terminal className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <AlertTitle className="text-violet-700 dark:text-violet-300">Your First JavaScript Code</AlertTitle>
            <AlertDescription className="space-y-2">
              <p className="text-violet-600/90 dark:text-violet-400/90">
                Open your browser's console (F12 → Console tab) and type:
              </p>
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-3 font-mono text-sm">
                <div className="text-slate-400">console.log(<span className="text-emerald-400">'Hello, JavaScript!'</span>);</div>
              </div>
              <p className="text-violet-600/90 dark:text-violet-400/90 text-sm">
                Press Enter and see it work instantly—that's JavaScript! 🎉
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>


      {/* What Can JavaScript Do - Practical Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Activity className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What Can JavaScript Do?
          </CardTitle>
          <CardDescription className="text-base">
            Real-world examples showing JavaScript in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Where it Runs */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/15 dark:to-cyan-950/15 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Runs Everywhere
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-white/90 dark:bg-slate-900/80 rounded-lg border space-y-1">
                <p className="font-semibold text-sm">🌐 Browsers</p>
                <p className="text-xs text-muted-foreground">UI updates, animations, form validation</p>
              </div>
              <div className="p-3 bg-white/90 dark:bg-slate-900/80 rounded-lg border space-y-1">
                <p className="font-semibold text-sm">🖥️ Servers (Node.js)</p>
                <p className="text-xs text-muted-foreground">APIs, databases, file operations</p>
              </div>
              <div className="p-3 bg-white/90 dark:bg-slate-900/80 rounded-lg border space-y-1">
                <p className="font-semibold text-sm">📱 Mobile & IoT</p>
                <p className="text-xs text-muted-foreground">React Native, Electron, automation</p>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/20 dark:to-cyan-950/10 rounded-xl border border-blue-200/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><Terminal className="w-5 h-5 text-blue-600" /> Print Messages</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{consoleSnippet}</pre>
              <SnippetOutput lines={["Hello, JavaScript!", 'Running inside the browser console.']} />
            </div>
            <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/20 dark:to-green-950/10 rounded-xl border border-emerald-200/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><MousePointerClick className="w-5 h-5 text-emerald-600" /> Update Page Content</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{domSnippet}</pre>
              <SnippetOutput lines={["message.textContent -> '✅ DOM updated by JavaScript!'" ]} />
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/20 dark:to-yellow-950/10 rounded-xl border border-amber-200/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><Activity className="w-5 h-5 text-amber-600" /> Fetch API Data</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{fetchSnippet}</pre>
              <SnippetOutput lines={["First todo: { id: 1, title: 'Sample' }"]} />
            </div>
          </div>

          {/* Real Use Cases */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border bg-white/90 dark:bg-slate-900/80 space-y-2">
              <h4 className="font-semibold flex items-center gap-2"><Zap className="w-4 h-4 text-purple-600" /> Interactive UIs</h4>
              <p className="text-sm text-muted-foreground">Handle clicks, validate forms, animate elements, show/hide content</p>
            </div>
            <div className="p-4 rounded-xl border bg-white/90 dark:bg-slate-900/80 space-y-2">
              <h4 className="font-semibold flex items-center gap-2"><Server className="w-4 h-4 text-blue-600" /> Backend Services</h4>
              <p className="text-sm text-muted-foreground">Build REST APIs, connect databases, handle authentication</p>
            </div>
            <div className="p-4 rounded-xl border bg-white/90 dark:bg-slate-900/80 space-y-2">
              <h4 className="font-semibold flex items-center gap-2"><Cloud className="w-4 h-4 text-emerald-600" /> Automation</h4>
              <p className="text-sm text-muted-foreground">Rename files, parse data, send notifications, scrape websites</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Get Started */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            How to Get Started
          </CardTitle>
          <CardDescription className="text-base">
            Three simple ways to start writing JavaScript today
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { title: '1. Browser Console', details: 'Open DevTools (F12 → Console). Type code and see results instantly. Perfect for learning!', icon: Terminal },
            { title: '2. HTML File', details: 'Create index.html with a <script> tag. Open in browser. Use Live Server for auto-refresh.', icon: Globe },
            { title: '3. Node.js', details: 'Install Node.js + VS Code. Run files with "node app.js" for server-side JavaScript.', icon: Server },
          ].map(({ title, details, icon: Icon }) => (
            <div key={title} className="p-4 rounded-xl border bg-white/90 dark:bg-slate-900/80 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">{title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/40 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Tips for Beginners
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4">
            <h4 className="font-semibold mb-2">Do this</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Practice in the console daily (10-line experiments).</li>
              <li>✅ Read browser errors—they point to exact lines.</li>
              <li>✅ Build tiny projects (color picker, todo, timer).</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4">
            <h4 className="font-semibold mb-2">Avoid this</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Copy/pasting big code blocks you don’t understand.</li>
              <li>❌ Trying to learn every framework on day one.</li>
              <li>❌ Skipping fundamentals of variables, functions, loops.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try JavaScript Right Now
          </CardTitle>
          <CardDescription className="text-base">Launch the playground and peek at real console output.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">what-is-js-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Greetings + averages</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{playgroundJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
