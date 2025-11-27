'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, Grid } from 'lucide-react';

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

const AnimatedToArrayCollector = () => {
  const [phase, setPhase] = useState<'idle' | 'collecting' | 'complete'>('idle');
  const [collected, setCollected] = useState<string[]>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('collecting');
    setCollected([]);
    setLogLines([]);

    const items = ['alpha', 'beta', 'gamma', 'delta'];

    for (const item of items) {
      await new Promise((resolve) => setTimeout(resolve, 520));
      setCollected((prev) => [...prev, item]);
      setLogLines((prev) => [...prev, `collected ${item}`]);
    }

    setPhase('complete');
    setLogLines((prev) => [...prev, 'toArray() emitted']);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setPhase('idle');
    setCollected([]);
    setLogLines([]);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated toArray()
        </CardTitle>
        <CardDescription className="text-base">
          Play to see how toArray() collects values until completion and then emits the full array once.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            toArray() buffers every emission until completion and returns them as an array. The animation resets after each run.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play toArray() animation'}
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Grid className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Waiting' : phase === 'collecting' ? 'Collecting' : 'Emitted'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              {collected.length === 0 ? (
                <span className="text-[11px] text-muted-foreground">// buffered array shows here after completion</span>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {collected.map((value) => (
                    <span key={value} className="rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-1 text-xs font-semibold border shadow-sm">
                      {value}
                    </span>
                  ))}
                </div>
              )}
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
                <span className="text-slate-500">// logs track each emission</span>
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

const useObjectSnapshot = (items: Array<Record<string, unknown>>) =>
  useMemo(
    () =>
      items.map((item, index) => ({
        label: `object ${index + 1}`,
        snapshot: JSON.stringify(item),
      })),
    [items],
  );

export default function RxjsToArrayOperator() {
  const snapshots = useObjectSnapshot([
    { id: 1, status: 'draft' },
    { id: 2, status: 'review' },
    { id: 3, status: 'published' },
  ]);

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Transformation Operators"
        title="toArray() - Buffer everything until completion"
        description="toArray() waits for the source to complete, then emits a single array that contains every value it saw."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why toArray() collects
          </CardTitle>
          <CardDescription className="text-base">
            Some flows need the complete dataset before they can proceed - download files, report aggregates, or prepare fixtures.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Single emission',
              text: 'Unlike scan(), toArray() emits once after completion, so components stay synchronous with finished data.',
            },
            {
              title: 'Buffering safe',
              text: 'Retains the ordered sequence of inputs, even when the source is asynchronous.',
            },
            {
              title: 'Great for tests',
              text: 'Collect responses or mock data so you can assert on the entire payload with one snapshot.',
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
            toArray() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `toArray()` subscribes, buffers each emission, waits for completion, and emits the collected array as a single value.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, toArray } from 'rxjs';

fromEvent(document, 'click')
  .pipe(toArray())
  .subscribe((events) => console.log('click batch', events.length));

// Output when the user clicks three times before unload:
// click batch 3`}
          </pre>
          <SnippetOutput lines={['click batch 3']} />
          <Alert>
            <AlertTitle>RxJS 8 reminder</AlertTitle>
            <AlertDescription>
              `toArray()` now ships from the root package with consistent typings, so modern bundlers tree-shake the helper alongside
              other core operators.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedToArrayCollector />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world toArray() patterns
          </CardTitle>
          <CardDescription className="text-base">
            Buffering all values is helpful for reports, fixtures, or telemetry bursts where order matters.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Reporting snapshot</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { ajax, toArray } from 'rxjs';

ajax('/api/metrics')
  .pipe(toArray())
  .subscribe((allResponses) => console.log(allResponses.length));`}
              </pre>
              <SnippetOutput lines={['2']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Fixture builder</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from, toArray } from 'rxjs';

from([snapshots[0], snapshots[1]])
  .pipe(toArray())
  .subscribe((rows) => saveFixtures(rows));`}
              </pre>
              <SnippetOutput lines={['saveFixtures 2 rows']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            toArray() vs reduce()
          </CardTitle>
          <CardDescription className="text-base">
            Both wait for completion, but toArray() returns the actual array while reduce() returns whatever your accumulator produces.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">toArray()</p>
            <p className="text-xs text-muted-foreground">
              Great when you need the raw array for assertion or mass updates.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(toArray()).subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">reduce()</p>
            <p className="text-xs text-muted-foreground">
              Use when you want to average, sum, or shape a final value.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(reduce((acc, value) => acc + value, 0)).subscribe(console.log);`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            toArray() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>[ok] Use toArray() when you need the whole payload before updating the UI.</li>
              <li>[ok] Chain with take or first when working with infinite or long-lived sources.</li>
              <li>[ok] Combine with tap() before toArray() for logging the streaming values without flushing them early.</li>
              <li>[ok] Import toArray from `rxjs` to keep typings strict.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don't use toArray() on infinite streams without take; it will never emit.</li>
              <li>X Avoid keeping huge buffers in memory; drop toArray() when you only need a slice.</li>
              <li>X Don't mutate the array after emission; treat it as read-only output.</li>
              <li>X Avoid using toArray() when you already have a collection; it only collects values once.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
