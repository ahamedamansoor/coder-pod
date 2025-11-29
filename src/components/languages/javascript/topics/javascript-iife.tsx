'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippetWithOutput, InteractivePlayground } from '@/components/shared';
import {
  Sparkles,
  Shield,
  Layers,
  Code,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Zap,
  Box,
} from 'lucide-react';

interface JavaScriptIifeProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IIFE Demo</title>
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
    <h1>⚡ IIFE</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const basicIifeSnippet = `// Basic IIFE - runs immediately
(function() {
  const message = 'Hello from IIFE!';
  console.log(message);
})();

// With arrow function
(() => {
  console.log('Arrow IIFE executed!');
})();

// Output:
// Hello from IIFE!
// Arrow IIFE executed!`;

const anatomySnippet = `// Anatomy of an IIFE
(function(name) {           // ← Wrapper: makes it an expression
  const greeting = 'Hello';  // ← Private scope
  console.log(greeting + ', ' + name);
})('World');                 // ← Immediate invocation with argument

// Output: Hello, World

// With return value
const result = (function() {
  const x = 10;
  const y = 20;
  return x + y;              // ← Return value
})();

console.log(result);         // 30`;

const scopeProtectionSnippet = `// Create a private scope for temporary helpers
(function () {
  const apiKey = 'secret-123';

  function buildUrl(endpoint) {
    return 'https://api.example.com/' + endpoint + '?key=' + apiKey;
  }

  console.log(buildUrl('stats'));
})();

// console.log(apiKey); // ReferenceError`;

const modulePatternSnippet = `const themeManager = (function () {
  const theme = { mode: 'light' };

  return {
    setDark() {
      theme.mode = 'dark';
      console.log('Theme set to dark');
    },
    current() {
      return theme.mode;
    },
  };
})();

themeManager.setDark(); // Theme set to dark
console.log(themeManager.current()); // dark`;

const loopClosureSnippet = `// Preserve the right index when using var
for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(() => console.log('Button', index), index * 100);
  })(i);
}

// Output:
// Button 1
// Button 2
// Button 3`;

const domReadySnippet = `// Run logic once the DOM is ready
(function (doc) {
  if (doc.readyState === 'complete') {
    console.log('DOM already ready');
  } else {
    doc.addEventListener('DOMContentLoaded', () => {
      console.log('DOM ready, binding events');
    });
  }
})(document);`;

const featureToggleSnippet = `// Feature flag isolated in a private scope
const feature = (function () {
  const enabled = true;

  return {
    run() {
      if (!enabled) {
        console.log('Feature disabled');
        return;
      }
      console.log('Running beta feature safely');
    },
  };
})();

feature.run(); // Running beta feature safely`;

const asyncIifeSnippet = `// Async IIFE for top-level await style code
(async function () {
  const data = await Promise.resolve(['Ada', 'Lin']);
  console.log('Resolved data:', data);
})();

// Immediately starts fetching data`;

const arrowIifeSnippet = `// Arrow function IIFE with implicit return
const config = (() => ({
  env: 'production',
  version: '1.0.0',
}))();

console.log(config.env); // production`;

const playgroundJs = `console.clear();

// Different IIFE patterns
(function () {
  console.log('Classic IIFE executed');
})();

// Module style
const logger = (function () {
  let history = [];
  return {
    log(message) {
      history.push(message);
      console.log('LOG:', message);
    },
    history() {
      return history;
    },
  };
})();

logger.log('First entry');
console.log(logger.history());

// Async IIFE
(async () => {
  const value = await Promise.resolve('Loaded async!');
  console.log(value);
})();`;

