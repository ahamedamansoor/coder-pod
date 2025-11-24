'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Box,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Sparkles,
  Play,
  Code2,
  Zap,
  Globe,
  FileCode,
  Settings,
} from 'lucide-react';

interface JavaScriptVariablesConstantsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const letExampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>let Example</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see the output</p>
</body>
</html>`;

const letExampleJs = `// let variables can be changed

let score = 0;
console.log('Starting score:', score);

score = 10;
console.log('After update:', score);

score = 20;
console.log('Final score:', score);

console.log('');
console.log('✅ let allows reassignment');`;

const constExampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>const Example</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see the output</p>
</body>
</html>`;

const constExampleJs = `// const variables cannot be reassigned

const PI = 3.14159;
console.log('PI:', PI);

// This would cause an error:
// PI = 3.14; // ❌ Error!

console.log('');
console.log('--- Objects with const ---');

const user = { name: 'Alice', age: 25 };
console.log('Before:', user);

user.age = 26; // ✅ This works!
console.log('After:', user);

console.log('');
console.log('✅ const prevents reassignment');
console.log('✅ Object properties can still change');`;

const scopeExampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scope Example</title>
  <style>
    body { 
      font-family: system-ui; 
      padding: 2rem; 
      color: #64748b; 
    }
  </style>
</head>
<body>
  <p>Open the console to see the output</p>
</body>
</html>`;

const scopeExampleJs = `// Global vs Local Scope

let globalVar = 'I am global';

function myFunction() {
  let localVar = 'I am local';
  
  console.log('Inside function:');
  console.log('  globalVar:', globalVar); // ✅ Works
  console.log('  localVar:', localVar);   // ✅ Works
}

myFunction();

console.log('');
console.log('Outside function:');
console.log('  globalVar:', globalVar); // ✅ Works
// console.log('  localVar:', localVar); // ❌ Error!

