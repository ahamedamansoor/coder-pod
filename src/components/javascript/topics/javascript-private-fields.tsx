'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Shield,
  Lock,
  EyeOff,
  Layers,
  Cpu,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptPrivateFieldsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/90 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/20 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Private Fields Demo</title>
  <style>
    body { display:flex; align-items:center; justify-content:center; min-height:100vh; background:#0f172a; color:#e2e8f0; font-family:'Inter',system-ui; }
    .panel { text-align:center; padding:40px 32px; background:rgba(15,23,42,0.6); border:1px solid rgba(226,232,240,0.2); border-radius:24px; max-width:540px; }
    h1 { font-size:28px; margin-bottom:12px; }
    p { color:#cbd5f5; font-size:16px; }
    .hint { margin-top:18px; padding:12px; border-radius:12px; background:#020617; font-family:monospace; font-size:14px; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>Private Fields</h1>
    <p>Open the browser console to watch encapsulation in action.</p>
    <div class="hint">Press F12 / Cmd+Option+J</div>
  </div>
  <script src="./private-fields-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Private Fields Playground ===');

class FeatureFlagStore {
  #flags = new Map();
  #activeCount = 0;

  enable(key) {
    this.#flags.set(key, true);
    this.#activeCount++;
  }

  disable(key) {
    if (this.#flags.get(key)) {
      this.#activeCount--;
    }
    this.#flags.set(key, false);
  }

  get summary() {
    return this.#activeCount + ' active flags';
  }
}

const store = new FeatureFlagStore();
store.enable('beta-dashboard');
store.enable('faster-sync');
console.log(store.summary);

try {
  // @ts-ignore
  console.log(store.#flags);
} catch (error) {
  console.log('Direct access blocked ->', error.message);
}
`;

export default function JavaScriptPrivateFields({ onOpenWebPlayground }: JavaScriptPrivateFieldsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript · Object-Oriented"
        title="Private Fields (#)"
        description="Lock down class state with `#` fields, private accessors, and hard privacy guarantees introduced in ES2022."
        colorTheme="blue"
      />

      <Card className="bg-gradient-to-br from-blue-50/70 via-indigo-50/70 to-cyan-50/60 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-cyan-950/10 border border-blue-200/40 dark:border-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lock className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why private fields?
          </CardTitle>
          <CardDescription className="text-base">
            They provide true encapsulation enforced by the language—not conventions. Perfect for hiding tokens, caches, or derived state in modern class-based code.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Hard privacy', text: 'Members start with # and are only accessible inside the class body.' },
            { title: 'Zero runtime hacks', text: 'No proxies or closures needed—engines enforce access rules.' },
            { title: 'Plays with tooling', text: 'TypeScript, Babel, and modern browsers support # fields & methods.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/95 dark:bg-slate-900/80 p-4 space-y-2">
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">{item.title}</Badge>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Anatomy of a private class
          </CardTitle>
          <CardDescription className="text-base">
            Declare with `#field`, initialize once, and interact via public methods or accessors.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
            <h4 className="font-semibold mb-2">Starter template</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class Counter {
  #value = 0;
  #history = [];

  increment() {
    this.#history.push(this.#value);
    this.#value++;
  }

  get current() {
    return this.#value;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.current);`}</pre>
            <SnippetOutput lines={['counter.current -> 1']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4">
            <h4 className="font-semibold mb-2">Mix with private methods</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class Secrets {
  #token = crypto.randomUUID();
  #log(message) {
    console.log('[internal]', message);
  }

  rotate() {
    this.#token = crypto.randomUUID();
    this.#log('token rotated');
  }

  get tokenPreview() {
    return this.#token.slice(0, 6) + '...';
  }
}`}</pre>
            <SnippetOutput lines={['secret.tokenPreview -> "a1b2c3..."']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Cpu className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Field patterns & use cases
          </CardTitle>
          <CardDescription className="text-base">
            Three everyday patterns developers rely on private fields to solve.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <Badge variant="secondary" className="mb-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              Cached computations
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class Report {
  #raw = [];
  #cachedTotal = null;

  addLine(line) {
    this.#raw.push(line);
    this.#cachedTotal = null;
  }

  get total() {
    if (this.#cachedTotal === null) {
      this.#cachedTotal = this.#raw.reduce((sum, line) => sum + line.amount, 0);
    }
    return this.#cachedTotal;
  }
}`}</pre>
            <SnippetOutput lines={['report.total -> recomputed only when needed']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <Badge variant="secondary" className="mb-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
              DOM bindings
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class TooltipController {
  #element;
  #visible = false;

  constructor(el) {
    this.#element = el;
  }

  show(text) {
    this.#visible = true;
    this.#element.textContent = text;
  }
}`}</pre>
            <SnippetOutput lines={['Visibility stays private; DOM node cannot leak']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <Badge variant="secondary" className="mb-2 bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200">
              Static private utilities
            </Badge>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class Ticket {
  static #seed = 6000;
  #id = Ticket.#seed++;

  get id() {
    return 'TCK-' + this.#id;
  }
}`}</pre>
            <SnippetOutput lines={['new Ticket().id -> "TCK-6000"']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-world mini projects
          </CardTitle>
          <CardDescription className="text-base">
            Two practical flows you can lift into production.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-2">API client</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class ApiClient {
  #baseUrl;
  #token;

  constructor(baseUrl, token) {
    this.#baseUrl = baseUrl;
    this.#token = token;
  }

  async get(path) {
    const res = await fetch(this.#baseUrl + path, {
      headers: { Authorization: 'Bearer ' + this.#token },
    });
    return res.json();
  }

  rotateToken(next) {
    this.#token = next;
  }
}`}</pre>
            <SnippetOutput lines={['Sensitive token never leaves the class']} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-2">Form state manager</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono overflow-x-auto border">{`class SignupForm {
  #fields = new Map();
  #errors = new Map();

  setField(name, value) {
    this.#fields.set(name, value.trim());
  }

  validate() {
    this.#errors.clear();
    if (!this.#fields.get('email')?.includes('@')) {
      this.#errors.set('email', 'Enter a valid email');
    }
    return this.#errors.size === 0;
  }

  get summary() {
    return {
      filled: [...this.#fields.keys()],
      errors: [...this.#errors.entries()],
    };
  }
}`}</pre>
            <SnippetOutput lines={['signup.summary -> exposes sanitized snapshot only']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <EyeOff className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Best practices & pitfalls
          </CardTitle>
          <CardDescription className="text-base">
            Keep code predictable by following these do’s and don’ts.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <Alert className="bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/40">
            <AlertTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Do this
            </AlertTitle>
            <AlertDescription className="text-sm space-y-2">
              <p>• Mirror each private field with clear public APIs (methods or getters).</p>
              <p>• Prefer readonly getters for derived data instead of exposing raw structures.</p>
              <p>• Combine with TypeScript readonly modifiers for extra guarantees.</p>
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" className="border-red-200 dark:border-red-900/40">
            <AlertTitle className="flex items-center gap-2 text-base">
              <XCircle className="w-4 h-4" />
              Avoid this
            </AlertTitle>
            <AlertDescription className="text-sm space-y-2">
              <p>• Mixing #fields with prototype extensions—they remain invisible; use class syntax only.</p>
              <p>• Attempting reflection: `Object.keys`, `JSON.stringify`, and destructuring skip private data.</p>
              <p>• Reassigning private methods outside class—they are not properties on `this`.</p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border border-blue-200/60 dark:border-blue-900/30 bg-white/95 dark:bg-slate-950/70">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-base">
            Launch the standard CODER POD playground to experiment with `#` fields, methods, and accessors.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
          <Button
            onClick={() => onOpenWebPlayground?.(playgroundHtml, '', playgroundJs)}
            className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
          >
            Run in playground
          </Button>
          <p className="text-sm text-muted-foreground">
            The console output highlights strict access errors, derived summaries, and how private counters reset themselves.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

