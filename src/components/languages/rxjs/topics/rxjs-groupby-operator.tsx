'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, Table2 } from 'lucide-react';

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

const AnimatedGroupBy = () => {
  const [phase, setPhase] = useState<'idle' | 'grouping' | 'done'>('idle');
  const [groups, setGroups] = useState<Record<string, number[]>>({});
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('grouping');
    setGroups({});
    setLogLines([]);

    const values = [
      { id: 1, score: 12 },
      { id: 2, score: 20 },
      { id: 3, score: 7 },
      { id: 4, score: 20 },
      { id: 5, score: 12 },
    ];

    for (const value of values) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      const key = value.score >= 15 ? 'high' : 'low';
      setGroups((prev) => ({
        ...prev,
        [key]: [...(prev[key] || []), value.score],
      }));
      setLogLines((prev) => [...prev, `groupBy -> ${key} includes ${value.score}`]);
    }

    setPhase('done');
    setLogLines((prev) => [...prev, 'complete']);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setGroups({});
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  const phaseLabel = phase === 'idle' ? 'Idle' : phase === 'grouping' ? 'Grouping' : 'Emitted';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated groupBy()
        </CardTitle>
        <CardDescription className="text-base">
          groupBy() creates separate streams per key; this demo highlights the high/low split and resets for each replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            Every new score is routed to the high or low group. Press play to see how the buckets fill and the animation resets.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play animation'}
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Table2 className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">{phaseLabel}</Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              {Object.keys(groups).length === 0 ? (
                <span className="text-[11px] text-muted-foreground">// groups appear as scores arrive</span>
              ) : (
                Object.entries(groups).map(([key, groupValues]) => (
                  <div key={key} className="flex items-center justify-between rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-2 text-[11px] font-semibold border shadow-sm">
                    <span className="text-slate-500">{key}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{groupValues.join(', ')}</span>
                  </div>
                ))
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
                <span className="text-slate-500">// each grouped emission logs here</span>
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

const sampleStream = ['alpha', 'beta', 'gamma', 'delta'];

export default function RxjsGroupByOperator() {
  const grouped = useMemo(() => {
    return sampleStream.reduce<Record<string, number>>((acc, value, index) => {
      const bucket = value.length % 2 === 0 ? 'even' : 'odd';
      acc[bucket] = (acc[bucket] || 0) + index + 1;
      return acc;
    }, {});
  }, []);

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Transformation Operators"
        title="groupBy() - Split streams by key"
        description="groupBy() partitions a stream into multiple Observables based on the key selector you provide."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why groupBy() separates keys
          </CardTitle>
          <CardDescription className="text-base">
            Each key produces its own Observable. Subscribers can act on each group independently while the source keeps emitting.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            { title: 'Per-key streams', text: 'Every key gets a dedicated Observable you can merge, switchMap, or reduce separately.' },
            { title: 'Lazy evaluation', text: 'Groups stay alive until they complete even if new keys arrive later.' },
            { title: 'Key selectors', text: 'Pass functions, values, or combinations to map values to keys.' },
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
            groupBy() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `groupBy(keySelector, elementSelector?, durationSelector?)` returns grouped Observables that you can merge, switch, or reduce.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from, groupBy, mergeMap, toArray } from 'rxjs';

const numbers$ = from([1, 2, 3, 4, 5, 6]);

numbers$
  .pipe(
    groupBy((value) => (value % 2 === 0 ? 'even' : 'odd')),
    mergeMap((group) => group.pipe(toArray())),
  )
  .subscribe((groupArray) => console.log(groupArray));

// Output:
// [1, 3, 5]
// [2, 4, 6]`}
          </pre>
          <SnippetOutput lines={['[1, 3, 5]', '[2, 4, 6]']} />
          <Alert>
            <AlertTitle>RxJS 8 detail</AlertTitle>
            <AlertDescription>
              `groupBy()` now ships from the root package with typed keys and optional selectors, so IDEs surface the key type automatically.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedGroupBy />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world groupBy patterns
          </CardTitle>
          <CardDescription className="text-base">
            Group events by user, priority, or type and then reduce the grouped Observables.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">User channel</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
  .pipe(
    groupBy((event) => event.userId),
    mergeMap((group) => group.pipe(toArray())),
  )
  .subscribe((events) => handleBatch(events));`}
              </pre>
              <SnippetOutput lines={['handleBatch events']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Priority buckets</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
  .pipe(
    groupBy((event) => event.priority),
    mergeMap((group) => group.pipe(toArray())),
  )
  .subscribe((bucket) => routePriority(bucket));`}
              </pre>
              <SnippetOutput lines={['routePriority bucket']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            groupBy() vs partition()
          </CardTitle>
          <CardDescription className="text-base">
            Both split streams by condition, but groupBy gives you Observables per key while partition returns only two streams.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">groupBy()</p>
            <p className="text-xs text-muted-foreground">
              Emit any number of groups identified by the key, then merge or handle them individually.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(groupBy((item) => item.type))`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">partition()</p>
            <p className="text-xs text-muted-foreground">
              Divide into two Observable streams based on a predicate.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`partition(source$, (item) => item.isActive)`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            groupBy() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Provide a key selector that returns primitive values for predictable grouping.</li>
              <li>Close groups by completing them via durationSelector or takeUntil.</li>
              <li>Merge groups with mergeMap or combineLatest depending on ordering needs.</li>
              <li>Handle group errors; unsubscribe individual groups to avoid leaks.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don't forget to unsubscribe groups when the parent completes to avoid retained Observables.</li>
              <li>X Avoid returning complex objects as keys; stick to strings or numbers.</li>
              <li>X Don't ignore errors inside group streams; handle them individually.</li>
              <li>X Avoid using groupBy for simple dual partitions; use partition() instead.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
