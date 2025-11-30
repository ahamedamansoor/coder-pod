'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Cpu, Layers, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';

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

const AnimatedMergeMap = () => {
  const [phase, setPhase] = useState<'idle' | 'flattening' | 'completed'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [activations, setActivations] = useState<Array<{ id: number; status: 'running' | 'done'; progress: number }>>([]);
  const [outputValues, setOutputValues] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('flattening');
    setLogs(['Starting mergeMap', 'Each source launches inner streams concurrently']);
    setActivations([]);
    setOutputValues([]);

    const input = [1, 2, 3, 4];
    const concurrency = 2;
    const activeTasks: Promise<void>[] = [];

    const startInner = async (value: number) => {
      setActivations((prev) => [...prev, { id: value, status: 'running', progress: 0 }]);
      setLogs((prev) => [...prev, `Source emits ${value}`]);

      for (let step = 0; step < 3; step += 1) {
        await new Promise((resolve) => setTimeout(resolve, 300 + step * 100));
        setActivations((prev) =>
          prev.map((entry) =>
            entry.id === value
              ? { ...entry, progress: Math.min(((step + 1) / 3) * 100, 100) }
              : entry,
          ),
        );
        const emittedValue = value * 10 + step;
        setOutputValues((prev) => [...prev, emittedValue]);
        setLogs((prev) => [...prev, `Inner ${value} emits ${emittedValue}`]);
      }

      setActivations((prev) =>
        prev.map((entry) => (entry.id === value ? { ...entry, status: 'done', progress: 100 } : entry)),
      );
      setLogs((prev) => [...prev, `Inner ${value} completed`]);
    };

    const enqueue = async () => {
      while (input.length > 0 || activeTasks.length > 0) {
        while (input.length > 0 && activeTasks.length < concurrency) {
          const next = input.shift() as number;
          const task = startInner(next);
          activeTasks.push(task);
          task.finally(() => {
            const idx = activeTasks.indexOf(task);
            if (idx > -1) activeTasks.splice(idx, 1);
          });
        }
        if (activeTasks.length) {
          await Promise.race(activeTasks);
        }
      }
    };

    await enqueue();
    setPhase('completed');
    setLogs((prev) => [...prev, 'All inner streams resolved']);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setActivations([]);
    setOutputValues([]);
    setLogs([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated mergeMap() - Concurrent Flattening
        </CardTitle>
        <CardDescription className="text-base">
          Watch mergeMap spawn and manage multiple inner streams concurrently-each source value creates its own inner observable that emits multiple values. Animation resets for replay.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            mergeMap subscribes to all inner observables simultaneously, merging their emissions. Unlike switchMap, it keeps all streams alive.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Playing...' : 'Play Animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Phase & Status */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Idle' : phase === 'flattening' ? 'Processing' : 'Completed'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[180px]">
              <p className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Active Inner Streams</p>
              <div className="flex flex-col gap-2">
                {activations.length === 0 ? (
                  <span className="text-[11px] text-muted-foreground">// No active streams</span>
                ) : (
                  activations.map((activation) => (
                    <div key={activation.id} className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-semibold">
                        <span>Stream {activation.id}</span>
                        <span className={
                          activation.status === 'running' 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : 'text-slate-500'
                        }>
                          {activation.status === 'running' ? '* Active' : '[ok] Done'}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${
                            activation.status === 'done' 
                              ? 'bg-emerald-500' 
                              : 'bg-indigo-500'
                          }`}
                          style={{ width: `${activation.progress}%` }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Observer Log */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Event Log
              </h4>
            </div>
            <div className="min-h-[180px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto max-h-[180px]">
              {logs.length === 0 ? (
                <span className="text-slate-500">// Events appear here...</span>
              ) : (
                logs.map((line, index) => (
                  <div 
                    key={index}
                    className={`${
                      line.includes('Source') ? 'text-cyan-400' :
                      line.includes('->') ? 'text-purple-400' :
                      line.includes('emits:') ? 'text-emerald-400' :
                      line.includes('complete') ? 'text-green-400' :
                      'text-slate-300'
                    }`}
                  >
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Output Values */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-600" />
                Output Stream
              </h4>
            </div>
            <div className="min-h-[180px] p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border border-emerald-200/60 dark:border-emerald-700">
              <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Merged Emissions</p>
              <div className="flex flex-wrap gap-2">
                {outputValues.length === 0 ? (
                  <span className="text-[11px] text-muted-foreground">// Merged output here</span>
                ) : (
                  outputValues.map((value, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 dark:bg-emerald-600 text-white text-xs font-bold shadow-sm animate-in fade-in zoom-in duration-300"
                    >
                      {value}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
  .pipe(
    mergeMap((value) => 
      // Each value spawns an inner observable
      of(value * 10, value * 10 + 1)
    )
  )
  .subscribe((result) => console.log(result));
// Output: 10, 11, 20, 21, 30, 31`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsMergeMapOperator() {
  const topics = useMemo(
    () => [
      { title: 'mergeMap/flatMap alias', description: 'mergeMap is the new canonical name; flatMap is still supported.' },
      { title: 'Concurrency control', description: 'Pass a concurrency number to limit active inner streams.' },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Flattening Operators"
        title="mergeMap() (flatMap) - Merge and keep order"
        description="Use mergeMap to subscribe to every inner observable while keeping the pipeline flat."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why mergeMap is flattening magic
          </CardTitle>
          <CardDescription className="text-base">
            mergeMap subscribes to inner Observables, merges their output, and keeps the outer stream alive until every inner completes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{topic.title}</p>
              <p className="text-muted-foreground text-sm">{topic.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            mergeMap anatomy
          </CardTitle>
          <CardDescription className="text-base">
            <code>mergeMap(project, concurrent)</code> - project returns an inner observable; optionally limit concurrency to throttle inner subscriptions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, mergeMap, switchMap, take } from 'rxjs';

fromEvent(button, 'click')
  .pipe(
    mergeMap((event) => fetchData(event)),
    take(5),
  )
  .subscribe((data) => render(data));`}
          </pre>
          <SnippetOutput lines={['render data1', 'render data2']} />
          <Alert>
            <AlertTitle>RxJS 8 best practice</AlertTitle>
            <AlertDescription>
              <code>mergeMap()</code> is now exported from <code>rxjs</code> and includes typed inner value inference plus a concurrency parameter.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedMergeMap />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world mergeMap flows
          </CardTitle>
          <CardDescription className="text-base">
            Useful when each value spawns an asynchronous task such as HTTP calls, animations, or file uploads.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Sequential uploads</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`files$
  .pipe(
    mergeMap((file) => upload(file), 2),
  )
  .subscribe((status) => console.log(status));`}
              </pre>
              <SnippetOutput lines={['status uploaded']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Realtime chat</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`newMessages$
  .pipe(
    mergeMap((message) => saveMessage(message)),
  )
  .subscribe();`}
              </pre>
              <SnippetOutput lines={['saved message']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            mergeMap() vs switchMap() vs concatMap()
          </CardTitle>
          <CardDescription className="text-base">
            Choose mergeMap for parallel inner streams, switchMap to drop previous ones, and concatMap to queue them.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'mergeMap()',
              description: 'Keeps every inner observable alive - good for concurrent tasks.',
              example: `mergeMap((value) => fetch(value))`,
            },
            {
              title: 'switchMap()',
              description: 'Cancels previous inner observables upon new emission.',
              example: `switchMap((value) => fetch(value))`,
            },
            {
              title: 'concatMap()',
              description: 'Queues inner observables and runs one at a time.',
              example: `concatMap((value) => fetch(value))`,
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
              <p className="font-semibold">{card.title}</p>
              <p className="text-xs text-muted-foreground">{card.description}</p>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{card.example}
              </pre>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            mergeMap() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>[ok] Limit concurrency when inner streams are expensive.</li>
              <li>[ok] Handle errors inside inner observables to keep the outer stream alive.</li>
              <li>[ok] Use mergeMap when every inner result is important.</li>
              <li>[ok] Combine with tap before mergeMap to observe values without flattening.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Do not use mergeMap when canceling previous inner streams is required; prefer switchMap.</li>
              <li>X Avoid unbounded mergeMap on infinite sources without concurrency control.</li>
              <li>X Don&apos;t forget to cleanup inner subscriptions when outer completes unless using take.</li>
              <li>X Avoid large nested mergeMaps; break logic into smaller operators.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
