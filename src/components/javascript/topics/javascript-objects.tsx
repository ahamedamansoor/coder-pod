'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Boxes,
  Sparkles,
  Layers,
  Columns,
  Database,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
} from 'lucide-react';

interface JavaScriptObjectsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
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
  <title>Objects Demo</title>
  <style>
    body { font-family: 'Inter', system-ui; background: #f1f5f9; color: #0f172a; padding: 24px; }
    .panel { max-width: 720px; margin: 0 auto; border-radius: 16px; border: 1px solid #e2e8f0; background: #fff; padding: 28px; }
    pre { background: #0f172a; color: #e2e8f0; padding: 12px; border-radius: 10px; overflow-x: auto; }
  </style>
</head>
<body>
  <div class="panel">
    <h1>JavaScript Objects</h1>
    <p>Open DevTools console to see each snippet log key/value pairs.</p>
    <pre id="summary"></pre>
  </div>
  <script src="./objects-demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();

const user = { name: 'Ada', plan: 'pro' };
console.log('user:', user);

const updated = { ...user, plan: 'enterprise', active: true };
console.log('spread update:', updated);

const { name, plan } = updated;
console.log('destructured ->', name, plan);

const summary = [
  'user.plan -> ' + user.plan,
  'updated.active -> ' + updated.active,
  'destructured -> ' + name + ', ' + plan
].join('\n');

document.getElementById('summary').textContent = summary;
`;

export default function JavaScriptObjects({ onOpenWebPlayground }: JavaScriptObjectsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Boxes}
        category="JavaScript · Arrays & Objects"
        title="Objects"
        description="Store related data as key-value pairs and model everything from users to configuration."
        colorTheme="blue"
      />

      <Card className="bg-gradient-to-br from-blue-50/70 via-cyan-50/60 to-emerald-50/60 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-emerald-950/10 border border-blue-200/40 dark:border-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Objects Matter
          </CardTitle>
          <CardDescription className="text-base">Objects capture properties, methods, and relationships in one tidy literal.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Flexible shape', text: 'Add/remove properties anytime—great for configurations.' },
            { label: 'Readable', text: 'Use descriptive keys instead of relying on array positions.' },
            { label: 'Interoperable', text: 'JSON, APIs, frameworks—all lean on objects.' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <Badge className="bg-blue-100/70 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">{item.label}</Badge>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Columns className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Anatomy of an Object Literal
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Structure',
              snippet: `const person = {
  name: 'Ada',
  age: 32,
  skills: ['JS', 'Python'],
};`,
              output: ['person.name -> Ada', "person.skills[0] -> 'JS'"]
            },
            {
              title: 'Methods',
              snippet: `const counter = {
  value: 0,
  inc() {
    this.value += 1;
    return this.value;
  }
};`,
              output: ['counter.inc() -> 1', 'counter.value -> 1']
            },
          ].map(({ title, snippet, output }) => (
            <div key={title} className="rounded-xl border bg-white dark:bg-gray-900 p-4">
              <h4 className="font-semibold mb-2">{title}</h4>
              <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{snippet}</pre>
              <SnippetOutput lines={output} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/40 to-blue-50/40 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/40 dark:border-indigo-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Common Operations
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Create & update</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const settings = {};
settings.theme = 'dark';
settings['layout'] = 'grid';
const copy = { ...settings, layout: 'stack' };`}</pre>
            <SnippetOutput lines={["settings.theme -> 'dark'", "copy.layout -> 'stack'"]} />
          </div>
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-4 space-y-3">
            <h4 className="font-semibold">Destructure + defaults</h4>
            <pre className="bg-slate-50 dark:bg-slate-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const config = { host: 'localhost', port: 3000 };
const { host, port, protocol = 'https' } = config;`}</pre>
            <SnippetOutput lines={["host -> 'localhost'", 'protocol -> https']} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Real-World Patterns
          </CardTitle>
          <CardDescription className="text-base">Objects tie together data from APIs, UI state, and storage.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> API Payload</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const payload = {
  id: 'user_1',
  roles: ['admin'],
  preferences: { theme: 'dark' }
};

console.log(payload.preferences.theme);`}</pre>
            <SnippetOutput lines={["payload.preferences.theme -> 'dark'"]} />
          </div>
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Map form inputs</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const formData = Object.fromEntries(new FormData(form));`}</pre>
            <p className="text-sm text-muted-foreground mt-2">Turn key-value pairs into an object for easier validation.</p>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-600" /> Local storage snapshots</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const userSettings = JSON.parse(localStorage.getItem('settings')) || {};`}</pre>
            <p className="text-sm text-muted-foreground mt-2">Convert between JSON strings and objects seamlessly.</p>
          </div>
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-950/10 dark:to-orange-950/10 rounded-xl border border-amber-200/50">
            <h4 className="font-semibold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Router params</h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">{`const params = new URLSearchParams('?sort=asc&page=2');
const options = Object.fromEntries(params);`}</pre>
            <SnippetOutput lines={["options -> { sort: 'asc', page: '2' }"]} />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-emerald-950/10 border border-emerald-200/40 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Do This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✅ Freeze config-like objects (`Object.freeze`) to prevent accidental changes.</li>
              <li>✅ Prefer dot access for known keys and bracket access for dynamic keys.</li>
              <li>✅ Document nested shapes or use TypeScript/interfaces for clarity.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-300"><XCircle className="w-5 h-5" /> Avoid This</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>❌ Mutating shared objects across components without copying.</li>
              <li>❌ Using objects as maps without checking key existence (`hasOwnProperty`).</li>
              <li>❌ Nesting too deeply—consider flattening or using helper functions.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Practice Working with Objects
          </CardTitle>
          <CardDescription className="text-base">Run the playground and view logs for spreads, destructuring, and cloning.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg overflow-hidden border bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-blue-100 dark:bg-blue-900/30">
              <span className="uppercase tracking-wide text-blue-700 dark:text-blue-300">objects-demo.js</span>
              <span className="text-blue-600/70 dark:text-blue-400/70">Spread + destructuring</span>
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
