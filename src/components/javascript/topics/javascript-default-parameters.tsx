'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Zap, Layers, ShieldCheck, Sparkles, RotateCw, AlertTriangle } from 'lucide-react';

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-900/70 shadow-sm">
    <div className="flex items-center gap-2 border-b border-slate-100/60 dark:border-slate-900/40 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-950/50 dark:to-slate-900/70 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-600 text-[10px] font-semibold text-white">
        IO
      </span>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
        Output
      </p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-slate-900 dark:text-slate-100 whitespace-pre-wrap">
      {lines.join('\n')}
    </pre>
  </div>
);

const AnimatedDefaults = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const run = () => {
    const next = count + 1;
    const width = next % 2 === 0 ? undefined : 180;
    const message = formatCard(width, next);
    setLogs((prev) => [message, ...prev].slice(0, 4));
    setCount(next);
  };

  const formatCard = (width?: number, index?: number) => {
    const size = width ?? 120;
    return `Call ${index ?? 0}: size=${size}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <RotateCw className="w-6 h-6 text-indigo-600" />
          Defaults animation
        </CardTitle>
        <CardDescription className="text-base">
          Every click shows how default parameters kick in when arguments are omitted.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button size="sm" onClick={run}>
          Run with missing width
        </Button>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/50">
            <p className="text-[11px] text-muted-foreground">Recent calls</p>
            <div className="space-y-2">
              {logs.length === 0 ? (
                <p className="text-[11px] text-muted-foreground">// logs appear here</p>
              ) : (
                logs.map((line, index) => (
                  <div key={line + index} className="text-[12px] text-slate-900 dark:text-slate-100">
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200/80 dark:border-slate-800/60 p-3 bg-white/80 dark:bg-slate-900/50">
            <p className="text-[11px] text-muted-foreground">Animation snippet</p>
            <pre className="text-[11px] font-mono text-slate-900 dark:text-slate-100">
{`function createCard(width = 120) {
  return { width, color: 'indigo' };
}`}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function JavaScriptDefaultParameters() {
  const sections = useMemo(
    () => [
      {
        title: 'Fallback values',
        text: 'Default parameters let you define fallbacks without extra checks.',
      },
      {
        title: 'Dependent defaults',
        text: 'Later defaults can reference earlier args to mirror derived defaults.',
      },
      {
        title: 'Destructured defaults',
        text: 'Use defaults when destructuring options objects for optional fields.',
      },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="Default Parameters"
        description="Set defaults upfront so your functions stay concise and safe when callers omit arguments."
        colorTheme="blue"
      />

      <Card className="bg-gradient-to-br from-blue-50/70 via-cyan-50/70 to-slate-50 border border-blue-200/50 dark:border-blue-900/30 rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Why defaults matter
          </CardTitle>
          <CardDescription className="text-base">
            Avoid repetitive guard clauses - default parameters give you resilience with minimal code.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{section.title}</p>
              <p className="text-sm text-muted-foreground">{section.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600" />
            Default parameter patterns
          </CardTitle>
          <CardDescription className="text-base">
            Showcases naked defaults, dependent expressions, and destructuring fallbacks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 p-4 space-y-4">
            <h4 className="font-semibold text-sm">Basic defaults</h4>
            <pre className="bg-slate-100 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function greet(name = 'friend') {
  console.log(\`Hello, \${name}!\`);
}

greet();        // Hello, friend!
greet('Ada');   // Hello, Ada!`}
</pre>
          </div>
          <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 p-4 space-y-4">
            <h4 className="font-semibold text-sm">Dependent defaults</h4>
            <pre className="bg-slate-100 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function createBadge(label, size = label.length * 8) {
  return { label, size };
}

console.log(createBadge('Hi')); // size derived from label`}
</pre>
          </div>
          <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 p-4 space-y-4">
            <h4 className="font-semibold text-sm">Destructured defaults</h4>
            <pre className="bg-slate-100 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function configure({ host = 'localhost', port = 80 } = {}) {
  return { host, port };
}`}
</pre>
            <SnippetOutput lines={['configure -> host=localhost', 'configure -> port=80']} />
          </div>
        </CardContent>
      </Card>

      <AnimatedDefaults />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            Real-world defaults
          </CardTitle>
          <CardDescription className="text-base">
            Apply defaults in API calls, math helpers, and UI utilities for safer invocations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 p-4 space-y-3">
              <h4 className="font-semibold text-sm">API options</h4>
              <pre className="bg-slate-100 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function fetchData(url, { method = 'GET', signal } = {}) {
  return fetch(url, { method, signal });
}`}
</pre>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Resilient math</h4>
              <pre className="bg-slate-100 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`function sum(a = 0, b = 0) {
  return a + b;
}`}
</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-lime-50/60 border border-emerald-200/60 dark:border-emerald-800/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-rose-600" />
            Default parameter best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li>- Use defaults when the caller should rarely provide a value.</li>
            <li>- Avoid heavy expressions inside defaults; compute outside when expensive.</li>
            <li>- Combine default objects with destructuring to guard against undefined options.</li>
            <li>- Name defaults clearly so logs show why values were filled in.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