console.log('');
console.log('✅ Global: accessible everywhere');
console.log('✅ Local: only inside function');`;

export default function JavaScriptVariablesConstants({ onOpenWebPlayground }: JavaScriptVariablesConstantsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Box}
        category="JavaScript Fundamentals"
        title="Variables & Constants"
        description="Learn how to store and manage data in JavaScript using let, const, and understanding variable scope."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Three Ways to Declare Variables
          </CardTitle>
          <CardDescription className="text-base">
            Modern JavaScript provides three keywords for declaring variables, each with different characteristics.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Unlock className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">let</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              For values that can change. Block-scoped and reassignable.
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Most Common
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              <h3 className="font-semibold">const</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              For values that stay the same. Block-scoped and cannot be reassigned.
            </p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
              Recommended
            </Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2 opacity-60">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-slate-600/80 dark:text-slate-400/80" />
              <h3 className="font-semibold">var</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Old way with function scope. Avoid in modern code.
            </p>
            <Badge variant="outline" className="opacity-60">
              Legacy
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Let - Mutable Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Unlock className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            let - Mutable Variables
          </CardTitle>
          <CardDescription className="text-base">
            Use let when you need to change the value of a variable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/80 dark:bg-blue-600/80 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300">How let Works</h3>
                <p className="text-xs text-blue-600/70 dark:text-blue-400/70">Declare once, reassign many times</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
                <h4 className="font-semibold mb-3 text-sm">Declaration</h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-2">
                  <div>
                    <span className="text-blue-600 dark:text-blue-400">let</span>{' '}
                    <span className="text-amber-700 dark:text-amber-300">age</span> ={' '}
                    <span className="text-purple-600 dark:text-purple-400">25</span>;
                  </div>
                  <div>
                    <span className="text-blue-600 dark:text-blue-400">let</span>{' '}
                    <span className="text-amber-700 dark:text-amber-300">name</span>;
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
                <h4 className="font-semibold mb-3 text-sm">Reassignment</h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-2">
                  <div>
                    <span className="text-amber-700 dark:text-amber-300">age</span> ={' '}
                    <span className="text-purple-600 dark:text-purple-400">26</span>;{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">// ✅</span>
                  </div>
                  <div>
                    <span className="text-amber-700 dark:text-amber-300">name</span> ={' '}
                    <span className="text-purple-600 dark:text-purple-400">'Alice'</span>;{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">// ✅</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">When to use let:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Counters and loop variables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Values that change over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Temporary variables</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">JavaScript</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{letExampleJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(letExampleHtml, '', letExampleJs)}>
              <Play className="w-4 h-4 mr-2" />
              Try let Example in Playground
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Const - Immutable Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lock className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            const - Immutable Variables
          </CardTitle>
          <CardDescription className="text-base">
            Use const for values that shouldn't be reassigned. This is the recommended default choice.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200/60 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 p-6 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/80 dark:bg-emerald-600/80 rounded-lg">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-300">How const Works</h3>
                <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Declare once, cannot reassign</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  What's Protected
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-2">
                  <div>
                    <span className="text-emerald-600 dark:text-emerald-400">const</span>{' '}
                    <span className="text-amber-700 dark:text-amber-300">PI</span> ={' '}
                    <span className="text-purple-600 dark:text-purple-400">3.14</span>;
                  </div>
                  <div className="text-rose-600 dark:text-rose-400">// PI = 3; // ❌ Error!</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  Objects & Arrays
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs space-y-2">
                  <div>
                    <span className="text-emerald-600 dark:text-emerald-400">const</span>{' '}
                    <span className="text-amber-700 dark:text-amber-300">user</span> = {'{}'};
                  </div>
                  <div>
                    <span className="text-amber-700 dark:text-amber-300">user</span>.name = <span className="text-purple-600 dark:text-purple-400">'Alice'</span>;{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">// ✅</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">💡 Best Practice:</h4>
              <p className="text-sm text-muted-foreground">
                Start with <code className="font-mono">const</code> by default. Only use <code className="font-mono">let</code> when you know the value needs to change.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30">
              <span className="uppercase tracking-wide text-emerald-700 dark:text-emerald-300">JavaScript</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{constExampleJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(constExampleHtml, '', constExampleJs)}>
              <Play className="w-4 h-4 mr-2" />
              Try const Example in Playground
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card className="bg-gradient-to-br from-slate-50/60 to-gray-50/60 dark:from-slate-950/10 dark:to-gray-950/10 border border-slate-200/50 dark:border-slate-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Settings className="w-6 h-6 text-slate-600/80 dark:text-slate-400/80" />
            Quick Comparison: let vs const vs var
          </CardTitle>
          <CardDescription className="text-base">
            Understanding the key differences at a glance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900">
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">Feature</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">let</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">const</th>
                  <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-sm font-semibold">var</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold">Reassignable</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Yes ✅</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge variant="outline" className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">No ❌</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Yes ✅</Badge>
                  </td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold">Scope</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Block</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Block</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Function</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold">Hoisting</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Not initialized</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Not initialized</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Initialized as undefined</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold">Best For</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Changing values</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">Fixed values</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <span className="text-slate-500">Legacy code</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 p-3 font-semibold">Recommended?</td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">Yes</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">Preferred ⭐</Badge>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-3">
                    <Badge variant="outline" className="opacity-60">Avoid</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Variable Scope */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileCode className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Variable Scope
          </CardTitle>
          <CardDescription className="text-base">
            Understanding where variables are accessible in your code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Global Scope
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Variables declared outside any function or block are accessible everywhere.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs">
                <span className="text-blue-600 dark:text-blue-400">let</span> globalVar = <span className="text-purple-600 dark:text-purple-400">'global'</span>;
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Box className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Block Scope
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Variables declared with let/const inside {'{}'} are only accessible within that block.
              </p>
              <div className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs space-y-1">
                <div>{'{'}</div>
                <div className="ml-2"><span className="text-blue-600 dark:text-blue-400">let</span> local = <span className="text-purple-600 dark:text-purple-400">'block'</span>;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
              <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">JavaScript</span>
            </div>
            <pre className="font-mono text-xs px-4 py-3 whitespace-pre overflow-x-auto">{scopeExampleJs}</pre>
          </div>

          {onOpenWebPlayground && (
            <Button onClick={() => onOpenWebPlayground(scopeExampleHtml, '', scopeExampleJs)}>
              <Play className="w-4 h-4 mr-2" />
              Try Scope Example in Playground
            </Button>
          )}

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Scope Rule</AlertTitle>
            <AlertDescription>
              Variables declared with <code className="font-mono">let</code> and <code className="font-mono">const</code> are block-scoped. They only exist within the nearest set of curly braces {'{}'}.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Naming Conventions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileCode className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Naming Conventions
          </CardTitle>
          <CardDescription className="text-base">
            Follow these rules to write clean, readable variable names.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold mb-3 text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Good Names
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div>✅ userName</div>
                <div>✅ totalPrice</div>
                <div>✅ isActive</div>
                <div>✅ MAX_SIZE</div>
                <div>✅ _private</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-rose-200 dark:border-rose-800">
              <h4 className="font-semibold mb-3 text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Bad Names
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div>❌ 1name (starts with number)</div>
                <div>❌ user-name (contains hyphen)</div>
                <div>❌ let (reserved keyword)</div>
                <div>❌ x (not descriptive)</div>
                <div>❌ UserName (PascalCase for variables)</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30">
              <h4 className="font-semibold mb-2 text-sm">camelCase</h4>
              <p className="text-xs text-muted-foreground mb-2">For variables and functions</p>
              <code className="text-xs font-mono">firstName, getUserData</code>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-2 text-sm">UPPER_CASE</h4>
              <p className="text-xs text-muted-foreground mb-2">For constants</p>
              <code className="text-xs font-mono">MAX_SIZE, API_KEY</code>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-2 text-sm">Descriptive</h4>
              <p className="text-xs text-muted-foreground mb-2">Clear purpose</p>
              <code className="text-xs font-mono">isLoggedIn, userCount</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices Summary
          </CardTitle>
          <CardDescription className="text-base">
            Follow these guidelines for professional variable usage.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Use <code className="font-mono">const</code> by default</li>
                <li>✅ Use <code className="font-mono">let</code> when values change</li>
                <li>✅ Use descriptive, meaningful names</li>
                <li>✅ Follow camelCase convention</li>
                <li>✅ Declare variables at the top of scope</li>
                <li>✅ Initialize variables when declaring</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Using <code className="font-mono">var</code> in modern code</li>
                <li>❌ Single-letter variable names (except loops)</li>
                <li>❌ Reassigning <code className="font-mono">const</code> variables</li>
                <li>❌ Global variables when not needed</li>
                <li>❌ Reserved JavaScript keywords</li>
                <li>❌ Variables without initialization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
