'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Activity, AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, Merge } from 'lucide-react';

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

const AnimatedMergeScan = () => {
  const [phase, setPhase] = useState<'idle' | 'streaming' | 'complete'>('idle');
  const [history, setHistory] = useState<Array<{ step: string; value: number }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('streaming');
    setHistory([]);
    setLogLines([]);

    const events = [
      { source: 'user', value: 1 },
      { source: 'api', value: 3 },
      { source: 'user', value: 2 },
      { source: 'api', value: 4 },
    ];
    let mergedTotal = 0;

    for (const event of events) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      mergedTotal += event.value;
      setHistory((prev) => [...prev, { step: `${event.source} ${event.value}`, value: mergedTotal }]);
      setLogLines((prev) => [...prev, `mergeScan seen ${event.source} -> total ${mergedTotal}`]);
    }

    setPhase('complete');
    setLogLines((prev) => [...prev, 'mergeScan emitted final state']);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setPhase('idle');
    setHistory([]);
    setLogLines([]);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated mergeScan()
        </CardTitle>
        <CardDescription className="text-base">
          Watch mergeScan merge asynchronous events with a running accumulator and reset when complete.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            mergeScan keeps every inner observable alive while rolling your custom reducer. Replay to see every replayed value.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play animation'}
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Merge className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Ready' : phase === 'streaming' ? 'Streaming' : 'Complete'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              <div className="flex flex-col gap-2">
                {history.length === 0 ? (
                  <span className="text-[11px] text-muted-foreground">// totals appear after each merge</span>
                ) : (
                  history.map((entry, idx) => (
                    <div
                      key={`${entry.step}-${idx}`}
                      className="flex items-center justify-between rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-2 text-[11px] font-semibold border shadow-sm"
                    >
                      <span className="text-slate-500">{entry.step}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{entry.value}</span>
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
                <span className="text-slate-500">// each merge logs a value</span>
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

export default function RxjsMergeScanOperator() {
  const realWorldPaths = useMemo(
    () => [
      { title: 'Pipe progress', description: 'merge user inputs and API confirmations while keeping a running sum of partial results.' },
      { title: 'Concurrency guard', description: 'mergeScan lets you cancel previous inner observables but keep the accumulator intact when combining fetches.' },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Transformation Operators"
        title="mergeScan() - Merge with accumulation"
        description="mergeScan applies an accumulator like scan() but keeps every inner observable active, making it perfect for progressive combination."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why mergeScan is unique
          </CardTitle>
          <CardDescription className="text-base">
            You get both the stateful accumulator of scan() and the concurrent merging of mergeMap(). Results arrive as soon as inner observables emit.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            { title: 'Accumulator + merge', text: 'Each inner observable contributes values while the accumulator tracks overall state.' },
            { title: 'Index-aware', text: 'The accumulator receives the current index so you can treat the first merge differently.' },
            { title: 'Winner of concurrency', text: 'Combine with mergeMap or mergeScan to process parallel tasks yet keep a single state object.' },
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
            mergeScan anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `mergeScan(accumulator, seed, concurrent)` - accumulator receives the accumulated state, the emitted value, and the index.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { mergeScan, interval, of } from 'rxjs';

const clicks$ = interval(400).pipe(
  mergeScan(
    (acc, value) => acc + value,
    0,
  ),
  take(3),
);

clicks$.subscribe((total) => console.log('total', total));

// Output:
// total 0
// total 1
// total 3`}
          </pre>
          <SnippetOutput lines={['total 0', 'total 1', 'total 3']} />
          <Alert>
            <AlertTitle>RxJS 8 update</AlertTitle>
            <AlertDescription>
              mergeScan now returns typed accumulators directly from `rxjs`, and the concurrency parameter accepts numbers to throttle how many
              inner observables run simultaneously.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedMergeScan />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world mergeScan scenarios
          </CardTitle>
          <CardDescription className="text-base">
            Keep the accumulator local while you merge multiple sources that emit partial states.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {realWorldPaths.map((path) => (
              <div key={path.title} className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
                <h4 className="font-semibold text-sm">{path.title}</h4>
                <p className="text-xs text-muted-foreground">{path.description}</p>
                <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
  .pipe(
    mergeScan((state, value) => ({ ...state, ...value }), {}),
  )`}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            mergeScan() vs mergeMap()
          </CardTitle>
          <CardDescription className="text-base">
            Both merge inner streams, but mergeScan also tracks accumulator state between inner emissions.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mergeScan()</p>
            <p className="text-xs text-muted-foreground">
              Combine streams while folding their output into a shared accumulator.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(
  mergeScan((acc, value) => acc + value, 0),
);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mergeMap()</p>
            <p className="text-xs text-muted-foreground">
              Just flattens inner streams without remembering the reduced state.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(
  mergeMap((value) => of(value)),
);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            mergeScan() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>[ok] Keep the accumulator pure and return a new object each time.</li>
              <li>[ok] Seed with your default state to avoid undefined behavior.</li>
              <li>[ok] Use the concurrent parameter to limit side effects when inner streams take time.</li>
              <li>[ok] Combine with tap() when you need to observe inner emissions without mutating the accumulator.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don't mutate the accumulator object or rely on external state.</li>
              <li>X Avoid using mergeScan when scan() is enough and inner concurrency is not required.</li>
              <li>X Never ignore errors inside inner observables - handle them to keep the state valid.</li>
              <li>X Don't chain multiple mergeScan operators; fold logic into a single accumulator when possible.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
