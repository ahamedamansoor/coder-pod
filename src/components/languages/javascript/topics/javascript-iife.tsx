'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Shield,
  Layers,
  Code2,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Zap,
  Box,
  Lock,
  Package,
} from 'lucide-react';

export default function JavaScriptIife() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript · Functions"
        title="IIFE (Immediately Invoked Function Expressions)"
        description="Encapsulate logic, protect scope, and run setup code instantly with IIFEs"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are IIFEs?
          </CardTitle>
          <CardDescription className="text-base">
            Functions that execute immediately after definition, creating private scope and avoiding global pollution
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              <h3 className="font-semibold">Private Scope</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Variables stay inside and don't pollute the global namespace
            </p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
              Encapsulation
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-600/80 dark:text-cyan-400/80" />
              <h3 className="font-semibold">Immediate Execution</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Code runs instantly without manual function call
            </p>
            <Badge className="bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-300/50 dark:border-cyan-700/40">
              Auto-run
            </Badge>
          </div>

          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
              <h3 className="font-semibold">Module Pattern</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Create modules with private data and public APIs
            </p>
            <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
              Patterns
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Understanding IIFEs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Box className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Understanding IIFEs
          </CardTitle>
          <CardDescription className="text-base">
            A function expression that runs immediately, wrapped in parentheses to create isolated scope
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            An IIFE is a <strong>function expression</strong> wrapped in parentheses and executed immediately. The outer parentheses force JavaScript to treat it as an expression (not a declaration), and the trailing <code>()</code> invokes it right away. This creates a private scope where variables don't leak into the global namespace.
          </p>
          
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">basic-iife.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Two common syntaxes</span>
            </div>
            <pre 
              className="text-xs px-4 py-3 whitespace-pre overflow-x-auto"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`// Basic IIFE - runs immediately
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
// Arrow IIFE executed!`}
            </pre>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              The wrapping parentheses <code>(function() &#123;...&#125;)</code> turn the function into an expression. The final <code>()</code> executes it immediately. Variables inside cannot be accessed from outside.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Anatomy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Anatomy of an IIFE
          </CardTitle>
          <CardDescription className="text-base">
            Breaking down the wrapper, private scope, and returned values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-purple-100 dark:bg-purple-900/30">
              <span className="uppercase tracking-wide text-purple-700 dark:text-purple-300">anatomy.js</span>
              <span className="text-purple-600/70 dark:text-purple-400/70">How IIFEs work</span>
            </div>
            <pre 
              className="text-xs px-4 py-3 whitespace-pre overflow-x-auto"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", "Cascadia Code", Menlo, Monaco, Consolas, monospace',
              }}
            >
{`// Anatomy of an IIFE
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

console.log(result);         // 30`}
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <strong className="text-purple-700 dark:text-purple-300">Wrapper ()</strong>
              </div>
              <p className="text-sm text-muted-foreground">
                First parentheses wrap the function expression so it can be invoked immediately
              </p>
            </div>
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <strong className="text-blue-700 dark:text-blue-300">Private Scope</strong>
              </div>
              <p className="text-sm text-muted-foreground">
                Variables inside only exist within the IIFE and cannot leak out
              </p>
            </div>
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                <strong className="text-cyan-700 dark:text-cyan-300">Return Value</strong>
              </div>
              <p className="text-sm text-muted-foreground">
                Can return values or objects to expose a public API
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Core Use Cases
          </CardTitle>
          <CardDescription className="text-base">
            Common patterns where IIFEs provide elegant solutions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-3 gap-6">
            <CodeSnippet
              title="Private Configuration"
              description="Keep sensitive data and helper functions private from global scope"
              code={`// Create a private scope for temporary helpers
(function () {
  const apiKey = 'secret-123';

  function buildUrl(endpoint) {
    return 'https://api.example.com/' + endpoint + '?key=' + apiKey;
  }

  console.log(buildUrl('stats'));
})();

// console.log(apiKey); // ReferenceError`}
              language="javascript"
              colorTheme="blue"
              icon={Lock}
              features={[
                "Variables stay private",
                "No global pollution",
                "Secrets protected",
                "Helper functions hidden"
              ]}
              tips={[
                "Use for API keys or config",
                "Perfect for initialization",
                "Keeps global scope clean"
              ]}
            />

            <CodeSnippet
              title="Module Pattern"
              description="Create modules with private state and public API"
              code={`const themeManager = (function () {
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
console.log(themeManager.current()); // dark`}
              language="javascript"
              colorTheme="purple"
              icon={Package}
              features={[
                "Private data",
                "Public methods",
                "Encapsulation",
                "Module pattern"
              ]}
              tips={[
                "Return only what's needed",
                "Hide implementation details",
                "Classic pattern before ES6 modules"
              ]}
            />

            <CodeSnippet
              title="Loop Closures"
              description="Preserve correct values in loops with var"
              code={`// Preserve the right index when using var
for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(() => console.log('Button', index), index * 100);
  })(i);
}

// Output:
// Button 1
// Button 2
// Button 3`}
              language="javascript"
              colorTheme="emerald"
              icon={Zap}
              features={[
                "Fixes closure issues",
                "Preserves loop variables",
                "Works with var",
                "Common pattern"
              ]}
              tips={[
                "Use let/const in modern code",
                "IIFE creates new scope per iteration",
                "Fixes classic setTimeout problem"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns you'll encounter in production applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="DOM Ready Initialization"
              description="Run code when DOM is ready without polluting global scope"
              code={`// Run logic once the DOM is ready
(function (doc) {
  if (doc.readyState === 'complete') {
    console.log('DOM already ready');
  } else {
    doc.addEventListener('DOMContentLoaded', () => {
      console.log('DOM ready, binding events');
    });
  }
})(document);`}
              language="javascript"
              colorTheme="blue"
              icon={Zap}
              features={[
                "Runs on DOM ready",
                "No global variables",
                "Clean initialization",
                "Pass document as param"
              ]}
              tips={[
                "Perfect for script initialization",
                "Keeps window clean",
                "Common in jQuery plugins"
              ]}
            />

            <CodeSnippet
              title="Feature Toggles"
              description="Control features with private flags that can't be tampered with"
              code={`// Feature flag isolated in a private scope
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

feature.run(); // Running beta feature safely`}
              language="javascript"
              colorTheme="emerald"
              icon={Shield}
              features={[
                "Private feature flags",
                "Can't be tampered",
                "Safe beta features",
                "Controlled access"
              ]}
              tips={[
                "Use for A/B testing",
                "Hide experimental code",
                "Better than window.featureFlag"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Variations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Modern Variations
          </CardTitle>
          <CardDescription className="text-base">
            Async and arrow-based IIFEs for flexible, modern syntax
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            <CodeSnippet
              title="Async IIFE"
              description="Use async/await at the top level in non-module scripts"
              code={`// Async IIFE for top-level await style code
(async function () {
  const data = await Promise.resolve(['Ada', 'Lin']);
  console.log('Resolved data:', data);
})();

// Immediately starts fetching data`}
              language="javascript"
              colorTheme="purple"
              icon={Zap}
              features={[
                "Top-level await",
                "Async operations",
                "Promise handling",
                "Non-blocking"
              ]}
              tips={[
                "Perfect for API calls",
                "Use in non-module scripts",
                "Modern async pattern"
              ]}
            />

            <CodeSnippet
              title="Arrow IIFE"
              description="Concise syntax for immediate execution and implicit returns"
              code={`// Arrow function IIFE with implicit return
const config = (() => ({
  env: 'production',
  version: '1.0.0',
}))();

console.log(config.env); // production`}
              language="javascript"
              colorTheme="blue"
              icon={Zap}
              features={[
                "Concise syntax",
                "Implicit return",
                "Modern style",
                "Clean code"
              ]}
              tips={[
                "Great for config objects",
                "Shorter than function keyword",
                "Returns object immediately"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Use IIFEs to initialize libraries or attach event listeners one time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Return only the API you need; keep internals private</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Prefer async IIFEs when replacing long promise chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Document what the IIFE does since it runs immediately</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Nesting many IIFEs unnecessarily—split files or use modules instead</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Relying on IIFEs when ES modules already provide scope isolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Forgetting to pass dependencies explicitly (e.g., window, document)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Mixing IIFEs with hoisted var declarations that you expect globally</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Key Takeaway</AlertTitle>
            <AlertDescription>
              IIFEs are powerful for creating private scopes and avoiding global pollution. While ES6 modules have largely replaced them for modular code, IIFEs remain valuable for script initialization, feature flags, and maintaining backward compatibility.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
    </div>
  );
}