export default function JavaScriptIife({ onOpenWebPlayground }: JavaScriptIifeProps) {
  const openSnippet = (code: string) => {
    if (onOpenWebPlayground) {
      onOpenWebPlayground(playgroundHtml, '', code);
    }
  };

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="IIFE (Immediately Invoked Function Expressions)"
        description="Encapsulate logic, protect scope, and run setup code instantly with IIFEs."
        colorTheme="purple"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-violet-50/70 via-indigo-50/60 to-sky-50/60 dark:from-violet-950/10 dark:via-indigo-950/10 dark:to-sky-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-violet-600/80 dark:text-violet-400/80" />
            Why IIFEs Matter
          </CardTitle>
          <CardDescription className="text-base">Avoid polluting the global scope, initialize modules instantly, and keep sensitive data private.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border bg-white/80 dark:bg-slate-900/80 space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-violet-500" />
              <h3 className="font-semibold">Scoped Privacy</h3>
            </div>
            <p className="text-sm text-muted-foreground">Wrap variables inside an IIFE so they cannot leak into window/globalThis.</p>
            <Badge className="bg-violet-100/80 text-violet-700 border border-violet-200/60">Private helpers</Badge>
          </div>
          <div className="p-4 rounded-xl border bg-white/80 dark:bg-slate-900/80 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">Instant Setup</h3>
            </div>
            <p className="text-sm text-muted-foreground">Execute configuration logic immediately when the file loads.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">Auto-run</Badge>
          </div>
          <div className="p-4 rounded-xl border bg-white/80 dark:bg-slate-900/80 space-y-2">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold">Module Building</h3>
            </div>
            <p className="text-sm text-muted-foreground">Return only the API surface you want to expose and keep everything else internal.</p>
            <Badge className="bg-sky-100/80 text-sky-700 border border-sky-200/60">Controlled exports</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Definition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Box className="w-6 h-6 text-violet-600/80 dark:text-violet-400/80" />
            What is an IIFE?
          </CardTitle>
          <CardDescription className="text-base">
            An IIFE is a function expression wrapped in parentheses and executed immediately to create an isolated scope.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{basicIifeSnippet}</pre>
          {onOpenWebPlayground && (
            <Button onClick={() => openSnippet(basicIifeSnippet)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Try in Playground
            </Button>
          )}
          <p className="text-sm text-muted-foreground">
            The outer parentheses force JavaScript to treat the function as an expression. The trailing parentheses call the function right away,
            optionally passing arguments.
          </p>
        </CardContent>
      </Card>

      {/* Anatomy */}
      <Card className="bg-gradient-to-br from-violet-50/60 to-slate-50/60 dark:from-violet-950/10 dark:to-slate-950/10 border border-violet-200/40 dark:border-violet-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-violet-600/80 dark:text-violet-400/80" />
            Anatomy of an IIFE
          </CardTitle>
          <CardDescription className="text-base">Break down the wrapper, private scope, and returned API.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{anatomySnippet}</pre>
          {onOpenWebPlayground && (
            <Button onClick={() => openSnippet(anatomySnippet)} className="w-full md:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Try in Playground
            </Button>
          )}
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-4">
              <strong className="block text-violet-600 dark:text-violet-300 mb-1">Wrapper</strong>
              <p>First parentheses wrap the function expression so it can be invoked immediately.</p>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-4">
              <strong className="block text-violet-600 dark:text-violet-300 mb-1">Private scope</strong>
              <p>Variables (like <code>count</code>) only exist inside and cannot leak out.</p>
            </div>
            <div className="rounded-lg border bg-white/80 dark:bg-slate-900/80 p-4">
              <strong className="block text-violet-600 dark:text-violet-300 mb-1">Returned API</strong>
              <p>Return an object to expose safe methods (<code>increment</code>, <code>getValue</code>).</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core use cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="w-6 h-6 text-violet-600/80 dark:text-violet-400/80" />
            Core Use Cases
          </CardTitle>
          <CardDescription className="text-base">Common situations where IIFEs shine.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Private configuration</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{scopeProtectionSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(scopeProtectionSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Module pattern</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{modulePatternSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(modulePatternSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Loop closures</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{loopClosureSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(loopClosureSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Real-world examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-violet-600/80 dark:text-violet-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">Patterns you will use in production apps.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/40 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              DOM Ready Helpers
            </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{domReadySnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(domReadySnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">
              Attach listeners or initialize UI components without leaving temporary variables on <code>window</code>.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/40 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Feature Toggles
            </h4>
            <pre className="bg-white dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{featureToggleSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(featureToggleSnippet)} className="w-full md:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">
              Ship experimental features without exposing toggles or secret flags to the global scope.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Variations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code className="w-6 h-6 text-violet-600/80 dark:text-violet-400/80" />
            Variations You Should Know
          </CardTitle>
          <CardDescription className="text-base">Async and arrow-based IIFEs keep your syntax flexible.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Async IIFE</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{asyncIifeSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(asyncIifeSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">Use when you need top-level <code>await</code> in scripts that are not modules.</p>
          </div>
          <div className="p-4 rounded-xl border bg-white dark:bg-gray-900 space-y-3">
            <h4 className="font-semibold">Arrow IIFE</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">{arrowIifeSnippet}</pre>
            {onOpenWebPlayground && (
              <Button onClick={() => openSnippet(arrowIifeSnippet)} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Try in Playground
              </Button>
            )}
            <p className="text-sm text-muted-foreground">A concise option when you need to immediately return configuration objects.</p>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
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
              <li>✅ Use IIFEs to initialize libraries or attach event listeners one time.</li>
              <li>✅ Return only the API you need; keep internals private.</li>
              <li>✅ Prefer async IIFEs when replacing long promise chains in top-level scripts.</li>
              <li>✅ Document what the IIFE does since it runs immediately.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Nesting many IIFEs unnecessarily—split files or use modules instead.</li>
              <li>❌ Relying on IIFEs when ES modules already provide scope isolation.</li>
              <li>❌ Forgetting to pass dependencies explicitly (e.g., <code>window</code>, <code>document</code>).</li>
              <li>❌ Mixing IIFEs with hoisted <code>var</code> declarations that you still expect globally.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      {onOpenWebPlayground && (
        <InteractivePlayground
          title="Interactive IIFE Playground"
          description="Experiment with Immediately Invoked Function Expressions, see scope isolation, module patterns, async IIFEs, and practical use cases."
          features={[
            'Scope Isolation',
            'Module Pattern',
            'Async IIFEs',
            'Private Variables'
          ]}
          buttonText="Open IIFE Playground"
          onLaunchPlayground={onOpenWebPlayground}
          playgroundData={{
            html: playgroundHtml,
            css: '',
            js: playgroundJs
          }}
          colorTheme="emerald"
        />
      )}
    </div>
  );
}
