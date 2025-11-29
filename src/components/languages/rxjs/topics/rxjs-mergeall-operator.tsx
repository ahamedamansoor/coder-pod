'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, Layers as LayersIcon } from 'lucide-react';

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

const AnimatedMergeAll = () => {
  const [phase, setPhase] = useState<'idle' | 'flattening' | 'finished'>('idle');
  const [log, setLog] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<number[]>([]);
  const [innerStates, setInnerStates] = useState<
    Array<{ id: number; status: 'queued' | 'running' | 'done'; progress: number }>
  >([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const run = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('flattening');
    setLog(['mergeAll subscribes to every inner stream']);
    const sources = [1, 2, 3];
    setInnerStates(sources.map((value) => ({ id: value, status: 'queued', progress: 0 })));
    setOutputs([]);
    setLog((prev) => [...prev, `launching ${sources.length} inner observers`]);

    await Promise.all(
      sources.map(async (value) => {
        setInnerStates((prev) =>
          prev.map((state) =>
            state.id === value ? { ...state, status: 'running' } : state,
          ),
        );
        setLog((prev) => [...prev, `inner ${value} starting`]);

        for (let step = 0; step < 4; step += 1) {
          await new Promise((resolve) => setTimeout(resolve, 300 + step * 100));
          setInnerStates((prev) =>
            prev.map((state) =>
              state.id === value
                ? { ...state, progress: Math.min(((step + 1) / 4) * 100, 100) }
                : state,
            ),
          );
          const emittedValue = value * 10 + step;
          setOutputs((prev) => [...prev, emittedValue]);
          setLog((prev) => [...prev, `inner ${value} emits ${emittedValue}`]);
        }

        setInnerStates((prev) =>
          prev.map((state) =>
            state.id === value ? { ...state, status: 'done', progress: 100 } : state,
          ),
        );
        setLog((prev) => [...prev, `inner ${value} complete`]);
      }),
    );

    setPhase('finished');
    setLog((prev) => [...prev, 'mergeAll completed all streams']);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setInnerStates([]);
    setOutputs([]);
    setLog([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated mergeAll()
        </CardTitle>
        <CardDescription className="text-base">
          mergeAll keeps all concurrent inner observables active while merging their emissions into one stream.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button size="sm" disabled={isPlaying} onClick={run}>
          {isPlaying ? 'Flattening...' : 'Play mergeAll animation'}
        </Button>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <LayersIcon className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Idle' : phase === 'flattening' ? 'Flattening' : 'Finished'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700">
              <p className="text-xs text-muted-foreground">
                {innerActive === 0 ? 'No active inner streams' : `${innerActive} inner stream(s) running`}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Event log
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-100 whitespace-pre-wrap">
              {log.length === 0 ? (
                <span className="text-slate-500">// events appear here</span>
              ) : (
                log.map((entry, index) => (
                  <div key={`${entry}-${index}`} className="text-slate-200">
                    {entry}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-indigo-600" />
                Outputs
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border border-emerald-200/60 dark:border-emerald-700 text-[11px] font-mono text-slate-900 dark:text-emerald-100 flex flex-wrap gap-2">
              {output.length === 0 ? (
                <span className="text-[11px] text-muted-foreground">// merged output values appear here</span>
              ) : (
                output.map((value, index) => (
                  <span
                    key={`${value}-${index}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-700"
                  >
                    {value}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
.pipe(
  mergeAll(),
)
.subscribe((value) => console.log('mergeAll output', value));`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsMergeAllOperator() {
  const highlights = useMemo(
    () => [
      {
        title: 'Flatten many streams',
        text: 'mergeAll turns a higher-order stream into a flat stream by merging inner emissions concurrently.',
      },
      {
        title: 'Useful for arrays of observables',
        text: 'Use mergeAll when you already have an observable of inner observables to flatten.',
      },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Flattening Operators"
        title="mergeAll() - Merge everything"
        description="mergeAll subscribes to every inner observable and forwards their values as they arrive."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-slate-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-slate-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why mergeAll matters
          </CardTitle>
          <CardDescription className="text-base">
            mergeAll flattens higher-order observables by subscribing eagerly to every inner inner stream.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {highlights.map((item) => (
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
            mergeAll anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `mergeAll(concurrency?)` flattens a stream of observables; supply a concurrency limit to control how many inner subscriptions run together.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { from, mergeAll, delay } from 'rxjs';

const higher$ = from([of(1).pipe(delay(100)), of(2).pipe(delay(200))]);

higher$
  .pipe(mergeAll())
  .subscribe((value) => console.log(value));`}
          </pre>
          <SnippetOutput lines={['1', '2']} />
          <Alert>
            <AlertTitle>RxJS 8 reminder</AlertTitle>
            <AlertDescription>
              `mergeAll()` now imports directly from `rxjs` and supports typed concurrency so TypeScript infers the merged value.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedMergeAll />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world mergeAll flows
          </CardTitle>
          <CardDescription className="text-base">
            Useful for flattening arrays of requests, timers, or event emitters into a single stream.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Batch requests</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`from(batchRequests)
  .pipe(mergeAll(3))
  .subscribe((response) => console.log('response', response));`}
              </pre>
              <SnippetOutput lines={['response 1', 'response 2']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Timers bouquet</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`from([timer(0), timer(200), timer(400)])
  .pipe(mergeAll())
  .subscribe((tick) => console.log('tick', tick));`}
              </pre>
              <SnippetOutput lines={['tick 0', 'tick 1', 'tick 2']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            mergeAll() vs mergeMap()
          </CardTitle>
          <CardDescription className="text-base">
            mergeAll flattens a stream of observables; mergeMap maps values to inner observables inline.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mergeAll()</p>
            <p className="text-xs text-muted-foreground">
              Requires an observable of observables.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`higher$.pipe(mergeAll());`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mergeMap()</p>
            <p className="text-xs text-muted-foreground">
              Maps each value to an inner observable directly.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(mergeMap((value) => fetch(value)));`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            mergeAll() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Pass a concurrency limit when flattening a large collection.</li>
              <li>- Combine with takeUntil to stop all inner subscriptions.</li>
              <li>- Handle inner errors so merged stream continues.</li>
              <li>- Prefer mergeMap when you do not already have a higher-order observable.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Avoid mergeAll on infinite inner streams without concurrency limits.</li>
              <li>- Don't ignore inner completion; let mergeAll notify when all finish.</li>
              <li>- Avoid nesting mergeAll and mergeMap unnecessarily.</li>
              <li>- Don't forget to manage subscriptions of the higher-order source.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
