'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, ArrowRight, Cpu, Layers, ShieldCheck, Sparkles, Zap, RotateCw } from 'lucide-react';

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

const AnimatedSwitchMap = () => {
  const [phase, setPhase] = useState<'idle' | 'pending' | 'switched'>('idle');
  const [log, setLog] = useState<string[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [history, setHistory] = useState<Array<{ id: number; status: 'running' | 'cancelled' | 'done' }>>([]);
  const [outputs, setOutputs] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('pending');
    setLog(['switchMap ready - newest inner wins', 'Each value maps to a new stream']);
    setHistory([]);
    setOutputs([]);
    setActive(null);

    const source = [1, 2, 3];

    for (const value of source) {
      if (active !== null) {
        setHistory((prev) =>
          prev.map((entry) =>
            entry.id === active && entry.status === 'running'
              ? { ...entry, status: 'cancelled' }
              : entry,
          ),
        );
        setLog((prev) => [...prev, `cancelled inner ${active}`]);
      }

      setActive(value);
      setHistory((prev) => [...prev, { id: value, status: 'running' }]);
      setLog((prev) => [...prev, `source emits ${value}`]);

      await new Promise((resolve) => setTimeout(resolve, 400));
      const emitted = value * 100;
      setOutputs((prev) => [...prev, emitted]);
      setLog((prev) => [...prev, `inner ${value} emits ${emitted}`]);
      setHistory((prev) =>
        prev.map((entry) => (entry.id === value ? { ...entry, status: 'done' } : entry)),
      );
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    setPhase('switched');
    setLog((prev) => [...prev, 'switchMap complete - latest stream results only']);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setHistory([]);
    setOutputs([]);
    setActive(null);
    setLog([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated switchMap()
        </CardTitle>
        <CardDescription className="text-base">
          switchMap cancels prior inner streams; this animation shows the newest stream replacing the previous ones.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            Each new input switches to a fresh inner observable and drops the previous emission automatically. Replay resets the demo.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play animation'}
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Idle' : phase === 'pending' ? 'Pending' : 'Switched'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700 min-h-[120px] space-y-2">
              {history.length === 0 ? (
                <span className="text-[11px] text-muted-foreground">// timeline populates here</span>
              ) : (
                history.slice(-4).map((entry) => (
                  <div
                    key={`${entry.id}-${entry.status}`}
                    className="flex items-center justify-between rounded-full bg-white/80 dark:bg-slate-900/70 px-3 py-2 text-[11px] font-semibold border shadow-sm"
                  >
                    <span>inner {entry.id}</span>
                    <span
                      className={
                        entry.status === 'done'
                          ? 'text-emerald-600'
                          : entry.status === 'cancelled'
                          ? 'text-amber-500'
                          : 'text-indigo-600'
                      }
                    >
                      {entry.status}
                    </span>
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
              {log.length === 0 ? (
                <span className="text-slate-500">// logs show inner stream starts</span>
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
                Output stream
              </h4>
            </div>
            <div className="min-h-[120px] p-3 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg border border-emerald-200/60 dark:border-emerald-700 text-[11px] font-mono text-slate-900 dark:text-emerald-100 flex flex-wrap gap-2">
              {outputs.length === 0 ? (
                <span className="text-[11px] text-muted-foreground">// merged values appear here</span>
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
  switchMap((value) => fetchData(value)),
)
.subscribe((response) => console.log('response', response));`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsSwitchMapOperator() {
  const topics = useMemo(
    () => [
      {
        title: 'switchMap vs mergeMap',
        text: 'switchMap drops the previous inner stream; mergeMap keeps them all paged.',
      },
      {
        title: 'Flattening on the fly',
        text: 'switchMap keeps your outer observable flat while handling inner cancellations cleanly.',
      },
    ],
    [],
  );

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Flattening Operators"
        title="switchMap() - Flatten and cancel"
        description="switchMap cancels previous inner observables when a new value arrives, keeping only the newest stream."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why switchMap matters
          </CardTitle>
          <CardDescription className="text-base">
            Cancel stale streams when a new value comes in, perfect for typeaheads, live filters, and rapid user input.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{topic.title}</p>
              <p className="text-muted-foreground text-sm">{topic.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            switchMap anatomy
          </CardTitle>
          <CardDescription className="text-base">
            <code>switchMap(project, concurrent = 1)</code> cancels prior inner subscriptions before subscribing to a new one.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { fromEvent, switchMap, take } from 'rxjs';

fromEvent(input, 'input')
  .pipe(
    switchMap((event) => ajax(\`/search?q=\$\{event.target.value\}\`)),
    take(1),
  )
  .subscribe((result) => render(result));`}
          </pre>
          <SnippetOutput lines={['render result']} />
          <Alert>
            <AlertTitle>RxJS 8 focus</AlertTitle>
            <AlertDescription>
              <code>switchMap()</code> exports from <code>rxjs</code> with typed project signatures. Pass a concurrency argument when you want to limit parallel inner streams.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedSwitchMap />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world switchMap cases
          </CardTitle>
          <CardDescription className="text-base">
            Use switchMap for live search, cancellations, and sequential API calls where only the latest matters.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Typeahead</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`fromEvent(input, 'input')
  .pipe(
    map((event) => event.target.value),
    switchMap((term) => ajax(\`/search?q=\$\{term\}\`)),
  )`}
              </pre>
              <SnippetOutput lines={['search result']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Canceling fetches</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`interval(1000)
  .pipe(
    switchMap(() => ajax('/status')),
  )`}
              </pre>
              <SnippetOutput lines={['latest status']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            switchMap() vs concatMap()
          </CardTitle>
          <CardDescription className="text-base">
            switchMap cancels previous inner streams while concatMap queues them. Choose based on concurrency needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">switchMap()</p>
            <p className="text-xs text-muted-foreground">
              Cancel in-flight requests when a new value arrives.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`switchMap((value) => fetch(value))`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">concatMap()</p>
            <p className="text-xs text-muted-foreground">
              Queue inner streams and run one at a time.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`concatMap((value) => fetch(value))`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            switchMap() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Use switchMap for cancelable inner tasks such as live typing.</li>
              <li>Provide a predicate or takeUntil to control cancellations.</li>
              <li>Combine switchMap with retry when handling transient errors.</li>
              <li>Import switchMap from <code>rxjs</code> to keep types tight.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don\'t use switchMap when you need every inner result delivery.</li>
              <li>X Avoid running infinite inner observables; they block new switches.</li>
              <li>X Don\'t place heavy synchronous work inside switchMap; push to the inner observable.</li>
              <li>X Avoid forgetting to cancel the outer stream if necessary when the component unmounts.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
