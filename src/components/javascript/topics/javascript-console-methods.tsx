'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
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
  Play,
} from 'lucide-react';

interface JavaScriptConsoleMethodsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const consoleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Console Methods</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at 20% 20%, #eff6ff 0, #fff 40%), #f8fafc;
      color: #0f172a;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .card {
      width: min(760px, 100%);
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      box-shadow: 0 20px 80px rgba(15, 23, 42, 0.08);
      padding: 22px;
    }
    .row { display: flex; gap: 12px; align-items: center; margin-bottom: 10px; }
    .pill { background: #eef2ff; color: #4338ca; padding: 6px 10px; border-radius: 999px; font-weight: 600; }
    p { margin: 0; color: #475569; }
  </style>
</head>
<body>
  <div class="card">
    <div class="row">
      <span class="pill">Open DevTools Console</span>
      <p>See each console method log with style.</p>
    </div>
    <div id="preview"></div>
  </div>
  <script src="./console-demo.js"></script>
</body>
</html>`;

const consoleJs = `console.clear();

console.log('%cWelcome to console methods!', 'color:#2563eb;font-weight:700;font-size:14px;');

console.log('Plain log:', { user: 'Ada', plan: 'pro' });
console.info('Info: API call started...');
console.warn('Warn: Using fallback cache');
console.error('Error: Something went wrong');

const users = [
  { name: 'Ada', role: 'admin', active: true },
  { name: 'Grace', role: 'editor', active: false },
  { name: 'Lin', role: 'viewer', active: true },
];
console.table(users);

console.group('Grouped steps');
console.log('Step 1: start');
console.log('Step 2: process');
console.log('Step 3: finish');
console.groupEnd();

console.time('timer-demo');
for (let i = 0; i < 500000; i++) {}
console.timeEnd('timer-demo');

console.log('%cStyled%c message with two parts', 'color:#16a34a;font-weight:700;', 'color:#0f172a;');

document.getElementById('preview').innerHTML = [
  'Opened console and printed logs.',
  'Grouped steps and timed a loop.',
  'Displayed data as a table.',
  'Styled messages with %c tokens.'
].map(text => '<div style="padding:10px 12px;margin:6px 0;border-radius:10px;background:#f8fafc;border:1px dashed #e2e8f0;">'+text+'</div>').join('');`;

export default function JavaScriptConsoleMethods({ onOpenWebPlayground }: JavaScriptConsoleMethodsProps) {
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

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Console Methods
          </CardTitle>
          <CardDescription className="text-base">
            Open in the web playground, then view DevTools console to see each method in action.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">console-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">log, warn, error, table, group, time, styled</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{consoleJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(consoleHtml, '', consoleJs)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Open in Web Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
