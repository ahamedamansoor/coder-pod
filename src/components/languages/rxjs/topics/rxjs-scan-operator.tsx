'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, TrendingUp } from 'lucide-react';

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

const AnimatedScanAccumulator = () => {
  const [phase, setPhase] = useState<'idle' | 'running' | 'complete'>('idle');
  const [history, setHistory] = useState<Array<{ event: string; total: number }>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('running');
    setHistory([]);
    setLogLines([]);

    const inputs = [
      { event: 'order', value: 18 },
      { event: 'refund', value: -5 },
      { event: 'order', value: 12 },
      { event: 'order', value: 8 },
    ];
    let total = 0;

    for (const input of inputs) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      total += input.value;
      setHistory((prev) => [...prev, { event: input.event, total }]);
      setLogLines((prev) => [...prev, `scan() accumulated ${total}`]);
    }

    setPhase('complete');
    setLogLines((prev) => [...prev, 'complete']);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setHistory([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  const phaseLabel =
    phase === 'idle' ? 'Awaiting events' : phase === 'running' ? 'Accumulating totals' : 'Finalized';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated scan() accumulator
        </CardTitle>
        <CardDescription className="text-base">
          Press play to see how scan() keeps a running total and resets itself so you can watch it again.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            scan() remembers state between emissions. The demo shows how each new event updates a total instead of replacing it.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play scan() animation'}
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
                  <span className="text-[11px] text-muted-foreground">// totals show up here</span>
                ) : (
                  history.map((entry, index) => (
                    <div
                      key={`${entry.event}-${index}`}
                      className="flex items-center justify-between rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-2 text-[11px] font-semibold border shadow-sm"
                    >
                      <span className="text-slate-500">{entry.event}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{entry.total}</span>
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
                <span className="text-slate-500">// console output streams here</span>
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

export default function RxjsScanOperator() {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={TrendingUp}
        category="RxJS - Transformation Operators"
        title="scan() - Build running totals and accumulators"
        description="scan() keeps track of previous emissions, letting you compute running scores, state diffs, or aggregated events."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why scan() is the incremental engine
          </CardTitle>
          <CardDescription className="text-base">
            Every emission provides the previous accumulator plus the new value, so you can implement scoring, counters, or state transitions with a single operator.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {[
            {
              title: 'Stateful streams',
              text: 'scan() holds the accumulator for you, eliminating external variables and keeping the pipeline functional.',
            },
            {
              title: 'Custom reducers',
            text: 'You decide what to keep - nested objects, maps, arrays, or even custom classes are all valid accumulators.',
            },
            {
              title: 'Partial emits',
              text: 'Pair with take, filter, or sample to emit snapshots at the right cadence without losing the history.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            Anatomy of scan()
          </CardTitle>
          <CardDescription className="text-base">
            `scan(accumulator, seed)` - each emission feeds into accumulator along with the previous result. The seed seeds the first call.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { interval, map, scan, take } from 'rxjs';

interval(1000)
  .pipe(
    take(4),
    scan((sum, value) => sum + value, 0),
    map((running) => \`running sum: \${running}\`),
  )
  .subscribe(console.log);

// Output:
// running sum: 0
// running sum: 1
// running sum: 3
// running sum: 6`}
          </pre>
          <SnippetOutput
            lines={['running sum: 0', 'running sum: 1', 'running sum: 3', 'running sum: 6']}
          />
          <Alert>
            <AlertTitle>RxJS 8 detail</AlertTitle>
            <AlertDescription>
              `scan()` now ships from the root package with improved typings; the accumulator function receives both the current
              value and the index, so you can react differently on early emissions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedScanAccumulator />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world scan() patterns
          </CardTitle>
          <CardDescription className="text-base">
            scan() shines whenever you need to keep incremental state inside a stream without external files or refs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Progress tracker</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from, scan } from 'rxjs';

const steps$ = from([10, 30, 40]);

steps$
  .pipe(
    scan((acc, step) => acc + step, 0),
  )
  .subscribe((total) => updateProgress(total));`}
              </pre>
              <SnippetOutput lines={['updateProgress 10', 'updateProgress 40', 'updateProgress 80']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">State diffs for stores</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { scan, of } from 'rxjs';

of(
  { counter: 1 },
  { counter: 3 },
  { counter: 2 },
)
  .pipe(
    scan((state, change) => ({ ...state, counter: change.counter }), { counter: 0 }),
  )
  .subscribe((state) => console.log('store', state));`}
              </pre>
              <SnippetOutput lines={['store { counter: 1 }', 'store { counter: 3 }', 'store { counter: 2 }']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            scan() vs reduce()
          </CardTitle>
          <CardDescription className="text-base">
            Use scan() when you need intermediate values; reduce() only emits at completion.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">scan()</p>
            <p className="text-xs text-muted-foreground">
              Emits after every accumulation so the UI can react in real time.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(scan((acc, value) => acc + value, 0)).subscribe(console.log);`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">reduce()</p>
            <p className="text-xs text-muted-foreground">
              Waits for completion before emitting the final value.
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
            scan() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Seed scan() with a safe starting value to avoid undefined.</li>
              <li>Keep the accumulator pure so you can test it independently.</li>
              <li>Pair with filter or take to trim the stream where you only need certain snapshots.</li>
              <li>Import scan from `rxjs` for better tree shaking.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Do not mutate the accumulator; always return a new object when storing state.</li>
              <li>X Avoid huge accumulators that grow without bounds; flush them with take or filter.</li>
              <li>X Do not mix scan() with external mutable variables; let it own the state.</li>
              <li>X Avoid calling scan() when you only care about the last value; reduce() is simpler.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
