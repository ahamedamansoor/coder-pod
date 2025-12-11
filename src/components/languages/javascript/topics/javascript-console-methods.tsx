'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Terminal,
  Bug,
  Info,
  AlertTriangle,
  Table as TableIcon,
  Timer,
  FolderTree,
  Palette,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';

interface JavaScriptConsoleMethodsProps {}

const consoleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Console Methods Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 48px 32px;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
      max-width: 600px;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
      font-size: 32px;
    }
    p {
      color: #64748b;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Monaco', monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🖥️ Console Methods</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./console-demo.js"></script>
</body>
</html>`;

const consoleJs = `// Console Methods Demo
console.log('%c=== Console Methods Demo ===', 'color:#2563eb;font-weight:700;font-size:16px;');

// 1. console.log() - General purpose logging
console.log('✅ console.log() - Most common method');
console.log('Data:', { user: 'Alice', age: 25 });

console.log(''); // Empty line

// 2. console.table() - Display arrays/objects as table
console.log('📊 console.table() - Tabular data:');
const users = [
  { name: 'Ada', role: 'admin', active: true },
  { name: 'Grace', role: 'editor', active: false },
  { name: 'Lin', role: 'viewer', active: true }
];
console.table(users);

console.log(''); // Empty line

// 3. console.group() - Organize related logs
console.log('📁 Grouped logs:');
if (console.group) {
  console.group('User Actions');
  console.log('Step 1: Login');
  console.log('Step 2: Load dashboard');
  console.log('Step 3: Fetch data');
  console.groupEnd();
}

console.log(''); // Empty line

// 4. console.time() - Measure performance
console.log('⏱️ Performance timing:');
if (console.time) {
  console.time('Loop');
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }
  console.timeEnd('Loop');
  console.log('Sum:', sum);
}

console.log(''); // Empty line

// 5. Styled messages with %c
console.log(
  '%cSuccess!%c Operation completed', 
  'color:#16a34a;font-weight:700;font-size:14px;background:#dcfce7;padding:4px 8px;border-radius:4px;', 
  'color:#64748b;margin-left:8px;'
);

console.log('%c✅ All console methods demonstrated!', 'color:#10b981;font-weight:600;');`;

export default function JavaScriptConsoleMethods({}: JavaScriptConsoleMethodsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Terminal}
        category="JavaScript Fundamentals"
        title="Console Methods"
        description="Use console methods to debug, inspect data, time code, and keep logs organized."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why the Console?
          </CardTitle>
          <CardDescription className="text-base">
            Your fastest feedback loop for debugging, measuring performance, and understanding data structures.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Bug className="w-5 h-5 text-rose-600/80 dark:text-rose-400/80" />
              <h3 className="font-semibold">Spot Bugs</h3>
            </div>
            <p className="text-sm text-muted-foreground">Log values and state changes where issues occur.</p>
            <Badge className="bg-rose-100/80 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border border-rose-300/50 dark:border-rose-700/40">
              Visibility
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">Explain Flow</h3>
            </div>
            <p className="text-sm text-muted-foreground">Group messages to narrate the steps of a function.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Traceability
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Measure Performance</h3>
            </div>
            <p className="text-sm text-muted-foreground">Use timers to compare implementations and find slow spots.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Timing
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Core methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Terminal className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Core Console Methods
          </CardTitle>
          <CardDescription className="text-base">
            Start with the essentials to log, warn, and inspect objects quickly.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h4 className="font-semibold">console.log</h4>
            </div>
            <p className="text-sm text-muted-foreground">General logging for variables, strings, and objects.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
              console.log('User:', user);
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              <h4 className="font-semibold">console.warn / error</h4>
            </div>
            <p className="text-sm text-muted-foreground">Highlight risky or failing states with color and stack traces.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border space-y-1">
              <div>console.warn('Cache stale');</div>
              <div>console.error('API failed');</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-2">
            <div className="flex items-center gap-2">
              <TableIcon className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h4 className="font-semibold">console.table</h4>
            </div>
            <p className="text-sm text-muted-foreground">View arrays/objects in a readable grid with column headers.</p>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
              console.table(users);
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Organize and measure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FolderTree className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Organize & Measure
          </CardTitle>
          <CardDescription className="text-base">
            Group related logs and time code to keep console output clean and informative.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <div className="flex items-center gap-2">
              <FolderTree className="w-5 h-5 text-indigo-600/80 dark:text-indigo-400/80" />
              <h4 className="font-semibold">console.group / groupEnd</h4>
            </div>
            <p className="text-sm text-muted-foreground">Nest logs to narrate steps without clutter.</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>console.group('Checkout');</div>
              <div className="pl-4">console.log('Validate cart');</div>
              <div className="pl-4">console.log('Create order');</div>
              <div>console.groupEnd();</div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h4 className="font-semibold">console.time / timeEnd</h4>
            </div>
            <p className="text-sm text-muted-foreground">Measure durations for API calls or loops.</p>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>console.time('fetch');</div>
              <div>await loadData();</div>
              <div>console.timeEnd('fetch');</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Styled messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Palette className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Styling Console Output
          </CardTitle>
          <CardDescription className="text-base">
            Use %c tokens to add color and emphasis without overwhelming the console.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-2">
              <p className="text-sm text-muted-foreground">Prefix text with <code className="font-mono">%c</code> and pass CSS as the next argument.</p>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
                console.log('%cHi', 'color:#a855f7;font-weight:700;');
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-2">
              <p className="text-sm text-muted-foreground">Chain styles for multiple segments.</p>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
                console.log('%cOK%c ready', 'color:#22c55e', 'color:#0f172a');
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-2">
              <p className="text-sm text-muted-foreground">Use sparingly—too much styling hides signal.</p>
              <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs border">
                console.log('%cBuild %cpassed', 'color:#fb923c', 'color:#0f172a');
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Console Methods Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Terminal className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Console Methods in Action
          </CardTitle>
          <CardDescription className="text-base">
            See all console methods demonstrated in one example
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeSnippet
            title="Complete Console Methods Demo"
            description="Explore log, warn, error, table, group, time, and styled console messages"
            code={consoleJs}
            language="javascript"
            colorTheme="purple"
            icon={Terminal}
            features={[
              "console.log/warn/error for messages",
              "console.table for structured data",
              "console.group for organization",
              "console.time for performance",
              "Styled messages with %c"
            ]}
            tips={[
              "Open browser console (F12) to see output",
              "Use appropriate methods for different message types",
              "Group related logs for better organization"
            ]}
          />
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Debugging Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Use groups to cluster related logs.</li>
              <li>✅ Include identifiers (user id, request id) in logs.</li>
              <li>✅ Clear the console before focused runs (<code className="font-mono">console.clear()</code>).</li>
              <li>✅ Remove noisy logs before shipping production builds.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Logging large objects repeatedly (console floods).</li>
              <li>❌ Leaving secrets/keys in logs.</li>
              <li>❌ Timing code without labels (unclear output).</li>
              <li>❌ Using styled logs everywhere—keep them purposeful.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
