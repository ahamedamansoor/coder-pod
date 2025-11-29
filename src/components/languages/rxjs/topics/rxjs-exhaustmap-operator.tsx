'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, ArrowRight, Cpu, Layers, ShieldCheck, Sparkles, Zap, Repeat } from 'lucide-react';

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

const AnimatedExhaustMap = () => {
  const [phase, setPhase] = useState<'idle' | 'running' | 'cooldown'>('idle');
  const [log, setLog] = useState<string[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [outputs, setOutputs] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('running');
    setLog(['exhaustMap starts - incoming values ignored until inner completes']);
    setActive(null);
    setOutputs([]);

    const source = [1, 2, 3, 4];
    for (const value of source) {
      if (active === null) {
        setActive(value);
        setLog((prev) => [...prev, `inner ${value} launched`]);
        await new Promise((resolve) => setTimeout(resolve, 700));
        const emitted = value * 2;
        setOutputs((prev) => [...prev, emitted]);
        setLog((prev) => [...prev, `inner ${value} emitted ${emitted}`]);
        setActive(null);
      } else {
        setLog((prev) => [...prev, `value ${value} ignored until inner ${active} completes`]);
      }
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    setPhase('cooldown');
    setLog((prev) => [...prev, 'inner completed, new values now accepted']);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setPhase('idle');
    setLog([]);
    setOutputs([]);
    setActive(null);
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated exhaustMap()
        </CardTitle>
        <CardDescription className="text-base">
          exhaustMap ignores new values while the inner observable is active. Replay to see how latest inputs wait.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            The diagram shows how each input either starts an inner stream or gets dropped until the active inner completes.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Running...' : 'Play animation'}
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Repeat className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Idle' : phase === 'running' ? 'Running inner' : 'Cooldown'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px]">
              {active === null ? (
                <p className="text-[11px] text-muted-foreground">// waiting for new values</p>
              ) : (
                <p className="text-xs font-semibold text-emerald-600">
                  inner {active} running...
                </p>
              )}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Log
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-100 whitespace-pre-wrap overflow-y-auto">
              {log.length === 0 ? (
                <span className="text-slate-500">// events appear here</span>
              ) : (
                log.map((line, index) => (
                  <div key={`${line}-${index}`} className="text-slate-200">
                    {line}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-indigo-600" />
                Emissions
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border border-emerald-200/60 dark:border-emerald-700 text-[11px] font-mono text-slate-900 dark:text-emerald-100 flex flex-wrap gap-2">
              {outputs.length === 0 ? (
                <span className="text-[11px] text-muted-foreground">// outputs appear here</span>
              ) : (
                outputs.map((value, index) => (
                  <span
                    key={`${value}-${index}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-700"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-600" />
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
  exhaustMap((value) => ajax(\`/status?key=\${value}\`)),
)
.subscribe((result) => console.log('status', result));`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsExhaustMapOperator() {
  const highlights = useMemo(
    () => [
      {
        title: 'ignore new until inner completes',
        text: 'exhaustMap drops incoming values while the active inner observable is still running.',
      },
      {
        title: 'ideal for rate-limited sources',
        text: 'Use when you must avoid overlapping inner work, like user taps or long-running animations.',
      },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Flattening Operators"
        title="exhaustMap() - Ignore while busy"
        description="exhaustMap ignores new source emissions until the current inner observable completes."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-slate-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-slate-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why exhaustMap is useful
          </CardTitle>
          <CardDescription className="text-base">
            When you only want one inner subscription at a time, exhaustMap ensures no parallel work starts while one is running.
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
            exhaustMap anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `exhaustMap(project)` subscribes to the source and ignores new emissions while the project observable is active.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, exhaustMap, take } from 'rxjs';

fromEvent(button, 'click')
  .pipe(
    exhaustMap(() => ajax('/submit')),
    take(1),
  )
  .subscribe((result) => console.log('submitted', result));`}
          </pre>
          <SnippetOutput lines={['submitted { status }']} />
          <Alert>
            <AlertTitle>RxJS 8 focus</AlertTitle>
            <AlertDescription>
              `exhaustMap()` now belongs to the core `rxjs` package with typed project signatures and better tree-shaking.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedExhaustMap />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world exhaustMap flows
          </CardTitle>
          <CardDescription className="text-base">
            Use when you must ignore bursty events until the current handler finishes, like taps or long-running timers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Button guard</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`fromEvent(button, 'click')
  .pipe(exhaustMap(() => load()))
  .subscribe();`}
              </pre>
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Long requests</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
  .pipe(exhaustMap((value) => fetchDetail(value)))
  .subscribe((detail) => render(detail));`}
              </pre>
              <SnippetOutput lines={['render detail']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            exhaustMap() vs mergeMap()
          </CardTitle>
          <CardDescription className="text-base">
            exhaustMap ignores new emissions until the current inner observable completes, while mergeMap processes them all concurrently.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">exhaustMap()</p>
            <p className="text-xs text-muted-foreground">
              Perfect for one-at-a-time handling.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`exhaustMap((value) => fetch(value))`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">mergeMap()</p>
            <p className="text-xs text-muted-foreground">
              Runs inner streams concurrently.
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
            exhaustMap() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Use exhaustMap to ignore bursts while one inner observable finishes.</li>
              <li>- Combine with takeUntil or timeout to stop the active inner if needed.</li>
              <li>- Handle inner errors to keep the outer stream alive.</li>
              <li>- Import exhaustMap from `rxjs` for typed helpers.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>- Don't use exhaustMap when every inner result must be processed.</li>
              <li>- Avoid nesting exhaustMap without a clear stop condition.</li>
              <li>- Don't forget to cancel the inner observable on unmount when necessary.</li>
              <li>- Avoid using exhaustMap with long-running inner streams unless you want to queue nothing.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
