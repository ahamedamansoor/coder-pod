'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  PanelsTopLeft,
  GitCompare,
  ToggleLeft,
  AlarmClock,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Play,
} from 'lucide-react';

interface JavaScriptSwitchStatementsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Switch Statements Demo</title>
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
    <h1>🎛️ Switch Statements</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Switch Statements Demo ===\\n');

// Example 1: Day of week
console.log('1️⃣ DAY OF WEEK:');
const day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default:
    console.log('Weekend!');
}
console.log('');

// Example 2: Grade evaluation
console.log('2️⃣ GRADE EVALUATION:');
const grade = 'B';

switch (grade) {
  case 'A':
    console.log('Excellent! 90-100%');
    break;
  case 'B':
    console.log('Good! 80-89%');
    break;
  case 'C':
    console.log('Fair 70-79%');
    break;
  default:
    console.log('Needs improvement');
}
console.log('');

// Example 3: Grouped cases
console.log('3️⃣ GROUPED CASES:');
const fruit = 'orange';

switch (fruit) {
  case 'apple':
  case 'pear':
    console.log('Pome fruit');
    break;
  case 'orange':
  case 'lemon':
  case 'lime':
    console.log('Citrus fruit');
    break;
  case 'banana':
    console.log('Berry fruit');
    break;
  default:
    console.log('Unknown fruit type');
}
console.log('');

// Example 4: Return values
console.log('4️⃣ RETURNING FROM SWITCH:');
function getActionMessage(action) {
  switch (action) {
    case 'save':
      return 'File saved successfully';
    case 'delete':
      return 'File deleted';
    case 'open':
      return 'File opened';
    default:
      return 'Unknown action';
  }
}

console.log(getActionMessage('save'));
console.log(getActionMessage('open'));

console.log('\\n✅ All demos complete!');`;

export default function JavaScriptSwitchStatements({ onOpenWebPlayground }: JavaScriptSwitchStatementsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={PanelsTopLeft}
        category="JavaScript Fundamentals"
        title="Switch Statements"
        description="Handle many discrete cases with clean, readable branches and a required default."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            When to Use Switch
          </CardTitle>
          <CardDescription className="text-base">
            Choose switch for many discrete cases sharing the same variable. Keep cases grouped and add default fallbacks.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <PanelsTopLeft className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Multiple branches
            </h3>
            <p className="text-sm text-muted-foreground">Cleanly handle many cases with one expression.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">case</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Shared logic
            </h3>
            <p className="text-sm text-muted-foreground">Stack cases to share outcomes (e.g., weekdays vs weekend).</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">group</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Clear fallbacks
            </h3>
            <p className="text-sm text-muted-foreground">Always add default to catch unexpected values.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">default</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PanelsTopLeft className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Structure
          </CardTitle>
          <CardDescription className="text-base">
            Compare one expression against multiple cases; break after each match.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Template</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>switch (value) {'{'}</div>
              <div className="pl-2">case 'A': ...; break;</div>
              <div className="pl-2">case 'B': ...; break;</div>
              <div className="pl-2">default: ...;</div>
              <div>{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Without break, execution will fall through.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Example</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const role = 'editor';</div>
              <div>let access;</div>
              <div>switch (role) {'{'}</div>
              <div className="pl-2">case 'admin': access = 'all'; break;</div>
              <div className="pl-2">case 'editor': access = 'partial'; break;</div>
              <div className="pl-2">default: access = 'view';</div>
              <div>{'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Group cases that share outcomes.</li>
              <li>✅ Add default to cover unexpected values.</li>
              <li>✅ Use break after each case to avoid accidental fallthrough.</li>
              <li>✅ Switch when many if/else blocks compare the same variable.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Forgetting break (unless you intentionally want fallthrough).</li>
              <li>❌ Duplicating code—extract shared logic into functions.</li>
              <li>❌ Using switch for complex range comparisons—if/else is clearer there.</li>
              <li>❌ Missing default; it catches new or unknown values.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Common mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Avoid Pitfalls
          </CardTitle>
          <CardDescription className="text-base">
            Break, default, and strict comparison rules keep switch statements predictable.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Missing break
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>case 'A': doThing();</div>
              <div className="text-slate-500">// falls through unintentionally</div>
              <div>case 'B': doOther();</div>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Proper default
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>default: throw new Error('Unhandled case');</div>
            </div>
            <p className="text-sm text-muted-foreground">Default protects you when new cases appear.</p>
          </div>
        </CardContent>
      </Card>

      {/* Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Try Switch Live
          </CardTitle>
          <CardDescription className="text-base">
            Run the demo and open the browser console to see switch cases run.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">switch-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Stacked cases, break, default</span>
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
