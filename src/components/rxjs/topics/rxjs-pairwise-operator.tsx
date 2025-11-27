'use client';

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/generic-page-header';
import { AlertTriangle, Clock8, Cpu, Layers, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';

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

const AnimatedPairwise = () => {
  const [phase, setPhase] = useState<'idle' | 'pairing' | 'complete'>('idle');
  const [pairs, setPairs] = useState<Array<[number, number]>>([]);
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const source = [5, 10, 15, 20];

  const runAnimation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setPhase('pairing');
    setPairs([]);
    setLogLines([]);
    for (let i = 1; i < source.length; i += 1) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setPairs((prev) => [...prev, [source[i - 1], source[i]]]);
      setLogLines((prev) => [...prev, `pair -> (${source[i - 1]}, ${source[i]})`]);
    }
    setPhase('complete');
    setLogLines((prev) => [...prev, 'complete']);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setPairs([]);
    setLogLines([]);
    setPhase('idle');
    setIsPlaying(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          Animated pairwise()
        </CardTitle>
        <CardDescription className="text-base">
          pairwise() emits overlapping pairs. Play to see the latest pair animate and reset after completion.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground flex-1">
            Each new value pairs with the previous one; we animate the latest pair while logging the steps.
          </p>
          <Button size="sm" disabled={isPlaying} onClick={runAnimation}>
            {isPlaying ? 'Replaying...' : 'Play animation'}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Clock8 className="w-4 h-4 text-indigo-600" />
                Phase
              </h4>
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 text-xs">
                {phase === 'idle' ? 'Idle' : phase === 'pairing' ? 'Pairing' : 'Complete'}
              </Badge>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-lg border border-indigo-200/60 dark:border-indigo-700">
              {pairs.length === 0 ? (
                <p className="text-[11px] text-muted-foreground">// pairs display here</p>
              ) : (
                pairs.map((pair, index) => (
                  <div key={`${pair[0]}-${pair[1]}-${index}`} className="flex items-center justify-between gap-2 text-[13px] font-semibold">
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                    <span>{`${pair[0]}, ${pair[1]}`}</span>
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
                <span className="text-slate-500">// see logs for input pairs</span>
              ) : (
                logLines.map((line, index) => <div key={index}>{line}</div>)
              )}
            </div>
          </div>
        </div>

        <pre className="bg-slate-100 dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$
  .pipe(pairwise())
  .subscribe((pair) => console.log('pair', pair));`}
        </pre>
      </CardContent>
    </Card>
  );
};

export default function RxjsPairwiseOperator() {
  const transformations = useMemo(
    () => [
      { name: 'pairwise', description: 'Pairs consecutive emissions' },
      { name: 'bufferCount', description: 'Groups values into fixed-size arrays' },
    ],
    [],
  );
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="RxJS - Transformation Operators"
        title="pairwise() - Access consecutive values"
        description="pairwise() emits the current and previous value as a tuple, useful for diffing or change detection."
        colorTheme="indigo"
      />

      <Card className="bg-gradient-to-br from-indigo-50/70 via-blue-50/70 to-cyan-50/60 dark:from-indigo-950/20 dark:via-blue-950/20 dark:to-cyan-950/10 border border-indigo-200/40 dark:border-indigo-900/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-indigo-600" />
            Why pairwise() matters
          </CardTitle>
          <CardDescription className="text-base">
            Every emission is paired with its predecessor, making it easy to compare diffs or compute deltas.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          {transformations.map((item) => (
            <div key={item.name} className="rounded-xl border bg-white/90 dark:bg-slate-900/80 p-4 space-y-2">
              <p className="font-semibold">{item.name}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-indigo-600" />
            pairwise() anatomy
          </CardTitle>
          <CardDescription className="text-base">
            `pairwise()` emits `[previous, current]`. The first emission waits for two results, so consumers always get context.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`import { of, pairwise } from 'rxjs';

of(10, 20, 30)
  .pipe(pairwise())
  .subscribe(([prev, curr]) => console.log('prev', prev, 'curr', curr));

// Output:
// prev 10 curr 20
// prev 20 curr 30`}
          </pre>
          <SnippetOutput lines={['prev 10 curr 20', 'prev 20 curr 30']} />
          <Alert>
            <AlertTitle>RxJS 8 reminder</AlertTitle>
            <AlertDescription>
              `pairwise()` ships from the root `rxjs` bundle, and TypeScript understands the tuple output type.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <AnimatedPairwise />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            Real-world pairwise() uses
          </CardTitle>
          <CardDescription className="text-base">
            Compare sequential events such as position deltas, slider drags, or stream diffs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Mouse delta</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`fromEvent(document, 'mousemove')
  .pipe(pairwise())
  .subscribe(([a, b]) => console.log(b.clientX - a.clientX));`}
              </pre>
              <SnippetOutput lines={['delta 5', 'delta 12']} />
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/20 p-4 space-y-3">
              <h4 className="font-semibold text-sm">Validation diff</h4>
              <pre className="bg-white dark:bg-slate-900 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`formChanges$
  .pipe(pairwise())
  .subscribe(([prev, curr]) => compare(prev, curr));`}
              </pre>
              <SnippetOutput lines={['compare prev/curr']} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-indigo-600" />
            pairwise() vs bufferCount(2)
          </CardTitle>
          <CardDescription className="text-base">
            Both emit pairs, but bufferCount returns non-overlapping arrays while pairwise emits sliding tuples.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">pairwise()</p>
            <p className="text-xs text-muted-foreground">
              Overlapping consecutive pairs.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(pairwise());`}
            </pre>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-2">
            <p className="font-semibold">bufferCount(2)</p>
            <p className="text-xs text-muted-foreground">
              Non-overlapping arrays.
            </p>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 text-xs font-mono whitespace-pre-wrap border">
{`source$.pipe(bufferCount(2));`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/15 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            pairwise() best practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" /> Do this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>* Use pairwise for change detection when you only need the previous and current value.</li>
              <li>* Combine with map to compute deltas or differences.</li>
              <li>* Handle the first emission carefully since pairwise waits for two values.</li>
              <li>* Import pairwise from `rxjs` for typed tuple output.</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white dark:bg-slate-900 p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-600">
              <AlertTriangle className="w-5 h-5" /> Avoid this
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>X Don"t use pairwise on empty streams; it never emits until two values arrive.</li>
              <li>X Avoid heavy side effects inside pairwise; keep it pure and use downstream tap.</li>
              <li>X Don"t assume the tuples are unique; they are overlapping and can repeat values.</li>
              <li>X Avoid pairwise when you only care about the latest value; use map or sample.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
