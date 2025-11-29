'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ListChecks, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-indigo-200/60 dark:border-indigo-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-indigo-100/60 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/40 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">
        IO
      </span>
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">
        Output
      </p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-indigo-900 dark:text-indigo-100 whitespace-pre-wrap">
      {lines.join('\n')}
    </pre>
  </div>
);

const AnimatedPluckFlow = () => {
  const [phase, setPhase] = useState<'idle' | 'plucking' | 'complete'>('idle');
  const [history, setHistory] = useState<Array<{ label: string; value: string }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('plucking');
    setHistory([]);
    setLogLines([]);

    const records = [
      { id: 'alpha', feature: 'sync' },
      { id: 'bravo', feature: 'async' },
      { id: 'charlie', feature: 'batch' },
    ];

    const path = ['metadata', 'feature', 'name'];

    for (const record of records) {
      await new Promise((resolve) => setTimeout(resolve, 580));
      const plucked = `${record.feature.toUpperCase()} -> ${record.id}`;
      setHistory((prev) => [...prev, { label: record.id, value: plucked }]);
      setLogLines((prev) => [...prev, `pluck(${path.join(', ')}) -> ${plucked}`]);
    }

    setPhase('complete');
    setLogLines((prev) => [...prev, 'complete']);
    await new Promise((resolve) => setTimeout(resolve, 900));

    setHistory([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  const phaseLabel =
    phase === 'idle' ? 'Ready with property path' : phase === 'plucking' ? 'Applying path' : 'Complete';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated pluck() selector
        </CardTitle>
        <CardDescription className="text-base">
          Re-run after it resets to watch how a deep path always returns the same property instead of the full object.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            <strong>Idea:</strong> pluck() cares about the path, not the structure. It extracts the same field every time, even as the object shape varies.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play pluck() animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">{phaseLabel}</Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              <div className="flex flex-col gap-2">
                {history.length === 0 ? (
                  <span className="text-[11px] text-muted-foreground">// deep path outputs appear here</span>
                ) : (
                  history.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-2 text-[11px] font-semibold border shadow-sm">
                      <span className="text-slate-500">{item.label}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{item.value}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Observer log
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-100 whitespace-pre-wrap">
              {logLines.length === 0 ? (
                <span className="text-slate-500">// console lines stream here</span>
              ) : (
                logLines.map((line, index) => <div key={index}>{line}</div>)
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function RxjsPluckOperator() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ListChecks}
        category="RxJS - Transformation Operators"
        title="pluck() - Pull properties without manual mapping"
        description="pluck() extracts nested properties from objects so subscribers receive only the fields they care about."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why pluck() saves keystrokes
          </CardTitle>
          <CardDescription className="text-base">
            It is a concise alias for a `map()` that immediately returns a nested property, removing boilerplate and keeping pipelines readable.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Minimal code',
              text: 'No need to write `map(obj => obj.user.profile.name)` when `pluck(\"user\", \"profile\", \"name\")` does the job.',
            },
            {
              title: 'River of properties',
              text: 'Works with deep paths exposed as strings, tuples, or spread arguments depending on the call signature.',
            },
            {
              title: 'Auto-typed paths',
              text: 'RxJS 8 typings infer the key path so TypeScript warns when the property is missing or misnamed.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{card.title}</p>
              <p className="text-muted-foreground text-sm">{card.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            pluck() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `pluck(pathArg?, ...)` - pass each property name or an array. It always returns the same property value and completes/errors with the source.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of, pluck } from 'rxjs';

const shipments$ = of(
  { payload: { id: 101, eta: 12 } },
  { payload: { id: 102, eta: 9 } },
  { payload: { id: 103, eta: 17 } },
);

shipments$
  .pipe(pluck('payload', 'eta'))
  .subscribe((eta) => console.log('ETA minutes:', eta));

// Output:
// ETA minutes: 12
// ETA minutes: 9
// ETA minutes: 17`}
          </pre>
          <SnippetOutput lines={['ETA minutes: 12', 'ETA minutes: 9', 'ETA minutes: 17']} />
          <Alert>
            <AlertTitle>RxJS 8 reminder</AlertTitle>
            <AlertDescription>
              `pluck()` is now directly exported from `rxjs` and ships with typed overloads so you no longer need to reach into
              legacy paths from `rxjs/operators`.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedPluckFlow />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world pluck() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Use pluck() when your downstream logic only needs a single field from a richer payload.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">Form updates</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, pluck } from 'rxjs';

const usernameInput = document.querySelector('#username');

fromEvent(usernameInput, 'input')
  .pipe(pluck('target', 'value'))
  .subscribe((value) => updateSuggestions(value));`}
              </pre>
              <SnippetOutput lines={['value=a', 'value=ab', 'value=abc']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">API adapters</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax, pluck } from 'rxjs';

ajax('/api/metrics')
  .pipe(pluck('response', 'metrics', 'count'))
  .subscribe((count) => console.log('visible count', count));`}
              </pre>
              <SnippetOutput lines={['visible count 204']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            pluck() vs map()
          </CardTitle>
          <CardDescription className="text-base">
            Choose pluck() when you only care about a property, map() when you need to compute something new.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <p className="font-semibold">pluck()</p>
            <p className="text-xs text-muted-foreground">
              Shorthand for `map(item => item.path?.value)` - just pass the keys.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(pluck('status')).subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3">
            <p className="font-semibold">map()</p>
            <p className="text-xs text-muted-foreground">
              Use for calculations, formatting, or combining multiple fields.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(map((item) => \`\${item.status} @ \${item.timestamp}\`)).subscribe(console.log);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            pluck() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>check Prefer pluck() when you only surface one field from each object.</li>
              <li>check Spread the property path as arguments so TypeScript tracks each key.</li>
              <li>check Combine with `filter()` or `tap()` before pluck() to skip or log unwanted payloads.</li>
              <li>check Import pluck from `rxjs` to get tree-shakable typed helpers.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don't use pluck() when you need to combine or reformat fields - map() is explicit.</li>
              <li>X Avoid pluck() with deeply nested dynamic keys that should be validated first.</li>
              <li>X Don't forget to handle undefined when the source path is optional; drop into map() when you need fallbacks.</li>
              <li>X Never mutate the plucked value; treat it as read-only output.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
