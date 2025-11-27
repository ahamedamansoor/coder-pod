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

const AnimatedConcatMap = () => {
  const [phase, setPhase] = useState<'idle' | 'chaining' | 'complete'>('idle');
  const [queue, setQueue] = useState<Array<{ id: number; status: 'running' | 'done'; progress: number }>>([]);
  const [log, setLog] = useState<string[]>([]);

  const run = async () => {
    if (phase === 'chaining') return;
    setPhase('chaining');
    setQueue([]);
    setLog([]);

    const durations = [450, 350, 250];

    for (let idx = 0; idx < durations.length; idx += 1) {
      const taskId = idx + 1;
      setQueue((prev) => [...prev, { id: taskId, status: 'running', progress: 0 }]);
      setLog((prev) => [...prev, `started inner ${taskId}`]);

      let progress = 0;
      while (progress < 100) {
        await new Promise((resolve) => setTimeout(resolve, durations[idx] / 5));
        progress = Math.min(progress + 20, 100);
        setQueue((prev) =>
          prev.map((entry) =>
            entry.id === taskId ? { ...entry, progress } : entry,
          ),
        );
      }

      setLog((prev) => [...prev, `inner ${taskId} emitted`]);
      setQueue((prev) =>
        prev.map((entry) => (entry.id === taskId ? { ...entry, status: 'done' } : entry)),
      );
    }

    setPhase('complete');
    setLog((prev) => [...prev, 'concatMap complete']);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setQueue([]);
    setPhase('idle');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated concatMap()
        </CardTitle>
        <CardDescription className="text-base">
          concatMap queues inner observables, running them serially. This animation resets so you can replay the queue.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button size="sm" onClick={run} disabled={phase === 'chaining'}>
          {phase === 'chaining' ? 'Running...' : 'Play concatMap animation'}
        </Button>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-600" />
                Queue
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">{phase}</Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px] space-y-2">
              {queue.length === 0 ? (
                <p className="text-xs text-muted-foreground">// queued stream info appears here</p>
              ) : (
                queue.map((entry) => (
                  <div key={entry.id} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-indigo-700 dark:text-indigo-200">
                      <span>inner-{entry.id}</span>
                      <span className={entry.status === 'done' ? 'text-emerald-600' : 'text-indigo-500'}>
                        {entry.status}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-100"
                        style={{ width: `${entry.progress}%` }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Logs
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-100 whitespace-pre-wrap">
              {log.length === 0 ? (
                <span className="text-slate-500">// logs appear here</span>
              ) : (
                log.map((line, index) => <div key={`${line}-${index}`}>{line}</div>)
              )}
            </div>
          </div>
        </div>
        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
.pipe(
  concatMap((value) => fetchPiece(value)),
)
.subscribe((response) => console.log('result', response));`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsConcatMapOperator() {
  const highlights = useMemo(
    () => [
      { title: 'Serial flattening', text: 'concatMap waits for each inner observable to complete before starting the next.' },
      { title: 'Key for ordering', text: 'Use concatMap when order matters or when inner tasks must run sequentially.' },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Flattening Operators"
        title="concatMap() - Queue inner streams"
        description="concatMap queues each inner observable and subscribes sequentially, ensuring ordered, non-overlapping results."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-slate-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-slate-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            When concatMap shines
          </CardTitle>
          <CardDescription className="text-base">
            concatMap is ideal for serial tasks (uploads, animations, sequential API calls) and preserves emitted order.
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
            concatMap anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `concatMap(project)` queues inner observables so one runs at a time; it never drops emissions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, concatMap, take } from 'rxjs';

fromEvent(button, 'click')
  .pipe(
    concatMap(() => ajax('/submit')),
    take(3),
  )
  .subscribe((result) => console.log('submitted', result));`}
          </pre>
          <SnippetOutput lines={['submitted { status }']} />
          <Alert>
            <AlertTitle>RxJS 8 note</AlertTitle>
            <AlertDescription>
              `concatMap()` now ships from the root package with typed inner values so TypeScript tracks the shape of each inner result.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedConcatMap />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world concatMap flows
          </CardTitle>
          <CardDescription className="text-base">
            Manage sequential uploads, animations, and API calls while keeping the outer stream deterministic.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">File upload queue</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`files$
  .pipe(concatMap(uploadFile))
  .subscribe((status) => console.log(status));`}
              </pre>
              <SnippetOutput lines={['status uploaded']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Animation sequence</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`steps$
  .pipe(concatMap((step) => animate(step)))
  .subscribe();`}
              </pre>
              <SnippetOutput lines={['animation step 1', 'animation step 2']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            concatMap() vs mergeMap()
          </CardTitle>
          <CardDescription className="text-base">
            concatMap queues while mergeMap runs concurrently; pick based on ordering needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">concatMap()</p>
            <p className="text-xs text-muted-foreground">
              Keeps inner observables sequential.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`concatMap((value) => fetch(value))`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mergeMap()</p>
            <p className="text-xs text-muted-foreground">
              Handles inner streams concurrently.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`mergeMap((value) => fetch(value))`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            concatMap() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Use concatMap when ordering matters and you cannot drop emissions.</li>
              <li>- Combine with takeUntil to control long-running inner streams.</li>
              <li>- Handle inner errors so queued tasks keep flowing.</li>
              <li>- Import concatMap from `rxjs` for typed helpers.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Don't use concatMap when concurrency is required; use mergeMap or switchMap.</li>
              <li>- Avoid nesting concatMaps; flatten with mergeMap when serial ordering isn't needed.</li>
              <li>- Don't assume inner results arrive immediately; respect asynchronous completion.</li>
              <li>- Avoid duplicating subscription logic inside project functions.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
